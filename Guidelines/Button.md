# 按钮组件规范（Figma 设计稿标准）

## 文档说明

本规范根据 Figma 设计稿 **Button_Web Guidelines**（测试 V5.1 Web-H5 组件库）中的 **ButtonV5-web** 组件**自上而下逐项提取**，精确描述默认样式、类型、状态、尺寸、设计变量与组合方式，供开发与设计对齐使用。

**设计稿来源（主）：**  
[Figma - Button_Web Guidelines](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=134759-59585)（节点 `134759:59585`）  
**Web-H5 对应与 H5 极端原则：** [Button Guidelines-H5](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=134759-59583)（节点 `134759:59583`）

**演示页面：** [button.html](../demo/button.html) 按 **常规按钮**（§1–§7、§12–§13）、**Text Button 文本按钮组件**（§8–§11）、**底部操作按钮**（§14）分 Tab 展示，与本节规范一一对应。

**字体与字阶：** 按钮字号、字重、行高、字间距遵循 [Font.md](Font.md)（字阶 Web 端 Body/Subtitle 等），预览 [font.html](../demo/font.html)。

**颜色 Token：** 按钮背景、文字、边框、功能色与 [Color.md](Color.md)（Gate APP 颜色 Token）对齐；本规范使用 `--color-*` 等命名以兼容设计稿，与 Color 中 `--text-*`、`--bg-*`、`--func-*` 等语义一致，Light/Dark 双主题以 Color.md 为准，预览 [Color.html](../Color.html)。

**组件名称：** ButtonV5-web（面性胶囊按钮，无描边、无投影）

**变体维度（设计稿内）：** Type（类型）| State（状态）| Size（尺寸）| Icons（图标：Prefix / Suffix / Only icon）

---

## 1. 默认样式（单一规范源）

以下为**默认态**的完整定义，作为实现基准；类型/状态/尺寸在其上叠加变化。

| 属性 | 取值 | 说明 |
|------|------|------|
| **组件** | ButtonV5-web | 面性按钮，无边框、无阴影 |
| **默认类型** | Primary-Black | 深灰底、白字 |
| **默认状态** | Default | 未悬停、未按下、未禁用、非 Loading |
| **默认尺寸** | Medium（40px 高） | 见 §2 尺寸表 |
| **圆角** | `99px` | 全类型、全尺寸统一，胶囊形 |
| **背景** | `var(--color-cmpt-button-primary, #303236)` | 主按钮背景 |
| **文字** | `var(--color-text-inverse-primary, #FFFFFF)` | 主按钮文字 |
| **字体** | Switzer, sans-serif | 设计指定 |
| **字号（Medium）** | 14px | 字重 500，行高 1.3，字间距 0 |
| **水平内边距（Medium）** | 20px | 左右各 20px，垂直由高度 + 居中决定 |
| **布局** | `display: inline-flex; align-items: center; justify-content: center` | 内容水平垂直居中 |

---

## 2. 基础全局定义

### 2.1 形状与圆角 (Border Radius)

| 属性 | 取值 | 说明 |
|------|------|------|
| **圆角** | `99px` | 所有尺寸、所有类型统一。实现胶囊形（Pill-shaped）。 |
| **实现** | `border-radius: 99px` | 与高度无关，固定值即可保证两端半圆。 |

- 设计稿中所有带字按钮、纯图标按钮均使用 **同一圆角 99px**，无按尺寸区分的圆角变体。

### 2.2 字体 (Typography - 全局)

| 属性 | 取值 | 说明 |
|------|------|------|
| **字体家族** | `Switzer` | 设计稿指定字体，fallback 建议 `sans-serif`。 |
| **行高** | `1.3` | 数值约 `1.2999999523162842`，实现时用 `1.3`。 |
| **字间距** | `0` | 无额外 letter-spacing。 |
| **文本对齐** | 水平垂直居中 | 依赖 flex 居中，不依赖行高撑高。 |

- 字重、字号按**尺寸阶梯**区分，见 §2、§3。字体家族、字阶与行高规范详见 [Font.md](Font.md) §1 字体家族、§3 Web 端字阶。

### 2.3 边框与阴影 (Border & Shadow)

- **边框：** 主按钮（Primary）及设计稿中的面性类型均**无描边**，纯背景填充。
- **阴影：** 从提取的节点看，主按钮未使用投影；若设计稿中某类型有阴影，以 Figma 该图层效果为准。
- 未在规范中单独定义描边型（Outline）变体；若需扩展，需与设计单独约定。

---

## 2. 尺寸规格 (Sizing)

### 2.1 Web 端高度与内边距、字号、字重

设计稿中 **ButtonV5-web** 按高度分为多档，下表为从 Figma 节点**实测**得到的规格。

| 规格名称 | 高度 (Height) | 水平内边距 (Padding L/R) | 字号 (Font Size) | 字重 (Weight) | 设计令牌 (Figma) |
|----------|---------------|---------------------------|------------------|---------------|------------------|
| **XXSmall** | 28px | 12px | 12px | Medium (500) | Web_V5/Body/B11 500 12px |
| **XSmall** | 32px | 12px | 14px | Medium (500) | Web_V5/Body/B7 500 14px |
| **Small** | 36px | 16px | 14px | Medium (500) | Web_V5/Body/B7 500 14px |
| **Medium** | 40px | 20px | 14px | Medium (500) | Web_V5/Body/B7 500 14px |
| **Large** | 44px | 24px | 16px | Medium (500) | Web_V5/Body/B3 500 16px |
| **XLarge** | 48px | 24px | 16px | Medium (500) | Web_V5/Body/B3 500 16px |
| **XXLarge** | 56px | 32px | 18px | Semibold (600) | Web_V5/Subtitle/S5 600 18px |

- **垂直内边距：** 未单独定义上下 padding，由**固定高度 + 文本垂直居中**实现，即高度固定，内容 flex 居中。
- **XXLarge (56px)** 为唯一使用 **Semibold (600)** 的规格，其余均为 **Medium (500)**。

### 2.2 H5 端高度与内边距、字号

设计稿中 **Button_V5_H5** 与 Web 有**对应关系**，表格中「高度/H」列同时描述 Web 与 H5。

| 高度/H (表格行) | Web 高度 | H5 高度 | 说明 |
|-----------------|----------|----------|------|
| 28对应24 | 28px | **24px** | H5 最小档为 24px，对应 Web 28px 档。 |
| 32 | 32px | 32px | 一致。 |
| 36 | 36px | 36px | 一致。 |
| 40 | 40px | 40px | 一致。 |
| 44 | 44px | 44px | 一致。 |
| 48 | 48px | 48px | 一致。 |
| 56(单)/48 | **56px**（单按钮） | **48px** | Web 单按钮可用 56px；同场景 H5 用 48px。 |
| 56(多) 对应44 | **56px**（多按钮时） | **44px** | Web 多按钮行用 56px；H5 多按钮行用 44px。 |
| 长按钮 | 56px 高、宽度自适应 | FooterButton 等 | H5 长按钮有独立组件（如 FooterButton_V5_H5-48px）。 |

从 Figma 节点 **Button_V5_H5**（24px 高）实测：

| 属性 | 取值 |
|------|------|
| 高度 | 24px |
| 水平内边距 | 8px |
| 字号 | 12px |
| 字重 | Medium (500) |
| 设计令牌 | H5_V5/Body/B11 500 12px |

- H5 其余高度档（32 / 36 / 40 / 44 / 48）与 Web 的**水平内边距、字号、字重**按同档 Web 规格实现即可，除非设计稿另有标注。

### 2.3 内边距汇总（便于实现）

**Web：**

| 规格 | 高度 | 水平 Padding | 垂直 | CSS 示例 (padding) |
|------|------|--------------|------|---------------------|
| XXSmall | 28px | 12px | 由高度 + 居中决定 | `0 12px` |
| XSmall | 32px | 12px | 同上 | `0 12px` |
| Small | 36px | 16px | 同上 | `0 16px` |
| Medium | 40px | 20px | 同上 | `0 20px` |
| Large | 44px | 24px | 同上 | `0 24px` |
| XLarge | 48px | 24px | 同上 | `0 24px` |
| XXLarge | 56px | 32px | 同上 | `0 32px` |

**H5（24px 档）：** `0 8px`，高度 24px。

### 2.4 纯图标按钮 (Icon Only)

- **尺寸：** 宽高与**当前档高度**一致，如 Medium → 40×40px，XXLarge → 56×56px。
- **圆角：** 同上，99px（视觉上接近圆形）。
- **内边距：** 无单独左右 padding，图标居中即可。
- **图标尺寸建议（与字号同档）：** 12px 档 → 12px 图标；14px 档 → 16px 或 18px 图标；16px 档 → 20px 图标；18px 档 → 22px 图标。以 Figma 组件内图标图层为准。
- 设计稿中「56(多) 对应44」行：H5 为 44×44px 图标按钮 + 44px 高带字按钮组合。

### 2.5 最小宽度 (Min-Width)

- 设计稿未强制最小宽度；实现时建议 **min-width ≥ 当前高度**，避免过窄（如 28px 高至少 28px 宽）。
- 纯图标按钮：宽高相等，无需额外 min-width。

### 2.6 Web 与 H5 对应关系（Button Guidelines-H5 设计稿）

以下内容依据 Figma **Button Guidelines-H5**（节点 `134759:59583`）中「Web-H5 对应关系」表格逐行提取，作为 Web 与 H5 按钮**一一对应**的权威对照。

**设计稿来源：**  
[Figma - Button Guidelines-H5](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=134759-59583)（节点 `134759:59583`）

| 高度/H（表格行） | Web 高度 | H5 高度 | 说明 |
|-----------------|----------|----------|------|
| **28 对应 24** | 28px | **24px** | H5 最小档为 24px，对应 Web 的 XXSmall(28px) 档；H5 使用 Button_V5_H5，水平 padding 8px、字号 12px、字重 500。 |
| **32** | 32px | 32px | 一致；XSmall，padding 12px、14px 字号。 |
| **36** | 36px | 36px | 一致；Small，padding 16px、14px 字号。 |
| **40** | 40px | 40px | 一致；Medium，padding 20px、14px 字号。 |
| **44** | 44px | 44px | 一致；Large，padding 24px、16px 字号。 |
| **48** | 48px | 48px | 一致；XLarge，padding 24px、16px 字号。 |
| **56(单)/48** | **56px**（单按钮场景） | **48px** | Web 单按钮可用 XXLarge 56px；同场景 H5 使用 **48px**，即 H5 不做 56px 单按钮。 |
| **56(多) 对应 44** | **56px**（多按钮同行时） | **44px** | Web 多按钮行用 56px；H5 多按钮行用 **44px**，即 H5 多按钮降一档。 |
| **长按钮** | 56px 高、宽度自适应 | FooterButton 等 | 长按钮 H5 有独立组件（如 FooterButton_V5_H5-48px），宽度 375px 内适配。 |

- **圆角、字重、行高、字间距：** Web 与 H5 全档一致（99px 圆角、1.3 行高、0 字间距）；字重/字号与 §2.1、§3.1 同档一致。
- **内边距：** H5 仅 **24px 档** 水平 padding 为 **8px**（设计稿 Button_V5_H5 24px 实测）；其余 32/36/40/44/48 与 Web 同档一致。

### 2.7 H5 按钮尺寸与样式汇总

| H5 高度 | 水平 Padding | 字号 | 字重 | 设计令牌（Figma） |
|---------|--------------|------|------|------------------|
| 24px | 8px | 12px | 500 | H5_V5/Body/B11 500 12px |
| 32px | 12px | 14px | 500 | 与 Web XSmall 一致 |
| 36px | 16px | 14px | 500 | 与 Web Small 一致 |
| 40px | 20px | 14px | 500 | 与 Web Medium 一致 |
| 44px | 24px | 16px | 500 | 与 Web Large 一致；H5 多按钮行使用此档 |
| 48px | 24px | 16px | 500 | 与 Web XLarge 一致；H5 单按钮最大档、长按钮常用 |

- H5 **无 56px 档**：单按钮最大 48px，多按钮行用 44px。

### 2.8 点击热区（交互规范，Button Guidelines-H5）

设计稿 **Button Guidelines-H5** 中「交互规范」明确：

- **规则：** Button 的**点击热区与包裹容器宽度应 1:1**，即可点击区域 = 按钮视觉区域的宽度（与包裹容器同宽），不得缩小热区。
- 适用于：仅文案按钮、带后缀图标按钮、仅图标按钮等所有组合；热区需覆盖整个按钮视觉范围。

### 2.9 H5 极端原则（各尺寸文案与排布规则）

设计稿 **Button Guidelines-H5** 中「极端原则」规定：当文案过长或需多行/图标组合时，按**高度**区分是否允许以下排布。下表按设计稿「高度/H」与内容类型整理。

**原则一（文案过长）：**  
当文案过长容纳不下时：**倾向 H5 按钮以全文案改变按钮排布**（如换行或调整布局）；**两端去边化处理**（可适当减少左右留白以容纳文案，以设计稿为准）。

**原则二（两行逻辑）：**  
两行时：**文本截断、省略、icon 露出**，**button 整体气泡提示全部**（即整段文案通过 tooltip 等完整展示）。

**各高度允许的排布（设计稿矩阵）：**

| 高度/H | 全文单行 | 换行两行 | 截断两行+省略 | 图标+换行两行 | 仅图标 |
|--------|----------|----------|----------------|----------------|--------|
| **56px** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **48px** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **44px** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **40px** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **36px** | ✓ | **无** | **无** | **无** | ✓ |
| **32px** | ✓ | **无** | **无** | **无** | ✓ |

- **36px、32px** 不允许：换行两行、截断两行省略、图标+换行两行；仅允许**全文单行**与**仅图标**，避免小尺寸下两行拥挤。
- **56/48/44/40px** 允许两行时，实现需保证可读性（行高、截断省略、icon 与文字间距等），并与「两段逻辑」一致（整按钮 tooltip 展示全文）。

---

## 3. 字号、字色、字重 (Typography Detail)

### 3.1 与规格一一对应

| 规格 | 字号 | 字重 | 行高 | 字间距 | 设计令牌 |
|------|------|------|------|--------|----------|
| XXSmall | 12px | 500 (Medium) | 1.3 | 0 | Web_V5/Body/B11 500 12px |
| XSmall | 14px | 500 (Medium) | 1.3 | 0 | Web_V5/Body/B7 500 14px |
| Small | 14px | 500 (Medium) | 1.3 | 0 | Web_V5/Body/B7 500 14px |
| Medium | 14px | 500 (Medium) | 1.3 | 0 | Web_V5/Body/B7 500 14px |
| Large | 16px | 500 (Medium) | 1.3 | 0 | Web_V5/Body/B3 500 16px |
| XLarge | 16px | 500 (Medium) | 1.3 | 0 | Web_V5/Body/B3 500 16px |
| XXLarge | 18px | 600 (Semibold) | 1.3 | 0 | Web_V5/Subtitle/S5 600 18px |

### 3.2 字色 (Primary 主按钮-黑)

| 用途 | 设计令牌 | 静态色值 (Fallback) |
|------|----------|----------------------|
| 背景 | `var(--color-cmpt-button-primary, #303236)` | `#303236` |
| 文字 | `var(--color-text-inverse-primary, white)` | `#FFFFFF` |

- 设计稿中 Primary 类型未使用描边，仅背景 + 文字色。

---

## 4. 间距规则 (Spacing)

### 4.1 文字与图标间隙 (Gap)

- 设计稿中带**前缀/后缀图标**的按钮：图标与文字之间建议 **8px**（与现有 Button Guidelines 一致）。
- 若存在 XSmall/XXSmall 且字号 ≤12px，可将该档 gap 设为 **4px**，需与设计确认。

### 4.2 按钮与按钮之间

- 设计稿未在节点中明确标注；常规实现：水平排列时 **8px～12px**，以设计稿或产品要求为准。

---

## 5. 类型与色彩 (Variants / Type)

**类型 (Type)** 与 **状态 (State)** 不同：**类型**指按钮的视觉变体（哪种颜色/样式），**状态**指该类型下的交互阶段（Default / Hover / Pressed / Disabled / Loading）。设计稿中「类型」包含：Primary-Black、Secondary-Gray、**White**、Green、Red；「状态」包含：Default、Hover、Pressed、Disable、及可选 Loading。

规范内按钮**类型**及对应 Figma 变量（来自 `get_variable_defs`）：**Primary、Secondary、White、Faded、Green、Red**（无蓝色/品牌色按钮）。红、绿仅为颜色类型命名，不绑定业务语义。

### 5.1 Primary（主按钮-黑 / Primary-Black）

| 状态 | 背景 (变量 / Fallback) | 文字 (变量 / Fallback) | 视觉说明 |
|------|------------------------|-------------------------|----------|
| Default | `var(--color-cmpt-button-primary, #303236)` | `var(--color-text-inverse-primary, #FFFFFF)` | 深炭灰、白字、微立体 |
| Hover | 同 Default（背景不变） | `var(--color-text-text-tertiary, #A0A3A7)` | **文字 Text-Tertiary**，无亮暗 |
| Pressed | 同 Default（背景不变） | `var(--color-text-text-tertiary, #A0A3A7)` | **文字 Text-Tertiary**，无内凹 |
| Disabled | `var(--color-cmpt-button-soft-disable, #F5F6F7)` | `var(--color-text-text-disable, #C4C7CA)` | **浅灰底 + 浅灰字**，低对比，明确不可点击 |
| Loading | 同 Default（`var(--color-cmpt-button-primary, #303236)`） | — | **黑色/深灰底**，**无文案**，仅居中 Spinner，规格见下。 |

**Loading 状态（Figma 实测）**  
设计稿节点：Button Guidelines → ButtonV5-web（Type=Primary-Black, State=Loading, Size=Medium-40px），node id `134759:59188`（Figma fileKey: `yyvB1Mer7aG8cJx9JVTVZL`）。

| 属性 | 取值 | 说明 |
|------|------|------|
| 背景 | `var(--color-cmpt-button-primary, #303236)` | 与 Primary Default 一致 |
| 圆角 | `99px` | 同 §1.1 |
| 内边距 | **与同尺寸带字按钮一致**（如 Medium 左右各 20px） | 加载态左右间距与文字按钮保持一致，无文案，仅 Spinner 居中 |
| 文案 | 无 | 不显示任何文字 |
| Spinner 尺寸 | **占位 20×20px，实际动效 18×18px** | 设计稿 20px 容器内含 1px 留白，视觉环为 18px |
| Spinner 样式 | 环状（圆环） | 非激活弧段：浅灰 `#A0A3A7`；激活弧段：白 `#FFFFFF`，约占周长约 25%～30%；**描边粗细 1.67px** |
| 动画 | 绕中心旋转 | 实现时可用 `transform: rotate(360deg)` 循环动画 |

- 实现时 Loading 按钮应 `pointer-events: none`、`disabled` 或 `aria-busy="true"`，且不展示按钮文字。

### 5.2 Secondary（次级-灰 / Secondary-Gray）

浅灰面性填充，深色字，无描边。

| 状态 | 背景 (变量 / Fallback) | 文字 (变量 / Fallback) |
|------|------------------------|-------------------------|
| Default | `var(--color-cmpt-button-soft, #F5F6F7)` | `var(--color-text-text-primary, #070808)` |
| Hover | 略深灰，如 `#EBECED` 或保持 + 亮度微调 | 同 Default |
| Pressed | `var(--color-cmpt-button-soft-active, #DFE0E2)` | 同 Default |
| Disabled | `var(--color-cmpt-button-soft-disable, #F5F6F7)` | `var(--color-text-text-disable, #C4C7CA)` |

### 5.3 White（白）

白底，深色字，**无灰色描边**。适用于**灰色背景**上的白色按钮，白底在灰底上形成对比。

> **说明：** 组件本身不带灰色描边。预览或设计稿中若出现描边，仅用于在浅色页面上**示意按钮轮廓**，实际使用时无需描边。

| 状态 | 背景 (变量 / Fallback) | 文字 (变量 / Fallback) |
|------|------------------------|-------------------------|
| Default | `var(--color-bg-primary, #FFFFFF)` 或 `var(--color-bg-always-white, #FFFFFF)` | `var(--color-text-text-primary, #070808)` / `var(--color-text-always-black, #070808)` |
| Hover | 极浅灰，如 `#F9F9F9` 或 `#F5F6F7` | 同 Default |
| Pressed | 略深灰，如 `#EBECED` 或 `var(--color-cmpt-button-soft-active, #DFE0E2)` | 同 Default |
| Disabled | `var(--color-cmpt-button-soft-disable, #F5F6F7)` | `var(--color-text-text-disable, #C4C7CA)` |

### 5.4 Faded（弱化）

比 Secondary 更弱，用于更次要操作。

| 状态 | 背景 (变量 / Fallback) | 文字 (变量 / Fallback) |
|------|------------------------|-------------------------|
| Default | `var(--color-cmpt-button-soft, #F5F6F7)` | `var(--color-text-text-secondary, #84888C)` |
| Hover | 同 Secondary Hover | 同 Default |
| Pressed | `var(--color-cmpt-button-soft-active, #DFE0E2)` | 同 Default |
| Disabled | `var(--color-cmpt-button-soft-disable, #F5F6F7)` | `var(--color-text-text-disable, #C4C7CA)` |

### 5.5 Green（绿）

绿色填充，白字。仅为颜色类型，不绑定“成功”等语义。

| 状态 | 背景 (变量 / Fallback) | 文字 (变量 / Fallback) |
|------|------------------------|-------------------------|
| Default | `var(--color-function-trade-buy, #2BC287)` | `var(--color-text-inverse-primary, #FFFFFF)` / `var(--color-text-always-white, #FFFFFF)` |
| Hover | 同 Default（背景不变） | `var(--color-text-text-tertiary, #A0A3A7)`（与 Pressed 一致） |
| Pressed | `var(--color-function-trade-buy-active, #20A174)` | `var(--color-text-text-tertiary, #A0A3A7)` |
| Disabled | `var(--color-cmpt-button-soft-disable, #F5F6F7)` | `var(--color-text-text-disable, #C4C7CA)` |

### 5.6 Red（红）

红色填充，白字。仅为颜色类型，不绑定“危险”等语义。

| 状态 | 背景 (变量 / Fallback) | 文字 (变量 / Fallback) |
|------|------------------------|-------------------------|
| Default | `var(--color-function-trade-sell, #F74B60)` 或 `var(--color-function-hot, #F7594B)` | `var(--color-text-inverse-primary, #FFFFFF)` / `var(--color-text-always-white, #FFFFFF)` |
| Hover | 同 Default（背景不变） | `var(--color-text-text-tertiary, #A0A3A7)`（与 Pressed 一致） |
| Pressed | `var(--color-function-trade-sell-active, #D6364E)` | `var(--color-text-text-tertiary, #A0A3A7)` |
| Disabled | `var(--color-cmpt-button-soft-disable, #F5F6F7)` | `var(--color-text-text-disable, #C4C7CA)` |

### 5.7 类型小结

| 类型 | 说明 | 背景 Default | 文字 Default |
|------|------|--------------|--------------|
| Primary | 主按钮-黑 | #303236 | #FFFFFF |
| Secondary | 次级-灰 | #F5F6F7 | #070808 |
| White | 白 | #FFFFFF | #070808 |
| Faded | 弱化操作 | #F5F6F7 | #84888C |
| Green | 绿 | #2BC287 | #FFFFFF |
| Red | 红 | #F74B60 | #FFFFFF |

---

## 6. 状态 (State) 与动效

**状态**与**类型**不同：状态是同一类型按钮下的交互阶段。设计稿中「状态」包含：**Default**、**Hover**、**Pressed**、**Disable**、以及可选 **Loading**（如带旋转图标、无文案）。

### 6.1 交互方式与动效

- **交互方式：** Click（点击）。
- **运动时长：** 100ms。
- **运动曲线：** Ease out。
- **点击热区：** 设计稿说明「Button 的点击热区应该覆盖到整个按钮」；**Button Guidelines-H5**（134759:59583）进一步明确「Button 的点击热区与包裹容器宽度应 **1:1**」，即可点击区域 = 整个按钮视觉区域（与包裹容器同宽），不得缩小热区。

### 6.2 状态定义 (States)

设计稿五态视觉约定（以 Primary 为例，其余类型见 §5 各表）：

| 状态 | 触发 | 视觉要点（Primary） | 通用约定 |
|------|------|---------------------|----------|
| **Default** | 无交互 | 深炭灰底、白字 | 各类型见 §5 表格 |
| **Hover** | 悬停 | 背景不变，**文字 `#A0A3A7`**（`--color-text-text-tertiary`） | 仅文字变色，无亮暗 |
| **Pressed** | 点击按下 | 背景不变（或 Green/Red 为更深色），**文字 `#A0A3A7`**（与 Hover 一致） | 仅文字变色，无内凹、无 scale |

- **Hover 与 Pressed 文字颜色一致：** 均为灰色 **Text/Text-Tertiary**（`--color-text-text-tertiary`，`#A0A3A7`），适用于 Primary、Green、Red 等白字类型。**不做**背景亮暗（brightness）与内凹（inset、scale）样式。
| **Disabled** | 禁用 | **浅灰底 + 浅灰字**（`--color-cmpt-button-soft-disable` + `--color-text-text-disable`） | 不做半透明深色；`cursor: not-allowed`、`pointer-events: none` |
| **Loading** | 加载中 | 与 Primary Default 同底，**无文案**，仅环状 Spinner（占位 20px，实际 18px，§5.1） | `aria-busy="true"`，不展示文字 |

- **Focus：** `outline: 2px solid`（颜色与主色或品牌一致），`outline-offset: 2px`，仅对 `:focus-visible` 生效。

---

## 7. 适配与布局 (Adaptation)

### 7.1 Web 与 H5 对应关系小结

- **高度：** Web 28 → H5 24；Web 56 单 → H5 48；Web 56 多 → H5 44；其余 32/36/40/44/48 一致。详见 §2.6 表格。
- **圆角、字重、行高、字间距：** Web 与 H5 一致。
- **内边距：** H5 24px 档为 8px 水平；其余与 Web 同档一致（除非设计稿另有标注）。
- **H5 极端原则与点击热区：** 见 §2.8、§2.9。

### 7.2 布局实现建议

- 按钮容器：`display: inline-flex; align-items: center; justify-content: center;`
- 宽度：默认 `fit-content`（由内容 + 水平 padding 撑开）；通栏场景可使用 `width: 100%`。
- 文本：`white-space: nowrap` 保持单行；需要截断时再使用 `text-overflow: ellipsis` + `overflow: hidden`。

### 7.3 组合方式（Figma 内 Icons / 布局）

设计稿 **Button_Web Guidelines** 中明确以下组合，均使用同一套类型/状态/尺寸规则：

| 组合 | 说明 | 关键规格 |
|------|------|----------|
| **带字按钮** | 仅文案，无图标 | 水平 padding 按 §2 尺寸表，文字与容器居中 |
| **Prefix Icon** | 图标 + 文案，图标在左 | 图标与文字间距 **8px**（§4.1）；图标尺寸见 §2.4 |
| **Suffix Icon** | 文案 + 图标，图标在右 | 同上，8px 间距 |
| **Only Icon** | 仅图标，无文案 | 宽高 = 当前档高度（如 Medium → 40×40px），圆角 99px，图标居中 |

- 设计稿图例标注：**Primary / Secondary / Faded / Highlight / Critical** 对应规范中的 Primary、Secondary、Faded、White、Green、Red（Highlight 含 White/Green/Red，Critical 即 Red）。

### 7.4 应用场景按钮组合（首焦 / 弹窗）

设计稿 [Figma 7454:73039](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/?node-id=7454-73039) 定义两类常用组合：

| 场景 | 组合方式 | 规格 |
|------|----------|------|
| **首焦按钮组合** | Primary Black + Secondary Gray | 主按钮（带字）+ 次级图标按钮（Only Icon），间距 **16px**；用于页面首焦/Banner 等。 |
| **弹窗按钮组合** | Secondary Gray + Primary | 取消（左）+ 确定（右），两钮等分宽度，间距 **12px**；用于弹窗/对话框底部。 |

- 首焦：主按钮文案由业务决定，右侧可为 Only Icon 的 Secondary 按钮（如设置、更多等）。
- 弹窗：左侧 Cancel / 取消（Secondary），右侧 Confirm / 确定（Primary），容器内两钮 `flex: 1` 等分，max-width 由弹窗宽度决定。

### 7.5 颜色模式（五种类型暗黑样式）

设计稿 [Figma 7454:73055](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/?node-id=7454-73055) 定义五种按钮类型在**暗黑模式**下的对应样式。暗黑背景使用 `--color-bg-tertiary`（#18191b），边框使用 `--color-line-border-subtle`（#1f2023）。

| 类型 | 浅色模式 | 暗黑模式 |
|------|----------|----------|
| **Primary** | 深灰底 (#303236) + 白字 | **白底** + 黑字（`--color-text-always-black`） |
| **Secondary** | 浅灰底 (#f5f6f7) + 黑字 | **深灰底** (#303236) + 白字 |
| **White** | 白底 + 黑字 + 描边 | 白底 + 黑字 + 描边（与浅色一致，或描边用 `--color-line-border-subtle`） |
| **Green** | 绿底 + 白字 | 保持原色（#2bc287 + 白字） |
| **Red** | 红底 + 白字 | 保持原色（#f74b60 + 白字） |

- 实现时可通过父容器 class（如 `.color-mode-col--dark`）或 `[data-theme="dark"]` 覆盖对应类型按钮的背景与文字色，Green/Red 在暗黑下通常不切换。

### 7.6 按钮样式汇总（全类型 × 变体 × 状态）

设计稿 [Figma 134759:47832](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/?node-id=134759-47832) 提供**按钮样式汇总**，便于一次性查阅所有组合。演示页 `demo/button.html` 第 8 节按该节点实现。

| 维度 | 取值 |
|------|------|
| **类型** | 一级（Primary）、二级（Secondary）、绿色（Green）、红色（Red） |
| **样式变体** | 常规样式、icon+文字、文字+icon、纯 icon |
| **状态** | 默认、Hover、按下、禁用、加载 |

- 每种类型一张表：行 = 四种样式变体，列 = 五态；图标使用 Iconplaceholder，实现与 §5、§7.3 一致。

---

## 8. 设计令牌速查 (Design Tokens)

按钮所用颜色类 Token 与 [Color.md](Color.md) 对齐（文本色、背景、功能色、分割线等）；本规范采用 `--color-*` 命名以兼容 Figma 设计稿，实现时可与 Color 中 `--text-*`、`--bg-*`、`--line-*`、`--func-*` 等映射或统一为同一套变量。

### 8.1 主按钮与通用

| 用途 | 变量名 | 建议 Fallback |
|------|--------|----------------|
| 主按钮背景 | `--color-cmpt-button-primary` | `#303236` |
| 主按钮/反色文字 | `--color-text-inverse-primary` | `#FFFFFF` |
| 白底按钮文字 / 深色字 | `--color-text-text-primary`、`--color-text-always-black` | `#070808` |
| 绿/红按钮文字（白字） | `--color-text-inverse-primary`、`--color-text-always-white` | `#FFFFFF` |
| Hover/Pressed 文字（Primary） | `--color-text-text-tertiary` | `#A0A3A7` |
| 圆角 | 固定值 | `99px` |
| 字体 | — | `Switzer, sans-serif` |
| 行高 | — | `1.3` |
| 字间距 | — | `0` |

### 8.2 白 / 次级 / 软色 (White / Secondary / Faded)

| 用途 | 变量名 | 建议 Fallback |
|------|--------|----------------|
| 白背景 | `--color-bg-primary` / `--color-bg-always-white` | `#FFFFFF` |
| 软色背景 Default | `--color-cmpt-button-soft` | `#F5F6F7` |
| 软色背景 Pressed | `--color-cmpt-button-soft-active` | `#DFE0E2` |
| 软色禁用背景 | `--color-cmpt-button-soft-disable` | `#F5F6F7` |
| 主文字（深色） | `--color-text-text-primary` | `#070808` |
| 次要文字 | `--color-text-text-secondary` | `#84888C` |
| 禁用文字 | `--color-text-text-disable` | `#C4C7CA` |

### 8.3 绿 / 红 (Green / Red)

| 用途 | 变量名 | 建议 Fallback |
|------|--------|----------------|
| 绿 Default | `--color-function-trade-buy` | `#2BC287` |
| 绿 Pressed | `--color-function-trade-buy-active` | `#20A174` |
| 红 Default | `--color-function-trade-sell` | `#F74B60` |
| 红 Pressed | `--color-function-trade-sell-active` | `#D6364E` |
| 红（可选） | `--color-function-hot` | `#F7594B` |

---

## 9. 规格速查表（Web 单页）

| 规格 | 高 | 水平 Padding | 字号 | 字重 | 圆角 |
|------|----|--------------|------|------|------|
| XXSmall | 28px | 12px | 12px | 500 | 99px |
| XSmall | 32px | 12px | 14px | 500 | 99px |
| Small | 36px | 16px | 14px | 500 | 99px |
| Medium | 40px | 20px | 14px | 500 | 99px |
| Large | 44px | 24px | 16px | 500 | 99px |
| XLarge | 48px | 24px | 16px | 500 | 99px |
| XXLarge | 56px | 32px | 18px | 600 | 99px |

---

## 10. Text Button 文本按钮组件

本规范根据 Figma 设计稿 **Text Button_Web Guidelines**（节点 `134759:59584`）中的 **Button Text_V5** 组件自上而下逐项提取，精确描述默认样式、类型、状态、尺寸、设计变量与组合方式。

**设计稿来源：**  
[Text Button_Web Guidelines](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=134759-59584)（节点 `134759:59584`）

**组件名称：** Button Text_V5（无底色、无边框的文本型按钮/链接）

**实现建议：** 前端应以统一的 Text Button 组件封装（例如 `TextButton`），在业务页面中通过 props 映射设计稿中的 Type-color、State、Font-Size、Variants 等维度，避免直接堆叠样式写裸 `<a>` / `<button>`。

**设计稿「组件类型」维度：** Type-color（类型色）| State（状态）| Font-Size（字号）| Variants（变体：Prefix icon、Suffix icon、Font-SemiBold、Underline-Solid、Underline-Dash、Arrow、Icon i）

**设计稿更新日期：** Last updated 07/04/2025（以 Figma 页脚为准）

---

### 10.1 默认样式（单一规范源）

以下为**默认态**的完整定义，作为实现基准；类型/状态/尺寸/变体在其上叠加变化。

| 属性 | 取值 | 说明 |
|------|------|------|
| **组件** | Button Text_V5 | 无背景、无边框，仅文字或文字+图标 |
| **默认类型** | Black | 主文案色，见 §10.3 |
| **默认状态** | Normal | 未悬停、未按下、未禁用、未聚焦 |
| **默认字号** | Large 18px | 见 §10.2 尺寸表 |
| **默认字重** | Semibold (600) | 设计稿默认样式标注「Black_Normal_Large-18px_Font Semibold」 |
| **文字颜色** | `var(--color-text-text-primary, #070808)` | 主文字色 |
| **字体** | Switzer, sans-serif | 与面性 Button 共用 |
| **行高** | `1.3` | 与 Button 一致 |
| **字间距** | `0` | 无额外 letter-spacing |
| **布局** | `display: inline-flex; align-items: center; justify-content: center; gap: 4px` | 内容水平排列，图标与文字间隙 4px |
| **视觉高度** | 约 23–24px | 由行高与字号决定；推荐可点击区域高度 ≥24px，可通过父容器 padding 扩大热区 |

- 设计稿「默认样式」区块展示示例文案：**「Lg-Button Text link」**，即 Large 18px、Semibold、Black、Normal。

---

### 10.2 基础定义与形状

- **无背景、无边框：** 仅文字 + 可选前缀/后缀图标（含 Arrow、Icon i 等变体）。
- **字体全局：** Switzer，行高 1.3，letter-spacing 0；字重与字号按尺寸与变体区分，见 §10.3、§10.4。字阶与 Font 规范对应关系见 [Font.md](Font.md)。

---

### 10.3 尺寸（Font-Size）

设计稿 **Font-Size** 维度为：**Large_18px、Medium_16px、Small_14px、XSmall_12px**。

| 规格名 | 字号 | 字重 | 行高 | 设计令牌（Figma） |
|--------|------|------|------|------------------|
| **Large** | 18px | 600 (Semibold) 或 500 (Medium) | 1.3 | Subtitle/S5 600 18px、S6 500 18px |
| **Medium** | 16px | 500 (Medium) | 1.3 | Body/B3 500 16px |
| **Small** | 14px | 500 (Medium) | 1.3 | Body/B7 500 14px |
| **XSmall** | 12px | 500 (Medium) | 1.3 | Body/B11 500 12px |

- **Large 18px** 为唯一支持 **Font-SemiBold** 变体的规格（设计稿 Variants 含「Font-SemiBold」），即可选 600 或 500；其余规格为 500。

---

### 10.4 类型与色彩（Type-color）

设计稿 **Type-color** 维度为：**Black、Gray、Blue**（类型顺序 1、2、3）。

| 类型 | 状态 | 文本颜色（变量 / Fallback） | 说明 |
|------|------|----------------------------|------|
| **Black** | Normal | `var(--color-text-text-primary, #070808)` | 默认文案型按钮，主文字色 |
| **Black** | Hover / Pressed | 同上 | 设计稿中 Black 的 Hover 仍为 #070808，可配合下划线或轻微样式区分 |
| **Gray** | Normal | `var(--color-text-text-secondary, #84888C)` | 弱化信息 |
| **Gray** | Hover / Pressed | `var(--color-text-text-primary, #070808)` | 悬停/按下时变为主文字色，增强可点击感 |
| **Blue** | Normal | `var(--color-text-text-brand, #0068FF)` | 标准链接色 |
| **Blue** | Hover / Pressed | `var(--color-link-pressed, #004FD9)` | 悬停与点击使用更深 pressed 色 |

---

### 10.5 图标与间距（Icons & Spacing）

设计稿中图标与文字之间为 **4px 间距**（Figma `gap-[4px]`）；图标尺寸与字号档位对应。

| 文本规格 | 图标尺寸（Figma 实测） | 说明 |
|----------|------------------------|------|
| **Large 18px** | 24×24px（prefix/suffix 通用） | 设计稿 Prefix icon、Suffix icon 为 24px 容器 |
| **Medium 16px** | 20×20px | Body/B3 档搭配 |
| **Small 14px / XSmall 12px** | 16×16px | Body/B7、B11 档搭配 |

- **Arrow 变体：** 后缀使用 CEX_chevron_right 类箭头，Large 档为 20×20px。
- **Icon i 变体：** 使用 info 圆形图标（如 CEX_circlefilled_info），色值为 **Icon-Quaternary `#A0A3A7`**；Large 档 20×20px，Small/XSmall 档 16×16px。
- 多个元素（如 prefix + 文字 + suffix）之间均保持 **4px** gap。

---

### 10.6 设计令牌速查（Text Button）

| 用途 | 变量名 | 建议 Fallback |
|------|--------|----------------|
| 主文字（Black） | `--color-text-text-primary` | `#070808` |
| 次要文字（Gray） | `--color-text-text-secondary` | `#84888C` |
| 链接色（Blue Default） | `--color-text-text-brand` | `#0068FF` |
| 链接按下/悬停（Blue Hover） | `--color-link-pressed` | `#004FD9` |
| 禁用文字 | `--color-text-text-disable` | `#C4C7CA` |
| 下划线装饰色 | `--color-text-text-tertiary` | `#A0A3A7` |
| 提示 icon（CEX_circlefilled_info） | Icon-Quaternary | `#A0A3A7` |

---

### 10.7 语义与可访问性

- 链接跳转使用 `<a>`，行为按钮使用 `<button>`。
- Disabled 态：`aria-disabled="true"` 或 `disabled`，并配合 `--color-text-text-disable` 与 `cursor: not-allowed`。
- Focus 态：保证 `:focus-visible` 时有明显指示（下划线或 outline），便于键盘用户识别。

---

## 11. Footer Button 底部按钮

本规范根据 Figma 设计稿 **Footer Button/底部按钮**（节点 `134759:59586`）中的 **FooterButtonV5-web-48px**、**FooterButton_V5_H5** 等组件自上而下提取，精确描述默认样式、类型、变量、规范场景与颜色模式。

**设计稿来源：**  
[Figma - Footer Button/底部按钮](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=134759-59586)（节点 `134759:59586`）

**组件名称：** FooterButtonV5-web-48px（Web）、FooterButton_V5_H5（H5）

**设计稿「Doc type」维度：** Primary、Secondary、Faded、Critical、Highlight（类型）；Icon（有无图标等变体）。

---

### 11.1 默认样式（单一规范源）

以下为 **FooterButtonV5-web-48px** 默认态的完整定义。

| 属性 | 取值 | 说明 |
|------|------|------|
| **组件** | FooterButtonV5-web-48px | 底部操作区容器 + 内嵌 ButtonV5-web |
| **容器宽度** | 375px | 与 H5 安全宽度一致，Web 可随布局缩放 |
| **容器内边距** | 16px（上下左右） | 设计稿明确「上下左右 Padding 值为 16px」 |
| **内嵌按钮** | ButtonV5-web | 与 §1～§7 面性按钮同源，圆角 99px、无描边 |
| **默认类型** | Primary（Type=Default Btn） | 深灰底、白字，见 §5.1 |
| **按钮高度（页面）** | 48px | 设计稿规则：**页面中** Footer button 高度为 **48px** |
| **按钮高度（Popup）** | 40px | 设计稿规则：**Popup 弹出层中** Footer button 高度为 **40px** |
| **水平内边距（48px 档）** | 24px | 与 ButtonV5-web XLarge-48px 一致 |
| **字号** | 16px | Body/B3 500 16px |
| **字重** | 500 (Medium) | 与 §2 一致 |
| **背景** | `var(--color-cmpt-button-primary, #303236)` | 主按钮背景 |
| **文字** | `var(--color-text-inverse-primary, #FFFFFF)` | 主按钮文字 |

- 设计稿组件属性含 **Agreement**、**Divider** 等布尔变体（如 Type=Default Btn, Agreement=False, Divider=False），用于协议勾选、分割线展示等场景。

---

### 11.2 类型（Type）

与 ButtonV5-web 类型对应，设计稿标注为 **Primary、Secondary、Faded、Highlight、Critical**。

| 类型 | 说明 | 背景 Default | 文字 Default | 对应 §5 |
|------|------|--------------|--------------|--------|
| **Primary** | 主操作 | `--color-cmpt-button-primary` (#303236) | `--color-text-inverse-primary` (#FFFFFF) | §5.1 |
| **Secondary** | 次要操作 | `--color-cmpt-button-soft` (#F5F6F7) | `--color-text-text-primary` (#070808) | §5.2 |
| **Faded** | 弱化操作 | `--color-cmpt-button-soft` | `--color-text-text-secondary` (#84888C) | §5.4 |
| **Highlight** | 高亮/强调 | 含 White、Green 等场景，以设计稿实例为准 | 见 §5.3、§5.5 | §5.3/5.5 |
| **Critical** | 危险/关键操作 | `--color-function-trade-sell` 等 | `--color-text-inverse-primary` | §5.6 Red |

- 状态（Default / Hover / Pressed / Disabled）与 §6 一致，复用同一套变量与动效。

---

### 11.3 规范场景（使用场景与高度规则）

设计稿明确按**使用场景**区分按钮高度：

| 场景 | 按钮高度 | 说明 |
|------|----------|------|
| **页面（Page）** | **48px** | Footer button 用在**页面**底部时，按钮高度为 48px |
| **Popup 弹出层** | **40px** | Footer button 用在 **Popup/弹窗** 底部时，按钮高度为 40px（与 Medium 档一致） |

- 容器 padding 保持 16px；单按钮通栏或双按钮并排等布局见 §11.5、§11.6。

---

### 11.4 容器、分割线与布局

| 属性 | 取值 | 说明 |
|------|------|------|
| **容器 padding** | 16px（上、下、左、右） | 设计稿「上下左右 Padding 值为 16px」 |
| **分割线（可选）** | Footer 上部 | 设计稿提及「Foot Button 上部 0.5*375px 的分割线、色值 Line-Divider」；实现时分割线颜色使用 `--color-line-divider` 或设计系统 Divider 令牌 |
| **布局** | 单按钮全宽 / 双按钮并排 / 多行按钮 + 文案 | 见设计稿「类型」与「极限规则/本地化」区块 |

- **Agreement：** 当 Agreement=True 时，可为底部区域增加协议勾选（Checkbox）+ 主按钮的组合布局；协议勾选实现时引用 [Checkbox.md](Checkbox.md) 与 [checkbox.html](../checkbox.html)。
- **Divider：** 当 Divider=True 时，在 Footer 上部展示分割线。

**底部按钮类型（九种，Figma 7454:79176）：**  
以下类型均在 **375px 宽**容器内、容器内边距 16px、按钮高度 48px，与默认底部按钮样式一致。演示见 [button.html](../demo/button.html) 第 14 节「底部操作按钮 - 类型」。

| 类型 | 说明 |
|------|------|
| **1. Default Btn** | 单枚主按钮全宽 |
| **2. Horizontal Btn** | 两枚按钮横向并排（Secondary + Primary），等分宽度，间距 12px |
| **3. Long Btn** | 两枚横向：左侧 Secondary 固定 96px 宽，右侧 Primary 占满剩余，间距 12px |
| **4. Long Btn+icon** | 左侧 Secondary 仅图标 48×48px，右侧 Primary 占满剩余，间距 12px |
| **5. Vertical Btn** | 两枚竖向堆叠：上 Primary、下 Secondary，各全宽，间距 12px |
| **6. Vertical Btn+Text** | 两枚竖向堆叠（Primary、Secondary）后，下方加一行文字链接「Button Text」，间距 16px |
| **7. Vertical Text** | 单枚 Primary 全宽，下方文字链接「Button Text」，间距 16px |
| **8. Vertical Text+Desc** | 单枚 Primary 全宽，下方描述文案（Description）+ 文字链接（Button Text），间距 16px |
| **9. Vertical Btn 2** | 上方单枚 Primary 全宽，下方两枚 Secondary 横向并排等分，间距 12px |

**底部按钮变量（Figma 7454:79251）：**  
在 375px 宽容器、内边距 16px、主按钮 48px 高的前提下，设计稿提供两种**变量**变体，演示见 [button.html](../demo/button.html) 第 14 节「底部操作按钮 - 类型」下的「变量」部分。

| 变量 | 说明 |
|------|------|
| **1. Agreement** | 容器内上方为协议勾选（Checkbox）+ 文案（Label），间距 8px；下方为全宽主按钮，整体垂直 gap 16px。**协议勾选实现时引用 Checkbox 组件库**：[Guidelines/Checkbox.md](Checkbox.md)、[checkbox.html](../checkbox.html)，切图见 `Guidelines/Slicing/Checkbox`。 |
| **2. Divider** | 容器顶部 0.5px 分割线（`--color-line-divider-divider` / #f2f3f4），内边距 16px，其下为全宽主按钮 |

---

### 11.5 设计令牌与变量（Footer Button）

Footer 内嵌按钮与 §8 主按钮、次级、绿/红 共用同一套设计令牌，无单独 Footer 专用色；容器与分割线建议如下。

| 用途 | 变量名 | 建议 Fallback |
|------|--------|----------------|
| 主按钮背景（Primary） | `--color-cmpt-button-primary` | `#303236` |
| 主按钮文字 | `--color-text-inverse-primary` | `#FFFFFF` |
| 次级/软色背景 | `--color-cmpt-button-soft` | `#F5F6F7` |
| 主文字（Secondary） | `--color-text-text-primary` | `#070808` |
| 弱化文字（Faded） | `--color-text-text-secondary` | `#84888C` |
| 危险/红（Critical） | `--color-function-trade-sell` | `#F74B60` |
| 分割线 | `--color-line-divider` 或 Divider 规范 | 以 Divider.md / 设计稿为准 |

---

### 11.6 颜色模式（Light / Dark）

设计稿中 Footer Button 区块存在**双列布局**（如左右各 720px 内容区），分别展示**浅色模式**与**深色模式**下的 Footer 按钮效果。

| 模式 | 说明 |
|------|------|
| **Light** | 默认浅色背景页面，Footer 容器与按钮按 §11.1、§11.2 变量呈现 |
| **Dark** | 深色背景下，背景/文字变量需切换为深色主题令牌（如 `--color-bg-primary` 深色、`--color-text-inverse-primary` 等），保证对比度与可读性；具体令牌以设计系统 Dark 规范为准 |

- 实现时通过主题类或 CSS 变量切换（如 `[data-theme=dark]`）应用深色变量，与设计稿对照校验。

---

### 11.7 组合方式与 H5 对应

| 组合 | 说明 | 规格要点 |
|------|------|----------|
| **单按钮** | 一根通栏主按钮 | 宽度 100%（或 375px 内减 padding），高度 48px（页面）/ 40px（Popup） |
| **双按钮** | 左右并排两枚 | 设计稿中两枚 ButtonV5-web 等分或按比例分布，间距与 §4.2 一致（8～12px） |
| **多行** | 主按钮 + 下方次要按钮或 Text Button | 设计稿有「主按钮 + ButtonText_V5_H5」等组合，间距 16px 等 |
| **带图标** | Icon 变体 | 与 §7.3 Prefix/Suffix/Only Icon 一致 |

**H5 对应：**

- **FooterButton_V5_H5**：容器 375×80（含 16px 上下 padding），内嵌 **ButtonV5-web** 高度 48px，左右各 16px 留白（即按钮宽 343px）；双按钮时两枚并排，总宽 343px 内部分配。
- H5 与 Web 共用类型、状态、变量；仅容器宽度与内嵌按钮宽度按 375 安全宽适配。

---

### 11.8 规格速查（Footer Button）

| 项目 | 页面场景 | Popup 场景 |
|------|----------|------------|
| 按钮高度 | 48px | 40px |
| 容器 padding | 16px | 16px |
| 圆角 | 99px | 99px |
| 字号 | 16px | 14px（与 Medium 一致） |
| 字重 | 500 | 500 |

---

**文档版本：** 根据 Figma **Button_Web Guidelines**（节点 `134759:59585`）、**Button Guidelines-H5**（节点 `134759:59583`，Web-H5 对应关系、点击热区 1:1、极端原则）、Button Guidelines（`134759:59587`）、**Text Button_Web Guidelines**（节点 `134759:59584`）、**Footer Button/底部按钮**（节点 `134759:59586`）及子节点逐项提取；ButtonV5-web / Button_V5_H5 实例以设计稿表格与组件为准。  
**最后更新：** 与设计稿「Last Updated」保持一致，开发侧以本规范与设计稿对照为准。

