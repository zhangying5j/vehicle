webpackJsonp([14],{ftlk:function(e,t){},ybM3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),l=a.n(n),r=a("NYxO"),s={name:"Rule",components:{BaseTable:function(){return a.e(101).then(a.bind(null,"ss0d"))}},created:function(){this.$store.dispatch("initManageFormData")},data:function(){return{inspect:{ruleClass:"y",ruleType:"y1",org:"01000",channel:"ct",status:"y"},rules:{channel:[{required:!0,trigger:"change",message:"机构不能为空"}],ruleClass:[{required:!0,trigger:"change",message:"规则大类不能为空"}],ruleType:[{required:!0,trigger:"change",message:"规则类型不能为空"}]},ruleType:[{code:"y1",name:"Y1-预算对比-分定价策略"},{code:"y2",name:"Y2-预算对比-分机构"},{code:"y3",name:"Y3-预算对比-分业务板块"}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"channel",width:120,label:"渠道",align:"center"},{prop:"ruleClass",width:120,label:"规则大类",align:"center"},{prop:"ruleType",width:180,label:"规则类型",align:"center"},{prop:"startDate",width:120,label:"生效日期",align:"center"},{prop:"endDate",width:120,label:"失效日期",align:"center"},{prop:"status",width:120,label:"状态",align:"center"},{prop:"operation",label:"操作",width:360,operation:!0,operations:[{text:"查看",event:"detail"},{text:"编辑",event:"edit"},{text:"删除",event:"del"}]}],dataShow:!1,currentPage:1,pageSize:10}},computed:l()({curData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.ruleData.length?this.ruleData.length:a;for(var n=t;n<a;++n)e.push(this.ruleData[n]);return e},ruleClass:function(){return this.inspect.ruleClass}},Object(r.d)({manageFormData:function(e){return e.inspect.manageFormData},ruleData:function(e){return e.inspect.ruleData}})),watch:{ruleClass:function(e){if(""!==e){var t=this.manageFormData.ruleClass.find(function(t){return t.code===e});this.ruleType=t.ruleType,t.ruleType.length>0&&(this.inspect.ruleType=t.ruleType[0].code)}}},methods:{detail:function(e){var t=this.manageFormData.orgList.find(function(t){return t.name===e});this.$store.dispatch("setParam",{ruleClass:this.inspect.ruleClass,ruleType:this.inspect.ruleType,org:t.code,channel:this.inspect.channel,status:this.inspect.status}),this.$router.push({path:"/admin/inspect/warn/ruleDetail"})},edit:function(e){},del:function(e){},query:function(){var e=this;this.$refs.inspectForm.validate(function(t){if(t){e.dataShow=!0;var a=e.manageFormData,n=a.channelList.find(function(t){return t.code===e.inspect.channel}),l=a.ruleClass.find(function(t){return t.code===e.inspect.ruleClass}),r=l.ruleType.find(function(t){return t.code===e.inspect.ruleType});e.$store.dispatch("getManageRuleData",{channel:n.name,ruleClass:l.name,ruleType:r.name})}})},dataChange:function(e,t){this.pageSize=e,this.currentPage=t},reset:function(){this.$refs.inspectForm.resetFields()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"inspectForm",attrs:{"label-width":"120px",model:e.inspect,rules:e.rules,inline:!0}},[a("el-form-item",{attrs:{label:"规则大类",prop:"ruleClass"}},[a("el-select",{attrs:{placeholder:"请选择规则大类",clearable:""},model:{value:e.inspect.ruleClass,callback:function(t){e.$set(e.inspect,"ruleClass",t)},expression:"inspect.ruleClass"}},e._l(e.manageFormData.ruleClass,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"规则类型",prop:"ruleType"}},[a("el-select",{attrs:{placeholder:"请选择规则类型",clearable:""},model:{value:e.inspect.ruleType,callback:function(t){e.$set(e.inspect,"ruleType",t)},expression:"inspect.ruleType"}},e._l(e.ruleType,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择机构",clearable:""},model:{value:e.inspect.org,callback:function(t){e.$set(e.inspect,"org",t)},expression:"inspect.org"}},e._l(e.manageFormData.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道",clearable:""},model:{value:e.inspect.channel,callback:function(t){e.$set(e.inspect,"channel",t)},expression:"inspect.channel"}},e._l(e.manageFormData.channelList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择状态",clearable:""},model:{value:e.inspect.status,callback:function(t){e.$set(e.inspect,"status",t)},expression:"inspect.status"}},e._l(e.manageFormData.status,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dataShow,expression:"dataShow"}],staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.curData,pagination:!0,total:e.ruleData.length,rowKey:"org"},on:{dataChange:e.dataChange,detail:e.detail,edit:e.edit,del:e.del}})],1)])])},staticRenderFns:[]};var c=a("VU/8")(s,i,!1,function(e){a("ftlk")},"data-v-f28bf022",null);t.default=c.exports}});