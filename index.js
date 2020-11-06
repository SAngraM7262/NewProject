let container = document.getElementById("container");

container.addEventListener("click",getClickPosition,false);
let msges = ['I Love You','&#9829;','I Hug You','I Missh You','&#9829;','I Love You','I Want You','I Love You','I Kissh You','&#9829;'];
let colors = ['#ff0066','#ffcc00','#cc0099','#ff0000','#cc0099','#008000','#0000cc','#f2f2f2','#ff0066','#ff0066'];


function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x;
    var yPosition = e.clientY - parentPosition.y;


    let newMsg = document.createElement("p");
    let msg = getMsg();
    let color = getColor();
    newMsg.innerHTML = msg;
    newMsg.style.fontFamily = "'Itim', cursive";
    newMsg.style.color = color;
    newMsg.style.position = "absolute";
    newMsg.style.left = xPosition + "px";
    newMsg.style.top = yPosition + "px";
    newMsg.style.animation = "fadeInBack 7s linear 0.1s";
    newMsg.style.visibility = "hidden";

    container.appendChild(newMsg);
}
function getMsg(){
    let result = "";
    let msgesLength = msges.length;
    result = msges[Math.floor(Math.random() * msgesLength)];
    return result;
}
function getColor(){
    let result = "";
    let colorsLength = colors.length;
    result = colors[Math.floor(Math.random() * colorsLength)];
    return result;
}
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;
   
    while (el) {
      if (el.tagName == "BODY") {
        // deal with browser quirks with body/window/document and page scroll
        var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
   
        xPos += (el.offsetLeft - xScroll + el.clientLeft);
        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }
   
      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  }