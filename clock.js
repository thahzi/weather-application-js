function getTime(){
    const time = new Date()
    console.log(time);

    const hour = time.getHours()
    console.log(hour);
    const min = time.getMinutes()
    console.log(min);
    const sec = time.getSeconds()
    console.log(sec);

    
    result.innerHTML = `${hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec} `


    setTimeout(() => {
        getTime()
    }, 1);    
}





getTime();