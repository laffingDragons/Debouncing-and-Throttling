// Debouncing in Javascript
let counter = 0;
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }
}

const betterFunction = debounce(getData, 300);



// Throttling in JavaScript

const expensiveFunction = () => {

    console.log(">>: expensiveFunction -> expensiveFunction");

}



let limit = 300

const throttle = (fn, limit) => {
    
    let flag = true;
    
    return function () {
        
        let context = this,
        args = arguments;
        
        if (flag) {
            
            fn.apply(context, args);
            
            flag = false;
            
            setTimeout(() => {
                flag = true
            }, limit);

        }
    }

}


const betterExpensiveFunction = throttle(expensiveFunction, limit);
window.addEventListener('resize', betterExpensiveFunction);