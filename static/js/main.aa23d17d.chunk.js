(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var o=c(3),n=c.n(o),s=c(4),a=c(5),d=c(8),r=c(7),i=c(1),l=c.n(i),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(d.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(s.a)(this,c);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.addGood=function(t){e.setState({selectedGood:t})},e.removeGood=function(){e.setState({selectedGood:""})},e.isSelected=function(t){return e.state.selectedGood===t},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"section container",children:[Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeGood})]}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:m.map((function(t){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":e.isSelected(t)}),children:[Object(j.jsx)("td",{children:e.isSelected(t)?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){e.removeGood()},children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.addGood(t)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(l.a.Component);n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.aa23d17d.chunk.js.map