(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(172),l=a(178),i=a(85),o=a.n(i);t.default=function(){return s.a.createElement(o.a,{defaultStyle:{transition:"right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",right:"100%",position:"absolute",width:"100%"},transitionStyles:{entering:{right:"0%"},entered:{right:"0%"},exiting:{right:"100%"}},transitionTime:800},s.a.createElement(r.a,null,s.a.createElement(l.a,null,s.a.createElement("section",{id:"about",className:"section content-section"},s.a.createElement("div",{className:"section-header sr-only"},s.a.createElement("h3",{className:"h6 title text-green"},"About")),s.a.createElement("div",{className:"section-content row no-gutters px-5 py-5"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("article",{className:"section-article px-5 py-5"},s.a.createElement("div",{className:"fadeRight layout-single-column"},s.a.createElement("h4",{className:"xl text-lowercase headline text-transparent green-stroke"},"Let's Chat!"),s.a.createElement("span",{className:"h4 headline text-uppercase text-pink mb-5 d-block"},"Tyler @ underlost.net")),s.a.createElement("div",{className:"layout-single-column fadeLeft mb-5"},s.a.createElement("p",null,"I will read every email that comes through my inbox, and I will try to reply to all enquiries within 48 hours."),s.a.createElement("p",null,"That said, Im a horrible correspondent. If I don't respond, or if I do so only after an excessive amount of time has passed, please don't take it personally.")),s.a.createElement("div",{className:"fadeRight layout-single-column"},s.a.createElement("h4",{className:"h4 text-uppercase headline text-green"},"Want to work together?"),s.a.createElement("p",null,"I'm always looking for oppertunities to work on narrative-based video game projects. I'm primarily interested in longterm freelance projects and consultant based oppertunities"),s.a.createElement("ul",null,s.a.createElement("li",null,"Unity"),s.a.createElement("li",null,"Unreal"),s.a.createElement("li",null,"Godot game engine"),s.a.createElement("li",null,"HTML5"),s.a.createElement("li",null,"LESS / SCSS / SASS, as well as various CSS frameworks including Bootstrap and Bulma."),s.a.createElement("li",null,"Javascript / jQuery"),s.a.createElement("li",null,"ReactJS"),s.a.createElement("li",null,"Django Web framework"),s.a.createElement("li",null,"Python 2/3"),s.a.createElement("li",null,"PHP"),s.a.createElement("li",null,"WordPress & WooCommerce"),s.a.createElement("li",null,"Heroku / AWS cloud hosting"),s.a.createElement("li",null,"Amazon Lambda")),s.a.createElement("p",null,"Additionally, I currently work full time as a developer at"," ",s.a.createElement("a",{href:"https://www.hellowildern.com/"},"Wildern"),". For any larger web development or design project enqueries, please send an email to"," ",s.a.createElement("a",{href:"mailto:tylerr@hellowildern.com?subject=Hello"},"tylerr@hellowildern.com"),"."),s.a.createElement("p",{className:"lead"},s.a.createElement("a",{href:"mailto:tyler@underlost.net?subject=Hello"},s.a.createElement("span",{class:"hidden-xs"},"What are you waiting for?")," Email me!"))))))))))}},169:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(3),l=a.n(r),i=a(40),o=a.n(i);a.d(t,"a",function(){return o.a});a(170),s.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},170:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},171:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),r=a(0),l=a.n(r),i=a(3),o=a.n(i),c=a(63),m=a(2),h=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(c.a,s()({location:t,pageResources:a},a.json)):null};h.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=h},172:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),l=a.n(r),i=a(169),o=function(){return l.a.createElement("div",{id:"site-menu",role:"navigation"},l.a.createElement("div",{className:"px-3 px-md-5"},l.a.createElement("nav",{className:"site-nav"},l.a.createElement("ul",{className:"sections-nav list-unstyled text-left pt-3 pt-md-5 pb-md-5"},l.a.createElement("li",{className:"home-url menu-item active"},l.a.createElement(i.a,{className:"site-nav-home",to:"/"},"Home")),l.a.createElement("li",{className:"about-url menu-item"},l.a.createElement(i.a,{className:"site-nav-about",to:"/about/"},"About")),l.a.createElement("li",{className:"portfolio-url menu-item"},l.a.createElement(i.a,{className:"site-nav-portfolio",to:"/portfolio/"},"Portfolio")),l.a.createElement("li",{className:"contact-url menu-item"},l.a.createElement(i.a,{className:"site-nav-contact",to:"/contact/"},"Contact"))))))},c=(a(176),function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},function(){a.state.active?a.setState({navBarActiveClass:"nav-is-active"}):a.setState({navBarActiveClass:""})})},a.state={active:!1,navBarActiveClass:""},a}return s()(t,e),t.prototype.render=function(){var e=this,t=this.props;t.children,t.data;return l.a.createElement("div",{id:"page-wrap",className:" "+this.state.navBarActiveClass},l.a.createElement("div",{className:"toggle-wrapper"},l.a.createElement("button",{className:"button navbar-toggler "+this.state.navBarActiveClass,"data-target":"page-wrap",onClick:function(){return e.toggleHamburger()}},l.a.createElement("span",{className:"icon-bar top-bar"}),l.a.createElement("span",{className:"icon-bar middle-bar"}),l.a.createElement("span",{className:"icon-bar middle-bar"}),l.a.createElement("span",{className:"icon-bar bottom-bar"}),l.a.createElement("span",{className:"sr-only"},"Toggle navigation"))),l.a.createElement(o,null),l.a.createElement("div",{id:"page"},l.a.createElement("div",{className:"container site-content"},this.props.children)))},t}(l.a.Component));t.a=c},174:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),l=a.n(r),i=a(169),o=a(180),c=a(175),m=a.n(c),h=o.a.easeOut,u=(m.a,o.c,o.a,o.b,function(e){function t(t){var a;return(a=e.call(this,t)||this).myElement=null,a.myTween=null,a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){o.c.set(this.svgAnimated,{visibility:"visible"}),new o.b({repeat:0,yoyo:!1}).staggerFrom(".st0",3.75,{drawSVG:"50% 50%",ease:h},3.2)},a.render=function(){var e=this;return l.a.createElement(i.a,{to:"/"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 683 77"},l.a.createElement("path",{ref:function(t){return e.svgAnimated=t},className:"st0",fill:"none",d:"M37.24 76.32C12.49 76.32.94 63.01.94 44.86V1.63h22.55v42.46c0 7.04 4.62 12.65 13.75 12.65 9.02 0 13.64-5.61 13.64-12.65V1.63h22.55v43.12c0 18.26-11.44 31.57-36.19 31.57zM159.597 75h-21.34l-27.06-37.18V75h-22.22V1.63h22.88l25.52 34.76V1.63h22.22V75zm48.436 0h-32.89V1.63h32.78c23.1 0 40.26 13.2 40.26 36.63 0 23.43-17.16 36.74-40.15 36.74zm-.11-19.36c11.11 0 17.71-8.14 17.71-17.38 0-9.9-5.72-17.27-17.6-17.27h-10.67v34.65h10.56zM315.43 75h-55.66V1.63h55.66v19.36h-33.44v7.26h32.67v19.36h-32.67v8.03h33.44V75zm79.237 0h-25.3l-10.12-23.1h-8.03V75h-22.22V1.63h39.16c17.16 0 26.4 11.44 26.4 25.19 0 12.65-7.37 19.36-13.2 22.22L394.667 75zm-29.92-42.46c3.74 0 7.26-1.76 7.26-5.83 0-3.96-3.52-5.72-7.26-5.72h-13.53v11.55h13.53zM457.293 75h-50.05V1.63h22.22v54.01h27.83V75zm46.567 1.32c-22.66 0-40.15-15.4-40.15-37.95 0-22.55 17.49-37.95 40.15-37.95s40.15 15.4 40.15 37.95c0 22.55-17.49 37.95-40.15 37.95zm0-19.58c10.67 0 17.6-8.14 17.6-18.37S514.53 20 503.86 20c-10.67 0-17.6 8.14-17.6 18.37s6.93 18.37 17.6 18.37zm80.227 19.58c-15.62 0-26.29-4.62-34.1-11.66l11.55-16.5c5.5 5.28 13.75 9.46 23.65 9.46 4.18 0 8.14-1.1 8.14-3.96 0-7.04-40.92.11-40.92-28.82 0-12.43 10.34-24.31 30.47-24.31 11.99 0 22.77 3.41 31.13 10.23l-11.88 15.73c-6.38-4.84-14.63-7.26-21.56-7.26-4.4 0-5.61 1.43-5.61 3.3 0 6.93 40.81.99 40.81 28.27 0 16.17-11.99 25.52-31.68 25.52zM662.443 75h-22.22V20.99h-19.69V1.63h61.49v19.36h-19.58V75z"})))},t}(l.a.Component));t.a=u},175:function(e,t,a){(function(n){var s,r,l;a(62),a(84);var i=e.exports&&void 0!==n?n:this||window;(i._gsQueue||(i._gsQueue=[])).push(function(){"use strict";var e,t=i.document,a="undefined"!=typeof window?window:t.defaultView||{getComputedStyle:function(){}},n=function(e){return a.getComputedStyle(e)},s=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,r=-1!==((i.navigator||{}).userAgent||"").indexOf("Edge"),l={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]};function o(e,t,a,n,s,r){return a=(parseFloat(a||0)-parseFloat(e||0))*s,n=(parseFloat(n||0)-parseFloat(t||0))*r,Math.sqrt(a*a+n*n)}function c(e){return"string"!=typeof e&&e.nodeType||(e=i.TweenLite.selector(e)).length&&(e=e[0]),e}function m(e){if(!e)return 0;var t,a,n,r,i,m,h,u=(e=c(e)).tagName.toLowerCase(),d=1,p=1;"non-scaling-stroke"===e.getAttribute("vector-effect")&&(p=e.getScreenCTM(),d=Math.sqrt(p.a*p.a+p.b*p.b),p=Math.sqrt(p.d*p.d+p.c*p.c));try{a=e.getBBox()}catch(f){console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).")}if(a&&(a.width||a.height)||!l[u]||(a={width:parseFloat(e.getAttribute(l[u][0])),height:parseFloat(e.getAttribute(l[u][1]))},"rect"!==u&&"line"!==u&&(a.width*=2,a.height*=2),"line"===u&&(a.x=parseFloat(e.getAttribute("x1")),a.y=parseFloat(e.getAttribute("y1")),a.width=Math.abs(a.width-a.x),a.height=Math.abs(a.height-a.y))),"path"===u)r=e.style.strokeDasharray,e.style.strokeDasharray="none",t=e.getTotalLength()||0,d!==p&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(d+p)/2,e.style.strokeDasharray=r;else if("rect"===u)t=2*a.width*d+2*a.height*p;else if("line"===u)t=o(a.x,a.y,a.x+a.width,a.y+a.height,d,p);else if("polyline"===u||"polygon"===u)for(n=e.getAttribute("points").match(s)||[],"polygon"===u&&n.push(n[0],n[1]),t=0,i=2;i<n.length;i+=2)t+=o(n[i-2],n[i-1],n[i],n[i+1],d,p)||0;else"circle"!==u&&"ellipse"!==u||(m=a.width/2*d,h=a.height/2*p,t=Math.PI*(3*(m+h)-Math.sqrt((3*m+h)*(m+3*h))));return t||0}function h(e,t){if(!e)return[0,0];e=c(e),t=t||m(e)+1;var a=n(e),s=a.strokeDasharray||"",r=parseFloat(a.strokeDashoffset),l=s.indexOf(",");return l<0&&(l=s.indexOf(" ")),(s=l<0?t:parseFloat(s.substr(0,l))||1e-5)>t&&(s=t),[Math.max(0,-r),Math.max(0,s-r)]}(e=i._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.2.1",global:!0,overwriteProps:["drawSVG"],init:function(e,t,a,s){if(!e.getBBox)return!1;var l,i,o,c,u=m(e)+1;return this._style=e.style,this._target=e,"function"==typeof t&&(t=t(s,e)),!0===t||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function(e,t,a){var n,s,r=e.indexOf(" ");return-1===r?(n=void 0!==a?a+"":e,s=e):(n=e.substr(0,r),s=e.substr(r+1)),(n=-1!==n.indexOf("%")?parseFloat(n)/100*t:parseFloat(n))>(s=-1!==s.indexOf("%")?parseFloat(s)/100*t:parseFloat(s))?[s,n]:[n,s]}(t,u,(l=h(e,u))[0]),this._length=u+10,0===l[0]&&0===i[0]?(o=Math.max(1e-5,i[1]-u),this._dash=u+o,this._offset=u-l[1]+o,this._offsetPT=this._addTween(this,"_offset",this._offset,u-i[1]+o,"drawSVG")):(this._dash=l[1]-l[0]||1e-6,this._offset=-l[0],this._dashPT=this._addTween(this,"_dash",this._dash,i[1]-i[0]||1e-5,"drawSVG"),this._offsetPT=this._addTween(this,"_offset",this._offset,-i[0],"drawSVG")),r&&(c=n(e)).strokeLinecap!==c.strokeLinejoin&&(i=parseFloat(c.strokeMiterlimit),this._addTween(e.style,"strokeMiterlimit",i,i+1e-4,"strokeMiterlimit")),this._live="non-scaling-stroke"===e.getAttribute("vector-effect")||-1!==(t+"").indexOf("live"),!0},set:function(e){if(this._firstPT){if(this._live){var t,a=m(this._target)+11;a!==this._length&&(t=a/this._length,this._length=a,this._offsetPT.s*=t,this._offsetPT.c*=t,this._dashPT?(this._dashPT.s*=t,this._dashPT.c*=t):this._dash*=t)}this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,this._style.strokeDasharray=1===e||0===e?this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._dash+"px,"+this._length+"px"}}})).getLength=m,e.getPosition=h}),i._gsDefine&&i._gsQueue.pop()(),function(n){"use strict";var o=function(){return(i.GreenSockGlobals||i).DrawSVGPlugin};e.exports?(a(173),e.exports=o()):(r=[a(173)],void 0===(l="function"==typeof(s=o)?s.apply(t,r):s)||(e.exports=l))}()}).call(this,a(41))},177:function(e){e.exports={data:{site:{buildTime:"24/05/2019"}}}},178:function(e,t,a){"use strict";var n=a(7),s=a.n(n),r=a(0),l=a.n(r),i=a(174),o=a(177),c=a(179),m=a(181),h=function(){return l.a.createElement("ul",{className:"list-social list-inline mb-1"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"http://twitter.com/underlost"},l.a.createElement(c.a,{icon:m.c,fixedWidth:!0,size:"lg"}),l.a.createElement("span",{className:"sr-only"},"Twitter"))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"http://github.com/underlost"},l.a.createElement(c.a,{icon:m.a,fixedWidth:!0,size:"lg"}),l.a.createElement("span",{className:"sr-only"},"Github"))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"http://instagram.com/underlost/"},l.a.createElement(c.a,{icon:m.b,fixedWidth:!0,size:"lg"}),l.a.createElement("span",{className:"sr-only"},"Instagram"))))},u=function(){var e=o.data;return l.a.createElement("footer",{className:"site-footer my-4 mt-md-5"},l.a.createElement(h,null),l.a.createElement("small",{className:"copyright"},"Copyright © Tyler Rilling 2002–2019. Site last updated:"," ",l.a.createElement("a",{href:"https://github.com/underlost/underlost.net/"},e.site.buildTime),"."))},d=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props;e.children,e.data;return l.a.createElement("div",null,l.a.createElement("header",{className:"site-header site-header-sm mt-5"},l.a.createElement(i.a,null)),l.a.createElement("main",{className:"site-main"},l.a.createElement("div",{className:"mx-auto mt-3 mt-md-5"},l.a.createElement("article",null,l.a.createElement("div",{className:"site-content"},this.props.children)),l.a.createElement(u,null))))},t}(l.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-js-c87b2ee80835d4604f0b.js.map