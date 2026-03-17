# NumberView 数值显示 · Figma 设计规范

> 基于 Figma 设计稿完整提取的数值显示组件规范，涵盖所有类型、位置、尺寸、对齐、变量、状态及样式细节。
>
> **Figma 设计稿**：[测试V5.1-Web-H5组件库](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=8771-22032)
>
> **组件名称**：NumberViewV5-web / NumberView_Web 数值显示

---

## 1. 组件概述

| 项目 | 说明 |
|------|------|
| 组件名称 | NumberView / NumberViewV5-web |
| 适用场景 | 金融场景下金额、余额、价格等数值展示 |
| 设计来源 | Gate Web V5 / H5 V5 设计系统 |
| 字体 | Switzer（Regular 400 / Medium 500 / Semibold 600） |
| 行高 | 1.3（lineHeight: 1.2999999523162842） |

---

## 2. 类型（Type）

### 2.1 布局类型

| 类型 | 中文 | 说明 | 副标题位置 |
|------|------|------|------------|
| **上轻下重** | 上轻下重 | 副标题在上，主数字在下 | 主数字上方 |
| **上重下轻** | 上重下轻 | 主数字在上，副标题在下 | 主数字下方 |

### 2.2 组件变体

| 变体 | 说明 | 结构 |
|------|------|------|
| **Default** | 纯数字 + 单位 | 主数字 + 单位（可选副标题） |
| **Subtitle** | 带副标题 | 副标题 + 主数字 + 单位 |
| **Subtitle + Icon** | 副标题带图标 | 副标题 + 眼睛图标（CEX_Show） |
| **Subtitle + Unit Icon** | 单位带下拉图标 | 主数字 + USDT + CEX_down_fill |
| **Subtitle + Underline** | 副标题带下划线 | 副标题（underline dotted 10%）+ 数值 |

---

## 3. 位置（Position）与对齐（Alignment）

### 3.1 水平对齐

| 对齐 | 英文 | 说明 | Flex 属性 |
|------|------|------|-----------|
| **左对齐** | Left | 默认 | `items-start` / `justify-start` |
| **居中** | Middle | 内容居中 | `items-center` / `justify-center` |
| **右对齐** | Right | 内容右对齐 | `items-end` / `justify-end` |

### 3.2 垂直布局

- **主数字与单位**：`items-baseline` 基线对齐
- **主数字与小数**：`items-baseline` 基线对齐
- **副标题与主数字**：`gap: 4px` 垂直间距

---

## 4. 尺寸（Size）

### 4.1 Web 主数字尺寸

| 尺寸 | 主数字 | 小数部分 | 单位 | 副标题 | 字重 |
|------|--------|----------|------|--------|------|
| **48px** | 48px | 32px | 28px | 18px | Semibold 600 |
| **40px** | 40px | 28px | 24px | 16px | Semibold 600 |
| **32px** | 32px | 24px | 20px | 12px | Semibold 600 |
| **24px** | 24px | — | — | 12px | Semibold 600 |
| **20px** | 20px | — | — | 12px | Semibold 600 |
| **16px** | 16px | — | 12px | 12px | Semibold 600 |
| **14px** | 14px | — | 12px | 12px | Medium 500 |

### 4.2 字体样式映射（Figma → CSS）

| Figma 样式 | 字体 | 字重 | 字号 | lineHeight |
|------------|------|------|------|------------|
| Web_V5/Heading/H1 600 48px | Switzer | 600 | 48px | 1.3 |
| Web_V5/Heading/H3 600 40px | Switzer | 600 | 40px | 1.3 |
| Web_V5/Heading/H4 600 32px | Switzer | 600 | 32px | 1.3 |
| Web_V5/Heading/H5 600 28px | Switzer | 600 | 28px | 1.3 |
| Web_V5/Heading/H6 600 24px | Switzer | 600 | 24px | 1.3 |
| Web_V5/Subtitle/S3 600 20px | Switzer | 600 | 20px | 1.3 |
| Web_V5/Subtitle/S7 600 16px | Switzer | 600 | 16px | 1.3 |
| Web_V5/Body/B2 400 18px | Switzer | 400 | 18px | 1.3 |
| Web_V5/Body/B5 400 16px | Switzer | 400 | 16px | 1.3 |
| Web_V5/Body/B6 600 14px | Switzer | 600 | 14px | 1.3 |
| Web_V5/Body/B7 500 14px | Switzer | 500 | 14px | 1.3 |
| Web_V5/Body/B11 500 12px | Switzer | 500 | 12px | 1.3 |
| H5_V5/Body/B13 400 12px | Switzer | 400 | 12px | 1.3 |

### 4.3 间距规范

| 元素 | 间距 | 说明 |
|------|------|------|
| 主数字 ↔ 单位 | 8px | `gap: 8px`（大尺寸） |
| 主数字 ↔ 单位 | 4px | `gap: 4px`（14px 小尺寸） |
| 副标题 ↔ 主数字 | 4px | `gap: 4px` |
| 副标题文字 ↔ 图标 | 4px | `gap: 4px` |
| 单位 ↔ 下拉图标 | 2px | `gap: 2px` |

---

## 5. 颜色（Color）

### 5.1 文本颜色 Token

| 用途 | CSS 变量 | 色值（Light） | 说明 |
|------|----------|--------------|------|
| 主数字 | `--color-text-text-primary` | #070808 | 主数字、单位 |
| 副标题（次要） | `--color-text-text-secondary` | #84888c | 副标题标签 |
| 成功/涨 | `--color-cmpt-gradient-green-100` | #2bc287 | PNL 正数 |
| 危险/跌 | `--text-error` / F-3 | #e7282e | PNL 负数 |
| 品牌色 | `--color-text-text-brand` | #0068FF | 强调 |

### 5.2 深色模式

- 通过 `data-theme="dark"` 切换
- 主数字、单位、副标题颜色随主题 Token 自动适配

---

## 6. 副标题变量（Subtitle Variant）

| 变量 | 语义 | 颜色 Token | 示例 |
|------|------|------------|------|
| **secondary** | 次要信息 | `--text-secondary` | Today's PNL |
| **primary** | 强调 | `--text-brand` | — |
| **success** | 成功/涨 | `--color-cmpt-gradient-green-100` | +870.02 USDT |
| **danger** | 危险/跌 | `--text-error` | -82.02 USDT |
| **warning** | 警告 | `--text-warning` | — |

### 6.1 副标题样式

| 样式 | 字体 | 字号 | 字重 | 说明 |
|------|------|------|------|------|
| 标签部分 | Switzer | 12px | Regular 400 | 如 "Today's PNL" |
| 数值部分 | Switzer | 12px | Medium 500 | 如 "+870.02 USDT" |
| 下划线 | — | — | — | `text-decoration: underline dotted 10%` |

---

## 7. 敏感态（Sensitive）

### 7.1 脱敏规则

| 规则 | 说明 |
|------|------|
| 替换字符 | 使用 `*` 替换数字 |
| 默认星号数 | 6 个（`******`） |
| 小数点和单位 | **隐藏**（与部分实现不同，Figma 设计为完全隐藏） |
| 字体大小 | 与正常态一致 |
| 字体颜色 | 与正常态一致 |
| 副标题 | 保留显示 |

### 7.2 切换行为

- 点击眼睛图标（CEX_Show / CEX_Hide）切换显示/隐藏
- 显示态：正常数值 + 单位
- 隐藏态：`******`，无小数点、无单位

---

## 8. 状态（States）

### 8.1 显示状态

| 状态 | 说明 | 视觉变化 |
|------|------|----------|
| **Default** | 默认 | 正常显示 |
| **Sensitive** | 脱敏 | 数字变星号，单位/小数点隐藏 |
| **Loading** | 加载中 | （设计稿未定义，可扩展） |
| **Error** | 错误 | （设计稿未定义，可扩展） |
| **Positive** | 正数/涨 | 副标题数值用 success 色 |
| **Negative** | 负数/跌 | 副标题数值用 danger 色 |

### 8.2 文本强调状态（Doc Type 定义）

设计稿 Doc Type 中定义的文本状态，可用于主数字或副标题的语义强调：

| 状态 | 英文 | 说明 |
|------|------|------|
| Primary | Primary | 主要文本，默认强调 |
| Secondary | Secondary | 次要文本 |
| Faded | Faded | 淡化/弱化 |
| Highlight | Highlight | 高亮强调 |
| Critical | Critical | 关键/警示 |

---

## 9. 变量与 Props

### 9.1 可配置变量

| 变量 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `value` | number | 主数值 | 86139.52 |
| `unit` | string | 单位 | "USDT" |
| `subtitle` | string | 副标题文本 | "Total Assets Value" |
| `subtitleValue` | string | 副标题数值 | "+870.02 USDT" |
| `subtitleVariant` | enum | 副标题颜色变量 | secondary / success / danger |
| `radixPoint` | boolean | 是否拆分小数 | false |
| `subtitle` | boolean | 是否显示副标题 | true |
| `usdt` | boolean | 是否显示单位 | true |
| `icon` | boolean | 副标题是否带图标 | false |
| `underline` | boolean | 副标题是否下划线 | false |

### 9.2 数值格式

| 规则 | 说明 |
|------|------|
| 千分位 | 逗号 `,`（如 86,139） |
| 小数点 | 句点 `.`（如 .52） |
| 小数位 | 默认 2 位 |
| 正负号 | 正数可带 `+` |

---

## 10. 阿语适配（RTL）

| 规则 | 说明 |
|------|------|
| 副标题 | 阿拉伯语「نص فرعي」右对齐显示 |
| 数字 | 保持西文格式（86,139.52），使用 `dir="ltr"` |
| 千分位/小数点 | 保证正确显示 |
| 带图标变体 | 支持眼睛图标 + 副标题（敏感态切换） |

---

## 11. 结构层级（DOM 结构）

```
NumberViewV5-web
├── NumberViewV5-web/subtitle-12px（可选）
│   ├── 副标题文本
│   └── CEX_Show 图标（可选）
├── shu+usdt（主数字行）
│   ├── shu（数字部分）
│   │   ├── 整数部分（如 86,139.）
│   │   └── 小数部分（如 52，可选拆分）
│   └── 单位区域（可选）
│       ├── USDT 文本
│       └── CEX_down_fill 图标（可选）
└── NumberViewV5-web/subtitle-12px（上重下轻时，主数字下方）
    ├── 副标题标签（如 Today's PNL）
    └── 副标题数值（如 +870.02 USDT）
```

---

## 12. 尺寸与对齐组合表（Figma 组件变体）

| Property 1 | Position | Type | Size |
|------------|----------|------|------|
| Default | Left | 上轻下重 | 48px |
| Default | Left | 上轻下重 | 40px |
| Default | Left | 上轻下重 | 32px |
| Default | Left | 上轻下重 | 24px |
| Default | Left | 上轻下重 | 20px |
| Default | Left | 上轻下重 | 16px |
| Default | Left | 上轻下重 | 14px |
| Default | Middle | 上轻下重 | 48px / 40px / 32px / 24px / 20px / 16px / 14px |
| Default | Right | 上轻下重 | 48px / 40px / 32px / 24px / 20px / 16px / 14px |
| Default | Left | 上重下轻 | 48px / 40px / 32px / 24px / 20px / 16px / 14px |
| Default | Middle | 上重下轻 | 同上 |
| Default | Right | 上重下轻 | 同上 |

---

## 13. 图标资源

| 图标 | 用途 | 尺寸 |
|------|------|------|
| CEX_Show | 显示/可见（敏感态切换） | 14×14px |
| CEX_Hide | 隐藏/不可见 | 14×14px |
| CEX_down_fill | 单位下拉选择 | 12×12px |

---

## 14. 版本记录

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0 | 2025-03-17 | 基于 Figma node-id=8771-22032 完整提取 |
