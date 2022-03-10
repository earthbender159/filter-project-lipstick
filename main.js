noseX = 0; 
noseY = 0; 

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/zBpZZZNN/CC2-DD50-C-7994-43-A5-90-EF-2-BCB88-BE6-E52.png'); 
}

function setup(){
    canvas = createCanvas(300, 300); 
    canvas.center(); 
    video = createCapture (VIDEO); 
    video.size(300, 300); 
    video.hide(); 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPose); 
}

function modelLoaded(){
    console.log('PoseNet Is Intialied'); 
}

function gotPose(results){
    if(results.length > 0){
        console.log(results); 
        noseX = results[0].pose.nose.x - 10; 
        noseY = results[0].pose.nose.y + 30; 
    }
}

function draw(){
    image(video, 0, 0, 300, 300); 
    /*circle(noseX, noseY, 20); 
    fill(255, 0, 0); 
    stroke(255, 0, 0);*/
    image(clown_nose, noseX, noseY, 20, 20); 
}

function take_snapshot(){
    save('myFilterImage.png'); 
}