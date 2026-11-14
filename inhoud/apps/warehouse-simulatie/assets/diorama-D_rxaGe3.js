import{P as Ms,a as Zd,b as vo,z as Jd,c as $d,r as Qd,w as jd,k as ef,v as Ac,V as Vs,p as tf,d as nf,M as sf,e as rf,f as Rc,g as of,B as Zi,L as Cc,h as af,i as Lc,j as lf,l as cf}from"./index-BJQfjNtv.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="187",hf=0,Pc=1,uf=2,cr=1,df=2,sr=3,Ni=0,un=1,Nn=2,Es=0,hr=1,Dc=2,Ic=3,Nc=4,ff=5,Ss=100,pf=101,mf=102,gf=103,_f=104,xf=200,vf=201,yf=202,Sf=203,Pu=204,Du=205,Mf=206,Ef=207,Tf=208,bf=209,wf=210,Af=211,Rf=212,Cf=213,Lf=214,za=0,Ha=1,Ga=2,gr=3,Va=4,Wa=5,Xa=6,Ya=7,kl=0,Pf=1,Df=2,mi=0,Iu=1,Nu=2,Ou=3,Uu=4,Fu=5,Bu=6,ku=7,Oc="attached",If="detached",zu=300,As=301,_r=302,qo=303,Ko=304,Rs=1e3,Qn=1001,wo=1002,Ft=1003,Hu=1004,rr=1005,Zt=1006,yo=1007,jn=1008,xn=1009,Gu=1010,Vu=1011,xr=1012,zl=1013,ti=1014,wn=1015,ni=1016,Hl=1017,Gl=1018,Cs=1020,Wu=35902,Xu=35899,Yu=1021,qu=1022,Un=1023,Oi=1026,Di=1027,Vl=1028,Wl=1029,$i=1030,Xl=1031,Yl=1033,So=33776,Mo=33777,Eo=33778,To=33779,qa=35840,Ka=35841,Za=35842,Ja=35843,$a=36196,Qa=37492,ja=37496,el=37488,tl=37489,Ao=37490,nl=37491,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,vl=36495,yl=36283,Sl=36284,Ro=36285,Ml=36286,vr=2300,yr=2301,Zo=2302,Uc=2303,Fc=2400,Bc=2401,kc=2402,Nf=2500,Of=0,Ku=1,El=2,Uf=3200,Co=0,Ff=1,Pi="",Kt="srgb",vn="srgb-linear",Lo="linear",vt="srgb",Jo=7680,Bf=519,kf=512,zf=513,Hf=514,Zu=515,Gf=516,Vf=517,Ju=518,$u=519,Qu=35044,zc="300 es",Fn=2e3,Sr=2001;function Wf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yf(){const s=Mr("canvas");return s.style.display="block",s}const Hc={};function Po(...s){const e="THREE."+s.shift();console.log(e,...s)}function ju(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ke(...s){s=ju(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ye(...s){s=ju(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ts(...s){const e=s.join(" ");e in Hc||(Hc[e]=!0,ke(...s))}function qf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Kf={[za]:za,[Ga]:Xa,[Va]:Va,[gr]:Wa,[Ha]:Ha,[Xa]:Ga,[Ya]:Ya,[Wa]:gr};let ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const ur=Math.PI/180,Ls=180/Math.PI;function kn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function ql(s,e){return(s%e+e)%e}function Zf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jf(s,e,t){return s!==e?(t-s)/(e-s):0}function dr(s,e,t){return(1-t)*s+t*e}function $f(s,e,t,n){return dr(s,e,1-Math.exp(-t*n))}function Qf(s,e=1){return e-Math.abs(ql(s,e*2)-e)}function jf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ep(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function np(s,e){return s+Math.random()*(e-s)}function ip(s){return s*(.5-Math.random())}function sp(s){s!==void 0&&(Gc=s);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(s){return s*ur}function op(s){return s*Ls}function ap(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function lp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ed(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kl(s,e){if(e.constructor===Float32Array)return s;const t=zo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Zl(s,e){if(e.constructor===Float32Array)return s;const t=zo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Jl={DEG2RAD:ur,RAD2DEG:Ls,generateUUID:kn,clamp:Ze,euclideanModulo:ql,mapLinear:Zf,inverseLerp:Jf,lerp:dr,damp:$f,pingpong:Qf,smoothstep:jf,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:ed,setQuaternionFromProperEuler:cp,normalize:Zl,denormalize:Kl};class pe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,a=Math.sin(a*v)/S,l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+_*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+g*a,u=u*p+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new R,Vc=new zn;class Qe{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],S=i[4],y=i[7],M=i[2],T=i[5],x=i[8];return r[0]=o*_+a*v+l*M,r[3]=o*m+a*S+l*T,r[6]=o*p+a*y+l*x,r[1]=c*_+h*v+u*M,r[4]=c*m+h*S+u*T,r[7]=c*p+h*y+u*x,r[2]=d*_+f*v+g*M,r[5]=d*m+f*S+g*T,r[8]=d*p+f*y+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new Qe,Wc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){const s={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?Lo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vn]:{primaries:e,whitePoint:n,transfer:Lo,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),s}const at=hp();function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class up{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=Mr("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dp=0;class $l{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(jo(i[o].image)):r.push(jo(i[o]))}else r=jo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let fp=0;const ea=new R;class Vt extends ji{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Qn,i=Qn,r=Zt,o=jn,a=Un,l=xn,c=Vt.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=kn(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=zu;Vt.DEFAULT_ANISOTROPY=1;class pt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(f+1)/2,M=(p+1)/2,T=(h+d)/4,x=(u+_)/4,b=(g+m)/4;return S>y&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=x/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=b/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=x/r,i=b/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Vt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends pp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class td extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ue{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),o=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,n){const i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),yi.crossVectors(n,fn),yi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),yi.crossVectors(n,fn)),yi.normalize(),Nr.crossVectors(fn,yi),i[0]=yi.x,i[4]=Nr.x,i[8]=fn.x,i[1]=yi.y,i[5]=Nr.y,i[9]=fn.y,i[2]=yi.z,i[6]=Nr.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],S=n[7],y=n[11],M=n[15],T=i[0],x=i[4],b=i[8],O=i[12],C=i[1],L=i[5],U=i[9],z=i[13],D=i[2],k=i[6],K=i[10],W=i[14],le=i[3],Z=i[7],se=i[11],re=i[15];return r[0]=o*T+a*C+l*D+c*le,r[4]=o*x+a*L+l*k+c*Z,r[8]=o*b+a*U+l*K+c*se,r[12]=o*O+a*z+l*W+c*re,r[1]=h*T+u*C+d*D+f*le,r[5]=h*x+u*L+d*k+f*Z,r[9]=h*b+u*U+d*K+f*se,r[13]=h*O+u*z+d*W+f*re,r[2]=g*T+_*C+m*D+p*le,r[6]=g*x+_*L+m*k+p*Z,r[10]=g*b+_*U+m*K+p*se,r[14]=g*O+_*z+m*W+p*re,r[3]=v*T+S*C+y*D+M*le,r[7]=v*x+S*L+y*k+M*Z,r[11]=v*b+S*U+y*K+M*se,r[15]=v*O+S*z+y*W+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*f-c*d,S=a*f-c*u,y=a*d-l*u,M=o*f-c*h,T=o*d-l*h,x=o*u-a*h;return t*(_*v-m*S+p*y)-n*(g*v-m*M+p*T)+i*(g*S-_*M+p*x)-r*(g*y-_*T+m*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=t*a-n*o,S=t*l-i*o,y=t*c-r*o,M=n*l-i*a,T=n*c-r*a,x=i*c-r*l,b=h*_-u*g,O=h*m-d*g,C=h*p-f*g,L=u*m-d*_,U=u*p-f*_,z=d*p-f*m,D=v*z-S*U+y*L+M*C-T*O+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return e[0]=(a*z-l*U+c*L)*k,e[1]=(i*U-n*z-r*L)*k,e[2]=(_*x-m*T+p*M)*k,e[3]=(d*T-u*x-f*M)*k,e[4]=(l*C-o*z-c*O)*k,e[5]=(t*z-i*C+r*O)*k,e[6]=(m*y-g*x-p*S)*k,e[7]=(h*x-d*y+f*S)*k,e[8]=(o*U-a*C+c*b)*k,e[9]=(n*C-t*U-r*b)*k,e[10]=(g*T-_*y+p*v)*k,e[11]=(u*y-h*T-f*v)*k,e[12]=(a*O-o*L-l*b)*k,e[13]=(t*L-n*O+i*b)*k,e[14]=(_*S-g*M-m*v)*k,e[15]=(h*M-u*S+d*v)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,S=l*h,y=l*u,M=n.x,T=n.y,x=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+y)*M,i[2]=(g-S)*M,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+S)*x,i[9]=(m-v)*x,i[10]=(1-(d+_))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),l=ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Rn.copy(this);const c=1/o,h=1/a,u=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Fn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Fn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Sr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Fn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Sr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ns=new R,Rn=new Ue,gp=new R(0,0,0),_p=new R(1,1,1),yi=new R,Nr=new R,fn=new R,Yc=new Ue,qc=new zn;class _i{constructor(e=0,t=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xp=0;const Kc=new R,is=new zn,ri=new Ue,Or=new R,Ws=new R,vp=new R,yp=new zn,Zc=new R(1,0,0),Jc=new R(0,1,0),$c=new R(0,0,1),Qc={type:"added"},Sp={type:"removed"},ss={type:"childadded",child:null},ta={type:"childremoved",child:null};class Rt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new R,t=new _i,n=new zn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Qe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis($c,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis($c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Ws,Or,this.up):ri.lookAt(Or,Ws,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),is.setFromRotationMatrix(ri),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qc),ss.child=e,this.dispatchEvent(ss),ss.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sp),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new R(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ia(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=ql(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ia(o,r,e+1/3),this.g=ia(o,r,e),this.b=ia(o,r,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return at.workingToColorSpace(en.copy(this),e),Math.round(Ze(en.r*255,0,255))*65536+Math.round(Ze(en.g*255,0,255))*256+Math.round(Ze(en.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(en.copy(this),t);const n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Kt){at.workingToColorSpace(en.copy(this),e);const t=en.r,n=en.g,i=en.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Ur);const n=dr(Si.h,Ur.h,t),i=dr(Si.s,Ur.s,t),r=dr(Si.l,Ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new He;He.NAMES=nd;class Ep extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new R,oi=new R,sa=new R,ai=new R,rs=new R,os=new R,jc=new R,ra=new R,oa=new R,aa=new R,la=new pt,ca=new pt,ha=new pt;class On{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),oi.subVectors(n,t),sa.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(oi),l=Cn.dot(sa),c=oi.dot(oi),h=oi.dot(sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),ha.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ha,r.z),o}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),oi.subVectors(e,t),Cn.cross(oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return On.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;rs.subVectors(i,n),os.subVectors(r,n),ra.subVectors(e,n);const l=rs.dot(ra),c=os.dot(ra);if(l<=0&&c<=0)return t.copy(n);oa.subVectors(e,i);const h=rs.dot(oa),u=os.dot(oa);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(rs,o);aa.subVectors(e,r);const f=rs.dot(aa),g=os.dot(aa);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(os,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jc.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(jc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Br.subVectors(this.max,Xs),as.subVectors(e.a,Xs),ls.subVectors(e.b,Xs),cs.subVectors(e.c,Xs),Mi.subVectors(ls,as),Ei.subVectors(cs,ls),zi.subVectors(as,cs);let t=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-zi.z,zi.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,zi.z,0,-zi.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-zi.y,zi.x,0];return!ua(t,as,ls,cs,Br)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,as,ls,cs,Br))?!1:(kr.crossVectors(Mi,Ei),t=[kr.x,kr.y,kr.z],ua(t,as,ls,cs,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new R,new R,new R,new R,new R,new R,new R,new R],Ln=new R,Fr=new yt,as=new R,ls=new R,cs=new R,Mi=new R,Ei=new R,zi=new R,Xs=new R,Br=new R,kr=new R,Hi=new R;function ua(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Hi.fromArray(s,r);const a=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ot=new R,zr=new pe;let Tp=0;class dn extends ji{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qu,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=e!==void 0?zo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kl(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zl(e,this.array)}}class id extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sd extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bp=new yt,Ys=new R,da=new R;class Sn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(da)),this.expandByPoint(Ys.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wp=0;const Mn=new Ue,fa=new Rt,hs=new R,pn=new yt,qs=new yt,Gt=new R;class It extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wf(e)?sd:id)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(pn.min,qs.min),pn.expandByPoint(Gt),Gt.addVectors(pn.max,qs.max),pn.expandByPoint(Gt)):(pn.expandByPoint(qs.min),pn.expandByPoint(qs.max))}pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Gt.add(hs)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new R,l[O]=new R;const h=new R,u=new R,d=new R,f=new pe,g=new pe,_=new pe,m=new R,p=new R;function v(O,C,L){c[O]=c[C]=c[L]=1,h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),u.sub(h),d.sub(h),g.sub(f),_.sub(f);const U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(U),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(U),a[O].add(m),a[C].add(m),a[L].add(m),l[O].add(p),l[C].add(p),l[L].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,C=S.length;O<C;++O){const L=S[O],U=L.start,z=L.count;for(let D=U,k=U+z;D<k;D+=3)v(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new R,M=new R,T=new R,x=new R;function b(O){T.fromBufferAttribute(i,O),x.copy(T);const C=a[O];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),M.crossVectors(x,C);const U=M.dot(l[O])<0?-1:1;o.setXYZW(O,y.x,y.y,y.z,U)}for(let O=0,C=n.count;O<C;++O)c[O]&&b(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new dn(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qu,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=eh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=eh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function eh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=kn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const on=new R;class di{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?zo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new di(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kl(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zl(e,this.data.array)}}const pa=new R,Ap=new R,Rp=new Qe;class Ci{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pa.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rp.getNormalMatrix(e),i=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cp=0;class Bn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=hr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Du,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jo,this.stencilZFail=Jo,this.stencilZPass=Jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new R,ma=new R,Hr=new R,Gr=new R;class Rr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),a=Gr.dot(this.direction),l=-Gr.dot(Hr),c=Gr.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(Hr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,p=n.x-o.x,v=n.y-o.y,S=n.z-o.z,y=Math.abs(l),M=Math.abs(c),T=Math.abs(h);let x,b,O,C,L,U,z,D,k,K,W,le;if(y>=M&&y>=T?(O=l,U=u,k=g,le=p,l>=0?(x=c,b=h,C=d,L=f,z=_,D=m,K=v,W=S):(x=h,b=c,C=f,L=d,z=m,D=_,K=S,W=v)):M>=T?(O=c,U=d,k=_,le=v,c>=0?(x=h,b=l,C=f,L=u,z=m,D=g,K=S,W=p):(x=l,b=h,C=u,L=f,z=g,D=m,K=p,W=S)):(O=h,U=f,k=m,le=S,h>=0?(x=l,b=c,C=u,L=d,z=g,D=_,K=p,W=v):(x=c,b=l,C=d,L=u,z=_,D=g,K=v,W=p)),O===0)return null;const Z=x/O,se=b/O,re=1/O,Pe=C-Z*U,Be=L-se*U,Q=z-Z*k,ge=D-se*k,N=K-Z*le,P=W-se*le,Y=N*ge-P*Q,j=Pe*P-Be*N,fe=Q*Be-ge*Pe;if(i){if(Y<0||j<0||fe<0)return null}else if((Y<0||j<0||fe<0)&&(Y>0||j>0||fe>0))return null;const ae=Y+j+fe;if(ae===0)return null;const Re=re*(Y*U+j*k+fe*le);return(ae>0?Re<0:Re>0)?null:this.at(Re/ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ii extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const th=new Ue,Gi=new Rr,Vr=new Sn,nh=new R,Wr=new R,Xr=new R,Yr=new R,ga=new R,qr=new R,ih=new R,Kr=new R;class Jt extends Rt{constructor(e=new It,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,e),o?qr.addScaledVector(ga,h):qr.addScaledVector(ga.sub(t),h))}t.add(qr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Vr.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Vr,nh)===null||Gi.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=S;y<M;y+=3){const T=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);i=Zr(this,p,e,n,c,h,u,T,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Zr(this,o,e,n,c,h,u,v,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=S;y<M;y+=3){const T=y,x=y+1,b=y+2;i=Zr(this,p,e,n,c,h,u,T,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,S=m+1,y=m+2;i=Zr(this,o,e,n,c,h,u,v,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Lp(s,e,t,n,i,r,o,a){let l;if(e.side===un?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ni,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:s}}function Zr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Wr),s.getVertexPosition(l,Xr),s.getVertexPosition(c,Yr);const h=Lp(s,e,t,n,Wr,Xr,Yr,ih);if(h){const u=new R;On.getBarycoord(ih,Wr,Xr,Yr,u),i&&(h.uv=On.getInterpolatedAttribute(i,a,l,c,u,new pe)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,l,c,u,new pe)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new R,materialIndex:0};On.getNormal(Wr,Xr,Yr,d.normal),h.face=d,h.barycoord=u}return h}const Ks=new pt,sh=new pt,rh=new pt,Pp=new pt,oh=new Ue,Jr=new R,_a=new Sn,ah=new Ue,xa=new Rr;class Dp extends Jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oc,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingBox.expandByPoint(Jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jr),this.boundingSphere.expandByPoint(Jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(i),e.ray.intersectsSphere(_a)!==!1&&(ah.copy(i).invert(),xa.copy(e.ray).applyMatrix4(ah),!(this.boundingBox!==null&&xa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===If?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sh.fromBufferAttribute(i.attributes.skinIndex,e),rh.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ks.copy(t),t.set(0,0,0,0)):(Ks.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ks.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=rh.getComponent(r);if(o!==0){const a=sh.getComponent(r);oh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pp.copy(Ks).applyMatrix4(oh),o)}}return t.isVector4&&(t.w=Ks.w),t.applyMatrix4(this.bindMatrixInverse)}}class od extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jl extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ft,h=Ft,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new Ue,Ip=new Ue;class ec{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ip;lh.multiplyMatrices(a,t[r]),lh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ec(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jl(t,e,e,Un,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(ke("Skeleton: No bone found with UUID:",r),o=new od),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Do extends dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new Ue,ch=new Ue,$r=[],hh=new yt,Np=new Ue,Zs=new Jt,Js=new Sn;class Zn extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),hh.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Js.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),ch.multiplyMatrices(n,us),Zs.matrixWorld=ch,Zs.raycast(e,$r);for(let o=0,a=$r.length;o<a;o++){const l=$r[o];l.instanceId=r,l.object=this,t.push(l)}$r.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new jl(new Float32Array(i*this.count),i,this.count,Vl,wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Vi=new Sn,Op=new pe(.5,.5),Qr=new R;class Ps{constructor(e=new Ci,t=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],S=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,p-g,M-v).normalize(),i[1].setComponents(c+o,f+h,p+g,M+v).normalize(),i[2].setComponents(c+a,f+u,p+_,M+S).normalize(),i[3].setComponents(c-a,f-u,p-_,M-S).normalize(),n)i[4].setComponents(l,d,m,y).normalize(),i[5].setComponents(c-l,f-d,p-m,M-y).normalize();else if(i[4].setComponents(c-l,f-d,p-m,M-y).normalize(),t===Fn)i[5].setComponents(c+l,f+d,p+m,M+y).normalize();else if(t===Sr)i[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);const t=Op.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qr.x=i.normal.x>0?e.max.x:e.min.x,Qr.y=i.normal.y>0?e.max.y:e.min.y,Qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const uh=new Ue;class tc{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];uh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ps),n[i].setFromProjectionMatrix(uh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ps),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new tc().copy(this)}}class Io extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new R,Oo=new R,dh=new Ue,$s=new Rr,jr=new Sn,va=new R,fh=new R;class nc extends Rt{constructor(e=new It,t=new Io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)No.fromBufferAttribute(t,i-1),Oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Oo);e.setAttribute("lineDistance",new Tt(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;dh.copy(i).invert(),$s.copy(e.ray).applyMatrix4(dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),S=eo(this,e,$s,l,p,v,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=eo(this,e,$s,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=eo(this,e,$s,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=eo(this,e,$s,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function eo(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(No.fromBufferAttribute(a,i),Oo.fromBufferAttribute(a,r),t.distanceSqToSegment(No,Oo,va,fh)>n)return;va.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(va);if(!(c<e.near||c>e.far))return{distance:c,point:fh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const ph=new R,mh=new R;class Tl extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ph.fromBufferAttribute(t,i),mh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ph.distanceTo(mh);e.setAttribute("lineDistance",new Tt(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Up extends nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ad extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gh=new Ue,bl=new Rr,to=new Sn,no=new R;class Fp extends Rt{constructor(e=new It,t=new ad){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(i),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;gh.copy(i).invert(),bl.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);no.fromBufferAttribute(u,m),_h(no,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)no.fromBufferAttribute(u,g),_h(no,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _h(s,e,t,n,i,r,o){const a=bl.distanceSqToPoint(s);if(a<t){const l=new R;bl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ld extends Vt{constructor(e=[],t=As,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ds extends Vt{constructor(e,t,n=ti,i,r,o,a=Ft,l=Ft,c,h=Oi,u=1){if(h!==Oi&&h!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class cd extends Ds{constructor(e,t=ti,n=As,i,r,o=Ft,a=Ft,l,c=Oi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class hd extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sn extends It{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(_,m,p,v,S,y,M,T,x,b,O){const C=y/x,L=M/b,U=y/2,z=M/2,D=T/2,k=x+1,K=b+1;let W=0,le=0;const Z=new R;for(let se=0;se<K;se++){const re=se*L-z;for(let Pe=0;Pe<k;Pe++){const Be=Pe*C-U;Z[_]=Be*v,Z[m]=re*S,Z[p]=D,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Pe/x),u.push(1-se/b),W+=1}}for(let se=0;se<b;se++)for(let re=0;re<x;re++){const Pe=d+re+k*se,Be=d+re+k*(se+1),Q=d+(re+1)+k*(se+1),ge=d+(re+1)+k*se;l.push(Pe,Be,ge),l.push(Be,Q,ge),le+=6}a.addGroup(f,le,O),f+=le,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ho extends It{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function v(){const y=new R,M=new R;let T=0;const x=(t-e)/n;for(let b=0;b<=r;b++){const O=[],C=b/r,L=C*(t-e)+e;for(let U=0;U<=i;U++){const z=U/i,D=z*l+a,k=Math.sin(D),K=Math.cos(D);M.x=L*k,M.y=-C*n+m,M.z=L*K,u.push(M.x,M.y,M.z),y.set(k,x,K).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-C),O.push(g++)}_.push(O)}for(let b=0;b<i;b++)for(let O=0;O<r;O++){const C=_[O][b],L=_[O+1][b],U=_[O+1][b+1],z=_[O][b+1];(e>0||O!==0)&&(h.push(C,L,z),T+=3),(t>0||O!==r-1)&&(h.push(L,U,z),T+=3)}c.addGroup(p,T,0),p+=T}function S(y){const M=g,T=new pe,x=new R;let b=0;const O=y===!0?e:t,C=y===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;const L=g;for(let U=0;U<=i;U++){const D=U/i*l+a,k=Math.cos(D),K=Math.sin(D);x.x=O*K,x.y=m*C,x.z=O*k,u.push(x.x,x.y,x.z),d.push(0,C,0),T.x=k*.5+.5,T.y=K*.5*C+.5,f.push(T.x,T.y),g++}for(let U=0;U<i;U++){const z=M+U,D=L+U;y===!0?h.push(D,D+1,z):h.push(D+1,D,z),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ic extends It{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new R,y=new R,M=new R;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],y),f(t[T+2],M),l(S,y,M,v)}function l(v,S,y,M){const T=M+1,x=[];for(let b=0;b<=T;b++){x[b]=[];const O=v.clone().lerp(y,b/T),C=S.clone().lerp(y,b/T),L=T-b;for(let U=0;U<=L;U++)U===0&&b===T?x[b][U]=O:x[b][U]=O.clone().lerp(C,U/L)}for(let b=0;b<T;b++)for(let O=0;O<2*(T-b)-1;O++){const C=Math.floor(O/2);O%2===0?(d(x[b][C+1]),d(x[b+1][C]),d(x[b][C])):(d(x[b][C+1]),d(x[b+1][C+1]),d(x[b+1][C]))}}function c(v){const S=new R;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){const v=new R;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const y=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;o.push(y,1-M)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const S=o[v+0],y=o[v+2],M=o[v+4],T=Math.max(S,y,M),x=Math.min(S,y,M);T>.9&&x<.1&&(S<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){const y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function g(){const v=new R,S=new R,y=new R,M=new R,T=new pe,x=new pe,b=new pe;for(let O=0,C=0;O<r.length;O+=9,C+=6){v.set(r[O+0],r[O+1],r[O+2]),S.set(r[O+3],r[O+4],r[O+5]),y.set(r[O+6],r[O+7],r[O+8]),T.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),M.copy(v).add(S).add(y).divideScalar(3);const L=m(M);_(T,C+0,v,L),_(x,C+2,S,L),_(b,C+4,y,L)}}function _(v,S,y,M){M<0&&v.x===1&&(o[S]=v.x-1),y.x===0&&y.z===0&&(o[S]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.vertices,e.indices,e.radius,e.detail)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new pe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,i=[],r=[],o=[],a=new R,l=new Ue;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class sc extends ii{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bp extends sc{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const xh=new R,vh=new R,ya=new rc,Sa=new rc,Ma=new rc;class kp extends ii{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(vh.subVectors(i[0],i[1]).add(i[0]),c=vh);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(xh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ya.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Sa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ma.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ma.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ya.calc(l),Sa.calc(l),Ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function yh(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function zp(s,e){const t=1-s;return t*t*e}function Hp(s,e){return 2*(1-s)*s*e}function Gp(s,e){return s*s*e}function fr(s,e,t,n){return zp(s,e)+Hp(s,t)+Gp(s,n)}function Vp(s,e){const t=1-s;return t*t*t*e}function Wp(s,e){const t=1-s;return 3*t*t*s*e}function Xp(s,e){return 3*(1-s)*s*s*e}function Yp(s,e){return s*s*s*e}function pr(s,e,t,n,i){return Vp(s,e)+Wp(s,t)+Xp(s,n)+Yp(s,i)}class ud extends ii{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(e,i.x,r.x,o.x,a.x),pr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qp extends ii{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pr(e,i.x,r.x,o.x,a.x),pr(e,i.y,r.y,o.y,a.y),pr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dd extends ii{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kp extends ii{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends ii{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,i.x,r.x,o.x),fr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zp extends ii{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(fr(e,i.x,r.x,o.x),fr(e,i.y,r.y,o.y),fr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(yh(a,l.x,c.x,h.x,u.x),yh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Bp,CatmullRomCurve3:kp,CubicBezierCurve:ud,CubicBezierCurve3:qp,EllipseCurve:sc,LineCurve:dd,LineCurve3:Kp,QuadraticBezierCurve:fd,QuadraticBezierCurve3:Zp,SplineCurve:pd});class Jp extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new wl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Sh extends Jp{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dd(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new fd(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new ud(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new sc(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uo extends Sh{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Sh().fromJSON(i))}return this}}function $p(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=md(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nm(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let d=t;d<i;d+=t){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Er(r,o,t,a,l,c,0),o}function md(s,e,t,n,i){let r;if(i===fm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Mh(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Mh(o/n|0,s[o],s[o+1],r);return r&&Is(r,r.next)&&(br(r),r=r.next),r}function Qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Is(t,t.next)||Pt(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(s,e,t,n,i,r,o){if(!s)return;!o&&r&&am(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?jp(s,n,i,r):Qp(s)){e.push(l.i,s.i,c.i),br(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=em(Qi(s),e),Er(s,e,t,n,i,r,2)):o===2&&tm(s,e,t,n,i,r):Er(Qi(s),e,t,n,i,r,1);break}}}function Qp(s){const e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&or(i,a,r,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jp(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=Al(f,g,e,t,n),v=Al(_,m,e,t,n);let S=s.prevZ,y=s.nextZ;for(;S&&S.z>=p&&y&&y.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&or(a,h,l,u,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&or(a,h,l,u,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&or(a,h,l,u,c,d,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&or(a,h,l,u,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function em(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Is(n,i)&&_d(n,t,t.next,i)&&Tr(n,i)&&Tr(i,n)&&(e.push(n.i,t.i,i.i),br(t),br(t.next),t=s=i),t=t.next}while(t!==s);return Qi(t)}function tm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let l=xd(o,a);o=Qi(o,o.next),l=Qi(l,l.next),Er(o,e,t,n,i,r,0),Er(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function nm(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=md(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(cm(c))}i.sort(im);for(let r=0;r<i.length;r++)t=sm(i[r],t);return t}function im(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function sm(s,e){const t=rm(s,e);if(!t)return e;const n=xd(t,s);return Qi(n,n.next),Qi(t,t.next)}function rm(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Is(s,t))return t;do{if(Is(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&gd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Tr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&om(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function om(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function am(s,e,t,n){let i=s;do i.z===0&&(i.z=Al(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,lm(i)}function lm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Al(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function gd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function or(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&gd(s,e,t,n,i,r,o,a)}function hm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!um(s,e)&&(Tr(s,e)&&Tr(e,s)&&dm(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||Is(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Is(s,e){return s.x===e.x&&s.y===e.y}function _d(s,e,t,n){const i=so(Pt(s,e,t)),r=so(Pt(s,e,n)),o=so(Pt(t,n,s)),a=so(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&io(s,t,e)||r===0&&io(s,n,e)||o===0&&io(t,s,n)||a===0&&io(t,e,n))}function io(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function so(s){return s>0?1:s<0?-1:0}function um(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_d(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Tr(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function dm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function xd(s,e){const t=Rl(s.i,s.x,s.y),n=Rl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mh(s,e,t,n){const i=Rl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function br(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class pm{static triangulate(e,t,n=2){return $p(e,t,n)}}class fi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Eh(e),Th(n,e);let o=e.length;t.forEach(Eh);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Th(n,t[l]);const a=pm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Eh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Th(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fo extends It{constructor(e=new Uo([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mm;let S,y=!1,M,T,x,b;if(p){S=p.getSpacedPoints(h),y=!0,d=!1;const J=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,J),T=new R,x=new R,b=new R}d||(m=0,f=0,g=0,_=0);const O=a.extractPoints(c);let C=O.shape;const L=O.holes;if(!fi.isClockWise(C)){C=C.reverse();for(let J=0,oe=L.length;J<oe;J++){const ce=L[J];fi.isClockWise(ce)&&(L[J]=ce.reverse())}}function z(J){const ce=10000000000000001e-36;let xe=J[0];for(let he=1;he<=J.length;he++){const Ve=he%J.length,Le=J[Ve],je=Le.x-xe.x,Xe=Le.y-xe.y,et=je*je+Xe*Xe,F=Math.max(Math.abs(Le.x),Math.abs(Le.y),Math.abs(xe.x),Math.abs(xe.y)),Mt=ce*F*F;if(et<=Mt){J.splice(Ve,1),he--;continue}xe=Le}}z(C),L.forEach(z);const D=L.length,k=C;for(let J=0;J<D;J++){const oe=L[J];C=C.concat(oe)}function K(J,oe,ce){return oe||Ye("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(oe,ce)}const W=C.length;function le(J,oe,ce){let xe,he,Ve;const Le=J.x-oe.x,je=J.y-oe.y,Xe=ce.x-J.x,et=ce.y-J.y,F=Le*Le+je*je,Mt=Le*et-je*Xe;if(Math.abs(Mt)>Number.EPSILON){const Je=Math.sqrt(F),mt=Math.sqrt(Xe*Xe+et*et),_e=oe.x-je/Je,At=oe.y+Le/Je,Ge=ce.x-et/mt,qe=ce.y+Xe/mt,A=((Ge-_e)*et-(qe-At)*Xe)/(Le*et-je*Xe);xe=_e+Le*A-J.x,he=At+je*A-J.y;const E=xe*xe+he*he;if(E<=2)return new pe(xe,he);Ve=Math.sqrt(E/2)}else{let Je=!1;Le>Number.EPSILON?Xe>Number.EPSILON&&(Je=!0):Le<-Number.EPSILON?Xe<-Number.EPSILON&&(Je=!0):Math.sign(je)===Math.sign(et)&&(Je=!0),Je?(xe=-je,he=Le,Ve=Math.sqrt(F)):(xe=Le,he=je,Ve=Math.sqrt(F/2))}return new pe(xe/Ve,he/Ve)}const Z=[];for(let J=0,oe=k.length,ce=oe-1,xe=J+1;J<oe;J++,ce++,xe++)ce===oe&&(ce=0),xe===oe&&(xe=0),Z[J]=le(k[J],k[ce],k[xe]);const se=[];let re,Pe=Z.concat();for(let J=0,oe=D;J<oe;J++){const ce=L[J];re=[];for(let xe=0,he=ce.length,Ve=he-1,Le=xe+1;xe<he;xe++,Ve++,Le++)Ve===he&&(Ve=0),Le===he&&(Le=0),re[xe]=le(ce[xe],ce[Ve],ce[Le]);se.push(re),Pe=Pe.concat(re)}let Be;if(m===0)Be=fi.triangulateShape(k,L);else{const J=[],oe=[];for(let ce=0;ce<m;ce++){const xe=ce/m,he=f*Math.cos(xe*Math.PI/2),Ve=g*Math.sin(xe*Math.PI/2)+_;for(let Le=0,je=k.length;Le<je;Le++){const Xe=K(k[Le],Z[Le],Ve);j(Xe.x,Xe.y,-he),xe===0&&J.push(Xe)}for(let Le=0,je=D;Le<je;Le++){const Xe=L[Le];re=se[Le];const et=[];for(let F=0,Mt=Xe.length;F<Mt;F++){const Je=K(Xe[F],re[F],Ve);j(Je.x,Je.y,-he),xe===0&&et.push(Je)}xe===0&&oe.push(et)}}Be=fi.triangulateShape(J,oe)}const Q=Be.length,ge=g+_;for(let J=0;J<W;J++){const oe=d?K(C[J],Pe[J],ge):C[J];y?(x.copy(M.normals[0]).multiplyScalar(oe.x),T.copy(M.binormals[0]).multiplyScalar(oe.y),b.copy(S[0]).add(x).add(T),j(b.x,b.y,b.z)):j(oe.x,oe.y,0)}for(let J=1;J<=h;J++)for(let oe=0;oe<W;oe++){const ce=d?K(C[oe],Pe[oe],ge):C[oe];y?(x.copy(M.normals[J]).multiplyScalar(ce.x),T.copy(M.binormals[J]).multiplyScalar(ce.y),b.copy(S[J]).add(x).add(T),j(b.x,b.y,b.z)):j(ce.x,ce.y,u/h*J)}for(let J=m-1;J>=0;J--){const oe=J/m,ce=f*Math.cos(oe*Math.PI/2),xe=g*Math.sin(oe*Math.PI/2)+_;for(let he=0,Ve=k.length;he<Ve;he++){const Le=K(k[he],Z[he],xe);j(Le.x,Le.y,u+ce)}for(let he=0,Ve=L.length;he<Ve;he++){const Le=L[he];re=se[he];for(let je=0,Xe=Le.length;je<Xe;je++){const et=K(Le[je],re[je],xe);y?j(et.x,et.y+S[h-1].y,S[h-1].x+ce):j(et.x,et.y,u+ce)}}}N(),P();function N(){const J=i.length/3;if(d){let oe=0,ce=W*oe;for(let xe=0;xe<Q;xe++){const he=Be[xe];fe(he[2]+ce,he[1]+ce,he[0]+ce)}oe=h+m*2,ce=W*oe;for(let xe=0;xe<Q;xe++){const he=Be[xe];fe(he[0]+ce,he[1]+ce,he[2]+ce)}}else{for(let oe=0;oe<Q;oe++){const ce=Be[oe];fe(ce[2],ce[1],ce[0])}for(let oe=0;oe<Q;oe++){const ce=Be[oe];fe(ce[0]+W*h,ce[1]+W*h,ce[2]+W*h)}}n.addGroup(J,i.length/3-J,0)}function P(){const J=i.length/3;let oe=0;Y(k,oe),oe+=k.length;for(let ce=0,xe=L.length;ce<xe;ce++){const he=L[ce];Y(he,oe),oe+=he.length}n.addGroup(J,i.length/3-J,1)}function Y(J,oe){let ce=J.length;for(;--ce>=0;){const xe=ce;let he=ce-1;he<0&&(he=J.length-1);for(let Ve=0,Le=h+m*2;Ve<Le;Ve++){const je=W*Ve,Xe=W*(Ve+1),et=oe+xe+je,F=oe+he+je,Mt=oe+he+Xe,Je=oe+xe+Xe;ae(et,F,Mt,Je)}}}function j(J,oe,ce){l.push(J),l.push(oe),l.push(ce)}function fe(J,oe,ce){Re(J),Re(oe),Re(ce);const xe=i.length/3,he=v.generateTopUV(n,i,xe-3,xe-2,xe-1);De(he[0]),De(he[1]),De(he[2])}function ae(J,oe,ce,xe){Re(J),Re(oe),Re(xe),Re(oe),Re(ce),Re(xe);const he=i.length/3,Ve=v.generateSideWallUV(n,i,he-6,he-3,he-2,he-1);De(Ve[0]),De(Ve[1]),De(Ve[3]),De(Ve[1]),De(Ve[2]),De(Ve[3])}function Re(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function De(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new wl[i.type]().fromJSON(i)),new Fo(n,e.options)}}const mm={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new pe(r,o),new pe(a,l),new pe(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-u),new pe(d,1-g),new pe(_,1-p)]:[new pe(a,1-l),new pe(h,1-u),new pe(f,1-g),new pe(m,1-p)]}};function gm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class oc extends ic{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oc(e.radius,e.detail)}}class Cr extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let S=0;S<c;S++){const y=S*u-r;g.push(y,-v,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const S=v+c*p,y=v+c*(p+1),M=v+1+c*(p+1),T=v+1+c*p;f.push(S,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ac extends It{constructor(e=new Uo([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(i,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];fi.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=fi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],S=v[0]+u,y=v[1]+u,M=v[2]+u;n.push(S,y,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _m(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new ac(n,e.curveSegments)}}function _m(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class xm extends It{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),v=a.getX(g+(m+1)%3);i.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),bh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),bh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Tt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function bh(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}function Ns(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(wh(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(wh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(s){const e={};for(let t=0;t<s.length;t++){const n=Ns(s[t]);for(const i in n)e[i]=n[i]}return e}function wh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const lc={clone:Ns,merge:an};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mm extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cc extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hn extends cc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ts('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ts('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yd extends Bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Em extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tm extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Li(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ar(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function bm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ah(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function wm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Am extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fc,endingEnd:Fc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=e,a=2*t-n;break;case kc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=e,l=2*n-t;break;case kc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+v*o[c+M]+S*o[l+M]+y*o[u+M];return r}}class Rm extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Cm extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Lm extends Fs{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-t)/(i-t),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}const d=a*2,f=e-1;for(let g=0;g!==a;++g){const _=o[c+g],m=o[l+g],p=f*d+g*2,v=u[p],S=u[p+1],y=e*d+g*2,M=h[y],T=h[y+1],x=Dm(n,t,v,M,i);r[g]=Sd(x,_,S,T,m)}return r}}function Sd(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Pm(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Dm(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Sd(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Pm(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Li(t,this.TimeBufferType),this.values=Li(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Li(e.times,Array),values:Li(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ar(e.settings)&&(n.settings={inTangents:Li(e.settings.inTangents,Array),outTangents:Li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Lm(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case yr:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break;case Uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return yr;case this.InterpolantFactoryMethodSmooth:return Zo;case this.InterpolantFactoryMethodBezier:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;ar(this.settings)&&(Rh(this.settings.inTangents,e),Rh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ar(this.settings)&&(Ch(this.settings.inTangents,e),Ch(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Xf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ar(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Rh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function Ch(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=yr;class Bs extends Gn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=vr;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Md extends Gn{constructor(e,t,n,i){super(e,t,n,i)}}Md.prototype.ValueTypeName="color";class wr extends Gn{constructor(e,t,n,i){super(e,t,n,i)}}wr.prototype.ValueTypeName="number";class Im extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)zn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ar extends Gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Im(this.times,this.values,this.getValueSize(),e)}}Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Gn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=vr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Bo extends Gn{constructor(e,t,n,i){super(e,t,n,i)}}Bo.prototype.ValueTypeName="vector";class Nm{constructor(e="",t=-1,n=[],i=Nf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Um(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=bm(l);l=Ah(l,1,h),c=Ah(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Om(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wr;case"vector":case"vector2":case"vector3":case"vector4":return Bo;case"color":return Md;case"quaternion":return Ar;case"bool":case"boolean":return Bs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Um(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Om(s.type);if(s.times===void 0){const n=[],i=[];wm(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ar(s.settings)&&(t.settings={inTangents:Li(s.settings.inTangents,Float32Array),outTangents:Li(s.settings.outTangents,Float32Array)}),t}const pi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Lh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Lh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Lh(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Fm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bm=new Fm;class zs{constructor(e){this.manager=e!==void 0?e:Bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class km extends Error{constructor(e,t){super(e),this.response=t}}class Ed extends zs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{_+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,x=h.length;T<x;T++){const b=h[T];b.onProgress&&b.onProgress(M)}p.enqueue(y),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new km(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{pi.add(`file:${e}`,c);const h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ds=new WeakMap;class zm extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ds.get(o);u===void 0&&(u=[],ds.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Mr("img");function l(){h(),t&&t(this);const u=ds.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ds.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),pi.remove(`image:${e}`);const d=ds.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pi.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}}class Hm extends zs{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,o=new zm(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Go extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Gm extends Go{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ea=new Ue,Ph=new R,Dh=new R;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ea,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Sr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ro=new R,oo=new zn,Vn=new R;class Td extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ro,oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ro,oo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new R,Ih=new pe,Nh=new pe;class cn extends Td{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Ih,Nh),t.subVectors(Nh,Ih)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vm extends hc{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Wm extends Go{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Xm extends hc{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ym extends Go{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class uc extends Td{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qm extends hc{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bd extends Go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new qm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Km extends It{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ta=new WeakMap;class Zm extends zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Ta.has(o)===!0?(i&&i(Ta.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return pi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ta.set(l,c),pi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});pi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const fs=-90,ps=1;class Cl extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(fs,ps,e,t);i.layers=this.layers,this.add(i);const r=new cn(fs,ps,e,t);r.layers=this.layers,this.add(r);const o=new cn(fs,ps,e,t);o.layers=this.layers,this.add(o);const a=new cn(fs,ps,e,t);a.layers=this.layers,this.add(a);const l=new cn(fs,ps,e,t);l.layers=this.layers,this.add(l);const c=new cn(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jm extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const dc="\\[\\]\\.:\\/",$m=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Qm="[^"+dc.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",fc),eg=/(WCOD+)?/.source.replace("WCOD",Qm),tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),ig=new RegExp("^"+jm+eg+tg+ng+"$"),sg=["material","materials","bones","map"];class rg{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($m,"")}static parseTrackName(e){const t=ig.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);sg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=rg;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ll extends rd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Oh=new Ue;class wd{constructor(e,t,n=0,i=1/0){this.ray=new Rr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(e,t=!0,n=[]){return Pl(e,this,n,t),n.sort(Uh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Pl(e[i],this,n,t);return n.sort(Uh),n}}function Uh(s,e){return s.distance-e.distance}function Pl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Pl(r[o],e,t,!0)}}class og{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fh=new R,ao=new R,ms=new R,gs=new R,ba=new R,ag=new R,lg=new R;class cg{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Fh.subVectors(e,this.start),ao.subVectors(this.end,this.start);const n=ao.dot(ao);if(n===0)return 0;let r=ao.dot(Fh)/n;return t&&(r=Ze(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=ag,n=lg){const i=10000000000000001e-32;let r,o;const a=this.start,l=e.start,c=this.end,h=e.end;ms.subVectors(c,a),gs.subVectors(h,l),ba.subVectors(a,l);const u=ms.dot(ms),d=gs.dot(gs),f=gs.dot(ba);if(u<=i&&d<=i)return t.copy(a),n.copy(l),t.distanceToSquared(n);if(u<=i)r=0,o=f/d,o=Ze(o,0,1);else{const g=ms.dot(ba);if(d<=i)o=0,r=Ze(-g/u,0,1);else{const _=ms.dot(gs),m=u*d-_*_;m!==0?r=Ze((_*f-g*d)/m,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=Ze(-g/u,0,1)):o>1&&(o=1,r=Ze((_-g)/u,0,1))}}return t.copy(a).addScaledVector(ms,r),n.copy(l).addScaledVector(gs,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Bh(s,e,t,n){const i=hg(n);switch(t){case Yu:return s*e;case Vl:return s*e/i.components*i.byteLength;case Wl:return s*e/i.components*i.byteLength;case $i:return s*e*2/i.components*i.byteLength;case Xl:return s*e*2/i.components*i.byteLength;case qu:return s*e*3/i.components*i.byteLength;case Un:return s*e*4/i.components*i.byteLength;case Yl:return s*e*4/i.components*i.byteLength;case So:case Mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eo:case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ka:case Ja:return Math.max(s,16)*Math.max(e,8)/4;case qa:case Za:return Math.max(s,8)*Math.max(e,8)/2;case $a:case Qa:case el:case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ja:case Ao:case nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _l:case xl:case vl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yl:case Sl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ro:case Ml:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hg(s){switch(s){case xn:case Gu:return{byteLength:1,components:1};case xr:case Vu:case ni:return{byteLength:2,components:1};case Hl:case Gl:return{byteLength:2,components:4};case ti:case zl:case wn:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ad(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ug(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,i_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,J_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,h0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,L0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:dg,alphahash_pars_fragment:fg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:_g,aomap_fragment:xg,aomap_pars_fragment:vg,batching_pars_vertex:yg,batching_vertex:Sg,begin_vertex:Mg,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:bg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Lg,color_fragment:Pg,color_pars_fragment:Dg,color_pars_vertex:Ig,color_vertex:Ng,common:Og,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Fg,displacementmap_vertex:Bg,emissivemap_fragment:kg,emissivemap_pars_fragment:zg,colorspace_fragment:Hg,colorspace_pars_fragment:Gg,envmap_fragment:Vg,envmap_common_pars_fragment:Wg,envmap_pars_fragment:Xg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:i_,envmap_vertex:qg,fog_vertex:Kg,fog_pars_vertex:Zg,fog_fragment:Jg,fog_pars_fragment:$g,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:jg,lights_lambert_fragment:e_,lights_lambert_pars_fragment:t_,lights_pars_begin:n_,lights_toon_fragment:s_,lights_toon_pars_fragment:r_,lights_phong_fragment:o_,lights_phong_pars_fragment:a_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:h_,lights_fragment_maps:u_,lights_fragment_end:d_,lightprobes_pars_fragment:f_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:x_,map_pars_fragment:v_,map_particle_fragment:y_,map_particle_pars_fragment:S_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:E_,morphinstance_vertex:T_,morphcolor_vertex:b_,morphnormal_vertex:w_,morphtarget_pars_vertex:A_,morphtarget_vertex:R_,normal_fragment_begin:C_,normal_fragment_maps:L_,normal_pars_fragment:P_,normal_pars_vertex:D_,normal_vertex:I_,normalmap_pars_fragment:N_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:B_,opaque_fragment:k_,packing:z_,premultiplied_alpha_fragment:H_,project_vertex:G_,dithering_fragment:V_,dithering_pars_fragment:W_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:Y_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:K_,shadowmap_vertex:Z_,shadowmask_pars_fragment:J_,skinbase_vertex:$_,skinning_pars_vertex:Q_,skinning_vertex:j_,skinnormal_vertex:e0,specularmap_fragment:t0,specularmap_pars_fragment:n0,tonemapping_fragment:i0,tonemapping_pars_fragment:s0,transmission_fragment:r0,transmission_pars_fragment:o0,uv_pars_fragment:a0,uv_pars_vertex:l0,uv_vertex:c0,worldpos_vertex:h0,background_vert:u0,background_frag:d0,backgroundCube_vert:f0,backgroundCube_frag:p0,cube_vert:m0,cube_frag:g0,depth_vert:_0,depth_frag:x0,distance_vert:v0,distance_frag:y0,equirect_vert:S0,equirect_frag:M0,linedashed_vert:E0,linedashed_frag:T0,meshbasic_vert:b0,meshbasic_frag:w0,meshlambert_vert:A0,meshlambert_frag:R0,meshmatcap_vert:C0,meshmatcap_frag:L0,meshnormal_vert:P0,meshnormal_frag:D0,meshphong_vert:I0,meshphong_frag:N0,meshphysical_vert:O0,meshphysical_frag:U0,meshtoon_vert:F0,meshtoon_frag:B0,points_vert:k0,points_frag:z0,shadow_vert:H0,shadow_frag:G0,sprite_vert:V0,sprite_frag:W0},we={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},hn={basic:{uniforms:an([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:an([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:an([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:an([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:an([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new He(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:an([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:an([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:an([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:an([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:an([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:an([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:an([we.common,we.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:an([we.lights,we.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};hn.physical={uniforms:an([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const lo={r:0,b:0,g:0},X0=new Ue,Rd=new Qe;Rd.set(-1,0,0,0,1,0,0,0,1);function Y0(s,e,t,n,i,r){const o=new He(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(v){let S=!1;const y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(v,S){const y=f(S);y&&y.isCubeTexture?(c===void 0&&(c=new Jt(new sn(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ns(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X0.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rd),c.material.toneMapped=at.getTransfer(y.colorSpace)!==vt,(h!==y||u!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jt(new Cr(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ns(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(lo,vd(s)),t.buffers.color.setClear(lo.r,lo.g,lo.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:_,dispose:p}}function q0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(L,U,z,D,k){let K=!1;const W=u(L,D,z,U);r!==W&&(r=W,c(r.object)),K=f(L,D,z,k),K&&g(L,D,z,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(L,U,z,D),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,U,z,D){const k=D.wireframe===!0;let K=n[U.id];K===void 0&&(K={},n[U.id]=K);const W=L.isInstancedMesh===!0?L.id:0;let le=K[W];le===void 0&&(le={},K[W]=le);let Z=le[z.id];Z===void 0&&(Z={},le[z.id]=Z);let se=Z[k];return se===void 0&&(se=d(l()),Z[k]=se),se}function d(L){const U=[],z=[],D=[];for(let k=0;k<t;k++)U[k]=0,z[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:D,object:L,attributes:{},index:null}}function f(L,U,z,D){const k=r.attributes,K=U.attributes;let W=0;const le=z.getAttributes();for(const Z in le)if(le[Z].location>=0){const re=k[Z];let Pe=K[Z];if(Pe===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),re===void 0||re.attribute!==Pe||Pe&&re.data!==Pe.data)return!0;W++}return r.attributesNum!==W||r.index!==D}function g(L,U,z,D){const k={},K=U.attributes;let W=0;const le=z.getAttributes();for(const Z in le)if(le[Z].location>=0){let re=K[Z];re===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const Pe={};Pe.attribute=re,re&&re.data&&(Pe.data=re.data),k[Z]=Pe,W++}r.attributes=k,r.attributesNum=W,r.index=D}function _(){const L=r.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){const z=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;z[L]=1,D[L]===0&&(s.enableVertexAttribArray(L),D[L]=1),k[L]!==U&&(s.vertexAttribDivisor(L,U),k[L]=U)}function v(){const L=r.newAttributes,U=r.enabledAttributes;for(let z=0,D=U.length;z<D;z++)U[z]!==L[z]&&(s.disableVertexAttribArray(z),U[z]=0)}function S(L,U,z,D,k,K,W){W===!0?s.vertexAttribIPointer(L,U,z,k,K):s.vertexAttribPointer(L,U,z,D,k,K)}function y(L,U,z,D){_();const k=D.attributes,K=z.getAttributes(),W=U.defaultAttributeValues;for(const le in K){const Z=K[le];if(Z.location>=0){let se=k[le];if(se===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),se!==void 0){const re=se.normalized,Pe=se.itemSize,Be=e.get(se);if(Be===void 0)continue;const Q=Be.buffer,ge=Be.type,N=Be.bytesPerElement,P=ge===s.INT||ge===s.UNSIGNED_INT||se.gpuType===zl;if(se.isInterleavedBufferAttribute){const Y=se.data,j=Y.isInterleavedBuffer===!0?Y.stride:Y.itemSize,fe=se.offset;if(Y.isInstancedInterleavedBuffer||Y.isInstancedBufferAttribute){for(let ae=0;ae<Z.locationSize;ae++)p(Z.location+ae,Y.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ae=0;ae<Z.locationSize;ae++)m(Z.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let ae=0;ae<Z.locationSize;ae++)S(Z.location+ae,Pe/Z.locationSize,ge,re,j*N,(fe+Pe/Z.locationSize*ae)*N,P)}else{if(se.isInstancedBufferAttribute){for(let Y=0;Y<Z.locationSize;Y++)p(Z.location+Y,se.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Y=0;Y<Z.locationSize;Y++)m(Z.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let Y=0;Y<Z.locationSize;Y++)S(Z.location+Y,Pe/Z.locationSize,ge,re,Pe*N,Pe/Z.locationSize*Y*N,P)}}else if(W!==void 0){const re=W[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(Z.location,re);break;case 3:s.vertexAttrib3fv(Z.location,re);break;case 4:s.vertexAttrib4fv(Z.location,re);break;default:s.vertexAttrib1fv(Z.location,re)}}}}v()}function M(){O();for(const L in n){const U=n[L];for(const z in U){const D=U[z];for(const k in D){const K=D[k];for(const W in K)h(K[W].object),delete K[W];delete D[k]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const z in U){const D=U[z];for(const k in D){const K=D[k];for(const W in K)h(K[W].object),delete K[W];delete D[k]}}delete n[L.id]}function x(L){for(const U in n){const z=n[U];for(const D in z){const k=z[D];if(k[L.id]===void 0)continue;const K=k[L.id];for(const W in K)h(K[W].object),delete K[W];delete k[L.id]}}}function b(L){for(const U in n){const z=n[U],D=L.isInstancedMesh===!0?L.id:0,k=z[D];if(k!==void 0){for(const K in k){const W=k[K];for(const le in W)h(W[le].object),delete W[le];delete k[K]}delete z[D],Object.keys(z).length===0&&delete n[U]}}}function O(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function K0(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Z0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Un&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const b=x===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==xn&&x!==wn&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:M,samples:T}}function J0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ci,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,S=v*4;let y=p.clippingState||null;l.value=y,y=h(g,d,S,f);for(let M=0;M!==S;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==_;++S,y+=4)o.copy(u[S]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}class pc extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ld(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sn(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Es});r.uniforms.tEquirect.value=t;const o=new Jt(i,r),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=Zt),new Cl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const kh=256,$0=3,Q0=20,Cd=256,Ld=16,j0=3,ex=new R,tx=new He;class ko{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Cl(1,10,null),this._boxMesh=new Jt(new sn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=ex}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(tx));const m=new Cl(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kh,ed(e))}_fromTexture(e,t){e.mapping===As||e.mapping===_r?this._setSize(e.image.length===0?kh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=zh(e,!1,!1),n=Math.log2(e)-$0;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===As||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nx(),this._integrationMaterial=ix());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ld);for(let o=0;o<=n;o++){const a=ko.lodToRoughness(o,n);if(o>n-j0)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(Cd*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function zh(s,e,t){return new pc(s,{minFilter:jn,generateMipmaps:e,type:ni,colorSpace:vn,depthBuffer:t})}function Lr(s,e,t){return new Ui({name:s,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:un,blending:Es,depthTest:!1,depthWrite:!1})}function nx(){return Lr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ix(){return Lr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ld}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sx(){return Lr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Q0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hh(){return Lr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gh(){return Lr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rx(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===qo||f===Ko)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new pc(g.height);return _.fromEquirectangularTexture(s,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===qo||f===Ko,_=f===As||f===_r;if(g||_){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new ko(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new ko(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===qo?d.mapping=As:f===Ko&&(d.mapping=_r),d}function l(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function ox(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ts("WebGLRenderer: "+n+" extension not supported."),i}}}function ax(s,e,t,n){const i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);const _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return i[_.id]!==void 0||(_.addEventListener("dispose",a),i[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(g){const _=g.attributes;for(const m in _)e.update(_[m],s.ARRAY_BUFFER)}function u(g){const _=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const v=_!==null?_.array.length:m.array.length/3-1,S=m.count>=65535?sd:id,y=new S(Math.ceil(v/3)*6,1),M=y.array;if(_!==null){const x=_.array;p=_.version;for(let b=0,O=0;b<v;b+=3){const C=x[b+0],L=x[b+1],U=x[b+2];M[O++]=C,M[O++]=L,M[O++]=L,M[O++]=U,M[O++]=U,M[O++]=C}}else{p=m.version;for(let x=0,b=0;x<v;x+=3){const O=x+0,C=x+1,L=x+2;M[b++]=O,M[b++]=C,M[b++]=C,M[b++]=L,M[b++]=L,M[b++]=O}}y.version=p;const T=r.get(g);T&&e.remove(T),r.set(g,y)}function d(g){const _=r.get(g);if(_){const m=g.index;m!==null&&_.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in i){const _=i[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function lx(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hx(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let O=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*M*4*u),x=new td(T,y,M,u);x.type=wn,x.needsUpdate=!0;const b=S*4;for(let C=0;C<u;C++){const L=m[C],U=p[C],z=v[C],D=y*M*4*C;for(let k=0;k<L.count;k++){const K=k*b;f===!0&&(i.fromBufferAttribute(L,k),T[D+K+0]=i.x,T[D+K+1]=i.y,T[D+K+2]=i.z,T[D+K+3]=0),g===!0&&(i.fromBufferAttribute(U,k),T[D+K+4]=i.x,T[D+K+5]=i.y,T[D+K+6]=i.z,T[D+K+7]=0),_===!0&&(i.fromBufferAttribute(z,k),T[D+K+8]=i.x,T[D+K+9]=i.y,T[D+K+10]=i.z,T[D+K+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:x,size:new pe(y,M)},n.set(a,d),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ux(s,e,t,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const dx={[Iu]:"LINEAR_TONE_MAPPING",[Nu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[Bu]:"AGX_TONE_MAPPING",[ku]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function fx(s,e,t,n,i,r){const o=new ei(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new It;h.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const u=new Mm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(h,u),f=new uc(-1,1,1,-1,0,1);let g=null,_=null,m=!1,p,v=null,S=[],y=!1;this.setSize=function(M,T){o.setSize(M,T),a!==null&&a.setSize(M,T),l!==null&&l.setSize(M,T);for(let x=0;x<S.length;x++){const b=S[x];b.setSize&&b.setSize(M,T)}},this.setEffects=function(M){S=M,y=S.length>0&&S[0].isRenderPass===!0;const T=o.width,x=o.height;S.length>0&&a===null&&(a=new ei(T,x,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new ei(T,x,{type:ni,depthBuffer:!1,stencilBuffer:!1}));const b=i===!0&&S.some(O=>O.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ds(T,x),r===!0&&(c.format=Di,c.type=Cs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let O=0;O<S.length;O++){const C=S[O];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(M,T){if(m||M.toneMapping===mi&&S.length===0)return!1;if(v=T,T!==null){const x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=mi,!0},this.hasRenderPass=function(){return y},this.end=function(M,T){M.toneMapping=p,m=!0;let x=o,b=a;for(let O=0;O<S.length;O++){const C=S[O];C.enabled!==!1&&(C.render(M,b,x,T),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(g!==M.outputColorSpace||_!==M.toneMapping){g=M.outputColorSpace,_=M.toneMapping,u.defines={},at.getTransfer(g)===vt&&(u.defines.SRGB_TRANSFER="");const O=dx[_];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(v),M.render(d,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Pd=new Vt,Dd=new Ds(1,1),Id=new cd(1),Nd=new td,Od=new mp,Ud=new ld,Vh=[],Wh=[],Xh=new Float32Array(16),Yh=new Float32Array(9),qh=new Float32Array(4);function Hs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vh[i];if(r===void 0&&(r=new Float32Array(i),Vh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vo(s,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function px(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function _x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function xx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;qh.set(n),s.uniformMatrix2fv(this.addr,!1,qh),kt(t,n)}}function vx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Yh.set(n),s.uniformMatrix3fv(this.addr,!1,Yh),kt(t,n)}}function yx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Xh.set(n),s.uniformMatrix4fv(this.addr,!1,Xh),kt(t,n)}}function Sx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function Ex(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function bx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function Ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function Rx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function Wo(s){return s.version===0&&(s.compareFunction=$u,s.needsUpdate=!0),s}function Cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Wo(Dd):r=Pd,t.setTexture2D(e||r,i)}function Lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Od,i)}function Px(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Wo(Id):r=Ud,t.setTextureCube(e||r,i)}function Dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Nd,i)}function Ix(s){switch(s){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Sx;case 35667:case 35671:return Mx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return bx;case 36294:return wx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Dx}}function Nx(s,e){s.uniform1fv(this.addr,e)}function Ox(s,e){const t=Hs(e,this.size,2);s.uniform2fv(this.addr,t)}function Ux(s,e){const t=Hs(e,this.size,3);s.uniform3fv(this.addr,t)}function Fx(s,e){const t=Hs(e,this.size,4);s.uniform4fv(this.addr,t)}function Bx(s,e){const t=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kx(s,e){const t=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zx(s,e){const t=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hx(s,e){s.uniform1iv(this.addr,e)}function Gx(s,e){s.uniform2iv(this.addr,e)}function Vx(s,e){s.uniform3iv(this.addr,e)}function Wx(s,e){s.uniform4iv(this.addr,e)}function Xx(s,e){s.uniform1uiv(this.addr,e)}function Yx(s,e){s.uniform2uiv(this.addr,e)}function qx(s,e){s.uniform3uiv(this.addr,e)}function Kx(s,e){s.uniform4uiv(this.addr,e)}function Zx(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Wo(Dd):o=Pd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Jx(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Od,r[o])}function $x(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Wo(Id):o=Ud;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function Qx(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Nd,r[o])}function jx(s){switch(s){case 5126:return Nx;case 35664:return Ox;case 35665:return Ux;case 35666:return Fx;case 35674:return Bx;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return Yx;case 36295:return qx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Qx}}class ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ix(t.type)}}class tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jx(t.type)}}class nv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Kh(s,e){s.seq.push(e),s.map[e.id]=e}function iv(s,e,t){const n=s.name,i=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),o=wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kh(t,c===void 0?new ev(a,s,e):new tv(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new nv(a),Kh(t,u)),t=u}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);iv(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const sv=37297;let rv=0;function ov(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Jh=new Qe;function av(s){at._getMatrix(Jh,at.workingColorSpace,s);const e=`mat3( ${Jh.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case Lo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $h(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ov(s.getShaderSource(e),a)}else return r}function lv(s,e){const t=av(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const cv={[Iu]:"Linear",[Nu]:"Reinhard",[Ou]:"Cineon",[Uu]:"ACESFilmic",[Bu]:"AgX",[ku]:"Neutral",[Fu]:"Custom"};function hv(s,e){const t=cv[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new R;function uv(){at.getLuminanceCoefficients(co);const s=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function fv(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pv(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function lr(s){return s!==""}function Qh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(s){return s.replace(mv,gv)}function gv(s,e){const t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Dl(t)}const _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(s){return s.replace(_v,xv)}function xv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vv={[cr]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function yv(s){return vv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sv={[_r]:"ENVMAP_MODE_REFRACTION"};function Mv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ev={[kl]:"ENVMAP_BLENDING_MULTIPLY",[Pf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function Tv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[s.combine]||"ENVMAP_BLENDING_NONE"}function bv(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mv(t),u=Tv(t),d=dv(t),f=fv(r),g=i.createProgram();let _,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(lr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(_=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?st.tonemapping_pars_fragment:"",t.toneMapping!==mi?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),o=Dl(o),o=Qh(o,t),o=jh(o,t),a=Dl(a),a=Qh(a,t),a=jh(a,t),o=eu(o),a=eu(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=p+_+o,S=p+m+a,y=Zh(i,i.VERTEX_SHADER,v),M=Zh(i,i.FRAGMENT_SHADER,S);i.attachShader(g,y),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(y)||"",z=i.getShaderInfoLog(M)||"",D=L.trim(),k=U.trim(),K=z.trim();let W=!0,le=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,y,M);else{const Z=$h(i,y,"vertex"),se=$h(i,M,"fragment");Ye("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+Z+`
`+se)}else D!==""?ke("WebGLProgram: Program Info Log:",D):(k===""||K==="")&&(le=!1);le&&(C.diagnostics={runnable:W,programLog:D,vertexShader:{log:k,prefix:_},fragmentShader:{log:K,prefix:m}})}i.deleteShader(y),i.deleteShader(M),x=new bo(i,g),b=pv(i,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(g,sv)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=M,this}let wv=0;class Av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rv(e),t.set(e,n)),n}}class Rv{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}}function Cv(s){return s===$i||s===Ao||s===Ro}function Lv(s,e,t,n,i,r){const o=new Ql,a=new Av,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,O,C,L,U){const z=C.fog,D=L.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||k,K),le=d[x.type];let Z=n.precision;x.precision!==null&&(Z=n.getMaxPrecision(x.precision),Z!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",Z,"instead."));const se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=se!==void 0?se.length:0;let Pe=0;D.morphAttributes.position!==void 0&&(Pe=1),D.morphAttributes.normal!==void 0&&(Pe=2),D.morphAttributes.color!==void 0&&(Pe=3);let Be,Q,ge,N;if(le){const Ae=hn[le];Be=Ae.vertexShader,Q=Ae.fragmentShader}else{Be=x.vertexShader,Q=x.fragmentShader;const Ae=a.getVertexShaderStage(x),xt=a.getFragmentShaderStage(x);a.update(x,Ae,xt),ge=Ae.id,N=xt.id}const P=s.getRenderTarget(),Y=s.state.buffers.depth.getReversed(),j=L.isInstancedMesh===!0,fe=L.isBatchedMesh===!0,ae=!!x.map,Re=!!x.matcap,De=!!W,J=De&&W.isPMREMTexture===!0,oe=!!x.aoMap,ce=!!x.lightMap,xe=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,Ve=!!x.displacementMap,Le=!!x.emissiveMap,je=!!x.metalnessMap,Xe=!!x.roughnessMap,et=x.anisotropy>0,F=x.clearcoat>0,Mt=x.diffuseRoughness>0,Je=x.dispersion>0,mt=x.retroreflectivity>0,_e=x.iridescence>0,At=x.sheen>0,Ge=x.transmission>0,qe=et&&!!x.anisotropyMap,A=F&&!!x.clearcoatMap,E=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,ue=Mt&&!!x.diffuseRoughnessMap,ie=_e&&!!x.iridescenceMap,ve=_e&&!!x.iridescenceThicknessMap,Te=At&&!!x.sheenColorMap,ee=At&&!!x.sheenRoughnessMap,te=!!x.specularMap,Se=!!x.specularColorMap,I=!!x.specularIntensityMap,ne=Ge&&!!x.transmissionMap,$=Ge&&!!x.thicknessMap,Me=!!x.gradientMap,me=!!x.alphaMap,ye=x.alphaTest>0,ze=!!x.alphaHash,it=!!x.extensions;let de=mi;x.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=s.toneMapping);const We=J?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,tt={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:Q,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:N,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Z,batching:fe,batchingColor:fe&&L._colorsTexture!==null,instancing:j,instancingColor:j&&L.instanceColor!==null,instancingMorph:j&&L.morphTexture!==null,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:Re,envMap:De,envMapMode:De&&W.mapping,envMapPMREM:J,envMapMaxLod:J?We.length-1:null,envMapSize:J?We[0].width:null,aoMap:oe,lightMap:ce,bumpMap:xe,normalMap:he,displacementMap:Ve,emissiveMap:Le,normalMapObjectSpace:he&&x.normalMapType===Ff,normalMapTangentSpace:he&&x.normalMapType===Co,packedNormalMap:he&&x.normalMapType===Co&&Cv(x.normalMap.format),metalnessMap:je,roughnessMap:Xe,anisotropy:et,anisotropyMap:qe,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:E,clearcoatRoughnessMap:G,diffuseRoughness:Mt,diffuseRoughnessMap:ue,dispersion:Je,retroreflection:mt,iridescence:_e,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:At,sheenColorMap:Te,sheenRoughnessMap:ee,specularMap:te,specularColorMap:Se,specularIntensityMap:I,transmission:Ge,transmissionMap:ne,thicknessMap:$,gradientMap:Me,opaque:x.transparent===!1&&x.blending===hr&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ye,alphaHash:ze,combine:x.combine,mapUv:ae&&f(x.map.channel),aoMapUv:oe&&f(x.aoMap.channel),lightMapUv:ce&&f(x.lightMap.channel),bumpMapUv:xe&&f(x.bumpMap.channel),normalMapUv:he&&f(x.normalMap.channel),displacementMapUv:Ve&&f(x.displacementMap.channel),emissiveMapUv:Le&&f(x.emissiveMap.channel),metalnessMapUv:je&&f(x.metalnessMap.channel),roughnessMapUv:Xe&&f(x.roughnessMap.channel),anisotropyMapUv:qe&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(x.sheenRoughnessMap.channel),specularMapUv:te&&f(x.specularMap.channel),specularColorMapUv:Se&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:ne&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:me&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(he||et),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(ae||me),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Y,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Pe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Nn,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)b.push(O),b.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(b,x),p(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){const b=d[x.type];let O;if(b){const C=hn[b];O=lc.clone(C.uniforms)}else O=x.uniforms;return O}function S(x,b){let O=h.get(b);return O!==void 0?++O.usedTimes:(O=new bv(s,b,x,i),c.push(O),h.set(b,O)),O}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:T}}function Pv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function nu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function iu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,_,m,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function l(d,f,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);const S=a(d,f,g,_,m,p);g.transmission>0?n.push(S):g.transparent===!0?i.push(S):t.push(S)}function c(d,f,g,_,m,p){const v=a(d,f,g,_,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Dv),n.length>1&&n.sort(f||nu),i.length>1&&i.sort(f||nu)}function u(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Iv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new iu,s.set(n,[o])):i>=r.length?(o=new iu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Nv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Uv=0;function Fv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bv(s){const e=new Nv,t=Ov(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new Ue,o=new Ue;function a(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,S=0,y=0,M=0,T=0,x=0,b=0,O=0,C=0;c.sort(Fv);for(let U=0,z=c.length;U<z;U++){const D=c[U],k=D.color,K=D.intensity,W=D.distance;let le=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$i?le=D.shadow.map.texture:le=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*K,u+=k.g*K,d+=k.b*K;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],K);C++}else if(D.isSunLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=le;const Pe=se.getViewportCount();for(let Be=0;Be<Pe;Be++)n.sunShadowMatrix[_+Be]=se.getMatrix(Be),n.sunShadowCascade[_+Be]=se._cascadeData[Be];_+=Pe,g++}n.sun[f]=Z,f++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=D.shadow.matrix,M++}n.directional[m]=Z,m++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(k).multiplyScalar(K),Z.distance=W,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[v]=Z;const se=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,se.updateMatrices(D),D.castShadow&&O++),n.spotLightMatrix[v]=se.matrix,D.castShadow){const re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=le,x++}v++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(k).multiplyScalar(K),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=Z,S++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const se=D.shadow,re=t.get(D);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=le,n.pointShadowMatrix[p]=D.shadow.matrix,T++}n.point[p]=Z,p++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(K),Z.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[y]=Z,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-O,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=C,n.version=Uv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const y=c[v];if(y.isSunLight){const M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),u++}else if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function su(s){const e=new Bv(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new su(s),e.set(i,[a])):r>=o.length?(a=new su(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gv=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Vv=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],ru=new Ue,Qs=new R,Aa=new R;function Wv(s,e,t){let n=new Ps;const i=new pe,r=new pe,o=new pt,a=new Em,l=new Tm,c={},h=t.maxTextureSize,u={[Ni]:un,[un]:Ni,[Nn]:Nn},d=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:zv,fragmentShader:Hv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let p=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===df&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cr);const O=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Es),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==this.type;z&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=T.length;D<k;D++){const K=T[D],W=K.shadow;if(W===void 0){ke("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const le=W.getFrameExtents();i.multiply(le),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,W.mapSize.y=r.y));const Z=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Z,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===sr){if(K.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ei(i.x,i.y,{format:$i,type:ni,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),W.map.texture.name=K.name+".shadowMap",W.map.depthTexture=new Ds(i.x,i.y,wn),W.map.depthTexture.name=K.name+".shadowMapDepth",W.map.depthTexture.format=Oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ft,W.map.depthTexture.magFilter=Ft}else K.isPointLight?(W.map=new pc(i.x),W.map.depthTexture=new cd(i.x,ti)):(W.map=new ei(i.x,i.y),W.map.depthTexture=new Ds(i.x,i.y,ti)),W.map.depthTexture.name=K.name+".shadowMap",W.map.depthTexture.format=Oi,this.type===cr?(W.map.depthTexture.compareFunction=Z?Ju:Zu,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ft,W.map.depthTexture.magFilter=Ft);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const se=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();K.isPointLight!==!0&&W.updateMatrices(K,b);const re=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:b.layers;for(let Pe=0;Pe<se;Pe++){const Be=W.getCamera(Pe);if(K.isPointLight){const Q=W.camera,ge=W.matrix,N=K.distance||Q.far;N!==Q.far&&(Q.far=N,Q.updateProjectionMatrix()),Qs.setFromMatrixPosition(K.matrixWorld),Q.position.copy(Qs),Aa.copy(Q.position),Aa.add(Gv[Pe]),Q.up.copy(Vv[Pe]),Q.lookAt(Aa),Q.updateMatrixWorld(),ge.makeTranslation(-Qs.x,-Qs.y,-Qs.z),ru.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ru,Q.coordinateSystem,Q.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,Pe),s.clear();else{Pe===0&&(s.setRenderTarget(W.map),s.clear());const Q=W.getViewport(Pe);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(o)}n=W.getFrustum(Pe),y(x,b,Be,K,re,this.type)}W.isPointLightShadow!==!0&&this.type===sr&&v(W,b),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(O,C,L)};function v(T,x){const b=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ei(i.x,i.y,{format:$i,type:ni}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(x,null,b,f,_,null)}function S(T,x,b,O){let C=null;const L=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=b.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const U=C.uuid,z=x.uuid;let D=c[U];D===void 0&&(D={},c[U]=D);let k=D[z];k===void 0&&(k=C.clone(),D[z]=k,x.addEventListener("dispose",M)),C=k}if(C.visible=x.visible,C.wireframe=x.wireframe,O===sr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=s.properties.get(C);U.light=b}return C}function y(T,x,b,O,C,L){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===sr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const D=e.update(T),k=T.material;if(Array.isArray(k)){const K=D.groups;for(let W=0,le=K.length;W<le;W++){const Z=K[W],se=k[Z.materialIndex];if(se&&se.visible){const re=S(T,se,O,L);T.onBeforeShadow(s,T,x,b,D,re,Z),s.renderBufferDirect(b,null,D,re,T,Z),T.onAfterShadow(s,T,x,b,D,re,Z)}}}else if(k.visible){const K=S(T,k,O,L);T.onBeforeShadow(s,T,x,b,D,K,null),s.renderBufferDirect(b,null,D,K,T,null),T.onAfterShadow(s,T,x,b,D,K,null)}}const z=T.children;for(let D=0,k=z.length;D<k;D++)y(z[D],x,b,O,C,L)}function M(T){T.target.removeEventListener("dispose",M);for(const b in c){const O=c[b],C=T.target.uuid;C in O&&(O[C].dispose(),delete O[C])}}}function Xv(s,e){function t(){let I=!1;const ne=new pt;let $=null;const Me=new pt(0,0,0,0);return{setMask:function(me){$!==me&&!I&&(s.colorMask(me,me,me,me),$=me)},setLocked:function(me){I=me},setClear:function(me,ye,ze,it,de){de===!0&&(me*=it,ye*=it,ze*=it),ne.set(me,ye,ze,it),Me.equals(ne)===!1&&(s.clearColor(me,ye,ze,it),Me.copy(ne))},reset:function(){I=!1,$=null,Me.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,$=null,Me=null,me=null;return{setReversed:function(ye){if(ne!==ye){const ze=e.get("EXT_clip_control");ye?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ne=ye;const it=me;me=null,this.setClear(it)}},getReversed:function(){return ne},setTest:function(ye){ye?Y(s.DEPTH_TEST):j(s.DEPTH_TEST)},setMask:function(ye){$!==ye&&!I&&(s.depthMask(ye),$=ye)},setFunc:function(ye){if(ne&&(ye=Kf[ye]),Me!==ye){switch(ye){case za:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case gr:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=ye}},setLocked:function(ye){I=ye},setClear:function(ye){me!==ye&&(me=ye,ne&&(ye=1-ye),s.clearDepth(ye))},reset:function(){I=!1,$=null,Me=null,me=null,ne=!1}}}function i(){let I=!1,ne=null,$=null,Me=null,me=null,ye=null,ze=null,it=null,de=null;return{setTest:function(We){I||(We?Y(s.STENCIL_TEST):j(s.STENCIL_TEST))},setMask:function(We){ne!==We&&!I&&(s.stencilMask(We),ne=We)},setFunc:function(We,tt,Ae){($!==We||Me!==tt||me!==Ae)&&(s.stencilFunc(We,tt,Ae),$=We,Me=tt,me=Ae)},setOp:function(We,tt,Ae){(ye!==We||ze!==tt||it!==Ae)&&(s.stencilOp(We,tt,Ae),ye=We,ze=tt,it=Ae)},setLocked:function(We){I=We},setClear:function(We){de!==We&&(s.clearStencil(We),de=We)},reset:function(){I=!1,ne=null,$=null,Me=null,me=null,ye=null,ze=null,it=null,de=null}}}const r=new t,o=new n,a=new i;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,y=null,M=null,T=null,x=null,b=new He(0,0,0),O=0,C=!1,L=null,U=null,z=null,D=null,k=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,le=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=le>=1):Z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=le>=2);let se=null,re={};const Pe=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),Q=new pt().fromArray(Pe),ge=new pt().fromArray(Be);function N(I,ne,$,Me){const me=new Uint8Array(4),ye=s.createTexture();s.bindTexture(I,ye),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<$;ze++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ne+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return ye}const P={};P[s.TEXTURE_2D]=N(s.TEXTURE_2D,s.TEXTURE_2D,1),P[s.TEXTURE_CUBE_MAP]=N(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[s.TEXTURE_2D_ARRAY]=N(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),P[s.TEXTURE_3D]=N(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(s.DEPTH_TEST),o.setFunc(gr),xe(!1),he(Pc),Y(s.CULL_FACE),oe(Es);function Y(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function j(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function fe(I,ne){return d[I]!==ne?(s.bindFramebuffer(I,ne),d[I]=ne,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ne),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function ae(I,ne){let $=g,Me=!1;if(I){$=f.get(ne),$===void 0&&($=[],f.set(ne,$));const me=I.textures;if($.length!==me.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,ze=me.length;ye<ze;ye++)$[ye]=s.COLOR_ATTACHMENT0+ye;$.length=me.length,Me=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Me=!0);Me&&s.drawBuffers($)}function Re(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const De={[Ss]:s.FUNC_ADD,[pf]:s.FUNC_SUBTRACT,[mf]:s.FUNC_REVERSE_SUBTRACT};De[gf]=s.MIN,De[_f]=s.MAX;const J={[xf]:s.ZERO,[vf]:s.ONE,[yf]:s.SRC_COLOR,[Pu]:s.SRC_ALPHA,[wf]:s.SRC_ALPHA_SATURATE,[Tf]:s.DST_COLOR,[Mf]:s.DST_ALPHA,[Sf]:s.ONE_MINUS_SRC_COLOR,[Du]:s.ONE_MINUS_SRC_ALPHA,[bf]:s.ONE_MINUS_DST_COLOR,[Ef]:s.ONE_MINUS_DST_ALPHA,[Af]:s.CONSTANT_COLOR,[Rf]:s.ONE_MINUS_CONSTANT_COLOR,[Cf]:s.CONSTANT_ALPHA,[Lf]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(I,ne,$,Me,me,ye,ze,it,de,We){if(I===Es){m===!0&&(j(s.BLEND),m=!1);return}if(m===!1&&(Y(s.BLEND),m=!0),I!==ff){if(I!==p||We!==C){if((v!==Ss||M!==Ss)&&(s.blendEquation(s.FUNC_ADD),v=Ss,M=Ss),We)switch(I){case hr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dc:s.blendFunc(s.ONE,s.ONE);break;case Ic:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ye("WebGLState: Invalid blending: ",I);break}else switch(I){case hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ic:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",I);break}S=null,y=null,T=null,x=null,b.set(0,0,0),O=0,p=I,C=We}return}me=me||ne,ye=ye||$,ze=ze||Me,(ne!==v||me!==M)&&(s.blendEquationSeparate(De[ne],De[me]),v=ne,M=me),($!==S||Me!==y||ye!==T||ze!==x)&&(s.blendFuncSeparate(J[$],J[Me],J[ye],J[ze]),S=$,y=Me,T=ye,x=ze),(it.equals(b)===!1||de!==O)&&(s.blendColor(it.r,it.g,it.b,de),b.copy(it),O=de),p=I,C=!1}function ce(I,ne){I.side===Nn?j(s.CULL_FACE):Y(s.CULL_FACE);let $=I.side===un;ne&&($=!$),xe($),I.blending===hr&&I.transparent===!1?oe(Es):oe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Me=I.stencilWrite;a.setTest(Me),Me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):j(s.SAMPLE_ALPHA_TO_COVERAGE)}function xe(I){L!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),L=I)}function he(I){I!==hf?(Y(s.CULL_FACE),I!==U&&(I===Pc?s.cullFace(s.BACK):I===uf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):j(s.CULL_FACE),U=I}function Ve(I){I!==z&&(W&&s.lineWidth(I),z=I)}function Le(I,ne,$){I?(Y(s.POLYGON_OFFSET_FILL),(D!==ne||k!==$)&&(D=ne,k=$,o.getReversed()&&(ne=-ne,$=-$),s.polygonOffset(ne,$))):j(s.POLYGON_OFFSET_FILL)}function je(I){I?Y(s.SCISSOR_TEST):j(s.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=s.TEXTURE0+K-1),se!==I&&(s.activeTexture(I),se=I)}function et(I,ne,$){$===void 0&&(se===null?$=s.TEXTURE0+K-1:$=se);let Me=re[$];Me===void 0&&(Me={type:void 0,texture:void 0},re[$]=Me),(Me.type!==I||Me.texture!==ne)&&(se!==$&&(s.activeTexture($),se=$),s.bindTexture(I,ne||P[I]),Me.type=I,Me.texture=ne)}function F(){const I=re[se];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function Je(){try{s.compressedTexImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function mt(){try{s.texSubImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function _e(){try{s.texSubImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function At(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function qe(){try{s.texStorage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function A(){try{s.texStorage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function E(){try{s.texImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function G(){try{s.texImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function ue(I){return u[I]!==void 0?u[I]:s.getParameter(I)}function ie(I,ne){u[I]!==ne&&(s.pixelStorei(I,ne),u[I]=ne)}function ve(I){Q.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function Te(I){ge.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function ee(I,ne){let $=c.get(ne);$===void 0&&($=new WeakMap,c.set(ne,$));let Me=$.get(I);Me===void 0&&(Me=s.getUniformBlockIndex(ne,I.name),s.uniformBlockBinding(ne,Me,Me),$.set(I,Me))}function te(I,ne,$){const me=c.get(ne).get(I);l[me]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,me,$),l[me]=$)}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},se=null,re={},d={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,y=null,M=null,T=null,x=null,b=new He(0,0,0),O=0,C=!1,L=null,U=null,z=null,D=null,k=null,Q.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:j,bindFramebuffer:fe,drawBuffers:ae,useProgram:Re,setBlending:oe,setMaterial:ce,setFlipSided:xe,setCullFace:he,setLineWidth:Ve,setPolygonOffset:Le,setScissorTest:je,activeTexture:Xe,bindTexture:et,unbindTexture:F,compressedTexImage2D:Mt,compressedTexImage3D:Je,texImage2D:E,texImage3D:G,pixelStorei:ie,getParameter:ue,updateUBOMapping:ee,uniformBlockBinding:te,texStorage2D:qe,texStorage3D:A,texSubImage2D:mt,texSubImage3D:_e,compressedTexSubImage2D:At,compressedTexSubImage3D:Ge,scissor:ve,viewport:Te,reset:Se}}function Yv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,_=new FinalizationRegistry(A=>g.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,E){return m?new OffscreenCanvas(A,E):Mr("canvas")}function v(A,E,G){let ue=1;const ie=qe(A);if((ie.width>G||ie.height>G)&&(ue=G/Math.max(ie.width,ie.height)),ue<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ve=Math.floor(ue*ie.width),Te=Math.floor(ue*ie.height);d===void 0&&(d=p(ve,Te));const ee=E?p(ve,Te):d;return ee.width=ve,ee.height=Te,ee.getContext("2d").drawImage(A,0,0,ve,Te),ke("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ve+"x"+Te+")."),ee}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function S(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(A,E,G,ue,ie,ve=!1){if(A!==null){if(s[A]!==void 0)return s[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Te;ue&&(Te=e.get("EXT_texture_norm16"),Te||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=E;if(E===s.RED&&(G===s.FLOAT&&(ee=s.R32F),G===s.HALF_FLOAT&&(ee=s.R16F),G===s.UNSIGNED_BYTE&&(ee=s.R8),G===s.UNSIGNED_SHORT&&Te&&(ee=Te.R16_EXT),G===s.SHORT&&Te&&(ee=Te.R16_SNORM_EXT)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ee=s.R8UI),G===s.UNSIGNED_SHORT&&(ee=s.R16UI),G===s.UNSIGNED_INT&&(ee=s.R32UI),G===s.BYTE&&(ee=s.R8I),G===s.SHORT&&(ee=s.R16I),G===s.INT&&(ee=s.R32I)),E===s.RG&&(G===s.FLOAT&&(ee=s.RG32F),G===s.HALF_FLOAT&&(ee=s.RG16F),G===s.UNSIGNED_BYTE&&(ee=s.RG8),G===s.UNSIGNED_SHORT&&Te&&(ee=Te.RG16_EXT),G===s.SHORT&&Te&&(ee=Te.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ee=s.RG8UI),G===s.UNSIGNED_SHORT&&(ee=s.RG16UI),G===s.UNSIGNED_INT&&(ee=s.RG32UI),G===s.BYTE&&(ee=s.RG8I),G===s.SHORT&&(ee=s.RG16I),G===s.INT&&(ee=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),G===s.UNSIGNED_INT&&(ee=s.RGB32UI),G===s.BYTE&&(ee=s.RGB8I),G===s.SHORT&&(ee=s.RGB16I),G===s.INT&&(ee=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),G===s.UNSIGNED_INT&&(ee=s.RGBA32UI),G===s.BYTE&&(ee=s.RGBA8I),G===s.SHORT&&(ee=s.RGBA16I),G===s.INT&&(ee=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_SHORT&&Te&&(ee=Te.RGB16_EXT),G===s.SHORT&&Te&&(ee=Te.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),E===s.RGBA){const te=ve?Lo:at.getTransfer(ie);G===s.FLOAT&&(ee=s.RGBA32F),G===s.HALF_FLOAT&&(ee=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ee=te===vt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&Te&&(ee=Te.RGBA16_EXT),G===s.SHORT&&Te&&(ee=Te.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(A,E){let G;return A?E===null||E===ti||E===Cs?G=s.DEPTH24_STENCIL8:E===wn?G=s.DEPTH32F_STENCIL8:E===xr&&(G=s.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ti||E===Cs?G=s.DEPTH_COMPONENT24:E===wn?G=s.DEPTH_COMPONENT32F:E===xr&&(G=s.DEPTH_COMPONENT16),G}function b(A,E){return S(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ft&&A.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function O(A){const E=new WeakRef(A);n.get(A).__ref=E,g.add(E),_.register(A,E,E)}function C(A){const E=n.get(A).__ref;E!==void 0&&(g.delete(E),_.unregister(E))}function L(A){z(A.target)}function U(A){D(A.target)}function z(A){A.removeEventListener("dispose",L),C(A),K(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function D(A){A.removeEventListener("dispose",U),C(A),le(A)}function k(){for(const A of g){const E=A.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):z(E))}g.clear(),u.clear()}function K(A){const E=n.get(A);if(E.__webglInit===void 0)return;const G=A.source,ue=f.get(G);if(ue){const ie=ue[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&W(A),Object.keys(ue).length===0&&f.delete(G)}n.remove(A)}function W(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const G=A.source,ue=f.get(G);delete ue[E.__cacheKey],o.memory.textures--}function le(A){const E=n.get(A);E.__depthDisposeCallback&&E.__depthDisposeCallback();const G=A.depthTexture;if(G&&G.renderTarget===A&&z(G),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ve=0;ve<E.__webglFramebuffer[ie].length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[ie][ve]);else s.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)s.deleteFramebuffer(E.__webglFramebuffer[ie]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ue=A.textures;for(let ie=0,ve=ue.length;ie<ve;ie++){const Te=n.get(ue[ie]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(ue[ie])}n.remove(A)}let Z=0;function se(){Z=0}function re(){return Z}function Pe(A){Z=A}function Be(){const A=Z;return A>=i.maxTextures&&ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),Z+=1,A}function Q(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.mipmapsAutoUpdate),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function ge(A,E){const G=n.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const ue=A.image;if(ue===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,A,E);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function N(A,E){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ce(G,A,E);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function P(A,E){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){ce(G,A,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function Y(A,E){const G=n.get(A);if(A.version>0&&G.__version!==A.version){xe(G,A,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const j={[Rs]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},fe={[Ft]:s.NEAREST,[Hu]:s.NEAREST_MIPMAP_NEAREST,[rr]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[yo]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},ae={[kf]:s.NEVER,[$u]:s.ALWAYS,[zf]:s.LESS,[Zu]:s.LEQUAL,[Hf]:s.EQUAL,[Ju]:s.GEQUAL,[Gf]:s.GREATER,[Vf]:s.NOTEQUAL};function Re(A,E){if(E.type===wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zt||E.magFilter===yo||E.magFilter===rr||E.magFilter===jn||E.minFilter===Zt||E.minFilter===yo||E.minFilter===rr||E.minFilter===jn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,j[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,j[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,j[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,fe[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ft||E.minFilter!==rr&&E.minFilter!==jn||E.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function De(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",L),O(E));const ue=E.source;let ie=f.get(ue);ie===void 0&&(ie={},f.set(ue,ie));const ve=Q(E);if(ve!==A.__cacheKey){ie[ve]===void 0&&(ie[ve]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[ve].usedTimes++;const Te=ie[A.__cacheKey];Te!==void 0&&(ie[A.__cacheKey].usedTimes--,Te.usedTimes===0&&W(E)),A.__cacheKey=ve,A.__webglTexture=ie[ve].texture}return G}function J(A,E,G){return Math.floor(Math.floor(A/G)/E)}function oe(A,E,G,ue){const ve=A.updateRanges;if(ve.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,ue,E.data);else{ve.sort((I,ne)=>I.start-ne.start);let Te=0;for(let I=1;I<ve.length;I++){const ne=ve[Te],$=ve[I],Me=ne.start+ne.count,me=J($.start,E.width,4),ye=J(ne.start,E.width,4);$.start<=Me+1&&me===ye&&J($.start+$.count-1,E.width,4)===me?ne.count=Math.max(ne.count,$.start+$.count-ne.start):(++Te,ve[Te]=$)}ve.length=Te+1;const ee=t.getParameter(s.UNPACK_ROW_LENGTH),te=t.getParameter(s.UNPACK_SKIP_PIXELS),Se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let I=0,ne=ve.length;I<ne;I++){const $=ve[I],Me=Math.floor($.start/4),me=Math.ceil($.count/4),ye=Me%E.width,ze=Math.floor(Me/E.width),it=me,de=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze),t.texSubImage2D(s.TEXTURE_2D,0,ye,ze,it,de,G,ue,E.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function ce(A,E,G){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);const ie=De(A,E),ve=E.source;t.bindTexture(ue,A.__webglTexture,s.TEXTURE0+G);const Te=n.get(ve);if(ve.version!==Te.__version||ie===!0){if(t.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=at.getPrimaries(at.workingColorSpace),We=E.colorSpace===Pi?null:at.getPrimaries(E.colorSpace),tt=E.colorSpace===Pi||de===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let te=v(E.image,!1,i.maxTextureSize);te=Ge(E,te);const Se=r.convert(E.format,E.colorSpace),I=r.convert(E.type);let ne=T(E.internalFormat,Se,I,E.normalized,E.colorSpace,E.isVideoTexture);Re(ue,E);let $;const Me=E.mipmaps,me=E.isVideoTexture!==!0,ye=Te.__version===void 0||ie===!0,ze=ve.dataReady,it=b(E,te);if(E.isDepthTexture)ne=x(E.format===Di,E.type),ye&&(me?t.texStorage2D(s.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,ne,te.width,te.height,0,Se,I,null));else if(E.isDataTexture)if(Me.length>0){me&&ye&&t.texStorage2D(s.TEXTURE_2D,it,ne,Me[0].width,Me[0].height);for(let de=0,We=Me.length;de<We;de++)$=Me[de],me?ze&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,$.width,$.height,Se,I,$.data):t.texImage2D(s.TEXTURE_2D,de,ne,$.width,$.height,0,Se,I,$.data);E.generateMipmaps=!1}else me?(ye&&t.texStorage2D(s.TEXTURE_2D,it,ne,te.width,te.height),ze&&oe(E,te,Se,I)):t.texImage2D(s.TEXTURE_2D,0,ne,te.width,te.height,0,Se,I,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){me&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,ne,Me[0].width,Me[0].height,te.depth);for(let de=0,We=Me.length;de<We;de++)if($=Me[de],E.format!==Un)if(Se!==null)if(me){if(ze)if(E.layerUpdates.size>0){const tt=Bh($.width,$.height,E.format,E.type);for(const Ae of E.layerUpdates){const xt=$.data.subarray(Ae*tt/$.data.BYTES_PER_ELEMENT,(Ae+1)*tt/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Ae,$.width,$.height,1,Se,xt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,$.width,$.height,te.depth,Se,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,ne,$.width,$.height,te.depth,0,$.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?ze&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,$.width,$.height,te.depth,Se,I,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,ne,$.width,$.height,te.depth,0,Se,I,$.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{me&&ye&&t.texStorage2D(s.TEXTURE_2D,it,ne,Me[0].width,Me[0].height);for(let de=0,We=Me.length;de<We;de++)$=Me[de],E.format!==Un?Se!==null?me?ze&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,$.width,$.height,Se,$.data):t.compressedTexImage2D(s.TEXTURE_2D,de,ne,$.width,$.height,0,$.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?ze&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,$.width,$.height,Se,I,$.data):t.texImage2D(s.TEXTURE_2D,de,ne,$.width,$.height,0,Se,I,$.data)}else if(E.isDataArrayTexture)if(me){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,ne,te.width,te.height,te.depth),ze)if(E.layerUpdates.size>0){const de=Bh(te.width,te.height,E.format,E.type);for(const We of E.layerUpdates){const tt=te.data.subarray(We*de/te.data.BYTES_PER_ELEMENT,(We+1)*de/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,We,te.width,te.height,1,Se,I,tt)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Se,I,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,Se,I,te.data);else if(E.isData3DTexture)me?(ye&&t.texStorage3D(s.TEXTURE_3D,it,ne,te.width,te.height,te.depth),ze&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Se,I,te.data)):t.texImage3D(s.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,Se,I,te.data);else if(E.isFramebufferTexture){if(ye)if(me)t.texStorage2D(s.TEXTURE_2D,it,ne,te.width,te.height);else{let de=te.width,We=te.height;for(let tt=0;tt<it;tt++)t.texImage2D(s.TEXTURE_2D,tt,ne,de,We,0,Se,I,null),de>>=1,We>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const de=s.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),te.parentNode!==de){de.appendChild(te),u.add(E),de.onpaint=We=>{const tt=We.changedElements;for(const Ae of u)tt.includes(Ae.image)&&(Ae.needsUpdate=!0)},de.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,te);else{const tt=s.RGBA,Ae=s.RGBA,xt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,tt,Ae,xt,te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Me.length>0){if(me&&ye){const de=qe(Me[0]);t.texStorage2D(s.TEXTURE_2D,it,ne,de.width,de.height)}for(let de=0,We=Me.length;de<We;de++)$=Me[de],me?ze&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Se,I,$):t.texImage2D(s.TEXTURE_2D,de,ne,Se,I,$);E.generateMipmaps=!1}else if(me){if(ye){const de=qe(te);t.texStorage2D(s.TEXTURE_2D,it,ne,de.width,de.height)}ze&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,I,te)}else t.texImage2D(s.TEXTURE_2D,0,ne,Se,I,te);S(E)&&E.mipmapsAutoUpdate===!0&&y(ue),Te.__version=ve.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function xe(A,E,G){if(E.image.length!==6)return;const ue=De(A,E),ie=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const ve=n.get(ie);if(ie.version!==ve.__version||ue===!0){t.activeTexture(s.TEXTURE0+G);const Te=at.getPrimaries(at.workingColorSpace),ee=E.colorSpace===Pi?null:at.getPrimaries(E.colorSpace),te=E.colorSpace===Pi||Te===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,I=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let Ae=0;Ae<6;Ae++)!Se&&!I?ne[Ae]=v(E.image[Ae],!0,i.maxCubemapSize):ne[Ae]=I?E.image[Ae].image:E.image[Ae],ne[Ae]=Ge(E,ne[Ae]);const $=ne[0],Me=r.convert(E.format,E.colorSpace),me=r.convert(E.type);let ye=T(E.internalFormat,Me,me,E.normalized,E.colorSpace);const ze=E.isVideoTexture!==!0,it=ve.__version===void 0||ue===!0,de=ie.dataReady;let We=b(E,$);Re(s.TEXTURE_CUBE_MAP,E);let tt;if(E.isDepthTexture){if(ye=x(E.format===Di,E.type),it)if(ze)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ye,$.width,$.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,$.width,$.height,0,Me,me,null)}else if(Se){ze&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,We,ye,$.width,$.height);for(let Ae=0;Ae<6;Ae++){tt=ne[Ae].mipmaps;for(let xt=0;xt<tt.length;xt++){const zt=tt[xt];E.format!==Un?Me!==null?ze?de&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,0,0,zt.width,zt.height,Me,zt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,ye,zt.width,zt.height,0,zt.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,0,0,zt.width,zt.height,Me,me,zt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,ye,zt.width,zt.height,0,Me,me,zt.data)}}}else{if(tt=E.mipmaps,ze&&it){tt.length>0&&We++;const Ae=qe(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,We,ye,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(I){ze?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ne[Ae].width,ne[Ae].height,Me,me,ne[Ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,ne[Ae].width,ne[Ae].height,0,Me,me,ne[Ae].data);for(let xt=0;xt<tt.length;xt++){const xi=tt[xt].image[Ae].image;ze?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,0,0,xi.width,xi.height,Me,me,xi.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,ye,xi.width,xi.height,0,Me,me,xi.data)}}else{ze?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Me,me,ne[Ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ye,Me,me,ne[Ae]);for(let xt=0;xt<tt.length;xt++){const zt=tt[xt];ze?de&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,0,0,Me,me,zt.image[Ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,ye,Me,me,zt.image[Ae])}}}S(E)&&E.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ve.__version=ie.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function he(A,E,G,ue,ie,ve){const Te=r.convert(G.format,G.colorSpace),ee=r.convert(G.type),te=T(G.internalFormat,Te,ee,G.normalized,G.colorSpace),Se=n.get(E),I=n.get(G);if(I.__renderTarget=E,!Se.__hasExternalTextures){const ne=Math.max(1,E.width>>ve),$=Math.max(1,E.height>>ve);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,ve,te,ne,$,E.depth,0,Te,ee,null):t.texImage2D(ie,ve,te,ne,$,0,Te,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),_e(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,ie,I.__webglTexture,0,mt(E)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,ie,I.__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(A,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){const ue=E.depthTexture,ie=ue&&ue.isDepthTexture?ue.type:null,ve=x(E.stencilBuffer,ie),Te=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(E),ve,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(E),ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ve,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Te,s.RENDERBUFFER,A)}else{const ue=E.textures;for(let ie=0;ie<ue.length;ie++){const ve=ue[ie],Te=r.convert(ve.format,ve.colorSpace),ee=r.convert(ve.type),te=T(ve.internalFormat,Te,ee,ve.normalized,ve.colorSpace);_e(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt(E),te,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt(E),te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,te,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(A,E,G){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=n.get(E.depthTexture);ie.__renderTarget=E;const ve=ue?E.depthTexture.image[0]:E.depthTexture.image;(!ie.__webglTexture||ve.width!==E.width||ve.height!==E.height)&&(ve.width=E.width,ve.height=E.height,E.depthTexture.needsUpdate=!0),ue?Y(E.depthTexture,0):ge(E.depthTexture,0);const Te=ie.__webglTexture,ee=mt(E),te=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Se=E.depthTexture.format===Di?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oi)_e(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,te,Te,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,Se,te,Te,0);else if(E.depthTexture.format===Di)_e(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,te,Te,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,Se,te,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(A){const E=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const ue=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",ie)};ue.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ue}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ue=0;ue<6;ue++)Le(E.__webglFramebuffer[ue],A,ue);else A.texture.mipmaps.length>0?Le(E.__webglFramebuffer[0],A,0):Le(E.__webglFramebuffer,A,0);else if(G){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=s.createRenderbuffer(),Ve(E.__webglDepthbuffer[ue],A,!1);else{const ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ve)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ve(E.__webglDepthbuffer,A,!1);else{const ie=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(A,E,G){const ue=n.get(A);E!==void 0&&he(ue.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&je(A)}function et(A){const E=A.texture,G=n.get(A),ue=n.get(E);A.addEventListener("dispose",U),O(A);const ie=A.textures,ve=A.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,o.memory.textures++),ve){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(E.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let te=0;te<E.mipmaps.length;te++)G.__webglFramebuffer[ee][te]=s.createFramebuffer()}else G.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<E.mipmaps.length;ee++)G.__webglFramebuffer[ee]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Te)for(let ee=0,te=ie.length;ee<te;ee++){const Se=n.get(ie[ee]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&_e(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<ie.length;ee++){const te=ie[ee];G.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const Se=r.convert(te.format,te.colorSpace),I=r.convert(te.type),ne=T(te.internalFormat,Se,I,te.normalized,te.colorSpace,A.isXRRenderTarget===!0),$=mt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ne,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Re(s.TEXTURE_CUBE_MAP,E);for(let ee=0;ee<6;ee++)if(E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)he(G.__webglFramebuffer[ee][te],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,te);else he(G.__webglFramebuffer[ee],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(E)?y(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ee=0,te=ie.length;ee<te;ee++){const Se=ie[ee],I=n.get(Se);let ne=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,I.__webglTexture),Re(ne,Se),he(G.__webglFramebuffer,A,Se,s.COLOR_ATTACHMENT0+ee,ne,0),S(Se)&&y(ne)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,ue.__webglTexture),Re(ee,E),E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)he(G.__webglFramebuffer[te],A,E,s.COLOR_ATTACHMENT0,ee,te);else he(G.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,ee,0);S(E)?y(ee):E.mipmaps.length>0&&s.texParameteri(ee,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&je(A)}function F(A){const E=A.textures;for(let G=0,ue=E.length;G<ue;G++){const ie=E[G];if(S(ie)&&ie.mipmapsAutoUpdate===!0){const ve=M(A),Te=n.get(ie).__webglTexture;t.bindTexture(ve,Te),y(ve),t.unbindTexture()}}}const Mt=[];function Je(A){if(A.samples>0){if(_e(A)===!1){const E=A.textures,G=A.width,ue=A.height;let ie=s.COLOR_BUFFER_BIT;const ve=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=n.get(A),ee=E.length>1;if(ee)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const I=n.get(E[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,G,ue,0,0,G,ue,ie,s.NEAREST),l===!0&&(Mt.length=0,Mt.push(s.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Mt.push(ve),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const I=n.get(E[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Te.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,I,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function mt(A){return Math.min(i.maxSamples,A.samples)}function _e(A){const E=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Ge(A,E){const G=A.colorSpace,ue=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==vn&&G!==Pi&&(at.getTransfer(G)===vt?(ue!==Un||ie!==xn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",G)),E}function qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=se,this.getTextureUnits=re,this.setTextureUnits=Pe,this.setTexture2D=ge,this.setTexture2DArray=N,this.setTexture3D=P,this.setTextureCube=Y,this.rebindTextures=Xe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_e,this.dispose=k}function qv(s,e){function t(n,i=Pi){let r;const o=at.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Hl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return s.BYTE;if(n===Vu)return s.SHORT;if(n===xr)return s.UNSIGNED_SHORT;if(n===zl)return s.INT;if(n===ti)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===ni)return s.HALF_FLOAT;if(n===Yu)return s.ALPHA;if(n===qu)return s.RGB;if(n===Un)return s.RGBA;if(n===Oi)return s.DEPTH_COMPONENT;if(n===Di)return s.DEPTH_STENCIL;if(n===Vl)return s.RED;if(n===Wl)return s.RED_INTEGER;if(n===$i)return s.RG;if(n===Xl)return s.RG_INTEGER;if(n===Yl)return s.RGBA_INTEGER;if(n===So||n===Mo||n===Eo||n===To)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ka||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Qa||n===ja||n===el||n===tl||n===Ao||n===nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Qa)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ja)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===xl||n===vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Sl||n===Ro||n===Ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new hd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ui({vertexShader:Kv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jt(new Cr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends ji{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Jv,p={},v=t.getContextAttributes();let S=null,y=null;const M=[],T=[],x=new pe;let b=null,O=null;const C=new cn;C.viewport=new pt;const L=new cn;L.viewport=new pt;const U=[C,L],z=new Jm;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=M[Q];return ge===void 0&&(ge=new na,M[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=M[Q];return ge===void 0&&(ge=new na,M[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=M[Q];return ge===void 0&&(ge=new na,M[Q]=ge),ge.getHandSpace()};function K(Q){const ge=T.indexOf(Q.inputSource);if(ge===-1)return;const N=M[ge];N!==void 0&&(N.update(Q.inputSource,Q.frame,c||o),N.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",le);for(let Q=0;Q<M.length;Q++){const ge=T[Q];ge!==null&&(T[Q]=null,M[Q].disconnect(ge))}D=null,k=null,m.reset();for(const Q in p)delete p[Q];if(e.setRenderTarget(S),f=null,d=null,u=null,i=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),O!==null){const Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",W),i.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,P=null,Y=null;v.depth&&(Y=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,N=v.stencil?Di:Oi,P=v.stencil?Cs:ti);const j={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(j),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ei(d.textureWidth,d.textureHeight,{format:Un,type:xn,depthTexture:new Ds(d.textureWidth,d.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const N={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ei(f.framebufferWidth,f.framebufferHeight,{format:Un,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(Q){for(let ge=0;ge<Q.removed.length;ge++){const N=Q.removed[ge],P=T.indexOf(N);P>=0&&(T[P]=null,M[P].disconnect(N))}for(let ge=0;ge<Q.added.length;ge++){const N=Q.added[ge];let P=T.indexOf(N);if(P===-1){for(let j=0;j<M.length;j++)if(j>=T.length){T.push(N),P=j;break}else if(T[j]===null){T[j]=N,P=j;break}if(P===-1)break}const Y=M[P];Y&&Y.connect(N)}}function Z(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ge=Q.near,N=Q.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(N=m.depthFar)),z.near=L.near=C.near=ge,z.far=L.far=C.far=N,(D!==z.near||k!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,k=z.far),z.layers.mask=Q.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const P=Q.parent,Y=z.cameras;Z(z,P);for(let j=0;j<Y.length;j++)Z(Y[j],P);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),se(Q,z,P)};function se(Q,ge,N){N===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(N.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ls*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let re=null;function Pe(Q,ge){if(h=ge.getViewerPose(c||o),g=ge,h!==null){const N=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let P=!1;N.length!==z.cameras.length&&(z.cameras.length=0,P=!0);for(let ae=0;ae<N.length;ae++){const Re=N[ae];let De=null;if(f!==null)De=f.getViewport(Re);else{const oe=u.getViewSubImage(d,Re);De=oe.viewport,ae===0&&(e.setRenderTargetTextures(y,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(y))}let J=U[ae];J===void 0&&(J=new cn,J.layers.enable(ae),J.viewport=new pt,U[ae]=J),J.matrix.fromArray(Re.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Re.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(De.x,De.y,De.width,De.height),ae===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),P===!0&&z.cameras.push(J)}const Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const ae=u.getDepthInformation(N[0]);ae&&ae.isValid&&ae.texture&&m.init(ae,i.renderState)}if(Y&&Y.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ae=0;ae<N.length;ae++){const Re=N[ae].camera;if(Re){let De=p[Re];De||(De=new hd,p[Re]=De);const J=u.getCameraImage(Re);De.sourceTexture=J}}}}for(let N=0;N<M.length;N++){const P=T[N],Y=M[N];P!==null&&Y!==void 0&&Y.update(P,ge,c||o)}re&&re(Q,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Be=new Ad;Be.setAnimationLoop(Pe),this.setAnimationLoop=function(Q){re=Q},this.dispose=function(){}}}const Qv=new Ue,Fd=new Qe;Fd.set(-1,0,0,0,1,0,0,0,1);function jv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ey(s,e,t,n){let i={},r={};function o(v,S){const y=S.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,S){let y=i[v.id];y===void 0&&(g(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));const M=S.program;n.updateUBOMapping(v,M);const T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){const S=s.createBuffer(),y=v.__size,M=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,y,M),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(v){const S=i[v.id],y=v.uniforms,M=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let T=0,x=y.length;T<x;T++){const b=y[T];if(Array.isArray(b))for(let O=0,C=b.length;O<C;O++)h(b[O],T,O,M);else h(b,T,0,M)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,S,y,M){if(d(v,S,y,M)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let O=0;O<x.length;O++){const C=x[O],L=_(C,!0);u(C,v.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,v.__data)}}function u(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function d(v,S,y,M){const T=v.value,x=S+"_"+y;if(Array.isArray(T)){M[x]===void 0&&(M[x]=[]);const b=M[x];let O=!1;for(let C=0;C<T.length;C++)f(T[C],b,C)===!0&&(O=!0);return O}return f(T,M,x)}function f(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{const M=S[y];if(typeof v=="number"||typeof v=="boolean"){if(M!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(M.equals(v)===!1)return M.copy(v),!0}}return!1}function g(v){const S=v.uniforms;let y=0;const M=16;for(let x=0,b=S.length;x<b;x++){const O=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,L=O.length;C<L;C++){const U=O[C],z=Array.isArray(U.value)?U.value:[U.value],D=Array.isArray(S[x])||Array.isArray(U.value);let k=y;for(let W=0,le=z.length;W<le;W++){const Z=z[W],se=_(Z,D),re=y%M,Pe=re%se.boundary,Be=re+Pe;y+=Pe,Be!==0&&M-Be<se.storage&&(y+=M-Be),W===0&&(k=y),y+=se.storage}const K=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new K((y-k)/Float32Array.BYTES_PER_ELEMENT),U.__offset=k}}const T=y%M;return T>0&&(y+=M-T),v.__size=y,v.__cache={},this}function _(v,S){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const S=v.target;S.removeEventListener("dispose",m),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:p}}const ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function ny(){return Wn===null&&(Wn=new jl(ty,16,16,$i,ni),Wn.name="DFG_LUT",Wn.minFilter=Zt,Wn.magFilter=Zt,Wn.wrapS=Qn,Wn.wrapT=Qn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class iy{constructor(e={}){const{canvas:t=Yf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=f,m=new Set([Yl,Xl,Wl]),p=new Set([xn,ti,xr,Cs,Hl,Gl]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let M=null,T=null;const x=[],b=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,U=null,z=null,D=null,k=null;this._outputColorSpace=Kt;let K=0,W=0,le=null,Z=-1,se=null;const re=new pt,Pe=new pt;let Be=null;const Q=new He(0);let ge=0,N=t.width,P=t.height,Y=1,j=null,fe=null;const ae=new pt(0,0,N,P),Re=new pt(0,0,N,P);let De=!1;const J=new Ps,oe=new tc;let ce=!1,xe=!1;const he=new Ue,Ve=new R,Le=new pt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function et(){return le===null?Y:1}let F=n;function Mt(w,B){return t.getContext(w,B)}let Je,mt,_e,At,Ge,qe,A,E,G,ue,ie,ve,Te,ee,te,Se,I,ne,$,Me,me,ye,ze;try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bl}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),F===null){const B="webgl2";if(F=Mt(B,w),F===null)throw Mt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(w){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ye("WebGLRenderer: "+w.message),w}function it(){Je=new ox(F),Je.init(),me=new qv(F,Je),mt=new Z0(F,Je,e,me),_e=new Xv(F,Je),mt.reversedDepthBuffer&&d&&_e.buffers.depth.setReversed(!0),z=F.createFramebuffer(),D=F.createFramebuffer(),k=F.createFramebuffer(),At=new cx(F),Ge=new Pv,qe=new Yv(F,Je,_e,Ge,mt,me,At),A=new rx(C),E=new ug(F),ye=new q0(F,E),G=new ax(F,E,At,ye),ue=new ux(F,G,E,ye,At),ne=new hx(F,mt,qe),te=new J0(Ge),ie=new Lv(C,A,Je,mt,ye,te),ve=new jv(C,Ge),Te=new Iv,ee=new kv(Je),I=new Y0(C,A,_e,ue,g,l),Se=new Wv(C,ue,mt),ze=new ey(F,At,mt,_e),$=new K0(F,Je,At),Me=new lx(F,Je,At),At.programs=ie.programs,C.capabilities=mt,C.extensions=Je,C.properties=Ge,C.renderLists=Te,C.shadowMap=Se,C.state=_e,C.info=At}_!==xn&&(O=new fx(_,t.width,t.height,a,i,r));const de=new $v(C,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(N,P,!1))},this.getSize=function(w){return w.set(N,P)},this.setSize=function(w,B,q=!0){if(de.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,P=B,t.width=Math.floor(w*Y),t.height=Math.floor(B*Y),q===!0&&(t.style.width=w+"px",t.style.height=B+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(N*Y,P*Y).floor()},this.setDrawingBufferSize=function(w,B,q){N=w,P=B,Y=q,t.width=Math.floor(w*q),t.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(_===xn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(re)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,B,q,H){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,B,q,H),_e.viewport(re.copy(ae).multiplyScalar(et()).round())},this.getScissor=function(w){return w.copy(Re)},this.setScissor=function(w,B,q,H){w.isVector4?Re.set(w.x,w.y,w.z,w.w):Re.set(w,B,q,H),_e.scissor(Pe.copy(Re).multiplyScalar(et()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(w){_e.setScissorTest(De=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,q=!0){let H=0;if(w){let V=!1;if(le!==null){const be=le.texture.format;V=m.has(be)}if(V){const be=le.texture.type,Ie=p.has(be),Ee=I.getClearColor(),Ce=I.getClearAlpha(),Fe=Ee.r,$e=Ee.g,lt=Ee.b;Ie?(v[0]=Fe,v[1]=$e,v[2]=lt,v[3]=Ce,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=Fe,S[1]=$e,S[2]=lt,S[3]=Ce,F.clearBufferiv(F.COLOR,0,S))}else H|=F.COLOR_BUFFER_BIT}B&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),U=w},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),I.dispose(),Te.dispose(),ee.dispose(),qe.dispose(),Ge.dispose(),A.dispose(),ue.dispose(),G.dispose(),ye.dispose(),ze.dispose(),ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",_c),de.removeEventListener("sessionend",xc),Fi.stop()};function We(w){w.preventDefault(),Po("WebGLRenderer: Context Lost."),L=!0}function tt(){Po("WebGLRenderer: Context Restored."),L=!1;const w=At.autoReset,B=Se.enabled,q=Se.autoUpdate,H=Se.needsUpdate,V=Se.type;it(),At.autoReset=w,Se.enabled=B,Se.autoUpdate=q,Se.needsUpdate=H,Se.type=V}function Ae(w){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xt(w){const B=w.target;B.removeEventListener("dispose",xt),zt(B)}function zt(w){xi(w),Ge.remove(w)}function xi(w){const B=Ge.get(w).programs;B!==void 0&&(B.forEach(function(q){ie.releaseProgram(q)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,H,V,be){B===null&&(B=je);const Ie=V.isMesh&&V.matrixWorld.determinantAffine()<0,Ee=Yd(w,B,q,H,V);_e.setMaterial(H,Ie);let Ce=q.index,Fe=1;if(H.wireframe===!0){if(Ce=G.getWireframeAttribute(q),Ce===void 0)return;Fe=2}const $e=q.drawRange,lt=q.attributes.position;let Ne=$e.start*Fe,ct=($e.start+$e.count)*Fe;be!==null&&(Ne=Math.max(Ne,be.start*Fe),ct=Math.min(ct,(be.start+be.count)*Fe)),Ce!==null?(Ne=Math.max(Ne,0),ct=Math.min(ct,Ce.count)):lt!=null&&(Ne=Math.max(Ne,0),ct=Math.min(ct,lt.count));const Nt=ct-Ne;if(Nt<0||Nt===1/0)return;ye.setup(V,H,Ee,q,Ce);let bt,Et=$;if(Ce!==null&&(bt=E.get(Ce),Et=Me,Et.setIndex(bt)),V.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*et()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(V.isLine){let $t=H.linewidth;$t===void 0&&($t=1),_e.setLineWidth($t*et()),V.isLineSegments?Et.setMode(F.LINES):V.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else V.isPoints?Et.setMode(F.POINTS):V.isSprite&&Et.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))Et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const $t=V._multiDrawStarts,Oe=V._multiDrawCounts,rn=V._multiDrawCount,gt=Ce?E.get(Ce).bytesPerElement:1,Bi=Ge.get(H).currentProgram.getUniforms();for(let Qt=0;Qt<rn;Qt++)Bi.setValue(F,"_gl_DrawID",Qt),Et.render($t[Qt]/gt,Oe[Qt])}else if(V.isInstancedMesh)Et.renderInstances(Ne,Nt,V.count);else if(q.isInstancedBufferGeometry){const $t=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oe=Math.min(q.instanceCount,$t);Et.renderInstances(Ne,Nt,Oe)}else Et.render(Ne,Nt)};function gc(w,B,q,H){U!==null&&w.isNodeMaterial&&U.setObject(H,w),ce===!0&&te.setState(w,q,!1),w.transparent===!0&&w.side===Nn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Gs(w,B,H),w.side=Ni,w.needsUpdate=!0,Gs(w,B,H),w.side=Nn):Gs(w,B,H)}this.compile=function(w,B,q=null){q===null&&(q=w),U!==null&&U.renderStart(w,B,q),T=ee.get(q),T.init(B),b.push(T),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),w!==q&&w.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),xe=this.localClippingEnabled,ce=te.init(this.clippingPlanes,xe),ce===!0&&te.setGlobalState(this.clippingPlanes,B),U!==null&&Se.render(T.state.shadowsArray,q,B);const H=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const be=V.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){const Ee=be[Ie];gc(Ee,q,B,V),H.add(Ee)}else gc(be,q,B,V),H.add(be)}),T=b.pop(),U!==null&&U.renderEnd(),H},this.compileAsync=function(w,B,q=null){const H=this.compile(w,B,q);return new Promise(V=>{function be(){if(H.forEach(function(Ie){const Ce=Ge.get(Ie).currentProgram;(Ce===void 0||Ce.isReady())&&H.delete(Ie)}),H.size===0){V(w);return}setTimeout(be,10)}Je.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Xo=null;function Wd(w){Xo&&Xo(w)}function _c(){Fi.stop()}function xc(){Fi.start()}const Fi=new Ad;Fi.setAnimationLoop(Wd),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(w){Xo=w,de.setAnimationLoop(w),w===null?Fi.stop():Fi.start()},de.addEventListener("sessionstart",_c),de.addEventListener("sessionend",xc),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(w,B);const q=de.enabled===!0&&de.isPresenting===!0,H=O!==null&&(le===null||q)&&O.begin(C,le);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,B,le),T=ee.get(w,b.length),T.init(B),T.state.textureUnits=qe.getTextureUnits(),b.push(T),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?oe.setFromArrayCamera(B):J.setFromProjectionMatrix(he,Fn,B.reversedDepth),xe=this.localClippingEnabled,ce=te.init(this.clippingPlanes,xe),M=Te.get(w,x.length),M.init(),x.push(M),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){const Ie=C.xr.getDepthSensingMesh();Ie!==null&&Yo(Ie,B,-1/0,C.sortObjects)}Yo(w,B,0,C.sortObjects),M.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&M.sort(j,fe),Xe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Xe&&I.addToRenderList(M,w),this.info.autoReset===!0&&this.info.reset(),ce===!0&&te.beginShadows();const V=T.state.shadowsArray;if(Se.render(V,w,B),ce===!0&&te.endShadows(),(H&&O.hasRenderPass())===!1){const Ie=M.opaque,Ee=M.transmissive;if(T.setupLights(),B.isArrayCamera){const Ce=B.cameras;if(Ee.length>0)for(let Fe=0,$e=Ce.length;Fe<$e;Fe++){const lt=Ce[Fe];yc(Ie,Ee,w,lt)}Xe&&I.render(w);for(let Fe=0,$e=Ce.length;Fe<$e;Fe++){const lt=Ce[Fe];vc(M,w,lt,lt.viewport)}}else Ee.length>0&&yc(Ie,Ee,w,B),Xe&&I.render(w),vc(M,w,B)}le!==null&&W===0&&(qe.updateMultisampleRenderTarget(le),qe.updateRenderTargetMipmap(le)),H&&O.end(C),w.isScene===!0&&w.onAfterRender(C,w,B),ye.resetDefaultState(),Z=-1,se=null,b.pop(),b.length>0?(T=b[b.length-1],qe.setTextureUnits(T.state.textureUnits),ce===!0&&te.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?M=x[x.length-1]:M=null,U!==null&&U.renderEnd()};function Yo(w,B,q,H){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){const Ie=B.isArrayCamera?oe:J;if(!w.frustumCulled||w.intersectsFrustum(Ie)){H&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Ee=ue.update(w),Ce=w.material;Ce.visible&&M.push(w,Ee,Ce,q,Le.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){const Ie=B.isArrayCamera?oe:J;if(!w.frustumCulled||w.intersectsFrustum(Ie)){const Ee=ue.update(w),Ce=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Le.copy(Ee.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Ce)){const Fe=Ee.groups;for(let $e=0,lt=Fe.length;$e<lt;$e++){const Ne=Fe[$e],ct=Ce[Ne.materialIndex];ct&&ct.visible&&M.push(w,Ee,ct,q,Le.z,Ne,B)}}else Ce.visible&&M.push(w,Ee,Ce,q,Le.z,null,B)}}}const be=w.children;for(let Ie=0,Ee=be.length;Ie<Ee;Ie++)Yo(be[Ie],B,q,H)}function vc(w,B,q,H){const{opaque:V,transmissive:be,transparent:Ie}=w;T.setupLightsView(q),ce===!0&&te.setGlobalState(C.clippingPlanes,q),H&&_e.viewport(re.copy(H)),V.length>0&&Dr(V,B,q),be.length>0&&Dr(be,B,q),Ie.length>0&&Dr(Ie,B,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function yc(w,B,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Ne=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:Ne?ni:xn,minFilter:jn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}const be=T.state.transmissionRenderTarget[H.id],Ie=H.viewport||re;be.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);const Ee=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(Q),ge=C.getClearAlpha(),ge<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&I.render(q);const $e=C.toneMapping;C.toneMapping=mi;const lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ce===!0&&te.setGlobalState(C.clippingPlanes,H),Dr(w,q,H),qe.updateMultisampleRenderTarget(be),qe.updateRenderTargetMipmap(be),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ct=0,Nt=B.length;ct<Nt;ct++){const bt=B[ct],{object:Et,geometry:$t,material:Oe,group:rn}=bt;if(Oe.side===Nn&&Et.layers.test(H.layers)){const gt=Oe.side;Oe.side=un,Oe.needsUpdate=!0,Sc(Et,q,H,$t,Oe,rn),Oe.side=gt,Oe.needsUpdate=!0,Ne=!0}}Ne===!0&&(qe.updateMultisampleRenderTarget(be),qe.updateRenderTargetMipmap(be))}C.setRenderTarget(Ee,Ce,Fe),C.setClearColor(Q,ge),lt!==void 0&&(H.viewport=lt),C.toneMapping=$e}function Dr(w,B,q){const H=B.isScene===!0?B.overrideMaterial:null;for(let V=0,be=w.length;V<be;V++){const Ie=w[V],{object:Ee,geometry:Ce,group:Fe}=Ie;let $e=Ie.material;$e.allowOverride===!0&&H!==null&&($e=H),Ee.layers.test(q.layers)&&Sc(Ee,B,q,Ce,$e,Fe)}}function Sc(w,B,q,H,V,be){U!==null&&V.isNodeMaterial&&U.setObject(w,V),w.onBeforeRender(C,B,q,H,V,be),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(C,B,q,H,w,be),V.transparent===!0&&V.side===Nn&&V.forceSinglePass===!1?(V.side=un,V.needsUpdate=!0,C.renderBufferDirect(q,B,H,V,w,be),V.side=Ni,V.needsUpdate=!0,C.renderBufferDirect(q,B,H,V,w,be),V.side=Nn):C.renderBufferDirect(q,B,H,V,w,be),w.onAfterRender(C,B,q,H,V,be)}function Mc(w){let B=0;for(const q of w)q.texture!==null&&B++;return B}function Gs(w,B,q){B.isScene!==!0&&(B=je);const H=Ge.get(w),V=T.state.lights,be=T.state.shadowsArray,Ie=V.state.version,Ee=ie.getParameters(w,V.state,be,B,q,T.state.lightProbeGridArray),Ce=ie.getProgramCacheKey(Ee);let Fe=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=A.get(w.envMap||H.environment,$e),H.envMapRotation=H.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",xt),Fe=new Map,H.programs=Fe,H.programVariants=new Map);let lt=Fe.get(Ce);if(lt!==void 0){if(H.currentProgram===lt&&H.lightsStateVersion===Ie)return Tc(w,Ee),lt}else Ee.uniforms=ie.getUniforms(w),U!==null&&w.isNodeMaterial&&U.build(w,q,Ee),w.onBeforeCompile(Ee,C),lt=ie.acquireProgram(Ee,Ce),Fe.set(Ce,lt),H.uniforms=Ee.uniforms;const Ne=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=te.uniform),Tc(w,Ee),H.needsLights=Kd(w),H.lightsStateVersion=Ie,H.needsLights&&(Ne.ambientLightColor.value=V.state.ambient,Ne.lightProbe.value=V.state.probe,Ne.sunLights.value=V.state.sun,Ne.sunLightShadows.value=V.state.sunShadow,Ne.directionalLights.value=V.state.directional,Ne.directionalLightShadows.value=V.state.directionalShadow,Ne.spotLights.value=V.state.spot,Ne.spotLightShadows.value=V.state.spotShadow,Ne.rectAreaLights.value=V.state.rectArea,Ne.ltc_1.value=V.state.rectAreaLTC1,Ne.ltc_2.value=V.state.rectAreaLTC2,Ne.pointLights.value=V.state.point,Ne.pointLightShadows.value=V.state.pointShadow,Ne.hemisphereLights.value=V.state.hemi,Ne.sunShadowMatrix.value=V.state.sunShadowMatrix,Ne.sunShadowCascade.value=V.state.sunShadowCascade,Ne.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ne.spotLightMatrix.value=V.state.spotLightMatrix,Ne.spotLightMap.value=V.state.spotLightMap,Ne.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Mc(T.state.lightProbeGridArray),H.currentProgram=lt,H.uniformsList=null,lt}function Xd(w,B,q,H,V){const be=Ge.get(w),Ie=be.currentProgram.id+","+H+","+V;let Ee=be.programVariants.get(Ie);return Ee===void 0?(Ee=Gs(w,B,q),be.programVariants.set(Ie,Ee)):(be.currentProgram=Ee,be.uniformsList=null,be.outputColorSpace=H,be.toneMapping=V),Ee}function Ec(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=bo.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Tc(w,B){const q=Ge.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Yd(w,B,q,H,V){B.isScene!==!0&&(B=je),qe.resetTextureUnits();const be=B.fog,Ie=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,Ee=le===null?C.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:at.workingColorSpace,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Fe=A.get(H.envMap||Ie,Ce),$e=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,lt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color;let bt=mi;H.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(bt=C.toneMapping);const Et=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$t=Et!==void 0?Et.length:0,Oe=Ge.get(H),rn=T.state.lights;if(ce===!0&&(xe===!0||w!==se)){const Ct=w===se&&H.id===Z;te.setState(H,w,Ct)}let gt=!1,Bi=!1;H.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==rn.state.version||V.isBatchedMesh&&Oe.batching===!1||!V.isBatchedMesh&&Oe.batching===!0||V.isBatchedMesh&&Oe.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Oe.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Oe.instancing===!1||!V.isInstancedMesh&&Oe.instancing===!0||V.isSkinnedMesh&&Oe.skinning===!1||!V.isSkinnedMesh&&Oe.skinning===!0||V.isInstancedMesh&&Oe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Oe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Oe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Oe.instancingMorph===!1&&V.morphTexture!==null||Oe.envMap!==Fe||H.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==te.numPlanes||Oe.numIntersection!==te.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==lt||Oe.morphTargets!==Ne||Oe.morphNormals!==ct||Oe.morphColors!==Nt||Oe.morphTargetsCount!==$t||Oe.numLightProbeGrids!==Mc(T.state.lightProbeGridArray)?gt=!0:(Oe.outputColorSpace!==Ee||Oe.toneMapping!==bt)&&(Bi=!0):(gt=!0,Oe.__version=H.version);let Qt=Oe.currentProgram;(gt===!0||Bi===!0)&&(Qt=Bi===!0?Xd(H,B,V,Ee,bt):Gs(H,B,V),U&&H.isNodeMaterial&&U.onUpdateProgram(H,Qt,Oe));let Ir=!1,vi=!1,ki=!1;const ht=Qt.getUniforms(),Wt=Oe.uniforms;if(_e.useProgram(Qt.program)&&(Ir=!0,vi=!0,ki=!0),H.id!==Z&&(Z=H.id,vi=!0),Ir||se!==w){_e.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ht.setValue(F,"projectionMatrix",w.projectionMatrix),ht.setValue(F,"viewMatrix",w.matrixWorldInverse);const Ht=ht.map.cameraPosition;Ht!==void 0&&Ht.setValue(F,Ve.setFromMatrixPosition(w.matrixWorld)),mt.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),se!==w&&(se=w,vi=!0,ki=!0)}if(Oe.needsLights&&(rn.state.sunShadowMap.length>0&&ht.setValue(F,"sunShadowMap",rn.state.sunShadowMap,qe),rn.state.directionalShadowMap.length>0&&ht.setValue(F,"directionalShadowMap",rn.state.directionalShadowMap,qe),rn.state.spotShadowMap.length>0&&ht.setValue(F,"spotShadowMap",rn.state.spotShadowMap,qe),rn.state.pointShadowMap.length>0&&ht.setValue(F,"pointShadowMap",rn.state.pointShadowMap,qe)),V.isSkinnedMesh){ht.setOptional(F,V,"bindMatrix"),ht.setOptional(F,V,"bindMatrixInverse");const Ct=V.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ht.setValue(F,"boneTexture",Ct.boneTexture,qe))}V.isBatchedMesh&&(ht.setOptional(F,V,"batchingTexture"),ht.setValue(F,"batchingTexture",V._matricesTexture,qe),ht.setOptional(F,V,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",V._indirectTexture,qe),ht.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",V._colorsTexture,qe));const An=q.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ne.update(V,q,Qt),(vi||Oe.receiveShadow!==V.receiveShadow)&&(Oe.receiveShadow=V.receiveShadow,ht.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Wt.envMapIntensity.value=B.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=ny()),vi){if(ht.setValue(F,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&qd(Wt,ki),be&&H.fog===!0&&ve.refreshFogUniforms(Wt,be),ve.refreshMaterialUniforms(Wt,H,Y,P,T.state.transmissionRenderTarget[w.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){const Ct=y;let Ht=0;for(const si of T.state.lightProbeGridArray)si.texture!==null&&(Ct.textures[Ht]=si.texture,Ct.min[Ht]=si.boundingBox.min,Ct.max[Ht]=si.boundingBox.max,Ct.resolution[Ht]=si.resolution,Ht++);for(const si in Ct)Ct[si].length=Ht;Wt.probesSH.value=Ct.textures,Wt.probesMin.value=Ct.min,Wt.probesMax.value=Ct.max,Wt.probesResolution.value=Ct.resolution}bo.upload(F,Ec(Oe),Wt,qe)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(bo.upload(F,Ec(Oe),Wt,qe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(F,"center",V.center),ht.setValue(F,"modelViewMatrix",V.modelViewMatrix),ht.setValue(F,"normalMatrix",V.normalMatrix),ht.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const Ct=H.uniformsGroups;for(let Ht=0,si=Ct.length;Ht<si;Ht++){const wc=Ct[Ht];ze.update(wc,Qt),ze.bind(wc,Qt)}}return Qt}function qd(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Kd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(w,B,q){const H=Ge.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ge.get(w.texture).__webglTexture=B,Ge.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const q=Ge.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){le=w,K=B,W=q;let H=null,V=!1,be=!1;if(w){const Ee=Ge.get(w);if(Ee.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(F.FRAMEBUFFER,Ee.__webglFramebuffer),re.copy(w.viewport),Pe.copy(w.scissor),Be=w.scissorTest,_e.viewport(re),_e.scissor(Pe),_e.setScissorTest(Be),Z=-1;return}else if(Ee.__webglFramebuffer===void 0)qe.setupRenderTarget(w);else if(Ee.__hasExternalTextures)qe.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(Ee.__boundDepthTexture!==$e){if($e!==null&&Ge.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(w)}}const Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);const Fe=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?H=Fe[B][q]:H=Fe[B],V=!0):w.samples>0&&qe.useMultisampledRTT(w)===!1?H=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[q]:H=Fe,re.copy(w.viewport),Pe.copy(w.scissor),Be=w.scissorTest}else re.copy(ae).multiplyScalar(Y).floor(),Pe.copy(Re).multiplyScalar(Y).floor(),Be=De;if(q!==0&&(H=z),_e.bindFramebuffer(F.FRAMEBUFFER,H)&&_e.drawBuffers(w,H),_e.viewport(re),_e.scissor(Pe),_e.setScissorTest(Be),V){const Ee=Ge.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,q)}else if(be){const Ee=B;for(let Ce=0;Ce<w.textures.length;Ce++){const Fe=Ge.get(w.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Fe.__webglTexture,q,Ee)}}else if(w!==null&&q!==0){const Ee=Ge.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ee.__webglTexture,q)}Z=-1};function bc(w){const B=Ge.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=mt.textureFormatReadable(w.format),B.__typeReadable=mt.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,q,H,V,be,Ie,Ee=0){if(!(w&&w.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){_e.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Fe=w.textures[Ee],$e=Fe.format,lt=Fe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee);const Ne=bc(Fe);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-H&&q>=0&&q<=w.height-V&&F.readPixels(B,q,H,V,me.convert($e),me.convert(lt),be)}finally{const Fe=le!==null?Ge.get(le).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,B,q,H,V,be,Ie,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ce=Ce[Ie],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(B>=0&&B<=w.width-H&&q>=0&&q<=w.height-V){_e.bindFramebuffer(F.FRAMEBUFFER,Ce);const Fe=w.textures[Ee],$e=Fe.format,lt=Fe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee);const Ne=bc(Fe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(B,q,H,V,me.convert($e),me.convert(lt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Nt=le!==null?Ge.get(le).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Nt);const bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await qf(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ct),F.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,q=0){const H=Math.pow(2,-q),V=Math.floor(w.image.width*H),be=Math.floor(w.image.height*H),Ie=B!==null?B.x:0,Ee=B!==null?B.y:0;qe.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Ie,Ee,V,be),_e.unbindTexture()},this.copyTextureToTexture=function(w,B,q=null,H=null,V=0,be=0){let Ie,Ee,Ce,Fe,$e,lt,Ne,ct,Nt;const bt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(q!==null)Ie=q.max.x-q.min.x,Ee=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,Fe=q.min.x,$e=q.min.y,lt=q.isBox3?q.min.z:0;else{const ht=Math.pow(2,-V);Ie=Math.floor(bt.width*ht),Ee=Math.floor(bt.height*ht),w.isDataArrayTexture?Ce=bt.depth:w.isData3DTexture?Ce=Math.floor(bt.depth*ht):Ce=1,Fe=0,$e=0,lt=0}H!==null?(Ne=H.x,ct=H.y,Nt=H.z):(Ne=0,ct=0,Nt=0);const Et=me.convert(B.format),$t=me.convert(B.type);let Oe;B.isData3DTexture?(qe.setTexture3D(B,0),Oe=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(qe.setTexture2DArray(B,0),Oe=F.TEXTURE_2D_ARRAY):(qe.setTexture2D(B,0),Oe=F.TEXTURE_2D),_e.activeTexture(F.TEXTURE0),_e.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),_e.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_e.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const rn=_e.getParameter(F.UNPACK_ROW_LENGTH),gt=_e.getParameter(F.UNPACK_IMAGE_HEIGHT),Bi=_e.getParameter(F.UNPACK_SKIP_PIXELS),Qt=_e.getParameter(F.UNPACK_SKIP_ROWS),Ir=_e.getParameter(F.UNPACK_SKIP_IMAGES);_e.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),_e.pixelStorei(F.UNPACK_SKIP_ROWS,$e),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);const vi=w.isDataArrayTexture||w.isData3DTexture,ki=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const ht=Ge.get(w),Wt=Ge.get(B),An=Ge.get(ht.__renderTarget),Ct=Ge.get(Wt.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ht=0;Ht<Ce;Ht++)vi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,V,lt+Ht),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.get(B).__webglTexture,be,Nt+Ht)),F.blitFramebuffer(Fe,$e,Fe+Ie,$e+Ee,Ne,ct,Ne+Ie,ct+Ee,F.DEPTH_BUFFER_BIT,F.NEAREST);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Ge.has(w)){const ht=Ge.get(w),Wt=Ge.get(B);_e.bindFramebuffer(F.READ_FRAMEBUFFER,D),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let An=0;An<Ce;An++)vi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ht.__webglTexture,V,lt+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ht.__webglTexture,V),ki?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,be,Nt+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,be),V!==0?F.blitFramebuffer(Fe,$e,Fe+Ie,$e+Ee,Ne,ct,Ne+Ie,ct+Ee,F.COLOR_BUFFER_BIT,F.NEAREST):ki?F.copyTexSubImage3D(Oe,be,Ne,ct,Nt+An,Fe,$e,Ie,Ee):F.copyTexSubImage2D(Oe,be,Ne,ct,Fe,$e,Ie,Ee);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ki?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Oe,be,Ne,ct,Nt,Ie,Ee,Ce,Et,$t,bt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Oe,be,Ne,ct,Nt,Ie,Ee,Ce,Et,bt.data):F.texSubImage3D(Oe,be,Ne,ct,Nt,Ie,Ee,Ce,Et,$t,bt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,Ne,ct,Ie,Ee,Et,$t,bt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,Ne,ct,bt.width,bt.height,Et,bt.data):F.texSubImage2D(F.TEXTURE_2D,be,Ne,ct,Ie,Ee,Et,$t,bt);_e.pixelStorei(F.UNPACK_ROW_LENGTH,rn),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,Bi),_e.pixelStorei(F.UNPACK_SKIP_ROWS,Qt),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,Ir),be===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&F.generateMipmap(Oe),_e.unbindTexture()},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&qe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?qe.setTextureCube(w,0):w.isData3DTexture?qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qe.setTexture2DArray(w,0):qe.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){K=0,W=0,le=null,_e.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}/*!
 * camera-controls
 * https://github.com/yomotsu/camera-controls
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */const Lt={LEFT:1,RIGHT:2,MIDDLE:4},X=Object.freeze({NONE:0,ROTATE:1,TRUCK:2,SCREEN_PAN:4,OFFSET:8,DOLLY:16,ZOOM:32,TOUCH_ROTATE:64,TOUCH_TRUCK:128,TOUCH_SCREEN_PAN:256,TOUCH_OFFSET:512,TOUCH_DOLLY:1024,TOUCH_ZOOM:2048,TOUCH_DOLLY_TRUCK:4096,TOUCH_DOLLY_SCREEN_PAN:8192,TOUCH_DOLLY_OFFSET:16384,TOUCH_DOLLY_ROTATE:32768,TOUCH_ZOOM_TRUCK:65536,TOUCH_ZOOM_OFFSET:131072,TOUCH_ZOOM_SCREEN_PAN:262144,TOUCH_ZOOM_ROTATE:524288}),_s={NONE:0,IN:1,OUT:-1};function Wi(s){return s.isPerspectiveCamera}function Ri(s){return s.isOrthographicCamera}const bi=Math.PI*2,ou=Math.PI/2,Bd=1e-5,js=Math.PI/180;function In(s,e,t){return Math.max(e,Math.min(t,s))}function wt(s,e=Bd){return Math.abs(s)<e}function _t(s,e,t=Bd){return wt(s-e,t)}function au(s,e){return Math.round(s/e)*e}function er(s){return isFinite(s)?s:s<0?-Number.MAX_VALUE:Number.MAX_VALUE}function tr(s){return Math.abs(s)<Number.MAX_VALUE?s:s*(1/0)}function ho(s,e,t,n,i=1/0,r){n=Math.max(1e-4,n);const o=2/n,a=o*r,l=1/(1+a+.48*a*a+.235*a*a*a);let c=s-e;const h=e,u=i*n;c=In(c,-u,u),e=s-c;const d=(t.value+o*c)*r;t.value=(t.value-o*d)*l;let f=e+(c+d)*l;return h-s>0==f>h&&(f=h,t.value=(f-h)/r),f}function lu(s,e,t,n,i=1/0,r,o){n=Math.max(1e-4,n);const a=2/n,l=a*r,c=1/(1+l+.48*l*l+.235*l*l*l);let h=e.x,u=e.y,d=e.z,f=s.x-h,g=s.y-u,_=s.z-d;const m=h,p=u,v=d,S=i*n,y=S*S,M=f*f+g*g+_*_;if(M>y){const k=Math.sqrt(M);f=f/k*S,g=g/k*S,_=_/k*S}h=s.x-f,u=s.y-g,d=s.z-_;const T=(t.x+a*f)*r,x=(t.y+a*g)*r,b=(t.z+a*_)*r;t.x=(t.x-a*T)*c,t.y=(t.y-a*x)*c,t.z=(t.z-a*b)*c,o.x=h+(f+T)*c,o.y=u+(g+x)*c,o.z=d+(_+b)*c;const O=m-s.x,C=p-s.y,L=v-s.z,U=o.x-m,z=o.y-p,D=o.z-v;return O*U+C*z+L*D>0&&(o.x=m,o.y=p,o.z=v,t.x=(o.x-m)/r,t.y=(o.y-p)/r,t.z=(o.z-v)/r),o}function Ra(s,e){e.set(0,0),s.forEach(t=>{e.x+=t.clientX,e.y+=t.clientY}),e.x/=s.length,e.y/=s.length}function Ca(s,e){return Ri(s)?(console.warn(`${e} is not supported in OrthographicCamera`),!0):!1}class sy{_listeners={};addEventListener(e,t){const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}removeAllEventListeners(e){if(!e){this._listeners={};return}Array.isArray(this._listeners[e])&&(this._listeners[e].length=0)}dispatchEvent(e){const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e)}}}const ry="3.1.2",uo=1/8,oy=/Mac/.test(globalThis?.navigator?.platform);let Ke,cu,fo,La,ln,nt,dt,xs,nr,Xn,Yn,Xi,hu,uu,mn,vs,ys,du,Pa,fu,Da,Ia,po;class _n extends sy{static install(e){Ke=e.THREE,cu=Object.freeze(new Ke.Vector3(0,0,0)),fo=Object.freeze(new Ke.Vector3(0,1,0)),La=Object.freeze(new Ke.Vector3(0,0,1)),ln=new Ke.Vector2,nt=new Ke.Vector3,dt=new Ke.Vector3,xs=new Ke.Vector3,nr=new Ke.Vector3,Xn=new Ke.Vector3,Yn=new Ke.Vector3,Xi=new Ke.Vector3,hu=new Ke.Vector3,uu=new Ke.Vector3,mn=new Ke.Spherical,vs=new Ke.Spherical,ys=new Ke.Box3,du=new Ke.Box3,Pa=new Ke.Sphere,fu=new Ke.Quaternion,Da=new Ke.Quaternion,Ia=new Ke.Matrix4,po=new Ke.Raycaster}static get ACTION(){return X}minPolarAngle=0;maxPolarAngle=Math.PI;minAzimuthAngle=-1/0;maxAzimuthAngle=1/0;minDistance=Number.EPSILON;maxDistance=1/0;infinityDolly=!1;minZoom=.01;maxZoom=1/0;smoothTime=.25;draggingSmoothTime=.125;maxSpeed=1/0;azimuthRotateSpeed=1;polarRotateSpeed=1;dollySpeed=1;dollyDragInverted=!1;truckSpeed=2;dollyToCursor=!1;dragToOffset=!1;boundaryFriction=0;restThreshold=.01;colliderMeshes=[];mouseButtons;touches;cancel=()=>{};lockPointer;unlockPointer;_enabled=!0;_camera;_yAxisUpSpace;_yAxisUpSpaceInverse;_state=X.NONE;_domElement;_viewport=null;_target;_targetEnd;_focalOffset;_focalOffsetEnd;_spherical;_sphericalEnd;_lastDistance;_zoom;_zoomEnd;_lastZoom;_cameraUp0;_target0;_position0;_zoom0;_focalOffset0;_dollyControlCoord;_changedDolly=0;_changedZoom=0;_nearPlaneCorners;_hasRested=!0;_boundary;_boundaryEnclosesCamera=!1;_needsUpdate=!0;_updatedLastTime=!1;_elementRect=new DOMRect;_isDragging=!1;_dragNeedsUpdate=!0;_activePointers=[];_lockedPointer=null;_interactiveArea=new DOMRect(0,0,1,1);_isUserControllingRotate=!1;_isUserControllingDolly=!1;_isUserControllingTruck=!1;_isUserControllingOffset=!1;_isUserControllingZoom=!1;_lastDollyDirection=_s.NONE;_thetaVelocity={value:0};_phiVelocity={value:0};_radiusVelocity={value:0};_targetVelocity=new Ke.Vector3;_focalOffsetVelocity=new Ke.Vector3;_zoomVelocity={value:0};set verticalDragToForward(e){console.warn("camera-controls: `verticalDragToForward` was removed. Use `mouseButtons.left = CameraControls.ACTION.SCREEN_PAN` instead.")}constructor(e,t){super(),typeof Ke>"u"&&console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."),this._camera=e,this._yAxisUpSpace=new Ke.Quaternion().setFromUnitVectors(this._camera.up,fo),this._yAxisUpSpaceInverse=this._yAxisUpSpace.clone().invert(),this._state=X.NONE,this._target=new Ke.Vector3,this._targetEnd=this._target.clone(),this._focalOffset=new Ke.Vector3,this._focalOffsetEnd=this._focalOffset.clone(),this._spherical=new Ke.Spherical().setFromVector3(nt.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)),this._sphericalEnd=this._spherical.clone(),this._lastDistance=this._spherical.radius,this._zoom=this._camera.zoom,this._zoomEnd=this._zoom,this._lastZoom=this._zoom,this._nearPlaneCorners=[new Ke.Vector3,new Ke.Vector3,new Ke.Vector3,new Ke.Vector3],this._updateNearPlaneCorners(),this._boundary=new Ke.Box3(new Ke.Vector3(-1/0,-1/0,-1/0),new Ke.Vector3(1/0,1/0,1/0)),this._cameraUp0=this._camera.up.clone(),this._target0=this._target.clone(),this._position0=this._camera.position.clone(),this._zoom0=this._zoom,this._focalOffset0=this._focalOffset.clone(),this._dollyControlCoord=new Ke.Vector2,this.mouseButtons={left:X.ROTATE,middle:X.DOLLY,right:X.TRUCK,wheel:Wi(this._camera)?X.DOLLY:Ri(this._camera)?X.ZOOM:X.NONE},this.touches={one:X.TOUCH_ROTATE,two:Wi(this._camera)?X.TOUCH_DOLLY_TRUCK:Ri(this._camera)?X.TOUCH_ZOOM_TRUCK:X.NONE,three:X.TOUCH_TRUCK};const n=new Ke.Vector2,i=new Ke.Vector2,r=new Ke.Vector2,o=p=>{if(!this._enabled||!this._domElement)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){const y=this._domElement.getBoundingClientRect(),M=p.clientX/y.width,T=p.clientY/y.height;if(M<this._interactiveArea.left||M>this._interactiveArea.right||T<this._interactiveArea.top||T>this._interactiveArea.bottom)return}const v=p.pointerType!=="mouse"?null:(p.buttons&Lt.LEFT)===Lt.LEFT?Lt.LEFT:(p.buttons&Lt.MIDDLE)===Lt.MIDDLE?Lt.MIDDLE:(p.buttons&Lt.RIGHT)===Lt.RIGHT?Lt.RIGHT:null;if(v!==null){const y=this._findPointerByMouseButton(v);y&&this._disposePointer(y)}if((p.buttons&Lt.LEFT)===Lt.LEFT&&this._lockedPointer)return;const S={pointerId:p.pointerId,clientX:p.clientX,clientY:p.clientY,deltaX:0,deltaY:0,mouseButton:v};this._activePointers.push(S),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",l),this._isDragging=!0,d(p)},a=p=>{p.cancelable&&p.preventDefault();const v=p.pointerId,S=this._lockedPointer||this._findPointerById(v);if(S){if(S.clientX=p.clientX,S.clientY=p.clientY,S.deltaX=p.movementX,S.deltaY=p.movementY,this._state=0,p.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else(!this._isDragging&&this._lockedPointer||this._isDragging&&(p.buttons&Lt.LEFT)===Lt.LEFT)&&(this._state=this._state|this.mouseButtons.left),this._isDragging&&(p.buttons&Lt.MIDDLE)===Lt.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),this._isDragging&&(p.buttons&Lt.RIGHT)===Lt.RIGHT&&(this._state=this._state|this.mouseButtons.right);f()}},l=p=>{const v=this._findPointerById(p.pointerId);if(!(v&&v===this._lockedPointer)){if(v&&this._disposePointer(v),p.pointerType==="touch")switch(this._activePointers.length){case 0:this._state=X.NONE;break;case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else this._state=X.NONE;g()}};let c=-1;const h=p=>{if(!this._domElement||!this._enabled||this.mouseButtons.wheel===X.NONE)return;if(this._interactiveArea.left!==0||this._interactiveArea.top!==0||this._interactiveArea.width!==1||this._interactiveArea.height!==1){const x=this._domElement.getBoundingClientRect(),b=p.clientX/x.width,O=p.clientY/x.height;if(b<this._interactiveArea.left||b>this._interactiveArea.right||O<this._interactiveArea.top||O>this._interactiveArea.bottom)return}if(p.preventDefault(),this.dollyToCursor||this.mouseButtons.wheel===X.ROTATE||this.mouseButtons.wheel===X.TRUCK){const x=performance.now();c-x<1e3&&this._getClientRect(this._elementRect),c=x}const v=oy?-1:-3,S=p.deltaMode===1&&!p.ctrlKey?p.deltaY/v:p.deltaY/(v*10),y=this.dollyToCursor?(p.clientX-this._elementRect.x)/this._elementRect.width*2-1:0,M=this.dollyToCursor?(p.clientY-this._elementRect.y)/this._elementRect.height*-2+1:0;switch(p.ctrlKey?X.ZOOM:this.mouseButtons.wheel){case X.ROTATE:{this._rotateInternal(p.deltaX,p.deltaY),this._isUserControllingRotate=!0;break}case X.TRUCK:{this._truckInternal(p.deltaX,p.deltaY,!1,!1),this._isUserControllingTruck=!0;break}case X.SCREEN_PAN:{this._truckInternal(p.deltaX,p.deltaY,!1,!0),this._isUserControllingTruck=!0;break}case X.OFFSET:{this._truckInternal(p.deltaX,p.deltaY,!0,!1),this._isUserControllingOffset=!0;break}case X.DOLLY:{this._dollyInternal(-S,y,M),this._isUserControllingDolly=!0;break}case X.ZOOM:{this._zoomInternal(-S,y,M),this._isUserControllingZoom=!0;break}}this.dispatchEvent({type:"control"})},u=p=>{if(!(!this._domElement||!this._enabled)){if(this.mouseButtons.right===_n.ACTION.NONE){const v=p instanceof PointerEvent?p.pointerId:0,S=this._findPointerById(v);S&&this._disposePointer(S),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l);return}p.preventDefault()}},d=p=>{if(!this._enabled)return;if(Ra(this._activePointers,ln),this._getClientRect(this._elementRect),n.copy(ln),i.copy(ln),this._activePointers.length>=2){const S=ln.x-this._activePointers[1].clientX,y=ln.y-this._activePointers[1].clientY,M=Math.sqrt(S*S+y*y);r.set(0,M);const T=(this._activePointers[0].clientX+this._activePointers[1].clientX)*.5,x=(this._activePointers[0].clientY+this._activePointers[1].clientY)*.5;i.set(T,x)}if(this._state=0,!p)this._lockedPointer&&(this._state=this._state|this.mouseButtons.left);else if("pointerType"in p&&p.pointerType==="touch")switch(this._activePointers.length){case 1:this._state=this.touches.one;break;case 2:this._state=this.touches.two;break;case 3:this._state=this.touches.three;break}else!this._lockedPointer&&(p.buttons&Lt.LEFT)===Lt.LEFT&&(this._state=this._state|this.mouseButtons.left),(p.buttons&Lt.MIDDLE)===Lt.MIDDLE&&(this._state=this._state|this.mouseButtons.middle),(p.buttons&Lt.RIGHT)===Lt.RIGHT&&(this._state=this._state|this.mouseButtons.right);((this._state&X.ROTATE)===X.ROTATE||(this._state&X.TOUCH_ROTATE)===X.TOUCH_ROTATE||(this._state&X.TOUCH_DOLLY_ROTATE)===X.TOUCH_DOLLY_ROTATE||(this._state&X.TOUCH_ZOOM_ROTATE)===X.TOUCH_ZOOM_ROTATE)&&(this._sphericalEnd.theta=this._spherical.theta,this._sphericalEnd.phi=this._spherical.phi,this._thetaVelocity.value=0,this._phiVelocity.value=0),((this._state&X.TRUCK)===X.TRUCK||(this._state&X.SCREEN_PAN)===X.SCREEN_PAN||(this._state&X.TOUCH_TRUCK)===X.TOUCH_TRUCK||(this._state&X.TOUCH_SCREEN_PAN)===X.TOUCH_SCREEN_PAN||(this._state&X.TOUCH_DOLLY_TRUCK)===X.TOUCH_DOLLY_TRUCK||(this._state&X.TOUCH_DOLLY_SCREEN_PAN)===X.TOUCH_DOLLY_SCREEN_PAN||(this._state&X.TOUCH_ZOOM_TRUCK)===X.TOUCH_ZOOM_TRUCK||(this._state&X.TOUCH_ZOOM_SCREEN_PAN)===X.TOUCH_DOLLY_SCREEN_PAN)&&(this._targetEnd.copy(this._target),this._targetVelocity.set(0,0,0)),((this._state&X.DOLLY)===X.DOLLY||(this._state&X.TOUCH_DOLLY)===X.TOUCH_DOLLY||(this._state&X.TOUCH_DOLLY_TRUCK)===X.TOUCH_DOLLY_TRUCK||(this._state&X.TOUCH_DOLLY_SCREEN_PAN)===X.TOUCH_DOLLY_SCREEN_PAN||(this._state&X.TOUCH_DOLLY_OFFSET)===X.TOUCH_DOLLY_OFFSET||(this._state&X.TOUCH_DOLLY_ROTATE)===X.TOUCH_DOLLY_ROTATE)&&(this._sphericalEnd.radius=this._spherical.radius,this._radiusVelocity.value=0),((this._state&X.ZOOM)===X.ZOOM||(this._state&X.TOUCH_ZOOM)===X.TOUCH_ZOOM||(this._state&X.TOUCH_ZOOM_TRUCK)===X.TOUCH_ZOOM_TRUCK||(this._state&X.TOUCH_ZOOM_SCREEN_PAN)===X.TOUCH_ZOOM_SCREEN_PAN||(this._state&X.TOUCH_ZOOM_OFFSET)===X.TOUCH_ZOOM_OFFSET||(this._state&X.TOUCH_ZOOM_ROTATE)===X.TOUCH_ZOOM_ROTATE)&&(this._zoomEnd=this._zoom,this._zoomVelocity.value=0),((this._state&X.OFFSET)===X.OFFSET||(this._state&X.TOUCH_OFFSET)===X.TOUCH_OFFSET||(this._state&X.TOUCH_DOLLY_OFFSET)===X.TOUCH_DOLLY_OFFSET||(this._state&X.TOUCH_ZOOM_OFFSET)===X.TOUCH_ZOOM_OFFSET)&&(this._focalOffsetEnd.copy(this._focalOffset),this._focalOffsetVelocity.set(0,0,0)),this.dispatchEvent({type:"controlstart"})},f=()=>{if(!this._enabled||!this._dragNeedsUpdate)return;this._dragNeedsUpdate=!1,Ra(this._activePointers,ln);const v=this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement?this._lockedPointer||this._activePointers[0]:null,S=v?-v.deltaX:i.x-ln.x,y=v?-v.deltaY:i.y-ln.y;if(i.copy(ln),((this._state&X.ROTATE)===X.ROTATE||(this._state&X.TOUCH_ROTATE)===X.TOUCH_ROTATE||(this._state&X.TOUCH_DOLLY_ROTATE)===X.TOUCH_DOLLY_ROTATE||(this._state&X.TOUCH_ZOOM_ROTATE)===X.TOUCH_ZOOM_ROTATE)&&(this._rotateInternal(S,y),this._isUserControllingRotate=!0),(this._state&X.DOLLY)===X.DOLLY||(this._state&X.ZOOM)===X.ZOOM){const M=this.dollyToCursor?(n.x-this._elementRect.x)/this._elementRect.width*2-1:0,T=this.dollyToCursor?(n.y-this._elementRect.y)/this._elementRect.height*-2+1:0,x=this.dollyDragInverted?-1:1;(this._state&X.DOLLY)===X.DOLLY?(this._dollyInternal(x*y*uo,M,T),this._isUserControllingDolly=!0):(this._zoomInternal(x*y*uo,M,T),this._isUserControllingZoom=!0)}if((this._state&X.TOUCH_DOLLY)===X.TOUCH_DOLLY||(this._state&X.TOUCH_ZOOM)===X.TOUCH_ZOOM||(this._state&X.TOUCH_DOLLY_TRUCK)===X.TOUCH_DOLLY_TRUCK||(this._state&X.TOUCH_ZOOM_TRUCK)===X.TOUCH_ZOOM_TRUCK||(this._state&X.TOUCH_DOLLY_SCREEN_PAN)===X.TOUCH_DOLLY_SCREEN_PAN||(this._state&X.TOUCH_ZOOM_SCREEN_PAN)===X.TOUCH_ZOOM_SCREEN_PAN||(this._state&X.TOUCH_DOLLY_OFFSET)===X.TOUCH_DOLLY_OFFSET||(this._state&X.TOUCH_ZOOM_OFFSET)===X.TOUCH_ZOOM_OFFSET||(this._state&X.TOUCH_DOLLY_ROTATE)===X.TOUCH_DOLLY_ROTATE||(this._state&X.TOUCH_ZOOM_ROTATE)===X.TOUCH_ZOOM_ROTATE){const M=ln.x-this._activePointers[1].clientX,T=ln.y-this._activePointers[1].clientY,x=Math.sqrt(M*M+T*T),b=r.y-x;r.set(0,x);const O=this.dollyToCursor?(i.x-this._elementRect.x)/this._elementRect.width*2-1:0,C=this.dollyToCursor?(i.y-this._elementRect.y)/this._elementRect.height*-2+1:0;(this._state&X.TOUCH_DOLLY)===X.TOUCH_DOLLY||(this._state&X.TOUCH_DOLLY_ROTATE)===X.TOUCH_DOLLY_ROTATE||(this._state&X.TOUCH_DOLLY_TRUCK)===X.TOUCH_DOLLY_TRUCK||(this._state&X.TOUCH_DOLLY_SCREEN_PAN)===X.TOUCH_DOLLY_SCREEN_PAN||(this._state&X.TOUCH_DOLLY_OFFSET)===X.TOUCH_DOLLY_OFFSET?(this._dollyInternal(b*uo,O,C),this._isUserControllingDolly=!0):(this._zoomInternal(b*uo,O,C),this._isUserControllingZoom=!0)}((this._state&X.TRUCK)===X.TRUCK||(this._state&X.TOUCH_TRUCK)===X.TOUCH_TRUCK||(this._state&X.TOUCH_DOLLY_TRUCK)===X.TOUCH_DOLLY_TRUCK||(this._state&X.TOUCH_ZOOM_TRUCK)===X.TOUCH_ZOOM_TRUCK)&&(this._truckInternal(S,y,!1,!1),this._isUserControllingTruck=!0),((this._state&X.SCREEN_PAN)===X.SCREEN_PAN||(this._state&X.TOUCH_SCREEN_PAN)===X.TOUCH_SCREEN_PAN||(this._state&X.TOUCH_DOLLY_SCREEN_PAN)===X.TOUCH_DOLLY_SCREEN_PAN||(this._state&X.TOUCH_ZOOM_SCREEN_PAN)===X.TOUCH_ZOOM_SCREEN_PAN)&&(this._truckInternal(S,y,!1,!0),this._isUserControllingTruck=!0),((this._state&X.OFFSET)===X.OFFSET||(this._state&X.TOUCH_OFFSET)===X.TOUCH_OFFSET||(this._state&X.TOUCH_DOLLY_OFFSET)===X.TOUCH_DOLLY_OFFSET||(this._state&X.TOUCH_ZOOM_OFFSET)===X.TOUCH_ZOOM_OFFSET)&&(this._truckInternal(S,y,!0,!1),this._isUserControllingOffset=!0),this.dispatchEvent({type:"control"})},g=()=>{Ra(this._activePointers,ln),i.copy(ln),this._dragNeedsUpdate=!1,(this._activePointers.length===0||this._activePointers.length===1&&this._activePointers[0]===this._lockedPointer)&&(this._isDragging=!1),this._activePointers.length===0&&this._domElement&&(this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this.dispatchEvent({type:"controlend"}))};this.lockPointer=()=>{!this._enabled||!this._domElement||(this.cancel(),this._lockedPointer={pointerId:-1,clientX:0,clientY:0,deltaX:0,deltaY:0,mouseButton:null},this._activePointers.push(this._lockedPointer),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.requestPointerLock(),this._domElement.ownerDocument.addEventListener("pointerlockchange",_),this._domElement.ownerDocument.addEventListener("pointerlockerror",m),this._domElement.ownerDocument.addEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.addEventListener("pointerup",l),d())},this.unlockPointer=()=>{this._lockedPointer!==null&&(this._disposePointer(this._lockedPointer),this._lockedPointer=null),this._domElement?.ownerDocument.exitPointerLock(),this._domElement?.ownerDocument.removeEventListener("pointerlockchange",_),this._domElement?.ownerDocument.removeEventListener("pointerlockerror",m),this.cancel()};const _=()=>{this._domElement&&this._domElement.ownerDocument.pointerLockElement===this._domElement||this.unlockPointer()},m=()=>{this.unlockPointer()};this._addAllEventListeners=p=>{this._domElement=p,this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none",this._domElement.addEventListener("pointerdown",o),this._domElement.addEventListener("pointercancel",l),this._domElement.addEventListener("wheel",h,{passive:!1}),this._domElement.addEventListener("contextmenu",u)},this._removeAllEventListeners=()=>{this._domElement&&(this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect="",this._domElement.removeEventListener("pointerdown",o),this._domElement.removeEventListener("pointercancel",l),this._domElement.removeEventListener("wheel",h,{passive:!1}),this._domElement.removeEventListener("contextmenu",u),this._domElement.ownerDocument.removeEventListener("pointermove",a,{passive:!1}),this._domElement.ownerDocument.removeEventListener("pointerup",l),this._domElement.ownerDocument.removeEventListener("pointerlockchange",_),this._domElement.ownerDocument.removeEventListener("pointerlockerror",m))},this.cancel=()=>{this._state!==X.NONE&&(this._state=X.NONE,this._activePointers.length=0,g())},t&&this.connect(t),this.update(0)}get camera(){return this._camera}set camera(e){this._camera=e,this.updateCameraUp(),this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0}get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._domElement&&(e?(this._domElement.style.touchAction="none",this._domElement.style.userSelect="none",this._domElement.style.webkitUserSelect="none"):(this.cancel(),this._domElement.style.touchAction="",this._domElement.style.userSelect="",this._domElement.style.webkitUserSelect=""))}get active(){return!this._hasRested}get currentAction(){return this._state}get distance(){return this._spherical.radius}set distance(e){this._spherical.radius===e&&this._sphericalEnd.radius===e||(this._spherical.radius=e,this._sphericalEnd.radius=e,this._needsUpdate=!0)}get azimuthAngle(){return this._spherical.theta}set azimuthAngle(e){this._spherical.theta===e&&this._sphericalEnd.theta===e||(this._spherical.theta=e,this._sphericalEnd.theta=e,this._needsUpdate=!0)}get polarAngle(){return this._spherical.phi}set polarAngle(e){this._spherical.phi===e&&this._sphericalEnd.phi===e||(this._spherical.phi=e,this._sphericalEnd.phi=e,this._needsUpdate=!0)}get boundaryEnclosesCamera(){return this._boundaryEnclosesCamera}set boundaryEnclosesCamera(e){this._boundaryEnclosesCamera=e,this._needsUpdate=!0}set interactiveArea(e){this._interactiveArea.width=In(e.width,0,1),this._interactiveArea.height=In(e.height,0,1),this._interactiveArea.x=In(e.x,0,1-this._interactiveArea.width),this._interactiveArea.y=In(e.y,0,1-this._interactiveArea.height)}addEventListener(e,t){super.addEventListener(e,t)}removeEventListener(e,t){super.removeEventListener(e,t)}rotate(e,t,n=!1){return this.rotateTo(this._sphericalEnd.theta+e,this._sphericalEnd.phi+t,n)}rotateAzimuthTo(e,t=!1){return this.rotateTo(e,this._sphericalEnd.phi,t)}rotatePolarTo(e,t=!1){return this.rotateTo(this._sphericalEnd.theta,e,t)}rotateTo(e,t,n=!1){this._isUserControllingRotate=!1;const i=In(e,this.minAzimuthAngle,this.maxAzimuthAngle),r=In(t,this.minPolarAngle,this.maxPolarAngle);this._sphericalEnd.theta=i,this._sphericalEnd.phi=r,this._sphericalEnd.makeSafe(),this._needsUpdate=!0,n||(this._spherical.theta=this._sphericalEnd.theta,this._spherical.phi=this._sphericalEnd.phi);const o=!n||_t(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&_t(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold);return this._createOnRestPromise(o)}dolly(e,t=!1){return this.dollyTo(this._sphericalEnd.radius-e,t)}dollyTo(e,t=!1){return this._isUserControllingDolly=!1,this._lastDollyDirection=_s.NONE,this._changedDolly=0,this._dollyToNoClamp(In(e,this.minDistance,this.maxDistance),t)}_dollyToNoClamp(e,t=!1){const n=this._sphericalEnd.radius;if(this.colliderMeshes.length>=1){const o=this._collisionTest(),a=_t(o,this._spherical.radius);if(!(n>e)&&a)return Promise.resolve();this._sphericalEnd.radius=Math.min(e,o)}else this._sphericalEnd.radius=e;this._needsUpdate=!0,t||(this._spherical.radius=this._sphericalEnd.radius);const r=!t||_t(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(r)}dollyInFixed(e,t=!1){this._targetEnd.add(this._getCameraDirection(nr).multiplyScalar(e)),t||this._target.copy(this._targetEnd);const n=!t||_t(this._target.x,this._targetEnd.x,this.restThreshold)&&_t(this._target.y,this._targetEnd.y,this.restThreshold)&&_t(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(n)}zoom(e,t=!1){return this.zoomTo(this._zoomEnd+e,t)}zoomTo(e,t=!1){this._isUserControllingZoom=!1,this._zoomEnd=In(e,this.minZoom,this.maxZoom),this._needsUpdate=!0,t||(this._zoom=this._zoomEnd);const n=!t||_t(this._zoom,this._zoomEnd,this.restThreshold);return this._changedZoom=0,this._createOnRestPromise(n)}pan(e,t,n=!1){return console.warn("`pan` has been renamed to `truck`"),this.truck(e,t,n)}truck(e,t,n=!1){this._camera.updateMatrix(),Xn.setFromMatrixColumn(this._camera.matrix,0),Yn.setFromMatrixColumn(this._camera.matrix,1),Xn.multiplyScalar(e),Yn.multiplyScalar(-t);const i=nt.copy(Xn).add(Yn),r=dt.copy(this._targetEnd).add(i);return this.moveTo(r.x,r.y,r.z,n)}forward(e,t=!1){nt.setFromMatrixColumn(this._camera.matrix,0),nt.crossVectors(this._camera.up,nt),nt.multiplyScalar(e);const n=dt.copy(this._targetEnd).add(nt);return this.moveTo(n.x,n.y,n.z,t)}elevate(e,t=!1){return nt.copy(this._camera.up).multiplyScalar(e),this.moveTo(this._targetEnd.x+nt.x,this._targetEnd.y+nt.y,this._targetEnd.z+nt.z,t)}moveTo(e,t,n,i=!1){this._isUserControllingTruck=!1;const r=nt.set(e,t,n).sub(this._targetEnd);this._encloseToBoundary(this._targetEnd,r,this.boundaryFriction),this._needsUpdate=!0,i||this._target.copy(this._targetEnd);const o=!i||_t(this._target.x,this._targetEnd.x,this.restThreshold)&&_t(this._target.y,this._targetEnd.y,this.restThreshold)&&_t(this._target.z,this._targetEnd.z,this.restThreshold);return this._createOnRestPromise(o)}lookInDirectionOf(e,t,n,i=!1){const a=nt.set(e,t,n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);return this.setPosition(a.x,a.y,a.z,i)}fitToBox(e,t,{cover:n=!1,paddingLeft:i=0,paddingRight:r=0,paddingBottom:o=0,paddingTop:a=0}={}){const l=[],c=e.isBox3?ys.copy(e):ys.setFromObject(e);c.isEmpty()&&(console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"),Promise.resolve());const h=au(this._sphericalEnd.theta,ou),u=au(this._sphericalEnd.phi,ou);l.push(this.rotateTo(h,u,t));const d=nt.setFromSpherical(this._sphericalEnd).normalize(),f=fu.setFromUnitVectors(d,La),g=_t(Math.abs(d.y),1);g&&f.multiply(Da.setFromAxisAngle(fo,h)),f.multiply(this._yAxisUpSpaceInverse);const _=du.makeEmpty();dt.copy(c.min).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.min).setX(c.max.x).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.min).setY(c.max.y).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.max).setZ(c.min.z).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.min).setZ(c.max.z).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.max).setY(c.min.y).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.max).setX(c.min.x).applyQuaternion(f),_.expandByPoint(dt),dt.copy(c.max).applyQuaternion(f),_.expandByPoint(dt),_.min.x-=i,_.min.y-=o,_.max.x+=r,_.max.y+=a,f.setFromUnitVectors(La,d),g&&f.premultiply(Da.invert()),f.premultiply(this._yAxisUpSpace);const m=_.getSize(nt),p=_.getCenter(dt).applyQuaternion(f);if(Wi(this._camera)){const v=this.getDistanceToFitBox(m.x,m.y,m.z,n);l.push(this.moveTo(p.x,p.y,p.z,t)),l.push(this.dollyTo(v,t)),l.push(this.setFocalOffset(0,0,0,t))}else if(Ri(this._camera)){const v=this._camera,S=v.right-v.left,y=v.top-v.bottom,M=n?Math.max(S/m.x,y/m.y):Math.min(S/m.x,y/m.y);l.push(this.moveTo(p.x,p.y,p.z,t)),l.push(this.zoomTo(M,t)),l.push(this.setFocalOffset(0,0,0,t))}return Promise.all(l)}fitToSphere(e,t){const n=[],r="isObject3D"in e?_n.createBoundingSphere(e,Pa):Pa.copy(e);if(n.push(this.moveTo(r.center.x,r.center.y,r.center.z,t)),Wi(this._camera)){const o=this.getDistanceToFitSphere(r.radius);n.push(this.dollyTo(o,t))}else if(Ri(this._camera)){const o=this._camera.right-this._camera.left,a=this._camera.top-this._camera.bottom,l=2*r.radius,c=Math.min(o/l,a/l);n.push(this.zoomTo(c,t))}return n.push(this.setFocalOffset(0,0,0,t)),Promise.all(n)}setLookAt(e,t,n,i,r,o,a=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=_s.NONE,this._changedDolly=0;const l=dt.set(i,r,o),c=nt.set(e,t,n);this._targetEnd.copy(l),this._sphericalEnd.setFromVector3(c.sub(l).applyQuaternion(this._yAxisUpSpace)),this._needsUpdate=!0,a||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));const h=!a||_t(this._target.x,this._targetEnd.x,this.restThreshold)&&_t(this._target.y,this._targetEnd.y,this.restThreshold)&&_t(this._target.z,this._targetEnd.z,this.restThreshold)&&_t(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&_t(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&_t(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(h)}lerp(e,t,n,i=!1){this._isUserControllingRotate=!1,this._isUserControllingDolly=!1,this._isUserControllingTruck=!1,this._lastDollyDirection=_s.NONE,this._changedDolly=0;const r=nt.set(...e.target);if("spherical"in e)mn.set(...e.spherical);else{const u=dt.set(...e.position);mn.setFromVector3(u.sub(r).applyQuaternion(this._yAxisUpSpace))}const o=xs.set(...t.target);if("spherical"in t)vs.set(...t.spherical);else{const u=dt.set(...t.position);vs.setFromVector3(u.sub(o).applyQuaternion(this._yAxisUpSpace))}this._targetEnd.copy(r.lerp(o,n));const a=vs.theta-mn.theta,l=vs.phi-mn.phi,c=vs.radius-mn.radius;this._sphericalEnd.set(mn.radius+c*n,mn.phi+l*n,mn.theta+a*n),this._needsUpdate=!0,i||(this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd));const h=!i||_t(this._target.x,this._targetEnd.x,this.restThreshold)&&_t(this._target.y,this._targetEnd.y,this.restThreshold)&&_t(this._target.z,this._targetEnd.z,this.restThreshold)&&_t(this._spherical.theta,this._sphericalEnd.theta,this.restThreshold)&&_t(this._spherical.phi,this._sphericalEnd.phi,this.restThreshold)&&_t(this._spherical.radius,this._sphericalEnd.radius,this.restThreshold);return this._createOnRestPromise(h)}lerpLookAt(e,t,n,i,r,o,a,l,c,h,u,d,f,g=!1){return this.lerp({position:[e,t,n],target:[i,r,o]},{position:[a,l,c],target:[h,u,d]},f,g)}setPosition(e,t,n,i=!1){return this.setLookAt(e,t,n,this._targetEnd.x,this._targetEnd.y,this._targetEnd.z,i)}setTarget(e,t,n,i=!1){const r=this.getPosition(nt),o=this.setLookAt(r.x,r.y,r.z,e,t,n,i);return this._sphericalEnd.phi=In(this._sphericalEnd.phi,this.minPolarAngle,this.maxPolarAngle),o}setFocalOffset(e,t,n,i=!1){this._isUserControllingOffset=!1,this._focalOffsetEnd.set(e,t,n),this._needsUpdate=!0,i||this._focalOffset.copy(this._focalOffsetEnd);const r=!i||_t(this._focalOffset.x,this._focalOffsetEnd.x,this.restThreshold)&&_t(this._focalOffset.y,this._focalOffsetEnd.y,this.restThreshold)&&_t(this._focalOffset.z,this._focalOffsetEnd.z,this.restThreshold);return this._createOnRestPromise(r)}setOrbitPoint(e,t,n){this._camera.updateMatrixWorld(),Xn.setFromMatrixColumn(this._camera.matrixWorldInverse,0),Yn.setFromMatrixColumn(this._camera.matrixWorldInverse,1),Xi.setFromMatrixColumn(this._camera.matrixWorldInverse,2);const i=nt.set(e,t,n),r=i.distanceTo(this._camera.position),o=i.sub(this._camera.position);Xn.multiplyScalar(o.x),Yn.multiplyScalar(o.y),Xi.multiplyScalar(o.z),nt.copy(Xn).add(Yn).add(Xi),nt.z=nt.z+r,this.dollyTo(r,!1),this.setFocalOffset(-nt.x,nt.y,-nt.z,!1),this.moveTo(e,t,n,!1)}setBoundary(e){if(!e){this._boundary.min.set(-1/0,-1/0,-1/0),this._boundary.max.set(1/0,1/0,1/0),this._needsUpdate=!0;return}this._boundary.copy(e),this._boundary.clampPoint(this._targetEnd,this._targetEnd),this._needsUpdate=!0}setViewport(e,t,n,i){if(e===null){this._viewport=null;return}this._viewport=this._viewport||new Ke.Vector4,typeof e=="number"?this._viewport.set(e,t,n,i):this._viewport.copy(e)}getDistanceToFitBox(e,t,n,i=!1){if(Ca(this._camera,"getDistanceToFitBox"))return this._spherical.radius;const r=e/t,o=this._camera.getEffectiveFOV()*js,a=this._camera.aspect;return((i?r>a:r<a)?t:e/a)*.5/Math.tan(o*.5)+n*.5}getDistanceToFitSphere(e){if(Ca(this._camera,"getDistanceToFitSphere"))return this._spherical.radius;const t=this._camera.getEffectiveFOV()*js,n=Math.atan(Math.tan(t*.5)*this._camera.aspect)*2,i=1<this._camera.aspect?t:n;return e/Math.sin(i*.5)}getTarget(e,t=!0){return(e&&e.isVector3?e:new Ke.Vector3).copy(t?this._targetEnd:this._target)}getPosition(e,t=!0){return(e&&e.isVector3?e:new Ke.Vector3).setFromSpherical(t?this._sphericalEnd:this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t?this._targetEnd:this._target)}getSpherical(e,t=!0){return(e||new Ke.Spherical).copy(t?this._sphericalEnd:this._spherical)}getFocalOffset(e,t=!0){return(e&&e.isVector3?e:new Ke.Vector3).copy(t?this._focalOffsetEnd:this._focalOffset)}normalizeRotations(){return this._sphericalEnd.theta=(this._sphericalEnd.theta%bi+bi)%bi,this._sphericalEnd.theta>Math.PI&&(this._sphericalEnd.theta-=bi),this._spherical.theta+=bi*Math.round((this._sphericalEnd.theta-this._spherical.theta)/bi),this}stop(){this._focalOffset.copy(this._focalOffsetEnd),this._target.copy(this._targetEnd),this._spherical.copy(this._sphericalEnd),this._zoom=this._zoomEnd}reset(e=!1){if(!_t(this._camera.up.x,this._cameraUp0.x)||!_t(this._camera.up.y,this._cameraUp0.y)||!_t(this._camera.up.z,this._cameraUp0.z)){this._camera.up.copy(this._cameraUp0);const n=this.getPosition(nt);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}const t=[this.setLookAt(this._position0.x,this._position0.y,this._position0.z,this._target0.x,this._target0.y,this._target0.z,e),this.setFocalOffset(this._focalOffset0.x,this._focalOffset0.y,this._focalOffset0.z,e),this.zoomTo(this._zoom0,e)];return Promise.all(t)}saveState(){this._cameraUp0.copy(this._camera.up),this.getTarget(this._target0),this.getPosition(this._position0),this._zoom0=this._zoom,this._focalOffset0.copy(this._focalOffset)}updateCameraUp(){this._yAxisUpSpace.setFromUnitVectors(this._camera.up,fo),this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert()}applyCameraUp(){const e=nt.subVectors(this._target,this._camera.position).normalize(),t=dt.crossVectors(e,this._camera.up);this._camera.up.crossVectors(t,e).normalize(),this._camera.updateMatrixWorld();const n=this.getPosition(nt);this.updateCameraUp(),this.setPosition(n.x,n.y,n.z)}update(e){const t=this._sphericalEnd.theta-this._spherical.theta,n=this._sphericalEnd.phi-this._spherical.phi,i=this._sphericalEnd.radius-this._spherical.radius,r=hu.subVectors(this._targetEnd,this._target),o=uu.subVectors(this._focalOffsetEnd,this._focalOffset),a=this._zoomEnd-this._zoom;if(wt(t))this._thetaVelocity.value=0,this._spherical.theta=this._sphericalEnd.theta;else{const u=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.theta=ho(this._spherical.theta,this._sphericalEnd.theta,this._thetaVelocity,u,1/0,e),this._needsUpdate=!0}if(wt(n))this._phiVelocity.value=0,this._spherical.phi=this._sphericalEnd.phi;else{const u=this._isUserControllingRotate?this.draggingSmoothTime:this.smoothTime;this._spherical.phi=ho(this._spherical.phi,this._sphericalEnd.phi,this._phiVelocity,u,1/0,e),this._needsUpdate=!0}if(wt(i))this._radiusVelocity.value=0,this._spherical.radius=this._sphericalEnd.radius;else{const u=this._isUserControllingDolly?this.draggingSmoothTime:this.smoothTime;this._spherical.radius=ho(this._spherical.radius,this._sphericalEnd.radius,this._radiusVelocity,u,this.maxSpeed,e),this._needsUpdate=!0}if(wt(r.x)&&wt(r.y)&&wt(r.z))this._targetVelocity.set(0,0,0),this._target.copy(this._targetEnd);else{const u=this._isUserControllingTruck?this.draggingSmoothTime:this.smoothTime;lu(this._target,this._targetEnd,this._targetVelocity,u,this.maxSpeed,e,this._target),this._needsUpdate=!0}if(wt(o.x)&&wt(o.y)&&wt(o.z))this._focalOffsetVelocity.set(0,0,0),this._focalOffset.copy(this._focalOffsetEnd);else{const u=this._isUserControllingOffset?this.draggingSmoothTime:this.smoothTime;lu(this._focalOffset,this._focalOffsetEnd,this._focalOffsetVelocity,u,this.maxSpeed,e,this._focalOffset),this._needsUpdate=!0}if(wt(a))this._zoomVelocity.value=0,this._zoom=this._zoomEnd;else{const u=this._isUserControllingZoom?this.draggingSmoothTime:this.smoothTime;this._zoom=ho(this._zoom,this._zoomEnd,this._zoomVelocity,u,1/0,e)}if(this.dollyToCursor){if(Wi(this._camera)&&this._changedDolly!==0){const u=this._spherical.radius-this._lastDistance,d=this._camera,f=this._getCameraDirection(nr),g=nt.copy(f).cross(d.up).normalize();g.lengthSq()===0&&(g.x=1);const _=dt.crossVectors(g,f),m=this._sphericalEnd.radius*Math.tan(d.getEffectiveFOV()*js*.5),v=(this._sphericalEnd.radius-u-this._sphericalEnd.radius)/this._sphericalEnd.radius,S=xs.copy(this._targetEnd).add(g.multiplyScalar(this._dollyControlCoord.x*m*d.aspect)).add(_.multiplyScalar(this._dollyControlCoord.y*m)),y=nt.copy(this._targetEnd).lerp(S,v),M=this._lastDollyDirection===_s.IN&&this._spherical.radius<=this.minDistance,T=this._lastDollyDirection===_s.OUT&&this.maxDistance<=this._spherical.radius;if(this.infinityDolly&&(M||T)){this._sphericalEnd.radius-=u,this._spherical.radius-=u;const b=dt.copy(f).multiplyScalar(-u);y.add(b)}this._boundary.clampPoint(y,y);const x=dt.subVectors(y,this._targetEnd);this._targetEnd.copy(y),this._target.add(x),this._changedDolly-=u,wt(this._changedDolly)&&(this._changedDolly=0)}else if(Ri(this._camera)&&this._changedZoom!==0){const u=this._zoom-this._lastZoom,d=this._camera,f=nt.set(this._dollyControlCoord.x,this._dollyControlCoord.y,(d.near+d.far)/(d.near-d.far)).unproject(d),g=dt.set(0,0,-1).applyQuaternion(d.quaternion),_=xs.copy(f).add(g.multiplyScalar(-f.dot(d.up))),p=-(this._zoom-u-this._zoom)/this._zoom,v=this._getCameraDirection(nr),S=this._targetEnd.dot(v),y=nt.copy(this._targetEnd).lerp(_,p),M=y.dot(v),T=v.multiplyScalar(M-S);y.sub(T),this._boundary.clampPoint(y,y);const x=dt.subVectors(y,this._targetEnd);this._targetEnd.copy(y),this._target.add(x),this._changedZoom-=u,wt(this._changedZoom)&&(this._changedZoom=0)}}this._camera.zoom!==this._zoom&&(this._camera.zoom=this._zoom,this._camera.updateProjectionMatrix(),this._updateNearPlaneCorners(),this._needsUpdate=!0),this._dragNeedsUpdate=!0;const l=this._collisionTest();this._spherical.radius=Math.min(this._spherical.radius,l),this._spherical.makeSafe(),this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target),this._camera.lookAt(this._target),(!wt(this._focalOffset.x)||!wt(this._focalOffset.y)||!wt(this._focalOffset.z))&&(this._camera.matrix.compose(this._camera.position,this._camera.quaternion,this._camera.scale),Xn.setFromMatrixColumn(this._camera.matrix,0),Yn.setFromMatrixColumn(this._camera.matrix,1),Xi.setFromMatrixColumn(this._camera.matrix,2),Xn.multiplyScalar(this._focalOffset.x),Yn.multiplyScalar(-this._focalOffset.y),Xi.multiplyScalar(this._focalOffset.z),nt.copy(Xn).add(Yn).add(Xi),this._camera.position.add(nt),this._camera.updateMatrixWorld()),this._boundaryEnclosesCamera&&this._encloseToBoundary(this._camera.position.copy(this._target),nt.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse),1);const h=this._needsUpdate;return h&&!this._updatedLastTime?(this._hasRested=!1,this.dispatchEvent({type:"wake"}),this.dispatchEvent({type:"update"})):h?(this.dispatchEvent({type:"update"}),wt(t,this.restThreshold)&&wt(n,this.restThreshold)&&wt(i,this.restThreshold)&&wt(r.x,this.restThreshold)&&wt(r.y,this.restThreshold)&&wt(r.z,this.restThreshold)&&wt(o.x,this.restThreshold)&&wt(o.y,this.restThreshold)&&wt(o.z,this.restThreshold)&&wt(a,this.restThreshold)&&!this._hasRested&&(this._hasRested=!0,this.dispatchEvent({type:"rest"}))):!h&&this._updatedLastTime&&this.dispatchEvent({type:"sleep"}),this._lastDistance=this._spherical.radius,this._lastZoom=this._zoom,this._updatedLastTime=h,this._needsUpdate=!1,h}toJSON(){return JSON.stringify({enabled:this._enabled,minDistance:this.minDistance,maxDistance:er(this.maxDistance),minZoom:this.minZoom,maxZoom:er(this.maxZoom),minPolarAngle:this.minPolarAngle,maxPolarAngle:er(this.maxPolarAngle),minAzimuthAngle:er(this.minAzimuthAngle),maxAzimuthAngle:er(this.maxAzimuthAngle),smoothTime:this.smoothTime,draggingSmoothTime:this.draggingSmoothTime,dollySpeed:this.dollySpeed,truckSpeed:this.truckSpeed,dollyToCursor:this.dollyToCursor,target:this._targetEnd.toArray(),position:nt.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),zoom:this._zoomEnd,focalOffset:this._focalOffsetEnd.toArray(),target0:this._target0.toArray(),position0:this._position0.toArray(),zoom0:this._zoom0,focalOffset0:this._focalOffset0.toArray()})}fromJSON(e,t=!1){const n=JSON.parse(e);this.enabled=n.enabled,this.minDistance=n.minDistance,this.maxDistance=tr(n.maxDistance),this.minZoom=n.minZoom,this.maxZoom=tr(n.maxZoom),this.minPolarAngle=n.minPolarAngle,this.maxPolarAngle=tr(n.maxPolarAngle),this.minAzimuthAngle=tr(n.minAzimuthAngle),this.maxAzimuthAngle=tr(n.maxAzimuthAngle),this.smoothTime=n.smoothTime,this.draggingSmoothTime=n.draggingSmoothTime,this.dollySpeed=n.dollySpeed,this.truckSpeed=n.truckSpeed,this.dollyToCursor=n.dollyToCursor,this._target0.fromArray(n.target0),this._position0.fromArray(n.position0),this._zoom0=n.zoom0,this._focalOffset0.fromArray(n.focalOffset0),this.moveTo(n.target[0],n.target[1],n.target[2],t),mn.setFromVector3(nt.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)),this.rotateTo(mn.theta,mn.phi,t),this.dollyTo(mn.radius,t),this.zoomTo(n.zoom,t),this.setFocalOffset(n.focalOffset[0],n.focalOffset[1],n.focalOffset[2],t),this._needsUpdate=!0}connect(e){if(this._domElement){console.warn("camera-controls is already connected.");return}e.setAttribute("data-camera-controls-version",ry),this._addAllEventListeners(e),this._getClientRect(this._elementRect)}disconnect(){this.cancel(),this._removeAllEventListeners(),this._domElement&&(this._domElement.removeAttribute("data-camera-controls-version"),this._domElement=void 0)}dispose(){this.removeAllEventListeners(),this.disconnect()}_getTargetDirection(e){return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse)}_getCameraDirection(e){return this._getTargetDirection(e).negate()}_findPointerById(e){return this._activePointers.find(t=>t.pointerId===e)}_findPointerByMouseButton(e){return this._activePointers.find(t=>t.mouseButton===e)}_disposePointer(e){this._activePointers.splice(this._activePointers.indexOf(e),1)}_encloseToBoundary(e,t,n){const i=t.lengthSq();if(i===0)return e;const r=dt.copy(t).add(e),a=this._boundary.clampPoint(r,xs).sub(r),l=a.lengthSq();if(l===0)return e.add(t);if(l===i)return e;if(n===0)return e.add(t).add(a);{const c=1+n*l/t.dot(a);return e.add(dt.copy(t).multiplyScalar(c)).add(a.multiplyScalar(1-n))}}_updateNearPlaneCorners(){if(Wi(this._camera)){const e=this._camera,t=e.near,n=e.getEffectiveFOV()*js,i=Math.tan(n*.5)*t,r=i*e.aspect;this._nearPlaneCorners[0].set(-r,-i,0),this._nearPlaneCorners[1].set(r,-i,0),this._nearPlaneCorners[2].set(r,i,0),this._nearPlaneCorners[3].set(-r,i,0)}else if(Ri(this._camera)){const e=this._camera,t=1/e.zoom,n=e.left*t,i=e.right*t,r=e.top*t,o=e.bottom*t;this._nearPlaneCorners[0].set(n,r,0),this._nearPlaneCorners[1].set(i,r,0),this._nearPlaneCorners[2].set(i,o,0),this._nearPlaneCorners[3].set(n,o,0)}}_truckInternal=(e,t,n,i)=>{let r,o;if(Wi(this._camera)){const a=nt.copy(this._camera.position).sub(this._target),l=this._camera.getEffectiveFOV()*js,c=a.length()*Math.tan(l*.5);r=this.truckSpeed*e*c/this._elementRect.height,o=this.truckSpeed*t*c/this._elementRect.height}else if(Ri(this._camera)){const a=this._camera;r=this.truckSpeed*e*(a.right-a.left)/a.zoom/this._elementRect.width,o=this.truckSpeed*t*(a.top-a.bottom)/a.zoom/this._elementRect.height}else return;i?(n?this.setFocalOffset(this._focalOffsetEnd.x+r,this._focalOffsetEnd.y,this._focalOffsetEnd.z,!0):this.truck(r,0,!0),this.forward(-o,!0)):n?this.setFocalOffset(this._focalOffsetEnd.x+r,this._focalOffsetEnd.y+o,this._focalOffsetEnd.z,!0):this.truck(r,o,!0)};_rotateInternal=(e,t)=>{const n=bi*this.azimuthRotateSpeed*e/this._elementRect.height,i=bi*this.polarRotateSpeed*t/this._elementRect.height;this.rotate(n,i,!0)};_dollyInternal=(e,t,n)=>{const i=Math.pow(.95,-e*this.dollySpeed),r=this._sphericalEnd.radius,o=this._sphericalEnd.radius*i,a=In(o,this.minDistance,this.maxDistance),l=a-o;this.infinityDolly&&this.dollyToCursor?this._dollyToNoClamp(o,!0):this.infinityDolly&&!this.dollyToCursor?(this.dollyInFixed(l,!0),this._dollyToNoClamp(a,!0)):this._dollyToNoClamp(a,!0),this.dollyToCursor&&(this._changedDolly+=(this.infinityDolly?o:a)-r,this._dollyControlCoord.set(t,n)),this._lastDollyDirection=Math.sign(-e)};_zoomInternal=(e,t,n)=>{const i=Math.pow(.95,e*this.dollySpeed),r=this._zoom,o=this._zoom*i;this.zoomTo(o,!0),this.dollyToCursor&&(this._changedZoom+=o-r,this._dollyControlCoord.set(t,n))};_collisionTest(){let e=1/0;if(!(this.colliderMeshes.length>=1)||Ca(this._camera,"_collisionTest"))return e;const n=this._getTargetDirection(nr);Ia.lookAt(cu,n,this._camera.up);for(let i=0;i<4;i++){const r=dt.copy(this._nearPlaneCorners[i]);r.applyMatrix4(Ia);const o=xs.addVectors(this._target,r);po.set(o,n),po.far=this._spherical.radius+1;const a=po.intersectObjects(this.colliderMeshes);a.length!==0&&a[0].distance<e&&(e=a[0].distance)}return e}_getClientRect(e){if(!this._domElement)return;const t=this._domElement.getBoundingClientRect();return e.x=t.left,e.y=t.top,this._viewport?(e.x+=this._viewport.x,e.y+=t.height-this._viewport.w-this._viewport.y,e.width=this._viewport.z,e.height=this._viewport.w):(e.width=t.width,e.height=t.height),e}_createOnRestPromise(e){return e?Promise.resolve():(this._hasRested=!1,this.dispatchEvent({type:"transitionstart"}),new Promise(t=>{const n=()=>{this.removeEventListener("rest",n),t()};this.addEventListener("rest",n)}))}_addAllEventListeners(e){}_removeAllEventListeners(){}get dampingFactor(){return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."),0}set dampingFactor(e){console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.")}get draggingDampingFactor(){return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."),0}set draggingDampingFactor(e){console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.")}static createBoundingSphere(e,t=new Ke.Sphere){const n=t,i=n.center;ys.makeEmpty(),e.traverseVisible(o=>{o.isMesh&&ys.expandByObject(o)}),ys.getCenter(i);let r=0;return e.traverseVisible(o=>{if(!o.isMesh)return;const a=o;if(!a.geometry)return;const l=a.geometry.clone();l.applyMatrix4(a.matrixWorld);const h=l.attributes.position;for(let u=0,d=h.count;u<d;u++)nt.fromBufferAttribute(h,u),r=Math.max(r,i.distanceToSquared(nt))}),n.radius=Math.sqrt(r),n}}const pu=new yt,mo=new R;class kd extends Km{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Tt(e,3)),this.setAttribute("uv",new Tt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ll(t,6,1);return this.setAttribute("instanceStart",new di(n,3,0)),this.setAttribute("instanceEnd",new di(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ll(t,6,1);return this.setAttribute("instanceColorStart",new di(n,3,0)),this.setAttribute("instanceColorEnd",new di(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new xm(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),pu.setFromBufferAttribute(t),this.boundingBox.union(pu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)mo.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(mo)),mo.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(mo));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}we.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};hn.line={uniforms:lc.merge([we.common,we.fog,we.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = perspective ? normalize( mix( start.xyz, end.xyz, 0.5 ) ) : vec3( 0.0, 0.0, - 1.0 );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;

				// only shift the depth of vertices in front of the camera (#35137)
				if ( clip.w > 0.0 ) clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				float len;

				if ( isOrthographic ) {

					// View rays are parallel to the z axis so the distance reduces to camera-space XY
					vec2 lineDir = worldEnd.xy - worldStart.xy;
					float t = clamp( dot( worldPos.xy - worldStart.xy, lineDir ) / dot( lineDir, lineDir ), 0.0, 1.0 );
					len = length( worldStart.xy + lineDir * t - worldPos.xy );

				} else {

					// Find the closest points on the view ray and the line segment
					vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
					vec3 lineDir = worldEnd - worldStart;
					vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

					vec3 p1 = worldStart + lineDir * params.x;
					vec3 p2 = rayEnd * params.y;
					vec3 delta = p1 - p2;
					len = length( delta );

				}

				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class mc extends Ui{constructor(e){super({type:"LineMaterial",uniforms:lc.clone(hn.line.uniforms),vertexShader:hn.line.vertexShader,fragmentShader:hn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Na=new pt,mu=new R,gu=new R,Xt=new pt,Yt=new pt,qn=new pt,Oa=new R,Ua=new Ue,qt=new cg,_u=new R,go=new yt,_o=new Sn,Kn=new pt;let $n,Ji;function xu(s,e,t){return Kn.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),Kn.multiplyScalar(1/Kn.w),Kn.x=Ji/t.width,Kn.y=Ji/t.height,Kn.applyMatrix4(s.projectionMatrixInverse),Kn.multiplyScalar(1/Kn.w),Math.abs(Math.max(Kn.x,Kn.y))}function ay(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){qt.start.fromBufferAttribute(i,a),qt.end.fromBufferAttribute(r,a),qt.applyMatrix4(t);const c=new R,h=new R;$n.distanceSqToSegment(qt.start,qt.end,h,c),h.distanceTo(c)<Ji*.5&&e.push({point:h,pointOnLine:c,distance:$n.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function ly(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-e.near;$n.at(1,qn),qn.w=1,qn.applyMatrix4(e.matrixWorldInverse),qn.applyMatrix4(n),qn.multiplyScalar(1/qn.w),qn.x*=r.x/2,qn.y*=r.y/2,qn.z=0,Oa.copy(qn),Ua.multiplyMatrices(e.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(Xt.fromBufferAttribute(l,d),Yt.fromBufferAttribute(c,d),Xt.w=1,Yt.w=1,Xt.applyMatrix4(Ua),Yt.applyMatrix4(Ua),Xt.z>u&&Yt.z>u)continue;if(Xt.z>u){const S=Xt.z-Yt.z,y=(Xt.z-u)/S;Xt.lerp(Yt,y)}else if(Yt.z>u){const S=Yt.z-Xt.z,y=(Yt.z-u)/S;Yt.lerp(Xt,y)}Xt.applyMatrix4(n),Yt.applyMatrix4(n),Xt.multiplyScalar(1/Xt.w),Yt.multiplyScalar(1/Yt.w),Xt.x*=r.x/2,Xt.y*=r.y/2,Yt.x*=r.x/2,Yt.y*=r.y/2,qt.start.copy(Xt),qt.start.z=0,qt.end.copy(Yt),qt.end.z=0;const _=qt.closestPointToPointParameter(Oa,!0);qt.at(_,_u);const m=Jl.lerp(Xt.z,Yt.z,_),p=m>=-1&&m<=1,v=Oa.distanceTo(_u)<Ji*.5;if(p&&v){qt.start.fromBufferAttribute(l,d),qt.end.fromBufferAttribute(c,d),qt.start.applyMatrix4(o),qt.end.applyMatrix4(o);const S=new R,y=new R;$n.distanceSqToSegment(qt.start,qt.end,y,S),t.push({point:y,pointOnLine:S,distance:$n.origin.distanceTo(y),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}class cy extends Jt{constructor(e=new kd,t=new mc({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)mu.fromBufferAttribute(t,o),gu.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+mu.distanceTo(gu);const r=new Ll(i,2,1);return e.setAttribute("instanceDistanceStart",new di(r,1,0)),e.setAttribute("instanceDistanceEnd",new di(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;if(i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;$n=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Ji=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),_o.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Ji*.5;else{const u=Math.max(i.near,_o.distanceToPoint($n.origin));c=xu(i,u,l.resolution)}if(_o.radius+=c,$n.intersectsSphere(_o)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),go.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Ji*.5;else{const u=Math.max(i.near,go.distanceToPoint($n.origin));h=xu(i,u,l.resolution)}go.expandByScalar(h),$n.intersectsBox(go)!==!1&&(n?ay(this,t):ly(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Na),this.material.uniforms.resolution.value.set(Na.z,Na.w))}}class Il extends kd{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}setFromPoints(e){const t=e.length-1,n=new Float32Array(6*t);for(let i=0;i<t;i++)n[6*i]=e[i].x,n[6*i+1]=e[i].y,n[6*i+2]=e[i].z||0,n[6*i+3]=e[i+1].x,n[6*i+4]=e[i+1].y,n[6*i+5]=e[i+1].z||0;return super.setPositions(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class hy extends cy{constructor(e=new Il,t=new mc({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function zd(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new It;l.morphTargetsRelative=a;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.attributes[g]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in u.morphAttributes){if(!i.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[g].length!==s[0].morphAttributes[g].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+g+'" morph attribute.'),null;o[g]===void 0&&(o[g]=[]),o[g].push(u.morphAttributes[g]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,g,h),c+=g}}if(t){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=vu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=vu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function vu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new dn(o,t,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function yu(s,e){if(e===Of)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===El||e===Ku){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===El)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function uy(s){const e=new Map,t=new Map,n=s.clone();return Hd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Hd(s.children[n],e.children[n],t)}class dy extends zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _y(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new Su(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Su(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Py(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=mr.extractUrlBase(e);o=mr.resolveURL(c,this.path)}else o=mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ed(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gd){try{o[rt.KHR_BINARY_GLTF]=new Dy(e)}catch(u){i&&i(u);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Xy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:o[u]=new my;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Iy(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[u]=new Ny;break;case rt.KHR_MESH_QUANTIZATION:o[u]=new Oy;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function fy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Dt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class py{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new He(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],vn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ym(h),c.distance=u;break;case"spot":c=new Wm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class my{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ii}extendParams(e,t,n){const i=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],vn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(i)}}class gy{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class _y{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(i)}}class xy{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class vy{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class yy{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class Sy{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],vn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Kt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class My{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class Ey{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(r[0],r[1],r[2],vn),Promise.all(i)}}class Ty{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class by{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(r[0],r[1],r[2],vn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Kt)),Promise.all(i)}}class wy{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class Ay{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class Ry{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Cy{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Ly{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Su{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Py{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Ue,m=new R,p=new zn,v=new R(1,1,1),S=new Zn(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,_.compose(m,p,v));let y=null;for(const M in l)if(M==="_COLOR_0"){const T=l[M];S.instanceColor=new Do(T.array,T.itemSize,T.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){const x=S.geometry;y=new It,y.name=x.name;for(const b in x.attributes)y.setAttribute(b,x.attributes[b]);for(const b in x.morphAttributes)y.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(const b of x.groups)y.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),S.geometry=y}const T=l[M];y.setAttribute(M,new Do(T.array,T.itemSize,T.normalized))}Rt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Gd="glTF",ir=12,Mu={JSON:1313821514,BIN:5130562};class Dy{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ir),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ir,r=new DataView(e,ir);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Mu.JSON){const c=new Uint8Array(e,ir+o,a);this.content=n.decode(c)}else if(l===Mu.BIN){const c=ir+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Iy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Nl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Nl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ws[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,vn,d)})})}}class Ny{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class Oy{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class Vd extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,v=1-m,S=p-d+u;for(let y=0;y!==a;y++){const M=o[_+y+a],T=o[_+y+l]*h,x=o[g+y+a],b=o[g+y]*h;r[y]=v*M+S*T+m*x+p*b}return r}}const Uy=new zn;class Fy extends Vd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Uy.fromArray(r).normalize().toArray(r),r}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eu={9728:Ft,9729:Zt,9984:Hu,9985:yo,9986:rr,9987:jn},Tu={33071:Qn,33648:wo,10497:Rs},Fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},By={CUBICSPLINE:void 0,LINEAR:yr,STEP:vr},Ba={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ky(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new cc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),s.DefaultMaterial}function Yi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zy(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Hy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gy(s){let e;const t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ka(t.attributes):e=s.indices+":"+ka(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ka(s.targets[n]);return e}function ka(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ol(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wy=new Ue;class Xy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new Hm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Zm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ed(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Yi(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(mr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Fa[i.type],a=ws[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new dn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Fa[i.type],c=ws[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(v);S||(_=new c(a,p*f,i.count*f/h),S=new rd(_,f/h),t.cache.add(v,S)),m=new di(S,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new dn(_,l,g);if(i.sparse!==void 0){const p=Fa.SCALAR,v=ws[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,M=new v(o[1],S,i.sparse.count*p),T=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new dn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=M.length;x<b;x++){const O=M[x];if(m.setX(O,T[x*l]),l>=2&&m.setY(O,T[x*l+1]),l>=3&&m.setZ(O,T[x*l+2]),l>=4&&m.setW(O,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Eu[d.magFilter]||Zt,h.minFilter=Eu[d.minFilter]||jn,h.wrapS=Tu[d.wrapS]||Rs,h.wrapT=Tu[d.wrapT]||Rs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ft&&h.minFilter!==Zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){const p=new Vt(m);p.needsUpdate=!0,f(p)}),t.load(mr.resolveURL(d,r.path),_,void 0,g)})})}const u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),Jn(d,o),d.userData.mimeType=o.mimeType||Vy(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ad,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Io,Bn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return cc}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const u=i[rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],vn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Kt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nn);const h=r.alphaMode||Ba.OPAQUE;if(h===Ba.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ba.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ii&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ii&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ii){const u=r.emissiveFactor;a.emissive=new He().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&o!==Ii&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Yi(i,u,r),u})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return bu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Gy(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=bu(new It,c,t),c.mode===bn.TRIANGLE_STRIP?d=d.then(f=>yu(f,Ku)):c.mode===bn.TRIANGLE_FAN&&(d=d.then(f=>yu(f,El))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?ky(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=c[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0){const S=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");S&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&y?new Dp(_,v):new Jt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===bn.LINES)p=new Tl(_,v);else if(m.mode===bn.LINE_STRIP)p=new nc(_,v);else if(m.mode===bn.LINE_LOOP)p=new Up(_,v);else if(m.mode===bn.POINTS)p=new Fp(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Jn(p,r),m.extensions&&Yi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Yi(i,u[0],r),u[0];const d=new nn;r.extensions&&Yi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(Jl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new uc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ue;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ec(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,y=d.length;S<y;S++){const M=d[S],T=f[S],x=g[S],b=_[S],O=m[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const C=n._createAnimationTracks(M,T,x,b,O);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}const v=new Nm(r,void 0,p);return Jn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Wy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new od:c.length>1?h=new nn:c.length===1?h=c[0]:h=new Rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Jn(h,r),r.extensions&&Yi(n,h,r),r.matrix!==void 0){const u=new Ue;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new nn;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&Yi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(uy(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Bn||d instanceof Vt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}wi[r.path]===wi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(wi[r.path]){case wi.weights:h=wr;break;case wi.rotation:h=Ar;break;case wi.translation:case wi.scale:h=Bo;break;default:switch(n.itemSize){case 1:h=wr;break;case 2:case 3:default:h=Bo;break}break}const u=i.interpolation!==void 0?By[i.interpolation]:yr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const _=new h(l[f]+"."+wi[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ol(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ar?Fy:Vd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yy(s,e,t){const n=e.attributes,i=new yt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),a.normalized){const h=Ol(ws[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new R,l=new R;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ol(ws[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Sn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function bu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Nl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Jn(s,e),Yy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zy(s,e.targets,t):s})}const qy={staal:5790043,inkt:2301728,kleding:3108506,muur:16448250,hout:13153420,doos:14207920},Ky={oplegger:16.5,bakwagen:10.05,koelbus:5.85},Zy=["koppelpen","koppelpunt","oplegger_scharnier"];function Jy(s){const e=s.index?s.toNonIndexed():s;for(const t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&e.deleteAttribute(t);return e.attributes.normal||e.computeVertexNormals(),e}function ut(s,e,t,n,i,r){return new sn(s,e,t).translate(n,i+e/2,r)}function Ul(s,e,t,n,i,r="y",o=8){const a=new Ho(s,s,e,o);return r==="z"&&a.rotateX(Math.PI/2),a.translate(t,r==="y"?n+e/2:n,i)}function yn(s,e=[]){const t=new Map;for(const[n,i]of s)t.has(n)||t.set(n,[]),t.get(n).push(Jy(i));return{delen:[...t].map(([n,i])=>({sleutel:n,geo:zd(i)})),plekken:e,glb:!1,ankers:{}}}function $y(){return yn([["staal",ut(1.3,1.1,1.1,-.4,0,0)],["inkt",ut(1.2,.15,.12,.65,0,-.45)],["inkt",ut(1.2,.15,.12,.65,0,.45)],["inkt",ut(.1,3.2,.1,.3,0,-.35)],["inkt",ut(.1,3.2,.1,.3,0,.35)],["inkt",ut(1.1,.06,.12,.9,.15,-.25)],["inkt",ut(1.1,.06,.12,.9,.15,.25)],["inkt",ut(1,.06,1,-.4,2.2,0)],["kleding",ut(.35,.7,.4,-.55,1.1,0)],["inkt",ut(.22,.22,.22,-.55,1.85,0)]])}function Qy(){return yn([["staal",ut(2.4,.3,.9,-.2,0,0)],["staal",ut(.5,1.2,.9,.85,.3,0)],["inkt",ut(1.1,.06,.12,-.95,.12,-.25)],["inkt",ut(1.1,.06,.12,-.95,.12,.25)],["inkt",ut(.08,.9,.9,-.4,.3,0)],["kleding",ut(.35,.75,.4,.3,.3,0)],["inkt",ut(.22,.22,.22,.3,1.05,0)]])}function jy(){return yn([["kleding",Ul(.22,1.45,0,0,0,"y",7)],["inkt",new oc(.13,0).translate(0,1.66,0)]])}function es(s,e=.5){return s.flatMap(t=>[["inkt",Ul(e,.35,t,e,-1.1,"z",8)],["inkt",Ul(e,.35,t,e,1.1,"z",8)]])}function Os(s,e){const t=e-s,n=(s+e)/2;return[["muur",ut(t,.1,2.55,n,1.1,0)],["muur",ut(t,2.8,.06,n,1.2,-1.25)],["muur",ut(t,2.8,.06,n,1.2,1.25)],["muur",ut(.06,2.8,2.55,e,1.2,0)],["inkt",ut(.06,2.6,2.4,s-.02,1.3,0)],["inkt",ut(t,.3,2.2,n,.8,0)]]}function Us(s,e,t){const n=[];for(let i=0;n.length<t;i++)for(const r of[-.8,0,.8])n.length<t&&n.push(new R(e-.7-i*1.2,1.2,r));return n.filter(i=>i.x>s+.5)}function Pr(s,e){return[["inkt",ut(e-s,2.6,2.5,(s+e)/2,.6,0)],["muur",ut(.04,.6,2.3,e+.02,2.3,0)]]}function eS(){return yn([...Os(-8.25,5.4),...Pr(5.75,8.25),...es([-7,-5.8,-4.6,6.9,4.4])],Us(-8.25,5.4,Ms))}function tS(){return yn([...Os(-12.6,1),...Os(2.2,10),...Pr(10.1,12.6),["inkt",ut(1.4,.2,.3,1.6,.9,0)],...es([-11.4,-10.2,-9,.5,3.4,7.2,11.5])],[...Us(2.2,10,Zd),...Us(-12.6,1,Ms)])}function nS(){return yn([...Os(-5,2.6),...Pr(2.75,5),...es([-3.6,-2.4,3.9])],Us(-5,2.6,18))}function iS(){return yn([...Os(-2.9,1),...Pr(1.1,2.9),["inkt",ut(.8,.5,1.6,-2.2,3.9,0)],...es([-2,1.9],.38)],Us(-2.9,1,3))}function sS(){const s=yn([...Os(-6.825,6.825),...es([-5.6,-4.4,-3.2])],Us(-6.825,6.825,Ms));return s.ankers.koppelpen=new R(5.275,1.1,0),s}function rS(){const s=yn([...Pr(.3,2.8),["staal",ut(3.15,.3,2,-1.275,.8,0)],...es([-1.8,1.6])]);return s.ankers.koppelpunt=new R(-1.6,1.1,0),s}function oS(){const s=yn([["staal",ut(5.5,.3,2.3,-.2,.7,0)],["inkt",ut(1.8,2,1.25,1.8,1,-.525)],...es([-1.6,1.6])]);return s.ankers.koppelpunt=new R(-1.5,1.1,0),s}function wu(s){return yn(s?[["hout",ut(1.2,.15,.8,0,0,0)],["staal",ut(1.2,1.9,.8,0,.15,0)]]:[["hout",ut(1.2,2.16,.8,0,0,0)]])}function aS(){const s=jy();return{reachtruck:$y(),orderverzameltruck:Qy(),medewerker:s,medewerker_lopen:s,oplegger:eS(),lzv:tS(),bakwagen:nS(),koelbus:iS(),stapel_pallets:wu(!1),stapel_kratten:wu(!0),trailer:sS(),trekker:rS(),terminaltrekker:oS()}}const lS=["staal","inkt","kleding","muur","hout","doos"];function Au(s){const e=s.toLowerCase();return lS.find(t=>e.startsWith(t))??"staal"}function gn(s,e){s.updateMatrixWorld(!0);const t=[],n=[],i={},r=a=>{if(e(a.name))return;Zy.includes(a.name)&&(i[a.name]=new R().setFromMatrixPosition(a.matrixWorld));const l=/^plek_(\d+)$/.exec(a.name);l&&n.push({n:Number(l[1]),p:new R().setFromMatrixPosition(a.matrixWorld)});const c=a;if(c.isMesh){const h=Array.isArray(c.material)?c.material:[c.material],u=c.geometry.clone().applyMatrix4(c.matrixWorld);if(h.length===1||u.groups.length===0)t.push([Au(h[0]?.name??""),u]);else for(const d of u.groups){const f=new It,g=u.index?u.toNonIndexed():u;for(const _ of["position","normal"]){const m=g.getAttribute(_);m&&f.setAttribute(_,new dn(m.array.slice(d.start*3,(d.start+d.count)*3),3))}t.push([Au(h[d.materialIndex??0]?.name??""),f])}}for(const h of a.children)r(h)};r(s),n.sort((a,l)=>(a.n>=34?a.n-1e3:a.n)-(l.n>=34?l.n-1e3:l.n));const o=yn(t,n.map(a=>a.p));return o.glb=!0,o.ankers=i,o}async function cS(s,e){const t=new dy,n=o=>o==="dak"||o.startsWith("dak_"),i=[],r=async(o,a)=>{try{const l=await t.loadAsync(`${s}${o}`);a(l.scene),i.push(o)}catch{}};return await Promise.all([r("reachtruck.glb",o=>e.reachtruck=gn(o,()=>!1)),r("orderverzameltruck.glb",o=>e.orderverzameltruck=gn(o,()=>!1)),r("medewerker.glb",o=>{e.medewerker=gn(o,a=>a==="lopen"),e.medewerker_lopen=gn(o,a=>a==="staan")}),r("oplegger.glb",o=>e.oplegger=gn(o,n)),r("lzv.glb",o=>e.lzv=gn(o,n)),r("bakwagen.glb",o=>e.bakwagen=gn(o,n)),r("koelbus.glb",o=>e.koelbus=gn(o,n)),r("stapel_pallets.glb",o=>e.stapel_pallets=gn(o,()=>!1)),r("stapel_kratten.glb",o=>e.stapel_kratten=gn(o,()=>!1)),r("trailer.glb",o=>e.trailer=gn(o,n)),r("trekker.glb",o=>e.trekker=gn(o,()=>!1)),r("terminaltrekker.glb",o=>e.terminaltrekker=gn(o,()=>!1))]),i}function xo(s){const e=[];for(const t of s){const n=e.length;if(!(n&&Math.abs(e[n-1][0]-t[0])<1e-6&&Math.abs(e[n-1][1]-t[1])<1e-6)){if(n>=2){const[i,r]=e[n-2],[o,a]=e[n-1];if(Math.abs((o-i)*(t[1]-a)-(a-r)*(t[0]-o))<1e-6){e[n-1]=t;continue}}e.push(t)}}return e}function hS(s,e){const t=e.graaf.breedte,n=S=>[S%t+.5,Math.floor(S/t)+.5],i=S=>(y,M)=>{if(y<0||M<0)return[];const T=S.pad(y,M);return T.length?Array.from(T,n):[n(y),n(M)]},r=i(e.graaf),o=i(e.rijnet.opslag),a=i(e.rijnet.pick),l=e.overdracht.inslag>=0?e.overdracht.inslag:e.basis.inslag,c=e.overdracht.wikkel>=0?e.overdracht.wikkel:e.basis.wikkel,h=s.rastermaat,u=[],d=S=>{const y=s.objecten.find(x=>x.id===S);if(!y)return[];const M=vo(y.x,y.y,s),T=[y.x+.5,y.y+.5];return[[T[0]+M.x*7/h,T[1]+M.y*7/h],T]};for(const S of e.plekken.inslagdocks){const y=[...d(S.id),...r(S.toegang,e.basis.inslag)];y.length>=2&&u.push({soort:"in",punten:xo(y),pijl:!1})}const f=new Map;for(const S of e.opslag)S.toegang<0||(f.has(S.stellingId)||f.set(S.stellingId,[]),f.get(S.stellingId).push(S));const[g,_]=n(Math.max(0,l)),m=new Map;for(const S of f.values()){let y=S[0],M=S[0],T=1/0,x=-1;for(const L of S){const[U,z]=n(L.toegang),D=Math.hypot(U-g,z-_);D<T&&(T=D,y=L),D>x&&(x=D,M=L)}const[b,O]=n(M.toegang);[...m.values()].some(L=>{const[U,z]=n(L.ver);return Math.abs(U-b)<=3&&Math.abs(z-O)<=3})||m.set(`${b}|${O}`,{na:y.toegang,ver:M.toegang})}for(const S of m.values()){const y=[...o(l,S.na),...o(S.na,S.ver)];y.length>=2&&u.push({soort:"in",punten:xo(y),pijl:!0})}let p=-1,v=-1;for(const S of e.pick){if(S.toegang<0)continue;const[y,M]=n(S.toegang),T=Math.hypot(y-g,M-_);T>v&&(v=T,p=S.toegang)}if(p>=0&&e.basis.uitslag>=0){const S=c>=0?[...a(p,c),...r(c,e.basis.uitslag)]:a(p,e.basis.uitslag);S.length>=2&&u.push({soort:"uit",punten:xo(S),pijl:!1})}for(const S of e.plekken.uitslagdocks){const y=d(S.id).reverse(),M=[...r(e.basis.uitslag,S.toegang),...y];M.length>=2&&u.push({soort:"uit",punten:xo(M),pijl:!0})}return u}const uS=[];_n.install({THREE:{Vector2:pe,Vector3:R,Vector4:pt,Quaternion:zn,Matrix4:Ue,Spherical:og,Box3:yt,Sphere:Sn,Raycaster:wd}});const ot={achtergrond:15592422,sokkel:14276302,asfalt:15001062,vloer:15987438,muur:16448250,staal:5790043,ligger:8421764,hout:13153420,doos:14207920,inkt:2301728,wit:16777215,controle:15131091,koel:15135225,ruimte:16053749,zone:15526627,amber:16098842,amberVloer:16642523},qi=1.2,Ru=1e-4;function Cu(s,e){const t=s.clone().sub(e),n=Math.max(1e-6,t.length()),i=Math.acos(Math.max(-1,Math.min(1,t.y/n))),r=i<.001?0:Math.atan2(t.x,t.z);return{r:n,pool:i,az:r}}const ft=.12,dS=.8,fS=.44,pS=.4,mS=.2,gS=.44,En=Jl.degToRad,Fl={uTerug:{value:0},uVloer:{value:new He(ot.vloer)}};function _S(s){s.uniforms.uTerug=Fl.uTerug,s.uniforms.uVloer=Fl.uVloer,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTerug; uniform vec3 uVloer;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, uVloer, uTerug);`)}function Ut(s,e=!1){const t=new yd({color:s,flatShading:!0});return e&&(t.onBeforeCompile=_S),t}function xS(s){const e=s.index?s.toNonIndexed():s;for(const t of Object.keys(e.attributes))t!=="position"&&t!=="normal"&&e.deleteAttribute(t);return e}class ui{constructor(){this.delen=new Map}doos(e,t,n,i,r,o,a,l=0){if(t<=0||n<=0||i<=0)return;const c=new sn(t,n,i).translate(0,n/2,0);l&&c.rotateY(l),this.voeg(e,c.translate(r,o,a))}voeg(e,t){this.delen.has(e)||this.delen.set(e,[]),this.delen.get(e).push(xS(t))}bouw(e,t=!0,n=!0){const i=[];for(const[r,o]of this.delen){if(!o.length)continue;const a=new Jt(zd(o),r);a.castShadow=t,a.receiveShadow=n,e.add(a),i.push(a)}return this.delen.clear(),i}}const Ki=new Ue().makeScale(0,0,0),Tn=new Ue,tn=new zn,Pn=new R,Dn=new R,Ai=new R(0,1,0);function vS(s){return s==="mens"?"medewerker":s==="wikkel"?null:s==="reachtruck"||s==="heftruck"||s==="smallegangtruck"||s==="stapelaar"?"reachtruck":"orderverzameltruck"}const Lu={[Zi.inslag]:"Medewerker inslag",[Zi.expeditie]:"Medewerker expeditie",[Zi.val]:"Medewerker VAL",[Zi.orderpick]:"Orderpicker",[Zi.reachtruck]:"Reachtruck"};class MS{constructor(e){this.scene=new Ep,this.w=1,this.h=1,this.raf=0,this.vorige=performance.now(),this.vuil=!0,this.weg=!1,this.tweens=[],this.lijnMaterialen=new Set,this.wereld=null,this.wereldGroep=new nn,this.g={x:0,y:0},this.r=1.2,this.GH=10,this.kavel={x0:0,z0:0,x1:100,z1:100},this.hal={x0:0,z0:0,x1:10,z1:10},this.snedeWanden=[],this.binnenWanden=[],this.snedeKap=[],this.poortenSnede=[],this.dak=null,this.dakMat=null,this.inrichting=new nn,this.kiesbaar=[],this.stromen=new nn,this.stroomMats=[],this.stromenAan=!1,this.stromenF=0,this.niveau="inrichting",this.niveauF={snede:qi,binnen:qi,dak:0,terug:0},this.palBasis=null,this.palLading=null,this.vloerBasis=null,this.vloerLading=null,this.slots=[],this.vakSlots=new Map,this.klasseKleur=[],this.kleurSleutel="",this.doosKleur=new He(ot.doos),this.stand=null,this.eersteStand=!0,this.modellen=aS(),this.modelGroep=new nn,this.inst=new Map,this.lastBasis=null,this.lastLading=null,this.wagenLading=null,this.knelGroep=new nn,this.knelZones=[],this.vakIndex=new Map,this.eVorig=new Float32Array(0),this.standpuntNu=null,this.laatste="overzicht",this.vrij=0,this.vrijNu=0,this.keuze=null,this.keuzeK=null,this.hoverK=null,this.ringF=1,this.frames=[],this.traagStap=0,this.laatsteCheck=0,this.ray=new wd,this.lus=i=>{if(this.weg)return;this.raf=requestAnimationFrame(this.lus);const r=Math.min(.1,Math.max(0,(i-this.vorige)/1e3));this.vorige=i;let o=!1;if(this.tweens.length){o=!0;for(const l of[...this.tweens])l.t=Math.min(l.duur,l.t+(l.nieuw?Math.min(r,1/60):r)),l.nieuw=!1,l.stap(Jd(l.t/l.duur)),l.t>=l.duur&&(this.tweens=this.tweens.filter(c=>c!==l),l.klaar?.())}if(!(this.cc.update(r)||o||this.vuil)){this.frames.length=0;return}this.vuil=!1,this.renderer.render(this.scene,this.camera),this.werkOverlayBij(),this.meet(i)},this.opt=e,this.host=e.host,this.minder=e.minder;const t=document.createElement("canvas");t.className="v3d-canvas",this.renderer=new iy({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cr,this.host.appendChild(t),t.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.weg||this.opt.meld({soort:"verloren"})}),this.overlay=document.createElement("div"),this.overlay.className="v3d-overlay",this.chip=document.createElement("div"),this.chip.className="chip3d",this.chip.setAttribute("aria-hidden","true"),this.overlay.appendChild(this.chip),this.host.appendChild(this.overlay),this.scene.background=new He(ot.achtergrond),this.scene.add(new Gm(16777215,14078146,1.55)),this.zon=new bd(16777215,2.3),this.zon.castShadow=!0,this.zon.shadow.mapSize.set(2048,2048),this.zon.shadow.radius=6,this.zon.shadow.bias=-8e-4,this.zon.shadow.normalBias=.12,this.scene.add(this.zon,this.zon.target),this.scene.add(this.wereldGroep,this.modelGroep,this.knelGroep),this.camera=new cn(30,1,.5,3e3),this.cc=new _n(this.camera,t),this.cc.minPolarAngle=0,this.cc.maxPolarAngle=En(80),this.cc.minDistance=8,this.cc.dollyToCursor=!0,this.cc.mouseButtons.left=_n.ACTION.ROTATE,this.cc.mouseButtons.right=_n.ACTION.TRUCK,this.cc.mouseButtons.middle=_n.ACTION.DOLLY,this.cc.mouseButtons.wheel=_n.ACTION.DOLLY,this.cc.touches.one=_n.ACTION.TOUCH_ROTATE,this.cc.touches.two=_n.ACTION.TOUCH_DOLLY_TRUCK,this.zetMinder(e.minder),this.cc.addEventListener("controlstart",()=>this.afwijken()),this.ring=this.maakRing(1),this.hover=this.maakRing(.4),this.scene.add(this.ring.groep,this.hover.groep),this.koppelInvoer(t);const n=new ResizeObserver(()=>this.maat());n.observe(this.host),this.ro=n,this.maat(),cS(e.modellen,this.modellen).then(i=>{this.weg||(this.bouwModellen(),this.vuil=!0,this.opt.meld({soort:"modellen",geladen:i}))}),this.bouwModellen(),this.raf=requestAnimationFrame(this.lus),window.__drie=this.testHaak()}zetWereld(e){const t=this.wereld;if(t&&t.ontwerp===e.ontwerp&&t.zones===e.zones&&t.layout===e.layout&&t.terrein===e.terrein)return;const n=!this.wereld;this.wereld=e,this.bouwWereld(),n&&this.zetCamera(this.standpuntPose("boven")),this.vuil=!0}ruimOp(e){e.traverse(t=>{const n=t;n.geometry&&n.geometry.dispose();const i=n.material;i&&(Array.isArray(i)?i:[i]).forEach(r=>r.dispose())}),e.clear()}bouwWereld(){const e=this.wereld;if(!e)return;this.ruimOp(this.wereldGroep),this.ruimOp(this.knelGroep);for(const N of this.knelZones)N.pin.remove();this.knelZones=[],this.lijnMaterialen.clear(),this.snedeWanden=[],this.binnenWanden=[],this.snedeKap=[],this.poortenSnede=[],this.kiesbaar=[],this.inrichting=new nn,this.stromen=new nn,this.stroomMats=[],this.palBasis=this.palLading=null,this.vloerBasis=this.vloerLading=null,this.eersteStand=!0;for(const N of[this.ring,this.hover])for(const P of[N.wit,N.inkt,N.geest])this.lijnMaterialen.add(P.material);const n=e.ontwerp.layout,i=e.terrein,r=n.rastermaat;this.r=r;const o=Math.max(1,Math.floor(n.breedte)),a=Math.max(1,Math.floor(n.diepte)),l=i?.gebouw??{x:0,y:0};this.g=l;const c=o*r,h=a*r,u=n.halhoogte??e.layout?.halhoogte??10;this.GH=u,this.hal={x0:l.x,z0:l.y,x1:l.x+c,z1:l.y+h},this.kavel=i?{x0:0,z0:0,x1:i.kavel.breedte,z1:i.kavel.diepte}:{x0:l.x-14,z0:l.y-14,x1:l.x+c+14,z1:l.y+h+14};const d=this.kavel,f=N=>l.x+N*r,g=N=>l.y+N*r,_=(d.x0+d.x1)/2,m=(d.z0+d.z1)/2,p=Math.max(d.x1-d.x0,d.z1-d.z0)*.75+10;this.zon.position.set(_-95,140,m-105),this.zon.target.position.set(_,0,m),Object.assign(this.zon.shadow.camera,{left:-p,right:p,top:p,bottom:-p,near:10,far:520}),this.zon.shadow.camera.updateProjectionMatrix();const v=Math.max(d.x1-d.x0,d.z1-d.z0);this.cc.setBoundary(new yt(new R(d.x0-2,-1,d.z0-2),new R(d.x1+2,40,d.z1+2))),this.cc.maxDistance=Math.max(1.6*v,this.standpuntPose("boven").afstand*1.05,this.standpuntPose("overzicht").afstand*1.1);const S={sokkel:Ut(ot.sokkel),asfalt:Ut(ot.asfalt),wit:Ut(ot.wit),vloer:Ut(ot.vloer),muur:Ut(ot.muur),staal:Ut(ot.staal),staalT:Ut(ot.staal,!0),ligger:Ut(ot.ligger,!0),inkt:Ut(ot.inkt),inktT:Ut(ot.inkt,!0),hout:Ut(ot.hout,!0),controle:Ut(ot.controle),koel:Ut(ot.koel),ruimte:Ut(ot.ruimte),zone:Ut(ot.zone)},y=new ui;y.doos(S.sokkel,d.x1-d.x0,1.6,d.z1-d.z0,_,-1.6,m);const M=N=>this.kiesbaar.push(N);if(i){for(const P of i.rijstroken)for(let Y=1;Y<P.punten.length;Y++){const j=P.punten[Y-1],fe=P.punten[Y],ae=Math.hypot(fe.x-j.x,fe.y-j.y);if(ae<.01)continue;const Re=-Math.atan2(fe.y-j.y,fe.x-j.x);y.doos(S.asfalt,ae+P.breedte,.04,P.breedte,(j.x+fe.x)/2,0,(j.y+fe.y)/2,Re);for(let xe=1.5;xe<ae-1.5;xe+=6){const he=(xe+1.5)/ae;y.doos(S.wit,3,.02,.15,j.x+(fe.x-j.x)*he,.04,j.y+(fe.y-j.y)*he,Re)}const De=Math.min(j.x,fe.x)-P.breedte/2,J=Math.max(j.x,fe.x)+P.breedte/2,oe=Math.min(j.y,fe.y)-P.breedte/2,ce=Math.max(j.y,fe.y)+P.breedte/2;M({sel:{soort:"rijstrook",id:P.id},niveau:"terrein",doos:new yt(new R(De,0,oe),new R(J,.3,ce)),ring:{rond:!1,x0:De,z0:oe,x1:J,z1:ce},naam:`Rijstrook ${P.id}`})}const N=(P,Y,j,fe,ae)=>{y.doos(S.asfalt,fe,.05,ae,Y+fe/2,0,j+ae/2),y.doos(P,.15,.02,ae,Y+.08,.05,j+ae/2),y.doos(P,.15,.02,ae,Y+fe-.08,.05,j+ae/2),y.doos(P,fe,.02,.15,Y+fe/2,.05,j+ae-.08)};for(const P of i.wachtplaatsen)N(S.wit,P.x,P.y,P.b,P.d),M({sel:{soort:"wachtplaats",id:P.id},niveau:"terrein",doos:new yt(new R(P.x,0,P.y),new R(P.x+P.b,.3,P.y+P.d)),ring:{rond:!1,x0:P.x,z0:P.y,x1:P.x+P.b,z1:P.y+P.d},naam:`Wachtplaats ${P.id}`});for(const P of i.trailerplaatsen??[])N(S.wit,P.x,P.y,P.b,P.d),M({sel:{soort:"trailerplaats",id:P.id},niveau:"terrein",doos:new yt(new R(P.x,0,P.y),new R(P.x+P.b,.3,P.y+P.d)),ring:{rond:!1,x0:P.x,z0:P.y,x1:P.x+P.b,z1:P.y+P.d},naam:`Trailerplaats ${P.id}`});for(const P of i.parkeren??[]){y.doos(S.asfalt,P.b,.05,P.d,P.x+P.b/2,0,P.y+P.d/2);const Y=P.vakbreedte??2.5,j=P.b>=P.d,fe=Math.floor((j?P.b:P.d)/Y);for(let ae=0;ae<=fe;ae++)j?y.doos(S.wit,.12,.02,Math.min(5,P.d/2),P.x+ae*Y,.05,P.y+Math.min(5,P.d/2)/2):y.doos(S.wit,Math.min(5,P.b/2),.02,.12,P.x+Math.min(5,P.b/2)/2,.05,P.y+ae*Y);M({sel:{soort:"parkeren",id:P.id},niveau:"terrein",doos:new yt(new R(P.x,0,P.y),new R(P.x+P.b,.3,P.y+P.d)),ring:{rond:!1,x0:P.x,z0:P.y,x1:P.x+P.b,z1:P.y+P.d},naam:`Parkeren ${P.id}`})}for(const P of i.toegangen){const Y=P.y<=.01||P.y>=i.kavel.diepte-.01,j=P.breedte/2;for(const J of[-1,1])y.doos(S.inkt,.3,1.2,.3,Y?P.x+J*j:P.x,0,Y?P.y:P.y+J*j);P.soort!=="uitrit"&&y.doos(S.inkt,Y?P.breedte:.12,.12,Y?.12:P.breedte,P.x,1,P.y);const fe=Y?P.x-j:P.x-1.5,ae=Y?P.x+j:P.x+1.5,Re=Y?P.y-1.5:P.y-j,De=Y?P.y+1.5:P.y+j;M({sel:{soort:"toegang",id:P.id},niveau:"terrein",doos:new yt(new R(fe,0,Re),new R(ae,2,De)),ring:{rond:!1,x0:fe,z0:Re,x1:ae,z1:De},naam:P.soort==="inrit"?`Inrit ${P.id}`:P.soort==="uitrit"?`Uitrit ${P.id}`:`In- en uitrit ${P.id}`})}for(const P of i.looproutes??[]){const Y=P.punten.map(j=>[j.x,.08,j.y]);Y.length>=2&&this.wereldGroep.add(this.lijn(Y,ot.staal,2,{streep:[.8,.6]}));for(let j=1;j<P.punten.length;j++){const fe=P.punten[j-1],ae=P.punten[j],Re=Math.min(fe.x,ae.x)-.75,De=Math.max(fe.x,ae.x)+.75,J=Math.min(fe.y,ae.y)-.75,oe=Math.max(fe.y,ae.y)+.75;M({sel:{soort:"looproute",id:P.id},niveau:"terrein",doos:new yt(new R(Re,0,J),new R(De,.3,oe)),ring:{rond:!1,x0:Re,z0:J,x1:De,z1:oe},naam:`Looproute ${P.id}`})}}M({sel:{soort:"gebouwpos",id:"gebouw"},niveau:"terrein",doos:new yt(new R(l.x,0,l.y),new R(l.x+c,u,l.y+h)),ring:{rond:!1,x0:l.x,z0:l.y,x1:l.x+c,z1:l.y+h},naam:"Gebouw"})}y.bouw(this.wereldGroep,!1,!0);const T=$d(n).map(N=>({x:f(N.x),y:g(N.y)})),x=new Uo(T.map(N=>new pe(N.x,N.y))),b=new Fo(x,{depth:ft,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,ft,0),O=new Jt(b,S.vloer);O.receiveShadow=!0,this.wereldGroep.add(O);let C=0;for(let N=0;N<T.length;N++){const P=T[N],Y=T[(N+1)%T.length];C+=P.x*Y.y-Y.x*P.y}const L=C>0?1:-1,U=.3,z=new ui,D=new ui,k=new ui,K=[];for(let N=0;N<T.length;N++){const P=T[N],Y=T[(N+1)%T.length],j=Math.hypot(Y.x-P.x,Y.y-P.y);if(j<.01)continue;const fe={x:(Y.x-P.x)/j,y:(Y.y-P.y)/j},ae={x:fe.y*L,y:-fe.x*L},Re=ae.y<-.5||ae.x<-.5;K.push({a:P,b:Y,n:ae,snede:Re});const De=(P.x+Y.x)/2+ae.x*U/2,J=(P.y+Y.y)/2+ae.y*U/2,oe=-Math.atan2(fe.y,fe.x);(Re?z:D).doos(S.muur,j+U,1,U,De,0,J,oe),Re&&k.doos(S.staal,j+U+.02,.05,U+.02,De,qi,J,oe)}const W=z.bouw(this.wereldGroep),le=D.bouw(this.wereldGroep);for(const N of le)N.scale.y=u;this.snedeWanden=W;const Z=k.bouw(this.wereldGroep,!1,!1);this.snedeKap=Z;for(const N of K){const P=Math.min(N.a.x,N.b.x)+Math.min(0,N.n.x*U)-.3,Y=Math.max(N.a.x,N.b.x)+Math.max(0,N.n.x*U)+.3,j=Math.min(N.a.y,N.b.y)+Math.min(0,N.n.y*U)-.3,fe=Math.max(N.a.y,N.b.y)+Math.max(0,N.n.y*U)+.3;M({sel:{soort:"muur",id:"muur"},niveau:"gebouw",doos:new yt(new R(P,0,j),new R(Y,u,fe)),ring:{rond:!1,x0:l.x,z0:l.y,x1:l.x+c,z1:l.y+h},naam:"Buitenmuur"})}this.dakMat=new yd({color:ot.muur,flatShading:!0,transparent:!0,opacity:0});const se=new Fo(x,{depth:.3,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,.3,0);this.dak=new Jt(se,this.dakMat),this.dak.position.y=u,this.dak.castShadow=!0,this.dak.visible=!1,this.wereldGroep.add(this.dak);const re=new ui,Pe=new ui,Be=new ui;for(const N of n.objecten){if(N.soort!=="dock")continue;const P=vo(N.x,N.y,n),Y=f(N.x+.5),j=g(N.y+.5),fe=Y+P.x*r/2,ae=j+P.y*r/2,Re=P.x!==0?Math.PI/2:0,De=P.y<-.5||P.x<-.5;De&&re.doos(S.vloer,3.2,.05,U+.06,fe+P.x*U/2,qi+.005,ae+P.y*U/2,Re),(De?Pe:Be).doos(S.staal,3,3.4,.06,fe+P.x*(U+.03),.2,ae+P.y*(U+.03),Re),Be.doos(S.inkt,3.4,1.15,.8,fe+P.x*(U+.45),0,ae+P.y*(U+.45),Re);const J=Math.min(Y-r/2,fe+P.x*1.3)-(P.x===0?1.1:0),oe=Math.max(Y+r/2,fe+P.x*1.3)+(P.x===0?1.1:0),ce=Math.min(j-r/2,ae+P.y*1.3)-(P.y===0?1.1:0),xe=Math.max(j+r/2,ae+P.y*1.3)+(P.y===0?1.1:0);M({sel:{soort:"object",id:N.id},niveau:"gebouw",doos:new yt(new R(J,0,ce),new R(oe,3.6,xe)),ring:{rond:!1,x0:J,z0:ce,x1:oe,z1:xe},naam:`${N.functie==="inslag"?"Inslagdock":"Uitslagdock"} ${N.id}`})}this.snedeKap.push(...re.bouw(this.wereldGroep,!1,!1)),this.poortenSnede=Pe.bouw(this.wereldGroep,!1,!1);const Q=new ui;for(const N of n.ruimtes??[]){const P=N.soort==="koelzone"?S.koel:N.soort==="kantoor"||N.soort==="kantine"?S.vloer:S.ruimte;if(Be.doos(P,N.b*r,.02,N.d*r,f(N.x+N.b/2),ft,g(N.y+N.d/2)),N.wanden==="dicht")for(const Re of Qd(N).wand)this.wandStuk(Q,S.muur,f(Re.x1),g(Re.y1),f(Re.x2),g(Re.y2));const Y=f(N.x),j=g(N.y),fe=f(N.x+N.b),ae=g(N.y+N.d);M({sel:{soort:"ruimte",id:N.id},niveau:"gebouw",doos:new yt(new R(Y,0,j),new R(fe,.4,ae)),ring:{rond:!1,x0:Y,z0:j,x1:fe,z1:ae},naam:`Ruimte ${N.id}`})}for(const N of n.wanden??[]){for(const De of jd(N).wand)this.wandStuk(Q,S.muur,f(De.x1),g(De.y1),f(De.x2),g(De.y2));const P={x:f(N.x),z:g(N.y)},Y=N.richting==="h"?{x:f(N.x+N.lengte),z:P.z}:{x:P.x,z:g(N.y+N.lengte)},j=Math.min(P.x,Y.x)-.4,fe=Math.max(P.x,Y.x)+.4,ae=Math.min(P.z,Y.z)-.4,Re=Math.max(P.z,Y.z)+.4;M({sel:{soort:"wand",id:N.id},niveau:"gebouw",doos:new yt(new R(j,0,ae),new R(fe,u,Re)),ring:{rond:!1,x0:j,z0:ae,x1:fe,z1:Re},naam:`Binnenwand ${N.id}`})}this.binnenWanden=Q.bouw(this.wereldGroep);for(const N of ef(n))Be.doos(S.staal,.4,u,.4,l.x+N.x,ft,l.y+N.y);for(const N of n.objecten){if(N.soort!=="blok")continue;Be.doos(S.staal,N.b*r,3,N.d*r,f(N.x+N.b/2),ft,g(N.y+N.d/2));const P=f(N.x),Y=g(N.y),j=f(N.x+N.b),fe=g(N.y+N.d);M({sel:{soort:"object",id:N.id},niveau:"gebouw",doos:new yt(new R(P,0,Y),new R(j,3.2,fe)),ring:{rond:!1,x0:P,z0:Y,x1:j,z1:fe},naam:`Blok ${N.id}`})}Be.bouw(this.wereldGroep);const ge=new ui;for(const N of e.zones){ge.doos(S.zone,N.b*r,.015,N.d*r,f(N.x+N.b/2),ft,g(N.y+N.d/2));const P=f(N.x),Y=g(N.y),j=f(N.x+N.b),fe=g(N.y+N.d);this.inrichting.add(this.lijn([[P,ft+.03,Y],[j,ft+.03,Y],[j,ft+.03,fe],[P,ft+.03,fe],[P,ft+.03,Y]],ot.ligger,2,{streep:[.9,.6]})),M({sel:{soort:"zone",id:N.id},niveau:"inrichting",doos:new yt(new R(P,0,Y),new R(j,.25,fe)),ring:{rond:!1,x0:P,z0:Y,x1:j,z1:fe},naam:N.naam})}for(const N of n.objecten){if(N.soort==="stelling"||N.soort==="dock"||N.soort==="blok")continue;const P=f(N.x),Y=g(N.y),j=f(N.x+N.b),fe=g(N.y+N.d),ae=(P+j)/2,Re=(Y+fe)/2;let De=.5,J=N.id;if(N.soort==="controle"||N.soort==="expeditie"||N.soort==="emballage"){ge.doos(N.soort==="emballage"?S.zone:S.controle,N.b*r,.03,N.d*r,ae,ft,Re);const oe=ft+.04;this.inrichting.add(this.lijn([[P,oe,Y],[j,oe,Y],[j,oe,fe],[P,oe,fe],[P,oe,Y]],ot.inkt,2));const ce=Ac(N,n,e.layout);if(ce.banen.length===0){const he=[],Ve=ft+.036;for(const Le of ce.plekken){const[je,Xe]=this.celNaarWereld(Le.x,Le.y),et=Le.richting==="v"?Vs.breed:Vs.lang,F=Le.richting==="v"?Vs.lang:Vs.breed;for(const[Mt,Je,mt,_e]of tf(je,Xe,et,F))he.push(Mt,Ve,Je,mt,Ve,_e)}if(he.length){const Le=new It;Le.setAttribute("position",new Tt(he,3)),this.inrichting.add(new Tl(Le,new Io({color:10987948})))}}const xe=N.soort==="expeditie"?Ac(N,n,e.layout).banen:[];if(xe.length>0){const he=ft+.035,Ve=[],Le=[];for(const Xe of xe){const et=f(Xe.x),F=f(Xe.x+Xe.b),Mt=g(Xe.y),Je=g(Xe.y+Xe.d);Ve.push(et,he,Mt,F,he,Mt,F,he,Mt,F,he,Je,F,he,Je,et,he,Je,et,he,Je,et,he,Mt);const[mt,_e,At,Ge]=nf(Xe);Le.push(f(mt),he+.002,g(_e),f(At),he+.002,g(Ge))}const je=(Xe,et)=>{const F=new It;return F.setAttribute("position",new Tt(Xe,3)),new Tl(F,new Io({color:et}))};this.inrichting.add(je(Ve,9672088),je(Le,ot.staal))}De=.3,J=N.soort==="controle"?`Zone ontvangst en controle ${N.id}`:N.soort==="emballage"?`Emballagezone ${N.id}`:`Expeditiezone ${N.id}`}else if(N.soort==="wikkelmachine")ge.voeg(S.staalT,new Ho(1.1,1.1,.25,14).translate(ae,ft+.125,Re)),ge.doos(S.inktT,.25,2.6,.25,ae+1.4,ft,Re),De=2.7,J=`Wikkelmachine ${N.id}`;else if(N.soort==="val"){const oe=Math.max(1,Math.min(4,N.mensen??2));for(let ce=0;ce<oe;ce++){const xe=P+(ce+.5)*(j-P)/oe;ge.doos(S.hout,Math.min(1.6,(j-P)/oe*.8),.06,.8,xe,ft+.84,Re),ge.doos(S.inktT,.08,.84,.7,xe,ft,Re)}ge.doos(S.zone,N.b*r,.02,N.d*r,ae,ft,Re),De=1.2,J=`VAL-werkplek ${N.id}`}M({sel:{soort:"object",id:N.id},niveau:"inrichting",doos:new yt(new R(P,0,Y),new R(j,De,fe)),ring:{rond:!1,x0:P,z0:Y,x1:j,z1:fe},naam:J})}if(ge.bouw(this.inrichting),this.bouwStellingen(n.objecten.filter(N=>N.soort==="stelling"),S.staalT,S.ligger,S.hout),this.wereldGroep.add(this.inrichting),e.layout){const N=hS(n,e.layout),P=ft+.1,Y=new ac(new Uo([new pe(.9,0),new pe(-.5,-.6),new pe(-.5,.6)])).rotateX(Math.PI/2),j=new Ii({color:ot.inkt,side:Nn,transparent:!0,opacity:0,depthWrite:!1});this.stroomMats.push({m:j,vol:1});for(const fe of N){const ae=fe.punten.map(([oe,ce])=>[f(oe),P,g(ce)]);if(ae.length<2)continue;const Re=fe.soort==="uit"?[1.6,1.1]:void 0,De=this.lijn(ae,ot.inkt,3,{streep:Re,dieptetest:!1,dekking:0,volgorde:9}),J=this.lijn(ae,ot.inkt,3,{streep:Re,dekking:0,volgorde:11});if(this.stromen.add(De,J),this.stroomMats.push({m:De.material,vol:.22},{m:J.material,vol:1}),fe.pijl){const[oe,,ce]=ae[ae.length-2],[xe,,he]=ae[ae.length-1],Ve=new Jt(Y,j);Ve.position.set(xe,P+.01,he),Ve.rotation.y=-Math.atan2(he-ce,xe-oe),Ve.renderOrder=11,this.stromen.add(Ve)}}this.stromen.visible=!1,this.wereldGroep.add(this.stromen)}this.bouwVloer(),this.bouwKnel(),this.pasNiveauToe(!0),this.pasStromenToe(),this.herzieKeuze()}wandStuk(e,t,n,i,r,o){const a=Math.hypot(r-n,o-i);a<.01||e.doos(t,a+.2,1,.2,(n+r)/2,ft,(i+o)/2,-Math.atan2(o-i,r-n))}bouwStellingen(e,t,n,i){const r=this.r,o=this.g,a=[],l=[];this.slots=[],this.vakSlots.clear();const c=Math.max(1,Math.floor(this.wereld.ontwerp.layout.breedte)),h=(v,S,y,M,T,x,b)=>new Ue().compose(Pn.set(v,S,y),tn.setFromAxisAngle(Ai,M),Dn.set(T,x,b));let u=20261112;const d=()=>(u=u*1103515245+12345&2147483647,u/2147483647);for(const v of e){const S=v.richting==="h",y=S?0:Math.PI/2,M=(L,U)=>S?[o.x+v.x*r+L,o.y+v.y*r+U]:[o.x+v.x*r+U,o.y+v.y*r+L],T=(v.niveaus-1)*v.vakhoogte+1.6;for(let L=0;L<=v.lengte;L+=2){const U=Math.min(L,v.lengte)*r;for(const z of[.08,r-.08]){const[D,k]=M(U,z);a.push(h(D,ft,k,y,.09,T,.09))}}if(v.lengte%2===1)for(const L of[.08,r-.08]){const[U,z]=M(v.lengte*r,L);a.push(h(U,ft,z,y,.09,T,.09))}for(let L=0;L<v.lengte;L+=2){const U=Math.min(2,v.lengte-L)*r;for(let z=1;z<v.niveaus;z++){const D=ft+z*v.vakhoogte-.12;for(const k of[.08,r-.08]){const[K,W]=M(L*r+U/2,k);l.push(h(K,D,W,y,U,.12,.06))}}}for(let L=0;L<v.lengte;L++){const[U,z]=M((L+.5)*r,r/2),D=S?v.x+L:v.x,k=S?v.y:v.y+L,K=[];let W=-1;for(let le=0;le<v.niveaus;le++){const Z=this.slots.length;this.slots.push({x:U,y:ft+le*v.vakhoogte,z,ry:y,h:[1,1.2,1.4][Math.floor(d()*3)]}),le===0&&v.pickniveau?W=Z:K.push(Z)}this.vakSlots.set(k*c+D,{opslag:K,pick:W})}const x=o.x+v.x*r,b=o.y+v.y*r,O=x+(S?v.lengte*r:r),C=b+(S?r:v.lengte*r);this.kiesbaar.push({sel:{soort:"object",id:v.id},niveau:"inrichting",doos:new yt(new R(x,0,b),new R(O,T,C)),ring:{rond:!1,x0:x,z0:b,x1:O,z1:C},naam:`Stelling ${v.id}`})}const f=(v,S,y)=>{if(!y.length)return null;const M=new Zn(v,S,y.length);return y.forEach((T,x)=>M.setMatrixAt(x,T)),M.castShadow=!0,M.receiveShadow=!0,this.inrichting.add(M),M};if(f(new sn(1,1,1).translate(0,.5,0),t,a),f(new sn(1,1,1).translate(0,.5,0),n,l),!this.slots.length)return;const g=this.slots.length;this.palBasis=new Zn(new sn(1,.15,1.1).translate(0,.075,0),i,g);const _=Ut(ot.wit,!0);this.palLading=new Zn(new sn(.94,1,1.04).translate(0,.5,0),_,g);const m=new He(ot.doos),p=new He;for(let v=0;v<g;v++)p.copy(m).offsetHSL(0,0,(d()-.5)*.04),this.palLading.setColorAt(v,p);for(const v of[this.palBasis,this.palLading])v.frustumCulled=!1,v.castShadow=!0,v.receiveShadow=!0,this.inrichting.add(v);for(let v=0;v<g;v++)this.zetSlot(v,d()<.7?1:0);this.palBasis.instanceMatrix.needsUpdate=!0,this.palLading.instanceMatrix.needsUpdate=!0}zetSlot(e,t){if(!this.palBasis||!this.palLading)return;const n=this.slots[e];if(t<=0){this.palBasis.setMatrixAt(e,Ki),this.palLading.setMatrixAt(e,Ki);return}tn.setFromAxisAngle(Ai,n.ry),this.palBasis.setMatrixAt(e,Tn.compose(Pn.set(n.x,n.y,n.z),tn,Dn.set(1,1,1))),this.palLading.setMatrixAt(e,Tn.compose(Pn.set(n.x,n.y+.15,n.z),tn,Dn.set(1,Math.max(.08,n.h*Math.min(1,t)),1)))}lijn(e,t,n,i={}){const r=new Il;r.setPositions(e.flat());const o=new mc({color:t,linewidth:n,transparent:!0,opacity:i.dekking??1,depthTest:i.dieptetest??!0,depthWrite:!1,dashed:!!i.streep,dashSize:i.streep?.[0]??1,gapSize:i.streep?.[1]??1});o.resolution.set(this.w,this.h),this.lijnMaterialen.add(o);const a=new hy(r,o);return a.computeLineDistances(),a.renderOrder=i.volgorde??10,a}maakRing(e){const t=new nn,n=[[0,0,0],[1,0,0]],i=this.lijn(n,ot.wit,7,{dekking:e,volgorde:13}),r=this.lijn(n,ot.inkt,3,{dekking:e,volgorde:14}),o=this.lijn(n,ot.inkt,3,{dekking:e*.6,dieptetest:!1,volgorde:12});return t.add(i,r,o),t.visible=!1,t.userData.dekking=e,{groep:t,wit:i,inkt:r,geest:o}}ringVorm(e,t){const n=[];if(t.rond){for(let r=0;r<=64;r++)n.push([t.r*Math.cos(r/64*Math.PI*2),.2,t.r*Math.sin(r/64*Math.PI*2)]);e.groep.position.set(t.x,0,t.z)}else{const o=(t.x1-t.x0)/2+.4,a=(t.z1-t.z0)/2+.4,l=Math.min(.5,o,a),c=[[o-l,a-l,0],[-o+l,a-l,Math.PI/2],[-o+l,-a+l,Math.PI],[o-l,-a+l,Math.PI*3/2]];for(const[h,u,d]of c)for(let f=0;f<=6;f++){const g=d+f/6*(Math.PI/2);n.push([h+l*Math.cos(g),.2,u+l*Math.sin(g)])}n.push(n[0]),e.groep.position.set((t.x0+t.x1)/2,0,(t.z0+t.z1)/2)}for(const r of[e.wit,e.inkt,e.geest]){r.geometry.dispose();const o=new Il;o.setPositions(n.flat()),r.geometry=o,r.computeLineDistances()}}zetRingDekking(e,t){const n=e.groep.userData.dekking*t;e.wit.material.opacity=n,e.inkt.material.opacity=n,e.geest.material.opacity=n*.6}zetNiveau(e){e!==this.niveau&&(this.niveau=e,this.hoverK&&this.zetHover(null),this.pasNiveauToe(!1))}niveauDoel(){const e=this.GH,t=this.opt.modus==="sim"?"inrichting":this.niveau;return t==="inrichting"?{snede:qi,binnen:qi,dak:0,terug:0}:t==="gebouw"?{snede:e,binnen:e,dak:0,terug:.45}:{snede:e,binnen:e,dak:1,terug:.45}}pasNiveauToe(e){const t={...this.niveauF},n=this.niveauDoel();this.tween("niveau",e?0:fS,i=>{const r=this.niveauF;r.snede=t.snede+(n.snede-t.snede)*i,r.binnen=t.binnen+(n.binnen-t.binnen)*i,r.dak=t.dak+(n.dak-t.dak)*i,r.terug=t.terug+(n.terug-t.terug)*i;for(const o of this.snedeWanden)o.scale.y=r.snede;for(const o of this.binnenWanden)o.scale.y=r.binnen;for(const o of this.snedeKap)o.visible=r.snede<qi+.1;for(const o of this.poortenSnede)o.visible=r.snede>3.6;this.dak&&this.dakMat&&(this.dakMat.opacity=r.dak,this.dak.visible=r.dak>.01,this.dakMat.transparent=r.dak<.99),this.inrichting.visible=r.dak<.99,this.stromen.visible=this.stromenF>.001&&r.dak<.5,this.werkTerugBij()})}werkTerugBij(){Fl.uTerug.value=Math.max(this.niveauF.terug,.45*this.stromenF)}zetStromen(e){e!==this.stromenAan&&(this.stromenAan=e,this.pasStromenToe())}pasStromenToe(){const e=this.stromenF,t=this.stromenAan?1:0;this.stromen.visible=!0,this.tween("stromen",e===t?0:pS,n=>{this.stromenF=e+(t-e)*n;for(const i of this.stroomMats)i.m.opacity=i.vol*this.stromenF;this.stromen.visible=this.stromenF>.001&&this.niveauF.dak<.5,this.werkTerugBij()})}zetKeuze(e){((n,i)=>!n&&!i||!!n&&!!i&&n.soort===i.soort&&n.id===i.id)(e,this.keuze)||(this.keuze=e,this.herzieKeuze(!0))}herzieKeuze(e=!1){const t=this.keuze;if(this.keuzeK=null,!t){this.ring.groep.visible=!1,this.chip.classList.remove("aan"),this.vuil=!0;return}if(t.soort==="eenheid")this.ringVorm(this.ring,{rond:!0,x:0,z:0,r:1.8}),this.chip.textContent=this.eenheidNaam(Number(t.id));else{const n=this.kiesbaar.find(i=>i.sel.soort===t.soort&&i.sel.id===t.id)??null;if(this.keuzeK=n,!n){this.ring.groep.visible=!1,this.chip.classList.remove("aan"),this.vuil=!0;return}this.ringVorm(this.ring,n.ring),this.chip.textContent=n.naam}this.ring.groep.visible=!0,this.chip.classList.add("aan"),e?this.tween("ring",mS,n=>{this.ringF=n,this.zetRingDekking(this.ring,n);const i=.92+.08*n;this.ring.groep.scale.set(i,1,i),this.chip.style.opacity=String(n)}):(this.zetRingDekking(this.ring,1),this.ring.groep.scale.set(1,1,1),this.chip.style.opacity="1"),this.vuil=!0}zetHover(e){if(e===this.hoverK)return;this.hoverK=e;const t=e&&this.keuzeK===e;!e||t?this.hover.groep.visible=!1:(this.ringVorm(this.hover,e.ring),this.zetRingDekking(this.hover,1),this.hover.groep.visible=!0),this.renderer.domElement.style.cursor=e?"pointer":"",this.vuil=!0}eenheidNaam(e){const t=this.stand;if(!t||!t.eenheden[e])return"";const n=t.eenheden[e],i=n.symbool;return`${i!=="mens"&&i!=="wikkel"?sf[i]??Lu[n.bron]??"Middel":i==="wikkel"?"Wikkelmachine":Lu[n.bron]??"Medewerker"} ${n.nummer+1}`}standpuntPose(e){const t=this.kavel,n=this.w/Math.max(1,this.h),i=this.h/Math.max(1,this.h-this.vrij),r=this.wereld?.ontwerp.layout,o=this.r,a=this.g,l=(d,f,g,_,m)=>({pos:new R(d.x+_*Math.cos(g)*Math.sin(f),d.y+_*Math.sin(g),d.z+_*Math.cos(g)*Math.cos(f)),doel:d,fov:m,afstand:_});if(e==="boven"){const d=this.opt.modus==="sim"||this.niveau==="terrein",f=this.hal,g=d&&this.wereld?.terrein?{x0:-3,z0:-3,x1:t.x1+3,z1:t.z1+3}:{x0:f.x0-8*o,z0:f.z0-8*o,x1:f.x1+8*o,z1:f.z1+8*o},_=20,m=Math.tan(En(_/2)),p=Math.max((g.z1-g.z0)/2/m,(g.x1-g.x0)/2/(m*n))*1.02*i,v=new R((g.x0+g.x1)/2,0,(g.z0+g.z1)/2);return{pos:new R(v.x,p*Math.cos(Ru),v.z+p*Math.sin(Ru)),doel:v,fov:_,afstand:p}}if(e==="docks"&&r){const d=r.objecten.filter(f=>f.soort==="dock");if(d.length){const f=vo(d[0].x,d[0].y,r),g=d.filter(S=>{const y=vo(S.x,S.y,r);return y.x===f.x&&y.y===f.y}),_={x:a.x+(g.reduce((S,y)=>S+y.x,0)/g.length+.5)*o,y:a.y+(g.reduce((S,y)=>S+y.y,0)/g.length+.5)*o},m={x:f.y,y:-f.x},p=new R(_.x-8*f.x+6*m.x,0,_.y-8*f.y+6*m.y),v=new R(p.x+34*f.x+36*m.x,38*i,p.z+34*f.y+36*m.y);return{pos:v,doel:p,fov:48,afstand:v.distanceTo(p)}}}if(e==="opslag"&&r){const d=r.objecten.filter(f=>f.soort==="stelling");if(d.length){const f=d.filter(M=>M.richting==="h").length>=d.length/2,g=d.filter(M=>M.richting==="h"===f),_=[...new Set(g.map(M=>f?M.y:M.x))].sort((M,T)=>M-T),m=[];for(let M=0;M+1<_.length;M++)_[M+1]-_[M]>1&&m.push((_[M]+1+_[M+1])/2);const p=m.length?m[Math.floor((m.length-1)/2)]:(_[0]+_[_.length-1]+1)/2,v=Math.min(...g.map(M=>f?M.x:M.y)),S=12/Math.tan(En(30));if(f){const M=new R(a.x+(v-3)*o,12,a.y+p*o);return{pos:M,doel:new R(M.x+S,0,M.z),fov:50,afstand:Math.hypot(S,12)}}const y=new R(a.x+p*o,12,a.y+(v-3)*o);return{pos:y,doel:new R(y.x,0,y.z+S),fov:50,afstand:Math.hypot(S,12)}}}const c=new R((t.x0+t.x1)/2,0,(t.z0+t.z1)/2),u=.5*Math.hypot(t.x1-t.x0,t.z1-t.z0)/Math.tan(En(15))*.75*Math.max(1,1.5/n)*i;return l(c,En(-148),En(35),u,30)}zetCamera(e){this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.cc.setLookAt(e.pos.x,e.pos.y,e.pos.z,e.doel.x,e.doel.y,e.doel.z,!1),this.vuil=!0}kies(e,t=!1){return new Promise(n=>{const i=this.standpuntPose(e),r=new R,o=new R;this.cc.getPosition(r,!1),this.cc.getTarget(o,!1);const a=this.camera.fov;this.cc.stop(),this.standpuntNu=e,this.laatste=e,this.opt.meld({soort:"standpunt",nu:e,laatste:e});const l=Cu(r,o),c=Cu(i.pos,i.doel),h=((c.az-l.az)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI,u=new R,d=new R;this.tween("camera",t||this.minder?0:dS,f=>{d.lerpVectors(o,i.doel,f);const g=l.az+h*f,_=l.pool+(c.pool-l.pool)*f,m=Math.exp(Math.log(l.r)+(Math.log(c.r)-Math.log(l.r))*f);u.set(d.x+m*Math.sin(_)*Math.sin(g),d.y+m*Math.cos(_),d.z+m*Math.sin(_)*Math.cos(g)),this.zetCamera({pos:u,doel:d,fov:a+(i.fov-a)*f})},n)})}terug(){return this.kies(this.laatste)}naarBoven(){const e=this.laatste;return this.kies("boven").then(()=>{this.laatste=e})}afwijken(){this.stopTween("camera"),this.standpuntNu!==null&&(this.standpuntNu=null,this.opt.meld({soort:"standpunt",nu:null,laatste:this.laatste}))}zetVrij(e){if(e===this.vrij)return;const t=this.vrijNu;this.vrij=e,this.tween("vrij",this.minder?0:gS,n=>{this.vrijNu=t+(e-t)*n,this.pasViewOffset()})}pasViewOffset(){this.vrijNu>.5?this.camera.setViewOffset(this.w,this.h,0,this.vrijNu/2,this.w,this.h):this.camera.clearViewOffset(),this.vuil=!0}zetKleuren(e){const t=e.join(",");t!==this.kleurSleutel&&(this.kleurSleutel=t,this.klasseKleur=e.map(n=>new He(n)),this.stand&&(this.eersteStand=!0,this.tekenStand()))}zetMinder(e){this.minder=e,this.cc.smoothTime=e?0:.25,this.cc.draggingSmoothTime=e?0:.125}toets(e){const t={1:"overzicht",2:"docks",3:"opslag",4:"boven"},n=En(15),i=!this.minder;if(t[e.key])return this.kies(t[e.key]),!0;if(e.key==="0")return this.terug(),!0;if(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="ArrowUp"||e.key==="ArrowDown"){this.afwijken();const r=e.key==="ArrowLeft"?n:e.key==="ArrowRight"?-n:0,o=e.key==="ArrowUp"?-n:e.key==="ArrowDown"?n:0;return this.cc.rotate(r,o,i),!0}if(e.key==="+"||e.key==="="||e.key==="-"||e.key==="_"){this.afwijken();const r=this.cc.distance;return this.cc.dollyTo(Math.max(this.cc.minDistance,Math.min(this.cc.maxDistance,r*(e.key==="+"||e.key==="="?.8:1.25))),i),!0}return e.key==="Escape"&&this.keuze?(this.kiesUit(null),!0):e.key==="Enter"&&this.keuze&&this.opt.modus==="edit"?(this.opt.meld({soort:"bewerk",keuze:this.keuze}),!0):!1}koppelInvoer(e){let t=null;e.addEventListener("pointerdown",i=>{t={x:i.clientX,y:i.clientY,t:performance.now()},this.cc.mouseButtons.left=i.shiftKey?_n.ACTION.TRUCK:_n.ACTION.ROTATE,this.zetHover(null)},{capture:!0}),e.addEventListener("pointerup",i=>{const r=t;t=null,!(!r||i.button!==0)&&(Math.hypot(i.clientX-r.x,i.clientY-r.y)>5||performance.now()-r.t>600||this.kiesUit(this.prik(i.clientX,i.clientY)))}),e.addEventListener("dblclick",i=>{const r=this.prik(i.clientX,i.clientY);r&&this.opt.modus==="edit"&&this.opt.meld({soort:"bewerk",keuze:r})});let n=0;e.addEventListener("pointermove",i=>{i.buttons||i.pointerType==="touch"||(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{const r=this.prik(i.clientX,i.clientY,!0);this.zetHover(r&&r.soort!=="eenheid"?this.kiesbaar.find(o=>o.sel.soort===r.soort&&o.sel.id===r.id)??null:null),r&&r.soort==="eenheid"&&(this.renderer.domElement.style.cursor="pointer")}))}),e.addEventListener("pointerleave",()=>this.zetHover(null)),e.addEventListener("wheel",i=>{if(this.afwijken(),i.ctrlKey||!(i.deltaMode===0&&(Math.abs(i.deltaX)>.5||Math.abs(i.deltaY)<40&&!Number.isInteger(i.deltaY))))return;i.preventDefault(),i.stopImmediatePropagation();const o=this.cc.distance*.0016;this.cc.truck(i.deltaX*o,i.deltaY*o,!this.minder)},{capture:!0,passive:!1})}kiesUit(e){this.zetKeuze(e),this.opt.meld({soort:"kies",keuze:e})}prik(e,t,n=!1){const i=this.renderer.domElement.getBoundingClientRect(),r=e-i.left,o=t-i.top,a=this.stand;if(a&&this.opt.modus==="sim"){let d=-1,f=24;const g=new R;for(let _=0;_<a.eenheden.length;_++){if(!a.ezicht[_]||a.ekort[_])continue;const[m,p]=this.celNaarWereld(a.ex[_],a.ey[_]);if(g.set(m,1.1,p).project(this.camera),g.z>1)continue;const v=Math.hypot((g.x+1)/2*this.w-r,(1-g.y)/2*this.h-o);v<f&&(f=v,d=_)}if(d>=0)return{soort:"eenheid",id:String(d)}}this.ray.setFromCamera(new pe(r/this.w*2-1,-(o/this.h)*2+1),this.camera);const l=this.opt.modus==="sim"?null:this.niveau;let c=null,h=1/0;const u=new R;for(const d of this.kiesbaar){if((l?d.niveau!==l:d.niveau==="terrein"||d.sel.soort!=="object"&&d.sel.soort!=="zone")||!this.ray.ray.intersectBox(d.doos,u))continue;const f=u.distanceTo(this.ray.ray.origin),g=d.doos.max.y<.5?.6:0;f+g<h&&(h=f+g,c=d)}return c?c.sel:null}celNaarWereld(e,t){return[this.g.x+e*this.r,this.g.y+t*this.r]}bouwModellen(){this.ruimOp(this.modelGroep),this.inst.clear();const e=new Map,t=c=>(e.has(c)||e.set(c,Ut(qy[c])),e.get(c)),n=this.stand?.layout.vloer.emballage?.plekken.length??0,i=64,r={reachtruck:40,orderverzameltruck:60,medewerker:80,medewerker_lopen:80,oplegger:24,lzv:24,bakwagen:24,koelbus:24,stapel_pallets:n+120,stapel_kratten:n+120,trailer:i,trekker:24,terminaltrekker:24};for(const c of Object.keys(this.modellen)){const h=this.modellen[c],u=h.delen.map(d=>{const f=new Zn(d.geo,t(d.sleutel),r[c]);return f.count=0,f.castShadow=!0,f.frustumCulled=!1,this.modelGroep.add(f),f});this.inst.set(c,{delen:u,plekken:h.plekken,n:0})}const o=new Zn(new sn(1,.15,1.1).translate(0,.075,0),t("hout"),200),a=new Zn(new sn(.94,1,1.04).translate(0,.5,0),Ut(ot.wit),200),l=new Zn(new sn(1.1,1.3,.74).translate(0,.65,0),t("doos"),1224+i*Ms);for(const c of[o,a,l])c.count=0,c.castShadow=!0,c.frustumCulled=!1,this.modelGroep.add(c);this.lastBasis=o,this.lastLading=a,this.wagenLading=l,this.eersteStand=!0,this.stand&&this.tekenStand()}bouwVloer(){const e=this.stand;if(!e||e.vloerPlekken.length===0)return;const t=e.vloerPlekken.length,{breed:n,lang:i}=Vs;this.vloerBasis=new Zn(new sn(n,.15,i).translate(0,.075,0),Ut(ot.hout),t),this.vloerLading=new Zn(new sn(n-.04,1,i-.04).translate(0,.5,0),Ut(ot.wit),t);for(let r=0;r<t;r++)this.vloerBasis.setMatrixAt(r,Ki),this.vloerLading.setMatrixAt(r,Ki),this.vloerLading.setColorAt(r,this.doosKleur);for(const r of[this.vloerBasis,this.vloerLading])r.frustumCulled=!1,r.castShadow=!0,r.receiveShadow=!0,this.inrichting.add(r)}zetVloerplek(e,t,n){if(!this.vloerBasis||!this.vloerLading)return;const i=e.vloerK[t];if(i===rf){this.vloerBasis.setMatrixAt(t,Ki),this.vloerLading.setMatrixAt(t,Ki);return}const r=e.vloerPlekken[t],[o,a]=this.celNaarWereld(r.x,r.y);tn.setFromAxisAngle(Ai,r.richting==="h"?Math.PI/2:0),this.vloerBasis.setMatrixAt(t,Tn.compose(Pn.set(o,ft,a),tn,Dn.set(1,1,1)));const l=i===Rc?.9:1.2;this.vloerLading.setMatrixAt(t,Tn.compose(Pn.set(o,ft+.15,a),tn,Dn.set(1,l,1))),this.vloerLading.setColorAt(t,i===Rc?n.set(10922155):i===of?this.doosKleur:this.klasseKleur[i]??this.doosKleur)}bouwKnel(){const e=this.stand;if(!e)return;const t=this.r;for(const n of e.zones){const i=this.g.x+n.zone.x*t,r=this.g.y+n.zone.y*t,o=i+n.zone.b*t,a=r+n.zone.d*t,l=n.sleutel==="wagens"?.07:ft+.02,c=new nn,h=new Jt(new Cr(o-i,a-r).rotateX(-Math.PI/2),new Ii({color:ot.amberVloer,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.position.set((i+o)/2,l,(r+a)/2),h.renderOrder=2,c.add(h),c.add(this.lijn([[i,l+.02,r],[o,l+.02,r],[o,l+.02,a],[i,l+.02,a],[i,l+.02,r]],ot.amber,3,{volgorde:12})),c.visible=!1,this.knelGroep.add(c);const u=document.createElement("div");u.className="pin3d",u.innerHTML='<svg viewBox="0 0 18 16" aria-hidden="true"><path d="M9 1.2L17 15H1z" fill="#F5A61A" stroke="#231F20" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 5.6v4.6" stroke="#231F20" stroke-width="1.8" stroke-linecap="round"/><circle cx="9" cy="12.6" r="1.05" fill="#231F20"/></svg><span></span>',this.overlay.appendChild(u),this.knelZones.push({z:n,obj:c,pin:u,tekst:u.querySelector("span"),anker:new R((i+o)/2,n.sleutel==="wagens"?4.5:2.2,(r+a)/2),aan:!1,nu:""})}}zetStand(e){if(e!==this.stand){if(this.stand=e,this.eersteStand=!0,this.vakIndex.clear(),e){const t=e.B;e.vakken.forEach((n,i)=>this.vakIndex.set(n.y*t+n.x,i)),this.eVorig=new Float32Array(e.eenheden.length*2).fill(NaN)}this.bouwWereld(),e&&this.tekenStand()}}tekenStand(){const e=this.stand;if(!e)return;if(e.rustAfstand!==2&&(e.rustAfstand=2),e.zetRustMijden(uS),this.palBasis&&this.palLading){const _=m=>{const p=e.vakken[m],v=this.vakSlots.get(p.y*e.B+p.x);if(!v)return;const S=Math.min(v.opslag.length,e.vakBezet[m]);let y=0,M=e.K>0?e.vakKlasse[m*e.K]:0;if(v.opslag.forEach((T,x)=>{if(this.zetSlot(T,x<S?1:0),!(x>=S||!this.palLading)){for(;y<e.K&&x>=M;)y++,y<e.K&&(M+=e.vakKlasse[m*e.K+y]);this.palLading.setColorAt(T,y<e.K?this.klasseKleur[y]??this.doosKleur:this.doosKleur)}}),v.pick>=0){this.zetSlot(v.pick,p.pick>=0?Math.max(.06,e.colliFractie(p.pick)):0);const T=p.pick>=0?e.pickKlasse[p.pick]:-1;this.palLading?.setColorAt(v.pick,T>=0?this.klasseKleur[T]??this.doosKleur:this.doosKleur)}};if(this.eersteStand||e.alleVakkenVeranderd){for(let m=0;m<this.slots.length;m++)this.zetSlot(m,0);for(let m=0;m<e.vakken.length;m++)_(m)}else{for(const m of e.vakVeranderd)_(m);for(const m of e.pickVeranderd)_(m)}this.palBasis.instanceMatrix.needsUpdate=!0,this.palLading.instanceMatrix.needsUpdate=!0,this.palLading.instanceColor&&(this.palLading.instanceColor.needsUpdate=!0)}if(this.vloerBasis&&this.vloerLading){const _=new He;if(this.eersteStand||e.alleVloerVeranderd)for(let m=0;m<e.vloerPlekken.length;m++)this.zetVloerplek(e,m,_);else for(const m of e.vloerVeranderd)this.zetVloerplek(e,m,_);this.vloerBasis.instanceMatrix.needsUpdate=!0,this.vloerLading.instanceMatrix.needsUpdate=!0,this.vloerLading.instanceColor&&(this.vloerLading.instanceColor.needsUpdate=!0)}this.eersteStand=!1;for(const _ of this.inst.values())_.n=0;let t=0;const n=(_,m,p,v)=>{const S=this.inst.get(_);if(!(!S||!S.delen.length||S.n>=S.delen[0].instanceMatrix.count)){Tn.compose(Pn.set(m,ft,p),tn.setFromAxisAngle(Ai,-En(v)),Dn.set(1,1,1));for(const y of S.delen)y.setMatrixAt(S.n,Tn);S.n++}},i=new He;for(let _=0;_<e.eenheden.length;_++){if(!e.ezicht[_]||e.ekort[_])continue;const m=e.eenheden[_],[p,v]=this.celNaarWereld(e.ex[_],e.ey[_]),S=(m.bron===Zi.inslag||m.bron===Zi.expeditie)&&e.elast[_]!==Cc?e.symboolBij(_,e.estap[_]):m.symbool;let y=vS(S);y==="medewerker"&&Math.abs(this.eVorig[2*_]-p)+Math.abs(this.eVorig[2*_+1]-v)>1e-4&&(y="medewerker_lopen"),this.eVorig[2*_]=p,this.eVorig[2*_+1]=v,y&&n(y,p,v,e.eh[_]);const M=e.elast[_];if(M!==Cc&&this.lastBasis&&this.lastLading&&t<200){const T=-En(e.eh[_]),x=S==="wikkel"?0:y==="medewerker"||y==="medewerker_lopen"?.9:1.15,b=p+Math.cos(T)*x,O=v-Math.sin(T)*x,C=ft+(S==="wikkel"?.25:.12);tn.setFromAxisAngle(Ai,T+Math.PI/2),this.lastBasis.setMatrixAt(t,Tn.compose(Pn.set(b,C,O),tn,Dn.set(1,1,1)));const L=M===cf?0:M===Lc?.9:1.2;this.lastLading.setMatrixAt(t,L?Tn.compose(Pn.set(b,C+.15,O),tn,Dn.set(1,L,1)):Ki);const U=M===af?e.eklasse[_]:-1;U>=0&&this.klasseKleur[U]?this.lastLading.setColorAt(t,this.klasseKleur[U]):this.lastLading.setColorAt(t,i.set(M===Lc?10922155:ot.doos)),t++}}let r=0;const o=(_,m)=>{const p=this.inst.get(_);if(!(!p||!p.delen.length||p.n>=p.delen[0].instanceMatrix.count)){for(const v of p.delen)v.setMatrixAt(p.n,m);p.n++}},a=this.modellen,l=a.oplegger.ankers.oplegger_scharnier?.x??3.85,c=l-(a.trailer.ankers.koppelpen?.x??5.275),h=l-(a.trekker.ankers.koppelpunt?.x??-1.6),u=l-(a.terminaltrekker.ankers.koppelpunt?.x??-1.5),d=(_,m)=>{const p=this.inst.get("trailer");if(!p||!p.delen.length||p.n>=p.delen[0].instanceMatrix.count)return;const v=_.clone().multiply(new Ue().makeTranslation(c,0,0));for(const M of p.delen)M.setMatrixAt(p.n,v);p.n++;const S=this.wagenLading;if(!S)return;const y=Math.min(p.plekken.length,Math.round(Math.max(0,Math.min(1,m))*Ms));for(let M=0;M<y&&r<S.instanceMatrix.count;M++){const T=p.plekken[M];S.setMatrixAt(r++,new Ue().multiplyMatrices(v,new Ue().makeTranslation(T.x,T.y,T.z)))}},f=(_,m,p)=>new Ue().compose(Pn.set(_,.04,m),tn.setFromAxisAngle(Ai,-En(p)),Dn.set(1,1,1));if(e.pendel){for(let _=0;_<e.lzicht.length;_++)e.lzicht[_]&&d(f(e.lx[_],e.ly[_],e.lh[_]),e.lvol[_]);for(let _=0;_<e.tzicht.length;_++){if(!e.tzicht[_]||e.tkort[_])continue;const m=f(e.tx[_],e.ty[_],e.th[_]),p=_>=e.pendel.trekkers;o(p?"terminaltrekker":"trekker",m.clone().multiply(new Ue().makeTranslation(p?u:h,0,0))),e.ttrailer[_]>=0&&d(m,e.tvol[_])}}for(const _ of e.wagensNu){if(e.wkort[_])continue;if(e.isLosseTrailer(_)){d(f(e.wx[_],e.wy[_],e.wh[_]),e.wlading[_]);continue}const m=e.spoor.wagens.lzv[_]===1,p=m?1:e.voertuigVan(_),v=m?"lzv":p===2?"bakwagen":p===3?"koelbus":"oplegger",S=e.wx[_],y=e.wy[_],M=-En(e.wh[_]),T=this.inst.get(v);if(!T||!T.delen.length||T.n>=T.delen[0].instanceMatrix.count)continue;tn.setFromAxisAngle(Ai,M),Tn.compose(Pn.set(S,.04,y),tn,Dn.set(1,1,1));const x=Ky[v];x!==void 0&&x<16.5&&Tn.multiply(new Ue().makeTranslation(-(16.5-x)/2,0,0));for(const U of T.delen)U.setMatrixAt(T.n,Tn);T.n++;const b=Tn.clone();if(e.isRetour(_)){const U=Math.round(Math.max(0,Math.min(1,e.wlading[_]))*e.stapelsVan(_)),z=e.spoor.wagens.stapelsLeeg?.[_]??0;for(let D=0;D<Math.min(U,T.plekken.length);D++){const k=T.plekken[D];o(D<z?"stapel_pallets":"stapel_kratten",new Ue().multiplyMatrices(b,new Ue().makeTranslation(k.x,k.y,k.z)))}continue}const O=m?lf:v==="oplegger"?Ms:T.plekken.length,C=Math.min(T.plekken.length,Math.round(Math.max(0,Math.min(1,e.wlading[_]))*O)),L=this.wagenLading;if(L)for(let U=0;U<C&&r<L.instanceMatrix.count;U++){const z=T.plekken[U];L.setMatrixAt(r++,new Ue().multiplyMatrices(b,new Ue().makeTranslation(z.x,z.y,z.z)))}}const g=e.layout.vloer.emballage;if(g&&e.emballageCapaciteit>0){const _=Math.min(g.plekken.length,e.tel.emballage),m=!(e.spoor.wagens.stapelsLeeg?.some(p=>p>0)??!1)&&(e.spoor.wagens.stapelsKrat?.some(p=>p>0)??!1);for(let p=0;p<_;p++){const v=g.plekken[p],[S,y]=this.celNaarWereld(v.x,v.y);tn.setFromAxisAngle(Ai,v.richting==="v"?Math.PI/2:0),o(m?"stapel_kratten":"stapel_pallets",new Ue().compose(Pn.set(S,ft,y),tn,Dn.set(1,1,1)))}}for(const _ of this.inst.values())for(const m of _.delen)m.count=_.n,m.instanceMatrix.needsUpdate=!0;this.lastBasis&&this.lastLading&&(this.lastBasis.count=t,this.lastLading.count=t,this.lastBasis.instanceMatrix.needsUpdate=!0,this.lastLading.instanceMatrix.needsUpdate=!0,this.lastLading.instanceColor&&(this.lastLading.instanceColor.needsUpdate=!0)),this.wagenLading&&(this.wagenLading.count=r,this.wagenLading.instanceMatrix.needsUpdate=!0);for(const _ of this.knelZones){const m=e.knel(_.z);if(_.aan=m,_.obj.visible=m,m){const p=e.aantal(_.z),v=_.z.sleutel==="wagens"?e.routes.heeftTerrein?`Wachtplaatsen vol · ${p} ${p===1?"vrachtwagen":"vrachtwagens"}`:`Vrachtwagens wachten · ${p}`:`${_.z.sleutel==="inslag"?"Ontvangst en controle":"Expeditiezone"} vol · ${p} ${p===1?"pallet":"pallets"}`;v!==_.nu&&(_.tekst.textContent=v,_.nu=v)}}if(this.keuze?.soort==="eenheid"){const _=Number(this.keuze.id);if(e.ezicht[_]&&!e.ekort[_]){const[m,p]=this.celNaarWereld(e.ex[_],e.ey[_]);this.ring.groep.position.set(m,0,p),this.ring.groep.visible=!0}else this.ring.groep.visible=!1}this.vuil=!0}nadrukKnel(){for(const e of this.knelZones)e.pin.classList.remove("nadruk"),e.pin.offsetWidth,this.minder||e.pin.classList.add("nadruk")}tween(e,t,n,i){if(this.tweens=this.tweens.filter(r=>r.naam!==e),t<=0||this.minder){n(1),i?.(),this.vuil=!0;return}n(0),this.tweens.push({naam:e,duur:t,t:0,stap:n,klaar:i,nieuw:!0}),this.vuil=!0}stopTween(e){const t=this.tweens.find(n=>n.naam===e);this.tweens=this.tweens.filter(n=>n.naam!==e),t?.klaar?.()}werkOverlayBij(){const e=new R,t=(n,i,r=0)=>{e.copy(i).project(this.camera);const o=(e.x+1)/2*this.w,a=(1-e.y)/2*this.h,l=e.z<1&&o>0&&o<this.w&&a>8&&a<this.h-this.vrijNu-r;return n.style.transform=`translate(${o.toFixed(1)}px, ${a.toFixed(1)}px)`,l};if(this.keuze&&this.ring.groep.visible){const n=new R;this.keuzeK?this.keuzeK.doos.getCenter(n).setY(this.keuzeK.doos.max.y+1.2):n.copy(this.ring.groep.position).setY(3.2),this.chip.classList.toggle("weg",!t(this.chip,n))}for(const n of this.knelZones){const i=n.aan&&t(n.pin,n.anker,12);n.pin.classList.toggle("aan",i)}}meet(e){for(this.frames.push(e);this.frames.length&&e-this.frames[0]>3e3;)this.frames.shift();if(e-this.laatsteCheck<1e3||this.traagStap>=2)return;this.laatsteCheck=e;const t=this.frames;if(t.length<10||t[t.length-1]-t[0]<2500)return;const n=[];for(let r=1;r<t.length;r++)n.push(t[r]-t[r-1]);n.some(r=>r>400)||(n.sort((r,o)=>r-o),n[Math.floor(n.length/2)]<=50)||(this.frames.length=0,this.traagStap===0?(this.traagStap=1,this.renderer.shadowMap.enabled=!1,this.zon.castShadow=!1,this.scene.traverse(r=>{const o=r.material;o&&(o.needsUpdate=!0)}),this.renderer.setPixelRatio(1),this.maat(),this.opt.meld({soort:"traag",stap:1})):(this.traagStap=2,this.opt.meld({soort:"traag",stap:2})))}maat(){const e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.w=e,this.h=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.pasViewOffset();for(const n of this.lijnMaterialen)n.resolution.set(e,t);this.vuil=!0}testHaak(){return{meet:(e=5)=>new Promise(t=>{const n=[],i=performance.now();let r=i;const o=a=>{if(n.push(a-r),r=a,this.cc.rotate(En(.4),0,!1),a-i<e*1e3)requestAnimationFrame(o);else{const l=n.slice(5).sort((h,u)=>h-u),c=l.reduce((h,u)=>h+u,0)/l.length;t({fps:+(1e3/c).toFixed(1),p95ms:+l[Math.floor(l.length*.95)].toFixed(1),mediaanMs:+l[Math.floor(l.length/2)].toFixed(1),frames:l.length})}};requestAnimationFrame(o)}),aantallen:()=>Object.fromEntries([...this.inst].map(([e,t])=>[e,t.n])),info:()=>{this.renderer.info.autoReset=!1,this.renderer.info.reset(),this.renderer.render(this.scene,this.camera);const e={calls:this.renderer.info.render.calls,driehoeken:this.renderer.info.render.triangles,kiesbaar:this.kiesbaar.length,pallets:this.slots.length,glb:Object.entries(this.modellen).filter(([,i])=>i.glb).map(([i])=>i)};this.renderer.info.autoReset=!0;const t=this.renderer.getContext(),n=t.getExtension("WEBGL_debug_renderer_info");return{...e,gpu:n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):"onbekend",standpunt:this.standpuntNu,niveau:this.niveau,stromen:this.stromenAan,vrij:this.vrijNu}},punt:(e,t)=>{const n=this.kiesbaar.find(o=>o.sel.soort===e&&o.sel.id===t);if(!n)return null;const i=n.doos.getCenter(new R).setY(n.doos.max.y).project(this.camera),r=this.renderer.domElement.getBoundingClientRect();return[r.left+(i.x+1)/2*this.w,r.top+(1-i.y)/2*this.h]},traag:()=>this.opt.meld({soort:"traag",stap:2}),kijk:(e,t,n,i=60)=>{const r=this.standpuntPose("overzicht").doel.clone(),o=this.stand?.vloerPlekken??[];if(o.length){r.set(0,0,0);for(const l of o){const[c,h]=this.celNaarWereld(l.x,l.y);r.x+=c/o.length,r.z+=h/o.length}}const a=new R(e,t,n).normalize().multiplyScalar(i);return this.cc.setLookAt(r.x+a.x,r.y+a.y,r.z+a.z,r.x,r.y,r.z,!1),this.vuil=!0,[r.x,r.y,r.z]},vloer:()=>{const e=this.vloerLading;if(!e)return null;const t=new Ue;let n=0;for(let c=0;c<e.count;c++)e.getMatrixAt(c,t),(t.elements[0]!==0||t.elements[2]!==0)&&n++;const i=e.boundingSphere;this.camera.updateMatrixWorld();const r=new Ps().setFromProjectionMatrix(new Ue().multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse));let o=0,a=0;const l=new R;for(let c=0;c<e.count;c++)e.getMatrixAt(c,t),!(t.elements[0]===0&&t.elements[2]===0)&&(l.setFromMatrixPosition(t).applyMatrix4(e.matrixWorld),i&&l.distanceTo(i.center.clone().applyMatrix4(e.matrixWorld))>i.radius&&o++,r.containsPoint(l)&&a++);return{plekken:e.count,bezet:n,frustumCulled:e.frustumCulled,bol:i?[i.center.x,i.center.y,i.center.z,i.radius]:null,bezetBuitenBol:o,bezetInBeeld:a,groepGetekend:!e.frustumCulled||r.intersectsObject(e)}}}}dispose(){this.weg=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.cc.dispose(),this.ruimOp(this.scene),this.renderer.dispose(),this.overlay.remove(),this.renderer.domElement.remove();const e=window;e.__drie&&delete e.__drie}}export{MS as Diorama};
