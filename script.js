let corner = 0;
let corners = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];
let cornersty = ["top:0px;left:0px;","top:0px;right:0px;","bottom:0px;left:0px;","bottom:0px;right:0px;"];
let side = "Right";

function loop() {
  let width = g("sb-width").value;
  if(side === "Right") {
    width = 1 - width;
  }
  let awidth = g("sb-activate-width").value;
  let aheight = g("sb-activate-height").value;
  let color = {
    bg: g("sb-color-background").value,
    txt: g("sb-color-text").value,
    b: g("sb-color-border").value
  }
  let fs = g("sb-font-size").value;
  
  g("sb-width-txt").innerHTML = "Width (" + width + "%):";
  g("sb-activate-txt").innerHTML = "Activation Corner (" + corners[corner] + "):"
  g("sb-activate-width-txt").innerHTML = "Activation Button Width (" + awidth + "px):"
  g("sb-activate-height-txt").innerHTML = "Activation Button Height (" + aheight + "px):"
  g("sb-activate-display").style.width = awidth + "px";
  g("sb-activate-display").style.height = aheight + "px";
  g("sb-side").innerHTML = "Side (" + side + "):";
  g("sg-font-txt").innerHTML = "Font Size (" + fs + "px):";
  
  let script = 'javascript:let toggle = 0;let ele = document.createElement("button");ele.style = "background:transparent;color:transparent;border:none;width:' + awidth + "px;height:" + aheight + 'px;position:fixed;z-Index:10000;' + cornersty[corner] + '";ele.onclick=function(){if(toggle === 0) {document.getElementById("divhack").style.display=null;toggle=1}else {document.getElementById("divhack").style.display="none";toggle=0};};document.body.appendChild(ele);let div = document.createElement("div");div.style = "width:' + width + '%;height:100%;position:fixed;' + side + ':0px;top:0px;z-Index:5000;color:' + color.txt + ';font-size:' + fs + 'px;background:' + color.bg + ';border-color:' + color.b + ';border-left:solid;border-width:3px;display:none";div.id="divhack";document.body.appendChild(div);let txt = document.createElement("p");txt.innerHTML="' + g("sb-txt").value.split(`
`).join("<br>").split('"').join('\\"') + '";document.getElementById("divhack").appendChild(txt);void 0';
  
  document.getElementById("sb-output").value = script;
  g("dragme").href = script;

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
