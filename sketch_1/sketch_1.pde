ArrayList <PVector> trace = new ArrayList <PVector>();
ArrayList <PVector> RGB = new ArrayList <PVector>();

void setup(){
  size(800,800);
  int xpos = mouseX;
  int ypos = mouseY;
  trace.add(new PVector(xpos,ypos,0));
  
  float startR = random(255);
  float startG = random(255);
  float startB = random(255);
  
  RGB.add(new PVector(startR,startG,startB));
 
}

void draw(){
  background(0);
  
  PVector NewC = RGB.get(RGB.size()-1);
  
  float startR = NewC.x + random(-15,15);
  float startG = NewC.y + random(-15,15);
  float startB = NewC.z + random(-15,15);
  RGB.add(new PVector(startR,startG,startB));
  
  int xpos = mouseX;
  int ypos = mouseY;
  trace.add(new PVector(xpos,ypos,0));
  
  noStroke();
  for(int i = 2; i < trace.size(); i++){
    PVector newpos = trace.get(i);
    PVector newC = RGB.get(i);
    fill(newC.x,newC.y,newC.z);
    ellipse(newpos.x,newpos.y,100,100);
  }
}
