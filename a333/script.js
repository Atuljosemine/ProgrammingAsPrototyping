let sliderR
let sliderG
let sliderB
let sliderFS
let input1
let input2
let radio1
let dropdown
let meme
let w=700
let h=600
let fontchoice

let fontOptions = {
  "Arial" : "Arial, sans-serif",
  "Times New Roman" : "Times New Roman, serif",
  "Courier New" : "Courier New, monospace"
}




function setup() {
    let cnv = createCanvas(w,h);
    cnv.parent('column-two'); //sets <div id="column-two"></div> as parent container of the canvas

   let c=createP('Choose an image for your meme:');
    c.parent('column-one');
    c.class('general');
    c.id('t1');

    let dropdown = createSelect();
    dropdown.parent('column-one');
    dropdown.id('dd');//assigns id 'dd' to element
    dropdown.class('general');

    dropdown.option('Select an option','')//null value
    dropdown.option('Calm_before_the_storm')
    dropdown.option('Deskie')
    dropdown.option('Me_Explaining')
    dropdown.option('Hopeless')
    dropdown.option('Crowd_rushing_into_one_room')

   
   function changeImage()
   {
    let choice = dropdown.value();
    meme = loadImage("images/"+choice+".jpeg");
   }
   //stores the choice of the user and loads it into "meme"
   dropdown.changed(changeImage)
   //.changed is called when the value of a function changes
 

   let c1=createP('Choose your font:');
   c1.parent('column-one');
   c1.class('general');

   radio1=createRadio()
   radio1.parent('column-one');
   radio1.id('r');
   radio1.class('general');
   radio1.option('Arial');
   radio1.option('Courier New');
   radio1.option('Times New Roman');
   
   radio1.changed(updateFont)
  //.changed is called when the valye of a function changes
 updateFont()
  //function to update the main global variable with the user's choice
 

   let c2=createP('Enter your text:');
   c2.parent('column-one');
   c2.class('general');
   //writing the text printed above the input bar and defining the specifics

   input1=createInput("");
   input1.parent('column-one');
   input1.class('general');
   input1.id('IID');
   //creating an input and defining the specifics
   
   let c3=createP('(Optional) Enter your text:');
   c3.parent('column-one');
   c3.class('general');
   //writing the text printed above the input bar and defining the specifics
   

   input2=createInput("");
   input2.parent('column-one');
   input2.class('general');
   input2.id('IID2');
   //creating a second input and defining the specifics

   
   
    let c4=createP('R value:')
    c4.parent('column-one')
    c4.class('general')
    sliderR=createSlider(0,255,100) 
    sliderR.parent('column-one')
    sliderR.class('general')
    //creating a slider for Red Value and defining the specifics

   
   let c5=createP('G value:')
    c5.parent('column-one')
    c5.class('general') 
    sliderG=createSlider(0,255,100)
    sliderG.parent('column-one')
    sliderG.class('general')
    //creating a slider for Green Value and defining the specifics

   
   let c6=createP('B value:')
   c6.parent('column-one')
   c6.class('general') 
   sliderB=createSlider(0,255,100)
   sliderB.parent('column-one')
   sliderB.class('general')
   //creating a slider for Blue Value and defining the specifics
   
   let c7=createP('Font size:')//text printed above the slider
   c7.parent('column-one')
   c7.class('general') 
   sliderFS= createSlider(12,48,18)
   sliderFS.parent('column-one')
   sliderFS.class('general')
   //creating a slider for font size and defining the specifics

   let btn1 = createButton('Save Image'); //creates a button element called btn1
   btn1.mousePressed(Saving)

   btn1.parent('column-one'); //sets div id="column-two"></div> as the parent container of the element
   btn1.class('buttons'); //assigns the class 'buttons' to the element
   btn1.id('button1'); //assigns the id 'button1' to element
   
 
 function Saving()
 {
   saveCanvas(cnv,'mycanvas','jpeg')//selected canvas, filename, extension
 }
  
  }

  function updateFont()
{
  fontchoice = fontOptions[radio1.value()]
}
//function to store the selected font

  
  

function draw() {
  background('white');
  
  let valR = sliderR.value();
  let valG = sliderG.value();
  let valB = sliderB.value();
  let val4 = sliderFS.value();
  let valI1 = input1.value();
  let valI2 = input2.value();

  if(meme){
  image(meme, w/4, h/4, 350, 250); 
  }

  fill(valR,valG,valB)

  textFont(fontchoice+'')//assigns the font to the text. has to be in single quotes so follow the syntax

  textSize(val4);

  text(valI1, 20, 40);
  text(valI2, 20, 350);
}

  
    
    
    
  
  
  
  