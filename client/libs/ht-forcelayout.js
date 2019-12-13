!function($,P){"use strict";var u="ht",R=u+".layout.",q=$[u]||module.parent.exports.ht,m=q.List,y=q.DataModel,L=q.Node,E=q.Edge,I=q.Group,v=Math,F=v.sqrt,p=v.random,J=v.max,b=v.min,D=function(K){return K*K};q.Default.getInternal().addMSMap({ms_force:function(q){q._interval=50,q._stepCount=10,q._motionLimit=.01,q._edgeRepulsion=.65,q._nodeRepulsion=.65,q._damper=1,q._maxMotion=0,q._motionRatio=0,q.init=function(u){var D=this;u instanceof y?D.dm=u:D.gv=u,D._nodeMap={},D._nodes=new m,D._edges=new m},q.start=function(){var v=this,Y=v.gv;if(!v._timer){var f=v.cdm=Y?Y.dm():v.dm;f.mm(v.handleDataModelChange,v),f.md(v.handleDataPropertyChange,v),Y&&Y.mp(v.handleGV,v),f.each(function(e){if(v.isVisible(e)&&v.isLayoutable(e)&&e instanceof L)if(v instanceof B){var k=e.p3();e.p3([k[0]+p(),k[1]+p(),k[2]+p()])}else k=e.p(),e.p(k.x+p(),k.y+p())}),v._timer=setInterval(function(){v.relax()},v._interval),v._damper=1}},q.stop=function(){var L=this;L._timer&&(L.cdm.umm(L.handleDataModelChange,L),L.cdm.umd(L.handleDataPropertyChange,L),L.gv&&L.gv.ump(L.handleGV,L),clearInterval(L._timer),delete L._timer,delete L.cdm)},q.handleGV=function(J){var U=this;if("dataModel"===J.property){var f=J.oldValue,Z=J.newValue;f&&(f.umm(U.handleDataModelChange,U),f.umd(U.handleDataPropertyChange,U)),this.cdm=Z,Z.mm(U.handleDataModelChange,U),Z.md(U.handleDataPropertyChange,U)}},q.relax=function(){var e=this;if(!(e._damper<.1&&e._maxMotion<e._motionLimit)){this.cdm.each(function(x){e.isVisible(x)&&(x instanceof E?e.addEdge(x):x instanceof L&&e.addNode(x))});for(var i,D,R=0,p=e._edges,w=e._nodes,_=w.size();R<e._stepCount;R++){for(p.each(e.relaxEdge,e),i=0;_>i;i++)for(D=0;_>D;D++)e.relaxNode(w.get(i),w.get(D));e.moveNode()}e._isAdjusting=1,w.each(function(L){L.fix||(L.p?L.v.p3(L.p):L.v.p(L.x,L.y))}),delete e._isAdjusting,e._nodeMap={},w.clear(),p.clear(),e.onRelaxed()}},q.onRelaxed=function(){},q.isRunning=function(){return!!this._timer},q.isVisible=function(o){return o.s("layoutable")===!1?!1:this.gv?this.gv.isVisible(o):!0},q.isLayoutable=function(n){if(n.s("layoutable")===!1)return!1;if(n instanceof I)return!1;var l=this;return l.gv?l.gv.isMovable(n)&&!l.gv.isSelected(n):!(l.cdm||l.dm).sm().co(n)},q.getNodeRepulsion=function(){return this._nodeRepulsion},q.setNodeRepulsion=function(X){this._nodeRepulsion=X,this._damper=1},q.getEdgeRepulsion=function(){return this._edgeRepulsion},q.setEdgeRepulsion=function(f){this._edgeRepulsion=f,this._damper=1},q.getStepCount=function(){return this._stepCount},q.setStepCount=function(t){this._stepCount=t,this._damper=1},q.getInterval=function(){return this._interval},q.setInterval=function(q){var o=this;o._interval!==q&&(o._interval=q,o._timer&&(clearInterval(o._timer),o._timer=setInterval(function(){o.relax()},q)))},q.handleDataPropertyChange=function(T){!this._isAdjusting&&this.isVisible(T.data)&&(this._damper=1)},q.handleDataModelChange=function(){this._damper=1},q.damp=function(){var R=this._maxMotion,G=this._damper;this._motionRatio<=.001&&((.2>R||R>1&&.9>G)&&G>.01?this._damper-=.01:.4>R&&G>.003?this._damper-=.003:G>1e-4&&(this._damper-=1e-4)),R<this._motionLimit&&(this._damper=0)}}}),q.layout.ForceLayout=function(t){this.init(t)},q.Default.def(R+"ForceLayout",P,{ms_force:1,getLimitBounds:function(){return this._limitBounds},setLimitBounds:function(t){this._limitBounds=t,this._damper=1},getNodeSize:function(L){var q=this.gv;return q&&q.getDataUIBounds?q.getDataUIBounds(L):L.getRect()},addNode:function(w){var G=this,V=G._nodeMap[w._id];if(V)return V;var R=w.p();V={v:w,x:R.x,y:R.y,dx:0,dy:0,fix:!G.isLayoutable(w),s:G.getNodeSize(w)};var a=V.s,z=F(D(a.width)+D(a.height))*G._nodeRepulsion;return V.r=1>z?100:z,G._nodeMap[w._id]=V,G._nodes.add(V),V},addEdge:function(Q){if(Q._40I&&Q._41I){var j=this,v=j.addNode(Q._40I),X=j.addNode(Q._41I),K={s:v,t:X};X=X.s,v=v.s;var T=X.width+v.width,x=X.height+v.height;K.length=F(T*T+x*x)*j._edgeRepulsion,K.length<=0&&(K.length=100),j._edges.add(K)}},relaxEdge:function(Q){var D=Q.t,A=Q.s,g=D.x-A.x,L=D.y-A.y,c=F(g*g+L*L),W=100*Q.length,P=.25*g/W*c,p=.25*L/W*c;D.dx=D.dx-P,D.dy=D.dy-p,A.dx=A.dx+P,A.dy=A.dy+p},relaxNode:function(V,$){if(V!==$){var I=0,l=0,S=V.x-$.x,e=V.y-$.y,a=S*S+e*e;0===a?(I=p(),l=p()):36e4>a&&(I=S/a,l=e/a);var A=V.r*$.r/400;I*=A,l*=A,V.dx+=I,V.dy+=l,$.dx-=I,$.dy-=l}},moveNode:function(){var r=this,w=r._limitBounds,i=r._maxMotion,L=0,Q=r._damper;r._nodes.each(function(q){if(!q.fix){var k=q.dx*Q,P=q.dy*Q;if(q.dx=k/2,q.dy=P/2,L=J(F(k*k+P*P),L),q.x+=J(-40,b(40,k)),q.y+=J(-40,b(40,P)),w){q.x<w.x&&(q.x=w.x,r.adjust(1,0)),q.y<w.y&&(q.y=w.y,r.adjust(0,1));var E=q.s;q.x+E.width>w.x+w.width&&(q.x=w.x+w.width-E.width,r.adjust(-1,0)),q.y+E.height>w.y+w.height&&(q.y=w.y+w.height-E.height,r.adjust(0,-1))}}}),r._maxMotion=L,r._motionRatio=L>0?i/L-1:0,r.damp()},adjust:function(e,n){var N=this._limitBounds;this._nodes.each(function(d){e>0?(!N||d.x+d.s.width+e<N.x+N.width)&&(d.x+=e):(!N||d.x+e>N.x)&&(d.x+=e),n>0?(!N||d.y+d.s.height+n<N.y+N.height)&&(d.y+=n):(!N||d.y+n>N.y)&&(d.y+=n)})}});var B=q.layout.Force3dLayout=function(N){this.init(N)};q.Default.def(R+"Force3dLayout",P,{ms_force:1,getNodeSize3d:function(y){return y.s3()},addNode:function(t){var A=this,R=A._nodeMap[t._id];if(R)return R;R={v:t,p:t.p3(),d:[0,0,0],fix:!A.isLayoutable(t),s:A.getNodeSize3d(t)};var $=R.s,r=q.Default.getDistance($)*A._nodeRepulsion;return R.r=1>r?100:r,A._nodeMap[t._id]=R,A._nodes.add(R),R},addEdge:function(P){if(P._40I&&P._41I){var $=this,r=$.addNode(P._40I),j=$.addNode(P._41I),m={s:r,t:j};j=j.s,r=r.s,m.length=F(D(j[0]+r[0])+D(j[1]+r[1])+D(j[2]+r[2]))*$._edgeRepulsion,m.length<=0&&(m.length=100),$._edges.add(m)}},relaxEdge:function(c){var W=c.t.p,Y=c.s.p,E=c.t.d,m=c.s.d,q=W[0]-Y[0],b=W[1]-Y[1],y=W[2]-Y[2],Z=F(q*q+b*b+y*y),$=100*c.length,N=.25*q/$*Z,Q=.25*b/$*Z,V=.25*y/$*Z;E[0]-=N,E[1]-=Q,E[2]-=V,m[0]+=N,m[1]+=Q,m[2]+=V},relaxNode:function($,Q){if($!==Q){var Z=$.p,C=Q.p,A=0,w=0,M=0,Y=Z[0]-C[0],c=Z[1]-C[1],U=Z[2]-C[2],D=Y*Y+c*c+U*U;0===D?(A=p(),w=p(),M=p()):216e6>D&&(A=Y/D,w=c/D,M=U/D);var e=$.r*Q.r/400,n=$.d,I=Q.d;A*=e,w*=e,M*=e,n[0]+=A,n[1]+=w,n[2]+=M,I[0]-=A,I[1]-=w,I[2]-=M}},moveNode:function(){var d=this,t=d._maxMotion,E=0,Q=d._damper;d._nodes.each(function(U){if(!U.fix){var D=U.p,c=U.d,v=c[0]*Q,i=c[1]*Q,$=c[2]*Q;c[0]=v/2,c[1]=i/2,c[2]=$/2,E=J(F(v*v+i*i+$*$),E),D[0]+=J(-40,b(40,v)),D[1]+=J(-40,b(40,i)),D[2]+=J(-40,b(40,$))}}),d._maxMotion=E,d._motionRatio=E>0?t/E-1:0,d.damp()}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);