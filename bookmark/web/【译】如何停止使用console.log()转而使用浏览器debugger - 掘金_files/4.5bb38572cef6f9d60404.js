(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8,14,34],{1471:function(t,e,n){t.exports=n.p+"static/img/zan-active.930baa2.svg"},1472:function(t,e,n){"use strict";function o(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}n.d(e,"a",function(){return o})},25:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r}),n.d(e,"g",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"f",function(){return s}),n.d(e,"e",function(){return u}),n.d(e,"b",function(){return c});var o="5b30c3b351882574957a788f";function r(t,e){var n=i(t,isNaN(e)?1:e/10);return 0===n?0:n.toFixed(2)}function i(t,e){var n=0,o=t.toString(),r=e.toString();try{n+=o.split(".")[1].length}catch(t){}try{n+=r.split(".")[1].length}catch(t){}var i=(o=Number(o.replace(".","")))*(r=Number(r.replace(".","")))/Math.pow(10,n),a=0<e?.01:0;return Math.max(a,i)}function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{free:0,charge:10},e=t.free,n=t.charge;return 0<e?0:n<10?n:10}function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[t.timeLimitDiscount,t.timeLimitDiscountFirstDay].some(function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.startUTC,n=void 0===e?null:e,o=t.endUTC,r=void 0===o?null:o,i=(t.discountCount,+new Date),a=+new Date(n),s=+new Date(r);return a<i&&i<s})}function u(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},h=t.id,d=[{title:"早鸟价",type:"timeLimitDiscountFirstDay"},{title:"限时优惠价",type:"timeLimitDiscount"}],e=t.timeLimitDiscount,n=void 0===e?{}:e,o=t.timeLimitDiscountFirstDay,r=[void 0===o?{}:o,n].map(function(t,e){var n=t.startUTC,o=void 0===n?null:n,r=t.endUTC,i=void 0===r?null:r,a=t.discountCount,s=void 0===a?10:a,u=+new Date(o),c=+new Date(i),l=s;return Object.assign({id:h},d[e],{startTime:u,endTime:c,sale:l})}),i={},a=0;a<2;a++){var s=+new Date,u=r[a],c=u.startTime,l=void 0===c?null:c,f=u.endTime,g=void 0===f?null:f,p=u.sale,m=void 0===p?10:p;if(0<=m&&m<10&&(l<s&&s<g)){i=r[a];break}}return i}function c(t,e){for(var n=[{className:"current",text:t,No:t}],o=1;o<=3;o++)1<t-o&&n.unshift({className:"",text:t-o,No:t-o}),t+o<e&&n.push({className:"",text:t+o,No:t+o});return 1<t-4&&n.unshift({className:"omit",text:"...",No:null}),1<t&&n.unshift({className:"prev",text:"上一页",No:t-1},{className:"",text:"1",No:1}),t+4<e&&n.push({className:"omit",text:"...",No:null}),t<e&&n.push({className:"",text:e,No:e},{className:"next",text:"下一页",No:t+1}),1<n.length?n:[]}},2742:function(t,e,n){"use strict";e.a={url:"https://juejin.im/extension/?utm_source=juejin.im&utm_medium=post&utm_campaign=extension_promotion",title:"安装掘金浏览器插件",content:"打开新标签页发现好内容，掘金、GitHub、Dribbble、ProductHunt 等站点内容轻松获取。快来安装掘金浏览器插件获取高质量内容吧！"}},2790:function(t,e,n){t.exports=n.p+"static/img/collection.77d703d.svg"},2791:function(t,e,n){"use strict"},2792:function(t,e,n){t.exports=n.p+"static/img/welcome.6f27533.png"},2793:function(t,e,n){t.exports=n.p+"static/img/timeline.e011f09.png"},2794:function(t,e,n){t.exports=n.p+"static/img/zhuanlan.9e7bee2.png"},2795:function(t,e,n){t.exports=n.p+"static/img/collections.eec2cd9.png"},2796:function(t,e,n){t.exports=n.p+"static/img/explore.2a0f594.png"},2797:function(t,e,n){t.exports=n.p+"static/img/entry.7c9ce29.png"},2798:function(t,e,n){t.exports=n.p+"static/img/detail.6e4b8cc.png"},2799:function(t,e,n){t.exports=n.p+"static/img/post.7cb7332.png"},2800:function(t,e,n){t.exports=n.p+"static/img/more.4e6dd54.svg"},2801:function(t,e,n){t.exports=n.p+"static/img/comment.4d5744f.svg"},2802:function(t,e,n){t.exports=n.p+"static/img/share.1d55e69.svg"},2803:function(t,e,n){t.exports=n.p+"static/img/weibo.8e2f5d6.svg"},2804:function(t,e,n){t.exports=n.p+"static/img/wechat.844402c.svg"},2805:function(t,e,n){t.exports=n.p+"static/img/collected.326b3ff.svg"},2806:function(t,e,n){t.exports=n.p+"static/img/collect.02e2979.svg"},2807:function(t,e,n){t.exports=n.p+"static/img/more.4e6dd54.svg"},2808:function(t,e,n){t.exports=n.p+"static/img/share.1d55e69.svg"},2809:function(t,e,n){t.exports=n.p+"static/img/weibo.8e2f5d6.svg"},2810:function(t,e,n){t.exports=n.p+"static/img/wechat.844402c.svg"},2813:function(t,e,n){t.exports=n.p+"static/img/45.b99ea03.svg"},2814:function(t,e,n){t.exports=n.p+"static/img/empty-comment.40bc8a6.svg"},2831:function(t,e,n){t.exports=n.p+"static/img/default.73b4737.png"},2832:function(t,e,n){t.exports=n.p+"static/img/default.1fb7a71.png"},2833:function(t,e,n){t.exports=n.p+"static/img/frontend.36d7923.png"},2834:function(t,e,n){t.exports=n.p+"static/img/frontend.1dae74a.png"},2835:function(t,e,n){t.exports=n.p+"static/img/backend.58ef824.png"},2836:function(t,e,n){t.exports=n.p+"static/img/backend.ba44b94.png"},2837:function(t,e,n){t.exports=n.p+"static/img/android.adc945b.png"},2838:function(t,e,n){t.exports=n.p+"static/img/android.fef4da1.png"},2839:function(t,e,n){t.exports=n.p+"static/img/ios.f827b0c.png"},2840:function(t,e,n){t.exports=n.p+"static/img/ios.c0a0c8c.png"},2841:function(t,e,n){t.exports=n.p+"static/img/ai.9fab33c.png"},2842:function(t,e,n){t.exports=n.p+"static/img/ai.ecada1f.png"},2843:function(t,e,n){t.exports=n.p+"static/img/flutter.168df7b.png"},2844:function(t,e,n){t.exports=n.p+"static/img/flutter.851314d.png"},2845:function(t,e,n){t.exports=n.p+"static/img/devops.ea48c57.png"},2846:function(t,e,n){t.exports=n.p+"static/img/devops.6b1a320.png"},2847:function(t,e,n){t.exports=n.p+"static/img/zan.e9d7698.svg"},2848:function(t,e,n){t.exports=n.p+"static/img/comment.a7c8341.svg"},2927:function(t,e,n){t.exports=n.p+"static/img/article-loading.fca922e.png"},2931:function(t,e,o){function n(t){this.mode=i.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var o=[],r=this.data.charCodeAt(e);65536<r?(o[0]=240|(1835008&r)>>>18,o[1]=128|(258048&r)>>>12,o[2]=128|(4032&r)>>>6,o[3]=128|63&r):2048<r?(o[0]=224|(61440&r)>>>12,o[1]=128|(4032&r)>>>6,o[2]=128|63&r):128<r?(o[0]=192|(1984&r)>>>6,o[1]=128|63&r):o[0]=r,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function u(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}n.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,n=this.parsedData.length;e<n;e++)t.put(this.parsedData[e],8)}},u.prototype={addData:function(t){var e=new n(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+n][e+o]=0<=n&&n<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var o=w.getLostPoint(this);(0==n||o<t)&&(t=o,e=n)}return e},createMovieClip:function(t,e,n){var o=t.createEmptyMovieClip(e,n);this.make();for(var r=0;r<this.modules.length;r++)for(var i=1*r,a=0;a<this.modules[r].length;a++){var s=1*a;this.modules[r][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=w.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var o=t[e],r=t[n];if(null==this.modules[o][r])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][r+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=w.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var o=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=o}for(n=0;n<18;n++){o=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=o}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,o=w.getBCHTypeInfo(n),r=0;r<15;r++){var i=!t&&1==(o>>r&1);r<6?this.modules[r][8]=i:r<8?this.modules[r+1][8]=i:this.modules[this.moduleCount-15+r][8]=i}for(r=0;r<15;r++){i=!t&&1==(o>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=i:r<9?this.modules[8][15-r-1+1]=i:this.modules[8][15-r-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,o=this.moduleCount-1,r=7,i=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>r&1)),w.getMask(e,o,a-s)&&(u=!u),this.modules[o][a-s]=u,-1==--r&&(i++,r=7)}if((o+=n)<0||this.moduleCount<=o){o-=n,n=-n;break}}}},u.PAD0=236,u.PAD1=17,u.createData=function(t,e,n){for(var o=L.getRSBlocks(t,e),r=new C,i=0;i<n.length;i++){var a=n[i];r.put(a.mode,4),r.put(a.getLength(),w.getLengthInBits(a.mode,t)),a.write(r)}var s=0;for(i=0;i<o.length;i++)s+=o[i].dataCount;if(r.getLengthInBits()>8*s)throw new Error("code length overflow. ("+r.getLengthInBits()+">"+8*s+")");for(r.getLengthInBits()+4<=8*s&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*s||(r.put(u.PAD0,8),r.getLengthInBits()>=8*s));)r.put(u.PAD1,8);return u.createBytes(r,o)},u.createBytes=function(t,e){for(var n=0,o=0,r=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var u=e[s].dataCount,c=e[s].totalCount-u;o=Math.max(o,u),r=Math.max(r,c),i[s]=new Array(u);for(var l=0;l<i[s].length;l++)i[s][l]=255&t.buffer[l+n];n+=u;var h=w.getErrorCorrectPolynomial(c),d=new b(i[s],h.getLength()-1).mod(h);a[s]=new Array(h.getLength()-1);for(l=0;l<a[s].length;l++){var f=l+d.getLength()-a[s].length;a[s][l]=0<=f?d.get(f):0}}var g=0;for(l=0;l<e.length;l++)g+=e[l].totalCount;var p=new Array(g),m=0;for(l=0;l<o;l++)for(s=0;s<e.length;s++)l<i[s].length&&(p[m++]=i[s][l]);for(l=0;l<r;l++)for(s=0;s<e.length;s++)l<a[s].length&&(p[m++]=a[s][l]);return p};for(var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},a=1,s=0,c=3,l=2,r=0,h=1,d=2,f=3,g=4,p=5,m=6,v=7,w={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=w.getBCHDigit(e)-w.getBCHDigit(w.G15);)e^=w.G15<<w.getBCHDigit(e)-w.getBCHDigit(w.G15);return(t<<10|e)^w.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=w.getBCHDigit(e)-w.getBCHDigit(w.G18);)e^=w.G18<<w.getBCHDigit(e)-w.getBCHDigit(w.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return w.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case r:return(e+n)%2==0;case h:return e%2==0;case d:return n%3==0;case f:return(e+n)%3==0;case g:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case p:return e*n%2+e*n%3==0;case m:return(e*n%2+e*n%3)%2==0;case v:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new b([1],0),n=0;n<t;n++)e=e.multiply(new b([1,y.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:case i.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,o=0;o<e;o++)for(var r=0;r<e;r++){for(var i=0,a=t.isDark(o,r),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var u=-1;u<=1;u++)r+u<0||e<=r+u||0==s&&0==u||a==t.isDark(o+s,r+u)&&i++;5<i&&(n+=3+i-5)}for(o=0;o<e-1;o++)for(r=0;r<e-1;r++){var c=0;t.isDark(o,r)&&c++,t.isDark(o+1,r)&&c++,t.isDark(o,r+1)&&c++,t.isDark(o+1,r+1)&&c++,0!=c&&4!=c||(n+=3)}for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(o,r)&&!t.isDark(o,r+1)&&t.isDark(o,r+2)&&t.isDark(o,r+3)&&t.isDark(o,r+4)&&!t.isDark(o,r+5)&&t.isDark(o,r+6)&&(n+=40);for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(o,r)&&!t.isDark(o+1,r)&&t.isDark(o+2,r)&&t.isDark(o+3,r)&&t.isDark(o+4,r)&&!t.isDark(o+5,r)&&t.isDark(o+6,r)&&(n+=40);var l=0;for(r=0;r<e;r++)for(o=0;o<e;o++)t.isDark(o,r)&&l++;return n+=10*(Math.abs(100*l/e/e-50)/5)}},y={glog:function(t){if(t<1)throw new Error("glog("+t+")");return y.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return y.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},E=0;E<8;E++)y.EXP_TABLE[E]=1<<E;for(E=8;E<256;E++)y.EXP_TABLE[E]=y.EXP_TABLE[E-4]^y.EXP_TABLE[E-5]^y.EXP_TABLE[E-6]^y.EXP_TABLE[E-8];for(E=0;E<255;E++)y.LOG_TABLE[y.EXP_TABLE[E]]=E;function b(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var o=0;o<t.length-n;o++)this.num[o]=t[o+n]}function L(t,e){this.totalCount=t,this.dataCount=e}function C(){this.buffer=[],this.length=0}b.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var o=0;o<t.getLength();o++)e[n+o]^=y.gexp(y.glog(this.get(n))+y.glog(t.get(o)));return new b(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=y.glog(this.get(0))-y.glog(t.get(0)),n=new Array(this.getLength()),o=0;o<this.getLength();o++)n[o]=this.get(o);for(o=0;o<t.getLength();o++)n[o]^=y.gexp(y.glog(t.get(o))+e);return new b(n,0).mod(t)}},L.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],L.getRSBlocks=function(t,e){var n=L.getRsBlockTable(t,e);if(null==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=n.length/3,r=[],i=0;i<o;i++)for(var a=n[3*i+0],s=n[3*i+1],u=n[3*i+2],c=0;c<a;c++)r.push(new L(s,u));return r},L.getRsBlockTable=function(t,e){switch(e){case a:return L.RS_BLOCK_TABLE[4*(t-1)+0];case s:return L.RS_BLOCK_TABLE[4*(t-1)+1];case c:return L.RS_BLOCK_TABLE[4*(t-1)+2];case l:return L.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},C.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var k=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function x(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(0<=this.options.padding))throw new Error("Expected 'padding' value to be non-negative!");if(!(0<this.options.width&&0<this.options.height))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var n=this.options.content,o=function(t,e){for(var n,o,r=(n=t,(o=encodeURI(n).toString().replace(/\%[0-9a-fA-F]{2}/g,"a")).length+(o.length!=n?3:0)),i=1,a=0,s=0,u=k.length;s<=u;s++){var c=k[s];if(!c)throw new Error("Content too long: expected "+a+" but got "+r);switch(e){case"L":a=c[0];break;case"M":a=c[1];break;case"Q":a=c[2];break;case"H":a=c[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(r<=a)break;i++}if(k.length<i)throw new Error("Content too long");return i}(n,this.options.ecl),r=function(t){switch(t){case"L":return a;case"M":return s;case"Q":return c;case"H":return l;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new u(o,r),this.qrcode.addData(n),this.qrcode.make()}x.prototype.svg=function(t){void 0===t&&(t={container:"svg"});for(var e=this.options,n=this.qrcode.modules,o="\r\n",r=e.width,i=e.height,a=n.length,s=r/(a+2*e.padding),u=i/(a+2*e.padding),c='<rect x="0" y="0" width="'+r+'" height="'+i+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+o,l=0;l<a;l++)for(var h=0;h<a;h++){if(n[h][l])c+='<rect x="'+(h*s+e.padding*s).toString()+'" y="'+(l*u+e.padding*u).toString()+'" width="'+s+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+o}var d="";switch(t.container){case"svg":d+='<?xml version="1.0" standalone="yes"?>\r\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+r+'" height="'+i+'">'+o,d+=c,d+="</svg>";break;case"g":d+='<g width="'+r+'" height="'+i+'">'+o,d+=c,d+="</g>";break;default:d+=c}return d},x.prototype.save=function(t,e){var n=this.svg();o(!function(){var t=new Error("Cannot find module 'fs'");throw t.code="MODULE_NOT_FOUND",t}()).writeFile(t,n,e)},t.exports=x},30:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n(2931),r=n.n(o);function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"#000000",n=new r.a({content:t,color:e,padding:0,width:410,height:410,background:"#ffffff",ecl:"L"}).svg();return"data:image/svg+xml;utf8,".concat(encodeURIComponent(n))}},51:function(t,e){t.exports=function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t);var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre";var n=document.createElement("iframe");n.sandbox="allow-same-origin",document.body.appendChild(n);var o=n.contentWindow;o.document.body.appendChild(e);var r=o.getSelection();r||(o=window,r=o.getSelection(),document.body.appendChild(e));var i=o.document.createRange();r.removeAllRanges(),i.selectNode(e),r.addRange(i);var a=!1;try{a=o.document.execCommand("copy")}catch(t){}return r.removeAllRanges(),o.document.body.removeChild(e),document.body.removeChild(n),a?Promise.resolve():Promise.reject()}},71:function(t,e,n){t.exports=function(){"use strict";function u(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]&&arguments[3];return t.addEventListener(e,n,o),function(){t.removeEventListener(e,n,o)}}"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;var t=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},e={threshold:0,interval:200,debounce:!1,reactive:!0,eagerShowing:!1,infoGetter:null,visibleAreaGetter:null,onStateChange:null},l="__JUEJIN_LAZYLOAD";return function(){function n(t,e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,n),this.setOptions(e),this.addOrUpdateElement(t),this.initEventListener()}return t(n,[{key:"setOptions",value:function(t){this.options=o({},e,t)}},{key:"initEventListener",value:function(){var o,r,i,a,s=this;if(this.options.reactive){var t=this.options.debounce?(i=this.options.interval,a=0,function(){for(var t=this,e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];clearTimeout(a),a=setTimeout(function(){return function(){return s.updateState()}.apply(t,n)},i)}):(o=this.options.interval,r=0,o/=2,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];Date.now()-r>=o&&(r=Date.now(),setTimeout(function(){(function(){return s.updateState()}).apply(null,e)},o))});this.removeScrollEventListener=u(window,"scroll",t),this.removeResizeEventListener=u(window,"resize",t)}}},{key:"removeEventListener",value:function(){this.removeScrollEventListener&&this.removeScrollEventListener(),this.removeResizeEventListener&&this.removeResizeEventListener()}},{key:"addOrUpdateElement",value:function(t){var e=this.getElementList(t),n=e.filter(function(t){return!t[l]});this.elementList=(this.elementList||[]).concat(n),e.forEach(this.initElement.bind(this)),this.updateState()}},{key:"removeElement",value:function(t){var e=this.getElementList(t);this.elementList=this.elementList.filter(function(t){return-1===e.indexOf(t)}),e.forEach(this.removeInfo.bind(this))}},{key:"clean",value:function(){this.elementList.forEach(this.removeInfo.bind(this)),this.elementList=[]}},{key:"getElementList",value:function(t){return t?"string"==typeof t?[].slice.call(document.querySelectorAll(t)):"number"==typeof t.length?[].slice.call(t):[t]:[]}},{key:"initElement",value:function(t){this.attachInfo(t),this.setPlaceholder(t),this.updateElementClassByState("inited",t),this.invokeStateHook("inited",t)}},{key:"attachInfo",value:function(t){var e=this.options.infoGetter&&this.options.infoGetter(t),n=o({},e,{loading:!1});t[l]=n}},{key:"setPlaceholder",value:function(t){var e,n,o=t[l];"IMG"===t.nodeName&&o.width&&o.height&&(t.src=(e=o.width,n=o.height,["data:image/svg+xml;utf8,",'<?xml version="1.0"?>','<svg xmlns="http://www.w3.org/2000/svg" version="1.1" ','width="'+e+'" height="'+n+'"',"></svg>"].join("")))}},{key:"removeInfo",value:function(t){t[l]&&(t[l]=null)}},{key:"updateState",value:function(){var a=this;if(this.elementList.length){var s=this.getActiveArea();this.elementList.forEach(function(t){var e,n,o=t[l].loading,r=t.getBoundingClientRect(),i=(e=s,!((n=r).bottom<e.top||n.top>e.bottom||n.right<e.left||n.left>e.right));!o&&i&&a.loadIamge(t)})}}},{key:"getActiveArea",value:function(){var t=this.getVisibleArea(),e=this.options.threshold||0;return{top:t.top-e,left:t.left-e,right:t.right+e,bottom:t.bottom+e}}},{key:"getVisibleArea",value:function(){if(this.options.visibleAreaGetter)return this.options.visibleAreaGetter();var t,e=(t=document.documentElement,{width:Math.max(t.clientWidth,window.innerWidth||0),height:Math.max(t.clientHeight,window.innerHeight||0)});return{top:0,left:0,right:e.width,bottom:e.height}}},{key:"loadIamge",value:function(n){var t,e,o,r,i,a,s=this,u=n[l],c=u.url;u.loading=!0,this.updateElementClassByState("loading",n),this.invokeStateHook("loading",n),t=c,o=(e={onStart:function(t,e){s.options.eagerShowing&&s.onMetaLoaded(e,function(){n.removeAttribute("src"),n.setAttribute("src",t)})},onLoaded:function(){s.setElementWithImageUrl(c,n),s.updateElementClassByState("loaded",n),s.invokeStateHook("loaded",n),s.removeElement(n)},onError:function(){s.updateElementClassByState("error",n),s.invokeStateHook("error",n),s.removeElement(n)}}).onStart,r=e.onLoaded,i=e.onError,(a=new Image).onload=function(){r&&r(t,a)},a.onerror=function(){i&&i(t,a)},a.src=t,o&&o(t,a)}},{key:"updateElementClassByState",value:function(t,e){switch(t){case"inited":e.classList.add("inited"),e.classList.remove("loading"),e.classList.remove("loaded"),e.classList.remove("error");break;case"loading":e.classList.add("loading");break;case"loaded":e.classList.remove("loading"),e.classList.add("loaded");break;case"error":e.classList.remove("loading"),e.classList.add("error")}}},{key:"invokeStateHook",value:function(t,e){if(this.options.onStateChange){var n=e[l].url;this.options.onStateChange(t,n,e,this)}}},{key:"setElementWithImageUrl",value:function(t,e){"IMG"===e.nodeName?e.src=t:e.style.backgroundImage="url("+t+")"}},{key:"onMetaLoaded",value:function(t,e){var n=setInterval(function(){t.naturalWidth&&(o(),e())},300),o=function(){return clearInterval(n)};u(t,"load",o),u(t,"error",o)}},{key:"destroy",value:function(){this.removeEventListener(),this.clean(),this.setOptions({})}}]),n}()}()},73:function(t,e,n){var o,r,i;r=[e,t],void 0===(i="function"==typeof(o=function(t,e){"use strict";var n,o,l="function"==typeof Map?new Map:(n=[],o=[],{has:function(t){return-1<n.indexOf(t)},get:function(t){return o[n.indexOf(t)]},set:function(t,e){-1===n.indexOf(t)&&(n.push(t),o.push(e))},delete:function(t){var e=n.indexOf(t);-1<e&&(n.splice(e,1),o.splice(e,1))}}),h=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){h=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function r(r){if(r&&r.nodeName&&"TEXTAREA"===r.nodeName&&!l.has(r)){var i=null,a=r.clientWidth,s=null,t=function(){r.clientWidth!==a&&o()},n=function(e){window.removeEventListener("resize",t,!1),r.removeEventListener("input",o,!1),r.removeEventListener("keyup",o,!1),r.removeEventListener("autosize:destroy",n,!1),r.removeEventListener("autosize:update",o,!1),Object.keys(e).forEach(function(t){r.style[t]=e[t]}),l.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",n,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",o,!1),window.addEventListener("resize",t,!1),r.addEventListener("input",o,!1),r.addEventListener("autosize:update",o,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",l.set(r,{destroy:n,update:o}),"vertical"===(e=window.getComputedStyle(r,null)).resize?r.style.resize="none":"both"===e.resize&&(r.style.resize="horizontal"),i="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(i)&&(i=0),o()}var e;function u(t){var e=r.style.width;r.style.width="0px",r.offsetWidth,r.style.width=e,r.style.overflowY=t}function c(){var t=r.style.height,e=function(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}(r),n=document.documentElement&&document.documentElement.scrollTop;r.style.height="auto";var o=r.scrollHeight+i;0!==r.scrollHeight?(r.style.height=o+"px",a=r.clientWidth,e.forEach(function(t){t.node.scrollTop=t.scrollTop}),n&&(document.documentElement.scrollTop=n)):r.style.height=t}function o(){c();var t=Math.round(parseFloat(r.style.height)),e=window.getComputedStyle(r,null),n=Math.round(parseFloat(e.height));if(n!==t?"visible"!==e.overflowY&&(u("visible"),c(),n=Math.round(parseFloat(window.getComputedStyle(r,null).height))):"hidden"!==e.overflowY&&(u("hidden"),c(),n=Math.round(parseFloat(window.getComputedStyle(r,null).height))),s!==n){s=n;var o=h("autosize:resized");try{r.dispatchEvent(o)}catch(t){}}}}function i(t){var e=l.get(t);e&&e.destroy()}function a(t){var e=l.get(t);e&&e.update()}var s=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((s=function(t){return t}).destroy=function(t){return t},s.update=function(t){return t}):((s=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return r(t)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],i),t},s.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],a),t}),e.exports=s})?o.apply(e,r):o)||(t.exports=i)},74:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return i});n(90);function o(t,e){t=t||{},e=e||t.parsedContent;var n=t.title||"",o=(e||"").replace(/<.*?>/g,"")||t.content;return{title:n,keywords:r((t.tags||[]).map(function(t){return t.title})),description:i(o)}}function r(t){return(t=t||[]).join(",").replace(/[\r\n\s]+/g," ")}function i(t){return(t=(t||"").trim().slice(0,130)).replace(/[\r\n\s]+/g," ")}}}]);