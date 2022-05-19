let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let x;
hours.innerText = '00';
minutes.innerText = '00';
seconds.innerText = '00';
mseconds.innerText = '00';



let current = false;
    pause.onclick = function() {
        if(current === false) {
        clearInterval(x);
        current = true;
        } else {
            timer();
            current = false;
        };
    };


    reset.onclick = function() {
ms = 0;
s = 0;
m = 0;
h = 0;
hours.innerText = '00';
minutes.innerText = '00';
seconds.innerText = '00';
mseconds.innerText = '00';
clearInterval(x);
secondDeg = 0;
hoursDeg = 0;
minutDeg = 0;
secondsUpd();
hoursUpd();
minutsUpd();
    };



start.onclick = function() {
        timer();
    };



    function secondsUpd() {
        let secondDeg = s * 6;
        arrow1.style.transform = 'rotate(' + secondDeg + 'deg)';
    }
    function hoursUpd() {
        let hoursDeg = (h *30) + (m*0.5);
        arrow2.style.transform = 'rotate(' + hoursDeg + 'deg)';
    }
    function minutsUpd() {
        let minutDeg =   m * 6;
        arrow3.style.transform = 'rotate(' + minutDeg + 'deg)';
    }



let timer = function() {
    x = setInterval(function() {
        secondsUpd();
        hoursUpd();
        minutsUpd();
        ms++;
        hours.innerText = h;
        minutes.innerText = m;
        seconds.innerText = s;
        mseconds.innerText = ms;
        if(ms<10) {
            mseconds.innerText ='0'+ms;
        } else{
            mseconds.innerText = ms;
        }
        if(s<10) {
            seconds.innerText = '0'+s;
        } else {
            seconds.innerText = s;
        }
        if(m<10) {
            minutes.innerText = '0'+m;
        } else {
            minutes.innerText = m;
        }
        if(h<10) {
            hours.innerText = '0'+h;
        } else {
            hours.innerText = h;
        }


        
         if (ms>=99) {
             s++;
             ms = 0;
             if(s>59) {
                 m++;
                 s = 0;
                 if(m>59) {
                     h++;
                     m = 0;
                 };
             };
         };
     },10);
     current = false;
    };
    
    

    