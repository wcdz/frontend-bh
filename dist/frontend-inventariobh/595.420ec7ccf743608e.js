"use strict";(self.webpackChunkfrontend_inventariobh=self.webpackChunkfrontend_inventariobh||[]).push([[595],{5595:(m,c,i)=>{i.r(c),i.d(c,{LoginModule:()=>p});var d=i(9808),a=i(5603),e=i(2382),n=i(4893),C=i(7556);let M=(()=>{class t{constructor(o,g){this.authService=o,this.router=g,this.admin={username:"",password:""}}ngOnInit(){}logIn(){this.authService.singin(this.admin).subscribe(o=>{console.log(o),localStorage.setItem("token",o.token),this.router.navigate(["inventario/tablero-principal"])})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(C.e),n.Y36(a.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:30,vars:2,consts:[["href","https://fonts.googleapis.com/css?family=Arapey","rel","stylesheet"],[1,"login-register"],[1,"leftside"],["src","./assets/img/logo.png",1,"logo","col-xs-12"],[1,"inventary-1","col-xs-12"],[1,"line-1","col-xs-12"],[1,"inventary-2","col-xs-12"],[1,"login-box"],[1,"login-card"],[1,"login-form"],[1,"d-title"],[1,"form-group","mp-5",2,"margin-bottom","30px"],[1,"inputuser","col-xs-12","mp-5"],["type","email","id","txtUsername","placeholder","Nombre de usuario","name","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 512",1,"iconuser"],["d","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"],[1,"form-group",2,"margin-bottom","30px"],[1,"inputpass","col-xs-12"],["type","password","id","txtPassword","placeholder","Contrase\xf1a","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",1,"iconpass"],["d","M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"],[1,"form-group"],[1,"col-xs-12"],["type","button",1,"btn","btn-dark",3,"click"]],template:function(o,g){1&o&&(n._UZ(0,"link",0),n.TgZ(1,"body")(2,"section",1)(3,"div",2)(4,"div"),n._UZ(5,"img",3),n.TgZ(6,"div",4),n._uU(7," Brama Hermanos S.A.C. "),n._UZ(8,"div",5),n.TgZ(9,"div",6),n._uU(10,' "Sistema de Control de Inventario" '),n.qZA()()()(),n.TgZ(11,"div",7)(12,"div",8)(13,"form",9)(14,"div",10),n._uU(15,"Inicio de Sesi\xf3n"),n.qZA(),n.TgZ(16,"div",11)(17,"div",12)(18,"input",13),n.NdJ("ngModelChange",function(l){return g.admin.username=l}),n.qZA(),n.O4$(),n.TgZ(19,"svg",14),n._UZ(20,"path",15),n.qZA()()(),n.kcU(),n.TgZ(21,"div",16)(22,"div",17)(23,"input",18),n.NdJ("ngModelChange",function(l){return g.admin.password=l}),n.qZA(),n.O4$(),n.TgZ(24,"svg",19),n._UZ(25,"path",20),n.qZA()()(),n.kcU(),n.TgZ(26,"div",21)(27,"div",22)(28,"button",23),n.NdJ("click",function(){return g.logIn()}),n._uU(29," INGRESAR "),n.qZA()()()()()()()()),2&o&&(n.xp6(18),n.Q6J("ngModel",g.admin.username),n.xp6(5),n.Q6J("ngModel",g.admin.password))},directives:[e._Y,e.JL,e.F,e.Fj,e.Q7,e.JJ,e.On],styles:[".login-register[_ngcontent-%COMP%]{position:fixed;background-color:#0009;background:url(Fondo-A3.67adc4f9b9dee086.jpg);background-size:cover;background-repeat:no-repeat;width:100%;height:100%}.login-register[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]{width:1050px;display:flex;align-items:center;text-align:center;position:absolute;margin:0 auto;left:0px;height:100%;justify-content:center}.login-register[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:30%;position:relative}.login-register[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]   .inventary-1[_ngcontent-%COMP%]{color:#fff;font-family:Arapey;font-size:60px}.login-register[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%]{width:570px;border-top:3px solid white;padding:0}.login-register[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]   .inventary-2[_ngcontent-%COMP%]{color:#fff;font-family:Arapey;font-size:25px}.login-register[_ngcontent-%COMP%]   .login-overlay[_ngcontent-%COMP%]{position:absolute;background:var(--primary-color);width:100%;height:100%;opacity:.5}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{width:600px;display:flex;align-items:center;position:absolute;margin:0 auto;right:0px;height:100%;opacity:70%;font-family:Arapey;background-color:#e7e7e7}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;z-index:999;opacity:70%;background-color:#e7e7e7}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-weight:700}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:inherit;max-width:400px;text-align:center}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{animation:fadeIn .5s ease-in-out}@keyframes fadeIn{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .d-title[_ngcontent-%COMP%]{font-size:40px;margin-bottom:32px;color:#000;font-weight:700}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]{height:80px}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{font-family:Arapey;font-weight:700;font-size:16px;color:#000;text-decoration:underline;text-align:right}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .inputpass[_ngcontent-%COMP%], .login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .inputuser[_ngcontent-%COMP%]{position:relative}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .iconuser[_ngcontent-%COMP%], .login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .iconpass[_ngcontent-%COMP%]{color:#000;position:absolute;width:25px;height:25px;top:50%;left:10px;transform:translateY(-50%)}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{background:var(--primary-color)}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:disabled{opacity:1;filter:opacity(.8)}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-align:center}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:var(--error-color)}.login-register.login-sidebar[_ngcontent-%COMP%]{padding:0;margin-top:0}@media (max-width: 767px){.login-register[_ngcontent-%COMP%]{overflow:hidden}.login-register.login-sidebar[_ngcontent-%COMP%]{padding:10% 0;display:flex;align-items:center}.login-register[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]{max-width:90%;border-radius:10px;position:relative;height:auto}}"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,e.u5,e.UX,a.Bz.forChild([{path:"",component:M}])]]}),t})()}}]);