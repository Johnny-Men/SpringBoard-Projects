
 async function getData (){
    const response = await axios.get('https://cat-fact.herokuapp.com/facts')
    console.log(response.data);
    for (let fact of response.data){
        console.log(fact.text);
    }
 }

 async function testApi(){
    const response = await axios.get('https://api.spacexdata.com/v5/launches/upcoming')
    console.log(response.data)
    renderLaunches(response.data);
 }

 function renderLaunches(launches){
    const ul = document.querySelector('#launches');
    for(let launch of launches){
        const newLi = document.createElement('li');
        const name = document.createElement('b');
        name.innerText = launch.name;
        newLi.innerText = launch.flight_number;
        ul.append(newLi);
        newLi.innerHTML += ` ${launch.name}`
        console.log(launch.flight_number)
    }
 }
 
 const button = document.querySelector('#get-launches');

 button.addEventListener('click', function (){
    testApi();
 })


