// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
let table = [];
let categories = [];
/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

 async function getCategoryIds() {
    const res = await axios.get('https://jservice.io/api/categories/?count=50');
    const  allIds = [];
    for(let val of res.data){
        allIds.push(val.id);
    }
    for(let i = 0; i < 50; i++){
        const random = allIds[Math.floor(Math.random() * 50)]
        if(!categories.includes(random) && categories.length < 6)
        categories.push(random); 
        table.push(new Array(5));
    }
    return categories;
    
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

 async function getCategory(catId) {
    for(let i = 0; i < categories.length; i++){
    const res = await axios.get(`https://jservice.io/api/clues/?category=${catId[i]}`)
    for(let x = 0; x < 5; x++){
        const resData = res.data;
    const questionData = {};
    const random = resData[Math.floor(Math.random() * resData.length)];
    console.log(random)
    console.log(random.category.title)
    const title = random.category.title;
    questionData['category'] = title;
    questionData.clues = [{ question : random.question, answer :random.answer}];
    questionData['showing'] = '?';
    console.log(questionData);
    table[i][x] = questionData;
    }
    }
    
 }
       
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
const $table = $('<table>');
$table.attr('class', 'jeopardy');
const $tr = $('<tr>');
$tr.attr('class', 'thead-tr');
$table.append($tr);
let count = 0;

for(let val of categories){
    const res = await axios.get(`https://jservice.io/api/category/?id=${val}`);
    console.log(res.data.title)
    const newCategory = $(`<th>${res.data.title}</th>`);
    newCategory.attr('id', count)
    newCategory.attr('class',res.data.id)
    $tr.append(newCategory);
    count ++;
}
$('body').prepend($table);
const $tbody = $('<tbody>');
$tbody.attr('class', 't-body');
for(let y = 0; y <= categories.length-2;y++){
    const $newTr = $('<tr>');
   $tbody.append($newTr);
   for(let x = 0; x < 6; x++){
        const $td = $('<td>?</td>');
        $td.attr('class',categories[x]);
        $td.attr('id', `${y}-${x}`);
        $newTr.append($td);
   }
}
$table.append($tbody);
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

async function handleClick(target,x,y) {
   console.log(table[y][x].showing)
    if(table[y][x].showing === '?'){
        target.innerText = table[y][x].clues[0].question;
        table[y][x].showing = 'question';
    }
    else if(table[y][x].showing === 'question'){
        target.innerText = table[y][x].clues[0].answer;
    }
    else{return}
}


/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

 async function showLoadingView() {
    const $table =  $('table');
    $table.remove();
    table = [];
    categories = [];
    await setupAndStart();
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    const $button = $('<button>');
    $button.text('restart game').attr('id', 'restart');
    $('body').append($button);
    $(document).on('click', '#restart', () => {
        showLoadingView();
    })
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    await getCategoryIds();
    await getCategory(categories);
    fillTable();
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
$(document).on('click', 'td',function(evt){
    const targetTd = evt.target;
    const y = evt.target.id[0];
    const x = evt.target.id[2];
  handleClick(targetTd,y,x,);
})

$(document).ready( () => {
    setupAndStart();
    hideLoadingView();
})