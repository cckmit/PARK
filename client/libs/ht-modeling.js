!function(C,y,P){"use strict";var V="ht",m=C[V],B=null,T=Math,z=T.PI,L=T.cos,x=T.sin,N=T.abs,c=T.max,X=T.sqrt,w=1e-5,I=m.Default,h=I.def,i=I.startAnim,Q=I.createMatrix,U=I.transformVec,J=I.getInternal(),D=J.addMethod,n=J.superCall,A=J.toPointsArray,q=J.createNormals,$=J.toFloatArray,K=J.glMV,j=J.batchShape,s=J.createNodeMatrix,d=J.getFaceInfo,O=J.transformAppend,v=J.drawFaceInfo,S=J.createAnim,W=J.cube(),R=W.is,l=W.vs,F=W.uv,p=J.ui(),Z=m.Node,Y=m.Shape,f="h",b="v",e="front",r="back",G="left",o="right",E="top",u="bottom",t="dw.expanded",a=".expanded",k="dw.angle",H=".angle",M=function(w,D,A){h(V+"."+w,D,A)},_=function(C,h,v){v?C.push(h.x,h.y):C.push(h.x,h.y,h.z)},g=[1,0,0],pi=function(D,Z,T,P){var h,K,G,M,r=0,c=[];if(P)for(h=P.length;h>r;r+=3)K=P[r],G=P[r+1],M=P[r+2],c.push(new Bl([new Pb([Z[3*K],Z[3*K+1],Z[3*K+2]],g,T?[T[2*K],T[2*K+1],0]:B),new Pb([Z[3*G],Z[3*G+1],Z[3*G+2]],g,T?[T[2*G],T[2*G+1],0]:B),new Pb([Z[3*M],Z[3*M+1],Z[3*M+2]],g,T?[T[2*M],T[2*M+1],0]:B)],D));else for(h=Z.length;h>r;r+=3)K=r,G=r+1,M=r+2,c.push(new Bl([new Pb([Z[3*K],Z[3*K+1],Z[3*K+2]],g,T?[T[2*K],T[2*K+1],0]:B),new Pb([Z[3*G],Z[3*G+1],Z[3*G+2]],g,T?[T[2*G],T[2*G+1],0]:B),new Pb([Z[3*M],Z[3*M+1],Z[3*M+2]],g,T?[T[2*M],T[2*M+1],0]:B)],D));return c},dg=[G,e,o,r,E,u],Bf=dg.concat("csg"),$e=[0,6,12,18,24,30],qd=function(j,k,e){for(var P=s(j),i=[],m=0;6>m;m++)for(var S=dg[m],t=$e[m],Z=e?k.getFaceUv(j,S):B,v=e?k.getFaceUvScale(j,S):B,$=e?k.getFaceUvOffset(j,S):B,_=0;2>_;_++){var Y,b,p,z=R[t+3*_],o=R[t+3*_+1],J=R[t+3*_+2];if(e){if(Z){var I=8*m;Y=[Z[2*z-I],Z[2*z+1-I],0],b=[Z[2*o-I],Z[2*o+1-I],0],p=[Z[2*J-I],Z[2*J+1-I],0]}else Y=[F[2*z],F[2*z+1],0],b=[F[2*o],F[2*o+1],0],p=[F[2*J],F[2*J+1],0];v&&(Y[0]*=v[0],Y[1]*=v[1],b[0]*=v[0],b[1]*=v[1],p[0]*=v[0],p[1]*=v[1]),$&&(Y[0]+=$[0],Y[1]+=$[1],b[0]+=$[0],b[1]+=$[1],p[0]+=$[0],p[1]+=$[1])}i.push(new Bl([new Pb(U([l[3*z],l[3*z+1],l[3*z+2]],P),g,Y),new Pb(U([l[3*o],l[3*o+1],l[3*o+2]],P),g,b),new Pb(U([l[3*J],l[3*J+1],l[3*J+2]],P),g,p)],j))}return Fr.$15n(i)},mh=function(u,t){var d,J=u.data.getAttaches();if(J&&J.each(function(J){J instanceof ep&&J.s("attach.operation")&&(d||(d=[]),d.push(J))}),d){var F;dg.forEach(function(j){var e=pi(j,u[j].vs,u[j].tuv);F=F?F.concat(e):e}),F=Fr.$15n(F),d.forEach(function(E){var x=E.s("attach.operation");F[x]&&(F=F[x](qd(E,u.gv,u.csg.tuv)))}),dg.forEach(function(p){p=u[p],p.vs=[],p.tuv&&(p.tuv=[])}),F.$19n().forEach(function(k){var v=k.$10n;if(v instanceof ep){if(v.s("attach.cull"))return;v="csg"}for(var P=u[v],a=P.vs,J=P.tuv,$=k.$9n,h=2;h<$.length;h++)_(a,$[0].$24n),_(a,$[h-1].$24n),_(a,$[h].$24n),J&&(_(J,$[0].uv,!0),_(J,$[h-1].uv,!0),_(J,$[h].uv,!0))})}Bf.forEach(function(t){var E=u[t];E.visible&&E.vs.length?(E.ns=q(E.vs),$(E,"vs"),$(E,"tuv")):delete u[t]}),t&&(j(u,B,t),u.clear())};D(I,{createFrameModel:function(W,t,X,x){W=W==B?.07:W,t=t==B?W:t,X=X==B?W:X,x=x?x:{};var J=x.top,G=x.bottom,K=x.left,O=x.right,k=x.front,F=x.back,n=[],b=[];return k===!0?(n.push(-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5),b.push(0,0,0,1,1,1,1,1,1,0,0,0)):k===!1||(n.push(-.5,.5,.5,-.5,-.5,.5,-.5+W,-.5,.5,-.5+W,-.5,.5,-.5+W,.5,.5,-.5,.5,.5,.5-W,.5,.5,.5-W,-.5,.5,.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5-W,.5,.5,-.5+W,.5,.5,-.5+W,.5-t,.5,.5-W,.5-t,.5,.5-W,.5-t,.5,.5-W,.5,.5,-.5+W,.5,.5,-.5+W,-.5+t,.5,-.5+W,-.5,.5,.5-W,-.5,.5,.5-W,-.5,.5,.5-W,-.5+t,.5,-.5+W,-.5+t,.5),b.push(0,0,0,1,W,1,W,1,W,0,0,0,1-W,0,1-W,1,1,1,1,1,1,0,1-W,0,W,0,W,t,1-W,t,1-W,t,1-W,0,W,0,W,1-t,W,1,1-W,1,1-W,1,1-W,1-t,W,1-t)),F===!0?(n.push(-.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5),b.push(1,0,0,1,1,1,0,1,1,0,0,0)):F===!1||(n.push(-.5,.5,-.5,-.5+W,-.5,-.5,-.5,-.5,-.5,-.5+W,-.5,-.5,-.5,.5,-.5,-.5+W,.5,-.5,.5-W,.5,-.5,.5,-.5,-.5,.5-W,-.5,-.5,.5,-.5,-.5,.5-W,.5,-.5,.5,.5,-.5,-.5+W,.5,-.5,.5-W,.5-t,-.5,-.5+W,.5-t,-.5,.5-W,.5-t,-.5,-.5+W,.5,-.5,.5-W,.5,-.5,-.5+W,-.5+t,-.5,.5-W,-.5,-.5,-.5+W,-.5,-.5,.5-W,-.5,-.5,-.5+W,-.5+t,-.5,.5-W,-.5+t,-.5),b.push(1,0,1-W,1,1,1,1-W,1,1,0,1-W,0,W,0,0,1,W,1,0,1,W,0,0,0,1-W,0,W,t,1-W,t,W,t,1-W,0,W,0,1-W,1-t,W,1,1-W,1,W,1,1-W,1-t,W,1-t)),K===!0?(n.push(-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,-.5),b.push(0,0,0,1,1,1,1,1,1,0,0,0)):K===!1||(n.push(-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5+X,-.5,-.5,-.5+X,-.5,.5,-.5+X,-.5,.5,-.5,-.5,.5,.5-X,-.5,-.5,.5-X,-.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5-X,-.5,.5,-.5+X,-.5,.5-t,-.5+X,-.5,.5-t,.5-X,-.5,.5-t,.5-X,-.5,.5,.5-X,-.5,.5,-.5+X,-.5,-.5+t,-.5+X,-.5,-.5,-.5+X,-.5,-.5,.5-X,-.5,-.5,.5-X,-.5,-.5+t,.5-X,-.5,-.5+t,-.5+X),b.push(0,0,0,1,X,1,X,1,X,0,0,0,1-X,0,1-X,1,1,1,1,1,1,0,1-X,0,X,0,X,t,1-X,t,1-X,t,1-X,0,X,0,X,1-t,X,1,1-X,1,1-X,1,1-X,1-t,X,1-t)),O===!0?(n.push(.5,.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,-.5,.5,.5,.5),b.push(1,0,0,1,1,1,0,1,1,0,0,0)):O===!1||(n.push(.5,.5,-.5,.5,-.5,-.5+X,.5,-.5,-.5,.5,-.5,-.5+X,.5,.5,-.5,.5,.5,-.5+X,.5,.5,.5-X,.5,-.5,.5,.5,-.5,.5-X,.5,-.5,.5,.5,.5,.5-X,.5,.5,.5,.5,.5,-.5+X,.5,.5-t,.5-X,.5,.5-t,-.5+X,.5,.5-t,.5-X,.5,.5,-.5+X,.5,.5,.5-X,.5,-.5+t,-.5+X,.5,-.5,.5-X,.5,-.5,-.5+X,.5,-.5,.5-X,.5,-.5+t,-.5+X,.5,-.5+t,.5-X),b.push(1,0,1-X,1,1,1,1-X,1,1,0,1-X,0,X,0,0,1,X,1,0,1,X,0,0,0,1-X,0,X,t,1-X,t,X,t,1-X,0,X,0,1-X,1-t,X,1,1-X,1,X,1,1-X,1-t,X,1-t)),J===!0?(n.push(.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5),b.push(1,1,1,0,0,0,0,0,0,1,1,1)):J===!1||(n.push(.5,.5,.5,.5,.5,-.5,.5-W,.5,-.5,.5-W,.5,-.5,.5-W,.5,.5,.5,.5,.5,-.5+W,.5,.5,-.5+W,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5+W,.5,.5,.5-W,.5,.5,.5-W,.5,.5-X,-.5+W,.5,.5-X,-.5+W,.5,.5-X,-.5+W,.5,.5,.5-W,.5,.5,.5-W,.5,-.5+X,.5-W,.5,-.5,-.5+W,.5,-.5,-.5+W,.5,-.5,-.5+W,.5,-.5+X,.5-W,.5,-.5+X),b.push(1,1,1,0,1-W,0,1-W,0,1-W,1,1,1,W,1,W,0,0,0,0,0,0,1,W,1,1-W,1,1-W,1-X,W,1-X,W,1-X,W,1,1-W,1,1-W,X,1-W,0,W,0,W,0,W,X,1-W,X)),G===!0?(n.push(.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5),b.push(1,0,0,1,1,1,0,1,1,0,0,0)):G===!1||(n.push(.5,-.5,.5,.5-W,-.5,-.5,.5,-.5,-.5,.5-W,-.5,-.5,.5,-.5,.5,.5-W,-.5,.5,-.5+W,-.5,.5,-.5,-.5,-.5,-.5+W,-.5,-.5,-.5,-.5,-.5,-.5+W,-.5,.5,-.5,-.5,.5,.5-W,-.5,.5,-.5+W,-.5,.5-X,.5-W,-.5,.5-X,-.5+W,-.5,.5-X,.5-W,-.5,.5,-.5+W,-.5,.5,.5-W,-.5,-.5+X,-.5+W,-.5,-.5,.5-W,-.5,-.5,-.5+W,-.5,-.5,.5-W,-.5,-.5+X,-.5+W,-.5,-.5+X),b.push(1,0,1-W,1,1,1,1-W,1,1,0,1-W,0,W,0,0,1,W,1,0,1,W,0,0,0,1-W,0,W,X,1-W,X,W,X,1-W,0,W,0,1-W,1-X,W,1,1-W,1,W,1,1-W,1-X,W,1-X)),{vs:n,uv:b}}}),D(m.Style,{"dw.flip":!1,"dw.s3":[.999,.999,.5],"dw.t3":P,"dw.expanded":!1,"dw.toggleable":!0,"dw.axis":"left","dw.start":0,"dw.end":z/2,"dw.angle":0,"attach.cull":!1,"attach.operation":"subtract"},!0),dg.forEach(function(e){var R={};R[e+a]=!1,R[e+".toggleable"]=!1,R[e+".axis"]=G,R[e+".start"]=0,R[e+".end"]=z/2,R[e+H]=0,D(m.Style,R,!0)});var Fr=function(){this.$4n=[]};Fr.$15n=function(j){var n=new Fr;return n.$4n=j,n},Fr.prototype={clone:function(){var z=new Fr;return z.$4n=this.$4n.map(function(i){return i.clone()}),z},$19n:function(){return this.$4n},union:function(P){var K=new Nr(this.clone().$4n),c=new Nr(P.clone().$4n);return K.$3n(c),c.$3n(K),c.$6n(),c.$3n(K),c.$6n(),K.$7n(c.$2n()),Fr.$15n(K.$2n())},subtract:function(s){var w=new Nr(this.clone().$4n),y=new Nr(s.clone().$4n);return w.$6n(),w.$3n(y),y.$3n(w),y.$6n(),y.$3n(w),y.$6n(),w.$7n(y.$2n()),w.$6n(),Fr.$15n(w.$2n())},intersect:function(D){var O=new Nr(this.clone().$4n),i=new Nr(D.clone().$4n);return O.$6n(),i.$3n(O),i.$6n(),O.$3n(i),i.$3n(O),O.$7n(i.$2n()),O.$6n(),Fr.$15n(O.$2n())},inverse:function(){var X=this.clone();return X.$4n.map(function(w){w.flip()}),X}},Fr.cube=function(U){U=U||{};var A=new Gp(U.center||[0,0,0]),s=U.radius?U.radius.length?U.radius:[U.radius,U.radius,U.radius]:[1,1,1];return Fr.$15n([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(function(f){return new Bl(f[0].map(function(U){var p=new Gp(A.x+s[0]*(2*!!(1&U)-1),A.y+s[1]*(2*!!(2&U)-1),A.z+s[2]*(2*!!(4&U)-1));return new Pb(p,new Gp(f[1]))}))}))},Fr.sphere=function(i){function q(H,Y){H*=2*z,Y*=z;var W=new Gp(L(H)*x(Y),L(Y),x(H)*x(Y));X.push(new Pb(f.$20n(W.$21n(K)),W))}i=i||{};for(var X,f=new Gp(i.center||[0,0,0]),K=i.radius||1,W=i.slices||16,l=i.stacks||8,B=[],g=0;W>g;g++)for(var r=0;l>r;r++)X=[],q(g/W,r/l),r>0&&q((g+1)/W,r/l),l-1>r&&q((g+1)/W,(r+1)/l),q(g/W,(r+1)/l),B.push(new Bl(X));return Fr.$15n(B)},Fr.cylinder=function(m){function O(p,o,i){var w=2*o*z,W=r.$21n(L(w)).$20n(y.$21n(x(w))),I=v.$20n(u.$21n(p)).$20n(W.$21n(F)),j=W.$21n(1-N(i)).$20n(g.$21n(i));return new Pb(I,j)}m=m||{};for(var v=new Gp(m.start||[0,-1,0]),V=new Gp(m.end||[0,1,0]),u=V.$13n(v),F=m.radius||1,M=m.slices||16,g=u.$14n(),J=N(g.y)>.5,r=new Gp(J,!J,0).$12n(g).$14n(),y=r.$12n(g).$14n(),q=new Pb(v,g.$11n()),C=new Pb(V,g.$14n()),o=[],p=0;M>p;p++){var Z=p/M,G=(p+1)/M;o.push(new Bl([q,O(0,Z,-1),O(0,G,-1)])),o.push(new Bl([O(0,G,0),O(0,Z,0),O(1,Z,0),O(1,G,0)])),o.push(new Bl([C,O(1,G,1),O(1,Z,1)]))}return Fr.$15n(o)};var Gp=function(d,_,q){var s=this;3==arguments.length?(s.x=d,s.y=_,s.z=q):"x"in d?(s.x=d.x,s.y=d.y,s.z=d.z):(s.x=d[0],s.y=d[1],s.z=d[2])};Gp.prototype={clone:function(){return new Gp(this.x,this.y,this.z)},$11n:function(){return new Gp(-this.x,-this.y,-this.z)},$20n:function(h){return new Gp(this.x+h.x,this.y+h.y,this.z+h.z)},$13n:function(f){return new Gp(this.x-f.x,this.y-f.y,this.z-f.z)},$21n:function(g){return new Gp(this.x*g,this.y*g,this.z*g)},$16n:function(z){return new Gp(this.x/z,this.y/z,this.z/z)},$23n:function(d){return this.x*d.x+this.y*d.y+this.z*d.z},lerp:function(u,c){return this.$20n(u.$13n(this).$21n(c))},length:function(){return X(this.$23n(this))},$14n:function(){return this.$16n(this.length())},$12n:function(l){var F=this;return new Gp(F.y*l.z-F.z*l.y,F.z*l.x-F.x*l.z,F.x*l.y-F.y*l.x)}};var Pb=function(a,q,P){var _=this;_.$24n=new Gp(a),_.$22n=new Gp(q),_.uv=P?new Gp(P):null};Pb.prototype={clone:function(){var R=this;return new Pb(R.$24n.clone(),R.$22n.clone(),R.uv?R.uv.clone():null)},flip:function(){this.$22n=this.$22n.$11n()},$18n:function(C,V){var h=this;return new Pb(h.$24n.lerp(C.$24n,V),h.$22n.lerp(C.$22n,V),h.uv?h.uv.lerp(C.uv,V):null)}};var Bg=function(m,O){this.$22n=m,this.w=O};Bg.$17n=function(I,v,Z){var f=v.$13n(I).$12n(Z.$13n(I)).$14n();return new Bg(f,f.$23n(I))},Bg.prototype={clone:function(){return new Bg(this.$22n.clone(),this.w)},flip:function(){var r=this;r.$22n=r.$22n.$11n(),r.w=-r.w},$5n:function(N,V,Q,j,p){for(var q=this,g=0,x=1,E=2,r=3,R=0,Y=[],O=0;O<N.$9n.length;O++){var f=q.$22n.$23n(N.$9n[O].$24n)-q.w,H=-w>f?E:f>w?x:g;R|=H,Y.push(H)}switch(R){case g:(q.$22n.$23n(N.$8n.$22n)>0?V:Q).push(N);break;case x:j.push(N);break;case E:p.push(N);break;case r:for(var s=[],A=[],O=0;O<N.$9n.length;O++){var C=(O+1)%N.$9n.length,P=Y[O],a=Y[C],k=N.$9n[O],W=N.$9n[C];if(P!=E&&s.push(k),P!=x&&A.push(P!=E?k.clone():k),(P|a)==r){var f=(q.w-this.$22n.$23n(k.$24n))/q.$22n.$23n(W.$24n.$13n(k.$24n)),M=k.$18n(W,f);s.push(M),A.push(M.clone())}}s.length>=3&&j.push(new Bl(s,N.$10n)),A.length>=3&&p.push(new Bl(A,N.$10n))}}};var Bl=function(T,h){var Q=this;Q.$9n=T,Q.$10n=h,Q.$8n=Bg.$17n(T[0].$24n,T[1].$24n,T[2].$24n)};Bl.prototype={clone:function(){var K=this.$9n.map(function(P){return P.clone()});return new Bl(K,this.$10n)},flip:function(){this.$9n.reverse().map(function(v){v.flip()}),this.$8n.flip()}};var Nr=function(W){var l=this;l.$8n=null,l.front=null,l.back=null,l.$4n=[],W&&l.$7n(W)};Nr.prototype={clone:function(){var N=this,X=new Nr;return X.$8n=N.$8n&&N.$8n.clone(),X.front=N.front&&N.front.clone(),X.back=N.back&&N.back.clone(),X.$4n=N.$4n.map(function(d){return d.clone()}),X},$6n:function(){for(var j=this,O=0;O<j.$4n.length;O++)j.$4n[O].flip();j.$8n.flip(),j.front&&j.front.$6n(),j.back&&j.back.$6n();var Z=j.front;j.front=j.back,j.back=Z},$1n:function(L){var J=this;if(!J.$8n)return L.slice();for(var d=[],y=[],v=0;v<L.length;v++)J.$8n.$5n(L[v],d,y,d,y);return J.front&&(d=J.front.$1n(d)),y=J.back?J.back.$1n(y):[],d.concat(y)},$3n:function(Q){var O=this;O.$4n=Q.$1n(O.$4n),O.front&&O.front.$3n(Q),O.back&&O.back.$3n(Q)},$2n:function(){var b=this,j=b.$4n.slice();return b.front&&(j=j.concat(b.front.$2n())),b.back&&(j=j.concat(b.back.$2n())),j},$7n:function(R){var o=this;if(R.length){o.$8n||(o.$8n=R[0].$8n.clone());for(var K=[],X=[],l=0;l<R.length;l++)this.$8n.$5n(R[l],o.$4n,o.$4n,K,X);K.length&&(o.front||(o.front=new Nr),this.front.$7n(K)),X.length&&(o.back||(o.back=new Nr),o.back.$7n(X))}}};var Oj="symbol",Xr=m.Symbol=function(V,y,K){var h=this;n(Xr,h),h.s3(20,20,20),h.s({"all.visible":!1,shape:"rect"}),h.setIcon(V,y,K)};M("Symbol",Z,{setIcon:function(S,e,H){var m,r=this;return Xr.superClass.setIcon.call(r,S),S?(m={for3d:!0,face:"center",position:44,names:[S]},H&&(m.transaprent=!0),e&&(m.autorotate=e),r.addStyleIcon(Oj,m)):r.removeStyleIcon(Oj),r.setWidth(J.getImageWidth(I.getImage(S),r)||20),m}});var ep=m.CSGNode=function(){n(ep,this),this.s({shape:"rect","attach.thickness":1.001})},dm={position:1,width:1,height:1,rotation:1,rotationX:1,rotationZ:1,rotationMode:1,tall:1,elevation:1,"s:attach.cull":1,"s:attach.operation":1};M("CSGNode",Z,{_22Q:function(){return es},onPropertyChanged:function(X){var T=this,o=T.getHost();ep.superClass.onPropertyChanged.call(T,X),dm[X.property]&&(o instanceof Tg||o instanceof ep)&&o.fp("csgNodeChange",!0,!1)}});var es=function(N,A){n(es,this,[N,A])};h(es,p.Node3dUI,{_80o:function(p,R,V){var l=this;l._shape3d?es.superClass._80o.call(l,p,R,V):(K(l.gv),Bf.forEach(function(c){v(l,p,R,l[c],V)}))},validate:function(I,v){var H=this,Q=H.gv,b=H.data;if(b.s("shape3d"))return es.superClass.validate.call(H,I,v),H._shape3d=!0,void 0;H._shape3d=!1;var _=s(b,Q.getMat(b)),X=I&&I.uv;H.vf2("csg",X);for(var L=0;6>L;L++)for(var m=dg[L],A=$e[L],P=H.vf2(m,X,v),C=P.mat||_,y=P.vs,U=P.uv,f=P.tuv,W=0;2>W;W++){var c=R[A+3*W],N=R[A+3*W+1],G=R[A+3*W+2];if(O(y,C,[l[3*c],l[3*c+1],l[3*c+2]]),O(y,C,[l[3*N],l[3*N+1],l[3*N+2]]),O(y,C,[l[3*G],l[3*G+1],l[3*G+2]]),f)if(U){var p=8*L;f.push(U[2*c-p],U[2*c+1-p],U[2*N-p],U[2*N+1-p],U[2*G-p],U[2*G+1-p])}else f.push(F[2*c],F[2*c+1],F[2*N],F[2*N+1],F[2*G],F[2*G+1])}mh(H,I,v)},vf2:function(r,j,S){var T,M=this,K=M.gv.getFaceVisible(M.data,r);return T=d(M,r,S),T.vs=[],T.tuv=K&&(T.texture||j)?[]:B,T.visible=K,T}});var Tg=m.CSGShape=function(){var d=this;n(Tg,d),d.s({"shape.background":B,"shape.border.width":8}),d.setTall(240),d.setElevation(120),d.setThickness(14)};M("CSGShape",Y,{IRotatable:!1,_22Q:function(){return am},setRotationX:function(){},setRotation:function(){},setRotationZ:function(){},setSegments:function(){}});var am=function(B,_){n(am,this,[B,_])};h(am,p.Shape3dUI,{_80o:function(V,l,b){var D=this;D.undrawable||(K(D.gv),Bf.forEach(function(p){v(D,V,l,D[p],b)}))},validate:function(N,g){var M=this,u=M.data,W=u.getPoints();if(M.undrawable=W.size()<2)return M.clear(),void 0;var C=u.isClosePath(),Q=c(u._thickness/2,w),f=A(W,B,B,C);Bf.forEach(function($){M.vf($,N&&N.uv,!0,g)}),C&&(M.left.visible=!1,M.right.visible=!1),M._12O(f,Q),M._20Q(f),mh(M,N,g)}});var zh=m.DoorWindow=function(){var Z=this;n(zh,Z),Z.setElevation(100),Z.s3(100,200,14)};M("DoorWindow",ep,{IDoorWindow:!0,toggle:function(U){this.setExpanded(!this.s(t),U)},isExpanded:function(){return this.s(t)},setExpanded:function(B,o){var s=this,g=s.$25n,O=s.getDataModel(),n=s.s(t);if(g&&(g.stop(!0),delete s.$25n),n!==B){O&&O.beginTransaction();var P=B?s.s("dw.end"):s.s("dw.start");s.s(t,B),o=S(o),o?(n=s.s(k),o.action=function(m){s.s(k,n+(P-n)*m)},o.finishFunc=function(){O&&O.endTransaction()},s.$25n=i(o)):(s.s(k,P),O&&O.endTransaction())}},getMat:function(){var K=this,c=K.s("dw.s3"),J=K.s("dw.t3"),N=K.s("dw.flip"),i=K.s(k);if(c||i||J||N){var H=[];if(N&&H.push({r3:[0,z,0]}),c&&H.push({s3:c}),i){c=K.getFinalScale3d();var j=K.s("dw.axis"),v=c[0]/2,g=c[1]/2;c[2]/2,j===G?H.push({t3:[v,0,0]},{r3:[0,-i,0]},{t3:[-v,0,0]}):j===o?H.push({t3:[-v,0,0]},{r3:[0,i,0]},{t3:[v,0,0]}):j===E?H.push({t3:[0,-g,0]},{r3:[-i,0,0]},{t3:[0,g,0]}):j===u?H.push({t3:[0,g,0]},{r3:[i,0,0]},{t3:[0,-g,0]}):j===b?H.push({r3:[0,i,0]}):j===f&&H.push({r3:[i,0,0]})}return J&&H.push({t3:J}),Q(H)}return B}});var bo=m.CSGBox=function(){var I=this;n(bo,I),I.setElevation(100),I.s3(100,200,100)};M("CSGBox",ep,{ICSGBox:!0,toggleFace:function(N,d){this.setFaceExpanded(N,!this.s(N+a),d)},isFaceExpanded:function(G){return this.s(G+a)},setFaceExpanded:function(j,r,V){var I=this,Y=I.$25n,s=I.s(j+a);if(Y&&(Y.stop(!0),delete I.$25n),s!==r){var T=r?I.s(j+".end"):I.s(j+".start");I.s(j+a,r),V=S(V),V?(s=I.s(j+H),V.action=function(C){I.s(j+H,s+(T-s)*C)},I.$25n=i(V)):I.s(j+H,T)}},getFaceMat:function(W){var l=this,s=l.s(W+H);if(!s)return B;var j=l.s(W+".axis"),_=l.s3(),N=_[0]/2,D=_[1]/2,L=_[2]/2,c=[];return W===e&&(j===G?c.push({t3:[N,0,-L]},{r3:[0,-s,0]},{t3:[-N,0,L]}):j===o?c.push({t3:[-N,0,-L]},{r3:[0,s,0]},{t3:[N,0,L]}):j===E?c.push({t3:[0,-D,-L]},{r3:[-s,0,0]},{t3:[0,D,L]}):j===u?c.push({t3:[0,D,-L]},{r3:[s,0,0]},{t3:[0,-D,L]}):j===b?c.push({t3:[0,0,-L]},{r3:[0,s,0]},{t3:[0,0,L]}):j===f&&c.push({t3:[0,0,-L]},{r3:[s,0,0]},{t3:[0,0,L]})),W===r&&(j===G?c.push({t3:[-N,0,L]},{r3:[0,-s,0]},{t3:[N,0,-L]}):j===o?c.push({t3:[N,0,L]},{r3:[0,s,0]},{t3:[-N,0,-L]}):j===E?c.push({t3:[0,-D,L]},{r3:[s,0,0]},{t3:[0,D,-L]}):j===u?c.push({t3:[0,D,L]},{r3:[-s,0,0]},{t3:[0,-D,-L]}):j===b?c.push({t3:[0,0,L]},{r3:[0,s,0]},{t3:[0,0,-L]}):j===f&&c.push({t3:[0,0,L]},{r3:[s,0,0]},{t3:[0,0,-L]})),W===G&&(j===G?c.push({t3:[N,0,L]},{r3:[0,-s,0]},{t3:[-N,0,-L]}):j===o?c.push({t3:[N,0,-L]},{r3:[0,s,0]},{t3:[-N,0,L]}):j===E?c.push({t3:[N,-D,0]},{r3:[0,0,-s]},{t3:[-N,D,0]}):j===u?c.push({t3:[N,D,0]},{r3:[0,0,s]},{t3:[-N,-D,0]}):j===b?c.push({t3:[N,0,0]},{r3:[0,s,0]},{t3:[-N,0,0]}):j===f&&c.push({t3:[N,0,0]},{r3:[0,0,s]},{t3:[-N,0,0]})),W===o&&(j===G?c.push({t3:[-N,0,-L]},{r3:[0,-s,0]},{t3:[N,0,L]}):j===o?c.push({t3:[-N,0,L]},{r3:[0,s,0]},{t3:[N,0,-L]}):j===E?c.push({t3:[-N,-D,0]},{r3:[0,0,s]},{t3:[N,D,0]}):j===u?c.push({t3:[-N,D,0]},{r3:[0,0,-s]},{t3:[N,-D,0]}):j===b?c.push({t3:[-N,0,0]},{r3:[0,s,0]},{t3:[N,0,0]}):j===f&&c.push({t3:[-N,0,0]},{r3:[0,0,s]},{t3:[N,0,0]})),W===E&&(j===G?c.push({t3:[N,-D,0]},{r3:[0,0,s]},{t3:[-N,D,0]}):j===o?c.push({t3:[-N,-D,0]},{r3:[0,0,-s]},{t3:[N,D,0]}):j===E?c.push({t3:[0,-D,L]},{r3:[-s,0,0]},{t3:[0,D,-L]}):j===u?c.push({t3:[0,-D,-L]},{r3:[s,0,0]},{t3:[0,D,L]}):j===b?c.push({t3:[0,-D,0]},{r3:[0,0,s]},{t3:[0,D,0]}):j===f&&c.push({t3:[0,-D,0]},{r3:[s,0,0]},{t3:[0,D,0]})),W===u&&(j===G?c.push({t3:[N,D,0]},{r3:[0,0,-s]},{t3:[-N,-D,0]}):j===o?c.push({t3:[-N,D,0]},{r3:[0,0,s]},{t3:[N,-D,0]}):j===E?c.push({t3:[0,D,-L]},{r3:[-s,0,0]},{t3:[0,-D,L]}):j===u?c.push({t3:[0,D,L]},{r3:[s,0,0]},{t3:[0,-D,-L]}):j===b?c.push({t3:[0,D,0]},{r3:[0,0,s]},{t3:[0,-D,0]}):j===f&&c.push({t3:[0,D,0]},{r3:[s,0,0]},{t3:[0,-D,0]})),Q(c)}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);