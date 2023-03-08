const filterOdds = (...nums) =>{
   return nums.filter(num => num % 2 === 0);
};

const findMin = (...nums) => {
    return nums.reduce((val, num) => {
        if(val < num){
            return val;
        }
        return num;
    })
};


const mergeObjects = (one, two) => {
    return {
        ...one,
        ...two
    };
};

const nums = [1,2,3,4,5,6,7];
const vals = [1,9,44,8,66,22,14,67];

const removeRandom = (items) => {
    const randomNum = Math.floor(Math.random() * items.length);
    return items.filter(num => {
         return num !== items[randomNum];
    })
};

const extend = (array1, array2) => {
    const outcome = [...array1, ...array2];
    return outcome;
};

const names = {
    Michael : 'Jordan',
    John : "Mendonca",
    Lily : "Smith"
};

const addKeyVal = (obj,first,last) => {
    return outcome = {
        ...obj,
        [first] : last
    }
};

const colors = {
    1: 'red',
    2: 'green',
    3: 'yellow'
};

const favorites = {
    sport : "basketball",
    hobby : "fishing",
    food : "pasta"
}
const removeKey = (obj, key) => {
    const outcome = {
        ...obj
    }
    delete outcome[key];
    return outcome;
};

const combine = (obj1, obj2) => {
    const outcome = {
        ...obj1,
        ...obj2
    };

    return outcome;
};

const update = (obj,key,val) => {
    const copy = {
        ...obj
    };

    copy[key] = val;
    return copy;
}

