# RippleGrid 组件

网格涟漪动效背景组件，适用于 Hero 区域或 CTA 区块的背景装饰。

## 依赖

**无需安装任何第三方依赖。** 本组件基于 Canvas 实现，仅需：

- React 18+（项目中已通过 CDN 引入）

## 使用方式

### 在 HTML 中（CDN 模式）

1. 确保已引入 React、ReactDOM 和 Babel：

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

2. 引入 RippleGrid 组件：

```html
<script src="components/RippleGrid.jsx" type="text/babel"></script>
```

3. 在 JSX 中使用：

```jsx
<div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
  <RippleGrid
    enableRainbow={false}
    gridColor="#a7f757"
    rippleIntensity={0.01}
    gridSize={17}
    gridThickness={15}
    fadeDistance={1.7}
    vignetteStrength={2}
    glowIntensity={0.25}
    opacity={0.45}
    gridRotation={0}
    mouseInteraction
    mouseInteractionRadius={0.8}
  />
</div>
```

### 本地演示

打开 `demo/ripple-grid.html` 查看效果。若直接双击打开可能因 CORS 无法加载外部脚本，建议使用本地服务器：

```bash
npx serve .
# 或
python -m http.server 8000
```

然后访问 `http://localhost:3000/demo/ripple-grid.html`（端口以实际为准）。

## Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `enableRainbow` | boolean | false | 是否启用彩虹色模式 |
| `gridColor` | string | '#a7f757' | 网格颜色（十六进制） |
| `rippleIntensity` | number | 0.01 | 涟漪强度 |
| `gridSize` | number | 17 | 网格密度 |
| `gridThickness` | number | 15 | 网格线粗细 |
| `fadeDistance` | number | 1.7 | 涟漪衰减距离 |
| `vignetteStrength` | number | 2 | 暗角强度 |
| `glowIntensity` | number | 0.25 | 发光强度 |
| `opacity` | number | 0.45 | 整体透明度 |
| `gridRotation` | number | 0 | 网格旋转角度（度） |
| `mouseInteraction` | boolean | true | 是否响应鼠标 |
| `mouseInteractionRadius` | number | 0.8 | 鼠标交互半径 |
| `className` | string | '' | 容器 class |
| `style` | object | {} | 容器内联样式 |
