webpackJsonp([75],{"0hV/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),l=a.n(o),i=a("NYxO"),r=a("Z4dx"),n={name:"ConfigLifeTable",components:{CommonTable:function(){return a.e(111).then(a.bind(null,"Lk4z"))},BackButton:function(){return a.e(102).then(a.bind(null,"uOVF"))},BizSectorList:function(){return a.e(103).then(a.bind(null,"jpoa"))},BaseTable:function(){return a.e(101).then(a.bind(null,"ss0d"))}},mounted:function(){this.$store.commit("SHOW_ROLLBACK")},beforeRouteLeave:function(e,t,a){this.$store.commit("HIDE_ROLLBACK"),a()},created:function(){var e=this;Object(r.d)(this.param).then(function(t){var a=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",a),e.lifeData=t.data,e.businessSmallType=e.lifeData[0].cols,e.data=e.lifeData[0].detailData})},data:function(){return{businessSmallType:[],columns:[{prop:"intelligentRecommendationResult",firstTitle:"智能推荐结果",isShow:!0,secondContents:[{prop:"comAuto",secondTitle:"商业险自主折扣系数",width:120,align:"center"},{prop:"market",secondTitle:"车险手续费率",width:130,align:"center"}]},{prop:"parameterConfig",firstTitle:"参数配置",isShow:!0,secondContents:[{prop:"cbsubsidymode",secondTitle:"交商补贴模式",width:190,align:"center"},{prop:"expbicost",secondTitle:"目标商业险保单成本率",width:210,align:"center"},{prop:"exptocost",secondTitle:"目标保单成本率",width:150,align:"center"},{prop:"psmode",secondTitle:"定价策略模式",width:170,align:"center"},{prop:"exppay",secondTitle:"目标赔付率",width:170,align:"center"},{prop:"autorate",secondTitle:"自主折扣系数",width:170,align:"center"},{prop:"autoratemin",secondTitle:"自主折扣系数下限",width:190,align:"center"},{prop:"marketrate",secondTitle:"手续费率",width:170,align:"center"},{prop:"marketratemax",secondTitle:"手续费率上限",width:190,align:"center"}]},{prop:"carInsurance",firstTitle:"经营结果目标",isShow:!0,secondContents:[{prop:"fucostRate",secondTitle:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"fupayRate",secondTitle:"目标保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",secondTitle:"目标保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",secondTitle:"目标手续费率(%)",width:120,align:"center"},{prop:"fuclaimRate",secondTitle:"目标理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",secondTitle:"目标其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",secondTitle:"目标折扣率(%)",width:120,align:"center"}]},{prop:"futureCarInsurance",firstTitle:"经营结果预测",isShow:!0,secondContents:[{prop:"fucostRate",secondTitle:"预测车险合计保单成本率(%)",width:120,align:"center"},{prop:"fupayRate",secondTitle:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",secondTitle:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",secondTitle:"预测手续费率(%)",width:120,align:"center"},{prop:"fuclaimRate",secondTitle:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",secondTitle:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",secondTitle:"预测折扣率(%)",width:120,align:"center"}]}],data:[],impDialogVisible:!1,editFlag:!1,editDialogVisible:!1,selectArr:["isDisCount","isFee"],inputArr:["comAutoUp","comMarketUp","forceMarket","expComPer","expForcePer","expPremium","expPremiumRate","expbicost","exptocost","exppay"],bizSmallTypeColumn:[{prop:"lastYearComInsCount",label:"商业险上年出险次数",width:220,align:"center"},{prop:"lastYearComInsAmount",label:"商业险上年出险金额",width:250,align:"center"},{prop:"age",label:"年龄",width:120,align:"center"},{prop:"comAuto",label:"商业险自主折扣系数",width:120,align:"center"},{prop:"marketRate",label:"车险手续费率",width:130,align:"center"}],bizSmallTypeData:[{lastYearComInsAmount:"5000-10000",lastYearComInsCount:"3次及以上",age:"20-30",comAuto:.49,marketRate:"39%"}],paramConfigColumn:[{prop:"cbsubsidymode",label:"交商补贴模式",width:190,align:"center"},{prop:"expbicost",label:"目标商业险保单成本率",width:210,align:"center"},{prop:"exptocost",label:"目标保单成本率",width:150,align:"center"},{prop:"psmode",label:"定价策略模式",width:170,align:"center"},{prop:"exppay",label:"目标赔付率",width:170,align:"center"},{prop:"autorate",label:"自主折扣系数",width:170,align:"center"},{prop:"autoratemin",label:"自主折扣系数下限",width:190,align:"center"},{prop:"marketrate",label:"手续费率",width:170,align:"center"},{prop:"marketratemax",label:"手续费率上限",width:190,align:"center"}],paramConfigData:[{cbsubsidymode:"交商整体补贴",expbicost:"105.03",exptocost:"160.32",psmode:"价格优先",exppay:"43.73",autorate:"0.83",autoratemin:"0.83",marketrate:"26.75",marketratemax:"26.75"}],actualPremiumPercentColumn:[{prop:"comAutoAvg",label:"商业险自主系数平均值",width:110,align:"center"},{prop:"comMarketRateAvg",label:"商业险市场费用率平均值",width:120,align:"center"},{prop:"comFullRate",label:"商业险满期赔付率(含IBNR)",width:120,align:"center"},{prop:"comExpCostRate",label:"商业险预期经营成本率(%)",width:120,align:"center"},{prop:"forceFinalRate",label:"交强险终极赔付率(%)",width:120,align:"center"},{prop:"forceFullRate",label:"交强险满期赔付率(%)(含IBNR)",width:140,align:"center"},{prop:"forceExpCostRate",label:"交强险预期经营成本率(%)",width:120,align:"center"},{prop:"actualComPercent",label:"实际商业险保费占比",width:110,align:"center"},{prop:"actualForcePercent",label:"实际交强险保费占比",width:110,align:"center"},{prop:"actualPremiumPercent",label:"实际该类业务保费占比",width:110,align:"center"}],actualPremiumPercentData:[{comAutoAvg:.7,comMarketRateAvg:36,comMarketRateUpPercent:"19.6",comMarketRateDownPercent:"2.1",comFullRate:66.83,comExpCostRate:97.9,forceFinalRate:121.83,forceFullRate:122.1,forceExpCostRate:57.9,actualComPercent:80,actualForcePercent:20,actualPremiumPercent:12}],targetColumn:[{prop:"costRate",label:"目标车险合计保单成本率(%)",width:120,align:"center"},{prop:"payRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"feeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"serverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"claimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"otherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"discoutRate",label:"目标折扣率(%)",width:120,align:"center"}],futureColumn:[{prop:"fucostRate",label:"预测车险合计保单成本率(%)",width:120,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}],targetData:[{costRate:"96",payRate:"103.45",feeRate:"11",serverRate:"9",claimRate:"56",otherRate:"4",discoutRate:"82"}],futureData:[{fucostRate:"96",fupayRate:"103.45",fufeeRate:"11",fuserverRate:"9",fuclaimRate:"56",fuotherRate:"4",fudiscoutRate:"82"}],selectDialogArr:["isInverseDiscount","isInverseCost"],inputDialogArr:["comAutoUp","comMarketRateUp","forceMarketRate","expComPercent","expForcePercent","expPremiumScale","expPremiumPercent","expbicost","exptocost","exppay"],columnShowList:["智能推荐结果","参数配置","经营结果目标","经营结果预测"],autoDownEdit2:!1,marketEdit2:!1,chartDialogVisible:!1,chartQuery:{lastYearCount:[],lastYearAmount:[],age:[]},itemList:[{code:"lastYearCount",name:"商业险上年出险次数",detail:[{code:"未投保商业险",name:"未投保商业险"},{code:"0次",name:"0次"},{code:"1次",name:"1次"},{code:"2次",name:"2次"},{code:"3次及以上",name:"3次及以上"}]},{code:"lastYearAmount",name:"商业险上年出险金额",detail:[{code:"0-1000",name:"0-1000"},{code:"1000-2000",name:"1000-2000"},{code:"2000-5000",name:"2000-5000"},{code:"5000-10000",name:"5000-10000"},{code:"10000+",name:"10000+"}]},{code:"age",name:"年龄",detail:[{code:"20以下",name:"20以下"},{code:"20-30",name:"20-30"},{code:"30-45",name:"30-45"},{code:"45-60",name:"45-60"},{code:"60以上",name:"60以上"}]}],chartDataVisible:!1,chartVisible:!1,chartCols:[{prop:"groupNo",width:60,label:"分组编号"},{prop:"groupContent",width:120,label:"分组描述"}],chartData:[{groupNo:"分组1",groupContent:"0次,0-1000,20-30"},{groupNo:"分组2",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组3",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组4",groupContent:"2次,2000-5000,20以下"},{groupNo:"分组5",groupContent:"3次及以上,5000-10000,20-30"},{groupNo:"分组6",groupContent:"3次及以上,5000-10000,20-30"}],lifeData:[]}},computed:l()({autoDownEdit:function(){for(var e=[],t=0;t<this.data.length;t++)e.push(!1);return e},marketEdit:function(){for(var e=[],t=0;t<this.data.length;t++)e.push(!1);return e}},Object(i.d)({sectors:function(e){return e.individual.sectors},lifeTable:function(e){return e.individual.lifeTable},tableHeader:function(e){return e.app.tableHeader}})),beforeRouteEnter:function(e,t,a){a(function(e){e.oldUrl=t.path})},methods:{handlePrev:function(){"/admin/individual/declare/supply"===this.oldUrl?this.$router.push({path:"/admin/individual/declare/recommend"}):this.$router.push({path:this.oldUrl})},exportData:function(){var e=this;this.$confirm("确定导出数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"导出成功!"})}).catch(function(){})},importData:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"})},supply:function(){this.$router.push({path:"/admin/individual/declare/supply"})},sectorClick:function(e){var t=this.sectors.findIndex(function(t){return t.id===e});this.businessSmallType=this.lifeData[t].cols,this.data=this.lifeData[t].detailData},toggleColumn:function(e,t){this.columns.forEach(function(a){e.includes(a.firstTitle)&&(a.isShow=t)})},toggleColumnShow:function(e){var t=["智能推荐结果","参数配置","经营结果目标","经营结果预测"],a=[],o=[];4===e.length?a=t:0===e.length?o=t:t.forEach(function(t){e.includes(t)?a.push(t):o.push(t)}),this.toggleColumn(a,!0),this.toggleColumn(o,!1)},disCountChange:function(e,t){this.autoDownEdit[t]="是"===e},costChange:function(e,t){this.marketEdit[t]="是"===e},disCountChange2:function(e){this.autoDownEdit2="是"===e},costChange2:function(e){this.marketEdit2="是"===e},drawLine:function(e,t){var a=this.$echarts.init(document.getElementById(e),"light");a.clear(),a.setOption(t)},showChartList:function(){var e=this,t=["分组1","分组2","分组3","分组4","分组5","分组6"];this.$nextTick(function(){var a={title:{text:"核保定价-经营成本率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{itemWidth:15,itemHeight:8,itemGap:8,data:["预期经营成本率","预期市场费用率","非市场费用率","优惠比率"],top:50},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:120,interval:20,axisLabel:{formatter:"{value}"}}],series:[{name:"预期经营成本率",type:"bar",stack:"合计比率",barWidth:30,data:[40.56,19.56,19.65,10.17,19.9,40.01],itemStyle:{normal:{color:"#29A1DC"}}},{name:"预期市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[26.1,27.3,16.5,15.4,25.6,27.2],itemStyle:{normal:{color:"#F49C1B"}}},{name:"非市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[20.1,19.9,21.2,18.9,19.7,21.6],itemStyle:{normal:{color:"#F0466E"}}},{name:"优惠比率",type:"bar",stack:"合计比率",barWidth:30,data:[11.23,12.32,10.95,10.88,10.97,10.96],itemStyle:{normal:{color:"#A4B2B1"}}}]};e.drawLine("myChart1",a);var o={title:{text:"核保定价-预期赔付率对比分析 ",top:10,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["预期商业险","实际商业险","预期交强险","实际交强险"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:75,interval:15,axisLabel:{formatter:"{value} %"}},{type:"value",min:110,max:130,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期商业险",type:"line",yAxisIndex:0,data:[39.5,43.1,48.4,53.5,65.2,73.3],itemStyle:{normal:{color:"#F0466E"}}},{name:"实际商业险",type:"line",yAxisIndex:0,data:[34.9,42.4,44.1,50.3,60.9,62.8],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期交强险",type:"line",yAxisIndex:1,data:[118.83,121.79,122.76,119.81,121.78,119.79],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际交强险",type:"line",yAxisIndex:1,data:[119.13,122.09,123.06,118.91,120.61,119.57],itemStyle:{normal:{color:"#29A1DC"}}}]};e.drawLine("myChart2",o);var l={title:{text:"核保定价-保费收入对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,itemWidth:15,itemHeight:8,itemGap:8,data:["预期年保费收入","实际年保费收入","预期年保费收入","实际年保费收入"]},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:1500,max:5e3,interval:500,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:5,max:25,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期年保费收入",type:"bar",data:[4371.3,2914.2,2428.5,2586.6,3161.5,4538.2],itemStyle:{normal:{color:"#29A1DC"}}},{name:"实际年保费收入",type:"bar",data:[4383.2,2916.4,2427.9,2588.7,3162.3,4537.9],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期年保费收入",type:"line",yAxisIndex:1,data:[21.86,14.57,12.14,12.93,15.81,22.69],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际年保费收入",type:"line",yAxisIndex:1,data:[21.14,14.93,12.86,12.57,16.31,22.19],itemStyle:{normal:{color:"red"}}}]};e.drawLine("myChart3",l);var i={title:{text:"核保定价-市场费用率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["推荐市场费用率","商业险市场费用率均值","历史保单市场费用率"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:40,interval:2,axisLabel:{formatter:"{value} %"}}],series:[{name:"推荐市场费用率",type:"line",data:[38.5,39.1,36.4,39.5,39.2,36.3],markLine:{data:[[{name:"行业自律线:21%",coord:[0,21]},{coord:[5,21]}],[{name:"阈值线:35%",coord:[0,35]},{coord:[5,35]}]]},itemStyle:{normal:{color:"#F49C1B"}}},{name:"商业险市场费用率均值",type:"line",data:[35.9,36.4,37.1,36.3,34.8,36.5],itemStyle:{normal:{color:"#29A1DC"}}},{name:"历史保单市场费用率",type:"line",data:[37.9,38.9,35.8,39.7,38.6,36.7],itemStyle:{normal:{color:"#A4B2B1"}}}]};e.drawLine("myChart4",i)})},chartDataQuery:function(){this.chartDialogVisible=!0,this.chartDataVisible=!0,this.chartVisible=!0,this.showChartList()}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("el-checkbox-group",{on:{change:e.toggleColumnShow},model:{value:e.columnShowList,callback:function(t){e.columnShowList=t},expression:"columnShowList"}},[a("el-checkbox",{attrs:{label:"智能推荐结果"}}),e._v(" "),a("el-checkbox",{attrs:{label:"参数配置"}}),e._v(" "),a("el-checkbox",{attrs:{label:"经营结果目标"}}),e._v(" "),a("el-checkbox",{attrs:{label:"经营结果预测"}})],1),e._v(" "),a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){e.editFlag=!0}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.chartDataQuery}},[e._v("图表")])],1)],1)]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,stripe:"","header-cell-style":e.tableHeader}},[a("el-table-column",{attrs:{"header-align":"center",fixed:"",label:"",align:"center","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.editDialogVisible=!0}}},[e._v("编辑")])]}}])}),e._v(" "),e._l(e.businessSmallType,function(e){return a("el-table-column",{key:e.prop,attrs:{fixed:"","header-align":"center",align:e.align?e.align:"center","min-width":e.width,label:e.label,prop:e.prop}})}),e._v(" "),e._l(e.columns,function(t){return t.isShow?a("el-table-column",{key:t.prop,attrs:{"header-align":"center",label:t.firstTitle}},e._l(t.secondContents,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",label:t.secondTitle,align:t.align,"min-width":t.width,prop:t.prop},scopedSlots:e._u([{key:"default",fn:function(o){return[e.editFlag&&"isDisCount"===t.prop?a("el-select",{attrs:{size:"small"},on:{change:function(a){e.disCountChange(o.row[t.prop],o.$index)}},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):e.editFlag&&"isFee"===t.prop?a("el-select",{attrs:{size:"small"},on:{change:function(a){e.costChange(o.row[t.prop],o.$index)}},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):e.autoDownEdit[o.$index]&&"comAutoDown"===t.prop?a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}}):e.marketEdit[o.$index]&&"comMarketDown"===t.prop?a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}}):("价格优先"!==o.row.psmode||"autorate"!==t.prop&&"marketratemax"!==t.prop)&&("费用优先"!==o.row.psmode||"marketrate"!==t.prop&&"autoratemin"!==t.prop)?e.editFlag&&-1!==e.inputArr.indexOf(t.prop)?a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}}):e.editFlag&&"cbsubsidymode"===t.prop?a("el-select",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"交商整体补贴",value:"交商整体补贴"}}),e._v(" "),a("el-option",{attrs:{label:"交商单元补贴",value:"交商单元补贴"}})],1):e.editFlag&&"psmode"===t.prop?a("el-select",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),e._v(" "),a("el-option",{attrs:{label:"费用优先",value:"费用优先"}})],1):a("span",[e._v(e._s(o.row[t.prop]))]):a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[secondContent.prop]"}})]}}])})})):e._e()})],2)],1)]),e._v(" "),a("div",{staticClass:"option"},[a("back-button",{on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.supply}},[e._v("下一步")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportData}},[e._v("导出")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(t){e.editFlag=!1}}},[e._v("保存")])],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.editDialogVisible,width:"80%"},on:{"update:visible":function(t){e.editDialogVisible=t}}},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("业务单元")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.bizSmallTypeData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.bizSmallTypeColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("参数配置")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.paramConfigData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.paramConfigColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align},scopedSlots:e._u([{key:"default",fn:function(o){return["isInverseDiscount"===t.prop?a("el-select",{attrs:{size:"small"},on:{change:e.disCountChange2},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):"isInverseCost"===t.prop?a("el-select",{attrs:{size:"small"},on:{change:e.costChange2},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):e.autoDownEdit2&&"comAutoDown"===t.prop?a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}}):e.marketEdit2&&"comMarketRateDown"===t.prop?a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}}):("价格优先"!==o.row.psmode||"autorate"!==t.prop&&"marketratemax"!==t.prop)&&("费用优先"!==o.row.psmode||"marketrate"!==t.prop&&"autoratemin"!==t.prop)?-1!==e.inputDialogArr.indexOf(t.prop)?a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}}):"cbsubsidymode"===t.prop?a("el-select",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"交商整体补贴",value:"交商整体补贴"}}),e._v(" "),a("el-option",{attrs:{label:"交商单元补贴",value:"交商单元补贴"}})],1):"psmode"===t.prop?a("el-select",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),e._v(" "),a("el-option",{attrs:{label:"费用优先",value:"费用优先"}})],1):a("span",[e._v(e._s(o.row[t.prop]))]):a("el-input",{attrs:{size:"small"},model:{value:o.row[t.prop],callback:function(a){e.$set(o.row,t.prop,a)},expression:"scope.row[column.prop]"}})]}}])})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("经营结果目标")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.targetData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.targetColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[e._v("经营结果预测")])]),e._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.futureData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.futureColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align}})}))],1)]),e._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"}},[e._v("计算")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("下一行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.editDialogVisible=!1}}},[e._v("关闭")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"导入数据",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.importData}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"图表展示",fullscreen:"",visible:e.chartDialogVisible},on:{"update:visible":function(t){e.chartDialogVisible=t}}},[a("el-container",[a("el-header",[a("el-form",{attrs:{inline:!0,size:"small",model:e.chartQuery}},[e._l(e.itemList,function(t){return a("el-form-item",{key:t.code,attrs:{label:t.name,prop:t.code}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium",multiple:""},model:{value:e.chartQuery[t.code],callback:function(a){e.$set(e.chartQuery,t.code,a)},expression:"chartQuery[item.code]"}},e._l(t.detail,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1)}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.chartDataQuery}},[e._v("查看")])],1)],2)],1),e._v(" "),a("el-container",[a("el-aside",{directives:[{name:"show",rawName:"v-show",value:e.chartDataVisible,expression:"chartDataVisible"}],attrs:{width:"20%"}},[a("base-table",{attrs:{width:e.chartCols.width,columns:e.chartCols,data:e.chartData}})],1),e._v(" "),a("el-main",{directives:[{name:"show",rawName:"v-show",value:e.chartVisible,expression:"chartVisible"}],staticStyle:{"margin-left":"10px",background:"#F6F5F5"},attrs:{width:"80%"}},[a("span",{on:{click:function(t){e.chartDataVisible=!e.chartDataVisible}}},[a("i",{staticClass:"iconfont icon-showleft"})]),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart1"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart2"}})])],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart3"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart4"}})])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(n,s,!1,function(e){a("7b+G")},"data-v-0fd7c3fa",null);t.default=p.exports},"7b+G":function(e,t){}});