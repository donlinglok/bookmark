(function(a,e,i){var t=i.userAgent;var o=a.getElementsByTagName("head")[0];function n(e){var i=a.createElement("script");i.src=e;return o.appendChild(i)}var r="//g.alicdn.com";var c=self.goldlog;if(c&&c.getCdnPath){r=c.getCdnPath()}r+="/secdev/";var l=t.match(/Chrome\/(\d*)/);if(l){l=+l[1]}if(!a._sufei_data2){var m="3.6.12";var s=n(r+"sufei_data/"+m+"/index.js");s.id="aplus-sufei"}var d=.001;if(e()<d){a._linkstat_sample=d;n(r+"linkstat/index.js?v=1201")}window.nsrprtrt=1e-4;var f=0;if(location.host+location.pathname==="h5.m.taobao.com/app/moviemain/pages/show-cinema-list/index.html"){f=1}else if(!/Mobile/.test(t)){var v=["taobao.com","alibaba.com","alipay.com","tmall.com","lazada","aliexpress.com","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz.lk","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode.cn"];for(var h=0;h<v.length;h++){if(location.host&&~location.host.indexOf(v[h])){f=1;break}}}if(f){var p=["1.0.52","b",63];var g=["1.0.59","b",70];var u=1e4;var _=p;if((Math.random()*1e4|0)<u){_=g}if(!_){return}var b=r+"nsv/"+_[0]+"/";var j=b+"ns_"+_[1]+"_"+_[2]+"_3_f.js";var k=b+"ns_"+_[1]+"_"+_[2]+"_3_n.js";function x(){var e="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in a.documentElement.style){if(escape(i.javaEnabled.toString())===e){return true}}return false}var y=t.match(/Edge\/([\d]*)/);var E=t.match(/Safari\/([\d]*)/);var C=t.match(/Firefox\/([\d]*)/);var M=t.match(/MSIE|Trident/);if(y){n(j)}else if(l){n(j)}else if(E||C||M){n(k)}else{if(x()){n(j)}else{n(k)}}}})(document,Math.random,navigator);