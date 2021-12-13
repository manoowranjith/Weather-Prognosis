var button= document.querySelector('button');
function weather(city)
{
        console.log(city)
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=aefa83bff48a157b1bff1d9219f37f28')
        .then(response => response.json())
        .then(data => {
            document.getElementById('report').innerHTML = (data['main']['temp']  -273.15).toPrecision(2) + '˙C';
        })
        .catch(err => document.getElementById('report').innerHTML="No data found !");
}
