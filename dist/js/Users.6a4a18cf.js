(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users"],{ce40:function(n,s,e){"use strict";e.r(s);var t=function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",[e("h1",[n._v("Lista de Personas")]),e("ul",n._l(n.personsList,(function(s){return e("li",{key:s.PersonId},[n._v(" "+n._s(s.nombre+" - "+s.rol)+" ")])})),0)])},r=[],o={data:function(){return{personsList:[]}},mounted:function(){var n=this;this.axios.get("/api/persons").then((function(s){n.personsList=s.data.persons}))}},i=o,u=e("2877"),a=Object(u["a"])(i,t,r,!1,null,null,null);s["default"]=a.exports}}]);
//# sourceMappingURL=Users.6a4a18cf.js.map