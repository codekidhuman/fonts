lwX = 0;
rwX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(300,300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded()
{
    console.log("Pose net has been loaded!");
}
function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);

    lwX = results[0].pose.leftWrist.x;
    rwX = results[0].pose.rightWrist.x;
    difference = Math.floor(lwX - rwX);

    document.getElementById("size").innerHTML = "font size = "+difference+"px"
}

}
function draw()
{
background("#ababab");
textSize(difference);
fill("#96fdff");
text("Steve", 20, 200);
}