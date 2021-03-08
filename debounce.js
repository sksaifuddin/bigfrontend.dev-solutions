//6.question link - https://bigfrontend.dev/problem/implement-basic-debounce
// working solution - https://codepen.io/saif_shaik/pen/BaQqmdB?editors=1011

const debounce = (func, wait) => {
    let timer = null;
    return function(...args) {
      
     if(timer) {
        // this will stop provided function to run
        clearInterval(timer);
      }
  
      timer = setTimeout(() => {
        func(...args)
      }, wait)
    }
  }