const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

//array for quotes
let apiQuotes = [];

//show new quote
function newQuote(){
    //pick a random quote from api quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //check if author exists
    if (!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }

    //check quote length to determine styling
    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

}

// get quotes from API
async function getQuotes(){ //async function heißt dass es das laden der seite nicht beeinflusst
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl); //get all data from api into this const - AWAIT means that it will only create and populate the variable once all is fetched - at no point is there an undefined const variable
        apiQuotes = await response.json(); //json format the fetched data
        newQuote();
    } catch (error){
        //catch error here
    }
}

function tweetQuote(){
    //use BACK TICKS because link with variables => TEMPLATE STRING
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    //open twitter in a new tab using blank
    window.open(twitterUrl, '_blank');
}

//event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


//on load
getQuotes();