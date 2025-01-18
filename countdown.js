let countDownClock = (number = 100, format = 'seconds') => {
  
    let hoursElement = document.querySelector('.hours');
    let minutesElement = document.querySelector('.minutes');
    let secondsElement = document.querySelector('.seconds');
    let countdown;
    convertFormat(format);
    
    
    function convertFormat(format) {
      switch(format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
          case 'hours':
          return timer(number * 60 * 60);            
      }
    }
  
    function timer(seconds) {
      let now = Date.now();
      let then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        let secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      },1000);
    }
  
    function displayTimeLeft(seconds) {
      hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
      minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  }
  

  countDownClock(2, 'hours');