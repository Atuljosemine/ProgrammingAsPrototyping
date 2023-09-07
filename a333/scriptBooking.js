function setup(){
    let c4=createP('Welcome!');
    c4.parent('Booking-container');
    c4.class('c11');
    c4.id('c44');

    let c5=createP('Select your city :');
    c5.parent('Booking-container');
    c5.class('c11');
    c5.id('c55');

    let dropdown = createSelect();
    dropdown.parent('Booking-container');
    dropdown.id('dd');//assigns id 'dd' to element
    

    dropdown.option('Select an option','')//null value
    dropdown.option('Chennai')
    dropdown.option('Goa')
    dropdown.option('Hyderabad')
    dropdown.option('Mumbai')
    dropdown.option('Pune')

    let c6=createP('Select ticket type:');
    c6.parent('Booking-container');
    c6.class('c11');
    c6.id('c66');

    let dropdown1 = createSelect();
    dropdown1.parent('Booking-container');
    dropdown1.id('dd1');//assigns id 'dd1' to element
    

    dropdown1.option('Select an option','')//null value
    dropdown1.option('General : Rs.350')
    dropdown1.option('General + Perimeter seats : Rs.950')
    dropdown1.option('General + Middle Box seats : Rs.1250')
    dropdown1.option('General + VIP seats : Rs.1750')

    let c7=createP('Select number of tickets:');
    c7.parent('Booking-container');
    c7.class('c11');
    c7.id('c77');

    let dropdown2 = createSelect();
    dropdown2.parent('Booking-container');
    dropdown2.id('dd2');//assigns id 'dd1' to element
    
    dropdown2.option('Select an option','')//null value
    dropdown2.option('1')
    dropdown2.option('2')
    dropdown2.option('3')
    dropdown2.option('4')
    dropdown2.option('5')
    dropdown2.option('6')
    dropdown2.option('7')
    dropdown2.option('8')
    dropdown2.option('9')

}