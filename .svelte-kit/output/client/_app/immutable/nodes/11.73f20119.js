import{S as Te,i as Ve,s as Pe,a as y,k as d,q as M,M as ye,L as Me,h as s,c as E,l as i,m as r,r as O,N as Ee,J as Oe,n as e,O as Se,b as Q,D as t,P as De,K as Ae,H as ke,Q as je,u as Be,R as Ne}from"../chunks/index.a5951acf.js";const qe=async({fetch:h})=>{const a=await(await h("/api/apkVersions")).json();var l=[];return a.data.map(c=>{l.push(c.slice(19,-4))}),l.sort().reverse(),{versions:l}},Ue=Object.freeze(Object.defineProperty({__proto__:null,load:qe},Symbol.toStringTag,{value:"Module"}));function Ie(h,v,a){const l=h.slice();return l[3]=v[a],l[5]=a,l}function Le(h){let v,a,l=h[3]+"",c,_;return{c(){v=M(`}
                    `),a=d("option"),c=M(l),this.h()},l(u){v=O(u,`}
                    `),a=i(u,"OPTION",{});var p=r(a);c=O(p,l),p.forEach(s),this.h()},h(){a.__value=_=h[3],a.value=a.__value,a.selected=h[5]==0},m(u,p){Q(u,v,p),Q(u,a,p),t(a,c)},p(u,p){p&2&&l!==(l=u[3]+"")&&Be(c,l),p&2&&_!==(_=u[3])&&(a.__value=_,a.value=a.__value)},d(u){u&&s(v),u&&s(a)}}}function ze(h){let v,a,l,c,_,u,p,A,R,F,j,W,X,m,g,Z,D,k,$,U,ee,b,B,I,L,N,te,ae,T,w,S,le,V,q,se,oe,z,re,ne,ie,C=h[1],f=[];for(let o=0;o<C.length;o+=1)f[o]=Le(Ie(h,C,o));return{c(){v=y(),a=d("div"),l=d("div"),c=d("div"),_=d("img"),p=y(),A=d("p"),R=M("Download DEDAL"),F=y(),j=d("p"),W=M("Take your backpacker's guide 2.0 with you on your device."),X=y(),m=d("div"),g=d("select");for(let o=0;o<f.length;o+=1)f[o].c();Z=y(),D=d("a"),k=d("button"),$=M("Download"),ee=y(),b=d("div"),B=d("div"),I=d("div"),L=d("div"),N=d("h3"),te=M("Thanks you for download DEDAL"),ae=y(),T=d("button"),w=ye("svg"),S=ye("path"),le=y(),V=d("div"),q=d("p"),se=M("It really does mean a lot for us"),oe=y(),z=d("p"),re=M("You will be redirected to the homepage soon"),this.h()},l(o){Me("svelte-v95g2a",document.head).forEach(s),v=E(o),a=i(o,"DIV",{class:!0});var n=r(a);l=i(n,"DIV",{class:!0});var x=r(l);c=i(x,"DIV",{});var Y=r(c);_=i(Y,"IMG",{src:!0,class:!0,alt:!0}),p=E(Y),A=i(Y,"P",{class:!0});var ce=r(A);R=O(ce,"Download DEDAL"),ce.forEach(s),Y.forEach(s),F=E(x),j=i(x,"P",{class:!0});var ue=r(j);W=O(ue,"Take your backpacker's guide 2.0 with you on your device."),ue.forEach(s),X=E(x),m=i(x,"DIV",{class:!0});var H=r(m);g=i(H,"SELECT",{id:!0,class:!0,"aria-label":!0});var he=r(g);for(let de=0;de<f.length;de+=1)f[de].l(he);he.forEach(s),Z=E(H),D=i(H,"A",{href:!0,download:!0});var ve=r(D);k=i(ve,"BUTTON",{class:!0,type:!0,"data-modal-toggle":!0});var fe=r(k);$=O(fe,"Download"),fe.forEach(s),ve.forEach(s),ee=E(H),b=i(H,"DIV",{id:!0,tabindex:!0,"aria-hidden":!0,class:!0});var _e=r(b);B=i(_e,"DIV",{class:!0});var ge=r(B);I=i(ge,"DIV",{class:!0});var G=r(I);L=i(G,"DIV",{class:!0});var J=r(L);N=i(J,"H3",{class:!0});var pe=r(N);te=O(pe,"Thanks you for download DEDAL"),pe.forEach(s),ae=E(J),T=i(J,"BUTTON",{type:!0,class:!0,"data-modal-toggle":!0});var me=r(T);w=Ee(me,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var be=r(w);S=Ee(be,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),r(S).forEach(s),be.forEach(s),me.forEach(s),J.forEach(s),le=E(G),V=i(G,"DIV",{class:!0});var K=r(V);q=i(K,"P",{class:!0});var we=r(q);se=O(we,"It really does mean a lot for us"),we.forEach(s),oe=E(K),z=i(K,"P",{class:!0});var xe=r(z);re=O(xe,"You will be redirected to the homepage soon"),xe.forEach(s),K.forEach(s),G.forEach(s),ge.forEach(s),_e.forEach(s),H.forEach(s),x.forEach(s),n.forEach(s),this.h()},h(){document.title="DEDAL: Download",Oe(_.src,u="Smartphone_logo.png")||e(_,"src",u),e(_,"class","m-auto"),e(_,"alt","Smartphone_logo"),e(A,"class","text-6xl text-white font-bold"),e(j,"class","text-2xl text-white tracking-widest"),e(g,"id","version_select"),e(g,"class","form-select text-center font-bold appearance-none block px-3 py-1.5 text-white bg-secondary rounded-lg shadow-lg transition ease-in-out m-0"),e(g,"aria-label","Default select example"),h[0]===void 0&&Se(()=>h[2].call(g)),e(k,"class","btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary"),e(k,"type","button"),e(k,"data-modal-toggle","defaultModal"),e(D,"href",U="http://localhost:8080/download_apk?version="+h[0]),e(D,"download",""),e(N,"class","text-xl font-semibold text-gray-900 dark:text-white"),e(S,"fill-rule","evenodd"),e(S,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),e(S,"clip-rule","evenodd"),e(w,"class","w-5 h-5"),e(w,"fill","currentColor"),e(w,"viewBox","0 0 20 20"),e(w,"xmlns","http://www.w3.org/2000/svg"),e(T,"type","button"),e(T,"class","text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"),e(T,"data-modal-toggle","defaultModal"),e(L,"class","flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"),e(q,"class","text-base leading-relaxed text-gray-500 dark:text-gray-400"),e(z,"class","text-base leading-relaxed text-gray-500 dark:text-gray-400"),e(V,"class","p-6 space-y-6"),e(I,"class","relative bg-white rounded-lg shadow dark:bg-gray-700"),e(B,"class","relative p-4 w-full max-w-2xl h-full md:h-auto"),e(b,"id","defaultModal"),e(b,"tabindex","-1"),e(b,"aria-hidden","true"),e(b,"class","hidden overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full"),e(m,"class","flex justify-center"),e(l,"class","m-auto text-center space-y-10"),e(a,"class","flex min-h-screen bg-primary bg-gradient-to-tl from-secondary")},m(o,P){Q(o,v,P),Q(o,a,P),t(a,l),t(l,c),t(c,_),t(c,p),t(c,A),t(A,R),t(l,F),t(l,j),t(j,W),t(l,X),t(l,m),t(m,g);for(let n=0;n<f.length;n+=1)f[n]&&f[n].m(g,null);De(g,h[0],!0),t(m,Z),t(m,D),t(D,k),t(k,$),t(m,ee),t(m,b),t(b,B),t(B,I),t(I,L),t(L,N),t(N,te),t(L,ae),t(L,T),t(T,w),t(w,S),t(I,le),t(I,V),t(V,q),t(q,se),t(V,oe),t(V,z),t(z,re),ne||(ie=Ae(g,"change",h[2]),ne=!0)},p(o,[P]){if(P&2){C=o[1];let n;for(n=0;n<C.length;n+=1){const x=Ie(o,C,n);f[n]?f[n].p(x,P):(f[n]=Le(x),f[n].c(),f[n].m(g,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=C.length}P&3&&De(g,o[0]),P&3&&U!==(U="http://localhost:8080/download_apk?version="+o[0])&&e(D,"href",U)},i:ke,o:ke,d(o){o&&s(v),o&&s(a),je(f,o),ne=!1,ie()}}}function Ce(h,v,a){let{versions:l=[]}=v,{selected:c=void 0}=v;function _(){c=Ne(this),a(0,c),a(1,l)}return h.$$set=u=>{"versions"in u&&a(1,l=u.versions),"selected"in u&&a(0,c=u.selected)},[c,l,_]}class Ye extends Te{constructor(v){super(),Ve(this,v,Ce,ze,Pe,{versions:1,selected:0})}}export{Ye as component,Ue as universal};