/*!
 * ngx-snowf v0.0.1
 * 2017 (c) - Fuxy526
 * Released under the MIT License.
 */
module.exports=function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=require("@angular/core")},function(t,e,i){"use strict";var n=this&&this.__decorate||function(t,e,i,n){var s,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),o=i(2),a=i(3),r=function(){function t(){}return t=n([s.NgModule({imports:[o.CommonModule],declarations:[a.SnowfComponent],exports:[a.SnowfComponent]})],t)}();e.SnowfModule=r},function(t,e){t.exports=require("@angular/common")},function(t,e,i){"use strict";var n=this&&this.__decorate||function(t,e,i,n){var s,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),a=function(){function t(t){this.elementRef=t,this.amount=50,this.size=5,this.speed=1.5,this.wind=0,this.color="#fff",this.opacity=.8,this.swing=1,this.image=null,this.zIndex=null,this.inited=!1,this.canvas=null,this.context=null,this.flakes=[],this.canvasWidth=0,this.canvasHeight=0,this.img=null}return t.prototype.onResize=function(){this.handleResize()},t.prototype.ngOnInit=function(){var t=this;this.canvas=this.elementRef.nativeElement.querySelector(".snowf-canvas"),this.context=this.canvas.getContext("2d"),this.canvasHeight=this.canvas.offsetHeight,this.canvasWidth=this.canvas.offsetWidth,this.canvas.height=this.canvasHeight,this.canvas.width=this.canvasWidth,null!=this.zIndex&&(this.canvas.style.zIndex=this.zIndex),this.image?(this.img=new Image,this.img.onload=function(){return t.init()},this.img.src=this.image):this.init()},t.prototype.ngOnChanges=function(t){t.amount&&t.amount.firstChange||(t.zIndex&&(this.canvas.style.zIndex=this.zIndex),t.amount&&this.update(),t.image&&(this.img=new Image,this.img.src=this.image))},t.prototype.update=function(){var t=this;this.image?(this.img=new Image,this.img.onload=function(){return t.init()},this.img.src=this.image):this.init()},t.prototype.init=function(){this.flakes=[];for(var t=0;t<this.amount;t++)this.flakes.push({x:this.random(0,this.canvasWidth),y:this.random(0,this.canvasHeight),r:this.random(this.size,2*this.size)/2,velX:0,velY:this.random(this.speed,2*this.speed),swing:this.random(0,2*Math.PI),opacity:this.random(0,this.opacity)});this.inited||(this.inited=!0,this.snow())},t.prototype.snow=function(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight);for(var t=0;t<this.flakes.length;t++){var e=this.flakes[t];this.image?this.context.drawImage(this.img,e.x-e.r,e.y-e.r,2*e.r,2*e.r):(this.context.beginPath(),this.context.fillStyle="rgba("+this.getRgb(this.color)+","+e.opacity+")",this.context.arc(e.x,e.y,e.r,2*Math.PI,!1),this.context.fill(),this.context.closePath()),e.velX=Math.abs(e.velX)<Math.abs(this.wind)?e.velX+this.wind/20:this.wind,e.y=e.y+.5*e.velY,e.x=e.x+(this.swing?.4*Math.cos(e.swing+=.03)*e.opacity*this.swing:0)+.5*e.velX,(e.x>this.canvasWidth+e.r||e.x<-e.r||e.y>this.canvasHeight+e.r||e.y<-e.r)&&this.reset(e)}requestAnimationFrame(this.snow.bind(this))},t.prototype.reset=function(t){var e=t.r;t.r=this.random(this.size,2*this.size)/2,t.x>this.canvasWidth+e?(t.x=-t.r,t.y=this.random(0,this.canvasHeight)):t.x<-e?(t.x=this.canvasWidth+t.r,t.y=this.random(0,this.canvasHeight)):(t.x=this.random(0,this.canvasWidth),t.y=-t.r),t.velX=0,t.velY=this.random(this.speed,2*this.speed),t.swing=this.random(0,2*Math.PI),t.opacity=this.random(0,this.opacity)},t.prototype.handleResize=function(){if(this.inited){var t=this.canvas.height,e=this.canvas.width,i=this.canvas.offsetHeight,n=this.canvas.offsetWidth;this.canvas.height=this.canvasHeight=i,this.canvas.width=this.canvasWidth=n;for(var s=0;s<this.flakes.length;s++){var o=this.flakes[s];o.x=o.x/e*n,o.y=o.y/t*i}}},t.prototype.random=function(t,e){var i=e-t;return e===t?t:Math.random()*i+t},t.prototype.getRgb=function(t){return 0===t.indexOf("#")?4===t.length?t.substr(1).split("").map(function(t){return parseInt(t.concat(t),16)}).join(","):7===t.length?[t.substr(1,2),t.substr(3,2),t.substr(5,2)].map(function(t){return parseInt(t,16)}).join(","):"255,255,255":0===t.indexOf("rgb(")?t.substring(4,t.length-1):"255,255,255"},n([o.Input("amount"),s("design:type",Number)],t.prototype,"amount",void 0),n([o.Input("size"),s("design:type",Number)],t.prototype,"size",void 0),n([o.Input("speed"),s("design:type",Number)],t.prototype,"speed",void 0),n([o.Input("wind"),s("design:type",Number)],t.prototype,"wind",void 0),n([o.Input("color"),s("design:type",String)],t.prototype,"color",void 0),n([o.Input("opacity"),s("design:type",Number)],t.prototype,"opacity",void 0),n([o.Input("swing"),s("design:type",Number)],t.prototype,"swing",void 0),n([o.Input("image"),s("design:type",String)],t.prototype,"image",void 0),n([o.Input("zIndex"),s("design:type",Number)],t.prototype,"zIndex",void 0),n([o.HostListener("window:resize",["$event"]),s("design:type",Function),s("design:paramtypes",[]),s("design:returntype",void 0)],t.prototype,"onResize",null),t=n([o.Component({selector:"Snowf",template:'<canvas class="snowf-canvas"></canvas>',styles:["\n    .snowf-canvas {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n    }\n  "]}),s("design:paramtypes",[o.ElementRef])],t)}();e.SnowfComponent=a}]);