# 设计规范与实现总入口 · GUIDE_INDEX

> 本索引建立 **Guidelines/*.md** 设计规范与 **demo/*.html** 实现文件的一一映射，供 Cursor 开发时快速定位规范与参考实现。

**扫描范围**：`Guidelines/` 下所有 `.md` 规范文件 ↔ `demo/` 下对应 `.html` 演示页（已忽略 `assets`、`Font` 文件夹）。

---

## 一、全局基础规范 (Base Styles)

| 组件名称 | 设计规范 (Link) | HTML 实现 (Link) | 功能核心摘要 |
|----------|-----------------|------------------|--------------|
| **Spacing 间距** | [Spacing.md](Guidelines/Spacing.md) | [spacing.html](demo/spacing.html) | 以 4px 为基准的 21 档间距 Token（4～240px），水平/垂直双轴向；`:root` 中 `--spacing-*` 变量，含 Token 速查条与应用示例。 |
| **Font 字阶** | [Font.md](Guidelines/Font.md) | [font.html](demo/font.html) | 字体家族（Switzer/苹方）、字重 400/500/600/700；Display / Heading(H1～H5) / Subtitle(S1～S7) / Body(B1～BM4)；行高 130%、字间距 0；`@font-face` + 字阶展示区块。 |

---

## 二、组件规范与实现映射

| 组件名称 | 设计规范 (Link) | HTML 实现 (Link) | 功能核心摘要 |
|----------|-----------------|------------------|--------------|
| **Color 颜色** | [Color.md](Guidelines/Color.md) | [color.html](demo/color.html) | Gate APP 颜色 Token（Text / Background / Line / Link / Function / Layer / 组件色）；`--text-*`、`--bg-*`、`--line-*`、`--link-*`、`--func-*`；Light/Dark 双主题切换。 |
| **Button 按钮** | [Button.md](Guidelines/Button.md) | [button.html](demo/button.html) | ButtonV5-web：胶囊圆角 99px、Primary/Secondary/Soft/Text Button/底部操作；尺寸 XS～L、状态 Default/Hover/Active/Disabled；`--color-cmpt-button-*`、`--btn-radius`；Tab 分块展示。 |
| **Checkbox 复选框** | [Checkbox.md](Guidelines/Checkbox.md) | [checkbox.html](demo/checkbox.html) | CheckboxV5-Web：勾选框 16×16 + 标签；类型 Checkbox/Half/Radio，状态 Active/Inactive/Hover/Disabled；尺寸 S/M/L；变体 Default/Dash/Solid；`--text-primary`、gap 8px。 |
| **Icon 图标** | [Icon.md](Guidelines/Icon.md) | [icon.html](demo/icon.html) | 分类：Basic Product / Currency Chain / Currency / Fiat / Header / National Flag / Social；`Guidelines/icons` 下 SVG，HTML `<img>` 引用路径与 Markdown 引用方式。 |
| **Divider 分割线** | [Divider.md](Guidelines/Divider.md) | [divider.html](demo/divider.html) | 线宽 1px；水平线 `--line-divider`，小竖线 `--line-short-divider`；信息区隔、主次区分；带文字分割线、正确/错误示例。 |
| **Tag 标签** | [Tag.md](Guidelines/Tag.md) | [tag.html](demo/tag.html) | TagV5-web：面性 Filled，尺寸 16/20/28px；Primary/Secondary/Faded/Highlight/Critical；功能性/运营类/产品数据；`--color-*`、Font B13/B11/B7。 |
| **Tabs 标签页** | [Tabs.md](Guidelines/Tabs.md) | [tabs.html](demo/tabs.html) | Tabs_PrimaryV5-web：Underline/Text 类型，状态 Inactive/Active；尺寸 28～52px；变体 Divider/Tag/Hot Icon/Dropdown；字阶 B7 500 14px、`--text-primary`。 |
| **Search 搜索** | [Search.md](Guidelines/Search.md) | [search.html](demo/search.html) | SearchV5-web：Filled 输入框 + CEX_Search 图标；类型 Primary/Secondary/Faded 等，状态 Inactive/Hover/Active/Searching；尺寸 Large-48/Medium-40/Small-32/XSmall-28；Label/下拉面板/空状态。 |
| **Select 下拉选择** | [Select.md](Guidelines/Select.md) | [select.html](demo/select.html) | DropdownV5-web + Select_V5：触发器 + 选项面板；状态 Normal/Pressed，尺寸 24～82px；Label/Helper/Coin Text/带搜索；Small/Medium/Large 面板。 |
| **CoinTitle 币种标题** | [CoinTitle.md](Guidelines/CoinTitle.md) | [cointitle.html](demo/cointitle.html) | 单行/多行、带链 single-row/multiple-row；图标 + 主标题 + 副标题；`--text-primary`/`--text-secondary`、`--line-divider`/`--line-border-subtle`；28px 图标、16px/12px 字阶。 |
| **NumberView 数值显示** | [NumberView.md](Guidelines/NumberView.md) | [numberview.html](demo/numberview.html) | 上轻下重/上重下轻；副标题+主数字+单位、Subtitle+Icon/Underline；左/中/右对齐、baseline 对齐；涨跌色 `--text-success`/`--text-error`；Switzer 400/500/600。 |
| **FAQ 手风琴** | [FAQ.md](Guidelines/FAQ.md) | [faq.html](demo/faq.html) | CollapseV5Web：多条目可同时展开；模块标题 H2 40px、问题 H7 24px、正文 BM1 16px；chevron 图标、分割线、More Details 链接；Light/Dark、RTL。 |
| **Table 表格** | [Table.md](Guidelines/Table.md) | [table.html](demo/table.html) | **1. 表头**（尺寸 12/14px、高度 32/40/56px、样式 Divider/Underline/Checkbox/Sort/Action、各场景展示）；无分割线/有分割线表格；标题+Tabs+筛选+分页；引用 Button/Checkbox/CoinTitle/Divider/Icon/Search/Select/Tabs/Tag。 |
| **Header & Footer** | [Header&Footer.md](Guidelines/Header&Footer.md) | [header-footer.html](demo/header-footer.html) | Header+Footer_V5：Web/H5 未登录与登录态；Header 48px、Logo+导航+Log In/Sign Up 或 Deposit/头像；Footer 多列/折叠；`--bg-primary`、`--color-cmpt-header-bg-50`。 |

---

## 三、使用说明

- **开发时**：先在本表找到组件 → 点「设计规范」查 CSS 变量与设计要点 → 点「HTML 实现」看 demo 结构与样式。
- **规范层**：仅包含 `Guidelines/` 下 `.md`，不包含 `assets`、`Font` 目录。
- **实现层**：所有演示页位于 `demo/*.html`，与规范一一对应；若新增组件，请在规范与 demo 就绪后更新本表。

**最后更新**：与当前仓库 Guidelines 与 demo 文件一致。
