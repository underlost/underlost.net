(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{166:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(169),i=(r(3),r(172)),s=r(83),c=r.n(s),l=r(178),d=r(198),u=function(){var e=d.data;return o.a.createElement("div",{className:"row mb-5"},e.allMdx.edges.map(function(e){return o.a.createElement("div",{className:"col-md-2"},e.node.frontmatter.title)}))},m=r(199),p=r(7),h=r.n(p),g=r(200),f=r.n(g),y=r(201),v=r.n(y),b=r(202),k=r.n(b),x=r(203),w=r.n(x),_=r(208),E=r.n(_),j=(r(210),function(e){function t(t){var r;return(r=e.call(this,t)||this).guid=t.guid,r.title=t.title,r.permalink=t.permalink,r.date=k()(t.date).format("DD MMMM YYYY"),r.description=t.description,r.col1Width=t.col1Width,r.col2Width=t.col2Width,r.col1Order=t.col1Order,r.col2Order=t.col2Order,r.cover=t.cover,r.body=t.body,r}return h()(t,e),t.prototype.render=function(){return o.a.createElement(E.a,{big:!0,cascade:!0},o.a.createElement("div",{key:this.guid,className:"row no-gutters project-item portfolio-item"},o.a.createElement("div",{className:f()("",this.col1Width,this.col1Order)},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement(v.a,{fluid:this.cover.childImageSharp.fluid})),o.a.createElement("div",{className:"mt-3"},o.a.createElement("span",{className:"h6 title guid"},this.guid),o.a.createElement("h3",{className:"h4 headline text-uppercase"},o.a.createElement(a.a,{to:this.permalink},this.title)))),o.a.createElement("div",{className:f()("",this.col2Width,this.col2Order)},o.a.createElement("div",{className:"lead pt-lg-5"},o.a.createElement(w.a,null,this.body)))))},t}(o.a.Component)),O=function(){var e=m.data;return o.a.createElement("div",{className:"portfolio-list row"},e.allMdx.edges.map(function(e){return o.a.createElement(j,{title:e.node.frontmatter.title,guid:e.node.frontmatter.guid,color:e.node.frontmatter.color,permalink:e.node.fields.slug,size:e.node.frontmatter.guid,description:e.node.frontmatter.description,col1Width:e.node.frontmatter.col1Width,col2Width:e.node.frontmatter.col2Width,col1Order:e.node.frontmatter.col1Order,col2Order:e.node.frontmatter.col2Order,body:e.node.code.body,cover:e.node.frontmatter.image})}))};t.default=function(){return o.a.createElement(c.a,{defaultStyle:{transition:"right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",right:"100%",position:"absolute",width:"100%"},transitionStyles:{entering:{right:"0%"},entered:{right:"0%"},exiting:{right:"100%"}},transitionTime:900},o.a.createElement(i.a,null,o.a.createElement(l.a,null,o.a.createElement("div",{className:"row no-gutters mb-5"},o.a.createElement("div",{className:"col-md-6 col-lg-4 text-md-left"},o.a.createElement("h1",{className:"xl headline text-uppercase text-transparent green-stroke"},"Selected Works"))),o.a.createElement(O,null),o.a.createElement("div",{className:"text-center mb-5"},o.a.createElement("h2",{className:"xl headline text-uppercase text-transparent green-stroke text-center mb-1"},"Projects"),o.a.createElement("p",{className:"lead"},"Personal projects I'm currently working on")),o.a.createElement(u,null))))}},169:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(3),i=r.n(a),s=r(39),c=r.n(s);r.d(t,"a",function(){return c.a});r(170),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},170:function(e,t,r){var n;e.exports=(n=r(171))&&n.default||n},171:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r.n(n),a=r(0),i=r.n(a),s=r(3),c=r.n(s),l=r(60),d=r(2),u=function(e){var t=e.location,r=d.default.getResourcesForPathnameSync(t.pathname);return r?i.a.createElement(l.a,o()({location:t,pageResources:r},r.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},172:function(e,t,r){"use strict";var n=r(7),o=r.n(n),a=r(0),i=r.n(a),s=r(169),c=function(){return i.a.createElement("div",{id:"site-menu",role:"navigation"},i.a.createElement("div",{className:"px-3 px-md-5"},i.a.createElement("nav",{className:"site-nav"},i.a.createElement("ul",{className:"sections-nav list-unstyled text-left pt-3 pt-md-5 pb-md-5"},i.a.createElement("li",{className:"home-url menu-item active"},i.a.createElement(s.a,{className:"site-nav-home",to:"/"},"Home")),i.a.createElement("li",{className:"about-url menu-item"},i.a.createElement(s.a,{className:"site-nav-about",to:"/about/"},"About")),i.a.createElement("li",{className:"portfolio-url menu-item"},i.a.createElement(s.a,{className:"site-nav-portfolio",to:"/portfolio/"},"Portfolio")),i.a.createElement("li",{className:"contact-url menu-item"},i.a.createElement(s.a,{className:"site-nav-contact",to:"/contact/"},"Contact"))))))},l=(r(176),function(e){function t(t){var r;return(r=e.call(this,t)||this).toggleHamburger=function(){r.setState({active:!r.state.active},function(){r.state.active?r.setState({navBarActiveClass:"nav-is-active"}):r.setState({navBarActiveClass:""})})},r.state={active:!1,navBarActiveClass:""},r}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props;t.children,t.data;return i.a.createElement("div",{id:"page-wrap",className:" "+this.state.navBarActiveClass},i.a.createElement("div",{className:"toggle-wrapper"},i.a.createElement("button",{className:"button navbar-toggler "+this.state.navBarActiveClass,"data-target":"page-wrap",onClick:function(){return e.toggleHamburger()}},i.a.createElement("span",{className:"icon-bar top-bar"}),i.a.createElement("span",{className:"icon-bar middle-bar"}),i.a.createElement("span",{className:"icon-bar middle-bar"}),i.a.createElement("span",{className:"icon-bar bottom-bar"}),i.a.createElement("span",{className:"sr-only"},"Toggle navigation"))),i.a.createElement(c,null),i.a.createElement("div",{id:"page"},i.a.createElement("div",{className:"container site-content"},this.props.children)))},t}(i.a.Component));t.a=l},174:function(e,t,r){"use strict";var n=r(7),o=r.n(n),a=r(0),i=r.n(a),s=r(169),c=r(180),l=r(175),d=r.n(l),u=c.a.easeOut,m=(d.a,c.c,c.a,c.b,function(e){function t(t){var r;return(r=e.call(this,t)||this).myElement=null,r.myTween=null,r}o()(t,e);var r=t.prototype;return r.componentDidMount=function(){c.c.set(this.svgAnimated,{visibility:"visible"}),new c.b({repeat:0,yoyo:!1}).staggerFrom(".st0",3.75,{drawSVG:"50% 50%",ease:u},3.2)},r.render=function(){var e=this;return i.a.createElement(s.a,{to:"/"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 683 77"},i.a.createElement("path",{ref:function(t){return e.svgAnimated=t},className:"st0",fill:"none",d:"M37.24 76.32C12.49 76.32.94 63.01.94 44.86V1.63h22.55v42.46c0 7.04 4.62 12.65 13.75 12.65 9.02 0 13.64-5.61 13.64-12.65V1.63h22.55v43.12c0 18.26-11.44 31.57-36.19 31.57zM159.597 75h-21.34l-27.06-37.18V75h-22.22V1.63h22.88l25.52 34.76V1.63h22.22V75zm48.436 0h-32.89V1.63h32.78c23.1 0 40.26 13.2 40.26 36.63 0 23.43-17.16 36.74-40.15 36.74zm-.11-19.36c11.11 0 17.71-8.14 17.71-17.38 0-9.9-5.72-17.27-17.6-17.27h-10.67v34.65h10.56zM315.43 75h-55.66V1.63h55.66v19.36h-33.44v7.26h32.67v19.36h-32.67v8.03h33.44V75zm79.237 0h-25.3l-10.12-23.1h-8.03V75h-22.22V1.63h39.16c17.16 0 26.4 11.44 26.4 25.19 0 12.65-7.37 19.36-13.2 22.22L394.667 75zm-29.92-42.46c3.74 0 7.26-1.76 7.26-5.83 0-3.96-3.52-5.72-7.26-5.72h-13.53v11.55h13.53zM457.293 75h-50.05V1.63h22.22v54.01h27.83V75zm46.567 1.32c-22.66 0-40.15-15.4-40.15-37.95 0-22.55 17.49-37.95 40.15-37.95s40.15 15.4 40.15 37.95c0 22.55-17.49 37.95-40.15 37.95zm0-19.58c10.67 0 17.6-8.14 17.6-18.37S514.53 20 503.86 20c-10.67 0-17.6 8.14-17.6 18.37s6.93 18.37 17.6 18.37zm80.227 19.58c-15.62 0-26.29-4.62-34.1-11.66l11.55-16.5c5.5 5.28 13.75 9.46 23.65 9.46 4.18 0 8.14-1.1 8.14-3.96 0-7.04-40.92.11-40.92-28.82 0-12.43 10.34-24.31 30.47-24.31 11.99 0 22.77 3.41 31.13 10.23l-11.88 15.73c-6.38-4.84-14.63-7.26-21.56-7.26-4.4 0-5.61 1.43-5.61 3.3 0 6.93 40.81.99 40.81 28.27 0 16.17-11.99 25.52-31.68 25.52zM662.443 75h-22.22V20.99h-19.69V1.63h61.49v19.36h-19.58V75z"})))},t}(i.a.Component));t.a=m},175:function(e,t,r){(function(n){var o,a,i;r(84),r(82);var s=e.exports&&void 0!==n?n:this||window;(s._gsQueue||(s._gsQueue=[])).push(function(){"use strict";var e,t=s.document,r="undefined"!=typeof window?window:t.defaultView||{getComputedStyle:function(){}},n=function(e){return r.getComputedStyle(e)},o=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,a=-1!==((s.navigator||{}).userAgent||"").indexOf("Edge"),i={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]};function c(e,t,r,n,o,a){return r=(parseFloat(r||0)-parseFloat(e||0))*o,n=(parseFloat(n||0)-parseFloat(t||0))*a,Math.sqrt(r*r+n*n)}function l(e){return"string"!=typeof e&&e.nodeType||(e=s.TweenLite.selector(e)).length&&(e=e[0]),e}function d(e){if(!e)return 0;var t,r,n,a,s,d,u,m=(e=l(e)).tagName.toLowerCase(),p=1,h=1;"non-scaling-stroke"===e.getAttribute("vector-effect")&&(h=e.getScreenCTM(),p=Math.sqrt(h.a*h.a+h.b*h.b),h=Math.sqrt(h.d*h.d+h.c*h.c));try{r=e.getBBox()}catch(g){console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).")}if(r&&(r.width||r.height)||!i[m]||(r={width:parseFloat(e.getAttribute(i[m][0])),height:parseFloat(e.getAttribute(i[m][1]))},"rect"!==m&&"line"!==m&&(r.width*=2,r.height*=2),"line"===m&&(r.x=parseFloat(e.getAttribute("x1")),r.y=parseFloat(e.getAttribute("y1")),r.width=Math.abs(r.width-r.x),r.height=Math.abs(r.height-r.y))),"path"===m)a=e.style.strokeDasharray,e.style.strokeDasharray="none",t=e.getTotalLength()||0,p!==h&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(p+h)/2,e.style.strokeDasharray=a;else if("rect"===m)t=2*r.width*p+2*r.height*h;else if("line"===m)t=c(r.x,r.y,r.x+r.width,r.y+r.height,p,h);else if("polyline"===m||"polygon"===m)for(n=e.getAttribute("points").match(o)||[],"polygon"===m&&n.push(n[0],n[1]),t=0,s=2;s<n.length;s+=2)t+=c(n[s-2],n[s-1],n[s],n[s+1],p,h)||0;else"circle"!==m&&"ellipse"!==m||(d=r.width/2*p,u=r.height/2*h,t=Math.PI*(3*(d+u)-Math.sqrt((3*d+u)*(d+3*u))));return t||0}function u(e,t){if(!e)return[0,0];e=l(e),t=t||d(e)+1;var r=n(e),o=r.strokeDasharray||"",a=parseFloat(r.strokeDashoffset),i=o.indexOf(",");return i<0&&(i=o.indexOf(" ")),(o=i<0?t:parseFloat(o.substr(0,i))||1e-5)>t&&(o=t),[Math.max(0,-a),Math.max(0,o-a)]}(e=s._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.2.1",global:!0,overwriteProps:["drawSVG"],init:function(e,t,r,o){if(!e.getBBox)return!1;var i,s,c,l,m=d(e)+1;return this._style=e.style,this._target=e,"function"==typeof t&&(t=t(o,e)),!0===t||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",s=function(e,t,r){var n,o,a=e.indexOf(" ");return-1===a?(n=void 0!==r?r+"":e,o=e):(n=e.substr(0,a),o=e.substr(a+1)),(n=-1!==n.indexOf("%")?parseFloat(n)/100*t:parseFloat(n))>(o=-1!==o.indexOf("%")?parseFloat(o)/100*t:parseFloat(o))?[o,n]:[n,o]}(t,m,(i=u(e,m))[0]),this._length=m+10,0===i[0]&&0===s[0]?(c=Math.max(1e-5,s[1]-m),this._dash=m+c,this._offset=m-i[1]+c,this._offsetPT=this._addTween(this,"_offset",this._offset,m-s[1]+c,"drawSVG")):(this._dash=i[1]-i[0]||1e-6,this._offset=-i[0],this._dashPT=this._addTween(this,"_dash",this._dash,s[1]-s[0]||1e-5,"drawSVG"),this._offsetPT=this._addTween(this,"_offset",this._offset,-s[0],"drawSVG")),a&&(l=n(e)).strokeLinecap!==l.strokeLinejoin&&(s=parseFloat(l.strokeMiterlimit),this._addTween(e.style,"strokeMiterlimit",s,s+1e-4,"strokeMiterlimit")),this._live="non-scaling-stroke"===e.getAttribute("vector-effect")||-1!==(t+"").indexOf("live"),!0},set:function(e){if(this._firstPT){if(this._live){var t,r=d(this._target)+11;r!==this._length&&(t=r/this._length,this._length=r,this._offsetPT.s*=t,this._offsetPT.c*=t,this._dashPT?(this._dashPT.s*=t,this._dashPT.c*=t):this._dash*=t)}this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,this._style.strokeDasharray=1===e||0===e?this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._dash+"px,"+this._length+"px"}}})).getLength=d,e.getPosition=u}),s._gsDefine&&s._gsQueue.pop()(),function(n){"use strict";var c=function(){return(s.GreenSockGlobals||s).DrawSVGPlugin};e.exports?(r(173),e.exports=c()):(a=[r(173)],void 0===(i="function"==typeof(o=c)?o.apply(t,a):o)||(e.exports=i))}()}).call(this,r(40))},177:function(e){e.exports={data:{site:{buildTime:"24/05/2019"}}}},178:function(e,t,r){"use strict";var n=r(7),o=r.n(n),a=r(0),i=r.n(a),s=r(174),c=r(177),l=r(179),d=r(181),u=function(){return i.a.createElement("ul",{className:"list-social list-inline mb-1"},i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{href:"http://twitter.com/underlost"},i.a.createElement(l.a,{icon:d.c,fixedWidth:!0,size:"lg"}),i.a.createElement("span",{className:"sr-only"},"Twitter"))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{href:"http://github.com/underlost"},i.a.createElement(l.a,{icon:d.a,fixedWidth:!0,size:"lg"}),i.a.createElement("span",{className:"sr-only"},"Github"))),i.a.createElement("li",{className:"list-inline-item"},i.a.createElement("a",{href:"http://instagram.com/underlost/"},i.a.createElement(l.a,{icon:d.b,fixedWidth:!0,size:"lg"}),i.a.createElement("span",{className:"sr-only"},"Instagram"))))},m=function(){var e=c.data;return i.a.createElement("footer",{className:"site-footer my-4 mt-md-5"},i.a.createElement(u,null),i.a.createElement("small",{className:"copyright"},"Copyright © Tyler Rilling 2002–2019. Site last updated:"," ",i.a.createElement("a",{href:"https://github.com/underlost/underlost.net/"},e.site.buildTime),"."))},p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props;e.children,e.data;return i.a.createElement("div",null,i.a.createElement("header",{className:"site-header site-header-sm mt-5"},i.a.createElement(s.a,null)),i.a.createElement("main",{className:"site-main"},i.a.createElement("div",{className:"mx-auto mt-3 mt-md-5"},i.a.createElement("article",null,i.a.createElement("div",{className:"site-content"},this.props.children)),i.a.createElement(m,null))))},t}(i.a.Component);t.a=p},198:function(e){e.exports={data:{allMdx:{edges:[{node:{fields:{slug:"/projects/alifewellplayed/"},frontmatter:{color:"952067",guid:"901",title:"A Life Well Played",size:"col-md-4",description:"Just your typical blog"}}},{node:{fields:{slug:"//portfolio/gamehackers/"},frontmatter:{color:"952067",guid:"201",title:"Gamehackers.net",size:"col-md-4",description:"A website"}}},{node:{fields:{slug:"/projects/jadedgamer/"},frontmatter:{color:"952067",guid:"901",title:"Jaded Gamer",size:"col-md-4",description:"A video game news aggregator"}}},{node:{fields:{slug:"/projects/tyler-camera/"},frontmatter:{color:"952067",guid:"901",title:"Tyler.Camera",size:"col-md-4",description:"A photo blog of sorts."}}},{node:{fields:{slug:"//portfolio/gmachina/"},frontmatter:{color:"952067",guid:null,title:"gMachina",size:"col-md-4",description:"A REST based API game backbone"}}},{node:{fields:{slug:"/projects/magnolia/"},frontmatter:{color:"952067",guid:"901",title:"Magnolia",size:"col-md-4",description:"A video game of sorts."}}}]}}}},199:function(e){e.exports={data:{allMdx:{edges:[{node:{code:{body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "guid": "304",\n  "slug": "314dc",\n  "permalink": "portfolio/314dc",\n  "title": "314DC",\n  "description": "Food Halls That Work",\n  "color": "EF4900",\n  "size": "col-md-12",\n  "image": "./314dc_cover.jpg",\n  "date": "2016-12-29",\n  "col1Width": "col-md-5",\n  "col2Width": "col-md-5 offset-lg-1 mt-5",\n  "col1Order": "order-1",\n  "col2Order": "order-2"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "314DC provides various consulting and project management services. Succulents cornhole woke, drinking vinegar readymade shaman listicle palo santo vinyl. Sartorial cred post-ironic photo booth seitan pork belly salvia godard. Shaman DIY disrupt austin quinoa williamsburg aesthetic pug. Try-hard VHS snackwave direct trade kinfolk kogi raclette."));\n}\nMDXContent.isMDXComponent = true;'},fields:{slug:"/portfolio/314dc"},frontmatter:{color:"EF4900",guid:"304",title:"314DC",slug:"314dc",permalink:"portfolio/314dc",size:"col-md-12",description:"Food Halls That Work",col1Width:"col-md-5",col2Width:"col-md-5 offset-lg-1 mt-5",col1Order:"order-1",col2Order:"order-2",image:{childImageSharp:{fluid:{src:"/static/aff377ea3ad32d53565085720f8e5a12/032d2/314dc_cover.jpg"}}}}}},{node:{code:{body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "guid": "302",\n  "title": "Watson Adventures",\n  "slug": "watson-adventures",\n  "permalink": "/projects/watson-adventures",\n  "description": "Scavenger Hunts & Team-Building Activities.",\n  "color": "AE3934",\n  "size": "col-md-6",\n  "image": "./314dc_cover.jpg",\n  "date": "2018-12-15",\n  "keywords": "WordPress, ReactJS, Gatsby",\n  "col1Width": "col-md-5 offset-lg-1",\n  "col2Width": "col-md-6",\n  "col1Order": "order-lg-2",\n  "col2Order": "order-lg-1"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "Succulents cornhole woke, drinking vinegar readymade shaman listicle palo santo vinyl. Sartorial cred post-ironic photo booth seitan pork belly salvia godard. Shaman DIY disrupt austin quinoa williamsburg aesthetic pug. Try-hard VHS snackwave direct trade kinfolk kogi raclette."), mdx("p", null, "Pop-up drinking vinegar hexagon, kogi sriracha roof party yuccie ramps brunch iPhone art party. Vape 8-bit twee knausgaard. Kale chips authentic tofu green juice. Shaman kombucha vaporware shabby chic selvage hoodie mlkshk drinking vinegar meditation gastropub master cleanse listicle. Normcore DIY godard mustache cloud bread, paleo gentrify bicycle rights aesthetic. Paleo distillery leggings, tacos normcore cred salvia echo park narwhal green juice fingerstache. Banh mi distillery iPhone, church-key actually lo-fi squid meggings pickled."));\n}\nMDXContent.isMDXComponent = true;'},fields:{slug:"//projects/watson-adventures"},frontmatter:{color:"AE3934",guid:"302",title:"Watson Adventures",slug:"watson-adventures",permalink:"/projects/watson-adventures",size:"col-md-6",description:"Scavenger Hunts & Team-Building Activities.",col1Width:"col-md-5 offset-lg-1",col2Width:"col-md-6",col1Order:"order-lg-2",col2Order:"order-lg-1",image:{childImageSharp:{fluid:{src:"/static/aff377ea3ad32d53565085720f8e5a12/032d2/314dc_cover.jpg"}}}}}},{node:{code:{body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "guid": "203",\n  "slug": "wonderstream",\n  "title": "Wonderstream",\n  "description": "Livestreaming Made Easy.",\n  "color": "EF4900",\n  "size": "col-md-6",\n  "image": "./314dc_cover.jpg",\n  "date": "2017-09-01",\n  "permalink": "projects/wonderstream",\n  "keywords": "Livestreaming, bitcoin, wowza, paas, django, python, RESTful API",\n  "col1Width": "col-md-12",\n  "col2Width": "col-md-12",\n  "col1Order": "order-1",\n  "col2Order": "order-2"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "Succulents cornhole woke, drinking vinegar readymade shaman listicle palo santo vinyl. Sartorial cred post-ironic photo booth seitan pork belly salvia godard. Shaman DIY disrupt austin quinoa williamsburg aesthetic pug. Try-hard VHS snackwave direct trade kinfolk kogi raclette."), mdx("p", null, "Pop-up drinking vinegar hexagon, kogi sriracha roof party yuccie ramps brunch iPhone art party. Vape 8-bit twee knausgaard. Kale chips authentic tofu green juice. Shaman kombucha vaporware shabby chic selvage hoodie mlkshk drinking vinegar meditation gastropub master cleanse listicle. Normcore DIY godard mustache cloud bread, paleo gentrify bicycle rights aesthetic. Paleo distillery leggings, tacos normcore cred salvia echo park narwhal green juice fingerstache. Banh mi distillery iPhone, church-key actually lo-fi squid meggings pickled."));\n}\nMDXContent.isMDXComponent = true;'},fields:{slug:"/projects/wonderstream"},frontmatter:{color:"EF4900",guid:"203",title:"Wonderstream",slug:"wonderstream",permalink:"projects/wonderstream",size:"col-md-6",description:"Livestreaming Made Easy.",col1Width:"col-md-12",col2Width:"col-md-12",col1Order:"order-1",col2Order:"order-2",image:{childImageSharp:{fluid:{src:"/static/aff377ea3ad32d53565085720f8e5a12/032d2/314dc_cover.jpg"}}}}}},{node:{code:{body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "color": "EF4900",\n  "guid": "201",\n  "title": "International Living Future Institute",\n  "description": "A Drupal to WordPress migration & custom theme",\n  "date": "2016-12-29",\n  "size": "col-md-6",\n  "image": "./ilfi_cover.jpg",\n  "slug": "ilfi",\n  "permalink": "/projects/living-future",\n  "col1Width": "col-md-5 offset-lg-1",\n  "col2Width": "col-md-6",\n  "col1Order": "order-lg-2",\n  "col2Order": "order-lg-1"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "The International Living Future Institute (ILFI) is a nonprofit organization that aims to build an ecologically-minded, restorative world for all people. Fighting for social and environmental justice, ILFI looks to battle climate change and rid urban environments of dependency of fossil fuels."), mdx("p", null, "Partnering with Seattle based design firm, Wildern, we built a custom WordPress theme from the ground up that allowed for incredible customization and page building techniques that would allow ILFI to create beautiful pages and show case various case studies for years to come."));\n}\nMDXContent.isMDXComponent = true;'},fields:{slug:"//projects/living-future"},frontmatter:{color:"EF4900",guid:"201",title:"International Living Future Institute",slug:"ilfi",permalink:"/projects/living-future",size:"col-md-6",description:"A Drupal to WordPress migration & custom theme",col1Width:"col-md-5 offset-lg-1",col2Width:"col-md-6",col1Order:"order-lg-2",col2Order:"order-lg-1",image:{childImageSharp:{fluid:{src:"/static/df7de1d545cd4eae27435b19190f88de/032d2/ilfi_cover.jpg"}}}}}},{node:{code:{body:'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "guid": "102",\n  "title": "WineCountry",\n  "slug": "winecountry",\n  "permalink": "/projects/winecountry",\n  "description": "Wine Country site network",\n  "color": "EF4900",\n  "size": "col-md-4",\n  "image": "./314dc_cover.jpg",\n  "date": "2016-12-29",\n  "keywords": "wordpress, visual composer",\n  "col1Width": "col-md-5",\n  "col2Width": "col-md-5 offset-lg-2",\n  "col1Order": "order-1",\n  "col2Order": "order-2"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "Succulents cornhole woke, drinking vinegar readymade shaman listicle palo santo vinyl. Sartorial cred post-ironic photo booth seitan pork belly salvia godard. Shaman DIY disrupt austin quinoa williamsburg aesthetic pug. Try-hard VHS snackwave direct trade kinfolk kogi raclette."), mdx("p", null, "Pop-up drinking vinegar hexagon, kogi sriracha roof party yuccie ramps brunch iPhone art party. Vape 8-bit twee knausgaard. Kale chips authentic tofu green juice. Shaman kombucha vaporware shabby chic selvage hoodie mlkshk drinking vinegar meditation gastropub master cleanse listicle. Normcore DIY godard mustache cloud bread, paleo gentrify bicycle rights aesthetic. Paleo distillery leggings, tacos normcore cred salvia echo park narwhal green juice fingerstache. Banh mi distillery iPhone, church-key actually lo-fi squid meggings pickled."));\n}\nMDXContent.isMDXComponent = true;'},fields:{slug:"//projects/winecountry"},frontmatter:{color:"EF4900",guid:"102",title:"WineCountry",slug:"winecountry",permalink:"/projects/winecountry",size:"col-md-4",description:"Wine Country site network",col1Width:"col-md-5",col2Width:"col-md-5 offset-lg-2",col1Order:"order-1",col2Order:"order-2",image:{childImageSharp:{fluid:{src:"/static/aff377ea3ad32d53565085720f8e5a12/032d2/314dc_cover.jpg"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-78ccf75b8c25157f89ee.js.map