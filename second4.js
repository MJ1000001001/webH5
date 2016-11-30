var first1=document.getElementById("first4");
var second1=document.createElement("div");
	second1.id="second4";
	second1.setAttribute('class','second');
	second1.style.display="none";
	first1.appendChild(second1);

	var xxgkl=document.createElement("ul");
		xxgkl.setAttribute('class','secondl');
		second1.appendChild(xxgkl);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("西电英才");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#A"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("本科生教育");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#B"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("研究生教育");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#C"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("留学生教育");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#D"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("网络教育");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#E"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("实践教学");
			xx1.href="http://sjjx.xidian.edu.cn/"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("精品课程");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#F"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("教学改革与研究");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#G"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("实践教学中心");
			xx1.href="http://www.xidian.edu.cn/jyjx.htm#H"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("div");
			x1.setAttribute('class','clear');
			xxgkl.appendChild(x1);


	var img=document.createElement("img");
		img.setAttribute('src','./MJ_files/jyjx.png');
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