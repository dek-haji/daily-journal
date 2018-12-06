const journalEntries = [
    {
        concept: "Array methods",
        date: "07/24/2018",
        entry: "We learned about array methods, but only forEach made sense",
        mood: "Ok"
    }
]
// let date = document.querySelector('#JournalDate');

// let concept = document.querySelector('#ConeptCovered');

// document.querySelector('#JournalEntry').addEventListener('keyup', function(event){
//     date.innerHTML = event.target.value;
//     concept.innerHTML = event.target.value;
// console.log(event)
// })

let article1 = document.querySelector('.entryLog'); 






document.querySelector('#ConeptCovered').addEventListener('keyup', function (event) {
    article1.innerHTML = (event.target.value);
 

})





// let sumbitButton = document.querySelector('#submit1');


// sumbitButton.addEventListener('click', function (event) {
// event.preventDefault()
//     console.log('you clicked me');
// })





// /*
//     Purpose: To create, and return, a string template that
//     represents a single journal entry object as HTML

//     Arguments: journalEntry (object)
// */
// const makeJournalEntryComponent = (journalEntry) {
//     for (var i = 0; i < journalEntries.length; i++) {

//     }
//     // Create your own HTML structure for a journal entry
//     return `

//     `
// }