# Tabs 组件规范（Figma 设计稿标准）

## 文档说明

本规范根据 Figma 设计稿 **Tabs Guidelines**（测试V5.1 Web-H5 组件库）中的 Tabs 组件**逐项提取**，描述字号、字色、状态、间距、尺寸、交互、适配、类型与变体等所有可量化与可实现的属性，供开发与设计对齐使用。

**设计稿来源：**  
[Tabs Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-88549)

**规范节点 ID：** 7642:88549（Tabs Guidelines Section）

**预览页：** [tabs.html](../demo/tabs.html)

**字体规范：** 字号、字重、行高与 [Font.md](./Font.md) 字阶对应；默认 Tab 对应 **B7**（500 14px），Tabs Menu 对应 **S7**（600 16px）、Right Menu 对应 **B7**（500 14px）；字体使用方式见 [font.html](../demo/font.html)。

**颜色规范：** 字色、背景、分割线、功能色等须使用 [Color.md](./Color.md) 中定义的颜色 Token；Token 预览见 [Color.html](../demo/Color.html)。

**最后更新：** 与 Figma 文档一致

---

## 1. 设计原则与定位

### 1.1 组件定位

| 说明 |
|------|
| Tabs 用于**分段展示/切换内容**，通过标签（Tab 项）与下划线或纯文本样式区分选中与未选中。 |
| 属于**导航/内容切换**类组件，与底部导航、面包屑等配合使用时可作为二级导航。 |
| 设计稿主组件为 **Tabs_PrimaryV5-web**，类型为 **Underline**（下划线指示器）。 |

### 1.2 类型与变体（规范表）

设计稿「Details」中按四列归纳：

| 类型 (Type) | 状态 (Status) | 尺寸(primary) Size | 变体 (Variants) |
|-------------|---------------|---------------------|-----------------|
| Underline   | Inactive      | 52px                | Divider         |
| Text        | Inactive-Hover| 44px                | Tag             |
| —           | Underline Active / Text Active | 40px | Hot Icon        |
| —           | —             | 28px                | Dropdown        |

- **Type**：Underline（带下划线指示器）、Text（纯文本，无下划线）。
- **Status**：Inactive、Inactive-Hover、Underline Active / Text Active。
- **Size(primary)**：52px、44px、40px、28px（指 Tab 行高/点击区域高度）。
- **Variants**：Divider（底部分割线）、Tag（标签角标）、Hot Icon（热门图标）、Dropdown（超出时下拉）。

---

## 2. 基础样式定义

### 2.1 字体与字阶 (Typography)

| 属性 | 取值 | 说明 |
|------|------|------|
| **字体家族** | `Switzer` | 设计稿指定，fallback `sans-serif`；与字阶规范一致。 |
| **字阶 Token** | Web_V5/Body/B7 500 14px | 对应 [Font.md](./Font.md) 字阶 **B7**。 |
| **字号** | `14px` | 默认 Tab 文案字号，所有尺寸档位在「默认文案」下均为 14px（除大尺寸可对应 16px/18px，见 §3）。 |
| **字重** | `500 (Medium)` | 与设计稿 `font-["Switzer:Medium",sans-serif]` 一致。 |
| **行高** | `1.3`（约 130%） | 数值约 `1.2999999523162842`，实现用 `line-height: 1.3`。 |
| **字间距** | `0` | 无额外 letter-spacing。 |
| **对齐** | 水平垂直居中 | 依赖 flex 居中，不依赖行高撑高。 |

### 2.2 字色 (Text Color)

| 状态 | 设计令牌 | Fallback 色值 | 说明 |
|------|----------|---------------|------|
| **Underline Active / Text Active（选中）** | `var(--color-text-text-primary)` | `#070808` | 主文字色，深色。 |
| **Inactive（未选中）** | `var(--color-text-text-secondary)` | `#84888C` | 次要文字色。 |
| **Inactive-Hover（未选中悬停）** | `var(--color-text-text-tertiary)` | `#A0A3A7` | 对应 [Color.md](./Color.md) `--text-tertiary`。 |
| **Disabled（禁用）** | `var(--color-text-text-disable)` | `#C4C7CA` | 与 Button 等组件一致。 |

### 2.3 下划线指示器（仅 Underline 类型）

| 属性 | 取值 | 说明 |
|------|------|------|
| **高度** | `3px` | 与设计稿 `h-[3px]` 一致。 |
| **宽度** | `16px`（固定） | 设计稿中为固定 16px，不随文案宽度拉伸。 |
| **颜色** | `var(--color-text-text-primary, #070808)` | 与选中态文案一致。 |
| **圆角** | `1px` | `border-radius: 1px`。 |
| **位置** | **仅居中于文字** | 下划线只居中于 Tab 文案正下方，**不覆盖标签、Icon、箭头**；带 Tag/Icon/箭头时需用「文案块」（如 `.tabs__text-block`）包住文案+下划线，再与 Tag/Icon/箭头并列。 |
| **margin-bottom** | `0` | 下划线占底 3px 即可紧贴；勿用 `-3px` 以免与分割线重叠。 |
| **出现条件** | 仅当该 Tab 为 **Underline Active** 时显示。 |

### 2.4 底部分割线（Divider）

| 属性 | 取值 | 说明 |
|------|------|------|
| **显示** | 可选（`divider={true/false}`） | 设计稿中 Tabs 容器底部可带一条分割线。 |
| **线宽** | `1px` | 与 Divider 组件一致。 |
| **线色** | `--color-line-border-subtle` | Fallback `#f2f3f4`，对应 [Color.md](./Color.md) `--line-border-subtle`。 |
| **宽度** | `100%`（与 Tabs 容器同宽） | 整行通栏。 |
| **与下划线关系** | **紧贴** | Tabs 列表使用 `margin-bottom: -1px`（设计稿 `mb-[-1px]`），底部分割线被上拉 1px，与选中态下划线底边重叠，**无间隙**。该逻辑在 Underline、Tabs Menu 等所有 Tab 组件中统一。 |

---

## 3. 尺寸规格 (Sizing)

### 3.1 Size(primary) 与 Tab 行高、字号、字重

Tab 行高与**字号、字重**一一对应，共 **5 档**：

| 行高 (Height) | 字号 (Font Size) | 字重 (Font Weight) | 说明 |
|---------------|------------------|--------------------|------|
| **56px** | 24px | 600 (Semibold) | 最大档。 |
| **48px** | 18px | 600 (Semibold) | 大档。 |
| **44px** | 16px | 500 (Medium) | 中大档。 |
| **40px** | 14px | 500 (Medium) | **默认档**。 |
| **28px** | 12px | 500 (Medium) | 最小档，紧凑。 |

- **56px、48px** 使用字重 **600**；**44px、40px、28px** 使用字重 **500**。
- 实现时每档需**强制行高**。带 Tag/Icon/箭头的 Tab：**总高保持尺寸**（40px 档 = 40px），文案区 = 尺寸 − 3px（37px），底部 3px 给短横线，短横线紧贴灰色分割线。

### 3.2 内边距 (Padding)

| 属性 | 取值 | 说明 |
|------|------|------|
| **垂直（上下）** | `8px`（40px 档，未选中） | 设计稿 `py-[8px]`，保证文案与上下边缘间距。 |
| **文案区与短横线（带 Tag/Icon/箭头）** | 总高 40px，文案区 37px，底部 3px 给短横线 | `.tabs__text-block` 总高 40px，`.tabs__text-block-inner` 37px 文案垂直居中，下划线占底 3px 紧贴灰色分割线。 |
| **水平** | **0**（不包左右间距） | Tab 选项左右无内边距；选项间仅靠 `gap` 净间距区分，见 §4。 |

带 Tag/Icon/箭头的 Tab：`.tabs__text-block` 总高 = 尺寸（40px 档 = 40px）；`.tabs__text-block-inner` = 37px 文案区；下划线 `flex: 0 0 3px` 占底 3px 紧贴灰色分割线。

### 3.3 对齐 (Alignment)

| 属性 | 取值 | 说明 |
|------|------|------|
| **整行 Tabs** | `justify-content: flex-start`（列表） | 多个 Tab 作为一组在容器内**左对齐**；若需居中或右对齐，可改为 `center` / `flex-end`。 |
| **单 Tab 内文案** | `align-items: center`、`text-align: center`（Tab 项） | 每个 Tab 内文字与下划线在各自区域内**水平居中对齐**。 |

### 3.4 Tab 项宽度

| 说明 |
|------|
| **宽度**：由**文案内容 + 水平内边距**决定，**自适应**，无固定宽度。 |
| 设计稿中单 Tab 可为 30px、31px（纯图标或极短文案）至 100px+（长文案）；整组 Tabs 总宽可超出视口，此时需配合 **滚动** 或 **Dropdown** 变体。 |

---

## 4. 间距 (Spacing)

| 属性 | 取值 | 说明 |
|------|------|------|
| **Tab 选项左右** | **无** | Tab 选项**不包左右内边距**（`padding-left` / `padding-right` 为 0），仅保留选项与选项之间的净间距。 |
| **Tab 与 Tab 之间（净间距）** | 按尺寸：56→24px、48→20px、44→16px、40→16px、28→12px | 选项之间仅保留 `gap`，无额外 margin/padding。 |
| **Tabs 列表与底部分割线** | **紧贴** | 列表 `margin-bottom: -1px`，分割线与选中态下划线底边重叠。 |
| **下划线与底部分割线** | **0 间隙** | 下划线占底 3px，列表 `margin-bottom: -1px` 使分割线上拉，短横线紧贴灰色分割线（勿用 `margin-bottom: -3px` 以免重叠）。 |
| **文案区与下划线** | 总高 40px，文案区 37px，下划线占底 3px | 短横线紧贴灰色分割线。 |

---

## 5. 状态 (States)

### 5.1 状态枚举

| 状态 | 名称 | 字色 | 下划线 | 说明 |
|------|------|------|--------|------|
| **Inactive** | 未选中 | `--color-text-text-secondary` (#84888C) | 无 | 默认未选中。 |
| **Inactive-Hover** | 未选中悬停 | 略深或 tertiary | 无 | 悬停反馈。 |
| **Underline Active / Text Active** | 选中 | `--color-text-text-primary` (#070808) | 有（仅 Underline 类型） | 当前选中项。 |
| **Disabled** | 禁用 | `--color-text-text-disable` (#C4C7CA) | 无 | 不可点击。 |

### 5.2 类型与状态对应

- **Underline 类型**：选中时显示 3px×16px 主色下划线；未选中、悬停、禁用均无下划线。
- **Text 类型**：无下划线，仅通过字色与字重区分选中/未选中（若设计稿有字重区分则遵循）。

---

## 6. 变体 (Variants)

| 变体 | 说明 |
|------|------|
| **Divider** | 是否显示 Tabs 容器底部分割线（1px，`--color-line-border-subtle`）。 |
| **Tag** | Tab 项带标签角标：**尺寸** 高度 20px，**内间距** 4px，**圆角** 2px，**字号** 12px，**字重** 500；**背景色** Function/Tag-Primary `#A7F757`，**字色** Text/Always-Black `#070808`；与文案并列，**文案与标签间距 4px**，下划线仅居中于文案。 |
| **Hot Icon** | Tab 项带热门/强调图标，引用 **Icon.md** 中 `CEX_hot_fill`（Guidelines/icons/Basic Product Icons/CEX_hot_fill.svg），**尺寸 14px**，与 Tab 文案**间距 4px**，下划线仅居中于文案。 |
| **Arrow** | Tab 项右侧带箭头，**朝上** 使用 Icon.md 中 `CEX_up_fill`、**朝下** 使用 `CEX_down_fill`（Basic Product Icons），**尺寸 14px**，与 Tab 文案**间距 4px**；点击箭头展开选择下拉框，**下拉框距 Tab 2px**；朝下=收起、朝上=展开；**展开/收起 150ms ease-out 动效**；下拉选项单选，选中项使用 Icon.md 中 `CEX_circlefilled_success`；hover 底色 #F5F6F7，距两侧 4px，圆角 4px；下拉框描边 Line/Divider/Strong #F2F3F4；点击外部或选择后收起；不触发 Tab 切换；下划线仅居中于文案。 |
| **Dropdown** | Tab 数量过多时，超出部分收起到「更多」等下拉中，交互见 §8。 |

---

## 7. 交互 (Interaction)

### 7.1 触发与动效

| 属性 | 取值 | 说明 |
|------|------|------|
| **交互方式** | Click（点击） | 点击 Tab 切换选中态。 |
| **运动时长** | `100ms` | 切换与下划线移动的动效时长。 |
| **运动曲线** | `Ease out` | `cubic-bezier` 或 `ease-out`。 |

### 7.2 行为

- 点击**未选中的 Tab**：该 Tab 变为 Underline Active / Text Active，原选中 Tab 变为 Inactive。
- **键盘**：若支持无障碍，需支持 Tab 聚焦与 Enter/Space 切换；箭头键切换选中项以设计/产品为准。
- **禁用**：Disabled 状态不响应点击与焦点。

---

## 8. 适配与溢出 (Adaptability)

### 8.1 宽度与数量

| 场景 | 建议 |
|------|------|
| **Tab 少、宽度充足** | 水平排布，间距 16px，底部分割线 100% 宽。 |
| **Tab 多、宽度不足** | **横向滚动**：Tabs 容器 `overflow-x: auto`，内部 flex 不换行，保证 16px 间距；**点击 Tab 时根据边缘自动滚动**：若为右边缘最后一个可见，向前滚动露出下一个；若为左边缘第一个可见，向后滚动露出上一个（`scrollIntoView`）。 |
| **Tab 过多、需收纳** | **Dropdown 变体**：超出部分放入「更多」等下拉，点击展开可选 Tab；交互见设计稿「Tabs Dropdown」与 DEMO 链接。 |

### 8.2 响应式

- **断点**：设计稿未强制断点；实现时可随页面布局在窄屏下保留横向滚动或切换为 Dropdown。
- **触屏**：保证 Tab 点击区域不小于 40px 高（优先 40px 档），必要时增加水平 padding。

### 8.3 文案过长

- 单 Tab 文案过长时可**截断**并显示省略号（`text-overflow: ellipsis`），或限制最大宽度并 Tooltip 展示全文，以产品为准。

---

## 9. 实现要点汇总

### 9.1 CSS / 样式

| 项目 | 值 |
|------|-----|
| 字体 | Switzer, sans-serif |
| 字号 | 14px（默认档） |
| 字重 | 500 |
| 行高 | 1.3 |
| 选中字色 | `var(--color-text-text-primary, #070808)` |
| 未选字色 | `var(--color-text-text-secondary, #84888C)` |
| Tab 间距 | 16px |
| Tab 行高（默认） | 40px |
| 选中项 padding-bottom | 无 |
| 下划线 | 高 3px，宽 16px，主色，圆角 1px；带 text-block：`flex: 0 0 3px` 占底 3px；`margin-bottom: 0`（列表 -1px 已使分割线紧贴） |
| Tabs 列表 margin-bottom | -1px（与底部分割线紧贴） |
| 底部分割线 | 1px，`--color-line-border-subtle` |
| 动效 | 100ms ease-out |

### 9.2 设计令牌速查（均引用 [Color.md](./Color.md)）

| 用途 | Token | Fallback | Color.md 对应 |
|------|--------|----------|---------------|
| 主文字/选中/下划线 | `--color-text-text-primary` | #070808 | `--text-primary` |
| 次要文字/未选 | `--color-text-text-secondary` | #84888C | `--text-secondary` |
| 未选悬停 | `--color-text-text-tertiary` | #A0A3A7 | `--text-tertiary` |
| 禁用文字 | `--color-text-text-disable` | #C4C7CA | `--text-disabled` |
| 底部分割线 | `--color-line-border-subtle` | #f2f3f4 | `--line-border-subtle` |
| 选中项背景（Card 等） | `--color-layer-active` | #FFFFFF | `--layer-active` |
| 容器背景（Card） | `--color-cmpt-input` | #F5F6F7 | `--cmpt-input` |
| 胶囊式选中背景 | `--color-cmpt-button-soft` | #F5F6F7 | `--cmpt-button-soft` |
| Hot 图标/红点 | `--color-function-hot` | #F7594B | `--function-hot` |
| Tag 标签背景 | `--color-function-tag-primary` | #A7F757 | `--function-tag-primary` |
| 白边/白底 | `--color-bg-primary` | #FFFFFF | `--bg-primary` |
| 页面/区块背景 | `--color-bg-surface` | #FFFFFF | `--bg-primary` |
| 三级背景 | `--color-bg-tertiary` | #F2F3F4 | `--bg-tertiary` |

### 9.3 正确与错误示例（原则）

- **正确**：同一组 Tabs 内仅一个 Underline Active；间距统一 16px；下划线仅选中项显示；字号/字色与规范一致；**总高 40px，文案区 37px，下划线占底 3px 紧贴灰色分割线**（列表 `margin-bottom: -1px`，下划线 `margin-bottom: 0`）。
- **错误**：多个 Tab 同时带下划线；Tab 间距不一致或过密；未选中使用主色字色；禁用态未使用 disable 色；**选中态下划线与底部分割线之间出现可见间隙**（多为选中项 padding-bottom 过大或未设列表 -1px/下划线 -3px 导致）。

---

## 10. 与 Figma 节点对应

| 内容 | 节点 ID |
|------|---------|
| Tabs Guidelines 整节 | 7642:88549 |
| 主组件 Tabs_PrimaryV5-web 示例 | 7888:15663 |
| Details 表（Type/Status/Size/Variants） | 7642:89074 |
| 交互说明（Click / 100ms / Ease out） | 11948:66587 |
| Tabs 横向滚动 / Dropdown 示例 | 11948:69103、11948:70088 |
| **Tabs Card Guidelines** | **7895:11260** |
| TabsCardV5-web 组件 | 7899:14022 |
| 卡片 Tab 五态展示 | 7900:16826 |
| 卡片 Tab 尺寸（44/32/28/24px） | 7895:11391 |
| **Tabs Guidelines-H5** | **7642:89101** |
| Web 与 H5 尺寸对应表 | 7642:89107 |
| **Tabs Menu Guidelines** | **7719:54442** |
| **Tabs Menu 类型（Divider / Right Menu / Masking）** | **7719:54463** |
| TabsMenuV5-web 组件 | 7719:54456 |
| TabsMenuV5-web/left | 7719:54499 |
| TabsMenuV5-web/right item | 7777:38469 |
| **Tabs Menu 左侧变量** | **7777:38363** |
| **Tabs Menu 右侧变量** | **7719:54515** |

---

## 11. Tabs Card 类型（Card 卡片式）

**设计稿来源：** [Tabs Card Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7895-11260)

### 11.1 与 Underline 类型的区别

| 对比项 | Underline 类型 | Card 类型 |
|--------|----------------|-----------|
| **容器** | 透明背景，底部分割线 | 浅灰背景 `#F5F6F7`，圆角 8px，内边距 4px |
| **选中态** | 下划线 3px×16px | 白色背景 `--color-layer-active`，圆角 6px |
| **未选中** | 字色 #84888C | 字色 #84888C，无背景 |
| **整体风格** | 简洁、下划线指示 | 卡片式、分段明显 |

### 11.2 TabsCardV5-web 规范

| 属性 | 取值 | 说明 |
|------|------|------|
| **容器宽度** | `fit-content` | 根据内容自适应，不通栏 |
| **容器背景** | `--color-cmpt-input` | Fallback `#F5F6F7`，对应 [Color.md](./Color.md) `--cmpt-input` |
| **容器圆角** | `8px` | `border-radius: 8px` |
| **容器内边距** | `4px` | 四周 |
| **Tab 项高度** | `32px` | 40px 档容器内 |
| **Tab 项内边距** | `16px` 水平、`8px` 垂直 | `padding: 8px 16px` |
| **选中项背景** | `--color-layer-active` | Fallback `white`，对应 [Color.md](./Color.md) `--layer-active` |
| **选中项圆角** | `6px` | `border-radius: 6px` |
| **字号** | `14px` | 与 Underline 一致 |
| **字重** | `500` | Switzer Medium |

### 11.3 卡片 Tab 五态（Figma 7900:16826）

| 状态 | 说明 | 背景 | 字色 |
|------|------|------|------|
| 1 选中 | Active/Selected | `--color-layer-active` (white) | `--color-text-text-primary` |
| 2 未选中 | Default/Inactive | 透明（与容器融合） | `--color-text-text-secondary` |
| 3 未选中+悬停 | Hover | `--color-layer-active` | `--color-text-text-secondary` |
| 4 禁用+选中 | Disabled Selected | `--color-layer-active` | `--color-text-text-disable` |
| 5 禁用+未选中 | Disabled Inactive | 透明 | `--color-text-text-disable` |

### 11.4 卡片 Tab 尺寸（Figma 7895:11391）

| 尺寸 | 容器 padding | 容器圆角 | Tab 高度 | Tab padding | Tab 圆角 | 字号 |
|------|--------------|----------|----------|-------------|----------|------|
| 44px | 4px | 10px | 48px | 8px 32px | 8px | 20px |
| 32px | 4px | 8px | 32px | 8px 16px | 6px | 14px |
| 28px | 2px | 6px | 28px | 5px 16px | 4px | 14px |
| 24px | 2px | 6px | 24px | 3px 10px | 4px | 14px |

### 11.5 变体与颜色

设计稿中 Card 类型支持变体：**Primary**、**Secondary**、**Faded**、**Highlight**、**Critical**，具体色值以 Figma 设计稿与设计系统令牌为准。

---

## 12. H5 适配（Figma 7642:89101）

**设计稿来源：** [Tabs Guidelines-H5 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-89101)

### 12.1 Web 与 H5 尺寸对应（Figma 7642:89107）

| Web Primary | Web 高度 | Web 字号 | H5 高度 | H5 字号 | H5 字重 |
|-------------|----------|----------|---------|---------|---------|
| 56px | 56px | 24px | 44px | 18px | 600 |
| 48px | 48px | 18px | 44px | 16px | 600 |
| 44px | 44px | 16px | 44px | 16px | 500 |
| 40px | 40px | 14px | 40px | 14px | 500 |
| 32px | 32px | 14px | 40px | 14px | 500 |

### 12.2 TabsV5-H5（Underline 移动端）

| 属性 | 取值 | 说明 |
|------|------|------|
| **视口宽度** | `375px` | 典型 H5 设计稿宽度 |
| **Tab 内边距** | `8px` 水平 | 左右 |
| **横向滚动** | `overflow-x: auto` | Tab 过多时可左右滑动 |
| **下划线** | 3px × 16px | 与 Web 一致 |

### 12.3 TabsCard V5-H5（卡片移动端）

| 属性 | 取值 | 说明 |
|------|------|------|
| **视口宽度** | `375px` | 典型 H5 设计稿宽度 |
| **横向滚动** | `overflow-x: auto` | Tab 过多时可左右滑动 |
| **字号** | 随尺寸档位变化 | 见下表 |

### 12.4 Web 与 H5 尺寸对应（Figma 21644:18412）

**设计稿来源：** [Web/H5 映射 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=21644-18412)

Web 共 **8 种**样式，H5 共 **5 种**样式。H5 分别与 Web 的 Capsules-32、Capsules-28、Tabscard-56、Tabscard-32、Tabscard-28 有对照关系。

| Web 类型 | H5 对应 | 说明 |
|----------|---------|------|
| Capsules-40 | — | 无 H5 对应 |
| Capsules-36 | — | 无 H5 对应 |
| Capsules-32 | ✓ | H5 胶囊 24px 高，14px 字号 |
| Capsules-28 | ✓ | H5 胶囊 24px 高，12px 字号 |
| Tabscard-56 | ✓ | H5 卡片 28px 高，16px 字号 |
| Tabscard-40 | — | 无 H5 对应 |
| Tabscard-32 | ✓ | H5 卡片 28px 高，14px 字号 |
| Tabscard-28 | ✓ | H5 卡片 24px 高，14px 字号 |

**Capsules（胶囊式）**：选中态背景 `--color-cmpt-button-soft`，圆角胶囊形状。

**Tabscard（卡片式）**：H5 容器 padding 2px，list 左右 padding 0（56/32/28 档位）。

### 12.5 滑动行为（DO）

- **Tab 全展示**：选中 Tab 不发生位移。
- **Tab 有折叠**：点击超过屏幕中心的 Tab 时，选中 Tab 位移到中心位置。

---

## 13. Tabs Menu（Figma 7719:54442）

**设计稿来源：** [Tabs Menu Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7719-54442)

Tabs Menu 为顶部导航栏式 Tab，用于页面级菜单切换，与普通 Tabs（Underline/Card/Capsules）在布局与变体上有所区分。

### 13.0 类型（Type，Figma 7719:54463）

**设计稿来源：** [Tabs Menu 类型 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7719-54463)

Tabs Menu 按布局与能力分为 **3 种类型**：

| 类型 | 名称 | 组成 | 说明 |
|------|------|------|------|
| **1** | **Divider** | 左侧 Tab 列表 + 底部分割线 | 基础型，仅 Tab 切换，无右侧操作区 |
| **2** | **Right Menu** | 左侧 Tab 列表 + 右侧 Right Menu + 底部分割线 | 双栏布局，右侧可带图标、下拉箭头等操作项 |
| **3** | **Masking** | 左侧渐变遮罩 + 右箭头 + Tab 列表 + Right Menu + 底部分割线 | Tab 超出时启用：左侧渐变 + `CEX_chevron_right` 16px 提示可滚动 |

#### 类型 1：Divider

| 属性 | 取值 | 说明 |
|------|------|------|
| **布局** | 单栏 | 仅左侧 Tab 列表，`justify-content: flex-start` |
| **底部分割线** | 1px，通栏 | `--color-line-border-subtle` |
| **适用场景** | 纯 Tab 切换 | 无右侧操作，如简单导航 |

#### 类型 2：Right Menu

| 属性 | 取值 | 说明 |
|------|------|------|
| **布局** | 双栏 `justify-between` | 左侧 Tab list（`flex: 1`）+ 右侧 Right Menu（`shrink: 0`） |
| **Right Menu 项** | 14px 字号、500 字重、20px 图标 | 可带图标、可选 14px 下拉箭头（`CEX_down_fill`） |
| **项间距** | 24px | Right Menu 项之间、与 Tab 列表一致 |
| **底部分割线** | 1px，通栏 | 与类型 1 一致 |
| **适用场景** | 带操作区 | 如设置、更多、筛选等右侧入口 |

#### 类型 3：Masking

| 属性 | 取值 | 说明 |
|------|------|------|
| **触发条件** | Tab 超出内容区与 Right Menu 重叠时 | 需横向滚动时显示 |
| **箭头位置** | Tab 选项**右侧** | 在 Tab 列表与 Right Menu 之间 |
| **渐变遮罩** | 64px 总宽 | 右 32px 无透明度底色（与箭头右对齐）+ 左 32px 透明度渐变（贴无透明度底色左侧） |
| **右箭头** | `CEX_chevron_right` 16px | `padding: 0 16px`，可点击向右滚动 Tab 列表 |
| **Tab 列表** | 横向滚动 | `overflow-x: auto` |
| **Right Menu** | 同类型 2 | 右侧固定 |
| **底部分割线** | 1px，通栏 | 与类型 1、2 一致 |
| **选中最后一项时** | 隐藏遮罩和箭头，Tab 与 Right Menu 间距 24px | 遮罩与箭头 0.2s ease-out 淡出，Tab 列表右侧留 24px |
| **适用场景** | Tab 过多 | Tab 右侧渐变 + 箭头，提示可滚动 |

### 13.1 基础样式（TabsMenuV5-web）

| 属性 | 取值 | 说明 |
|------|------|------|
| **行高** | `44px` | Tab 项高度 |
| **字号** | `16px` | Web_V5/Subtitle/S7 600 |
| **字重** | `600 (Semibold)` | Switzer Semibold |
| **行高倍数** | `1.3` | line-height |
| **选中字色** | `--color-text-text-primary` | #070808 |
| **未选字色** | `--color-text-text-secondary` | #84888C |
| **未选 Hover / Press** | `--color-text-text-primary` | #070808 一级黑色 |
| **Tab 间距** | `24px` | 选项间净间距（gap） |
| **下划线** | 3px × 16px | 选中态，圆角 1px，主色 |
| **底部分割线** | 1px | `--color-line-border-subtle` |
| **列表 margin-bottom** | `-1px` | 与底部分割线紧贴 |

### 13.2 左侧 Tab 项（TabsMenuV5-web/left）

| 属性 | 取值 | 说明 |
|------|------|------|
| **文案与下划线** | 文案区 41px + 下划线 3px | 总高 44px，与 Tabs 一致：短横线占底 3px 紧贴灰色分割线 |
| **Prefix Icon** | 20px × 20px | 图标与文案间距 **6px** |
| **图标与文案 gap** | `6px` | 与 Tabs 变体（4px）不同 |
| **未选中 icon 颜色** | 与文字统一为二级色 | `--color-text-text-secondary`，通过 filter 实现 |
| **未选中 Hover / Press** | icon 与文字统一为一级黑色 | `--color-text-text-primary`，icon 去除 filter |

### 13.3 右侧菜单项（Right Menu / TabsMenuV5-web/right item）

| 属性 | 取值 | 说明 |
|------|------|------|
| **字号** | `14px` | Web_V5/Body/B7 500 |
| **字重** | `500 (Medium)` | 与左侧 Tab 的 600 区分 |
| **字色** | `--color-text-text-primary` | #070808 |
| **图标尺寸** | `20px` | 与 Prefix Icon 一致 |
| **图标与文案 gap** | `6px` | |
| **下拉箭头** | `CEX_down_fill` 14px | 可选，文案与箭头 gap **2px** |
| **布局** | 文案 + 图标 | 图标在文案右侧（LTR）；RTL 时顺序反转 |

### 13.4 布局与对齐

| 类型 | 说明 |
|------|------|
| **内容区宽度** | `max-width: 1200px`，`margin: 0 auto` 水平居中于屏幕 |
| **底部分割线** | 通栏：`width: 100vw`，`margin-left: calc(50% - 50vw)` 水平居中于屏幕 |
| **Left（左对齐）** | Tab 列表靠左排列，`justify-content: flex-start` |
| **Right（右对齐）** | Tab 列表靠右，右侧可带 Right Menu |
| **Center（居中）** | 按设计稿具体场景 |
| **双栏布局** | 左侧 Tab list + 右侧 Right Menu，`justify-between`；左侧 `flex-1`，右侧 `shrink-0` |

### 13.5 变体（Variants）

| 变体 | 说明 |
|------|------|
| **Primary** | 主色，默认 |
| **Secondary** | 次要 |
| **Faded** | 淡化 |
| **Highlight** | 高亮 |
| **Critical** | 警示 |

### 13.6 扩展能力

| 能力 | 说明 |
|------|------|
| **Prefix Icon** | Tab 左侧可带 20px 图标，与文案 gap 6px；未选中时 icon 与文字同色（二级色），hover 时同变一级黑 |
| **Badge Dot** | 红点角标 8px，21px 高容器，文案与红点无间距 |
| **Hot Icon** | 热门图标，引用 `CEX_hot_fill` 16px（Tabs Menu）；未选中时与文字同色，hover 时同变一级黑 |
| **Badge New** | 新标签角标 |
| **Right Menu** | 右侧菜单区，可带 20px 图标、14px 下拉箭头 |
| **Masking** | 边缘渐变遮罩（Tab 超出视口时，左右边缘渐变淡出） |

### 13.7 极限规则与本地化

| 规则 | 说明 |
|------|------|
| **RTL** | 支持从右到左布局，Right Menu 项内文案与图标顺序反转 |
| **长文案** | 单 Tab 过长可截断或配合横向滚动 |
| **Masking** | Tab 超出时启用边缘渐变遮罩，提示可滚动 |

### 13.8 与 Tabs 对比

| 对比项 | Tabs（Underline） | Tabs Menu |
|--------|-------------------|-----------|
| 典型场景 | 内容区切换 | 顶部导航栏 |
| 字号 | 14px（默认档） | 16px |
| 字重 | 500 | 600（左侧 Tab） |
| Tab 间距 | 16px | 24px |

---

## 14. Tabs Menu 左侧变量（Figma 7777:38363）

**设计稿来源：** [Tabs Menu 左侧变量 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7777-38363)

左侧 Tab 项在 **Icon + Tab 选项** 基础上，可叠加以下变体：

| 序号 | 变体 | 组成 | 说明 |
|------|------|------|------|
| **1** | **Prefix Icon** | Icon + Tab 选项 | 20px 图标 + 6px 间距 + 文案，下划线仅居中于文案 |
| **2** | **Badge Dot** | Icon + Tab 选项 + 徽标 | 在 Icon+Tab 基础上，右上角 8px 红点（`--color-function-hot` #F7594B），白边 1px |
| **3** | **Hot Icon** | Icon + Tab 选项 + Hot icon | 在 Icon+Tab 基础上，右侧 `CEX_hot_fill` 16px，与文案 gap 2px |
| **4** | **Badge New** | Icon + Tab 选项 + 小标签 | 在 Icon+Tab 基础上，右侧胶囊标签「New」，绿底 `--color-function-tag-primary` #A7F757，12px 600 字重，高 16px，padding 2px 4px，圆角 99px |

### 14.1 各变体规格

| 变体 | 属性 | 取值 |
|------|------|------|
| **Prefix Icon** | 图标尺寸 | 20px × 20px |
| | 图标与文案 gap | 6px |
| **Badge Dot** | 容器高度 | 21px（Figma 7684:16400） |
| | 红点尺寸 | 8px × 8px |
| | 红点颜色 | `--color-function-hot` #F7594B |
| | 白边 | 1px `--color-bg-primary` |
| | 对齐 | 容器与左侧文案垂直居中对齐 |
| | 文案与红点间距 | 无（icon 与文案保持 6px 不变） |
| **Hot Icon** | 图标 | `CEX_hot_fill.svg` |
| | 尺寸 | 16px × 16px |
| | 与文案 gap | 2px |
| **Badge New** | 背景 | `--color-function-tag-primary` #A7F757 |
| | 字号 | 12px |
| | 字重 | 600 (Semibold) |
| | 高度 | 16px（不变） |
| | 上下外间距 | 2px（Figma 7777:38391） |
| | 水平内边距 | 4px |
| | 圆角 | 99px（胶囊形） |
| | 白边 | 1px `--color-bg-primary` |
| | 对齐 | 与左侧文案顶对齐，重叠 3px；icon 位置不变 |

### 14.2 Figma 节点

| 内容 | 节点 ID |
|------|---------|
| 左侧变量模块 | 7777:38363 |
| Variants 说明（Prefix Icon / Badge Dot / Hot icon / Badge New） | 7777:38392 |

---

## 15. Tabs Menu 右侧变量（Figma 7719:54515）

**设计稿来源：** [Tabs Menu 右侧变量 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7719-54515)

Right Menu 项在 **Icon + 文字** 基础上，可叠加以下变体：

| 序号 | 变体 | 组成 | 说明 |
|------|------|------|------|
| **1** | **Prefix Icon** | Icon + 文字按钮 | 20px 图标 + 6px 间距 + 文案，14px 字号、500 字重 |
| **2** | **Arrow** | Icon + 文字按钮 + 下拉箭头 | 在 Icon+文字 基础上，右侧 `CEX_down_fill` / `CEX_up_fill` 14px，文案与箭头 gap 2px；点击切换上下箭头 |

### 15.1 各变体规格

| 变体 | 属性 | 取值 |
|------|------|------|
| **Prefix Icon** | 图标尺寸 | 20px × 20px |
| | 图标与文案 gap | 6px |
| **Arrow** | 箭头图标 | `CEX_down_fill`（朝下）/ `CEX_up_fill`（朝上） |
| | 箭头尺寸 | 14px × 14px |
| | 文案与箭头 gap | 2px |
| | 交互 | 点击按钮切换上下箭头 |

### 15.2 Figma 节点

| 内容 | 节点 ID |
|------|---------|
| 右侧变量模块 | 7719:54515 |
| Variants 说明（Prefix Icon / Arrow） | 7777:38361 |

---

**文档结束。** 实现时以 Figma 设计稿与设计系统令牌为准，本文作为开发与设计对齐的规范参考。
