noseX = 0;
noseY = 0;
diference=0;
pulsoE=0;
pulsoD=0;
function setup(){
    video= createCapture(VIDEO);//criar o video.
    video.size(550,500);//tamanho do video.

    canvas =createCanvas(550,550);//criar o canvas.
    canvas.position(560,150);  //posicao do canvas.

    poseNet=ml5.poseNet(video, modelLoaded);//poseNet.
    poseNet.on('pose',gotPoses);//ativar poseNet.
}

function draw(){
    background('#969A97');//colocar o fundo cinza.
    document.getElementById("square_side").innerHTML = diference;
    fill("#F90093");
    stroke("F90093");
    textSize(diference);
    text("Lição de casa 6 para amanhã", noseX, noseY);
    
    
}

function modelLoaded(){
    console.log("O poseNet foi inicializado");//colocar no console que o poseNet foi inicializado.
}

function gotPoses(results){
    if(results.length>0){//mostrar no console que se tiver resultados ele devera exibir no console.
        console.log(results);//mostrar no console que se tiver resultados ele devera exibir no console.
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX, noseY);
        pulsoE=results[0].pose.leftWrist.x;
        pulsoD=results[0].pose.rightWrist.x;
        diference=floor(pulsoE-pulsoD);
    }
}