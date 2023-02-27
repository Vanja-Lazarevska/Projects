console.log('We are live and ready to make a great app!');
document.body.style.backgroundImage = "url('src/img/background1.png')";

let page1 = document.getElementById('page1')
let page2 = document.getElementById('page2')
let page3 = document.getElementById('page3')
let statistics = document.getElementById('statistics')

window.onload = () => {page2.style.display = 'none', page3.style.display = 'none'}
statistics.addEventListener('click', () => {
    show(page2, page3, page1, about, statistics, hourly)
});

let hourly = document.getElementById('hourly')
hourly.addEventListener('click', () => {
    show(page1, page3, page2, about, hourly, statistics)

});

let about = document.getElementById('about')
about.addEventListener('click', () => {
    show(page1, page2, page3, hourly, about, statistics)
});

function show(page1, page2, page3, link1, link2, link3){
    page1.style.display = 'none'
    page2.style.display = 'none'
    page3.style.display = 'block'

    link1.setAttribute('class', 'nav-link')
    link2.setAttribute('class', 'nav-link active')
    link3.setAttribute('class', 'nav-link')
}


let inputOfCity = document.getElementById('inputOfCity')
let btn = document.getElementById('enterBtn')

btn.addEventListener('click', () => {
    containerForFirstPage.innerHTML = ''
    getData()  
})

function getData() {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'
    const keyApi = 'c49b1936854af42e41c0e85da1c86804'
    let value = inputOfCity.value
    value === '' ? inputOfCity.value = 'Enter city' : inputOfCity.value 
    console.log(value)
    let url = `${baseUrl}?q=${value}&units=metric&APPID=${keyApi}`
    console.log(url)
    fetch(url)
    .then(response =>{
        return response.json()
    })
    .then(data => {
        console.log(data)
        let dataWeNeed = data.list
        console.log(dataWeNeed)
        makeTable(dataWeNeed)
        arrayFunction(dataWeNeed, containerForFirstPage)
    })
    .catch(err => console.log(err))
}

function makeTable(dataFromUrl) {
    let container = document.getElementById('textForPage2')
    let tbody = document.createElement('tbody')
    container.classList.add("table-responsive")
    let table = document.createElement('table')
    console.log(container)
    table.classList.add("table")
    table.classList.add("table-info")
    table.classList.add("table-striped")
    table.classList.add("table-hover")

    makeHeaders(table)

    table.appendChild(tbody)

    dataFromUrl.forEach(element => {
        let trow = document.createElement('tr')
        let newArray = [element.dt_txt, element.main.temp, element.main.humidity, element.wind.speed, element.weather[0].description]
   
        for(let i = 0; i< newArray.length; i++){
            let tdata = document.createElement('td')
            tdata.innerText = newArray[i]
            trow.appendChild(tdata)
        }  
        let img = document.createElement('img')
        img.setAttribute('src',`http://openweathermap.org/img/w/${element.weather[0].icon}.png`)
        let tdata = document.createElement('td')
        tdata.appendChild(img)
        trow.appendChild(tdata)   
        tbody.appendChild(trow)

    });
    container.innerHTML = table.outerHTML

}

function makeHeaders(row) {
    let array = ['Data and Time', 'Temperature', 'Humidiy', 'Wind Speed', 'Description', 'Icon']
    let thead = document.createElement('thead')
    row.appendChild(thead)
    for(let i = 0; i < array.length; i++){
        let theader = document.createElement('th')
        theader.innerText = array[i]
        thead.appendChild(theader)
    }
}

let containerForFirstPage = document.getElementById('firstPage')
let urlForTemp = 'src/img/323617.jpg';
let urlForHumidity = 'src/img/humidity.jpg'

function arrayFunction(data,container) {
    let arr = []
    let minTemp = Infinity;
    let maxTemp = -Infinity;
    let maxHumidity = -Infinity;
    let minHumidity = Infinity;
    let sum = 0 
    let sum2 = 0
    let avg
    let avg2
    let timeMinTemp
    let timeMaxTemp
    let timeMinHumidity
    let timeMaxHumidity
    for(let i = 0; i < data.length; i++){
    arr.push({temperature: Math.round(data[i].main.temp), timeOfDay: data[i].dt_txt, humidity: data[i].main.humidity})

    if(minTemp > arr[i].temperature){
        minTemp = arr[i].temperature
        timeMinTemp = arr[i].timeOfDay
    }
    else if(maxTemp < arr[i].temperature){
        maxTemp = arr[i].temperature
        timeMaxTemp = arr[i].timeOfDay
    }

    if(minHumidity > arr[i].humidity){
        minHumidity = arr[i].humidity
        timeMinHumidity = arr[i].timeOfDay
    }
    else if(maxHumidity < arr[i].humidity){
        maxHumidity = arr[i].humidity
        timeMaxHumidity = arr[i].timeOfDay
    }
    sum += arr[i].temperature
    avg = Math.round(sum / data.length)
    sum2 += arr[i].humidity
    avg2 = Math.round(sum2 / data.length)    
    
}
    makeCard('Temperature', minTemp, maxTemp, container, avg, timeMinTemp, timeMaxTemp, urlForTemp)
    makeCard('Humidity', minHumidity, maxHumidity, container, avg2, timeMinHumidity, timeMaxHumidity, urlForHumidity)

}

function makeCard(headerInputed, min, max, container,average, dAndTMin, dAndTmax, url){

    let div = document.createElement('div')
    div.classList.add("card")
    div.style = "width: 22rem"
    container.appendChild(div)
    div.classList.add("bg-info")
    div.classList.add("border-primary")
    let img = document.createElement('img')
    img.setAttribute('src', url)
    img.classList.add("card-img-top")   
    img.style = "width: 18em" 
    img.style = "height: 18em"
    div.appendChild(img)
    let newDiv = document.createElement('div')
    newDiv.classList.add("card-body")
    div.appendChild(newDiv)
    let paragraph = document.createElement('p')
    paragraph.classList.add("card-text")
    paragraph.innerText = `Min: ${min} max: ${max} average: ${average}`
    newDiv.appendChild(paragraph)
    let newParagraph = document.createElement('p')
    newParagraph.classList.add("card-text")
    newDiv.appendChild(newParagraph)
    let small = document.createElement('small')
    small.classList.add("text-muted")
    headerInputed === 'Temperature' ? small.innerText = `Coldest weather: ${dAndTMin} warmest: ${dAndTmax}` : small.innerText = `Min humidity: ${dAndTMin} max: ${dAndTmax}`
    newParagraph.appendChild(small)
}