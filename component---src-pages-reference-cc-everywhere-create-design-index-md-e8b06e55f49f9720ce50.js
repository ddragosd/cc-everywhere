"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[1741],{14177:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return f}});var r,n=a(87462),d=a(63366),m=(a(15007),a(64983)),p=a(91515),l=["components"],i={},o=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:i},x=p.Z;function f(e){var t=e.components,a=(0,d.Z)(e,l);return(0,m.mdx)(x,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"createdesign"},"createDesign()"),(0,m.mdx)(o,{variant:"error",slots:"header, text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,m.mdx)("p",null,"We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024."),(0,m.mdx)("p",null,"This API is used to embed the full Adobe Express editor in your own application."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-ts"},"createDesign: (createDesignParams: CreateDesignParams): void\n")),(0,m.mdx)("h2",{id:"createdesignparams"},"CreateDesignParams"),(0,m.mdx)("p",null,"All the properties in this object are optional."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#callbacks"},"Callbacks")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Callback methods")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#callbacks"},"ModalParams")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Parameters to configure editor/modal UI")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#createinputparams"},"CreateInputParams")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Input parameters when creating a design.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"outputParams"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#callbacks"},"CCXOutputParams")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Desired output options when exporting assets from the editor.")))),(0,m.mdx)("h3",{id:"createinputparams"},"CreateInputParams"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"CreateInputParams")," allows you to configure the editor to be launched for the user."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"canvasSize"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#size"},"Size"),"/",(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#canvasaspectid"},"CanvasAspectId")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Launch the editor with canvas set at this size.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#asset"},"Asset")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Asset object that contains the base64-encoded image data you want the editor to open.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"editorPanelView"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#editorpanelview"},"EditorPanelView")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Determines which panel view to open by default.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"exportOptions"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"panelSearchText"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Search text to pass in the editor for selected panel.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"templateType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../../types/index.md#templatetype"},"TemplateType")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Specify template type for canvas.")))),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"templateSearchText")," are not supported with this release. Use ",(0,m.mdx)("inlineCode",{parentName:"p"},"panelSearchText")," instead."))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-cc-everywhere-create-design-index-md-e8b06e55f49f9720ce50.js.map