
/*
##############################################
#				Ready JS			         #
#											 #
##############################################
*/

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function"!==typeof Object.create&&(Object.create=function(d){function h(){}h.prototype=d;return new h});
(function(d,h,l,m){var k={init:function(b,a){var c=this;c.elem=a;c.$elem=d(a);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=d.extend({},d.fn.elevateZoom.options,b);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);d("#"+c.options.gallery+" a").click(function(a){c.options.galleryActiveClass&&
(d("#"+c.options.gallery+" a").removeClass(c.options.galleryActiveClass),d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image")?c.zoomImagePre=d(this).data("zoom-image"):c.zoomImagePre=d(this).data("image");c.swaptheimage(d(this).data("image"),c.zoomImagePre);return!1})},refresh:function(b){var a=this;setTimeout(function(){a.fetch(a.imageSrc)},b||a.options.refresh)},fetch:function(b){var a=this,c=new Image;c.onload=function(){a.largeWidth=c.width;a.largeHeight=
c.height;a.startZoom();a.currentImage=a.imageSrc;a.options.onZoomedImageLoaded(a.$elem)};c.src=b},startZoom:function(){var b=this;b.nzWidth=b.$elem.width();b.nzHeight=b.$elem.height();b.isWindowActive=!1;b.isLensActive=!1;b.isTintActive=!1;b.overWindow=!1;b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />'),b.$elem.css("position","absolute"));b.zoomLock=1;b.scrollingLock=!1;b.changeBgSize=!1;b.currentZoomLevel=b.options.zoomLevel;
b.nzOffset=b.$elem.offset();b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth;b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight;"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+
"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;");if("inner"==b.options.zoomType){var a=b.$elem.css("border-left-width");b.zoomWindowStyle="overflow: hidden;margin-left: "+String(a)+";margin-top: "+String(a)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==
b.options.zoomType&&(lensHeight=b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?b.nzHeight:String(b.options.zoomWindowHeight/b.heightRatio),lensWidth=b.largeWidth<b.options.zoomWindowWidth?b.nzWidth:b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+
b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;");b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;";
b.lensRound="";"lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+
"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;");b.zoomContainer=d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow",
"hidden");"inner"!=b.options.zoomType&&(b.zoomLens=d("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")}),b.options.tint&&(b.tintContainer=d("<div/>").addClass("tintContainer"),b.zoomTint=d("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+
b.nzWidth+"px; height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){b.$elem.trigger("click")})));isNaN(b.options.zoomWindowPosition)?b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){b.$elem.trigger("click")}):b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+
"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")});b.zoomWindowContainer=d("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens"==b.options.zoomType&&b.zoomLens.css({backgroundImage:"url('"+b.imageSrc+"')"});"window"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+"')"});"inner"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+
"')"});b.$elem.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchmove",function(a){"inner"==b.options.zoomType&&b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});
b.$elem.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}),b.zoomLens.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")}));
b.$elem.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),
b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.add(b.$elem).mouseenter(function(){!1==b.overWindow&&
b.setElements("show")}).mouseleave(function(){b.scrollLock||b.setElements("hide")});"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function(){b.overWindow=!0;b.setElements("hide")}).mouseleave(function(){b.overWindow=!1});b.minZoomLevel=b.options.minZoomLevel?b.options.minZoomLevel:2*b.options.scrollZoomIncrement;b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){b.scrollLock=!0;clearTimeout(d.data(this,"timer"));d.data(this,"timer",
setTimeout(function(){b.scrollLock=!1},250));var e=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0<e/120?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement);
return!1})},setElements:function(b){if(!this.options.zoomEnabled)return!1;"show"==b&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show"));"hide"==b&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),
this.options.tint&&this.showHideTint("hide"))},setPosition:function(b){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height();this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/
this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/
this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(b.pageX-this.nzOffset.left);this.mouseTop=
parseInt(b.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-
this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize);0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),
this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),
"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((b.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((b.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+
"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(b)),this.options.tint&&"inner"!=this.options.zoomType&&
this.setTintPosition(b),"window"==this.options.zoomType&&this.setWindowPostition(b),"inner"==this.options.zoomType&&this.setWindowPostition(b),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(b){"show"!=b||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=
!0);"hide"==b&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(b){"show"!=b||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0);"hide"==b&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),
this.isLensActive=!1)},showHideTint:function(b){"show"!=b||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0);"hide"==b&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(b){},
setWindowPostition:function(b){var a=this;if(isNaN(a.options.zoomWindowPosition))a.externalContainer=d("#"+a.options.zoomWindowPosition),a.externalContainerWidth=a.externalContainer.width(),a.externalContainerHeight=a.externalContainer.height(),a.externalContainerOffset=a.externalContainer.offset(),a.windowOffsetTop=a.externalContainerOffset.top,a.windowOffsetLeft=a.externalContainerOffset.left;else switch(a.options.zoomWindowPosition){case 1:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=
+a.nzWidth;break;case 2:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=a.nzWidth);break;case 3:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=a.nzWidth;break;case 4:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth;break;case 5:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 6:a.options.zoomWindowHeight>
a.nzHeight&&(a.windowOffsetTop=a.nzHeight,a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 7:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=0;break;case 8:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 9:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 10:a.options.zoomWindowHeight>a.nzHeight&&
(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize));break;case 11:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 12:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 13:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=
0;break;case 14:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize),a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 15:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 16:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth;break;default:a.windowOffsetTop=
a.options.zoomWindowOffety,a.windowOffsetLeft=a.nzWidth}a.isWindowSet=!0;a.windowOffsetTop+=a.options.zoomWindowOffety;a.windowOffsetLeft+=a.options.zoomWindowOffetx;a.zoomWindow.css({top:a.windowOffsetTop});a.zoomWindow.css({left:a.windowOffsetLeft});"inner"==a.options.zoomType&&(a.zoomWindow.css({top:0}),a.zoomWindow.css({left:0}));a.windowLeftPos=String(-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2));a.windowTopPos=String(-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/
2));a.Etoppos&&(a.windowTopPos=0);a.Eloppos&&(a.windowLeftPos=0);a.Eboppos&&(a.windowTopPos=-1*(a.largeHeight/a.currentZoomLevel-a.zoomWindow.height()));a.Eroppos&&(a.windowLeftPos=-1*(a.largeWidth/a.currentZoomLevel-a.zoomWindow.width()));a.fullheight&&(a.windowTopPos=0);a.fullwidth&&(a.windowLeftPos=0);if("window"==a.options.zoomType||"inner"==a.options.zoomType)1==a.zoomLock&&(1>=a.widthRatio&&(a.windowLeftPos=0),1>=a.heightRatio&&(a.windowTopPos=0)),a.largeHeight<a.options.zoomWindowHeight&&(a.windowTopPos=
0),a.largeWidth<a.options.zoomWindowWidth&&(a.windowLeftPos=0),a.options.easing?(a.xp||(a.xp=0),a.yp||(a.yp=0),a.loop||(a.loop=setInterval(function(){a.xp+=(a.windowLeftPos-a.xp)/a.options.easingAmount;a.yp+=(a.windowTopPos-a.yp)/a.options.easingAmount;a.scrollingLock?(clearInterval(a.loop),a.xp=a.windowLeftPos,a.yp=a.windowTopPos,a.xp=-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2),a.yp=-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/2),a.changeBgSize&&(a.nzHeight>
a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),
a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+"px "+a.windowTopPos+"px"}),a.scrollingLock=!1,a.loop=!1):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+
"px "+a.largeHeight/a.newvaluewidth+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.xp+"px "+a.yp+"px"}))},16))):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/
a.newvalueheight+"px"})):("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}),a.largeHeight/a.newvaluewidth<a.options.zoomWindowHeight?a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}):a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+
"px "+a.windowTopPos+"px"}))},setTintPosition:function(b){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(b.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(b.pageY-this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize));
this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(b,a){var c=this,e=new Image;c.options.loadingIcon&&(c.spinner=d("<div style=\"background: url('"+c.options.loadingIcon+"') no-repeat center;height:"+c.nzHeight+"px;width:"+c.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),c.$elem.after(c.spinner));
c.options.onImageSwap(c.$elem);e.onload=function(){c.largeWidth=e.width;c.largeHeight=e.height;c.zoomImage=a;c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.swapAction(b,a)};e.src=a},swapAction:function(b,a){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback()};e.src=b;c.currentZoomLevel=c.options.zoomLevel;c.options.maxZoomLevel=
!1;"lens"==c.options.zoomType&&c.zoomLens.css({backgroundImage:"url('"+a+"')"});"window"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});"inner"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});c.currentImage=a;if(c.options.imageCrossfade){var f=c.$elem,g=f.clone();c.$elem.attr("src",b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()});c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
f.fadeIn(c.options.imageCrossfade);c.options.tint&&"inner"!=c.options.zoomType&&(f=c.zoomTintImage,g=f.clone(),c.zoomTintImage.attr("src",a),c.zoomTintImage.after(g),g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()}),f.fadeIn(c.options.imageCrossfade),c.zoomTint.css({height:c.$elem.height()}),c.zoomTint.css({width:c.$elem.width()}));c.zoomContainer.css("height",c.$elem.height());c.zoomContainer.css("width",c.$elem.width());"inner"!=c.options.zoomType||c.options.constrainType||
(c.zoomWrap.parent().css("height",c.$elem.height()),c.zoomWrap.parent().css("width",c.$elem.width()),c.zoomWindow.css("height",c.$elem.height()),c.zoomWindow.css("width",c.$elem.width()))}else c.$elem.attr("src",b),c.options.tint&&(c.zoomTintImage.attr("src",a),c.zoomTintImage.attr("height",c.$elem.height()),c.zoomTintImage.css({height:c.$elem.height()}),c.zoomTint.css({height:c.$elem.height()})),c.zoomContainer.css("height",c.$elem.height()),c.zoomContainer.css("width",c.$elem.width());c.options.imageCrossfade&&
(c.zoomWrap.css("height",c.$elem.height()),c.zoomWrap.css("width",c.$elem.width()));c.options.constrainType&&("height"==c.options.constrainType&&(c.zoomContainer.css("height",c.options.constrainSize),c.zoomContainer.css("width","auto"),c.options.imageCrossfade?(c.zoomWrap.css("height",c.options.constrainSize),c.zoomWrap.css("width","auto"),c.constwidth=c.zoomWrap.width()):(c.$elem.css("height",c.options.constrainSize),c.$elem.css("width","auto"),c.constwidth=c.$elem.width()),"inner"==c.options.zoomType&&
(c.zoomWrap.parent().css("height",c.options.constrainSize),c.zoomWrap.parent().css("width",c.constwidth),c.zoomWindow.css("height",c.options.constrainSize),c.zoomWindow.css("width",c.constwidth)),c.options.tint&&(c.tintContainer.css("height",c.options.constrainSize),c.tintContainer.css("width",c.constwidth),c.zoomTint.css("height",c.options.constrainSize),c.zoomTint.css("width",c.constwidth),c.zoomTintImage.css("height",c.options.constrainSize),c.zoomTintImage.css("width",c.constwidth))),"width"==
c.options.constrainType&&(c.zoomContainer.css("height","auto"),c.zoomContainer.css("width",c.options.constrainSize),c.options.imageCrossfade?(c.zoomWrap.css("height","auto"),c.zoomWrap.css("width",c.options.constrainSize),c.constheight=c.zoomWrap.height()):(c.$elem.css("height","auto"),c.$elem.css("width",c.options.constrainSize),c.constheight=c.$elem.height()),"inner"==c.options.zoomType&&(c.zoomWrap.parent().css("height",c.constheight),c.zoomWrap.parent().css("width",c.options.constrainSize),c.zoomWindow.css("height",
c.constheight),c.zoomWindow.css("width",c.options.constrainSize)),c.options.tint&&(c.tintContainer.css("height",c.constheight),c.tintContainer.css("width",c.options.constrainSize),c.zoomTint.css("height",c.constheight),c.zoomTint.css("width",c.options.constrainSize),c.zoomTintImage.css("height",c.constheight),c.zoomTintImage.css("width",c.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide();this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();
this.nzHeight=this.$elem.height();this.currentZoomLevel=this.options.zoomLevel;this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",
lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var b=this;b.gallerylist=[];b.options.gallery?d("#"+b.options.gallery+" a").each(function(){var a="";d(this).data("zoom-image")?a=d(this).data("zoom-image"):d(this).data("image")&&(a=d(this).data("image"));a==b.zoomImage?b.gallerylist.unshift({href:""+a+"",title:d(this).find("img").attr("title")}):b.gallerylist.push({href:""+a+"",title:d(this).find("img").attr("title")})}):
b.gallerylist.push({href:""+b.zoomImage+"",title:d(this).find("img").attr("title")});return b.gallerylist},changeZoomLevel:function(b){this.scrollingLock=!0;this.newvalue=parseFloat(b).toFixed(2);newvalue=parseFloat(b).toFixed(2);maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight);maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?
(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)));"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=
newvalue,this.fullwidth=!1));scrcontinue=!1;"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)));"inner"!=this.options.zoomType&&(scrcontinue=!0);scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&
(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&
"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth)));this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide();
self.zoomLens&&self.zoomLens.hide();self.zoomTint&&self.zoomTint.hide()},changeState:function(b){"enable"==b&&(this.options.zoomEnabled=!0);"disable"==b&&(this.options.zoomEnabled=!1)}};d.fn.elevateZoom=function(b){return this.each(function(){var a=Object.create(k);a.init(b,this);d.data(this,"elevateZoom",a)})};d.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:0.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:d.noop,onZoomedImageLoaded:function(){},onImageSwap:d.noop,onImageSwapComplete:d.noop}})(jQuery,window,document);

if(!$.fn.tagsInput){
    !function(a){var b=new Array,c=new Array;a.fn.doAutosize=function(b){var c=a(this).data("minwidth"),d=a(this).data("maxwidth"),e="",f=a(this),g=a("#"+a(this).data("tester_id"));if(e!==(e=f.val())){var h=e.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");g.html(h);var i=g.width(),j=i+b.comfortZone>=c?i+b.comfortZone:c,k=f.width(),l=k>j&&j>=c||j>c&&d>j;l&&f.width(j)}},a.fn.resetAutosize=function(b){var c=a(this).data("minwidth")||b.minInputWidth||a(this).width(),d=a(this).data("maxwidth")||b.maxInputWidth||a(this).closest(".tagsinput").width()-b.inputPadding,e=a(this),f=a("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily"),fontWeight:e.css("fontWeight"),letterSpacing:e.css("letterSpacing"),whiteSpace:"nowrap"}),g=a(this).attr("id")+"_autosize_tester";!a("#"+g).length>0&&(f.attr("id",g),f.appendTo("body")),e.data("minwidth",c),e.data("maxwidth",d),e.data("tester_id",g),e.css("width",c)},a.fn.addTag=function(d,e){return e=jQuery.extend({focus:!1,callback:!0},e),this.each(function(){var f=a(this).attr("id"),g=a(this).val().split(b[f]);if(""==g[0]&&(g=new Array),d=jQuery.trim(d),e.unique){var h=a(this).tagExist(d);1==h&&a("#"+f+"_tag").addClass("not_valid")}else var h=!1;if(""!=d&&1!=h){if(a("<span>").addClass("tag").append(a("<span>").text(d).append("&nbsp;&nbsp;"),a("<a>",{href:"#",title:"Removing tag",text:"x"}).click(function(){return a("#"+f).removeTag(escape(d))})).insertBefore("#"+f+"_addTag"),g.push(d),a("#"+f+"_tag").val(""),e.focus?a("#"+f+"_tag").focus():a("#"+f+"_tag").blur(),a.fn.tagsInput.updateTagsField(this,g),e.callback&&c[f]&&c[f].onAddTag){var i=c[f].onAddTag;i.call(this,d)}if(c[f]&&c[f].onChange){var j=g.length,i=c[f].onChange;i.call(this,a(this),g[j-1])}}}),!1},a.fn.removeTag=function(d){return d=unescape(d),this.each(function(){var e=a(this).attr("id"),f=a(this).val().split(b[e]);for(a("#"+e+"_tagsinput .tag").remove(),str="",i=0;i<f.length;i++)f[i]!=d&&(str=str+b[e]+f[i]);if(a.fn.tagsInput.importTags(this,str),c[e]&&c[e].onRemoveTag){var g=c[e].onRemoveTag;g.call(this,d)}}),!1},a.fn.tagExist=function(c){var d=a(this).attr("id"),e=a(this).val().split(b[d]);return jQuery.inArray(c,e)>=0},a.fn.importTags=function(b){var c=a(this).attr("id");a("#"+c+"_tagsinput .tag").remove(),a.fn.tagsInput.importTags(this,b)},a.fn.tagsInput=function(e){var f=jQuery.extend({interactive:!0,defaultText:"add a tag",minChars:0,width:"300px",height:"100px",autocomplete:{selectFirst:!1},hide:!0,delimiter:",",unique:!0,removeWithBackspace:!0,placeholderColor:"#666666",autosize:!0,comfortZone:20,inputPadding:12},e),g=0;return this.each(function(){if("undefined"==typeof a(this).attr("data-tagsinput-init")){a(this).attr("data-tagsinput-init",!0),f.hide&&a(this).hide();var e=a(this).attr("id");(!e||b[a(this).attr("id")])&&(e=a(this).attr("id","tags"+(new Date).getTime()+g++).attr("id"));var h=jQuery.extend({pid:e,real_input:"#"+e,holder:"#"+e+"_tagsinput",input_wrapper:"#"+e+"_addTag",fake_input:"#"+e+"_tag"},f);b[e]=h.delimiter,(f.onAddTag||f.onRemoveTag||f.onChange)&&(c[e]=new Array,c[e].onAddTag=f.onAddTag,c[e].onRemoveTag=f.onRemoveTag,c[e].onChange=f.onChange);var i='<div id="'+e+'_tagsinput" class="tagsinput"><div id="'+e+'_addTag">';if(f.interactive&&(i=i+'<input id="'+e+'_tag" value="" data-default="'+f.defaultText+'" />'),i+='</div><div class="tags_clear"></div></div>',a(i).insertAfter(this),a(h.holder).css("width",f.width),a(h.holder).css("min-height",f.height),a(h.holder).css("height",f.height),""!=a(h.real_input).val()&&a.fn.tagsInput.importTags(a(h.real_input),a(h.real_input).val()),f.interactive){if(a(h.fake_input).val(a(h.fake_input).attr("data-default")),a(h.fake_input).css("color",f.placeholderColor),a(h.fake_input).resetAutosize(f),a(h.holder).bind("click",h,function(b){a(b.data.fake_input).focus()}),a(h.fake_input).bind("focus",h,function(b){a(b.data.fake_input).val()==a(b.data.fake_input).attr("data-default")&&a(b.data.fake_input).val(""),a(b.data.fake_input).css("color","#000000")}),void 0!=f.autocomplete_url){autocomplete_options={source:f.autocomplete_url};for(attrname in f.autocomplete)autocomplete_options[attrname]=f.autocomplete[attrname];void 0!==jQuery.Autocompleter?(a(h.fake_input).autocomplete(f.autocomplete_url,f.autocomplete),a(h.fake_input).bind("result",h,function(b,c,d){c&&a("#"+e).addTag(c[0]+"",{focus:!0,unique:f.unique})})):void 0!==jQuery.ui.autocomplete&&(a(h.fake_input).autocomplete(autocomplete_options),a(h.fake_input).bind("autocompleteselect",h,function(b,c){return a(b.data.real_input).addTag(c.item.value,{focus:!0,unique:f.unique}),!1}))}else a(h.fake_input).bind("blur",h,function(b){var c=a(this).attr("data-default");return""!=a(b.data.fake_input).val()&&a(b.data.fake_input).val()!=c?b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:f.unique}):(a(b.data.fake_input).val(a(b.data.fake_input).attr("data-default")),a(b.data.fake_input).css("color",f.placeholderColor)),!1});a(h.fake_input).bind("keypress",h,function(b){return d(b)?(b.preventDefault(),b.data.minChars<=a(b.data.fake_input).val().length&&(!b.data.maxChars||b.data.maxChars>=a(b.data.fake_input).val().length)&&a(b.data.real_input).addTag(a(b.data.fake_input).val(),{focus:!0,unique:f.unique}),a(b.data.fake_input).resetAutosize(f),!1):void(b.data.autosize&&a(b.data.fake_input).doAutosize(f))}),h.removeWithBackspace&&a(h.fake_input).bind("keydown",function(b){if(8==b.keyCode&&""==a(this).val()){b.preventDefault();var c=a(this).closest(".tagsinput").find(".tag:last").text(),d=a(this).attr("id").replace(/_tag$/,"");c=c.replace(/[\s]+x$/,""),a("#"+d).removeTag(escape(c)),a(this).trigger("focus")}}),a(h.fake_input).blur(),h.unique&&a(h.fake_input).keydown(function(b){(8==b.keyCode||String.fromCharCode(b.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/))&&a(this).removeClass("not_valid")})}}}),this},a.fn.tagsInput.updateTagsField=function(c,d){var e=a(c).attr("id");a(c).val(d.join(b[e]))},a.fn.tagsInput.importTags=function(d,e){a(d).val("");var f=a(d).attr("id"),g=e.split(b[f]);for(i=0;i<g.length;i++)a(d).addTag(g[i],{focus:!1,callback:!1});if(c[f]&&c[f].onChange){var h=c[f].onChange;h.call(d,d,g[i])}};var d=function(b){var c=!1;return 13==b.which?!0:("string"==typeof b.data.delimiter?b.which==b.data.delimiter.charCodeAt(0)&&(c=!0):a.each(b.data.delimiter,function(a,d){b.which==d.charCodeAt(0)&&(c=!0)}),c)}}(jQuery);
    $("body").append('<style type="text/css">div.tagsinput{border:1px solid #CCC;background:#FFF;padding:5px;width:300px;height:100px;overflow-y:auto}div.tagsinput span.tag{border:1px solid #a5d24a;-moz-border-radius:2px;-webkit-border-radius:2px;display:block;float:left;padding:5px;text-decoration:none;background:#cde69c;color:#638421;margin-right:5px;margin-bottom:5px;font-family:helvetica;font-size:13px}div.tagsinput span.tag a{font-weight:700;color:#82ad2b;text-decoration:none;font-size:11px}div.tagsinput input{width:80px;margin:0 5px 5px 0;font-family:helvetica;font-size:13px;border:1px solid transparent;padding:5px;background:0 0;color:#000;outline:0}div.tagsinput div{display:block;float:left}.tags_clear{clear:both;width:100%;height:0}.not_valid{background:#FBD8DB!important;color:#90111A!important} div.tagsinput input {width: 190px !important;}</style>');
}


if(!$.fn.jsSocials){
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg\+xml)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"http://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:"https://cors-anywhere.herokuapp.com/https://plusone.google.com/_/+1/fastbutton?url={url}",getCount:function(a){return parseFloat((a.match(/\{c: ([.0-9E]+)/)||[])[1])}},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""}})}(window,jQuery,window.jsSocials);
}

var ready = (function(){

    var readyList,
        DOMContentLoaded,
        class2type = {};
        class2type["[object Boolean]"] = "boolean";
        class2type["[object Number]"] = "number";
        class2type["[object String]"] = "string";
        class2type["[object Function]"] = "function";
        class2type["[object Array]"] = "array";
        class2type["[object Date]"] = "date";
        class2type["[object RegExp]"] = "regexp";
        class2type["[object Object]"] = "object";

    var ReadyObj = {
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Hold (or release) the ready event
        holdReady: function( hold ) {
            if ( hold ) {
                ReadyObj.readyWait++;
            } else {
                ReadyObj.ready( true );
            }
        },
        // Handle when the DOM is ready
        ready: function( wait ) {
            // Either a released hold or an DOMready/load event and not yet ready
            if ( (wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady) ) {
                // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
                if ( !document.body ) {
                    return setTimeout( ReadyObj.ready, 1 );
                }

                // Remember that the DOM is ready
                ReadyObj.isReady = true;
                // If a normal DOM Ready event fired, decrement, and wait if need be
                if ( wait !== true && --ReadyObj.readyWait > 0 ) {
                    return;
                }
                // If there are functions bound, to execute
                readyList.resolveWith( document, [ ReadyObj ] );

                // Trigger any bound ready events
                //if ( ReadyObj.fn.trigger ) {
                //    ReadyObj( document ).trigger( "ready" ).unbind( "ready" );
                //}
            }
        },
        bindReady: function() {
            if ( readyList ) {
                return;
            }
            readyList = ReadyObj._Deferred();

            // Catch cases where $(document).ready() is called after the
            // browser event has already occurred.
            if ( document.readyState === "complete" ) {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                return setTimeout( ReadyObj.ready, 1 );
            }

            // Mozilla, Opera and webkit nightlies currently support this event
            if ( document.addEventListener ) {
                // Use the handy event callback
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                // A fallback to window.onload, that will always work
                window.addEventListener( "load", ReadyObj.ready, false );

            // If IE event model is used
            } else if ( document.attachEvent ) {
                // ensure firing before onload,
                // maybe late but safe also for iframes
                document.attachEvent( "onreadystatechange", DOMContentLoaded );

                // A fallback to window.onload, that will always work
                window.attachEvent( "onload", ReadyObj.ready );

                // If IE and not a frame
                // continually check to see if the document is ready
                var toplevel = false;

                try {
                    toplevel = window.frameElement == null;
                } catch(e) {}

                if ( document.documentElement.doScroll && toplevel ) {
                    doScrollCheck();
                }
            }
        },
        _Deferred: function() {
            var // callbacks list
                callbacks = [],
                // stored [ context , args ]
                fired,
                // to avoid firing when already doing so
                firing,
                // flag to know if the deferred has been cancelled
                cancelled,
                // the deferred itself
                deferred  = {

                    // done( f1, f2, ...)
                    done: function() {
                        if ( !cancelled ) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if ( fired ) {
                                _fired = fired;
                                fired = 0;
                            }
                            for ( i = 0, length = args.length; i < length; i++ ) {
                                elem = args[ i ];
                                type = ReadyObj.type( elem );
                                if ( type === "array" ) {
                                    deferred.done.apply( deferred, elem );
                                } else if ( type === "function" ) {
                                    callbacks.push( elem );
                                }
                            }
                            if ( _fired ) {
                                deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
                            }
                        }
                        return this;
                    },

                    // resolve with given context and args
                    resolveWith: function( context, args ) {
                        if ( !cancelled && !fired && !firing ) {
                            // make sure args are available (#8421)
                            args = args || [];
                            firing = 1;
                            try {
                                while( callbacks[ 0 ] ) {
                                    callbacks.shift().apply( context, args );//shifts a callback, and applies it to document
                                }
                            }
                            finally {
                                fired = [ context, args ];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    // resolve with this as context and given arguments
                    resolve: function() {
                        deferred.resolveWith( this, arguments );
                        return this;
                    },

                    // Has this deferred been resolved?
                    isResolved: function() {
                        return !!( firing || fired );
                    },

                    // Cancel
                    cancel: function() {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

            return deferred;
        },
        type: function( obj ) {
            return obj == null ?
                String( obj ) :
                class2type[ Object.prototype.toString.call(obj) ] || "object";
        }
    }
    // The DOM ready check for Internet Explorer
    function doScrollCheck() {
        if ( ReadyObj.isReady ) {
            return;
        }

        try {
            // If IE is used, use the trick by Diego Perini
            // http://javascript.nwbox.com/IEContentLoaded/
            document.documentElement.doScroll("left");
        } catch(e) {
            setTimeout( doScrollCheck, 1 );
            return;
        }

        // and execute any waiting functions
        ReadyObj.ready();
    }
    // Cleanup functions for the document ready method
    if ( document.addEventListener ) {
        DOMContentLoaded = function() {
            document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            ReadyObj.ready();
        };

    } else if ( document.attachEvent ) {
        DOMContentLoaded = function() {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if ( document.readyState === "complete" ) {
                document.detachEvent( "onreadystatechange", DOMContentLoaded );
                ReadyObj.ready();
            }
        };
    }
    function ready( fn ) {
        // Attach the listeners
        ReadyObj.bindReady();

        var type = ReadyObj.type( fn );

        // Add the callback
        readyList.done( fn );//readyList is result of _Deferred()
    }
    return ready;
})();


function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

var serialize = function(obj) {
  var str = [];
  for(var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}




function makeid(length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function bindTagsInv(){
	var x = document.getElementsByClassName("sync-orkivinv");
     			for (var n = x.length - 1; n >= 0; n--) {
     				 var eleent =  x[n];
     				 var i = eleent.dataset.type;
     				 console.log(i);
     		
     				 document.getElementsByClassName("sync-orkivinv")[n].onclick = function(){

     				 		console.log("event");
     				 		return false
     				 	};

     				 if(i == "cart"){

     				 

     				 } else if(i == "buy"){
     				 	
     				 } else if(i == "wishlist"){
     				 	
     				 } else if(i == "checkout"){
     				 	
     				 } else if(i == "vwishlist"){
     				 	
     				 }
     			};
}

$("head").append(' <link rel="stylesheet" href="https://www.orkiv.com/i/build/css/intlTelInput.css">');
/*
 * International Telephone Input v11.0.12
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */
(function(){for(var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["String","prototype","repeat"],n=0;n<m.length-1;n++){var p=m[n];p in l||(l[p]={});l=l[p]}
var ba=m[m.length-1],r=l[ba],t=r?r:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};t!=r&&null!=t&&aa(l,ba,{configurable:!0,writable:!0,value:t});var ca=this;function u(a){return"string"==typeof a}
function v(a,b){var c=a.split("."),d=ca;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}function w(a,b){function c(){}c.prototype=b.prototype;a.$=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.w=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var x=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function y(a,b){a.sort(b||da)}function da(a,b){return a>b?1:a<b?-1:0};function ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function fa(a,b){this.a=a;this.h=!!b.i;this.c=b.b;this.m=b.type;this.l=!1;switch(this.c){case ga:case ha:case ia:case ja:case ka:case la:case ma:this.l=!0}this.g=b.defaultValue}var ma=1,la=2,ga=3,ha=4,ia=6,ja=16,ka=18;function na(a,b){this.c=a;this.a={};for(var c=0;c<b.length;c++){var d=b[c];this.a[d.a]=d}}function oa(a){a=ea(a.a);y(a,function(a,c){return a.a-c.a});return a};function A(){this.a={};this.g=this.f().a;this.c=this.h=null}A.prototype.has=function(a){return null!=this.a[a.a]};A.prototype.get=function(a,b){return B(this,a.a,b)};A.prototype.set=function(a,b){C(this,a.a,b)};
function pa(a,b){for(var c=oa(a.f()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(null!=b.a[f]){a.c&&delete a.c[e.a];var g=11==e.c||10==e.c;if(e.h)for(var e=D(b,f),h=0;h<e.length;h++){var k=a,q=f,z=g?e[h].clone():e[h];k.a[q]||(k.a[q]=[]);k.a[q].push(z);k.c&&delete k.c[q]}else e=E(b,f),g?(g=E(a,f))?pa(g,e):C(a,f,e.clone()):C(a,f,e)}}}A.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.a={},a.c&&(a.c={}),pa(a,this));return a};
function E(a,b){var c=a.a[b];if(null==c)return null;if(a.h){if(!(b in a.c)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var f=[],g=0;g<c.length;g++)f[g]=d.a(e,c[g]);c=f}else c=d.a(e,c);return a.c[b]=c}return a.c[b]}return c}function B(a,b,c){var d=E(a,b);return a.g[b].h?d[c||0]:d}function F(a,b){var c;if(null!=a.a[b])c=B(a,b,void 0);else a:{c=a.g[b];if(void 0===c.g){var d=c.m;if(d===Boolean)c.g=!1;else if(d===Number)c.g=0;else if(d===String)c.g=c.l?"0":"";else{c=new d;break a}}c=c.g}return c}
function D(a,b){return E(a,b)||[]}function G(a,b){return a.g[b].h?null!=a.a[b]?a.a[b].length:0:null!=a.a[b]?1:0}function C(a,b,c){a.a[b]=c;a.c&&(a.c[b]=c)}function H(a,b){var c=[],d;for(d in b)0!=d&&c.push(new fa(d,b[d]));return new na(a,c)};function I(){}I.prototype.c=function(a){new a.c;throw Error("Unimplemented");};I.prototype.a=function(a,b){if(11==a.c||10==a.c)return b instanceof A?b:this.c(a.m.prototype.f(),b);if(14==a.c){if(u(b)&&qa.test(b)){var c=Number(b);if(0<c)return c}return b}if(!a.l)return b;c=a.m;if(c===String){if("number"==typeof b)return String(b)}else if(c===Number&&u(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||qa.test(b)))return Number(b);return b};var qa=/^-?[0-9]+$/;function J(){}w(J,I);J.prototype.c=function(a,b){var c=new a.c;c.h=this;c.a=b;c.c={};return c};function ra(){}w(ra,J);ra.prototype.a=function(a,b){return 8==a.c?!!b:I.prototype.a.apply(this,arguments)};function K(a,b){null!=a&&this.a.apply(this,arguments)}K.prototype.c="";K.prototype.set=function(a){this.c=""+a};K.prototype.a=function(a,b,c){this.c+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};K.prototype.toString=function(){return this.c};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function L(){A.call(this)}w(L,A);var sa=null;function M(){A.call(this)}w(M,A);var ta=null;function N(){A.call(this)}w(N,A);var ua=null;
L.prototype.f=function(){var a=sa;a||(sa=a=H(L,{0:{name:"NumberFormat",j:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",i:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return a};L.f=L.prototype.f;
M.prototype.f=function(){var a=ta;a||(ta=a=H(M,{0:{name:"PhoneNumberDesc",j:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},3:{name:"possible_number_pattern",b:9,type:String},9:{name:"possible_length",i:!0,b:5,type:Number},10:{name:"possible_length_local_only",i:!0,b:5,type:Number},6:{name:"example_number",b:9,type:String},7:{name:"national_number_matcher_data",b:12,type:String},8:{name:"possible_number_matcher_data",b:12,type:String}}));return a};M.f=M.prototype.f;
N.prototype.f=function(){var a=ua;a||(ua=a=H(N,{0:{name:"PhoneMetadata",j:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:M},2:{name:"fixed_line",b:11,type:M},3:{name:"mobile",b:11,type:M},4:{name:"toll_free",b:11,type:M},5:{name:"premium_rate",b:11,type:M},6:{name:"shared_cost",b:11,type:M},7:{name:"personal_number",b:11,type:M},8:{name:"voip",b:11,type:M},21:{name:"pager",b:11,type:M},25:{name:"uan",b:11,type:M},27:{name:"emergency",b:11,type:M},28:{name:"voicemail",b:11,type:M},
24:{name:"no_international_dialling",b:11,type:M},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,
type:Boolean},19:{name:"number_format",i:!0,b:11,type:L},20:{name:"intl_number_format",i:!0,b:11,type:L},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return a};N.f=N.prototype.f;function O(){A.call(this)}var va;w(O,A);var wa={v:1,u:5,s:10,o:20};
O.prototype.f=function(){va||(va=H(O,{0:{name:"PhoneNumber",j:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:1,type:wa},7:{name:"preferred_domestic_carrier_code",b:9,type:String}}));
return va};O.ctor=O;O.ctor.f=O.prototype.f;/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var P={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],385:["HR"],386:["SI"],
387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],
692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},xa={AC:[,[,,"[46]\\d{4}|[01589]\\d{5}",,,,,,,[5,6]],
[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"[01589]\\d{5}",,,,"542011",,,[6]],,,[,,"NA",,,,,,,[-1]]],AD:[,[,,"[16]\\d{5,8}|[37-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"(?:3\\d|6(?:[0-8]|90\\d{2}))\\d{4}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,
"912345",,,[6]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[137-9]|6[0-8]"]],[,"(\\d{4})(\\d{4})","$1 $2",["180","180[02]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["690"]]],,[,,"NA",,,,,,,[-1]],,,[,,"1800\\d{4}",,,,"18000000",,,[8]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AE:[,[,,"[2-79]\\d{7,8}|800\\d{2,9}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,
[9]],[,,"400\\d{6}|800\\d{2,9}",,,,"800123456"],[,,"900[02]\\d{5}",,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"([2-4679])(\\d{3})(\\d{4})","$1 $2 $3",["[2-4679][2-8]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"([479]00)(\\d)(\\d{5})","$1 $2 $3",["[479]0"],"$1"],[,"([68]00)(\\d{2,9})","$1 $2",["60|8"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],
,,[,,"NA",,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",,,,"234567890",,,,[7]],[,,"7(?:[014-9]\\d|2[89]|30)\\d{6}",,,,"701234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"([2-7]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AG:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",
,,,"2684601234",,,,[7]],[,,"268(?:464|7(?:2\\d|3[246]|64|7[0-689]|8[02-68]))\\d{4}",,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],"AG",1,"011","1",,,"1",,,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AI:[,[,,"[2589]\\d{9}",,,,,,,[10],
[7]],[,,"2644(?:6[12]|9[78])\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"AI",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"264",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AL:[,[,,"[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}",
,,,,,,[6,7,8,9],[5]],[,,"(?:2(?:1(?:0[2-9]|[1-9]\\d)|[247]\\d{2}|[35][2-9]\\d|[68](?:0[2-9]|[1-9]\\d)|9(?:[089][2-9]|[1-7]\\d))|3(?:1(?:[04-9][2-9]|[1-3]\\d)|[2-6]\\d{2}|[79](?:[09][2-9]|[1-8]\\d)|8(?:0[2-9]|[1-9]\\d))|4\\d{3}|5(?:1(?:[05-9][2-9]|[1-4]\\d)|[2-578]\\d{2}|6(?:[06-9][2-9]|[1-5]\\d)|9(?:[089][2-9]|[1-7]\\d))|8(?:[19](?:[06-9][2-9]|[1-5]\\d)|[2-6]\\d{2}|[78](?:[089][2-9]|[1-7]\\d)))\\d{4}",,,,"22345678",,,[8],[5,6,7]],[,,"6(?:[2-5][2-9]|[6-9]\\d)\\d{6}",,,,"661234567",,,[9]],[,,"800\\d{4}",
,,,"8001234",,,[7]],[,,"900\\d{3}",,,,"900123",,,[6]],[,,"808\\d{3}",,,,"808123",,,[6]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,"NA",,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(4)(\\d{3})(\\d{4})","$1 $2 $3",["4[0-6]"],"0$1"],[,"(6\\d)(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"],"0$1"],[,"(\\d{3})(\\d{3,5})","$1 $2",["[235][16-9]|8[016-9]|[79]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],
AM:[,[,,"[1-9]\\d{7}",,,,,,,[8],[5,6]],[,,"(?:1[0-2]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:4[1349]|55|77|9[1-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,,"80[1-4]\\d{5}",,,,"80112345"],[,,"NA",,,,,,,[-1]],[,,"60(?:2[078]|[3-7]\\d|8[0-5])\\d{4}",,,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["4[1349]|[5-7]|9[1-9]"],
"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23]"],"(0$1)"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8|90"],"0 $1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}",,,,"222123456"],[,,"9[1-49]\\d{7}",,,,"923123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],
,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AR:[,[,,"11\\d{8}|[2368]\\d{9}|9\\d{10}",,,,,,,[10,11],[6,7,8]],[,,"11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}",
,,,"1123456789",,,[10],[6,7,8]],[,,"675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})",,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?",
"9$1",,,[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d{2})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(\\d{4})(\\d{4})","$1-$2",["[2-9]"],"$1"],[,"(9)(11)(\\d{4})(\\d{4})","$2 15-$3-$4",["911"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9(?:2[234689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))",
"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"],"0$1"],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9[23]"],"0$1"],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))",
"2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d{3})","$1",["1[012]|911"],"$1"]],[[,"([68]\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(9)(11)(\\d{4})(\\d{4})","$1 $2 $3-$4",["911"]],[,"(9)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9(?:2[234689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))",
"9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]],[,"(9)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9[23]"]],[,"(11)(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",
,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],
"0$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1]],[,,"NA",,,,,,,[-1]],,,[,,"810\\d{7}",,,,"8101234567",,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,"NA",,,,,,,[-1]]],AS:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",
,,,"5002345678"],[,,"NA",,,,,,,[-1]],"AS",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"684",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AT:[,[,,"[1-9]\\d{3,12}",,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}",
,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",,,,"800123456",,,[9,10,11,12,13]],[,,"9(?:0[01]|3[019])\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}",,,,"810123456",,,[8,9,10,11,12,13]],[,,"NA",,,,,,,[-1]],[,,"780\\d{6,10}",,,,"780123456",,,[9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(116\\d{3})","$1",["116"],"$1"],[,"(1)(\\d{3,12})","$1 $2",["1"],"0$1"],[,"(5\\d)(\\d{3,5})",
"$1 $2",["5[079]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["5[079]"],"0$1"],[,"(5\\d)(\\d{4})(\\d{4,7})","$1 $2 $3",["5[079]"],"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}",,,,"50123",,,[5,6,7,8,9,10,11,
12,13]],,,[,,"NA",,,,,,,[-1]]],AU:[,[,,"1\\d{4,9}|[2-578]\\d{8}",,,,,,,[5,6,7,8,9,10]],[,,"[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}",,,,"212345678",,,[9],[8]],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"19(?:0[0126]\\d|[679])\\d{5}",,,,"1900123456",,,[8,10]],[,,"13(?:00\\d{3}|45[0-4]|\\d)\\d{3}",,,,"1300123456",,,[6,8,10]],[,,"500\\d{6}",
,,,"500123456",,,[9]],[,,"550\\d{6}",,,,"550123456",,,[9]],"AU",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,[[,"([2378])(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[45]|14"],"0$1"],[,"(16)(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(16)(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(1[389]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[38]0|90)","1(?:[38]00|90)"],"$1"],[,"(180)(2\\d{3})","$1 $2",["180","1802"],"$1"],[,"(19\\d)(\\d{3})",
"$1 $2",["19[13]"],"$1"],[,"(19\\d{2})(\\d{4})","$1 $2",["19[679]"],"$1"],[,"(13)(\\d{2})(\\d{2})","$1 $2 $3",["13[1-9]"],"$1"]],,[,,"16\\d{3,7}",,,,"1612345",,,[5,6,7,8,9]],1,,[,,"1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))",,,,"1300123456",,,[6,7,8,10]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AW:[,[,,"[25-9]\\d{6}",,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}",,,,"5601234"],[,,"800\\d{4}",
,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"28\\d{5}|501\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],AX:[,[,,"1\\d{5,11}|[35]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,9}|8\\d{6,9}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"18[1-8]\\d{3,9}",,,,"1812345678",,,[6,7,8,9,10,11,12]],[,,"4\\d{5,10}|50\\d{4,8}",,,,"412345678",,,[6,7,8,9,10,11]],[,,"800\\d{4,7}",
,,,"8001234567",,,[7,8,9,10]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AX",358,"00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))","0",,,"0",,"00",,,,[,,"NA",,,,,,,[-1]],,,[,,"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",,,,"100123",,,[5,6,7,8,9,10]],[,,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",
,,,"10112345",,,[5,6,7,8,9,10]],,,[,,"NA",,,,,,,[-1]]],AZ:[,[,,"[1-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}",,,,"123123456",,,,[7]],[,,"(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["(?:1[28]|2(?:[45]2|[0-36])|365)"],
"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BA:[,[,,"[3-9]\\d{7,8}",,,,,,,[8,9],[6]],[,,"(?:[35]\\d|49)\\d{6}",,,,"30123456",,,[8],[6]],[,,"6(?:03|44|71|[1-356])\\d{6}",,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6[047]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"70[23]\\d{5}",,,,"70223456",,,[8]],,,[,,"NA",,,,,,,[-1]]],BB:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}",
,,,"2464123456",,,,[7]],[,,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|8(?:[2-5]\\d|83))\\d{4}",,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900\\d{7}|246976\\d{4}",,,,"9002123456",,,,[7]],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,[7]],"BB",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"246",[,,"NA",,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|736)\\d{4}",,,,"2464301234",,,,[7]],
,,[,,"NA",,,,,,,[-1]]],BD:[,[,,"[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}",,,,,,,[6,7,8,9,10]],[,,"2(?:[45]\\d{3}|7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|41|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-9]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}",
,,,"27111234",,,[6,7,8,9]],[,,"(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"96(?:0[49]|1[0-4]|6[69])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(2)(\\d{7,8})","$1-$2",["2"],"0$1"],[,"(\\d{2})(\\d{4,6})","$1-$2",["[3-79]1"],"0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"],
"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["[3-79][2-9]|8"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BE:[,[,,"[1-9]\\d{7,8}",,,,,,,[8,9]],[,,"(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}",,,,"12345678",,,[8]],[,,"4(?:6[0135-8]|[79]\\d|8[3-9])\\d{6}",,,,"470123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"(?:70[2-467]|90[0-79])\\d{5}",,,,"90123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,
,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[6-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"78\\d{6}",,,,"78123456",,,[8]],,,[,,"NA",,,,,,,[-1]]],BF:[,[,,"[25-7]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[56]))\\d{4}",
,,,"20491234"],[,,"(?:5(?:[15]\\d|6[0-4])|[67]\\d{2})\\d{5}",,,,"70123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BG:[,[,,"[23567]\\d{5,7}|[489]\\d{6,8}",,,,,,,[6,7,8,9],[4,5]],[,,"2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}",
,,,"2123456",,,[6,7,8],[4,5]],[,,"(?:8[7-9]\\d|9(?:8\\d|99))\\d{6}|4(?:3[0789]|8\\d)\\d{5}",,,,"48123456",,,[8,9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,"NA",,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(2)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(2)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["43[124-7]|70[1-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"],
"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[78]00"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["999"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BH:[,[,,"[136-9]\\d{7}",,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}",
,,,"17001234"],[,,"(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}",,,,"36001234"],[,,"80\\d{6}",,,,"80123456"],[,,"(?:87|9[014578])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BI:[,[,,"[267]\\d{7}",,,,,,,[8]],[,,"22\\d{6}",,,,"22201234"],[,,"(?:29|6[189]|7[124-9])\\d{6}",
,,,"79561234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BJ:[,[,,"[2689]\\d{7}|7\\d{3}",,,,,,,[4,8]],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}",,,,"20211234",,,[8]],[,,"(?:6[1-8]|9[03-9])\\d{6}",,,,"90011234",,,[8]],[,,"7[3-5]\\d{2}",,,,"7312",,,[4]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234",,,[8]],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456",,,[8]],,,[,,"NA",,,,,,,[-1]]],BL:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"590(?:2[7-9]|5[12]|87)\\d{4}",,,,"590271234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}",,,,"690301234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BL",590,"00","0",,,"0",,,,,,[,,"NA",
,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BM:[,[,,"[4589]\\d{9}",,,,,,,[10],[7]],[,,"441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}",,,,"4412345678",,,,[7]],[,,"441(?:[37]\\d|5[0-39])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"BM",1,"011","1",,,"1",,,,,,[,,"NA",
,,,,,,[-1]],,"441",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}",,,,"2345678"],[,,"22[89]\\d{4}|[78]\\d{6}",,,,"7123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BN",673,"00",,,,,,,,[[,"([2-578]\\d{2})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BO:[,[,,"[23467]\\d{7}",,,,,,,[8],[7]],
[,,"(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,,[7]],[,,"[67]\\d{7}",,,,"71234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BO",591,"00(1\\d)?","0",,,"0(1\\d)?",,,,[[,"([234])(\\d{7})","$1 $2",["[234]"],,"0$CC $1"],[,"([67]\\d{7})","$1",["[67]"],,"0$CC $1"]],
,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BQ:[,[,,"[347]\\d{6}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BR:[,[,
,"[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[4689][1-9]|5[13-5]|7[13-579])(?:[6-8]|9\\d?)\\d{7}",,,,"11961234567",,,[10,11],[8]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"(?:300|[59]00\\d?)\\d{6}",,,,"300123456",,,[9,10]],[,,"(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}",,,,"40041234",,,[8,10]],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{4})(\\d{4})","$1-$2",["[2-9](?:[1-9]|0[1-9])"],"$1"],[,"(\\d{5})(\\d{4})","$1-$2",["9(?:[1-9]|0[1-9])"],"$1"],[,"(\\d{3,5})","$1",["1[125689]"],"$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"],"($1)","0 $CC ($1)"],[,"(\\d{4})(\\d{4})",
"$1-$2",["(?:300|40(?:0|20))"]],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])9"],"($1)","0 $CC ($1)"],[,"(\\d{4})(\\d{4})","$1-$2",["(?:300|40(?:0|20))"]],[,"([3589]00)(\\d{2,3})(\\d{4})","$1 $2 $3",["[3589]00"],"0$1"]],[,,"NA",,,,,,,[-1]],,,[,,"(?:300\\d|40(?:0\\d|20))\\d{4}",,,,"40041234",,,[8]],[,,"NA",,,,,
,,[-1]],,,[,,"NA",,,,,,,[-1]]],BS:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[1-3]|12|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|99))\\d{4}",,,,"2423591234",,,,[7]],[,,"242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",,
,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"BS",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"242",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BT:[,[,,"[1-8]\\d{6,7}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
"BT",975,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1|77"]],[,"([2-8])(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BW:[,[,,"[2-79]\\d{6,7}",,,,,,,[7,8]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,,"2401234",,,[7]],[,,"7(?:[1-6]\\d|7[014-8])\\d{5}",,,,"71123456",
,,[8]],[,,"NA",,,,,,,[-1]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"79[12][01]\\d{4}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],[,"(7\\d)(\\d{3})(\\d{3})","$1 $2 $3",["7"]],[,"(90)(\\d{5})","$1 $2",["9"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BY:[,[,,"[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",
,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}",,,,"294911911",,,[9]],[,,"8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}",,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"8?0?",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])",
"1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],[,"([89]\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1"],[,"(82\\d)(\\d{4})(\\d{4})","$1 $2 $3",["82"],"8 $1"],[,"(800)(\\d{3})","$1 $2",["800"],"8 $1"],[,"(800)(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"]],,[,,
"NA",,,,,,,[-1]],,,[,,"8(?:0[13]|10|20\\d)\\d{7}|800\\d{3,7}|902\\d{7}",,,,"82012345678"],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],BZ:[,[,,"[2-8]\\d{6}|0\\d{10}",,,,,,,[7,11]],[,,"(?:2(?:[02]\\d|36)|[3-58][02]\\d|7(?:[02]\\d|32))\\d{4}",,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(0)(800)(\\d{4})(\\d{3})",
"$1-$2-$3-$4",["0"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],CA:[,[,,"[2-9]\\d{9}|3\\d{6}",,,,,,,[7,10]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}",,,,"2042345678",,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
,,,"2042345678",,,[10],[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678",,,[10]],[,,"NA",,,,,,,[-1]],"CA",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CC:[,[,,"[1458]\\d{5,9}",,,,,,,[6,7,9,10],[8]],[,,"89162\\d{4}",,,,"891621234",,,[9],[8]],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",
,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0126]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{2})?\\d{4}",,,,"1300123456",,,[6,10]],[,,"500\\d{6}",,,,"500123456",,,[9]],[,,"550\\d{6}",,,,"550123456",,,[9]],"CC",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CD:[,[,,"[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}",,,,,,,[7,9]],[,,"1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}",
,,,"1234567"],[,,"8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}",,,,"991234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["12"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[0-2459]|9"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",
,,,,,,[-1]]],CF:[,[,,"[278]\\d{7}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[0257]\\d{6}",,,,"70012345"],[,,"NA",,,,,,,[-1]],[,,"8776\\d{4}",,,,"87761234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CG:[,[,,"[028]\\d{8}",,,,,,,[9]],[,,"222[1-589]\\d{5}",,,,"222123456"],[,,"0[14-6]\\d{7}",,,,"061234567"],[,,"NA",,,,
,,,[-1]],[,,"800\\d{6}",,,,"800123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],CH:[,[,,"[2-9]\\d{8}|860\\d{9}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,,"212345678",,,[9]],[,,"7[5-9]\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,
,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],[,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",,,[9]],[,,"NA",,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["860"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",,,[9]],,,[,,"NA",,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,
"860\\d{9}",,,,"860123456789",,,[12]]],CI:[,[,,"[02-8]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",,,,"21234567"],[,,"(?:0[1-9]|4\\d|5[14-9]|6[015-79]|[78][4-9])\\d{6}",,,,"01234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",
,,,,,,[-1]]],CK:[,[,,"[2-8]\\d{4}",,,,,,,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[5-8]\\d{4}",,,,"71234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CL:[,[,,"(?:[2-9]|600|123)\\d{7,8}",,,,,,,[9,10,11],[7,8]],[,,"2(?:1962\\d{4}|2\\d{7}|32[0-2467]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[3-9])\\d{7}",
,,,"221234567",,,[9],[7,8]],[,,"2(?:1962\\d{4}|2\\d{7}|32[0-2467]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|9[3-9])\\d{7}",,,,"961234567",,,[9],[8]],[,,"800\\d{6}|1230\\d{7}",,,,"800123456",,,[9,11]],[,,"NA",,,,,,,[-1]],[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,"NA",,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0","0",,,"0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))",,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],
"($1)","$CC ($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)","$CC ($1)"],[,"(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"],"0$1"],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"],"$1"],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"],"$1"],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"$1"],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)","$CC ($1)"],[,"(\\d{4,5})","$1",["[1-9]"],"$1"]],[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",
["2[23]"],"($1)","$CC ($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)","$CC ($1)"],[,"(9)(\\d{4})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(44)(\\d{3})(\\d{4})","$1 $2 $3",["44"],"0$1"],[,"([68]00)(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"],"$1"],[,"(600)(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"],"$1"],[,"(1230)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"$1"],[,"(\\d{5})(\\d{4})","$1 $2",["219"],"($1)","$CC ($1)"]],[,,"NA",,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],
[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CM:[,[,,"[2368]\\d{7,8}",,,,,,,[8,9]],[,,"2(?:22|33|4[23])\\d{6}",,,,"222123456",,,[9]],[,,"6[5-9]\\d{7}",,,,"671234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"88\\d{6}",,,,"88012345",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|88"]],[,"(800)(\\d{2})(\\d{3})","$1 $2 $3",["80"]]],
,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CN:[,[,,"[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}",
,,,"1012345678",,,,[5,6]],[,,"1(?:[38]\\d|4[57]|5[0-35-9]|7[0-35-8])\\d{8}",,,,"13123456789",,,[11]],[,,"(?:10)?800\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CN",86,"(1(?:[129]\\d{3}|79\\d{2}))?00","0",,,"(1(?:[129]\\d{3}|79\\d{2}))|0",,"00",,[[,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[,"(\\d{5,6})","$1",["100|95"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],
"0$1","$CC $1"],[,"(\\d{3,4})(\\d{4})","$1 $2",["[2-9]"]],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],,"$CC $1"],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[[,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[,"([48]00)(\\d{3})(\\d{4})",
"$1 $2 $3",["[48]00"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1"],[,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],
"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"],"0$1","$CC $1",1],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],,"$CC $1"],[,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[,,"NA",,,,,,,[-1]],,,[,,"(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}",,,,"4001234567",
,,[10,11,12]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CO:[,[,,"(?:[13]\\d{0,3}|[24-8])\\d{7}",,,,,,,[8,10,11],[7]],[,,"[124-8][2-9]\\d{6}",,,,"12345678",,,[8],[7]],[,,"3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",,,,"19001234567",,,[11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:44|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]",
"1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(1)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1"]],[[,"(\\d)(\\d{7})","$1 $2",["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]","1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(1)(\\d{3})(\\d{7})","$1 $2 $3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"]]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,
,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CR:[,[,,"[24-9]\\d{7,9}",,,,,,,[8,10]],[,,"2[0-24-7]\\d{6}",,,,"22123456",,,[8]],[,,"5(?:0[01]|7[0-3])\\d{5}|6(?:[0-4]\\d{3}|500[01])\\d{3}|(?:7[0-3]|8[3-9])\\d{6}",,,,"83123456",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"210[0-6]\\d{4}|4\\d{7}|5100\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[012468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[24-7]|8[3-9]"],
,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]0"],,"$CC $1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CU:[,[,,"[2-57]\\d{5,7}",,,,,,,[6,7,8],[4,5]],[,,"2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}",,,,"71234567",,,,[4,5]],[,,"5\\d{7}",,,,"51234567",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d)(\\d{6,7})",
"$1 $2",["7"],"(0$1)"],[,"(\\d{2})(\\d{4,6})","$1 $2",["[2-4]"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["5"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CV:[,[,,"[259]\\d{6}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:9\\d|59)\\d{5}",,,,"9911234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]],
,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CW:[,[,,"[169]\\d{6,7}",,,,,,,[7,8]],[,,"9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}",,,,"94151234",,,[8]],[,,"9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}",,,,"95181234",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"60[0-2]\\d{4}",,,,"6001234",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-7]"]],[,"(9)(\\d{3})(\\d{4})",
"$1 $2 $3",["9"]]],,[,,"955\\d{5}",,,,"95581234",,,[8]],1,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CX:[,[,,"[1458]\\d{5,9}",,,,,,,[6,7,8,9,10]],[,,"89164\\d{4}",,,,"891641234",,,[9],[8]],[,,"14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0126]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{2})?\\d{4}",,,,"1300123456",,,[6,8,10]],[,,"500\\d{6}",
,,,"500123456",,,[9]],[,,"550\\d{6}",,,,"550123456",,,[9]],"CX",61,"(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]","0",,,"0",,"0011",,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],CY:[,[,,"[257-9]\\d{7}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,,,"22345678"],[,,"9[4-79]\\d{6}",,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,"NA",,,,,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})",
"$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,"NA",,,,,,,[-1]]],CZ:[,[,,"[2-8]\\d{8}|9\\d{8,11}",,,,,,,[9,10,11,12]],[,,"2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",,,,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",
,,[9]],"CZ",420,"00",,,,,,,,[[,"([2-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(96\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["96"]],[,"(9\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9[36]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"9(?:5\\d|7[234])\\d{6}",,,,"972123456",,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})",,,,,,,[4,5,6,7,8,9,10,11,12,13,14,
15],[3]],[,,"2\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|4(?:0\\d{3,12}|\\d{5,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|6(?:\\d{5,13}|9\\d{3,12})|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-8]\\d|9\\d?)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})",,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[3,4]],[,,"1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7\\d{8,9})",,,,"15123456789",,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})",
,,,"9001234567",,,[10,11]],[,,"1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,"NA",,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(1\\d{2})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(15\\d{3})(\\d{6})","$1 $2",["15[0568]"],"0$1"],[,"(1\\d{3})(\\d{7})","$1 $2",["15"],"0$1"],[,"(\\d{2})(\\d{3,11})","$1 $2",["3[02]|40|[68]9"],"0$1"],[,"(\\d{3})(\\d{3,11})","$1 $2",["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"],
"0$1"],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])","[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"],
"0$1"],[,"(3\\d{4})(\\d{1,10})","$1 $2",["3"],"0$1"],[,"(800)(\\d{7,12})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["(?:18|90)0|137","1(?:37|80)|900[1359]"],"0$1"],[,"(1\\d{2})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(18\\d{3})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],[,"(18\\d{2})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(18\\d)(\\d{8})","$1 $2",["18[2-579]"],"0$1"],[,"(700)(\\d{4})(\\d{4})","$1 $2 $3",["700"],"0$1"],[,"(138)(\\d{4})","$1 $2",["138"],"0$1"],[,"(15[013-68])(\\d{2})(\\d{8})",
"$1 $2 $3",["15[013-68]"],"0$1"],[,"(15[279]\\d)(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],[,"(1[67]\\d)(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,"NA",,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})",,,,"177991234567",
,,[12,13]]],DJ:[,[,,"[27]\\d{7}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",
,,,"20123456"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],DM:[,[,,"[57-9]\\d{9}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}",,,,"7672251234",,,,[7]],
[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"DM",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"767",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],DO:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})",
,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"8[024]9",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-9]\\d)\\d{7}",,,,,,,[8,9]],[,,"(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}",,,,"12345678"],
[,,"(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}",,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],[,"([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"],[,"(9\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],,[,,"NA",
,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],EC:[,[,,"1\\d{9,10}|[2-8]\\d{7}|9\\d{8}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"9(?:(?:39|[45][89]|7[7-9]|[89]\\d)\\d|6(?:[017-9]\\d|2[0-4]))\\d{5}",,,,"991234567",,,[9]],[,,"1800\\d{6,7}",,,,"18001234567",,,[10,11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],
"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["1"],"$1"]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[247]|[356][2-8]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(1800)(\\d{3})(\\d{3,4})","$1 $2 $3",["1"],"$1"]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],EE:[,[,,"1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}",,,,,,,[4,5,7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,,"3212345",,,[7]],[,,
"(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}",,,,"51234567",,,[7,8]],[,,"800(?:0\\d{3}|1\\d|[2-9])\\d{3}",,,,"80012345",,,[7,8,10]],[,,"(?:40\\d{2}|900)\\d{4}",,,,"9001234",,,[7,8]],[,,"NA",,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,"NA",,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"([3-79]\\d{2})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],[,"(70)(\\d{2})(\\d{4})",
"$1 $2 $3",["70"]],[,"(8000)(\\d{3})(\\d{3})","$1 $2 $3",["800","8000"]],[,"([458]\\d{3})(\\d{3,4})","$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"]]],,[,,"NA",,,,,,,[-1]],,,[,,"1\\d{3,4}|800[2-9]\\d{3}",,,,"8002123",,,[4,5,7]],[,,"1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}",,,,"12123",,,[4,5]],,,[,,"NA",,,,,,,[-1]]],EG:[,[,,"1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}",,,,,,,[5,8,9,10],[7]],[,,"(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}",
,,,"234567890",,,[5,8,9],[7]],[,,"1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}",,,,"1001234567",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1[012]|[89]00"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|[89][2-9]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,
[,,"NA",,,,,,,[-1]]],EH:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,"NA",,,,,,,[-1]],,"528[89]",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}",
,,,"8370362",,,,[6]],[,,"17[1-3]\\d{4}|7\\d{6}",,,,"7123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"ER",291,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],ES:[,[,,"[5-9]\\d{8}",,,,,,,[9]],[,,"8(?:[1356]\\d|[28][0-8]|[47][1-9])\\d{6}|9(?:[135]\\d{7}|[28][0-8]\\d{6}|4[1-9]\\d{6}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})",
,,,"810123456"],[,,"(?:6\\d{6}|7[1-48]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}",,,,"612345678"],[,,"[89]00\\d{6}",,,,"800123456"],[,,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],[,,"70\\d{7}",,,,"701234567"],[,,"NA",,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"([89]00)(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,"NA",,,,,,,[-1]]],ET:[,
[,,"[1-59]\\d{8}",,,,,,,[9],[7]],[,,"(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
,,,"111112345",,,,[7]],[,,"9(?:[1-46-8]\\d|5[89])\\d{6}",,,,"911234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"([1-59]\\d)(\\d{3})(\\d{4})","$1 $2 $3",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],FI:[,[,,"1\\d{4,11}|[2-9]\\d{4,10}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}",
,,,"1312345678"],[,,"4\\d{5,10}|50\\d{4,8}",,,,"412345678",,,[6,7,8,9,10,11]],[,,"800\\d{4,7}",,,,"8001234567",,,[7,8,9,10]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"FI",358,"00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]00|[6-8]0)"],"0$1"],[,"(116\\d{3})","$1",["116"],"$1"],[,"(\\d{2})(\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],[,"(\\d)(\\d{4,11})","$1 $2",["[25689][1-8]|3"],
"0$1"]],,[,,"NA",,,,,,,[-1]],1,,[,,"[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",,,,"100123",,,[5,6,7,8,9,10]],[,,"[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})",,,,"10112345",,,[5,6,7,8,9,10]],,,[,,"NA",,,,,,,[-1]]],FJ:[,[,,"[35-9]\\d{6}|0\\d{10}",,,,,,,[7,11]],[,,"(?:3[0-5]|6[25-7]|8[58])\\d{5}",,,,"3212345",,,[7]],[,,"(?:5[018]|[79]\\d|8[034679])\\d{5}",
,,,"7012345",,,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[35-9]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"FK",500,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],FM:[,[,,"[39]\\d{6}",,,,,,,[7]],[,,"3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}",,,,"3201234"],[,,"3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}",,,,"3501234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,
,[,,"NA",,,,,,,[-1]]],FO:[,[,,"[2-9]\\d{5}",,,,,,,[6]],[,,"(?:20|[3-4]\\d|8[19])\\d{4}",,,,"201234"],[,,"(?:[27][1-9]|5\\d)\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[1345][15-7]|2[125-7]|99)\\d{2}",,,,"901123"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",,,"$CC $1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",,,,,,,[9]],
[,,"[1-5]\\d{8}",,,,"123456789"],[,,"(?:6\\d|7[3-9])\\d{7}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[0-29]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,"NA",,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(1\\d{2})(\\d{3})","$1 $2",["11"],"$1"],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[[,"([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4 $5",["[1-79]"],"0$1"],[,"(8\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],,,[,,"NA",,,,,,,[-1]]],GA:[,[,,"0?\\d{7}",,,,,,,[7,8]],[,,"01\\d{6}",,,,"01441234",,,[8]],[,,"0?[2-7]\\d{6}",,,,"06031234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GA",241,"00",,,,,,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["0"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],GB:[,[,,"\\d{7,10}",,,,,,,[7,9,10],[4,5,6,8]],[,,"2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}",
,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}",,,,"7400123456",,,[10]],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",,,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}",,,,"9012345678",,,[10]],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",,,,"8431234567",
,,[7,10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(7\\d{3})(\\d{6})","$1 $2",["7(?:[1-5789]|62)","7(?:[1-5789]|624)","7(?:[1-5789]|6242)"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2|5[56]|7[06]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:1|\\d1)|3|9[018]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:387|5(?:24|39)|697|768|946)","1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"],"0$1"],
[,"(1\\d{3})(\\d{5,6})","$1 $2",["1"],"0$1"],[,"(800)(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(845)(46)(4\\d)","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(8\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"],"0$1"],[,"(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1"],[,"([58]00)(\\d{6})","$1 $2",["[58]00"],"0$1"]],,[,,"76(?:0[012]\\d|2(?:[356]\\d|4[013-9])|4[0134]\\d|5[49]\\d|6[0-369]\\d|77\\d|81\\d|9[39]\\d)\\d{5}",,,,"7640123456",,,[10]],1,,[,,"NA",
,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,"NA",,,,,,,[-1]]],GD:[,[,,"[4589]\\d{9}",,,,,,,[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,,"4732691234",,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",
,,,"5002345678"],[,,"NA",,,,,,,[-1]],"GD",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"473",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GE:[,[,,"[34578]\\d{8}",,,,,,,[9],[6]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",,,,"322123456",,,,[6]],[,,"5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}",,,,"555123456"],[,,"800\\d{6}",,,,"800123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"706\\d{6}",,,,"706123456"],"GE",
995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"706\\d{6}",,,,"706123456"],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GF:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}",,,,"594101234"],[,,"694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}",,,,"694201234"],[,,"NA",,,,
,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GG:[,[,,"[135789]\\d{6,9}",,,,,,,[7,9,10],[6]],[,,"1481\\d{6}",,,,"1481456789",,,[10],[6]],[,,"7(?:781\\d|839\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}",,,,"8001234567"],[,,"(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}",
,,,"9012345678",,,[10]],[,,"8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})",,,,"8431234567",,,[7,10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0"," x",,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],,,[,,"NA",,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,"NA",,,,,,,[-1]]],GH:[,[,,"[235]\\d{8}|8\\d{7}",,,,,,,[8,9],[7]],[,,"3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}",
,,,"302345678",,,[9],[7]],[,,"(?:2[034678]\\d|5(?:[0457]\\d|6[01]))\\d{6}",,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GI:[,[,,"[2568]\\d{7}",,,,,,,[8]],[,,"2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}",
,,,"20012345"],[,,"(?:5[46-8]|62)\\d{6}",,,,"57123456"],[,,"80\\d{6}",,,,"80123456"],[,,"8[1-689]\\d{6}",,,,"88123456"],[,,"87\\d{6}",,,,"87123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GL:[,[,,"[1-689]\\d{5}",,,,,,,[6]],[,,"(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}",,,,"321000"],[,,"[245][2-9]\\d{4}",,,,"221234"],[,,"80\\d{4}",,,,"801234"],[,,"NA",,
,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"3[89]\\d{4}",,,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"[23679]\\d{6}",,,,"3012345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,
[-1]],[,,"NA",,,,,,,[-1]],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GN:[,[,,"[367]\\d{7,8}",,,,,,,[8,9]],[,,"30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}",,,,"30241234",,,[8]],[,,"6[02356]\\d{7}",,,,"601123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
"$1 $2 $3 $4",["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GP:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}",,,,"590201234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}",,,,"690301234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GP",590,"00","0",,,"0",,,,[[,"([56]90)(\\d{2})(\\d{4})",
"$1 $2-$3",,"0$1"]],,[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GQ:[,[,,"[23589]\\d{8}",,,,,,,[9]],[,,"3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}",,,,"333091234"],[,,"(?:222|55[15])\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],
,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GR:[,[,,"[26-9]\\d{9}",,,,,,,[10]],[,,"2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,
,"2123456789"],[,,"69\\d{8}",,,,"6912345678"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[19]\\d{7}",,,,"9091234567"],[,,"8(?:0[16]|12|25)\\d{7}",,,,"8011234567"],[,,"70\\d{8}",,,,"7012345678"],[,,"NA",,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"([27]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["2[2-9]1|[689]"]],[,"(2\\d{3})(\\d{6})","$1 $2",["2[2-9][02-9]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GT:[,[,,"[2-7]\\d{7}|1[89]\\d{9}",
,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",,,,"22456789",,,[8]],[,,"[345]\\d{7}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GU:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",
,,,"6713001234",,,,[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"GU",1,"011","1",,,"1",,,1,,,[,,"NA",
,,,,,,[-1]],,"671",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GW:[,[,,"(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5(?:5\\d|6[0-2])|6(?:5[0-2]|6\\d|9[012])|77\\d)\\d{5}",,,,"955012345",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["44|9[567]"]],[,"(\\d{3})(\\d{4})","$1 $2",["40"]]],,[,,"NA",,,,
,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],GY:[,[,,"[2-46-9]\\d{6}",,,,,,,[7]],[,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,,"2201234"],[,,"6\\d{6}",,,,"6091234"],[,,"(?:289|862)\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,
,[-1]],,,[,,"NA",,,,,,,[-1]]],HK:[,[,,"[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}",,,,,,,[5,6,7,8,9,11]],[,,"(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89)|58[01])\\d{5}",,,,"21234567",,,[8]],[,,"(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[1459]\\d|[2368][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,,"90012345678",,,[5,6,7,8,11]],[,,"NA",,,,,,
,[-1]],[,,"8(?:1[1-4679]|2[0-367]|3[02-47])\\d{5}",,,,"81123456",,,[8]],[,,"NA",,,,,,,[-1]],"HK",852,"00(?:[126-9]|30|5[09])?",,,,,,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[235-7]|[89](?:0[1-9]|[1-9])"]],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["800"]],[,"(900)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["900"]],[,"(900)(\\d{2,5})","$1 $2",["900"]]],,[,,"7(?:1[0-369]|[23][0-37-9]|47|5[1578]|6[0235]|7[278]|8[236-9]|9[025-9])\\d{5}",,,,"71234567",,,[8]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,
,,,,[-1]]],HN:[,[,,"[237-9]\\d{7}",,,,,,,[8]],[,,"2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[03-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}",,,,"22123456"],[,,"[37-9]\\d{7}",,,,"91234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2"]],
,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],HR:[,[,,"[1-7]\\d{5,8}|[89]\\d{6,8}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"9(?:01\\d|[1259]\\d{2}|7(?:[0679]\\d|51)|8\\d{1,2})\\d{5}",,,,"921234567",,,[8,9]],[,,"80[01]\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"6(?:[01]\\d{0,2}|[459]\\d{2})\\d{4}",,,,"611234",,,[6,7,8]],[,,"NA",,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,"NA",,,,,,,[-1]],
"HR",385,"00","0",,,"0",,,,[[,"(1)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"([2-5]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],[,"(9\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(6[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"([67]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[67]"],"0$1"],[,"(80[01])(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],[,"(80[01])(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"(?:62\\d?|72)\\d{6}",,,,"62123456",,,[8,
9]],,,[,,"NA",,,,,,,[-1]]],HT:[,[,,"[2-489]\\d{7}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"[34]\\d{7}",,,,"34101234"],[,,"8\\d{7}",,,,"80012345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"(?:9(?:[67][0-4]|8[0-3589]|9\\d))\\d{5}",,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],HU:[,[,,"[1-9]\\d{7,8}",,,,,,,[8,9],[6]],[,,"(?:1\\d|2[2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|7[2-9]|8[2-57-9]|9[2-69])\\d{6}",
,,,"12345678",,,[8],[6]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"21\\d{7}",,,,"211234567",,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"($1)"]],,[,,"NA",,,,,,,[-1]],,,[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,"NA",,,,,,,[-1]]],ID:[,[,,"(?:[1-79]\\d{6,10}|8\\d{7,11})",
,,,,,,[7,8,9,10,11,12],[5,6]],[,,"2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",,,,"612345678",
,,[7,8,9,10,11],[5,6]],[,,"(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}",,,,"812345678",,,[9,10,11,12]],[,,"177\\d{6,8}|800\\d{5,7}",,,,"8001234567",,,[8,9,10,11]],[,,"809\\d{7}",,
,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"ID",62,"0(?:0[1789]|10(?:00|1[67]))","0",,,"0",,,,[[,"(\\d{2})(\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[4579]|2[035-9]|[36][02-9]"],"(0$1)"],[,"(8\\d{2})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(8\\d{2})(\\d{4})(\\d{4,5})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(1)(500)(\\d{3})","$1 $2 $3",["15"],"$1"],[,"(177)(\\d{6,8})","$1 $2",["17"],"0$1"],[,"(800)(\\d{5,7})",
"$1 $2",["800"],"0$1"],[,"(804)(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(80\\d)(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80[79]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"8071\\d{6}",,,,"8071123456",,,[10]],[,,"1500\\d{3}|8071\\d{6}",,,,"8071123456",,,[7,10]],,,[,,"NA",,,,,,,[-1]]],IE:[,[,,"[124-9]\\d{6,9}",,,,,,,[7,8,9,10],[5,6]],[,,"1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})",
,,,"2212345",,,,[5,6]],[,,"8(?:22\\d{6}|[35-9]\\d{7})",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,"00","0",,,"0",,,,[[,"(1)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["40[24]|50[45]"],"(0$1)"],
[,"(48)(\\d{4})(\\d{4})","$1 $2 $3",["48"],"(0$1)"],[,"(818)(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"],"(0$1)"],[,"([78]\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1"],[,"(700)(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:8[059]|5)","1(?:8[059]0|5)"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"818\\d{6}",,,,"818123456",,,[9]],,,[,,"8[35-9]\\d{8}",,,,"8501234567",
,,[10]]],IL:[,[,,"1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}",,,,,,,[4,7,8,9,10,11,12]],[,,"(?:153\\d{1,2}|[2-489])\\d{7}",,,,"21234567",,,[8,11,12],[7]],[,,"5(?:[02-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[67]|7[0178]|8[6-9]|9[2-9])|6[2-9]\\d)\\d{5}",,,,"501234567",,,[9]],[,,"1(?:80[019]\\d{3}|255)\\d{3}",,,,"1800123456",,,[7,10]],[,,"1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}",,,,"1919123456",,,[8,9,10]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6[58]\\d|7\\d{2}|8(?:2\\d|33|55|77|81)|9[2579]\\d)\\d{5}",
,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"([2-489])(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],[,"([57]\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],[,"(153)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["153"],"$1"],[,"(1)([7-9]\\d{2})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"],"$1"],[,"(1255)(\\d{3})","$1-$2",["125"],"$1"],[,"(1200)(\\d{3})(\\d{3})","$1-$2-$3",["120"],"$1"],[,"(1212)(\\d{2})(\\d{2})","$1-$2-$3",["121"],"$1"],[,"(1599)(\\d{6})","$1-$2",["15"],"$1"],[,"(\\d{4})",
"*$1",["[2-689]"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"1700\\d{6}|[2-689]\\d{3}",,,,"1700123456",,,[4,10]],[,,"[2-689]\\d{3}|1599\\d{6}",,,,"1599123456",,,[4,10]],,,[,,"NA",,,,,,,[-1]]],IM:[,[,,"[135789]\\d{6,9}",,,,,,,[10],[6]],[,,"1624\\d{6}",,,,"1624456789",,,,[6]],[,,"7(?:4576|[59]24\\d)\\d{5}",,,,"7924123456"],[,,"808162\\d{4}",,,,"8081624567"],[,,"(?:872299|90[0167]624)\\d{4}",,,,"9016247890"],[,,"8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}",,,,"8456247890"],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",
,,,"5612345678"],"IM",44,"00","0"," x",,"0",,,,,,[,,"76242\\d{5}",,,,"7624212345"],,,[,,"NA",,,,,,,[-1]],[,,"3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}",,,,"5512345678"],,,[,,"NA",,,,,,,[-1]]],IN:[,[,,"008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}",
,,,"1123456789",,,[10],[6,7,8]],[,,"(?:600[1-3]\\d|7(?:0\\d{3}|19[0-5]\\d|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|[678][089]))|3(?:[05-8]\\d{2}|1(?:[089]\\d|7[5-8])|2(?:[0-49][089]|[5-8]\\d)|3[017-9]\\d|4(?:[07-9]\\d|11)|9(?:[016-9]\\d|[2-5][089]))|4(?:0\\d{2}|1(?:[015-9]\\d|[23][089]|4[089])|2(?:0[089]|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|[56]\\d[089]|7(?:[089]\\d|11|7[02-8])|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[089]|[89]\\d))|5(?:[0346-8]\\d{2}|1(?:[07-9]\\d|11)|2(?:[04-9]\\d|[123][089])|5[017-9]\\d|9(?:[0-6][089]|[7-9]\\d))|6(?:0(?:[0-47]\\d|[5689][089])|(?:1[0-257-9]|[6-9]\\d)\\d|2(?:[0-4]\\d|[5-9][089])|3(?:[02-8][089]|[19]\\d)|4\\d[089]|5(?:[0-367][089]|[4589]\\d))|7(?:0(?:0[02-9]|[13-6][089]|[289]\\d|7[89])|[1-9]\\d{2})|8(?:[0-79]\\d{2}|8(?:[089]\\d|11|7[02-9]))|9(?:[089]\\d{2}|313|7(?:[02-8]\\d|9[07-9])))|8(?:0(?:[01589]\\d{2}|6[67]\\d|7(?:[02-8]\\d|9[05-9]))|1(?:[02-57-9]\\d{2}|1(?:[0-35-9]\\d|4[0-46-9])|6(?:[089]\\d|7[02-8]))|2(?:0(?:[089]\\d|7[02])|[14](?:[089]\\d|7[02-8])|[235-9]\\d{2})|3(?:[0357-9]\\d{2}|1(?:[089]\\d|7[02-6])|2(?:[09]\\d|77|8[0-689])|4(?:0[1-7]|[1-9]\\d)|6(?:[089]\\d|7[02-7]))|[45]\\d{3}|6(?:[02457-9]\\d{2}|1(?:[089]\\d|7[02-8])|3(?:[089]\\d|7[02-68])|6(?:[08]\\d|7[02-8]|9[01]))|7(?:0[07-9]\\d|[1-69]\\d{2}|[78](?:[089]\\d|7[02-8]))|8(?:[0-25-9]\\d{2}|3(?:[089]\\d|7[02-8])|4(?:[0489]\\d|7[02-68]))|9(?:[02-9]\\d{2}|1(?:[0289]\\d|7[2-6])))|9\\d{4})\\d{5}",
,,,"8123456789",,,[10]],[,,"00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{5})(\\d{5})","$1 $2",["600|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9","600|7(?:[078]|19[0-5]|2(?:[02356-9]|[14][017-9]|9[389])|3(?:[025-9]|1[07-9]|[34][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02346-9]|1[017-9]|5[017-9])|6(?:[02-9]|1[0-257-9])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:0[07-9]|[14][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9",
"600|7(?:0|19[0-5]|2(?:[0235679]|[14][017-9]|8(?:[0-569]|[78][089])|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[0-49][089])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2345][089]|40|7[0189]))|4(?:[056]|1(?:[0135-9]|[23][089]|2[089]|4[089])|2(?:0[089]|[1-7][089]|[89])|3(?:[0-8][089]|9)|4(?:[089]|11|7[02-8])|7(?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389])|9(?:[0-7][089]|[89]))|5(?:[0346-9]|1[017-9]|2(?:[03-9]|[12][089])|5[017-9])|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]\\d|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[0357-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|4(?:0[1-7]|[1-9])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|1(?:[089]|7[02-8])|3(?:[089]|7[02-68])|6(?:[08]|7[02-8]|9[01]))|7(?:0[07-9]|[1-69]|7(?:[089]|7[02-8])|8(?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"],
"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-9]|80[2-46]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|7[1257]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"],
"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"],"0$1",,1],[,"(\\d{2})(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3 $4",["008"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],"$1",,1],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["160","1600"],"$1",,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],"$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["180","1800"],"$1",,1],[,"(\\d{4})(\\d{3,4})(\\d{4})","$1 $2 $3",["186","1860"],"$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
"$1 $2 $3 $4",["18[06]"],"$1",,1]],,[,,"NA",,,,,,,[-1]],,,[,,"00800\\d{7}|1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))",,,,"1800123456"],[,,"140\\d{7}",,,,"1409305260",,,[10]],1,,[,,"NA",,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],IQ:[,[,,"[1-7]\\d{7,9}",,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"IQ",964,"00","0",,,"0",,,,[[,"(1)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"([2-6]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],
"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],IR:[,[,,"[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})",,,,,,,[4,5,6,7,8,9,10]],[,,"(?:(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])\\d{3}|94(?:000|2\\d{2}))\\d{5}",,,,"2123456789",,,[10]],[,,"9(?:0[1-3]|[1-3]\\d|90)\\d{7}",,,,"9123456789",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"(?:[2-6]0\\d|993)\\d{7}",,,,"9932123456",,,[10]],"IR",98,"00",
"0",,,"0",,,,[[,"(21)(\\d{3,5})","$1 $2",["21"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"],[,"(\\d{3})(\\d{3})","$1 $2",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["9"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"]],,[,,"943\\d{7}",,,,"9432123456",,,[10]],,,[,,"NA",,,,,,,[-1]],[,,"9990\\d{0,6}",,,,"9990123456"],,,[,,"NA",,,,,,,[-1]]],IS:[,[,,"[4-9]\\d{6}|38\\d{7}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-79]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",
,,,"4101234",,,[7]],[,,"38[589]\\d{6}|(?:6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|[67][0-69]|9\\d)|7(?:5[057]|[6-8]\\d)|8(?:2[0-59]|3[0-4]|[469]\\d|5[1-9]|88))\\d{4}",,,,"6111234"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"90\\d{5}",,,,"9011234",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"49\\d{5}",,,,"4921234",,,[7]],"IS",354,"1(?:0(?:01|10|20)|100)|00",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(3\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,
,,[-1]],[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:6(?:2[78]|49|8\\d)|8(?:7[0189]|80)|95[48])\\d{4}",,,,"6271234",,,[7]]],IT:[,[,,"[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})",,,,,,,[6,7,8,9,10,11]],[,,"0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})",
,,,"0212345678"],[,,"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",,,,"3123456789",,,[9,10,11]],[,,"80(?:0\\d{6}|3\\d{3})",,,,"800123456",,,[6,9]],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{6}|[17]\\d{3})",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|55"]],
[,"(0[26])(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(0[26])(\\d{4,6})","$1 $2",["0[26]"]],[,"(0\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(0\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],[,"(0\\d{3})(\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],
[,"(\\d{4})(\\d{4})","$1 $2",["894","894[5-9]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3"]]],,[,,"NA",,,,,,,[-1]],1,,[,,"848\\d{6}",,,,"848123456",,,[9]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],JE:[,[,,"[135789]\\d{6,9}",,,,,,,[10],[6]],[,,"1534\\d{6}",,,,"1534456789",,,,[6]],[,,"7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}",,,,"7797712345"],[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,,"9018105678"],[,,"8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}",
,,,"8447034567"],[,,"701511\\d{4}",,,,"7015115678"],[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0"," x",,"0",,,,,,[,,"76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456"],,,[,,"NA",,,,,,,[-1]],[,,"3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}",,,,"5512345678"],,,[,,"NA",,,,,,,[-1]]],JM:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}",
,,,"8765123456",,,,[7]],[,,"876(?:2(?:[16-9]\\d|58)|[348]\\d{2}|5(?:0[3-9]|2[0-246-9]|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}",,,,"8762101234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"876",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,
[-1]]],JO:[,[,,"[235-9]\\d{7,8}",,,,,,,[8,9]],[,,"(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}",
,,,"62001234",,,[8]],[,,"7(?:55|7[025-9]|8[0-25-9]|9[0-25-9])\\d{6}",,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,"NA",,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(7)(\\d{4})(\\d{4})","$1 $2 $3",["7[457-9]"],"0$1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["70|8[0158]|9"],"0$1"]],,[,,"74(?:66|77)\\d{5}",,,,"746612345",,,[9]],,,[,
,"NA",,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",,,,"88101234",,,[8]],,,[,,"NA",,,,,,,[-1]]],JP:[,[,,"[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",,,,"9012345678",
,,[10]],[,,"120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{4})(\\d{4})","$1-$2",["0077"],"$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["0077"],
"$1"],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["0088"],"$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["00(?:37|66)"],"$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],
"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])",
"1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))",
"1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"],
"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"],
"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["2(?:9[14-79]|74|[34]7|[56]9)|82|993"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[2479][1-9]"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})",,,,"00777012"],[,,"570\\d{6}",,,,"570123456",,,[9]],1,,[,,"NA",,,,,,,[-1]]],KE:[,[,,"20\\d{6,7}|[4-9]\\d{6,9}",,,,,,,[7,8,9,10]],[,,"20\\d{6,7}|4(?:0\\d{6,7}|[136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|2\\d{7}|6\\d{6,7})",
,,,"202012345",,,[7,8,9]],[,,"7(?:[0-3679]\\d|4[0-479]|5[0-6]|8[0-25-9])\\d{6}",,,,"712123456",,,[9]],[,,"800[24-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"KE",254,"000","0",,,"005|0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,
[,,"NA",,,,,,,[-1]]],KG:[,[,,"[235-8]\\d{8,9}",,,,,,,[9,10],[5,6]],[,,"(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}",,,,"700123456",,,[9]],[,,"800\\d{6,7}",,,,"800123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"KG",996,"00","0",,,
"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[25-7]|31[25]"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[36]|[2-9])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KH:[,[,,"[1-9]\\d{7,9}",,,,,,,[8,9,10],[6,7]],[,,"(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}",,,,"23756789",,,[8,9],[6,7]],[,,"(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}",
,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["1\\d[1-9]|[2-9]"],"0$1"],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[89]0"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KI:[,[,,"[2458]\\d{4}|3\\d{4,7}|7\\d{7}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}|7(?:27|31|5[0-4])\\d{5}",
,,,"31234"],[,,"7[23]0\\d{5}",,,,"72012345",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"30(?:0[01]\\d{2}|12(?:11|20))\\d{2}",,,,"30010000",,,[8]],"KI",686,"00",,,,"0",,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7]],[,,"7[4-7]\\d{5}",,,,"7712345"],[,,"[34]\\d{6}",,,,"3212345"],[,,"NA",,,,,,,[-1]],[,,"(?:39[01]|8\\d{2})\\d{4}",,,,"8001234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KN:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",,,,"8692361234",,,,[7]],[,,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",
,,,"5002345678"],[,,"NA",,,,,,,[-1]],"KN",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"869",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KP:[,[,,"1\\d{9}|[28]\\d{7}",,,,,,,[8,10],[6,7]],[,,"2\\d{7}|85\\d{6}",,,,"21234567",,,[8],[6,7]],[,,"19[123]\\d{7}",,,,"1921234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})",
"$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}",,,,"23821234",,,[8]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KR:[,[,,"007\\d{9,11}|[1-7]\\d{3,9}|8\\d{8}",,,,,,,[4,5,6,8,9,10,12,13,14],[3,7]],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})",,,,"22123456",,,[4,5,6,8,9,10],[3,7]],[,,"1[0-26-9]\\d{7,8}",,,,"1000000000",,,[9,10]],[,,"(?:00798\\d{0,2}|80)\\d{7}",,,,"801234567",,,[9,
12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,"NA",,,,,,,[-1]],[,,"50\\d{8}",,,,"5012345678",,,[10]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[124-68]|3\\d{2}|7(?:[0-8]\\d|9[0-79]))","0",,,"0(8[1-46-8]|85\\d{2})?",,,,[[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["00798"],"$1","0$CC-$1"],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["00798"],"$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"],"0$1",
"0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]","1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131","131[13-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})(\\d{4})",
"$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})","$1-$2",["21[0-46-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[04678]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"],"$1","0$CC-$1"]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["1(?:0|1[19]|[69]9|5[458])|[57]0","1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})",
"$1-$2-$3",["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]","1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d)(\\d{4})","$1-$2-$3",["131","1312"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["131","131[13-9]"],"0$1","0$CC-$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["13[2-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3-$4",["30"],"0$1","0$CC-$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2[1-9]"],"0$1","0$CC-$1"],
[,"(\\d)(\\d{3,4})","$1-$2",["21[0-46-9]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["[3-6][1-9]1","[3-6][1-9]1(?:[0-46-9])"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1(?:5[246-9]|6[04678]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"],"$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",,,[9,10]],,,[,,"00798\\d{7,9}",,,,"007981234567",,,[12,13,14]],[,,"1(?:5(?:22|44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",,,[8]],
1,,[,,"NA",,,,,,,[-1]]],KW:[,[,,"[12569]\\d{6,7}",,,,,,,[7,8]],[,,"(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}",,,,"22345678"],[,,"(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|66\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7[067]\\d|9[0369]\\d)|9(?:0[09]\\d|22\\d|4[01479]\\d|55\\d|6[0679]\\d|[79]\\d{2}|8[057-9]\\d))\\d{4}",,,,"50012345",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"KW",965,"00",
,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]"]],[,"(\\d{3})(\\d{5})","$1 $2",["244|5(?:[015]|66)"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KY:[,[,,"[3589]\\d{9}",,,,,,,[10],[7]],[,,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,,"3452221234",,,,[7]],[,,"345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}",,,,"3453231234",,,,[7]],
[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}|345976\\d{4}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"KY",1,"011","1",,,"1",,,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],KZ:[,[,,"(?:33\\d|7\\d{2}|80[09])\\d{7}",,,,,,,[10]],[,,"33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}",
,,,"7123456789"],[,,"7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}",,,,"7710009998"],[,,"800\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"751\\d{7}",,,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,"NA",,,,,,,[-1]],,,[,,"751\\d{7}",,,,"7511234567"],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LA:[,[,,"[2-8]\\d{7,9}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}",,,,"21212862",,,[8,9],[6]],[,,"20(?:2[2389]|5[4-689]|7[6-8]|9[15-9])\\d{6}",
,,,"2023123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(20)(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["20"],"0$1"],[,"([2-8]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(30)(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["30"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LB:[,[,,"[13-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}",
,,,"1123456",,,[7]],[,,"(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}",,,,"71123456"],[,,"NA",,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9"],"0$1"],[,"([7-9]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
,,[,,"NA",,,,,,,[-1]]],LC:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"LC",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"758",
[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LI:[,[,,"6\\d{8}|[23789]\\d{6}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}",,,,"2345678",,,[7]],[,,"6(?:5(?:09|1\\d|20)|6(?:0[0-6]|10|2[06-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}",,,,"660234567"],[,,"80(?:02[28]|9\\d{2})\\d{2}",,,,"8002222",,,[7]],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}",,,,"9002222",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LI",423,"00","0",
,,"0|10(?:01|20|66)",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[23789]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[56]"]],[,"(69)(7\\d{2})(\\d{4})","$1 $2 $3",["697"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"870(?:28|87)\\d{2}",,,,"8702812",,,[7]],,,[,,"697(?:42|56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"[1-9]\\d{8}",,,,,,,[9],[7]],[,,"(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,,"112345678",,,,[7]],[,,"7[0125-8]\\d{7}",,,,"712345678"],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{1})(\\d{6})","$1 $2 $3",["[1-689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LR:[,[,,"2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}",,,,,,,[7,8,9]],[,,"2\\d{7}",,,,"21234567",,,[8]],[,,"(?:20\\d{3}|330\\d{2}|4[67]\\d|5(?:55)?\\d{2}|77\\d{3}|88\\d{3})\\d{4}",,,,"770123456",,,[7,
9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"332(?:02|[25]\\d)\\d{4}",,,,"332021234",,,[9]],"LR",231,"00","0",,,"0",,,,[[,"(2\\d)(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"([4-5])(\\d{3})(\\d{3})","$1 $2 $3",["[45]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23578]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LS:[,[,,"[2568]\\d{7}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],
[,,"800[256]\\d{4}",,,,"80021234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LT:[,[,,"[3-9]\\d{7}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"800\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"700\\d{5}",,,,"70012345"],[,,"NA",
,,,,,,[-1]],"LT",370,"00","8",,,"[08]",,,,[[,"([34]\\d)(\\d{6})","$1 $2",["37|4(?:1|5[45]|6[2-4])"],"(8-$1)",,1],[,"([3-6]\\d{2})(\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"],"(8-$1)",,1],[,"([7-9]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",,1],[,"(5)(2\\d{2})(\\d{4})","$1 $2 $3",["52[0-79]"],"(8-$1)",,1]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,"NA",,,,,,,[-1]]],LU:[,[,,"[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})",,,,,,,[4,5,6,7,
8,9,10,11]],[,,"(?:2[2-9]\\d{2,9}|(?:[3457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8})",,,,"27123456"],[,,"6[25-79][18]\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"70\\d{6}",,,,"70123456",,,[8]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],
,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])"],
,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["70|80[01]|90[015]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LV:[,[,,"[2689]\\d{7}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"2\\d{7}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"([2689]\\d)(\\d{3})(\\d{3})","$1 $2 $3"]],
,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],LY:[,[,,"[25679]\\d{8}",,,,,,,[9],[7]],[,,"(?:2[1345]|5[1347]|6[123479]|71)\\d{7}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"LY",218,"00","0",,,"0",,,,[[,"([25679]\\d)(\\d{7})","$1-$2",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MA:[,[,,"[5-9]\\d{8}",
,,,,,,[9]],[,,"5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}",,,,"520123456"],[,,"(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"5924[01]\\d{4}",,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"([5-7]\\d{2})(\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"],"0$1"],[,"([58]\\d{3})(\\d{5})","$1-$2",
["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"],"0$1"],[,"(5\\d{4})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"],"0$1"],[,"([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"],"0$1"],[,"(8[09])(\\d{7})","$1-$2",["8(?:0|9[013-9])"],"0$1"]],,[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MC:[,[,,"[34689]\\d{7,8}",,,,,,,[8,9]],[,,"870\\d{5}|9[2-47-9]\\d{6}",,,,"99123456",,,[8]],[,,"3\\d{7}|4(?:4\\d|5[1-9])\\d{5}|6\\d{8}",
,,,"612345678"],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MC",377,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"],"$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["8"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"870\\d{5}",,,,"87012345",,,[8]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],
MD:[,[,,"[235-9]\\d{7}",,,,,,,[8]],[,,"(?:2[1-9]\\d|3[1-79]\\d|5(?:33|5[257]))\\d{5}",,,,"22212345"],[,,"(?:562|6\\d{2}|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}",,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"NA",,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],[,"([25-7]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["2[13-9]|[5-7]"],"0$1"],[,"([89]\\d{2})(\\d{5})","$1 $2",
["[89]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,"NA",,,,,,,[-1]]],ME:[,[,,"[2-9]\\d{7,8}",,,,,,,[8],[6]],[,,"(?:20[2-8]|3(?:0[2-7]|[12][235-7]|3[24-7])|4(?:0[2-467]|1[267])|5(?:0[2467]|1[267]|2[2367]))\\d{5}",,,,"30234567",,,,[6]],[,,"6(?:00\\d|3[024]\\d|6[0-25]\\d|[7-9]\\d{2})\\d{4}",,,,"67622901"],[,,"80[0-258]\\d{5}",,,,"80080002"],[,,"(?:9(?:4[1568]|5[178]))\\d{5}",,,,"94515151"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780"],
"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]|6[036-9]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"77[1-9]\\d{5}",,,,"77273012"],,,[,,"NA",,,,,,,[-1]]],MF:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}",,,,"590271234"],[,,"690(?:0[0-7]|[1-9]\\d)\\d{4}",,,,"690301234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MF",590,"00","0",,,"0",,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,
,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}",,,,"202123456",,,,[7]],[,,"3[2-49]\\d{7}",,,,"321234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],"MG",261,"00","0",,,"0",,,,[[,"([23]\\d)(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
,,[,,"NA",,,,,,,[-1]]],MH:[,[,,"[2-6]\\d{6}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:235|329|45[56]|545)\\d{4}",,,,"2351234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}",
,,,"22212345",,,,[6,7]],[,,"7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}",,,,"72345678"],[,,"800\\d{5}",,,,"80012345"],[,,"5[02-9]\\d{6}",,,,"50012345"],[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"([347]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"([58]\\d{2})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,
,"NA",,,,,,,[-1]]],ML:[,[,,"[246-9]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0(?:2\\d|7[0-8])|1(?:2[5-7]|[3-689]\\d))|44[1239]\\d)\\d{4}",,,,"20212345"],[,,"(?:2(?:079|17\\d)|[679]\\d{3}|8[239]\\d{2})\\d{4}",,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"]],[,"(\\d{4})","$1",["67|74"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[246-9]"]]],
[,,"NA",,,,,,,[-1]],,,[,,"80\\d{6}",,,,"80012345"],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MM:[,[,,"[1478]\\d{5,7}|[256]\\d{5,8}|9(?:[279]\\d{0,2}|[58]|[34]\\d{1,2}|6\\d?)\\d{6}",,,,,,,[6,7,8,9,10],[5]],[,,"1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2[245-8]|3(?:[2-46]|56?)|[46][2-6]|5[3-5])\\d{4}|5(?:2(?:2(?:\\d{1,2})?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1(?:2(?:0|4\\d)?|[356])|2[2-6]|3[24-6]|4(?:2(?:4\\d)?|[3-6])|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9(?:20?|4))\\d{4}|7(?:[04][24-8]|1(?:20?|[3-7])|22|3[2-4]|5[2-7])\\d{4}|8(?:1(?:2\\d{1,2}|[3-689]\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3[24]\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}",
,,,"1234567",,,[6,7,8,9],[5]],[,,"17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3(?:[0-36]|4[069])\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|[6-9]\\d{2})|8\\d|9(?:1\\d|[5-7]\\d{2}|[089]))\\d{5}",,,,"92123456",,,[7,8,9,10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"1333\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["1|2[245]"],"0$1"],[,"(2)(\\d{4})(\\d{4})","$1 $2 $3",
["251"],"0$1"],[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["67|81"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3,4})","$1 $2 $3",["[4-8]"],"0$1"],[,"(9)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(9)([34]\\d{4})(\\d{4})","$1 $2 $3",["9(?:3[0-36]|4[0-57-9])"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92[56]"],"0$1"],[,"(9)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["93"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MN:[,[,,"[12]\\d{7,9}|[57-9]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}",,,,"50123456",,,,[6,7]],[,,"(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}",,,,"88123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"7[05-8]\\d{6}",,,,"75123456",,,[8]],"MN",976,"001","0",,,"0",,,,[[,"([12]\\d)(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],
"0$1"],[,"([12]2\\d)(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"([12]\\d{3})(\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)2"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"],"$1"],[,"([12]\\d{4})(\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\d)[4-9]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MO:[,[,,"[268]\\d{7}",,,,,,,[8]],[,,"(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}",,,,"28212345"],[,,"6(?:[2356]\\d|8[158])\\d{5}",,,,"66123456"],
[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"([268]\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MP:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"MP",1,"011","1",,,"1",,,1,,,[,,"NA",,,,,,,[-1]],,"670",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MQ:[,[,,"[56]\\d{8}",,,,,,,[9]],[,,"596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}",,,,"596301234"],[,,"696(?:[0-479]\\d|5[0-4]|8[0-689])\\d{4}",,,,
"696201234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MQ",596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MR:[,[,,"[2-48]\\d{7}",,,,,,,[8]],[,,"25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}",,,,"35123456"],[,,"[234][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,
[-1]],[,,"NA",,,,,,,[-1]],"MR",222,"00",,,,,,,,[[,"([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MS:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"664491\\d{4}",,,,"6644912345",,,,[7]],[,,"66449[2-6]\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,
,,,,,[-1]],"MS",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"664",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MT:[,[,,"[2357-9]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}",,,,"96961234"],[,,"800[3467]\\d{4}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}",,,,"50037123"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,
"3550\\d{4}",,,,"35501234"],"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,"NA",,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,"NA",,,,,,,[-1]]],MU:[,[,,"[2-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}",,,,"2012345"],[,,"5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-25689]\\d|4[3479]|7[15-8])|9[0-8]\\d)\\d{4}",,,,"52512345",,,[8]],[,,"80[012]\\d{4}",,,,"8001234",
,,[7]],[,,"30\\d{5}",,,,"3012345",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[2-7]0|33)",,,,,,"020",,[[,"([2-46-9]\\d{2})(\\d{4})","$1 $2",["[2-46-9]"]],[,"(5\\d{3})(\\d{4})","$1 $2",["5"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MV:[,[,,"[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024568]|8[024689]|90))\\d{4}",,,,"6701234",,,[7]],[,,"(?:46[46]|7[3-9]\\d|9[15-9]\\d)\\d{4}",
,,,"7712345",,,[7]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[3467]|9(?:[1-9]|0[1-9])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]00"]]],,[,,"781\\d{4}",,,,"7812345",,,[7]],,,[,,"NA",,,,,,,[-1]],[,,"4[05]0\\d{4}",,,,"4001234",,,[7]],,,[,,"NA",,,,,,,[-1]]],MW:[,[,,"(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}",,,,,,,[7,9]],[,,"(?:1[2-9]|21\\d{2})\\d{5}",
,,,"1234567"],[,,"(?:111|77\\d|88\\d|99\\d)\\d{6}",,,,"991234567",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1789]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MX:[,[,,"[1-9]\\d{9,10}",,,,,,,[10,11],[7,
8]],[,,"(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",,,,"2221234567",,,[10],[7,8]],[,,"1(?:(?:33|55|81)\\d{8}|(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})",
,,,"12221234567",,,[11]],[,,"8(?:00|88)\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"300\\d{7}",,,,"3001234567",,,[10]],[,,"500\\d{7}",,,,"5001234567",,,[10]],[,,"NA",,,,,,,[-1]],"MX",52,"0[09]","01",,,"0[12]|04[45](\\d{10})","1$1",,,[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],"01 $1",,1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1",
,1],[,"(1)(\\d{3})(\\d{3})(\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],"$1",,1]],[[,"([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["33|55|81"],"01 $1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"],"01 $1",,1],[,"(1)([358]\\d)(\\d{4})(\\d{4})","$1 $2 $3 $4",["1(?:33|55|81)"]],[,"(1)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"]]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,
,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],MY:[,[,,"[13-9]\\d{7,9}",,,,,,,[8,9,10],[6,7]],[,,"(?:3[2-9]\\d|[4-9][2-9])\\d{6}",,,,"323456789",,,[8,9],[6,7]],[,,"1(?:1[1-5]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}",,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"154\\d{7}",,,,"1541234567",,,[10]],"MY",60,"00","0",,,"0",,,,[[,"([4-79])(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(3)(\\d{4})(\\d{4})",
"$1-$2 $3",["3"],"0$1"],[,"([18]\\d)(\\d{3})(\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1"],[,"(1)([36-8]00)(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]0"]],[,"(11)(\\d{4})(\\d{4})","$1-$2 $3",["11"],"0$1"],[,"(15[49])(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],MZ:[,[,,"[28]\\d{7,8}",,,,,,,[8,9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",,,,"21123456",,,[8]],[,,"8[2-7]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",
,,,"800123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"([28]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],[,"(80\\d)(\\d{3})(\\d{3})","$1 $2 $3",["80"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|6[89]|7[01]))\\d{4}",
,,,"61221234"],[,,"(?:60|8[125])\\d{7}",,,,"811234567",,,[9]],[,,"NA",,,,,,,[-1]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"8(?:3\\d{2}|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(8\\d)(\\d{3})(\\d{4})","$1 $2 $3",["8[1235]"],"0$1"],[,"(6\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(88)(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(870)(\\d{3})(\\d{3})","$1 $2 $3",["870"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
,,[,,"NA",,,,,,,[-1]]],NC:[,[,,"[2-57-9]\\d{5}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,"NA",,,,,,,[-1]],[,,"36\\d{4}",,,,"366711"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NE:[,[,,"[0289]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
,,,"20201234"],[,,"(?:8[089]|9\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[289]|09"]],[,"(08)(\\d{3})(\\d{3})","$1 $2 $3",["08"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],NF:[,[,,"[13]\\d{5}",,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"3[58]\\d{4}",
,,,"381234",,,,[5]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NF",672,"00",,,,,,,,[[,"(\\d{2})(\\d{4})","$1 $2",["1"]],[,"(\\d)(\\d{5})","$1 $2",["3"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NG:[,[,,"[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}",,,,,,,[7,8,10,11,12,13,14],[5,6]],[,,"[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}",
,,,"12345678",,,[7,8],[5,6]],[,,"(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70(?:[1-689]\\d|7[0-3])|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[235-9]\\d)\\d{6}",
,,,"8021234567",,,[8,10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["70|8[01]|90[235-9]"],"0$1"],[,"([78]00)(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]00"],"0$1"],[,"([78]00)(\\d{5})(\\d{5,6})",
"$1 $2 $3",["[78]00"],"0$1"],[,"(78)(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,"NA",,,,,,,[-1]]],NI:[,[,,"[12578]\\d{7}",,,,,,,[8]],[,,"2\\d{7}",,,,"21234567"],[,,"5(?:5[0-7]\\d{5}|[78]\\d{6})|7[5-8]\\d{6}|8\\d{7}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,
"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NL:[,[,,"1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}",,,,"101234567",,,[9]],[,,"6[1-58]\\d{7}",,,,"612345678",,,[9]],[,,"800\\d{4,7}",,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"(?:6760|85\\d{2})\\d{5}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"([1-578]\\d)(\\d{3})(\\d{4})",
"$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"],"0$1"],[,"([1-5]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(6)(\\d{8})","$1 $2",["6[0-57-9]"],"0$1"],[,"(66)(\\d{7})","$1 $2",["66"],"0$1"],[,"(14)(\\d{3,4})","$1 $2",["14"],"$1"],[,"([89]0\\d)(\\d{4,7})","$1 $2",["80|9"],"0$1"]],,[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,,"14\\d{3,4}",,,,"14123",,,[5,6]],[,,"140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])",
,,,"14020",,,[5,6]],,,[,,"NA",,,,,,,[-1]]],NO:[,[,,"0\\d{4}|[2-9]\\d{7}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,,"21234567",,,[8]],[,,"(?:4[015-8]|5[89]|87|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"([489]\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],
[,"([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],,[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",,,,"01234"],1,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})",,,,,,,[8,10],[6,7]],[,,"(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}",,,,"14567890",,,[8],[6,7]],[,,"9(?:6[013]|7[245]|8[0-24-6])\\d{7}",
,,,"9841234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(1)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"],"0$1"],[,"(9\\d{2})(\\d{7})","$1-$2",["9(?:6[013]|7[245]|8)"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NR:[,[,,"[458]\\d{6}",,,,,,,[7]],[,,"(?:444|888)\\d{4}",,,,"4441234"],[,,"55[5-9]\\d{4}",
,,,"5551234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NU:[,[,,"[1-5]\\d{3}",,,,,,,[4]],[,,"[34]\\d{3}",,,,"4002"],[,,"[125]\\d{3}",,,,"1234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"NU",683,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],NZ:[,[,,"6[235-9]\\d{6}|[2-57-9]\\d{7,10}",,,,,,,[8,9,10,11],[7]],[,,"(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}",,,,"32345678",,,[8],[7]],[,,"2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})",,,,"211234567",,,[8,9,10]],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456",,,[8,9,10]],[,,"90\\d{7,9}",,,,"900123456",,,[9,10,11]],[,,"NA",,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,"NA",,,,,,,[-1]],"NZ",64,"0(?:0|161)",
"0",,,"0",,"00",,[[,"([34679])(\\d{3})(\\d{4})","$1-$2 $3",["[346]|7[2-57-9]|9[1-9]"],"0$1"],[,"(24099)(\\d{3})","$1 $2",["240","2409","24099"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|70|86"],"0$1"],[,"(2\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"],"0$1"]],,[,,"[28]6\\d{6,7}",,,,"26123456",,,[8,9]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,
[-1]],,,[,,"NA",,,,,,,[-1]]],OM:[,[,,"(?:5|[279]\\d)\\d{6}|800\\d{5,6}",,,,,,,[7,8,9]],[,,"2[2-6]\\d{6}",,,,"23123456",,,[8]],[,,"7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"92123456",,,[8]],[,,"8007\\d{4,5}|500\\d{4}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"OM",968,"00",,,,,,,,[[,"(2\\d)(\\d{6})","$1 $2",["2"]],[,"([79]\\d{3})(\\d{4})","$1 $2",["[79]"]],[,"([58]00)(\\d{4,6})","$1 $2",["[58]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",
,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PA:[,[,,"[1-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:1(?:0[0-8]|1[49]|2[37]|3[0137]|4[147]|5[05]|6[58]|7[0167]|8[58]|9[139])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[014-7]|2[0-3]|3[03]|4[03-57]|55|6[068]|7[06-8]|8[06-9])|4(?:3[013-69]|4\\d|7[0-589])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[469]0|5[06-9]|7[0-24-79]|8[7-9])|8(?:09|[34]\\d|5[0134]|8[02])|9(?:0[6-9]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}",
,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}",,,,"60012345"],[,,"80[09]\\d{4}",,,,"8001234",,,[7]],[,,"(?:779|8(?:55|60|7[78])|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["6"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PE:[,[,,"[14-9]\\d{7,8}",,,,
,,,[8,9],[6,7]],[,,"(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,"NA",,,,,,,[-1]],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(1)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"([4-8]\\d)(\\d{6})","$1 $2",["[4-7]|8[2-4]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],[,"(9\\d{2})(\\d{3})(\\d{3})",
"$1 $2 $3",["9"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PF:[,[,,"4\\d{5,7}|8\\d{7}",,,,,,,[6,8]],[,,"4(?:[09][45689]\\d|4)\\d{4}",,,,"40412345"],[,,"8[79]\\d{6}",,,,"87123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]]],,[,,"NA",,,,,,,[-1]],,,[,
,"44\\d{4}",,,,"441234",,,[6]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PG:[,[,,"[1-9]\\d{6,7}",,,,,,,[7,8]],[,,"(?:3[0-2]\\d|4[257]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}",,,,"3123456",,,[7]],[,,"(?:20150|68\\d{2}|7(?:[0-689]\\d|75)\\d{2})\\d{3}",,,,"6812345"],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"27[568]\\d{4}",,,,"2751234",,,[7]],"PG",675,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[13-689]|27"]],[,"(\\d{4})(\\d{4})",
"$1 $2",["20|7"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PH:[,[,,"2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}",,,,,,,[6,8,9,10,11,12,13],[5,7]],[,,"2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})",,,,"21234567",,,[6,8,9,10],[5,7]],[,,"(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[235-9]|5[056]|6[5-7]|7[34-79]|89|9[4-9]))\\d{7}",,,,"9051234567",,,[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,
,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"PH",63,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(2)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],
"(0$1)"],[,"([3-8]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[3-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["81|9"],"0$1"],[,"(1800)(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(1800)(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PK:[,[,,"1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))",,,,,,,[8,9,10,11,12],[6,7]],[,,"(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}",
,,,"2123456789",,,[9,10],[6,7,8]],[,,"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"NA",,,,,,,[-1]],[,,"122\\d{6}",,,,"122044444",,,[9]],[,,"NA",,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"(\\d{2})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"],
"(0$1)"],[,"(\\d{3})(111)(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"],"(0$1)"],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{3})(\\d{6,7})","$1 $2",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"],"(0$1)"],[,"(3\\d{2})(\\d{7})","$1 $2",["3"],"0$1"],
[,"([15]\\d{3})(\\d{5,6})","$1 $2",["58[12]|1"],"(0$1)"],[,"(586\\d{2})(\\d{5})","$1 $2",["586"],"(0$1)"],[,"([89]00)(\\d{3})(\\d{2})","$1 $2 $3",["[89]00"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",,,,"21111825888",,,[11,12]],,,[,,"NA",,,,,,,[-1]]],PL:[,[,,"[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}",
,,,,,,[6,7,8,9]],[,,"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}",,,,"123456789",,,[7,9]],[,,"(?:5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",,,[9]],[,,"NA",,,,,,,[-1]],[,,"39\\d{7}",,,,"391234567",,,[9]],"PL",48,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],
[,"(\\d{2})(\\d{1})(\\d{4})","$1 $2 $3",["[12]2"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["26|39|5[0137]|6[0469]|7[02389]|8[08]"]],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{3})(\\d{3})","$1 $2",["64"]]],,[,,"64\\d{4,7}",,,,"641234567"],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PM:[,[,,"[45]\\d{5}",,,,,,,[6]],[,,"41\\d{4}",,,,"411234"],[,,"55\\d{4}",,,,"551234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
"PM",508,"00","0",,,"0",,,,[[,"([45]\\d)(\\d{2})(\\d{2})","$1 $2 $3",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PR:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],
"PR",1,"011","1",,,"1",,,1,,,[,,"NA",,,,,,,[-1]],,"787|939",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PS:[,[,,"[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})",,,,,,,[4,5,8,9,10],[7]],[,,"(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}",,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1(?:4|9\\d)\\d{2}",,,,"19123",,,[4,5]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"PS",970,"00","0",,,"0",
,,,[[,"([2489])(2\\d{2})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],[,"(5[69]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],[,"(1[78]00)(\\d{3})(\\d{3})","$1 $2 $3",["1[78]"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PT:[,[,,"[2-46-9]\\d{8}",,,,,,,[9]],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",,,,"212345678"],[,,"9(?:[1236]\\d{2}|480)\\d{5}",,,,"912345678"],[,,"80[02]\\d{6}",,,,"800123456"],[,,"6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}",
,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(2\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],[,"([2-46-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"7(?:0(?:7\\d|8[17]))\\d{5}",,,,"707123456"],,,[,,"600\\d{6}",,,,"600110000"]],PW:[,[,,"[2-8]\\d{6}",,,,,,,[7]],[,,"2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}",
,,,"2771234"],[,,"(?:6[234689]0|77[45789])\\d{4}",,,,"6201234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],PY:[,[,,"5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}",,,,,,,[6,7,8,9],[5]],[,,"(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",
,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:6[12]|[78][1-6]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"],"(0$1)"],[,"(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",
["9[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8700"]],[,"(\\d{3})(\\d{4,5})","$1 $2",["[2-8][1-9]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8][1-9]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567"],,,[,,"NA",,,,,,,[-1]]],QA:[,[,,"[2-8]\\d{6,7}",,,,,,,[7,8]],[,,"4[04]\\d{6}",,,,"44123456",,,[8]],[,,"[3567]\\d{7}",,,,"33123456",,,[8]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",
,,,,,,[-1]],"QA",974,"00",,,,,,,,[[,"([28]\\d{2})(\\d{4})","$1 $2",["[28]"]],[,"([3-7]\\d{3})(\\d{4})","$1 $2",["[3-7]"]]],,[,,"2(?:[12]\\d|61)\\d{4}",,,,"2123456",,,[7]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],RE:[,[,,"[268]\\d{8}",,,,,,,[9]],[,,"262\\d{6}",,,,"262161234"],[,,"69[23]\\d{6}",,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"RE",262,
"00","0",,,"0",,,,[[,"([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"0$1"]],,[,,"NA",,,,,,,[-1]],1,"262|6[49]|8",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],RO:[,[,,"[23]\\d{5,8}|[7-9]\\d{8}",,,,,,,[6,9]],[,,"2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3(?:1\\d{4}(?:\\d{3})?|[3-6]\\d{7})",,,,"211234567"],[,,"7(?:[0-8]\\d{2}|99\\d)\\d{5}",,,,"712345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[036]\\d{6}",,,,"900123456",,,[9]],[,,"801\\d{6}",,,,"801123456",
,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],[,"(\\d{2})(\\d{4})","$1 $2",["[23]1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"],"0$1"],[,"(2\\d{2})(\\d{3})","$1 $2",["2[3-6]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"37\\d{7}",,,,"372123456",,,[9]],,,[,,"NA",,,,,,,[-1]]],RS:[,[,,"[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})",,,,,,,[6,7,8,9,10,11,12],[5]],[,,"(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}",
,,,"10234567",,,[7,8,9,10,11,12],[5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],[,,"800\\d{3,9}",,,,"80012345"],[,,"(?:90[0169]|78\\d)\\d{3,7}",,,,"90012345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"([23]\\d{2})(\\d{4,9})","$1 $2",["(?:2[389]|39)0"],"0$1"],[,"([1-3]\\d)(\\d{5,10})","$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"],"0$1"],[,"(6\\d)(\\d{6,8})","$1 $2",["6"],"0$1"],[,"([89]\\d{2})(\\d{3,9})","$1 $2",["[89]"],
"0$1"],[,"(7[26])(\\d{4,9})","$1 $2",["7[26]"],"0$1"],[,"(7[08]\\d)(\\d{4,9})","$1 $2",["7[08]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,"NA",,,,,,,[-1]]],RU:[,[,,"[3489]\\d{9}",,,,,,,[10]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",,,,"3011234567"],[,,"9\\d{9}",,,,"9123456789"],[,,"80[04]\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",
,,,"8091234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[1-79]"],"$1",,1],[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[34689]"],"8 ($1)",,1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1]],[[,"([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[34689]"],"8 ($1)",,1],[,"(7\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]],[,
,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],RW:[,[,,"[027-9]\\d{7,8}",,,,,,,[8,9]],[,,"2[258]\\d{7}|06\\d{6}",,,,"250123456"],[,,"7[238]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900\\d{6}",,,,"900123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(2\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"$1"],[,"([7-9]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],[,"(0\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],,[,,
"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],SA:[,[,,"1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}",,,,,,,[8,9,10],[7]],[,,"11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[8,9],[7]],[,,"(?:5(?:[013-689]\\d|7[0-26-8])|811\\d)\\d{6}",,,,"512345678",,,[9,10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"92[05]\\d{6}",,,,"920012345",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"([1-467])(\\d{3})(\\d{4})",
"$1 $2 $3",["[1-467]"],"0$1"],[,"(1\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1[1-467]"],"0$1"],[,"(5\\d)(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(92\\d{2})(\\d{5})","$1 $2",["92"],"$1"],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"$1"],[,"(811)(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SB:[,[,,"[1-9]\\d{4,6}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",,,,"40123",,,[5]],[,,"48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}",
,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["[7-9]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SC:[,[,,"[24689]\\d{5,6}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],[,,"2[5-8]\\d{5}",,,,"2510123"],[,,"8000\\d{3}",,,,"8000000"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"(?:64\\d|971)\\d{4}",
,,,"6412345"],"SC",248,"0(?:[02]|10?)",,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1(?:[125]\\d|8[3567])\\d{6}",,,,"121231234"],[,,"9[0-3569]\\d{7}",,,,"911231234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",,"0$1"]],,[,,"NA",,,,,,,[-1]],
,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SE:[,[,,"[1-35-9]\\d{5,11}|4\\d{6,8}",,,,,,,[6,7,8,9,10,12]],[,,"1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})",
,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})",,,,"771234567",,,[6,9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,"NA",,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],
"0$1"],[,"([1-469]\\d)(\\d{3})(\\d{2})","$1-$2 $3",["1[136]|2[136]|3[356]|4[0246]|6[03]|90"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],"0$1"],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],"0$1"],[,"(77)(\\d{2})(\\d{2})",
"$1-$2$3",["7"],"0$1"],[,"(20)(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9[034]"],"0$1"],[,"(9[034]\\d)(\\d{4})","$1-$2",["9[034]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"],"0$1"]],[[,"(8)(\\d{2,3})(\\d{2,3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],[,"([1-469]\\d)(\\d{3})(\\d{2})","$1 $2 $3",["1[136]|2[136]|3[356]|4[0246]|6[03]|90"]],
[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],[,"(7\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7"]],[,"(77)(\\d{2})(\\d{2})","$1 $2 $3",["7"]],[,"(20)(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})",
"$1 $2 $3 $4",["9[034]"]],[,"(9[034]\\d)(\\d{4})","$1 $2",["9[034]"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["25[245]|67[3-6]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"(?:25[245]|67[3-6])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"[36]\\d{7}|[17-9]\\d{7,10}",,,,,,,[8,10,11]],[,,"6[1-9]\\d{6}",,,,"61234567",,,[8]],[,,"(?:8[1-8]|9[0-8])\\d{6}",,,,"81234567",,,[8]],[,,"1?800\\d{7}",,,,"18001234567",,,[10,11]],[,,"1900\\d{7}",
,,,"19001234567",,,[11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"3[12]\\d{6}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"([3689]\\d{3})(\\d{4})","$1 $2",["[369]|8[1-9]"]],[,"(1[89]00)(\\d{3})(\\d{4})","$1 $2 $3",["1[89]"]],[,"(7000)(\\d{4})(\\d{3})","$1 $2 $3",["70"]],[,"(800)(\\d{3})(\\d{4})","$1 $2 $3",["80"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,"NA",,,,,,,[-1]]],SH:[,[,,"[256]\\d{4}",,,,,,,[4,5]],[,,"2(?:[0-57-9]\\d|6[4-9])\\d{2}",
,,,"22158"],[,,"[56]\\d{4}",,,,"51234",,,[5]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"262\\d{2}",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SI:[,[,,"[1-7]\\d{6,7}|[89]\\d{4,7}",,,,,,,[5,6,7,8]],[,,"(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}",,,,"11234567",,,[8],[7]],[,,"(?:[37][01]|4[0139]|51|6[48])\\d{6}",,,,"31234567",,,[8]],[,,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],
[,,"90\\d{4,6}|89[1-3]\\d{2,5}",,,,"90123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"(?:59|8[1-3])\\d{6}",,,,"59012345",,,[8]],"SI",386,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"],"(0$1)"],[,"([3-7]\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],[,"([89][09])(\\d{3,6})","$1 $2",["[89][09]"],"0$1"],[,"([58]\\d{2})(\\d{5})","$1 $2",["59|8[1-3]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
,,[,,"NA",,,,,,,[-1]]],SJ:[,[,,"0\\d{4}|[45789]\\d{7}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}",,,,"01234"],1,,[,,"81[23]\\d{5}",
,,,"81212345",,,[8]]],SK:[,[,,"(?:[2-68]\\d{5,8}|9\\d{6,8})",,,,,,,[6,7,9]],[,,"2(?:1(?:6\\d{3,4}|7\\d{3})|[2-9]\\d{7})|[3-5][1-8](?:1(?:6\\d{2,3}|7\\d{3})|\\d{7})",,,,"221234567"],[,,"9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|[45]\\d)\\d)\\d{5}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:[78]\\d{7}|00\\d{6})",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],"SK",421,"00","0",,,"0",,,,[[,"(2)(1[67])(\\d{3,4})",
"$1 $2 $3",["21[67]"],"0$1"],[,"([3-5]\\d)(1[67])(\\d{2,3})","$1 $2 $3",["[3-5]"],"0$1"],[,"(2)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"],[,"([689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(9090)(\\d{3})","$1 $2",["9090"],"0$1"]],,[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}",,,,"800123456",,,[7,9]],[,,"96\\d{7}",,,,"961234567",,,[9]],,,[,,"NA",,,,,,
,[-1]]],SL:[,[,,"[2-9]\\d{7}",,,,,,,[8],[6]],[,,"[235]2[2-4][2-9]\\d{4}",,,,"22221234",,,,[6]],[,,"(?:2[15]|3[03-5]|4[04]|5[05]|66|7[6-9]|88|99)\\d{6}",,,,"25123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",,"(0$1)"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SM:[,[,,"[05-7]\\d{7,9}",,,,,,,[8,10],[6]],[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,
"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,,"66661212",,,[8]],[,,"NA",,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"5[158]\\d{6}",,,,"58001110",,,[8]],"SM",378,"00",,,,"(?:0549)?([89]\\d{5})","0549$1",,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(0549)(\\d{6})","$1 $2",["0"]],[,"(\\d{6})","0549 $1",["[89]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(0549)(\\d{6})","($1) $2",["0"]],[,"(\\d{6})","(0549) $1",
["[89]"]]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],SN:[,[,,"[3789]\\d{8}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:[06-8]\\d|21|90)\\d{6}",,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,"NA",,,,,,,[-1]],[,,"39[01]\\d{6}|3392\\d{5}|93330\\d{4}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",
["[379]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SO:[,[,,"[1-9]\\d{5,8}",,,,,,,[6,7,8,9]],[,,"(?:1\\d{1,2}|2[0-79]\\d|3[0-46-8]?\\d|4[0-7]?\\d|59\\d|8[125])\\d{4}",,,,"4012345",,,[6,7]],[,,"(?:15\\d|2(?:4\\d|8)|3[59]\\d{2}|4[89]\\d{2}|6[1-9]?\\d{2}|7(?:[1-8]\\d|9\\d{1,2})|8[08]\\d{2}|9(?:0[67]|[2-9])\\d)\\d{5}",,,,"71123456",,,[7,8,9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["2[0-79]|[13-5]"]],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"]],[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{2})(\\d{5,7})","$1 $2",["15|28|6[1-35-9]|799|9[2-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3[59]|4[89]|6[24-6]|79|8[08]|90"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SR:[,[,,"[2-8]\\d{5,6}",,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}",
,,,"211234"],[,,"(?:7[124-7]|8[1-9])\\d{5}",,,,"7412345",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-4]|5[2-58]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],[,"(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"18\\d{7}",,,,"181234567"],[,,"(?:12|9[1257])\\d{7}",
,,,"977123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",,"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],ST:[,[,,"[29]\\d{6}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}",,,,"9812345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],
"ST",239,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|[89]\\d{6}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2[1-6]\\d{6}",,,,"21234567",,,[8]],[,,"[67]\\d{7}",,,,"70123456",,,[8]],[,,"800\\d{4}(?:\\d{4})?",,,,"8001234",,,[7,11]],[,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,"(\\d{3})(\\d{4})",
"$1 $2",["[89]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SX:[,[,,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],
[,,"NA",,,,,,,[-1]],"SX",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"721",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SY:[,[,,"[1-59]\\d{7,8}",,,,,,,[8,9],[6,7]],[,,"(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}",,,,"112345678",,,,[6,7]],[,,"9(?:22|[3-589]\\d|6[024-9])\\d{6}",,,,"944567890",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})",
"$1 $2 $3",["[1-5]"],"0$1",,1],[,"(9\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",,1]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],SZ:[,[,,"[027]\\d{7}",,,,,,,[8]],[,,"2[2-5]\\d{6}",,,,"22171234"],[,,"7[6-8]\\d{6}",,,,"76123456"],[,,"0800\\d{4}",,,,"08001234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[027]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"0800\\d{4}",,,,"08001234"],
[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,[4]],[,,"8\\d{3}",,,,"8999"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TC:[,[,,"[5689]\\d{9}",,,,,,,[10],[7]],[,,"649(?:712|9(?:4\\d|50))\\d{4}",,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",,,,"6492311234",
,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"64971[01]\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"649",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TD:[,[,,"[2679]\\d{7}",,,,,,,[8]],[,,"22(?:[3789]0|5[0-5]|6[89])\\d{4}",,,,"22501234"],[,,"(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}",,,,"63012345"],[,,"NA",,,,
,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TG:[,[,,"[29]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}",,,,"22212345"],[,,"9[0-36-9]\\d{6}",,,,"90112345"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TG",228,"00",,,,,,,
,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[29]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TH:[,[,,"[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?",,,,,,,[4,8,9,10]],[,,"(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",,,[9]],"TH",
66,"00","0",,,"0",,,,[[,"(2)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"([13-9]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"],"0$1"],[,"(1[89]00)(\\d{3})(\\d{3})","$1 $2 $3",["1"],"$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"1\\d{3}",,,,"1100",,,[4]],[,,"1\\d{3}",,,,"1100",,,[4]],,,[,,"NA",,,,,,,[-1]]],TJ:[,[,,"[3-57-9]\\d{8}",,,,,,,[9],[3,5,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,,"372123456",,,,[3,5,7]],[,,"(?:41[18]|(?:5[05]|77|88|9[0-35-9])\\d)\\d{6}",,,,"917123456"],
[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TJ",992,"810","8",,,"8",,"8~10",,[[,"([349]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],"$1",,1],[,"([457-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:1[59]|[0235-9])"],"$1",,1],[,"(331700)(\\d)(\\d{2})","$1 $2 $3",["331","3317","33170","331700"],"$1",,1],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"],"$1",,1]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,
,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TL:[,[,,"[2-489]\\d{6}|7\\d{6,7}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[3-8]\\d{6}",,,,"77212345",
,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,"NA",,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",,,[7]],[,,"NA",,,,,,,[-1]],"TL",670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]"]],[,"(\\d{4})(\\d{4})","$1 $2",["7"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TM:[,[,,"[1-6]\\d{7}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],
[,,"6[1-9]\\d{6}",,,,"66123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["13|[2-5]"],"(8 $1)"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"3(?:[012]\\d|6[0-4]|91)\\d{5}|7\\d{7}|81200\\d{3}",
,,,"71234567"],[,,"(?:[259]\\d|4[0-6])\\d{6}",,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TO:[,[,,"[02-8]\\d{4,6}",,,,,,,[5,7]],[,,"(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:7[578]|8[47-9])\\d{5}",,,,"7715123",,,[7]],
[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[1-6]|7[0-4]|8[05]"]],[,"(\\d{3})(\\d{4})","$1 $2",["7[5-9]|8[47-9]"]],[,"(\\d{4})(\\d{3})","$1 $2",["0"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],TR:[,[,,"[2-589]\\d{9}|444\\d{4}",,,,,,,[7,10]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",
,,,"2123456789",,,[10]],[,,"5(?:(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{2}|6161)\\d{5}",,,,"5012345678",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[02-69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["51|[89]"],"0$1",
,1],[,"(444)(\\d{1})(\\d{3})","$1 $2 $3",["444"]]],,[,,"512\\d{7}",,,,"5123456789",,,[10]],,,[,,"444\\d{4}",,,,"4441444",,,[7]],[,,"444\\d{4}|850\\d{7}",,,,"4441444"],,,[,,"NA",,,,,,,[-1]]],TT:[,[,,"[589]\\d{9}",,,,,,,[10],[7]],[,,"868(?:2(?:01|[23]\\d)|6(?:0[79]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",,,,[7]],[,,"868(?:2(?:6[6-9]|[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"TT",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"868",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"[279]\\d{4,6}",,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:70\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",
,,,,,,[-1]],"TV",688,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TW:[,[,,"2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}",,,,,,,[7,8,9,10]],[,,"2(?:[235-8]\\d{7}|4\\d{6,7})|[3-8]\\d{7,8}",,,,"221234567",,,[8,9]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"20(?:2|[013-9]\\d{2})\\d{4}",,,,"203123456",,,[7,9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"TW",886,"0(?:0[25679]|19)","0","#",,"0",
,,,[[,"(20)(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"(20)(\\d{3})(\\d{4})","$1 $2 $3",["20[013-9]"],"0$1"],[,"([2-8])(\\d{3,4})(\\d{4})","$1 $2 $3",["2[23-8]|[3-6]|[78][1-9]"],"0$1"],[,"([89]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["80|9"],"0$1"],[,"(70)(\\d{4})(\\d{4})","$1 $2 $3",["70"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],TZ:[,[,,"\\d{9}",,,,,,,[7,9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"(?:6[2-9]|7[13-9])\\d{7}",,,,"621234567",,,[9]],[,,
"80[08]\\d{6}",,,,"800123456",,,[9]],[,,"90\\d{7}",,,,"900123456",,,[9]],[,,"8(?:40|6[01])\\d{6}",,,,"840123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678",,,[9]],"TZ",255,"00[056]","0",,,"0",,,,[[,"([24]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"([67]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"],[,"([89]\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}",,,,"800123456",,,[9]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,
,,,,,[-1]]],UA:[,[,,"[3-9]\\d{8}",,,,,,,[9],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,,"311234567",,,,[5,6,7]],[,,"(?:39|50|6[36-8]|7[13]|9[1-9])\\d{7}",,,,"391234567"],[,,"800\\d{6}",,,,"800123456"],[,,"900\\d{6}",,,,"900123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"89\\d{7}",,,,"891234567"],"UA",380,"00","0",,,"0",,"0~0",,[[,"([3-9]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|7|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"],
"0$1"],[,"([3-689]\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"],"0$1"],[,"([3-6]\\d{3})(\\d{5})","$1 $2",["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])","3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"],
"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],UG:[,[,,"\\d{9}",,,,,,,[9],[5,6,7]],[,,"20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3(?:0[0-4]|[23]\\d)|5[0-4]\\d|6[035-9]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}",,,,"312345678",,,,[5,6,7]],[,,"7(?:(?:0[0-7]|[15789]\\d|30|4[0-4])\\d|2(?:[03]\\d|60))\\d{5}",,,,"712345678"],[,,"800[123]\\d{5}",,,,"800123456"],[,,"90[123]\\d{6}",,,,"901123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"UG",256,"00[057]","0",
,,"0",,,,[[,"(\\d{3})(\\d{6})","$1 $2",["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"],"0$1"],[,"(2024)(\\d{5})","$1 $2",["2024"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],US:[,[,,"[2-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
,,,"2015550123",,,,[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}",
,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",,,,1],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",,,,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3"]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],UY:[,[,,"[2489]\\d{6,7}",,,,,,,[7,8]],[,,
"2\\d{7}|4[2-7]\\d{6}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"80[05]\\d{4}",,,,"8001234",,,[7]],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"UY",598,"0(?:1[3-9]\\d|0)","0"," int. ",,"0",,"00",,[[,"(\\d{4})(\\d{4})","$1 $2",["[24]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9[1-9]"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["[89]0"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,
[-1]]],UZ:[,[,,"[679]\\d{8}",,,,,,,[9],[7]],[,,"(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,,"662345678",,,,[7]],[,,"6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}",
,,,"912345678"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"UZ",998,"810","8",,,"8",,"8~10",,[[,"([679]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",,"8 $1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],VA:[,[,,"(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))",,,,,,,[6,8,9,10,11]],[,,"06698\\d{5}",,,,"0669812345",,,[10]],[,,"3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})",,,,
"3123456789",,,[9,10,11]],[,,"80(?:0\\d{6}|3\\d{3})",,,,"800123456",,,[6,9]],[,,"0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{6}|[17]\\d{3})",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,"NA",,,,,,,[-1]],,,[,,"848\\d{6}",,,,"848123456",,,[9]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],VC:[,[,
,"[5789]\\d{9}",,,,,,,[10],[7]],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-4]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"VC",1,"011","1",,,"1",,,,,,[,,"NA",,,,,,,[-1]],,"784",[,,"NA",
,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],VE:[,[,,"[24589]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}",,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"900\\d{7}",,,,"9001234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",,"0$1","$CC $1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",
,,,,,,[-1]]],VG:[,[,,"[2589]\\d{9}",,,,,,,[10],[7]],[,,"284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})",,,,"2842291234",,,,[7]],[,,"284(?:(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})",,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"VG",1,"011","1",,,"1",,,,,,[,,"NA",,,,,
,,[-1]],,"284",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],VI:[,[,,"[3589]\\d{9}",,,,,,,[10],[7]],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",
,,,"9002345678"],[,,"NA",,,,,,,[-1]],[,,"5(?:00|22|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"NA",,,,,,,[-1]],"VI",1,"011","1",,,"1",,,1,,,[,,"NA",,,,,,,[-1]],,"340",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],VN:[,[,,"[167]\\d{6,9}|[2-59]\\d{7,9}|8\\d{6,8}",,,,,,,[7,8,9,10]],[,,"(?:2(?:0(?:\\d|[3-9]\\d)|1[0-689]\\d|2(?:\\d|[0-25-9]\\d)|[5-7]\\d|3\\d{2}|[48][01]\\d|9(?:\\d|[0-4679]\\d))|3(?:[0136-9]|[25][01])\\d|4\\d{2}|5(?:[01][01]|[2-9])\\d|6(?:[0-46-8]|5[01])\\d|7(?:[02-79]|[18][01])\\d)\\d{6}|8(?:[2-5]\\d|6[236]|7[13])\\d{6}",
,,,"2101234567",,,[9,10]],[,,"(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8(?:6[89]|8\\d|9[89])\\d{6}",,,,"912345678",,,[9,10]],[,,"1800\\d{4,6}",,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"VN",84,"00","0",,,"0",,,,[[,"([17]99)(\\d{4})","$1 $2",["[17]99"],"0$1",,1],[,"([48])(\\d{4})(\\d{4})","$1 $2 $3",["4|8(?:[2-5]|6[236]|7[13])"],"0$1",,1],[,"([235-7]\\d)(\\d{4})(\\d{3})","$1 $2 $3",["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"],
"0$1",,1],[,"(80)(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(69\\d)(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"([235-7]\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["2[0-489]|3[25]|5[01]|65|7[18]"],"0$1",,1],[,"([89]\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8(?:8|9[89])|9"],"0$1",,1],[,"(1[2689]\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"],"0$1",,1],[,"(86[89])(\\d{3})(\\d{3})","$1 $2 $3",["86[89]"],"0$1",,1],[,"(1[89]00)(\\d{4,6})","$1 $2",["1[89]0"],"$1",,1]],,[,,"NA",,,,,,,[-1]],,,[,,"[17]99\\d{4}|69\\d{5,6}",
,,,"1992000",,,[7,8]],[,,"[17]99\\d{4}|69\\d{5,6}|80\\d{5}",,,,"1992000",,,[7,8]],,,[,,"NA",,,,,,,[-1]]],VU:[,[,,"[2-57-9]\\d{4,6}",,,,,,,[5,7]],[,,"(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}",,,,"22123",,,[5]],[,,"(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}",,,,"5912345",,,[7]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[579]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,
,"3[03]\\d{3}|900\\d{4}",,,,"30123"],,,[,,"NA",,,,,,,[-1]]],WF:[,[,,"[4-8]\\d{5}",,,,,,,[6]],[,,"(?:50|68|72)\\d{4}",,,,"501234"],[,,"(?:50|68|72|8[23])\\d{4}",,,,"501234"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234"]],WS:[,[,,"[2-8]\\d{4,6}",,,,,,,[5,6,7]],[,,"(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}",
,,,"22123",,,[5,7]],[,,"(?:60|7[25-7]\\d)\\d{4}",,,,"601234",,,[6,7]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(8\\d{2})(\\d{3,4})","$1 $2",["8"]],[,"(7\\d)(\\d{5})","$1 $2",["7"]],[,"(\\d{5})","$1",["[2-6]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],YE:[,[,,"[1-7]\\d{6,8}",,,,,,,[7,8,9],[6]],[,,"(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}",
,,,"1234567",,,[7,8],[6]],[,,"7[0137]\\d{7}",,,,"712345678",,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"([1-7])(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],[,"(7\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7[0137]"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],YT:[,[,,"[268]\\d{8}",,,,,,,[9]],[,,"269(?:6[0-4]|50)\\d{4}",,,,"269601234"],[,,"639\\d{6}",
,,,"639123456"],[,,"80\\d{7}",,,,"801234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"YT",262,"00","0",,,"0",,,,,,[,,"NA",,,,,,,[-1]],,"269|63",[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],ZA:[,[,,"[1-79]\\d{8}|8\\d{4,8}",,,,,,,[5,6,7,8,9]],[,,"(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",,,[9]],[,,"(?:6\\d|7[0-46-9])\\d{7}|8(?:[1-4]\\d{1,5}|5\\d{5})\\d{2}",,,,"711234567"],[,,"80\\d{7}",,,,"801234567",,,[9]],[,,"86[2-9]\\d{6}|9[0-2]\\d{7}",
,,,"862345678",,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,"NA",,,,,,,[-1]],[,,"87\\d{7}",,,,"871234567",,,[9]],"ZA",27,"00","0",,,"0",,,,[[,"(860)(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-57]|6[1-9])"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"861\\d{6}",,,,"861123456",,,[9]],,,[,,"NA",,,,,,,[-1]]],ZM:[,[,,"[289]\\d{8}",
,,,,,,[9]],[,,"21[1-8]\\d{6}",,,,"211234567"],[,,"9(?:5[034589]|[67]\\d)\\d{6}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"ZM",260,"00","0",,,"0",,,,[[,"([29]\\d)(\\d{7})","$1 $2",["[29]"],"0$1"],[,"(800)(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],ZW:[,[,,"2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}",
,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|[36]7|75\\d|[69]8|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|6[14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|9\\d|[4-8])|2(?:0\\d{2}|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83|2582\\d)\\d{3}|(?:4\\d{6,7}|9[2-9]\\d{4,5})",,,,
"1312345",,,,[3,4]],[,,"7[1378]\\d{7}",,,,"711234567",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"86(?:1[12]|30|44|55|77|8[367]|99)\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"([49])(\\d{3})(\\d{2,4})","$1 $2 $3",["4|9[2-9]"],"0$1"],[,"(7\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["7"],"0$1"],[,"(86\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["86[24]"],"0$1"],[,"([2356]\\d{2})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)"],
"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"],"0$1"],[,"([1-356]\\d)(\\d{3,5})","$1 $2",["1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"],"0$1"],[,"([235]\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[23]9|54"],"0$1"],[,"([25]\\d{3})(\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"],"0$1"],[,"(8\\d{3})(\\d{6})","$1 $2",["86"],"0$1"],[,"(80\\d)(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],
800:[,[,,"\\d{8}",,,,,,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],808:[,[,,"\\d{8}",,,,,,,[8]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"001",808,,
,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]],870:[,[,,"[35-7]\\d{8}",,,,,,,[9]],[,,"NA",,,,,,,[-1]],[,,"(?:[356]\\d|7[6-8])\\d{7}",,,,"301234567"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"001",870,,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],878:[,[,,"1\\d{11}",,,,,,
,[12]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],881:[,[,,"[67]\\d{8}",,,,,,,[9]],[,,"NA",,,,,,,[-1]],[,,"[67]\\d{8}",,,,"612345678"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"001",881,
,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[67]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],882:[,[,,"[13]\\d{6,11}",,,,,,,[7,8,9,10,11,12]],[,,"NA",,,,,,,[-1]],[,,"3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}",,,,"3421234",,,[7,9,10]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}",,,,"390123456789"],
"001",882,,,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["348"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["16|39"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",,,[11]]],883:[,[,,"51\\d{7}(?:\\d{3})?",
,,,,,,[9,12]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})",,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,"NA",,
,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"\\d{11}",,,,"12345678901"],1,,[,,"NA",,,,,,,[-1]]],979:[,[,,"\\d{9}",,,,,,,[9]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"\\d{9}",,,,"123456789"],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})",
"$1 $2 $3"]],,[,,"NA",,,,,,,[-1]],,,[,,"NA",,,,,,,[-1]],[,,"NA",,,,,,,[-1]],1,,[,,"NA",,,,,,,[-1]]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function Q(){this.a={}}Q.a=function(){return Q.c?Q.c:Q.c=new Q};
var ya={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Aa={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",
Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},R=RegExp("^[+\uff0b]+"),Ba=RegExp("([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])"),Ca=RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),Da=/[\\\/] *x/,Ea=RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$"),Fa=/(?:.*?[A-Za-z]){3}.*/,Ga=RegExp("(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$",
"i"),Ha=RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \u00a0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$",
"i"),Ia=/(\$\d)/;function Ja(a){var b=a.search(Ca);0<=b?(a=a.substring(b),a=a.replace(Ea,""),b=a.search(Da),0<=b&&(a=a.substring(0,b))):a="";return a}function Ka(a){return 2>a.length?!1:S(Ha,a)}function La(a){return S(Fa,a)?Ma(a,Aa):Ma(a,ya)}function Na(a){var b=La(a.toString());a.c="";a.a(b)}function Oa(a){return!!a&&(1!=G(a,9)||-1!=D(a,9)[0])}function Ma(a,b){for(var c=new K,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}
function Pa(a){return null!=a&&isNaN(a)&&a.toUpperCase()in xa}
function Qa(a,b,c){if(0==B(b,2)&&null!=b.a[5]){var d=F(b,5);if(0<d.length)return d}var d=F(b,1),e=T(b);if(0==c)return Ra(d,0,e,"");if(!(d in P))return e;a=U(a,d,Sa(d));b=null!=b.a[3]&&B(b,3).length?3==c?";ext="+B(b,3):null!=a.a[13]?B(a,13)+F(b,3):" ext. "+F(b,3):"";a:{a=D(a,20).length&&2!=c?D(a,20):D(a,19);for(var f,g=a.length,h=0;h<g;++h){f=a[h];var k=G(f,3);if(!k||!e.search(B(f,3,k-1)))if(k=new RegExp(B(f,1)),S(k,e)){a=f;break a}}a=null}a&&(g=a,a=F(g,2),f=new RegExp(B(g,1)),F(g,5),g=F(g,4),e=2==
c&&null!=g&&0<g.length?e.replace(f,a.replace(Ia,g)):e.replace(f,a),3==c&&(e=e.replace(RegExp("^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+"),""),e=e.replace(RegExp("[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\\[\\]/~\u2053\u223c\uff5e]+","g"),"-")));return Ra(d,c,e,b)}function U(a,b,c){return"001"==c?V(a,""+b):V(a,c)}
function T(a){var b=""+B(a,2);return null!=a.a[4]&&B(a,4)&&0<F(a,8)?Array(F(a,8)+1).join("0")+b:b}function Ra(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function W(a,b){switch(b){case 4:return B(a,5);case 3:return B(a,4);case 1:return B(a,3);case 0:case 2:return B(a,2);case 5:return B(a,6);case 6:return B(a,8);case 7:return B(a,7);case 8:return B(a,21);case 9:return B(a,25);case 10:return B(a,28);default:return B(a,1)}}
function Ta(a,b){return X(a,B(b,1))?X(a,B(b,5))?4:X(a,B(b,4))?3:X(a,B(b,6))?5:X(a,B(b,8))?6:X(a,B(b,7))?7:X(a,B(b,21))?8:X(a,B(b,25))?9:X(a,B(b,28))?10:X(a,B(b,2))?B(b,18)||X(a,B(b,3))?2:0:!B(b,18)&&X(a,B(b,3))?1:-1:-1}function V(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(!c){c=xa[b];if(!c)return null;c=(new ra).c(N.f(),c);a.a[b]=c}return c}function X(a,b){var c=a.length;return 0<G(b,9)&&-1==x(D(b,9),c)?!1:S(F(b,2),a)}
function Ua(a,b){if(!b)return null;var c=F(b,1);if(c=P[c])if(1==c.length)c=c[0];else a:{for(var d=T(b),e,f=c.length,g=0;g<f;g++){e=c[g];var h=V(a,e);if(null!=h.a[23]){if(!d.search(B(h,23))){c=e;break a}}else if(-1!=Ta(d,h)){c=e;break a}}c=null}else c=null;return c}function Sa(a){return(a=P[a])?a[0]:"ZZ"}
function Y(a,b,c,d){var e=W(c,d),f=G(e,9)?D(e,9):D(B(c,1),9),e=D(e,10);if(2==d)if(Oa(W(c,0)))a=W(c,1),Oa(a)&&(f=f.concat(G(a,9)?D(a,9):D(B(c,1),9)),y(f),e.length?(e=e.concat(D(a,10)),y(e)):e=D(a,10));else return Y(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<x(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<x(f,b,1)?0:5}
function Va(a,b,c,d,e,f){if(!b.length)return 0;b=new K(b);var g;c&&(g=B(c,11));null==g&&(g="NonMatch");var h=b.toString();if(h.length)if(R.test(h))h=h.replace(R,""),b.c="",b.a(La(h)),g=1;else{h=new RegExp(g);Na(b);g=b.toString();if(g.search(h))g=!1;else{var h=g.match(h)[0].length,k=g.substring(h).match(Ba);k&&null!=k[1]&&0<k[1].length&&"0"==Ma(k[1],ya)?g=!1:(b.c="",b.a(g.substring(h)),g=!0)}g=g?5:20}else g=20;e&&C(f,6,g);if(20!=g){if(2>=b.c.length)throw Error("Phone number too short after IDD");a:{a=
b.toString();if(a.length&&"0"!=a.charAt(0))for(e=a.length,b=1;3>=b&&b<=e;++b)if(c=parseInt(a.substring(0,b),10),c in P){d.a(a.substring(b));d=c;break a}d=0}if(d)return C(f,1,d),d;throw Error("Invalid country calling code");}if(c&&(g=F(c,10),h=""+g,k=b.toString(),!k.lastIndexOf(h,0)&&(h=new K(k.substring(h.length)),k=B(c,1),k=new RegExp(F(k,2)),Wa(h,c,null),h=h.toString(),!S(k,b.toString())&&S(k,h)||3==Y(a,b.toString(),c,-1))))return d.a(h),e&&C(f,6,10),C(f,1,g),g;C(f,1,0);return 0}
function Wa(a,b,c){var d=a.toString(),e=d.length,f=B(b,15);if(e&&null!=f&&f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){var f=new RegExp(F(B(b,1),2)),h=S(f,d),k=e.length-1;b=B(b,16);if(null!=b&&b.length&&null!=e[k]&&e[k].length){if(d=d.replace(g,b),!h||S(f,d))c&&0<k&&c.a(e[1]),a.set(d)}else if(!h||S(f,d.substring(e[0].length)))c&&0<k&&null!=e[k]&&c.a(e[1]),a.set(d.substring(e[0].length))}}}
function Z(a,b,c){if(!Pa(c)&&0<b.length&&"+"!=b.charAt(0))throw Error("Invalid country calling code");return Xa(a,b,c,!0)}
function Xa(a,b,c,d){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var e=new K,f=b.indexOf(";phone-context=");if(0<=f){var g=f+15;if("+"==b.charAt(g)){var h=b.indexOf(";",g);0<h?e.a(b.substring(g,h)):e.a(b.substring(g))}g=b.indexOf("tel:");e.a(b.substring(0<=g?g+4:0,f))}else e.a(Ja(b));f=e.toString();g=f.indexOf(";isub=");0<g&&(e.c="",e.a(f.substring(0,g)));if(!Ka(e.toString()))throw Error("The string supplied did not seem to be a phone number");
f=e.toString();if(!(Pa(c)||null!=f&&0<f.length&&R.test(f)))throw Error("Invalid country calling code");f=new O;d&&C(f,5,b);a:{b=e.toString();g=b.search(Ga);if(0<=g&&Ka(b.substring(0,g)))for(var h=b.match(Ga),k=h.length,q=1;q<k;++q)if(null!=h[q]&&0<h[q].length){e.c="";e.a(b.substring(0,g));b=h[q];break a}b=""}0<b.length&&C(f,3,b);b=V(a,c);g=new K;h=0;k=e.toString();try{h=Va(a,k,b,g,d,f)}catch(z){if("Invalid country calling code"==z.message&&R.test(k)){if(k=k.replace(R,""),h=Va(a,k,b,g,d,f),!h)throw z;
}else throw z;}h?(e=Sa(h),e!=c&&(b=U(a,h,e))):(Na(e),g.a(e.toString()),null!=c?(h=F(b,10),C(f,1,h)):d&&(delete f.a[6],f.c&&delete f.c[6]));if(2>g.c.length)throw Error("The string supplied is too short to be a phone number");b&&(c=new K,e=new K(g.toString()),Wa(e,b,c),2!=Y(a,e.toString(),b,-1)&&(g=e,d&&0<c.toString().length&&C(f,7,c.toString())));a=g.toString();d=a.length;if(2>d)throw Error("The string supplied is too short to be a phone number");if(17<d)throw Error("The string supplied is too long to be a phone number");
if(1<a.length&&"0"==a.charAt(0)){C(f,4,!0);for(d=1;d<a.length-1&&"0"==a.charAt(d);)d++;1!=d&&C(f,8,d)}C(f,2,parseInt(a,10));return f}function S(a,b){var c="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a);return c&&c[0].length==b.length?!0:!1};v("intlTelInputUtils",{});v("intlTelInputUtils.formatNumber",function(a,b,c){try{var d=Q.a(),e=Z(d,a,b);return Qa(d,e,"undefined"==typeof c?0:c)}catch(f){return a}});v("intlTelInputUtils.getExampleNumber",function(a,b,c){try{var d=Q.a(),e;a:{if(Pa(a)){var f=W(V(d,a),c);try{if(null!=f.a[6]){var g=B(f,6);e=Xa(d,g,a,!1);break a}}catch(h){}}e=null}return Qa(d,e,b?2:1)}catch(h){return""}});v("intlTelInputUtils.getExtension",function(a,b){try{return B(Z(Q.a(),a,b),3)}catch(c){return""}});
v("intlTelInputUtils.getNumberType",function(a,b){try{var c=Q.a(),d;var e=Z(c,a,b),f=Ua(c,e),g=U(c,F(e,1),f);if(g){var h=T(e);d=Ta(h,g)}else d=-1;return d}catch(k){return-99}});
v("intlTelInputUtils.getValidationError",function(a,b){try{var c=Q.a(),d;var e=Z(c,a,b),f=T(e),g=F(e,1);if(g in P){var h=U(c,g,Sa(g));d=Y(c,f,h,-1)}else d=1;return d}catch(k){return"Invalid country calling code"==k.message?1:"The string supplied did not seem to be a phone number"==k.message?4:"Phone number too short after IDD"==k.message||"The string supplied is too short to be a phone number"==k?2:"The string supplied is too long to be a phone number"==k.message?3:-99}});
v("intlTelInputUtils.isValidNumber",function(a,b){try{var c=Q.a(),d=Z(c,a,b),e;var f=Ua(c,d),g=F(d,1),h=U(c,g,f),k;if(!(k=!h)){var q;if(q="001"!=f){var z,za=V(c,f);if(!za)throw Error("Invalid region code: "+f);z=F(za,10);q=g!=z}k=q}if(k)e=!1;else{var Ya=T(d);e=-1!=Ta(Ya,h)}return e}catch(Za){return!1}});v("intlTelInputUtils.numberFormat",{E164:0,INTERNATIONAL:1,NATIONAL:2,RFC3966:3});
v("intlTelInputUtils.numberType",{FIXED_LINE:0,MOBILE:1,FIXED_LINE_OR_MOBILE:2,TOLL_FREE:3,PREMIUM_RATE:4,SHARED_COST:5,VOIP:6,PERSONAL_NUMBER:7,PAGER:8,UAN:9,VOICEMAIL:10,UNKNOWN:-1});v("intlTelInputUtils.validationError",{IS_POSSIBLE:0,INVALID_COUNTRY_CODE:1,TOO_SHORT:2,TOO_LONG:3,NOT_A_NUMBER:4});})();


!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b,window,document)}):"object"==typeof module&&module.exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c,d){"use strict";function e(b,c){this.a=a(b),this.b=a.extend({},h,c),this.ns="."+f+g++,this.d=Boolean(b.setSelectionRange),this.e=Boolean(a(b).attr("placeholder"))}var f="intlTelInput",g=1,h={allowDropdown:!0,autoHideDialCode:!0,autoPlaceholder:"polite",customPlaceholder:null,dropdownContainer:"",excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,initialCountry:"",nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,utilsScript:""},i={b:38,c:40,d:13,e:27,f:43,A:65,Z:90,j:32,k:9},j=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];a(b).on("load",function(){a.fn[f].windowLoaded=!0}),e.prototype={_a:function(){return this.b.nationalMode&&(this.b.autoHideDialCode=!1),this.b.separateDialCode&&(this.b.autoHideDialCode=this.b.nationalMode=!1),this.g=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.g&&(a("body").addClass("iti-mobile"),this.b.dropdownContainer||(this.b.dropdownContainer="body")),this.h=new a.Deferred,this.i=new a.Deferred,this.s={},this._b(),this._f(),this._h(),this._i(),this._i2(),[this.h,this.i]},_b:function(){this._d(),this._d2(),this._e()},_c:function(a,b,c){b in this.q||(this.q[b]=[]);var d=c||0;this.q[b][d]=a},_d:function(){if(this.b.onlyCountries.length){var a=this.b.onlyCountries.map(function(a){return a.toLowerCase()});this.p=k.filter(function(b){return a.indexOf(b.iso2)>-1})}else if(this.b.excludeCountries.length){var b=this.b.excludeCountries.map(function(a){return a.toLowerCase()});this.p=k.filter(function(a){return b.indexOf(a.iso2)===-1})}else this.p=k},_d2:function(){this.q={};for(var a=0;a<this.p.length;a++){var b=this.p[a];if(this._c(b.iso2,b.dialCode,b.priority),b.areaCodes)for(var c=0;c<b.areaCodes.length;c++)this._c(b.iso2,b.dialCode+b.areaCodes[c])}},_e:function(){this.preferredCountries=[];for(var a=0;a<this.b.preferredCountries.length;a++){var b=this.b.preferredCountries[a].toLowerCase(),c=this._y(b,!1,!0);c&&this.preferredCountries.push(c)}},_f:function(){this.a.attr("autocomplete","off");var b="intl-tel-input";this.b.allowDropdown&&(b+=" allow-dropdown"),this.b.separateDialCode&&(b+=" separate-dial-code"),this.a.wrap(a("<div>",{"class":b})),this.k=a("<div>",{"class":"flag-container"}).insertBefore(this.a);var c=a("<div>",{"class":"selected-flag"});c.appendTo(this.k),this.l=a("<div>",{"class":"iti-flag"}).appendTo(c),this.b.separateDialCode&&(this.t=a("<div>",{"class":"selected-dial-code"}).appendTo(c)),this.b.allowDropdown?(c.attr("tabindex","0"),a("<div>",{"class":"iti-arrow"}).appendTo(c),this.m=a("<ul>",{"class":"country-list hide"}),this.preferredCountries.length&&(this._g(this.preferredCountries,"preferred"),a("<li>",{"class":"divider"}).appendTo(this.m)),this._g(this.p,""),this.o=this.m.children(".country"),this.b.dropdownContainer?this.dropdown=a("<div>",{"class":"intl-tel-input iti-container"}).append(this.m):this.m.appendTo(this.k)):this.o=a()},_g:function(a,b){for(var c="",d=0;d<a.length;d++){var e=a[d];c+="<li class='country "+b+"' data-dial-code='"+e.dialCode+"' data-country-code='"+e.iso2+"'>",c+="<div class='flag-box'><div class='iti-flag "+e.iso2+"'></div></div>",c+="<span class='country-name'>"+e.name+"</span>",c+="<span class='dial-code'>+"+e.dialCode+"</span>",c+="</li>"}this.m.append(c)},_h:function(){var a=this.a.val();this._af(a)&&!this._isRegionlessNanp(a)?this._v(a):"auto"!==this.b.initialCountry&&(this.b.initialCountry?this._z(this.b.initialCountry.toLowerCase()):(this.j=this.preferredCountries.length?this.preferredCountries[0].iso2:this.p[0].iso2,a||this._z(this.j)),a||this.b.nationalMode||this.b.autoHideDialCode||this.b.separateDialCode||this.a.val("+"+this.s.dialCode)),a&&this._u(a)},_i:function(){this._j(),this.b.autoHideDialCode&&this._l(),this.b.allowDropdown&&this._i1()},_i1:function(){var a=this,b=this.a.closest("label");b.length&&b.on("click"+this.ns,function(b){a.m.hasClass("hide")?a.a.focus():b.preventDefault()}),this.l.parent().on("click"+this.ns,function(b){!a.m.hasClass("hide")||a.a.prop("disabled")||a.a.prop("readonly")||a._n()}),this.k.on("keydown"+a.ns,function(b){!a.m.hasClass("hide")||b.which!=i.b&&b.which!=i.c&&b.which!=i.j&&b.which!=i.d||(b.preventDefault(),b.stopPropagation(),a._n()),b.which==i.k&&a._ac()})},_i2:function(){var c=this;this.b.utilsScript?a.fn[f].windowLoaded?a.fn[f].loadUtils(this.b.utilsScript,this.i):a(b).on("load",function(){a.fn[f].loadUtils(c.b.utilsScript,c.i)}):this.i.resolve(),"auto"===this.b.initialCountry?this._i3():this.h.resolve()},_i3:function(){a.fn[f].autoCountry?this.handleAutoCountry():a.fn[f].startedLoadingAutoCountry||(a.fn[f].startedLoadingAutoCountry=!0,"function"==typeof this.b.geoIpLookup&&this.b.geoIpLookup(function(b){a.fn[f].autoCountry=b.toLowerCase(),setTimeout(function(){a(".intl-tel-input input").intlTelInput("handleAutoCountry")})}))},_j:function(){var a=this;this.a.on("keyup"+this.ns,function(){a._v(a.a.val())&&a._triggerCountryChange()}),this.a.on("cut"+this.ns+" paste"+this.ns,function(){setTimeout(function(){a._v(a.a.val())&&a._triggerCountryChange()})})},_j2:function(a){var b=this.a.attr("maxlength");return b&&a.length>b?a.substr(0,b):a},_l:function(){var b=this;this.a.on("mousedown"+this.ns,function(a){b.a.is(":focus")||b.a.val()||(a.preventDefault(),b.a.focus())}),this.a.on("focus"+this.ns,function(a){b.a.val()||b.a.prop("readonly")||!b.s.dialCode||(b.a.val("+"+b.s.dialCode),b.a.one("keypress.plus"+b.ns,function(a){a.which==i.f&&b.a.val("")}),setTimeout(function(){var a=b.a[0];if(b.d){var c=b.a.val().length;a.setSelectionRange(c,c)}}))});var c=this.a.prop("form");c&&a(c).on("submit"+this.ns,function(){b._removeEmptyDialCode()}),this.a.on("blur"+this.ns,function(){b._removeEmptyDialCode()})},_removeEmptyDialCode:function(){var a=this.a.val();if("+"==a.charAt(0)){var b=this._m(a);b&&this.s.dialCode!=b||this.a.val("")}this.a.off("keypress.plus"+this.ns)},_m:function(a){return a.replace(/\D/g,"")},_n:function(){this._o();var a=this.m.children(".active");a.length&&(this._x(a),this._ad(a)),this._p(),this.l.children(".iti-arrow").addClass("up")},_o:function(){var c=this;if(this.b.dropdownContainer&&this.dropdown.appendTo(this.b.dropdownContainer),this.n=this.m.removeClass("hide").outerHeight(),!this.g){var d=this.a.offset(),e=d.top,f=a(b).scrollTop(),g=e+this.a.outerHeight()+this.n<f+a(b).height(),h=e-this.n>f;if(this.m.toggleClass("dropup",!g&&h),this.b.dropdownContainer){var i=!g&&h?0:this.a.innerHeight();this.dropdown.css({top:e+i,left:d.left}),a(b).on("scroll"+this.ns,function(){c._ac()})}}},_p:function(){var b=this;this.m.on("mouseover"+this.ns,".country",function(c){b._x(a(this))}),this.m.on("click"+this.ns,".country",function(c){b._ab(a(this))});var d=!0;a("html").on("click"+this.ns,function(a){d||b._ac(),d=!1});var e="",f=null;a(c).on("keydown"+this.ns,function(a){a.preventDefault(),a.which==i.b||a.which==i.c?b._q(a.which):a.which==i.d?b._r():a.which==i.e?b._ac():(a.which>=i.A&&a.which<=i.Z||a.which==i.j)&&(f&&clearTimeout(f),e+=String.fromCharCode(a.which),b._s(e),f=setTimeout(function(){e=""},1e3))})},_q:function(a){var b=this.m.children(".highlight").first(),c=a==i.b?b.prev():b.next();c.length&&(c.hasClass("divider")&&(c=a==i.b?c.prev():c.next()),this._x(c),this._ad(c))},_r:function(){var a=this.m.children(".highlight").first();a.length&&this._ab(a)},_s:function(a){for(var b=0;b<this.p.length;b++)if(this._t(this.p[b].name,a)){var c=this.m.children("[data-country-code="+this.p[b].iso2+"]").not(".preferred");this._x(c),this._ad(c,!0);break}},_t:function(a,b){return a.substr(0,b.length).toUpperCase()==b},_u:function(a){if(this.b.formatOnDisplay&&b.intlTelInputUtils&&this.s){var c=this.b.separateDialCode||!this.b.nationalMode&&"+"==a.charAt(0)?intlTelInputUtils.numberFormat.INTERNATIONAL:intlTelInputUtils.numberFormat.NATIONAL;a=intlTelInputUtils.formatNumber(a,this.s.iso2,c)}a=this._ah(a),this.a.val(a)},_v:function(b){b&&this.b.nationalMode&&"1"==this.s.dialCode&&"+"!=b.charAt(0)&&("1"!=b.charAt(0)&&(b="1"+b),b="+"+b);var c=this._af(b),d=null,e=this._m(b);if(c){var f=this.q[this._m(c)],g=a.inArray(this.s.iso2,f)>-1,h="+1"==c&&e.length>=4;if((!("1"==this.s.dialCode)||!this._isRegionlessNanp(e))&&(!g||h))for(var i=0;i<f.length;i++)if(f[i]){d=f[i];break}}else"+"==b.charAt(0)&&e.length?d="":b&&"+"!=b||(d=this.j);return null!==d&&this._z(d)},_isRegionlessNanp:function(b){var c=this._m(b);if("1"==c.charAt(0)){var d=c.substr(1,3);return a.inArray(d,j)>-1}return!1},_x:function(a){this.o.removeClass("highlight"),a.addClass("highlight")},_y:function(a,b,c){for(var d=b?k:this.p,e=0;e<d.length;e++)if(d[e].iso2==a)return d[e];if(c)return null;throw new Error("No country data for '"+a+"'")},_z:function(a){var b=this.s.iso2?this.s:{};this.s=a?this._y(a,!1,!1):{},this.s.iso2&&(this.j=this.s.iso2),this.l.attr("class","iti-flag "+a);var c=a?this.s.name+": +"+this.s.dialCode:"Unknown";if(this.l.parent().attr("title",c),this.b.separateDialCode){var d=this.s.dialCode?"+"+this.s.dialCode:"",e=this.a.parent();b.dialCode&&e.removeClass("iti-sdc-"+(b.dialCode.length+1)),d&&e.addClass("iti-sdc-"+d.length),this.t.text(d)}return this._aa(),this.o.removeClass("active"),a&&this.o.find(".iti-flag."+a).first().closest(".country").addClass("active"),b.iso2!==a},_aa:function(){var a="aggressive"===this.b.autoPlaceholder||!this.e&&(this.b.autoPlaceholder===!0||"polite"===this.b.autoPlaceholder);if(b.intlTelInputUtils&&a){var c=intlTelInputUtils.numberType[this.b.placeholderNumberType],d=this.s.iso2?intlTelInputUtils.getExampleNumber(this.s.iso2,this.b.nationalMode,c):"";d=this._ah(d),"function"==typeof this.b.customPlaceholder&&(d=this.b.customPlaceholder(d,this.s)),this.a.attr("placeholder",d)}},_ab:function(a){var b=this._z(a.attr("data-country-code"));if(this._ac(),this._ae(a.attr("data-dial-code"),!0),this.a.focus(),this.d){var c=this.a.val().length;this.a[0].setSelectionRange(c,c)}b&&this._triggerCountryChange()},_ac:function(){this.m.addClass("hide"),this.l.children(".iti-arrow").removeClass("up"),a(c).off(this.ns),a("html").off(this.ns),this.m.off(this.ns),this.b.dropdownContainer&&(this.g||a(b).off("scroll"+this.ns),this.dropdown.detach())},_ad:function(a,b){var c=this.m,d=c.height(),e=c.offset().top,f=e+d,g=a.outerHeight(),h=a.offset().top,i=h+g,j=h-e+c.scrollTop(),k=d/2-g/2;if(h<e)b&&(j-=k),c.scrollTop(j);else if(i>f){b&&(j+=k);var l=d-g;c.scrollTop(j-l)}},_ae:function(a,b){var c,d=this.a.val();if(a="+"+a,"+"==d.charAt(0)){var e=this._af(d);c=e?d.replace(e,a):a}else{if(this.b.nationalMode||this.b.separateDialCode)return;if(d)c=a+d;else{if(!b&&this.b.autoHideDialCode)return;c=a}}this.a.val(c)},_af:function(b){var c="";if("+"==b.charAt(0))for(var d="",e=0;e<b.length;e++){var f=b.charAt(e);if(a.isNumeric(f)&&(d+=f,this.q[d]&&(c=b.substr(0,e+1)),4==d.length))break}return c},_ag:function(){var b,c=a.trim(this.a.val()),d=this.s.dialCode,e=this._m(c),f="1"==e.charAt(0)?e:"1"+e;return b=this.b.separateDialCode?"+"+d:"+"!=c.charAt(0)&&"1"!=c.charAt(0)&&d&&"1"==d.charAt(0)&&4==d.length&&d!=f.substr(0,4)?d.substr(1):"",b+c},_ah:function(a){if(this.b.separateDialCode){var b=this._af(a);if(b){null!==this.s.areaCodes&&(b="+"+this.s.dialCode);var c=" "===a[b.length]||"-"===a[b.length]?b.length+1:b.length;a=a.substr(c)}}return this._j2(a)},_triggerCountryChange:function(){this.a.trigger("countrychange",this.s)},handleAutoCountry:function(){"auto"===this.b.initialCountry&&(this.j=a.fn[f].autoCountry,this.a.val()||this.setCountry(this.j),this.h.resolve())},handleUtils:function(){b.intlTelInputUtils&&(this.a.val()&&this._u(this.a.val()),this._aa()),this.i.resolve()},destroy:function(){if(this.allowDropdown&&(this._ac(),this.l.parent().off(this.ns),this.a.closest("label").off(this.ns)),this.b.autoHideDialCode){var b=this.a.prop("form");b&&a(b).off(this.ns)}this.a.off(this.ns),this.a.parent().before(this.a).remove()},getExtension:function(){return b.intlTelInputUtils?intlTelInputUtils.getExtension(this._ag(),this.s.iso2):""},getNumber:function(a){return b.intlTelInputUtils?intlTelInputUtils.formatNumber(this._ag(),this.s.iso2,a):""},getNumberType:function(){return b.intlTelInputUtils?intlTelInputUtils.getNumberType(this._ag(),this.s.iso2):-99},getSelectedCountryData:function(){return this.s},getValidationError:function(){return b.intlTelInputUtils?intlTelInputUtils.getValidationError(this._ag(),this.s.iso2):-99},isValidNumber:function(){var c=a.trim(this._ag()),d=this.b.nationalMode?this.s.iso2:"";return b.intlTelInputUtils?intlTelInputUtils.isValidNumber(c,d):null},setCountry:function(a){a=a.toLowerCase(),this.l.hasClass(a)||(this._z(a),this._ae(this.s.dialCode,!1),this._triggerCountryChange())},setNumber:function(a){var b=this._v(a);this._u(a),b&&this._triggerCountryChange()}},a.fn[f]=function(b){var c=arguments;if(b===d||"object"==typeof b){var g=[];return this.each(function(){if(!a.data(this,"plugin_"+f)){var c=new e(this,b),d=c._a();g.push(d[0]),g.push(d[1]),a.data(this,"plugin_"+f,c)}}),a.when.apply(null,g)}if("string"==typeof b&&"_"!==b[0]){var h;return this.each(function(){var d=a.data(this,"plugin_"+f);d instanceof e&&"function"==typeof d[b]&&(h=d[b].apply(d,Array.prototype.slice.call(c,1))),"destroy"===b&&a.data(this,"plugin_"+f,null)}),h!==d?h:this}},a.fn[f].getCountryData=function(){return k},a.fn[f].loadUtils=function(b,c){a.fn[f].loadedUtilsScript?c&&c.resolve():(a.fn[f].loadedUtilsScript=!0,a.ajax({type:"GET",url:b,complete:function(){a(".intl-tel-input input").intlTelInput("handleUtils")},dataType:"script",cache:!0}))},a.fn[f].defaults=h,a.fn[f].version="11.0.12";for(var k=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy (Saint-Barthélemy)","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],l=0;l<k.length;l++){var m=k[l];k[l]={name:m[0],iso2:m[1],dialCode:m[2],priority:m[3]||0,areaCodes:m[4]||null}}});

function hideInventoryModal(){

   if($(".inv-iframe-holder .inv-iframe-module").length > 0){
   if(  $(".inv-iframe-holder .inv-iframe-module").css('display') == "none"){
     $(".inv-iframe-holder-in").css('display','none');
      $(".inv-iframe-holder .inv-iframe-module").css('display','block');
       document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
       GetCardNSuch();
   } else {
        $(".inv-iframe-holder-in").css('display','block');
        $(".inv-iframe-holder .inv-iframe-module").remove();
        $inventoryStandard.hideModal();
   }
      
    } else {
    	$inventoryStandard.hideModal();
    }
 
  

}


/*
##############################################
#				Orkiv inventory	             #
#											 #
##############################################
*/
var stripeMod = "";
if(!$.fn.jsSocials){
!function(a,b,c){function d(a,c){var d=b(a);d.data(f,this),this._$element=d,this.shares=[],this._init(c),this._render()}var e="JSSocials",f=e,g=function(a,c){return b.isFunction(a)?a.apply(c,b.makeArray(arguments).slice(2)):a},h=/(\.(jpeg|png|gif|bmp|svg\+xml)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,i=/(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,j={G:1e9,M:1e6,K:1e3},k={};d.prototype={url:"",text:"",shareIn:"blank",showLabel:function(a){return this.showCount===!1?a>this.smallScreenWidth:a>=this.largeScreenWidth},showCount:function(a){return a<=this.smallScreenWidth?"inside":!0},smallScreenWidth:640,largeScreenWidth:1024,resizeTimeout:200,elementClass:"jssocials",sharesClass:"jssocials-shares",shareClass:"jssocials-share",shareButtonClass:"jssocials-share-button",shareLinkClass:"jssocials-share-link",shareLogoClass:"jssocials-share-logo",shareLabelClass:"jssocials-share-label",shareLinkCountClass:"jssocials-share-link-count",shareCountBoxClass:"jssocials-share-count-box",shareCountClass:"jssocials-share-count",shareZeroCountClass:"jssocials-share-no-count",_init:function(a){this._initDefaults(),b.extend(this,a),this._initShares(),this._attachWindowResizeCallback()},_initDefaults:function(){this.url=a.location.href,this.text=b.trim(b("meta[name=description]").attr("content")||b("title").text())},_initShares:function(){this.shares=b.map(this.shares,b.proxy(function(a){"string"==typeof a&&(a={share:a});var c=a.share&&k[a.share];if(!c&&!a.renderer)throw Error("Share '"+a.share+"' is not found");return b.extend({url:this.url,text:this.text},c,a)},this))},_attachWindowResizeCallback:function(){b(a).on("resize",b.proxy(this._windowResizeHandler,this))},_detachWindowResizeCallback:function(){b(a).off("resize",this._windowResizeHandler)},_windowResizeHandler:function(){(b.isFunction(this.showLabel)||b.isFunction(this.showCount))&&(a.clearTimeout(this._resizeTimer),this._resizeTimer=setTimeout(b.proxy(this.refresh,this),this.resizeTimeout))},_render:function(){this._clear(),this._defineOptionsByScreen(),this._$element.addClass(this.elementClass),this._$shares=b("<div>").addClass(this.sharesClass).appendTo(this._$element),this._renderShares()},_defineOptionsByScreen:function(){this._screenWidth=b(a).width(),this._showLabel=g(this.showLabel,this,this._screenWidth),this._showCount=g(this.showCount,this,this._screenWidth)},_renderShares:function(){b.each(this.shares,b.proxy(function(a,b){this._renderShare(b)},this))},_renderShare:function(a){var c;c=b.isFunction(a.renderer)?b(a.renderer()):this._createShare(a),c.addClass(this.shareClass).addClass(a.share?"jssocials-share-"+a.share:"").addClass(a.css).appendTo(this._$shares)},_createShare:function(a){var c=b("<div>"),d=this._createShareLink(a).appendTo(c);if(this._showCount){var e="inside"===this._showCount,f=e?d:b("<div>").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e?this.shareLinkCountClass:this.shareCountBoxClass),this._renderShareCount(a,f)}return c},_createShareLink:function(a){var c=this._getShareStrategy(a),d=c.call(a,{shareUrl:this._getShareUrl(a)});return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),this._showLabel&&d.append(this._createShareLabel(a)),b.each(this.on||{},function(c,e){b.isFunction(e)&&d.on(c,b.proxy(e,a))}),d},_getShareStrategy:function(a){var b=m[a.shareIn||this.shareIn];if(!b)throw Error("Share strategy '"+this.shareIn+"' not found");return b},_getShareUrl:function(a){var b=g(a.shareUrl,a);return this._formatShareUrl(b,a)},_createShareLogo:function(a){var c=a.logo,d=h.test(c)?b("<img>").attr("src",a.logo):b("<i>").addClass(c);return d.addClass(this.shareLogoClass),d},_createShareLabel:function(a){return b("<span>").addClass(this.shareLabelClass).text(a.label)},_renderShareCount:function(a,c){var d=b("<span>").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d),this._loadCount(a).done(b.proxy(function(a){a&&(c.removeClass(this.shareZeroCountClass),d.text(a))},this))},_loadCount:function(a){var c=b.Deferred(),d=this._getCountUrl(a);if(!d)return c.resolve(0).promise();var e=b.proxy(function(b){c.resolve(this._getCountValue(b,a))},this);return b.getJSON(d).done(e).fail(function(){b.get(d).done(e).fail(function(){c.resolve(0)})}),c.promise()},_getCountUrl:function(a){var b=g(a.countUrl,a);return this._formatShareUrl(b,a)},_getCountValue:function(a,c){var d=(b.isFunction(c.getCount)?c.getCount(a):a)||0;return"string"==typeof d?d:this._formatNumber(d)},_formatNumber:function(a){return b.each(j,function(b,c){return a>=c?(a=parseFloat((a/c).toFixed(2))+b,!1):void 0}),a},_formatShareUrl:function(b,c){return b.replace(i,function(b,d,e){var f=c[e]||"";return f?(d||"")+a.encodeURIComponent(f):""})},_clear:function(){a.clearTimeout(this._resizeTimer),this._$element.empty()},_passOptionToShares:function(a,c){var d=this.shares;b.each(["url","text"],function(e,f){f===a&&b.each(d,function(b,d){d[a]=c})})},_normalizeShare:function(a){return b.isNumeric(a)?this.shares[a]:"string"==typeof a?b.grep(this.shares,function(b){return b.share===a})[0]:a},refresh:function(){this._render()},destroy:function(){this._clear(),this._detachWindowResizeCallback(),this._$element.removeClass(this.elementClass).removeData(f)},option:function(a,b){return 1===arguments.length?this[a]:(this[a]=b,this._passOptionToShares(a,b),void this.refresh())},shareOption:function(a,b,c){return a=this._normalizeShare(a),2===arguments.length?a[b]:(a[b]=c,void this.refresh())}},b.fn.jsSocials=function(a){var e=b.makeArray(arguments),g=e.slice(1),h=this;return this.each(function(){var e,i=b(this),j=i.data(f);if(j)if("string"==typeof a){if(e=j[a].apply(j,g),e!==c&&e!==j)return h=e,!1}else j._detachWindowResizeCallback(),j._init(a),j._render();else new d(i,a)}),h};var l=function(a){var c;b.isPlainObject(a)?c=d.prototype:(c=k[a],a=arguments[1]||{}),b.extend(c,a)},m={popup:function(c){return b("<a>").attr("href","#").on("click",function(){return a.open(c.shareUrl,null,"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"),!1})},blank:function(a){return b("<a>").attr({target:"_blank",href:a.shareUrl})},self:function(a){return b("<a>").attr({target:"_self",href:a.shareUrl})}};a.jsSocials={Socials:d,shares:k,shareStrategies:m,setDefaults:l}}(window,jQuery),function(a,b,c){b.extend(c.shares,{email:{label:"E-mail",logo:"fa fa-at",shareUrl:"mailto:{to}?subject={text}&body={url}",countUrl:"",shareIn:"self"},twitter:{label:"Tweet",logo:"fa fa-twitter",shareUrl:"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",countUrl:""},facebook:{label:"Like",logo:"fa fa-facebook",shareUrl:"https://facebook.com/sharer/sharer.php?u={url}",countUrl:"http://graph.facebook.com/?id={url}",getCount:function(a){return a.share&&a.share.share_count||0}},googleplus:{label:"+1",logo:"fa fa-google",shareUrl:"https://plus.google.com/share?url={url}",countUrl:"https://cors-anywhere.herokuapp.com/https://plusone.google.com/_/+1/fastbutton?url={url}",getCount:function(a){return parseFloat((a.match(/\{c: ([.0-9E]+)/)||[])[1])}},linkedin:{label:"Share",logo:"fa fa-linkedin",shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}",countUrl:"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",getCount:function(a){return a.count}},pinterest:{label:"Pin it",logo:"fa fa-pinterest",shareUrl:"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",countUrl:"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",getCount:function(a){return a.count}},stumbleupon:{label:"Share",logo:"fa fa-stumbleupon",shareUrl:"http://www.stumbleupon.com/submit?url={url}&title={title}",countUrl:"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",getCount:function(a){return a.result.views}},telegram:{label:"Telegram",logo:"fa fa-paper-plane",shareUrl:"tg://msg?text={url} {text}",countUrl:"",shareIn:"self"},whatsapp:{label:"WhatsApp",logo:"fa fa-whatsapp",shareUrl:"whatsapp://send?text={url} {text}",countUrl:"",shareIn:"self"},line:{label:"LINE",logo:"fa fa-comment",shareUrl:"http://line.me/R/msg/text/?{text} {url}",countUrl:""}})}(window,jQuery,window.jsSocials);
$('head').append(' <link rel="stylesheet" type="text/css" href="https://orkiv.com/sapphire/jssocials/jssocials.css" />');
$('head').append(' <link rel="stylesheet" type="text/css" href="https://orkiv.com/sapphire/jssocials/jssocials-theme-flat.css" />');
}



$('head').append('<link rel="stylesheet"  type="text/css" href="https://www.orkiv.com/sapphire/inventory.php?mode=css"/>');


if(!$.fn.mask){
    (function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
}

if(!$.fn.unslider) { 

    
    $('head').append('<link rel="stylesheet" href="https://www.orkiv.com/sapphire/dist-unslider/css/unslider.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="https://www.orkiv.com/sapphire/dist-unslider/css/unslider-dots.css" type="text/css" />');
    !function($){return $?($.Unslider=function(t,n){var e=this;return e._="unslider",e.defaults={autoplay:!1,delay:3e3,speed:750,easing:"swing",keys:{prev:37,next:39},nav:!0,arrows:{prev:'<a class="'+e._+'-arrow prev">Prev</a>',next:'<a class="'+e._+'-arrow next">Next</a>'},animation:"horizontal",selectors:{container:"ul:first",slides:"li"},animateHeight:!1,activeClass:e._+"-active",swipe:!0,swipeThreshold:.2},e.$context=t,e.options={},e.$parent=null,e.$container=null,e.$slides=null,e.$nav=null,e.$arrows=[],e.total=0,e.current=0,e.prefix=e._+"-",e.eventSuffix="."+e.prefix+~~(2e3*Math.random()),e.interval=null,e.init=function(t){return e.options=$.extend({},e.defaults,t),e.$container=e.$context.find(e.options.selectors.container).addClass(e.prefix+"wrap"),e.$slides=e.$container.children(e.options.selectors.slides),e.setup(),$.each(["nav","arrows","keys","infinite"],function(t,n){e.options[n]&&e["init"+$._ucfirst(n)]()}),jQuery.event.special.swipe&&e.options.swipe&&e.initSwipe(),e.options.autoplay&&e.start(),e.calculateSlides(),e.$context.trigger(e._+".ready"),e.animate(e.options.index||e.current,"init")},e.setup=function(){e.$context.addClass(e.prefix+e.options.animation).wrap('<div class="'+e._+'" />'),e.$parent=e.$context.parent("."+e._);var t=e.$context.css("position");"static"===t&&e.$context.css("position","relative"),e.$context.css("overflow","hidden")},e.calculateSlides=function(){if(e.total=e.$slides.length,"fade"!==e.options.animation){var t="width";"vertical"===e.options.animation&&(t="height"),e.$container.css(t,100*e.total+"%").addClass(e.prefix+"carousel"),e.$slides.css(t,100/e.total+"%")}},e.start=function(){return e.interval=setTimeout(function(){e.next()},e.options.delay),e},e.stop=function(){return clearTimeout(e.interval),e},e.initNav=function(){var t=$('<nav class="'+e.prefix+'nav"><ol /></nav>');e.$slides.each(function(n){var i=this.getAttribute("data-nav")||n+1;$.isFunction(e.options.nav)&&(i=e.options.nav.call(e.$slides.eq(n),n,i)),t.children("ol").append('<li data-slide="'+n+'">'+i+"</li>")}),e.$nav=t.insertAfter(e.$context),e.$nav.find("li").on("click"+e.eventSuffix,function(){var t=$(this).addClass(e.options.activeClass);t.siblings().removeClass(e.options.activeClass),e.animate(t.attr("data-slide"))})},e.initArrows=function(){e.options.arrows===!0&&(e.options.arrows=e.defaults.arrows),$.each(e.options.arrows,function(t,n){e.$arrows.push($(n).insertAfter(e.$context).on("click"+e.eventSuffix,e[t]))})},e.initKeys=function(){e.options.keys===!0&&(e.options.keys=e.defaults.keys),$(document).on("keyup"+e.eventSuffix,function(t){$.each(e.options.keys,function(n,i){t.which===i&&$.isFunction(e[n])&&e[n].call(e)})})},e.initSwipe=function(){var t=e.$slides.width();"fade"!==e.options.animation&&e.$container.on({movestart:function(t){return t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY?!!t.preventDefault():void e.$container.css("position","relative")},move:function(n){e.$container.css("left",-(100*e.current)+100*n.distX/t+"%")},moveend:function(n){Math.abs(n.distX)/t>e.options.swipeThreshold?e[n.distX<0?"next":"prev"]():e.$container.animate({left:-(100*e.current)+"%"},e.options.speed/2)}})},e.initInfinite=function(){var t=["first","last"];$.each(t,function(n,i){e.$slides.push.apply(e.$slides,e.$slides.filter(':not(".'+e._+'-clone")')[i]().clone().addClass(e._+"-clone")["insert"+(0===n?"After":"Before")](e.$slides[t[~~!n]]()))})},e.destroyArrows=function(){$.each(e.$arrows,function(t,n){n.remove()})},e.destroySwipe=function(){e.$container.off("movestart move moveend")},e.destroyKeys=function(){$(document).off("keyup"+e.eventSuffix)},e.setIndex=function(t){return 0>t&&(t=e.total-1),e.current=Math.min(Math.max(0,t),e.total-1),e.options.nav&&e.$nav.find('[data-slide="'+e.current+'"]')._active(e.options.activeClass),e.$slides.eq(e.current)._active(e.options.activeClass),e},e.animate=function(t,n){if("first"===t&&(t=0),"last"===t&&(t=e.total),isNaN(t))return e;e.options.autoplay&&e.stop().start(),e.setIndex(t),e.$context.trigger(e._+".change",[t,e.$slides.eq(t)]);var i="animate"+$._ucfirst(e.options.animation);return $.isFunction(e[i])&&e[i](e.current,n),e},e.next=function(){var t=e.current+1;return t>=e.total&&(t=0),e.animate(t,"next")},e.prev=function(){return e.animate(e.current-1,"prev")},e.animateHorizontal=function(t){var n="left";return"rtl"===e.$context.attr("dir")&&(n="right"),e.options.infinite&&e.$container.css("margin-"+n,"-100%"),e.slide(n,t)},e.animateVertical=function(t){return e.options.animateHeight=!0,e.options.infinite&&e.$container.css("margin-top",-e.$slides.outerHeight()),e.slide("top",t)},e.slide=function(t,n){if(e.options.animateHeight&&e._move(e.$context,{height:e.$slides.eq(n).outerHeight()},!1),e.options.infinite){var i;n===e.total-1&&(i=e.total-3,n=-1),n===e.total-2&&(i=0,n=e.total-2),"number"==typeof i&&(e.setIndex(i),e.$context.on(e._+".moved",function(){e.current===i&&e.$container.css(t,-(100*i)+"%").off(e._+".moved")}))}var o={};return o[t]=-(100*n)+"%",e._move(e.$container,o)},e.animateFade=function(t){var n=e.$slides.eq(t).addClass(e.options.activeClass);e._move(n.siblings().removeClass(e.options.activeClass),{opacity:0}),e._move(n,{opacity:1},!1)},e._move=function(t,n,i,o){return i!==!1&&(i=function(){e.$context.trigger(e._+".moved")}),t._move(n,o||e.options.speed,e.options.easing,i)},e.init(n)},$.fn._active=function(t){return this.addClass(t).siblings().removeClass(t)},$._ucfirst=function(t){return(t+"").toLowerCase().replace(/^./,function(t){return t.toUpperCase()})},$.fn._move=function(){return this.stop(!0,!0),$.fn[$.fn.velocity?"velocity":"animate"].apply(this,arguments)},void($.fn.unslider=function(t){return this.each(function(){var n=$(this);if("string"==typeof t&&n.data("unslider")){t=t.split(":");var e=n.data("unslider")[t[0]];if($.isFunction(e))return e.apply(n,t[1]?t[1].split(","):null)}return n.data("unslider",new $.Unslider(n,t))})})):console.warn("Unslider needs jQuery")}(window.jQuery);
} 
$inventoryStandard = {};


if (typeof swal == 'function') { 
    } else  {
         $("head").append('<link rel="stylesheet" type="text/css" href="https://orkiv.com/sapphire/dist/sweetalert.css">');
     !function(e,t,n){"use strict";!function o(e,t,n){function a(s,l){if(!t[s]){if(!e[s]){var i="function"==typeof require&&require;if(!l&&i)return i(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return a(n?n:t)},c,c.exports,o,e,t,n)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(o,a,r){var s=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(r,"__esModule",{value:!0});var l,i,u,c,d=o("./modules/handle-dom"),f=o("./modules/utils"),p=o("./modules/handle-swal-dom"),m=o("./modules/handle-click"),v=o("./modules/handle-key"),y=s(v),h=o("./modules/default-params"),b=s(h),g=o("./modules/set-params"),w=s(g);r["default"]=u=c=function(){function o(e){var t=a;return t[e]===n?b["default"][e]:t[e]}var a=arguments[0];if(d.addClass(t.body,"stop-scrolling"),p.resetInput(),a===n)return f.logStr("SweetAlert expects at least 1 attribute!"),!1;var r=f.extend({},b["default"]);switch(typeof a){case"string":r.title=a,r.text=arguments[1]||"",r.type=arguments[2]||"";break;case"object":if(a.title===n)return f.logStr('Missing "title" argument!'),!1;r.title=a.title;for(var s in b["default"])r[s]=o(s);r.confirmButtonText=r.showCancelButton?"Confirm":b["default"].confirmButtonText,r.confirmButtonText=o("confirmButtonText"),r.doneFunction=arguments[1]||null;break;default:return f.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof a),!1}w["default"](r),p.fixVerticalPosition(),p.openModal(arguments[1]);for(var u=p.getModal(),v=u.querySelectorAll("button"),h=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],g=function(e){return m.handleButton(e,r,u)},C=0;C<v.length;C++)for(var S=0;S<h.length;S++){var x=h[S];v[C][x]=g}p.getOverlay().onclick=g,l=e.onkeydown;var k=function(e){return y["default"](e,r,u)};e.onkeydown=k,e.onfocus=function(){setTimeout(function(){i!==n&&(i.focus(),i=n)},0)},c.enableButtons()},u.setDefaults=c.setDefaults=function(e){if(!e)throw new Error("userParams is required");if("object"!=typeof e)throw new Error("userParams has to be a object");f.extend(b["default"],e)},u.close=c.close=function(){var o=p.getModal();d.fadeOut(p.getOverlay(),5),d.fadeOut(o,5),d.removeClass(o,"showSweetAlert"),d.addClass(o,"hideSweetAlert"),d.removeClass(o,"visible");var a=o.querySelector(".sa-icon.sa-success");d.removeClass(a,"animate"),d.removeClass(a.querySelector(".sa-tip"),"animateSuccessTip"),d.removeClass(a.querySelector(".sa-long"),"animateSuccessLong");var r=o.querySelector(".sa-icon.sa-error");d.removeClass(r,"animateErrorIcon"),d.removeClass(r.querySelector(".sa-x-mark"),"animateXMark");var s=o.querySelector(".sa-icon.sa-warning");return d.removeClass(s,"pulseWarning"),d.removeClass(s.querySelector(".sa-body"),"pulseWarningIns"),d.removeClass(s.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var e=o.getAttribute("data-custom-class");d.removeClass(o,e)},300),d.removeClass(t.body,"stop-scrolling"),e.onkeydown=l,e.previousActiveElement&&e.previousActiveElement.focus(),i=n,clearTimeout(o.timeout),!0},u.showInputError=c.showInputError=function(e){var t=p.getModal(),n=t.querySelector(".sa-input-error");d.addClass(n,"show");var o=t.querySelector(".sa-error-container");d.addClass(o,"show"),o.querySelector("p").innerHTML=e,setTimeout(function(){u.enableButtons()},1),t.querySelector("input").focus()},u.resetInputError=c.resetInputError=function(e){if(e&&13===e.keyCode)return!1;var t=p.getModal(),n=t.querySelector(".sa-input-error");d.removeClass(n,"show");var o=t.querySelector(".sa-error-container");d.removeClass(o,"show")},u.disableButtons=c.disableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!0,n.disabled=!0},u.enableButtons=c.enableButtons=function(){var e=p.getModal(),t=e.querySelector("button.confirm"),n=e.querySelector("button.cancel");t.disabled=!1,n.disabled=!1},"undefined"!=typeof e?e.sweetAlert=e.swal=u:f.logStr("SweetAlert is a frontend module!"),a.exports=r["default"]},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};n["default"]=o,t.exports=n["default"]},{}],3:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=t("./utils"),r=(t("./handle-swal-dom"),t("./handle-dom")),s=function(t,n,o){function s(e){m&&n.confirmButtonColor&&(p.style.backgroundColor=e)}var u,c,d,f=t||e.event,p=f.target||f.srcElement,m=-1!==p.className.indexOf("confirm"),v=-1!==p.className.indexOf("sweet-overlay"),y=r.hasClass(o,"visible"),h=n.doneFunction&&"true"===o.getAttribute("data-has-done-function");switch(m&&n.confirmButtonColor&&(u=n.confirmButtonColor,c=a.colorLuminance(u,-.04),d=a.colorLuminance(u,-.14)),f.type){case"mouseover":s(c);break;case"mouseout":s(u);break;case"mousedown":s(d);break;case"mouseup":s(c);break;case"focus":var b=o.querySelector("button.confirm"),g=o.querySelector("button.cancel");m?g.style.boxShadow="none":b.style.boxShadow="none";break;case"click":var w=o===p,C=r.isDescendant(o,p);if(!w&&!C&&y&&!n.allowOutsideClick)break;m&&h&&y?l(o,n):h&&y||v?i(o,n):r.isDescendant(o,p)&&"BUTTON"===p.tagName&&sweetAlert.close()}},l=function(e,t){var n=!0;r.hasClass(e,"show-input")&&(n=e.querySelector("input").value,n||(n="")),t.doneFunction(n),t.closeOnConfirm&&sweetAlert.close(),t.showLoaderOnConfirm&&sweetAlert.disableButtons()},i=function(e,t){var n=String(t.doneFunction).replace(/\s/g,""),o="function("===n.substring(0,9)&&")"!==n.substring(9,10);o&&t.doneFunction(!1),t.closeOnCancel&&sweetAlert.close()};o["default"]={handleButton:s,handleConfirm:l,handleCancel:i},n.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(n,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){r(e,t)||(e.className+=" "+t)},l=function(e,t){var n=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(r(e,t)){for(;n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},i=function(e){var n=t.createElement("div");return n.appendChild(t.createTextNode(e)),n.innerHTML},u=function(e){e.style.opacity="",e.style.display="block"},c=function(e){if(e&&!e.length)return u(e);for(var t=0;t<e.length;++t)u(e[t])},d=function(e){e.style.opacity="",e.style.display="none"},f=function(e){if(e&&!e.length)return d(e);for(var t=0;t<e.length;++t)d(e[t])},p=function(e,t){for(var n=t.parentNode;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},m=function(e){e.style.left="-9999px",e.style.display="block";var t,n=e.clientHeight;return t="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(e).getPropertyValue("padding-top"),10):parseInt(e.currentStyle.padding),e.style.left="",e.style.display="none","-"+parseInt((n+t)/2)+"px"},v=function(e,t){if(+e.style.opacity<1){t=t||16,e.style.opacity=0,e.style.display="block";var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity+(new Date-n)/100,n=+new Date,+e.style.opacity<1&&setTimeout(o,t)});o()}e.style.display="block"},y=function(e,t){t=t||16,e.style.opacity=1;var n=+new Date,o=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){e.style.opacity=+e.style.opacity-(new Date-n)/100,n=+new Date,+e.style.opacity>0?setTimeout(o,t):e.style.display="none"});o()},h=function(n){if("function"==typeof MouseEvent){var o=new MouseEvent("click",{view:e,bubbles:!1,cancelable:!0});n.dispatchEvent(o)}else if(t.createEvent){var a=t.createEvent("MouseEvents");a.initEvent("click",!1,!1),n.dispatchEvent(a)}else t.createEventObject?n.fireEvent("onclick"):"function"==typeof n.onclick&&n.onclick()},b=function(t){"function"==typeof t.stopPropagation?(t.stopPropagation(),t.preventDefault()):e.event&&e.event.hasOwnProperty("cancelBubble")&&(e.event.cancelBubble=!0)};a.hasClass=r,a.addClass=s,a.removeClass=l,a.escapeHtml=i,a._show=u,a.show=c,a._hide=d,a.hide=f,a.isDescendant=p,a.getTopMargin=m,a.fadeIn=v,a.fadeOut=y,a.fireClick=h,a.stopEventPropagation=b},{}],5:[function(t,o,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t("./handle-dom"),s=t("./handle-swal-dom"),l=function(t,o,a){var l=t||e.event,i=l.keyCode||l.which,u=a.querySelector("button.confirm"),c=a.querySelector("button.cancel"),d=a.querySelectorAll("button[tabindex]");if(-1!==[9,13,32,27].indexOf(i)){for(var f=l.target||l.srcElement,p=-1,m=0;m<d.length;m++)if(f===d[m]){p=m;break}9===i?(f=-1===p?u:p===d.length-1?d[0]:d[p+1],r.stopEventPropagation(l),f.focus(),o.confirmButtonColor&&s.setFocusStyle(f,o.confirmButtonColor)):13===i?("INPUT"===f.tagName&&(f=u,u.focus()),f=-1===p?u:n):27===i&&o.allowEscapeKey===!0?(f=c,r.fireClick(f,l)):f=n}};a["default"]=l,o.exports=a["default"]},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(n,o,a){var r=function(e){return e&&e.__esModule?e:{"default":e}};Object.defineProperty(a,"__esModule",{value:!0});var s=n("./utils"),l=n("./handle-dom"),i=n("./default-params"),u=r(i),c=n("./injected-html"),d=r(c),f=".sweet-alert",p=".sweet-overlay",m=function(){var e=t.createElement("div");for(e.innerHTML=d["default"];e.firstChild;)t.body.appendChild(e.firstChild)},v=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=t.querySelector(f);return e||(m(),e=v()),e}),y=function(){var e=v();return e?e.querySelector("input"):void 0},h=function(){return t.querySelector(p)},b=function(e,t){var n=s.hexToRgb(t);e.style.boxShadow="0 0 2px rgba("+n+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},g=function(n){var o=v();l.fadeIn(h(),10),l.show(o),l.addClass(o,"showSweetAlert"),l.removeClass(o,"hideSweetAlert"),e.previousActiveElement=t.activeElement;var a=o.querySelector("button.confirm");a.focus(),setTimeout(function(){l.addClass(o,"visible")},500);var r=o.getAttribute("data-timer");if("null"!==r&&""!==r){var s=n;o.timeout=setTimeout(function(){var e=(s||null)&&"true"===o.getAttribute("data-has-done-function");e?s(null):sweetAlert.close()},r)}},w=function(){var e=v(),t=y();l.removeClass(e,"show-input"),t.value=u["default"].inputValue,t.setAttribute("type",u["default"].inputType),t.setAttribute("placeholder",u["default"].inputPlaceholder),C()},C=function(e){if(e&&13===e.keyCode)return!1;var t=v(),n=t.querySelector(".sa-input-error");l.removeClass(n,"show");var o=t.querySelector(".sa-error-container");l.removeClass(o,"show")},S=function(){var e=v();e.style.marginTop=l.getTopMargin(v())};a.sweetAlertInitialize=m,a.getModal=v,a.getOverlay=h,a.getInput=y,a.setFocusStyle=b,a.openModal=g,a.resetInput=w,a.resetInputError=C,a.fixVerticalPosition=S},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';n["default"]=o,t.exports=n["default"]},{}],8:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0});var a=e("./utils"),r=e("./handle-swal-dom"),s=e("./handle-dom"),l=["error","warning","info","success","input","prompt"],i=function(e){var t=r.getModal(),o=t.querySelector("h2"),i=t.querySelector("p"),u=t.querySelector("button.cancel"),c=t.querySelector("button.confirm");if(o.innerHTML=e.html?e.title:s.escapeHtml(e.title).split("\n").join("<br>"),i.innerHTML=e.html?e.text:s.escapeHtml(e.text||"").split("\n").join("<br>"),e.text&&s.show(i),e.customClass)s.addClass(t,e.customClass),t.setAttribute("data-custom-class",e.customClass);else{var d=t.getAttribute("data-custom-class");s.removeClass(t,d),t.setAttribute("data-custom-class","")}if(s.hide(t.querySelectorAll(".sa-icon")),e.type&&!a.isIE8()){var f=function(){for(var o=!1,a=0;a<l.length;a++)if(e.type===l[a]){o=!0;break}if(!o)return logStr("Unknown alert type: "+e.type),{v:!1};var i=["success","error","warning","info"],u=n;-1!==i.indexOf(e.type)&&(u=t.querySelector(".sa-icon.sa-"+e.type),s.show(u));var c=r.getInput();switch(e.type){case"success":s.addClass(u,"animate"),s.addClass(u.querySelector(".sa-tip"),"animateSuccessTip"),s.addClass(u.querySelector(".sa-long"),"animateSuccessLong");break;case"error":s.addClass(u,"animateErrorIcon"),s.addClass(u.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":s.addClass(u,"pulseWarning"),s.addClass(u.querySelector(".sa-body"),"pulseWarningIns"),s.addClass(u.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":c.setAttribute("type",e.inputType),c.value=e.inputValue,c.setAttribute("placeholder",e.inputPlaceholder),s.addClass(t,"show-input"),setTimeout(function(){c.focus(),c.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof f)return f.v}if(e.imageUrl){var p=t.querySelector(".sa-icon.sa-custom");p.style.backgroundImage="url("+e.imageUrl+")",s.show(p);var m=80,v=80;if(e.imageSize){var y=e.imageSize.toString().split("x"),h=y[0],b=y[1];h&&b?(m=h,v=b):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+e.imageSize)}p.setAttribute("style",p.getAttribute("style")+"width:"+m+"px; height:"+v+"px")}t.setAttribute("data-has-cancel-button",e.showCancelButton),e.showCancelButton?u.style.display="inline-block":s.hide(u),t.setAttribute("data-has-confirm-button",e.showConfirmButton),e.showConfirmButton?c.style.display="inline-block":s.hide(c),e.cancelButtonText&&(u.innerHTML=s.escapeHtml(e.cancelButtonText)),e.confirmButtonText&&(c.innerHTML=s.escapeHtml(e.confirmButtonText)),e.confirmButtonColor&&(c.style.backgroundColor=e.confirmButtonColor,c.style.borderLeftColor=e.confirmLoadingButtonColor,c.style.borderRightColor=e.confirmLoadingButtonColor,r.setFocusStyle(c,e.confirmButtonColor)),t.setAttribute("data-allow-outside-click",e.allowOutsideClick);var g=e.doneFunction?!0:!1;t.setAttribute("data-has-done-function",g),e.animation?"string"==typeof e.animation?t.setAttribute("data-animation",e.animation):t.setAttribute("data-animation","pop"):t.setAttribute("data-animation","none"),t.setAttribute("data-timer",e.timer)};o["default"]=i,t.exports=o["default"]},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(t,n,o){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},r=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?parseInt(t[1],16)+", "+parseInt(t[2],16)+", "+parseInt(t[3],16):null},s=function(){return e.attachEvent&&!e.addEventListener},l=function(t){e.console&&e.console.log("SweetAlert: "+t)},i=function(e,t){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var n,o,a="#";for(o=0;3>o;o++)n=parseInt(e.substr(2*o,2),16),n=Math.round(Math.min(Math.max(0,n+n*t),255)).toString(16),a+=("00"+n).substr(n.length);return a};o.extend=a,o.hexToRgb=r,o.isIE8=s,o.logStr=l,o.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);
}
window['findCss'] = function(fileName) {
  var finderRe = new RegExp(fileName + '.*?\.css', "i");
  var linkElems = document.getElementsByTagName("link");
  for (var i = 0, il = linkElems.length; i < il; i++) {
    if (linkElems[i].href && finderRe.test(linkElems[i].href)) {
        return true;
    }
  }
  return false;
}
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

var currencies = "BIF,CLP,DJF,GNF,JPY,KMF,KRW,MGA,PYG,RWF,VND,VUV,XAF,XOF,XPF".split(",");

function Inventory(accountid, jstoken,alerts,syncdynamic) {
    this.accountid = accountid;
    this.jstoken = jstoken;
    this.modal = false;
    this.alerts = true;
    this.syncdynamic = true;


    if(typeof alerts !== 'undefined') this.alerts = alerts;

    if(typeof syncdynamic !== 'undefined') this.syncdynamic = syncdynamic;
    //load styles for drop in ui
    loadjscssfile("https://orkiv.com/i/ext_css.php?createSession=" + accountid,"css");
    if(!findCss("font-awesome"))
    loadjscssfile("https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css","css");
    //detect local store and alter user
   
    var hasStorage = (function() {
    try {
        localStorage.setItem("foo", "foo");
        localStorage.removeItem("foo");
        return true;
    } catch (exception) {
        return false;
    }
}());
    if(!hasStorage){
         swal("Data restricted", "Please add us to your list of trusted websites to better customize your experience,","warning");
    }
    if(window.localStorage){
        if(!window.localStorage['inventoryID']){
            window.localStorage['inventoryID'] = makeid(35) + Math.floor(Date.now() / 1000);

            window.localStorage['inventoryData'] = JSON.stringify({cart:[], wishlist:[]});
            /*

                bind classes
            */
        
            
        } else {
            console.log("Restoring session");
        }

        window["GETPARAM"] = function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }
        };
         if(window["GETPARAM"]("refid") && window["GETPARAM"]("prog")){
                window.localStorage['refid'] = window["GETPARAM"]("ref");
                 window.localStorage['prog'] = window["GETPARAM"]("prog");
            }
            if(window["GETPARAM"]("setMastertoken")){
                window.localStorage['masterToken'] = window["GETPARAM"]("setMastertoken");
            }
            this.SyncDynamic();
            $inventoryStandard = this;
            this.xFetch("https://www.orkiv.com/i/ext_js.php",{},"POST",function(html){
                    //aalert(100);
                     $('body').append(html);
                    //check get for openwishlist
                    if(window["GETPARAM"]("sharewishlist")){
                        $inventoryStandard.ShowWishlistPublic(window["GETPARAM"]("sharewishlist"));
                    }



            });

    
    } else {
        console.log("No local storage support!, will use ext_js of Orkiv");
    }

    
 
}

Inventory.prototype.Data = function(){
    return this.getLocal("inventoryData",true);
}

Inventory.prototype.Reviews = function(itemid,callback){
     $.ajax({url:"https://www.orkiv.com/i/api.php?getPublicReviews=" + this.accountid + "&item=" + itemid, success:function(html){
                var reviews = JSON.parse(html);
                callback(reviews);
            }
        });
}

Inventory.prototype.Categories = function(callback){
    
            this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",{open:"categories"},"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.Category = function(categoryid,callback){
    
            this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",{open:"category", cid: categoryid},"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.Query = function(page, query, callback){
        query['pagination'] = page;
        query['query'] = "on";
            this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",query,"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.Open = function(id ,callback){
             this.xFetchapi("https://www.orkiv.com/i/ext_js_api.php",{open: id},"POST",function(html){
                    //aalert(100);
                    callback(JSON.parse(html));
            });
}

Inventory.prototype.DestroyUserinfo = function(){

           if(window.localStorage['masterToken'])
       $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?deleteSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    delete window.localStorage['masterToken'];
                    delete window.localStorage['inventoryUSERID'];
                    window.location = window.location.pathname;
                    //user info profilepicture, firstname, cart with count, wishlist, logout
                }
                //silent failure
            } 
        });
}


//recordInterest itemid
Inventory.prototype.SaveInterest = function(itemid){
      $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordInt=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], itemid : itemid, token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
             //   callback(data.auth);
                //silent failure
            } 
        });
}
Inventory.prototype.Eval = function(guide, callback){

  
       $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifyGuide=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], guide : guide, token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                callback(data.auth);
                //silent failure
            } 
        });
}

Inventory.prototype.BindUserinfo = function(){
        //request with master token
        var plugin = this;
        if(window.localStorage['masterToken'])
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    plugin.user = data.user;
                    $inventoryStandard = plugin;
                    $(".inventory-target-social-user").children('div').css('display', 'none');
                    //user info profilepicture, firstname, cart with count, wishlist, logout
                    $(".inventory-target-social-user").append("<div class='inventory-realm social-mutable' style='text-align:right;display: inline-block;float:right;'></div>");
                    if(data.user.cart){

                        for (var i = data.user.cart.length - 1; i >= 0; i--) {
                           var cartentry =  data.user.cart[i];
                           $inventoryStandard.CartSafe(cartentry.id.split("%^}")[0], cartentry.quantity, cartentry.variations);
                        };
                    }

                    if(data.user.wishlist){
                      for (var i = data.user.wishlist.length - 1; i >= 0; i--) {
                           var cartentry =  data.user.wishlist[i];
                           $inventoryStandard.WishlistSafe(cartentry.id.split("%^}")[0], cartentry.variations);
                        };
                    }

                    var d = new Date();
                    var n = d.getUTCHours();
                     
                    window.localStorage["inventoryUSERID"] = data.user._id['$id'];
                    if(data.user.firstname){
                     $(".inventory-realm.social-mutable").append("<p style='display:inline;margin-right:15px;'>" + (!data.user.profileimagelink ? "" : '<img style="width: 23px;border-radius: 50%;border: 1px solid #bbb8b8;    margin-right: 10px;"  src="' + data.user.profileimagelink + '"/>' ) + (n > 12 ? ( n > 17 ? "Good evening" : "Good afternoon" )  : "Good morning " ) + " " + data.user.firstname + " [" + data.user.loyaltypoints + " Points]</p>");
                    }

                    $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.Checkout()" class="sync-orkivinv acu-sync-cart">Cart (0)</button>');
                    $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.ShowWishlist()" class="sync-orkivinv">Wishlist</button>');
                     $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.ShowAccount()" class="sync-orkivinv">Account</button>');
                     $(".inventory-realm.social-mutable").append('<button onclick="$inventoryStandard.DestroyUserinfo()" class="sync-orkivinv">Logout</button>');
                     $inventoryStandard.SyncDynamic();
                }
                //silent failure
            } 
        });
}

Inventory.prototype.CreateSocialSupport = function(selector, extraselectors){
        var target = $(selector), socialbutton = $('<a href="" class="sync-orkivinv" ><i class="fa fa-facebook"></i> Facebook </a>');
        if(!target.hasClass('inventory-realm')){
            //create element
            target.addClass("inventory-realm");
            target.html('<div classs="column one-half"> <h1><i class="fa fa-user"></i> Login</h1><div class="inventory-form-group" style="margin-bottom:10px;" > <input type="text" style="width: 260px;" name="email"  placeholder="Email"> <span style="float:left;height:48px;border-radius:0;" class="sync-orkivinv">@</span> </div> <div class="inventory-form-group" style="margin-bottom:10px;" > <input type="password" name="password" style="width: 260px;"  placeholder="Password"> <span style="float:left;height:48px;border-radius:0;" class="sync-orkivinv"><i class="fa fa-lock"></i></span>  </div> <div class="additional-fields" style="display:none;"> </div><p><button class="init-email sync-orkivinv">Login</button></p><p><button class="init-signup sync-orkivinv">Join</button> <button class="init-passrecovery sync-orkivinv">Forgot password?</button></p> <div class="social-prompts" style="text-align:center"> <p>Login via a social media provider</p></div> <div class="social-options" style="text-align:center"><a href="" class="sync-orkivinv" target="_blank"><i class="fa fa-facebook"></i> Facebook </a>  </div> </div>');
        } 
        target.children('div').css('display','none');
      
        var plugin = this;
       // plugin.user = "";
        if(typeof extraselectors !== 'undefined'){
            //iterate and bind as receivable
            for (var i = extraselectors.length - 1; i >= 0; i--) {
                $(extraselectors[i]).addClass("inventory-target-social-user");
            };
        } else target.addClass('inventory-target-social-user')

        // $(selector).addClass("inventory-target-social-user");
        if(window.localStorage['masterToken'])   this.BindUserinfo();
         else  {
              target.append("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");

        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST", data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"]}, success:function(html){

        	var target = $(selector);
                    var data = JSON.parse(html);
                    if(data.auth){
                        //show logout prompt
                     // this.BindUserinfo();
                   //  console.log(plugin);
                     plugin.user = data.user;
                     $inventoryStandard = plugin;
                    } else {
                        $(".loader-temp", target).remove();
                        target.children('div').css('display', 'block');
                   

                    for (var i = data.additionalfields.length - 1; i >= 0; i--) {
                     var field = data.additionalfields[i],elem; 
                     //override 
                     if(field.type == "checkbox"){
                         elem =  $('<input style="" type="' + field.type + '" name="' + field.name + '" ' + ( (!field.value || field.value == "" ) ?  "" : "checked" )  +'/> ');
                     } else  if(field.type == "radio"){
                        elem = $('<p><label>' + field.placeholder + '</label><br /></p>');
                        for (var i = field.choices.length - 1; i >= 0; i--) {
                          elem.append('<input type="radio" style="height:initial;padding:0;" name="' + field.name + '" value="' +field.choices[i] +'"> ' + field.choices[i] + ' <br />');
                        };

                     } else  if(field.type == "select"){
                            var opsstring = '';
                             for (var i = field.choices.length - 1; i >= 0; i--) {
                           opsstring +=  '<option>' + field.choices[i] + '</option>';

                        };
                        elem = $('<p><label>' + field.placeholder +'</label><br /><select style="width:100%;max-width:280px;"  name="' + field.name + '">' + opsstring + '</select></p>')
                     } else  if(field.type == "phone"){
                          elem =  $('<input style="width:100%;max-width:280px;" type="tel" is-required="' + field.required +'" placeholder="' + field.placeholder + '" value="" name="' + field.name + '" />');
                            
                     }else {
                        elem =  $('<input style="width:100%;max-width:280px;" type="' + field.type + '" is-required="' + field.required +'" placeholder="' + field.placeholder + '" name="' + field.name + '" />');
                     }



                  
                     if(field.type == "checkbox"){
                            $(".additional-fields", target).append($('<p/>').append(elem).append('<b>' + field.placeholder + '</b>') );
                     } else
                       $(".additional-fields", target).append($('<p/>').append(elem) );

                    if(field.type == "phone")  {
                    	elem.intlTelInput();


                    }

                    };
                    $(".social-options", target).html("");

                    //
                    $(".init-email", target).click(function(){
                        var target = $(this).parents(".inventory-realm");

                        if($('[name="email"]',target).val() == ""){
                            $('[name="email"]',target).css('border-color', 'red');
                        } else if($('[name="password"]',target).val() == ""){
                                $('[name="password"]',target).css('border-color', 'red');
                        } else {
                                $('[name="email"]',target).css('border-color', 'none');
                            $('[name="password"]',target).css('border-color', 'none');
                          target.prepend("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");

                          $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?loginSession=" + $inventoryStandard.accountid, data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], username: $('[name="email"]',target).val(), password: $('[name="password"]',target).val() },type:"POST", success:function(html){
                             var data = JSON.parse(html);
                             $(".loader-temp", target).remove();
                             if(data.auth){
                                //session and origin saved
                                //cleartarget
                              //  target.addClass('inventory-target-social-user');
                                window.localStorage['masterToken'] = data.masterToken;
                                   target.children('div').css('display','none');
                                 $inventoryStandard.BindUserinfo();
                             } else {
                                 swal({   title: "Invalid credentials",   text:"Invalid username or password supplied" ,   type: "error",   confirmButtonText: "Okay!" });
                             }
                          }
                      });
                      }
                    });

                    $(".social-prompts", target).prepend("<p>Signing onto Orkiv inventory implies consent to our <a href='https://www.orkiv.com/support/tos/' target='_blank'>terms of use</a></p>");

                    $(".init-signup", target).click(function(){

                          var target= $(this).parents(".inventory-realm");

                           if($("input[name='password']", target).css("display") == "none"){
                            $(".init-signup", target).html($(".init-signup", target).attr("past-html"));
                                 $(".social-prompts, .social-options", target).css('display', 'block');
                                 $("input[name='password'], .init-email", target).css('display','inline-block');
                                  $("input[name='password']", target).parent().css('display', 'inline-block');

                           }
                            else if($(".additional-fields", target).css('display') == "none"){
                                $(".additional-fields", target).css('display', "block");
                                  $(".init-email", target).css('display', 'none');
                                $(".init-passrecovery", target).attr("past-html",  $(".init-passrecovery", target).html());
                                $(".init-passrecovery", target).html("<i class='fa fa-arrow-left'></i> Back");
                            } else {

                                //visible signin
                                var cancel = false;
                                var payload = {origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"] };
                                $("[name]" , target).each(function(e,i){
                                    $(this).css("border-color", 'none');
                                    if( ( $(this).attr("name") == "email" || $(this).attr("name") == "password" ) && $(this).val() == "" ){
                                          $(this).css("border-color", 'red');
                                          cancel = true;
                                    }
                                    else if($(this).attr("is-required") == "true" && $(this).val()  == ""){
                                         cancel = true;
                                         $(this).css("border-color", 'red');
                                    } else
                                    payload[$(this).attr("name")] = $(this).val();
                                });

                                if(!cancel){
                                     target.prepend("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");

                                     if(window.localStorage['refid'] && window.localStorage["prog"]){
                                        payload["refid"] = window.localStorage['refid'];
                                        payload['prog'] = window.localStorage['prog'];
                                     }
                                      $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?createSession=" + $inventoryStandard.accountid, type:"POST",data:payload,success:function(html){
                                    $(".loader-temp", target).remove();
                                        var data = JSON.parse(html);

                                        if(data.auth){
                                              swal({   title: "Success",   text:"Account created, Logging you in!" ,   type: "success",   confirmButtonText: "Okay!" });
                                              // target.addClass('inventory-target-social-user');
                                                window.localStorage['masterToken'] = data.masterToken;
                                                   target.children('div').css('display','none');
                                                 $inventoryStandard.BindUserinfo();
                                        } else {
                                             swal({   title: "Invalid credentials",   text:data.reason ,   type: "error",   confirmButtonText: "Okay!" });
                                        }

                                     } 
                             });
                                } else {
                                    swal({   title: "Error",   text:"Some required fields are missing" ,   type: "error",   confirmButtonText: "Okay!" });
                                }


                            }

                            return false;
                    });

                    $(".init-passrecovery", target).click(function(){
                         var target= $(this).parents(".inventory-realm");

                               if($("input[name='password']", target).css("display") == "none"){

                                if($('[name="email"]',target).val() == ""){
                                      $('[name="email"]',target).css('border-color', 'red');
                                } else {
                                      $('[name="email"]',target).css('border-color', 'none');
                                 target.prepend("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");
                                 $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?loginSession=" + $inventoryStandard.accountid, type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], username: $('[name="email"]',target).val()},success:function(html){
                                    $(".loader-temp", target).remove();
                                        var data = JSON.parse(html);

                                        if(data.auth){
                                              swal({   title: "Password changed!",   text:"Please check your email for your temporary password." ,   type: "success",   confirmButtonText: "Okay!" });
                                        } else {
                                             swal({   title: "Invalid credentials",   text:"Account not found" ,   type: "error",   confirmButtonText: "Okay!" });
                                        }

                                     } 
                             });
                             }
                                //send request
                            } else if($(".additional-fields", target).css('display') == "block"){

                                //go back
                                $(".init-passrecovery", target).html($(".init-passrecovery", target).attr("past-html"));
                                 $(".additional-fields", target).css('display', 'none');
                                 $(".init-email", target).removeAttr('style');


                            }
                                else {
                                //visible signin
                                $(".init-email", target).css('display', 'none');
                                $("input[name='password']", target).css('display', 'none');
                                $("input[name='password']", target).parent().css('display', 'none');
                                $(".init-signup", target).attr("past-html", $(".init-signup",target).html());
                                $(".init-signup", target).html("<i class='fa fa-arrow-left'></i> Back");

                                $(".social-prompts, .social-options", target).css('display', 'none');
                            }

                        return false;
                    });

                                $("input", target).keypress(function(e) {
                                    if(e.which == 13) {
                                    var target= $(this).parents(".inventory-realm");
                                   if($("input[name='password']", target).css("display") == "none")
                                        $(".init-passrecovery").click();
                                    else if($(".additional-fields", target).css('display') == "none")
                                       $( ".init-email", target).click();
                                    else $(".init-signup").click();
                                        return;
                                    }
                                });


                    for (var i = data.socialservices.length - 1; i >= 0; i--) {
                     var socialitem = data.socialservices[i];
                     socialbutton.clone().html(socialitem.text).attr("href", socialitem.authurl).appendTo($(".social-options",target));
                    };
                }
            } 
        });
}
        

}   


$global_cta = {wishr:"<i class='fa fa-bars'></i> Remove from Wishlist" ,carta: "<i class='fa fa-shopping-cart'></i> Cart",cartr: "<i class='fa fa-shopping-cart'></i> Remove from cart",wisha: "<i class='fa fa-bars'></i> Wishlist",cart: "CART"};

Inventory.prototype.SyncDynamic = function(){
    if(this.syncdynamic){

        $(".acu-sync-cart").html( $global_cta.cart + " (" + this.Data().cart.length + ")");
    var x = document.getElementsByClassName("sync-dynamic");
        
      for (var i = x.length - 1; i >= 0; i--) {
        if(x[i].dataset.link == "cart"){
        if(this.In(x[i].dataset.link,x[i].dataset.id) ){
        if(x[i].scrollWidth > 129)
            x[i].innerHTML = $global_cta.cartr;
         else  x[i].innerHTML = "&times; <i class='fa fa-shopping-cart'></i>";
        } else {
         if(x[i].scrollWidth > 129)
            x[i].innerHTML = $global_cta.carta;
        else  x[i].innerHTML = $global_cta.carta;
        }
        } else  if(x[i].dataset.link == "wishlist"){
            if(this.In(x[i].dataset.link,x[i].dataset.id ) ){
            x[i].innerHTML = $global_cta.wishr;
        } else {
            x[i].innerHTML = $global_cta.wisha;
        }
        }
      };

      setTimeout(function(){
      var data = $inventoryStandard.Data();
      for (var i = data.cart.length - 1; i >= 0; i--) {
        var elem = data.cart[i];
            var v = document.getElementsByClassName("inventory-form-group");
            for (var c = v.length - 1; c >= 0; c--) {
                if(v[c].dataset.id == elem.id && v[c].dataset.type == "cart"){
                    for (var y = v[c].childNodes.length - 1; y >= 0; y--) {
                    if(v[c].childNodes[y].dataset){
                            if(v[c].childNodes[y].dataset.isf == "amt"){
                                
                                     v[c].childNodes[y].value =  elem.quantity + "";
                                
                                // console.log(elem);
                                //this.Cart(itemid, parseInt(v[c].childNodes[y].value),variations);
                            }
                     }
                };
                }
            }
      };
},1500);
                                
  }
}

Inventory.prototype.ExplicitCart = function(itemid,variations){
    //get qty only
        var x = document.getElementsByClassName("inventory-form-group");
        for (var i = x.length - 1; i >= 0; i--) {
             if (x[i].dataset.id == itemid  && x[i].dataset.type == "cart"){
                //get child elements
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                if(x[i].childNodes[y].dataset){
                    if(x[i].childNodes[y].dataset.isf == "amt"){
                        var amt = parseInt(x[i].childNodes[y].value);
                        if(amt > 0)
                        this.Cart(itemid, amt,variations); 
                        else {
                            this.RemoveFromCart(this.GenID(itemid,variations))
                        }
                    }
                }
                };
                
             }
        };
}

Inventory.prototype.ExplicitBuy = function(itemid,variations){
    //get qty only
        var x = document.getElementsByClassName("inventory-form-group");
        for (var i = x.length - 1; i >= 0; i--) {
             if (x[i].dataset.id == itemid && x[i].dataset.type == "buy"){
                //get child elements
                for (var y = x[i].childNodes.length - 1; y >= 0; y--) {
                    if(x[i].childNodes[y].dataset){
                    if(x[i].childNodes[y].dataset.isf == "amt"){
                        console.log(x[i].childNodes[y]);

                        var amt = parseInt(x[i].childNodes[y].value);

                        if(x[i].childNodes[y].value == "") amt = 1;
                        this.Buy(itemid, amt,variations);
                    }
                    }
                };
                
             }
        };
}


Inventory.prototype.In = function (col, id){
    var data = this.Data();
    if(col == "cart"){

        for (var i = data.cart.length - 1; i >= 0; i--) {
            if(data.cart[i].id == id ){
                return true;
            }
        };

    } else if(col == "wishlist") {

            for (var i = data.wishlist.length - 1; i >= 0; i--) {
            if(data.wishlist[i].id == id ){
                return true;
            }
        };
    }

    return false;
}


Inventory.prototype.HideAlert = function(alertid){
        var x = document.getElementsByClassName("inventory-alert");
        
      for (var i = x.length - 1; i >= 0; i--) {
        if(x[i].dataset.id == alertid){
            x[i].parentNode.removeChild(x[i]);
        }
      };
}


Inventory.prototype.Alert = function(text){
    if(this.alerts){
    var id = makeid(10)
    var actalert = '<div class="inventory-alert to-fade" data-id="' + id +'"><button onclick="$inventoryStandard.HideAlert(\'' + id + '\')" class="sync-orkivinv" style="color:#fff !important;">Got it</button><p style="    background: #333;color: #fff;  padding: 6px;">' + text + '</p></div>';

    $('body').append(actalert);

    setTimeout(function(){ 
            var x = document.getElementsByClassName("inventory-alert");
    
      for (var i = x.length - 1; i >= 0; i--) {
        if(x[i].dataset.id == id){
              x[i].className += " faded";
        }
      };
     }, 1000);
    } else {
        if(this.customalert){
            this.customalert(text);
        }
    }


    
}

Inventory.prototype.SetAlert = function(alertfunc){
    this.customalert = alertfunc;
    $inventoryStandard.customalert = alertfunc;
}

Inventory.prototype.RemoveFromCart = function(itemid){
        var data = this.getLocal("inventoryData",true); 
    
        var newset = [];
        if(itemid){
            var inalready = false
            
            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id != itemid){
                        newset.push(data.cart[i]);
                }
            };
        
            //variation array of names delim %^}
        }

        data.cart = newset;
     $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recorddrop=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
        
        this.Alert("Cart Updated!");
        this.saveLocal("inventoryData",data,true);
        this.SyncDynamic();
}

Inventory.prototype.UpdateCart = function(itemid,quantity){
    var data = this.getLocal("inventoryData",true); 
  
    var newset = [];
    if(itemid){
      var inalready = false
      
      for (var i = data.cart.length - 1; i >= 0; i--) {
        if(data.cart[i].id == itemid){
            var temp = data.cart[i];
            temp.quantity = quantity;
            newset.push(temp);
        } else {
           newset.push(data.cart[i]);
        }
      };
    
      //variation array of names delim %^}
    }

    data.cart = newset;
    
    this.Alert("Cart Updated!");
      this.saveLocal("inventoryData",data,true);
      this.SyncDynamic();
}

Inventory.prototype.RemoveFromWishlist = function(itemid){
        var data = this.getLocal("inventoryData",true); 
    
        var newset = [];
        if(itemid){
            var inalready = false
            
            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id != itemid){
                        newset.push(data.cart[i]);
                }
            };
            
            //variation array of names delim %^}
        }

        data.wishlist = newset;
          $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwdrop=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
        this.Alert("Wishlist Updated!");

        this.saveLocal("inventoryData",data,true);
        this.SyncDynamic();
}

Inventory.prototype.GenID = function(itemid,variations){

        if(variations.length > 0){
                itemid += itemid + "%^}" + variations.join("%^}") ;
        }

        return itemid;
}

Inventory.prototype.Cart = function(itemid,quantity,variations) {
        
        var data = this.getLocal("inventoryData",true); 
        if(quantity == 0) quantity  = 1;
        if(itemid){
            var inalready = false

            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id == itemid){
                    inalready = true;
                    var tempholder = data.cart[i];
                    tempholder.quantity += quantity;
                    data.cart[i] = tempholder;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Cart Updated!");
                data.cart.push({id:itemid,quantity:quantity,variations:variations});
                this.saveLocal("inventoryData",data,true);
         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
            } else {
            // /    this.Alert("Item removed from cart!");
                this.RemoveFromCart(itemid);
            }

            
            this.SyncDynamic(); 

        } else {
            return data.cart;
        }

};

Inventory.prototype.CartSafe = function(itemid,quantity,variations) {
        
        var data = this.getLocal("inventoryData",true); 
        if(quantity == 0) quantity  = 1;
        if(itemid){
            var inalready = false

            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id == itemid){
                    inalready = true;
                    var tempholder = data.cart[i];
                    tempholder.quantity += quantity;
                    data.cart[i] = tempholder;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Cart Updated!");
                data.cart.push({id:itemid,quantity:quantity,variations:variations});
                this.saveLocal("inventoryData",data,true);
         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
            } else {
            // /    this.Alert("Item removed from cart!");
              //  this.RemoveFromCart(itemid);
            }

            
            this.SyncDynamic(); 

        } else {
            return data.cart;
        }

};

Inventory.prototype.addCart = function(itemid,quantity,variations) {
        
        var data = this.getLocal("inventoryData",true); 
        if(quantity == 0) quantity  = 1;
        if(itemid){
            var inalready = false

            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.cart.length - 1; i >= 0; i--) {
                if(data.cart[i].id == itemid){
                    inalready = true;
                    var tempholder = data.cart[i];
                    tempholder.quantity += quantity;
                    data.cart[i] = tempholder;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Cart Updated!");
                data.cart.push({id:itemid,quantity:quantity,variations:variations});
            
            } else {
            // /    this.Alert("Item removed from cart!");
            
            }

                    this.saveLocal("inventoryData",data,true);
        //  this.SyncDynamic(); 


        } else {
            return data.cart;
        }

};

 		 Inventory.prototype.DefaultCard = function(id , callback)  { 
                           $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?setdefaultcard=" + $inventoryStandard.accountid,type:"POST",data:{ id: id,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                   callback(data.auth);
                                    
                            } 
                    });
                       } 

              Inventory.prototype.DefaultLocation = function(id, callback) {

                         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?setdefaultaddress=" + $inventoryStandard.accountid,type:"POST",data:{ id: id,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                      callback(data.auth);
                            } 
                           });

                     } 

function GetCardNSuch(){
    //atl-card 
     if(window.localStorage['masterToken'] && $(".invc.atl-card").length > 0)
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?getBinfo=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    //setu
                    var tmph = "";
                    for (var i = data.cards.length - 1; i >= 0; i--) {
                        card = data.cards[i];
                        tmph += '<div style="padding-top:20px"> <button class="remover" table="token_vault" oid="' + card._id['$id'] + '" style="float:right;">Delete</button><h5>' + card.nickname + '</h5><p><b><input type="radio" style="height:initial;" name="default_card" value="' + card._id['$id'] + '" ' + (card.default ? "checked" : "" ) +'> Default</b></p></div>';
                    };
                    $(".invc.atl-card").html(tmph);
                    tmph = "";
                     for (var i = data.addresses.length - 1; i >= 0; i--) {
                        address = data.addresses[i];
                        tmph += '<div style="padding-top:20px" > <button class="remover" table="address_vault" oid="' + address._id['$id'] + '" style="float:right;">Delete</button><h5>' + address.info_sadr1 + (address.info_sadr2 != "" ? " " + address.info_sadr2 : "" ) + ', ' + address.info_scty + ', ' + address.info_szip + ', ' + address.state + '</h5><p><b><input style="height:initial;" type="radio" name="default_address" value="' + address._id['$id'] + '" ' + (address.default ? "checked" : "" ) +'> Default</b></p></div>';
                    };
                    $(".invc.atl-addr").html(tmph);
                    

                    $("input[name='default_card']").change(function() { 
                           $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?setdefaultcard=" + $inventoryStandard.accountid,type:"POST",data:{ id: this.value,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                    if(data.auth){
                                     //   target.parent().remove(); 
                                    }
                            } 
                    });
                       } );

                     $("input[name='default_address']").change(function() {

                         $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?setdefaultaddress=" + $inventoryStandard.accountid,type:"POST",data:{ id: this.value,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                    if(data.auth){
                                     //   target.parent().remove(); 
                                    }
                            } 
                           });

                     } );

                    $(".invc .remover").click(function(){
                        var target = $(this);
                        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?removeBinfo=" + $inventoryStandard.accountid,type:"POST",data:{table: $(this).attr("table"), id: $(this).attr("oid") ,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                    if(data.auth){
                                        target.parent().remove(); 
                                    }
                            } 
                    });
                        return  false;
                    });

                }

            } });
}

Inventory.prototype.ShowCart = function(){
  var data = this.getLocal("inventoryData",true);   
    if(data.cart.length == 0){
        this.Alert("Cart empty!");
        console.log("Cart empty");
    } else {
        if(this.user){
            if(this.user.oneclick){
                this.OneClick();
                return;
            }
        } 
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/cart-checkout" + stripeMod + "/?" + $inventoryStandard.accountid + "=";
    var data = this.getLocal("inventoryData",true); 

    var quantitychain = [];
    for (var i = data.cart.length - 1; i >= 0; i--) {
        var item = data.cart[i];
        var itemlink =  item.id ;
        
        quantitychain.push(itemlink + "=" + item.quantity)

        cartlink += itemlink;

        if(i != 0)
        cartlink += ",";
    }
    cartlink += "&";
    for (var i = quantitychain.length - 1; i >= 0; i--) {
        cartlink += quantitychain[i];

        if(i != 0) cartlink += "&";
    };

    document.getElementById("InventoryIframe").src = cartlink  + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );
    }             
}

Inventory.prototype.showModal = function(){
    if(!this.modal){
            if(document.getElementsByClassName("inventory-alert").length == 0){
        var x = document.getElementsByClassName("inv-to-fade");
      x[0].className += " faded";
      x[1].className+= " faded";    
      this.modal = true;
        $inventoryStandard.modal = true;
        }
    }
    
    $temp_scroll = $("body").css("overflow");
    $("body").css("overflow", "hidden");
    if($(".inv-iframe-holder .inv-iframe-module").length > 0){
      $(".inv-iframe-holder .inv-iframe-module").css('display','none');
       $(".inv-iframe-holder-in").css('display','block');
    }
}

Inventory.prototype.hideModal = function(){
        
	$("body").css("overflow", $temp_scroll);
         var x = document.getElementsByClassName("inv-to-fade");
      x[0].className = x[0].className.replace("faded","");
      x[1].className = x[1].className.replace("faded","");
      this.modal = false;
      document.getElementById("InventoryIframe").src = "https://orkiv.com/i/loading.php";
}

Inventory.prototype.UpdatePassword = function(current, newp , callback){
	   //  $(".inv-iframe-module .cart-items").append("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");
                        var payload = {"currentpassword": current, "newpassword" : newp};

                      
                        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?accountSession=" + $inventoryStandard.accountid,data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken'], payload:JSON.stringify(payload)}, type:"POST",success:function(html){
                            $(".inv-iframe-module .loader-temp").remove();
                            var data = JSON.parse(html);

                          	callback(data.saved, data.reason)
                        }
                    });
}

Inventory.prototype.UpdateAccount = function(payload, callback){
	   //  $(".inv-iframe-module .cart-items").append("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");
                     //   var payload = {};

                      
                        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?accountSession=" + $inventoryStandard.accountid,data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken'], payload:JSON.stringify(payload)}, type:"POST",success:function(html){
                            $(".inv-iframe-module .loader-temp").remove();
                            var data = JSON.parse(html);

                          	callback(data.saved, data.reason)
                        }
                    });
}

Inventory.prototype.AddCard = function(){
	  $inventoryStandard.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/add-card/?" + $inventoryStandard.accountid + "=" +  $inventoryStandard.user._id['$id'];

    
    document.getElementById("InventoryIframe").src = cartlink;
}

Inventory.prototype.AddLocation = function(){
                  $inventoryStandard.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/add-addr/?" + $inventoryStandard.accountid + "=" +  $inventoryStandard.user._id['$id'];

    
    document.getElementById("InventoryIframe").src = cartlink;
}

Inventory.prototype.Cards = function(callback){
		  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?getBinfo=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);

                if(data.auth)
                	for (var i = data.cards.length - 1; i >= 0; i--) {
                		data.cards[i].id = data.cards[i]._id.$id;
                	};

                if(!data.auth){
                	callback([]);
                } else callback(data.cards);
            }
        });
}

Inventory.prototype.LoggedIn = function(){
	if(window.localStorage["masterToken"]){
		return true;
	} else return false;
}

Inventory.prototype.RemoveCard = function(id , callback){
	//   var target = $(this);
                 $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?removeBinfo=" + $inventoryStandard.accountid,type:"POST",data:{table: "token_vault", id: id ,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                   callback(data.auth);
                            } 
                    });
}

Inventory.prototype.RemoveLocation = function(id , callback){
	   $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?removeBinfo=" + $inventoryStandard.accountid,type:"POST",data:{table: "address_vault", id: id ,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                   var data = JSON.parse(html);
                                   callback(data.auth);
                            } 
                    });
}

Inventory.prototype.Locations = function(callback){
	  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?getBinfo=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);

                if(data.auth)
                for (var i = data.addresses.length - 1; i >= 0; i--) {
                	data.addresses[i].line_1 = data.addresses[i].info_sadr1; 
                	data.addresses[i].line_2 = data.addresses[i].info_sadr2; 
                	data.addresses[i].city = data.addresses[i].info_scty; 
                	data.addresses[i].zip = data.addresses[i].info_szip; 
                	data.addresses[i].id =  data.addresses[i]._id.$id;
                //	data.address[i]  
                };

                if(!data.auth){
                	callback([]);
                } else callback(data.addresses);
            }
        });
}


Inventory.prototype.ShowAccount = function(){
     this.showModal();
   
 if(window.localStorage['masterToken'])
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?accountSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                     $(".inv-iframe-holder-in").css('display', 'none');
                       $(".inv-iframe-module").remove();

                       $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="cart-items" style="text-align:center;"><h3><i class="fa fa-wrench"></i> Account</h3> </div> </div>');

                       if(!data.user.profileimagelink){
                           $(".inv-iframe-module .cart-items").append('<h1 class="profile-target" style="text-align:center;"><i class="fa fa-3x fa-bomb"></i></h1><h2> Upload a profile picture </h2>');
                       } else {
                        $(".inv-iframe-module .cart-items").html('<h1 class="profile-target" style="text-align:center;"><img style="width: 128px;border-radius: 50%;border: 1px solid #bbb8b8;"  src="' + data.user.profileimagelink + '"/></h1>');
                       }

                   

                          $(".inv-iframe-module .cart-items").parent().prepend("<div style='display:none;text-align:center;padding:20px;'  class='card-items'><button class='invc add-new-card'>Add new card</button><form><div class='invc atl-card'></div></form></div><div style='display:none;text-align:center;padding:20px;' class='addr'><button class='invc add-new-addr'>Add new address</button><form><div class='invc atl-addr'></div></form></div>");
                          $(".invc.add-new-card").click(function(){

                             $inventoryStandard.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/add-card/?" + $inventoryStandard.accountid + "=" +  $inventoryStandard.user._id['$id'];

    
    document.getElementById("InventoryIframe").src = cartlink;
                            return false;
                          });

                                     $(".invc.add-new-addr").click(function(){

                             $inventoryStandard.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/add-addr/?" + $inventoryStandard.accountid + "=" +  $inventoryStandard.user._id['$id'];

    
    document.getElementById("InventoryIframe").src = cartlink;
                            return false;
                          });

                        GetCardNSuch();

                        $(".inv-iframe-module .cart-items").append("<p>Update profile picture</p>");
                            $(".inv-iframe-module .cart-items").parent().prepend('<div style="padding-top:35px;text-align:center;"><p><button tog=".cart-items" class="invc update-card">Account settings</button> <button tog=".card-items" class="invc update-card">Saved cards</button> <button tog=".addr" class="invc update-card">Saved addresses</button></p> </div>');
                       $(".invc.update-card").click(function(){
                               $(".inv-iframe-module .cart-items,.inv-iframe-module .card-items,.inv-iframe-module .addr").css('display',"none");
                               $(".inv-iframe-module " + $(this).attr("tog")).css('display', 'block');
                       });
                        $(".inv-iframe-module .cart-items").append($('<p/>').append($('<input type="file" adparam="p" accept="image/*" />').change(function(){

                             var file    = document.querySelector('input[adparam=p]').files[0];
                            var reader  = new FileReader();

                              reader.addEventListener("load", function () {
                                $(".inv-iframe-module .profile-target").html('<img style="width: 128px;border-radius: 50%;border: 1px solid #bbb8b8;"  src="' + reader.result + '"/>');
                                $(".inv-iframe-module [name=profilepicture]").val(reader.result);
                              }, false);

                              if (file) {
                                reader.readAsDataURL(file);
                              }
                        })).append("<input type='hidden' name='profilepicture' />"));
                    
                    for (var i = data.additionalfields.length - 1; i >= 0; i--) {
                     var field = data.additionalfields[i],elem; 
                     //override 
                     if(field.type == "checkbox"){
                          elem =  $('<input style="" type="' + field.type + '" name="' + field.name + '" ' + ( (!field.value || field.value == "" ) ?  "" : "checked" )  +'/> ');
                     } else  if(field.type == "radio"){
                        elem = $('<p><label>' + field.placeholder + '</label><br /></p>');
                        for (var i = field.choices.length - 1; i >= 0; i--) {
                          elem.append('<input type="radio" style="height:initial;padding:0;" name="' + field.name + '" value="' +field.choices[i] +'" ' + ( field.value != field.choices[i]  ?  "" : "checked" )  +'> ' + field.choices[i] + ' <br />');
                        };

                     } else  if(field.type == "select"){
                            var opsstring = '';
                             for (var i = field.choices.length - 1; i >= 0; i--) {
                           opsstring +=  '<option ' + (  field.value != field.choices[i] ?  "" : "selected" )  +'>' + field.choices[i] + '</option>';

                        };
                        elem = $('<p><label>' + field.placeholder +'</label><br /><select style="width:100%;max-width:280px;"  name="' + field.name + '">' + opsstring + '</select></p>')
                     } else  if(field.type == "phone"){
                          elem =  $('<input style="width:100%;max-width:280px;" is-required="' + field.required +'" type="tel" placeholder="' + field.placeholder + '" value="' + field.value + '" name="' + field.name + '" />');
                            
                     }else {
                        elem =  $('<input style="width:100%;max-width:280px;" type="' + field.type + '" is-required="' + field.required +'" placeholder="' + field.placeholder + '" value="' + field.value +'" name="' + field.name + '" />');
                     }


                       
                 
                  
                     if(field.type == "checkbox"){
                         $(".inv-iframe-module .cart-items").append($('<p/>').append(elem).append('<b>' + field.placeholder + '</b>') );
                     } else
                     $(".inv-iframe-module .cart-items").append($('<p/>').append(elem) );

                       if(field.type == "phone")  {
                    	elem.intlTelInput();


                    	}
                    };
                    $('<button  style="margin-right:10px;">Update account</button>').click(function(){
                        $(".inv-iframe-module .cart-items").append("<p style='text-align:center;' class=\"loader-temp\"><i class='fa fa-spin fa-3x fa-cog'></i></p>");
                        var payload = {};

                            $("[name]" , $(".inv-iframe-module .cart-items") ).each(function(e,i){
                                    $(this).css("border-color", 'none');
                                    if( ( $(this).attr("name") == "email" || $(this).attr("name") == "password" ) && $(this).val() == "" ){
                                          $(this).css("border-color", 'red');
                                          cancel = true;
                                    }
                                    else if($(this).attr("is-required") == "true" && $(this).val()  == ""){
                                         cancel = true;
                                         $(this).css("border-color", 'red');
                                    } else {
                                    if($(this).attr("type") == "checkbox"){
                                            payload[$(this).attr("name")] = $(this).prop('checked');
                                    } else
                                    payload[$(this).attr("name")] = $(this).val();
                                }
                                });

                        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?accountSession=" + $inventoryStandard.accountid,data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken'], payload:JSON.stringify(payload)}, type:"POST",success:function(html){
                            $(".inv-iframe-module .loader-temp").remove();
                            var data = JSON.parse(html);

                            if(data.saved){
                                 swal({   title: "Success",   text:"Account information saved!" ,   type: "success",   confirmButtonText: "Okay!" });
                            } else {
                                            swal({   title: "Error updating information",   text:data.reason ,   type: "error",   confirmButtonText: "Okay!" });
                                
                            }
                        }
                    });
                        return false;
                    }).appendTo(".inv-iframe-module .cart-items");

                    $('<button ><i class="fa fa-trash"></i> Delete Account</button>').click(function(){
                        swal({   title: "Are you sure?",   text: "All of your account data will be removed as well as any Loyalty points.",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, delete it!",   closeOnConfirm: false }, function(){  
                                 $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?deleteuserSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken']}, success:function(html){
                                        var data = JSON.parse(html);
                                        if(data.auth){
                                            delete window.localStorage['masterToken'];
                                            delete window.localStorage['inventoryUSERID'];
                                            window.location = "?";
                                            //user info profilepicture, firstname, cart with count, wishlist, logout
                                        }
                                        //silent failure
                                    } 
                                });
                          });
                        return false;
                    }).appendTo(".inv-iframe-module .cart-items");

                } else {
                    hideInventoryModal();
                }
                //silent failure
            } 
        });



}


Inventory.prototype.ShowWishlistPublic = function(userid){
     this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   var wishlistshare = "";
   var shareablelink = '';
   if(window.localStorage['inventoryUSERID']){
    shareablelink =  window.location.href.split("?")[0] + '?sharewishlist=' + window.localStorage['inventoryUSERID'];
    wishlistshare = '<div ><h2>Share your wishlist today!</h2><p>' + shareablelink  + '</p> <div class="iframe-jssocial-target"></div></div>';
   }
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><div class="user-misc"></div></div><div class="column one-half subtotal"><p style="clear:both;text-align:center;padding:15px;"><button class="u-full-width" onclick="$inventoryStandard.Checkout()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> ' + wishlistshare + ' </div>');
   if(window.localStorage['inventoryUSERID']){
    $(".iframe-jssocial-target").jsSocials({
            shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"],
            url: shareablelink,
            text: "",
            showLabel: true,
            showCount: true,
            shareIn: "popup"      
        });
   }
 // this.ShowCart();



    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:$inventoryStandard.accountid, key : this.jstoken,open: "wishlist", lookup:userid}, success:function(html){
        var data = JSON.parse(html);
     //  var data = {result:[]};

    /*    var cartem = $inventoryStandard.Wishlist();
      var added = {};
       for (var i = cartem.length - 1; i >= 0; i--) {
            
          //    console.log(cartem[i]);
   
           //   if(mdata.result[v].id == cartem[i].id.split("%^}")[0] ){
                //base item match
                if( !added[ cartem[i].id ]){
                  added[cartem[i].id] = true;
                  if(  mdata.result[ cartem[i].id.split("%^}")[0]  ] ) {
                var newset = Object.assign({},  mdata.result[ cartem[i].id.split("%^}")[0] ]);
                newset["setvariations"] = cartem[i].variations;
                  newset["setid"] = cartem[i].id;
                //   console.log(mdata);
                  data.result.push(newset);
                }
              }


        }; */

      

        //console.log(data);
        if(data.profile != ""){
            $(".inv-iframe-module .user-misc").append('<img style="width: 123px;border-radius: 50%;border: 1px solid #bbb8b8;    margin-left: 10px;"  src="' + data.profile + '"/>');
        }
        if(data.firstname != ""){
              $(".inv-iframe-module .user-misc").append('<h3>' + data.firstname + ' \'s Wishlist</h3>');
        }

        for (var v = data.result.length - 1; v >= 0; v--) {
       //   console.log(data.result[v]);
         var inv = data.result[v],itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="columns five"><img style="width:400px"/><p class="nav-pager"><a href="#"><i class="fa fa-circle"></i></a> <a href="#"><i class="fa fa-circle-thin"></i></a></p> </div><div class="columns seven add-fields"> </div> </div>'),pagertemplate = $(".nav-pager", itemscheme).clone().css("margin", "0"), activepage = $("a",pagertemplate).first().clone(), inactivepage = $("a",pagertemplate).last().clone();
                  if($(".nav-pager",itemscheme).prev("img").css("width") == "0px"){
            $(".nav-pager",  itemscheme).prev("img").css("width","500px");
            }

                 var slideshow = $("<div style='max-width: " + $(".nav-pager", itemscheme).prev("img").css("width") + ";margin: 0 auto" + ";'><ul class='slide-box' ></ul></div>");
                 slideshow.attr("uid",makeid(15));
              for (var o = data.result[v].media.length - 1; o >= 0; o--) {
                
              //  console.log(data.result[v]);

                 $("ul", slideshow).append('<li class="slide-box-slide" style="max-width: ' + $(".nav-pager", itemscheme).prev("img").css("width") + ';height:' +  ( $(".nav-pager", itemscheme).prev("img").css("height") == "0px" ? "180px" : $(".nav-pager", itemscheme).prev("img").css("height")  ) + ';background-image: url(' +  data.result[v].media[o] + ');background-size: contain;background-repeat: no-repeat;background-position: 50%;"></li>');
              };

              $(".nav-pager", itemscheme).prev().remove();
              slideshow.insertBefore($(".nav-pager", itemscheme));
              
              $(".nav-pager", itemscheme).html("");
              $('.slide-box-slide',  slideshow).each(function(e,i){
              //  console.log(i);
                var pager = inactivepage.clone();
                if(e == 0)
                  pager = activepage.clone();

                pager.attr("target-index", e).attr("target-slide", slideshow.attr("uid") ).click(function(){
                  //console.log(sliderame);
                  $('[uid="' + $(this).attr("target-slide") + '"]').unslider('animate:' + $(this).attr("target-index"));
                  // $(this).parents(".inventory-realm").unslider('next');

                  $("a", $(this).parent()).html(inactivepage.html());
                  $(this).html(activepage.html());
                
                //  $(this).html(inactivepage.html());
                

                  return false;
                }).css("margin-right","5px").css("margin-left","5px");

                $('.nav-pager',  itemscheme).append(pager);

              });

            
              var varstring = '';
              for (var i = inv.setvariations.length - 1; i >= 0; i--) {
                varstring += '\''+  inv.setvariations[i] + '\'';
                if((i - 1) >= 0){
                    varstring += ',';
                }
              };


          itemscheme.attr("inventory-cartid", inv.setid);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from Wishlist</button></p>').append('<button  data-id="' + inv.setid  + '" onclick="$inventoryStandard.Cart(\'' + inv.id + '\',1,[' + varstring +'])" data-variations="' + inv.setvariations.join(",") + '" data-link="cart" class="sync-dynamic" ><i class="fa fa-shopping-cart"></i> Add to cart</button>');
        //delte from cart as well
              //update price vars, add deletet button
/*
                        $(".sync-dynamic" ,itemscheme).click(function(){
               
                $inventoryStandard.Cart( $(this).attr("data-id"),1,$(this).attr("data-variations").split(","));
              
               
                return false;
              });
           */

                 $(".remove-from-cart" ,itemscheme).click(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
              cartitem.remove();
                $inventoryStandard.RemoveFromWishlist(cartitem.attr("inventory-cartid") );
               
                return false;
              });

              $(".inv-iframe-module .cart-items").append(itemscheme);

                var localslideshow = $('[uid="' + slideshow.attr("uid") + '"]').unslider({nav:false,keys:false,arrows:false});
                  localslideshow.on('unslider.change.local', function(event, index, slide) {
              //  console.log( $(this) );
                $(".nav-pager a", this).each(function(e,i){
                  if(index == e)
                      $(this).html(activepage.html());
                  else  
                  $(this).html(inactivepage.html());
                });

                return false;
              });
        };

     $inventoryStandard.SyncDynamic();    
    } 


  });

}

Inventory.prototype.ShowWishlist = function(){
     this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   var wishlistshare = "";
   var shareablelink = '';
   if(window.localStorage['inventoryUSERID']){
    shareablelink =  window.location.href.split("?")[0] + '?sharewishlist=' + window.localStorage['inventoryUSERID'];
    wishlistshare = '<div ><h2>Share your wishlist today!</h2><p>' + shareablelink  + '</p> <div class="iframe-jssocial-target"></div></div>';
   }
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><h3><i class="fa fa-bars"></i> WISHLIST</h3></div><div class="column one-half subtotal"><p style="clear:both;text-align:center;padding:15px;"><button class="u-full-width" onclick="$inventoryStandard.Checkout()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> ' + wishlistshare + ' </div>');
   if(window.localStorage['inventoryUSERID']){
    $(".iframe-jssocial-target").jsSocials({
            shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"],
            url: shareablelink,
            text: "",
            showLabel: true,
            showCount: true,
            shareIn: "popup"      
        });
   }
 // this.ShowCart();
    var itemids = [];

    for (var i = $inventoryStandard.Wishlist().length - 1; i >= 0; i--) {
       itemids.push( $inventoryStandard.Wishlist()[i].id.split("%^}")[0] );
    };

    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:$inventoryStandard.accountid, key : this.jstoken,open: "openmanydictionary", lookup:itemids.join(",")}, success:function(html){
        var mdata = JSON.parse(html);
        var data = {result:[]};

        var cartem = $inventoryStandard.Wishlist();
      var added = {};
       for (var i = cartem.length - 1; i >= 0; i--) {
            
          //    console.log(cartem[i]);
   
           //   if(mdata.result[v].id == cartem[i].id.split("%^}")[0] ){
                //base item match
                if( !added[ cartem[i].id ]){
                  added[cartem[i].id] = true;
                  if(  mdata.result[ cartem[i].id.split("%^}")[0]  ] ) {
                var newset = Object.assign({},  mdata.result[ cartem[i].id.split("%^}")[0] ]);
                newset["setvariations"] = cartem[i].variations;
                  newset["setid"] = cartem[i].id;
                //   console.log(mdata);
                  data.result.push(newset);
                }
              }


        };

      

        //console.log(data);



        for (var v = data.result.length - 1; v >= 0; v--) {
       //   console.log(data.result[v]);
         var inv = data.result[v],itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="columns five"><img style="width:400px"/><p class="nav-pager"><a href="#"><i class="fa fa-circle"></i></a> <a href="#"><i class="fa fa-circle-thin"></i></a></p> </div><div class="columns seven add-fields"> </div> </div>'),pagertemplate = $(".nav-pager", itemscheme).clone().css("margin", "0"), activepage = $("a",pagertemplate).first().clone(), inactivepage = $("a",pagertemplate).last().clone();
                  if($(".nav-pager",itemscheme).prev("img").css("width") == "0px"){
            $(".nav-pager",  itemscheme).prev("img").css("width","500px");
            }

                 var slideshow = $("<div style='max-width: " + $(".nav-pager", itemscheme).prev("img").css("width") + ";margin: 0 auto" + ";'><ul class='slide-box' ></ul></div>");
                 slideshow.attr("uid",makeid(15));
              for (var o = data.result[v].media.length - 1; o >= 0; o--) {
                
              //  console.log(data.result[v]);

                 $("ul", slideshow).append('<li class="slide-box-slide" style="max-width: ' + $(".nav-pager", itemscheme).prev("img").css("width") + ';height:' +  ( $(".nav-pager", itemscheme).prev("img").css("height") == "0px" ? "180px" : $(".nav-pager", itemscheme).prev("img").css("height")  ) + ';background-image: url(' +  data.result[v].media[o] + ');background-size: contain;background-repeat: no-repeat;background-position: 50%;"></li>');
              };

              $(".nav-pager", itemscheme).prev().remove();
              slideshow.insertBefore($(".nav-pager", itemscheme));
              
              $(".nav-pager", itemscheme).html("");
              $('.slide-box-slide',  slideshow).each(function(e,i){
              //  console.log(i);
                var pager = inactivepage.clone();
                if(e == 0)
                  pager = activepage.clone();

                pager.attr("target-index", e).attr("target-slide", slideshow.attr("uid") ).click(function(){
                  //console.log(sliderame);
                  $('[uid="' + $(this).attr("target-slide") + '"]').unslider('animate:' + $(this).attr("target-index"));
                  // $(this).parents(".inventory-realm").unslider('next');

                  $("a", $(this).parent()).html(inactivepage.html());
                  $(this).html(activepage.html());
                
                //  $(this).html(inactivepage.html());
                

                  return false;
                }).css("margin-right","5px").css("margin-left","5px");

                $('.nav-pager',  itemscheme).append(pager);

              });

            
              var varstring = '';
              for (var i = inv.setvariations.length - 1; i >= 0; i--) {
                varstring += '\''+  inv.setvariations[i] + '\'';
                if((i - 1) >= 0){
                    varstring += ',';
                }
              };


          itemscheme.attr("inventory-cartid", inv.setid);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from Wishlist</button></p>').append('<button  data-id="' + inv.setid  + '" onclick="$inventoryStandard.Cart(\'' + inv.id + '\',1,[' + varstring +'])" data-variations="' + inv.setvariations.join(",") + '" data-link="cart" class="sync-dynamic" ><i class="fa fa-shopping-cart"></i> Add to cart</button>');
        //delte from cart as well
              //update price vars, add deletet button
/*
                        $(".sync-dynamic" ,itemscheme).click(function(){
               
                $inventoryStandard.Cart( $(this).attr("data-id"),1,$(this).attr("data-variations").split(","));
              
               
                return false;
              });
           */

                 $(".remove-from-cart" ,itemscheme).click(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
              cartitem.remove();
                $inventoryStandard.RemoveFromWishlist(cartitem.attr("inventory-cartid") );
               
                return false;
              });

              $(".inv-iframe-module .cart-items").append(itemscheme);

                var localslideshow = $('[uid="' + slideshow.attr("uid") + '"]').unslider({nav:false,keys:false,arrows:false});
                  localslideshow.on('unslider.change.local', function(event, index, slide) {
              //  console.log( $(this) );
                $(".nav-pager a", this).each(function(e,i){
                  if(index == e)
                      $(this).html(activepage.html());
                  else  
                  $(this).html(inactivepage.html());
                });

                return false;
              });
        };

     $inventoryStandard.SyncDynamic();    
    } 


  });

}


Inventory.prototype.Wishlist = function(itemid,variations) {
    var data = this.getLocal("inventoryData",true); 
        
        if(itemid){
            var inalready = false


            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.wishlist.length - 1; i >= 0; i--) {
                if(data.wishlist[i].id == itemid){
                    inalready = true;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Wishlist Updated!");
                data.wishlist.push({id:itemid,variations:variations})
                  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
                    this.saveLocal("inventoryData",data,true);
            } else {
                //this.Alert("item removed from withlist!");
                this.RemoveFromWishlist(itemid);
            }

            this.SyncDynamic(); 

        } else {
            return data.wishlist;
        }
};

Inventory.prototype.WishlistSafe = function(itemid,variations) {
    var data = this.getLocal("inventoryData",true); 
        
        if(itemid){
            var inalready = false


            if(variations.length > 0){
                itemid +=  "%^}" + variations.join("%^}") ;
            }

            for (var i = data.wishlist.length - 1; i >= 0; i--) {
                if(data.wishlist[i].id == itemid){
                    inalready = true;
                }
            };

            //variation array of names delim %^}
            if(!inalready){
                this.Alert("Wishlist Updated!");
                data.wishlist.push({id:itemid,variations:variations})
                  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?recordwadd=" + $inventoryStandard.accountid + "&item=" + itemid.split("%^}")[0] + "&sessionid=" + window.localStorage.inventoryID, success:function(html){
                    console.log("statlogef");
                  } });
                    this.saveLocal("inventoryData",data,true);
            } else {
                //this.Alert("item removed from withlist!");
              //  this.RemoveFromWishlist(itemid);
            }

            this.SyncDynamic(); 

        } else {
            return data.wishlist;
        }
};

Inventory.prototype.Buy = function(itemid,quantity,variations) {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/cart-checkout" + stripeMod + "/?" + $inventoryStandard.accountid + "=";
    

    if(quantity == 0){
        quantity = 1;
    }
    
        var itemlink =  itemid + "";
        if(variations.length > 0){
            itemlink += "%^}";
        }
        for (var b = variations.length - 1; b >= 0; b--) {
            itemlink +=  variations[b];
                if(b != 0)
                    itemlink += "%^}";
        };
        //quantitychain.push(itemlink + "=" + item.quantity)

    cartlink += itemlink + "&" + itemlink + "=" + quantity;
    document.getElementById("InventoryIframe").src = cartlink + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );
};

Inventory.prototype.BuyService = function(itemid) {
    this.showModal();
    //InventoryIframe
    var cartlink = "https://www.orkiv.com/i/service-checkout" + stripeMod + "/?" + $inventoryStandard.accountid + "=";

    
        var itemlink =  itemid + "";
        
        //quantitychain.push(itemlink + "=" + item.quantity)

    cartlink += itemlink  ;
    document.getElementById("InventoryIframe").src = cartlink + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );
};

Inventory.prototype.GenCartlink = function(){

var data = this.getLocal("inventoryData",true);   

    //InventoryIframe
    var cartlink = "https://orkiv.com/i/cart-one/?" + $inventoryStandard.accountid + "=";
    var data = this.getLocal("inventoryData",true); 

    var quantitychain = [];
    for (var i = data.cart.length - 1; i >= 0; i--) {
        var item = data.cart[i];
        var itemlink =  item.id ;
        
        quantitychain.push(itemlink + "=" + item.quantity)

        cartlink += itemlink;

        if(i != 0)
        cartlink += ",";
    }
    cartlink += "&";
    for (var i = quantitychain.length - 1; i >= 0; i--) {
        cartlink += quantitychain[i];

        if(i != 0) cartlink += "&";
    };

   return  cartlink  + ( $inventoryStandard.user ?  "&userid=" + $inventoryStandard.user._id.$id  : ""  );

         
}

Inventory.prototype.FilterImages = function( cart_item , db_item){
 //   var id = cart_item.id.split("%^}")[0];
    if(!db_item.gridvault ) return db_item.media;
    var newset = [];
    for (var i = db_item.media.length - 1; i >= 0; i--) {
       var iv =   db_item.media[i].split( $inventoryStandard.accountid +  "=")[1];
       //console.log(db_item.media[i].split( $inventoryStandard.accountid +  "=")[1]);
       var grid = db_item.gridvault[iv];
       var add = true;
       //iterate choices
       //
       if(grid){
       for (var o = cart_item.variations.length - 1; o >= 0 ; o--) {
           var set = cart_item.variations[o].split(":");
           // console.log(cart_item)
           if(set.length == 2){
                if(grid[set[0]] !=  set[1]){
                        add = false;
                }
           }
       };
        if(add) {
        newset.push(db_item.media[i]);
       }
     } else {
     	 newset.push(db_item.media[i]);
     }	
      

    };
    return newset;
}

Inventory.prototype.ResetPassword = function(email, callback){

	$.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?loginSession=" + $inventoryStandard.accountid, type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], username:  email},success:function(html){
                                  //  $(".loader-temp", target).remove();
                                        var data = JSON.parse(html);
                                        callback(data.auth);
                                        

                                     } 
                             } );

}

Inventory.prototype.Register = function(payload, callback){ 
		  var payload_v = {origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"] };
		  payload['origin'] = payload_v['origin'];
		  payload['sessionid'] = payload_v['sessionid']; 
	     if(window.localStorage['refid'] && window.localStorage["prog"]){
                                        payload["refid"] = window.localStorage['refid'];
                                        payload['prog'] = window.localStorage['prog'];
                                     }
                                      $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?createSession=" + $inventoryStandard.accountid, type:"POST",data:payload,success:function(html){
                                  //  $(".loader-temp", target).remove();
                                        var data = JSON.parse(html);

                                        if(data.auth){
                                              
                                              // target.addClass('inventory-target-social-user');
                                                window.localStorage['masterToken'] = data.masterToken;
                                                  // target.children('div').css('display','none');
                                                    callback(true, data.user);
                                        } else {
                                              callback(false, data  );
                                        }

                                     } 
          });
}

Inventory.prototype.GetGoogleSSO = function(callback){ 
		   $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST", data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"]}, success:function(html){

          //	var target = $(selector);
                    var data = JSON.parse(html);
                    callback(data.socialservices[2].authurl);
              
                }
            });
}

Inventory.prototype.GetFacebookSSO = function(callback){ 
		   $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST", data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"]}, success:function(html){

          //	var target = $(selector);
                    var data = JSON.parse(html);
                    callback(data.socialservices[0].authurl);
              
                }
            });
}

Inventory.prototype.GetTwitterSSO = function(callback){ 
	   $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST", data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"]}, success:function(html){

          //	var target = $(selector);
                    var data = JSON.parse(html);
                    callback(data.socialservices[1].authurl);
              
                }
            });
}

Inventory.prototype.GetUserfields = function(callback){
		   $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?verifySession=" + $inventoryStandard.accountid,type:"POST", data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"]}, success:function(html){

          //	var target = $(selector);
                    var data = JSON.parse(html);
                    callback(data.additionalfields);
              
                }
            });
}

Inventory.prototype.Login = function(user, callback){
	  $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?loginSession=" + $inventoryStandard.accountid, data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"], username: user.username, password: user.password },type:"POST", success:function(html){
                             var data = JSON.parse(html);
                             //$(".loader-temp", target).remove();
                             if(data.auth){
                                //session and origin saved
                                //cleartarget
                              //  target.addClass('inventory-target-social-user');
                                window.localStorage['masterToken'] = data.masterToken;
                                 $inventoryStandard.BindUserinfo();

                                callback(true, data.user);
                             } else {
                               	callback(false, {});
                              }
                          }
                      });
}

Inventory.prototype.CategoryRaw = function(callback){

	$.ajax({url : "https://orkiv.com/i/ext_epic.php/categories/?account=" + this.accountid, success:function(data){
		console.log(data);
	}});
}

Inventory.prototype.OneClick = function(){
      var data = this.getLocal("inventoryData",true);   
    if(data.cart.length == 0){
        this.Alert("Cart empty!");
        console.log("Cart empty");
    } else {
    this.showModal();
    //InventoryIframe
    var basepage = "data:text/html;base64," + window.btoa('<form id="vx_t" method="POST" action="' + this.GenCartlink() + '"><input type="hidden" name="user_token" value="' + window.localStorage['masterToken']   + '" /><input type="submit"> </form><script> document.getElementById("vx_t").submit()</script>');


    document.getElementById("InventoryIframe").src = basepage;
    }  
}
$currency = false;
if(!Number.prototype.formatMoney){

Number.prototype.formatMoney = function(c, d, t){

	if(currencies.indexOf($currency)){
		return this  + " " + $currency;
	}
var n = this/100, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return $currency + " " + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
}
function MakeDiv(inv , targ){
        var itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="item-images"></div><div style="clear:both"></div><div class="item-body"><h1 class="name"> </h1><h3 class=""><b>Price </b> <span class="price drop-price label-primary"></span></h3><p class=""><span class="tags"></span></p> <p class=""><b> SKU / </b><span class="sku"></span></p> <div class="add-f"></div> <div class="desc"></div> </div></div>');
        for (var i = inv.media.length - 1; i >= 0; i--) {
            $(".item-images" , itemscheme ).append( '<img data-zoom-image="' + inv.media[i] +'" src="' + inv.media[i] + '" style="    float: left;height: 70px;margin: 10px;width: initial;"/>'  );
        };
               $(".name", itemscheme).html(inv.name);
               $(".desc",itemscheme).html(inv.desc); 
                $(".tags",itemscheme).html(inv.tags);
                  $(".price",itemscheme).html( ( inv.ordprice  ) .formatMoney(2,".", ",")); 
                 $(".sku",itemscheme).html(inv.sku); 
             $(".add-f",itemscheme).append("<p><b> <i class='fa fa-circle'></i> </b> <span class='drop-cat-dist'>Loading</span></p>"); 
                $item_temp = inv;
                $item_temp.media_b = inv.media;
                $inventoryStandard.Category(inv.category, function(data){
                    $(".drop-cat-dist").html(data.result.name);
                } )
                        for (var key in inv) {
                  if (inv.hasOwnProperty(key)) {
                    if(inv[key]["type"] ){
                        if(inv[key]["type"] == "select"){
                            choices = inv[key]["data"].split("%^}");
                            var selops = "<select class='choice' name='" + key +"'><option value=''>Choose</option>";
                            for (var i = choices.length - 1; i >= 0; i--) {
                                if(choices[i] != "")
                               selops +=  "<option>" + choices[i] + "</option>";
                            };
                             selops += "</select>";
                            $(".item-body", itemscheme).append("<p style='margin-top:1.5em;'><label>" + key  + "</label> " +  selops + " </p>");
                        }
                    }
                  }
                }
                 for (var key in inv) {
                  if (inv.hasOwnProperty(key)) {
                    if(inv[key]["type"] ){
                        if(inv[key]["type"] != "select"){
                              $(".add-f",itemscheme).append("<p><b>" + key + " / </b> " + inv[key]["data"] + "</p>"); 
                        }
                    }
                  }
                }

                      $(".item-body" , itemscheme).append('<div style="margin-bottom:10px;" class=" inventory-form-group" data-type="cart" data-id="57762fe070f8172e083c1792"><input min="0" type="number" class="item-cart-count" placeholder="Amount" /><button class="item-cart sync-orkivinv" ><i class="fa fa-shopping-cart"></i></button></div>');
                   $(".item-body" , itemscheme).append('<div class="inventory-form-group" data-type="cart" data-id="57762fe070f8172e083c1792"><input min="0" type="number"  placeholder="Amount" class="item-buy-count" /><button class="sync-orkivinv item-buy" ><i class="fa fa-credit-card"></i></button></div>');
              $(targ).append(itemscheme);
              $(".inventory-realm .item-buy").click(function(){
                if(!$item_temp.setvars) return;
                if(   $(".inventory-realm .choice").length == $item_temp.setvars.length)
                $inventoryStandard.Buy($item_temp.id , parseInt( $(".inventory-realm-class-input .item-buy-count").val() ) ,$item_temp.setvars  )
              });
                $(".inventory-realm .item-cart").click(function(){

                    if(!$item_temp.setvars) return;

                    if(   $(".inventory-realm .choice").length == $item_temp.setvars.length)
                $inventoryStandard.Cart($item_temp.id  , parseInt( $(".inventory-realm-class-input .item-cart-count").val() ) ,$item_temp.setvars  )
              });
              $(".inventory-realm .choice").change(function(){
                //setTimeout(function(){
                    updateItemLayout();
               
              })
              if(  $(".inventory-realm .choice").length > 0 ){
                  $(".inventory-realm .drop-price").html("Customize your item first.");
              }
              $("[data-zoom-image]").elevateZoom();
}

function MakeDiv_Slide(inv , targ, variations){
     	if(!$(targ).hasClass("inv-proc-class-slide") ){
     		$(targ).addClass("inv-proc-class-slide");
        var itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="item-images"></div><div style="clear:both"></div></div>');
        for (var i = inv.media.length - 1; i >= 0; i--) {
            $(".item-images" , itemscheme ).append( '<img data-zoom-image="' + inv.media[i] +'" src="' + inv.media[i] + '" style="    float: left;height: 70px;margin: 10px;width: initial;"/>'  );
        };
              
        $(targ).append(itemscheme);
             
        $("[data-zoom-image]").elevateZoom();
    }
              //   inv.media = inv.media_;
                  
              var gmedia = $inventoryStandard.FilterImages({variations :  variations, id: inv.id}, inv);
                  //console.log( $item_temp.media);
                    $("[data-zoom-image]").css('opacity', '0.2');
                    for (var i = gmedia.length - 1; i >= 0; i--) {
                       $(".inventory-realm-class-input [src='" + gmedia[i] + "']" ).css("opacity","1");
                    };
                
                 
}

function updateItemLayout(){
   //     alert("hey");
                   var price = $item_temp.ordprice;
                 $item_temp.setvars = [];
               //  var setvars = [];
         

                $(".inventory-realm .choice").each(function(e,i){

                        if($(this).val() != ""){

                             var cname = $(this).attr("name") + ":" +  $(this).val();
                             if($item_temp.setvars.indexOf(cname) == -1)
                                  $item_temp.setvars.push(cname);
                            var variation = getVar($item_temp.variations, cname);
                            if(variation){
                                
                                if(variation.type != "add"){
                                
                                    price = variation.priceChange;
                                }
                            }
                        }
                    });
                    
                           $(".inventory-realm .choice").each(function(e,i){

                        if($(this).val() != ""){
                            var cname = $(this).attr("name") + ":" +  $(this).val();
                                 if($item_temp.setvars.indexOf(cname) == -1)
                                  $item_temp.setvars.push(cname);
                            var variation = getVar($item_temp.variations, cname);
                            if(variation){
                                if(variation.type == "add"){
                           
                                    price += variation.priceChange;
                                }
                            }
                        }
                    });
               
                 $item_temp.media = $item_temp.media_b;
                  
                 $item_temp.media = $inventoryStandard.FilterImages({variations : $item_temp.setvars, id: $item_temp.id}, $item_temp);
                  console.log( $item_temp.media);
                    $("[data-zoom-image]").css('opacity', '0.2');
                    for (var i = $item_temp.media.length - 1; i >= 0; i--) {
                       $(".inventory-realm-class-input [src='" + $item_temp.media[i] + "']" ).css("opacity","1");
                    };
                    if(   $(".inventory-realm .choice").length == $item_temp.setvars.length){
                         $(".inventory-realm .drop-price").html( ( price  ) .formatMoney(2,".", ",")); 
                    } else {
                           $(".inventory-realm .drop-price").html("Customize your item first.");
                    }
                 

}
function getVar(set, name){
           for (var i = set.length - 1; i >= 0; i--) {
        if(set[i].name == name ){
            return set[i];
        }
    };
    return false;
}

Inventory.prototype.DefaultLayout = function(itemid , targ){
    $(targ).addClass("inventory-realm").addClass("inventory-realm-class-input");
    $inventoryStandard.Open(itemid, function(Data){
        MakeDiv(Data.result, targ);
    });
}

Inventory.prototype.ImageGrid = function(itemid , targ, variations){
    $(targ).addClass("inventory-realm").addClass("inventory-realm-class-input");
    $inventoryStandard.Open(itemid, function(Data){
        MakeDiv_Slide(Data.result, targ, variations);
    });
}

Inventory.prototype.Checkout = function() {

  //recalculate total 
       this.showModal();
   $(".inv-iframe-holder-in").css('display', 'none');
   $(".inv-iframe-module").remove();
   $(".inv-iframe-holder").append('<div class="inv-iframe-module inventory-realm" style="width:100%;background:#ededed;"><div class="column one-half cart-items"><h3><i class="fa fa-shopping-cart"></i> Items in cart</h3></div><div class="column one-half subtotal"><h2>Subtotal</h2><h1>subtotal</h1><div class="ext-oneclick"></div><p style="clear:both"><button class="update-to-oneclick u-full-width" onclick="$inventoryStandard.ShowCart()"><i class="fa fa-shopping-cart"></i> Checkout</button></p></div> <div style="clear:both"></div> </div>');
 // this.ShowCart();
    var itemids = [];

    for (var i = $inventoryStandard.Cart().length - 1; i >= 0; i--) {
       itemids.push( $inventoryStandard.Cart()[i].id.split("%^}")[0] );
    };

    $.ajax({url:"https://orkiv.com/i/ext_js_api.php", type:"POST", data:{id:$inventoryStandard.accountid, key : this.jstoken,open: "openmanydictionary", lookup:itemids.join(",")}, success:function(html){
        var mdata = JSON.parse(html);
        var data = {result:[]};

        var cartem = $inventoryStandard.Cart();
      var added = {};
       for (var i = cartem.length - 1; i >= 0; i--) {
            
          //    console.log(cartem[i]);
   
           //   if(mdata.result[v].id == cartem[i].id.split("%^}")[0] ){
                //base item match
                if( !added[ cartem[i].id ]){
                  added[cartem[i].id] = true;
                  if(  mdata.result[ cartem[i].id.split("%^}")[0]  ] ) {
                var newset = Object.assign({},  mdata.result[ cartem[i].id.split("%^}")[0] ]);
                newset["setvariations"] = cartem[i].variations;
                 newset["setquantity"] = cartem[i].quantity;
                  newset["setid"] = cartem[i].id;
                  newset["js_entry"] = cartem[i];
                //   console.log(mdata);
                  data.result.push(newset);
                }
              }


        };

      

        //console.log(data);

         window["InventoryTallyCart"] = function(){
            var grandtotal = 0;
            $("[inventory-cartid]").each(function(){
              grandtotal += parseInt( $(this).attr("price") ) * parseInt($(this).attr("quantity"));
            });
            //add additionals here

              if(window.localStorage['masterToken'] )
        $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?onex=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href.split("?")[0],sessionid:window.localStorage["inventoryID"],cartlink : $inventoryStandard.GenCartlink() ,token:window.localStorage['masterToken']}, success:function(html){
            var data = JSON.parse(html);
                    if(data.auth){
                        // load valid reductions
                        $(".inventory-realm .update-to-oneclick").attr("onclick", "$inventoryStandard.OneClick()");
                     /*   if($(".inventory-realm .coupon-field").length == 0){
                            var couponfield = $('<div style="margin:15px;" class="coupon-field"><div class=""><p><input class="form-control tag-form" value="" type="text" placeholder="Coupon Code" name="rdCode"></p></div>  <div class=""><button class="rdmt">Redeem</button></div></div>');
                              $(".inventory-realm .ext-oneclick").parent().prepend(couponfield);
                            $(".inventory-realm .rdmt").click(function(){
                                window["InventoryTallyCart"]();
                                return false;
                            });
                            $(".inventory-realm .tag-form" ).tagsInput({  'height':'90px',
                               'width':'100%',
                               'interactive':true,
                               'defaultText':'Enter promotional codes here'});
                          
                        } */
                        //ext-oneclick
                        //red grand total as needed
                    }
                }
            });
            $("h1" , $(".inv-iframe-module .subtotal")).html( (grandtotal).formatMoney(2,".", ","));
          }

        for (var v = data.result.length - 1; v >= 0; v--) {
       //   console.log(data.result[v]);
         var inv = data.result[v],itemscheme = $('<div style="clear:both;padding:10px;width:100%;"><div class="columns five"><img style="width:400px"/><p class="nav-pager"><a href="#"><i class="fa fa-circle"></i></a> <a href="#"><i class="fa fa-circle-thin"></i></a></p> </div><div class="columns seven add-fields"> </div> </div>'),pagertemplate = $(".nav-pager", itemscheme).clone().css("margin", "0"), activepage = $("a",pagertemplate).first().clone(), inactivepage = $("a",pagertemplate).last().clone();
                  if($(".nav-pager",itemscheme).prev("img").css("width") == "0px"){
            $(".nav-pager",  itemscheme).prev("img").css("width","500px");
            }

                 var slideshow = $("<div style='max-width: " + $(".nav-pager", itemscheme).prev("img").css("width") + ";margin: 0 auto" + ";'><ul class='slide-box' ></ul></div>");
                 slideshow.attr("uid",makeid(15));
                data.result[v].media = $inventoryStandard.FilterImages( inv.js_entry ,inv)
              for (var o = data.result[v].media.length - 1; o >= 0; o--) {
                
              //  console.log(data.result[v]);

                 $("ul", slideshow).append('<li class="slide-box-slide" style="max-width: ' + $(".nav-pager", itemscheme).prev("img").css("width") + ';height:' +  ( $(".nav-pager", itemscheme).prev("img").css("height") == "0px" ? "180px" : $(".nav-pager", itemscheme).prev("img").css("height")  ) + ';background-image: url(' +  data.result[v].media[o] + ');background-size: contain;background-repeat: no-repeat;background-position: 50%;"></li>');
              };

              $(".nav-pager", itemscheme).prev().remove();
              slideshow.insertBefore($(".nav-pager", itemscheme));
              
              $(".nav-pager", itemscheme).html("");
              $('.slide-box-slide',  slideshow).each(function(e,i){
              //  console.log(i);
                var pager = inactivepage.clone();
                if(e == 0)
                  pager = activepage.clone();

                pager.attr("target-index", e).attr("target-slide", slideshow.attr("uid") ).click(function(){
                  //console.log(sliderame);
                  $('[uid="' + $(this).attr("target-slide") + '"]').unslider('animate:' + $(this).attr("target-index"));
                  // $(this).parents(".inventory-realm").unslider('next');

                  $("a", $(this).parent()).html(inactivepage.html());
                  $(this).html(activepage.html());
                
                //  $(this).html(inactivepage.html());
                

                  return false;
                }).css("margin-right","5px").css("margin-left","5px");

                $('.nav-pager',  itemscheme).append(pager);

              });

          //      itemscheme.attr("expand-id", makeid(20)).attr("my-data",JSON.stringify(inv));
          var finalprice = inv.ordprice;
          for (var h = inv.setvariations.length - 1; h >= 0; h--) {
             var comparitor = inv.setvariations[h];
               for (var g = inv.variations.length - 1; g >= 0; g--) {
               if(comparitor == inv.variations[g].name)
                if(inv.variations[g].type != "add")
                  finalprice = parseInt(inv.variations[g].priceChange);
             };
             
           
          };

            for (var h = inv.setvariations.length - 1; h >= 0; h--) {
             var comparitor = inv.setvariations[h];
       
                for (var g = inv.variations.length - 1; g >= 0; g--) {
               if(comparitor == inv.variations[g].name)
                if(inv.variations[g].type == "add")
                  finalprice += parseInt(inv.variations[g].priceChange);
             };
           
          };
          //check for variations


          itemscheme.attr("inventory-cartid", inv.setid).attr("price", finalprice).attr("quantity", inv.setquantity);
        $(".add-fields", itemscheme).append("<h1>" + inv.name + "</h1>").append("<h2> " + (finalprice).formatMoney(2,".", ",") + " </h2>").append( inv.setvariations.length > 0 ? '<p>Additional information : ' + inv.setvariations.join(",") + '</p>' : "").append('<p>Quantity</p><p><input type="number" placeholder="quantity" class="cart-quantity-update" value="' + inv.setquantity + '" min="1" max="' + inv.quantity +'"/><button class="remove-from-cart"><i class="fa fa-trash"></i> Remove from cart</button> <a href="' + inv.link +'">Open item</a></p>');
        //delte from cart as well
              //update price vars, add deletet button

              $(".cart-quantity-update" ,itemscheme).change(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
                cartitem.attr("quantity", $(this).val());
                $inventoryStandard.UpdateCart(cartitem.attr("inventory-cartid"), parseInt( $(this).val() ) );
                window["InventoryTallyCart"]();
              });

                 $(".remove-from-cart" ,itemscheme).click(function(){
                var cartitem = $(this).parents("[inventory-cartid]");
              cartitem.remove();
                $inventoryStandard.RemoveFromCart(cartitem.attr("inventory-cartid") );
                  window["InventoryTallyCart"]();
                 
                return false;
              });

              $(".inv-iframe-module .cart-items").append(itemscheme);

                var localslideshow = $('[uid="' + slideshow.attr("uid") + '"]').unslider({nav:false,keys:false,arrows:false});
                  localslideshow.on('unslider.change.local', function(event, index, slide) {
              //  console.log( $(this) );
                $(".nav-pager a", this).each(function(e,i){
                  if(index == e)
                      $(this).html(activepage.html());
                  else  
                  $(this).html(inactivepage.html());
                });

                return false;
              });
        };



        window["InventoryTallyCart"]();
    } 
  });

};


Inventory.prototype.saveLocal = function(key, data,decode){
    if(decode){
        window.localStorage[key] = JSON.stringify(data);
    } else window.localStorage[key] = data;

    if(window.localStorage['masterToken']){
        //send cart entirely
        //window.localStorage.inventoryData
            $.ajax({url:"https://www.orkiv.com/i/ext_js_api.php?backupSession=" + $inventoryStandard.accountid,type:"POST",data:{origin: window.location.href,sessionid:window.localStorage["inventoryID"], token:window.localStorage['masterToken'],payload:window.localStorage.inventoryData}, success:function(html){
                var data = JSON.parse(html);
                if(data.auth){
                    console.log("User data backed up");
                }
            }
        });
    }
}

Inventory.prototype.getLocal = function(key, decode){
    if(decode){
        return JSON.parse(window.localStorage[key]);
    } else return window.localStorage[key] 
}

Inventory.prototype.xFetch = function(url,payload,type,callback){
      var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText);

    } 
  };


  xhttp.open(type, url, true);

  if(payload){
    payload.owner = this.accountid;
    payload.jstoken = this.jstoken
    payload.client = window.localStorage['inventoryID'];
  }

  if(type == "POST"){
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(serialize(payload));
} else  xhttp.send();
}

Inventory.prototype.xFetchapi = function(url,payload,type,callback){
      var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        callback(xhttp.responseText);

    } 
  };


  xhttp.open(type, url, true);

  if(payload){
    payload.id = this.accountid;
    payload.key = this.jstoken
   // payload.client = window.localStorage['inventoryID'];
  }

  if(type == "POST"){
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(serialize(payload));
} else  xhttp.send();
}

