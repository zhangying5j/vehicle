webpackJsonp([45],{MGt1:function(e,a){},peon:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("Dd8w"),l=t.n(r),n=t("NYxO"),s={name:"RuleDetail",components:{BaseTable:function(){return t.e(101).then(t.bind(null,"ss0d"))}},created:function(){this.$store.dispatch("initManageFormData")},data:function(){return{rules:{channel:[{required:!0,trigger:"change",message:"机构不能为空"}],ruleClass:[{required:!0,trigger:"change",message:"规则大类不能为空"}],ruleType:[{required:!0,trigger:"change",message:"规则类型不能为空"}]},ruleType:[{code:"y1",name:"Y1-预算对比-分定价策略"},{code:"y2",name:"Y2-预算对比-分机构"},{code:"y3",name:"Y3-预算对比-分业务板块"}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"channel",width:120,label:"渠道",align:"center"},{prop:"indexName",width:130,label:"指标名称",align:"center"},{prop:"down",width:120,label:"指标下限",align:"center"},{prop:"up",width:120,label:"指标上限",align:"center"},{prop:"remark",width:200,label:"异常描述",align:"center"}],currentPage:1,pageSize:10}},watch:{ruleClass:function(e){if(""!==e){var a=this.manageFormData.ruleClass.find(function(a){return a.code===e});this.ruleType=a.ruleType,a.ruleType.length>0&&(this.param.ruleType=a.ruleType[0].code)}},manageFormData:function(e){var a=this,t=this.manageFormData.orgList.find(function(e){return e.code===a.param.org}),r=this.manageFormData.channelList.find(function(e){return e.code===a.param.channel});this.$store.dispatch("getRuleDetailData",{org:t.name,channel:r.name})}},computed:l()({curData:function(){var e=[],a=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;t=t>this.ruleDetailData.length?this.ruleDetailData.length:t;for(var r=a;r<t;++r)e.push(this.ruleDetailData[r]);return e},ruleClass:function(){return this.param.ruleClass}},Object(n.d)({param:function(e){return e.inspect.param},manageFormData:function(e){return e.inspect.manageFormData},ruleDetailData:function(e){return e.inspect.ruleDetailData}})),methods:{back:function(){this.$router.go(-1)},query:function(){var e=this,a=this.manageFormData.orgList.find(function(a){return a.code===e.param.org}),t=this.manageFormData.channelList.find(function(a){return a.code===e.param.channel});this.$store.dispatch("getRuleDetailData",{org:a.name,channel:t.name})},dataChange:function(e,a){this.pageSize=e,this.currentPage=a}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("el-form",{ref:"inspectForm",attrs:{"label-width":"120px",model:e.param,rules:e.rules,inline:!0}},[t("el-form-item",{attrs:{label:"机构",prop:"org"}},[t("el-select",{attrs:{placeholder:"请选择机构",disabled:""},model:{value:e.param.org,callback:function(a){e.$set(e.param,"org",a)},expression:"param.org"}},e._l(e.manageFormData.orgList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[t("el-select",{attrs:{placeholder:"请选择渠道",clearable:""},model:{value:e.param.channel,callback:function(a){e.$set(e.param,"channel",a)},expression:"param.channel"}},e._l(e.manageFormData.channelList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"规则大类",prop:"ruleClass"}},[t("el-select",{attrs:{placeholder:"请选择规则大类",clearable:""},model:{value:e.param.ruleClass,callback:function(a){e.$set(e.param,"ruleClass",a)},expression:"param.ruleClass"}},e._l(e.manageFormData.ruleClass,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"规则类型",prop:"ruleType"}},[t("el-select",{attrs:{placeholder:"请选择规则类型",clearable:""},model:{value:e.param.ruleType,callback:function(a){e.$set(e.param,"ruleType",a)},expression:"param.ruleType"}},e._l(e.ruleType,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"状态",prop:"status"}},[t("el-select",{attrs:{placeholder:"请选择状态",clearable:""},model:{value:e.param.status,callback:function(a){e.$set(e.param,"status",a)},expression:"param.status"}},e._l(e.manageFormData.status,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("保存")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("查询")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.back}},[e._v("返回")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.curData,pagination:!0,total:e.ruleDetailData.length,rowKey:"org"},on:{dataChange:e.dataChange}})],1)]),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("模板下载")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("数据上传")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("数据下载")])],1)])},staticRenderFns:[]};var o=t("VU/8")(s,i,!1,function(e){t("MGt1")},"data-v-579ba02a",null);a.default=o.exports}});