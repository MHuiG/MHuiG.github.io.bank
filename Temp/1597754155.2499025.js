function uploadimg(e,t){var a=new Date,n=""+a.getFullYear()+(a.getMonth()+1)+a.getDate()+a.getHours()+a.getMinutes()+a.getSeconds()+"."+houzhui,i="https://cdn.jsdelivr.net/gh/MHuiG/imgbed/data/"+n,r={url:"https://api.github.com/repos/MHuiG/imgbed/contents/data/"+n,method:"PUT",timeout:0,headers:{Authorization:"Bearer "+t,"Content-Type":"text/plain"},data:'{\r\n  "message": "upload",\r\n  "content": "'+e+'"\r\n}'};$.ajax(r).done(function(e){imgurlmd="![]("+i+")";var t="<li>"+imgurlmd+"</li>";document.getElementById("neirong").innerHTML=t})}function imgChange(e){var a=$("#key").val(),t=localStorage&&localStorage.getItem("ImgCache");t&&(t=JSON.parse(t),a=a||t.k),localStorage&&localStorage.setItem("ImgCache",JSON.stringify({k:a}));var n=new FileReader;n.onload=function(e){var t=e.target.result;base64url=t.replace(/(.*)?,/,""),houzhui=t.substring(t.indexOf("/")+1,t.indexOf(";")),uploadimg(base64url,a)},n.readAsDataURL(e.files[0])}document.addEventListener("paste",function(e){var t=e.clipboardData&&e.clipboardData.items,a=null;if(t&&t.length)for(var n=0;n<t.length;n++)if(-1!==t[n].type.indexOf("image")){a=t[n].getAsFile();var i={},r=[];r.push(a),i.files=r,imgChange(i);break}});