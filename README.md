# dbshangji
7 生产管理
7.1产品管理

产品表
品名 品号 

材料表
材料号 材料名

7.2生产计划管理

生产计划
月份 品号 数量

7.3采购管理

采购表
待采购材料号  规格  用量  单位  单价  备注

库存材料表
材料号 库存数

7.4入库登记 材料入库，更新库存账目，入库信息查询

入库明细
时间 产品号 材料号 数量 规格

7.5领料管理 出库单登记，更新库存账目，出库库信息查询

出库明细
时间 产品号 材料号 数量

7.6成品管理 成品入库

成品表
时间 产品号 生产数量

7.7成品销售
7.8人员管理，系统维护
7.9信息查询
7.10信息统计

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
