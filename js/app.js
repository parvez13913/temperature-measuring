const apiKey = `2a9408a9cb0dc4f8a459a057a6ae2218`;
const searchTemperature = () => {
    const cityinput = document.getElementById('city-name');
    const cityText =  cityinput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
    cityinput.value = '';
}
const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}

const displayData = data => {
    console.log(data);
    setInnerText('city',data.name);
    setInnerText('temperature',data.main.temp);
    setInnerText('condition',data.weather[0].main);
}