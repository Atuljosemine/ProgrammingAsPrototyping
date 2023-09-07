
function setup()
{  
 
//Age Gate
    let c1=createP('Before we proceed...');
   c1.parent('sub-container');
   c1.class('c11')
   c1.id('c11I')

   let c2=createP('Are you of legal drinking age?(21+)');
   c2.parent('sub-container');
   c2.class('c11')
   c2.id('c22')

   //Creating a radio of options for age checking
   radio1=createRadio()
   radio1.parent('sub-container');
   radio1.id('r1');
   radio1.option('Yes');
   radio1.option('No');

   let submitButton = createButton('Submit');
    submitButton.parent('sub-container');
    submitButton.class('buttons');
    submitButton.id('button7');

// Function to handle the user's choice
function handleChoice() {
  const selectedValue = radio1.value();
  if (selectedValue === 'Yes') {
    window.location.href = 'booking.html'; // Redirect to booking.html
  } else if (selectedValue === 'No') {
    window.location.href = 'Regret.html'; // Redirect to error.html
  }
}

submitButton.mousePressed(handleChoice);

}


