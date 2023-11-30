"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[6746],{23617:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return p},default:function(){return u}});var n,r=a(87462),d=a(63366),m=(a(15007),a(64983)),o=a(91515),i=["components"],p={},l=(n="InlineAlert",function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",t)}),x={_frontmatter:p},s=o.Z;function u(t){var e=t.components,a=(0,d.Z)(t,i);return(0,m.mdx)(s,(0,r.Z)({},x,a,{components:e,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"quick-actions"},"Quick actions"),(0,m.mdx)(l,{variant:"error",slots:"header, text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,m.mdx)("p",null,"We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," API allows you to embed the quick actions component in your application."),(0,m.mdx)("h2",{id:"openquickaction"},"openQuickAction()"),(0,m.mdx)("p",null,"This method launches an iframe in your application for your user to perform a quick action."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"openQuickAction(QuickActionParams) \n")),(0,m.mdx)("h3",{id:"quickactionparams"},"QuickActionParams"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," takes an object ",(0,m.mdx)("inlineCode",{parentName:"p"},"QuickActionParams")," with 4 properties."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#quickactionid"},"QuickActionId")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"ID for associated quick action")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#quickactioninputparams"},"QuickActionInputParams")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Asset to load (image only), and export button options")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"modalParams (optional)"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../shared_types/index.md#modalparams"},"ModalParams")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Specify modal dimensions")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"outputParams (optional)"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../shared_types/index.md#ccxoutputparams"},"CCXOutputParams")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Specify output type and file type of created project")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"callbacks (optional)"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../shared_types/index.md#callbacks"},"Callbacks")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Note"),": ",(0,m.mdx)("inlineCode",{parentName:"p"},"inputParams.exportOptions"),' determines which export buttons are exposed to the user once the action is complete, and must be defined with at least an empty array. If given an empty array, the "Download" button will be surfaced as an export option.'),(0,m.mdx)("h3",{id:"quickactionid"},"QuickActionId"),(0,m.mdx)("p",null,"This ID is associated with the quick action you want to surface to your user."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Quick Action"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"QuickActionId"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Crop Image"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'image-crop'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Convert to JPG"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-jpg'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Convert to PNG"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-png'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Resize Image"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'image-resize'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Remove Background"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'remove-background'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Image")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Change Speed"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'change-speed'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Convert to GIF"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-gif'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Convert to MP4"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-mp4'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Crop Video"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'crop-video'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Merge Video"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'merge-videos'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Resize Video"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'resize-video'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Reverse Video"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'reverse-video'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Trim Video"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'trim-video'"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Video")))),(0,m.mdx)("h3",{id:"quickactioninputparams"},"QuickActionInputParams"),(0,m.mdx)("p",null,"Allows you to specify an input asset and export options for the quick actions modal."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"../shared_types/index.md#asset"},"Asset")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Image you want to load into QA modal.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"exportOptions"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#exportoption"},"ExportOption")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Define export buttons")))),(0,m.mdx)("h3",{id:"example"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.openQuickAction(\n    {\n        id: 'image-resize',\n        inputParams: {\n            // passing a starting asset is not available for video quick actions\n            asset: {\n                data: <ENCODED_IMAGE>, \n                dataType: 'base64', \n                type: 'image'\n            }, \n            exportOptions: []\n        }\n    }\n)\n")),(0,m.mdx)("h2",{id:"exportoption"},"ExportOption"),(0,m.mdx)("p",null,"Allows you to define export buttons for a quick action."),(0,m.mdx)("p",null,"This is an array of ",(0,m.mdx)("a",{parentName:"p",href:"#exportbutton"},"ExportButton")," and/or ",(0,m.mdx)("a",{parentName:"p",href:"#exportbuttongroup"},"ExportButtonGroup"),' type objects. When specified with an empty array, a "Download" button will still be generated for the user once the action is completed.'),(0,m.mdx)("h2",{id:"exportbutton"},"ExportButton"),(0,m.mdx)("p",null,"There are two types of export buttons:  ",(0,m.mdx)("inlineCode",{parentName:"p"},"NativeExportButton")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"CustomExportButton"),"."),(0,m.mdx)("h3",{id:"nativeexportbutton"},"NativeExportButton"),(0,m.mdx)("p",null,"This is used to render a native button once the quick action has finished. You will not be notified when the button is clicked. If you want to be notified via a custom click handler, use ",(0,m.mdx)("a",{parentName:"p",href:"#customexportbutton"},(0,m.mdx)("inlineCode",{parentName:"a"},"CustomExportButton")),"."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#target"},"target")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'Editor' or 'Download'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"label"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Localized text of the export button")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"variant"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'cta', 'primary', 'secondary'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"optionType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'button'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"buttonType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'native'")))),(0,m.mdx)("h3",{id:"customexportbutton"},"CustomExportButton"),(0,m.mdx)("p",null,"This is used to render a custom button once the Quick Action has finished. Use this if you want to have a custom button click handler."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The id of the export button")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#target"},"target")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'Host'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"label"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Localized text of the export button")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"variant"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'cta', 'primary', 'secondary'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"optionType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'button'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"buttonType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'custom'")))),(0,m.mdx)("h4",{id:"target"},"target"),(0,m.mdx)("p",null,"The target determines the type of export."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"'Editor': Opens asset in an ",(0,m.mdx)("a",{parentName:"li",href:"../full_editor/index.md"},"full editor component")),(0,m.mdx)("li",{parentName:"ul"},"'Download':  Downloads the asset to user's machine"),(0,m.mdx)("li",{parentName:"ul"},"'Host': Targets host app - id is passed in ",(0,m.mdx)("a",{parentName:"li",href:"../shared_types/index.md#quickactionpublishparams"},(0,m.mdx)("inlineCode",{parentName:"a"},"onPublish"))," callback along with asset data")),(0,m.mdx)("p",null,"For ",(0,m.mdx)("inlineCode",{parentName:"p"},"NativeExportButton")," objects, ",(0,m.mdx)("inlineCode",{parentName:"p"},"label")," defaults to ",(0,m.mdx)("strong",{parentName:"p"},"Customize")," when targeting the full editor and ",(0,m.mdx)("strong",{parentName:"p"},"Download")," when the target is specified as 'Download;."),(0,m.mdx)("h3",{id:"example-1"},"Example"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"const exportOptions = [\n    {\n        // Customize further in the full editor\n        target: 'Editor',\n        variant: 'cta',\n        optionType: 'button',\n        buttonType: 'native'\n    },\n    {\n        target: 'Download',\n        variant: 'primary',\n        optionType: 'button',\n        buttonType: 'native'\n    },\n    {\n        target: 'Host',\n        id: 'save-to-host-app',\n        label: 'Embed in app',\n        variant: 'cta',\n        optionType: 'button',\n        buttonType: 'custom'\n    }\n];\nconst callbacks = {\n    onCancel: () => {},\n    onPublish: (publishParams) => {\n        if(publishParams.exportButtonId==\"save-to-host-app\"){\n            //customize functionality here\n        }\n    },\n    onError: (err) => {\n        console.error('Error received is', err.toString())\n    }\n}\n")),(0,m.mdx)("h2",{id:"exportbuttongroup"},"ExportButtonGroup"),(0,m.mdx)("p",null,"This is used to render a group of buttons which will be shown as a drop down under a parent button."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"label"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Localized text of the export button group")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"Variant"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"'cta', 'primary', 'secondary'")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"optionType"),(0,m.mdx)("td",{parentName:"tr",align:"left"},'"group"')),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"buttons"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"#exportbutton"},"ExportButton"),"[]")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-2-reference-quick-actions-index-md-fb38a49597070c054144.js.map