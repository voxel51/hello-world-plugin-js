(function(e,o){typeof exports=="object"&&typeof module<"u"?o(require("@fiftyone/plugins"),require("@fiftyone/components"),require("@fiftyone/operators"),require("@fiftyone/state"),require("react"),require("recoil")):typeof define=="function"&&define.amd?define(["@fiftyone/plugins","@fiftyone/components","@fiftyone/operators","@fiftyone/state","react","recoil"],o):(e=typeof globalThis<"u"?globalThis:e||self,o(e.__fop__,e.__foc__,e.__foo__,e.__fos__,e.React,e.recoil))})(this,function(e,o,r,c,a,f){"use strict";function u(t){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const l in t)if(l!=="default"){const i=Object.getOwnPropertyDescriptor(t,l);Object.defineProperty(n,l,i.get?i:{enumerable:!0,get:()=>t[l]})}}return n.default=t,Object.freeze(n)}const s=u(c);function p(){const t=a.useCallback(()=>r.executeOperator("@voxel51/hello-world/show_alert"),[]),n=f.useRecoilValue(s.dataset);return React.createElement(React.Fragment,null,React.createElement("h1",null,"Hello, world!"),React.createElement("h2",null,"You are viewing the ",React.createElement("strong",null,n==null?void 0:n.name)," dataset"),React.createElement(o.Button,{onClick:t},"Show alert"))}class d extends r.Operator{get config(){return new r.OperatorConfig({name:"show_alert",label:"Show alert",unlisted:!0})}async execute(){alert(`Hello from plugin ${this.pluginName}`)}}r.registerOperator(d,"@voxel51/hello-world"),e.registerComponent({name:"HelloWorld",label:"Hello world",component:p,type:e.PluginComponentType.Panel,activator:m});function m({dataset:t}){return!0}});
//# sourceMappingURL=index.umd.js.map