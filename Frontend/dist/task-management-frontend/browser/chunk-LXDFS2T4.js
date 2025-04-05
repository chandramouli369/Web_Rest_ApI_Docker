import{$ as S,H as h,I as v,J as x,K as o,Mb as b,P as w,Xb as O,e as E,f as k,g as c,gc as R,k as p,q as y,rb as C,s as D,t as m,yb as T,zb as V}from"./chunk-H2OYFBA6.js";var z={production:!1,apiUrl:"http://localhost:5296/api/Tasks"};var I=class r{constructor(t){this.http=t}apiUrl=`${z.apiUrl}`;getTasks(t){let e=new T;return t&&Object.keys(t).forEach(i=>{let n=t[i];n!=null&&n!==""&&(e=e.set(i,n.toString()))}),this.http.get(this.apiUrl,{params:e})}getTask(t){return this.http.get(`${this.apiUrl}/${t}`)}createTask(t){return this.http.post(this.apiUrl,t)}updateTask(t,e){return this.http.put(`${this.apiUrl}/${t}`,e)}deleteTask(t){return this.http.delete(`${this.apiUrl}/${t}`)}static \u0275fac=function(e){return new(e||r)(o(V))};static \u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})};function q(r){return r&&typeof r.connect=="function"&&!(r instanceof k)}var f=function(r){return r[r.REPLACED=0]="REPLACED",r[r.INSERTED=1]="INSERTED",r[r.MOVED=2]="MOVED",r[r.REMOVED=3]="REMOVED",r}(f||{}),X=new x("_ViewRepeater"),M=class{applyChanges(t,e,i,n,s){t.forEachOperation((l,a,_)=>{let d,u;if(l.previousIndex==null){let g=i(l,a,_);d=e.createEmbeddedView(g.templateRef,g.context,g.index),u=f.INSERTED}else _==null?(e.remove(a),u=f.REMOVED):(d=e.get(a),e.move(d,_),u=f.MOVED);s&&s({context:d?.context,operation:u,record:l})})}detach(){}};var F=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(t=!1,e,i=!0,n){this._multiple=t,this._emitChanges=i,this.compareWith=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new c,e&&e.length&&(t?e.forEach(s=>this._markSelected(s)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){this._verifyValueAssignment(t),t.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...t){this._verifyValueAssignment(t),t.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...t){this._verifyValueAssignment(t);let e=this.selected,i=new Set(t);t.forEach(s=>this._markSelected(s)),e.filter(s=>!i.has(this._getConcreteValue(s,i))).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(t,i))return i;return t}else return t}};var A=20,Ae=(()=>{class r{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new c,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=A){return this._platform.isBrowser?new E(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(m(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):p()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(D(s=>!s||n.indexOf(s)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,s)=>{this._scrollableContainsElement(s,e)&&i.push(s)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=O(i),s=e.getElementRef().nativeElement;do if(n==s)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return y(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||r)(o(S),o(b),o(C,8))}}static{this.\u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var P=20,Pe=(()=>{class r{constructor(e,i,n){this._platform=e,this._change=new c,this._changeListener=s=>{this._change.next(s)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,s=n.getBoundingClientRect(),l=-s.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,a=-s.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:l,left:a}}change(e=P){return e>0?this._change.pipe(m(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||r)(o(b),o(S),o(C,8))}}static{this.\u0275prov=h({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var j=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275mod=w({type:r})}static{this.\u0275inj=v({})}}return r})(),Ne=(()=>{class r{static{this.\u0275fac=function(i){return new(i||r)}}static{this.\u0275mod=w({type:r})}static{this.\u0275inj=v({imports:[R,j,R,j]})}}return r})();export{q as a,f as b,X as c,M as d,F as e,Ae as f,Pe as g,j as h,Ne as i,I as j};
