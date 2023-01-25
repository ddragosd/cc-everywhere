"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[142],{87375:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),i=a(91515),o=["components"],l={},m={_frontmatter:l},h=i.Z;function s(e){var t=e.components,a=(0,r.Z)(e,o);return(0,d.mdx)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"authorization"},"Authorization"),(0,d.mdx)("p",null,"This Adobe Express Embed SDK follows the Proof Key for Code Exchange (PKCE) OAuth flow.  Developers are responsible for ",(0,d.mdx)("strong",{parentName:"p"},"registering OAuth credentials")," in Developer Console and implementing the ",(0,d.mdx)("strong",{parentName:"p"},"code exchange")," portion of the flow."),(0,d.mdx)("h2",{id:"register-oauth-credentials"},"Register OAuth Credentials"),(0,d.mdx)("p",null,"OAuth credentials are required when first creating an integration, but they can be modified later. In ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Developer Console"),', navigate to the project you created. You can edit credentials by navigating to "Credentials" > "OAuth Single-Page App". The redirect URL(s) you define here corresponds with the URL(s) to which the IMS server will redirect after authorization has been granted by the user.'),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Domain"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Default Redirect URI"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Redirect URI Patterns"),(0,d.mdx)("th",{parentName:"tr",align:"left"}))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"yourdomain"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"https://yourdomain.com/redirect")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"https://yourdomain.com/redirect")),(0,d.mdx)("td",{parentName:"tr",align:"left"})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"localhost"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"https://127.0.0.1:8000/redirect.html")),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"https://localhost:8000/redirect.html")),(0,d.mdx)("td",{parentName:"tr",align:"left"})))),(0,d.mdx)("p",null,'IMS will check the "Redirect URI Patterns" field first. If there are no matches, it will default to the "Default Redirect URI".'),(0,d.mdx)("h3",{id:"authorization-redirect"},"Authorization Redirect"),(0,d.mdx)("p",null,"When the SDK is first called, the user is prompted to sign into their Adobe account. After the user authenticates, the login pop-up window closes and the IMS server ",(0,d.mdx)("strong",{parentName:"p"},"redirects")," the user back to a registered redirect URI with an authorization code."),(0,d.mdx)("p",null,"The IMS helper library helps handle signing users in and out of their Adobe accounts. Here are the OAuth steps it handles for you on the backend:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"A unique ",(0,d.mdx)("inlineCode",{parentName:"li"},"code_verifier")," is created (then saved to the browser's session storage) and used by the IMS library to generates a ",(0,d.mdx)("inlineCode",{parentName:"li"},"code_challenge"),"."),(0,d.mdx)("li",{parentName:"ul"},"The IMS library makes a GET request to the IMS authorization endpoint with this ",(0,d.mdx)("inlineCode",{parentName:"li"},"code_challenge"),"."),(0,d.mdx)("li",{parentName:"ul"},"The client is identified, and the user is prompted to authenticate.")),(0,d.mdx)("h2",{id:"code-exchange"},"Code Exchange"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"exchangeAuthCodeForToken()")," method will exchange the authorization code received in the redirect step for an access token, so the user is not prompted to login again in this session. This flow is secure because even if the authorization code is somehow intercepted, it cannot be exchanged for an access token without being verified."),(0,d.mdx)("h3",{id:"exchangeauthcodefortoken"},"exchangeAuthCodeForToken()"),(0,d.mdx)("p",null,"This SDK provides this method which makes a POST request to the IMS server, with the ",(0,d.mdx)("inlineCode",{parentName:"p"},"code")," and the ",(0,d.mdx)("inlineCode",{parentName:"p"},"code_verifier")," from your browser storage. If verified, an access token is returned and stored for future API calls."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Domain"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Code exchange"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"yourdomain"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Call ",(0,d.mdx)("inlineCode",{parentName:"td"},"exchangeAuthCodeForToken()"),"  at ",(0,d.mdx)("inlineCode",{parentName:"td"},"/redirect"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"localhost"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Call ",(0,d.mdx)("inlineCode",{parentName:"td"},"exchangeAuthCodeForToken()")," at ",(0,d.mdx)("inlineCode",{parentName:"td"},"/redirect.html"))))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-authorization-index-md-783d13fb3b1b7427c655.js.map