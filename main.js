// counter
let count1 = document.getElementById('count1')
let count2 = document.getElementById('count2')
let count3 = document.getElementById('count3')
let count4 = document.getElementById('count4')


let a = 2000;
let b = 0;
let c = 400;
let d = 50;
onscroll = function(){
    if(this.scrollY > 701.599975585937555){
        setInterval(function(){
            a++
            b++
            c++
            d++
            document.getElementById('count1').innerHTML = a;
            document.getElementById('count2').innerHTML = b;
            document.getElementById('count3').innerHTML = c;
            document.getElementById('count4').innerHTML = d;
            if(count1.innerHTML > 3000){
                count1.innerHTML = 3000;
            }
            if(count2.innerHTML > 320){
                count2.innerHTML = 320;
            }
            if(count3.innerHTML > 1000){
                count3.innerHTML = 1000;
            }
            if(count4.innerHTML > 587){
                count4.innerHTML = 587;
            }
        },30)
    }

}

