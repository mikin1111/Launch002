# Icon 组件规范（Figma + 静态资源）

## 文档说明

本规范基于 Figma 中的 **Icon / 基础产品图标** 页面，以及当前代码仓库中 `Guidelines/icons` 目录下已下载的 SVG 资源，统一说明各类图标的：

- **分类与来源目录**
- **预览示意**
- **在文档（Markdown）与页面（HTML / React）中的引用方式**

**设计稿来源：** [Figma - Basic Product Icons](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=13-1361)

**演示页面：** [icon.html](../demo/icon.html) 在浏览器中打开可查看所有分类下的 SVG 图标。

**最后更新：** 与 Figma 及本地 `Guidelines/icons` 资源一致

---

### 1. 目录结构（Icon 分类）

项目中所有 SVG 图标均存放在 `Guidelines/icons` 目录下，并按功能/语义划分为以下子目录：

- `Basic Product Icons`：基础产品图标（操作、功能、账户、交易等）
- `Currency Chain Icons`：链标识图标（BTC、ETH、SOL 等链）
- `Currency Icons`：币种图标（与链无关的 Token 图标）
- `Fiat Currency Icons`：法币图标（USD、CNY、EUR 等）
- `Header Icons`：头部导航/运营位使用的双色大图标
- `National Flag Icons`：国旗图标（国家/地区）
- `Social Media Icons`：社交媒体与平台图标

下面各小节会分别展示**若干代表性图标的预览**，以及**统一的引用方式**，其他未列出的 SVG 可按相同路径规则使用。

> Markdown 中带空格的路径需要进行 URL 编码（空格写成 `%20`），例如：`Basic%20Product%20Icons`。

---

### 2. 基础产品图标（Basic Product Icons）

**目录：** `Guidelines/icons/Basic Product Icons`

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `CEX_Search` | ![CEX_Search](./icons/Basic%20Product%20Icons/CEX_Search.svg) |
| `CEX_Settings` | ![CEX_Settings](./icons/Basic%20Product%20Icons/CEX_Settings.svg) |
| `CEX_Notification` | ![CEX_Notification](./icons/Basic%20Product%20Icons/CEX_Notification.svg) |
| `CEX_Deposit` | ![CEX_Deposit](./icons/Basic%20Product%20Icons/CEX_Deposit.svg) |
| `CEX_Withdraw` | ![CEX_Withdraw](./icons/Basic%20Product%20Icons/CEX_Withdraw.svg) |
| `CEX_circlefilled_info` | ![CEX_circlefilled_info](./icons/Basic%20Product%20Icons/CEX_circlefilled_info.svg) |
| `CEX_sort` | ![CEX_sort](./icons/Basic%20Product%20Icons/CEX_sort.svg) |

**表头排序图标（Table Header Sort）：**

- **设计稿：** [Figma - Table Header Sort](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=9005-5896)（node-id=9005-5896）
- **组件库 SVG：** `Guidelines/icons/Basic Product Icons/CEX_sort.svg`（上下双三角，表头「可排序」状态）
- **尺寸：** 表头 14px 字阶时用 **12×12 px**（见 §9 箭头图标梯度）；画布为 24×24，引用时设 `width="12"` `height="12"` 即可。
- **颜色：** 与表头文案一致，建议 SVG 使用 `currentColor` 或设计 Token `--text-secondary` / `--text-tertiary`。

**Markdown 引用示例：**

```markdown
![搜索图标](./icons/Basic%20Product%20Icons/CEX_Search.svg)
```

**HTML 引用示例：**

```html
<img
  src="./icons/Basic%20Product%20Icons/CEX_Search.svg"
  alt="Search"
  width="24"
  height="24" />
```

**React 引用示例（建议封装为 Icon 组件）：**

```tsx
type IconName =
  | 'CEX_Search'
  | 'CEX_Settings'
  | 'CEX_Notification'
  | 'CEX_Deposit'
  | 'CEX_Withdraw'
  | 'CEX_circlefilled_info'
  | 'CEX_sort';

export function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  return (
    <img
      src={`./icons/Basic%20Product%20Icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
    />
  );
}
```

> 其他基础产品图标（如 `CEX_add.svg`、`CEX_Favorite.svg`、`CEX_Spot.svg`、`CEX_Ascendingsort.svg`、`CEX_Descendingsort.svg` 等）路径与上面保持一致，只需替换文件名。

---

### 3. 链图标（Currency Chain Icons）

**目录：** `Guidelines/icons/Currency Chain Icons`

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `Chain_BTC` | ![Chain_BTC](./icons/Currency%20Chain%20Icons/Chain_BTC.svg) |
| `Chain_ETH` | ![Chain_ETH](./icons/Currency%20Chain%20Icons/Chain_ETH.svg) |
| `Chain_SOL` | ![Chain_SOL](./icons/Currency%20Chain%20Icons/Chain_SOL.svg) |
| `Chain_TRX` | ![Chain_TRX](./icons/Currency%20Chain%20Icons/Chain_TRX.svg) |

**Markdown 引用示例：**

```markdown
![BTC 链图标](./icons/Currency%20Chain%20Icons/Chain_BTC.svg)
```

**路径规则：**

- 文件统一命名为 `Chain_链名.svg`，例如：
  - `Chain_BTC.svg`
  - `Chain_ETH.svg`
  - `Chain_USDT.svg`

---

### 4. 币种图标（Currency Icons）

**目录：** `Guidelines/icons/Currency Icons`

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `Crypto_BTC` | ![Crypto_BTC](./icons/Currency%20Icons/Crypto_BTC.svg) |
| `Crypto_ETH` | ![Crypto_ETH](./icons/Currency%20Icons/Crypto_ETH.svg) |
| `Crypto_USDT` | ![Crypto_USDT](./icons/Currency%20Icons/Crypto_USDT.svg) |
| `Crypto_GT` | ![Crypto_GT](./icons/Currency%20Icons/Crypto_GT.svg) |

**Markdown 引用示例：**

```markdown
![BTC 币种图标](./icons/Currency%20Icons/Crypto_BTC.svg)
```

**路径规则：**

- 文件统一命名为 `Crypto_币种名.svg`，例如：
  - `Crypto_BNB.svg`
  - `Crypto_SOL.svg`
  - `Crypto_XRP.svg`
  - 占位/首字母图标：`Crypto_shouzimu.svg`、`Crypto_zhanwei.svg`

---

### 5. 法币图标（Fiat Currency Icons）

**目录：** `Guidelines/icons/Fiat Currency Icons`

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `USD` | ![USD](./icons/Fiat%20Currency%20Icons/USD.svg) |
| `CNY` | ![CNY](./icons/Fiat%20Currency%20Icons/CNY.svg) |
| `EUR` | ![EUR](./icons/Fiat%20Currency%20Icons/EUR.svg) |
| `JPY` | ![JPY](./icons/Fiat%20Currency%20Icons/JPY.svg) |

**Markdown 引用示例：**

```markdown
![USD 法币图标](./icons/Fiat%20Currency%20Icons/USD.svg)
```

**路径规则：**

- 文件名直接为**货币代码**，例如：
  - `USD.svg`、`CNY.svg`、`EUR.svg`、`HKD.svg`、`NGN.svg` 等。
  - 法币占位图：`法币占位.svg`。

---

### 6. 头部导航图标（Header Icons）

**目录：** `Guidelines/icons/Header Icons`

这些图标多为双色、面积更大的运营/导航入口图标，常用于顶部导航、运营位模块。

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `TwoColor_Launchpad` | ![Launchpad](./icons/Header%20Icons/TwoColor_Launchpad.svg) |
| `TwoColor_P2P` | ![P2P](./icons/Header%20Icons/TwoColor_P2P.svg) |
| `TwoColor_FiatDeposit` | ![FiatDeposit](./icons/Header%20Icons/TwoColor_FiatDeposit.svg) |

**Markdown 引用示例：**

```markdown
![Launchpad 图标](./icons/Header%20Icons/TwoColor_Launchpad.svg)
```

**路径规则：**

- 统一前缀为 `TwoColor_`，后接功能名称或中文文案，例如：
  - `TwoColor_Grid.svg`
  - `TwoColor_交割合约.svg`
  - `TwoColor_邀请返佣.svg`

---

### 7. 国旗图标（National Flag Icons）

**目录：** `Guidelines/icons/National Flag Icons`

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `us`（美国） | ![US Flag](./icons/National%20Flag%20Icons/us.svg) |
| `cn`（中国） | ![CN Flag](./icons/National%20Flag%20Icons/cn.svg) |
| `eu`（欧盟 / `eea`/`eu` 等） | ![EEA](./icons/National%20Flag%20Icons/eea.svg) |

> 实际文件名为统一的小写 ISO 代码或特殊标识（如 `aat.svg`、`IMF.svg`、`global.svg`），请按国家/地区对应表引用。

**Markdown 引用示例：**

```markdown
![美国国旗](./icons/National%20Flag%20Icons/us.svg)
```

**注意：**

- 建议在 UI 层规范：**所有国家/地区引用统一通过代码层的映射表**（country code → 文件名），不要在业务代码里硬编码路径。

---

### 8. 社交媒体图标（Social Media Icons）

**目录：** `Guidelines/icons/Social Media Icons`

**代表图标预览：**

| 名称 | 预览 |
| ---- | ---- |
| `CEX_Twitter` | ![Twitter](./icons/Social%20Media%20Icons/CEX_Twitter.svg) |
| `CEX_Telegram` | ![Telegram](./icons/Social%20Media%20Icons/CEX_Telegram.svg) |
| `CEX_Wechat` | ![Wechat](./icons/Social%20Media%20Icons/CEX_Wechat.svg) |
| `CEX_Facebook` | ![Facebook](./icons/Social%20Media%20Icons/CEX_Facebook.svg) |

**Markdown 引用示例：**

```markdown
![Twitter 图标](./icons/Social%20Media%20Icons/CEX_Twitter.svg)
```

**路径规则：**

- 前缀统一为 `CEX_`，后面接平台名或品牌名，例如：
  - `CEX_Twitter.svg`
  - `CEX_Telegram.svg`
  - `CEX_Github.svg`
  - `CEX_Apple.svg`
  - `CEX_Windows.svg`

---

### 9. 字号与 Icon 尺寸对应规则（Helper 场景）

在 Figma 的「Helper Label 规范」页面中，对 **辅助文案 + Icon** 的组合给出了一套**字号与 Icon 尺寸的梯度规则**，分为 Info 圆形图标、箭头图标与基础 Icon 三类。三类在同一字号下遵循一致的尺寸梯度。

> 设计稿来源：[Figma - Helper Guidelines](https://www.figma.com/design/yyvB1Mer7aG8cJx9JVTVZL/%E6%B5%8B%E8%AF%95V5.1-Web-H5%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=7576-837)

**Info 图标梯度（例如 `CEX_circlefilled_info`）：**

| 文本字号 | 建议 Icon 尺寸 | 说明 |
|---------|----------------|------|
| 24 px   | 20 × 20 px     | 大号辅助文案，Icon 明显但不抢主内容 |
| 20 px   | 16 × 16 px     | 标题级 Helper，常用于次级标题旁 |
| 18 px   | 16 × 16 px     | 中等字号正文的附加说明 |
| 16 px   | 14 × 14 px     | 常规正文旁的提示信息 |
| 14 px   | 12 × 12 px     | 小号正文/表单字段说明 |
| 12 px   | 12 × 12 px     | 极小文字，Icon 再缩小会影响识别度，因此保持 12 px |

**箭头图标梯度（例如 `CEX_chevron_right`）：**

| 文本字号 | 建议 Icon 尺寸 | 说明 |
|---------|----------------|------|
| 24 px   | 20 × 20 px     | 大号入口/按钮右侧的箭头 |
| 20 px   | 16 × 16 px     | 列表行、二级入口右侧箭头 |
| 18 px   | 16 × 16 px     | 中等字号文案的附属箭头 |
| 16 px   | 14 × 14 px     | 普通列表项、表单行的箭头 |
| 14 px   | 12 × 12 px     | 紧凑列表或表格行内箭头 |
| 12 px   | 12 × 12 px     | 极小字号场景，Icon 不再继续缩放 |

**基础 Icon 梯度（例如 `CEX_Edit` 等通用操作 Icon）：**

| 文本字号 | 建议 Icon 尺寸 | 说明 |
|---------|----------------|------|
| 24 px   | 20 × 20 px     | 和大号标题/重要操作搭配 |
| 20 px   | 16 × 16 px     | 和中号标题/显著操作搭配 |
| 18 px   | 16 × 16 px     | 和强调正文或卡片标题搭配 |
| 16 px   | 14 × 14 px     | 和常规正文/表单字段搭配 |
| 14 px   | 12 × 12 px     | 与小号正文/辅助文字搭配 |
| 12 px   | 12 × 12 px     | 与极小辅助文案搭配 |

**实现建议：**

- **统一缩放基准**：上述尺寸均是相对 `24×24` 画布的缩放（例如从 24px 等比缩放到 20/16/14/12），实现时应保证视图框不变，仅缩放渲染尺寸。
- **跟随字阶表**：当采用 `Font.md` 中的字阶（如 14 正文、16 副标题等）时，可直接按表中对应行选用 Icon 尺寸，保证在所有 Helper/Label 组件中视觉一致。
- **优先保持可读性**：当字号进一步变小时（例如低于 12px），不再继续缩小 Icon，以免丧失识别度。

---

### 10. 通用使用建议

- **尺寸**：Figma 中大部分 Icon 设计在 `24×24` 画布上，实现时可默认 `width=24`、`height=24`，如需缩放建议整体等比缩放。
- **颜色**：SVG 内部已带默认颜色（通常是 `--color-icon-icon-primary` 对应色），如需跟随文字颜色，可在导出/图形处理中改为 `currentColor`。
- **封装**：前端实现推荐统一封装 `Icon` 组件，通过 `name` + `category`（或自动映射）来拼接路径，而不是在业务逻辑里直接写具体文件名。

后续如果在 `Guidelines/icons` 中新增或调整图标，只要遵循上述目录与命名规则，即可按相同方式在 Markdown 和代码中引用。
