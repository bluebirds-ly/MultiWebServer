function $s(i,a){$g(i).style.display=a?'':'none';}
function getCookie(name){var strCookies = document.cookie;var cookieName = name + "=";var valueBegin, valueEnd, value;valueBegin = strCookies.indexOf(cookieName);if (valueBegin == -1) return null;valueEnd = strCookies.indexOf(";", valueBegin);if (valueEnd == -1)valueEnd = strCookies.length;value = strCookies.substring(valueBegin+cookieName.length,valueEnd);return unescape(value);}
function setCookie (name, value) {var argv = setCookie.arguments;var argc = setCookie.arguments.length;var path = (argc > 2) ? argv[2] : null;var expireDays = (argc > 3) ? argv[3] : 365;var domain = (argc > 4) ? argv[4] : ".4399.com";var secure = (argc > 5) ? argv[5] : false;var date=new Date();date.setTime(date.getTime()+expireDays*24*3600*1000);deleteCookie (name);document.cookie = name + "=" +  escape(value) + ((expireDays == null) ? "" : ("; expires=" + date.toGMTString())) + ((path == null) ? "" : ("; path=" + path));}
//带domain参数的，针对news跨域情况处理
function setCookie2 (name, value) {var argv = setCookie2.arguments;var argc = setCookie2.arguments.length;var path = (argc > 2) ? argv[2] : null;var expireDays = (argc > 3) ? argv[3] : 365;var domain = (argc > 4) ? argv[4] : ".4399.com";var secure = (argc > 5) ? argv[5] : false;var date=new Date();date.setTime(date.getTime()+expireDays*24*3600*1000);deleteCookie (name);document.cookie = name + "=" +  escape(value) + ((expireDays == null) ? "" : ("; expires=" + date.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ";domain=4399.com";}
function checkCookieExist(name){	if (getCookie(name))return true;else return false;}
function deleteCookie (name) {  var exp = new Date();  exp.setTime (exp.getTime() - 1); var cval = getCookie (name); document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();}
var hsgames_length=30;
function gethsgames(mark){var c=getCookie(mark);if(!c)return new Array();var t=c.split("|||");if(t[0]!=="4399.com")return new Array();t.shift();return t}
function getlastgame(){var a=document.location;a=a.href.replace(a.hash,'').replace(a.search,'').replace('?','');var c=a.split("/");a=c[c.length-1];a=a.substr(0,a.length-4);var b=[title,a];return b}
function ordergame(h){var c=new Array();for(var i in h){var ogame=h[i].split("||");c[i]=ogame}return c.sort(function(a,b){return b[2]-a[2]})}
function sethscookie(){var a=getlastgame();var b=gethsgames("cookie_hs");var c=false;for(var i in b){var ohsgame=b[i].split("||");if(ohsgame.slice(0,2).join()==a.join()){ohsgame[2]++;b[i]=ohsgame.join("||");c=true;break}}if(!c){a.push("0");b.unshift(a.join("||"));if(b.length>hsgames_length)b.pop()}b.unshift("4399.com");var d=b.join("|||");setCookie('cookie_hs',d,'/',999999)}
var wwwnum = 25;//限制www的显示25个
var svid = getCookie("_4399stats_vid");
function showlink(str){
	var strGamePic;
	var intid = 0;
	if(!isNaN(str)){
		intid = parseInt(str);
	}else if(!isNaN(str.replace("_",""))){
		intid = parseInt(str.split("_")[0]);
	}
	if (intid == 0){
		str = str.replace("indexhtml","").replace("indexhtm","").replace("indexphp","");
		if(str.indexOf("ssjj4399com")!=-1){str="ssjj4399com";}
		if(str.indexOf("lds4399com")!=-1){str="lds4399com";}
		if(str.indexOf("news4399comcsbh")!=-1){str="news4399comcsbh";}
		if(str.indexOf("xp4399com")!=-1){str="xp4399com";}
		if(str.indexOf("sjsj4399com")!=-1){str="sjsj4399com";}
		if(str.indexOf("news4399comhxjy")!=-1){str="news4399comhxjy";}
		if(str.indexOf("news4399comaoqi")!=-1){str="news4399comaoqi";}
		if(str.indexOf("my4399comyxpm")!=-1){str="my4399comyxpm";}
		if(str.indexOf("news4399comtank")!=-1){str="news4399comtank";}
		if(str.indexOf("news4399comjlp")!=-1){str="news4399comjlp";}
		if(str.indexOf("my4399comyxmsdzls")!=-1){str="my4399comyxmsdzls";}		
		strGamePic = "http://imga999.5054399.com/upload_pic/minilogo/"+str+".jpg";
	}else{
		var sx = (intid % 5) + 1;
		strGamePic = "http://imga"+sx+".5054399.com/upload_pic/minilogo/"+intid+".jpg";
	}
	return strGamePic;
}
function statPlayed(f){try{new Image().src = "http://played.5054399.com/trace.js?from="+f;}catch(ex){}return true;}
function readid(str){var stater = str;if(!isNaN(str)){stater = parseInt(str);}else if(!isNaN(str.replace("_",""))){stater = str.split("_")[0];}return stater;}
//处理www的
function editCookie(deleteid,sname){var aa = confirm("确实要删除 "+sname+" 的游戏记录吗?");if(aa==true){var a="4399.com";var b=ordergame(gethsgames("cookie_hs"));if(b.length>0){for(var i in b){if(b[i][1]!=deleteid){if(a==""){a=b[i][0]+"||"+b[i][1]+"||"+b[i][2];}else{a=a+"|||"+b[i][0]+"||"+b[i][1]+"||"+b[i][2];}}}}setCookie('cookie_hs',a,'/',999999);}}
$("#hscontentdiv a").live("mouseenter",function(){$("#hscontentdiv span").removeClass('clo');$(this).next("span").addClass('clo');});
//处理news的
function isIE6(){return !!window.ActiveXObject && !window.XMLHttpRequest;}
function editCookie2(deleteid,sname){var aa = confirm("确实要删除 "+sname+" 的游戏记录吗?");if(aa==true){var a="4399.com";var b=ordergame(gethsgames("global_hs"));if(b.length>0){for(var i in b){var simplelink = b[i][1].replace(/\//g,"").replace(/\./g,"");if(simplelink!=deleteid){if(a==""){a=b[i][0]+"||"+b[i][1]+"||"+b[i][2];}else{a=a+"|||"+b[i][0]+"||"+b[i][1]+"||"+b[i][2];}}}}setCookie2('global_hs',a,'/',999999);}}
var hsfast=false;
var laststr = "-1";
function showhsgames(){
	var a="";
	var wwwi = 0;
	var b=gethsgames("cookie_hs");
	var mynews = gethsgames("global_hs");
	var combins = ordergame(b.concat(mynews));
	if(combins.length>0){
		$("#hscontentdiv span").removeClass('clo');
		for(var combin in combins){
			var slink = combins[combin][1];
			var sname = combins[combin][0];
			if(slink && sname){
				if(slink.indexOf("4399.com")>=0){
					var simplelink = slink.replace(/\//g,"").replace(/\./g,"");
					var hsgamelink="http://"+slink;
					var controlname = 'close'+simplelink;
					hsgamelink = hsgamelink.replace("..",".");
					a+="<a href='"+hsgamelink+"' title='玩了"+(++combins[combin][2])+"次,鼠标点击右侧删除图标可以从记录中删掉此游戏记录' onclick='return statPlayed(\""+svid+"_"+readid(simplelink)+"\");'><img src='"+showlink(simplelink)+"' onerror='this.src=\""+img404()+"\"'/>"+combins[combin][0]+"</a><span onclick='editCookie2(\""+simplelink+"\",\""+sname+"\")' id='"+controlname+"'>&nbsp;</span>";
				}else{
					if(wwwi<wwwnum){
						var hsgamelink=slink;
						var controlname = 'close'+slink;
						if(hsgamelink){
							if(hsgamelink.indexOf("_")){
								var hsgamelinks = hsgamelink.split("_");
								if(hsgamelinks.length>0){
									hsgamelink = hsgamelinks[0];
								}
							}
						}
						hsgamelink = hsgamelink.replace("aa","");
						hsgamelink += '.htm';
						hsgamelink = hsgamelink.replace("..",".");
						a+="<a href='/flash/"+hsgamelink+"' title='玩了"+(++combins[combin][2])+"次,鼠标点击右侧删除图标可以从记录中删掉此游戏记录' onclick='return statPlayed(\""+svid+"_"+readid(slink)+"\");'><img src='"+showlink(slink)+"' onerror='this.src=\""+img404()+"\"'/>"+combins[combin][0]+"</a><span onclick='editCookie(\""+slink+"\",\""+sname+"\")' id='"+controlname+"'>&nbsp;</span>";
					}
					wwwi++;
				}
			}
		}
		$g('myhistory').style.display='block';
		var nowstr = '<div id="hscontentdiv">'+a+'</div>';
		if(laststr!=nowstr){
			$g('hscontent').innerHTML=nowstr;
			laststr = nowstr; 
		}
		if($g('hscontent').scrollWidth>$g('hscontent').offsetWidth){
			$g('hscontent').style.width=($g('myhistory').offsetWidth-210)+"px";
			$s('hsb',1);
		}
	}else{
		$g('myhistory').style.display='none';
	}
	$g('hsl').onmouseover=function(){hsm(1,0)};
	$g('hsl').onmouseout=function(){hsm(1,1)};
	$g('hsl').onmousedown=function(){hsfast=true};
	$g('hsl').onmouseup=function(){hsfast=false};
	$g('hsr').onmouseover=function(){hsm(0,0)};
	$g('hsr').onmouseout=function(){hsm(0,1)};
	$g('hsr').onmousedown=function(){hsfast=true};
	$g('hsr').onmouseup=function(){hsfast=false};
	window.setTimeout(function(){showhsgames()},5000);
}
function img404(){return "http://imga.5054399.com/upload_pic/minilogo/def.jpg";}
function hsm(f,s){if($g('hscontent').scrollLeft=="0"){if($g('hsl').className=="hsl_y"){$g('hsl').className="hsl_n";}}else{if($g('hsl').className=="hsl_n"){$g('hsl').className="hsl_y";}}if($g('hscontent').scrollLeft+$g('hscontent').offsetWidth>=$g('hscontent').scrollWidth){if($g('hsr').className=="hsr_y"){$g('hsr').className="hsr_n";$(".mask").css("display","none");}}else{if($g('hsr').className=="hsr_n"){$g('hsr').className="hsr_y";if(!isIE6()){$(".mask").css("display","block");}}}if(s){clearTimeout(hst);}else{$g('hscontent').scrollLeft+=hsfast?f?-10:10:f?-3:3;hst=window.setTimeout(function(){hsm(f,s)},20)}}
function hsClear(){if (confirm("确定清空‘我玩过的游戏’吗？")){setCookie('cookie_hs','','/',999999);setCookie2('global_hs','','/',999999);$g('myhistory').style.display='none';}}
function webgametab(num){
	if(num==2){
		document.getElementById("webgame1").style.display = "none";
		document.getElementById("webgame2").style.display = "block";
		document.getElementById("webgame3").innerHTML = '<a href="" class="up_1" onclick="webgametab(1);return false;"></a><a href="" class="do_1 don" onclick="webgametab(2);return false;"></a>';
		document.getElementById("webgame2").innerHTML = document.getElementById("webgame2").innerHTML.replace(/lz_src/g,"src");
	}else{
		document.getElementById("webgame1").style.display = "block";
		document.getElementById("webgame2").style.display = "none";
		document.getElementById("webgame3").innerHTML = '<a href="" class="up_1 uon" onclick="webgametab(1);return false;"></a><a href="" class="do_1" onclick="webgametab(2);return false;"></a>';
	}
}
//滑过标题展开
function yopentab(num){for(var a=0;a<10;a++){if(a==num){document.getElementById("yopentab"+a).style.display = "none";document.getElementById("yopentabc"+a).style.display = "block";	}else{document.getElementById("yopentab"+a).style.display = "block";document.getElementById("yopentabc"+a).style.display = "none";}}}
function zopentab(num){for(var a=0;a<10;a++){if(a==num){document.getElementById("zopentab"+a).style.display = "none";document.getElementById("zopentabc"+a).style.display = "block";	}else{document.getElementById("zopentab"+a).style.display = "block";document.getElementById("zopentabc"+a).style.display = "none";}}}
function ShowTag2(id){if(id=="zph"){$g("zph").className = "phone ran_on";$g("yph").className = "";$g("zphl").style.display = "block";document.getElementById("zphl").innerHTML = document.getElementById("zphl").innerHTML.replace(/lz_src/g,"src");$g("yphl").style.display = "none";}else{$g("zph").className = "phone";$g("yph").className = "ran_on";$g("zphl").style.display = "none";$g("yphl").style.display = "block";}}
function ShowTag22(id){if(id=="webgame"){$g("webgametabs").className = "tab_on";$g("webgametabsi").style.display = "block";$g("dongmantabs").className = '';$g("dongmantabsi").style.display = "none";$g("webgamediv").style.display = "block";$g("dongmandiv").style.display = "none";}else{$g("webgametabs").className = "";$g("webgametabsi").style.display = "none";$g("dongmantabs").className = "tab_on";$g("dongmantabsi").style.display = "block";document.getElementById("dongman1").innerHTML = document.getElementById("dongman1").innerHTML.replace(/lz_src/g,"src");$g("webgamediv").style.display = "none";$g("dongmandiv").style.display = "block";}}
function specialcommendtab(num){
	if(num==2){
		document.getElementById("specialcommend1").style.display = "none";
		document.getElementById("specialcommend2").style.display = "block";
		document.getElementById("specialcommend3").innerHTML = '<a href="" class="up_1" onclick="specialcommendtab(1);return false;"></a><a href="" class="do_1 don" onclick="specialcommendtab(2);return false;"></a>';
		document.getElementById("specialcommend2").innerHTML = document.getElementById("specialcommend2").innerHTML.replace(/lz_src/g,"src");
	}else{
		document.getElementById("specialcommend1").style.display = "block";
		document.getElementById("specialcommend2").style.display = "none";
		document.getElementById("specialcommend3").innerHTML = '<a href="" class="up_1 uon" onclick="specialcommendtab(1);return false;"></a><a href="" class="do_1" onclick="specialcommendtab(2);return false;"></a>';
	}
}

/*横向滚动*/
var sina = {
	$: function(objName) {
		if ($g) {
			return eval('$g("' + objName + '")');
		} else {
			return eval('document.all.' + objName);
		}
	},
	isIE: navigator.appVersion.indexOf("MSIE") != -1 ? true: false,
	addEvent: function(l, i, I) {
		if (l.attachEvent) {
			l.attachEvent("on" + i, I);
		} else {
			l.addEventListener(i, I, false);
		}
	},
	delEvent: function(l, i, I) {
		if (l.detachEvent) {
			l.detachEvent("on" + i, I);
		} else {
			l.removeEventListener(i, I, false);
		}
	},
	readCookie: function(O) {
		var o = "",
		l = O + "=";
		if (document.cookie.length > 0) {
			var i = document.cookie.indexOf(l);
			if (i != -1) {
				i += l.length;
				var I = document.cookie.indexOf(";", i);
				if (I == -1) I = document.cookie.length;
				o = unescape(document.cookie.substring(i, I));
			}
		};
		return o;
	},
	writeCookie: function(i, l, o, c) {
		var O = "",
		I = "";
		if (o != null) {
			O = new Date((new Date).getTime() + o * 3600000);
			O = "; expires=" + O.toGMTString();
		};
		if (c != null) {
			I = ";domain=" + c;
		};
		document.cookie = i + "=" + escape(l) + O + I;
	},
	readStyle: function(I, l) {
		if (I.style[l]) {
			return I.style[l];
		} else if (I.currentStyle) {
			return I.currentStyle[l];
		} else if (document.defaultView && document.defaultView.getComputedStyle) {
			var i = document.defaultView.getComputedStyle(I, null);
			return i.getPropertyValue(l);
		} else {
			return null;
		}
	}
}; //滚动图片构造函数
//UI&UE Dept. mengjia
//080623
function ScrollPic(scrollContId, arrLeftId, arrRightId) {
	this.scrollContId = scrollContId;
	this.arrLeftId = arrLeftId;
	this.arrRightId = arrRightId;
	this.pageWidth = 0;
	this.frameWidth = 0;
	this.speed = 10;
	this.space = 10;
	this.autoPlay = true;
	this.autoPlayTime = 5;
	var _autoTimeObj, _scrollTimeObj, _state = "ready", _picDownload = false;
	this.stripDiv = document.createElement("div");
	this.listDiv01 = document.createElement("ul");
	this.listDiv02 = document.createElement("ul");
	if (!ScrollPic.childs) {
		ScrollPic.childs = [];
	};
	this.ID = ScrollPic.childs.length;
	ScrollPic.childs.push(this);
	this.initialize = function() {
		if (!this.scrollContId) {
			throw new Error("必须指定scrollContId.");
			return
		};
		this.scrollContDiv = $g(this.scrollContId);
		if (!this.scrollContDiv) {
			throw new Error("scrollContId不是正确的对象.(scrollContId = \"" + this.scrollContId + "\")");
			return
		};
		this.scrollContDiv.style.width = this.frameWidth + "px";
		this.scrollContDiv.style.overflow = "hidden";
		this.listDiv01.innerHTML = this.listDiv02.innerHTML = this.scrollContDiv.innerHTML;
		this.scrollContDiv.innerHTML = "";
		this.scrollContDiv.appendChild(this.stripDiv);
		this.stripDiv.appendChild(this.listDiv01);
		this.stripDiv.appendChild(this.listDiv02);
		this.stripDiv.style.overflow = "hidden";
		this.stripDiv.style.zoom = "1";
		this.stripDiv.style.width = "32766px";
		this.stripDiv.style.height = "144px";
		this.listDiv01.className = "ulleft";
		this.listDiv02.className = "ulleft";
		sina.addEvent(this.scrollContDiv, "mouseover", Function("ScrollPic.childs[" + this.ID + "].stop()"));
		sina.addEvent(this.scrollContDiv, "mouseout", Function("ScrollPic.childs[" + this.ID + "].play()"));
		if (this.arrLeftId) {
			this.arrLeftObj = $g(this.arrLeftId);
			if (this.arrLeftObj) {
				sina.addEvent(this.arrLeftObj, "mousedown", Function("ScrollPic.childs[" + this.ID + "].rightMouseDown()"));
				sina.addEvent(this.arrLeftObj, "mouseup", Function("ScrollPic.childs[" + this.ID + "].rightEnd()"));
				sina.addEvent(this.arrLeftObj, "mouseout", Function("ScrollPic.childs[" + this.ID + "].rightEnd()"))
			}
		};
		if (this.arrRightId) {
			this.arrRightObj = $g(this.arrRightId);
			if (this.arrRightObj) {
				sina.addEvent(this.arrRightObj, "mousedown", Function("ScrollPic.childs[" + this.ID + "].leftMouseDown()"));
				sina.addEvent(this.arrRightObj, "mouseup", Function("ScrollPic.childs[" + this.ID + "].leftEnd()"));
				sina.addEvent(this.arrRightObj, "mouseout", Function("ScrollPic.childs[" + this.ID + "].leftEnd()"))
			}
		};
		if (this.autoPlay) {
			this.play()
		}
	};
	this.leftMouseDown = function() {
		if (_state != "ready") {
			return
		};
		_state = "floating";
		if (!_picDownload){
			var arrImg=this.scrollContDiv.getElementsByTagName("IMG");
			for (var j=11;j<arrImg.length;j++){
				if (arrImg[j].name!=""){
					arrImg[j].src = arrImg[j].name;
				}
			}
			_picDownload = true;
		}
		_scrollTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].moveLeft()", this.speed)
	};
	this.rightMouseDown = function() {
		if (_state != "ready") {
			return
		};
		_state = "floating";
		if (!_picDownload){
			var arrImg=this.scrollContDiv.getElementsByTagName("IMG");
			for (var j=11;j<arrImg.length;j++){
				if (arrImg[j].name!=""){
					arrImg[j].src = arrImg[j].name;
				}
			}
			_picDownload = true;
		}
		_scrollTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].moveRight()", this.speed)
	};
	this.moveLeft = function() {
		if (this.scrollContDiv.scrollLeft + this.space >= this.listDiv01.scrollWidth) {
			this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + this.space - this.listDiv01.scrollWidth
		} else {
			this.scrollContDiv.scrollLeft += this.space
		};
	};
	this.moveRight = function() {
		if (this.scrollContDiv.scrollLeft - this.space <= 0) {
			this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth + this.scrollContDiv.scrollLeft - this.space
		} else {
			this.scrollContDiv.scrollLeft -= this.space
		};
	};
	this.leftEnd = function() {
		if (_state != "floating") {
			return
		};
		_state = "stoping";
		clearInterval(_scrollTimeObj);
		var fill = this.pageWidth - this.scrollContDiv.scrollLeft % this.pageWidth;
		this.move(fill)
	};
	this.rightEnd = function() {
		if (_state != "floating") {
			return
		};
		_state = "stoping";
		clearInterval(_scrollTimeObj);
		var fill = -this.scrollContDiv.scrollLeft % this.pageWidth;
		this.move(fill)
	};
	this.move = function(num, quick) {
		var thisMove = num / 5;
		if (!quick) {
			if (thisMove > this.space) {
				thisMove = this.space
			};
			if (thisMove < -this.space) {
				thisMove = -this.space
			}
		};
		if (Math.abs(thisMove) < 1 && thisMove != 0) {
			thisMove = thisMove >= 0 ? 1 : -1
		} else {
			thisMove = Math.round(thisMove)
		};
		var temp = this.scrollContDiv.scrollLeft + thisMove;
		if (thisMove > 0) {
			if (this.scrollContDiv.scrollLeft + thisMove >= this.listDiv01.scrollWidth) {
				this.scrollContDiv.scrollLeft = this.scrollContDiv.scrollLeft + thisMove - this.listDiv01.scrollWidth
			} else {
				this.scrollContDiv.scrollLeft += thisMove
			}
		} else {
			if (this.scrollContDiv.scrollLeft - thisMove <= 0) {
				this.scrollContDiv.scrollLeft = this.listDiv01.scrollWidth + this.scrollContDiv.scrollLeft - thisMove
			} else {
				this.scrollContDiv.scrollLeft += thisMove
			}
		};
		num -= thisMove;
		if (Math.abs(num) == 0) {
			_state = "ready";
			if (this.autoPlay) {
				this.play()
			};
			return
		} else {
			setTimeout("ScrollPic.childs[" + this.ID + "].move(" + num + "," + quick + ")", this.speed)
		}
	};
	this.next = function() {
		if (_state != "ready") {
			return
		};
		_state = "stoping";
		this.move(this.pageWidth, true)
	};
	this.play = function() {
		if (!this.autoPlay) {
			return
		};
		clearInterval(_autoTimeObj);
		_autoTimeObj = setInterval("ScrollPic.childs[" + this.ID + "].next()", this.autoPlayTime * 1000)
	};
	this.stop = function() {
		clearInterval(_autoTimeObj)
	};
	this.pageTo = function(num) {
		if (_state != "ready") {
			return
		};
		_state = "stoping";
		var fill = num * this.frameWidth - this.scrollContDiv.scrollLeft;
		this.move(fill, true)
	};
};
setCookie2('home4399',"yes",'/',5);

//status
function kstatus(){
	self.status="如果你喜欢本站，别忘了把本站的网址告诉给你身边的朋友哦！谢谢你的支持！";
	setTimeout("kstatus()",300);
}

kstatus();

function addBookmark(){
	var title="4399小游戏,中国最大的游戏平台, www.4399.com";
	var url="http://www.4399.com/";
	if(window.sidebar){
		window.sidebar.addPanel(title,url,'');
	}else{
		try{
			window.external.AddFavorite(url,title);
		}catch(e){
			alert("您的浏览器不支持该功能,请使用Ctrl+D收藏本页");
		}
	}
}

function addBookmark2(){
	var title="4399小游戏,中国最大的游戏平台, www.4399.com";
	var url="http://www.4399.com/?fav";
	if(window.sidebar){
		try{
			window.sidebar.addPanel(title,url,'');
		}catch(e){
			alert("您的浏览器不支持该功能,请使用Ctrl+D收藏本页");
		}
	}else{
		try{
			window.external.AddFavorite(url,title);
		}catch(e){
			alert("您的浏览器不支持该功能,请使用Ctrl+D收藏本页");
		}
	}
}

//登录相关代码
function showLoginMethod(){
    try{
		var lm = UniLogin.getUserLoginType();
		if(lm){
			lt = "您已使用"+lm+"登录";
		}
	}catch(e){
		var lt = "您已使用4399账号登录";
		var lm = UniLogin.getUserType();
		if(lm.indexOf('.qq_')!=-1){
			lt = "您已使用QQ登录";
		}else if(lm.indexOf('.weixin_')!=-1){
			lt = "您已使用微信登录";
		}else if(lm.indexOf('.weibo_')!=-1){
			lt = "您已使用微博登录";
		}
	}
    return lt;
}
function logoutCallBack(){unlogin();}
function loginCallBack(displayName, infoSpan){logined(displayName, infoSpan);}
function regCallBack(displayName, infoSpan){logined(displayName, infoSpan);}
function onlineInit(displayName, infoSpan){logined(displayName, infoSpan);}
function offlineInit(){unlogin();}
function logined(displayName, infoSpan){
	hasgetCNXH = 0;
	hasgetPlayed = 0;
	var uid = UniLogin.getUid();
	var uname = UniLogin.getDisplayNameText();
	if(uid>0){
		$("#login_tologin").hide();
		$("#login_toregister").hide();
		$("#logined").attr('href','http://u.4399.com/user/info');
		$("#logined2").attr('title',showLoginMethod());
		$("#logined").html('<img src="http://a.img4399.com/'+uid+'/small" /><span>'+uname+'</span><em class="ico_5"></em>');
		$("#logined2").html('<a href="http://u.4399.com/user/info"><img src="http://a.img4399.com/'+uid+'/small" /><span>'+uname+'</span><em class="ico_4"></em></a><a class="a_01" href="http://u.4399.com/user/info">个人中心</a><a class="a_02" href="http://my.4399.com/">4399游戏吧</a><a class="a_03" href="/special/19.htm">网页游戏大全</a><a class="a_04" href="http://my.4399.com/shoucang/">我的收藏盒</a><a class="quit" href="javascript:UniLogin.logout()" target="_self">退出</a>');
		$("#logined").show();
		$("#showword").hide();
		$("#reading1").hide();
		$(".morediv").attr("href","http://my.4399.com/shoucang/?m=Recommend");
		$("#moredivplay").html('<a class="dl" href="http://my.4399.com/shoucang/?m=PlayLog">更多</a>');
	}
}
function unlogin(){
	hasgetCNXH = 0;
	hasgetPlayed = 0;
	$("#login_tologin").show();
	$("#login_toregister").show();
	$("#logined").hide();
	$("#logined2").hide();
	$("#reading2").hide();
	$(".morediv").attr("href","http://my.4399.com/shoucang/?m=Recommend");
	$("#moredivplay").html('<a class="dl" href="http://my.4399.com/shoucang/?m=PlayLog">更多</a>');
}
function showlogineddiv(num){if(num==1){$("#logined2").show();}else{$("#logined2").hide();}}
try{
uloginProp = {};
uloginProp.qrLogin = "true";
uloginProp.expandFcmInput = "true";
uloginProp.appId = "www_home";
uloginProp.gameId = ""; //可以不设置
uloginProp.layout = "vertical";//横向为"horizontal", 纵向为"vertical"
uloginProp.layoutSelfAdapting = "false"; //可以不设置，缺省为"true",如果layout是horizontal，此值无效
uloginProp.displayMode = "popup";//嵌入式为embed，弹出式为"popup"
uloginProp.externalLogin = "qq";//不支持qq登录可以不设置
uloginProp.redirectUrl = "";//可以不设置, 如果postLoginHandler是redirect时需要设置
uloginProp.onlineInit= onlineInit;// 可以不设置, 如果postLoginHandler是callback时需要设置
uloginProp.loginCallback = loginCallBack;// 可以不设置, 如果postLoginHandler是callback时需要设置
uloginProp.postPageLoadCallback = function(divId){};
uloginProp.regCallback = regCallBack;// 可以不设置, 如果postLoginHandler是callback时需要设置
uloginProp.postPopupShowFunction = function(){};
uloginProp.errorCallback = function(msg) {}; // 登录失败时触发的回调
uloginProp.offlineInit = offlineInit;// 可以不设置, 如果postLoginHandler是callback时需要设置
uloginProp.logoutCallback = logoutCallBack;// 可以不设置, 如果postLoginHandler是callback时需要设置
UniLogin.setUnionLoginProps(uloginProp);
}catch(e){}

function getCNXH(){
	$.ajax({  
		url:'http://gprp.4399.com/cg/recommend_api.php?from=index&page_size=27&page_num=1&simple=1&timestamp='+new Date().getTime(),
		dataType:"jsonp",
		callbackParameter:"callback",
		timeout:2000,  
		success:function(data){
			var combine = new Array();
			//显示平台推荐,根据 recommends 顺序，去game_infos对象中寻找游戏信息
			for(var x in data.recommends){
				var row = data.game_infos[data.recommends[x]];
				var onegame = [data.recommends[x],row.name,row.url,row.pic];
				combine[x] = onegame;
			}
			if(combine.length<27){
				//合并自身推荐去重
				for(var i=0,j=0,ci,r={},c=[];ci=combine[i++]||basic_game_info[j++];){
					if(r[ci[0]])continue;
					r[ci[0]]=1;
					c.push(ci);
				}
				combine = c;
			}
			arr(combine);
		},  
		error:function(XMLHttpRequest, textStatus, errorThrown) {  
			//显示自己预设
			arr(basic_game_info);
		},  
		complete: function(XMLHttpRequest, textStatus) {}
	}); 
	hasgetCNXH = 1;
}

function arr(data){
	var tjstring = '<ul class="not_ul" id="repage1">';
	var tjindex = 0;
	var tjsrc;
	for(var x in data){
		if(tjindex<27){
			if(tjindex<9){tjsrc='src';}else{tjsrc='lz_src';}
			tjstring += '<li><a href="'+data[x][2]+'"><img '+tjsrc+'="'+data[x][3]+'" />'+data[x][1]+'</a></li>';
			if(tjindex==8){tjstring += '</ul><ul class="not_ul" id="repage2" style="display:none;">';}
			if(tjindex==17){tjstring += '</ul><ul class="not_ul" id="repage3" style="display:none;">';}
			tjindex++;
		}
	}
	tjstring += "</ul>";
	$('#tjgame').html(tjstring);
	tpage(1);
}

function tpage(num){
	var pre = 0;
	var nex = 0;
	var str = "";
	if(num==3){pre=2;nex=1;}else if(num==2){pre=1;nex=3;}else{pre=3;nex=2;}
	str = '<a class="p_up" href="" onclick="tpage('+pre+');return false;"></a>';
	str += '<div class="pag">';
	for(var a=1;a<4;a++){
		if(num==a){
			str += '<a class="p_on" href="" onclick="tpage('+a+');return false;"></a>';
			$("#repage"+a).show();
			$("#repage"+num).html(document.getElementById("repage"+num).innerHTML.replace(/lz_src/g,"src"));
		}else{
			$("#repage"+a).hide();
			str += '<a href="" onclick="tpage('+a+');return false;"></a>';
		}
	}
	str += '</div>';
	str += '<a class="p_do" href="" onclick="tpage('+nex+');return false;"></a>';
	$("#rel_pag").html(str);
}

//收藏
function getFavoiteList(){
	$.ajax({
		url:'http://gprp.4399.com/cg/collections.php?page_num=1&page_size=3&timestamp='+new Date().getTime(),
		dataType:"jsonp",
		callbackParameter:"callback",
		timeout:2000,  
		success:function(data){
			var combine = new Array();
			$("#reading3").hide();
			var totnum = data.total;
			if(totnum>0){
				$("#showword3").hide();
				$("#sclist").show();
			}else{
				$("#showword3").show();
				$("#sclist").hide();
			}
			//显示平台推荐,根据 played_gids 顺序，去 game_infos 对象中寻找游戏信息
			for(var x in data.games){
				var row = data.game_infos[data.games[x]];
				var onegame = [row.gid,row.name,row.url,row.pic];
				combine.push(onegame);
			}
			arrsc(combine);
		},  
		error:function(XMLHttpRequest, textStatus, errorThrown) {  
			//显示自己预设
			$("#reading3").hide();
			$("#retry3").show();
			$("#sclist").hide();
		},  
		complete: function(XMLHttpRequest, textStatus) {}
	}); 
}

function arrsc(data){
	var tjstring = '<ul class="not_ul">';
	var tjindex = 0;
	for(var x in data){
		if(tjindex<3){
			tjstring += '<li><a href="'+data[x][2]+'"><img src="'+data[x][3]+'" />'+data[x][1]+'</a></li>';
		}
	}
	tjstring += "</ul>";
	$('#sclist').html(tjstring);
}

//我玩过的游戏
function getPlayed(){
	getFavoiteList();
	$.ajax({
		url:'http://gprp.4399.com/cg/get_gamehistory.php?from=index&simple=true&page_size=18&page_number=1&timestamp='+new Date().getTime(),
		dataType:"jsonp",
		callbackParameter:"callback",
		timeout:2000,  
		success:function(data){
			var combine = new Array();
			var totnum = data.total;
			if(totnum>0){
				$("#showword").hide();
			}else{
				$("#showword").show();
			}
			$("#reading1").hide();
			//显示平台推荐,根据 played_gids 顺序，去 game_infos 对象中寻找游戏信息
			for(var x in data.played_gids){
				var row = data.game_infos[data.played_gids[x].gid];
				var onegame = [data.played_gids[x].gid,row.name,row.url,row.pic,0];
				combine[x] = onegame;
			}
			if(combine.length<18){
				//合并自身推荐去重
				for(var i=0,j=0,ci,r={},c=[];ci=combine[i++]||basic_game_info_play[j++];){
					if(r[ci[0]])continue;
					r[ci[0]]=1;
					c.push(ci);
				}
				combine = c;
			}
			arrplay(combine);
		},  
		error:function(XMLHttpRequest, textStatus, errorThrown) {  
			//显示自己预设
			arrplay(basic_game_info_play);
		},  
		complete: function(XMLHttpRequest, textStatus) {}
	}); 
	hasgetPlayed = 1;
}

function showcc(num){$("#cc"+num).css("display","block");}
function showgg(num){$("#cc"+num).css("display","none");}

function killgame(gid){
	$.ajax({
		url:'http://gprp.4399.com/cg/delete_history.php?gid='+gid+'&timestamp='+new Date().getTime(),
		dataType:"jsonp",
		callbackParameter:"callback",
		timeout:10000,  
		success:function(data){
			getPlayed();
		},  
		error:function(XMLHttpRequest, textStatus, errorThrown) {  
			alert('删除失败,请稍候重试');
		},  
		complete: function(XMLHttpRequest, textStatus) {}
	}); 
}
function arrplay(data){
	var tjstring = '<ul class="not_ul" id="repageplay1">';
	var tjindex = 0;
	var tjsrc;
	for(var x in data){
		if(tjindex<18){
			if(tjindex<9){tjsrc='src';}else{tjsrc='lz_src';}
			var ccid = "cc"+data[x][0];
			if(data[x][4]==1){
				tjstring += '<li><a href="'+data[x][2]+'">';
				tjstring += '<span class="i_rec"></span>';
			}else{
				tjstring += '<li onmouseover="showcc('+data[x][0]+');" onmouseout="showgg('+data[x][0]+');"><em class="i_close" id="'+ccid+'" onclick="killgame('+data[x][0]+');return false;"></em><a href="'+data[x][2]+'">';
			}
			tjstring += '<img '+tjsrc+'="'+data[x][3]+'" />'+data[x][1]+'</a></li>';
			if(tjindex==5){tjstring += '</ul><ul class="not_ul" id="repageplay2" style="display:none;">';}
			if(tjindex==11){tjstring += '</ul><ul class="not_ul" id="repageplay3" style="display:none;">';}
			tjindex++;
		}
	}
	tjstring += "</ul>";
	$('#tjgameplay').html(tjstring);
	tpageplay(1);
}

function tpageplay(num){
	var pre = 0;
	var nex = 0;
	var str = "";
	if(num==3){pre=2;nex=1;}else if(num==2){pre=1;nex=3;}else{pre=3;nex=2;}
	str = '<a class="p_up" href="" onclick="tpageplay('+pre+');return false;"></a>';
	str += '<div class="pag">';
	for(var a=1;a<4;a++){
		if(num==a){
			str += '<a class="p_on" href="" onclick="tpageplay('+a+');return false;"></a>';
			$("#repageplay"+a).show();
			$("#repageplay"+num).html(document.getElementById("repageplay"+num).innerHTML.replace(/lz_src/g,"src"));
		}else{
			$("#repageplay"+a).hide();
			str += '<a href="" onclick="tpageplay('+a+');return false;"></a>';
		}
	}
	str += '</div>';
	str += '<a class="p_do" href="" onclick="tpageplay('+nex+');return false;"></a>';
	$("#rel_pagplay").html(str);
}

//回顶部
function MoveLeftLayer() {
	var mytop = get_scroll_mytop();
	if(mytop > 800){$(".s-top").show();}else{$(".s-top").hide();}
    if ($(window).width()>1024){
        try{document.getElementById('__top_ico').style.display="block";}catch(e){}
    }else{
        try{document.getElementById('__top_ico').style.display="none";}catch(e){}
     }
}
function get_scroll_mytop(){
     if(typeof(window.pageYOffset) != "undefined") return window.pageYOffset;
     if(document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
     if(document.body) return document.body.scrollTop;
}
window.onscroll = MoveLeftLayer;
$(window).bind("resize", MoveLeftLayer);
window.onload = MoveLeftLayer;
/*换肤相关代码*/
var selectedskin = 0;
var currentskintype = 1;
var totcommendpage = Math.ceil(skincommendlistlength/12);
var totnewpage = Math.ceil(skinnewlistlength/12);
if(index4399skin<0 || index4399skin>skinnewlistlength-1){index4399skin=0;}
//只有默认皮肤下且有默认皮肤链接的才显示左右按钮
if(index4399skin==0 && defaultbackgroundlink){document.getElementById('defaultbglink').style.display="block";}else{document.getElementById('defaultbglink').style.display="none";}
var nowDialogId = null,dialog_w,dialog_h;
function showWin(id, woraname, word, w, h){if(nowDialogId){closeWin();}nowDialogId = id;dialog_w = w || $("#"+nowDialogId).width();dialog_h = h || $("#"+nowDialogId).height();var height = $(document).height();var w1 = $(window).width();var h1 = $(window).height();var sh = $(window).scrollTop();var str = '<div style="position:absolute;left:0;top:0;background: url(/images/index/ptlogin_mask.png) repeat scroll 0 0 rgba(0, 0, 0, 0);_background:url(about:blank);_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale, src=/images/index/ptlogin_mask.png);width:100%; height:'+height+'px; z-index:9999;" id="div_dialog">';$("body").append(str);$("#"+nowDialogId).fadeIn().css({"top":((h1-dialog_h)/2+sh)+"px","left":(w1-dialog_w)/2,"zIndex":"99999","position":"absolute"});$(window).bind("resize", change_dialog);$(window).bind("scroll", change_dialog);if(word && woraname){document.getElementById(woraname).innerHTML = word;}return false;}
function closeWin(){$("#div_dialog").remove();$("#"+nowDialogId).hide();$(window).unbind("resize",change_dialog);$(window).unbind("scroll",change_dialog);nowDialogId = null;return false;}
function change_dialog(){var height = $(document).height();var w1 = $(window).width();var h1 = $(window).height();var sh = $(window).scrollTop();if(height != $('#div_dialog').height()){$('#div_dialog').height(height);}$("#"+nowDialogId).css({"top":((h1-dialog_h)/2+sh)+"px","left":(w1-dialog_w)/2,"zIndex":"99999","position":"absolute"});return false;}
function setCookie3(name,value){var Days = 99999;var exp = new Date();exp.setTime(exp.getTime() + Days*24*60*60*1000);document.cookie = name + "="+ escape (value) + ";path=/;domain=.4399.com;expires=" + exp.toGMTString();}
function setSkin(type,index){
	selectedskin = index;
	currentskintype = type;
	if(type==1){
		$("#skincommend").html(getskinstr(type,skincommendlist,index));
	}else{
		$("#skinnew").html(getskinstr(type,skinnewlist,index));
	}
	//动态改变新样式
	var temskininfo = getcskininfo(index);
	$("#skincss").attr("href",temskininfo[0]);
	if(temskininfo[1]=="-"){
		if(defaultbackgroundimg){
			$("#skinbody").attr("style","background:url("+defaultbackgroundimg+") no-repeat top center;");
		}else{
			$("#skinbody").attr("style","");
		}
	}else{
		$("#skinbody").attr("style","background:url("+temskininfo[1]+") no-repeat top center;");
	}
	if(index==0 && defaultbackgroundlink){document.getElementById('defaultbglink').style.display="block";}else{document.getElementById('defaultbglink').style.display="none";}
}
function getskinstr(num,str,index){
	if(num==1){
		var skinpage = "skincommendpage";
		var strlength = skincommendlistlength;
		var ttpage = totcommendpage;
	}else{
		var skinpage = "skinnewpage";
		var strlength = skinnewlistlength;
		var ttpage = totnewpage;
	}
	var skinliststr = '<ul id="'+skinpage+'1">';
	var skinpagesrc;
	for(var a=0;a<strlength;a++){
		if(a<12){skinpagesrc='src';}else{skinpagesrc='lz_src';}
		skinliststr += '<li><a href="" onclick="setSkin('+num+','+str[a][0]+');return false;">';
		if(str[a][0]==index){
			skinliststr += '<span class="i_sel"></span>';
		}
		skinliststr += '<img '+skinpagesrc+'="'+str[a][3]+'" />'+str[a][1]+'</a></li>';
		var ccpage = Math.ceil(a/12);
		if(ccpage>0){
			if(a==(12*ccpage-1)){skinliststr += '</ul><ul id="'+skinpage+(parseInt(ccpage)+1)+'" style="display:none;">';}
		}
	}
	//计算距离12倍数的余数
	var elsenums = ttpage*12-a;
	for(var b=0;b<elsenums;b++){
		skinliststr += '<li><img src="/images/index/waiting.jpg" /></li>';
	}
	skinliststr += "</ul>";
	return skinliststr;
}
function tskinpage(type,num){
	var pre = 0;
	var nex = 0;
	var str = "";
	if(type==1){
		var skinpage = "skincommendpage";
		var totpages = totcommendpage;
	}else{
		skinpage = "skinnewpage";
		var totpages = totnewpage;
	}
	if(num==totpages){
		pre=totpages-1;
		if(pre<1){pre=1;}
		nex=1;
	}else if(num==1){
		pre=totpages;
		nex=2;
	}else{
		pre=num-1;
		nex=num+1;
		if(pre<1){pre=1;}
		if(nex>totpages){nex=totpages;}
	}
	str = '<a class="sk_le" href="" onclick="tskinpage('+type+','+pre+');return false;"></a>';
	str += '<div class="skin_pag">';
	for(var a=1;a<=totpages;a++){
		if(num==a){
			str += '<a class="s_on" href="" onclick="tskinpage('+type+','+a+');return false;">'+a+'</a>';
			$("#"+skinpage+a).show();
			document.getElementById(skinpage+num).innerHTML = document.getElementById(skinpage+num).innerHTML.replace(/lz_src/g,"src");
		}else{
			$("#"+skinpage+a).hide();
			str += '<a href="" onclick="tskinpage('+type+','+a+');return false;">'+a+'</a>';
		}
	}
	str += '</div>';
	str += '<a class="sk_ri" href="" onclick="tskinpage('+type+','+nex+');return false;"></a>';
	if(totpages>1){
		$("#skinpager").html(str);
		$("#skinpager").show();
	}
}
function chgskintype(num){
	if(num==1){//推荐
		var skincommendliststr = getskinstr(num,skincommendlist,index4399skin);
		$("#skincommend").html(skincommendliststr);
		$("#skincommend").show();
		$("#skinnew").hide();
		$("#skincommendtab").attr('class','on');
		$("#skinnewtab").attr('class','');
	}else{//最新
		var skinnewliststr = getskinstr(num,skinnewlist,index4399skin);
		$("#skinnew").html(skinnewliststr);
		$("#skincommend").hide();
		$("#skinnew").show();
		$("#skincommendtab").attr('class','');
		$("#skinnewtab").attr('class','on');
	}
	tskinpage(num,1);
}
function saveskin(){
	closeWin();
	index4399skin = selectedskin;
	setCookie3("index4399skin",selectedskin);
	return false;
}
function cancelskin(){
	closeWin();
	setSkin(currentskintype,index4399skin);
	return false;
}

//两排滚动
var scrollPic_01 = new ScrollPic();
scrollPic_01.scrollContId   = "gamesdiv"; //内容容器ID
scrollPic_01.arrLeftId      = "mleft";//左箭头ID
scrollPic_01.arrRightId     = "mright"; //右箭头ID
scrollPic_01.frameWidth     = 936;//显示框宽度
scrollPic_01.pageWidth      = 936; //翻页宽度
scrollPic_01.speed          = 10; //移动速度(单位毫秒，越小越快)
scrollPic_01.space          = 77; //每次移动像素(单位px，越大越快)
scrollPic_01.autoPlay       = false; //自动播放
scrollPic_01.autoPlayTime   = 3; //自动播放间隔时间(秒)
scrollPic_01.initialize(); //初始化
//我玩过的
showhsgames();
//皮肤
function getcskininfo(index){for(a in skinnewlist){if(skinnewlist[a][0]==index){return [skinnewlist[a][6],skinnewlist[a][4]];}}}
//翻动效果
var scroll_timer;
function AutoScroll(){
$('#s1').find("ul:first:not(:animated)").animate({
marginTop:"-25px"
},500,function(){
$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
});
}
$(document).ready(function(){
scroll_timer = setInterval(AutoScroll,3000);
});

$("#s1 a").mouseover(function(){
	clearInterval(scroll_timer)
}).mouseout(function(){
	scroll_timer = setInterval(AutoScroll,3000)
});

//绑定事件
new SoSmart;
$("#r_up,#r_do").bind("click",function(){$("#web_logo_1").toggle();	$("#web_logo_2").toggle();});

$("#chskin").bind("click",function(){chgskintype(1);showWin('skiner');return false;});

//加载登录
$g("login_tologin").target = "_self";
$g("login_tologin").href = "javascript:UniLogin.showPopupLogin(null,null,true)";
$g("login_toregister").target = "_self";
$g("login_toregister").href = "javascript:UniLogin.showPopupReg(true)";
//显示背景图片
if(cskinimg!="-"){
	document.getElementById("skinbody").style.backgroundImage="url("+cskinimg+")";
	document.getElementById("skinbody").style.backgroundRepeat	="no-repeat";
	document.getElementById("skinbody").style.backgroundPosition="top center";
}else if(defaultbackgroundimg){
	document.getElementById("skinbody").style.backgroundImage="url("+defaultbackgroundimg+")";
	document.getElementById("skinbody").style.backgroundRepeat	="no-repeat";
	document.getElementById("skinbody").style.backgroundPosition="top center";
}
jsloadcomplate = 1;

//翻动效果
function setImg(num){
	for(var i=0;i<piccount;i++){
		if(num==i){
			$("#picl"+i).addClass("on");
			$("#pics"+i).html($("#pics"+i).html().replace(/lz_src/g,"src")).show();
			$("#pica"+i).show();
		}else{
			$("#picl"+i).removeClass("on");
			$("#pics"+i).hide();
			$("#pica"+i).hide();
		}
		current = num+1;
		if(current>(piccount-1)){
			current=0;
		}
		window.clearTimeout(tt);
		tt = setInterval("setImg(current)",3000);
	}
	var prepage = num-1;
	if(prepage<0){prepage = (piccount-1);}
	var nextpage = num+1;
	if(nextpage>(piccount-1)){nextpage = 0;}
	$("#fpage1").html('<a class="up" href="" onclick="setImg('+prepage+');return false;"></a>');
	$("#fpage2").html('<a class="do" href="" onclick="setImg('+nextpage+');return false;"></a>');
}

$(".setimgs,#fpage1,#fpage2").mouseenter(function(){if(piccount>1){$("#fpage1,#fpage2").show();}}).mouseleave(function(){$("#fpage1,#fpage2").hide();});
$(".tx").mouseenter(function(){$(".wechat-QR").show();}).mouseleave(function(){$(".wechat-QR").hide();}).click(function(){return false;});

var current = 0;
current++;
if(current>(piccount-1)) current=0;
var tt = setInterval("setImg(current)",3000);

//换一换
$("#chger1").click(function(){
	var arr = new Array();
	var txt = $("#chgdata1").children();
	$.each(txt,function(){
		var txt = $(this).text();
		var link = $(this).attr('href');
		var row = [txt,link];
		arr.push(row);
	});
	//打乱顺序
	arr = arr.sort(function(){return Math.random()>.5 ? -1 : 1;});
	var str = "";
	$.each(arr, function(key, val) {
		str += '<a class="b'+(key+1)+'" href="'+val[1]+'">'+val[0]+'</a>';
	});
	$("#chgdata1").html(str);
	return false;
});

$("#chger2").click(function(){
	var arr = new Array();
	var txt = $("#chgdata2").children();
	$.each(txt,function(){
		var txt = $(this).text();
		var link = $(this).attr('href');
		var row = [txt,link];
		arr.push(row);
	});
	//打乱顺序
	arr = arr.sort(function(){return Math.random()>.5 ? -1 : 1;});
	var str = "";
	$.each(arr, function(key, val) {
		str += '<a class="b'+(key+1)+'" href="'+val[1]+'">'+val[0]+'</a>';
	});
	$("#chgdata2").html(str);
	return false;
});

function chgv1(index){
	$("#vv1 a").removeClass("on");
	$("#tabsp1"+index).addClass("on");
	$(".lt-list").hide();
    $("#cntsp1"+index).html($("#cntsp1"+index).html().replace(/lz_src/g,"src")).show();
}
function chgv2(index){
	$("#vv2 a").removeClass("on");
	$("#tabsp2"+index).addClass("on");
	$(".videolist2").hide();
    $("#cntsp2"+index).html($("#cntsp2"+index).html().replace(/lz_src/g,"src")).show();
}
function chimg(index){
	$("#imglist li").hide();
	$("#img"+index).show();
	$("#txtlist li").removeClass("on");
	$("#txt"+index).addClass('on');
	$("#img"+index).html($("#img"+index).html().replace(/lzsrc/g,"src"));
}

//文字链区块悬浮图
$(".flpic,.p-bg").mouseenter(
    function(){
        $(this).find(".p-bg").show();
    }
).mouseleave(
    function(){
        $(this).find(".p-bg").hide();
    }
);

//娱乐休闲
$(".list-t .li-w").mouseenter(
	function(){
		$(".li-h").hide();
		$(".li-w").show();
		$(this).hide();
		$(this).prev().show();
	}
)