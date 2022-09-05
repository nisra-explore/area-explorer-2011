import{S as f,i as g,s as p,O as y,l as u,m as _,n as m,h as d,p as b,q as c,b as v,I as w,Q as k,R as C,T as I,f as S,t as O,K as E}from"./index-50f9e43e.js";const N={light:{name:"light",text:"#222",muted:"#777",pale:"#f0f0f0",background:"#fff"},dark:{name:"dark",text:"#fff",muted:"#bbb",pale:"#333",background:"#222"}},L={options:"https://datavis.nisra.gov.uk/techlab/2011/places_2001.csv",places:"https://datavis.nisra.gov.uk/techlab/2011/",base:"https://explore.nisra.gov.uk/area-explorer-2011/"},A={dea:{name:"District Electoral Area",pl:"District Electoral Areas"},town:{name:"settlement",pl:"Settlement"},lgd:{name:"Local Government District",pl:"Districts"},postcode:{name:"postcode",pl:"postcode"},ctry:{name:"Country",pl:"Countries"}},M={broad_age_bands_years:[{code:"a0to14_years",label:"0-14"},{code:"a15to44_years",label:"15-44"},{code:"a45to64_years",label:"45-64"},{code:"a65plus_years",label:"65+"}],country_of_birth:[{code:"northern_ireland",label:"Northern Ireland"},{code:"england",label:"England"},{code:"scotland",label:"Scotland"},{code:"wales",label:"Wales"},{code:"republic_of_ireland",label:"Republic of Ireland"},{code:"other",label:"Other country"}],knowledge_of_irish:[{code:"no_ability_in_irish",label:"No ability in Irish"},{code:"some_ability_in_irish",label:"Some ability in Irish"}],ethnic_group:[{code:"white",label:"White"},{code:"asian",label:"Asian"},{code:"black",label:"Black"},{code:"mixed",label:"Mixed"},{code:"other",label:"Other"}],religion:[{code:"catholic",label:"Catholic"},{code:"presbyterian_church_in_ireland",label:"Presbyterian"},{code:"church_of_ireland",label:"Church of Ireland"},{code:"methodist_church_in_ireland",label:"Methodist"},{code:"other_christian_including_christian_related",label:"Other Christian religions"},{code:"other_religions",label:"Other religions"},{code:"no_religion_or_religion_not_stated",label:"No religion/not stated"}],religion_or_religion_brought_up_in:[{code:"catholic",label:"Catholic"},{code:"protestant_and_other_christian_including_christian_related",label:"Protestant & other Christian"},{code:"other_religions",label:"Other religions"},{code:"none",label:"None"}],households:[{code:"all_households"}],population:[{code:"females",label:"Females"},{code:"males",label:"Males"}]},P="https://raw.githubusercontent.com/nisra-explore/map_tiles/main/basemap_styles/style-omt.json",q={crd:{id:"crd",promoteId:"areacd",type:"vector",url:"https://raw.githubusercontent.com/nisra-explore/map_tiles/main/lgd2012/{z}/{x}/{y}.pbf",maxzoom:12},dea:{id:"dea",promoteId:"areacd",type:"vector",url:"https://raw.githubusercontent.com/nisra-explore/map_tiles/main/dea/{z}/{x}/{y}.pbf",minzoom:6,maxzoom:12}},R={lgd:{source:"crd",sourceLayer:"lgd2012",code:"areacd",name:"areanm"},dea:{source:"dea",sourceLayer:"dea",code:"areacd",name:"areanm"}},T={fill:{"fill-color":"rgba(255,255,255,0)","fill-opacity":0},line:{"line-color":"rgba(255,255,255,0)","line-width":1,"line-opacity":0},"fill-active":{"fill-color":["case",["==",["feature-state","selected"],!0],"rgba(255,255,255,0)","grey"],"fill-opacity":["case",["==",["feature-state","hovered"],!0],.3,["!=",["feature-state","selected"],!0],.1,0]},"fill-self":{"fill-color":["case",["==",["feature-state","selected"],!0],"rgb(17,140,123)","grey"],"fill-opacity":["case",["==",["feature-state","hovered"],!0],.3,.1]},"fill-child":{"fill-color":["case",["==",["feature-state","highlighted"],!0],"rgb(17,140,123)","rgba(255,255,255,0)"],"fill-opacity":["case",["==",["feature-state","hovered"],!0],.3,["==",["feature-state","highlighted"],!0],.1,0]},"line-active":{"line-color":["case",["==",["feature-state","selected"],!0],"rgb(17,140,123)","grey"],"line-width":2,"line-opacity":1},"line-self":{"line-color":"rgb(17,140,123)","line-width":2,"line-opacity":["case",["==",["feature-state","selected"],!0],1,0]},"line-child":{"line-color":"rgb(17,140,123)","line-width":1,"line-opacity":["case",["==",["feature-state","highlighted"],!0],1,0]}};function x(r){let a,o,s,l;const n=r[3].default,t=y(n,r,r[2],null);return{c(){a=u("section"),o=u("div"),t&&t.c(),this.h()},l(e){a=_(e,"SECTION",{style:!0});var i=m(a);o=_(i,"DIV",{class:!0});var h=m(o);t&&t.l(h),h.forEach(d),i.forEach(d),this.h()},h(){b(o,"class",s="col-"+(r[1]=="wide"?"wide":r[1]=="narrow"?"narrow":"medium")),c(a,"color",r[0].text),c(a,"background-color",r[0].background)},m(e,i){v(e,a,i),w(a,o),t&&t.m(o,null),l=!0},p(e,[i]){t&&t.p&&(!l||i&4)&&k(t,n,e,e[2],l?I(n,e[2],i,null):C(e[2]),null),(!l||i&2&&s!==(s="col-"+(e[1]=="wide"?"wide":e[1]=="narrow"?"narrow":"medium")))&&b(o,"class",s),(!l||i&1)&&c(a,"color",e[0].text),(!l||i&1)&&c(a,"background-color",e[0].background)},i(e){l||(S(t,e),l=!0)},o(e){O(t,e),l=!1},d(e){e&&d(a),t&&t.d(e)}}}function z(r,a,o){let{$$slots:s={},$$scope:l}=a,{theme:n=E("theme")}=a,{column:t="medium"}=a;return r.$$set=e=>{"theme"in e&&o(0,n=e.theme),"column"in e&&o(1,t=e.column),"$$scope"in e&&o(2,l=e.$$scope)},[n,t,l,s]}class W extends f{constructor(a){super(),g(this,a,z,x,p,{theme:0,column:1})}}export{W as S,A as a,P as b,M as c,T as d,q as e,R as m,N as t,L as u};
