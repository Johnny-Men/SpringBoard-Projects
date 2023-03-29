async function getRandomDog(){
    const res = await axios.get('https:dog.ceo/api/breeds/image/random');
    console.log(res.data);
    const img = document.querySelector('#dog');
    img.src = res.data.message;
}

async function getDogByBreed(breed){
    try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector('#dog');
    img.src = res.data.message;
    }catch (e){
        alert("Breed not found");
        getRandomDog();
    }
}

const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
form.addEventListener('submit', function(e){
    e.preventDefault();
    getDogByBreed(input.value);
    input.value = '';
})

async function getJoke(firstName,lastName){
    let res = await axios.get('http://api.icndb.com/jokes/random', {params: {firstName,lastName}});
    console.log(res.data.value.joke);
}

async function getUsers (){
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
}

async function createUser(){
    const res = await axios.post('https://reqres.in/api/users', {username: 'John', age:25});
    console.log(res);
}

async function getData (token){
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users',{ params : {token}});
    console.log(res);
}


async function createProfile (username, password, name){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup',{user:{name,username,password}});
console.log(res);
}


async function login (username, password){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login',{user:{username,password}});
    console.log(res.data.token);
return res.data.token;
}

async function getUsersWithAuth(){
    const token = await login('Jmen', 'Jerm97');
    getData(token);
}
getUsersWithAuth();