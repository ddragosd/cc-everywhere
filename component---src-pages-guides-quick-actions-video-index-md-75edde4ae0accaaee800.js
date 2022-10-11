"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[444],{9395:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(5007),n(4983)),d=n(1515),o=["components"],m={},p={_frontmatter:m},l=d.Z;function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)(l,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"video-quick-actions"},"Video Quick Actions"),(0,i.mdx)("p",null,"Each Video Quick Actions component is loaded into the application as an iframe, like the Adobe Express editor component. Users will be prompted to browse for an asset once the QA iframe is loaded. Unlike the Image Quick Actions components, Video QAs cannot be launched with an asset attached during this beta phase."),(0,i.mdx)("h2",{id:"openquickaction"},"openQuickAction()"),(0,i.mdx)("p",null,"After the SDK has been initialized, the ",(0,i.mdx)("a",{parentName:"p",href:"../../../reference/index.md#cceverywhere"},"CCEverywhere")," object exposes these Image Quick Actions via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," method."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.openQuickAction(\n    // QuickActionsParams\n    {\n        id: 'change-speed', \n        inputParams: {\n            exportOptions: []\n        },\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        modalParams: {},\n    }\n)\n")),(0,i.mdx)("h3",{id:"quickactionparams"},(0,i.mdx)("a",{parentName:"h3",href:"../../../reference/quick_actions/index.md#quickactionparams"},"QuickActionParams")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," takes an object ",(0,i.mdx)("inlineCode",{parentName:"p"},"QuickActionParams")," with 4 parameters:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Choose Quick Actions component"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.md#quickactionid"},"QuickActionId"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Configure ",(0,i.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.md#exportoption"},"export options")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.mdquickactioninputparams"},"QuickActionInputParams"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Callback functions"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#callbacks"},"Callbacks"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Define size of QA iframe"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#modalparams"},"ModalParams"))))),(0,i.mdx)("p",null,"Only ",(0,i.mdx)("inlineCode",{parentName:"p"},"id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"inputParams.exportOptions")," is required to initialize the iframe."),(0,i.mdx)("h3",{id:"quickactionid"},(0,i.mdx)("a",{parentName:"h3",href:"../../../reference/quick_actions/index.md#quickactionid"},"QuickActionId")),(0,i.mdx)("p",null,"Identifies which Video Quick Actions component should be loaded into the iframe."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Quick Action"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"QuickActionId"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Change Speed"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'change-speed'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Convert to GIF"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-gif'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Convert to MP4"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-mp4'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Crop Video"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'crop-video'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Merge Video"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'merge-video'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Resize Video"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'resize-video'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Reverse Video"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'reverse-video'")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Trim Video"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"'trim-video'")))),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("h4",{id:"flow-user-clicks-the-change-speed-button"},'Flow: User clicks the "Change Speed" button'),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The Change Speed QA Component is launched in an iframe. The user will browse for a mp4 asset to perform the QA on, within this iframe."),(0,i.mdx)("li",{parentName:"ul"},"Once selected, the user is presented with options for changing the speed.")),(0,i.mdx)("p",null,"Finally, users can choose between 3 export options:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Customize"),": to continue designing in a Adobe Express editor component"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Download"),": to save the asset"),(0,i.mdx)("li",{parentName:"ul"},"Custom buttons that target the host application")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n  <title>Quick Actions</title>\n  </head>\n    \n  <body>\n    <h1> Video Quick Action Example </h1>\n    <button id=\"change-speed\"> Change Speed </button>\n\n    <script src=\"https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js\"><\/script>\n    <script type=\"text/javascript\" >\n\n    const PROJECT_NAME = 'cc everywhere';\n\n    var ccEverywhere = window.CCEverywhere.initialize(\n        {\n            clientId: YOUR_CLIENT_ID,\n            appName: PROJECT_NAME,\n            appVersion: { major: 1, minor: 0 },\n            platformCategory: 'web',\n            redirectUri: YOUR_REDIRECT_URI\n        }\n    );\n\n    const videoCallbacks = {\n        onCancel: () => {},\n        onPublish: (publishParams) => {\n            if(publishParams.exportButtonId==\"save-to-host-app\"){\n                // Customize functionality here \n            }\n        },\n        onError: (err) => {\n            console.error('Error received is', err.toString())\n        }\n    }\n\n    const exportOptions = [\n        {\n            target: 'Editor',\n            variant: 'cta',\n            optionType: 'button',\n            buttonType: 'native'\n        },\n        {\n            target: 'Download',\n            variant: 'primary',\n            optionType: 'button',\n            buttonType: 'native'\n        },\n        /* Custom implementation in onPublish callback */\n        {\n            target: 'Host',\n            id: 'save-to-host-app',\n            label: 'Embed in app',\n            variant: 'cta',\n            optionType: 'button',\n            buttonType: 'custom'\n        }\n    ];\n\n    document.getElementById('change-speed')\n    .addEventListener('click', () => {\n        ccEverywhere.openQuickAction({\n            id: 'change-speed', \n            inputParams: { \n                exportOptions: exportOptions\n            },\n            callbacks: videoCallbacks,\n            modalParams: {},\n        })\n    })\n    <\/script>\n  </body> \n</html>\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quick-actions-video-index-md-75edde4ae0accaaee800.js.map