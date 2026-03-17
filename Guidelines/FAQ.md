# FAQ Accordion Specification

> Gate.io Design System · FAQ Component (Accordion / CollapseV5Web)
>
> **Figma 设计稿：** [CollapseV5Web](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7778-80294)（Web 节点 `7778:80294`）、[CollapseV5H5](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7778-80736)（H5 节点 `7778:80736`）
>
> **Related files**:
> - Demo: `demo/faq.html`
> - 规范：`Guidelines/FAQ.md`
> - 颜色：`Guidelines/Color.md`，见 [Color.html](../demo/Color.html)
> - 字体：`Guidelines/Font.md`
> - 展开/收起图标：`Guidelines/Icon.md`（CEX_chevron_down / CEX_chevron_up）
> - More Details：`Guidelines/Button.md` §10 Text Button 组件

---

## 1. Overview

FAQ accordion displays frequently asked questions with:
- **Expand behavior**: Multiple items can be expanded at once (configurable via `allowMultiple`)
- **Light/Dark theme** support
- **RTL layout** (e.g. Arabic)
- **Font**: Switzer

**Structure** (from top to bottom):
- Module title "FAQ" (size-specific styling)
- Collapsible question items (Medium has dividers; Large/H5 have no dividers)
- Question title + chevron icon (^ expanded / v collapsed)
- Answer content (smaller font, multi-line)
- "More Details" link at bottom (centered, underlined, after all items)

---

## 2. Size Specifications

### 2.1 Large (Web) — Figma CollapseV5Web Large-24px

| 属性 | 规格 |
|------|------|
| 内容宽度 | max-width 1200px |
| 模块标题 | H2 600 40px（Switzer Semibold），行高 1.3，下间距 40px |
| 问题标题 | H7 600 24px（Switzer Semibold），行高 1.3 |
| 正文 | BM1 400 16px（Switzer Regular），行高 1.5 |
| 触发器 | padding-block 16px，gap 16px |
| 项间距 | 24px |
| 标题与正文间距 | 8px |
| 正文下间距 | 0 |
| More Details | B3 500 16px（Switzer Medium），下划线，上间距 40px |
| 箭头图标 | 24×24px（CEX_chevron_down / CEX_chevron_up，见 [Icon.md](Icon.md)） |

### 2.2 Medium (Web) — Figma CollapseV5Web Medium-16px

| 属性 | 规格 |
|------|------|
| 内容宽度 | max-width 588px |
| 模块标题 | H4 600 32px（Switzer Semibold），行高 1.3，下间距 24px |
| 问题标题 | B3 500 16px（Switzer Medium），行高 1.3 |
| 正文 | BM2 400 14px（Switzer Regular），行高 1.5 |
| 触发器 | padding-block 16px，gap 16px，展开后移除标题下 padding |
| 分割线 | 有（`--line-divider`，1px solid） |
| 标题与正文间距 | 12px |
| 正文下间距 | 0 |
| More Details | B3 500 16px，下划线，上间距 24px |
| 箭头图标 | 16×16px（CEX_chevron_down / CEX_chevron_up） |

### 2.3 H5 — Figma CollapseV5H5（节点 7778:80736）

| 属性 | 规格 |
|------|------|
| 容器宽度 | 375px |
| 有效内容区 | 343px（padding-inline 16px） |
| 模块标题 | H2 600 28px（Switzer Semibold），行高 1.3，下间距 16px |
| 问题标题 | H7 600 16px（Switzer Semibold），行高 1.3 |
| 正文 | BM1 400 14px（Switzer Regular），行高 1.5 |
| 标题与正文间距 | 12px |
| 正文下间距 | 0 |
| 项间距 | 16px |
| More Details | B7 500 14px（Switzer Medium），下划线，上间距 24px |
| 箭头图标 | 16×16px（CEX_chevron_down / CEX_chevron_up） |

---

## 3. States

- **Collapse**: Collapsed state, chevron down (v)
- **Expand**: Expanded state, chevron up (^)

---

## 4. Animation

- **Easing**: Ease out `cubic-bezier(0, 0, 0.2, 1)`
- **Expand/Collapse**: `max-height` transition 0.35s

---

## 5. Color Tokens (Color V5.1)

| Purpose | CSS Variable | Description |
|---------|--------------|-------------|
| Title text | `--text-primary` | Question title |
| Body/Answer | `--text-secondary` | Answer content |
| Link | `--text-primary` | "More Details" link |
| Border | `--line-divider` | Dividers (Medium only) |

---

## 6. Usage

### React

```tsx
import { FAQ } from '@/components/FAQ';

<FAQ
  items={[
    {
      id: '1',
      question: 'This is a collapse title text',
      answer: 'Gate.io is a crypto exchange that supports...'
    }
  ]}
  moreDetails={{ text: 'More Details', href: '#' }}
  size="large"
  dir="ltr"
  allowMultiple={true}
/>
```

**Props**:
- `items`: FAQ 列表
- `title`: 可选，Large/Medium/H5 默认显示 "FAQ"
- `size`: `'large' | 'medium' | 'h5'`
- `allowMultiple`: 是否允许多项同时展开，默认 `true`
- `dir`: `'ltr' | 'rtl' | 'auto'`
- `moreDetails`: `{ text, href }` 底部链接

### Static HTML

See `demo/faq.html` for HTML structure and `initAccordion()` script.

### Demo 结构（与 HTML 一致）

| 模块 | 内容 |
|------|------|
| 控制项 | Theme（Light/Dark）、Size（Large/Medium/H5） |
| LTR · English | 模块标题 FAQ，5 个可折叠项，More Details 链接 |
| RTL · Arabic | 1 个阿拉伯语项，More Details 链接 |

---

## 7. Version History

| Version | Date | Notes |
|---------|------|-------|
| 0.1 | 2025-03-12 | Initial spec: Large/Medium, RTL, theme support |
| 0.2 | 2025-03-13 | English copy, 16px title, structure aligned with design |
| 0.3 | 2025-03-13 | More Details link at bottom (centered, underlined) |
| 0.4 | 2025-03-16 | H5 size, Medium Figma 68-19485, Large/Medium/H5 module title "FAQ", allowMultiple, Switzer font, dividers for Medium only |
| 0.5 | 2025-03-16 | Figma CollapseV5Web 7778:80294：Large 40px 标题、24px 问题、24px 图标；Medium 32px 标题、16px 问题、16px 图标；字阶 H2/H4/H7/B3/BM1/BM2 |
| 0.6 | 2025-03-16 | Figma CollapseV5H5 7778:80736：H5 端 28px 标题、16px Semibold 问题、14px 正文、16px 图标、14px More Details |
