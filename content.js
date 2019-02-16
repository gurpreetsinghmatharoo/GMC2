//// Vars
//Colors
var colors = [];
var colors_new = [];
colors[0] = "rgb(77, 127, 50)";
colors_new[0] = "rgb(3, 157, 91)";
colors[1] = "rgb(28, 28, 28)";
colors_new[1] = "https://cdn.pbrd.co/images/I1jUXpi.png";
colors[2] = "rgb(113, 181, 73)";
colors_new[2] = "rgb(3, 157, 91)";
colors[3] = "rgb(113, 181, 70)";
colors_new[3] = "rgb(3, 157, 91)";
colors[4] = "rgb(89, 151, 53)";
colors_new[4] = "rgb(3, 157, 91)";
colors[5] = "rgb(15,15,15)";
colors_new[5] = "https://cdn.pbrd.co/images/I1jUXpi.png";

//Link highlight
colors[6] = "rgb(113, 181, 70)";
colors_new[6] = "rgb(3, 157, 91)";
colors[7] = "rgb(113, 181, 73)";
colors_new[7] = "rgb(3, 157, 91)";

//Start
//Div
var divs = document.getElementsByTagName('div');
//A
var as = document.getElementsByTagName('a');
//dls
var dls = document.getElementsByTagName('dl');
//html
var htmls = document.getElementsByTagName("html");
//bodies
var bodies = document.getElementsByTagName("body");
//imgs
var imgs = document.getElementsByTagName("img");

//Do it
replaceStuff(divs);
replaceStuff(as);
replaceStuff(dls);
replaceStuff(htmls);
replaceStuff(bodies);
replaceStuff(imgs, "img");

//Replace function
function replaceStuff(arr, type) {
	for (var i = 0; i < arr.length; i++) {
		let div = arr[i];
		
		if (isElement(div)) {
			div.style.fontFamily = "'Open Sans', 'Nanum Gothic', sans-serif";
			
			let style = window.getComputedStyle(div);
			
			//Replace color
			let color = style.backgroundColor;
			
			//Loop
			for(let c=0; c<2; c++){
				//Color
				if (c==1) color = style.color;
				
				//Get
				let ind = colors.indexOf(color);
				
				//Replace image
				if (type && type == "img") {
					console.log("Image found");
					
					//Logo
					if (div.src.indexOf("banner.png") >= 0) {
						console.log("Title image found");
						
						div.src = chrome.runtime.getURL("gmc.png");
						
						break;
					}
				}
				else if (ind >= 0) {
					//Background image
					if (colors_new[ind].indexOf("http") >= 0) {
						//div.style.backgroundColor = null;
						div.style.removeProperty("background-color");
						div.style.background = "url(" + colors_new[ind] + ")";
						div.style.backgroundSize = "100% 100%";
						div.style.backgroundAttachment = "fixed";
						
						console.log("Background " + ind + " replaced!");
					}
					//Color replace
					else {
						if (c==0) div.style.backgroundColor = colors_new[ind];
						else div.style.color = colors_new[ind];
						
						console.log("Color " + ind + " replaced!");
					}
				}
			}
		}
	}
}

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;  
}

//Finish
console.log("GMC2 Extension Loaded");