"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[678],{90343:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var l=a(87462),n=a(63366),i=(a(15007),a(64983)),r=a(91515),o=["components"],s={},m={_frontmatter:s},d=r.Z;function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.mdx)(d,(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"local-development"},"Local Development"),(0,i.mdx)("p",null,"This guide contains the steps needed to test your project locally."),(0,i.mdx)("h2",{id:"domain-restrictions"},"Domain Restrictions"),(0,i.mdx)("p",null,"Adobe Create Embed SDK expects requests to come from:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"express.adobe.com"),(0,i.mdx)("li",{parentName:"ul"},"localhost"),(0,i.mdx)("li",{parentName:"ul"},"a domain that is registered to the client app in ",(0,i.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console/"},"Developer Console"))),(0,i.mdx)("p",null,"When a client application first calls the SDK, the user is prompted to authenticate the application. Once a user authenticates, Adobe's Identity Management Server (IMS) will redirect the client to a redirect URI registered in the Console.  To learn more about how to configure OAuth for your application, read the ",(0,i.mdx)("a",{parentName:"p",href:"../authorization/"},"authorization")," guide."),(0,i.mdx)("p",null,"All non-localhost redirect URIs need a valid SSL certificate to redirect the client after sign-ins and subsequently save access tokens onto client pages."),(0,i.mdx)("h2",{id:"testing-via-https"},"Testing via https"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Your production server will need a public key and a signed certificate to enable https.")),(0,i.mdx)("p",null,"To start trying out the SDK, we have included some steps for setting up a simple http server at port 8000:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install Homebrew. Homebrew is a package installer: follow ",(0,i.mdx)("a",{parentName:"li",href:"https://docs.brew.sh/Installation"},"these steps")," to install it."),(0,i.mdx)("li",{parentName:"ol"},"Create a key and SSL certificate using ",(0,i.mdx)("inlineCode",{parentName:"li"},"mkcert"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/FiloSottile/mkcert"},(0,i.mdx)("inlineCode",{parentName:"a"},"mkcert"))," is a simple tool for making locally-trusted development certificates. It automatically installs a local CA in the system root store, and generates locally-trusted certificates."),(0,i.mdx)("li",{parentName:"ul"},"Install it using ",(0,i.mdx)("inlineCode",{parentName:"li"},"brew install mkcert"),", NOT ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm install mkcert"),"."),(0,i.mdx)("li",{parentName:"ul"},"Configure a local certificate authority by running ",(0,i.mdx)("inlineCode",{parentName:"li"},"mkcert -install"),"."),(0,i.mdx)("li",{parentName:"ul"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"mkcert localhost")," in the project root. This will generate two files: ",(0,i.mdx)("inlineCode",{parentName:"li"},"localhost-key.pem")," (key) and ",(0,i.mdx)("inlineCode",{parentName:"li"},"localhost.pem")," (certificate). Our https server is instantiated in the next step with these two files so that the browser trusts localhost."))),(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("inlineCode",{parentName:"li"},"http-server"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"http-server")," lets you make files or directories available via ",(0,i.mdx)("inlineCode",{parentName:"li"},"localhost"),"."),(0,i.mdx)("li",{parentName:"ul"},"Install it using ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm i http-server")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"brew install http-server"),"."))),(0,i.mdx)("li",{parentName:"ol"},"Run the following line in your project root:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"}," http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000 -a localhost\n")),(0,i.mdx)("h2",{id:"testing-via-http"},"Testing via http"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Integrations must be submitted with https redirect URIs to be approved for production, but http URIs are accepted in Console ",(0,i.mdx)("em",{parentName:"strong"},"only")," for testing localhost instances.")),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},'Note: The "Default Redirect URI" field will still expect a https pattern, but including the http URI in the "Redirect URI Patterns" field will be sufficient.')),(0,i.mdx)("p",null," We have included some steps for getting started with a simple http server at port 8000:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install npm or Homebrew. npm is installed when you install Node, and Homebrew is another package installer that you can use."),(0,i.mdx)("li",{parentName:"ol"},"Install ",(0,i.mdx)("inlineCode",{parentName:"li"},"http-server"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"http-server")," lets you make files or directories available via ",(0,i.mdx)("inlineCode",{parentName:"li"},"localhost"),"."),(0,i.mdx)("li",{parentName:"ul"},"Install it using ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm i http-server")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"brew install http-server"),"."))),(0,i.mdx)("li",{parentName:"ol"},"Run the following line in your project root:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"}," http-server -p 8000 -a localhost\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-local-index-md-048789f514a68e69eb0f.js.map