(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[5481],{1350:(l,e,t)=>{"use strict";t.d(e,{a:()=>f});var n=t(67294),a=t(62853),o=t(14293),r=t.n(o),d=t(86896),L=t(16550),E=t(75021);const u="strapi-notification-seat-limit",m="https://cloud.strapi.io/profile/billing",_="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:i}=(0,d.Z)(),{license:M,isError:c,isLoading:D}=(0,E.q)(),T=(0,a.lm)(),{pathname:O}=(0,L.TH)(),{enforcementUserCount:C,permittedSeats:I,licenseLimitStatus:s,isHostedOnStrapiCloud:P}=M;n.useEffect(()=>{if(c||D)return;const A=!r()(I)&&!window.sessionStorage.getItem(`${u}-${O}`)&&(s==="AT_LIMIT"||s==="OVER_LIMIT");let g;s==="OVER_LIMIT"?g="warning":s==="AT_LIMIT"&&(g="softWarning"),A&&T({type:g,message:i({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:s}),title:i({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:s,enforcementUserCount:C,permittedSeats:I}),link:{url:P?m:_,label:i({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:P})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${u}-${O}`,"true")}})},[T,M,O,i,D,I,s,C,P,c])}},75021:(l,e,t)=>{"use strict";t.d(e,{q:()=>r});var n=t(67294),a=t(62853),o=t(88767);function r({enabled:d}={enabled:!0}){const{get:L}=(0,a.kY)(),{data:E,isError:u,isLoading:m}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await L("/admin/license-limit-information");return i},{enabled:d}),_=n.useMemo(()=>E??{},[E]),f=n.useCallback(i=>(_?.features??[]).find(c=>c.name===i)?.options??{},[_?.features]);return{license:_,getFeature:f,isError:u,isLoading:m}}},17403:(l,e,t)=>{"use strict";t.r(e),t.d(e,{UserListPageEE:()=>r});var n=t(67294),a=t(61611),o=t(1350);function r(){return(0,o.a)(),n.createElement(a.W,null)}},14293:l=>{function e(t){return t==null}l.exports=e}}]);
