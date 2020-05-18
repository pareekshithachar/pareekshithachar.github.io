var image;
var image1;
var gimage;

//this is the foreground image
function doChange(){
  var canvas= document.getElementById("can1");
  var input= document.getElementById("finput1");

  image= new SimpleImage(input);
  image.drawTo(canvas);
}
//this is the background image
function doChange1(){
  var canvas= document.getElementById("can2");
  var input= document.getElementById("finput2");

  image1= new SimpleImage(input);
  image1.drawTo(canvas);
}

//this is the green screen function
function doGreen(){
  if(image==null ||! image.complete()){
    alert("Please upload foreground image")
  }
  if(image1==null ||! image1.complete()){
    alert("Please upload background image")
  }
  image1.setSize(image.getWidth(),image.getHeight())
  for(var pixel of image.values()){
    if(pixel.getGreen()> pixel.getRed()+pixel.getBlue()){
      var x= pixel.getX();
      var y= pixel.getY();
      var img=image1.getPixel(x,y);
      image.setPixel(x,y,img);
    }
  }
  var can= document.getElementById("can3");
  image.drawTo(can);
}
//this part is to take image for grayscale
function upload(){
  var canid= document.getElementById("can4");
  var ipid = document.getElementById("finput4");

  gimage = new SimpleImage(ipid);
  gimage.drawTo(canid);

}
//this is the grayscale function
function doGrey(){

  for(var pixel of gimage.values()){
   var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setGreen(avg);
    pixel.setRed(avg);
    pixel.setBlue(avg);
  }
  var canid= document.getElementById("can5");
  gimage.drawTo(canid);
}
//to change the websites background color
function backgroundcolor(){
  var bodyid=  document.getElementById("body");
  var input= document.getElementById("back");
  var cvalue= input.value;
  bodyid.style.backgroundColor= cvalue;
}
