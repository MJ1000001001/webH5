var first1=document.getElementById("first1");
var second1=document.createElement("div");
	second1.id="second1";
	second1.setAttribute('class','second');
	second1.style.display="none";
	first1.appendChild(second1);

	var xxgkl=document.createElement("ul");
		xxgkl.setAttribute('class','secondl');
		second1.appendChild(xxgkl);

		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("学校简介");
			xx1.href="http://www.xidian.edu.cn/xxgk.htm#A"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("学校章程");
			xx1.href="http://www.xidian.edu.cn/xxgk.htm#W"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("现任领导");
			xx1.href="http://www.xidian.edu.cn/xxgk.htm#B"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("历任领导");
			xx1.href="http://www.xidian.edu.cn/xxgk.htm#C"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("辉煌校史");
			xx1.href="http://www.xidian.edu.cn/xxgk.htm#D"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("校历校史");
			xx1.href="http://www.xidian.edu.cn/xxgk/xxxl.htm"
			xx1.appendChild(node);
			x1.appendChild(xx1);


		var x1=document.createElement("li");
			xxgkl.appendChild(x1);
		var xx1=document.createElement("a");
		var node=document.createTextNode("校园导游");
			xx1.href="http://www.xidian.edu.cn/xxgk.htm#E"
			xx1.appendChild(node);
			x1.appendChild(xx1);

		var x1=document.createElement("div");
			x1.setAttribute('class','clear');
			xxgkl.appendChild(x1);


	var img=document.createElement("img");
		img.setAttribute('src','./MJ_files/0xxgk.png');
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