if(document.addEventListener("DOMContentLoaded",(function(){o.init(),o.subscribe(),t.loadFancyBox(),volantis.pjax.push((()=>{o.pjaxReload(),sessionStorage.setItem("domTitle",document.title)}),"app.js"),volantis.pjax.send((()=>{volantis.dom.switcher.removeClass("active"),volantis.dom.header.removeClass("z_search-open"),volantis.dom.wrapper.removeClass("sub"),volantis.EventListener.remove()}),"app.js"),volantis.pjax.push(t.pjaxReload),volantis.pjax.send((()=>{"undefined"!=typeof $&&"undefined"!=typeof $.fancybox&&$.fancybox.close()}),"fancybox")})),window.location.hash){let e=decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-"),o=document.getElementById(e);o&&window.scrollTo({top:o.offsetTop+volantis.dom.bodyAnchor.offsetTop+5,behavior:"smooth"})}const e=(e,o)=>{const t=o||50;let n;return function(){const o=arguments;n&&clearTimeout(n),n=setTimeout((()=>{n=null,e.apply(this,o)}),t)}},o=(()=>{const o={};let t=80;function n(){var e;return window.pageYOffset?e=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e}return o.init=()=>{volantis.dom.header&&(t=volantis.dom.header.clientHeight+16),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(o.setGlobalHeaderMenuEvent(),o.setHeader(),o.setHeaderSearch())}},o.event=()=>{volantis.dom.$(document.getElementById("scroll-down")).on("click",(function(){o.scrolltoElement(volantis.dom.bodyAnchor)}))},o.restData=()=>{t=volantis.dom.header?volantis.dom.header.clientHeight+16:80},o.setIsMobile=()=>{document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0)},o.scrolltoElement=(e,o=t)=>{window.scrollTo({top:e.offsetTop-o,behavior:"smooth"})},o.setScrollAnchor=()=>{volantis.dom.topBtn&&volantis.dom.bodyAnchor&&volantis.dom.topBtn.click((e=>{e.preventDefault(),e.stopPropagation(),o.scrolltoElement(volantis.dom.bodyAnchor),e.stopImmediatePropagation()}));let a=document.body.scrollTop;volantis.dom.$(document).scroll(e((()=>{const e=volantis.dom.bodyAnchor.offsetTop-t,o=n(),l=o-a;a=o,o>volantis.dom.bodyAnchor.offsetTop?(volantis.dom.topBtn.addClass("show"),l>0?volantis.dom.topBtn.removeClass("hl"):volantis.dom.topBtn.addClass("hl")):volantis.dom.topBtn.removeClass("show").removeClass("hl"),o-e>-1?volantis.dom.header.addClass("show"):volantis.dom.header.removeClass("show")})))},o.setHeader=()=>{if(!pdata.ispage)return;volantis.dom.wrapper.find(".nav-sub .title").html(pdata.postTitle);let t=document.body.scrollTop;volantis.dom.$(document).scroll(e((()=>{const e=n(),o=e-t;o>=50&&e>100?(t=e,volantis.dom.wrapper.addClass("sub")):o<=-50&&(t=e,volantis.dom.wrapper.removeClass("sub"))}))),volantis.dom.comment=volantis.dom.$(document.getElementById("s-comment")),volantis.dom.commentTarget=volantis.dom.$(document.querySelector("#l_main article#comments")),volantis.dom.commentTarget?volantis.dom.comment.click((e=>{e.preventDefault(),e.stopPropagation(),o.scrolltoElement(volantis.dom.commentTarget),e.stopImmediatePropagation()})):volantis.dom.comment.remove(),volantis.isMobile&&(volantis.dom.toc=volantis.dom.$(document.getElementById("s-toc")),volantis.dom.tocTarget=volantis.dom.$(document.querySelector("#l_side .toc-wrapper")),volantis.dom.tocTarget?(volantis.dom.toc.click((e=>{e.stopPropagation(),volantis.dom.tocTarget.toggleClass("active"),volantis.dom.toc.toggleClass("active")})),volantis.dom.$(document).click((function(e){e.stopPropagation(),volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")})),volantis.dom.$(document).scroll(e((()=>{volantis.dom.tocTarget.removeClass("active"),volantis.dom.toc.removeClass("active")}),100))):volantis.dom.toc.remove())},o.setHeaderMenuSelection=()=>{volantis.dom.headerMenu=volantis.dom.$(document.querySelectorAll("#l_header .navigation,#l_cover .navigation,#l_side .navigation")),volantis.dom.headerMenu.forEach((e=>{let o=volantis.dom.$(e).find("li a.active");o&&o.removeClass("active");let t=volantis.dom.$(e).find("div a.active");t&&t.removeClass("active")}));var e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var o=e.match(/page\d{0,}$/g);o&&(o=o[0],e=e.split(o)[0]);var t=e.match(/index.html/);t&&(t=t[0],e=e.split(t)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.dom.headerMenu&&volantis.dom.headerMenu.forEach((o=>{let t=o.querySelector("#"+e);t&&volantis.dom.$(t).addClass("active")}))},o.setGlobalHeaderMenuEvent=()=>{volantis.isMobile?document.querySelectorAll("#l_header .m-phone li").forEach((function(e){e.querySelector(".list-v")&&volantis.dom.$(e).click((function(e){e.stopPropagation(),e.currentTarget.parentElement.childNodes.forEach((function(e){"[object HTMLLIElement]"==Object.prototype.toString.call(e)&&e.childNodes.forEach((function(e){"[object HTMLUListElement]"==Object.prototype.toString.call(e)&&volantis.dom.$(e).hide()}))}));let o=e.currentTarget.children;for(let t=0;t<o.length;t++){const e=o[t];volantis.dom.$(e).show()}}),0)})):document.querySelectorAll("#wrapper .m-pc li > a[href]").forEach((function(e){volantis.dom.$(e.parentElement).click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&volantis.dom.$("#wrapper .m-pc .list-v").hide()}),0)})),o.setPageHeaderMenuEvent()},o.setPageHeaderMenuEvent=()=>{volantis.isMobile&&(volantis.dom.$(document).click((function(e){volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))})),volantis.dom.$(document).scroll(e((()=>{volantis.dom.mPhoneList.forEach((function(e){volantis.dom.$(e).hide()}))}))))},o.setHeaderSearch=()=>{volantis.isMobile&&volantis.dom.switcher&&(volantis.dom.switcher.click((function(e){e.stopPropagation(),volantis.dom.header.toggleClass("z_search-open"),volantis.dom.switcher.toggleClass("active")})),volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")})),volantis.dom.search.click((function(e){e.stopPropagation()})))},o.setTabs=()=>{let e=document.querySelectorAll("#l_main .tabs .nav-tabs");e&&e.forEach((function(e){e.querySelectorAll("a").forEach((function(e){volantis.dom.$(e).on("click",(e=>{e.preventDefault(),e.stopPropagation();const o=volantis.dom.$(e.target.parentElement.parentElement.parentElement);return o.find(".nav-tabs .active").removeClass("active"),volantis.dom.$(e.target.parentElement).addClass("active"),o.find(".tab-content .active").removeClass("active"),o.find(e.target.className).addClass("active"),!1}))}))}))},{init:()=>{o.init(),o.event()},subscribe:()=>{o.setIsMobile(),o.setHeader(),o.setHeaderMenuSelection(),o.setGlobalHeaderMenuEvent(),o.setHeaderSearch(),o.setScrollAnchor(),o.setTabs()},pjaxReload:()=>{o.event(),o.restData(),o.setHeader(),o.setHeaderMenuSelection(),o.setPageHeaderMenuEvent(),o.setScrollAnchor(),o.setTabs(),document.querySelector("#l_header .nav-main").querySelectorAll(".list-v:not(.menu-phone)").forEach((function(e){e.removeAttribute("style")})),document.querySelector("#l_header .menu-phone.list-v").removeAttribute("style"),volantis.dom.switcher&&volantis.dom.$(document).click((function(e){volantis.dom.header.removeClass("z_search-open"),volantis.dom.switcher.removeClass("active")}))}}})();Object.freeze(o);const t=(()=>{const e={initFB:()=>{const e=new Set;e.add("default"),document.querySelectorAll(".md .gallery").forEach((function(o){o.querySelector("img")&&e.add($(o).attr("data-group")||"default")}));for(const o of e)o&&$('[data-fancybox="'+o+'"]').fancybox({hash:!1,loop:!0,closeClick:!0,helpers:{overlay:{closeClick:!0}},buttons:["zoom","slideShow","fullScreen","download","thumbs","close"]})},loadFancyBox:()=>{document.querySelector(".md .gallery img")&&volantis["import"].jQuery().then((()=>{volantis.css("https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"),volantis.js("https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js").then(e.initFB)}))}};return{loadFancyBox:e.loadFancyBox,pjaxReload:()=>{"undefined"!=typeof $&&("undefined"==typeof $.fancybox?e.loadFancyBox():e.initFB())}}})();Object.freeze(t);