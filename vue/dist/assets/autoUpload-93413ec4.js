import{w as Z,t as Ee,d as B,u as ie,r as T,g as F,c as Le,_ as O,a as o,C as De,i as Ne,b as Pe,e as Fe,f as je,v as Be,h as x,T as He,P as h,j as Ue,I as Ve,k as ze,E as Qe,l as Je,m as qe,n as le,o as We,p as Ze,q as ue,s as ce,S as Ge,x as Ye,y as Xe,z as Ke,A as fe,B as ea,D as aa,F as ta,G as j,H as na,J as oa,K as L,L as H,M as A,N as M,O as ae,Q as te,R as U,U as ne,V as z,W as ra,X as sa,Y as ia,Z as la,$ as ua,a0 as ca,a1 as fa,a2 as da}from"./index-15d58da4.js";import{b as va,a as pa,t as de,R as ma,C as ga}from"./index-7dbefb7d.js";import{I as _a}from"./index-20e153e8.js";import{u as Ca}from"./useTaskListStore-75d01b34.js";import{T as ya}from"./task-c4e7c861.js";import{B as Sa}from"./button-9fe11791.js";var ba={success:Ue,info:Ve,error:ze,warning:Qe},xa={success:Je,info:qe,error:le,warning:We},ha=Ee("success","info","warning","error"),$a=function(){return{type:h.oneOf(ha),closable:{type:Boolean,default:void 0},closeText:h.any,message:h.any,description:h.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:h.any,closeIcon:h.any,onClose:Function}},wa=B({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:$a(),setup:function(e,n){var t=n.slots,f=n.emit,l=n.attrs,u=n.expose,y=ie("alert",e),s=y.prefixCls,g=y.direction,m=T(!1),_=T(!1),p=T(),r=function(v){v.preventDefault();var C=p.value;C.style.height="".concat(C.offsetHeight,"px"),C.style.height="".concat(C.offsetHeight,"px"),m.value=!0,f("close",v)},i=function(){var v;m.value=!1,_.value=!0,(v=e.afterClose)===null||v===void 0||v.call(e)};u({animationEnd:i});var c=T({});return function(){var d,v,C=e.banner,$=e.closeIcon,w=$===void 0?(d=t.closeIcon)===null||d===void 0?void 0:d.call(t):$,R=e.closable,k=e.type,S=e.showIcon,E=F(t,e,"closeText"),D=F(t,e,"description"),K=F(t,e,"message"),N=F(t,e,"icon");S=C&&S===void 0?!0:S,k=C&&k===void 0?"warning":k||"info";var Ie=(D?xa:ba)[k]||null;E&&(R=!0);var b=s.value,Oe=Le(b,(v={},O(v,"".concat(b,"-").concat(k),!0),O(v,"".concat(b,"-closing"),m.value),O(v,"".concat(b,"-with-description"),!!D),O(v,"".concat(b,"-no-icon"),!S),O(v,"".concat(b,"-banner"),!!C),O(v,"".concat(b,"-closable"),R),O(v,"".concat(b,"-rtl"),g.value==="rtl"),v)),Te=R?o("button",{type:"button",onClick:r,class:"".concat(b,"-close-icon"),tabindex:0},[E?o("span",{class:"".concat(b,"-close-text")},[E]):w===void 0?o(De,null,null):w]):null,Ae=N&&(Ne(N)?Pe(N,{class:"".concat(b,"-icon")}):o("span",{class:"".concat(b,"-icon")},[N]))||o(Ie,{class:"".concat(b,"-icon")},null),Me=Fe("".concat(b,"-motion"),{appear:!1,css:!0,onAfterLeave:i,onBeforeLeave:function(P){P.style.maxHeight="".concat(P.offsetHeight,"px")},onLeave:function(P){P.style.maxHeight="0px"}});return _.value?null:o(He,Me,{default:function(){return[je(o("div",x(x({role:"alert"},l),{},{style:[l.style,c.value],class:[l.class,Oe],"data-show":!m.value,ref:p}),[S?Ae:null,o("div",{class:"".concat(b,"-content")},[K?o("div",{class:"".concat(b,"-message")},[K]):null,D?o("div",{class:"".concat(b,"-description")},[D]):null]),Te]),[[Be,!m.value]])]}})}}});const Ra=Z(wa);var ka=9007199254740991,Ia=Math.floor;function oe(a,e){var n="";if(!a||e<1||e>ka)return n;do e%2&&(n+=a),e=Ia(e/2),e&&(a+=a);while(e);return n}function Oa(a,e,n){var t=a.length;return n=n===void 0?t:n,!e&&n>=t?a:va(a,e,n)}var Ta="\\ud800-\\udfff",Aa="\\u0300-\\u036f",Ma="\\ufe20-\\ufe2f",Ea="\\u20d0-\\u20ff",La=Aa+Ma+Ea,Da="\\ufe0e\\ufe0f",Na="\\u200d",Pa=RegExp("["+Na+Ta+La+Da+"]");function G(a){return Pa.test(a)}var Fa=pa("length");const ja=Fa;var ve="\\ud800-\\udfff",Ba="\\u0300-\\u036f",Ha="\\ufe20-\\ufe2f",Ua="\\u20d0-\\u20ff",Va=Ba+Ha+Ua,za="\\ufe0e\\ufe0f",Qa="["+ve+"]",Q="["+Va+"]",J="\\ud83c[\\udffb-\\udfff]",Ja="(?:"+Q+"|"+J+")",pe="[^"+ve+"]",me="(?:\\ud83c[\\udde6-\\uddff]){2}",ge="[\\ud800-\\udbff][\\udc00-\\udfff]",qa="\\u200d",_e=Ja+"?",Ce="["+za+"]?",Wa="(?:"+qa+"(?:"+[pe,me,ge].join("|")+")"+Ce+_e+")*",Za=Ce+_e+Wa,Ga="(?:"+[pe+Q+"?",Q,me,ge,Qa].join("|")+")",re=RegExp(J+"(?="+J+")|"+Ga+Za,"g");function Ya(a){for(var e=re.lastIndex=0;re.test(a);)++e;return e}function Y(a){return G(a)?Ya(a):ja(a)}function Xa(a){return a.split("")}var ye="\\ud800-\\udfff",Ka="\\u0300-\\u036f",et="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",tt=Ka+et+at,nt="\\ufe0e\\ufe0f",ot="["+ye+"]",q="["+tt+"]",W="\\ud83c[\\udffb-\\udfff]",rt="(?:"+q+"|"+W+")",Se="[^"+ye+"]",be="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",st="\\u200d",he=rt+"?",$e="["+nt+"]?",it="(?:"+st+"(?:"+[Se,be,xe].join("|")+")"+$e+he+")*",lt=$e+he+it,ut="(?:"+[Se+q+"?",q,be,xe,ot].join("|")+")",ct=RegExp(W+"(?="+W+")|"+ut+lt,"g");function ft(a){return a.match(ct)||[]}function dt(a){return G(a)?ft(a):Xa(a)}var vt=Math.ceil;function we(a,e){e=e===void 0?" ":Ze(e);var n=e.length;if(n<2)return n?oe(e,a):e;var t=oe(e,vt(a/Y(e)));return G(e)?Oa(dt(t),0,a).join(""):t.slice(0,a)}function pt(a,e,n){a=ue(a),e=de(e);var t=e?Y(a):0;return e&&t<e?we(e-t,n)+a:a}const mt=Z(ma),gt=Z(ga);function _t(a,e,n){a=ue(a),e=de(e);var t=e?Y(a):0;return e&&t<e?a+we(e-t,n):a}var Re=function(e){var n=e.value,t=e.formatter,f=e.precision,l=e.decimalSeparator,u=e.groupSeparator,y=u===void 0?"":u,s=e.prefixCls,g;if(typeof t=="function")g=t({value:n});else{var m=String(n),_=m.match(/^(-?)(\d*)(\.(\d+))?$/);if(!_)g=m;else{var p=_[1],r=_[2]||"0",i=_[4]||"";r=r.replace(/\B(?=(\d{3})+(?!\d))/g,y),typeof f=="number"&&(i=_t(i,f,"0").slice(0,f)),i&&(i="".concat(l).concat(i)),g=[o("span",{key:"int",class:"".concat(s,"-content-value-int")},[p,r]),i&&o("span",{key:"decimal",class:"".concat(s,"-content-value-decimal")},[i])]}}return o("span",{class:"".concat(s,"-content-value")},[g])};Re.displayName="StatisticNumber";const Ct=Re;var ke=function(){return{prefixCls:String,decimalSeparator:String,groupSeparator:String,format:String,value:{type:[String,Number,Object]},valueStyle:{type:Object,default:void 0},valueRender:h.any,formatter:h.any,precision:Number,prefix:h.any,suffix:h.any,title:h.any,loading:{type:Boolean,default:void 0}}};const I=B({compatConfig:{MODE:3},name:"AStatistic",props:ce(ke(),{decimalSeparator:".",groupSeparator:",",loading:!1}),slots:["title","prefix","suffix","formatter"],setup:function(e,n){var t=n.slots,f=ie("statistic",e),l=f.prefixCls,u=f.direction;return function(){var y,s,g,m,_,p,r,i=e.value,c=i===void 0?0:i,d=e.valueStyle,v=e.valueRender,C=l.value,$=(y=e.title)!==null&&y!==void 0?y:(s=t.title)===null||s===void 0?void 0:s.call(t),w=(g=e.prefix)!==null&&g!==void 0?g:(m=t.prefix)===null||m===void 0?void 0:m.call(t),R=(_=e.suffix)!==null&&_!==void 0?_:(p=t.suffix)===null||p===void 0?void 0:p.call(t),k=(r=e.formatter)!==null&&r!==void 0?r:t.formatter,S=o(Ct,x({"data-for-update":Date.now()},x(x({},e),{},{prefixCls:C,value:c,formatter:k})),null);return v&&(S=v(S)),o("div",{class:[C,O({},"".concat(C,"-rtl"),u.value==="rtl")]},[$&&o("div",{class:"".concat(C,"-title")},[$]),o(Ge,{paragraph:!1,loading:e.loading},{default:function(){return[o("div",{style:d,class:"".concat(C,"-content")},[w&&o("span",{class:"".concat(C,"-content-prefix")},[w]),S,R&&o("span",{class:"".concat(C,"-content-suffix")},[R])])]}})])}}});var yt=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function St(a,e){var n=a,t=/\[[^\]]*]/g,f=(e.match(t)||[]).map(function(s){return s.slice(1,-1)}),l=e.replace(t,"[]"),u=yt.reduce(function(s,g){var m=Ye(g,2),_=m[0],p=m[1];if(s.indexOf(_)!==-1){var r=Math.floor(n/p);return n-=r*p,s.replace(new RegExp("".concat(_,"+"),"g"),function(i){var c=i.length;return pt(r.toString(),c,"0")})}return s},l),y=0;return u.replace(t,function(){var s=f[y];return y+=1,s})}function bt(a,e){var n=e.format,t=n===void 0?"":n,f=new Date(a).getTime(),l=Date.now(),u=Math.max(f-l,0);return St(u,t)}var xt=1e3/30;function V(a){return new Date(a).getTime()}var ht=function(){return x(x({},ke()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function})};const $t=B({compatConfig:{MODE:3},name:"AStatisticCountdown",props:ce(ht(),{format:"HH:mm:ss"}),setup:function(e,n){var t=n.emit,f=n.slots,l=T(),u=T(),y=function(){var r=e.value,i=V(r);i>=Date.now()?s():g()},s=function(){if(!l.value){var r=V(e.value);l.value=setInterval(function(){u.value.$forceUpdate(),r>Date.now()&&t("change",r-Date.now()),y()},xt)}},g=function(){var r=e.value;if(l.value){clearInterval(l.value),l.value=void 0;var i=V(r);i<Date.now()&&t("finish")}},m=function(r){var i=r.value,c=r.config,d=e.format;return bt(i,x(x({},c),{},{format:d}))},_=function(r){return r};return Xe(function(){y()}),Ke(function(){y()}),fe(function(){g()}),function(){var p=e.value;return o(I,x({ref:u},x(x({},ea(e,["onFinish","onChange"])),{},{value:p,valueRender:_,formatter:m})),f)}}});I.Countdown=$t;I.install=function(a){return a.component(I.name,I),a.component(I.Countdown.name,I.Countdown),a};I.Countdown;var wt={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"}}]},name:"loading-3-quarters",theme:"outlined"};const Rt=wt;function se(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable}))),t.forEach(function(f){kt(a,f,n[f])})}return a}function kt(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var X=function(e,n){var t=se({},e,n.attrs);return o(aa,se({},t,{icon:Rt}),null)};X.displayName="Loading3QuartersOutlined";X.inheritAttrs=!1;const It=X,Ot=a=>(la("data-v-1a11dcf1"),a=a(),ua(),a),Tt={class:"container"},At={class:"log-container"},Mt=Ot(()=>z("h2",null," 实时日志 ",-1)),Et={class:"scroll-container"},Lt=["onClick"],Dt=B({__name:"autoUpload",props:{tabIdx:null},emits:["runningChange"],setup(a,{emit:e}){const n=a,t=ta(),f=Ca(),l=T([]),u=T(),y=j(()=>!!(u.value||l.value.length));na(()=>e("runningChange",y.value));const s=oa(new Map),g=j(()=>Array.from(s.values())),m=j(()=>g.value.reduce((c,d)=>c+d.n_success_files,0)),_=j(()=>g.value.reduce((c,d)=>c+d.n_failed_files,0));fe(()=>{var c;(c=u.value)==null||c.clearTask()});const p=()=>ya.run({action:async()=>{const c=await ca(t.autoUploadRecvDir);if(c.tick_info){const d=c.tick_info;s.set(d.task_summary.id,d.task_summary),f.taskLogMap.set(d.task_summary.id,d.tasks)}return l.value=c.pending_files,await fa(1e4*Math.random()),c},pollInterval:3e4}),r=async()=>{u.value?(u.value.clearTask(),u.value=void 0,l.value=[]):u.value=p()},i=c=>{t.openLogDetailInRight(n.tabIdx,c)};return(c,d)=>{const v=_a,C=Sa,$=I,w=gt,R=mt,k=Ra;return L(),H("div",Tt,[o(v,{value:A(t).autoUploadRecvDir,"onUpdate:value":d[0]||(d[0]=S=>A(t).autoUploadRecvDir=S)},null,8,["value"]),o(C,{onClick:r},{default:M(()=>[u.value?(L(),ae(A(It),{key:0,spin:""})):te("",!0),U(" "+ne(u.value?"暂停":"开始"),1)]),_:1}),o(R,null,{default:M(()=>[o(w,{span:12},{default:M(()=>[o($,{title:"等待上传数量",value:l.value.length,style:{"margin-right":"50px"}},null,8,["value"])]),_:1}),o(w,{span:12},{default:M(()=>[o($,{title:"上传失败数量",value:A(_)},null,8,["value"])]),_:1})]),_:1}),o(R,null,{default:M(()=>[o(w,{span:12},{default:M(()=>[o($,{title:"已完成数量",value:A(m),style:{"margin-right":"50px"}},null,8,["value"])]),_:1})]),_:1}),z("div",At,[Mt,U(),o(k,{message:"提示",description:"点击下面查看具体日志，若有日志错误内包含名字不合规，可尝试在sd-webui的设置页换一种图像文件名格式，例如[datetime<%Y-%m-%d %H-%M-%S>]",type:"info","show-icon":""}),z("ul",Et,[(L(!0),H(ra,null,sa(s.values(),S=>(L(),H("li",{key:S.id,class:ia({err:S.n_failed_files}),onClick:E=>i(S.id)},[S.n_failed_files?(L(),ae(A(le),{key:0})):te("",!0),U(" 开始于："+ne(S.start_time),1)],10,Lt))),128))])])])}}});const Ut=da(Dt,[["__scopeId","data-v-1a11dcf1"]]);export{Ut as default};