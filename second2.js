var first1=document.getElementById("first2");
var second1=document.createElement("div");
	second1.id="second2";
	second1.setAttribute('class','second');
	second1.style.display="none";
	first1.appendChild(second1);

	var img=document.createElement("img");
		img.setAttribute('src','./MJ_files/ybsz.png');
		img.setAttribute('border','0');
		img.setAttribute('width','500');
		img.setAttribute('height','160');

	var xxgkr=document.createElement("div");
		xxgkr.className="secondr";
		xxgkr.appendChild(img);
		second1.appendChild(xxgkr);

	var x1=document.createElement("div");
		x1.setAttribute('class','clear');
		second1.appendChild(x1)