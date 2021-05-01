beardX = 0;
beardY = 0;

function preload() {
    beard_nose = loadImage('https://www.pngitem.com/pimgs/m/264-2646637_free-png-download-hipster-hair-transparent-clipart-beard.png');
}

function setup() {
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )

    {
        console.log(results);
       beardX =  results[0].pose.beard.x;
       beardY =  results[0].pose.beard.y;
       console.log("beardx =" + beardX);
       console.log("beardy =" + beardY);
    }
}


function draw() {
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(beardX, beardY, 20 );
image(beard_face, beardX, beardY, 30, 30);
}



function take_snapshot() {
    save('myFilterImage.png');
}
