(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(169),r=a(85),o=a.n(r),l=a(189),c=a(3),h=a.n(c),m=a(190),d=a.n(m);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,r=e.title,o=l.data.site,c=t||o.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:h.a.string,lang:h.a.string,meta:h.a.arrayOf(h.a.object),keywords:h.a.arrayOf(h.a.string),title:h.a.string.isRequired};var p=u,f=a(196),g=a(177),v=a(172),y=a(173);a.d(t,"query",function(){return w});t.default=function(e){e.data;return i.a.createElement(o.a,{defaultStyle:{transition:"right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",right:"100%",position:"absolute",width:"100%"},transitionStyles:{entering:{right:"0%"},entered:{right:"0%"},exiting:{right:"100%"}},transitionTime:900},i.a.createElement(v.a,null,i.a.createElement(p,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("main",{className:"site-main index d-flex h-100 p-3 mx-auto flex-column mt-5"},i.a.createElement("header",{className:"site-header"},i.a.createElement("div",{className:"svg-container"},i.a.createElement(y.a,null)),i.a.createElement("div",{className:"row no-gutters mt-4 fadeRight"},i.a.createElement("p",{className:"lead col-md-8"},"Underlost is Tyler Rilling, a Python devloper and UX designer living in Seattle. They not an Undertale game.")),i.a.createElement("div",{className:"row no-gutters mt-2 mb-5 fadeLeft"},i.a.createElement(s.a,{className:"btn btn-default px-5 py-2",to:"/about/"},"Learn More ",i.a.createElement(g.a,{icon:f.a,fixedWidth:!0,size:"lg"})))))))};var w="1097489062"},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(3),r=a.n(s),o=a(40),l=a.n(o);a.d(t,"a",function(){return l.a});a(170),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},170:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},171:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(0),r=a.n(s),o=a(3),l=a.n(o),c=a(62),h=a(2),m=function(e){var t=e.location,a=h.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,i()({location:t,pageResources:a},a.json)):null};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},172:function(e,t,a){"use strict";var n=a(7),i=a.n(n),s=a(0),r=a.n(s),o=a(169),l=function(){return r.a.createElement("div",{id:"site-menu",role:"navigation"},r.a.createElement("div",{className:"px-3 px-md-5"},r.a.createElement("nav",{className:"site-nav"},r.a.createElement("ul",{className:"sections-nav list-unstyled text-left pt-3 pt-md-5 pb-md-5"},r.a.createElement("li",{className:"home-url menu-item active"},r.a.createElement(o.a,{className:"site-nav-home",to:"/"},"Home")),r.a.createElement("li",{className:"about-url menu-item"},r.a.createElement(o.a,{className:"site-nav-about",to:"/about/"},"About")),r.a.createElement("li",{className:"portfolio-url menu-item"},r.a.createElement(o.a,{className:"site-nav-portfolio",to:"/portfolio/"},"Portfolio")),r.a.createElement("li",{className:"contact-url menu-item"},r.a.createElement(o.a,{className:"site-nav-contact",to:"/contact/"},"Contact"))))))},c=(a(174),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"nav-is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props;t.children,t.data;return r.a.createElement("div",{id:"page-wrap",className:" "+this.state.navBarActiveClass},r.a.createElement("div",{className:"toggle-wrapper"},r.a.createElement("button",{className:"button navbar-toggler "+this.state.navBarActiveClass,"data-target":"page-wrap",onClick:function(){return e.toggleHamburger()}},r.a.createElement("span",{className:"icon-bar top-bar"}),r.a.createElement("span",{className:"icon-bar middle-bar"}),r.a.createElement("span",{className:"icon-bar middle-bar"}),r.a.createElement("span",{className:"icon-bar bottom-bar"}),r.a.createElement("span",{className:"sr-only"},"Toggle navigation"))),r.a.createElement(l,null),r.a.createElement("div",{id:"page"},r.a.createElement("div",{className:"container site-content"},this.props.children)))},t}(r.a.Component));t.a=c},173:function(e,t,a){"use strict";var n,i=a(7),s=a.n(i),r=a(0),o=a.n(r),l=a(169),c=a(178),h=(a(84),a(168)),m=h.e.document,d="undefined"!=typeof window?window:m.defaultView||{getComputedStyle:function(){}},u=function(e){return d.getComputedStyle(e)},p=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,f=-1!==((h.e.navigator||{}).userAgent||"").indexOf("Edge"),g={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]};function v(e,t,a,n,i,s){return a=(parseFloat(a||0)-parseFloat(e||0))*i,n=(parseFloat(n||0)-parseFloat(t||0))*s,Math.sqrt(a*a+n*n)}function y(e){return"string"!=typeof e&&e.nodeType||(e=h.e.TweenLite.selector(e)).length&&(e=e[0]),e}function w(e){if(!e)return 0;var t,a,n,i,s,r,o,l=(e=y(e)).tagName.toLowerCase(),c=1,h=1;"non-scaling-stroke"===e.getAttribute("vector-effect")&&(h=e.getScreenCTM(),c=Math.sqrt(h.a*h.a+h.b*h.b),h=Math.sqrt(h.d*h.d+h.c*h.c));try{a=e.getBBox()}catch(m){console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).")}if(a&&(a.width||a.height)||!g[l]||(a={width:parseFloat(e.getAttribute(g[l][0])),height:parseFloat(e.getAttribute(g[l][1]))},"rect"!==l&&"line"!==l&&(a.width*=2,a.height*=2),"line"===l&&(a.x=parseFloat(e.getAttribute("x1")),a.y=parseFloat(e.getAttribute("y1")),a.width=Math.abs(a.width-a.x),a.height=Math.abs(a.height-a.y))),"path"===l)i=e.style.strokeDasharray,e.style.strokeDasharray="none",t=e.getTotalLength()||0,c!==h&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(c+h)/2,e.style.strokeDasharray=i;else if("rect"===l)t=2*a.width*c+2*a.height*h;else if("line"===l)t=v(a.x,a.y,a.x+a.width,a.y+a.height,c,h);else if("polyline"===l||"polygon"===l)for(n=e.getAttribute("points").match(p)||[],"polygon"===l&&n.push(n[0],n[1]),t=0,s=2;s<n.length;s+=2)t+=v(n[s-2],n[s-1],n[s],n[s+1],c,h)||0;else"circle"!==l&&"ellipse"!==l||(r=a.width/2*c,o=a.height/2*h,t=Math.PI*(3*(r+o)-Math.sqrt((3*r+o)*(r+3*o))));return t||0}function b(e,t){if(!e)return[0,0];e=y(e),t=t||w(e)+1;var a=u(e),n=a.strokeDasharray||"",i=parseFloat(a.strokeDashoffset),s=n.indexOf(",");return s<0&&(s=n.indexOf(" ")),(n=s<0?t:parseFloat(n.substr(0,s))||1e-5)>t&&(n=t),[Math.max(0,-i),Math.max(0,n-i)]}(n=h.e._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.2.1",global:!0,overwriteProps:["drawSVG"],init:function(e,t,a,n){if(!e.getBBox)return!1;var i,s,r,o,l=w(e)+1;return this._style=e.style,this._target=e,"function"==typeof t&&(t=t(n,e)),!0===t||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",s=function(e,t,a){var n,i,s=e.indexOf(" ");return-1===s?(n=void 0!==a?a+"":e,i=e):(n=e.substr(0,s),i=e.substr(s+1)),(n=-1!==n.indexOf("%")?parseFloat(n)/100*t:parseFloat(n))>(i=-1!==i.indexOf("%")?parseFloat(i)/100*t:parseFloat(i))?[i,n]:[n,i]}(t,l,(i=b(e,l))[0]),this._length=l+10,0===i[0]&&0===s[0]?(r=Math.max(1e-5,s[1]-l),this._dash=l+r,this._offset=l-i[1]+r,this._offsetPT=this._addTween(this,"_offset",this._offset,l-s[1]+r,"drawSVG")):(this._dash=i[1]-i[0]||1e-6,this._offset=-i[0],this._dashPT=this._addTween(this,"_dash",this._dash,s[1]-s[0]||1e-5,"drawSVG"),this._offsetPT=this._addTween(this,"_offset",this._offset,-s[0],"drawSVG")),f&&(o=u(e)).strokeLinecap!==o.strokeLinejoin&&(s=parseFloat(o.strokeMiterlimit),this._addTween(e.style,"strokeMiterlimit",s,s+1e-4,"strokeMiterlimit")),this._live="non-scaling-stroke"===e.getAttribute("vector-effect")||-1!==(t+"").indexOf("live"),!0},set:function(e){if(this._firstPT){if(this._live){var t,a=w(this._target)+11;a!==this._length&&(t=a/this._length,this._length=a,this._offsetPT.s*=t,this._offsetPT.c*=t,this._dashPT?(this._dashPT.s*=t,this._dashPT.c*=t):this._dash*=t)}this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,this._style.strokeDasharray=1===e||0===e?this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._dash+"px,"+this._length+"px"}}})).getLength=w,n.getPosition=b;var _=c.a.easeOut,E=function(e){function t(t){var a;return(a=e.call(this,t)||this).myElement=null,a.myTween=null,a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){c.c.set(this.svgAnimated,{visibility:"visible"}),new c.b({repeat:0,yoyo:!1}).staggerFrom(".st0",3.75,{drawSVG:"50% 50%",ease:_},3.2)},a.render=function(){var e=this;return o.a.createElement(l.a,{to:"/"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 683 77"},o.a.createElement("path",{ref:function(t){return e.svgAnimated=t},className:"st0",fill:"none",d:"M37.24 76.32C12.49 76.32.94 63.01.94 44.86V1.63h22.55v42.46c0 7.04 4.62 12.65 13.75 12.65 9.02 0 13.64-5.61 13.64-12.65V1.63h22.55v43.12c0 18.26-11.44 31.57-36.19 31.57zM159.597 75h-21.34l-27.06-37.18V75h-22.22V1.63h22.88l25.52 34.76V1.63h22.22V75zm48.436 0h-32.89V1.63h32.78c23.1 0 40.26 13.2 40.26 36.63 0 23.43-17.16 36.74-40.15 36.74zm-.11-19.36c11.11 0 17.71-8.14 17.71-17.38 0-9.9-5.72-17.27-17.6-17.27h-10.67v34.65h10.56zM315.43 75h-55.66V1.63h55.66v19.36h-33.44v7.26h32.67v19.36h-32.67v8.03h33.44V75zm79.237 0h-25.3l-10.12-23.1h-8.03V75h-22.22V1.63h39.16c17.16 0 26.4 11.44 26.4 25.19 0 12.65-7.37 19.36-13.2 22.22L394.667 75zm-29.92-42.46c3.74 0 7.26-1.76 7.26-5.83 0-3.96-3.52-5.72-7.26-5.72h-13.53v11.55h13.53zM457.293 75h-50.05V1.63h22.22v54.01h27.83V75zm46.567 1.32c-22.66 0-40.15-15.4-40.15-37.95 0-22.55 17.49-37.95 40.15-37.95s40.15 15.4 40.15 37.95c0 22.55-17.49 37.95-40.15 37.95zm0-19.58c10.67 0 17.6-8.14 17.6-18.37S514.53 20 503.86 20c-10.67 0-17.6 8.14-17.6 18.37s6.93 18.37 17.6 18.37zm80.227 19.58c-15.62 0-26.29-4.62-34.1-11.66l11.55-16.5c5.5 5.28 13.75 9.46 23.65 9.46 4.18 0 8.14-1.1 8.14-3.96 0-7.04-40.92.11-40.92-28.82 0-12.43 10.34-24.31 30.47-24.31 11.99 0 22.77 3.41 31.13 10.23l-11.88 15.73c-6.38-4.84-14.63-7.26-21.56-7.26-4.4 0-5.61 1.43-5.61 3.3 0 6.93 40.81.99 40.81 28.27 0 16.17-11.99 25.52-31.68 25.52zM662.443 75h-22.22V20.99h-19.69V1.63h61.49v19.36h-19.58V75z"})))},t}(o.a.Component);t.a=E},189:function(e){e.exports={data:{site:{siteMetadata:{title:"underlost",description:"This is a description",author:"Tyler Rilling"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-97529bbb98cd79bb4b17.js.map