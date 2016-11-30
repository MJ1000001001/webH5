var first1=document.getElementById("first5");
var second1=document.createElement("div");
	second1.id="second5";
	second1.setAttribute('class','second');
	second1.style.display="none";
	first1.appendChild(second1);

	var xxgkl=document.createElement("ul");
		xxgkl.setAttribute('class','secondl');
		second1.appendChild(xxgkl);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("科学研究院");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#A"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("国家重点实验室");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#B"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("教育部重点实验室");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#C"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("省部级重点实验室");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#D"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("省部级基地");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#H"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("博士后科研流动站");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#E"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("其他科学研究部门");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#F"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("物联网实验中心");
			xx1.href="http://wlw.xidian.edu.cn/"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("期刊中心");
			xx1.href="http://www.xidian.edu.cn/kxyj.htm#G"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("div");
			x1.setAttribute('class','clear');
			xxgkl.appendChild(x1);


	var img=document.createElement("img");
		img.setAttribute('src','./MJ_files/kxyj.png');
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