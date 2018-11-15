webpackJsonp([37],{"37ga":function(e,a){},"S/cp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("6D10"),o={name:"Approval",components:{BaseTable:function(){return t.e(101).then(t.bind(null,"ss0d"))},BackButton:function(){return t.e(102).then(t.bind(null,"uOVF"))}},data:function(){return{fleetTypeCode:[],fleetTypeList:[{code:"1",name:"企业未营业车"},{code:"2",name:"营业公路客运"},{code:"3",name:"营业城市公交"},{code:"4",name:"营业旅游车"},{code:"5",name:"非营业货车(含特四)"},{code:"6",name:"营业货车(含特四)"},{code:"7",name:"特一"},{code:"8",name:"特二"},{code:"9",name:"特三"},{code:"10",name:"营业出租租赁客车"}],columns:[{prop:"agencyNo",width:120,label:"协议号"},{prop:"insuranceType",width:160,label:"险种"},{prop:"finalPayRate",width:130,label:"终极赔付率(%)"},{prop:"finalPayRateType",width:130,label:"终极赔付率分类"},{prop:"premiumPercent",width:120,label:"保费占比(%)"},{prop:"serviceCost",width:120,label:"手续费(%)"},{prop:"exhibitionCost",width:120,label:"展业费(%)"},{prop:"award",width:120,label:"价值提奖(%)"},{prop:"marketCost",width:120,label:"当前市场费用"},{prop:"checkedFeeUp",width:120,label:"已核费用上限"},{prop:"operationCostRate",width:130,label:"经营成本率(%)"}],data1:[{agencyNo:"50000100001",insuranceType:"机动车辆保险",finalPayRate:"66.93",finalPayRateType:"中II",premiumPercent:"55.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",insuranceType:"机动车综合商业保险",finalPayRate:"33.93",finalPayRateType:"低I",premiumPercent:"45.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"},{agencyNo:"全国合计：",insuranceType:"",finalPayRate:"27.29",finalPayRateType:"中I",premiumPercent:"60.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.84"}],columns2:[{prop:"agencyNo",width:130,label:"协议号"},{prop:"bizSector",width:160,label:"业务模块"},{prop:"insuranceType",width:170,label:"险种"},{prop:"specialFactor",width:160,label:"特殊因子"},{prop:"auto",width:160,label:"自主系数"},{prop:"historyAuto",width:160,label:"历史自主系数"},{prop:"finalPayRate",width:130,label:"终极赔付率(%)"},{prop:"finalPayRateType",width:140,label:"终极赔付率分类"},{prop:"historyFullRate",width:160,label:"历史满期配费率(%)"},{prop:"historyPremium",width:120,label:"历史保费规模"},{prop:"premiumPercent",width:120,label:"保费占比(%)"},{prop:"serviceCost",width:120,label:"手续费(%)"},{prop:"exhibitionCost",width:120,label:"展业费(%)"},{prop:"award",width:120,label:"价值提奖(%)"},{prop:"marketCost",width:120,label:"当前市场费用"},{prop:"checkedFeeUp",width:120,label:"已核费用上限"},{prop:"operationCostRate",width:130,label:"经营成本率(%)"}],data2:[{agencyNo:"50000100001",bizSector:"家用-新车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",historyPremium:"2603.40",premiumPercent:"8.10",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",bizSector:"家用-新车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",historyPremium:"8648.65",premiumPercent:"26.92",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"},{agencyNo:"50000100001",bizSector:"家用-旧车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",historyPremium:"2603.40",premiumPercent:"8.10",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{agencyNo:"50000100001",bizSector:"家用-旧车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",historyPremium:"8648.65",premiumPercent:"26.92",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"}],approve1:"",approve2:"",phrase:"",advise:"",approveHisCols:[{prop:"d1",width:120,label:"处理人",align:"center"},{prop:"d2",width:120,label:"级别名称",align:"center"},{prop:"d3",width:120,label:"处理部门",align:"center"},{prop:"d4",width:130,label:"处理时间",align:"center"},{prop:"d5",width:120,label:"审核意见",align:"center"}],approveHisData:[{d1:"张三",d2:"高级",d3:"000001",d4:"2018-07-19 11:02:28",d5:"同意"},{d1:"李四",d2:"高级",d3:"000001",d4:"2018-07-19 15:47:02",d5:"同意"}],approveHisVisible:!1,updateVisible:!1,yearColumn:[{prop:"operation",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"yearDetail"}]},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],yearData:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}],yearDetailHidden:!0,yearDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],yearDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}],approveColumn:[{prop:"operation",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"approveDetail"}]},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],approveData:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],approveDetailHidden:!0,approveDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],approveDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],evaluateColumn:[{prop:"operation",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"evaluateDetail"}]},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],evaluateData:[{insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],evaluateDetailHidden:!0,evaluateDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],evaluateDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"},{bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",marketCostRate:"16.8",operationCostRate:"98"}],compareColumn:[{prop:"operation",width:120,label:"详情",align:"center",operation:!0,operations:[{text:"详情",event:"compareDetail"}]},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],compareData:[{insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}],compareDetailHidden:!0,compareDetailColumn:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(万元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],compareDetailData:[{bizSector:"家用车-新车",insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-新车",insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-新车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"交强险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"商业险合计",proPremiumScale:"225",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"},{bizSector:"家用车-旧车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}],updateCols:[{prop:"index",width:50,label:"",type:"selection"},{prop:"levelNo",width:120,label:"级别"},{prop:"levelName",width:120,label:"级别名称"},{prop:"approval",width:120,label:"审批人姓名"}],updateData:[{levelNo:"1",levelName:"出单员",approval:"孙伟"},{levelNo:"2",levelName:"初级审核",approval:"张翰"},{levelNo:"3",levelName:"中级审批",approval:"李明"}]}},methods:{modify:function(){this.$router.push({path:"/admin/agency/approval/modify"})},yearDetail:function(){this.yearDetailHidden=!this.yearDetailHidden},approveDetail:function(){this.approveDetailHidden=!this.approveDetailHidden},evaluateDetail:function(){this.evaluateDetailHidden=!this.evaluateDetailHidden},compareDetail:function(){this.compareDetailHidden=!this.compareDetailHidden},merge:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["agencyNo","bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge2:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["operation"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge3:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge4:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["operation"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge5:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge6:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["operation"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge7:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge8:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["operation"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge9:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}}},computed:{mergeData:function(){return Object(r.a)(this.data2,["agencyNo","bizSector"])},mergeData2:function(){return Object(r.a)(this.yearData,["operation"])},mergeData3:function(){return Object(r.a)(this.yearDetailData,["bizSector"])},mergeData4:function(){return Object(r.a)(this.approveData,["operation"])},mergeData5:function(){return Object(r.a)(this.approveDetailData,["bizSector"])},mergeData6:function(){return Object(r.a)(this.evaluateData,["operation"])},mergeData7:function(){return Object(r.a)(this.evaluateDetailData,["bizSector"])},mergeData8:function(){return Object(r.a)(this.compareData,["operation"])},mergeData9:function(){return Object(r.a)(this.compareDetailData,["bizSector"])}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"data"},[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"代理协议审批"}},[t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(a){e.approveHisVisible=!0}}},[e._v("历史审核意见")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("影像资料")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("影像上传")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.modify}},[e._v("修改")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.data1,rowKey:"agencyNo"}})],1)]),e._v(" "),t("div",{staticClass:"sector-list"},[t("div",{staticClass:"biz-sector"},[t("el-form",{attrs:{"label-width":"120px",inline:!0}},[t("el-form-item",[t("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(a){e.fleetTypeCode=a},expression:"fleetTypeCode"}},[e._l(e.fleetTypeList,function(a){return t("el-checkbox",{key:a.code,attrs:{label:a.code,name:"fleetType"}},[e._v("\n                    "+e._s(a.name)+"\n                  ")])}),e._v(" "),t("el-checkbox",{staticStyle:{color:"red"},attrs:{label:"0"}},[e._v(" 未勾选板块出单取0费用")])],2)],1)],1)],1)]),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns2,rowKey:"agencyNo",data:e.mergeData,spanMethod:e.merge}})],1)]),e._v(" "),t("div",{staticClass:"data"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("div",{staticClass:"title"},[e._v("申报情况说明")]),e._v(" "),t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve1,callback:function(a){e.approve1=a},expression:"approve1"}})],1)])]),e._v(" "),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("div",{staticClass:"title"},[e._v("检视说明")]),e._v(" "),t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve2,callback:function(a){e.approve2=a},expression:"approve2"}})],1)])])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:24}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("div",{staticClass:"title"},[e._v("审批消息")])])])])],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("el-form",[t("el-form-item",{attrs:{label:"审批片语:",prop:"phrase"}},[t("el-select",{model:{value:e.phrase,callback:function(a){e.phrase=a},expression:"phrase"}},[t("el-option",{attrs:{label:"同意",value:"y"}},[e._v("同意")]),e._v(" "),t("el-option",{attrs:{label:"拒绝",value:"n"}},[e._v("拒绝")])],1)],1)],1)],1)])]),e._v(" "),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("el-form",[t("el-form-item",{attrs:{label:"签署审批意见:",prop:"phrase"}},[t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.advise,callback:function(a){e.advise=a},expression:"advise"}})],1)],1)],1)])])],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("暂存")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("放弃处理")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("审核通过")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(a){e.updateVisible=!0}}},[e._v("下发修改")])],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"代理协议回滚12个月历史保单情况"}},[t("div",{staticClass:"table"},[t("base-table",{attrs:{border:!0,columns:e.yearColumn,rowKey:"agencyNo",data:e.mergeData2,spanMethod:e.merge2},on:{yearDetail:e.yearDetail}})],1),e._v(" "),t("div",{attrs:{hidden:e.yearDetailHidden},on:{"update:hidden":function(a){e.yearDetailHidden=a}}},[t("base-table",{attrs:{border:!0,columns:e.yearDetailColumn,rowKey:"agencyNo",data:e.mergeData3,spanMethod:e.merge3}})],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"该代理协议的评估情况"}},[t("div",{staticClass:"table"},[t("base-table",{attrs:{border:!0,columns:e.evaluateColumn,rowKey:"agencyNo",data:e.mergeData6,spanMethod:e.merge6},on:{evaluateDetail:e.evaluateDetail}})],1),e._v(" "),t("div",{attrs:{hidden:e.evaluateDetailHidden},on:{"update:hidden":function(a){e.evaluateDetailHidden=a}}},[t("base-table",{attrs:{border:!0,columns:e.evaluateDetailColumn,rowKey:"agencyNo",data:e.mergeData7,spanMethod:e.merge7}})],1)]),e._v(" "),t("el-tab-pane",{attrs:{label:"代理协议历史数据与待申报数据合并后与预算对比分析"}},[t("div",{staticClass:"table"},[t("base-table",{attrs:{border:!0,columns:e.compareColumn,rowKey:"agencyNo",data:e.mergeData8,spanMethod:e.merge8},on:{compareDetail:e.compareDetail}})],1),e._v(" "),t("div",{attrs:{hidden:e.compareDetailHidden},on:{"update:hidden":function(a){e.compareDetailHidden=a}}},[t("base-table",{attrs:{border:!0,columns:e.compareDetailColumn,rowKey:"agencyNo",data:e.mergeData9,spanMethod:e.merge9}})],1)])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"审核信息",visible:e.approveHisVisible},on:{"update:visible":function(a){e.approveHisVisible=a}}},[t("base-table",{attrs:{columns:e.approveHisCols,data:e.approveHisData,"show-header":!0}}),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(a){e.approveHisVisible=!1}}},[e._v("确认")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"下发修改",visible:e.updateVisible},on:{"update:visible":function(a){e.updateVisible=a}}},[t("base-table",{attrs:{columns:e.updateCols,data:e.updateData,rowKey:"agencyNo"}}),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.updateVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.updateVisible=!1}}},[e._v("确认")])],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")(o,i,!1,function(e){t("37ga")},"data-v-77e44630",null);a.default=l.exports}});