var xmlHttpReq = null;
if (window.XMLHttpRequest){
		xmlHttpReq = new XMLHttpRequest();
}

function Ajax(){
	xmlHttpReq.open("GET","new_file.php",true);
	xmlHttpReq.onreadystatechange = RequestCallBack;
	xmlHttpReq.send(null);
}

function RequestCallBack(){
	if(xmlHttpReq.readyState === 4){
		if(xmlHttpReq.status === 200){
			document.getElementById("resText").innerHTML = xmlHttpReq.responseText;
		}
	}
}
