# Header / Footer 组件规范（Figma 设计稿标准）

## 文档说明

本规范根据 Figma 设计稿 **Web-H5 对应关系**（测试 V5.1 Web-H5 组件库）中的 **Header+Footer** 组件**自上而下逐项提取**，精确描述 Header 的登录/未登录状态、Header/Footer 的 Web 与 H5 适配、布局与尺寸、切图与子组件引用，供开发与设计对齐使用。

**设计稿来源：**  
[Figma - Header/Footer Web-H5 对应关系](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7863-17337)（节点 `7863:17337`）

**切图引用：** [Guidelines/Slicing/Header](./Slicing/Header)  
**图标引用：** [Icon 组件规范](./Icon.md)  
**按钮引用：** [Button 组件规范](./Button.md)  
**分割线引用：** [Divider 组件规范](./Divider.md)（小竖线 1px×16px，色 `#C4C7CA`）  
**字体引用：** [字阶组件规范](./Font.md)（字号、字重、行高、字体家族与 Web/Body/Subtitle 字阶一致；预览 [font.html](../demo/font.html)）  
**颜色引用：** [颜色 Token 规范](./Color.md)（文案色、背景色、线条色等须使用 Color.md 中的 CSS 变量；预览 [Color.html](../Color.html)）  
**预览页：** [demo/header-footer.html](../demo/header-footer.html)

**组件名称：** Header+Footer_V5（Header 含未登录/登录两种状态；Footer 含 Web 多列版与 H5 折叠版）

---

## 1. 总览与状态矩阵

| 平台 | Header 未登录（Default） | Header 登录（Log in） | Footer |
|------|--------------------------|------------------------|--------|
| **Web** | Logo + 主导航 + Log In 文字 + Sign Up 按钮 + 功能图标 | Logo + 主导航 + Deposit 按钮 + Assets/Order 下拉 + 头像 + 功能图标 | 多列布局：下载区 + Community + 四列链接 + 分割线 + 版权 |
| **H5** | Logo + Log In 按钮 + 搜索/下载/九宫格图标 | Logo + 头像 + 搜索/下载/九宫格图标 | 垂直折叠：Logo + 四组折叠 + 社媒 + 语言/货币 + 版权 |

---

## 2. Header 规范

### 2.1 容器与全局（Web / H5 共用约定）

| 属性 | Web | H5 | 说明 |
|------|-----|-----|------|
| **高度** | `48px` | `48px` | 固定高度，内容垂直居中 |
| **宽度** | 通栏（设计稿示例 `1920px`） | `375px`（设计稿示例） | 随视口自适应 |
| **背景** | `--bg-primary`，可选 `backdrop-blur: 50px`、`--color-cmpt-header-bg-50` | 同左 | 实色背景对齐 Color.md；毛玻璃使用组件半透明背景 |
| **水平内边距** | `24px` 左右 | 由内容与 Logo 左侧留白决定 | Web 内容区 `left: 24px`，`justify-between` |
| **垂直对齐** | 内容 `top: 10px` 或 flex 垂直居中 | 内容垂直居中 | 保证 48px 内居中 |

- **字体：** 导航与文案主用 **Switzer**，字号/字重/行高与 [Font.md](./Font.md) 字阶对应（如主导航 14px Medium → B7；按钮文案 12px → B11）。部分文案为 **GateSans5.1**（如 Web 未登录「Log In」、登录「Assets」「Order」）。实现时以设计稿标注为准，fallback `sans-serif`。

---

### 2.2 Header - Web - 未登录（Default）

从上到下 / 从左到右逐项描述。

#### 2.2.1 左侧品牌与导航区

| 顺序 | 内容 | 规格 | 引用/备注 |
|------|------|------|-----------|
| 1 | **Logo** | 高度 `24px`，宽度约 `103.517px`（等比） | 切图：[Slicing/Header/Logo.svg](./Slicing/Header/Logo.svg) |
| 2 | 导航项间距 | `gap: 20px` | 相邻导航/下拉组之间 |
| 3 | 主导航项（文字+下拉） | 字号 `14px`，字重 Medium (500)，行高 1.3，颜色见 [Color.md](./Color.md) `--text-primary` | 字阶见 [Font.md](./Font.md) B7；纯文字项：Markets、Web3；带下拉：Buy Crypto、Trade、Futures、Earn、Community、More |
| 4 | 下拉箭头 | 尺寸 `16px`，图标 CEX_down_fill | 引用 [Icon 组件](./Icon.md)（若目录为 Line Icon 或 Outlined） |
| 5 | 文字与箭头间距 | `gap: 2px` | 同一导航项内文字与 16px 箭头 |
| 6 | **Rewards Hub** | 左侧图标 `24×24px` + 文案 `14px` Medium | 图标为礼盒切图：[Slicing/Header/gift_box.svg](./Slicing/Header/gift_box.svg)；文案同导航项 |

**主导航项顺序（Web）：**  
Buy Crypto、Markets、Trade、Futures、Earn、Community、Web3、More、Rewards Hub（礼盒图标 + 文案）。

#### 2.2.2 右侧功能区（未登录）

| 顺序 | 内容 | 规格 | 引用/备注 |
|------|------|------|-----------|
| 1 | **Log In** | 纯文字链接，字号 `14px`，GateSans5.1 Medium，色 `--text-primary` | 不使用按钮组件，仅文字可点击 |
| 2 | **Sign Up** | 胶囊按钮，高 `28px`，水平 padding `12px`，字号 `12px`，圆角 `99px`，背景/文字色见 [Color.md](./Color.md) | 引用 [Button 组件](./Button.md) **XXSmall**；字阶 [Font.md](./Font.md) B11 |
| 3 | **小竖线** | 宽 `1px`，高 `16px`，色见 [Color.md](./Color.md) `--line-short-divider` (#C4C7CA) | 引用 [Divider 组件](./Divider.md) **小竖线**（Type=小竖线） |
| 4 | 功能图标组 | 每组间距 `16px`，图标尺寸 `24×24px` | 见下表 |

**右侧功能图标顺序（Web 未登录）：**

| 图标名称 | 用途 | 引用 |
|----------|------|------|
| CEX_Search | 搜索 | [Icon 组件](./Icon.md) - Basic Product Icons |
| CEX_Download | 下载 | 同上 |
| CEX_Language | 语言 | 同上 |
| CEX_Darkmode | 深色/浅色切换 | 同上 |
| CEX_Settings | 设置 | 同上 |

- 右侧整组与左侧（Logo+导航）之间为 `justify-between`，即左右分布。

---

### 2.3 Header - Web - 登录（Log in）

左侧品牌与主导航与 **2.2.1** 完全一致（Logo、导航项顺序、Rewards Hub 礼盒切图、字体与间距）。仅**右侧功能区**不同。

#### 2.3.1 右侧功能区（登录）

| 顺序 | 内容 | 规格 | 引用/备注 |
|------|------|------|-----------|
| 1 | **Deposit** | 胶囊按钮，高 `28px`，水平 padding `12px`，字号 `12px`，主按钮样式 | 引用 [Button 组件](./Button.md) **XXSmall** |
| 2 | **Assets** | 文案 `14px` GateSans5.1 Medium + 下拉箭头 `16px` CEX_down_fill，间距 `2px` | 下拉触发器，非按钮组件 |
| 3 | **Order** | 同上，文案「Order」 | 下拉触发器 |
| 4 | **头像** | 尺寸 `24×24px`，圆形 | 切图/占位：[Slicing/Header/Avatar.svg](./Slicing/Header/Avatar.svg)；实际产品可为用户头像图 |
| 5 | **小竖线** | 1px×16px，色 `#C4C7CA` | 引用 [Divider 组件](./Divider.md) 小竖线 |
| 6 | 功能图标组 | 间距 `16px`，图标 `24×24px` | 见下表 |

**右侧功能图标顺序（Web 登录）：**

| 图标名称 | 用途 | 引用 |
|----------|------|------|
| CEX_Search | 搜索 | [Icon 组件](./Icon.md) |
| CEX_Download | 下载 | 同上 |
| CEX_Notification | 通知 | 同上 |
| CEX_Language | 语言 | 同上 |
| CEX_Darkmode | 深色/浅色 | 同上 |
| CEX_Settings | 设置 | 同上 |

- **与未登录差异小结：** 未登录为「Log In 文字 + Sign Up 按钮」；登录为「Deposit 按钮 + Assets 下拉 + Order 下拉 + 头像」，且增加 **CEX_Notification**，其余图标一致。

---

### 2.4 Header - H5 - 未登录（Default）

| 属性 | 取值 | 说明 |
|------|------|------|
| 容器 | 宽 `375px`，高 `48px`，背景同 §2.1 | 单行，左右分布 |
| 左侧 | **Logo** | 切图 [Slicing/Header/Logo.svg](./Slicing/Header/Logo.svg)，高度 24px，左侧留白与设计稿一致（Group 位于右侧约 4.27%～72.73% 区域，即 Logo 偏左） |
| 右侧 | 从左到右顺序见下表 | 整体可视为 `gap: 16px` 的水平 flex |

**H5 未登录右侧顺序：**

| 顺序 | 内容 | 规格 | 引用 |
|------|------|------|------|
| 1 | **Log In** | 胶囊按钮，高 `28px`，水平 padding `12px`，字号 `12px`，主按钮样式 | [Button 组件](./Button.md) XXSmall |
| 2 | 小竖线 | 1px×16px，#C4C7CA | [Divider 组件](./Divider.md) 小竖线 |
| 3 | CEX_Search | 24×24px | [Icon 组件](./Icon.md) |
| 4 | CEX_Download | 24×24px | 同上 |
| 5 | CEX_Grid | 24×24px（九宫格/更多菜单） | 同上 |

- H5 **无**主导航文案、无 Log In 纯文字、无 Sign Up、无 Language/Darkmode/Settings 图标，仅保留 Log In 按钮 + 搜索 + 下载 + 九宫格。

---

### 2.5 Header - H5 - 登录（Log in）

布局同 **2.4**，仅右侧第一项由「Log In 按钮」改为「头像」。

| 顺序 | 内容 | 规格 | 引用 |
|------|------|------|------|
| 1 | **头像** | 24×24px，圆形 | [Slicing/Header/Avatar.svg](./Slicing/Header/Avatar.svg) 或用户头像 |
| 2 | 小竖线 | 1px×16px | [Divider 组件](./Divider.md) |
| 3 | CEX_Search | 24×24px | [Icon 组件](./Icon.md) |
| 4 | CEX_Download | 24×24px | 同上 |
| 5 | CEX_Grid | 24×24px | 同上 |

---

### 2.6 Header 设计令牌与尺寸汇总

**颜色 Token 均以 [Color.md](./Color.md) 为准，以下为常用映射：**

| 用途 | Token / 值 | Color.md 对应 |
|------|-------------|----------------|
| 背景（实色） | `--bg-primary` | Bg-Primary #FFFFFF |
| 背景（毛玻璃） | `--color-cmpt-header-bg-50` (rgba(255,255,255,0.5))，`backdrop-blur: 50px` | — |
| 导航/文案主色 | `--text-primary` | Text-Primary #070808 |
| 按钮背景 | 组件主色（如 #303236） | 见 [Button.md](./Button.md) 与 Color.md 功能色 |
| 按钮文字 | `--text-on-fill` / `--text-inverse-primary` | Text-On-Fill #FFFFFF |
| 小竖线色 | `--line-short-divider` (#C4C7CA) | Line-Short Divider，与 [Divider 小竖线](./Divider.md) 一致 |

| 元素 | 字号 | 字重 | 行高 | Font.md 字阶 |
|------|------|------|------|----------------|
| 主导航项（Web） | 14px | Medium (500) | 1.3 | B7 |
| Log In / Assets / Order（Web） | 14px | GateSans5.1 Medium | normal | B7 |
| Header 按钮文案（Sign Up / Deposit / Log In 按钮） | 12px | Medium (500) | 1.3 | B11 |

---

## 3. Footer 规范

### 3.1 Footer - Web

#### 3.1.1 容器与布局

| 属性 | 取值 | 说明 |
|------|------|------|
| 背景 | `--bg-secondary` | 整块 Footer 背景（Color.md · Bg-Secondary） |
| 上内边距 | `80px` | 顶部留白 |
| 内容区宽度 | `1200px`（设计稿） | 可随栅格限制最大宽，居中 |
| 主布局 | 多列 flex，列间距 `24px` | 左栏固定宽 + 右侧多列均分 |

#### 3.1.2 左侧区域（下载与 Community）

| 顺序 | 内容 | 规格 | 引用/备注 |
|------|------|------|-----------|
| 1 | 标题 | 「Trade Crypto Anywhere Anytime」，字号 `20px`，Semibold (600)，色 `--text-primary`，行高 1.3 | 标题与下方块 gap `16px` |
| 2 | 二维码容器 | 宽高 `132px`，白底 `--bg-primary`，圆角 `8px`，内边距 `8px`；内部二维码图 `116×116px` | 二维码图可引用 [Slicing/Header/QR Code.svg](./Slicing/Header/QR%20Code.svg) 或设计稿导出 |
| 3 | 二维码说明 | 「Scan to download Gate app」，字号 `14px`，Regular，色 `--text-tertiary`（Color.md · Text-Tertiary），与二维码块 gap `12px` | — |
| 4 | Community 标题 | 「Community」，20px Semibold，与上方块 gap `24px` | — |
| 5 | 社媒图标行 | 第一行：CEX_Email、CEX_Facebook、CEX_Twitter、CEX_Telegram，间距 `32px`；第二行：CEX_Discord、CEX_Instagram、CEX_Youtube、line-gengduo（更多），间距 `32px`；图标 `24×24px` | 引用 [Icon 组件](./Icon.md)（含 Social Media 等分类） |
| 6 | 语言/货币下拉 | 单下拉「English/USD」，高 `32px`，圆角 `6px`，背景 `--bg-tertiary`，字号 `14px` Medium，后缀 CEX_chevron_down 16px | 与社媒区 gap `4px`；下拉组件按 Select/Dropdown 规范 |

- 左栏宽度设计稿约 `232px`，内部块垂直排列，gap 见上。

#### 3.1.3 中间多列（About / Products / Services / Learn）

| 列 | 标题 | 标题样式 | 链接样式 | 链接间距 |
|----|------|----------|----------|----------|
| About | About | 20px Semibold，`--text-primary` | 14px Medium，`--text-secondary`，行高 1.3 | 标题与链接 gap `16px`，链接之间 `16px` |
| Products | Products | 同上 | 同上 | 同上 |
| Services | Services | 同上 | 同上 | 链接之间 `20px` |
| Learn | Learn | 同上 | 同上，部分项带 14px CEX_down_fill 下拉箭头 | 同上 |

- 子链接内容以设计稿为准（如 About Us、Careers、…；Products、Services、Learn 下列表）。列与列之间为 flex 均分或固定比例，整体与左栏 gap `24px`。

#### 3.1.4 底部分割线与版权（Web）

| 顺序 | 内容 | 规格 | 引用/备注 |
|------|------|------|-----------|
| 1 | 分割线 | 通栏宽，高 `1px`，线色与设计令牌一致 | 引用 [Divider 组件](./Divider.md) **水平分割线**（1px，`--line-border-subtle`） |
| 2 | 版权文案 | 「Gate © 2013-2025.」，字号 `14px`，Medium，色 `--text-tertiary`，居中 | 与分割线间距按设计稿（如 26px） |

---

### 3.2 Footer - H5

#### 3.2.1 容器与布局

| 属性 | 取值 | 说明 |
|------|------|------|
| 背景 | `--bg-secondary` | 与 Web 一致（Bg-Secondary） |
| 上/下内边距 | `pt: 40px`，`pb: 24px` | — |
| 水平内边距 | `16px` | 左右 |
| 布局 | 垂直单列，块之间 `gap: 32px`（大块）、`gap: 24px`（内部） | 从上到下：Logo → 折叠区 → 社媒 → 下拉 → 版权 |

#### 3.2.2 从上到下结构（H5）

| 顺序 | 内容 | 规格 | 引用/备注 |
|------|------|------|-----------|
| 1 | **Logo** | 高度约 `20px`，宽等比 | [Slicing/Header/Logo.svg](./Slicing/Header/Logo.svg) |
| 2 | **折叠区** | 四行：About、Products、Services、Learn；每行：文案 16px Medium `--text-primary` + 右侧 CEX_chevron_down `20×20px`，行间 gap `24px` | 引用 [Icon 组件](./Icon.md) CEX_chevron_down；点击展开子链接 |
| 3 | **社媒图标** | 两行，图标 `24×24px`，第一行间距 `40px`，第二行同；含 Email、Facebook、Twitter、Telegram、Discord、Instagram、Youtube、line-gengduo | 同 Web，引用 [Icon 组件](./Icon.md) |
| 4 | **语言 / 货币** | 两列：左「English」、右「USD」，各为下拉，高 `48px`，圆角 `8px`，背景 `--bg-tertiary` / `--color-cmpt-input`（组件输入背景，见 Select 组件规范），字号 `14px` Medium，间距 `12px` | 触发器样式与 [Select.md](./Select.md) Dropdown Small/48px 档一致（`select-wrap + select-trigger + select-menu`），交互同 demo/select.html：点击展开/收起、点击选项写回文案、点击空白处关闭；H5 拆成两个独立下拉 |
| 5 | **版权** | 「Copyright © 2013-2025.」「All Right Reserved.」，字号 `12px`，Regular，色 `--text-tertiary`，居中，两行 | 与上方块留白 |

- H5 **无**二维码区、无多列链接展开展示，仅通过折叠标题展开子链接；语言与货币为两个独立下拉。

---

### 3.3 Footer 设计令牌与尺寸汇总

**颜色见 [Color.md](./Color.md)，字号/字重见 [Font.md](./Font.md)。**

| 用途 | Token / 值 | Color.md / Font.md |
|------|-------------|---------------------|
| 背景 | `--bg-secondary` | Bg-Secondary #FAFAFA（Color.md） |
| 标题色 | `--text-primary` | Text-Primary #070808；标题 20px Semibold → S3 |
| 链接/次要文案 | `--text-secondary` | Text-Secondary #84888c；14px → B7 |
| 说明/版权 | `--text-tertiary` | Text-Tertiary #a0a3a7；版权 12px → B13 |
| 下拉/输入背景 | `--bg-tertiary` / 组件 input 背景 | Background / 组件规范 |
| 分割线 | `--line-border-subtle` | Line-Border-Subtle #F2F3F4 |

---

## 4. 切图与组件引用汇总

### 4.1 切图（@Guidelines/Slicing/Header）

| 资源 | 路径 | 用途 |
|------|------|------|
| Logo | [Guidelines/Slicing/Header/Logo.svg](./Slicing/Header/Logo.svg) | Header 品牌、Footer H5 顶部 |
| Avatar | [Guidelines/Slicing/Header/Avatar.svg](./Slicing/Header/Avatar.svg) | Header 登录态头像占位/默认头像 |
| QR Code | [Guidelines/Slicing/Header/QR Code.svg](./Slicing/Header/QR%20Code.svg) | Footer Web 下载区二维码 |
| gift_box | [Guidelines/Slicing/Header/gift_box.svg](./Slicing/Header/gift_box.svg) | Header Web 导航「Rewards Hub」左侧图标 |

### 4.2 图标（Icon 组件）

| 图标名 | 使用位置 |
|--------|----------|
| CEX_Search | Header Web/H5 搜索 |
| CEX_Download | Header Web/H5 下载 |
| CEX_Grid | Header H5 九宫格/更多 |
| CEX_Language | Header Web 语言 |
| CEX_Darkmode | Header Web 深色模式 |
| CEX_Settings | Header Web 设置 |
| CEX_Notification | Header Web 登录态 通知 |
| CEX_down_fill | Header Web 导航下拉箭头（16px） |
| CEX_chevron_down | Footer H5 折叠箭头（20px）、下拉后缀 |
| CEX_Email, CEX_Facebook, CEX_Twitter, CEX_Telegram, CEX_Discord, CEX_Instagram, CEX_Youtube | Footer Web/H5 社媒 |
| line-gengduo | Footer 社媒「更多」 |

所有图标引用方式见 [Icon 组件规范](./Icon.md)。

### 4.3 按钮（Button 组件）

| 文案 | 平台 | 规格 | 引用 |
|------|------|------|------|
| Sign Up | Web Header 未登录 | XXSmall，28px 高，12px 水平 padding，12px 字号 | [Button 组件](./Button.md) |
| Deposit | Web Header 登录 | 同上 | 同上 |
| Log In（按钮形态） | H5 Header 未登录 | 同上 | 同上 |

- 「Log In」在 **Web 未登录** 为纯文字链接，不使用按钮组件。

### 4.4 分割线（Divider 组件）

| 用途 | 类型 | 规格 | 引用 |
|------|------|------|------|
| Header 右侧功能区与图标之间的竖线 | 小竖线 | 1px×16px，色 #C4C7CA | [Divider 组件](./Divider.md) §3 小竖线 |
| Footer Web 底部上方横线 | 水平分割线 | 1px 高，通栏宽，`--line-border-subtle` | [Divider 组件](./Divider.md) §2 分割线 |

### 4.5 字体与颜色

| 类型 | 说明 | 引用 |
|------|------|------|
| **字体** | 字号、字重、行高、字体家族与 Web 字阶一致（如 B7 14px 500、B11 12px 500、S3 20px 600） | [Font.md](./Font.md)、[font.html](../demo/font.html) |
| **颜色** | 文案、背景、线条、按钮、图标等使用 Color Token，Light/Dark 见规范 | [Color.md](./Color.md)、[Color.html](../Color.html) |
| **Icon-Secondary** | Header 右侧功能图标、Footer Web/H5 社媒图标（Email/Facebook/X/Telegram/Discord/Instagram/YouTube/更多）使用颜色组件 Icon/Icon-Secondary（`--icon-secondary`），Light=#484B51 | 见 [Color.md](./Color.md) 「Icon 颜色」 |
| **Icon-Tertiary** | Header 导航与 Assets/Order 下拉箭头、Footer Learn 列四个箭头、Footer H5 折叠箭头使用 Icon/Icon-Tertiary（`--icon-tertiary`），Light=#A0A3A7 | 同上 |

---

## 5. Web / H5 适配差异速查

| 项目 | Web | H5 |
|------|-----|-----|
| Header 高度 | 48px | 48px |
| Header 导航 | 完整主导航 + Rewards Hub | 无，仅 Logo + 右侧操作 |
| Header 未登录右侧 | Log In 文字 + Sign Up 按钮 + 5 个图标 | Log In 按钮 + 小竖线 + 3 个图标（搜索/下载/九宫格） |
| Header 登录右侧 | Deposit + Assets + Order + 头像 + 小竖线 + 6 个图标 | 头像 + 小竖线 + 3 个图标 |
| Footer 布局 | 多列 + 二维码 + 社媒 + 语言/货币合一 | 单列折叠 + 社媒 + 语言/货币两列 |
| Footer 版权 | 14px，「Gate © 2013-2025.」 | 12px，「Copyright © 2013-2025.」「All Right Reserved.» |

---

**文档结束。** 以上内容均从 Figma 节点 `7863:17337`（Web-H5 对应关系）及子节点提取，覆盖 Header 登录/未登录、Header/Footer 的 Web 与 H5 适配；切图 [Slicing/Header](./Slicing/Header)，[Icon](./Icon.md)、[Button](./Button.md)、[Divider](./Divider.md)、**[Font](./Font.md)**、**[Color](./Color.md)** 引用已全部纳入，无遗漏。
