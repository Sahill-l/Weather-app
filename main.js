const container = document.querySelector('.container')
const search = document.querySelector('.search_box button')
const weatherBox = document.querySelector('.weather_box')
const weatherDetails= document.querySelector('.weather_details')
const error404= document.querySelector('.not_found')
 

search.addEventListener('click',()=>{
    const API='c3db8f8ba62f9f2ec5b8ba6c2ac32e2e'
    const city = document.querySelector('.search_box input').value;

    if(city==""){
        alert("Please Enter Country Name")
    }
      
    try {
        // var targetElement = document.getElementById('elementToAnimate');
  
        // // Get the current AOS animation class
        // var currentAnimation = targetElement.getAttribute('data-aos');
    
        // // Change the AOS animation class based on your requirements
        // var newAnimation = (currentAnimation === 'fade-down') ? 'flip-left' : 'fade-down';
    
        // // Update the AOS attribute
        // targetElement.setAttribute('data-aos', newAnimation);

        //  // Refresh AOS to apply the changes
        // AOS.refresh();
        // console.log(newAnimation)
       

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&&units=metric`)
        .then(response => response.json())
        .then(
            json=>{
                console.log(json)
                // alert("ello")
                if(json.cod =='404'){
                    // container.style.height="400px";
                    weatherBox.classList.remove('active');
                    weatherDetails.classList.remove('active');
                    error404.classList.add('active');
                    return;
                }
        
                    // container.style.height="555px"
                    weatherBox.classList.add('active')
                    weatherDetails.classList.add('active')
                    error404.classList.remove('active')
                    
                const image = document.querySelector('.weather_box img');
                const temperature = document.querySelector('.weather_box .temperature');
                const description = document.querySelector('.weather_box .description');
                const humidity = document.querySelector('.weather_details .humidity span');
                const wind = document.querySelector('.weather_details .wind span');

                var iconcode1 = json.weather[0].icon;
                var iconurl1 = 'http://openweathermap.org/img/w/' + iconcode1 + ".png";
                image.src =iconurl1
                temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
                description.innerHTML=`${json.weather[0].description}`
                humidity.innerHTML=`${json.main.humidity}%`
                wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`
            })
    } catch (error) {
        console.log(error)
    }
})