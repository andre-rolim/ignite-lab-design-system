var g=Object.defineProperty;var t=(n,e)=>g(n,"name",{value:e,configurable:!0});import{w as v,p as h}from"./iframe.8cdc9c5d.js";import{S as L,a as E}from"./index.ee6ffcf2.js";var N=t(function(e){var i=e.name,m=e.parameterName,p=e.wrapper,o=e.skipIfNoParametersOrOptions,u=o===void 0?!1:o,l=t(function(r){return function(a,s){var f=s.parameters&&s.parameters[m];return f&&f.disable||u&&!r&&!f?a(s):p(a,s,{options:r,parameters:f})}},"decorator");return function(){for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return typeof r[0]=="function"?l().apply(void 0,r):function(){if(arguments.length>1)return r.length>1?l(r).apply(void 0,arguments):l.apply(void 0,r).apply(void 0,arguments);throw new Error("Passing stories directly into ".concat(i,`() is not allowed,
        instead use addDecorator(`).concat(i,") and pass options with the '").concat(m,"' parameter"))}}},"makeDecorator"),O="links",w=v.document,y=v.HTMLElement,D=t(function(e){return h.getChannel().emit(E,e)},"navigate"),k=t(function(e){var i=e.target;if(i instanceof y){var m=i,p=m.dataset,o=p.sbKind,u=p.sbStory;(o||u)&&(e.preventDefault(),D({kind:o,story:u}))}},"linksListener"),d=!1,P=t(function(){d||(d=!0,w.addEventListener("click",k))},"on"),S=t(function(){d&&(d=!1,w.removeEventListener("click",k))},"off"),T=N({name:"withLinks",parameterName:O,wrapper:t(function(e,i){return P(),h.getChannel().once(L,S),e(i)},"wrapper")});module&&module.hot&&module.hot.decline&&module.hot.decline();var H=[T];export{H as decorators};
//# sourceMappingURL=preview.480ce900.js.map
