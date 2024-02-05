
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica');
  rectMode(CENTER)
  textSize(24);
  noStroke();
  //-----------------------------------------------------------------
  //variables
  //-----------------------------------------------------------------
  //size of the canvas
  let horiz = 540;
  let vertic = 960;
  //maps - in order of use
  let trans = map(vocal,0,100,200,50);//transparency
  let Opptrans = map(vocal,0,100,50,200);//opposite transparency
  
  let upDrum = map(drum,0,100,0,-5);
  let downBass = map(bass,0,100,0,-5);
  let midUp = map(other,0,100,0,50);
  
  let upWords = map(vocal,0,100,vertic/2,(vertic/2)-140);
  let upWordsSize = map(vocal,0,100,80,40);

//arrays - lists of numbers 
let bassArray = [550,496,432,378,324,270,216,162,108,54,0];
let drumArray = [0,54,108,162,216,270,324,378,432,496,550];

//-----------------------------------------------------------------
//background
//-----------------------------------------------------------------
background(29, 26, 35)
for(b=0;b<25;b++){
  stroke(114, 229, 114,50);
  strokeWeight(1);
  line(-880+b*100,vertic,horiz/2,vertic/2-100)
}
//-----------------------------------------------------------------
//drum and bass
//-----------------------------------------------------------------
for(i=0;i<11;i++){
  strokeWeight(12);
  stroke(63, 55, 201, Opptrans)
  line(drumArray[i]-13.5,vertic,drumArray[i]-13.5,vertic+(upDrum*i)*11);
  strokeWeight(6);
  stroke(67, 97, 238, Opptrans)
  line(drumArray[i]-10,vertic,drumArray[i]-10,vertic+(upDrum*i)*11);
  strokeWeight(12);
  stroke(114, 9, 183, Opptrans)
  line(bassArray[i]+13.5,vertic,bassArray[i]+13.5,vertic+(downBass*i)*11);
  strokeWeight(6);
  stroke(181, 23, 158, Opptrans)
  line(bassArray[i]+10,vertic,bassArray[i]+10,vertic+(downBass*i)*11);
}

//-----------------------------------------------------------------
//other
//-----------------------------------------------------------------

push();
translate(0,-140)
for(let p=0;p<5;p++){
  strokeWeight(4);
  stroke(252, 146, 237, Opptrans);
  line(0+p*50,(vertic/2+midUp*p),horiz-p*50,(vertic/2+midUp*p));
  strokeWeight(10);
  stroke(247, 37, 133, Opptrans);
  line(0+p*50,vertic/2+midUp*p,horiz-p*50,vertic/2+midUp*p);
  strokeWeight(4);
  stroke(252, 146, 237, Opptrans);
  line(0+p*50,(vertic/2-midUp*p),horiz-p*50,(vertic/2-midUp*p));
  strokeWeight(10);
  stroke(247, 37, 133, Opptrans);
  line(0+p*50,vertic/2-midUp*p,horiz-p*50,vertic/2-midUp*p);
}
pop();
//-----------------------------------------------------------------
//vocals
//-----------------------------------------------------------------
noStroke();
  textAlign(CENTER);
  fill(251, 158, 96, trans);
  textSize(upWordsSize);  

  text(words,horiz/2,upWords+120); //upwords
  textSize(80);
  fill(233, 229, 114);
  text(words,horiz/2,vertic/2+120);//big words
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
  //  text(words, width/2, height/3)