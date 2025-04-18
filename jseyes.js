var jseyesimg="meyeblanklogo.png";
var jseyesimg1="meyewhitelogo.png";
var jseyeimg="meyeiris.png";
var jseyeslink="http://mindshaker.us";
var jseyeso=null, jseye1=null;
var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body 

function jseyesobj(id) {
  var i, x;
  x= document[id];
  if (!x && document.getElementById) x= document.getElementById(id);
  for (i=0; !x && i<document.forms.length; i++) x= document.forms[i][id];
  return(x);
}

function jseyesmove(x, y) {
  var ex, ey, dx, dy;
  if (jseyeso && jseye1 && jseyeso.style) {
    ex=jseyeso.offsetLeft+120; ey=jseyeso.offsetTop+63;
    dx=x-ex; dy=y-ey;
    r=(dx*dx/144+dy*dy/25<1) ? 1 : Math.sqrt(400*150/(dx*dx*25+dy*dy*144));
    jseye1.style.left= r*dx+76+'px'; jseye1.style.top= r*dy+22+'px';
    ex+=5; dx-=5;
  }
}

function jseyes() {
  var img;
  var x, y, a=false;

  if (arguments.length==2) {
    x= arguments[0];
    y= arguments[1];
    a= true;
  }

    img= "<div id='jseyeslayer' style='position:"+
           (a ? "absolute; left:"+x+"; top:"+y : "relative")+
           "; z-index:6; width:300; height:300 overflow:hidden'>"+
	     "<div id='jseye1' style='position:absolute; z-index:5; width:85; height:85'>"+
	       "<img src='"+jseyeimg+"' width=85 height=85 onClick=\"location.href='"+jseyeslink+"'\">"+
	     "</div>"+
        "<img style='position:absolute; z-index:7;' src='"+jseyesimg+"'  onClick=\"location.href='"+jseyeslink+"'\">"+
        "<img style='position:absolute; z-index:2;' src='"+jseyesimg1+"'  onClick=\"location.href='"+jseyeslink+"'\">"+
	 "</div>";
    document.write(img);
    jseyeso=jseyesobj('jseyeslayer');
    jseye1=jseyesobj('jseye1');

    document.onmousemove=jseyesmousemove;
}

function jseyesmousemove(e) {
		var mousex=(e)? e.pageX : event.clientX+standardbody.scrollLeft
		var mousey=(e)? e.pageY : event.clientY+standardbody.scrollTop
  jseyesmove(mousex, mousey);
}