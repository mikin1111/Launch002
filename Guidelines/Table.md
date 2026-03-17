# Table 组件规范

> 基于 Figma「测试V5.1-Web-H5组件库」Table Guidelines Web，Web 端数据表格组件。
>
> **设计来源**：Table Guidelines Web（V5.1）
>
> **Figma 设计稿**：[测试V5.1-Web-H5组件库 · Table](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=8999-16956)
>
> **演示页面**：[demo/table.html](../demo/table.html)
>
> **Related**（待实现）：Component `src/components/Table/Table.tsx`、Styles `src/components/Table/Table.css`

---

## 引用组件与相关规范

Table 组件在表头、内容单元格、筛选区、操作列、分页等场景中会复用或对接以下组件与规范，实现时须与对应文档对齐：

| 规范文档 | 在 Table 中的使用 |
|----------|-------------------|
| [Button.md](Button.md) | 操作列**面性按钮**：§2 尺寸 XSmall 32px（高 32、padding 12px、字号 14px、圆角 99px）；**文字按钮**（如「买入」「卖出」）：§10 Text Button Medium 16px、Type Blue（`--link-default` / Hover `--link-pressed`）；一级 Blue/Black、二级 Gray/Line；强引导/重要操作 |
| [Checkbox.md](Checkbox.md) | **勾选组件库**：表头/行内复选框须引用 CheckboxV5-Web 的**样式与交互**（Medium **16×16px**、状态 Active/Inactive/Hover/Disable、变体 Default/Dash/Solid、框与标签 gap 8px）；表头全选、行内多选、筛选区「仅显示自选」等 |
| [CoinTitle.md](CoinTitle.md) | 第一列币种展示（图标 28px、标题 16px、副标题 12px，multiple-row 等） |
| [Divider.md](Divider.md) | 表头底部分割线、有分割线表格行间分割线（`--line-divider`） |
| [Color.md](Color.md) | 表头/正文/链接/涨跌色、背景 bg1/bg2、分割线、按钮色等全部颜色 Token |
| [Font.md](Font.md) | 表头 12px/14px/400、内容 12/14/16/18px 字阶、字体家族与行高 |
| [Icon.md](Icon.md) | 币种/链图标、操作区展开箭头 20px、「更多」16px、排序等图标 |
| [Search.md](Search.md) | 筛选区搜索框（与 Select/Input 组合） |
| [Select.md](Select.md) | 筛选区下拉（Dropdown）、选项面板 |
| [Spacing.md](Spacing.md) | 表头首尾列 12px/16px、内容区 8px/16px、模块间距 12px/24px 等 Spacing_V5 |
| [Tabs.md](Tabs.md) | 标题下 Tab 切换（现货/合约/理财等），与表格组合时的间距 12px/24px |
| [Tag.md](Tag.md) | 单元格内标签（Tag 20px、与文字间距 8px） |

---

## 1. 表头

> **Figma 设计稿（表头模块）**：[表头 · node-id=8999-17002](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=8999-17002)
>
> 以下从设计稿逐项提取：尺寸、高度、样式、各场景展示。

### 1.1 尺寸

| 属性 | 规格 | 说明 |
|------|------|------|
| 字号/字重 | **12px / 400**、**14px / 400** | 二选一，与高度搭配 |
| 色值 | **Text/Secondary**（`--text-secondary`） | 表头文字统一使用次要文字色 |

### 1.2 高度

| 高度 | 说明 |
|------|------|
| **32px** | 字 12px/400 时使用 |
| **40px** | 字 12px/400 或 14px/400 时使用 |
| **56px** | 字 12px/400，可含双行（Header + Subtitle） |

**尺寸与高度组合（设计稿标注）：**

| 序号 | 字号/字重 | 表头高度 |
|------|-----------|----------|
| 1 | 字 12px/400 | 高度 32px |
| 2 | 字 12px/400 | 高度 40px |
| 3 | 字 14px/400 | 高度 40px |
| 4 | 字 12px/400 | 高度 56px（可双行） |

### 1.3 样式

> 表头中的 **Checkbox** 须与 [Checkbox.md](Checkbox.md)（勾选组件库）的样式、尺寸、状态、交互一致，见下文说明。

| 样式类型 | 说明 |
|----------|------|
| **Divider** | 分割线样式（底部分割线或列间竖线） |
| **Underline** | 下划线样式（表头文字点线 underline，色值 Text/tertiary） |
| **Checkbox** | 勾选组件库样式：遵循 [Checkbox.md](Checkbox.md) **CheckboxV5-Web**，表头/行内均用 **Medium 16×16px**；状态 Active/Inactive、Hover/Disable；变体 Default/Dash/Solid；框与标签间距 8px；演示见 [demo/checkbox.html](../demo/checkbox.html) |
| **Sort** | 排序样式（排序图标 + 文字） |
| **Action** | 操作样式（操作列表头） |

### 1.4 各场景展示

| 场景 | 规则 |
|------|------|
| **常规展示** | 默认左对齐，末尾字段右对齐；**首列 Padding 12px、尾列 Padding 16px** |
| **极限说明** | 超出字段展示「...」，Hover 出现气泡（Tooltip）展示全部内容 |
| **功能支持：排序** | 表头支持排序图标（升序/降序/默认） |
| **名词解释** | 添加下划虚线，色值 **Text/3**（`--text-tertiary`），Hover 出现气泡进行说明 |
| **多选与编辑** | 引用 [Checkbox.md](Checkbox.md) 勾选组件库：复选框 **16×16px**（Medium）、状态与交互一致；可配合编辑图标 |
| **特殊情况** | 垂直双字段：两行均为 **12px**，**垂直间距 12px**，上下无额外间距；主文案 Text/primary、副文案 Text/secondary |

---

## 2. 组件基础信息

| 项目 | 说明 |
|------|------|
| 组件名称 | Table（数据表格组件） |
| 适用场景 | 金融场景下的列表数据展示（资产、订单、交易对、策略等） |
| 设计来源 | Table Guidelines Web V5.1 |
| 核心目标 | 保证数据可读性、交互一致性与视觉规范对齐 |

---

## 3. 表头规范（详细）

### 3.1 尺寸与文字

> 字阶、字重、行高与 [Font.md](Font.md) 对齐；颜色与 [Color.md](Color.md) 对齐。

| 属性 | 规格 | 说明 |
|------|------|------|
| 字号 | **12px / 400** 或 **14px / 400** | 按场景二选一 |
| 颜色 | `--text-secondary`（Text/Secondary） | 统一使用次要文字色 |
| 高度 | **32px** / **40px** / **56px** | 三档可选，与字号搭配使用 |

**字号与高度对应关系（设计稿标注）：**

| 序号 | 字号/字重 | 表头高度 |
|------|-----------|----------|
| 1 | 字 12px/400 | 高度 32px |
| 2 | 字 12px/400 | 高度 40px |
| 3 | 字 14px/400 | 高度 40px |
| 4 | 字 12px/400 | 高度 56px |

### 3.2 样式类型

> 分割线线宽、线色、用法见 [Divider.md](Divider.md)。

| 类型 | 说明 |
|------|------|
| **Divider** | 分割线样式 |
| **Underline** | 下划线样式 |
| **Checkbox** | 引用 [Checkbox.md](Checkbox.md) 勾选组件库样式与交互（16×16px、状态、变体） |
| **Sort** | 排序样式 |
| **Action** | 操作样式 |

### 3.3 各场景展示规则

| 序号 | 场景 | 规则 |
|------|------|------|
| 1 | **常规展示** | 默认左对齐，末尾字段右对齐；**首列 Padding 12px、尾列 Padding 16px** |
| 2 | **极限说明** | 超出字段展示「...」，Hover 出现气泡展示全部内容 |
| 3 | **排序** | 支持排序功能（表头 Sort 样式） |
| 4 | **名词解释** | 添加下划虚线，色值 **Text/3**（`--text-tertiary`），Hover 出现气泡进行说明 |
| 5 | **多选与编辑** | 引用 [Checkbox.md](Checkbox.md)：**16×16px**、状态 Active/Inactive/Hover/Disable、框与标签 gap 8px |
| 6 | **双字段** | 垂直双字段时：**垂直间距 12px**，上下无额外间距 |

### 3.4 表头模块间距小结

| 位置 | 间距值 |
|------|--------|
| 首列（左）Padding | 12px |
| 尾列（右）Padding | 16px |
| 列与列之间 | 按 Spacing_V5 规范（如 8px、16px、32px 等，依设计稿） |

---

## 4. 内容/场景规范

### 4.1 行高与样式

| 属性 | 规格 | 说明 |
|------|------|------|
| 行高 | **100px** / **80px** | 按场景选择 |
| 默认背景 | `--bg-primary`（bg1） | 默认行背景 |
| Hover 背景 | `--bg-secondary`（bg2） | 行 Hover 态 |
| 圆角 | **0px** | 表格行无圆角 |

### 4.2 无分割线 vs 有分割线

| 样式 | Hover 状态 | 首列 Padding | 尾列 Padding |
|------|------------|--------------|--------------|
| **无分割线** | ✓ | **16px** | **16px** |
| **有分割线** | ✓ | **0px** | **0px** |

### 4.3 各内容场景（逐条）

| 序号 | 场景 | 规格说明 |
|------|------|----------|
| 1 | **币种/头像/其他图片** | Icon 大小 **28px**；多字段 **12px / 14px / 16px** 可组合使用；特殊字段可使用 **18px** 强调展示；第一列币种遵循 [CoinTitle.md](CoinTitle.md)（多行时 28px 图标无描边、16px 标题、12px 副标题） |
| 2 | **文本类** | 文字、涨跌幅、带单位字段等 |
| 3 | **链接类** | 底部下划线使用自带 `text-decoration: underline`，支持点击跳转 |
| 4 | **极限情况** | 可固定宽度；**最多展示 2 行**，超出显示「...」，Hover 出现气泡展示全部内容；可结合产品规则中间内容缩略（如网络字段），Hover 气泡展示全部 |
| 5 | **文字 + 其他元素** | [Tag.md](Tag.md) 20px、[Icon.md](Icon.md) 16px；位于列表**首列**的操作类 Icon 与字段间距 **16px**（如自选/[Checkbox.md](Checkbox.md)） |
| 6 | **Mini 走势图/曲线** | 高度 **40px** |
| 7 | **快筛/勾选类** | **Medium 32px**（勾选/快筛控件展示与点击热区） |
| 8 | **操作类** | **面性按钮**：遵循 [Button.md](Button.md) §2 尺寸 **XSmall 32px**（高 32、水平 padding 12px、字号 14px、字重 500、圆角 99px）；**文字按钮**（如「买入」「卖出」）：遵循 [Button.md](Button.md) **§10 Text Button**（Medium **16px**、字重 500、Type Blue 时色值 `--link-default` / Hover `--link-pressed`，无背景无边框）；最多 **3 个**，超出用「更多」[Icon.md](Icon.md) 16px；展开/收起箭头 Icon 20px |

### 4.4 内容对齐规则

| 内容类型 | 对齐方式 |
|----------|----------|
| 文本类 | 左对齐（默认） |
| 数字类 | 右对齐 |
| 操作类 | 右对齐 |

### 4.5 内容区单元格间距（设计稿 Spacing_V5 参考）

> 间距体系与档位见 [Spacing.md](Spacing.md)。

- 文字与 Tag/Icon 之间：**8px**
- 首列操作 Icon（如自选/Checkbox）与文字：**16px**
- 多列之间：8px、16px 等按列内容类型选用

---

## 5. 表单场景规范

### 4.1 展开收起

- 支持**展开/收起**（可与多级表单组合使用）。
- **强引导操作**：一级 **Blue** 按钮（`--bg-brand`），样式见 [Button.md](Button.md)。

### 4.2 固定操作区（最右侧一列）

- 支持**锁定操作区**，固定最右侧一列。
- 展示类 Table 字段过多时，可展示部分关键字段，**点击后弹窗进行全字段说明**。
- **重要操作**：一级 **Black** 按钮（`--bg-always-black`），见 [Button.md](Button.md)。

### 4.3 分页展示

- 支持分页展示；**单页展示条数根据具体场景**确定。
- 分页与 **Table 居中对齐**（与表格内容区水平居中一致）。

### 4.4 列操作

| 功能 | 说明 |
|------|------|
| **列表首列操作** | 支持多选/批量编辑、**添加自选** |
| **基础操作** | 二级 **Gray/Line** 按钮、文字 **Text** 按钮（见 [Button.md](Button.md)） |

---

## 6. 模块间距规范（标题 + Tabs + 筛选 + 表格）

> 适用于「标题 + Tabs + Dropdown/Checkbox」等组合场景，严格按设计稿标注执行。

### 6.1 上下模块间距

> 数值均属 Spacing_V5 体系，见 [Spacing.md](Spacing.md)。

| 模块 A | 模块 B | 间距值 |
|--------|--------|--------|
| 页面标题（Title） | Tabs | **12px**（标题与 Tabs 之间） |
| Tabs | 筛选区（Dropdown/Checkbox/Input） | **24px** |
| 筛选区 | Table 表格顶边 | **24px** |
| Table 表格底边 | 分页（Pagination） | **24px** |

### 6.2 表格与容器左右间距

- 表格整体相对容器左右留白：与页面布局一致（设计稿中表格宽度 1200px 居中时，两侧留白对称）。
- 表格**首尾列** Padding：见 [3.4 表头模块间距小结](#34-表头模块间距小结)、[4.2 无分割线 vs 有分割线](#42-无分割线-vs-有分割线)。

### 6.3 筛选区内间距

- 多个 Input、Dropdown（[Select.md](Select.md)）、[Checkbox.md](Checkbox.md) 之间：**16px**（[Spacing.md](Spacing.md)）；筛选区搜索可复用 [Search.md](Search.md)。

---

## 7. 交互规范

| 交互 | 说明 |
|------|------|
| **排序** | 点击表头排序图标，触发升序/降序/默认排序 |
| **筛选** | 支持表头筛选、全局筛选，Hover 显示筛选选项 |
| **多选** | 表头全选、行级复选框均引用 [Checkbox.md](Checkbox.md) 交互（选中/未选中、Hover、禁用、半选 Indeterminate 等）；支持批量操作 |
| **展开/收起** | 点击行前展开图标，展示子级/详情内容 |
| **Hover 态** | 行 Hover 时背景切换为 bg2，文字/链接可高亮 |
| **点击操作** | 操作按钮/链接点击后触发对应业务逻辑 |
| **分页** | 支持页码切换、每页条数选择、跳转到指定页 |

---

## 8. 颜色 Token（Color V5.1）

> 完整色板、Light/Dark 双主题及语义见 [Color.md](Color.md)。

| 用途 | CSS 变量 | 说明 |
|------|----------|------|
| 表头文字 | `--text-secondary` | Text/Secondary |
| 名词解释/下划虚线 | `--text-tertiary` | Text/3 |
| 默认行背景 | `--bg-primary` | bg1 |
| Hover 行背景 | `--bg-secondary` | bg2 |
| 分割线 | `--line-divider` | 行间分割线 |
| 强引导操作 | `--bg-brand` | 一级 Blue 按钮 |
| 重要操作 | `--bg-always-black` | 一级 Black 按钮 |
| 基础操作 | 遵循 Button 规范 | 二级 Gray/Line、文字 Text 按钮 |

---

## 9. 尺寸对照（Web 统一）

### 表头高度

| 尺寸 | 高度 | 说明 |
|------|------|------|
| sm | 32px | Small |
| md | 40px | Medium（常用） |
| lg | 56px | Large |

### 行高

| 尺寸 | 行高 | 说明 |
|------|------|------|
| md | 80px | 中等 |
| lg | 100px | 大 |

### 图标/控件

| 元素 | 尺寸 |
|------|------|
| 表头/行内复选框 | 16×16px（[Checkbox.md](Checkbox.md) Medium）；样式与交互见勾选组件库 |
| 首列 Coin/头像 Icon | 28px |
| 操作区展开/收起箭头 | 20px |
| 操作区「更多」Icon | 16px |
| 按钮（操作列） | Xsmall 32px |
| 快筛/勾选类（Medium） | 32px |
| Mini 走势图/曲线高度 | 40px |

---

## 10. Props 定义（参考）

```tsx
interface TableColumn<T = any> {
  key: string;
  title: ReactNode;
  dataIndex?: keyof T | string;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  ellipsis?: boolean;
  tooltip?: boolean;
  render?: (value: any, record: T, index: number) => ReactNode;
}

interface TableProps<T = any> {
  columns: TableColumn<T>[];
  dataSource: T[];
  rowKey: string | ((record: T) => string);
  headerHeight?: 32 | 40 | 56;
  rowHeight?: 80 | 100;
  headerStyle?: 'divider' | 'underline' | 'checkbox' | 'sort' | 'action';
  rowStyle?: 'default' | 'divider';
  expandable?: {
    expandedRowRender: (record: T, index: number) => ReactNode;
    expandIcon?: (props: { expanded: boolean; onExpand: () => void }) => ReactNode;
  };
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize?: number) => void;
  };
  selection?: {
    selectedRowKeys: (string | number)[];
    onChange: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void;
  };
  operations?: ReactNode[];
  fixedOperations?: boolean;
}
```

---

## 11. 版本记录

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0 | 2025-03-13 | 初始版本，基于 Gate Table Guidelines Web |
| 2.0 | 2025-03-17 | 按 Figma 测试V5.1-Web-H5组件库 node 8999-16956 全文校准：表头/内容/表单/模块间距细化，无遗漏 |
