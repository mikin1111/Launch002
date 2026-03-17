# Select 组件规范（Figma 设计稿标准）

## 文档说明

本规范根据 Figma 设计稿 **Select Guidelines**（测试V5.1 Web-H5 组件库）中的 Select 组件**逐项提取**，描述组件类型、属性、状态、变量、尺寸、Dropdown 规范、Select Menu 规范及使用原则等所有可量化与可实现的属性，供开发与设计对齐使用。

**设计稿来源：**  
[Select Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7844-24475)

**演示页面：** [demo/select.html](../demo/select.html) 按**默认样式、状态、尺寸、变量、Dropdown 类型、下拉面板尺寸**分块展示：Dropdown 尺寸/状态/宽度、可交互 Select、Label/Helper/Info/Prefix icon、Coin Text、带搜索、选项项状态、空状态、下拉面板三种尺寸（Small/Medium/Large）等，与本节规范一一对应。

**字体规范：** Select 组件的字号、字重、行高须与 [Font.md](./Font.md)（字阶组件规范）对齐，§5 字体与字色中的字阶 Token（如 B7、B11、B3）对应 Font.md 中的 Body 档；字阶预览见 [font.html](../demo/font.html)。

**颜色规范：** Select 组件的背景、边框、文字色、分割线、链接色等须使用 [Color.md](./Color.md)（Gate APP 颜色 Token 规范）中定义的语义；本规范采用的 CSS 变量（如 `--color-text-text-primary`）与 Color.md 的 Text/Background/Line 等 Token 对应，实现时可按项目 Token 体系映射；颜色 Token 预览见 [Color.html](../Color.html)。

**规范节点 ID：** 7844:24475（Select Guidelines Section）

**最后更新：** 与 Figma 文档一致；已引用 [Font.md](./Font.md)、[Color.md](./Color.md)。

---

## 1. 设计原则与定位

### 1.1 组件定位

| 说明 |
|------|
| Select 用于**从预定义列表中单选或多选**，通过下拉触发器（Dropdown）展开选项面板（Select Menu），用户点击选项完成选择。 |
| 属于**表单输入/选择**类组件，与 Input、Checkbox、Radio 等配合使用。 |
| 设计稿主组件为 **DropdownV5-web**（触发器）+ **Select_V5**（下拉面板），另有 **Dropdown Text_V5**（Coin Text 轻量触发器）。 |

### 1.2 组件层级关系

```
Select 整体
├── Dropdown（触发器 / Trigger）
│   ├── DropdownV5-web（标准输入框型）
│   └── Dropdown Text_V5（Coin Text 型）
└── Select Menu（下拉面板）
    └── Select_V5
        ├── search（可选）
        ├── list（选项列表）
        └── Scroll bar（可选）
```

---

## 2. 组件类型与变体（规范表）

设计稿「Details」中按列归纳：

| 类型 (Type) | 状态 (Status) | 尺寸 (Size) | 变体 (Variants) |
|-------------|---------------|-------------|-----------------|
| Primary     | Normal        | 24px        | Line Icon       |
| Secondary   | Pressed       | 28px        | Fill Icon       |
| Faded       | —             | 32px        | —               |
| Highlight   | —             | 40px        | —               |
| Critical    | —             | 48px        | —               |
| —           | —             | 60px / 62px / 82px | 多行/带 Description |

- **Type**：Primary、Secondary、Faded、Highlight、Critical（语义色/边框色变体）。
- **Status**：Normal（默认）、Pressed（展开/激活）。
- **Size**：24px、28px、32px、40px、48px、60px、62px、82px（触发器高度）。
- **Variants**：Line Icon（线型图标）、Fill Icon（面型图标）；Select 有 Select（标准）、Coin Text（轻量）。

---

## 3. Dropdown（触发器）规范

### 3.1 Dropdown 类型

| 类型名称 | 组件 | 说明 |
|----------|------|------|
| **DropdownV5-web** | 标准输入框型 | 带背景、边框、占位文本、展开/收起图标，适用于表单、筛选等场景。 |
| **Dropdown Text_V5** | Coin Text 型 | 纯文本 + 可选 Coin 图标 + 下拉箭头，无边框无背景，适用于紧凑场景（如币种选择）。 |

### 3.2 DropdownV5-web 属性

| 属性 | 取值 | 说明 |
|------|------|------|
| **背景色** | `var(--color-cmpt-input, #f5f6f7)` | 输入框背景。 |
| **边框** | `1px solid var(--color-cmpt-component-active, #303236)` | 激活/展开态边框。 |
| **圆角** | `6px` | `border-radius: 6px`。 |
| **水平内边距** | `8px` | `padding-left/right: 8px`。 |
| **字体** | Switzer Medium 14px | 设计令牌 Web_V5/Body/B7 500 14px。 |
| **字色** | `var(--color-text-text-primary, #070808)` | 主文字色。 |
| **Label** | 可选 | 使用 Input_V5/Label，14px Regular。 |
| **Helper** | 可选 | 使用 Input_V5/Helper，12px Regular，色 `--color-text-text-tertiary`。 |
| **Prefix Icon** | 可选 | 20×20px 占位，左侧插入。 |
| **Suffix Icon** | 必选 | 展开/收起箭头，见 §3.5。 |

### 3.3 Dropdown Text_V5 属性

| 属性 | 取值 | 说明 |
|------|------|------|
| **背景** | 透明 | 无背景、无边框。 |
| **字体** | Switzer Medium 14px | 设计令牌 Web_V5/Body/B7 500 14px。 |
| **字色** | `var(--color-text-text-primary, #070808)` | 主文字色。 |
| **Coin** | 可选 | 20×20px 圆形图标，与文本间距 8px。 |
| **下拉箭头** | CEX_down_fill 14×14px | 与文本间距 2px。 |

### 3.4 Dropdown 尺寸 (Height)

| 规格名称 | 高度 (Height) | 水平内边距 | 字号 | 设计令牌 |
|----------|---------------|------------|------|----------|
| **XXSmall** | 24px | 8px | 12px | Web_V5/Body/B11 500 12px |
| **XSmall** | 28px | 8px | 14px | Web_V5/Body/B7 500 14px |
| **Small** | 32px | 8px | 14px | Web_V5/Body/B7 500 14px |
| **Medium** | 40px | 8px | 14px | Web_V5/Body/B7 500 14px |
| **Large** | 48px | 8px | 16px | Web_V5/Body/B3 500 16px |
| **XLarge** | 60px / 62px | 8px | 14px | 多行/带 Description |
| **XXLarge** | 82px | 8px | 14px | 多行/带 Description |

- **垂直内边距：** 由固定高度 + 内容垂直居中实现。
- **默认宽度：** 240px；可自定义宽度，最小 64px，最大 480px。

### 3.5 Dropdown 展开/收起图标

| 属性 | 取值 | 说明 |
|------|------|------|
| **图标尺寸** | 24px | 展开/收起图标显示区域。 |
| **热区大小** | 24px | 点击区域。 |
| **距面板间距** | 4px | 选择器与下拉面板之间的间距。 |
| **48px 档** | 箭头区域 `padding: 4px` | Large 触发器：无边框时 `padding: 0 12px`，有边框时 `padding: 0 11px`；Hover/Open 同规则。 |
| **Line 类型** | 16×16px | 线型图标。 |
| **Fill 类型** | 24×24px | 面型图标。 |
| **图标** | CEX_chevron_down / CEX_chevron_up | 收起时向下，展开时向上。 |

### 3.6 Dropdown 状态

| 状态 | 说明 | 视觉变化 |
|------|------|----------|
| **Normal** | 默认、未展开 | 背景 `--color-cmpt-input`，边框 `--color-cmpt-component-active`。 |
| **Pressed** | 展开/激活 | 边框保持，Chevron 旋转为向上。 |
| **Hover** | 悬停 | 背景略深或边框高亮（以设计稿为准）。 |
| **Disabled** | 禁用 | 文本、图标、边框色变浅。 |
| **Error** | 错误 | 边框色变红，下方显示错误提示。 |

### 3.7 Dropdown 变量（Props）

| 变量名 | 类型 | 说明 |
|--------|------|------|
| `label` | boolean | 是否显示 Label。 |
| `helper` | boolean | 是否显示 Helper 文本。 |
| `prefixIcon` | boolean | 是否显示前缀图标。 |
| `iconI` | boolean | 是否显示信息图标（info）。 |
| `placeholder` | string | 占位文本。 |
| `value` | string | 当前选中值显示文本。 |
| `disabled` | boolean | 是否禁用。 |
| `size` | 'xxsmall' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'xxlarge' | 尺寸档位。 |

**变量展示（设计稿 7844:48020）：** Select 共 6 种变体：1 default、2 info、3 label、4 helper、5 Prefix icon、6 all（Label + Helper + Info + 国家图标）；Coin Text 共 2 种：1 Coin、2 No Coin。有 Helper 时，下拉面板与 trigger 同包在 `select-trigger-area` 内，下拉相对 trigger 定位、与选择器间距 4px，并压住下方 Helper 文字。

### 3.8 Dropdown 宽度规范

| 场景 | 宽度 | 说明 |
|------|------|------|
| **默认** | 240px | 标准表单场景。 |
| **最小** | 64px | 紧凑场景。 |
| **100px** | 100px | Coin Text 等轻量场景。 |
| **400px** | 400px | 宽面板。 |
| **480px** | 480px | 最大宽度场景。 |

- **自定义：** 下拉面板宽度允许自定义，可根据场景拉伸，组件默认提供 100px 宽度。

---

## 4. Select Menu（下拉面板）规范

### 4.1 Select_V5 类型

| 类型 | 说明 |
|------|------|
| **Default** | 标准选项列表，无搜索。 |
| **With Search** | 带搜索框，选项可过滤；**搜索框须引用 [Search 组件](./Search.md)**（SearchV5-web），结构为图标 CEX_Search + 输入框，样式与 Search 规范一致（背景、圆角、字色、占位符色等）。 |
| **With Loader** | 加载中显示 Loader。 |

### 4.2 Select Menu 基础样式

| 属性 | 取值 | 说明 |
|------|------|------|
| **背景** | `var(--color-layer-1, white)` | 白色背景。 |
| **边框** | `1px solid var(--color-line-divider-strong, #f2f3f4)` | 分割线色。 |
| **圆角** | `8px` | `border-radius: 8px`。 |
| **阴影** | `0px 6px 16px 0px rgba(0,0,0,0.08)` | 浮动面板阴影。 |
| **宽度** | 与 Trigger 一致或自定义 | 默认与 Dropdown 同宽。 |

### 4.3 Select Menu 结构

```
Select_V5
├── search（可选）
│   └── SearchV5-web（引用 [Search 组件](./Search.md)）
│       └── 搜索框：图标 CEX_Search + 输入框，规格与 Search 一致
├── list+scroll
│   ├── list
│   │   └── Select_V5/item（选项项）
│   └── Scroll bar（可选）
└── Loader（可选）
```

### 4.4 选项项 (Select_V5/item) 规范

#### 4.4.1 选项项尺寸

| 规格 | 高度 | 内边距 | 字号 | 设计令牌 |
|------|------|--------|------|----------|
| **Small** | 28px 或 32px | 6px 水平 或 8px | 12px | Web_V5/Body/B11 500 12px；100px 宽面板（§4.7）下为 32px 高、8px 内边距。 |
| **Medium** | 40px | 8px 水平，10px 垂直 | 14px | Web_V5/Body/B7 500 14px |
| **Large** | 48px | 8px 水平，12px 垂直（或 14px 垂直） | 14px | Web_V5/Body/B7 500 14px |

#### 4.4.2 选项项状态

| 状态 | 说明 | 视觉变化 |
|------|------|----------|
| **Inactive** | 默认 | 背景透明，无选中图标。 |
| **Inactive Hover** | 悬停 | 背景 `var(--color-cmpt-component-hover, #f5f6f7)`，圆角 6px。 |
| **Active** | 选中 | 右侧显示 CEX_circlefilled_success 16×16px 图标。 |
| **Active Hover** | 选中且悬停 | 背景 hover + 右侧选中图标。 |
| **Disabled** | 禁用 | 文字 `var(--color-text-text-disable)`，无选中图标，不可点击。 |

演示见 demo/select.html「7. 下拉面板状态」（设计稿 9163:79387）。

#### 4.4.3 选项项结构

```
Select_V5/item
└── Option
    └── item
        ├── icon（可选，选中图标）
        ├── option（文本）
        └── Select_V5/item/coin（可选）
            ├── Icon（20×20px 币种图标）
            └── Line（3×12px 蓝色竖线）
```

#### 4.4.4 选项项变量

| 变量名 | 类型 | 说明 |
|--------|------|------|
| `status` | 'Inactive' \| 'Active' \| 'Inactive Hover' | 选中/悬停状态。 |
| `subtext` | 'False' | 是否显示副文本。 |
| `suffix` | 'False' | 是否显示后缀。 |
| `type` | 'Default' | 选项类型。 |

### 4.5 下拉面板类型（Dropdown 类型，设计稿 9163:75934）

| 类型 | 说明 |
|------|------|
| **1 Default** | 纯文案选项，无前置图标。 |
| **2 Icon/Coin** | 选项带前置图标（占位图标或币种/国家图标），与选择器「icon+文字」样式一致。 |

- **选项前置 icon 与文字颜色一致：** 占位图标（如 Iconplaceholder）颜色与选项文字主色一致（`--color-text-text-primary`），可通过 CSS `filter: brightness(0) saturate(100%)` 或 SVG 填色实现。
- **选择器与下拉样式一致：** 当选择器为「Prefix icon + 文字」或「国家/币种 icon + 文字」时，下拉选项也须为「icon + 文字」样式，不可仅展示纯文案。
- **面板内间距：** 下拉面板上下 padding 8px；选项左右 margin 8px（类型展示时）；每个选项高度 40px（Medium 档）。

### 4.6 二级选项缩进

| 属性 | 取值 | 说明 |
|------|------|------|
| **缩进** | 8px | 含有二级选项时，二级选项缩进 8px。 |

### 4.7 下拉面板尺寸（设计稿 9163:76514）

| 尺寸 | 面板宽度 | 选项高度 | 搜索 | 说明 |
|------|----------|----------|------|------|
| **Small** | 100px | 32px | 无 | 列表内边距 4px；选项圆角 4px、字号 12px；前置图标 16×16px；选中图标 14×14px。 |
| **Medium** | 240px | 40px | 有 | **搜索框高 32px**（Search Small 规格：16×16 图标、7px 12px 内边距）；搜索区 padding 8px；列表 padding 8px。 |
| **Large** | 480px | 48px | 有 | **搜索框高 40px**（Search Medium 规格：20×20 图标、10px 12px 内边距）；搜索区 pt 12px、pb 4px、px 12px；列表 px 12px、py 8px；选项垂直 padding 14px。 |

每种尺寸均可搭配 **Default**（纯文案选项）或 **Icon/Coin**（选项带前置图标/国家图标）。演示见 demo/select.html「6. 下拉面板尺寸」。

#### 4.7.1 400px 面板规格（设计稿 9255 等）

| 属性 | 取值 | 说明 |
|------|------|------|
| **面板宽度** | 400px | 大尺寸下拉面板（变体 10、13–16）。 |
| **四周间距** | 12px | 搜索区 padding 12px 12px 0；列表 padding 12px。 |
| **选项高度** | 48px | 400px 面板内选项统一 48px。 |
| **选项左右内间距** | 12px | 选项 `padding-left/right: 12px`。 |

#### 4.7.2 16 个 Select_V5 下拉面板变体（设计稿 134900:15114 / 9255）

演示见 demo/select.html「8. 下拉面板变量」，网格每行 2 列展示。

| 变体 | 宽度 | 要点 |
|------|------|------|
| **1** | Small 100px | 纯文案选项。 |
| **2–4** | Medium 240px | Default / Icon 占位 / 左侧蓝色竖线（3×12px，`--color-link-default`），非 icon 占位。 |
| **5** | Medium 240px | 所有选项右侧为展开/收起箭头（Suffix Dropdown，CEX_chevron_down/up 16×16）；点击展开二级选项，二级缩进 8px；二级选项可选中（勾选图标）。 |
| **6** | Medium 240px | 左侧勾选组件（Checkbox 16px，引用 Checkbox 规范），无右侧选中勾选 icon。 |
| **7** | Medium 240px | 有副标题（主标题 + Subtitle，12px 次要色）；无搜索框；每项高 56px；列表 max-height 320px。 |
| **8** | Medium 240px | 无左侧 icon 占位；右侧 Hot icon（CEX_hot_fill，引用 Icon 组件）；文字与 Hot icon 间距 6px，文字宽度自适应。 |
| **9** | Medium 240px | 无搜索框；标题后跟标签（引用 Tag 组件，16px 灰色 Primary）；布局同变体 8。 |
| **10** | 400px | 带搜索；选项 48px。 |
| **11** | Medium 240px | 左侧 icon 占位（Iconplaceholder 20×20）。 |
| **12** | Medium 240px | 左侧币种 icon（Currency Icons，如 Crypto_BTC/ETH/USDT，引用 Icon 规范）。 |
| **13** | 400px | 左侧 icon 占位；选项 48px；四周 12px。 |
| **14** | 400px | 带搜索；左侧国家 icon（National Flag，如 cn.svg）；选项 48px。 |
| **15** | 400px | 基于 14，右侧为文字展示（14px 字重 500、主色），无右侧勾选 icon。 |
| **16** | 400px | 基于 14，无右侧勾选 icon；增加小标题分类（`.select-list-category`，14px Regular 次要色）与分割线（`.select-list-divider`，上下各 8px 间距）；列表 max-height 320px。 |

- **选项右侧文字**（变体 15）：`.option-suffix-text`，14px、字重 500、`--color-text-text-primary`。
- **分割线**：`border-top: 1px solid var(--color-line-divider-strong)`，`margin: 8px 0`。

### 4.8 滚动条

| 属性 | 取值 | 说明 |
|------|------|------|
| **显示条件** | 内容多时 | 当 Select Menu 内容多时，显示滚动条。 |
| **Description 时** | 必有 | 当有 Description 时，必有滚动条。 |
| **设计稿** | 容器 8px 宽（面板右侧），滑块 3px，容器内左 1px、右 4px 间距 | 部分系统/浏览器（如 macOS overlay 滚动条、Chrome 对 thumb 样式限制）下难以完全还原，实现时可退化为仅滑块 3px。 |
| **实现** | 3px 宽，99px 圆角 | 滑块色 `--color-text-text-tips,#c4c7ca`，最小高度 28px；保证各系统下均能稳定显示 3px 宽滑块。 |

### 4.9 空状态

| 属性 | 取值 | 说明 |
|------|------|------|
| **显示条件** | 内容为空 | 当 Select Menu 内容为空时，显示空状态元素。 |
| **组件** | GTEmptyV5 | 使用空状态组件。 |

### 4.10 多选回显

| 属性 | 取值 | 说明 |
|------|------|------|
| **回显方式** | 逗号隔开 | 当 Select Menu 为多选时，回显到下拉框用逗号隔开。 |

---

## 5. 字体与字色

本节字阶、字色须与 [Font.md](./Font.md)（字阶规范）、[Color.md](./Color.md)（颜色 Token 规范）对齐；实现时字号/字重/行高参照 Font.md 的 Body 档，颜色使用 Color.md 的 Text/Background/Line 等 Token 或项目内对应 CSS 变量。

### 5.1 字体

| 场景 | 字阶 Token | 字号 | 字重 | 行高 |
|------|------------|------|------|------|
| **Dropdown 文本** | Web_V5/Body/B7 | 14px | Medium (500) | 1.3 |
| **Dropdown 小尺寸** | Web_V5/Body/B11 | 12px | Medium (500) | 1.3 |
| **Dropdown 大尺寸** | Web_V5/Body/B3 | 16px | Medium (500) | 1.3 |
| **选项项文本** | Web_V5/Body/B7 | 14px | Medium (500) | 1.3 |
| **选项项小尺寸** | Web_V5/Body/B11 | 12px | Medium (500) | 1.3 |
| **搜索占位** | Web_V5/Body/B7 | 14px | Medium (500) | 1.3 |
| **Helper** | — | 12px | Regular (400) | 1.3 |

### 5.2 字色

| 场景 | 设计令牌 | Fallback | 说明 |
|------|----------|----------|------|
| **主文本** | `--color-text-text-primary` | 070808 | 选中值、选项文本。 |
| **占位/提示** | `--color-text-text-tertiary` | #a0a3a7 | 搜索占位、Helper。 |
| **禁用** | `--color-text-text-disable` | #C4C7CA | 禁用态文本。 |

---

## 6. 间距规范

| 场景 | 间距 | 说明 |
|------|------|------|
| **Trigger 与 Panel** | 4px | 选择器与下拉面板间距 4px。 |
| **Coin Text 字距面板** | 2px | Coin Text 类型文本与面板间距 2px。 |
| **Helper 与选择器** | 4px | Helper 文本与选择器（或 trigger-area）间距 4px。 |
| **有 Helper 时** | — | 下拉相对 trigger 定位，压住下方 Helper 文字。 |
| **文本与 Icon 间距** | 12px | 文本最长和 icon 间距为 12px，超出省略。 |
| **选项项内边距** | 8px 水平，10px 垂直 | Medium 尺寸选项。 |
| **列表内边距** | 8px | list 内边距（Medium）；Small 面板 4px，Large 为 12px/8px；**400px 面板** 12px。 |
| **400px 面板选项左右** | 12px | 选项 `padding-left/right: 12px`。 |
| **下拉面板上下** | 8px | 面板卡片上下 padding 8px（类型展示）。 |
| **选项左右** | 8px | 选项相对面板左右 margin 8px（类型展示）。 |
| **二级选项缩进** | 8px | 二级选项相对一级缩进。 |
| **分割线上下** | 8px | 列表内分割线（变体 16）`margin: 8px 0`。 |

---

## 7. 交互规范

### 7.1 触发方式

| 属性 | 取值 | 说明 |
|------|------|------|
| **交互方式** | Click | 点击触发展开/收起。 |
| **运动时长** | 100ms | 展开/收起动画时长。 |
| **运动曲线** | Ease out | 动画曲线。 |

### 7.2 键盘

| 按键 | 行为 |
|------|------|
| **Tab** | 聚焦到 Select。 |
| **Enter / Space** | 展开/收起下拉。 |
| **Arrow Up / Down** | 展开时在选项间导航。 |
| **Enter** | 选中当前高亮选项并关闭。 |
| **Escape** | 关闭下拉不选择。 |

### 7.3 选中高亮（UI 侧）

| 属性 | 取值 | 说明 |
|------|------|------|
| **选中字变蓝** | 仅 UI 侧规范 | 仅 UI 侧规范字变蓝色，组件开发只提供范例。 |

---

## 8. 使用规范

### 8.1 适用场景

| 场景 | 说明 |
|------|------|
| **表单选择** | 从预定义列表中选择一项或多项。 |
| **筛选/排序** | 筛选条件、排序方式选择。 |
| **币种/语言** | 币种、语言等切换，可用 Coin Text 型。 |
| **选项数量** | 建议 15 个以内；过多时可配合搜索。 |

### 8.2 不适用场景

| 场景 | 建议 |
|------|------|
| **仅 2 个互斥选项** | 使用 Radio 或 Toggle。 |
| **需自由输入** | 使用 Input 或 Autocomplete。 |
| **选项极多且需复杂搜索** | 使用带搜索的 ComboBox。 |

### 8.3 文案建议

| 原则 | 说明 |
|------|------|
| **占位符** | 清晰简洁，如「请选择」「选择币种」。 |
| **过长省略** | 文本最长和 icon 间距 12px，超出省略，建议优化文案。 |

### 8.4 极限规则 / 本地化

| 场景 | 说明 |
|------|------|
| **RTL** | 支持 RTL 布局，选项文本 `text-right`，`dir="auto"`。 |
| **多语言** | 选项文本支持多语言，如阿拉伯语「عنوان」。 |

---

## 9. H5 适配

### 9.1 PopupFilter/select_V5_H5

| 属性 | 取值 | 说明 |
|------|------|------|
| **高度** | 56px | H5 端 Select 触发器高度。 |
| **宽度** | 375px | 全屏弹窗场景。 |

### 9.2 H5 端类型

| 类型 | 说明 |
|------|------|
| **Primary** | 主色。 |
| **Secondary** | 次要色。 |
| **Faded** | 淡化。 |
| **Highlight** | 高亮。 |
| **Critical** | 警示。 |

---

## 10. 设计令牌汇总

以下为 Select 使用的视觉 Token；**颜色语义**须与 [Color.md](./Color.md) 一致，**字阶**须与 [Font.md](./Font.md) 一致。

| 用途 | Token | Fallback |
|------|-------|----------|
| 输入框背景 | `--color-cmpt-input` | #f5f6f7 |
| 激活边框 | `--color-cmpt-component-active` | #303236 |
| 悬停背景 | `--color-cmpt-component-hover` | #f5f6f7 |
| 主文字 | `--color-text-text-primary` | #070808 |
| 次要文字 | `--color-text-text-tertiary` | #a0a3a7 |
| 禁用文字 | `--color-text-text-disable` | #C4C7CA |
| 图层背景 | `--color-layer-1` | white |
| 分割线 | `--color-line-divider-strong` | #f2f3f4 |
| 链接色 | `--color-link-default` | #0068ff |
| 滚动条 | `--color-text-text-tips` | #c4c7ca |

---

## 11. 组件清单

| 组件名 | 节点 ID | 说明 |
|--------|---------|------|
| DropdownV5-web | 7073:1916 | 标准触发器 |
| Dropdown Text_V5 | 7073:2013 | Coin Text 触发器 |
| DropdownV5-web/suffix-40px | 7073:1995 | 40px 档展开图标 |
| DropdownV5-web/suffix-48px | 7073:2062 | 48px 档展开图标 |
| Select_V5 | 3345:23618 | 下拉面板 |
| Select_V5/item/medium | 9384:61977 | 选项项 Medium |
| Select_V5/small-28px | — | 选项项 Small |
| SearchV5-web | 7155:67471 | 搜索框 |
| GTEmptyV5 | — | 空状态 |
| PopupFilter/select_V5_H5 | — | H5 弹窗 |

---

## 附录：Figma 节点 ID 速查

- **Select Guidelines 主节点：** 7844:24475
- **默认样式（组件属性）：** 7844:45230
- **状态模块：** 7844:45242
- **尺寸模块：** 7844:47719
- **变量模块（Select 6 变体 + Coin Text 2 变体）：** 7844:48020
- **Dropdown 类型（Default / Icon/Coin）：** 9163:75934
- **下拉面板尺寸（Small / Medium / Large）：** 9163:76514
- **DropdownV5-web 实例：** 9163:74601, 7844:45264, 7844:47930 等
- **Select_V5 实例：** 7844:39027, 9163:76113, 9239:196341 等
- **16 个下拉面板变体（9255）：** 5 展开收起 9239:196054 / 9255:198541；6 左侧勾选 9255:197017；7 副标题 9255:197189；8 Hot icon 9163:78378；9 标签 9255:197263；10 大面板 48px 9255:197486；11 左侧 icon 占位 9255:197564；12 币种 icon 9255:197728；13 400+icon 占位 9255:197826；14 搜索+国家 icon 9255:197909；15 右侧文字无勾选 9255:198149；16 小标题+分割线 9255:198209
- **Dropdown Text_V5 实例：** 7844:47651, 7844:47988 等
