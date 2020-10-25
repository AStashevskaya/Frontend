const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')
const btn = document.getElementById('btn')
const dateContent = document.getElementById('day')
const quateText = document.getElementById('quateText')
const quateAuthor = document.getElementById('quateAuthor')
// Показываем время путем вызывания постоянно функции шоутайм
const showAmPm = false
function showTime(){
    let today = new Date()
    let hours = today.getHours(),
        minuets = today.getMinutes(),
        seconds = today.getSeconds(),
        AmPm = hours >= 12 ? 'PM' : 'AM'
    
    time.innerHTML = `${hours}<span>:</span>${addZero(minuets)}<span>:</span>${addZero(seconds)} <span>${showAmPm ? AmPm : ''}</span> `    
   setTimeout(showTime, 1000);    
}
//смотрим в локал сторэдж есть ли там какий-то данные по поводу нэйма или фокуса, если есть записываем их, если нет - дефолтные значения
function showName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter your name, plz]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}
function showFocus (){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter your focus for today, plz]'
    } else {
        focus.textContent= localStorage.getItem('focus')
    }
}
// Добавляем нули перед однозначными минутами или секундами
function addZero(n){
    return (parseInt(n, 10) >= 10 ? '' : '0') + n
}
// Записываем в локал сторедж новые значения исходя из веденных данных
function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText)
            name.blur()
        }
    } else {
        localStorage.setItem('name',  e.target.innerText)
    }
}
function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText)
            focus.blur()
        }
    } else {
        localStorage.setItem('focus',  e.target.innerText)
    }
}
name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

function getTime (){
    let today = new Date()
    let hours = today.getHours()
    if (hours >=6 && hours < 12 ){
    return 'morning'
    } else if (hours >= 12 &&  hours < 18){
        return 'day'
    } else if (hours >=18 && hours < 24){
        return 'evening'
    } else return 'night'
}
function showGreeting(){
    greeting.textContent = `Good ${getTime()}`
}
// создаем генерацию рандомных чисел
function getRandomNumber(min, max){
let  rand = Math.round(min - 0.5 + Math.random()*(max - min + 1)) 
return addZero(rand)
}
//
const images = []
function getImagesForPeriod(period){
    for(let i = 0; i < 6; i++){
        let el = `${period}/${getRandomNumber(1, 20)}.jpg`
        images.push(el)
    }
}
function generateArrayOfImg(){
    getImagesForPeriod('night')
    getImagesForPeriod('morning')
    getImagesForPeriod('day')
    getImagesForPeriod('evening')  
}
const imgUrl = 'assets/images/'
let dayTime = getTime()

function makeBackground(n){
    let today = new Date(),
    hours = today.getHours()
    const body = document.querySelector('body')
    if(n){
        const src = `${imgUrl}${images[(hours + n) % images.length]}`    
        body.style.backgroundImage = `url(${src})`  
    }else{
    const src = `${imgUrl}${images[hours]}`    
    body.style.backgroundImage = `url(${src})`
    // hours >= 18 ? body.style.color = '#fff' : body.style.color = '#000'

    }
}

let n = 0
let disabled = false
btn.addEventListener('click', () =>{
    if(disabled) return
    disabled = true
 n++
 makeBackground(n)
 setTimeout(()=>{
     disabled = false
 }, 1000)
})

function showDay(){
    let today = new Date(),
        date = today.getDate(),
        month = today.getMonth(),
        day = today.getDay()
        switch(month){
            case 0: 
            month = 'January';
            case 1: 
            month = 'Febrary'
            break;
            case 2: 
            month = 'March'
            break;
            case 3: 
            month = 'April'
            break;
            case 4: 
            month = 'May'
            break;
            case 5: 
            month = 'June'
            break;
            case 6: 
            month = 'July'
            break;
            case 7: 
            month = 'Augast'
            break;
            case 8: 
            month = 'September'
            break;
            case 9: 
            month = 'October'
            break;
            case 10: 
            month = 'November'
            break;
            case 11: 
            month = 'December'
            break;
        }
        switch(day){
            case 0: 
            day = 'Sunday';
            case 1: 
            day  = 'Monday'
            break;
            case 2: 
            day  = 'Tuesday'
            break;
            case 3: 
            day  = 'Wensday'
            break;
            case 4: 
            day  = 'Thursday'
            break;
            case 5: 
            day  = 'Friday'
            break;
            case 6: 
            day = 'Saturday'
            break;
        }
        dateContent.innerText = `Today is ${day}, the ${date} of ${month}.`

}
    // ЦИТАТЫ
   const blaquatesUrl = 'https://type.fit/api/quotes'
let quatesList = []
   const btnQuote = document.getElementById('btn-quote')
   btnQuote.addEventListener('click',  getQuatesData)
   async function showQuates(arr){
       console.log(arr)
        let index = getRandomNumber(10, 100)
        quoteText.innerText = `"${arr[index].text}"`
        // quoteAuthor.innerText = arr[index].author === null ? '': arr[index].author
         quoteAuthor.innerText = arr[index].author    
    }
 
    // async function fetchQuates(url){
    //     try{
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         console.log(data)
    //         quatesList  = data.splice(0, 100)
    //         showQuates(quatesList)
         
    //     } catch {
    //         console.error()
    //     }
    // }
    // async function fetchQuates(url){
    //     try{
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         console.log(data)
    //         quatesList  = data.splice(0, 100)
    //         showQuates(quatesList)
         
    //     } catch {
    //         console.error()
    //     }
   // }
// fetchQuates (blaquatesUrl)
function getJson(url){
    return fetch(url)
            .then(data => data.json())
            .catch(console.log('err'))
}
 function getQuatesData() {
     getJson(blaquatesUrl)
     .then (data => showQuates (data))
 }
 getQuatesData()
 // Погода

 async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=43a0da3daca90b8278a58b70b53ab20d&units=metric`;
    // const res = await fetch(url);
    // const data = await res.json(); 
    const data = await getJson(url)
    console.log(data)
    if (data.cod == 404){
        weatherOther.innerText = `${data.message}`
        weatherOther.style.fontSize = '26px'
        temperature.innerText = ''
        weatherWrapper.style.alignItems = 'center'
    } else {
        weatherIcon.className = `owf owf-${data.weather[0].id}`
        temperature.textContent = `${data.main.temp}°C`
        weatherWrapper.style.alignItems = 'normal'
        weatherOther.style.fontSize = '16px'
     //   temperature.style.fontSize = '35px'
        weatherOther.innerHTML = `${data.weather[0].description}<br>
        <span class="weather-text">wind-speed:</span> ${data.wind.speed}   <span class="weather-text">km/h</span><br>
        <span class="weather-text">humidity:</span> ${data.main.humidity}`
    }
    }
  
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
 
const city = document.getElementById('city')
function showCity (){
    if(localStorage.getItem('city') === null){
        city.textContent = '[Enter your city, plz]'
    } else {
        city.textContent= localStorage.getItem('city')
    }
}
function setCity(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('city', e.target.innerText)
            getWeather()
            city.blur()
        }
    } else {
        localStorage.setItem('city',  e.target.innerText)
        getWeather()
    }

}
const weatherIcon = document.getElementById('weather-icon')
const temperature = document.getElementById('temperature')
const weatherOther = document.getElementById('weather-other')
const weatherWrapper = document.getElementById('weather-wrapper')
city.addEventListener('blur', setCity)
city.addEventListener('keypress', setCity)
document.addEventListener('DOMContentLoaded', getWeather);
getWeather()
showCity()
showTime()
showName()
showFocus ()
showGreeting()
generateArrayOfImg()
makeBackground()
showDay()




