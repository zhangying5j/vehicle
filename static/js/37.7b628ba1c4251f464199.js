webpackJsonp([37],{"0hV/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=a.n(i),l=a("NYxO"),r=a("Z4dx"),n={name:"ConfigLifeTable",components:{CommonTable:function(){return a.e(111).then(a.bind(null,"Lk4z"))},BackButton:function(){return a.e(102).then(a.bind(null,"uOVF"))},BizSectorList:function(){return a.e(103).then(a.bind(null,"jpoa"))},BaseTable:function(){return a.e(101).then(a.bind(null,"ss0d"))}},mounted:function(){this.$store.commit("SHOW_ROLLBACK")},beforeRouteLeave:function(t,e,a){this.$store.commit("HIDE_ROLLBACK"),a()},created:function(){var t=this;Object(r.d)(this.param).then(function(e){var a=e.data.map(function(t){return{id:t.id,name:t.name}});t.$store.commit("SET_SECTORS",a),t.lifeData=e.data,t.businessSmallType=t.lifeData[1].cols,t.data=t.lifeData[1].detailData})},data:function(){return{businessSmallType:[],columns:[{prop:"intelligentRecommendationResult",firstTitle:"智能推荐结果",isShow:!0,secondContents:[{prop:"comAuto",secondTitle:"商业险自主折扣系数",width:120,align:"center"},{prop:"market",secondTitle:"车险手续费率",width:130,align:"center"}]},{prop:"parameterConfig",firstTitle:"参数配置",isShow:!0,secondContents:[{prop:"isDisCount",secondTitle:"是否反算折扣",width:120,align:"center"},{prop:"isFee",secondTitle:"是否反算费用",width:120,align:"center"},{prop:"targetCost",secondTitle:"配置目标成本(%)",width:140,align:"center"},{prop:"noMarket",secondTitle:"配置非市场费用率(%)",width:170,align:"center"},{prop:"comAutoUp",secondTitle:"商业险自主折扣系数上限",width:200,align:"center"},{prop:"comAutoDown",secondTitle:"商业险自主折扣系数下限",width:200,align:"center"},{prop:"comMarketUp",secondTitle:"商业险手续费率上限(%)",width:220,align:"center"},{prop:"comMarketDown",secondTitle:"商业险手续费率下限(%)",width:220,align:"center"},{prop:"forceMarket",secondTitle:"交强险市场费用率配置值",width:220,align:"center"},{prop:"expComPer",secondTitle:"预期商业险保费占比",width:210,align:"center"},{prop:"expForcePer",secondTitle:"预期交强险保费占比",width:210,align:"center"},{prop:"expPremium",secondTitle:"预期该类业务保费规模(万元)",width:230,align:"center"},{prop:"expPremiumRate",secondTitle:"预期该类业务保费占比",width:210,align:"center"}]},{prop:"actualBusinessPremiumPercent",firstTitle:"实际该类业务保费占比",isShow:!0,secondContents:[{prop:"comAutoAvg",secondTitle:"商业险自主系数平均值",width:210,align:"center"},{prop:"comMarketAvg",secondTitle:"商业险市场费用率平均值",width:220,align:"center"},{prop:"comFull",secondTitle:"商业险满期赔付率(含IBNR)",width:220,align:"center"},{prop:"comFinal",secondTitle:"商业险终极赔付率",width:220,align:"center"},{prop:"comOperation",secondTitle:"商业险预期经营成本率(%)",width:220,align:"center"},{prop:"forceFinal",secondTitle:"交强险终极赔付率(%)",width:220,align:"center"},{prop:"forceFull",secondTitle:"交强险满期赔付率(%)(含IBNR)",width:240,align:"center"},{prop:"forceOperation",secondTitle:"交强险预期经营成本率(%)",width:220,align:"center"},{prop:"actualComPer",secondTitle:"实际商业险保费占比",width:210,align:"center"},{prop:"actualForcePer",secondTitle:"实际交强险保费占比",width:210,align:"center"},{prop:"actualPremiumRate",secondTitle:"实际该类业务保费占比",width:210,align:"center"}]},{prop:"futureCarInsuranceRunForecast",firstTitle:"车险未来经营情况预测",isShow:!0,secondContents:[{prop:"totalFinal",secondTitle:"车险合计终极赔付率(%)",width:220,align:"center"},{prop:"totalFull",secondTitle:"车险合计满期赔付率(%)(含IBNR)",width:240,align:"center"},{prop:"totalMarket",secondTitle:"车险合计市场费用率(%)",width:220,align:"center"},{prop:"totalOperation",secondTitle:"车险合计预期经营成本率(%)",width:220,align:"center"}]}],data:[],impDialogVisible:!1,editFlag:!1,editDialogVisible:!1,selectArr:["isDisCount","isFee"],inputArr:["comAutoUp","comMarketUp","forceMarket","expComPer","expForcePer","expPremium","expPremiumRate"],bizSmallTypeColumn:[{prop:"lastYearComInsCount",label:"商业险上年出险次数",width:220,align:"center"},{prop:"lastYearComInsAmount",label:"商业险上年出险金额",width:250,align:"center"},{prop:"age",label:"年龄",width:120,align:"center"},{prop:"comAuto",label:"商业险自主折扣系数",width:120,align:"center"},{prop:"marketRate",label:"车险手续费率",width:130,align:"center"}],bizSmallTypeData:[{lastYearComInsAmount:"5000-10000",lastYearComInsCount:"3次及以上",age:"20-30",comAuto:.49,marketRate:"39%"}],paramConfigColumn:[{prop:"isInverseDiscount",label:"是否反算折扣",width:120,align:"center"},{prop:"isInverseCost",label:"是否反算费用",width:120,align:"center"},{prop:"targetCost",label:"配置目标成本(%)",width:140,align:"center"},{prop:"nonMarketRate",label:"配置非市场费用率(%)",width:170,align:"center"},{prop:"comAutoUp",label:"商业险自主折扣系数上限",width:100,align:"center"},{prop:"comAutoDown",label:"商业险自主折扣系数下限",width:100,align:"center"},{prop:"comMarketRateUp",label:"商业险手续费率上限(%)",width:120,align:"center"},{prop:"comMarketRateDown",label:"商业险手续费率下限(%)",width:120,align:"center"},{prop:"forceMarketRate",label:"交强险市场费用率配置值",width:120,align:"center"},{prop:"expComPercent",label:"预期商业险保费占比",width:110,align:"center"},{prop:"expForcePercent",label:"预期交强险保费占比",width:110,align:"center"},{prop:"expPremiumScale",label:"预期该类业务保费规模(万元)",width:130,align:"center"},{prop:"expPremiumPercent",label:"预期该类业务保费占比",width:110,align:"center"}],paramConfigData:[{isInverseDiscount:"否",isInverseCost:"否",targetCost:100,nonMarketRate:20,comAutoUp:1.3225,comAutoDown:1.3225,comMarketRateUp:"30",comMarketRateDown:"15",forceMarketRate:"0.4",expComPercent:75,expForcePercent:25,expPremiumScale:800,expPremiumPercent:10}],actualPremiumPercentColumn:[{prop:"comAutoAvg",label:"商业险自主系数平均值",width:110,align:"center"},{prop:"comMarketRateAvg",label:"商业险市场费用率平均值",width:120,align:"center"},{prop:"comFullRate",label:"商业险满期赔付率(含IBNR)",width:120,align:"center"},{prop:"comExpCostRate",label:"商业险预期经营成本率(%)",width:120,align:"center"},{prop:"forceFinalRate",label:"交强险终极赔付率(%)",width:120,align:"center"},{prop:"forceFullRate",label:"交强险满期赔付率(%)(含IBNR)",width:140,align:"center"},{prop:"forceExpCostRate",label:"交强险预期经营成本率(%)",width:120,align:"center"},{prop:"actualComPercent",label:"实际商业险保费占比",width:110,align:"center"},{prop:"actualForcePercent",label:"实际交强险保费占比",width:110,align:"center"},{prop:"actualPremiumPercent",label:"实际该类业务保费占比",width:110,align:"center"}],actualPremiumPercentData:[{comAutoAvg:.7,comMarketRateAvg:36,comMarketRateUpPercent:"19.6",comMarketRateDownPercent:"2.1",comFullRate:66.83,comExpCostRate:97.9,forceFinalRate:121.83,forceFullRate:122.1,forceExpCostRate:57.9,actualComPercent:80,actualForcePercent:20,actualPremiumPercent:12}],futureColumn:[{prop:"totalFinalRate",label:"车险合计终极赔付率(%)",width:120,align:"center"},{prop:"totalFullRate",label:"车险合计满期赔付率(%)(含IBNR)",width:140,align:"center"},{prop:"totalMarketRate",label:"车险合计市场费用率(%)",width:120,align:"center"},{prop:"totalExpCostRate",label:"车险合计预期经营成本率(%)",width:120,align:"center"}],futureData:[{totalFinalRate:34.766,totalFullRate:77.844,totalMarketRate:"35.6",totalExpCostRate:"88.9"}],selectDialogArr:["isInverseDiscount","isInverseCost"],inputDialogArr:["comAutoUp","comMarketRateUp","forceMarketRate","expComPercent","expForcePercent","expPremiumScale","expPremiumPercent"],columnShowList:["智能推荐结果","参数配置","实际该类业务保费占比","车险未来经营情况预测"],autoDownEdit2:!1,marketEdit2:!1,chartDialogVisible:!1,chartQuery:{lastYearCount:[],lastYearAmount:[],age:[]},itemList:[{code:"lastYearCount",name:"商业险上年出险次数",detail:[{code:"未投保商业险",name:"未投保商业险"},{code:"0次",name:"0次"},{code:"1次",name:"1次"},{code:"2次",name:"2次"},{code:"3次及以上",name:"3次及以上"}]},{code:"lastYearAmount",name:"商业险上年出险金额",detail:[{code:"0-1000",name:"0-1000"},{code:"1000-2000",name:"1000-2000"},{code:"2000-5000",name:"2000-5000"},{code:"5000-10000",name:"5000-10000"},{code:"10000+",name:"10000+"}]},{code:"age",name:"年龄",detail:[{code:"20以下",name:"20以下"},{code:"20-30",name:"20-30"},{code:"30-45",name:"30-45"},{code:"45-60",name:"45-60"},{code:"60以上",name:"60以上"}]}],chartDataVisible:!1,chartVisible:!1,chartCols:[{prop:"groupNo",width:60,label:"分组编号"},{prop:"groupContent",width:120,label:"分组描述"}],chartData:[{groupNo:"分组1",groupContent:"0次,0-1000,20-30"},{groupNo:"分组2",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组3",groupContent:"1次,1000-2000,31-45"},{groupNo:"分组4",groupContent:"2次,2000-5000,20以下"},{groupNo:"分组5",groupContent:"3次及以上,5000-10000,20-30"},{groupNo:"分组6",groupContent:"3次及以上,5000-10000,20-30"}],lifeData:[]}},computed:o()({autoDownEdit:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(!1);return t},marketEdit:function(){for(var t=[],e=0;e<this.data.length;e++)t.push(!1);return t}},Object(l.d)({sectors:function(t){return t.individual.sectors},lifeTable:function(t){return t.individual.lifeTable},tableHeader:function(t){return t.app.tableHeader}})),beforeRouteEnter:function(t,e,a){a(function(t){t.oldUrl=e.path})},methods:{handlePrev:function(){"/admin/individual/declare/supply"===this.oldUrl?this.$router.push({path:"/admin/individual/declare/recommend"}):this.$router.push({path:this.oldUrl})},exportData:function(){var t=this;this.$confirm("确定导出数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"导出成功!"})}).catch(function(){})},importData:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"导入成功!"})},supply:function(){this.$router.push({path:"/admin/individual/declare/supply"})},sectorClick:function(t){var e=this.sectors.findIndex(function(e){return e.id===t});this.businessSmallType=this.lifeData[e].cols,this.data=this.lifeData[e].detailData},toggleColumn:function(t,e){this.columns.forEach(function(a){t.includes(a.firstTitle)&&(a.isShow=e)})},toggleColumnShow:function(t){var e=["智能推荐结果","参数配置","实际该类业务保费占比","车险未来经营情况预测"],a=[],i=[];4===t.length?a=e:0===t.length?i=e:e.forEach(function(e){t.includes(e)?a.push(e):i.push(e)}),this.toggleColumn(a,!0),this.toggleColumn(i,!1)},disCountChange:function(t,e){this.autoDownEdit[e]="是"===t},costChange:function(t,e){this.marketEdit[e]="是"===t},disCountChange2:function(t){this.autoDownEdit2="是"===t},costChange2:function(t){this.marketEdit2="是"===t},drawLine:function(t,e){var a=this.$echarts.init(document.getElementById(t),"light");a.clear(),a.setOption(e)},showChartList:function(){var t=this,e=["分组1","分组2","分组3","分组4","分组5","分组6"];this.$nextTick(function(){var a={title:{text:"核保定价-经营成本率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{itemWidth:15,itemHeight:8,itemGap:8,data:["预期经营成本率","预期市场费用率","非市场费用率","优惠比率"],top:50},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:0,max:120,interval:20,axisLabel:{formatter:"{value}"}}],series:[{name:"预期经营成本率",type:"bar",stack:"合计比率",barWidth:30,data:[40.56,19.56,19.65,10.17,19.9,40.01],itemStyle:{normal:{color:"#29A1DC"}}},{name:"预期市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[26.1,27.3,16.5,15.4,25.6,27.2],itemStyle:{normal:{color:"#F49C1B"}}},{name:"非市场费用率",type:"bar",stack:"合计比率",barWidth:30,data:[20.1,19.9,21.2,18.9,19.7,21.6],itemStyle:{normal:{color:"#F0466E"}}},{name:"优惠比率",type:"bar",stack:"合计比率",barWidth:30,data:[11.23,12.32,10.95,10.88,10.97,10.96],itemStyle:{normal:{color:"#A4B2B1"}}}]};t.drawLine("myChart1",a);var i={title:{text:"核保定价-预期赔付率对比分析 ",top:10,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["预期商业险","实际商业险","预期交强险","实际交强险"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:75,interval:15,axisLabel:{formatter:"{value} %"}},{type:"value",min:110,max:130,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期商业险",type:"line",yAxisIndex:0,data:[39.5,43.1,48.4,53.5,65.2,73.3],itemStyle:{normal:{color:"#F0466E"}}},{name:"实际商业险",type:"line",yAxisIndex:0,data:[34.9,42.4,44.1,50.3,60.9,62.8],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期交强险",type:"line",yAxisIndex:1,data:[118.83,121.79,122.76,119.81,121.78,119.79],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际交强险",type:"line",yAxisIndex:1,data:[119.13,122.09,123.06,118.91,120.61,119.57],itemStyle:{normal:{color:"#29A1DC"}}}]};t.drawLine("myChart2",i);var o={title:{text:"核保定价-保费收入对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,itemWidth:15,itemHeight:8,itemGap:8,data:["预期年保费收入","实际年保费收入","预期年保费收入","实际年保费收入"]},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:1500,max:5e3,interval:500,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:5,max:25,interval:5,axisLabel:{formatter:"{value} %"}}],series:[{name:"预期年保费收入",type:"bar",data:[4371.3,2914.2,2428.5,2586.6,3161.5,4538.2],itemStyle:{normal:{color:"#29A1DC"}}},{name:"实际年保费收入",type:"bar",data:[4383.2,2916.4,2427.9,2588.7,3162.3,4537.9],itemStyle:{normal:{color:"#F49C1B"}}},{name:"预期年保费收入",type:"line",yAxisIndex:1,data:[21.86,14.57,12.14,12.93,15.81,22.69],itemStyle:{normal:{color:"#A4B2B1"}}},{name:"实际年保费收入",type:"line",yAxisIndex:1,data:[21.14,14.93,12.86,12.57,16.31,22.19],itemStyle:{normal:{color:"red"}}}]};t.drawLine("myChart3",o);var l={title:{text:"核保定价-市场费用率对比分析",left:"center",top:10},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{top:"25%",bottom:"10%",left:"5%",right:"8%",containLabel:!0},legend:{top:50,data:["推荐市场费用率","商业险市场费用率均值","历史保单市场费用率"],itemWidth:15,itemHeight:8,itemGap:8},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",min:30,max:40,interval:2,axisLabel:{formatter:"{value} %"}}],series:[{name:"推荐市场费用率",type:"line",data:[38.5,39.1,36.4,39.5,39.2,36.3],markLine:{data:[[{name:"行业自律线:21%",coord:[0,21]},{coord:[5,21]}],[{name:"阈值线:35%",coord:[0,35]},{coord:[5,35]}]]},itemStyle:{normal:{color:"#F49C1B"}}},{name:"商业险市场费用率均值",type:"line",data:[35.9,36.4,37.1,36.3,34.8,36.5],itemStyle:{normal:{color:"#29A1DC"}}},{name:"历史保单市场费用率",type:"line",data:[37.9,38.9,35.8,39.7,38.6,36.7],itemStyle:{normal:{color:"#A4B2B1"}}}]};t.drawLine("myChart4",l)})},chartDataQuery:function(){this.chartDialogVisible=!0,this.chartDataVisible=!0,this.chartVisible=!0,this.showChartList()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-content"},[a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:t.sectors,active:"2"},on:{sectorClick:t.sectorClick}}),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("el-checkbox-group",{on:{change:t.toggleColumnShow},model:{value:t.columnShowList,callback:function(e){t.columnShowList=e},expression:"columnShowList"}},[a("el-checkbox",{attrs:{label:"智能推荐结果"}}),t._v(" "),a("el-checkbox",{attrs:{label:"参数配置"}}),t._v(" "),a("el-checkbox",{attrs:{label:"实际该类业务保费占比"}}),t._v(" "),a("el-checkbox",{attrs:{label:"车险未来经营情况预测"}})],1),t._v(" "),a("div",{staticStyle:{float:"right"}})],1)]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data,stripe:"","header-cell-style":t.tableHeader}},[a("el-table-column",{attrs:{"header-align":"center",fixed:"",label:"",align:"center","min-width":"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(e){t.editDialogVisible=!0}}},[t._v("编辑")])]}}])}),t._v(" "),t._l(t.businessSmallType,function(t){return a("el-table-column",{key:t.prop,attrs:{fixed:"","header-align":"center",align:t.align?t.align:"center","min-width":t.width,label:t.label,prop:t.prop}})}),t._v(" "),t._l(t.columns,function(e){return e.isShow?a("el-table-column",{key:e.prop,attrs:{"header-align":"center",label:e.firstTitle}},t._l(e.secondContents,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",label:e.secondTitle,align:e.align,"min-width":e.width,prop:e.prop},scopedSlots:t._u([{key:"default",fn:function(i){return[t.editFlag&&"isDisCount"===e.prop?a("el-select",{attrs:{size:"small"},on:{change:function(a){t.disCountChange(i.row[e.prop],i.$index)}},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):t.editFlag&&"isFee"===e.prop?a("el-select",{attrs:{size:"small"},on:{change:function(a){t.costChange(i.row[e.prop],i.$index)}},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):t.autoDownEdit[i.$index]&&"comAutoDown"===e.prop?a("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}}):t.marketEdit[i.$index]&&"comMarketDown"===e.prop?a("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}}):t.editFlag&&-1!==t.inputArr.indexOf(e.prop)?a("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[secondContent.prop]"}}):a("span",[t._v(t._s(i.row[e.prop]))])]}}])})})):t._e()})],2)],1)]),t._v(" "),a("div",{staticClass:"option"},[a("back-button",{on:{prev:t.handlePrev}},[t._v("上一步")]),t._v(" "),a("back-button",{attrs:{type:"next"},on:{next:t.supply}},[t._v("下一步")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.exportData}},[t._v("导出")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.impDialogVisible=!0}}},[t._v("导入")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.editFlag=!1}}},[t._v("保存")])],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.editDialogVisible,width:"80%"},on:{"update:visible":function(e){t.editDialogVisible=e}}},[a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("业务小类")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bizSmallTypeData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.bizSmallTypeColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("参数配置")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.paramConfigData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.paramConfigColumn,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align},scopedSlots:t._u([{key:"default",fn:function(i){return["isInverseDiscount"===e.prop?a("el-select",{attrs:{size:"small"},on:{change:t.disCountChange2},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):"isInverseCost"===e.prop?a("el-select",{attrs:{size:"small"},on:{change:t.costChange2},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[column.prop]"}},[a("el-option",{attrs:{label:"是",value:"是"}}),t._v(" "),a("el-option",{attrs:{label:"否",value:"否"}})],1):t.autoDownEdit2&&"comAutoDown"===e.prop?a("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[column.prop]"}}):t.marketEdit2&&"comMarketRateDown"===e.prop?a("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[column.prop]"}}):-1!==t.inputDialogArr.indexOf(e.prop)?a("el-input",{attrs:{size:"small"},model:{value:i.row[e.prop],callback:function(a){t.$set(i.row,e.prop,a)},expression:"scope.row[column.prop]"}}):a("span",[t._v(t._s(i.row[e.prop]))])]}}])})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("实际该类业务保费占比")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.actualPremiumPercentData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.actualPremiumPercentColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[t._v("车险未来经营情况预测")])]),t._v(" "),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.futureData,stripe:"",border:"","header-cell-style":t.tableHeader}},t._l(t.futureColumn,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"}},[t._v("计算")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("下一行")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("保存")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.editDialogVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"导入数据",visible:t.impDialogVisible,width:"40%"},on:{"update:visible":function(e){t.impDialogVisible=e}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择文件")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel文件，且不超过500kb")])],1),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.importData}},[t._v("导入")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!1}}},[t._v("关闭")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"图表展示",fullscreen:"",visible:t.chartDialogVisible},on:{"update:visible":function(e){t.chartDialogVisible=e}}},[a("el-container",[a("el-header",[a("el-form",{attrs:{inline:!0,size:"small",model:t.chartQuery}},[t._l(t.itemList,function(e){return a("el-form-item",{key:e.code,attrs:{label:e.name,prop:e.code}},[a("el-select",{attrs:{placeholder:"请选择",size:"medium",multiple:""},model:{value:t.chartQuery[e.code],callback:function(a){t.$set(t.chartQuery,e.code,a)},expression:"chartQuery[item.code]"}},t._l(e.detail,function(t){return a("el-option",{key:t.code,attrs:{label:t.name,value:t.code}})}))],1)}),t._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.chartDataQuery}},[t._v("查看")])],1)],2)],1),t._v(" "),a("el-container",[a("el-aside",{directives:[{name:"show",rawName:"v-show",value:t.chartDataVisible,expression:"chartDataVisible"}],attrs:{width:"20%"}},[a("base-table",{attrs:{width:t.chartCols.width,columns:t.chartCols,data:t.chartData}})],1),t._v(" "),a("el-main",{directives:[{name:"show",rawName:"v-show",value:t.chartVisible,expression:"chartVisible"}],staticStyle:{"margin-left":"10px",background:"#F6F5F5"},attrs:{width:"80%"}},[a("span",{on:{click:function(e){t.chartDataVisible=!t.chartDataVisible}}},[a("i",{staticClass:"iconfont icon-showleft"})]),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart1"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart2"}})])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart3"}})]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{style:{width:"100%",height:"350px"},attrs:{id:"myChart4"}})])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,s,!1,function(t){a("j6+3")},"data-v-76e8f955",null);e.default=c.exports},"j6+3":function(t,e){}});