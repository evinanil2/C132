img ="";
status = "";
function preload(){
    img = loadImage('desk-table-drawer-furniture-steel-office-desk-a9ccc1a8a3cd5d7cd5508258f6e09a6c.png');
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";

}
function draw() {
    image(img, 0, 0, 640, 420);
   }
function modelLoaded(){
    console.log("model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult)

    }
    function gotResult(error, results){
        if(error) {
            console.log(error);
        }
        console.log(results);
    }

function back()
{
    window.location = "index.html";
}