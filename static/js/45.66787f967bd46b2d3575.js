webpackJsonp([45],{Q3lF:function(e,t){},bmwG:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("NYxO"),o={name:"SupplyQuotationRule",components:{BackButton:function(){return i.e(102).then(i.bind(null,"uOVF"))}},mounted:function(){this.$store.commit("SHOW_VERSION")},beforeRouteLeave:function(e,t,i){this.$store.commit("HIDE_VERSION"),i()},data:function(){return{columns:[{prop:"orgCode",title:"机构代码",width:200,headerAlign:"center",align:"center"},{prop:"insuranceType",title:"险种",width:220,headerAlign:"center",align:"center"},{prop:"businessSource",title:"业务来源",width:120,headerAlign:"center",align:"center"},{prop:"businessSegment",title:"业务板块",width:150,headerAlign:"center",align:"center"},{prop:"businessTypeNo",title:"业务单元号",width:120,headerAlign:"center",align:"center"},{prop:"businessSegmentDetail",title:"业务板块明细",width:210,headerAlign:"center",align:"center"},{prop:"isInverseDiscount",title:"是否反算折扣",width:120,headerAlign:"center",align:"center"},{prop:"isInverseCost",title:"是否反算费用",width:120,headerAlign:"center",align:"center"},{prop:"inverseOrder",title:"反算顺序",width:150,headerAlign:"center",align:"center"},{prop:"inverseRadix",title:"反算基数",width:120,headerAlign:"center",align:"center"},{prop:"demandRate",title:"要求利润率(%)",width:120,headerAlign:"center",align:"center"},{prop:"independentCoefficientDown",title:"自主系数下限",width:120,headerAlign:"center",align:"center"},{prop:"independentCoefficientUp",title:"自主系数上限",width:120,headerAlign:"center",align:"center"},{prop:"documentaryMarketCostDown",title:"跟单市场费用下限",width:190,headerAlign:"center",align:"center"},{prop:"documentaryMarketCostUp",title:"跟单市场费用上限",width:190,headerAlign:"center",align:"center"},{prop:"serviceCostUp",title:"手续费上限",width:120,headerAlign:"center",align:"center"},{prop:"exhibitionCostUp",title:"展业费上限",width:120,headerAlign:"center",align:"center"},{prop:"awardUp",title:"价值提奖上限",width:120,headerAlign:"center",align:"center"},{prop:"distributionOrder",title:"分配顺序",width:210,headerAlign:"center",align:"center"},{prop:"compensateRateBusinessType",title:"赔付率业务类别(按规则计算)",width:230,headerAlign:"center",align:"center"}],data:[{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"直接业务",businessSegment:"家用新车",businessTypeNo:"02000001",businessSegmentDetail:"家用客车6座以下含车损",isInverseDiscount:"是",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.7225,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",compensateRateBusinessType:"低I"},{orgCode:"天津分公司(00012)",insuranceType:"机动车综合商业保险(0511)",businessSource:"个人代理",businessSegment:"家用旧车",businessTypeNo:"02000002",businessSegmentDetail:"家用客车6座以下不含车损",isInverseDiscount:"否",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.7225,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"手续费-管理费-绩效",compensateRateBusinessType:"低II"},{orgCode:"上海分公司(00013)",insuranceType:"机动车辆保险(0501)",businessSource:"专业代理",businessSegment:"企业非营业客车",businessTypeNo:"02000003",businessSegmentDetail:"企业客车含车损",isInverseDiscount:"否",isInverseCost:"是",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.723,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",compensateRateBusinessType:"低III"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"普通兼业代理",businessSegment:"企业非营业货车",businessTypeNo:"02000011",businessSegmentDetail:"企业货车含车损",isInverseDiscount:"是",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.7225,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",compensateRateBusinessType:"中I"},{orgCode:"天津分公司(00012)",insuranceType:"机动车综合商业保险(0511)",businessSource:"电话销售-PT",businessSegment:"机关非营业客车",businessTypeNo:"02000012",businessSegmentDetail:"机关客车含车损",isInverseDiscount:"否",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.7225,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"手续费-管理费-绩效",compensateRateBusinessType:"中II"},{orgCode:"上海分公司(00013)",insuranceType:"机动车辆保险(0501)",businessSource:"寿代产-个险",businessSegment:"机关非营业货车",businessTypeNo:"02000013",businessSegmentDetail:"机关货车含车损",isInverseDiscount:"否",isInverseCost:"是",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.723,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",compensateRateBusinessType:"中III"},{orgCode:"北京分公司(00011)",insuranceType:"机动车辆保险(0501)",businessSource:"寿代产-银保",businessSegment:"机关非营业特种车",businessTypeNo:"02000021",businessSegmentDetail:"机关特种车含车损",isInverseDiscount:"是",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.7225,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",compensateRateBusinessType:"高I"},{orgCode:"天津分公司(00012)",insuranceType:"机动车综合商业保险(0511)",businessSource:"银行邮政代理",businessSegment:"营业出租客车",businessTypeNo:"02000022",businessSegmentDetail:"出租客车不含车损",isInverseDiscount:"否",isInverseCost:"否",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.7225,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"手续费-管理费-绩效",compensateRateBusinessType:"高II"},{orgCode:"上海分公司(00013)",insuranceType:"机动车辆保险(0501)",businessSource:"寿代产-收展",businessSegment:"营业出租货车",businessTypeNo:"02000023",businessSegmentDetail:"出租货车含车损",isInverseDiscount:"否",isInverseCost:"是",inverseOrder:"折扣-费用",inverseRadix:70,demandRate:"",independentCoefficientDown:.723,independentCoefficientUp:.9,documentaryMarketCostDown:15,documentaryMarketCostUp:20,serviceCostUp:"",exhibitionCostUp:"",awardUp:"",distributionOrder:"管理费-绩效",compensateRateBusinessType:"高III"}],inputArr:["serviceCostUp","exhibitionCostUp","awardUp"],impDialogVisible:!1}},computed:s()({},Object(r.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{handlePrev:function(){this.$router.push({path:"/admin/individual/declare/config"})},exportData:function(){var e=this;this.$confirm("确定导出数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"导出成功!"})}).catch(function(){})},importData:function(){var e=this;this.impDialogVisible=!1,this.data.forEach(function(t,i){i%2==0?(e.data[i].inverseOrder="折扣-费用",e.data[i].serviceCostUp="15",e.data[i].exhibitionCostUp="17",e.data[i].awardUp="20",e.data[i].distributionOrder="管理费-绩效"):(e.data[i].inverseOrder="费用-折扣",e.data[i].serviceCostUp="16",e.data[i].exhibitionCostUp="18",e.data[i].awardUp="19",e.data[i].distributionOrder="绩效-管理费")}),this.$message({type:"success",message:"导入成功!"})}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"biz-content"},[i("div",{staticClass:"data"},[i("div",{staticClass:"title"},[e._m(0),e._v(" "),i("div",{staticClass:"btn"},[i("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:e.exportData}},[e._v("导出")]),e._v(" "),i("el-button",{attrs:{size:"small",type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("导入")])],1)]),e._v(" "),i("div",{staticClass:"table"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,stripe:"","header-cell-style":e.tableHeader}},e._l(e.columns,function(t){return i("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.title,"min-width":t.width,align:t.align},scopedSlots:e._u([{key:"default",fn:function(n){return["inverseOrder"===t.prop?i("el-select",{attrs:{size:"small"},model:{value:n.row[t.prop],callback:function(i){e.$set(n.row,t.prop,i)},expression:"scope.row[column.prop]"}},[i("el-option",{attrs:{label:"折扣-费用",value:"折扣-费用"}}),e._v(" "),i("el-option",{attrs:{label:"费用-折扣",value:"费用-折扣"}})],1):"distributionOrder"===t.prop?i("el-select",{attrs:{size:"small"},model:{value:n.row[t.prop],callback:function(i){e.$set(n.row,t.prop,i)},expression:"scope.row[column.prop]"}},[i("el-option",{attrs:{label:"管理费-绩效",value:"管理费-绩效"}}),e._v(" "),i("el-option",{attrs:{label:"绩效-管理费",value:"绩效-管理费"}}),e._v(" "),i("el-option",{attrs:{label:"手续费-管理费-绩效",value:"手续费-管理费-绩效"}}),e._v(" "),i("el-option",{attrs:{label:"手续费-绩效-管理费",value:"手续费-绩效-管理费"}}),e._v(" "),i("el-option",{attrs:{label:"管理费-手续费-绩效",value:"管理费-手续费-绩效"}}),e._v(" "),i("el-option",{attrs:{label:"管理费-绩效-手续费",value:"管理费-绩效-手续费"}}),e._v(" "),i("el-option",{attrs:{label:"绩效-管理费-手续费",value:"绩效-管理费-手续费"}}),e._v(" "),i("el-option",{attrs:{label:"绩效-手续费-管理费",value:"绩效-手续费-管理费"}})],1):-1!==e.inputArr.indexOf(t.prop)?i("el-input",{attrs:{size:"small"},model:{value:n.row[t.prop],callback:function(i){e.$set(n.row,t.prop,i)},expression:"scope.row[column.prop]"}}):i("span",[e._v(e._s(n.row[t.prop]))])]}}])})}))],1)]),e._v(" "),i("div",{staticClass:"option"},[i("back-button",{on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("提交审核")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("保存")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("导出模板")])],1),e._v(" "),i("el-dialog",{attrs:{title:"导入数据",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[i("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:e.importData}},[e._v("导入")]),e._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"desc"},[t("div",{staticClass:"title"},[this._v("选择类型")])])}]};var p=i("VU/8")(o,a,!1,function(e){i("Q3lF")},"data-v-5546ed28",null);t.default=p.exports}});