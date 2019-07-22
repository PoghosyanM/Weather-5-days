navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    var inputValue = document.getElementById('input').value;
    var url3 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fd48bdf8a8b87b3c140f17625f4e2d57&units=metric`;
    fetch(url3)
    .then((resp)=> {
        return resp.json()
    })
    .then((data) => {
        document.getElementById('input').value = data.city.name;
        getResultFoo()
    })
    .catch((error)=>{
        console.log(error)
    })        
    });
setTimeout(() => {
    var element = document.getElementById('loading');
    element.classList += " hidden";
},3000);
function inner (name,value) {
    name.innerHTML = value;
}
function set (name,attribute,value) {
    name.setAttribute(attribute,value)
}
function append (name,value) {
    name.appendChild(value)
}
function getResultFoo () {   
        const API_URL = 'https://api.openweathermap.org/data/2.5/';
        const API_KEY = 'fd48bdf8a8b87b3c140f17625f4e2d57'; 
        var inputValue = document.getElementById('input').value;
        var url1 = `${API_URL}forecast?q=${inputValue}&appid=${API_KEY}&units=metric`;
        const url2 = `${API_URL}weather?q=${inputValue}&appid=${API_KEY}&units=metric`;
    if(inputValue){
    Promise.all([
        fetch(url1).then(resp => resp.json()),
        fetch(url2).then(resp => resp.json())
    ])
    .then(url => {
        const data = url[0];
        const data2 = url[1];
        console.log(data);
        console.log(data2);
        const ul = document.getElementById('ul');
        document.getElementById('input').value = '';
        document.getElementById('ul').innerHTML = '';
        document.getElementById('links').innerHTML = '';
        const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sa'];
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const forecast = data.list;
        for(let i = 0, j = 0; i < 5; i++ ){
            const dayName = days [new Date(forecast[j].dt * 1000).getUTCDay()];
            const monthName = months[new Date(forecast[j].dt * 1000).getUTCMonth()];
            const hour = forecast[j].dt_txt.split(' ')[0].split('-')[2];
            const [div,div2,temperatura,img,imgP,humidityIcon,humidity,description] = [document.createElement('div'),document.createElement('div'),document.createElement('p'),
            document.createElement('img'),document.createElement('p'),document.createElement('i'),
            document.createElement('p'),document.createElement('p')]
            inner(description,forecast[j].weather[0].description);
            inner(temperatura,`${forecast[j].main.temp} C`);
            inner(humidity,forecast[j].main.humidity);
            inner(div2,`${dayName} ${monthName}-${hour}`);
            set(temperatura,'class', 'temperatura2');
            set(imgP,'class', 'img2');
            set(humidity,'class', 'humidity2');
            set(description,'class', 'description2');
            set(humidityIcon,'class', 'fa fa-tint');
            set(div2,'class', 'element2');
            set(div,'class', 'element');
            set(img,'src', `http://openweathermap.org/img/w/${forecast[j].weather[0].icon}.png`);
            append(imgP,img);
            append(humidity,humidityIcon);
            append(div,div2);
            append(div,imgP);
            append(div,temperatura);
            append(div,humidity);
            append(div,description);
            document.getElementById('ul').appendChild(div);
            j += 8;
        }
        const event = document.getElementsByClassName('element');
        const li = document.getElementsByClassName('element2');
        for(let i = 0; i < event.length; i++) {
            event[i].addEventListener('click', () => {
                document.getElementById('allNavs').innerHTML = '';
                forecast.map((item)=> {
                    const dayName = days [new Date(item.dt * 1000).getUTCDay()];
                    const monthName = months[new Date(item.dt * 1000).getUTCMonth()];
                    if(`${dayName} ${monthName}` === li[i].innerHTML.split('-')[0]) {
                        const [result,hourDate,temperatura,img,imgP,humidityIcon,humidity,description] = 
                        [document.createElement('div'),document.createElement('p'),document.createElement('p'),
                        document.createElement('img'),document.createElement('p'),document.createElement('i'),
                        document.createElement('p'),document.createElement('p')]
                        inner(description,item.weather[0].description);
                        inner(temperatura,`${item.main.temp} C`);
                        inner(humidity,item.main.humidity);
                        inner(hourDate,item.dt_txt.split(' ')[1]);
                        set(hourDate,'class', 'hourDate');
                        set(temperatura,'class', 'temperatura');
                        set(imgP,'class', 'img');
                        set(humidity,'class', 'humidity');
                        set(description,'class', 'description');
                        set(humidityIcon,'class', 'fa fa-tint');
                        set(img,'src', `http://openweathermap.org/img/w/${item.weather[0].icon}.png`);
                        append(imgP,img);
                        append(humidity,humidityIcon);
                        append(result,hourDate);
                        append(result,imgP);
                        append(result,temperatura);
                        append(result,humidity);
                        append(result,description);
                        document.getElementById('allNavs').appendChild(result);
                    }
                })
            })
        }
            const [all,cityName,cityIcon,temp,weatherIcon,windSpeed,countryFlag,countryName,humidity,
                   humidityIcon,fb,twitter,google,pinterest,instagram,a,a1,a2,a3,a4,p] =
            [document.createElement('div'),document.createElement('div'),document.createElement('i'),
            document.createElement('div'),document.createElement('img'),document.createElement('div'),
            document.createElement('img'),document.createElement('div'),document.createElement('div'),
            document.createElement('i'),document.createElement('i'),document.createElement('i'),
            document.createElement('i'),document.createElement('i'),document.createElement('i'),
            document.createElement('a'),document.createElement('a'),document.createElement('a'),
            document.createElement('a'),document.createElement('a'),document.createElement('p')]
            const links = document.getElementById('links');
            const footer = document.getElementById('footer');
            inner(windSpeed,`Wind speed is - ${data2.wind.speed} m/s`);
            inner(cityName,data2.name);
            inner(temp,`${Math.round(data2.main.temp)} C`);
            inner(countryName,data2.sys.country);
            inner(humidity,`${data2.main.humidity} %`);
            inner(p,'&copy; 2019 Weather Directory.');
            set(all,'id','weather');
            set(cityIcon,'class','fa fa-map-marker');
            set(cityIcon,'id','cityIcon');
            set(humidityIcon,'class','fa fa-tint');
            set(humidityIcon,'id','humidityIcon');
            set(windSpeed,'id','windSpeed');
            set(humidity,'id','humidity');
            set(cityName,'id','city');
            set(countryName,'id','countryName');
            set(countryFlag,'id','countryFlag');
            set(weatherIcon,'id','weatherIcon');
            set(temp,'id','temp');
            set(countryFlag,'src',`https://www.countryflags.io/${data2.sys.country}/flat/64.png`);
            set(weatherIcon,'src',`http://openweathermap.org/img/w/${data2.weather[0].icon}.png`);
            set(fb,'class','fa fa-facebook-square');
            set(twitter,'class','fa fa-twitter-square');
            set(google,'class','fa fa-google-plus-square');
            set(pinterest,'class','fa fa-pinterest-square');
            set(instagram,'class','fa fa-instagram');
            set(a,'href','https://www.facebook.com/');
            set(a1,'href','https://twitter.com/');
            set(a2,'href','https://play.google.com');
            set(a3,'href','https://www.pinterest.com/');
            set(a4,'href','https://www.instagram.com/');
            set(a,'target','_blanc');
            set(a1,'target','_blanc');
            set(a2,'target','_blanc');
            set(a3,'target','_blanc');
            set(a4,'target','_blanc');
            append(all,windSpeed);
            append(all,humidity);
            append(all,humidityIcon);
            append(all,countryName);
            append(all,temp);
            append(all,weatherIcon);
            append(all,countryFlag);
            append(all,cityName);
            append(all,cityIcon);
            append(ul,all);
            append(a,fb);
            append(a1,twitter);
            append(a2,google);
            append(a3,pinterest);
            append(a4,instagram);
            append(links,a);
            append(links,a1);
            append(links,a2);
            append(links,a3);
            append(links,a4);
            append(footer,p);
            document.getElementById('statement').innerHTML = '';
        })
    .catch((error)=>{
        document.getElementById('ul').innerHTML = '';
        document.getElementById('allNavs').innerHTML = '';
        document.getElementById('links').innerHTML = '';
        document.getElementById('statement').innerHTML = 'ERROR 404: No results found for your request';
    })
    }else{
        document.getElementById('input').value = '';
        document.getElementById('ul').innerHTML = '';
        document.getElementById('allNavs').innerHTML = '';
        document.getElementById('links').innerHTML = '';
        document.getElementById('statement').innerHTML = "ERROR 404: You don't wrote the city name.";
    }       
}
const enter = (event) => {
    if(event.keyCode == 13){
        getResultFoo()
    }
}
//225