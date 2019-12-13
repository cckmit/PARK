!function(O){"use strict";var y=O.ht,a=y.Default,m=a.getInternal(),H=m.ui(),$=null,W="__segmentLengths",x="__lineTotalLength",v="__linePoints",M="__distance0",U="flow.count",J="flow.step",D="flow.element.max",i="flow.element.count",u="flow.element.min",r="flow.element.space",z="flow.element.autorotate",g="flow.element.background",I="flow.element.shadow.max",K="flow.element.shadow.min",G="flow.element.shadow.begincolor",_="flow.element.shadow.endcolor",o="flow.element.shadow.visible",V="flow.element.image",j="flow",N=y.Math.Vector2,q=new N;new N,new N,y.List;var c=y.Default._edgeProtectMethod,E=c.getStraightLinePoints,n=function(Q,h){for(var e=[],C=Q.length,d=0;C>d;d++){var l=Q[d];l._as&&(l=l._as);for(var f=l[0],A=1;A<l.length;A++)e.push([f,l[A]]),f=l[A]}for(var V=[],d=0;d<e.length;d++){var u=S(e[d][0],e[d][1],h);V.push(u)}return{distance:V,segments:e}},F=function(A,t,c){if(A){for(var q,W=n(A,t),g=W.distance,s=W.segments,Y=1/0,K=null,o=0,z=g.length;z>o;o++){var e=g[o];e.z<Y&&(q=o,Y=e.z,K=e)}if(null==c&&(c=.1),K.z<c){for(var O=0,p=0;q>=p;p++)O+=a.getDistance(s[p][0],q>p?s[p][1]:K);return O}}},S=function(B,g,$){var i=B.x,E=B.y,b=g.x,K=g.y,x=$.x,H=$.y,_=b-i,j=K-E,W=Math.sqrt(_*_+j*j),P=_/W,z=j/W,t=(-i+x)*P+(-E+H)*z,a={x:i+t*P,y:E+t*z};return a.x>=Math.min(B.x,g.x)&&a.x<=Math.max(B.x,g.x)&&a.y>=Math.min(B.y,g.y)&&a.y<=Math.max(B.y,g.y)||(a.x=Math.abs(a.x-B.x)<Math.abs(a.x-g.x)?B.x:g.x,a.y=Math.abs(a.y-B.y)<Math.abs(a.y-g.y)?B.y:g.y),_=x-a.x,j=H-a.y,a.z=Math.sqrt(_*_+j*j),a},Q=function(R,C){if(R){var i=n(R,C).distance,B=1/0,v=null;return i.forEach(function(d){d.z<B&&(B=d.z,v=d)}),v}},R=c.calculateLineLength,Y=c.calcSegmentIndexByDistance,A=c.calculatePointAlongLine,X=function(v,Z,G){if(!v)return G;if(0===Z){var T=v[0][0],C=v[0][1];return G+Math.atan2(C.y-T.y,C.x-T.x)}if(100===Z){v=v[v.length-1];var T=v[v.length-2],C=v[v.length-1];return G+Math.atan2(C.y-T.y,C.x-T.x)}for(var U=0,S=[],p=v.length,m=0;p>m;m++){var E=v[m],P=R(E);U+=P,S.push(P)}for(var h=U*Z/100,N=Y(h,S),e=0,x=0;N>x;x++)e+=S[x];h-=e;for(var W=A(v[N],h),c=v[N],o=0,y=0,i=0;i<c.length-1;i++){var g=c[i],z=c[i+1],J=z.x-g.x,B=z.y-g.y,O=Math.sqrt(J*J+B*B);if(o+=O,o>h){y=i;break}}var q=c[y];return G+Math.atan2(W.y-q.y,W.x-q.x)},P=function($){var v=0;if($)if(Array.isArray($[0]))for(var l=$.length,D=0;l>D;D++){var C=$[D],O=R(C);v+=O}else v=R($);return v},T=function($,n,f,_){return q.set(n,f).rotateAround(null,_),$?{x:$.x+q.x,y:$.y+q.y}:{x:q.x,y:q.y}},t=function(Z){var D=Z._data,B=E(Z);if(B){D.s("flow.reverse")&&(B.reverse(),B.forEach(function(v){v.reverse()}));for(var G=0,i=[],l=B.length,n=0;l>n;n++){var q=B[n],t=R(q);G+=t,i.push(t)}if(D[W]=i,D[x]=G,D[v]=B,D instanceof y.Edge){var U=a.unionPoint(B),H=U.x+U.width/2,Y=U.y+U.height/2;D.$10e={x:H,y:Y}}s(Z,!0)}},B=c.getPercentPosition,s=function(V,k){var $=V._data,A=$[x],B=$.s(U),c=$.s(J),Z=0,j=$[W],b=$.s(D),F=$.s(u),d=$.s(i),Y=(b-F)/(d-1),z=[];if(j){if(1===d)z.push(b);else if(2===d)z.push(b),z.push(F);else{if(!(d>2))return;z.push(b);for(var T=d-2;T>0;T--)z.push(F+Y*T);z.push(F)}var q=0,l=0;z.forEach(function(F){d-1>q&&(l+=$.getFlowElementSpace(F)),q++}),l+=(b+F)/2,Z=(A-B*l+l)/B;var R=V[M];for(null==R&&(R=0),k||(R+=c);R>A+l;){var H=V._overCount;H?H++:H=1,H>=B&&(H=null),V._overCount=H,$.s("flow.autoreverse")?H?R-=Z+l:(R=0,$.s("flow.reverse",!$.s("flow.reverse"))):R-=Z+l}V[M]=R}},C="prototype",l=y.graph.GraphView[C],b=y.Data[C],w=H.DataUI[C],L=H.ShapeUI[C],Z=H.EdgeUI[C],e=y.DataModel[C],d=y.Style;d[D]==$&&(d[D]=7),d[u]==$&&(d[u]=0),d[U]==$&&(d[U]=1),d[J]==$&&(d[J]=3),d[i]==$&&(d[i]=10),d[r]==$&&(d[r]=3.5),d[z]==$&&(d[z]=!1),d[g]==$&&(d[g]="rgba(255, 255, 114, 0.4)"),d[G]==$&&(d[G]="rgba(255, 255, 0, 0.3)"),d[_]==$&&(d[_]="rgba(255, 255, 0, 0)"),d[o]==$&&(d[o]=1),d[I]==$&&(d[I]=22),d[K]==$&&(d[K]=4),l.calculatePointLength=function(l,e,D){var Z=this.getDataUI(l),h=E(Z);return F(h,e,D)},a.calculatePointLength=function(C,e,b,q){var L=E($,C,e);return F(L,b,q)},a.calculateClosestPointOnLine=S,l.calculateClosestPoint=function(g,k){var b=this.getDataUI(g),X=E(b);return Q(X,k)},a.calculateClosestPoint=function(i,z,w){var B=E($,i,z);return Q(B,w)},l.getPercentAngle=function(H,G){var x=this.getDataUI(H),F=E(x);return H.getRotation?H.getRotation():0,X(F,G,H.getRotation?H.getRotation():0)},a.getPercentAngle=function(V,w,Y){var o=E($,V,w);return X(o,Y,0)},l.calculateLength=function(L){var o=this.getDataUI(L),F=E(o);return P(F)},a.calculateLength=function(Z,N){var Q=E($,Z,N);return P(Q)},l.getPercentPosition=function(Z,N){var O=this.getDataUI(Z),W=E(O);return B(W,N)},a.getPercentPositionOnPoints=function(Q,D,I){var c=E($,Q,D);return B(c,I)};var p=function(Z){var Q=Z.data,o=this.dm();if(Q&&"add"===Z.kind){var d=o.$3e;d&&Q.s(j)&&d.indexOf(Q)<0&&d.push(Q)}"clear"===Z.kind&&(o.$3e=[])},k=function(L){var b=L.property,N=L.data,m=L.newValue,X=this.dm().$3e;if(X&&"s:flow"===b)if(m)X.indexOf(N)<0&&X.push(N);else for(var d=X.length,w=0;d>w;w++)if(X[w]===N){X.splice(w,1);break}},h=l.setDataModel;l.setDataModel=function(r){var $=this,Z=$._dataModel;if(Z!==r){Z&&(Z.umm(p,$),Z.umd(k,$),Z.$3e=[]),r.mm(p,$),r.md(k,$);var q=r.$3e=[];r.each(function(x){x.s(j)&&q.indexOf(x)<0&&q.push(x)}),h.call($,r)}},b.getFlowElementSpace=function(){return this.s(r)};var f=function(d){var H=this,b=H._data,p=b[x],_=b[W],G=b[v],s=b.s(U),J=0,t=H[M],P=b.s(D),a=b.s(u),R=b.s(i),n=b.s(K),c=b.s(I),F=b.s(z),Z=(c-n)/(R-1),l=(P-a)/(R-1),B=b.getRotation?b.getRotation():0,V=b.getPosition?b.p():b.$10e,g=[],h=[];if(t!=$){if(1===R)g.push(P);else if(2===R)g.push(P),g.push(a);else{if(!(R>2))return;g.push(P);for(var O=R-2;O>0;O--)g.push(a+l*O);g.push(a)}if(1===R)h.push(c);else if(2===R)h.push(c),h.push(n);else{if(!(R>2))return;h.push(c);for(var O=R-2;O>0;O--)h.push(n+Z*O);h.push(n)}var E=0,S=0;g.forEach(function($){R-1>E&&(S+=b.getFlowElementSpace($)),E++}),S+=(P+a)/2,J=(p-s*S+S)/s,d.save();for(var O=0;s>O;O++){var N=t,m=0,y=H._overCount,C=0;b.s("flow.autoreverse")&&y&&y>s-(O+1)||(N-=O*(J+S),E=0,g.forEach(function(f){var s=N-m;if(s>=0&&p>s){var R=!0,S=Y(s,_);C=0;for(var U=0;S>U;U++)C+=_[U];if(s-=C,R){var n=A(G[S],s),Q=B;if(F){for(var a=G[S],Z=0,L=0,w=0;w<a.length-1;w++){var $=a[w],v=a[w+1],I=v.x-$.x,y=v.y-$.y,D=Math.sqrt(I*I+y*y);if(Z+=D,Z>s){L=w;break}}var r=a[L];Q+=Math.atan2(n.y-r.y,n.x-r.x)}B&&(n=T(V,n.x-V.x,n.y-V.y,B)),H.$5e(d,n,f,h[E],Q)}}m+=b.getFlowElementSpace(g[E]),E++}))}d.restore()}},qk=Z._80o;Z._80o=function(Z){qk.call(this,Z);var U=this,g=U._data,G=U.gv;g.s(j)&&G.$7e!=$&&f.call(U,Z)};var Lm=L._80o;L._80o=function(k){Lm.call(this,k);var H=this,A=H._data,L=H.gv;A.s(j)&&L.$7e!=$&&f.call(H,k)};var al=Z._79o,pl=L._79o,tp=function(){var U=this,n=U._data,w=n.s(D),i=!1,N=$;if(U._6I||(i=!0),N=n instanceof y.Edge?al.call(U):pl.call(U),n.s(j)&&i){var u=n.s(I),K=n.s(o);K&&u>w&&(w=u),w>0&&a.grow(N,Math.ceil(w/2)),t(U)}return!n.s(j)&&i&&(n[W]=n[x]=n[v]=U[M]=$),N};L._79o=tp,Z._79o=tp,w.$5e=function(R,L,t,F,j){var M=this,h=M._data,O=M.gv,l=h.s(g),p=h.s(G),H=h.s(_),I=h.s(o),k=O.$8e,Y=h.s(V);if(k==$&&(k=O.$8e={}),R.beginPath(),Y!=$){var x=a.getImage(Y),z=t/2;R.translate(L.x,L.y),R.rotate(j),R.translate(-L.x,-L.y),a.drawImage(R,x,L.x-z,L.y-z,t,t,h),R.translate(L.x,L.y),R.rotate(-j),R.translate(-L.x,-L.y)}else if(O.__flowBatch){var b=O.__flowBatchGroup;b||(b=O.__flowBatchGroup={});var e=[L.x,L.y,t/2];b[l]?b[l].push(e):b[l]=[e]}else R.fillStyle=l,R.arc(L.x,L.y,t/2,0,2*Math.PI,!0),R.fill();if(I){var A=22,E=A+"_"+p+"_"+H,T=k[E];if(T==$){var D=document.createElement("canvas");m.setCanvas(D,A,A);var i=D.getContext("2d"),v=A/2,d=v,K=v;m.translateAndScale(i,0,0,1),i.beginPath();var s=i.createRadialGradient(d,K,0,d,d,v);s.addColorStop(0,p),s.addColorStop(1,H),i.fillStyle=s,i.arc(d,K,v,0,2*Math.PI,!0),i.fill(),T=k[E]=D}var z=F/2;a.drawImage(R,T,L.x-z,L.y-z,F,F,h)}},l.$9e=function(){var j=this,f=j.dm().$3e;j._24I,f.forEach(function(E){j._24I[E._id]=E}),j.iv()};var _n=e.prepareRemove;e.prepareRemove=function(V){_n.call(this,V);var P=V._dataModel,N=P.$3e;if(N)for(var C=N.length,b=0;C>b;b++)if(N[b]===V){N.splice(b,1);break}},l.setFlowInterval=function(q){var G=this,Y=G.$11e;G.$11e=q,G.fp("flowInterval",Y,q),G.$7e!=$&&(clearInterval(G.$7e),delete G.$7e,G.enableFlow(q))},l.getFlowInterval=function(){return this.$11e},l.enableFlow=function(z){var x=this,S=x.dm(),f=S.$3e;x.$7e==$&&(f.forEach(function(g){var Z=x.getDataUI(g);t(Z)}),x.$7e=setInterval(function(){S.$3e.forEach(function(Y){s(x.getDataUI(Y))}),x.$9e()},z||x.$11e||50))},l.disableFlow=function(){var n=this;clearInterval(n.$7e),delete n.$7e;var W=n.dm().$3e;W&&n.$9e()};var le=function(){this.__flowBatchGroup={}},kc=function(C){var P=this.__flowBatchGroup;if(P){C.save();for(var X in P){C.fillStyle=X,C.beginPath();var S=P[X];S.forEach(function(f){C.moveTo(f[0],f[1]),C.arc(f[0],f[1],f[2],0,2*Math.PI,!0)}),C.fill()}C.restore()}};l.setFlowBatch=function(d){var p=this;!!p.__flowBatch!=!!d&&(p.__flowBatch=d,d?(p.addBottomPainter(le),p.addTopPainter(kc)):(p.removeBottomPainter(le),p.removeTopPainter(kc)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);