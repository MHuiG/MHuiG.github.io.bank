var customSearch,checkExist;function isSupportWebp(){try{return 0===document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")}catch(e){return!1}}function LogoChange(){"undefined"!=typeof jQuery&&(isSupportWebp()||($("section.widget.blogger> div > a > img").attr("src","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn/assets/avatar/avatar-240.png"),$("#header-meta > div > div.new-meta-item.author > a > img").attr("src","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn/assets/avatar/avatar-16.png")))}!function(l){"use strict";var s=80,d=l(".l_header",".cover-wrapper");function u(e,t){var a=1<arguments.length&&void 0!==t?t:s,o=e.href?l(e.getAttribute("href")):l(e);l("html, body").animate({scrollTop:o.offset().top-a},500)}function e(){var t=l(".menu .active"),a=l(".s-top"),e=l("h1.title","#header-meta"),o=l(".l_body");t.length&&o&&t.click(function(e){e.preventDefault(),e.stopPropagation(),"/"!=t.attr("href")&&u(o),e.stopImmediatePropagation()}),e.length&&o&&e.click(function(e){e.preventDefault(),e.stopPropagation(),u(o),e.stopImmediatePropagation()}),a.length&&o&&a.click(function(e){e.preventDefault(),e.stopPropagation(),u(o),e.stopImmediatePropagation()});var n=l(".cover-wrapper"),i=l("#pjax-enable-cover").text(),c=0;n[0]&&"true"==i&&"none"!==l(".cover.half").css("display")&&(c=n[0].clientHeight-180);var r=document.body.scrollTop;"true"==i&&"none"===l(".cover.half").css("display")&&(r+=180),l(document,window).scroll(function(){var e=l(window).scrollTop();"true"==i&&"none"===l(".cover.half").css("display")&&(e+=180);var t=e-r;180<(r=e)?(a.addClass("show"),0<t?a.removeClass("hl"):a.addClass("hl")):a.removeClass("show").removeClass("hl"),c<e?d.addClass("show"):d.removeClass("show")})}function n(){var a,e,t,o,n;"true"==l.trim(l("#pjax-ispage").text())&&(window.subData={title:l.trim(l("#pjax-pageTitle").text()),tools:!0}),window.subData&&(a=l("header .wrapper"),e=l(".s-comment",a),t=l(".s-toc",a),e.show(),a.find(".nav-sub .title").text(window.subData.title),o=document.body.scrollTop,l(document,window).scroll(function(){var e=l(window).scrollTop(),t=e-o;50<=t&&100<e?(o=e,a.addClass("sub")):t<=-50&&(o=e,a.removeClass("sub"))}),l(".l_body .comments").length?e.click(function(e){e.preventDefault(),e.stopPropagation(),u(l(".l_body .comments")),e.stopImmediatePropagation()}):e.hide(),(n=l(".l_body .toc-wrapper")).length&&n.children().length?(t.click(function(e){e.stopPropagation(),n.toggleClass("active"),t.toggleClass("active")}),l(document).click(function(e){e.stopPropagation(),n.removeClass("active"),t.removeClass("active")}),l(document,window).scroll(function(){n.removeClass("active"),t.removeClass("active")})):t.remove())}function i(){var e=l("body .navigation");e.find("li a.active").removeClass("active");var t=null,a=location.pathname.replace(/\/|%|\./g,"");0==a.length&&(a="home");var o=a.match(/page\d{0,}$/g);o&&(o=o[0],a=a.split(o)[0]);var n,i=a.match(/index.html/);i&&(i=i[0],a=a.split(i)[0]),a&&e&&(t=l("#"+a,e),(n=t)&&n.length&&n.addClass("active").siblings().removeClass("active"))}function c(){var n,i,c,r,e,t,a=l(".toc-wrapper");0!==a.length&&(a.click(function(e){e.stopPropagation(),a.addClass("active")}),l(document).click(function(){return a.removeClass("active")}),a.on("click","a",function(e){e.preventDefault(),e.stopPropagation(),"A"===e.target.tagName?u(e.target,0):"SPAN"===e.target.tagName&&u(e.target.parentElement,0),a.removeClass("active");var t=l(".s-toc");0<t.length&&t.removeClass("active")}),n=Array.from(a.find("li a")),c=(i=function(){return n.map(function(e){return Math.floor(l(e.getAttribute("href")).offset().top-s)})})(),r=l(document).height(),e=function(){var e=l("html").scrollTop()||l("body").scrollTop();if(l(document).height()!=r&&(e=l("html").scrollTop()||l("body").scrollTop(),r=l(document).height(),c=i()),c){for(var t=0,a=c.length-1,o=void 0;t<a;)c[o=t+a+1>>1]===e?t=a=o:c[o]<e?t=o:a=o-1;l(n).removeClass("active").eq(t).addClass("active")}},l(window).scroll(function(){e()}),t=null,l(window).bind("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){c=i(),e()},100)}),e())}function r(){var e=l(".tabs");if(0!==e.length){for(var t=e.find(".nav-tabs .tab"),a=0;a<t.length;a++){var o=e.find(t[a].children[0]);o.addClass(o.attr("href")),o.removeAttr("href")}l(".tabs .nav-tabs").on("click","a",function(e){e.preventDefault(),e.stopPropagation();var t=l(e.target.parentElement.parentElement.parentElement);return t.find(".nav-tabs .active").removeClass("active"),t.find(e.target.parentElement).addClass("active"),t.find(".tab-content .active").removeClass("active"),t.find(l(e.target).attr("class")).addClass("active"),!1})}}d[0]&&(s=d[0].clientHeight+16),l(function(){var t,a,o;n(),i(),t=l(".l_header .switcher .s-search"),a=l(".l_header"),o=l(".l_header .m_search"),0!==t.length&&(t.click(function(e){e.stopPropagation(),a.toggleClass("z_search-open"),t.toggleClass("active"),o.find("input").focus()}),l(document).click(function(e){a.removeClass("z_search-open"),t.removeClass("active")}),o.click(function(e){e.stopPropagation()}),a.ready(function(){a.bind("keydown",function(e){if(9==e.keyCode)return!1;var t,a=!!document.all,o=a?(t=window.event.keyCode,window.event):(t=e.which,e);9==t&&(a?(o.keyCode=0,o.returnValue=!1):(o.which=0,o.preventDefault()))})})),c(),e(),"google"===SEARCH_SERVICE?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:"/img/"}):"algolia"===SEARCH_SERVICE?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:"/img/"}):"hexo"===SEARCH_SERVICE?customSearch=new HexoSearch({imagePath:"/img/"}):"azure"===SEARCH_SERVICE?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:"/img/"}):"baidu"===SEARCH_SERVICE&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:"/img/"})),r(),l(".scroll-down").on("click",function(){u(".l_body")}),document.addEventListener("pjax:complete",function(){try{l(function(){s=80,(d=l(".l_header",".cover-wrapper"))[0]&&(s=d[0].clientHeight+16),n(),i(),c(),e(),r()})}catch(e){console.log(e)}})})}(jQuery),$("figcaption").click(function(){window.CodeBlockFullscreen?($("#post").removeClass("code-block-fullscreen"),$(this).parent().removeClass("code-block-fullscreen"),$(this).parent().removeClass("code-block-fullscreen-overflow-auto"),$("html").removeClass("code-block-fullscreen-html-scroll"),$(".highlight>table .gutter").removeClass("code-block-fullscreen-gutter"),window.CodeBlockFullscreen=!1):($("#post").addClass("code-block-fullscreen"),$(this).parent().addClass("code-block-fullscreen"),$(this).parent().addClass("code-block-fullscreen-overflow-auto"),$("html").addClass("code-block-fullscreen-html-scroll"),$(".highlight>table .gutter").addClass("code-block-fullscreen-gutter"),window.CodeBlockFullscreen=!0)}),setInterval("LogoChange()",1e3),window.location.hash&&(checkExist=setInterval(function(){"undefined"!=typeof jQuery&&$("#"+window.location.hash.split("#")[1]).length&&($("html, body").animate({scrollTop:$("#"+window.location.hash.split("#")[1]).offset().top-90},1e3),clearInterval(checkExist))},100));var titleTime,OriginTitle=document.title;document.addEventListener("visibilitychange",function(){document.hidden?($('[rel="shortcut icon"]').attr("href","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn@master/assets/favicon/Error.ico"),document.title="╭(°A°`)╮ 页面崩溃啦 ~",clearTimeout(titleTime)):($('[rel="shortcut icon"]').attr("href","https://cdn.jsdelivr.net/gh/MHuiG/blog-cdn@master/assets/favicon/favicon.ico"),document.title="(ฅ>ω<*ฅ) 噫又好了~"+OriginTitle,titleTime=setTimeout(function(){document.title=OriginTitle},2e3))}),setTimeout(function(){!function(){var e=document.createElement("script"),t=window.location.protocol.split(":")[0];e.src="https"===t?"https://zz.bdstatic.com/linksubmit/push.js":"http://push.zhanzhang.baidu.com/push.js",e.defer=!0;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}()},5e3);