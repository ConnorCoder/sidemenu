let corner = 0;
let corners = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];
let cornersty = ["top:0px;left:0px;","top:0px;right:0px;","bottom:0px;left:0px;","bottom:0px;right:0px;"];
let side = "Right";

function loop() {
  let width = g("sb-width").value;
  let awidth = g("sb-activate-width").value;
  let aheight = g("sb-activate-height").value;
  g("sb-width-txt").innerHTML = "Width (" + width + "%):";
  g("sb-activate-txt").innerHTML = "Activation Corner (" + corners[corner] + "):"
  g("sb-activate-width-txt").innerHTML = "Activation Button Width (" + awidth + "px):"
  g("sb-activate-height-txt").innerHTML = "Activation Button Height (" + aheight + "px):"
  g("sb-activate-display").style.width = awidth + "px";
  g("sb-activate-display").style.height = aheight + "px";
  g("sb-side").innerHTML = "Side (" + side + "):";
  
  document.getElementById("sb-output").value = 'javascript:let toggle = 0;let ele = document.createElement("button");ele.style = "background:transparent;color:transparent;border:none;width:' + awidth + "px;height:" + aheight + 'px;position:fixed;z-Index:10000;' + cornersty[corner] + '";ele.onclick=function(){if(toggle === 0) {document.getElementById("divhack").style.display=null;toggle=1}else {document.getElementById("divhack").style.display="none";toggle=0};};document.body.appendChild(ele);let div = document.createElement("div");div.style = "width:' + width + '%;height:100%;position:fixed;' + side + ':0px;top:0px;z-Index:5000;color:black;background:white;border-color:black;border-left:solid;border-width:3px;display:none";div.id="divhack";document.body.appendChild(div);let txt = document.createElement("p");txt.innerHTML="' + document.getElementById("sb-txt").value.split(`
`).join("<br>").split('"').join('\\"') + '";document.getElementById("divhack").appendChild(txt);void 0';

}setInterval(loop, 0);
function g(id) {
  return document.getElementById(id);
}
function select(x) {
  if(x < 4) {
    corner = x;
  }else if (x < 6) {
    if (x === 4) {
      side = "Left";
    }else {
      side = "Right";
    }
  }
}
