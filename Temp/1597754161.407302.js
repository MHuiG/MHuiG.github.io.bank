var supportsPDFs,isIE,supportsPdfActiveX,createAXO,buildFragmentString,log,embedError,embed,getTargetElement,generatePDFJSiframe,generateEmbedElement,pdfobjectversion="2.1.1",ua=window.navigator.userAgent,supportsPdfMimeType=void 0!==navigator.mimeTypes["application/pdf"],isModernBrowser=void 0!==window.Promise,isFirefox=-1!==ua.indexOf("irefox"),isFirefoxWithPDFJS=!!isFirefox&&18<parseInt(ua.split("rv:")[1].split(".")[0],10),isIOS=/iphone|ipad|ipod/i.test(ua.toLowerCase());function createAXO(e){var t;try{t=new ActiveXObject(e)}catch(e){t=null}return t}function IsPC(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,o=0;o<t.length;o++)if(0<e.indexOf(t[o])){r=!1;break}return r}function isIE(){return!!(window.ActiveXObject||"ActiveXObject"in window)}function supportsPdfActiveX(){return!(!createAXO("AcroPDF.PDF")&&!createAXO("PDF.PdfCtrl"))}function buildFragmentString(e){var t,r="";if(e){for(t in e)e.hasOwnProperty(t)&&(r+=encodeURIComponent(t)+"="+encodeURIComponent(e[t])+"&");r=r&&(r="#"+r).slice(0,r.length-1)}return r}function log(e){}function embedError(e){return!1}function getTargetElement(e){var t=document.body;return"string"==typeof e?t=document.querySelector(e):"undefined"!=typeof jQuery&&e instanceof jQuery&&e.length?t=e.get(0):void 0!==e.nodeType&&1===e.nodeType&&(t=e),t}function generatePDFJSiframe(e,t,r,o,i){var n=o+"?file="+encodeURIComponent(t)+r,a="<div style='"+(isIOS?"-webkit-overflow-scrolling: touch; overflow-y: scroll; ":"overflow: hidden; ")+"position: relative; top: 0; right: 0; bottom: 0; left: 0;'><iframe  "+i+" src='"+n+"' style='border: none; width: 100%; height: 500px;' frameborder='0'></iframe></div>";return e.className+=" pdfobject-container",e.style.position="relative",e.style.overflow="auto",e.innerHTML=a,e.getElementsByTagName("iframe")[0]}function generateEmbedElement(e,t,r,o,i,n,a){var s="",s=t&&t!==document.body?"width: "+i+"; height: "+n+";":"position: relative; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 500px;";return e.className+=" pdfobject-container",e.innerHTML="<embed "+a+" class='pdfobject' src='"+r+o+"' type='application/pdf' style='overflow: auto; "+s+"'/>",e.getElementsByTagName("embed")[0]}function embed(e,t,r){if("string"!=typeof e)return embedError("URL is not valid");t=void 0!==t&&t;var o,i=(r=void 0!==r?r:{}).id&&"string"==typeof r.id?"id='"+r.id+"'":"",n=!!r.page&&r.page,a=r.pdfOpenParams?r.pdfOpenParams:{},s=void 0===r.fallbackLink||r.fallbackLink,d=r.width?r.width:"100%",p=r.height?r.height:"100%",f="boolean"!=typeof r.assumptionMode||r.assumptionMode,l="boolean"==typeof r.forcePDFJS&&r.forcePDFJS,u=!!r.PDFJS_URL&&r.PDFJS_URL,c=getTargetElement(t),m="";return c?(n&&(a.page=n),o=buildFragmentString(a),l&&u?generatePDFJSiframe(c,e,o,u,i):IsPC()&&(supportsPDFs||f&&isModernBrowser&&!isIOS)?generateEmbedElement(c,t,e,o,d,p,i):u?generatePDFJSiframe(c,e,o,u,i):(s&&(m="string"==typeof s?s:"<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>",c.innerHTML=m.replace(/\[url\]/g,e)),embedError("This browser does not support embedded PDFs"))):embedError("Target element cannot be determined")}function ShowPDF(){document.querySelectorAll("div.pdf").length&&document.querySelectorAll("div.pdf").forEach(function(e){embed(e.getAttribute("target"),e,{pdfOpenParams:{navpanes:0,toolbar:0,statusbar:0,pagemode:"thumbs",view:"FitH"},PDFJS_URL:"https://source.mhuig.top/libs/pdf.js/e5/web/viewer.html",height:"500px"})})}supportsPDFs=!isIOS&&(isFirefoxWithPDFJS||supportsPdfMimeType||isIE()&&supportsPdfActiveX()),ShowPDF();