(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{uyvd:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return st}));var i=n("ofXK"),o=n("tyNb"),a=n("fXoL"),r=n("EUQn"),c=n("bTqV"),s=n("NFeN");function l(t,e){if(1&t&&(a.Rb(0,"div"),a.Rb(1,"div",8),a.Rb(2,"div"),a.wc(3),a.Qb(),a.Qb(),a.Qb()),2&t){const t=e.$implicit,n=e.index;a.Ab(3),a.zc("",t.st," ",n,"")}}let d=(()=>{class t{constructor(){this.items=[{st:"This is a demo"},{st:"this is another demo"}],this.adb=!1}ngOnInit(){}log(t){console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-search"]],decls:12,vars:1,consts:[["id","wrap"],[1,"input"],[1,"input_P"],["type","text",3,"focus"],["input",""],[1,"autoComplete"],[4,"ngFor","ngForOf"],["mat-icon-button",""],[1,"autoCitems"]],template:function(t,e){1&t&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"div",2),a.Rb(3,"label"),a.Rb(4,"input",3,4),a.Yb("focus",(function(){return e.adb=!0})),a.Qb(),a.Qb(),a.Rb(6,"div",5),a.uc(7,l,4,2,"div",6),a.Qb(),a.Qb(),a.Rb(8,"div"),a.Rb(9,"button",7),a.Rb(10,"mat-icon"),a.wc(11,"search"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.Ab(7),a.hc("ngForOf",e.items))},directives:[i.j,c.a,s.a],styles:[".input[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:5px 5px 5px 0;position:relative;background-color:#0ff;border-radius:9px}.input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{transition:width .6s}input[_ngcontent-%COMP%]{width:90%;height:100%;font-size:20px;outline:none;border:none;background-color:transparent;padding-left:10px}.autoComplete[_ngcontent-%COMP%], .input_P[_ngcontent-%COMP%]{width:100%;transition:width .6s}.autoComplete[_ngcontent-%COMP%]{visibility:hidden;position:absolute;background-color:#0ff;border-bottom-right-radius:9px;border-bottom-left-radius:9px;z-index:200}.autoCitems[_ngcontent-%COMP%]{width:90%;padding:7px;font-size:18px;margin:3px}.autoCitems[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;height:30px;border-radius:4px;transition:height .3s}.autoCitems[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]{background-color:#09d1d1}.input_P[_ngcontent-%COMP%]:focus-within   .autoComplete[_ngcontent-%COMP%]{visibility:visible}"]}),t})();var g=n("mrSG"),b=n("iqUP"),p=n("dNgK"),h=n("FKr1"),u=n("kmnG"),m=n("qFsG"),f=n("3Pt+");let v=(()=>{class t{constructor(){this.dropped=new a.n,this.hovered=new a.n}onDrop(t){t.preventDefault(),this.dropped.emit(t.dataTransfer.files[0]),this.hovered.emit(!1)}onDragOver(t){t.preventDefault(),this.hovered.emit(!0)}onDragLeave(t){t.preventDefault(),this.hovered.emit(!1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Gb({type:t,selectors:[["","dropzone",""]],hostBindings:function(t,e){1&t&&a.Yb("drop",(function(t){return e.onDrop(t)}))("dragover",(function(t){return e.onDragOver(t)}))("dragleave",(function(t){return e.onDragLeave(t)}))},outputs:{dropped:"dropped",hovered:"hovered"}}),t})();var _=n("bv9b");function x(t,e){if(1&t){const t=a.Sb();a.Rb(0,"div",3),a.Yb("click",(function(){return a.mc(t),a.cc().postIdGenrate()})),a.Rb(1,"span"),a.wc(2,"Add a new post..."),a.Qb(),a.Qb()}}function C(t,e){1&t&&a.Mb(0,"div")}function R(t,e){1&t&&(a.Rb(0,"mat-icon"),a.wc(1,"lock"),a.Qb())}function M(t,e){1&t&&(a.Rb(0,"mat-icon"),a.wc(1,"public"),a.Qb())}function k(t,e){1&t&&(a.Rb(0,"div",26),a.Mb(1,"mat-progress-bar",27),a.Qb())}function w(t,e){if(1&t){const t=a.Sb();a.Rb(0,"div"),a.wc(1),a.Rb(2,"button",28),a.Yb("click",(function(){return a.mc(t),a.cc(2).task.cancel()})),a.wc(3,"Cancel"),a.Qb(),a.Qb()}if(2&t){const t=a.cc(2);a.Ab(1),a.yc(" ",t.percentage," "),a.Ab(1),a.hc("disabled",t.running)}}function P(t,e){if(1&t&&(a.Rb(0,"div",29),a.Mb(1,"mat-progress-bar",30),a.Qb()),2&t){const t=a.cc(2);a.Ab(1),a.hc("value",t.percentage)}}function O(t,e){if(1&t){const t=a.Sb();a.Rb(0,"div",4),a.Rb(1,"div",5),a.Rb(2,"div",6),a.Rb(3,"div",7),a.Rb(4,"button",8),a.Yb("click",(function(){a.mc(t);const e=a.cc();return e.priv=!e.priv})),a.uc(5,C,1,0,"div",9),a.uc(6,R,2,0,"ng-template",null,10,a.vc),a.uc(8,M,2,0,"ng-template",null,11,a.vc),a.Qb(),a.Qb(),a.uc(10,k,2,0,"div",12),a.Rb(11,"button",8),a.Yb("click",(function(){return a.mc(t),a.cc().a=!0})),a.Rb(12,"mat-icon"),a.wc(13,"close"),a.Qb(),a.Qb(),a.Qb(),a.Rb(14,"div",13),a.Rb(15,"mat-form-field",14),a.Rb(16,"mat-label"),a.wc(17,"Write something.."),a.Qb(),a.Rb(18,"label"),a.Rb(19,"textarea",15),a.Yb("ngModelChange",(function(e){return a.mc(t),a.cc().Caption=e})),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(20,"div",16),a.Rb(21,"div",17),a.Yb("dropped",(function(e){return a.mc(t),a.cc().onDrop(e)}))("hovered",(function(e){return a.mc(t),a.cc().toggleHover(e)})),a.Rb(22,"p"),a.wc(23,"Drag and Drop a File"),a.Qb(),a.Rb(24,"div",18),a.Rb(25,"label",19),a.Rb(26,"input",20),a.Yb("change",(function(e){return a.mc(t),a.cc().onDrop(e.target.files[0])})),a.Qb(),a.Rb(27,"span",21),a.Rb(28,"span",22),a.Rb(29,"mat-icon"),a.wc(30,"upload"),a.Qb(),a.Qb(),a.Rb(31,"span",19),a.wc(32," or choose a file\u2026 "),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.uc(33,w,4,2,"div",23),a.Qb(),a.uc(34,P,2,1,"div",24),a.Rb(35,"button",25),a.Yb("click",(function(){return a.mc(t),a.cc().triggerPosting()})),a.wc(36,"Post"),a.Qb(),a.Qb(),a.Qb()}if(2&t){const t=a.kc(7),e=a.kc(9),n=a.cc();a.Ab(5),a.hc("ngIf",n.priv)("ngIfThen",t)("ngIfElse",e),a.Ab(5),a.hc("ngIf",n.Loader),a.Ab(9),a.hc("ngModel",n.Caption),a.Ab(2),a.Db("hovering",n.isHovering),a.Ab(12),a.hc("ngIf",n.running),a.Ab(1),a.hc("ngIf",n.running)}}let y=(()=>{class t{constructor(t){this.snackBar=t,this.a=!0,this.user=Object(b.auth)().currentUser,this.priv=!1,this.hasImg=!1,this.i=0,this.path="pathNull",this.running=!1}toggleHover(t){this.isHovering=t}onDrop(t){console.log("ondrop"),this.file=t,this.startUpload()}postIdGenrate(){this.a=!1,this.i=0,this.pID=Date.now()+Object(b.firestore)().collection(`heicsa/${this.user.uid}/posts/`).doc().id,console.log(this.pID),this.abcID=this.pID}triggerPosting(){return Object(g.a)(this,void 0,void 0,(function*(){console.log("trigger posting");try{this.Loader=!0,console.log(this.picArray),this.ap={time:Date.now(),priv:this.priv,hasImg:this.hasImg,postId:this.abcID,ownerDetails:{Name:this.user.displayName,accVerified:this.user.emailVerified,uIdRef:"",postedTo:{ifGroup:!1,privGroup:!1,group:{groupName:"",groupId:""},selfPost:!1,friendsWall:{friendsName:"",closeFriend:!1}}},postDetails:{caption:this.Caption,postedPicUrl:this.picArray,action:{}}},yield Object(b.firestore)().doc(`heicsa/${this.user.uid}/posts/${this.ap.postId}`).set(this.ap,{merge:!0}),console.log("posted successfully"),this.snackBar.open("Posted Successfully","ok",{duration:2e3}),console.log(this.picArray),this.Loader=!1,this.a=!0}catch(t){this.Loader=!1,this.snackBar.open(t,"ok",{duration:2e3}),console.log(t)}}))}makeConst(t){var e="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_^%$#@",i=n.length;for(let o=0;o<t;o++)e+=n.charAt(Math.floor(Math.random()*i));return e}makeid(t){var e="";this.charac=this.makeConst(62);const n=this.charac.length;for(let i=0;i<t;i++)e+=this.charac.charAt(Math.floor(Math.random()*n));return e}startUpload(){try{console.log("Start upload"),this.path=this.priv?`heicsa/${this.user.uid}/privateposts/${this.abcID}/${Date.now()}_${this.makeid(5)}_${this.makeid(4)}`:`heicsa/2posts/${this.abcID}/${Date.now()}_${this.makeid(5)}_${this.makeid(4)}`,this.pathString=this.path,console.log(this.path.toString()),this.task=Object(b.storage)().ref(this.pathString).put(this.file),this.task.then(()=>{Object(b.storage)().ref(this.pathString).getDownloadURL().then(t=>{this.hasImg=!0,null==this.picArray?this.picArray=[{downloadURL:t.toString(),storagePath:this.pathString.toString()}]:this.picArray.push({downloadURL:t.toString(),storagePath:this.pathString.toString()})})}),this.task.on("state_changed",t=>{switch(this.percentage=t.bytesTransferred/t.totalBytes*100,t.state){case b.storage.TaskState.PAUSED:this.running=!1,console.log("Upload is paused");break;case b.storage.TaskState.RUNNING:this.running=!0,console.log("Upload is running");break;case b.storage.TaskState.ERROR:case b.storage.TaskState.CANCELED:this.running=!1,Object(b.storage)().ref(this.pathString).delete();break;case b.storage.TaskState.SUCCESS:this.running=!1,console.log("Upload was successful")}})}catch(t){console.log(t.message)}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(p.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-new-post"]],decls:4,vars:2,consts:[[1,"newPostParent"],["matRipple","",3,"click",4,"ngIf","ngIfElse"],["newPostUp",""],["matRipple","",3,"click"],[1,"parent_2"],[1,"container"],[1,"container_close"],[1,"priv"],["mat-icon-button","",3,"click"],[4,"ngIf","ngIfThen","ngIfElse"],["private",""],["public",""],["class","padding",4,"ngIf"],[1,"textArea"],[1,"width"],["matInput","","placeholder","Enter your text here...",3,"ngModel","ngModelChange"],[1,"attach"],["dropzone","",1,"dropzone",3,"dropped","hovered"],[1,"file"],[1,"file-label"],["type","file",1,"file-input",3,"change"],[1,"file-cta"],[1,"file-icon"],[4,"ngIf"],["id","margin",4,"ngIf"],["mat-button","",3,"click"],[1,"padding"],["color","primary","mode","indeterminate"],["mat-button","",1,"button","is-danger",3,"disabled","click"],["id","margin"],["mode","determinate","color","warn",3,"value"]],template:function(t,e){if(1&t&&(a.Rb(0,"div",0),a.uc(1,x,3,0,"div",1),a.Qb(),a.uc(2,O,37,9,"ng-template",null,2,a.vc)),2&t){const t=a.kc(3);a.Ab(1),a.hc("ngIf",e.a)("ngIfElse",t)}},directives:[i.k,h.l,c.a,s.a,u.c,u.g,m.b,f.c,f.m,f.p,v,_.a],styles:[".newPostParent[_ngcontent-%COMP%]{width:40%;background-color:#f5f5f5;border-radius:10px}.newPostParent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:20px 10px}.newPostParent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{cursor:pointer}.parent_2[_ngcontent-%COMP%]{min-width:90%;min-height:90%;background-color:rgba(0,0,0,.483);position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center}#blah[_ngcontent-%COMP%]{max-height:250px;max-width:350px}.container[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:10px;min-height:400px;width:500px;overflow:hidden}.image[_ngcontent-%COMP%], .priv[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.image[_ngcontent-%COMP%]{width:100%}.container_close[_ngcontent-%COMP%]{width:calc(100% - 10px);height:50px;padding:5px;display:flex;justify-content:space-between;align-items:center}.padding[_ngcontent-%COMP%]{width:100%;padding-left:20px;padding-right:20px}.textArea[_ngcontent-%COMP%]{text-align:center}.width[_ngcontent-%COMP%]{width:85%}.attach[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-bottom:10px}.dropzone[_ngcontent-%COMP%]{border:2px solid #454648;border-radius:10px}.attach[_ngcontent-%COMP%], .dropzone[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.attach[_ngcontent-%COMP%]{flex-direction:column}#margin[_ngcontent-%COMP%]{margin:10px}"]}),t})();var Q=n("GU7r"),I=n("8LU1"),D=n("R1ws"),A=n("u47x");const L=["thumbContainer"],j=["toggleBar"],S=["input"],U=function(){return{enterDuration:150}},E=["*"],T=new a.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let Y=0;const z={provide:f.k,useExisting:Object(a.U)(()=>B),multi:!0};class q{constructor(t,e){this.source=t,this.checked=e}}class F{constructor(t){this._elementRef=t}}const N=Object(h.t)(Object(h.p)(Object(h.q)(Object(h.r)(F)),"accent"));let B=(()=>{class t extends N{constructor(t,e,n,i,o,r){super(t),this._focusMonitor=e,this._changeDetectorRef=n,this.defaults=o,this._animationMode=r,this._onChange=t=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++Y,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new a.n,this.toggleChange=new a.n,this.tabIndex=parseInt(i)||0}get required(){return this._required}set required(t){this._required=Object(I.b)(t)}get checked(){return this._checked}set checked(t){this._checked=Object(I.b)(t),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{"keyboard"===t||"program"===t?this._inputElement.nativeElement.focus():t||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(t){t.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(t){t.stopPropagation()}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}focus(t){this._focusMonitor.focusVia(this._inputElement,"keyboard",t)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new q(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(a.l),a.Lb(A.h),a.Lb(a.h),a.Wb("tabindex"),a.Lb(T),a.Lb(D.a,8))},t.\u0275cmp=a.Fb({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(t,e){var n;1&t&&(a.Ac(L,!0),a.Ac(j,!0),a.Ac(S,!0)),2&t&&(a.jc(n=a.Zb())&&(e._thumbEl=n.first),a.jc(n=a.Zb())&&(e._thumbBarEl=n.first),a.jc(n=a.Zb())&&(e._inputElement=n.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(t,e){2&t&&(a.Ub("id",e.id),a.Bb("tabindex",e.disabled?null:-1)("aria-label",null)("aria-labelledby",null),a.Db("mat-checked",e.checked)("mat-disabled",e.disabled)("mat-slide-toggle-label-before","before"==e.labelPosition)("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[a.zb([z]),a.xb],ngContentSelectors:E,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(t,e){if(1&t&&(a.gc(),a.Rb(0,"label",0,1),a.Rb(2,"div",2,3),a.Rb(4,"input",4,5),a.Yb("change",(function(t){return e._onChangeEvent(t)}))("click",(function(t){return e._onInputClick(t)})),a.Qb(),a.Rb(6,"div",6,7),a.Mb(8,"div",8),a.Rb(9,"div",9),a.Mb(10,"div",10),a.Qb(),a.Qb(),a.Qb(),a.Rb(11,"span",11,12),a.Yb("cdkObserveContent",(function(){return e._onLabelTextChange()})),a.Rb(13,"span",13),a.wc(14,"\xa0"),a.Qb(),a.fc(15),a.Qb(),a.Qb()),2&t){const t=a.kc(1),n=a.kc(12);a.Bb("for",e.inputId),a.Ab(2),a.Db("mat-slide-toggle-bar-no-side-margin",!n.textContent||!n.textContent.trim()),a.Ab(2),a.hc("id",e.inputId)("required",e.required)("tabIndex",e.tabIndex)("checked",e.checked)("disabled",e.disabled),a.Bb("name",e.name)("aria-checked",e.checked.toString())("aria-label",e.ariaLabel)("aria-labelledby",e.ariaLabelledby),a.Ab(5),a.hc("matRippleTrigger",t)("matRippleDisabled",e.disableRipple||e.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",a.ic(17,U))}},directives:[h.l,Q.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),t})(),G=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)}}),t})(),$=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[G,h.m,h.g,Q.c],G,h.g]}),t})(),J=(()=>{class t{constructor(t,e){this.router=t,this.authdata=e,this.Dark=!0}navigate(){this.authdata.c_b=!1,this.router.navigateByUrl("/settings")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.f),a.Lb(r.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-menu"]],decls:32,vars:3,consts:[[1,"Menu_parent"],[1,"UserInfo"],["width","50px","height","50px","alt","no_profile_image",3,"src"],[1,"menu_options"],["matRipple",""],[1,"text"],[1,"menu_options",3,"click"],["matRipple","",1,"mode"],["src","assets/moon-solid.svg","alt","moon svg"],[3,"checked"],["matRipple","",3,"click"]],template:function(t,e){1&t&&(a.Rb(0,"div",0),a.Rb(1,"div"),a.Rb(2,"div",1),a.Rb(3,"div"),a.Mb(4,"img",2),a.Qb(),a.Rb(5,"div"),a.Rb(6,"span"),a.wc(7),a.Qb(),a.Qb(),a.Qb(),a.Rb(8,"div",3),a.Rb(9,"div",4),a.Rb(10,"mat-icon"),a.wc(11,"save"),a.Qb(),a.Rb(12,"div",5),a.Rb(13,"span"),a.wc(14,"Saved"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(15,"div",6),a.Yb("click",(function(){return e.Dark=!e.Dark})),a.Rb(16,"div",7),a.Rb(17,"div"),a.Rb(18,"mat-icon"),a.Mb(19,"img",8),a.Qb(),a.Rb(20,"div",5),a.Rb(21,"span"),a.wc(22,"Dark Mode"),a.Qb(),a.Qb(),a.Qb(),a.Rb(23,"div"),a.Mb(24,"mat-slide-toggle",9),a.Qb(),a.Qb(),a.Qb(),a.Rb(25,"div",3),a.Rb(26,"div",10),a.Yb("click",(function(){return e.navigate()})),a.Rb(27,"mat-icon"),a.wc(28,"settings"),a.Qb(),a.Rb(29,"div",5),a.Rb(30,"span"),a.wc(31,"Settings"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&t&&(a.Ab(4),a.hc("src",e.authdata.heicsaUser.imgUrl,a.nc),a.Ab(3),a.xc(e.authdata.heicsaUser.name),a.Ab(17),a.hc("checked",e.Dark))},directives:[h.l,s.a,B],styles:[".Menu_parent[_ngcontent-%COMP%]{height:100%;width:98%;padding:8px}.Menu_parent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:calc(100% - 16px)}.UserInfo[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;font-size:20px}.UserInfo[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:50%}.UserInfo[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:8px}.UserInfo[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:0}.UserInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.menu_options[_ngcontent-%COMP%]{padding:5px 10px;height:60px;width:calc(100% - 16px)}.menu_options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;cursor:pointer;border-radius:6px;height:50px}.mode[_ngcontent-%COMP%]{justify-content:space-between}.menu_options[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;padding:7px 0;height:50px}mat-icon[_ngcontent-%COMP%]{transform:scale(1.4);margin-right:13px;margin-left:13px}.text[_ngcontent-%COMP%]{font-size:21px}a[_ngcontent-%COMP%]{text-decoration:none;color:#000;cursor:pointer}"]}),t})();function V(t,e){1&t&&(a.Rb(0,"div"),a.Rb(1,"div",2),a.Rb(2,"div",3),a.Mb(3,"div"),a.Mb(4,"div"),a.Mb(5,"div"),a.Mb(6,"div"),a.Qb(),a.Qb(),a.Qb())}function H(t,e){1&t&&(a.Rb(0,"div",18),a.Rb(1,"span"),a.wc(2,"heicsa"),a.Qb(),a.Qb())}function K(t,e){1&t&&(a.Rb(0,"mat-icon"),a.wc(1,"close"),a.Qb())}function X(t,e){1&t&&(a.Rb(0,"mat-icon"),a.wc(1,"arrow_drop_down"),a.Qb())}function Z(t,e){1&t&&(a.Rb(0,"div",19),a.Mb(1,"app-menu"),a.Qb())}function W(t,e){if(1&t){const t=a.Sb();a.Rb(0,"div",4),a.Rb(1,"div",5),a.Rb(2,"div",6),a.uc(3,H,3,0,"ng-template",7),a.Rb(4,"div",8),a.Rb(5,"div"),a.Mb(6,"app-search"),a.Qb(),a.Qb(),a.Qb(),a.Rb(7,"div",9),a.Rb(8,"div"),a.Rb(9,"div",10),a.Rb(10,"button",11),a.Yb("click",(function(){a.mc(t);const e=a.cc();return e.miniMenu=!e.miniMenu})),a.uc(11,K,2,0,"ng-template",7),a.uc(12,X,2,0,"ng-template",7),a.Qb(),a.Qb(),a.Rb(13,"div",12),a.Rb(14,"button",13),a.Rb(15,"mat-icon"),a.wc(16,"add_box"),a.Qb(),a.Qb(),a.Qb(),a.Rb(17,"div",14),a.Rb(18,"button",13),a.Rb(19,"mat-icon"),a.wc(20,"notifications"),a.Qb(),a.Qb(),a.Qb(),a.Rb(21,"div",15),a.Rb(22,"div",16),a.Rb(23,"img",17),a.Yb("click",(function(){a.mc(t);const e=a.cc();return e.router.navigateByUrl("/user/"+e.authdata.heicsaUser.name)})),a.Qb(),a.Qb(),a.Qb(),a.uc(24,Z,2,0,"ng-template",7),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(25,"div"),a.Mb(26,"app-new-post"),a.Qb(),a.Mb(27,"router-outlet")}if(2&t){const t=a.cc();a.Ab(3),a.hc("ngIf",!0),a.Ab(8),a.hc("ngIf",t.miniMenu),a.Ab(1),a.hc("ngIf",!t.miniMenu),a.Ab(11),a.hc("src",t.authdata.heicsaUser.imgUrl,a.nc),a.Ab(1),a.hc("ngIf",t.miniMenu)}}const tt=[{path:"",component:(()=>{class t{constructor(t,e,n){this.router=t,this.AuthSer=e,this.authdata=n,this.miniMenu=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(o.f),a.Lb(r.b),a.Lb(r.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-home"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["HomeReady",""],[1,"Loader"],[1,"bouncer"],[1,"parent"],[1,"top"],[1,"top_div"],[3,"ngIf"],[1,"search_bar"],[1,"acc_menu"],[1,"down"],["mat-icon-button","",3,"click"],[1,"newPost"],["mat-icon-button",""],[1,"notfications"],[1,"profile_image"],[1,"Little_padding"],[3,"src","click"],[1,"heicsa"],[1,"menu_container"]],template:function(t,e){if(1&t&&(a.uc(0,V,7,0,"div",0),a.uc(1,W,28,5,"ng-template",null,1,a.vc)),2&t){const t=a.kc(2);a.hc("ngIf",e.authdata.homeInitialize)("ngIfElse",t)}},directives:[i.k,d,c.a,s.a,y,o.j,J],styles:[".heicsa[_ngcontent-%COMP%], .icon_messages[_ngcontent-%COMP%], .icon_notification[_ngcontent-%COMP%]{color:#fff}.Little_padding[_ngcontent-%COMP%]{padding:5px}.acc_menu[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .top[_ngcontent-%COMP%], .top_div[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.top_div[_ngcontent-%COMP%]{width:50%;align-items:center}.acc_menu[_ngcontent-%COMP%]{max-width:30%;display:flex;justify-content:flex-end}.acc_menu[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-items:center}.acc_menu[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:10px}.Little_padding[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{border-radius:100%;transform:scale(110%)}.down[_ngcontent-%COMP%], .newPost[_ngcontent-%COMP%], .notfications[_ngcontent-%COMP%]{background:#f5f5f5;border-radius:50%}.top[_ngcontent-%COMP%]{padding:10px}.heicsa[_ngcontent-%COMP%]{font-size:35px;font-weight:700;color:#dae2e9}.search_bar[_ngcontent-%COMP%]{margin-right:10%;width:100%}.menu_container[_ngcontent-%COMP%]{position:absolute;top:103.5px;right:5px;max-height:500px;width:350px;background-color:#f5f5f5;border-radius:10px}img[_ngcontent-%COMP%]{width:50px;height:50px}.Loader[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:#f2ffff}.bouncer[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:flex-end;width:100px;height:50px}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:15px;height:15px;background:#00f;border-radius:50%;-webkit-animation:bouncer .5s cubic-bezier(.19,.57,.3,.98) infinite alternate;animation:bouncer .5s cubic-bezier(.19,.57,.3,.98) infinite alternate}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes bouncer{0%{transform:translateY(0)}to{transform:translateY(-40px)}}@keyframes bouncer{0%{transform:translateY(0)}to{transform:translateY(-40px)}}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#d3d3d3!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4169e1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4169e1!important;opacity:.8!important}  .mat-form-field-label{color:rgba(0,0,0,.6)!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4169e1!important}"]}),t})(),children:[{path:"messages",loadChildren:()=>n.e(1).then(n.bind(null,"7N9o")).then(t=>t.MessagesModule)}]}];let et=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[o.i.forChild(tt)],o.i]}),t})();n("quSY"),n("XNiG"),n("NXyV"),n("VRyK"),n("LRne"),n("xgIS");var nt=n("rDax"),it=n("vxfF");n("FtGj"),n("nLfN"),n("+rOU"),n("IzEk"),n("eIep"),n("pLZG"),n("lJxs"),n("vkgz"),n("3E0/"),n("cH1L");const ot={provide:new a.r("mat-autocomplete-scroll-strategy"),deps:[nt.a],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let at=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},providers:[ot],imports:[[h.j,nt.d,h.g,i.c],it.a,h.j,h.g]}),t})(),rt=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[i.c,s.b,c.b,f.i,u.e,m.c,f.q,at]]}),t})(),ct=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[i.c,s.b,h.m,$]]}),t})(),st=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[i.c,et,s.b,c.b,p.b,m.c,h.m,rt,ct,f.i,_.b]]}),t})()}}]);