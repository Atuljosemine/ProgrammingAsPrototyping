let picture;
function preload()
{
  picture=loadImage('images/QRCode.jpeg');
}

function setup(){

    let cnv = createCanvas(300,250);
    cnv.parent('success-container'); 
    cnv.id('cnv1');

   
    let c9=createP('Booking Successful!');
    c9.parent('success-container');
    c9.class('c11');
    c9.id('c99');

    let c10=createP('You may use the above QR code as your ticket. Cheers!');
    c10.parent('success-container');
    c10.class('c11');
    c10.id('c101');

    let btn1 = createButton('Download'); //creates a button element called btn1
   btn1.mousePressed(Saving)

   btn1.parent('success-container'); //sets div id="column-two"></div> as the parent container of the element
   btn1.class('buttons'); //assigns the class 'buttons' to the element
   btn1.id('button9'); //assigns the id 'button1' to element
   
 
 function Saving()
 {
   saveCanvas(cnv,'Ticket_Bacardi','pdf')//selected canvas, filename, extension
 }

}
function draw() {
    background('white');
    image(picture,0,0,300,250);
}
