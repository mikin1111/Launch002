/**
 * RippleGrid - 网格涟漪动效背景组件
 * 基于 Canvas 实现，无需额外依赖，仅需 React
 */

const { useRef, useEffect, useCallback } = React;

function RippleGrid({
  enableRainbow = false,
  gridColor = '#a7f757',
  rippleIntensity = 0.01,
  gridSize = 17,
  gridThickness = 15,
  fadeDistance = 1.7,
  vignetteStrength = 2,
  glowIntensity = 0.25,
  opacity = 0.45,
  gridRotation = 0,
  mouseInteraction = true,
  mouseInteractionRadius = 0.8,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const ripplesRef = useRef([]);
  const animationRef = useRef(null);

  const lastRippleRef = useRef(0);
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current || !mouseInteraction) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseRef.current = { x, y };
    const now = performance.now();
    if (now - lastRippleRef.current > 80) {
      lastRippleRef.current = now;
      ripplesRef.current.push({ x, y, t: 0, maxT: 1.5 });
    }
  }, [mouseInteraction]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    };

    const parseColor = (hex) => {
      const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [0, 255, 0];
    };

    const hslToRgb = (h, s, l) => {
      h = h % 360 / 360;
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      return [
        Math.round(hue2rgb(p, q, h + 1/3) * 255),
        Math.round(hue2rgb(p, q, h) * 255),
        Math.round(hue2rgb(p, q, h - 1/3) * 255),
      ];
    };

    const draw = () => {
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      const time = performance.now() * 0.001;
      const cx = width / 2;
      const cy = height / 2;
      const maxDim = Math.max(width, height);

      // 绘制网格与涟漪
      const cellPx = maxDim / gridSize;
      const halfCells = Math.ceil(maxDim / cellPx) + 2;

      for (let i = -halfCells; i <= halfCells; i++) {
        for (let j = -halfCells; j <= halfCells; j++) {
          const gx = cx + (i - 0.5) * cellPx;
          const gy = cy + (j - 0.5) * cellPx;

          // 旋转
          const cos = Math.cos((gridRotation * Math.PI) / 180);
          const sin = Math.sin((gridRotation * Math.PI) / 180);
          const dx = (gx - cx) * cos - (gy - cy) * sin + cx;
          const dy = (gx - cx) * sin + (gy - cy) * cos + cy;

          let intensity = 1;

          // 鼠标涟漪
          if (mouseInteraction) {
            const mx = mouseRef.current.x * width;
            const my = mouseRef.current.y * height;
            const dist = Math.sqrt((dx - mx) ** 2 + (dy - my) ** 2) / maxDim;
            const radius = mouseInteractionRadius * 0.5;
            if (dist < radius) {
              const falloff = 1 - (dist / radius) ** 2;
              intensity += rippleIntensity * 50 * falloff;
            }
            ripplesRef.current = ripplesRef.current.filter((r) => {
              r.t += 0.016;
              if (r.t > r.maxT) return false;
              const rx = r.x * width;
              const ry = r.y * height;
              const rdist = Math.sqrt((dx - rx) ** 2 + (dy - ry) ** 2) / maxDim;
              const wave = Math.sin(r.t * Math.PI) * (1 - rdist / fadeDistance);
              if (wave > 0) intensity += rippleIntensity * 80 * wave;
              return true;
            });
          }

          // 缓慢呼吸
          intensity += Math.sin(time * 0.5 + i * 0.1 + j * 0.1) * rippleIntensity * 10;

          let r, g, b;
          if (enableRainbow) {
            const hue = (time * 30 + i * 2 + j * 2) % 360;
            [r, g, b] = hslToRgb(hue, 0.7, 0.6);
          } else {
            [r, g, b] = parseColor(gridColor);
          }

          const glow = 1 + glowIntensity * intensity;
          r = Math.min(255, r * glow);
          g = Math.min(255, g * glow);
          b = Math.min(255, b * glow);

          ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, opacity * intensity * 0.15)})`;
          ctx.fillRect(dx - gridThickness / 2, dy - gridThickness / 2, gridThickness, gridThickness);
        }
      }

      // 网格线
      if (enableRainbow) {
        ctx.strokeStyle = `hsla(${(time * 30) % 360}, 70%, 60%, ${opacity * 0.6})`;
      } else {
        const [r, g, b] = parseColor(gridColor);
        ctx.strokeStyle = `rgba(${r},${g},${b},${opacity * 0.6})`;
      }
      ctx.lineWidth = Math.max(1, gridThickness * 0.3);

      const cos = Math.cos((gridRotation * Math.PI) / 180);
      const sin = Math.sin((gridRotation * Math.PI) / 180);
      const rotate = (px, py) => ({
        x: cx + (px - cx) * cos - (py - cy) * sin,
        y: cy + (px - cx) * sin + (py - cy) * cos,
      });
      for (let i = -halfCells; i <= halfCells; i++) {
        const gx = cx + (i - 0.5) * cellPx;
        const p1 = rotate(gx, cy - maxDim);
        const p2 = rotate(gx, cy + maxDim);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
      for (let j = -halfCells; j <= halfCells; j++) {
        const gy = cy + (j - 0.5) * cellPx;
        const p1 = rotate(cx - maxDim, gy);
        const p2 = rotate(cx + maxDim, gy);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      // 暗角
      if (vignetteStrength > 0) {
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxDim * 0.8);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, `rgba(0,0,0,${vignetteStrength * 0.4})`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    if (mouseInteraction && container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (mouseInteraction && container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [
    enableRainbow, gridColor, rippleIntensity, gridSize, gridThickness,
    fadeDistance, vignetteStrength, glowIntensity, opacity, gridRotation,
    mouseInteraction, mouseInteractionRadius, handleMouseMove,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </div>
  );
}

// 支持 CommonJS 和浏览器全局
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RippleGrid;
} else if (typeof window !== 'undefined') {
  window.RippleGrid = RippleGrid;
}
