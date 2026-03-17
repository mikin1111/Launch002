# Tag 组件规范（Figma 设计稿标准）

## 文档说明

本规范根据 Figma 设计稿 **Tag Guidelines**（测试V5.1 Web-H5 组件库）中的 Tag 组件**逐项提取**，描述类型、尺寸、状态、变量、间距、字色、背景色、圆角、使用规范等所有可量化与可实现的属性，供开发与设计对齐使用。

**设计稿来源：**  
[Tag Guidelines - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-127597)

**规范节点 ID：** 7642:127597（Tag Guidelines Section）

**演示页面：** [tag.html](../demo/tag.html)

**字体规范：** 标签字号、字重、行高、字间距遵循 [Font.md](Font.md)（字阶 Web 端 Body B13/B11/B7 等），预览 [font.html](../demo/font.html)。

**颜色规范：** 标签背景色、文字色、功能色与 [Color.md](Color.md)（Gate APP 颜色 Token）对齐；本规范使用 `--color-*` 等命名以兼容设计稿，与 Color 中 `--text-*`、`--bg-*`、`--func-*` 等语义一致，Light/Dark 双主题以 Color.md 为准，预览 [Color.html](../demo/Color.html)。

**最后更新：** 与 Figma 文档一致

---

## 1. 设计原则与定位

### 1.1 组件定位

| 说明 |
|------|
| Tag 用于**分类、状态、属性标记**，通过背景色与文字色区分语义，弱化或突出展示内容。 |
| 属于**信息展示类**组件，与文字、图标、列表、卡片等配合使用。 |
| 设计稿主组件为 **TagV5-web**（功能性）、**Tag PrimaryV5-web**（运营类）、**Tag_PD_V5**（产品数据）。 |

### 1.2 类型与变体（规范表）

设计稿「Details」中按四列归纳：

| 类型 (Type) | 尺寸 (Size) | 变体 (Variants) | 状态 (Status) |
|-------------|-------------|-----------------|---------------|
| 面性 (Filled) | XL / LG / MD / SM | Primary / Secondary / Faded / Highlight / Critical | Active |
| 16px / 20px / 24px | 16px / 20px / 28px | 功能性 / 运营类 / 产品数据 | 16px-400 / 20px-500 |

- **Type**：面性（Filled）背景填充，无描边。
- **Size**：16px、20px、28px（高度档位）。
- **Variants**：Primary（灰）、Secondary（蓝）、Faded（红）、Highlight（绿）、Critical（橙）。
- **Status**：Active（默认/激活态）；设计稿中标注 Font weight 400 / 500。

---

## 2. 组件类型与用途

### 2.0 标签类型分类

设计稿将标签分为四大类型，便于快速识别与选型。

**设计稿来源：** [标签类型分类 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-127673)

| 类型 | 说明 | 尺寸 |
|------|------|------|
| **类型-面性** | Primary / Secondary / Faded / Highlight / Critical 五色变体 | 16px / 20px / 24px |
| **功能性标签** | 用于描述内容、弱化展示。细分：通用标签、与涨跌相关、风险提示、与品牌相关、涨跌标签 | 16px / 20px / 24px |
| **运营类标签** | 用于突出标签内容，激励交互行为。New、Hot、首发等 | 16px / 20px / 24px |
| **VIP类型标签** | 用于 VIP 等级划分，引用 VIP-LV 切图 | 14px / 16px |

### 2.1 功能性标签（TagV5-web）

用于描述内容、弱化展示。按用途细分为五类：

| 细分类型 | 说明 | 示例 | 尺寸 |
|----------|------|------|------|
| **通用标签** | 默认/次要信息，浅灰背景 | General | 16px / 20px / 24px |
| **与涨跌相关** | 涨跌、费用等语义，红/绿区分正负 | Rise/Fall、0 Fee | 16px / 20px / 24px |
| **风险提示** | 风险等级，绿/橙/红/灰 | Low / Medium / High / Unknown Risk | 16px / 20px / 24px |
| **与品牌相关** | 品牌或入口标识，蓝色 | Gate | 16px / 20px / 24px |
| **涨跌标签** | 文案 + 涨跌数值或纯图标 | Tag +12.34%、Tag -12.34%、涨跌图标 | 16px / 28px |

| 用途 | 说明 |
|------|------|
| **描述内容** | 用于描述内容属性、分类、状态，弱化展示。 |
| **弱化展示** | 背景色浅、字色次要，不抢夺主内容焦点。 |

### 2.2 运营类标签（Tag PrimaryV5-web）

| 用途 | 说明 |
|------|------|
| **突出标签内容** | 用于突出标签内容，激励交互行为。 |
| **高对比度** | 背景色鲜艳（如绿色、黄色），字色深色，吸引注意力。 |

### 2.3 产品数据标签（Tag_PD_V5）

| 用途 | 说明 |
|------|------|
| **VIP 等级划分** | 用于 VIP 等级、权益标识。 |
| **数据展示** | 展示涨跌数值（如 +12.34%、-12.34%），带 Rise/Fall 语义色。 |

### 2.4 VIP 类型标签

| 用途 | 说明 |
|------|------|
| **VIP 等级划分** | 用于 VIP 等级、权益标识。 |
| **尺寸** | 14px 高度，与设计稿 Component 186～203 一致。 |

### 2.5 面性类型字号

设计稿「类型-面性」中明确：**16px / 20px / 24px** 为面性标签支持的字号档位，对应不同使用场景下的文字层级。

### 2.6 活动标签（Tag PrimaryV5-web 完整变体）

活动标签为 **Tag PrimaryV5-web** 的完整样式汇总，用于突出「新」「热门」等运营态，支持纯文本、前缀/后缀图标、币种图标等多种组合。

**设计稿来源：** [活动标签 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=419-4629)

| 类型 | 说明 | 尺寸 |
|------|------|------|
| **纯文本** | 仅文案，无图标 | 16px / 20px / 24px |
| **带前置图标** | 左侧向下箭头（CEX_fall_fill） | 16px / 20px / 24px |
| **带后置图标** | 右侧向下箭头（CEX_fall_fill） | 16px / 20px / 24px |
| **带前置币种** | 左侧币种图标（如 ETH），与标签重叠 | 16px / 20px / 24px |

### 2.7 功能标签样式汇总（TagV5-web）

功能标签为 **TagV5-web** 的完整样式汇总，覆盖 5 色 × 3 档 × 多种变体，用于分类、状态、属性标记等场景。

**设计稿来源：** [功能标签 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=523-26592)

| 变体 | 说明 | 尺寸 |
|------|------|------|
| **纯文本** | 仅文案，无图标 | 16px / 20px / 24px |
| **前缀图标** | 左侧占位图标（Iconplaceholder.svg），16/20px 档 12px、24px 档 14px，颜色与标签文字一致，gap 4px | 16px / 20px / 24px |
| **后缀图标** | 右侧关闭图标（CEX_circlefilled_error），可点击移除标签，16/20px 档 12px、24px 档 14px，激活态固定 Icon-Tertiary（#A0A3A7），禁用态继承禁用色，gap 4px | 16px / 20px / 24px |
| **Icon i** | 文案 + CEX_circlefilled_info 图标，颜色与标签文字一致，gap 4px | 16px / 20px / 24px |
| **Dash** | 虚线下划线（`text-decoration: underline dotted`） | 16px / 20px / 24px |
| **禁用** | Disabled 态，灰色背景 + 禁用字色 | 16px / 20px / 24px |

### 2.8 VIP 标签

VIP 标签包含两类：**VIP 标识**（切图）与 **VIP 活动标签**（按设计稿实现）。引用 `Guidelines/Slicing/VIP` 切图，不区分日间/暗黑，样式统一。

**设计稿来源：** [VIP 标签 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=42813-1580)

| 类型 | 说明 |
|------|------|
| **VIP 标识** | 引用 `Guidelines/Slicing/VIP` 切图（2 倍图），16px / 20px / 24px 三档 |
| **VIP 活动标签** | 背景 `var(--function-vip-bg)`（[Color.md](Color.md) §9），文字 `var(--text-always-black)`，文案如 New/Hot |
| **模式** | 不区分日间/暗黑，样式一致 |
| **切图命名** | `VIP-16px.png`、`VIP-20px.png`、`VIP-24px.png` |

### 2.9 理财打新日常使用标签规则

针对理财打新场景的标签使用规范。**VIP、Bonus、New、Hot icon** 为固定样式与文案；**剩余活动标签全部使用 Event 标签样式**（文案可随活动名称变化）。此规则仅适用于理财打新。

**设计稿来源：** [理财打新标签规则 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=134868-60272)

| 标签顺序 | 类型 | 样式 | 说明 |
|----------|------|------|------|
| 1 | VIP | 引用 `Guidelines/Slicing/VIP` 切图 | 固定 |
| 2 | 活动 | Event 样式（#89eff6） | 文案可变，所有活动标签统一用此样式 |
| 3 | 额外奖励 | Bonus（#8ffcde） | 固定文案 "Bonus" |
| 4 | New | `var(--function-tag-primary)`（[Color.md](Color.md) §9） | 固定文案 "New" |
| 5 | Hot | CEX_hot_fill 图标 | 固定，14px/16px |

| 尺寸 | 16px / 20px / 24px |

### 2.10 VIP 等级标签（VIP-LV）

VIP 等级标签用于 VIP 等级、权益标识，引用 `Guidelines/Slicing/VIP-LV` 切图，支持日间 / 暗黑模式。

**设计稿来源：** [VIP 等级标签 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=42813-1100)

| 属性 | 说明 |
|------|------|
| **等级** | VIP 0～VIP 16 |
| **模式** | 日间（Light，`-l-`）/ 暗黑（Dark，`-d-`） |
| **尺寸** | 14px / 16px 高度（设计稿尺寸） |
| **切图** | 2 倍图，实际应用应以设计稿尺寸为准 |
| **文件命名** | `vip{N}-{l|d}-{14|16}px.png`，如 `vip0-l-14px.png` |

### 2.11 使用规范

标签使用规范，Icon、币种、按钮均引用现有组件。

**设计稿来源：** [使用规范 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-127841)

| 规范 | 说明 | 引用组件 |
|------|------|----------|
| **1. Hot/New/Airdrop** | 用运营绿色标签 | Icon: `CEX_SpotGrid`；Tag: `tag--ops`；右箭头: `CEX_chevron_right` |
| **2. 带币种的标签** | 币种 + 运营标签、币种对、按钮 | 币种: `Guidelines/icons/Currency Icons/Crypto_*.svg`；带币种标签: `tag-activity--coin`；按钮: `demo/button.html` 规范 |

---

## 3. 基础样式定义

### 3.1 字体与字阶 (Typography)

| 属性 | 取值 | 说明 |
|------|------|------|
| **字体家族** | `Switzer` | 设计稿指定，fallback `sans-serif`；与 [Font.md](Font.md) 字阶规范一致。 |
| **字阶 Token** | B13 / B11 / B7 | 功能性 B13（400 12px）；运营类 B11（500 12px）；Large 档 B7（14px）；详见 [Font.md](Font.md) §3.4 Body。 |
| **字号** | `12px`（16px/20px 档） | TagV5-web 默认文案字号。 |
| **字重** | `400 (Regular)` / `500 (Medium)` | 功能性用 400；运营类用 500。 |
| **行高** | `1.3`（约 130%） | 数值约 `1.2999999523162842`，实现用 `line-height: 1.3`。 |
| **字间距** | `0` | 无额外 letter-spacing。 |
| **对齐** | 水平垂直居中 | 依赖 flex 居中。 |

### 3.2 圆角 (Border Radius)

| 属性 | 取值 | 说明 |
|------|------|------|
| **外层圆角** | `2px` | 设计稿 `rounded-[2px]`，TagV5-web 容器。 |
| **内层圆角** | `2px`（16px 档）/ `4px`（20px 档）/ `4px`（24px 档） | Tag/Size 内层，16px 档用 2px，20px 档用 4px，24px 档用 4px。 |
| **Tag_PD_V5 外层** | `4px` | 产品数据标签 28px 档。 |
| **Tag_PD_V5 内层** | `2px` | 内层文案区。 |

### 3.3 内边距 (Padding)

| 尺寸档 | 垂直 Padding | 水平 Padding | 说明 |
|--------|--------------|--------------|------|
| **16px** | `0` | `4px` | 外层无 py，内层 px-[4px]。 |
| **20px** | `2px` | `4px` | 外层 py-[2px]，内层 px-[4px]。 |
| **24px** | `3px` | `6px` | TagV5-web Large 档，py-[3px] px-[6px]。 |
| **28px** | `5px` | `8px` | Tag_PD_V5，px-[8px] py-[5px]。 |
| **16px 图标** | `2px` | `2px` | 纯图标 Tag_PD_V5，p-[2px]。 |

---

## 4. 尺寸规格 (Sizing)

### 4.1 TagV5-web 尺寸档

| 规格名称 | 高度 (Height) | 字号 | 字重 | 设计令牌 |
|----------|---------------|------|------|----------|
| **Small** | 16px | 12px | 400 (Regular) | Web_V5/Body/B13 400 12px |
| **Medium** | 20px | 12px | 400 (Regular) | Web_V5/Body/B13 400 12px |
| **Large** | 24px | 14px | 400 (Regular) | Web_V5/Body/B7 400 14px |

### 4.2 Tag PrimaryV5-web 尺寸档

| 规格名称 | 高度 | 字号 | 字重 | 设计令牌 |
|----------|------|------|------|----------|
| **Small** | 16px | 12px | 500 (Medium) | Web_V5/Body/B11 500 12px |
| **Medium** | 20px | 12px | 500 (Medium) | Web_V5/Body/B11 500 12px |
| **Large** | 24px | 14px | 500 (Medium) | Web_V5/Body/B7 500 14px |

- **Large-24px** 为活动标签专用档，圆角 4px，py 3px，px 6px。

### 4.3 Tag_PD_V5 尺寸档

| 规格名称 | 高度 | 字号 | 字重 | 说明 |
|----------|------|------|------|------|
| **XXSmall** | 16px | — | — | 纯图标，12×12px 图标，p-[2px]。 |
| **Small** | 28px | 14px | 400 / 500 | 标签 + 数值，px-[8px] py-[5px]，gap-[4px]。 |

---

## 5. 颜色变体 (Color Variants)

> 颜色 Token 与 [Color.md](Color.md) §1 文本颜色、§8 组件颜色、§9 功能色详表 对齐，Light/Dark 主题以 Color.md §12 为准。

### 5.1 功能性标签（TagV5-web）颜色

| 变体 | 背景色 Token | Fallback | 字色 Token | Fallback |
|------|--------------|----------|-----------|----------|
| **Primary (Gray)** | `var(--color-cmpt-tag-gray)` | `#f5f6f7` | `var(--color-text-text-secondary)` | `#84888c` |
| **Secondary (Blue)** | `var(--color-cmpt-bluefunct-bg)` | `#ebf6ff` | `var(--color-text-text-brand)` | `#0068ff` |
| **Faded (Red)** | `var(--color-cmpt-redfunct-bg)` | `#feeeed` | `var(--color-text-text-error)` | `#f7594b` |
| **Highlight (Green)** | `var(--color-cmpt-greenfunct-bg)` | `#eaf9eb` | `var(--color-text-text-success)` | `#2bc235` |
| **Critical (Orange)** | `var(--color-cmpt-orange-bg)` | `#fff4e3` | `var(--color-text-text-warning)` | `#ff9447` |

### 5.2 运营类标签（Tag PrimaryV5-web）颜色

| 变体 | 背景色 | 字色 Token | Fallback |
|------|--------|------------|----------|
| **Highlight** | `#a7f757`（亮绿） | `var(--color-text-always-black)` | `#070808` |
| **其他运营色** | 设计稿指定 | `var(--color-text-always-black)` | `#070808` |

- 运营类标签背景色鲜艳，字色统一为深色以保证可读性。

### 5.3 产品数据标签（Tag_PD_V5）颜色

| 类型 | 背景色 Token | Fallback | 字色 Token | Fallback |
|------|--------------|----------|-----------|----------|
| **Rise（涨）** | `var(--color-cmpt-tag-gray)` | `#f5f6f7` | 标签 `--color-text-text-primary` | `#070808` |
| **Rise（涨）** | — | — | 数值 `--color-function-trade-buy` | `#2bc287` |
| **Fall（跌）** | `var(--color-cmpt-tag-gray)` | `#f5f6f7` | 标签 `--color-text-text-primary` | `#070808` |
| **Fall（跌）** | — | — | 数值 `--color-function-trade-sell` | `#f74b60` |
| **Red Up（红涨图标）** | `var(--color-function-trade-sell)` | `#f74b60` | 图标白色 | — |
| **Red Down（红跌图标）** | `var(--color-function-trade-sell)` | `#f74b60` | 图标白色 | — |

---

## 6. 状态 (State)

### 6.1 TagV5-web 状态

| 状态 | 说明 | 设计稿属性 |
|------|------|------------|
| **Active** | 默认/激活态 | 正常显示，无特殊样式。 |
| **Disabled** | 禁用态 | `Disabled=True`，设计稿中可结合 `--color-text-text-disable` 降低对比度。 |
| **Prefix Icon** | 前缀图标 | `Prefix Icon=True` |
| **Suffix Icon** | 后缀图标 | `Suffix Icon=False` |
| **Dash** | 虚线样式 | `Dash=False` |

### 6.2 设计稿 Details 标注

| 标注 | 含义 |
|------|------|
| **Active-16px-400** | 激活态，16px 高度，字重 400。 |
| **Active-20px-500** | 激活态，20px 高度，字重 500。 |

---

## 7. 变量与属性 (Variables)

### 7.1 TagV5-web 可配置变量

| 变量 | 类型 | 可选值 | 说明 |
|------|------|--------|------|
| **Color** | `enum` | Gray / Blue / Red / Green / Yellow | 对应 Primary / Secondary / Faded / Highlight / Critical |
| **Size** | `enum` | Small-16px / Medium-20px | 高度档位 |
| **Font weight** | `enum` | 400 / 500 | Regular / Medium |
| **Prefix Icon** | `boolean` | `true` / `false` | 是否显示前缀图标 |
| **Suffix Icon** | `boolean` | `true` / `false` | 是否显示后缀图标 |
| **Disabled** | `boolean` | `true` / `false` | 是否禁用 |
| **Icon i** | `boolean` | `true` / `false` | 是否显示图标 |
| **Dash** | `boolean` | `true` / `false` | 是否虚线样式 |

### 7.2 Tag_PD_V5 可配置变量

| 变量 | 类型 | 可选值 | 说明 |
|------|------|--------|------|
| **Type** | `enum` | Rise / Fall / Red Up / Red Down | 涨跌类型 |
| **Size** | `enum` | XXSmall-16px / Small-28px | 纯图标 / 带文案 |
| **标签文案** | `string` | 任意 | 主标签文本 |
| **数值文案** | `string` | 如 +12.34%、-12.34% | 涨跌数值 |

---

## 8. 间距规则 (Spacing)

**设计稿来源：** [间距规范 - Figma 7642:128135](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7642-128135)

### 8.1 标签与文字搭配

| 规则 | 取值 | 说明 |
|------|------|------|
| **标签在文字后面** | — | 标签紧跟主文字，不置于文字前。 |
| **标签与文字间距** | `4px` / `8px` | 文字与标签之间。 |
| **标签与 Icon 尺寸** | 需匹配文字大小 | 见 §8.2。 |

### 8.2 标签与文字/Icon 尺寸匹配

**标签在文字后面**时，标签尺寸与 Icon 尺寸需与文字大小匹配：

| 文字字号 | 标签尺寸 | Icon 尺寸（Hot 梯度） |
|----------|----------|------------------------|
| **24px** | 20px | 20px |
| **20px** | 20px | 16px |
| **18px** | 16px | 16px |
| **16px** | 16px | 12px |
| **14px** | 16px | 12px |
| **12px** | 16px | 10px |

- **Hot 梯度**：设计稿中 Hot 图标（如 16px-fill-Hot、12px-fill-Hot）与文字字号一一对应，实现时需按上表选用。

### 8.3 多个标签间距

| 规则 | 取值 | 说明 |
|------|------|------|
| **2 个及以上标签** | `4px` / `8px` | 标签与标签之间。 |
| **实现** | `gap: 4px` 或 `gap: 8px` | 使用 flex gap 或 margin。 |

### 8.4 内部间距

| 组件 | 元素间距 | 说明 |
|------|----------|------|
| **Tag_PD_V5** | `gap: 4px` | 标签文案与数值之间。 |

---

## 9. 使用规范

### 9.1 适用场景

| 场景 | 说明 |
|------|------|
| **卡片标题旁** | 在卡片标题旁展示分类、状态、属性标签。 |
| **列表/表格** | 在列表项、表格单元格中展示标签。 |
| **Banner 卡片** | 在 Banner 或运营位角落展示标签。 |
| **Staking 列表** | 在 Staking 列表项中展示类型、收益等标签。 |

### 9.2 正确与错误示例（原则）

| 正确 | 错误 |
|------|------|
| 标签与文字字号匹配，间距 4/8px | 标签与文字字号不匹配，间距过大或过小 |
| 多个标签间距统一 4px 或 8px | 多个标签间距不一致 |
| 标签在文字后面 | 标签置于文字前（除非设计明确） |
| 功能性标签弱化展示，运营类标签突出 | 功能性标签与运营类标签混用 |

### 9.3 极端规则 / 本地化

| 规则 | 说明 |
|------|------|
| **RTL 文本** | 设计稿支持 RTL（如阿拉伯语「جديد/ساخن」），标签需适配 RTL 布局。 |
| **长文案** | 标签文案过长时可截断或限制最大宽度，以产品为准。 |
| **极短文案** | 支持纯图标（如 16×16px）或单字符标签。 |

---

## 10. 颜色模式 (Color Mode)

- 设计稿支持 **亮色 / 暗色** 模式，颜色通过设计令牌 `var(--xxx)` 实现，实现时需确保暗色模式下 Token 正确映射。
- 功能性标签、产品数据标签的灰色背景在暗色模式下应使用对应暗色 Token。
- 颜色 Token 与 [Color.md](Color.md) 规范对齐，详见 Color.md §1 文本颜色、§2 背景颜色、§5 功能色；主题切换以 `data-theme` 为准。

---

## 11. 实现要点汇总

### 11.1 CSS / 样式

| 项目 | 值 |
|------|-----|
| 字体 | Switzer, sans-serif |
| 字号（TagV5-web） | 12px |
| 字重（功能性） | 400 |
| 字重（运营类） | 500 |
| 行高 | 1.3 |
| 外层圆角 | 2px |
| 内层圆角 | 2px（16px 档）/ 4px（20px 档） |
| 垂直 Padding（20px 档） | 2px |
| 水平 Padding（内层） | 4px |
| Tag_PD_V5 内边距 | 8px 水平、5px 垂直 |
| Tag_PD_V5 元素间距 | 4px |

### 11.2 设计令牌速查

标签颜色 Token 与 [Color.md](Color.md) 规范一一对应，实现时引入 `color-tokens.css` 以支持 Light/Dark 双主题。Tag 使用 `--color-*` 命名以兼容设计稿，与 Color.md 标准 Token 映射如下：

| Tag 用途 | Tag Token | Color.md 对应 | Color.md 章节 |
|----------|-----------|---------------|---------------|
| 功能性灰背景 | `--color-cmpt-tag-gray` | `--cmpt-tag-gray` | §8 组件颜色 |
| 主文字 | `--color-text-text-primary` | `--text-primary` | §1 文本颜色 |
| 次要文字 | `--color-text-text-secondary` | `--text-secondary` | §1 文本颜色 |
| 正文/提示 | `--color-text-text-tertiary` | `--text-tertiary` | §1 文本颜色 |
| 禁用字色 | `--color-text-text-disable` | `--text-disabled` | §1 文本颜色 |
| 品牌蓝 | `--color-text-text-brand` | `--text-brand` | §1 文本颜色 |
| 错误红 | `--color-text-text-error` | `--text-error` | §1 文本颜色 |
| 成功绿 | `--color-text-text-success` | `--text-success` | §1 文本颜色 |
| 警告橙 | `--color-text-text-warning` | `--text-warning` | §1 文本颜色 |
| 黑字（运营类） | `--color-text-always-black` | `--text-always-black` | §1 文本颜色 |
| 蓝背景 | `--color-cmpt-bluefunct-bg` | `--cmpt-bluefunct-bg` | §8 组件颜色 |
| 红背景 | `--color-cmpt-redfunct-bg` | `--cmpt-redfunct-bg` | §8 组件颜色 |
| 绿背景 | `--color-cmpt-greenfunct-bg` | `--cmpt-greenfunct-bg` | §8 组件颜色 |
| 橙背景 | `--color-cmpt-orange-bg` | `--cmpt-orange-bg` | §8 组件颜色 |
| 涨（绿色） | `--color-function-trade-buy` | `--function-trade-buy` | §9 功能色详表 |
| 跌（红色） | `--color-function-trade-sell` | `--function-trade-sell` | §9 功能色详表 |
| 活动标签背景 | `--color-function-tag-primary` | `--function-tag-primary` | §9 功能色详表 |
| VIP 背景 | `--color-function-vip-bg` | `--function-vip-bg` | §9 功能色详表 |
| 页面/卡片背景 | `--color-bg-primary` | `--bg-primary` | §2 背景颜色 |
| 边框 | `--color-border-subtle` | `--line-border-subtle` | §3 线条颜色 |
| 后缀图标激活态 | `--color-text-text-tertiary` | `--icon-tertiary` | §6 图标颜色 |

---

## 12. 与 Figma 节点对应

| 内容 | 节点 ID |
|------|---------|
| Tag Guidelines 整节 | 7642:127597 |
| 组件属性 | 7776:72340 |
| TagV5-web 示例 | 7642:127694、7642:127696、7642:127698、7642:127699、7642:127700 |
| Tag PrimaryV5-web 示例 | 7642:127745、7642:127746 |
| Tag_PD_V5 示例 | 7642:127733、7776:72341、7642:127735、7642:127736 |
| 标签与文字搭配原则 | 7642:128135 |
| 标签与 Icon 尺寸匹配 | 7642:128142～7642:128243 |
| 多个标签间距 | 7642:128245 |
| 极限规则/本地化 | 8989:40494 |
| 颜色模式 | 7642:128277 |
| **活动标签汇总** | **419:4629** |
| **功能标签汇总** | **523:26592** |

---

## 13. 活动标签样式汇总（Tag PrimaryV5-web）

**设计稿来源：** [活动标签 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=419-4629)

### 13.1 活动标签类型与尺寸

| 类型 | 16px | 20px | 24px | 说明 |
|------|------|------|------|------|
| **纯文本** | ✓ | ✓ | ✓ | 仅「New/Hot」文案 |
| **带前置箭头** | ✓ | ✓ | ✓ | 左侧 CEX_fall_fill 12px |
| **带后置箭头** | ✓ | ✓ | ✓ | 右侧 CEX_fall_fill 12px |
| **带前置币种** | ✓ | ✓ | ✓ | 左侧 Crypto 图标 16/20/24px，白边重叠 |

### 13.2 活动标签样式规格

| 尺寸 | 高度 | 字号 | 圆角 | 垂直 Padding | 水平 Padding | 图标尺寸 |
|------|------|------|------|--------------|--------------|----------|
| **Small** | 16px | 12px | 2px | 2px | 4px | 12px（箭头）/ 16px（币种） |
| **Medium** | 20px | 12px | 2px | 2px | 4px | 12px（箭头）/ 20px（币种） |
| **Large** | 24px | 14px | 4px | 3px | 6px | 12px（箭头）/ 24px（币种） |

### 13.3 活动标签颜色

> 对应 [Color.md](Color.md) §9 功能色详表 `--function-tag-primary`、§1 `--text-always-black`、§2 `--bg-primary`。

| 属性 | Token | Fallback |
|------|--------|----------|
| **背景** | `var(--color-function-tag-primary)` | `#a7f757` |
| **文字** | `var(--color-text-always-black)` | `#070808` |
| **币种图标边框** | `var(--color-bg-primary)` | `white` |

### 13.4 带币种图标布局

- 币种与右侧绿色标签**间距**：-2px（重叠，绿色区域向左延伸 2px 覆盖图标右侧）。
- 绿色区域**左侧内边距**：16 尺寸 → 6px；20 尺寸 → 8px；24 尺寸 → 10px。
- 币种图标：圆形，白边 1.5px（16px）/ 2px（20px/24px），**外描边**（使用 `box-shadow` 实现，描边在图标外侧，不侵占图标内容）。
- **右侧绿色背景高度**：16 尺寸 → 14px；20 尺寸 → 16px；24 尺寸 → 20px。
- **图标引用**：使用 Icon 组件的 SVG，如 `Guidelines/icons/Currency Icons/Crypto_ETH.svg`。

---

## 14. 功能标签样式汇总（TagV5-web）

**设计稿来源：** [功能标签 - Figma](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=523-26592)

### 14.1 功能标签展示结构（按尺寸分类）

预览页按**尺寸**分组：16px / 20px / 24px。每档展示该尺寸下的所有颜色（Primary / Secondary / Faded / Highlight / Critical / Disabled）与所有变体（纯文本 / 前缀图标 / 后缀图标 / Icon i / Dash）。

### 14.2 功能标签类型与尺寸

| 变体 | 16px | 20px | 24px | 说明 |
|------|------|------|------|------|
| **纯文本** | ✓ | ✓ | ✓ | 仅文案，无图标 |
| **前缀图标** | ✓ | ✓ | ✓ | 左侧 Iconplaceholder，16/20px 档 12px、24px 档 14px，颜色与文字一致，gap 4px |
| **后缀图标** | ✓ | ✓ | ✓ | 右侧关闭 icon（CEX_circlefilled_error），可点击移除，激活态 Icon-Tertiary，禁用态继承，gap 4px |
| **Icon i** | ✓ | ✓ | ✓ | 文案 + CEX_circlefilled_info，16/20px 档 12px、24px 档 14px，图标颜色与文字一致，gap 4px |
| **Dash** | ✓ | ✓ | ✓ | `text-decoration: underline dotted` |
| **禁用** | ✓ | ✓ | ✓ | 灰色背景 + 禁用字色 |

### 14.3 功能标签样式规格

| 尺寸 | 高度 | 字号 | 圆角 | 垂直 Padding | 水平 Padding | 图标尺寸 |
|------|------|------|------|--------------|--------------|----------|
| **Small** | 16px | 12px | 2px | 0 | 4px | 12px |
| **Medium** | 20px | 12px | 2px | 2px | 4px | 12px |
| **Large** | 24px | 14px | 4px | 3px | 6px | 14px |

### 14.4 功能标签颜色

同第 5.1 节「功能性标签颜色」：Primary / Secondary / Faded / Highlight / Critical。
