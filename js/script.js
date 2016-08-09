// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//event listener that loads a new background color anytime the "Show another quote" button is clicked.
document.getElementById('loadQuote').addEventListener("click", bg, false);


//Array of Objects containing quotes.
var quotes = [
  { quote: "The secret of getting ahead is getting started.",
  source: "Mark Twain",
  citation: "He probably did not even say it",
  year: "1886",
  tag: 'motivational'},
  {quote: "Do you mind if I sit back a little? Because your breath is very bad.",
  source: "Donald Trump",
  citation: "Dinner with Ivanka",
  year: "1992",
  tag: 'dumb'},
  {quote: "We are all born ignorant, but one must work hard to remain stupid.",
  source: "Benjamin Franklin",
  citation: "WuTang Forever",
  year: "1999",
  tag: 'truth'},
  {quote: "Tears come from the heart and not from the brain.",
  source: "Leonardo da Vinci",
  citation: "Cellphone Conversations",
  year: "1497?",
  tag: 'wisdom'},
  {quote: "Everyone has a plan 'till they get punched in the mouth.",
  source: "Mike Tyson",
  citation: "Sesame Street",
  year: "1987",
  tag: 'truth'},
  {quote: "Difficult times often bring out the best in people.",
  source: "Bernie Sanders",
  citation: "Being Bodacious with Bernie",
  year: "1984",
  tag: 'politics'},
  {quote: "What I like to drink most is wine that belongs to others.",
  source: "Diogenes",
  citation: "Facebook",
  year: "1647 B.C.",
  tag: 'humor'},
  {quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
  source: "Ernest Hemingway",
  citation: "Who really knows",
  year: "1925",
  tag: 'motivational'},
  {quote: "When you reach the end of your rope, tie a knot in it and hang on.",
  source: "Franklin D. Roosevelt",
  citation: "Presidential Sayings",
  year: "1936",
  tag: 'motivational'},
  {quote: "The only journey is the one within.",
  source: "Rainer Maria Rilke",
  citation: "something something",
  year: "1973",
  tag: 'introspective'},
  {quote: "The supreme art of war is to subdue the enemy without fighting.",
  source: "Sun Tzu",
  citation: "The Art of War",
  year: "long ass time ago",
  tag: 'warfare'}
];



//variables
var i=0;
var usedQuotes = [];


//Function to randomly select quote.
function getRandomQuote() {
    i = Math.floor(Math.random() * (quotes.length));
    if (usedQuotes.length < quotes.length) {
      if (usedQuotes.indexOf(quotes[i]) > -1 ) {
        return getRandomQuote();
      }  else {
          usedQuotes.push(quotes[i]);
          return quotes[i];
          }
      } else {
        usedQuotes = [];
        return getRandomQuote();
      }
      }



//Function to build quote and HTML.
function printQuote() {
    var selection = getRandomQuote();
    var buildHTML = '<p class="quote">' + selection.quote + '</p> <p class="source">' + selection.source;
      if (selection.citation !== undefined) {
        buildHTML += '<span class = "citation">' + selection.citation + '</span>';
      }
      if (selection.year !== undefined) {
        buildHTML += '<span class = "year">' + selection.year + '</span>';
      }
      if (selection.tag !== undefined) {
        buildHTML += '<span class = "tag">' + selection.tag + '</span>';
      }
    document.getElementById('quote-box').innerHTML =  buildHTML + '</p>';
  }

//function to generate Random background color.
  function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    if (hexR.length == 1) {
        hexR = "0" + hexR;
  }
    if (hexG.length == 1) {
        hexG = "0" + hexG;
  }
    if (hexB.length == 1) {
        hexB = "0" + hexB;
  }
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor.toUpperCase();
  }

  //function to Apply random Background color.
  function bg() {
    document.getElementById('background').style.background = getRandomColor();
  }

//Send random quote to the document.
printQuote();

//Calls background color function.
bg();

window.setInterval(printQuote, 30000);
window.setInterval(bg, 30000);
