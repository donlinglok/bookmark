!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e,t){var n=t.moduleinfo.url;(0,o.crossDomainAjax)(n,function(e){if("200"!==e.status)return!1;e=JSON.parse(e.results[0].user_define);var t=$(".phone-cell"),n=t.find("li");t.find(".black").attr("src",e.body.image1),t.find(".white").attr("src",e.body.image2),t.find(".white-black").attr("src",e.body.image3),t.find("h2").text(e.body.maintext),t.find("h1").text(e.body.text),$(n[0]).find("a").attr("href",e.body.line1url).text(e.body.line1),$(n[1]).find("a").attr("href",e.body.line2url).text(e.body.line2),$(n[2]).find("a").attr("href",e.body.line3url).text(e.body.line3),$(n[3]).find("a").attr("href",e.body.line4url).text(e.body.line4)})}var o=n(2);n(3);var i=$(".aliyun-commonfooter-qrqm-95187");i.each(function(){var e=$(this).find("textarea.schemaData"),t=e.val(),n=JSON.parse(t);n&&r($(this),n)}),e.exports=r},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if("XDomainRequest"in window&&null!==window.XDomainRequest){var n=new XDomainRequest;n.open("get",e),n.onload=function(){var e=new ActiveXObject("Microsoft.XMLDOM"),r=$.parseJSON(n.responseText);e.async=!1,null!=r&&"undefined"!=typeof r||(r=$.parseJSON(data.firstChild.textContent)),t(r)},n.onerror=function(){console.error("jsonp fail")},n.send()}else{if(navigator.userAgent.indexOf("MSIE")!=-1&&parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1],10)<8)return!1;$.ajax({type:"get",async:!1,url:e,cache:!0,jsonp:"cb",dataType:"jsonp",success:function(e){t(e)},error:function(){console.error("jsonp fail")}})}};t.crossDomainAjax=n},function(e,t){}]);