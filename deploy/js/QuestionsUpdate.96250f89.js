(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["QuestionsUpdate"],{b036:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectedQuestion?n("div",[n("QuestionForm",{attrs:{question:e.selectedQuestion,submitText:"Actualizar Question"},on:{submitForm:e.saveQuestion}})],1):n("b-alert",[e._v(" Question no identificado ")])},o=[],u=n("5530"),i=n("2f62"),a=n("d94d"),c={name:"QuestionUpdate",components:{QuestionForm:a["a"]},computed:Object(u["a"])({},Object(i["e"])("question",["selectedQuestion"])),methods:Object(u["a"])(Object(u["a"])({},Object(i["b"])("question",["updateQuestion"])),{},{saveQuestion:function(e){var t=this;this.updateQuestion(e).then((function(){t.$router.push({name:"Questions"})}))}})},d=c,r=n("2877"),l=Object(r["a"])(d,s,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=QuestionsUpdate.96250f89.js.map