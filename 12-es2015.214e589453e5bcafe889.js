(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{EANz:function(t,e,n){"use strict";n.r(e),n.d(e,"ProjectOverdueModule",function(){return W});var i=n("SVse"),o=n("iInd"),c=n("mrSG"),a=n("OC8m"),r=n("klZy"),b=n("iELJ"),s=n("8Y7J"),d=n("Dxy4"),g=n("Tj54"),u=n("Q2Ze"),l=n("s7LF"),h=n("e6WT");let p=(()=>{class t{constructor(t,e,n){this.notificationService=t,this.dialogRef=e,this.data=n,e.disableClose=!0}ngOnInit(){}save(){""==this.data||this.data>30||this.data<15?this.notificationService.warn("S\u1ed1 ng\xe0y ph\u1ea3i l\u1edbn h\u01a1n 15 v\xe0 nh\u1ecf h\u01a1n 30"):this.dialogRef.close(this.data)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(a.a),s.Pb(b.g),s.Pb(b.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-dialog-extend"]],decls:13,vars:1,consts:[["mat-icon-button","","mat-dialog-close","",1,"close-button"],["color","warn",1,"close-icon"],["mat-dialog-title",""],["appearance","outline"],["type","number","name","nod","matInput","","required","","cdkFocusInitial","",3,"ngModel","ngModelChange","keyup.enter"],["align","end"],["mat-button","",1,"btn","btn-success",3,"click"]],template:function(t,e){1&t&&(s.Vb(0,"button",0),s.Vb(1,"mat-icon",1),s.Dc(2,"close"),s.Ub(),s.Ub(),s.Vb(3,"h3",2),s.Dc(4,"Gia h\u1ea1n d\u1ef1 \xe1n"),s.Ub(),s.Vb(5,"mat-dialog-content"),s.Vb(6,"mat-form-field",3),s.Vb(7,"mat-label"),s.Dc(8,"S\u1ed1 ng\xe0y"),s.Ub(),s.Vb(9,"input",4),s.cc("ngModelChange",function(t){return e.data=t})("keyup.enter",function(){return e.save()}),s.Ub(),s.Ub(),s.Ub(),s.Vb(10,"mat-dialog-actions",5),s.Vb(11,"button",6),s.cc("click",function(){return e.save()}),s.Dc(12,"L\u01b0u"),s.Ub(),s.Ub()),2&t&&(s.Db(9),s.lc("ngModel",e.data))},directives:[d.a,b.d,g.a,b.h,b.e,u.b,u.e,l.l,h.b,l.c,l.m,l.i,l.k,b.c],styles:[".image-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif)}.image-container[_ngcontent-%COMP%], .image-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:70px;background-position:50%;width:300px;height:180px;margin:5px}.image-container[_ngcontent-%COMP%]{background-image:url(upload.5ca7ecf41ef411651ece.png);border:1px dashed #1c8adb;border-radius:2px}.image-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}img[_ngcontent-%COMP%]{width:300px;height:182px;left:-2px;border-radius:2px}.button[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute;top:-2px}.button[_ngcontent-%COMP%]{right:-5px}.video-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif);border-radius:6px}.video-container[_ngcontent-%COMP%], .video-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:300px;background-position:50%;width:100%;height:400px;margin:10px auto}.video-container[_ngcontent-%COMP%]{background-image:url(upload-video.08ba7a62c53b6c43597a.png);border:2px dashed #1c8adb;border-radius:6px}.video-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}video[_ngcontent-%COMP%]{position:absolute;border-radius:3px;width:100%;height:auto}.delete-video-button[_ngcontent-%COMP%]{position:absolute;right:0}.close-button[_ngcontent-%COMP%]{float:right;top:-24px;right:-24px}.back-button[_ngcontent-%COMP%]{float:left;top:-24px;left:-24px}"]}),t})();var m=n("p46w"),f=n.n(m),v=n("6No5"),P=n("ZTz/"),D=n("978R"),U=n("UhP/");function V(t,e){1&t&&(s.Vb(0,"td"),s.Dc(1,"C\xf3"),s.Ub())}function y(t,e){1&t&&(s.Vb(0,"td"),s.Dc(1,"Kh\xf4ng"),s.Ub())}function x(t,e){1&t&&(s.Vb(0,"td"),s.Dc(1,"Ch\u01b0a gi\u1ea3i ng\xe2n"),s.Ub())}function M(t,e){1&t&&(s.Vb(0,"td"),s.Dc(1,"\u0110\xe3 gi\u1ea3i ng\xe2n"),s.Ub())}function C(t,e){if(1&t){const t=s.Wb();s.Vb(0,"td",8),s.Vb(1,"button",19),s.cc("click",function(){s.uc(t);const e=s.gc().$implicit;return s.gc().openExtendDialog(e.prj_ID)}),s.Qb(2,"i",20),s.Ub(),s.Vb(3,"button",21),s.Qb(4,"i",22),s.Ub(),s.Ub()}}function O(t,e){if(1&t){const t=s.Wb();s.Vb(0,"td",8),s.Vb(1,"button",23),s.Qb(2,"i",20),s.Ub(),s.Vb(3,"button",24),s.cc("click",function(){s.uc(t);const e=s.gc().$implicit;return s.gc().closeProject(e.prj_ID)}),s.Qb(4,"i",22),s.Ub(),s.Ub()}}function k(t,e){if(1&t){const t=s.Wb();s.Vb(0,"td",8),s.Vb(1,"button",19),s.cc("click",function(){s.uc(t);const e=s.gc().$implicit;return s.gc().openExtendDialog(e.prj_ID)}),s.Qb(2,"i",20),s.Ub(),s.Vb(3,"button",21),s.Qb(4,"i",22),s.Ub(),s.Ub()}}function j(t,e){1&t&&(s.Vb(0,"td",8),s.Vb(1,"button",23),s.Qb(2,"i",20),s.Ub(),s.Vb(3,"button",21),s.Qb(4,"i",22),s.Ub(),s.Ub())}function w(t,e){if(1&t&&(s.Vb(0,"tbody"),s.Vb(1,"td"),s.Dc(2),s.Ub(),s.Vb(3,"td",16),s.Dc(4),s.Ub(),s.Vb(5,"td",8),s.Dc(6),s.Ub(),s.Vb(7,"td",8),s.Dc(8),s.Ub(),s.Vb(9,"td",8),s.Dc(10),s.Ub(),s.Bc(11,V,2,0,"td",17),s.Bc(12,y,2,0,"td",17),s.Bc(13,x,2,0,"td",17),s.Bc(14,M,2,0,"td",17),s.Bc(15,C,5,0,"td",18),s.Bc(16,O,5,0,"td",18),s.Bc(17,k,5,0,"td",18),s.Bc(18,j,5,0,"td",18),s.Ub()),2&t){const t=e.$implicit,n=e.index,i=s.gc();s.Db(2),s.Ec(n+1),s.Db(2),s.Ec(t.projectName),s.Db(2),s.Ec(i.numberWithCommas(t.targetMoney)),s.Db(2),s.Ec(i.numberWithCommas(t.curMoney)),s.Db(2),s.Ec(t.achieved),s.Db(1),s.lc("ngIf",1==t.projectType.canDisburseWhenOverdue),s.Db(1),s.lc("ngIf",1!=t.projectType.canDisburseWhenOverdue),s.Db(1),s.lc("ngIf",0==t.disbursed),s.Db(1),s.lc("ngIf",1==t.disbursed),s.Db(1),s.lc("ngIf",1!=t.projectType.canDisburseWhenOverdue&&t.curMoney/t.targetMoney>.8),s.Db(1),s.lc("ngIf",1!=t.projectType.canDisburseWhenOverdue&&t.curMoney/t.targetMoney<.8),s.Db(1),s.lc("ngIf",1==t.projectType.canDisburseWhenOverdue&&t.curMoney/t.targetMoney>.8),s.Db(1),s.lc("ngIf",1==t.projectType.canDisburseWhenOverdue&&t.curMoney/t.targetMoney<.8)}}function _(t,e){if(1&t&&(s.Vb(0,"mat-option",25),s.Dc(1),s.Ub()),2&t){const t=e.$implicit;s.lc("value",t.id),s.Db(1),s.Ec(t.value)}}const I=[{path:"",component:(()=>{class t{constructor(t,e,n){this.projectService=t,this.notificationService=e,this.dialog=n,this.maxSize=5,this.itemsPerPage=5,this.currentPage=1,this.options=[{id:1,value:5},{id:2,value:10},{id:3,value:25},{id:4,value:100}],this.selected1=this.options[0].id,this.closeProject=t=>Object(c.b)(this,void 0,void 0,function*(){try{if(confirm("B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 \u0111\xf3ng d\u1ef1 \xe1n n\xe0y?")){const e=yield(yield this.projectService.closeProject(t)).data;e&&(this.notificationService.warn(e.message),this.getList(this.currentPage,this.itemsPerPage))}}catch(e){console.log(e)}}),this.extendProject=(t,e)=>Object(c.b)(this,void 0,void 0,function*(){try{const n=yield(yield this.projectService.extendProject(t,e)).data;n&&(this.notificationService.warn(n.message),this.getList(this.currentPage,this.itemsPerPage))}catch(n){console.log(n)}})}pageChanged(t){this.currentPage=t.page,this.getList(this.currentPage,this.itemsPerPage)}rowsChanged(t){this.itemsPerPage=this.options[t.value-1].value,this.getList(this.currentPage,this.itemsPerPage)}ngOnInit(){this.clb_id=JSON.parse(f.a.get("loginInfo")).info.clb_ID,this.countTotal(),this.getList(1,this.itemsPerPage)}countTotal(){return Object(c.b)(this,void 0,void 0,function*(){this.totalItems=yield(yield this.projectService.countOverdue(this.clb_id)).data})}getList(t,e){return Object(c.b)(this,void 0,void 0,function*(){this.Projects=yield(yield this.projectService.getOverdue(this.clb_id,t,e)).data})}openExtendDialog(t){this.dialog.open(p,{width:"250px",data:30}).afterClosed().subscribe(e=>{e&&this.extendProject(t,e)})}numberWithCommas(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(r.a),s.Pb(a.a),s.Pb(b.b))},t.\u0275cmp=s.Jb({type:t,selectors:[["ng-component"]],decls:37,vars:11,consts:[[1,"col-lg"],[1,"card"],[1,"card-header"],[1,"row"],[1,"col"],[1,"card-title"],[1,"card-body"],[1,"table","table-light"],[2,"text-align","right"],[2,"width","15%"],[2,"width","15%","text-align","right"],[4,"ngFor","ngForOf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",1,"pagination-sm",3,"totalItems","ngModel","maxSize","boundaryLinks","rotate","itemsPerPage","ngModelChange","pageChanged"],["align","right"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"width","30%"],[4,"ngIf"],["style","text-align: right",4,"ngIf"],["type","button","tooltip","Gia h\u1ea1n d\u1ef1 \xe1n",1,"btn","btn-sm","btn-success",3,"click"],[1,"fa","fa-clock-o"],["disabled","","type","button",1,"btn","btn-sm","btn-danger",2,"opacity","0.2"],[1,"fa","fa-close"],["disabled","","type","button",1,"btn","btn-sm","btn-success",2,"opacity","0.2"],["type","button","tooltip","\u0110\xf3ng d\u1ef1 \xe1n",1,"btn","btn-sm","btn-danger",3,"click"],[3,"value"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"div",3),s.Vb(4,"div",4),s.Vb(5,"h3",5),s.Dc(6," D\u1ef1 \xe1n \u0111\xe3 th\u1ea5t b\u1ea1i "),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Vb(7,"div",6),s.Vb(8,"table",7),s.Vb(9,"thead"),s.Vb(10,"tr"),s.Vb(11,"th"),s.Dc(12,"#"),s.Ub(),s.Vb(13,"th"),s.Dc(14,"T\xean D\u1ef1 \xe1n"),s.Ub(),s.Vb(15,"th",8),s.Dc(16,"M\u1ee5c ti\xeau"),s.Ub(),s.Vb(17,"th",8),s.Dc(18,"\u0110\xe3 quy\xean g\xf3p "),s.Ub(),s.Vb(19,"th",8),s.Dc(20,"\u0110\u1ea1t \u0111\u01b0\u1ee3c (%)"),s.Ub(),s.Vb(21,"th",9),s.Dc(22,"Cho ph\xe9p gi\u1ea3i ng\xe2n"),s.Ub(),s.Vb(23,"th"),s.Dc(24,"T\xecnh tr\u1ea1ng"),s.Ub(),s.Vb(25,"th",10),s.Dc(26,"T\xe1c v\u1ee5"),s.Ub(),s.Ub(),s.Ub(),s.Bc(27,w,19,13,"tbody",11),s.Qb(28,"tbody"),s.Ub(),s.Vb(29,"div",3),s.Vb(30,"div",4),s.Vb(31,"pagination",12),s.cc("ngModelChange",function(t){return e.currentPage=t})("pageChanged",function(t){return e.pageChanged(t)}),s.Ub(),s.Ub(),s.Vb(32,"mat-form-field",13),s.Vb(33,"mat-label"),s.Dc(34,"S\u1ed1 h\xe0ng hi\u1ec3n th\u1ecb"),s.Ub(),s.Vb(35,"mat-select",14),s.cc("selectionChange",function(t){return e.rowsChanged(t)})("ngModelChange",function(t){return e.selected1=t}),s.Bc(36,_,2,2,"mat-option",15),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.Db(27),s.lc("ngForOf",e.Projects),s.Db(4),s.lc("totalItems",e.totalItems)("ngModel",e.currentPage)("maxSize",e.maxSize)("boundaryLinks",!0)("rotate",!1)("itemsPerPage",e.itemsPerPage),s.Db(1),s.yc("width",80,"px"),s.Db(3),s.lc("ngModel",e.selected1),s.Db(1),s.lc("ngForOf",e.options))},directives:[i.j,v.a,l.i,l.k,u.b,u.e,P.a,i.k,D.a,U.m],encapsulation:2}),t})(),data:{title:"D\u1ef1 \xe1n qu\xe1 h\u1ea1n"}}];let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[o.g.forChild(I)],o.g]}),t})();var T=n("kMuZ");let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[i.c,S,l.e,T.a,v.b.forRoot(),D.b.forRoot()]]}),t})()}}]);