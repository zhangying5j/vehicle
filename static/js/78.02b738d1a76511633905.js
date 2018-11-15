webpackJsonp([78],{JclA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),o=a.n(i),l=a("NYxO"),n=a("P0XF"),r={name:"BizCode",data:function(){return{queryData:{bizType:"01"},rules:{bizType:[{required:!0,trigger:"change",message:"查询条件不能为空"}]},bizTypeList:[{code:"01",name:"使用性质"},{code:"02",name:"车辆种类"},{code:"03",name:"商业险上年出险金额"}],valShow:!1,specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},orgSectorHidden:!0,orgDialogVisible:!1,typeNo:"02",typeEName:"carType",typeCName:"车辆种类",data:[],carTypeData:[{org:"50000",bizNo:"001",bizName:"客车",valDown:"",valUp:"",typeNo:"02",typeEName:"carType",typeCName:"车辆种类",isEdit:!1},{org:"50000",bizNo:"002",bizName:"货车",valDown:"",valUp:"",typeNo:"02",typeEName:"carType",typeCName:"车辆种类",isEdit:!1},{org:"50000",bizNo:"003",bizName:"挂车",valDown:"",valUp:"",typeNo:"02",typeEName:"carType",typeCName:"车辆种类",isEdit:!1}],comLastAmountData:[{org:"",bizNo:"001",bizName:"0-1000",valDown:"0",valUp:"1000",typeNo:"03",typeEName:"comLastAmount",typeCName:"商业险上年出险金额",isEdit:!1},{org:"",bizNo:"002",bizName:"1000-2000",valDown:"1000",valUp:"2000",typeNo:"03",typeEName:"comLastAmount",typeCName:"商业险上年出险金额",isEdit:!1},{org:"",bizNo:"003",bizName:"2000-5000",valDown:"2000",valUp:"5000",typeNo:"03",typeEName:"comLastAmount",typeCName:"商业险上年出险金额",isEdit:!1}],allOrg:[{code:"10000",name:"北京分公司"},{code:"20000",name:"上海分公司"},{code:"30000",name:"江苏省分公司"},{code:"40000",name:"山东省分公司"},{code:"50000",name:"山西省分公司"}],currentOrgCode:["40000","50000"],multipleSelection:[],impDialogVisible:!1,useProData:[{org:"",bizNo:"001",bizName:"家庭自用",valDown:"",valUp:"",typeNo:"01",typeEName:"usePro",typeCName:"使用性质",isEdit:!1},{org:"",bizNo:"002",bizName:"营业出租租赁",valDown:"",valUp:"",typeNo:"01",typeEName:"usePro",typeCName:"使用性质",isEdit:!1},{org:"",bizNo:"003",bizName:"营业公路客运",valDown:"",valUp:"",typeNo:"01",typeEName:"usePro",typeCName:"使用性质",isEdit:!1},{org:"",bizNo:"004",bizName:"营业城市公交",valDown:"",valUp:"",typeNo:"01",typeEName:"usePro",typeCName:"使用性质",isEdit:!1},{org:"",bizNo:"005",bizName:"营业旅游",valDown:"",valUp:"",typeNo:"01",typeEName:"usePro",typeCName:"使用性质",isEdit:!1}]}},methods:{queryChange:function(t){"02"===t?(this.data=this.carTypeData,this.valShow=!1,this.orgSectorHidden=!1):"03"===t?(this.data=this.comLastAmountData,this.valShow=!0,this.orgSectorHidden=!0):(this.data=[],this.valShow=!1,this.orgSectorHidden=!0)},query:function(){var t=this;this.$refs.queryForm.validate(function(e){e&&(console.log(t.queryData.bizType),"02"===t.queryData.bizType?(t.data=t.carTypeData,t.valShow=!1,t.orgSectorHidden=!1):"03"===t.queryData.bizType?(t.data=t.comLastAmountData,t.valShow=!0,t.orgSectorHidden=!0):(t.data=[],t.valShow=!1,t.orgSectorHidden=!0))})},handleSelectionChange:function(t){var e=this;this.multipleSelection=[],t.forEach(function(t){e.multipleSelection.push(t.bizNo)})},edit:function(){var t=this;this.multipleSelection.length>0&&this.data.forEach(function(e){t.multipleSelection.includes(e.bizNo)&&(e.isEdit=!0)})},save:function(){this.data.forEach(function(t){t.isEdit=!1})},sure:function(){},cancel:function(){},add:function(){var t=Object(n.a)();if(console.log(t),"01"===this.queryData.bizType){this.data.push({org:"",bizNo:"",bizName:"",valDown:"",valUp:"",typeNo:"01",typeEName:"usePro",typeCName:"使用性质",isEdit:!0})}else if("02"===this.queryData.bizType){this.data.push({org:"",bizNo:"",bizName:"",valDown:"",valUp:"",typeNo:"02",typeEName:"carType",typeCName:"车辆种类",isEdit:!0})}else if("03"===this.queryData.bizType){this.data.push({org:"",bizNo:"",bizName:"",valDown:"",valUp:"",typeNo:"03",typeEName:"comLastAmount",typeCName:"商业险上年出险金额",isEdit:!0})}},removeOrg:function(t){var e=this.currentOrgCode.indexOf(t);this.currentDimensionData.splice(e,1)},addOrg:function(t){this.currentOrgCode.includes(t)||this.currentOrgCode.push(t)},removeRecord:function(t){var e=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=e.data.findIndex(function(e){return e.bizNo===t});e.data.splice(a,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},importData:function(){this.impDialogVisible=!1,this.data=this.useProData,this.valShow=!1,this.orgSectorHidden=!0},exportData:function(){var t=this;this.$confirm("确定要导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"导出成功!"})}).catch(function(){t.$message({type:"info",message:"已取消导出"})})}},computed:o()({currentOrg:function(){var t=this;return this.currentOrgCode.map(function(e){return t.allOrg.find(function(t){return t.code===e})})}},Object(l.d)({tableHeader:function(t){return t.app.tableHeader}}))},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"160px",model:t.queryData,rules:t.rules,inline:!0}},[a("el-form-item",{attrs:{label:"业务代码分类名称",prop:"bizType"}},[a("el-select",{attrs:{placeholder:"请选择业务代码分类",filterable:""},on:{change:t.queryChange},model:{value:t.queryData.bizType,callback:function(e){t.$set(t.queryData,"bizType",e)},expression:"queryData.bizType"}},t._l(t.bizTypeList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.query}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"tableSector",attrs:{hidden:t.orgSectorHidden},on:{"update:hidden":function(e){t.orgSectorHidden=e}}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("div",{staticClass:"tag"},[t._l(t.currentOrg,function(e){return a("el-tag",{key:e.code,attrs:{closable:"",type:"primary"},on:{close:function(a){t.removeOrg(e.code)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])}),t._v(" "),a("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(e){t.orgDialogVisible=!0}}},[t._v("新增机构")])],2)])])],1)],1),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data,stripe:"","header-cell-style":t.tableHeader},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"org",label:"机构代码","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bizNo",label:"业务代码值编号","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请输入业务代码值编号"},model:{value:e.row.bizNo,callback:function(a){t.$set(e.row,"bizNo",a)},expression:"scope.row.bizNo"}}):a("span",[t._v(t._s(e.row.bizNo))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bizName",label:"业务代码值中文名称","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请输入业务代码值中文名称"},model:{value:e.row.bizName,callback:function(a){t.$set(e.row,"bizName",a)},expression:"scope.row.bizName"}}):a("span",[t._v(t._s(e.row.bizName))])]}}])}),t._v(" "),t.valShow?a("el-table-column",{attrs:{prop:"valDown",label:"数值下限","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请输入业务代码值编号"},model:{value:e.row.valDown,callback:function(a){t.$set(e.row,"valDown",a)},expression:"scope.row.valDown"}}):a("span",[t._v(t._s(e.row.valDown))])]}}])}):t._e(),t._v(" "),t.valShow?a("el-table-column",{attrs:{prop:"valUp",label:"数值上限","min-width":"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请输入业务代码值中文名称"},model:{value:e.row.valUp,callback:function(a){t.$set(e.row,"valUp",a)},expression:"scope.row.valUp"}}):a("span",[t._v(t._s(e.row.valUp))])]}}])}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"typeNo",label:"业务代码分类编号","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeEName",label:"业务代码分类英文名称","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeCName",label:"业务代码分类中文名称","min-width":"120"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(a){a.preventDefault(),t.removeRecord(e.row.bizNo)}}})],1)]}}])})],1)],1),t._v(" "),a("el-button",{style:t.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.add}},[t._v("\n      新增行\n    ")])],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.edit}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.save}},[t._v("暂存")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.impDialogVisible=!0}}},[t._v("导入")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.exportData}},[t._v("导出")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("校验")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[t._v("发布")])],1),t._v(" "),a("el-dialog",{attrs:{title:"新增机构",visible:t.orgDialogVisible,width:"40%"},on:{"update:visible":function(e){t.orgDialogVisible=e}}},t._l(t.allOrg,function(e){return a("el-tag",{key:e.code,attrs:{type:t.currentOrgCode.includes(e.code)?"primary":"info"},nativeOn:{click:function(a){t.addOrg(e.code)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),a("el-dialog",{attrs:{title:"导入文件",visible:t.impDialogVisible,width:"40%"},on:{"update:visible":function(e){t.impDialogVisible=e}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("选择文件")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传excel文件，且不超过500kb")])],1),t._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.importData}},[t._v("导入")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.impDialogVisible=!1}}},[t._v("关闭")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,s,!1,function(t){a("pr1f")},"data-v-0a250784",null);e.default=c.exports},pr1f:function(t,e){}});