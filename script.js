    //set constants to collect hour,secon and minute hands
    const hourSpace = document.querySelector('#hour_div');
    const minuteSpace = document.querySelector('#minute_div');
    const secondSpace = document.querySelector('#second_div');

    //collect present date,hour,minute and second
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //calculate position of the hands using present hour,minute and second
    let hourState = hour*360/12 + ((minute * 360/60)/12) ;
    let minuteState = (minute * 360/60) + (second* 360/60)/60;
    let secondState = second * 360/60;
function startClock() {

    secondState += 6;
    minuteState += (6/60);
    hourState += (3/360);



    //apply these numbers as degrees in the  styles to change the hands position
    hourSpace.style.transform = 'rotate(' + hourState + 'deg)';
    minuteSpace.style.transform = 'rotate(' + minuteState + 'deg)';
    secondSpace.style.transform = 'rotate(' + secondState + 'deg)';

}
//call the function every 1 second
var start = setInterval(startClock, 1000);
