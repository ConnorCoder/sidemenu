let corner = 0;
let corners = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];
let cornersty = ["top:0px;left:0px;","top:0px;right:0px;","bottom:0px;left:0px;","bottom:0px;right:0px;"];

function loop() {
  document.getElementById("sb-width-txt").innerHTML = "Width (" + document.getElementById("sb-width").value + "%):";
  document.getElementById("sb-activate-txt").innerHTML = "Activation Corner (" + corners[corner] + "):"
  document.getElementById("sb-activate-width-txt").innerHTML = "Activation Button Width (" + document.getElementById("sb-activate-width").value + "px):"
  document.getElementById("sb-activate-height-txt").innerHTML = "Activation Button Height (" + document.getElementById("sb-activate-height").value + "px):"
  document.getElementById("sb-activate-display").style.width = document.getElementById("sb-activate-width").value + "px";
  document.getElementById("sb-activate-display").style.height = document.getElementById("sb-activate-height").value + "px";
  
  document.getElementById("sb-output").value = 'javascript:let toggle = 0;let ele = document.createElement("button");ele.style = "background:transparent;color:transparent;border:none;width:' + document.getElementById('sb-activate-width').value + "px;height:" + document.getElementById('sb-activate-height').value + 'px;position:fixed;z-Index:10000;' + cornersty[corner] + '";ele.onclick=function(){if(toggle === 0) {document.getElementById("divhack").style.display=null;toggle=1}else {document.getElementById("divhack").style.display="none";toggle=0};};document.body.appendChild(ele);let div = document.createElement("div");div.style = "width:' + document.getElementById("sb-width").value + '%;height:100%;position:fixed;right:0px;top:0px;z-Index:5000;color:black;background:white;border-color:black;border-left:solid;border-width:3px;display:none";div.id="divhack";document.body.appendChild(div);let txt = document.createElement("p");txt.innerHTML="' + document.getElementById("sb-txt").value.split(`
`).join("<br>").split('"').join('\\"') + '";document.getElementById("divhack").appendChild(txt);void 0';

}setInterval(loop, 0);

function select(x) {
  corner = x;
}
