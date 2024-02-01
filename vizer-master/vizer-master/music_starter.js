
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts

  rectMode(CENTER)
  textSize(24);
  noStroke();
//variables
let horiz = 540;
let vertic = 960;
angleMode(RADIANS);


//drum
let drumMap = map(drum,0,100,0,-400)
let upDrum = map(drum,0,100,0,-10)
let upDrumOpp = map(drum,0,100,0,-10)
let drumArray = [54,108,162,216,270,324,378,432,496]
for(i=0;i<5;i++){

stroke(255);
strokeWeight(2);
line(drumArray[i],vertic+upDrum,drumArray[i],vertic+(upDrum*i)*10);
line(216+drumArray[i],vertic+upDrum,216+drumArray[i],vertic+(upDrumOpp*i)*10);

  }


//bass



noStroke();
//other
fill(255)
let o = map(other,0,100,0,HALF_PI )
let x = horiz/2;
// let y = 50*sin(o*0.5)+vertic/2;
let y = map(sin(o),-1,1,(vertic/2)-500,(vertic/2)+150)
ellipse(x,y,10);

// let x=other;
// let y=20*sin(x*1)+10;
// point(x,y);

//vocals
let upWords = map(vocal,0,100,vertic/2,(vertic/2)-60);
let downWords = map(vocal,0,100,vertic/2,(vertic/2)+50);
let upWordsSize = map(vocal,0,100,80,40);
let trans = map(vocal,0,100,255,50)
  textAlign(CENTER);
  fill(100,200,100, trans)
  textSize(upWordsSize);  
  
push();//upwords
  text(words,horiz/2,upWords)
pop();
push();//down words
  text(words,horiz/2,downWords)
pop();

  textSize(80)
  fill(200,100,100);
  text(words,horiz/2,vertic/2);
}






//=================================================
//starter code
//=================================================
  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);