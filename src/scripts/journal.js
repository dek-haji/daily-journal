
////////////////////////////////////////////////////////////////////////////////////
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


