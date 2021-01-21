!function(){function t(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,o=!1,s=void 0;try{for(var a,r=t[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(c){o=!0,s=c}finally{try{n||null==r.return||r.return()}finally{if(o)throw s}}return i}(t,i)||function(t,i){if(!t)return;if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,i)}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Q59p:function(e,n,s){"use strict";s.r(n),s.d(n,"SettingsModule",(function(){return at}));var a,r=s("ofXK"),c=s("tyNb"),l=s("fXoL"),u=((a=function(){function t(){i(this,t)}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=l.Fb({type:a,selectors:[["app-privacy"]],decls:2,vars:0,template:function(t,e){1&t&&(l.Rb(0,"p"),l.wc(1,"privacy works!"),l.Qb())},styles:[""]}),a),h=s("mrSG"),d=s("3Pt+"),p=s("iqUP"),b=s("EUQn"),f=s("kmnG"),m=s("qFsG"),v=s("bTqV");function _(t,e){1&t&&(l.Rb(0,"mat-error"),l.wc(1,"Enter a username"),l.Qb())}function g(t,e){1&t&&(l.Rb(0,"mat-hint"),l.Rb(1,"b"),l.wc(2,"Username is taken."),l.Qb(),l.Qb())}function y(t,e){1&t&&(l.Rb(0,"mat-hint"),l.Rb(1,"b"),l.wc(2,"Username is available."),l.Qb(),l.Qb())}var w,k=((w=function(){function t(e){i(this,t),this.authdata=e,this.usrname=new d.g({usernameFormControl:new d.d("",[d.s.required])}),this.ggbkl=Object(p.firestore)().doc("heicsa/".concat(this.authdata.heicsaUser.uId,"/userdata/public")).get().then((function(t){t.data()})),this.available=!1,this.hidden=!0}return o(t,[{key:"hUc",value:function(t){var e=this;Object(p.database)().ref("heicsa/usernames/"+t).once("value",(function(t){null===t.val()?(e.hidden=!1,e.available=!0):(e.hidden=!1,e.available=!1)})).then((function(){e.available&&e.changeUsername(t).then((function(t){}))}))}},{key:"changeUsername",value:function(t){return Object(h.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.database)().ref("heicsa/usernames/"+this.oldUsername).remove();case 3:return e.next=5,Object(p.database)().ref("heicsa/usernames/"+t).set(this.usernameSetData={name:this.authdata.heicsaUser.name,imgUrl:this.authdata.heicsaUser.imgUrl,uid:this.authdata.heicsaUser.uId});case 5:return e.next=7,Object(p.firestore)().doc("heicsa/".concat(this.authdata.heicsaUser.uId,"/userdata/public")).update({username:t});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})))}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||w)(l.Lb(b.a))},w.\u0275cmp=l.Fb({type:w,selectors:[["app-public"]],decls:12,vars:7,consts:[[1,"userName",3,"formGroup"],["appearance","outline","hideRequiredMarker",""],["formControlName","usernameFormControl","matInput","","name","usrnm","required","","type","text",1,"inputsize",3,"ngModel","ngModelChange"],[4,"ngIf"],["id","idbtnus"],["id","btnUs","mat-flat-button","",3,"click"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"mat-form-field",1),l.Rb(2,"mat-label"),l.wc(3,"Username"),l.Qb(),l.Rb(4,"label"),l.Rb(5,"input",2),l.Yb("ngModelChange",(function(t){return e.username=t})),l.Qb(),l.Qb(),l.uc(6,_,2,0,"mat-error",3),l.uc(7,g,3,0,"mat-hint",3),l.uc(8,y,3,0,"mat-hint",3),l.Qb(),l.Rb(9,"div",4),l.Rb(10,"button",5),l.Yb("click",(function(){return e.hUc(e.username)})),l.wc(11,"Save"),l.Qb(),l.Qb(),l.Qb()),2&t&&(l.hc("formGroup",e.usrname),l.Ab(1),l.rc("width",260,"px"),l.Ab(4),l.hc("ngModel",e.username),l.Ab(1),l.hc("ngIf",e.usrname.get("usernameFormControl").hasError("required")),l.Ab(1),l.hc("ngIf",!e.available&&!e.hidden),l.Ab(1),l.hc("ngIf",e.available&&!e.hidden))},directives:[d.n,d.h,f.c,f.g,d.c,m.b,d.m,d.f,d.r,r.k,v.a,f.b,f.f],styles:[""]}),w),O=s("rDax"),x=s("u47x"),I=s("FKr1"),R=s("vxfF"),C=s("8LU1"),P=s("FtGj"),M=s("0MNC"),T=s("nLfN"),j=s("+rOU"),E=s("XNiG"),L=s("1G5W"),Q=s("IzEk"),D=s("R0Ic"),U=s("cH1L"),A={tooltipState:Object(D.k)("state",[Object(D.h)("initial, void, hidden",Object(D.i)({opacity:0,transform:"scale(0)"})),Object(D.h)("visible",Object(D.i)({transform:"scale(1)"})),Object(D.j)("* => visible",Object(D.e)("200ms cubic-bezier(0, 0, 0.2, 1)",Object(D.f)([Object(D.i)({opacity:0,transform:"scale(0)",offset:0}),Object(D.i)({opacity:.5,transform:"scale(0.99)",offset:.5}),Object(D.i)({opacity:1,transform:"scale(1)",offset:1})]))),Object(D.j)("* => hidden",Object(D.e)("100ms cubic-bezier(0, 0, 0.2, 1)",Object(D.i)({opacity:0})))])},S=Object(T.f)({passive:!0});function N(t){return Error('Tooltip position "'.concat(t,'" is invalid.'))}var G,F,z,Y=new l.r("mat-tooltip-scroll-strategy"),X={provide:Y,deps:[O.a],useFactory:function(t){return function(){return t.scrollStrategies.reposition({scrollThrottle:20})}}},H=new l.r("mat-tooltip-default-options",{providedIn:"root",factory:function(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),V=((z=function(){function e(t,n,o,s,a,r,c,l,u,h,d){var p=this;i(this,e),this._overlay=t,this._elementRef=n,this._scrollDispatcher=o,this._viewContainerRef=s,this._ngZone=a,this._platform=r,this._ariaDescriber=c,this._focusMonitor=l,this._dir=h,this._defaultOptions=d,this._position="below",this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this.showDelay=this._defaultOptions.showDelay,this.hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new E.a,this._handleKeydown=function(t){p._isTooltipVisible()&&t.keyCode===P.f&&!Object(P.r)(t)&&(t.preventDefault(),t.stopPropagation(),p._ngZone.run((function(){return p.hide(0)})))},this._scrollStrategy=u,d&&(d.position&&(this.position=d.position),d.touchGestures&&(this.touchGestures=d.touchGestures)),a.runOutsideAngular((function(){n.nativeElement.addEventListener("keydown",p._handleKeydown)}))}return o(e,[{key:"ngAfterViewInit",value:function(){var t=this;this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Object(L.a)(this._destroyed)).subscribe((function(e){e?"keyboard"===e&&t._ngZone.run((function(){return t.show()})):t._ngZone.run((function(){return t.hide(0)}))}))}},{key:"ngOnDestroy",value:function(){var e=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),e.removeEventListener("keydown",this._handleKeydown),this._passiveListeners.forEach((function(i){var n=t(i,2),o=n[0],s=n[1];e.removeEventListener(o,s,S)})),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(e,this.message),this._focusMonitor.stopMonitoring(e)}},{key:"show",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.showDelay;if(!this.disabled&&this.message&&(!this._isTooltipVisible()||this._tooltipInstance._showTimeoutId||this._tooltipInstance._hideTimeoutId)){var i=this._createOverlay();this._detach(),this._portal=this._portal||new j.c(q,this._viewContainerRef),this._tooltipInstance=i.attach(this._portal).instance,this._tooltipInstance.afterHidden().pipe(Object(L.a)(this._destroyed)).subscribe((function(){return t._detach()})),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),this._tooltipInstance.show(e)}}},{key:"hide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.hideDelay;this._tooltipInstance&&this._tooltipInstance.hide(t)}},{key:"toggle",value:function(){this._isTooltipVisible()?this.hide():this.show()}},{key:"_isTooltipVisible",value:function(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}},{key:"_createOverlay",value:function(){var t=this;if(this._overlayRef)return this._overlayRef;var e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn(".mat-tooltip").withFlexibleDimensions(!1).withViewportMargin(8).withScrollableContainers(e);return i.positionChanges.pipe(Object(L.a)(this._destroyed)).subscribe((function(e){t._tooltipInstance&&e.scrollableViewProperties.isOverlayClipped&&t._tooltipInstance.isVisible()&&t._ngZone.run((function(){return t.hide(0)}))})),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:"mat-tooltip-panel",scrollStrategy:this._scrollStrategy()}),this._updatePosition(),this._overlayRef.detachments().pipe(Object(L.a)(this._destroyed)).subscribe((function(){return t._detach()})),this._overlayRef}},{key:"_detach",value:function(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}},{key:"_updatePosition",value:function(){var t=this._overlayRef.getConfig().positionStrategy,e=this._getOrigin(),i=this._getOverlayPosition();t.withPositions([Object.assign(Object.assign({},e.main),i.main),Object.assign(Object.assign({},e.fallback),i.fallback)])}},{key:"_getOrigin",value:function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;if("above"==i||"below"==i)t={originX:"center",originY:"above"==i?"top":"bottom"};else if("before"==i||"left"==i&&e||"right"==i&&!e)t={originX:"start",originY:"center"};else{if(!("after"==i||"right"==i&&e||"left"==i&&!e))throw N(i);t={originX:"end",originY:"center"}}var n=this._invertPosition(t.originX,t.originY);return{main:t,fallback:{originX:n.x,originY:n.y}}}},{key:"_getOverlayPosition",value:function(){var t,e=!this._dir||"ltr"==this._dir.value,i=this.position;if("above"==i)t={overlayX:"center",overlayY:"bottom"};else if("below"==i)t={overlayX:"center",overlayY:"top"};else if("before"==i||"left"==i&&e||"right"==i&&!e)t={overlayX:"end",overlayY:"center"};else{if(!("after"==i||"right"==i&&e||"left"==i&&!e))throw N(i);t={overlayX:"start",overlayY:"center"}}var n=this._invertPosition(t.overlayX,t.overlayY);return{main:t,fallback:{overlayX:n.x,overlayY:n.y}}}},{key:"_updateTooltipMessage",value:function(){var t=this;this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(Q.a)(1),Object(L.a)(this._destroyed)).subscribe((function(){t._tooltipInstance&&t._overlayRef.updatePosition()})))}},{key:"_setTooltipClass",value:function(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}},{key:"_invertPosition",value:function(t,e){return"above"===this.position||"below"===this.position?"top"===e?e="bottom":"bottom"===e&&(e="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:e}}},{key:"_setupPointerEnterEventsIfNeeded",value:function(){var t=this;!this._disabled&&this.message&&this._viewInitialized&&!this._passiveListeners.length&&(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",function(){t._setupPointerExitEventsIfNeeded(),t.show()}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",function(){t._setupPointerExitEventsIfNeeded(),clearTimeout(t._touchstartTimeout),t._touchstartTimeout=setTimeout((function(){return t.show()}),500)}])),this._addListeners(this._passiveListeners))}},{key:"_setupPointerExitEventsIfNeeded",value:function(){var t,e=this;if(!this._pointerExitEventsInitialized){this._pointerExitEventsInitialized=!0;var i=[];if(this._platformSupportsMouseEvents())i.push(["mouseleave",function(){return e.hide()}]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();var n=function(){clearTimeout(e._touchstartTimeout),e.hide(e._defaultOptions.touchendHideDelay)};i.push(["touchend",n],["touchcancel",n])}this._addListeners(i),(t=this._passiveListeners).push.apply(t,i)}}},{key:"_addListeners",value:function(e){var i=this;e.forEach((function(e){var n=t(e,2),o=n[0],s=n[1];i._elementRef.nativeElement.addEventListener(o,s,S)}))}},{key:"_platformSupportsMouseEvents",value:function(){return!this._platform.IOS&&!this._platform.ANDROID}},{key:"_disableNativeGesturesIfNecessary",value:function(){var t=this.touchGestures;if("off"!==t){var e=this._elementRef.nativeElement,i=e.style;("on"===t||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),"on"!==t&&e.draggable||(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}},{key:"position",get:function(){return this._position},set:function(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(),this._tooltipInstance&&this._tooltipInstance.show(0),this._overlayRef.updatePosition()))}},{key:"disabled",get:function(){return this._disabled},set:function(t){this._disabled=Object(C.b)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}},{key:"message",get:function(){return this._message},set:function(t){var e=this;this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message),this._message=null!=t?(""+t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular((function(){Promise.resolve().then((function(){e._ariaDescriber.describe(e._elementRef.nativeElement,e.message)}))})))}},{key:"tooltipClass",get:function(){return this._tooltipClass},set:function(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}}]),e}()).\u0275fac=function(t){return new(t||z)(l.Lb(O.a),l.Lb(l.l),l.Lb(R.b),l.Lb(l.Q),l.Lb(l.A),l.Lb(T.a),l.Lb(x.c),l.Lb(x.h),l.Lb(Y),l.Lb(U.b,8),l.Lb(H,8))},z.\u0275dir=l.Gb({type:z,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],inputs:{showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],position:["matTooltipPosition","position"],disabled:["matTooltipDisabled","disabled"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]}),z),q=((F=function(){function t(e,n){i(this,t),this._changeDetectorRef=e,this._breakpointObserver=n,this._visibility="initial",this._closeOnInteraction=!1,this._onHide=new E.a,this._isHandset=this._breakpointObserver.observe(M.b.Handset)}return o(t,[{key:"show",value:function(t){var e=this;this._hideTimeoutId&&(clearTimeout(this._hideTimeoutId),this._hideTimeoutId=null),this._closeOnInteraction=!0,this._showTimeoutId=setTimeout((function(){e._visibility="visible",e._showTimeoutId=null,e._markForCheck()}),t)}},{key:"hide",value:function(t){var e=this;this._showTimeoutId&&(clearTimeout(this._showTimeoutId),this._showTimeoutId=null),this._hideTimeoutId=setTimeout((function(){e._visibility="hidden",e._hideTimeoutId=null,e._markForCheck()}),t)}},{key:"afterHidden",value:function(){return this._onHide.asObservable()}},{key:"isVisible",value:function(){return"visible"===this._visibility}},{key:"ngOnDestroy",value:function(){this._onHide.complete()}},{key:"_animationStart",value:function(){this._closeOnInteraction=!1}},{key:"_animationDone",value:function(t){var e=t.toState;"hidden"!==e||this.isVisible()||this._onHide.next(),"visible"!==e&&"hidden"!==e||(this._closeOnInteraction=!0)}},{key:"_handleBodyInteraction",value:function(){this._closeOnInteraction&&this.hide(0)}},{key:"_markForCheck",value:function(){this._changeDetectorRef.markForCheck()}}]),t}()).\u0275fac=function(t){return new(t||F)(l.Lb(l.h),l.Lb(M.a))},F.\u0275cmp=l.Fb({type:F,selectors:[["mat-tooltip-component"]],hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){1&t&&l.Yb("click",(function(){return e._handleBodyInteraction()}),!1,l.lc),2&t&&l.rc("zoom","visible"===e._visibility?1:null)},decls:3,vars:7,consts:[[1,"mat-tooltip",3,"ngClass"]],template:function(t,e){var i;1&t&&(l.Rb(0,"div",0),l.Yb("@state.start",(function(){return e._animationStart()}))("@state.done",(function(t){return e._animationDone(t)})),l.dc(1,"async"),l.wc(2),l.Qb()),2&t&&(l.Db("mat-tooltip-handset",null==(i=l.ec(1,5,e._isHandset))?null:i.matches),l.hc("ngClass",e.tooltipClass)("@state",e._visibility),l.Ab(2),l.xc(e.message))},directives:[r.i],pipes:[r.b],styles:[".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],encapsulation:2,data:{animation:[A.tooltipState]},changeDetection:0}),F),Z=((G=function t(){i(this,t)}).\u0275mod=l.Jb({type:G}),G.\u0275inj=l.Ib({factory:function(t){return new(t||G)},providers:[X],imports:[[x.a,r.c,O.d,I.g],I.g,R.a]}),G),B=s("NFeN"),J=s("bv9b");function K(t,e){1&t&&(l.Rb(0,"mat-icon"),l.wc(1,"arrow_back"),l.Qb())}function W(t,e){1&t&&(l.Rb(0,"mat-icon"),l.wc(1,"close"),l.Qb())}function $(t,e){1&t&&(l.Rb(0,"div",8),l.Rb(1,"div"),l.Mb(2,"mat-progress-bar",9),l.Qb(),l.Qb())}function tt(t,e){if(1&t&&(l.Rb(0,"div",10),l.Rb(1,"div",11),l.Rb(2,"div",12),l.Rb(3,"div"),l.Mb(4,"img",13),l.Rb(5,"div",14),l.Rb(6,"span",15),l.wc(7),l.Qb(),l.Rb(8,"span",16),l.wc(9),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(10,"div",17),l.Rb(11,"nav"),l.Rb(12,"a",18),l.wc(13,"Privacy"),l.Qb(),l.Rb(14,"a",19),l.wc(15,"Public"),l.Qb(),l.Rb(16,"a",20),l.wc(17,"Privacy"),l.Qb(),l.Rb(18,"a",20),l.wc(19,"Public"),l.Qb(),l.Rb(20,"a",20),l.wc(21,"Privacy"),l.Qb(),l.Rb(22,"a",20),l.wc(23,"Public"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Rb(24,"div",21),l.Mb(25,"router-outlet"),l.Qb(),l.Qb()),2&t){var i=l.cc();l.Ab(4),l.hc("src",i.authdata.heicsaUser.imgUrl,l.nc),l.Ab(3),l.xc(i.authdata.heicsaUser.name),l.Ab(2),l.xc(i.authdata.heicsaUser.email)}}var et,it,nt,ot=[{path:"",component:(et=function(){function t(e,n,o,s){i(this,t),this.as=e,this.authdata=n,this.router=o,this.route=s}return o(t,[{key:"closeBack",value:function(){this.authdata.c_b?this.router.navigateByUrl("/home"):window.history.back(),this.authdata.c_b=!1}},{key:"ngOnInit",value:function(){}}]),t}(),et.\u0275fac=function(t){return new(t||et)(l.Lb(b.b),l.Lb(b.a),l.Lb(c.f),l.Lb(c.a))},et.\u0275cmp=l.Fb({type:et,selectors:[["app-settings"]],decls:15,vars:4,consts:[[1,"full"],[1,"parent"],[1,"close"],[2,"display","flex","align-items","center"],["mat-icon-button","",3,"click"],[3,"ngIf"],[1,"text"],["mat-icon-button","","matTooltip","Log Out",3,"click"],[1,"width"],["color","primary","mode","indeterminate"],[1,"p_content"],[2,"width","29%"],[1,"User"],[3,"src"],[1,"nameEmail"],["id","name"],["id","email"],[1,"settingsRouterLinks"],["routerLink","/settings/privacy","routerLinkActive","active","mat-ripple",""],["routerLink","/settings/public","routerLinkActive","active","mat-ripple",""],["routerLinkActive","active","mat-ripple",""],["id","settingsRouterOutlet"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Rb(2,"div",2),l.Rb(3,"div",3),l.Rb(4,"button",4),l.Yb("click",(function(){return e.closeBack()})),l.uc(5,K,2,0,"ng-template",5),l.uc(6,W,2,0,"ng-template",5),l.Qb(),l.Rb(7,"div",6),l.Rb(8,"span"),l.wc(9,"Settings"),l.Qb(),l.Qb(),l.Qb(),l.Rb(10,"button",7),l.Yb("click",(function(){return e.as.SignOut()})),l.Rb(11,"mat-icon"),l.wc(12,"power_settings_new"),l.Qb(),l.Qb(),l.Qb(),l.uc(13,$,3,0,"ng-template",5),l.uc(14,tt,26,3,"ng-template",5),l.Qb(),l.Qb()),2&t&&(l.Ab(5),l.hc("ngIf",!e.authdata.c_b),l.Ab(1),l.hc("ngIf",e.authdata.c_b),l.Ab(7),l.hc("ngIf",e.authdata.homeInitialize),l.Ab(1),l.hc("ngIf",!e.authdata.homeInitialize))},directives:[v.a,r.k,V,B.a,J.a,c.h,c.g,I.l,c.j],styles:[".full[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;background-color:#f5f5f5;padding:60px 100px 100px 80px}.parent[_ngcontent-%COMP%]{width:100%;height:100%}.close[_ngcontent-%COMP%]{text-align:left;align-items:center}.close[_ngcontent-%COMP%], .p_content[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}.p_content[_ngcontent-%COMP%]{margin-left:90px;height:100%}mat-icon[_ngcontent-%COMP%]{transform:scale(1.5)}.text[_ngcontent-%COMP%]{margin-left:20px;font-size:30px}.User[_ngcontent-%COMP%]{width:360px;justify-content:space-between;margin-top:30px;cursor:default}.User[_ngcontent-%COMP%], .User[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.nameEmail[_ngcontent-%COMP%]{margin-left:18px;display:inline-grid;display:-moz-inline-grid}#email[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-size:12px;line-height:16px;vertical-align:baseline;letter-spacing:normal;word-spacing:0;margin:0;padding:0;font-weight:400;font-style:normal;font-variant:normal;text-transform:none;-webkit-text-decoration:none solid rgba(0,0,0,.87);text-decoration:none solid rgba(0,0,0,.87);text-align:start;text-indent:0}.User[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:20px}#name[_ngcontent-%COMP%]{font-family:Roboto;font-size:18px;line-height:24px;vertical-align:baseline;letter-spacing:normal;word-spacing:0;margin:0 0 2px;padding:0;font-weight:400;font-style:normal;font-variant:normal;text-transform:none;-webkit-text-decoration:none solid #000;text-decoration:none solid #000;text-align:start;text-indent:0}img[_ngcontent-%COMP%]{max-width:60px;max-height:60px;border-radius:50%}.width[_ngcontent-%COMP%]{height:90%;display:flex;justify-content:center;align-items:center;padding-left:100px;padding-right:100px}.width[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:50%}.settingsRouterLinks[_ngcontent-%COMP%]{margin-top:30px;width:360px;overflow-y:scroll}.settingsRouterLinks[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%]{max-height:440px;display:flex;flex-direction:column}.settingsRouterLinks[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:20px;border-radius:6px;margin-left:20%;font-size:21px}#settingsRouterOutlet[_ngcontent-%COMP%]{width:71%;display:flex;justify-content:center;align-items:center}#idbtnus[_ngcontent-%COMP%]{padding-top:14px}a[_ngcontent-%COMP%]{color:#000}a[_ngcontent-%COMP%], a.active[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}a.active[_ngcontent-%COMP%]{color:#5757ff;background-color:#ececec}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#d3d3d3!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4169e1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4169e1!important;opacity:.8!important}  .mat-form-field-label{color:rgba(0,0,0,.6)!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4169e1!important}[_ngcontent-%COMP%]::-webkit-scrollbar{width:9px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c9c9c9;border-radius:4px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#929292}"]}),et),children:[{path:"public",component:k},{path:"privacy",component:u}]}],st=((nt=function t(){i(this,t)}).\u0275mod=l.Jb({type:nt}),nt.\u0275inj=l.Ib({factory:function(t){return new(t||nt)},imports:[[c.i.forChild(ot)],c.i]}),nt),at=((it=function t(){i(this,t)}).\u0275mod=l.Jb({type:it}),it.\u0275inj=l.Ib({factory:function(t){return new(t||it)},imports:[[r.c,st,I.m,v.b,m.c,B.b,J.b,f.e,Z,d.i,d.q]]}),it)}}])}();