var s_iOffsetX=0;var s_iOffsetY=0;(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);$(window).resize(function(){sizeHandler();});function trace(szMsg){console.log(szMsg);}
function isIOS(){var iDevices=['iPad Simulator','iPhone Simulator','iPod Simulator','iPad','iPhone','iPod'];while(iDevices.length){if(navigator.platform===iDevices.pop()){s_bIsIphone=true;return true;}}
s_bIsIphone=false;return false;}
window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){if(window.matchMedia("(orientation: portrait)").matches){sizeHandler();}
if(window.matchMedia("(orientation: landscape)").matches){sizeHandler();}}
function getSize(Name){var size;var name=Name.toLowerCase();var document=window.document;var documentElement=document.documentElement;if(window["inner"+Name]===undefined){size=documentElement["client"+Name];}
else if(window["inner"+Name]!=documentElement["client"+Name]){var bodyElement=document.createElement("body");bodyElement.id="vpw-test-b";bodyElement.style.cssText="overflow:scroll";var divElement=document.createElement("div");divElement.id="vpw-test-d";divElement.style.cssText="position:absolute;top:-1000px";divElement.innerHTML="<style>@media("+name+":"+documentElement["client"+Name]+"px){body#vpw-test-b div#vpw-test-d{"+name+":7px!important}}</style>";bodyElement.appendChild(divElement);documentElement.insertBefore(bodyElement,document.head);if(divElement["offset"+Name]==7){size=documentElement["client"+Name];}
else{size=window["inner"+Name];}
documentElement.removeChild(bodyElement);}
else{size=window["inner"+Name];}
return size;};function getIOSWindowHeight(){var zoomLevel=document.documentElement.clientWidth/window.innerWidth;return window.innerHeight*zoomLevel;};function getHeightOfIOSToolbars(){var tH=(window.orientation===0?screen.height:screen.width)-getIOSWindowHeight();return tH>1?tH:0;};function sizeHandler(){window.scrollTo(0,1);if(!$("#canvas")){return;}
var h;var iOS=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?true:false);if(iOS){h=getIOSWindowHeight();}else{h=getSize("Height");}
var w=getSize("Width");s_iScaleFactor=Math.min((h/CANVAS_HEIGHT),(w/CANVAS_WIDTH));var destW=CANVAS_WIDTH*s_iScaleFactor;var destH=CANVAS_HEIGHT*s_iScaleFactor;var iAdd=0;if(destH<h){iAdd=h-destH;destH+=iAdd;destW+=iAdd*(CANVAS_WIDTH/CANVAS_HEIGHT);}else if(destW<w){iAdd=w-destW;destW+=iAdd;destH+=iAdd*(CANVAS_HEIGHT/CANVAS_WIDTH);}
var fOffsetY=((h/2)-(destH/2));var fOffsetX=((w/2)-(destW/2));var fGameInverseScaling=(CANVAS_WIDTH/destW);if(fOffsetX*fGameInverseScaling<-EDGEBOARD_X||fOffsetY*fGameInverseScaling<-EDGEBOARD_Y){s_iScaleFactor=Math.min(h/(CANVAS_HEIGHT-(EDGEBOARD_Y*2)),w/(CANVAS_WIDTH-(EDGEBOARD_X*2)));destW=CANVAS_WIDTH*s_iScaleFactor;destH=CANVAS_HEIGHT*s_iScaleFactor;fOffsetY=(h-destH)/2;fOffsetX=(w-destW)/2;fGameInverseScaling=(CANVAS_WIDTH/destW);}
s_iOffsetX=(-1*fOffsetX*fGameInverseScaling);s_iOffsetY=(-1*fOffsetY*fGameInverseScaling);if(fOffsetY>=0){s_iOffsetY=0;}
if(fOffsetX>=0){s_iOffsetX=0;}
if(s_oInterface!==null){s_oInterface.refreshButtonPos(s_iOffsetX,s_iOffsetY);}
if(s_oMenu!==null){s_oMenu.refreshButtonPos(s_iOffsetX,s_iOffsetY);}
if(s_oHelpPanel!==null){s_oHelpPanel.refreshButtonPos(s_iOffsetX,s_iOffsetY);}
if(s_bMobile&&!s_bIsIphone){$("#canvas").css("width",destW+"px");$("#canvas").css("height",destH+"px");}else{s_oStage.canvas.width=destW;s_oStage.canvas.height=destH;var iScale=Math.min(destW/CANVAS_WIDTH,destH/CANVAS_HEIGHT);s_oStage.scaleX=s_oStage.scaleY=iScale;}
if(fOffsetY<0){$("#canvas").css("top",fOffsetY+"px");}else{$("#canvas").css("top","0px");}
$("#canvas").css("left",fOffsetX+"px");};function inIframe(){try{return window.self!==window.top;}catch(e){return true;}}
function createBitmap(oSprite,iWidth,iHeight){var oBmp=new createjs.Bitmap(oSprite);var hitObject=new createjs.Shape();if(iWidth&&iHeight){hitObject.graphics.beginFill("#fff").drawRect(-iWidth/2,-iHeight/2,iWidth,iHeight);}else{hitObject.graphics.beginFill("#ff0").drawRect(0,0,oSprite.width,oSprite.height);}
oBmp.hitArea=hitObject;return oBmp;}
function createSprite(oSpriteSheet,szState,iRegX,iRegY,iWidth,iHeight){if(szState!==null){var oRetSprite=new createjs.Sprite(oSpriteSheet,szState);}else{var oRetSprite=new createjs.Sprite(oSpriteSheet);}
var hitObject=new createjs.Shape();hitObject.graphics.beginFill("#000000").drawRect(-iRegX,-iRegY,iWidth,iHeight);oRetSprite.hitArea=hitObject;return oRetSprite;}
function randomFloatBetween(minValue,maxValue,precision){if(typeof(precision)==='undefined'){precision=2;}
return parseFloat(Math.min(minValue+(Math.random()*(maxValue-minValue)),maxValue).toFixed(precision));}
function shuffle(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue;}
return array;}
function formatTime(iTime){iTime/=1000;var iMins=Math.floor(iTime/60);var iSecs=iTime-(iMins*60);iSecs=parseFloat(iSecs).toFixed(1)
var szRet="";if(iMins<10){szRet+="0"+iMins+":";}else{szRet+=iMins+":";}
if(iSecs<10){szRet+="0"+iSecs;}else{szRet+=iSecs;}
return szRet;}
function degreesToRadians(iAngle){return iAngle*Math.PI/180;}
function checkRectCollision(bitmap1,bitmap2){var b1,b2;b1=getBounds(bitmap1,0.9);b2=getBounds(bitmap2,0.98);return calculateIntersection(b1,b2);}
function calculateIntersection(rect1,rect2){var dx,dy,r1={},r2={};r1.cx=rect1.x+(r1.hw=(rect1.width/2));r1.cy=rect1.y+(r1.hh=(rect1.height/2));r2.cx=rect2.x+(r2.hw=(rect2.width/2));r2.cy=rect2.y+(r2.hh=(rect2.height/2));dx=Math.abs(r1.cx-r2.cx)-(r1.hw+r2.hw);dy=Math.abs(r1.cy-r2.cy)-(r1.hh+r2.hh);if(dx<0&&dy<0){dx=Math.min(Math.min(rect1.width,rect2.width),-dx);dy=Math.min(Math.min(rect1.height,rect2.height),-dy);return{x:Math.max(rect1.x,rect2.x),y:Math.max(rect1.y,rect2.y),width:dx,height:dy,rect1:rect1,rect2:rect2};}else{return null;}}
function getBounds(obj,iTolerance){var bounds={x:Infinity,y:Infinity,width:0,height:0};if(obj instanceof createjs.Container){bounds.x2=-Infinity;bounds.y2=-Infinity;var children=obj.children,l=children.length,cbounds,c;for(c=0;c<l;c++){cbounds=getBounds(children[c],1);if(cbounds.x<bounds.x)bounds.x=cbounds.x;if(cbounds.y<bounds.y)bounds.y=cbounds.y;if(cbounds.x+cbounds.width>bounds.x2)bounds.x2=cbounds.x+cbounds.width;if(cbounds.y+cbounds.height>bounds.y2)bounds.y2=cbounds.y+cbounds.height;}
if(bounds.x==Infinity)bounds.x=0;if(bounds.y==Infinity)bounds.y=0;if(bounds.x2==Infinity)bounds.x2=0;if(bounds.y2==Infinity)bounds.y2=0;bounds.width=bounds.x2-bounds.x;bounds.height=bounds.y2-bounds.y;delete bounds.x2;delete bounds.y2;}else{var gp,gp2,gp3,gp4,imgr={},sr;if(obj instanceof createjs.Bitmap){sr=obj.sourceRect||obj.image;imgr.width=sr.width*iTolerance;imgr.height=sr.height*iTolerance;}else if(obj instanceof createjs.Sprite){if(obj.spriteSheet._frames&&obj.spriteSheet._frames[obj.currentFrame]&&obj.spriteSheet._frames[obj.currentFrame].image){var cframe=obj.spriteSheet.getFrame(obj.currentFrame);imgr.width=cframe.rect.width;imgr.height=cframe.rect.height;imgr.regX=cframe.regX;imgr.regY=cframe.regY;}else{bounds.x=obj.x||0;bounds.y=obj.y||0;}}else{bounds.x=obj.x||0;bounds.y=obj.y||0;}
imgr.regX=imgr.regX||0;imgr.width=imgr.width||0;imgr.regY=imgr.regY||0;imgr.height=imgr.height||0;bounds.regX=imgr.regX;bounds.regY=imgr.regY;gp=obj.localToGlobal(0-imgr.regX,0-imgr.regY);gp2=obj.localToGlobal(imgr.width-imgr.regX,imgr.height-imgr.regY);gp3=obj.localToGlobal(imgr.width-imgr.regX,0-imgr.regY);gp4=obj.localToGlobal(0-imgr.regX,imgr.height-imgr.regY);bounds.x=Math.min(Math.min(Math.min(gp.x,gp2.x),gp3.x),gp4.x);bounds.y=Math.min(Math.min(Math.min(gp.y,gp2.y),gp3.y),gp4.y);bounds.width=Math.max(Math.max(Math.max(gp.x,gp2.x),gp3.x),gp4.x)-bounds.x;bounds.height=Math.max(Math.max(Math.max(gp.y,gp2.y),gp3.y),gp4.y)-bounds.y;}
return bounds;}
function NoClickDelay(el){this.element=el;if(window.Touch)this.element.addEventListener('touchstart',this,false);}
NoClickDelay.prototype={handleEvent:function(e){switch(e.type){case 'touchstart':this.onTouchStart(e);break;case 'touchmove':this.onTouchMove(e);break;case 'touchend':this.onTouchEnd(e);break;}},onTouchStart:function(e){e.preventDefault();this.moved=false;this.element.addEventListener('touchmove',this,false);this.element.addEventListener('touchend',this,false);},onTouchMove:function(e){this.moved=true;},onTouchEnd:function(e){this.element.removeEventListener('touchmove',this,false);this.element.removeEventListener('touchend',this,false);if(!this.moved){var theTarget=document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY);if(theTarget.nodeType==3)theTarget=theTarget.parentNode;var theEvent=document.createEvent('MouseEvents');theEvent.initEvent('click',true,true);theTarget.dispatchEvent(theEvent);}}};(function(){var hidden="hidden";if(hidden in document)
document.addEventListener("visibilitychange",onchange);else if((hidden="mozHidden")in document)
document.addEventListener("mozvisibilitychange",onchange);else if((hidden="webkitHidden")in document)
document.addEventListener("webkitvisibilitychange",onchange);else if((hidden="msHidden")in document)
document.addEventListener("msvisibilitychange",onchange);else if('onfocusin'in document)
document.onfocusin=document.onfocusout=onchange;else
window.onpageshow=window.onpagehide=window.onfocus=window.onblur=onchange;function onchange(evt){var v='visible',h='hidden',evtMap={focus:v,focusin:v,pageshow:v,blur:h,focusout:h,pagehide:h};evt=evt||window.event;if(evt.type in evtMap){document.body.className=evtMap[evt.type];}else{document.body.className=this[hidden]?"hidden":"visible";if(document.body.className==="hidden"){s_oMain.stopUpdate();}else{s_oMain.startUpdate();}}}})();function playSound(szSound,iVolume,iLoop){if(DISABLE_SOUND_MOBILE===false||s_bMobile===false){var oPointer=createjs.Sound.play(szSound,{loop:iLoop,volume:iVolume});return oPointer;}
return null;}
function stopSound(oPointer){if(DISABLE_SOUND_MOBILE===false||s_bMobile===false){oPointer.stop();}}
function setVolume(oPointer,iVolume){if(DISABLE_SOUND_MOBILE===false||s_bMobile===false){oPointer.volume=iVolume;}}
function setMute(oPointer,bMute){if(DISABLE_SOUND_MOBILE===false||s_bMobile===false){oPointer.setMute(bMute);}}
function ctlArcadeResume(){if(s_oMain!==null){s_oMain.startUpdate();}}
function ctlArcadePause(){if(s_oMain!==null){s_oMain.stopUpdate();}}
function getParamValue(paramName){var url=window.location.search.substring(1);var qArray=url.split('&');for(var i=0;i<qArray.length;i++)
{var pArr=qArray[i].split('=');if(pArr[0]==paramName)
return pArr[1];}}
function distanceV2(oVec1,oVec2){var iDx=oVec1.x-oVec2.x;var iDy=oVec1.y-oVec2.y;var fdistance=Math.sqrt((iDx*iDx)+(iDy*iDy));return fdistance;}
function randomRange(fMin,fMax){var fRandom=Math.floor(Math.random()*(fMax-fMin))+fMin;return fRandom;};function saveItem(szItem,oValue){localStorage.setItem(szItem,oValue);}
function getItem(szItem){return localStorage.getItem(szItem);}
function clearAllItem(){localStorage.clear();}
function centerBetweenPointsV2(v1,v2){var vTmp=new CVector2();vTmp.set((v1.getX()+v2.getX())*0.5,(v1.getY()+v2.getY())*0.5);return vTmp;}
function perpProductV2(u,v){return(u.getX()*v.getY()-u.getY()*v.getX());}
function dotProductV2(v1,v2){return(v1.getX()*v2.getX()+v1.getY()*v2.getY());}
function inSegment(P,S){if(S.getPointA().x!=S.getPointB().getX()){if(S.getPointA().getX()<=P.getX()&&P.getX()<=S.getPointB().getX())
return 1;if(S.getPointA().getX()>=P.getX()&&P.getX()>=S.getPointB().getX())
return 1;}
else{if(S.getPointA().getY()<=P.getY()&&P.getY()<=S.getPointB().getY())
return 1;if(S.getPointA().getY()>=P.getY()&&P.getY()>=S.getPointB().getY())
return 1;}
return 0;}
function intersect2D_Segments(S1,S2,I0,I1)
{var u=new CVector2();var v=new CVector2();var w=new CVector2();u.set(S1.getPointB().getX()-S1.getPointA().getX(),S1.getPointB().getY()-S1.getPointA().getY());v.set(S2.getPointB().getX()-S2.getPointA().getX(),S2.getPointB().getY()-S2.getPointA().getY());w.set(S1.getPointA().getX()-S2.getPointA().getX(),S1.getPointA().getY()-S2.getPointA().getY());var D=perpProductV2(u,v);if(Math.abs(D)<0.00000001){var du=dotProductV2(u,u);var dv=dotProductV2(v,v);if(du==0&&dv==0){if(S1.getPointA().getX()!=S2.getPointA().getX()||S1.getPointA().getY()!=S2.getPointA().getY())
return 0;I0=S1.getPointA();return 1;}
if(du==0){if(inSegment(S1.getPointA(),S2)==0)
return 0;I0=S1.getPointA();return 1;}
if(dv==0){if(inSegment(S2.getPointA(),S1)==0)
return 0;I0=S2.getPointA();return 1;}
var t0,t1;var w2=new CVector2();w2.set(S1.getPointB().getX()-S2.getPointA().getX(),S1.getPointB().getY()-S2.getPointA().getY());if(v.getX()!=0){t0=w.getX()/v.getX();t1=w2.getX()/v.getX();}
else{t0=w.getY()/v.getY();t1=w2.getY()/v.getY();}
if(t0>t1){var t=t0;t0=t1;t1=t;}
if(t0>1||t1<0){return 0;}
t0=t0<0?0:t0;t1=t1>1?1:t1;if(t0==t1){I0.set(S2.getPointA().getX()+t0*v.getX(),S2.getPointA().getY()+t0*v.getY())
return 1;}
I0.set(S2.getPointA().getX()+t0*v.getX(),S2.getPointA().getY()+t0*v.getY());I1.set(S2.getPointA().getX()+t1*v.getX(),S2.getPointA().getY()+t1*v.getY());return 2;}
var sI=perpProductV2(v,w)/D;if(sI<0||sI>1)
return 0;var tI=perpProductV2(u,w)/D;if(tI<0||tI>1)
return 0;I0.set(S1.getPointA().getX()+sI*u.getX(),S1.getPointA().getY()+sI*u.getY());trace("####################");trace("S1.getPointA().getX() + sI * u.x: "+I0.getX());return 1;}
function getRandomColor(){var iRandR=Math.floor((Math.random()*127)+255)-127;var iRandG=Math.floor((Math.random()*127)+255)-127;var iRandB=Math.floor((Math.random()*127)+255)-127;return "rgba("+iRandR+","+iRandG+","+iRandB+",1)";}
function colorLuminance(hex,lum){hex=String(hex).replace(/[^0-9a-f]/gi,'');if(hex.length<6){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];}
lum=lum||0;var rgb="#",c,i;for(i=0;i<3;i++){c=parseInt(hex.substr(i*2,2),16);c=Math.round(Math.min(Math.max(0,c+(c*lum)),255)).toString(16);rgb+=("00"+c).substr(c.length);}
return rgb;}
function linearLerp(a,b,u){return(1-u)*a+u*b;};function colorLerpShape(oShape,oStart,oEnd,iWait,iDuration,oShapeFunc,oEase,aEdges,szProperties,oCallFunc){var oLerp=oStart;var oColor={};var oTween=createjs.Tween.get(oLerp,{override:true}).wait(iWait).to({lerp:oEnd.lerp},iDuration,oEase).call(function(){if(oCallFunc!==null){oCallFunc();}
createjs.Tween.removeTweens(oTween);}).addEventListener("change",function(){var r=parseInt(linearLerp(oStart.r,oEnd.r,oLerp.lerp));var g=parseInt(linearLerp(oStart.g,oEnd.g,oLerp.lerp));var b=parseInt(linearLerp(oStart.b,oEnd.b,oLerp.lerp));oColor[szProperties]='rgba('+r+','+g+','+b+','+1+')';oShapeFunc(aEdges,oColor);})}
function hexToRgb(hex){var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null;}
function BoundingBoxEdge(aEdge){var fMinX=aEdge[0].getPointA().getX();var fMinY=aEdge[0].getPointA().getY();var fMaxX=aEdge[0].getPointA().getX();var fMaxY=aEdge[0].getPointA().getY();for(var i=1;i<aEdge.length;i++){if(aEdge[i].getPointA().getX()<fMinX){fMinX=aEdge[i].getPointA().getX();}else if(aEdge[i].getPointA().getX()>fMaxX){fMaxX=aEdge[i].getPointA().getX();}
if(aEdge[i].getPointA().getY()<fMinY){fMinY=aEdge[i].getPointA().getY();}else if(aEdge[i].getPointA().getY()>fMaxY){fMaxY=aEdge[i].getPointA().getY();}}
return{xMin:fMinX,yMin:fMinY,xMax:fMaxX,yMax:fMaxY};}
function BoundingBox(aPoint){var fMinX=aPoint[0].x;var fMinY=aPoint[0].y;var fMaxX=aPoint[0].x;var fMaxY=aPoint[0].y;for(var i=1;i<aPoint.length;i++){if(aPoint[i].x<fMinX){fMinX=aPoint[i].x;}else if(aPoint[i].x>fMaxX){fMaxX=aPoint[i].x;}
if(aPoint[i].y<fMinY){fMinY=aPoint[i].y;}else if(aPoint[i].y>fMaxY){fMaxY=aPoint[i].y;}}
return{xMin:fMinX,yMin:fMinY,xMax:fMaxX,yMax:fMaxY};}