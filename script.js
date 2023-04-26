console.log('testing');

let apiQuotes = [];

//show new quote
function newQuote(){
    //pick a random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);

}

// get quotes from API
async function getQuotes(){ //async function heißt dass es das laden der seite nicht beeinflusst
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        //catch error here
    }
}


//on load
getQuotes();