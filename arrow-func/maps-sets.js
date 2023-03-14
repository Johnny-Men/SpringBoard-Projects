// {1,2,3,4}
// 'ref'
// {[1,2,3] => true, [1,2,3] => false}

const hasDuplicate = (arr) => {
    const test = new Set(arr);
    console.log(test)
    if (test.size === arr.length){
        return false;
    }
    else{ return true;}
};

const vowelCount = (string) => {
    const m = new Map();
    const vowels = ['a','e','i','o','u'];
   for(let char of string){
    if(m.has(char) && vowels.indexOf(char) !== -1){
        m.set(char, m.get(char) + 1);
    }
    else if(!m.has(char) && vowels.indexOf(char) !== -1){
        m.set(char,  1);
    }
   }
   return m;
}