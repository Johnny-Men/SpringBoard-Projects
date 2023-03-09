const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
};

const favoriteNum = 42;

const instructor = {
    istructor : 'John',
    [favoriteNum] : "That is my favorite"
    
};

const action = {
    firstName : 'John',
    sayHi(){
        return "hi";
    },
    sayBye(){
        return this.firstName + ' says bye';
    }
};

const generate = (species, action, noise) => {
    return ({
        species,
        [action](){
            return noise;
        }
    })
};
