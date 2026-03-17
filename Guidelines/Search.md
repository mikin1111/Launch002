# Search 组件规范（Figma 设计稿标准）

## 文档说明

本规范根据 Figma 设计稿 **Search Guidelines**（测试V5.1 Web-H5 组件库）中的 Search 组件**逐项提取**，描述组件属性、类型、状态、尺寸、变量、使用规范等所有可量化与可实现的属性，供开发与设计对齐使用。

**设计稿来源：**  
[Search Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-82264)

**规范节点 ID：** 7642:82264（Search Guidelines Section）

**演示页面：** [search.html](../demo/search.html) 按尺寸、状态、变体、下拉面板、Web-H5 对应关系分块展示，与本节规范一一对应。

**字体规范：** 字号、字重、行高、字间距遵循 [Font.md](./Font.md)（字阶 Web 端 Body B3/B7/B8 等），预览 [font.html](../demo/font.html)。

**颜色规范：** 字色、背景、边框、功能色须使用 [Color.md](./Color.md)（Gate APP 颜色 Token）中定义的 CSS 变量；本规范使用 `--color-*` 等命名以兼容设计稿，与 Color 中 `--text-*`、`--bg-*`、`--line-*` 等语义一致，Light/Dark 双主题以 Color.md 为准，预览 [Color.html](../demo/Color.html)。

**最后更新：** 与 Figma 文档一致；已引用 Font.md、Color.md

---

## 1. 设计原则与定位

### 1.1 组件定位

| 说明 |
|------|
| Search 用于**用户输入关键词进行搜索**，通过搜索图标、占位符文本与输入框组合，提供直观的搜索入口。 |
| 属于**表单输入/搜索**类组件，可与 Select、Input 等配合使用，支持下拉联想、空状态、加载态等扩展场景。 |
| 设计稿主组件为 **SearchV5-web**，类型为 **Filled**（填充背景，`Type=Filled`），状态为 **Inactive**（默认）。 |

### 1.2 类型与变体（规范表）

设计稿「Details」中按列归纳：

| 类型 (Type) | 状态 (Status) | 尺寸 (Size) | 变体 (Variants) |
|-------------|---------------|-------------|-----------------|
| Primary     | Inactive      | Large-48px   | Label（可选）    |
| Secondary   | Hover / Active / Searching / Completed | Medium-40px | 带标题（Header） |
| Faded       | —             | Small-32px  | 下拉面板（Select） |
| Highlight   | —             | XSmall-28px | 空状态（Empty）  |
| Critical    | —             | Large-70px（带 Label） | RTL 布局 |

- **Type**：Primary、Secondary、Faded、Highlight、Critical（语义色/边框色变体，设计稿主用 Primary）；输入框类型为 **Filled**（填充背景，无描边）。
- **Status**：Inactive、Hover、Active、Searching、Completed（见 §6）。
- **Size**：Large-48px、Medium-40px、Small-32px、XSmall-28px；带 Label 时整体高度约 70px。
- **Variants**：Label（可选标题）、带标题（Header）、下拉面板（Select_V5）、空状态（EmptyV5-web）、加载态（面板/选项）、Web-H5 对应关系、RTL 布局。

---

## 2. 组件结构

### 2.1 层级关系

```
Search 整体 (SearchV5-web)
├── Label（可选）
│   └── 14px Regular，主文字色，与输入框间距 4px
└── 输入框容器 (search)
    ├── 搜索图标 (CEX_Search)
    └── 占位符/输入文本
```

- **Label**：可选，位于输入框上方，使用 Input_V5/Label 规范。
- **输入框**：必选，包含搜索图标与文本区域；图标与文本水平排列，间距由 `gap` 控制。

### 2.2 图标与文本布局

| 布局模式 | 说明 |
|----------|------|
| **LTR（默认）** | 图标在左，文本在右；`flex-direction: row`。 |
| **RTL** | 文本在左，图标在右；`flex-direction: row-reverse` 或 `dir="rtl"`；占位符示例「بحث」（阿拉伯语）。 |

---

## 3. 基础样式定义

### 3.1 字体与字阶 (Typography)

| 属性 | 取值 | 说明 |
|------|------|------|
| **字体家族** | `Switzer`（英文）/ `PingFang SC`（中文） | 设计稿指定，fallback `sans-serif`；详见 [Font.md](./Font.md) §1 字体家族。 |
| **占位符/输入字阶** | Large: **B3** 500 16px；Medium/Small/XSmall: **B7** 500 14px | 对应 [Font.md](./Font.md) §3.4 Body 单行正文。 |
| **Label 字阶** | **B8** 400 14px | 对应 [Font.md](./Font.md) §3.4 Body B8（Regular 字重）。 |
| **行高** | `1.3`（约 130%） | 与 [Font.md](./Font.md) 一致，`line-height: 1.3`。 |
| **字间距** | `0` | 无额外 letter-spacing，与 Font 规范一致。 |
| **对齐** | 水平垂直居中 | 依赖 flex 居中。 |

### 3.2 字色 (Text Color)

字色须使用 [Color.md](./Color.md) 中定义的颜色 Token；本规范采用 `--color-*` 命名以兼容设计稿，与 Color 中 `--text-*` 语义对应。

| 状态/元素 | 设计令牌 | Color.md 对应 | Fallback | 说明 |
|-----------|----------|---------------|----------|------|
| **占位符 (Placeholder)** | `var(--text-tertiary)` | [Color.md](./Color.md) §1 **Text-Tertiary** | `#A0A3A7` | 未输入时的提示文本。 |
| **输入文本 (Value)** | `var(--text-primary)` | [Color.md](./Color.md) §1 **Text-Primary** | `#070808` | 用户输入后的主文字色。 |
| **Label** | `var(--text-primary)` | [Color.md](./Color.md) §1 **Text-Primary** | `#070808` | 可选标题文字色。 |
| **Disabled** | `var(--text-disabled)` | [Color.md](./Color.md) §1 **Text-Disabled** | `#C4C7CA` | 禁用态。 |

### 3.3 背景与边框

| 属性 | 取值 | Color.md 对应 | 说明 |
|------|------|---------------|------|
| **背景色** | `var(--cmpt-input)` | [Color.md](./Color.md) §8 组件颜色 **Input** | `#F5F6F7`（Light），输入框底色。 |
| **边框** | 无 | — | 默认无可见边框，边界由背景色与圆角定义。 |
| **激活态边框** | `var(--cmpt-component-active)` | [Color.md](./Color.md) §8 **Component-active** | Hover/Active/Searching 时 `#303236`（Light）。 |
| **圆角** | 见 §4 尺寸规格 | — | Large 为 8px，Medium/Small/XSmall 为 6px。 |

### 3.4 搜索图标 (CEX_Search)

| 属性 | 取值 | 说明 |
|------|------|------|
| **图标名称** | `CEX_Search` | 来自 Icon 规范，Basic Product Icons 目录。 |
| **文件路径** | `Guidelines/icons/Basic Product Icons/CEX_Search.svg` | 与 [Icon.md](./Icon.md) §2 一致；HTML 中空格需编码为 `%20`。 |
| **颜色** | 与占位符一致 | `var(--text-tertiary)`，见 [Color.md](./Color.md) §1。 |
| **尺寸** | 见 §4 尺寸规格 | Large 24×24px，Medium 20×20px，Small/XSmall 16×16px。 |

**HTML 引用示例（见 [search.html](../demo/search.html) 演示页）：**

```html
<img src="Guidelines/icons/Basic%20Product%20Icons/CEX_Search.svg" alt="Search" />
```

- 图标由父容器 `.search__icon` 控制宽高，`img` 使用 `width: 100%; height: 100%; object-fit: contain` 适配各尺寸档位。

---

## 4. 尺寸规格 (Sizing)

### 4.1 Size 规格总览

| 规格名称 | 高度 (Height) | 水平内边距 | 垂直内边距 | 图标尺寸 | 图标与文本间距 | 圆角 | 字号 | 设计令牌 |
|----------|---------------|------------|------------|----------|----------------|------|------|----------|
| **Large** | 48px | 12px | 12px | 24×24px | 8px | 8px | 16px | Web_V5/Body/B3 500 16px |
| **Medium** | 40px | 12px | 10px | 20×20px | 6px | 6px | 14px | Web_V5/Body/B7 500 14px |
| **Small** | 32px | 12px | 7px | 16×16px | 6px | 6px | 14px | Web_V5/Body/B7 500 14px |
| **XSmall** | 28px | 8px | 5px | 16×16px | 6px | 6px | 14px | Web_V5/Body/B7 500 14px |

### 4.2 带 Label 时的整体高度

| 规格 | 输入框高度 | Label 高度 | 间距 | 总高度 |
|------|------------|------------|------|--------|
| **Large + Label** | 48px | 18px | 4px | 约 70px |

- Label 与输入框间距：`gap: 4px`。
- Label 字号：14px Regular，行高约 18px。

---

## 5. 内边距与间距 (Padding & Spacing)

### 5.1 输入框内边距

| 尺寸 | padding-left | padding-right | padding-top | padding-bottom | gap（图标与文本） |
|------|--------------|---------------|--------------|----------------|------------------|
| **Large** | 12px | 12px | 12px | 12px | 8px |
| **Medium** | 12px | 12px | 10px | 10px | 6px |
| **Small** | 12px | 12px | 7px | 7px | 6px |
| **XSmall** | 8px | 8px | 5px | 5px | 6px |

### 5.2 Label 与输入框

| 属性 | 取值 | 说明 |
|------|------|------|
| **Label 与输入框间距** | `4px` | `gap: 4px`，与 Spacing 规范一致。 |

---

## 6. 状态 (States)

设计稿 [Status 节点 7642:82346](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-82346) 定义五档状态。

### 6.1 状态枚举

| 状态 | 名称 | 说明 | 视觉变化 |
|------|------|------|----------|
| **Inactive** | 默认/占位符 | 无输入、无焦点、未悬停 | 背景 `--cmpt-input`，无边框，占位符「Search」`--text-tertiary`，图标同色。 |
| **Hover** | 悬停 | 鼠标悬停于输入框 | 背景 `--cmpt-input`，**边框** `1px solid var(--cmpt-component-active)`，占位符与图标保持 tertiary。 |
| **Active** | 激活/聚焦 | 获得焦点，光标可见，待输入 | 背景 `--cmpt-input`，**边框** `1px solid var(--cmpt-component-active)`，占位符「Search」`--text-tertiary`，光标闪烁。 |
| **Searching** | 搜索中 | 用户已输入，正在搜索 | 背景 `--cmpt-input`，**边框** `1px solid var(--cmpt-component-active)`，输入文本 `--text-primary`，**右侧清除图标** `CEX_circlefilled_error` 20×20px，点击可清空。 |
| **Completed** | 已完成 | 搜索完成，显示结果态 | 背景 `--cmpt-input`，无边框，文本「Search completed」`--text-primary`，无光标、无清除图标。 |

### 6.2 边框与激活态

| 状态 | 边框 | 说明 |
|------|------|------|
| **Inactive / Completed** | 无 | 默认无描边。 |
| **Hover / Active / Searching** | `1px solid var(--cmpt-component-active)` | 激活态描边，见 [Color.md](./Color.md) §8 Component-active。 |

### 6.3 清除图标（Searching 状态）

| 属性 | 取值 | 说明 |
|------|------|------|
| **图标** | `CEX_circlefilled_error` | 来自 [Icon.md](./Icon.md) Basic Product Icons。 |
| **尺寸** | 20×20px | Large 档；其他档位按比例缩放。 |
| **位置** | 输入框右侧 | 与输入文本间距 8px。 |
| **交互** | 点击清空 | 点击右侧关闭 icon 清空搜索框内容。 |
| **浏览器默认** | 隐藏 | 不显示 `<input type="search">` 自带的彩色清除按钮，仅使用右侧自定义关闭 icon。 |

### 6.4 其他状态（扩展）

| 状态 | 说明 |
|------|------|
| **Disabled** | 不可交互；文本、图标、背景色变浅，使用 `--text-disabled`，见 [Color.md](./Color.md) §1。 |
| **Error** | 输入校验失败；`box-shadow: 0 0 0 2px var(--func-red)`，下方显示错误提示；见 [Color.md](./Color.md) §5 功能色 **Trade-sell**。 |

---

## 7. 变体 (Variants)

### 7.1 Label 变体

| 属性 | 取值 | 说明 |
|------|------|------|
| **显示** | 可选（`label={true/false}`） | 输入框上方显示「Label」文本。 |
| **字号** | 14px | Web_V5/Body/B8 400 14px。 |
| **字色** | `var(--text-primary)` | 主文字色，见 [Color.md](./Color.md) §1。 |
| **与输入框间距** | 4px | `gap: 4px`。 |

### 7.2 带标题（Header）变体

| 说明 |
|------|
| 输入框可添加标题，增强场景引导；标题位于输入框上方，使用 Input_V5/Title 或类似规范。 |

### 7.3 下拉面板（Input dropdown）变体

设计稿 [8009:12580](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/?node-id=8009-12580)。

| 说明 |
|------|
| 点击输入框可展开下拉面板（Select_V5）；点击选项后立即触发对应操作并关闭面板。 |
| **Select 内嵌搜索框：** [Select 组件](./Select.md) 下拉面板中的搜索框须引用本 Search 组件（相同结构：`.search`、`.search__input-wrap`、`.search__icon`（CEX_Search）、`.search__input`），样式与 §3–§4 一致；**Medium 面板**用 **32px 高**（Small 规格：16×16 图标），**Large 面板**用 **40px 高**（Medium 规格：20×20 图标）。 |
| 搜索中，下拉面板选项里的匹配项变蓝色高亮，颜色 `--text-brand`，见 [Color.md](./Color.md) §1。 |
| 搜索无结果显示空状态（EmptyV5-web），根据下拉场景自定义调整尺寸。空状态插图需区分 light/dark 主题：`assets/search-empty-light.png`（浅色）、`assets/search-empty-dark.png`（深色），可通过 `prefers-color-scheme` 切换。空状态文案「No results found」12px、`var(--text-secondary)`，见 [Color.md](./Color.md) §1。 |

| 属性 | 取值 | 说明 |
|------|------|------|
| **面板背景** | `var(--layer-1)` | 见 [Color.md](./Color.md) §7 Layer-1（Light #FFFFFF）。 |
| **边框** | `1px solid var(--line-border-subtle)` | 见 [Color.md](./Color.md) §3 Line-Border-Subtle。 |
| **圆角** | `8px` | 与输入框一致。 |
| **阴影** | `0 6px 16px rgba(0,0,0,0.08)` | 下拉浮层阴影。 |
| **最大高度** | `216px` | 超出可滚动。 |
| **与输入框间距** | `4px` | 面板距输入框底部。 |
| **面板内边距** | `8px` | 卡片上下左右留 8px 间距。 |
| **选项 hover** | `var(--cmpt-component-hover)` | 见 [Color.md](./Color.md) §8 Component-hover；hover 灰色底色与面板左右边缘间距 8px（由面板 padding 实现）。 |
| **选中图标** | `CEX_circlefilled_success` 16×16px | 右侧勾选图标。 |

### 7.4 加载态（Loader）变体

设计稿 [19021:326691](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/?node-id=19021-326691)。

| 场景 | Loader 位置 | 规格 |
|------|-------------|------|
| **面板加载中** | 显示在弹出面板中心 | 24px 圆形旋转（Circular_Loading_无渐变_白），面板 min-height 216px |
| **选项加载中** | 显示在列表底部 | 16px 圆形旋转，底部占位高度 40px |

### 7.5 Web-H5 对应关系（高度一一对应）

设计稿 [7642:82726](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/?node-id=7642-82726)。

| 平台 | 宽度 | 说明 |
|------|------|------|
| **Web** | 240px（默认） | `search--w-default` |
| **H5** | 375px 容器内通栏 | 容器 `width: 375px`，内边距 `padding: 0 16px`，Search 占满剩余宽度（343px） |

| Web 尺寸 | H5 对应尺寸 |
|----------|-------------|
| Small-32px | Small-32px |
| Medium-40px | Medium-40px |
| Large-48px | Medium-40px |

---

## 8. 变量（Props / 设计令牌）

### 8.1 组件 Props

| 变量名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `label` | boolean | `false` | 是否显示 Label。 |
| `placeholder` | string | `"Search"` | 占位符文本；支持多语言。 |
| `value` | string | `""` | 当前输入值。 |
| `disabled` | boolean | `false` | 是否禁用。 |
| `size` | `'large' \| 'medium' \| 'small' \| 'xsmall'` | `'large'` | 尺寸档位。 |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | 文本方向，用于 RTL 布局。 |
| `width` | `'min' \| 'default' \| 'max'` | `'default'` | 宽度变体：min 64px、default 240px、max 480px。 |

### 8.2 设计令牌 / CSS 变量

Search 所用颜色 Token 与 [Color.md](./Color.md) 对齐，直接使用 Color 规范中的 CSS 变量；主题切换以 `data-theme` 为准，见 Color.md §12。

| 变量名 | 用途 | Color.md 章节 |
|--------|------|---------------|
| `--cmpt-input` | 输入框背景色 | §8 组件颜色 Input |
| `--cmpt-component-active` | 激活态边框 | §8 Component-active |
| `--cmpt-component-hover` | 下拉选项 hover | §8 Component-hover |
| `--text-primary` | 输入文本、Label | §1 Text-Primary |
| `--text-tertiary` | 占位符、图标 | §1 Text-Tertiary |
| `--text-disabled` | 禁用态 | §1 Text-Disabled |
| `--text-brand` | 匹配项高亮 | §1 Text-Brand |
| `--func-red` | Error 边框/提示 | §5 功能色 Trade-sell |
| `--layer-1` | 下拉面板背景 | §7 Layer-1 |
| `--line-border-subtle` | 下拉面板边框 | §3 Line-Border-Subtle |
| `--ease-out` | 动效曲线 | — |

---

## 9. 交互 (Interaction)

### 9.1 触发与动效

| 属性 | 取值 | 说明 |
|------|------|------|
| **交互方式** | Click（点击） | 点击输入框聚焦，展开下拉面板（若启用）。 |
| **运动时长** | `100ms` | 展开/收起、状态切换的动效时长。 |
| **运动曲线** | `Ease out` | `cubic-bezier` 或 `ease-out`。 |

### 9.2 行为

- 点击输入框：获得焦点，占位符消失，显示光标。
- 输入文本：实时显示匹配结果（若启用下拉联想）；匹配项高亮 `text-brand`。
- 选择选项：立即触发对应操作并关闭面板。
- 无结果：显示空状态（EmptyV5-web）。
- 键盘：支持 Tab 聚焦、Enter 提交（以产品为准）。

---

## 10. 使用规范 (Usage Guidelines)

### 10.1 适用场景

| 场景 | 说明 |
|------|------|
| **页面顶部导航** | 全局搜索入口。 |
| **列表筛选** | 表格、列表上方的搜索筛选。 |
| **下拉选择** | 与 Select_V5 配合，实现搜索+选择联动。 |
| **表单输入** | 作为表单中的搜索字段。 |

### 10.2 使用原则

- **占位符**：简洁明了，如「Search」「搜索」；支持多语言与 RTL。
- **语义化**：使用 `<input type="search">` 或 `role="search"`，`aria-label` 描述功能。
- **无障碍**：确保屏幕阅读器能正确识别；占位符与标签清晰传达功能。
- **可访问性**：支持键盘导航；聚焦、输入、禁用、错误状态有清晰视觉反馈。

### 10.3 极限规则 / 本地化

| 说明 |
|------|
| 占位符文本需支持多语言；RTL 语言（如阿拉伯语）时，图标与文本布局需对调。 |
| 根据下拉场景自定义空状态尺寸与文案。 |

---

## 11. 附录：与 Figma 节点对应

| 节点类型 | 节点 ID 示例 | 说明 |
|----------|--------------|------|
| Search Guidelines Section | 7642:82264 | 规范主节点。 |
| SearchV5-web (Large) | 7642:86956, 7642:88231 | 48px 高度。 |
| SearchV5-web (Medium) | 7642:87084 | 40px 高度。 |
| SearchV5-web (Small) | 7642:87102 | 32px 高度。 |
| SearchV5-web (XSmall) | 15216:25486 | 28px 高度。 |
| SearchV5-web (带 Label) | 8009:12570 | 70px 总高度。 |
| Search + Select_V5 | 8009:23755, 15216:25541 | 下拉面板联动。 |
| Search + EmptyV5-web | 18774:11685 | 空状态。 |
| 加载态（面板/选项） | 19021:326691 | 面板加载中 24px、选项加载中 16px 旋转。 |
| Web-H5 对应关系 | 7642:82726 | 高度一一对应，Web 240px / H5 375px 容器 16px 间距。 |

---

**参考链接：**  
- [Search Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-82264)  
- [search.html](../demo/search.html) 演示页面  
- [Font.md](./Font.md) 字阶规范 · [font.html](../demo/font.html) 字阶预览  
- [Color.md](./Color.md) 颜色 Token · [Color.html](../demo/Color.html) 颜色预览
