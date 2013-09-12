var m_cwinhandle = new Array();
var m_stext = "";

function openChildWindow(url, nm,  w, h, left, top){
	var sc_width = window.screen.width;
	var sc_height = window.screen.height;
	if(w == null){w = 200;}
	if(h == null){h = 200;}
	if(left == null)
		left = sc_width / 2 - w / 2 - 20;
	if(top == null)
		top = sc_height / 2 - h / 2 - 40;
	var winhdl = window.open(
		'/images/dummy.gif',
		nm,
		'width=' + w + ',height=' + h + ',scrollbars=yes,resizable=yes,left=' + left + ',top=' + top
	);
	var addidx = m_cwinhandle.length;
	m_cwinhandle[addidx] = winhdl;
	winhdl.focus();
	if(url != null)
		winhdl.location.href = url;
}

function closeAllChildWindow(){
	var wh;
	for (var i = 0; i <  m_cwinhandle.length; i++) {
		wh = m_cwinhandle[i];
		if (!wh.closed)
			wh.close();
	}
}

function Trim(str){
    str = str.replace(/^[ 　]+/,"");
    str = str.replace(/[ 　]+$/,"");
    return str;
}

function vi(obj, dtype, len1, len2){
	var newstr = Trim(obj.value);
	var errflg = false;
	var errmsg = "";
	switch (dtype) {
	case 1:
		var tmp = newstr;
		newstr = jsIgnoreString(newstr);
		if (tmp != newstr) {
			errflg = true;
			errmsg += "・以下の文字は使用できません。（全角は可能）\n\n   %  ^  *  (  )  \'  \"  [  ]  <  >  ,";
			newstr = m_stext;
		}
		var rtnval = checkBytes(newstr, len1)
		if (rtnval > 0) {
			errflg = true;
			errmsg += "・文字数がオーバーしました。\n";
			newstr = m_stext;
		}
		break;
	case 2:
		var rtnval = getFormatNumber(newstr, len1, len2);
		switch (rtnval) {
		case "NOT_A_NUM":
			errflg = true;
			errmsg += "・半角数字で入力してください。\n";
			newstr = m_stext;
			break;
		case "OVER_SIZE":
			errflg = true;
			errmsg += "・桁数オーバーです。\n";
			newstr = m_stext;
			break;
		default:
			newstr = rtnval;
			break;
		}
		break;
	case 3: //基本的に「1」と同じ。エラーでも値を元にもどしません。
		var tmp = newstr;
		newstr = jsIgnoreString(newstr);
		if (tmp != newstr) {
			errflg = true;
			errmsg += "・以下の文字は使用できません。（全角は可能）\n\n   %  ^  *  (  )  \'  \"  [  ]  <  >  ,";
		}
		var rtnval = checkBytes(newstr, len1)
		if (rtnval > 0) {
			errflg = true;
			errmsg += "・文字数がオーバーしました。\n";
		}
		break;
	}
	if (errflg) {
		alert(errmsg);
		obj.focus();
	}
	obj.value = newstr;
	return newstr != m_stext;
}

function sv(obj){
	m_stext = obj.value;
}

function jsIgnoreString(v){
	var cpy = v;
    cpy = cpy.replace(/[\t%^*\(\)'\[\]<>",]+/,"");
	return cpy;
}

function getFormatNumber(newstr, ln1, ln2){
	var cpy = newstr;
	if (cpy == "")
		return "";
	if (isNaN(cpy))
		return "NOT_A_NUM";
	if (String(Math.abs(parseInt(cpy))).length > ln1)
		return "OVER_SIZE";
	if (ln2 == 0)
		return String(parseInt(cpy));
	eval("cpy = cpy.replace(/(\\..{"+ln2+"})(.+)/,'$1')");
	cpy = String(parseFloat(cpy));
	return cpy;
}

function checkBytes(pstr,plen){
	var bytes = 0;
	if (!pstr.charCodeAt)
		return 0;
	for (var i = 0, n = pstr.length; i < n; i++) {
		bytes += pstr.charCodeAt(i) > 0xff ? 2 : 1;
		if (bytes > plen)
			return i;
	}
	return 0;
}
