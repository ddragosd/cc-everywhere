(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[154],{9672:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(22122),r=a(19756),i=(a(15007),a(64983)),m=a(99536),d=["components"],o={},l={_frontmatter:o},p=m.Z;function s(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.mdx)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"sdk-reference"},"SDK Reference"),(0,i.mdx)("p",null,"The main method for initializing the SDK takes ",(0,i.mdx)("a",{parentName:"p",href:"#hostinfo"},"HostInfo")," and an optional ",(0,i.mdx)("a",{parentName:"p",href:"#configparams"},"ConfigParams"),", and returns a ",(0,i.mdx)("a",{parentName:"p",href:"#cceverywhere"},"CCEverywhere")," object. "),(0,i.mdx)("h2",{id:"initialize"},"initialize()"),(0,i.mdx)("p",null,"The default method ",(0,i.mdx)("inlineCode",{parentName:"p"},"initialize()")," is the API used to initialize the SDK. Make sure to call it only once a page. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"CCEverywhere.default.initialize(\n    /* HostInfo */\n    {\n        clientId: YOUR_CLIENT_ID,\n        appName: YOUR_PROJECT_NAME,\n        appVersion: { major: 1, minor: 0 },\n        platformCategory: 'web', \n        redirectUri: YOUR_REDIRECT_URI\n    },\n    /* ConfigParams (optional) */\n    {\n        locale: 'en_US',\n    }\n);\n")),(0,i.mdx)("h3",{id:"hostinfo"},"HostInfo"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"clientId"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Your API Key")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"appName"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Name of project folder created in user's CC Express")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"appVersion"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"{ major: number, minor: number, patch?: number}"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Your app version")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"platformCategory"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'web'"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Specify host app platform")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"redirectUri"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Searches for redirect URL you define in ",(0,i.mdx)("a",{parentName:"td",href:"https://developer.adobe.com/console"},"console"))))),(0,i.mdx)("p",null,"If you specify ",(0,i.mdx)("inlineCode",{parentName:"p"},"redirectUri")," as a parameter in the ",(0,i.mdx)("strong",{parentName:"p"},"HostInfo"),' object, that is the redirect URI that will be checked first. If you leave this field blank, IMS will search through the "Redirect URI patterns" registered in console for your client, and if no match is found, it will fall back on the "Default Redirect URI".'),(0,i.mdx)("h3",{id:"configparams"},"ConfigParams"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("strong",{parentName:"p"},"locale")," field defaults to ",(0,i.mdx)("strong",{parentName:"p"},"'en_US'")," if nothing is specified.  Visit the ",(0,i.mdx)("a",{parentName:"p",href:"../../guides/../pages/guides/ccx_editor/customization/index.md"},"customization")," page for a full locale list."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"locale"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Language settings for SDK components")))),(0,i.mdx)("h2",{id:"cceverywhere"},"CCEverywhere"),(0,i.mdx)("p",null,"The CCEverywhere object is the object returned when the SDK is initialized. This is the main API for accessing all the SDK components. "),(0,i.mdx)("p",null,"As of today, it exposes 4 methods: "),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"openQuickAction()"),": Quick Actions Component"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"createDesign()"),": CC Express Editor Component"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"editDesign()"),": CC Express Editor Component"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"exchangeAuthCodeForToken()"),": Authorization")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-index-md-389ce31184882e931c8c.js.map