// js counter start

let counter = document.querySelectorAll(".counter");
let counterArr = Array.from(counter);

// counter mapping
counterArr.map((item) =>{
    let count = 0;
    // counter increement 
    function counters(){
        count++;
        item.innerHTML = count;
        if(count == item.dataset.number){
            clearInterval(stop);
        }
    }
    counters();
    // function loop
    let stop =  setInterval(counters, item.dataset.speed);
});

// js counter end