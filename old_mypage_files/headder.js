if (navigator.appVersion.indexOf("Mac",0)!=-1) {
	document.writeln("<LINK REL=\"STYLESHEET\" TYPE=\"text/css\" href=\"/css/fontmac.css\" TITLE=\"Infomart\">");
}
else {
	document.writeln("<LINK REL=\"STYLESHEET\" TYPE=\"text/css\" href=\"/css/font.css\" TITLE=\"Infomart\">");
}

var bc =Array("#cccc99","#ff9966","#cccc99");
//var bs =Array("solid","outset","inset");
var bs =Array("none","none","inset");
var cc =Array("#cccc99","#cccc99","#cccc99");

function ChangeStyle(obj,n)	{
	obj.style.backgroundColor=bc[n];
	obj.style.borderStyle=bs[n];
	obj.children(0).style.color=cc[n];
}
function DivClick(obj)	{
	location.href=obj.children(0).href;
}
// NewHeadder
function imgChange01(menu01)
{
 document.menu01.src = menu01;
}

function imgChange02(menu02)
{
	 document.menu02.src = menu02;
}

function imgChange03(menu03)
{
	 document.menu03.src = menu03;
}
 
function imgChange04(menu04)
{
	 document.menu04.src = menu04;
}

function imgChange05(menu05)
{
 document.menu05.src = menu05;
}

function imgChange06(menu06)
 {
 document.menu06.src = menu06;
 }
 
function imgChange07(menu07)
 {
 document.menu07.src = menu07;
 }
  
function imgChange08(menu08)
 {
 document.menu08.src = menu08;
 }
 		 

function imgChange11(sele01,comm,infom)
{
 document.sele01.src = sele01;
 document.comm.src = comm;
 document.infom.src = infom;
}

function imgChange12(sele02,comm,infom)
{
	 document.sele02.src = sele02;
 document.comm.src = comm;
 document.infom.src = infom;
}

function imgChange13(sele03,comm,infom)
{
	 document.sele03.src = sele03;
 document.comm.src = comm;
 document.infom.src = infom;
}

