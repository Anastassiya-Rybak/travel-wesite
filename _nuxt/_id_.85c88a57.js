import{_ as P,u as V,a as D}from"./entry.8a9c63d7.js";import{_ as $}from"./nuxt-link.226bd96e.js";import{a,c as B,P as F,E as k,F as t,G as r,u as s,q as m,l as L,Q as d,R as p,U as M,V as N,W as R,X as J,o as b,H as C,z as T,I as q,J as G}from"./swiper-vue.5803c9e7.js";import{_ as H}from"./dots.6714024c.js";import{J as Q}from"./articles.deddcf04.js";const U=T(()=>D(()=>import("./TheButton.6a28ad3b.js"),["./TheButton.6a28ad3b.js","./entry.8a9c63d7.js","./swiper-vue.5803c9e7.js","./swiper-vue.25ac1039.css","./TheButton.f916cc6d.css"],import.meta.url).then(o=>o.default||o)),W=T(()=>D(()=>import("./TheModalImages.80f40359.js"),["./TheModalImages.80f40359.js","./swiper-vue.5803c9e7.js","./swiper-vue.25ac1039.css","./entry.8a9c63d7.js","./TheModalImages.d00407bd.css"],import.meta.url).then(o=>o.default||o)),x=o=>(q("data-v-8ea01c9a"),o=o(),G(),o),X={class:"post wrapper"},j={class:"post__content"},K={class:"post__article"},Y={class:"post__data"},Z=["datetime"],tt={class:"post__author"},et={class:"post__settings settings"},st=x(()=>t("ul",null,[t("li",null,"Редактировать"),t("li",null,"Удалить")],-1)),ot=[st],at=x(()=>t("img",{src:H,alt:"Настройки"},null,-1)),nt=[at],lt={class:"post__images images"},it=["src","alt"],_t=x(()=>t("figcaption",null,"ВСЕ ФОТО",-1)),ct=["src"],ut={__name:"[id]",setup(o){const{id:w}=V().params,e=Q.articles[w-1],n=a(!1),l=a(null),O=()=>{switch(n.value){case!0:l.value.classList.remove("settings__content_open"),l.value.classList.add("settings__content_close"),setTimeout(()=>{n.value=!n.value},300);break;case!1:setTimeout(()=>{l.value.classList.remove("settings__content_close"),l.value.classList.add("settings__content_open")},10),n.value=!n.value;break}},v=a(null),f=a(!1),_=a(!1),A=B(()=>e.desc>2090?e.desc.slice(0,2090):e.desc),I=c=>{if(c==="full"||c==="cut")switch(c){case"full":v.value.innerText=e.desc,_.value=!0;break;case"cut":v.value.innerText=e.desc.slice(0,2090)+" . . .",_.value=!1;break}else console.log("Invalid argument has been used")},g=a(!1),h=a(!1),S=()=>{h.value=!0};return F(()=>{l.value.classList.add("settings__content_close"),e.desc.length>2090?f.value=!0:f.value=!1,e.desc.length>2090&&I("cut"),e.img.length>3?g.value=!0:g.value=!1}),(c,i)=>{const y=$,z=U,E=W;return b(),k("div",X,[t("span",{class:"post__back",onClick:i[0]||(i[0]=u=>c.$router.push("/blogs"))},"ОБРАТНО"),t("section",j,[t("article",K,[t("header",null,[t("h1",null,r(s(e).title),1)]),t("section",Y,[m(y,{class:"post__destination",to:`/destinations/${s(e).data.destination}`},{default:L(()=>[C(r(s(e).data.destination),1)]),_:1},8,["to"]),t("time",{class:"post__published-at",datetime:s(e).data.publishedAt},r(s(e).data.publishedAt),9,Z),t("address",tt,[m(y,{to:"/profile"},{default:L(()=>[C(r(s(e).author),1)]),_:1})])]),t("p",{class:"post__description",ref_key:"postDescription",ref:v},r(s(A)),513),d(m(z,{class:M([{"post__open-btn_dimmer":_.value},"post__open-btn"]),text:_.value?"Свернуть":"Развернуть",onClick:i[1]||(i[1]=N(u=>I(_.value?"cut":"full"),["prevent"]))},null,8,["class","text"]),[[p,f.value]]),d(t("div",et,[d(t("div",{class:"settings__content",ref_key:"settingsContent",ref:l},ot,512),[[p,n.value]]),t("div",{class:"settings__img",onClick:O},nt)],512),[[p,s(e).author==="Анастаfeffebссия"]])]),t("div",lt,[(b(!0),k(R,null,J(s(e).img.slice(0,3),u=>(b(),k("figure",{class:"images__item",key:u},[t("img",{src:"/images/posts/"+u,alt:s(e).title},null,8,it)]))),128)),d(t("figure",{class:"images__link",onClick:S},[_t,t("img",{src:"/images/posts/"+s(e).img[3],alt:"Остальные фото"},null,8,ct)],512),[[p,g.value]])])]),d(m(E,{imges:s(e).img,onCloseModal:i[2]||(i[2]=u=>h.value=!1)},null,8,["imges"]),[[p,h.value]])])}}},ft=P(ut,[["__scopeId","data-v-8ea01c9a"]]);export{ft as default};