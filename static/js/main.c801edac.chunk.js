(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},3:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",metadata:"video_item_metadata__N-I6a",thumbnails:"video_item_thumbnails__38zQE",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},30:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",logoimg:"search_header_logoimg__3fDVP",input:"search_header_input__3vem-",btn:"search_header_btn__2Ulv9",btnimg:"search_header_btnimg__1VGAh"}},49:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),c=a.n(n),s=a(20),r=a.n(s),o=(a(30),a(10)),l=a(4),d=a.n(l),u=Object(n.memo)((function(e){var t=e.onSerach,a=Object(n.useRef)(),c=function(){var e=a.current.value;t(e)};return Object(i.jsxs)("header",{className:d.a.header,children:[Object(i.jsxs)("div",{className:d.a.logo,children:[Object(i.jsx)("img",{className:d.a.logoimg,src:"./images/logo.png",alt:"logo"}),Object(i.jsx)("h1",{className:d.a.title,children:"Yeoptube"})]}),Object(i.jsx)("input",{ref:a,className:d.a.input,type:"search",placeholder:"Search..",onKeyPress:function(e){"Enter"===e.key&&c()}}),Object(i.jsx)("button",{className:d.a.btn,type:"submit",onClick:function(){c()},children:Object(i.jsx)("img",{className:d.a.btnimg,src:"images/search.png",alt:"search"})})]})})),m=a(3),h=a.n(m),p=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,c="list"===e.display?h.a.list:h.a.grid;return Object(i.jsx)("li",{className:"".concat(h.a.container," ").concat(c),onClick:function(){return n(t)},children:Object(i.jsxs)("div",{className:h.a.video,children:[Object(i.jsx)("img",{className:h.a.thumbnails,src:a.thumbnails.medium.url,alt:"thumbnails img"}),Object(i.jsxs)("div",{className:h.a.metadata,children:[Object(i.jsx)("p",{className:h.a.title,children:a.title}),Object(i.jsx)("p",{className:h.a.channel,children:a.channelTitle})]})]})})})),_=a(21),j=a.n(_),b=Object(n.memo)((function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(i.jsx)("ul",{className:j.a.videos,children:t.map((function(e){return Object(i.jsx)(p,{video:e,onVideoClick:a,display:n},e.id)}))})})),v=a(5),O=a.n(v),f=a(7),x=a.n(f),g=function(e){var t=e.video,a=e.video.snippet;return Object(i.jsxs)("section",{className:x.a.detail,children:[Object(i.jsx)("iframe",{className:x.a.video,title:"youtube video player",type:"text/html",width:"100%",height:"500",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(i.jsx)("h2",{children:a.title}),Object(i.jsx)("h3",{children:a.channelTitle}),Object(i.jsx)("pre",{className:x.a.description,children:a.description})]})};var y=function(e){var t=e.youtube,a=Object(n.useState)([]),c=Object(o.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(null),d=Object(o.a)(l,2),m=d[0],h=d[1],p=Object(n.useCallback)((function(e){h(e)}),[]),_=Object(n.useCallback)((function(e){h(null),t.search(e).then((function(e){return r(e)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return r(e)}))}),[t]),Object(i.jsxs)("div",{className:O.a.app,children:[Object(i.jsx)(u,{onSerach:_}),Object(i.jsxs)("section",{className:O.a.content,children:[m&&Object(i.jsx)("div",{className:O.a.detail,children:Object(i.jsx)(g,{video:m})}),Object(i.jsx)("div",{className:O.a.list,children:Object(i.jsx)(b,{videos:s,onVideoClick:p,display:m?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),C=a(9),S=a(22),z=a(23),I=a(24),V=a.n(I),D=new(function(){function e(t){Object(S.a)(this,e),this.client=V.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:t}})}return Object(z.a)(e,[{key:"mostPopular",value:function(){var e=Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.get("search",{params:{part:"snippet",maxResults:25,q:t,type:"video"}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyDUXnzI8CzWyFe1DyFsrArzogTzCZrC96A");r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(y,{youtube:D})}),document.getElementById("root"))},5:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},7:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",description:"video_detail_description__3nW_r"}}},[[49,1,2]]]);
//# sourceMappingURL=main.c801edac.chunk.js.map