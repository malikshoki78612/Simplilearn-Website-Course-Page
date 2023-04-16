let newCourseHeading;
let div1='';
newCourseHeading=courseHeading.innerHTML;
div1=document.createElement("div");

window.onresize=()=>
{
	if(window.screen.availWidth<480)
	{
		func1();
	}
	else{

		func2();
	}

}
let func1=()=>
{
		courseHeading.style.display='none';

		responsiveHeading.style.display='block';
		responsiveHeading.setAttribute("style","display:flex;margin-top:4vh;margin-left:1vw;font-size:1.5vh");
		responsiveHeading.innerHTML=courseText.innerHTML;
		courseText.style.display='none';
		div1.setAttribute("id","div1");
		//r2col2Inner.appendChild(div1);
		
		div1.setAttribute("style","font-weight:bold;font-size:2.2vh;margin-left:1vw;margin-right:1vw;color:white;display:flex;margin-top:2vh;text-align:left");
		
		div1.innerHTML=newCourseHeading;
		r2.after(div1);

}
let func2=()=>
{
	//alert("a");
		courseHeading.style.display='block';
		//courseHeading.setAttribute("style","font-size:50vh;");
		
		responsiveHeading.style.display='none';
		responsiveHeading.innerHTML='';
		div1.innerHTML='';
	
}