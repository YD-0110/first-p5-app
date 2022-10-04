function preload(){
}





function setup(){
    canvas = createCanvas(700, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}


function draw(){
    image(video,70,70,550,400);

    tint(tint_color);
    


    stroke("orangered");
    fill("orangered");
    rect(27,30,55,450);
    rect(607,30,55,450);
    rect(55,25,570,55);
    rect(55,460,570,55);

    stroke("yellowgreen");
    fill("yellowgreen");
    circle(55,50,85);
    circle(635,50,85);
    circle(635,490,85);
    circle(55,490,85);
 
}

function take_snapshot(){
    save('image_tint.png')
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}

