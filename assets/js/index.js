(function () {
  const getElementById = (el) => document.getElementById(el);
  const querySelector = (el) => document.querySelector(el);
  const Request = async (URL) => await (await fetch(URL)).json();
  const Canvas = getElementById("graph");
  const Total = getElementById("total");
  const Parcent = querySelector(".parcent").dataset.parcent;
  const Connect = Request("assets/data/data.json"); 
  const Graph = Canvas.getContext("2d");
  let fontFamily, fontSize;
  
  window.onresize = Responsive;
  
  function Responsive() {

    Canvas.setAttribute("width", querySelector("main").offsetWidth - parseInt(getComputedStyle(document.documentElement).fontSize) * 1.777777778 * 2)

    fontFamily = getComputedStyle(document.documentElement).fontFamily;
    fontSize = getComputedStyle(document.documentElement).fontSize;
    
  }
  
  function Start () {
    let hover = {};
    function close(num = null) {
      for (let i = 0; i < 7; i++) {
      Graph.fillStyle = "white";
      Graph.beginPath();
      Graph.roundRect(hover[i].x, hover[i].y - 40, 70, 30, 5);
      Graph.fill();
    }
    Graph.fillStyle = "white";
      Graph.beginPath();
      Graph.roundRect(hover[6].x - 15, hover[6].y - 40, 75, 35, 5);
      Graph.fill();
    }
    Connect.then((Data) => {
      
      let betweenShape = 0;
      let between = 10;
      let colors= ["hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)"];
      
      for (let i = 0; i < Data.length; i++) {
        
        let {day, amount} = Data[i];
        
        
        Graph.fillStyle = "hsl(28, 10%, 53%)";
        Graph.font = `${fontSize} ${fontFamily}`;
        
        hover[i] = {};
        
        hover[i].x = betweenShape;
        hover[i].y = Canvas.offsetHeight - amount - 20;
        hover[i].width = (Canvas.offsetWidth - (6 * 18)) / 7;
        hover[i].height = amount;
        
        
        
        Graph.fillText(day, between, Canvas.offsetHeight);
        Graph.fillStyle = colors[0];
        colors.reverse();
        Graph.beginPath();
        Graph.roundRect(betweenShape, Canvas.offsetHeight - amount - 20, (Canvas.offsetWidth - (6 * 18)) / 7 , amount, 5);
        Graph.fill();
        betweenShape += (Canvas.offsetWidth - (6 * 18)) / 7 + 18;
        between += Canvas.offsetWidth / 6.66;
        
        
      }
      
      Canvas.onmousemove = (e) => {
        var canvasRect = Canvas.getBoundingClientRect();
        var x = canvasRect.left;
        var y = canvasRect.top;
        Connect.then((Data) => {
            
            let amount;
            
            if (e.x > hover[0].x + x && e.x < hover[0].x + x + hover[0].width && e.y > hover[0].y + y && e.y < hover[0].y + y + hover[0].height) {
              close();
               amount = Data[0].amount;
              Canvas.style.cursor = "pointer";
               Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[0].x, hover[0].y - 40, 60, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[0].x + 5, hover[0].y - 20);

            } else if (e.x > hover[1].x + x && e.x < hover[1].x + x + hover[1].width && e.y > hover[1].y + y && e.y < hover[1].y + y + hover[1].height) {
              close();
              amount = Data[1].amount;
              Canvas.style.cursor = "pointer";
              Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[1].x, hover[1].y - 40, 60, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[1].x + 5, hover[1].y - 20);

            } else if (e.x > hover[2].x + x && e.x < hover[2].x + x + hover[2].width && e.y > hover[2].y + y && e.y < hover[2].y + y + hover[2].height) {
              close();
              amount = Data[2].amount;
              Canvas.style.cursor = "pointer";
              Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[2].x, hover[2].y - 40, 65, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[2].x + 5, hover[2].y - 20);

            } else if (e.x > hover[3].x + x && e.x < hover[3].x + x + hover[3].width && e.y > hover[3].y + y && e.y < hover[3].y + y + hover[3].height) {
              close();
              amount = Data[3].amount;
              Canvas.style.cursor = "pointer";
              Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[3].x, hover[3].y - 40, 60, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[3].x + 5, hover[3].y - 20);

            } else if (e.x > hover[4].x + x && e.x < hover[4].x + x + hover[4].width && e.y > hover[4].y + y && e.y < hover[4].y + y + hover[4].height) {
              close();
              amount = Data[4].amount;
              Canvas.style.cursor = "pointer";
              Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[4].x, hover[4].y - 40, 65, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[4].x + 5, hover[4].y - 20);

            } else if (e.x > hover[5].x + x && e.x < hover[5].x + x + hover[5].width && e.y > hover[5].y + y && e.y < hover[5].y + y + hover[5].height) {
              close();
              amount = Data[5].amount;
              Canvas.style.cursor = "pointer";
              Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[5].x, hover[5].y - 40, 70, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[5].x + 5, hover[5].y - 20);

            } else if (e.x > hover[6].x + x && e.x < hover[6].x + x + hover[6].width && e.y > hover[6].y + y && e.y < hover[6].y + y + hover[6].height) {
              close();
              amount = Data[6].amount;
              Canvas.style.cursor = "pointer";
              Graph.fillStyle = "black";
               Graph.beginPath();
               Graph.roundRect(hover[6].x - 15, hover[6].y - 40, 65, 30, 5);
               Graph.fill();
               Graph.fillStyle = "white";
               Graph.fillText(`$${amount}`, hover[6].x - 15, hover[6].y - 20);

            } else {
              close();
              Canvas.style.cursor = "default";
            }
            
          });

      }
      
    });
    
    
    
  }
  
  
  
  Responsive();
  
  Start();
  
})();
