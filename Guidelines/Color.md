# Gate APP 颜色 Token 规范

> 本文档定义 Gate APP 的颜色设计 Token（Color V5.1），包含 CSS 变量命名及 Light/Dark 双主题支持。
>
> **Figma 设计稿**：[AI 训练 · Color V5.1](https://www.figma.com/design/K2bAa3NONOe35GMd6GIrrb/AI-%E8%AE%AD%E7%BB%83?node-id=21-2973)
>
> **色值来源**：Figma API 提取
> - Color_V5.1 Guidelines：node-id=21-2973
> - Text Color / Background Color：node-id=40-1624
>
> **组件引用：** 按钮、Search 等组件使用的背景色、文字色、功能色、分割线与本文档 **§1 文本**、**§3 线条**、**§5 功能色**、**§7 图层**、**§8 组件颜色** 对应，详见 [Button.md](Button.md)、[Search.md](Search.md)、[demo/button.html](../demo/button.html)、[demo/search.html](../demo/search.html)。

---

## 1. 文本颜色 Text Color

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Text-Primary | `--text-primary` | 一级标题颜色（Neutral-12） | #070808 | #FFFFFF |
| Text-Secondary | `--text-secondary` | 二级标题颜色（Neutral-6） | #84888C | #A0A3A7 |
| Text-Tertiary | `--text-tertiary` | 正文（Neutral-5/6） | #A0A3A7 | #84888C |
| Text-Tips | `--text-tips` | 提示色（Neutral-4） | #C4C7CA | #484B51 |
| Text-Disabled | `--text-disabled` | 禁用色（Neutral-4/7） | #C4C7CA | #484B51 |
| Text-Error | `--text-error` | 错误色（RedFunct-6） | #F7594B | #F7594B |
| Text-Warning | `--text-warning` | 警示色（Orange-6/5） | #FF9447 | #FFAE6B |
| Text-Success | `--text-success` | 成功色（GreenFunct-6） | #2BC235 | #2BC235 |
| Text-Brand | `--text-brand` | 文字品牌色 | #0068FF | #247CFF |
| Always-white | `--text-always-white` | 白文字 | #FFFFFF | #FFFFFF |
| Inverse-primary | `--text-inverse-primary` | 反白文字色（Light）/ 反黑文字色（Dark） | #FFFFFF | #070808 |
| Text-Brand blue | `--text-brand-blue` | 文字品牌色（Light）/ 白文字（Dark） | #0068FF | #FFFFFF |
| Always-black | `--text-always-black` | 黑文字 | #070808 | #070808 |

### Text-Tertiary 规范

| 主题 | 色值 | 语义色 | 说明 |
|------|------|--------|------|
| Light | #A0A3A7 | Neutral-5 | 正文 |
| Dark | #84888C | Neutral-6 | 正文 |

---

## 2. 背景颜色 Background Color

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Bg-Primary | `--bg-primary` | 一级背景 | #FFFFFF | #070808 |
| Bg-Secondary | `--bg-secondary` | 二级背景（Neutral-1） | #FAFAFA | #131516 |
| Bg-Tertiary | `--bg-tertiary` | 三级背景（Neutral-2） | #F2F3F4 | #18191B |
| Bg-Quaternary | `--bg-quaternary` | 四级背景（Neutral-3） | #DFE0E2 | #484B51 |
| Bg-Inverse-primary | `--bg-inverse-primary` | 反向一级背景 | #070808 | #FFFFFF |
| Bg-Inverse-secondary | `--bg-inverse-secondary` | 反向二级背景 | #18191B | #FAFAFA |
| Bg-Inverse-tertiary | `--bg-inverse-tertiary` | 反向三级背景 | #1F2023 | #F2F3F4 |
| Bg-Always-white | `--bg-always-white` | 白色背景 | #FFFFFF | #FFFFFF |
| Bg-Always-black | `--bg-always-black` | 黑色背景 | #070808 | #070808 |
| Bg-Mask | `--bg-mask` | 蒙版/弹窗层遮罩 | rgba(0,0,0,0.2) | rgba(0,0,0,0.7) |

---

## 3. 线条颜色 Line Color

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Line-Gutter | `--line-gutter` | 分割块（Neutral-3） | #DFE0E2 | #1F2023 |
| Line-Border-Subtle | `--line-border-subtle` | 描边弱 1px（Neutral-2） | #F2F3F4 | #1F2023 |
| Line-Border-Strong | `--line-border-strong` | 描边强/快筛/input等元素边框（Neutral-3） | #DFE0E2 | #484B51 |
| Line-Divider | `--line-divider` | 分割线0.5px（Neutral-2） | #F2F3F4 | #1F2023 |
| Line-Short Divider | `--line-short-divider` | 小竖线1px（Neutral-4） | #C4C7CA | #484B51 |

---

## 4. 链接颜色 Link Color

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| default | `--link-default` | 默认色（Brand-6） | #0068FF | #247CFF |
| pressed | `--link-pressed` | 按压色（Brand-7） | #004FD9 | #004FD9 |
| disabled | `--link-disabled` | 禁用色（Brand-3/9） | #7ABDFF | #002A8C |

---

## 5. 功能色 Function Color

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Trade-buy | `--func-green` | 交易买:按钮/数字（GreenTrade-6） | #2BC287 | #2BC287 |
| Trade-buy-soft | `--func-green-light` | 交易行情浅底色（GreenTrade-1/10） | #EAF9EB | #092117 |
| Trade-sell | `--func-red` | 交易卖:按钮/数字（RedTrade-6） | #F74B60 | #F74B60 |
| Trade-sell-soft | `--func-red-light` | 交易行情浅底色（RedTrade-1/10） | #FEEEED | #341C1D |
| Hot | `--func-orange` | 火（RedFunct-6） | #F7594B | #F7594B |
| Star | `--func-yellow` | 星星（Yellow-6） | #FEBE00 | #FEBE00 |

---

## 6. 图标颜色 Icon Color

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Icon-Primary | `--icon-primary` | 主图标色（与 Text-Primary 一致） | #070808 | #FFFFFF |
| Icon-Secondary | `--icon-secondary` | 次级图标色（如 Header 右侧功能图标、Footer 社媒图标） | #484B51 | #A0A3A7 |
| Icon-Tertiary | `--icon-tertiary` | 弱/提示图标色（如导航/下拉箭头） | #A0A3A7 | #84888C |
| Icon-Tips | `--icon-tips` | 提示图标色 | #A0A3A7 | #84888C |

---

## 7. 图层颜色 Layer Color

> 色值来源：Figma MCP `get_variable_defs` / `get_design_context`，node-id=134937:13848（测试V5.1 Web-H5组件库）

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Layer-1 | `--layer-1` | 一级颜色（Neutral-White / Neutral-10） | #FFFFFF | #131516 |
| Layer-2 | `--layer-2` | 二级颜色（Neutral-2 / Neutral-11） | #F2F3F4 | #1F2023 |
| Layer-3 | `--layer-3` | 三级颜色（Neutral-White / Neutral-11） | #FFFFFF | #1F2023 |
| Layer-4 | `--layer-4` | 四级颜色（Neutral-2 / Neutral-8） | #F2F3F4 | #303236 |
| Layer-Active | `--layer-active` | 五级颜色 / 选中激活态（Neutral-White / Neutral-7） | #FFFFFF | #484B51 |

---

## 8. 组件颜色 Cmpt Color

> 色值来源：Figma MCP `get_variable_defs` / `get_design_context`，node-id=134937:13976（测试V5.1 Web-H5组件库）

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Button-primary | `--cmpt-button-primary` | 按钮主色 | #303236 | #FFFFFF |
| Button-soft | `--cmpt-button-soft` | 按钮浅色 | #F5F6F7 | #303236 |
| Button-soft-hover | `--cmpt-button-soft-hover` | 按钮浅色悬停 | #F2F3F4 | #484B51 |
| Button-soft-active | `--cmpt-button-soft-active` | 按钮浅色按压 | #DFE0E2 | #484B51 |
| Button-soft-disable | `--cmpt-button-soft-disable` | 按钮浅色禁用 | #F5F6F7 | #1F2023 |
| Input | `--cmpt-input` | 输入框底色 | #F5F6F7 | #1F2023 |
| Input-disabled | `--cmpt-input-disabled` | 输入框禁用 | #F5F6F7 | #18191B |
| Component-active | `--cmpt-component-active` | 组件激活态 | #303236 | #FFFFFF |
| Component-hover | `--cmpt-component-hover` | 组件悬停态 | #F5F6F7 | #1F2023 |
| Tooltip-toast | `--cmpt-tooltip-toast` | 提示/Toast 背景 | #303236 | #303236 |
| Bluefunct-bg | `--cmpt-bluefunct-bg` | 蓝色功能背景 | #EBF6FF | #232840 |
| Redfunct-bg | `--cmpt-redfunct-bg` | 红色功能背景 | #FEEEED | #2F0C08 |
| Orange-bg | `--cmpt-orange-bg` | 橙色背景 | #FFF4E3 | #331405 |
| Greenfunct-bg | `--cmpt-greenfunct-bg` | 绿色功能背景 | #EAF9EB | #072108 |
| Tag-gray | `--cmpt-tag-gray` | 灰色标签 | #F5F6F7 | #1F2023 |
| Btn-white-dis-bg | `--cmpt-btn-white-dis-bg` | 白按钮禁用背景 | #303236 | #18191B |
| Btn-white-dis-txt | `--cmpt-btn-white-dis-txt` | 白按钮禁用文案 | #84888C | #84888C |
| Btn-white-pressed-txt | `--cmpt-btn-white-pressed-txt` | 白按钮按压文案 | #A0A3A7 | #A0A3A7 |
| Checkbox-dis-active | `--cmpt-checkbox-dis-active` | 复选框禁用选中 | #DFE0E2 | #484B51 |
| Checkbox-dis-inactive | `--cmpt-checkbox-dis-inactive` | 复选框禁用未选 | #F2F3F4 | #18191B |
| Switch-inactive-dis | `--cmpt-switch-inactive-dis` | 开关未选禁用 | #FAFAFA | #84888C |
| Switch-disable | `--cmpt-switch-disable` | 开关禁用 | #DFE0E2 | #1F2023 |
| Switch-disable-bg | `--cmpt-switch-disable-bg` | 开关禁用背景 | #A0A3A7 | #484B51 |
| Slider-inactive-line | `--cmpt-slider-inactive-line` | 滑块未激活轨道 | #DFE0E2 | #303236 |
| Share-footer-bg | `--cmpt-share-footer-bg` | 分享页脚背景 | #F2F3F4 | #F2F3F4 |
| Notification | `--cmpt-notification` | 通知背景 | #FFFFFF | #1F2023 |
| Select-bg | `--cmpt-select-bg` | 选择框背景 | #FFFFFF | #303236 |

---

## 9. 功能色详表 Function Color（20 组）

> 色值来源：Figma MCP `get_variable_defs` / `get_design_context`，node-id=134939:15433（测试V5.1 Web-H5组件库）

| Token | CSS 变量 | 说明 | Light | Dark |
|-------|----------|------|-------|------|
| Trade-buy | `--function-trade-buy` | 买入主色 | #2BC287 | #2BC287 |
| Trade-buy-active | `--function-trade-buy-active` | 买入按压态 | #20A174 | #20A174 |
| Trade-buy-disabled | `--function-trade-buy-disabled` | 买入禁用 | #ADEDCE | #127A59 |
| Trade-buy-soft | `--function-trade-buy-soft` | 买入浅底 | #EAF9EB | #092117 |
| Trade-sell | `--function-trade-sell` | 卖出主色 | #F74B60 | #F74B60 |
| Trade-sell-active | `--function-trade-sell-active` | 卖出按压态 | #D6364E | #D6364E |
| Trade-sell-disabled | `--function-trade-sell-disabled` | 卖出禁用 | #FF9EA3 | #8A152E |
| Trade-sell-soft | `--function-trade-sell-soft` | 卖出浅底 | #FEEEED | #341C1D |
| Success | `--function-success` | 成功主色 | #2BC235 | #2BC235 |
| Success-active | `--function-success-active` | 成功按压态 | #229B2A | #55CE5D |
| Success-disabled | `--function-success-disabled` | 成功禁用 | #AAE7AE | #1A7420 |
| Success-soft | `--function-success-soft` | 成功浅底 | #EAF9EB | #072108 |
| Brand | `--function-brand` | 品牌主色 | #0068FF | #0068FF |
| Brand-active | `--function-brand-active` | 品牌按压态 | #004FD9 | #004FD9 |
| Brand-disabled | `--function-brand-disabled` | 品牌禁用 | #7ABDFF | #232840 |
| Hot | `--function-hot` | 热门/火 | #F7594B | #F7594B |
| Star | `--function-star` | 收藏/星标 | #FEBE00 | #FEBE00 |
| Tag-primary | `--function-tag-primary` | 标签主色 | #A7F757 | #A7F757 |
| VIP-bg | `--function-vip-bg` | VIP 背景 | #FFD98C | #FFD98C |
| VIP-text | `--function-vip-text` | VIP 文案 | #070808 | #070808 |

---

## 10. CSS 变量定义

### Light Mode（默认）

```css
:root {
  /* Text */
  --text-primary: #070808;
  --text-secondary: #84888C;
  --text-tertiary: #A0A3A7;
  --text-tips: #C4C7CA;
  --text-disabled: #C4C7CA;
  --text-error: #F7594B;
  --text-warning: #FF9447;
  --text-success: #2BC235;
  --text-brand: #0068FF;
  --text-always-white: #FFFFFF;
  --text-inverse-primary: #FFFFFF;
  --text-brand-blue: #0068FF;
  --text-always-black: #070808;

  /* Background */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-tertiary: #F2F3F4;
  --bg-quaternary: #DFE0E2;
  --bg-divider: #CECECE;
  --bg-inverse-primary: #070808;
  --bg-inverse-secondary: rgba(24, 25, 27, 1);
  --bg-inverse-tertiary: #1F2023;
  --bg-always-white: #FFFFFF;
  --bg-always-black: #070808;
  --bg-mask: rgba(0, 0, 0, 0.2);
  --bg-brand: #387CF2;
  --bg-pressed: #1F2023;

  /* Line */
  --line-gutter: #DFE0E2;
  --line-border-subtle: #F2F3F4;
  --line-border-strong: #DFE0E2;
  --line-divider: #F2F3F4;
  --line-short-divider: #C4C7CA;

  /* Link */
  --link-default: #0068FF;
  --link-pressed: #004FD9;
  --link-disabled: #7ABDFF;

  /* Function */
  --func-green: #2BC287;
  --func-green-light: #EAF9EB;
  --func-red: #F74B60;
  --func-red-light: #FEEEED;
  --func-orange: #F7594B;
  --func-yellow: #FEBE00;

  /* Icon */
  --icon-primary: #070808;
  --icon-secondary: #484B51;
  --icon-tertiary: #A0A3A7;
  --icon-tips: #A0A3A7;

  /* Layer */
  --layer-1: #FFFFFF;
  --layer-2: #F2F3F4;
  --layer-3: #FFFFFF;
  --layer-4: #F2F3F4;
  --layer-active: #FFFFFF;

  /* Cmpt */
  --cmpt-button-primary: #303236;
  --cmpt-button-soft: #F5F6F7;
  --cmpt-button-soft-hover: #F2F3F4;
  --cmpt-button-soft-active: #DFE0E2;
  --cmpt-button-soft-disable: #F5F6F7;
  --cmpt-input: #F5F6F7;
  --cmpt-input-disabled: #F5F6F7;
  --cmpt-component-active: #303236;
  --cmpt-component-hover: #F5F6F7;
  --cmpt-tooltip-toast: #303236;
  --cmpt-bluefunct-bg: #EBF6FF;
  --cmpt-redfunct-bg: #FEEEED;
  --cmpt-orange-bg: #FFF4E3;
  --cmpt-greenfunct-bg: #EAF9EB;
  --cmpt-tag-gray: #F5F6F7;
  --cmpt-btn-white-dis-bg: #303236;
  --cmpt-btn-white-dis-txt: #84888C;
  --cmpt-btn-white-pressed-txt: #A0A3A7;
  --cmpt-checkbox-dis-active: #DFE0E2;
  --cmpt-checkbox-dis-inactive: #F2F3F4;
  --cmpt-switch-inactive-dis: #FAFAFA;
  --cmpt-switch-disable: #DFE0E2;
  --cmpt-switch-disable-bg: #A0A3A7;
  --cmpt-slider-inactive-line: #DFE0E2;
  --cmpt-share-footer-bg: #F2F3F4;
  --cmpt-notification: #FFFFFF;
  --cmpt-select-bg: #FFFFFF;

  /* Function (20) */
  --function-trade-buy: #2BC287;
  --function-trade-buy-active: #20A174;
  --function-trade-buy-disabled: #ADEDCE;
  --function-trade-buy-soft: #EAF9EB;
  --function-trade-sell: #F74B60;
  --function-trade-sell-active: #D6364E;
  --function-trade-sell-disabled: #FF9EA3;
  --function-trade-sell-soft: #FEEEED;
  --function-success: #2BC235;
  --function-success-active: #229B2A;
  --function-success-disabled: #AAE7AE;
  --function-success-soft: #EAF9EB;
  --function-brand: #0068FF;
  --function-brand-active: #004FD9;
  --function-brand-disabled: #7ABDFF;
  --function-hot: #F7594B;
  --function-star: #FEBE00;
  --function-tag-primary: #A7F757;
  --function-vip-bg: #FFD98C;
  --function-vip-text: #070808;
}
```

### Dark Mode Override

```css
[data-theme='dark'] {
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #A0A3A7;
  --text-tertiary: #84888C;
  --text-tips: #484B51;
  --text-disabled: #484B51;
  --text-error: #F7594B;
  --text-warning: #FFAE6B;
  --text-success: #2BC235;
  --text-brand: #247CFF;
  --text-always-white: #FFFFFF;
  --text-inverse-primary: #070808;
  --text-brand-blue: #FFFFFF;
  --text-always-black: #070808;

  /* Background */
  --bg-primary: #070808;
  --bg-secondary: rgba(19, 21, 22, 1);
  --bg-tertiary: #18191B;
  --bg-quaternary: #484B51;
  --bg-divider: #3D3D3D;
  --bg-inverse-primary: #FFFFFF;
  --bg-inverse-secondary: #FAFAFA;
  --bg-inverse-tertiary: #F2F3F4;
  --bg-always-white: #FFFFFF;
  --bg-always-black: #070808;
  --bg-mask: rgba(0, 0, 0, 0.7);
  --bg-brand: #FFFFFF;
  --bg-pressed: #DFE0E2;

  /* Line */
  --line-gutter: #1F2023;
  --line-border-subtle: #1F2023;
  --line-border-strong: #484B51;
  --line-divider: #1F2023;
  --line-short-divider: #484B51;

  /* Link */
  --link-default: #247CFF;
  --link-pressed: #004FD9;
  --link-disabled: #002A8C;

  /* Function */
  --func-green: #2BC287;
  --func-green-light: #092117;
  --func-red: #F74B60;
  --func-red-light: #341C1D;
  --func-orange: #F7594B;
  --func-yellow: #FEBE00;

  /* Icon */
  --icon-primary: #FFFFFF;
  --icon-secondary: #A0A3A7;
  --icon-tertiary: #84888C;
  --icon-tips: #84888C;

  /* Layer */
  --layer-1: #131516;
  --layer-2: #1F2023;
  --layer-3: #1F2023;
  --layer-4: #303236;
  --layer-active: #484B51;

  /* Cmpt */
  --cmpt-button-primary: #FFFFFF;
  --cmpt-button-soft: #303236;
  --cmpt-button-soft-hover: #484B51;
  --cmpt-button-soft-active: #484B51;
  --cmpt-button-soft-disable: #1F2023;
  --cmpt-input: #1F2023;
  --cmpt-input-disabled: #18191B;
  --cmpt-component-active: #FFFFFF;
  --cmpt-component-hover: #1F2023;
  --cmpt-tooltip-toast: #303236;
  --cmpt-bluefunct-bg: #232840;
  --cmpt-redfunct-bg: #2F0C08;
  --cmpt-orange-bg: #331405;
  --cmpt-greenfunct-bg: #072108;
  --cmpt-tag-gray: #1F2023;
  --cmpt-btn-white-dis-bg: #18191B;
  --cmpt-btn-white-dis-txt: #84888C;
  --cmpt-btn-white-pressed-txt: #A0A3A7;
  --cmpt-checkbox-dis-active: #484B51;
  --cmpt-checkbox-dis-inactive: #18191B;
  --cmpt-switch-inactive-dis: #84888C;
  --cmpt-switch-disable: #1F2023;
  --cmpt-switch-disable-bg: #484B51;
  --cmpt-slider-inactive-line: #303236;
  --cmpt-share-footer-bg: #F2F3F4;
  --cmpt-notification: #1F2023;
  --cmpt-select-bg: #303236;

  /* Function (20) */
  --function-trade-buy: #2BC287;
  --function-trade-buy-active: #20A174;
  --function-trade-buy-disabled: #127A59;
  --function-trade-buy-soft: #092117;
  --function-trade-sell: #F74B60;
  --function-trade-sell-active: #D6364E;
  --function-trade-sell-disabled: #8A152E;
  --function-trade-sell-soft: #341C1D;
  --function-success: #2BC235;
  --function-success-active: #55CE5D;
  --function-success-disabled: #1A7420;
  --function-success-soft: #072108;
  --function-brand: #0068FF;
  --function-brand-active: #004FD9;
  --function-brand-disabled: #232840;
  --function-hot: #F7594B;
  --function-star: #FEBE00;
  --function-tag-primary: #A7F757;
  --function-vip-bg: #FFD98C;
  --function-vip-text: #070808;
}
```

---

## 11. 使用方式

在项目中引入颜色 Token：

```html
<link rel="stylesheet" href="src/styles/color-tokens.css">
```

或通过 `tokens.css` 一并引入（含圆角 Token）：

```html
<link rel="stylesheet" href="src/styles/tokens.css">
```

---

## 12. 主题切换

在根元素设置 `data-theme` 属性即可切换主题：

```html
<html data-theme="light">  <!-- 或 data-theme="dark" -->
```

```js
// 切换主题
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## 13. 从 Figma 同步色值

使用 Figma API 提取（需 `file_content:read` 权限）：

```bash
curl -H "X-Figma-Token: YOUR_TOKEN" \
  "https://api.figma.com/v1/files/K2bAa3NONOe35GMd6GIrrb/nodes?ids=21-2973"
```

或手动：在 Figma 中选中 Color_V5.1 Guidelines 色块，从 Inspect 面板复制 hex 值。

---

## 14. 版本记录

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0 | 2025-03-11 | 初始版本，基于 Color V5.1 |
| 1.1 | 2025-03-12 | 添加 Figma 同步说明 |
| 1.2 | 2025-03-12 | 通过 Figma API 提取并更新色值（Neutral/Brand/Function 色板） |
| 1.3 | 2025-03-12 | 按 Text Color 规范（node-id=40-1624）补全：tips、inverse-primary、Dark 模式 warning/success 色值 |
| 1.4 | 2025-03-12 | 按 Background Color 规范（node-id=40-1624）补全：quaternary、inverse-primary/secondary/tertiary、always-white、always-black |
| 1.5 | 2025-03-12 | 按 Figma Background Color 标准规范（node-id=40-1624）更新全部色值：Primary/Secondary/Tertiary/Quaternary、Inverse 系列、Mask 50% |
