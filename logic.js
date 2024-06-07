function enterkeypress(event){
    if(event.keyCode==13){
        search();
    }
}

search = async()=>{
    
    let placeName = place.value;
    
    if(placeName){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=f655893280a83607c873722c759c84fe&units=metric`)
        response.json().then((data)=>{
         console.log(data);  
         console.log(data.main.temp); 
         console.log(data.weather[0].main);
        

        //  temp.innerHTML =`${data.main.temp}`
    
         if(data.weather[0].main=='Clear'){
            img.src = "./Images/Clear.svg";
         }
        else if(data.weather[0].main=='Rain'){
            img.src = "./Images/Rain.svg";
        }
        else if(data.weather[0].main=='Snow'){
            img.src = "./Images/Snow.svg";
        }
        else if(data.weather[0].main=='Clouds'){
            img.src = "./Images/Clouds.svg";
        }
        else if(data.weather[0].main=='Mist'){
            img.src = "./Images/Mist.svg";
        }
        else if(data.weather[0].main=='Haze'){
            img.src = "./Images/Haze.svg";
        }

        

        temp.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`
        desp.innerHTML = `${data.weather[0].description}`
      
        humi.innerHTML = `${data.main.humidity}%
                            </div>
                            <p>Humidity</p>`
        wind.innerHTML = `  
                            ${data.wind.speed}Km/h
                            </div>
                            <p>Wind Speed</p>`


        })
    }
    else{
        alert("Please enter a place name");
    }
}

/* Clear,Rain,Snow,Clouds,Mist,Haze*/