import{cs as I,ct as _,c2 as A,aL as P,b5 as m,cu as y,b7 as b,cv as C,b3 as E,bn as R,c8 as a}from"./index-5716a5d2.js";function O(t){return function(n){return n==null?void 0:n[t]}}var D=1,M=2;function T(t,n,e,s){var r=e.length,c=r,d=!s;if(t==null)return!c;for(t=Object(t);r--;){var i=e[r];if(d&&i[2]?i[1]!==t[i[0]]:!(i[0]in t))return!1}for(;++r<c;){i=e[r];var u=i[0],o=t[u],f=i[1];if(d&&i[2]){if(o===void 0&&!(u in t))return!1}else{var g=new I;if(s)var p=s(o,f,u,t,n,g);if(!(p===void 0?_(f,o,D|M,s,g):p))return!1}}return!0}function h(t){return t===t&&!A(t)}function L(t){for(var n=P(t),e=n.length;e--;){var s=n[e],r=t[s];n[e]=[s,r,h(r)]}return n}function l(t,n){return function(e){return e==null?!1:e[t]===n&&(n!==void 0||t in Object(e))}}function S(t){var n=L(t);return n.length==1&&n[0][2]?l(n[0][0],n[0][1]):function(e){return e===t||T(e,t,n)}}function v(t,n,e){var s=t==null?void 0:m(t,n);return s===void 0?e:s}var x=1,G=2;function F(t,n){return y(t)&&h(n)?l(b(t),n):function(e){var s=v(e,t);return s===void 0&&s===n?C(e,t):_(n,s,x|G)}}function B(t){return function(n){return m(n,t)}}function K(t){return y(t)?O(b(t)):B(t)}function U(t){return typeof t=="function"?t:t==null?E:typeof t=="object"?R(t)?F(t[0],t[1]):S(t):K(t)}const $=async()=>(await a.get("/db/basic_info")).data,q=async()=>(await a.get("/db/expired_dirs")).data,H=async()=>{await a.post("/db/update_image_data",{},{timeout:1/0})},J=async t=>(await a.post("/db/match_images_by_tags",t)).data,Q=async t=>(await a.post("/db/add_custom_tag",t)).data,W=async t=>(await a.post("/db/toggle_custom_tag_to_img",t)).data,X=async t=>{await a.post("/db/remove_custom_tag",t)},Y=async t=>(await a.get("/db/img_selected_custom_tag",{params:{path:t}})).data,Z=async t=>(await a.get("/db/search_by_substr",{params:{substr:t}})).data,w="/db/scanned_paths",z=async t=>{await a.post(w,{path:t})},k=async t=>{await a.delete(w,{data:{path:t}})};export{$ as a,U as b,q as c,Q as d,Z as e,Y as f,J as g,k as h,z as i,X as r,W as t,H as u};