!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Ac6m:function(e,i,o){"use strict";o.r(i),o.d(i,"ProjectReachedModule",function(){return at});var a,c,r=o("SVse"),s=o("iInd"),l=o("mrSG"),g=o("OC8m"),u=o("dFnA"),d=o("klZy"),b=o("p46w"),f=o.n(b),p=o("iELJ"),h=(o("OF70"),o("nYR2")),v=o("8Y7J"),m=o("fMxG"),U=o("Dxy4"),D=o("Tj54"),k=o("Q2Ze"),y=o("e6WT"),V=o("s7LF"),P=o("pMoy"),I=o("40+f"),x=((c=function(){function e(){t(this,e),this.files=new v.o,this.background="#f5fcff",this.opacity="1"}return n(e,[{key:"onDragOver",value:function(t){t.preventDefault(),t.stopPropagation(),this.background="#9ecbec",this.opacity="0.8"}},{key:"onDragLeave",value:function(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1"}},{key:"ondrop",value:function(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1";var e=t.dataTransfer.files;e.length>0&&this.files.emit(e)}}]),e}()).\u0275fac=function(t){return new(t||c)},c.\u0275dir=v.Kb({type:c,selectors:[["","imageDragDrop",""]],hostVars:4,hostBindings:function(t,e){1&t&&v.cc("dragover",function(t){return e.onDragOver(t)})("dragleave",function(t){return e.onDragLeave(t)})("drop",function(t){return e.ondrop(t)}),2&t&&v.yc("background-color",e.background)("opacity",e.opacity)},outputs:{files:"files"}}),c),w=((a=function(){function e(){t(this,e),this.files=new v.o,this.background="#f5fcff",this.opacity="1"}return n(e,[{key:"onDragOver",value:function(t){t.preventDefault(),t.stopPropagation(),this.background="#9ecbec",this.opacity="0.8"}},{key:"onDragLeave",value:function(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1"}},{key:"ondrop",value:function(t){t.preventDefault(),t.stopPropagation(),this.background="#f5fcff",this.opacity="1";var e=t.dataTransfer.files;e.length>0&&this.files.emit(e)}}]),e}()).\u0275fac=function(t){return new(t||a)},a.\u0275dir=v.Kb({type:a,selectors:[["","videoDragDrop",""]],hostVars:4,hostBindings:function(t,e){1&t&&v.cc("dragover",function(t){return e.onDragOver(t)})("dragleave",function(t){return e.onDragLeave(t)})("drop",function(t){return e.ondrop(t)}),2&t&&v.yc("background-color",e.background)("opacity",e.opacity)},outputs:{files:"files"}}),a);function C(t,e){if(1&t){var n=v.Wb();v.Vb(0,"div",17),v.cc("click",function(){return v.uc(n),v.sc(2).click()})("files",function(t){v.uc(n);var e=v.gc().$implicit;return v.gc().uploadImages(t,e)}),v.Vb(1,"input",18,19),v.cc("change",function(t){v.uc(n);var e=v.gc().$implicit;return v.gc().uploadImages(t.target.files,e)}),v.Ub(),v.Ub()}}function M(t,e){1&t&&v.Qb(0,"div",20)}function O(t,e){1&t&&v.Qb(0,"div",21)}function j(t,e){if(1&t&&v.Qb(0,"img",24),2&t){var n=v.gc(2).$implicit,i=v.gc();v.lc("src",i.imageUrls[n],v.wc)}}function _(t,e){if(1&t){var n=v.Wb();v.Vb(0,"button",25),v.cc("click",function(){v.uc(n);var t=v.gc(2).index;return v.gc().deleteAttachment(t)}),v.Qb(1,"i",26),v.Ub()}}function L(t,e){if(1&t&&(v.Vb(0,"div",21),v.Bc(1,j,1,1,"img",22),v.Bc(2,_,2,0,"button",23),v.Ub()),2&t){var n=v.gc().$implicit,i=v.gc();v.Db(1),v.lc("ngIf",i.imageUrls[n]),v.Db(1),v.lc("ngIf",i.imageUrls[n])}}function T(t,e){if(1&t&&(v.Vb(0,"mat-grid-tile"),v.Bc(1,C,3,0,"div",14),v.Bc(2,M,1,0,"div",15),v.Bc(3,O,1,0,"div",16),v.Bc(4,L,3,2,"div",16),v.Ub()),2&t){var n=e.$implicit,i=v.gc();v.Db(1),v.lc("ngIf",!i.imageUrls[n]&&!i.isUpLoadingImage),v.Db(1),v.lc("ngIf",!i.imageUrls[n]&&i.isUpLoadingImage&&n==i.upLoadingIndex),v.Db(1),v.lc("ngIf",!i.imageUrls[n]&&i.isUpLoadingImage&&n!=i.upLoadingIndex),v.Db(1),v.lc("ngIf",i.imageUrls[n])}}function R(t,e){if(1&t){var n=v.Wb();v.Vb(0,"div",27),v.cc("click",function(){return v.uc(n),v.sc(2).click()})("files",function(t){return v.uc(n),v.gc().uploadVideo(t)}),v.Vb(1,"input",28,29),v.cc("change",function(t){return v.uc(n),v.gc().uploadVideo(t.target.files)}),v.Ub(),v.Ub()}}function S(t,e){1&t&&v.Qb(0,"div",30)}function B(t,e){if(1&t&&(v.Vb(0,"video",33),v.Qb(1,"source",34),v.Ub()),2&t){var n=v.gc(2);v.lc("src",n.videoUrl,v.wc)}}function F(t,e){if(1&t){var n=v.Wb();v.Vb(0,"button",35),v.cc("click",function(){return v.uc(n),v.gc(2).deleteVideo()}),v.Qb(1,"i",26),v.Ub()}}function N(t,e){if(1&t&&(v.Vb(0,"div",30),v.Bc(1,B,2,1,"video",31),v.Bc(2,F,2,0,"button",32),v.Ub()),2&t){var n=v.gc();v.Db(1),v.lc("ngIf",n.videoUrl),v.Db(1),v.lc("ngIf",n.videoUrl)}}var Q,A=function(){return[0,1,2,3,4,5]},z=((Q=function(){function e(n,i,o,a,c){t(this,e),this.notificationService=n,this.projectService=i,this.dialogRef=o,this.storage=a,this.data=c,this.imageUrls=[],o.disableClose=!0}return n(e,[{key:"ngOnInit",value:function(){this.clb_id=JSON.parse(f.a.get("loginInfo")).info.clb_ID,this.getProject(),this.initImageArray(),this.videoUrl=this.data.videoUrl}},{key:"initImageArray",value:function(){this.imageUrls=this.data.images;for(var t=this.imageUrls.length,e=0;e<6-t;e++)this.imageUrls.push("")}},{key:"uploadImages",value:function(t,e){var n=this;if(this.isUpLoadingImage=!0,this.upLoadingIndex=e,t.length>1)return this.notificationService.warn("Ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn 1 \u1ea3nh"),this.isUpLoadingImage=!1,void(this.upLoadingIndex=null);for(var i=function(i){a=Date.now();var o=t[i],c=n.storage.ref("chari/".concat(a));n.storage.upload("chari/".concat(a),o).snapshotChanges().pipe(Object(h.a)(function(){n.downloadURL=c.getDownloadURL(),n.downloadURL.subscribe(function(t){t&&(n.imageUrls[e]=t,n.isUpLoadingImage=!1,n.upLoadingIndex=null)})})).subscribe(function(t){t&&console.log(t)})},o=0;o<t.length;o++){var a;i(o)}}},{key:"uploadVideo",value:function(t){var e=this;if(this.isUploadingVideo=!0,t.length>1)return this.notificationService.warn("Ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ecdn 1 video"),void(this.isUploadingVideo=!1);for(var n=function(n){o=Date.now();var i=t[n],a=e.storage.ref("chari_video/".concat(o));e.storage.upload("chari_video/".concat(o),i).snapshotChanges().pipe(Object(h.a)(function(){e.downloadURL=a.getDownloadURL(),e.downloadURL.subscribe(function(t){t&&(e.videoUrl=t,e.isUploadingVideo=!1)})})).subscribe(function(t){t&&console.log(t)})},i=0;i<t.length;i++){var o;n(i)}}},{key:"deleteAttachment",value:function(t){this.imageUrls[t]=""}},{key:"deleteVideo",value:function(){this.videoUrl=null}},{key:"getProject",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.projectService.getAllProjects(this.clb_id);case 2:return t.next=4,t.sent.data;case 4:this.Projects=t.sent;case 5:case"end":return t.stop()}},t,this)}))}},{key:"save",value:function(){this.data.videoUrl=this.videoUrl,this.data.imageUrl=this.imageUrls[0],this.data.images=this.imageUrls,this.dialogRef.close(this.data)}}]),e}()).\u0275fac=function(t){return new(t||Q)(v.Pb(g.a),v.Pb(d.a),v.Pb(p.g),v.Pb(m.a),v.Pb(p.a))},Q.\u0275cmp=v.Jb({type:Q,selectors:[["app-dialog-post"]],decls:28,vars:15,consts:[["mat-icon-button","","mat-dialog-close","",1,"close-button"],["color","warn",1,"close-icon"],["mat-dialog-tile",""],["appearance","outline"],["name","post_name","matInput","","required","","cdkFocusInitial","",3,"ngModel","ngModelChange"],["matInput","","name","content","required","",3,"ngModel","ngModelChange"],["disabled","","matInput","","name","content",3,"ngModel","ngModelChange"],["name","publicPost",3,"ngModel","ngModelChange"],["cols","3"],[4,"ngFor","ngForOf"],["class","video-container","videoDragDrop","",3,"click","files",4,"ngIf"],["class","video-container-loading",4,"ngIf"],["align","end"],["mat-button","",1,"btn","btn-success",3,"click"],["class","image-container","imageDragDrop","",3,"click","files",4,"ngIf"],["class","image-container-loading",4,"ngIf"],["class","image-container",4,"ngIf"],["imageDragDrop","",1,"image-container",3,"click","files"],["hidden","","type","file","multiple","false","accept",".jpg,.jpeg,.png",3,"change"],["imageInput",""],[1,"image-container-loading"],[1,"image-container"],["alt","",3,"src",4,"ngIf"],["type","button","class","button btn btn-danger btn-sm",3,"click",4,"ngIf"],["alt","",3,"src"],["type","button",1,"button","btn","btn-danger","btn-sm",3,"click"],[1,"fa","fa-remove"],["videoDragDrop","",1,"video-container",3,"click","files"],["hidden","","type","file","multiple","false","accept",".mp4",3,"change"],["fileInput",""],[1,"video-container-loading"],["controls","",3,"src",4,"ngIf"],["type","button","class","delete-video-button btn btn-danger btn-sm",3,"click",4,"ngIf"],["controls","",3,"src"],["src","videoUrl","type","video/mp4"],["type","button",1,"delete-video-button","btn","btn-danger","btn-sm",3,"click"]],template:function(t,e){1&t&&(v.Vb(0,"button",0),v.Vb(1,"mat-icon",1),v.Dc(2,"close"),v.Ub(),v.Ub(),v.Vb(3,"h3",2),v.Dc(4,"Th\xeam tin t\u1ee9c m\u1edbi"),v.Ub(),v.Vb(5,"mat-dialog-content"),v.Vb(6,"mat-form-field",3),v.Vb(7,"mat-label"),v.Dc(8,"T\xean Tin"),v.Ub(),v.Vb(9,"input",4),v.cc("ngModelChange",function(t){return e.data.name=t}),v.Ub(),v.Ub(),v.Vb(10,"mat-form-field",3),v.Vb(11,"mat-label"),v.Dc(12,"N\u1ed9i dung"),v.Ub(),v.Vb(13,"textarea",5),v.cc("ngModelChange",function(t){return e.data.content=t}),v.Ub(),v.Ub(),v.Vb(14,"mat-form-field",3),v.Vb(15,"mat-label"),v.Dc(16,"D\u1ef1 \xe1n li\xean quan"),v.Ub(),v.Vb(17,"input",6),v.cc("ngModelChange",function(t){return e.data.projectName=t}),v.Ub(),v.Ub(),v.Vb(18,"mat-checkbox",7),v.cc("ngModelChange",function(t){return e.data.isPublic=t}),v.Dc(19,"C\xf4ng b\u1ed1 Tin"),v.Ub(),v.Vb(20,"mat-grid-list",8),v.Bc(21,T,5,4,"mat-grid-tile",9),v.Ub(),v.Bc(22,R,3,0,"div",10),v.Bc(23,S,1,0,"div",11),v.Bc(24,N,3,2,"div",11),v.Ub(),v.Vb(25,"mat-dialog-actions",12),v.Vb(26,"button",13),v.cc("click",function(){return e.save()}),v.Dc(27,"L\u01b0u"),v.Ub(),v.Ub()),2&t&&(v.Db(6),v.yc("width",100,"%"),v.Db(3),v.lc("ngModel",e.data.name),v.Db(1),v.yc("width",100,"%"),v.Db(3),v.lc("ngModel",e.data.content),v.Db(1),v.yc("width",50,"%"),v.Db(3),v.lc("ngModel",e.data.projectName),v.Db(1),v.lc("ngModel",e.data.isPublic),v.Db(3),v.lc("ngForOf",v.nc(14,A)),v.Db(1),v.lc("ngIf",!e.videoUrl&&!e.isUploadingVideo),v.Db(1),v.lc("ngIf",e.isUploadingVideo),v.Db(1),v.lc("ngIf",e.videoUrl))},directives:[U.a,p.d,D.a,p.e,k.b,k.e,y.b,V.c,V.m,V.i,V.k,P.a,I.a,r.j,r.k,p.c,I.c,x,w],styles:[".image-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif)}.image-container[_ngcontent-%COMP%], .image-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:70px;background-position:50%;width:300px;height:180px;margin:5px}.image-container[_ngcontent-%COMP%]{background-image:url(upload.5ca7ecf41ef411651ece.png);border:1px dashed #1c8adb;border-radius:2px}.image-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}img[_ngcontent-%COMP%]{width:300px;height:182px;left:-2px;border-radius:2px}.button[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{position:absolute;top:-2px}.button[_ngcontent-%COMP%]{right:-5px}.video-container-loading[_ngcontent-%COMP%]{background-image:url(loading.8ce64eeb4935117736d4.gif);border-radius:6px}.video-container[_ngcontent-%COMP%], .video-container-loading[_ngcontent-%COMP%]{position:relative;background-repeat:no-repeat;background-size:300px;background-position:50%;width:100%;height:400px;margin:10px auto}.video-container[_ngcontent-%COMP%]{background-image:url(upload-video.08ba7a62c53b6c43597a.png);border:2px dashed #1c8adb;border-radius:6px}.video-container[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#9ecbec!important;opacity:.8}video[_ngcontent-%COMP%]{position:absolute;border-radius:3px;width:100%;height:auto}.delete-video-button[_ngcontent-%COMP%]{position:absolute;right:0}.close-button[_ngcontent-%COMP%]{float:right;top:-24px;right:-24px}.back-button[_ngcontent-%COMP%]{float:left;top:-24px;left:-24px}"]}),Q),J=o("6No5"),$=o("ZTz/"),E=o("978R"),W=o("UhP/");function q(t,e){1&t&&(v.Vb(0,"td"),v.Dc(1,"Ch\u01b0a gi\u1ea3i ng\xe2n"),v.Ub())}function Z(t,e){1&t&&(v.Vb(0,"td"),v.Dc(1,"\u0110\xe3 gi\u1ea3i ng\xe2n"),v.Ub())}function G(t,e){if(1&t){var n=v.Wb();v.Vb(0,"tbody"),v.Vb(1,"td"),v.Dc(2),v.Ub(),v.Vb(3,"td",14),v.Dc(4),v.Ub(),v.Vb(5,"td"),v.Dc(6),v.Ub(),v.Vb(7,"td"),v.Dc(8),v.Ub(),v.Vb(9,"td"),v.Dc(10,"0"),v.Ub(),v.Bc(11,q,2,0,"td",15),v.Bc(12,Z,2,0,"td",15),v.Vb(13,"td",8),v.Vb(14,"button",16),v.cc("click",function(){v.uc(n);var t=e.$implicit,i=v.gc();return i.clearData(t),i.openDialog()}),v.Qb(15,"i",17),v.Ub(),v.Ub(),v.Ub()}if(2&t){var i=e.$implicit,o=e.index;v.Db(2),v.Ec(o+1),v.Db(2),v.Ec(i.projectName),v.Db(2),v.Ec(i.projectType.projectTypeName),v.Db(2),v.Ec(i.targetMoney/1e6),v.Db(3),v.lc("ngIf",0==i.disbursed),v.Db(1),v.lc("ngIf",1==i.disbursed)}}function K(t,e){if(1&t&&(v.Vb(0,"mat-option",18),v.Dc(1),v.Ub()),2&t){var n=e.$implicit;v.lc("value",n.id),v.Db(1),v.Ec(n.value)}}var Y,H,X,tt=[{path:"",component:(Y=function(){function e(n,i,o,a){var c=this;t(this,e),this.projectService=n,this.postService=i,this.notificationService=o,this.dialog=a,this.maxSize=5,this.itemsPerPage=5,this.currentPage=1,this.options=[{id:1,value:5},{id:2,value:10},{id:3,value:25},{id:4,value:100}],this.selected1=this.options[0].id,this.savePost=function(t){return Object(l.b)(c,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.postService.savePost(t,this.clb_id);case 3:if(e.t0=e.sent,!e.t0){e.next=6;break}this.notificationService.success("Th\xeam tin t\u1ee9c th\xe0nh c\xf4ng");case 6:e.next=11;break;case 8:e.prev=8,e.t1=e.catch(0),alert("Th\xeam tin t\u1ee9c th\u1ea5t b\u1ea1i");case 11:case"end":return e.stop()}},e,this,[[0,8]])}))}}return n(e,[{key:"pageChanged",value:function(t){this.currentPage=t.page,this.getList(this.currentPage,this.itemsPerPage)}},{key:"rowsChanged",value:function(t){this.itemsPerPage=this.options[t.value-1].value,this.getList(this.currentPage,this.itemsPerPage)}},{key:"ngOnInit",value:function(){this.clb_id=JSON.parse(f.a.get("loginInfo")).info.clb_ID,this.countTotal(),this.getList(1,this.itemsPerPage)}},{key:"countTotal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.projectService.countReached(this.clb_id);case 2:return t.next=4,t.sent.data;case 4:this.totalItems=t.sent;case 5:case"end":return t.stop()}},t,this)}))}},{key:"getList",value:function(t,e){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.projectService.getReached(this.clb_id,t,e);case 2:return n.next=4,n.sent.data;case 4:this.Projects=n.sent;case 5:case"end":return n.stop()}},n,this)}))}},{key:"openDialog",value:function(){var t=this;this.dialog.open(z,{width:"900px",data:this.Post}).afterClosed().subscribe(function(e){e&&t.savePost(e)})}},{key:"clearData",value:function(t){this.Post={pos_ID:null,name:"",content:"",projectId:t.prj_ID,projectName:t.projectName,isPublic:!0,imageUrl:"",videoUrl:"",collaboratorId:this.clb_id,images:[]}}},{key:"numberWithCommas",value:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}]),e}(),Y.\u0275fac=function(t){return new(t||Y)(v.Pb(d.a),v.Pb(u.a),v.Pb(g.a),v.Pb(p.b))},Y.\u0275cmp=v.Jb({type:Y,selectors:[["ng-component"]],decls:35,vars:11,consts:[[1,"col-lg"],[1,"card"],[1,"card-header"],[1,"row"],[1,"col"],[1,"card-title"],[1,"card-body"],[1,"table","table-light"],[2,"text-align","right"],[4,"ngFor","ngForOf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",1,"pagination-sm",3,"totalItems","ngModel","maxSize","boundaryLinks","rotate","itemsPerPage","ngModelChange","pageChanged"],["align","right"],[3,"ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"width","30%"],[4,"ngIf"],["type","button","tooltip","\u0110\u0103ng tin t\u1ee9c",1,"btn","btn-stack-overflow","btn-sm",3,"click"],[1,"fa","fa-plus-square"],[3,"value"]],template:function(t,e){1&t&&(v.Vb(0,"div",0),v.Vb(1,"div",1),v.Vb(2,"div",2),v.Vb(3,"div",3),v.Vb(4,"div",4),v.Vb(5,"h3",5),v.Dc(6," D\u1ef1 \xe1n \u0111\xe3 th\xe0nh c\xf4ng "),v.Ub(),v.Ub(),v.Ub(),v.Ub(),v.Vb(7,"div",6),v.Vb(8,"table",7),v.Vb(9,"thead"),v.Vb(10,"tr"),v.Vb(11,"th"),v.Dc(12,"#"),v.Ub(),v.Vb(13,"th"),v.Dc(14,"T\xean D\u1ef1 \xe1n"),v.Ub(),v.Vb(15,"th"),v.Dc(16,"G\xf3i t\u1eeb thi\u1ec7n"),v.Ub(),v.Vb(17,"th"),v.Dc(18,"M\u1ee5c ti\xeau (Tri\u1ec7u \u0111\u1ed3ng)"),v.Ub(),v.Vb(19,"th"),v.Dc(20,"S\u1ed1 Tin li\xean quan"),v.Ub(),v.Vb(21,"th"),v.Dc(22,"T\xecnh tr\u1ea1ng"),v.Ub(),v.Vb(23,"th",8),v.Dc(24,"T\xe1c v\u1ee5"),v.Ub(),v.Ub(),v.Ub(),v.Bc(25,G,16,6,"tbody",9),v.Qb(26,"tbody"),v.Ub(),v.Vb(27,"div",3),v.Vb(28,"div",4),v.Vb(29,"pagination",10),v.cc("ngModelChange",function(t){return e.currentPage=t})("pageChanged",function(t){return e.pageChanged(t)}),v.Ub(),v.Ub(),v.Vb(30,"mat-form-field",11),v.Vb(31,"mat-label"),v.Dc(32,"S\u1ed1 h\xe0ng hi\u1ec3n th\u1ecb"),v.Ub(),v.Vb(33,"mat-select",12),v.cc("selectionChange",function(t){return e.rowsChanged(t)})("ngModelChange",function(t){return e.selected1=t}),v.Bc(34,K,2,2,"mat-option",13),v.Ub(),v.Ub(),v.Ub(),v.Ub(),v.Ub(),v.Ub()),2&t&&(v.Db(25),v.lc("ngForOf",e.Projects),v.Db(4),v.lc("totalItems",e.totalItems)("ngModel",e.currentPage)("maxSize",e.maxSize)("boundaryLinks",!0)("rotate",!1)("itemsPerPage",e.itemsPerPage),v.Db(1),v.yc("width",80,"px"),v.Db(3),v.lc("ngModel",e.selected1),v.Db(1),v.lc("ngForOf",e.options))},directives:[r.j,J.a,V.i,V.k,k.b,k.e,$.a,r.k,E.a,W.m],encapsulation:2}),Y),data:{title:"D\u1ef1 \xe1n \u0111\xe3 th\xe0nh c\xf4ng"}}],et=((H=function e(){t(this,e)}).\u0275fac=function(t){return new(t||H)},H.\u0275mod=v.Nb({type:H}),H.\u0275inj=v.Mb({imports:[[s.g.forChild(tt)],s.g]}),H),nt=o("kMuZ"),it=o("jmUF"),ot=o("AytR"),at=((X=function e(){t(this,e)}).\u0275fac=function(t){return new(t||X)},X.\u0275mod=v.Nb({type:X}),X.\u0275inj=v.Mb({imports:[[r.c,et,J.b.forRoot(),V.e,nt.a,m.b,it.a.initializeApp(ot.a.firebaseConfig,"cloud"),E.b.forRoot()]]}),X)}}])}();