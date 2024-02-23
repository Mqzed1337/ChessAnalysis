var programCode = function(processingInstance) {
    with (processingInstance) {
      size(400, 400); 
      frameRate(30);
//code here

 }};

 // Get the canvas that ProcessingJS will use
 var canvas = document.getElementById("chessboard"); 
 // Pass the function to ProcessingJS constructor
 var processingInstance = new Processing(canvas, programCode); 