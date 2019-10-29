
function setup() {
    createCanvas(800,600);
  
  angleMode(DEGREES);
 slider = createSlider(0, 255, 3, 20);
 slider.position(330, 70);
 


 
}
  
  function draw() {
    t = slider.value();
    background(15);

    fill(255,255,0);
    textSize(35);
    textAlign(CENTER);
    textFont('Ink Free');
      text('Can you find the halloween cats?',400,40);

    fill(t,30);
    textSize(77);
    textFont('Ink Free');
         text('ooOOOOOoooOOOOOOoooo',400,140);
         text('oOOooOOoooOOOOOOoooo',400,340);
         text('ooooooooooOOOOOOoooo',400,455);

         fill(t,30);
         textSize(77);
         textFont('Wingdings');
              text('NNNNNNNNNNNNNNNNNNNNNNNN',400,230);
              textSize(57);
              text('NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN',400,400);
              textSize(77);
              text('NNNNNNNNNNNNNNNNNNN',400,520);     

    cat(-240,30)
    cat(10,10);
    cat(260,30);
    
    ghost(10,10);
    ghost(240,440);
    ghost(686,55);
    ghost(486,95);
    ghost(496,495);
   
  }

function cat(x,y){
  
push();
  //cat
translate(x,y);
noStroke();
fill(t);
circle(400,300,200);
noStroke();
//right ear
fill(t);
triangle(300,290,350,102,380,260)
//left ear
noStroke();
fill(t);
triangle(500,290,450,102,420,260)
//nose
fill(68,55,82);
triangle(385,330,400,347,415,330);
//left eyes 
fill(255,255,55);
beginShape();
curveVertex(410,320);
curveVertex(425,285);
curveVertex(440,270);
curveVertex(480,245);
curveVertex(470,310);
endShape(CLOSE);
 //right eye  
fill(255,255,55);
beginShape();
curveVertex(390,320);
curveVertex(375,285);
curveVertex(360,270);
curveVertex(320,245);
curveVertex(330,310);
endShape(CLOSE);   
 //pupils
fill(68,55,82);
ellipse(445,290,4,40)  
fill(68,55,82);
ellipse(355,290,4,40) 
pop();
}

function ghost(x,y) {
   //ghost
   push();
   translate(x,y);
   noStroke();
   fill(t,86);
   ellipse(55,40,60,70);
   ellipse(40,55,30,50);
   ellipse(55,55,30,50);
   ellipse(70,55,30,50);
   //face
   push();
   fill(0);
   rotate(15);
   ellipse(45,20,20,30);
   fill(0);
   rotate(-25);
   ellipse(60,45,20,30);
   pop();
   fill(0);
   ellipse(50,55,15,20)
   pop();



}
