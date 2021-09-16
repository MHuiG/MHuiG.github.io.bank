!function(t,i){function e(t,i){var e=document.createElement(t);return i&&(e.className=i.join(" ")),e}t.LOADED_STYLES=t.LOADED_STYLES||{},t.loadStyle=function(i){if(!t.LOADED_STYLES[i]){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href",i),document.getElementsByTagName("head")[0].appendChild(e),t.LOADED_STYLES[i]=!0}};var o="https://github.com/";function s(t,i,e){return o+t+"/"+i+"/commit/"+e}function n(t,i,e){return'<a href="'+i+'" target="_blank" class="'+(e=e||"")+'">'+t+"</a>"}function a(t){return n(t,function(t){return o+t}(t),"user-link")}function c(t,i){return n(i,function(t,i){return o+t+"/"+i}(t,i),"repo-link")}function r(t,i,e){return n(e,s(t,i,e),"commit-link")}function m(t,i,e,o){return['<div class="item '+i+'">','  <div class="icon">','    <div class="circle'+(o?" active":"")+'"></div>','    <span class="'+t+'"></span>',"  </div>",'  <div class="text'+(o?" active":"")+'">'+e+"</div>","</div>"].join("")}function l(t,i){var e=JSON.parse(localStorage.getItem(t))||{data:null,etag:null};!function(t,i,e){var o=new XMLHttpRequest;o.open("GET",t,!0),i&&o.setRequestHeader("If-None-Match",i),o.onload=function(){var t=o.getResponseHeader("ETag");if(console.log("Rate limit remaing: "+o.getResponseHeader("X-RateLimit-Remaining")),304==o.status)e(t,null,null);else if(o.status>=200&&o.status<400){var i=JSON.parse(o.responseText);e(t,null,i)}else{i=JSON.parse(o.responseText),console.error(i.message);var s=new Error(i.message);s.raw=i,e(t,s)}},o.onerror=function(t){console.error(t),e(i,t)},o.send()}(t+"?per_page=100",e.etag,(function(o,s,n){return s?(console.log("Something wrong, use cached data"),i(s,e.data)):n?(console.log("Update cache"),localStorage.setItem(t,JSON.stringify({data:n,etag:o})),i(null,n)):(console.log("Cache hit"),localStorage.setItem(t,JSON.stringify({data:e.data,etag:o})),i(null,e.data))}))}function h(t,o,s,n,l){this.container=i(t),this.user=o,this.repo=s,this.commit=n,this.autoExpand=!!l,this.el=e("div",["github-badge"]),this.info=e("div",["info"]),this.header=e("div",["header"]),this.commits=e("div",["commits","fold"]),this.header.innerHTML=function(t,i){return['<div class="icon">','  <span class="mega-octicon octicon-mark-github"></span>','  <div class="avatar"><img /></div>',"</div>",'<div class="content">','  <h3 class="user">'+a(t)+"</h3>",'  <h3 class="repo">'+c(t,i)+"</h3>","</div>"].join("")}(o,s),this.info.innerHTML=function(t,i,e){return['<div class="icon">','  <div class="circle"></div>','  <span class="octicon octicon-git-commit"></span>',"</div>",'<div class="status">',r(t,i,e),"  <span></span>","</div>"].join("")}(o,s,n),this.commits.innerHTML=function(t,i,e){return['<div class="line">',"</div>",'<div class="entry">',m("octicon octicon-code","commit-before",'<span class="commits-count-before">N/A</span> commits'),m("octicon octicon-pencil","commit-current",r(t,i,e)+", referenced in this article",!0),m("octicon octicon-code","commit-after",'<span class="commits-count-after">N/A</span> commits'),m("octicon octicon-clock","commit-latest",r(t,i,"N/A")+", latest"),m("octicon octicon-check","commit-up-to-date","Up-to-date"),"</div>"].join("")}(o,s,n),this.header.avatarContainer=this.header.querySelector(".avatar"),this.header.avatar=this.header.querySelector(".avatar>img"),this.header.logo=this.header.querySelector(".icon>span"),this.header.user=this.header.querySelector(".user"),this.info.commitLink=this.info.querySelector(".status>a"),this.info.statusText=this.info.querySelector(".status>span"),this.info.icon=this.info.querySelector(".icon>span"),this.header.user.addEventListener("mouseover",this.toggleAvatar.bind(this)),this.header.user.addEventListener("mouseout",this.toggleAvatar.bind(this)),this.info.addEventListener("click",this.toggleFold.bind(this));var h=this.commits.querySelectorAll(".commit-link");this.commits.beforeCounter=this.commits.querySelector(".commits-count-before"),this.commits.afterCounter=this.commits.querySelector(".commits-count-after"),this.commits.currentCommitLink=h[0],this.commits.latestCommitLink=h[1],this.commits.afterEntry=this.commits.querySelector(".commit-after"),this.commits.latestCommitEntry=this.commits.querySelector(".commit-latest"),this.commits.upToDateEntry=this.commits.querySelector(".commit-up-to-date"),this.el.appendChild(this.header),this.el.appendChild(this.info),this.el.appendChild(this.commits),this.container.appendChild(this.el),this.update()}h.prototype.updateCommitLink=function(t,i){t.title=i.commit.message,t.innerHTML=i.sha.substr(0,6),t.href=s(this.user,this.repo,i.sha)},h.prototype.updateCommits=function(t){for(var i,e,o=0;o<t.length;o++){var s=t[o];0==s.sha.indexOf(this.commit)&&(i=o,e=s)}var n=t[0],a=i,c="octicon-history";this.info.statusText.innerHTML=a>0?", "+a+" commits behind":", up-to-date",this.commits.afterEntry.style.display="none",this.commits.latestCommitEntry.style.display="none",this.commits.upToDateEntry.style.display="none",0==a?(this.commits.upToDateEntry.style.display="block",c="octicon-check"):(1==a||(this.commits.afterEntry.style.display="block"),this.commits.latestCommitEntry.style.display="block"),this.commits.beforeCounter.innerHTML=t.length-i-1,this.commits.afterCounter.innerHTML=a-1,this.updateCommitLink(this.info.commitLink,e),this.updateCommitLink(this.commits.currentCommitLink,e),this.updateCommitLink(this.commits.latestCommitLink,n),this.toggleSyncAnimation(c),this.autoExpand&&"commits"!==this.commits.className&&this.toggleFold()},h.prototype.toggleAvatar=function(){var t=this.header.avatarContainer.className;this.header.avatarContainer.className="avatar"===t?"avatar show":"avatar",this.header.logo.className="avatar"===t?"mega-octicon octicon-mark-github back":"mega-octicon octicon-mark-github"},h.prototype.toggleFold=function(){this.commits.className="commits"===this.commits.className?"commits fold":"commits"},h.prototype.toggleSyncAnimation=function(t){t=t||"octicon-git-commit";var i=this.info.icon.className;this.info.icon.className="octicon octicon-sync spinner"===i?"octicon "+t:"octicon octicon-sync spinner"};var u="https://api.github.com";h.prototype.update=function(){var t=u+"/users/"+this.user,i=u+"/repos/"+this.user+"/"+this.repo+"/commits";this.toggleSyncAnimation();var e=this;l(t,(function(t,i){e.header.avatar.src=i.avatar_url})),l(i,(function(t,i){t&&!i?(e.info.statusText.innerHTML=", something is wrong",e.toggleSyncAnimation("octicon-x")):e.updateCommits(i)}))},t.Badge=h}(window,document.querySelector.bind(document));