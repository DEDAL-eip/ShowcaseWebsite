import{S as pe,i as _e,s as ve,k as o,q as g,l as n,m as s,r as k,h as r,b as Z,D as e,K as Ee,H as K,y as ge,a as v,z as ke,c as E,J as we,n as d,A as xe,g as De,d as be,B as Ae,I as $e}from"./index.a5951acf.js";import{p as Ie}from"./stores.ddac6f4a.js";function Le(p){let a,m,l,i;return{c(){a=o("button"),m=g("Download APK")},l(t){a=n(t,"BUTTON",{});var c=s(a);m=k(c,"Download APK"),c.forEach(r)},m(t,c){Z(t,a,c),e(a,m),l||(i=Ee(a,"click",p[0]),l=!0)},p:K,i:K,o:K,d(t){t&&r(a),l=!1,i()}}}function Ne(p,a,m){let{apkFileName:l}=a;function i(){const t=`./apk/${l}`,c=document.createElement("a");c.href=t,c.download=l,c.click()}return p.$$set=t=>{"apkFileName"in t&&m(1,l=t.apkFileName)},[i,l]}class Fe extends pe{constructor(a){super(),_e(this,a,Ne,Le,ve,{apkFileName:1})}}function He(p){let a,m,l,i,t,c,ee,P,w,U,V,u,N,x,z,O,F,D,S,G,H,b,J,M,y,A,R,j,T,$,Q,W,I,L,X,B,Y,te;return a=new Fe({props:{apkFileName:ye}}),{c(){ge(a.$$.fragment),m=v(),l=o("header"),i=o("nav"),t=o("a"),c=o("img"),P=v(),w=o("div"),U=g("DEDAL"),V=v(),u=o("ul"),N=o("li"),x=o("a"),z=g("Home"),O=v(),F=o("li"),D=o("a"),S=g("Contact"),G=v(),H=o("li"),b=o("a"),J=g("roadmap"),M=v(),y=o("li"),A=o("a"),R=g("nouveauté"),j=v(),T=o("li"),$=o("a"),Q=g("Download"),W=v(),I=o("div"),L=o("button"),X=g("🇫🇷"),this.h()},l(f){ke(a.$$.fragment,f),m=E(f),l=n(f,"HEADER",{class:!0});var _=s(l);i=n(_,"NAV",{class:!0});var q=s(i);t=n(q,"A",{href:!0,class:!0});var C=s(t);c=n(C,"IMG",{src:!0,class:!0,alt:!0}),P=E(C),w=n(C,"DIV",{class:!0});var ae=s(w);U=k(ae,"DEDAL"),ae.forEach(r),C.forEach(r),V=E(q),u=n(q,"UL",{class:!0});var h=s(u);N=n(h,"LI",{});var le=s(N);x=n(le,"A",{href:!0});var re=s(x);z=k(re,"Home"),re.forEach(r),le.forEach(r),O=E(h),F=n(h,"LI",{});var oe=s(F);D=n(oe,"A",{href:!0});var ne=s(D);S=k(ne,"Contact"),ne.forEach(r),oe.forEach(r),G=E(h),H=n(h,"LI",{});var se=s(H);b=n(se,"A",{href:!0});var ce=s(b);J=k(ce,"roadmap"),ce.forEach(r),se.forEach(r),M=E(h),y=n(h,"LI",{});var ie=s(y);A=n(ie,"A",{href:!0});var fe=s(A);R=k(fe,"nouveauté"),fe.forEach(r),ie.forEach(r),j=E(h),T=n(h,"LI",{});var de=s(T);$=n(de,"A",{href:!0});var ue=s($);Q=k(ue,"Download"),ue.forEach(r),de.forEach(r),h.forEach(r),q.forEach(r),W=E(_),I=n(_,"DIV",{class:!0});var me=s(I);L=n(me,"BUTTON",{});var he=s(L);X=k(he,"🇫🇷"),he.forEach(r),me.forEach(r),_.forEach(r),this.h()},h(){we(c.src,ee="/Dedal_logo.png")||d(c,"src",ee),d(c,"class","mr-3 h-6 sm:h-9"),d(c,"alt","Dedal_logo"),d(w,"class","text-2xl font-semibold whitespace-nowrap"),d(t,"href","/"),d(t,"class","mr-4 text-2xl font-thin md:mr-8"),d(x,"href","/"),d(D,"href","/contact"),d(b,"href","/roadmap"),d(A,"href","/nouveauté"),d($,"href","/Download"),d(u,"class","mr-4 font-bold flex flex-grow items-center gap-4 md:gap-8"),d(i,"class","flex flex-grow"),d(I,"class","flex items-center gap-4 md:gap-8"),d(l,"class","w-full z-50 sticky top-0 flex items-center px-2 text-lg backdrop-blur-sm transition-transform ease-in md:px-6 bg-white")},m(f,_){xe(a,f,_),Z(f,m,_),Z(f,l,_),e(l,i),e(i,t),e(t,c),e(t,P),e(t,w),e(w,U),e(i,V),e(i,u),e(u,N),e(N,x),e(x,z),e(u,O),e(u,F),e(F,D),e(D,S),e(u,G),e(u,H),e(H,b),e(b,J),e(u,M),e(u,y),e(y,A),e(A,R),e(u,j),e(u,T),e(T,$),e($,Q),e(l,W),e(l,I),e(I,L),e(L,X),B=!0,Y||(te=Ee(L,"click",p[0]),Y=!0)},p:K,i(f){B||(De(a.$$.fragment,f),B=!0)},o(f){be(a.$$.fragment,f),B=!1},d(f){Ae(a,f),f&&r(m),f&&r(l),Y=!1,te()}}}let ye="./Dedal.apk";function Te(p,a,m){let l;$e(p,Ie,t=>m(1,l=t));function i(){const t="/fr"+l.url.pathname;window.location.href=t}return[i]}class Ce extends pe{constructor(a){super(),_e(this,a,Te,He,ve,{})}}export{Ce as H};
