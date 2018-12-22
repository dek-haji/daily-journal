const journalEntries = [
    {
        concept: "Array methods",
        date: "07/24/2018",
        entry: "We learned about array methods, but only forEach made sense",
        mood: "Ok"
    },

    {
        concept: "functions",
        date: "10/24/2018",
        entry: "We learned about functions, the logic is not clear for me",
        mood: "excited"
    },


    {
        concept: "protypes",
        date: "11/24/2018",
        entry: "We learned about protypes and how they function",
        mood: "happy"
    }
]
// console.log(journalEntries1)
//////////////////////////////////////////////////////////////////////////////////////
let entryRef = document.querySelector("entryLog");

const makeJournalEntryComponent = (journalEntries) => {
    // Create your own HTML structure for a journal entry
    return
    `<div>
    <h2>${concept}</h2>
    <h4>${date}</h4>
    <p>${entry}</p>
    <button${mood}"></button>
    </div>`
}

makeJournalEntryComponent(journalEntries)

const renderJournalEntries = (concept, date, entry, mood) => {
   journalEntries1 = {};
    journalEntries1.concept = concept;
    journalEntries1.date = date;
    journalEntries1.entry = entry;
    journalEntries1.mood = mood;
    return journalEntries1;
}




renderJournalEntries(journalEntries);


