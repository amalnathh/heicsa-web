(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{PQfJ:function(t,n,e){"use strict";e.r(n),e.d(n,"IntroModule",(function(){return j}));var i=e("ofXK"),o=e("bTqV"),r=e("tyNb"),a=e("iqUP"),c=e("fXoL"),d=e("mrSG"),s=e("3Pt+"),l=e("EUQn"),b=e("dNgK"),m=e("kmnG"),g=e("qFsG"),p=e("NFeN"),h=e("Xa2L"),u=e("bv9b");function f(t,n){1&t&&(c.Rb(0,"div",23),c.Mb(1,"mat-progress-spinner",24),c.Qb())}function x(t,n){1&t&&(c.Rb(0,"div"),c.Mb(1,"mat-progress-bar",25),c.Qb())}function w(t,n){1&t&&(c.Rb(0,"mat-error"),c.wc(1," Please enter a valid email address. "),c.Qb())}function M(t,n){1&t&&(c.Rb(0,"mat-error"),c.wc(1," Please enter your "),c.Rb(2,"strong"),c.wc(3,"email"),c.Qb(),c.Qb())}function C(t,n){1&t&&(c.Rb(0,"mat-error"),c.wc(1,"Please enter your "),c.Rb(2,"strong"),c.wc(3,"Password"),c.Qb(),c.Qb())}function v(t,n){if(1&t){const t=c.Sb();c.Rb(0,"div",5),c.uc(1,f,2,0,"div",6),c.uc(2,x,2,0,"div",7),c.Rb(3,"div",8),c.Rb(4,"mat-form-field",9),c.Rb(5,"mat-label"),c.wc(6,"Email"),c.Qb(),c.Rb(7,"label"),c.Rb(8,"input",10),c.Yb("ngModelChange",(function(n){return c.mc(t),c.cc().email=n})),c.Qb(),c.Qb(),c.uc(9,w,2,0,"mat-error",7),c.uc(10,M,4,0,"mat-error",7),c.Qb(),c.Mb(11,"br"),c.Rb(12,"mat-form-field",11),c.Rb(13,"mat-label"),c.wc(14,"Enter your password"),c.Qb(),c.Rb(15,"label"),c.Rb(16,"input",12),c.Yb("ngModelChange",(function(n){return c.mc(t),c.cc().password=n})),c.Qb(),c.Qb(),c.uc(17,C,4,0,"mat-error",7),c.Rb(18,"button",13),c.Yb("click",(function(){c.mc(t);const n=c.cc();return n.hide=!n.hide})),c.Rb(19,"mat-icon"),c.wc(20),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(21,"div",14),c.Rb(22,"button",15),c.Yb("click",(function(){return c.mc(t),c.cc().loginAcc()})),c.wc(23," Login "),c.Qb(),c.Qb(),c.Rb(24,"div",16),c.Rb(25,"span",17),c.Yb("click",(function(){return c.mc(t),c.cc().forgetPswd=!0})),c.wc(26,"forgot your password?"),c.Qb(),c.Rb(27,"button",18),c.Yb("click",(function(){return c.mc(t),c.cc().authService.SignUpWithGoogle()})),c.Rb(28,"div",19),c.Mb(29,"img",20),c.wc(30," SignIn"),c.Qb(),c.Qb(),c.Qb(),c.Rb(31,"div",21),c.wc(32,"or "),c.Rb(33,"a",22),c.wc(34,"Sign Up"),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.cc();c.Ab(1),c.hc("ngIf",!t.authService.G_authReturn),c.Ab(1),c.hc("ngIf",t.authService.loginLoading),c.Ab(2),c.rc("width",260,"px"),c.Ab(4),c.hc("ngModel",t.email)("errorStateMatcher",t.matcher),c.Ab(1),c.hc("ngIf",t.LoginForm.get("emailFormControl").hasError("email")&&!t.LoginForm.get("emailFormControl").hasError("required")),c.Ab(1),c.hc("ngIf",t.LoginForm.get("emailFormControl").hasError("required")),c.Ab(2),c.rc("width",260,"px"),c.Ab(4),c.hc("ngModel",t.password)("type",t.hide?"password":"text"),c.Ab(1),c.hc("ngIf",t.LoginForm.get("passwordFormControl").hasError("required")),c.Ab(1),c.Bb("aria-label","hide password")("aria-pressed",t.hide),c.Ab(2),c.xc(t.hide?"visibility_off":"visibility"),c.Ab(2),c.hc("disabled",t.LoginForm.get("emailFormControl").hasError("email")&&!t.LoginForm.get("emailFormControl").hasError("required")||t.LoginForm.get("emailFormControl").hasError("required")||t.LoginForm.get("passwordFormControl").hasError("required"))}}function P(t,n){1&t&&(c.Rb(0,"div",31),c.Mb(1,"mat-progress-bar",25),c.Qb())}function R(t,n){1&t&&(c.Rb(0,"mat-error"),c.wc(1," Please enter a "),c.Rb(2,"strong"),c.wc(3,"valid email address."),c.Qb(),c.wc(4,". "),c.Qb())}function _(t,n){1&t&&(c.Rb(0,"mat-error"),c.wc(1," Please enter your "),c.Rb(2,"strong"),c.wc(3,"email."),c.Qb(),c.wc(4,". "),c.Qb())}function Q(t,n){if(1&t){const t=c.Sb();c.Rb(0,"div",5),c.uc(1,P,2,0,"div",26),c.Rb(2,"mat-form-field",9),c.Rb(3,"mat-label"),c.wc(4,"Email"),c.Qb(),c.Rb(5,"label"),c.Rb(6,"input",27),c.Yb("ngModelChange",(function(n){return c.mc(t),c.cc().frPswEmail=n})),c.Qb(),c.Qb(),c.uc(7,R,5,0,"mat-error",7),c.uc(8,_,5,0,"mat-error",7),c.Qb(),c.Rb(9,"div",28),c.Rb(10,"button",29),c.Yb("click",(function(){return c.mc(t),c.cc().SendRsetMail()})),c.wc(11,"Send Password Reset Link "),c.Qb(),c.Qb(),c.Rb(12,"div",28),c.Rb(13,"button",30),c.Yb("click",(function(){return c.mc(t),c.cc().forgetPswd=!1})),c.Rb(14,"mat-icon"),c.wc(15,"keyboard_backspace"),c.Qb(),c.wc(16," Login "),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=c.cc();c.Ab(1),c.hc("ngIf",t.emailLoader),c.Ab(1),c.rc("width",260,"px"),c.Ab(4),c.hc("ngModel",t.frPswEmail)("errorStateMatcher",t.matcher),c.Ab(1),c.hc("ngIf",t.LoginForm.get("emailFormControl").hasError("email")&&!t.LoginForm.get("emailFormControl").hasError("required")),c.Ab(1),c.hc("ngIf",t.LoginForm.get("emailFormControl").hasError("required")),c.Ab(2),c.hc("disabled",t.LoginForm.get("emailFormControl").hasError("email")&&!t.LoginForm.get("emailFormControl").hasError("required")||t.LoginForm.get("emailFormControl").hasError("required"))}}class O{isErrorState(t,n){return!!(t&&t.invalid&&(t.dirty||t.touched||n&&n.submitted))}}let k=(()=>{class t{constructor(t,n){this.authService=t,this._snackBar=n,this.hide=!0,this.forgetPswd=!1,this.emailLoader=!1,this.action="ok",this.LoginToHome=!0,this.abc=!1,this.LoginForm=new s.g({emailFormControl:new s.d("",[s.s.required,s.s.email]),passwordFormControl:new s.d("",[s.s.required])}),this.matcher=new O}loginAcc(){return Object(d.a)(this,void 0,void 0,(function*(){yield this.authService.login(this.email,this.password),this.authService.snackbarBool&&this._snackBar.open(this.authService.snackBarError,this.action,{duration:4e3})}))}SendRsetMail(){return Object(d.a)(this,void 0,void 0,(function*(){this.emailLoader=!0,yield this.authService.ForgotPassword(this.frPswEmail),this.emailLoader=!1,this.authService.dinga&&this._snackBar.open(this.authService.EMess,this.action,{duration:4e3})}))}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(l.b),c.Lb(b.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-login"]],decls:6,vars:3,consts:[[1,"parent"],[3,"formGroup"],[1,"content"],["class","padding",4,"ngIf","ngIfElse"],["forgetPaswd",""],[1,"padding"],["id","mhd",4,"ngIf"],[4,"ngIf"],[1,"example-form"],["appearance","outline","hideRequiredMarker","",1,"example-full-width","margin10"],["formControlName","emailFormControl","matInput","","name","emailidname","placeholder","henry@heicsa.com","required","",1,"inputsize",3,"ngModel","errorStateMatcher","ngModelChange"],["appearance","outline","color","blue","hideRequiredMarker","",1,"example-full-width","margin11"],["matInput","","name","emailidpswd","placeholder","Password","formControlName","passwordFormControl","required","",1,"inputsize",3,"ngModel","type","ngModelChange"],["mat-icon-button","","matSuffix","",3,"click"],[2,"width","100%","display","flex","justify-content","center","padding-bottom","20px"],["mat-flat-button","",3,"disabled","click"],[2,"width","100%"],[1,"furpass",3,"click"],["mat-raised-button","",1,"floatright",3,"click"],["id","btng"],["src","assets/icons/google-brands.svg","width","17px","height","17px",2,"line-height","36px"],[1,"signuptxt"],["routerLink","/signup"],["id","mhd"],["mode","indeterminate"],["color","primary","mode","indeterminate"],["class","d23h",4,"ngIf"],["formControlName","emailFormControl","matInput","","name","frPswEmail","placeholder","pat@example.com","required","",1,"inputsize",3,"ngModel","errorStateMatcher","ngModelChange"],[1,"rc2b"],["mat-raised-button","",3,"disabled","click"],["mat-stroked-button","",3,"click"],[1,"d23h"]],template:function(t,n){if(1&t&&(c.Rb(0,"div",0),c.Rb(1,"form",1),c.Rb(2,"div",2),c.uc(3,v,35,17,"div",3),c.uc(4,Q,17,8,"ng-template",null,4,c.vc),c.Qb(),c.Qb(),c.Qb()),2&t){const t=c.kc(5);c.Ab(1),c.hc("formGroup",n.LoginForm),c.Ab(2),c.hc("ngIf",!n.forgetPswd)("ngIfElse",t)}},directives:[s.t,s.n,s.h,i.k,m.c,m.g,s.c,g.b,s.m,s.f,s.r,o.a,m.h,p.a,r.h,h.a,u.a,m.b],styles:[".example-form[_ngcontent-%COMP%]{display:block;font-size:17px}.margin10[_ngcontent-%COMP%]{margin:10px}.margin11[_ngcontent-%COMP%]{margin-top:30px;margin-right:10px;margin-left:10px}input[_ngcontent-%COMP%]{width:400px}#btng[_ngcontent-%COMP%]{width:62px;display:flex;justify-content:space-between;align-items:center}.padding[_ngcontent-%COMP%]{padding:40px;position:relative;background-color:#f8f8ff;border-radius:10px;box-shadow:3px 3px 25px rgba(26,26,26,.705)}.furpass[_ngcontent-%COMP%]{text-decoration:none;color:#4169e1;line-height:25px;cursor:pointer}.content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:80vh}.floatright[_ngcontent-%COMP%]{float:right;margin-right:10px;margin-top:10px}.rc2b[_ngcontent-%COMP%]{width:100%;text-align:center;font-size:16px;margin-top:10px}.signuptxt[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none;color:#4169e1;cursor:pointer}.signuptxt[_ngcontent-%COMP%]{margin-top:8px}.sac3f[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.sac3f[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:10px}.d23h[_ngcontent-%COMP%]{margin-bottom:10px}#mhd[_ngcontent-%COMP%]{width:calc(100% - 80px);height:calc(100% - 80px);position:absolute;background-color:rgba(248,248,255,.904);z-index:100;display:flex;justify-content:center;align-items:center}@media screen and (max-width:600px){.padding[_ngcontent-%COMP%]{box-shadow:none;background-color:#fff}.content[_ngcontent-%COMP%]{height:100%}}@media screen and (max-width:450px){.padding[_ngcontent-%COMP%]{background-color:hsla(0,0%,96.1%,.904)}}.mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], [_nghost-%COMP%]     .mat-progress-spinner circle{stroke:#04578f}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#d3d3d3!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#4169e1!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#4169e1!important;opacity:.8!important}  .mat-form-field-label{color:rgba(0,0,0,.6)!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#4169e1!important}"]}),t})();function y(t,n){1&t&&(c.Rb(0,"div"),c.Rb(1,"div",2),c.Rb(2,"div",3),c.Mb(3,"div"),c.Mb(4,"div"),c.Mb(5,"div"),c.Mb(6,"div"),c.Qb(),c.Qb(),c.Qb())}function F(t,n){1&t&&(c.Rb(0,"div",4),c.Rb(1,"div",5),c.Rb(2,"div",6),c.Rb(3,"button",7),c.wc(4,"GitHub Repo"),c.Qb(),c.Qb(),c.Qb(),c.Rb(5,"div",8),c.Rb(6,"div"),c.Rb(7,"div",9),c.Rb(8,"div"),c.Rb(9,"span"),c.wc(10,"heicsa."),c.Qb(),c.Mb(11,"br"),c.Rb(12,"div",10),c.Rb(13,"span"),c.wc(14," This is the new "),c.Mb(15,"br"),c.wc(16," open source social media. "),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(17,"div",11),c.Mb(18,"app-login"),c.Qb(),c.Qb(),c.Qb())}const L=[{path:"",component:(()=>{class t{constructor(t){this.router=t,this.LoginToHome=!0}ngOnInit(){Object(a.auth)().onAuthStateChanged(t=>{t?this.router.navigateByUrl("/home").then(t=>{this.LoginToHome=!1}):(this.LoginToHome=!1,localStorage.clear(),this.router.navigateByUrl("/login"))})}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(r.f))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-intro"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["login",""],[1,"Loader"],[1,"bouncer"],[1,"dfhd"],[1,"topBar"],[1,"rightSideBtn"],["mat-raised-button",""],[1,"djhbsd3"],[1,"kjsnks"],[1,"insideText"],[1,"app_login"]],template:function(t,n){if(1&t&&(c.uc(0,y,7,0,"div",0),c.uc(1,F,19,0,"ng-template",null,1,c.vc)),2&t){const t=c.kc(2);c.hc("ngIf",n.LoginToHome)("ngIfElse",t)}},directives:[i.k,o.a,k],styles:[".parent[_ngcontent-%COMP%]{height:100%;width:100%}.dfhd[_ngcontent-%COMP%]{background-image:url(hexagon.fec29684a3cb37858c02.svg);background-repeat:no-repeat;background-size:auto}.djhbsd3[_ngcontent-%COMP%]{display:flex;align-items:center}.djhbsd3[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;height:100%}.topBar[_ngcontent-%COMP%]{width:100%;height:70px;display:flex;align-items:center}.app_login[_ngcontent-%COMP%]{margin-top:40px;height:100%}.rightSideBtn[_ngcontent-%COMP%]{width:100%;text-align:right;padding:3px 20px 3px 3px}.kjsnks[_ngcontent-%COMP%]{padding:10px 10px 10px 30px;color:#f0f8ff;display:flex;align-items:center;height:100%;cursor:pointer}.kjsnks[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%;margin-top:10px}.kjsnks[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:40px;font-weight:700}.insideText[_ngcontent-%COMP%]{margin-top:70px;margin-bottom:70px;font-size:90px;padding:50px 0 50px 30px}.Loader[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;justify-content:center;align-items:center;background-color:#f2ffff}.bouncer[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:flex-end;width:100px;height:50px}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:15px;height:15px;background:#00f;border-radius:50%;-webkit-animation:bouncer .5s cubic-bezier(.19,.57,.3,.98) infinite alternate;animation:bouncer .5s cubic-bezier(.19,.57,.3,.98) infinite alternate}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.1s;animation-delay:.1s}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.2s;animation-delay:.2s}.bouncer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes bouncer{0%{transform:translateY(0)}to{transform:translateY(-40px)}}@keyframes bouncer{0%{transform:translateY(0)}to{transform:translateY(-40px)}}@media screen and (max-width:1300px){.insideText[_ngcontent-%COMP%]{font-size:85px}}@media screen and (max-width:1200px){.insideText[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px;font-size:75px;padding:35px 0 35px 18px}}@media screen and (max-width:860px){.djhbsd3[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}}@media screen and (max-width:600px){.insideText[_ngcontent-%COMP%]{font-size:60px;margin-bottom:6px}.app_login[_ngcontent-%COMP%], .insideText[_ngcontent-%COMP%]{margin-top:10px}}@media screen and (max-width:450px){.insideText[_ngcontent-%COMP%]{font-size:50px;margin-top:10px;margin-bottom:6px;padding:10px 0 10px 5px}}"]}),t})()}];let I=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[r.i.forChild(L)],r.i]}),t})();const E=[{path:"",component:k}];let S=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[r.i.forChild(E)],r.i]}),t})(),A=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[i.c,b.b,s.q,m.e,g.c,S,o.b,p.b,s.i,u.b,h.b]]}),t})(),j=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[i.c,I,o.b,A]]}),t})()}}]);