var quote = [
{
    text:" “Be yourself; everyone else is already taken.” ",
    author:"--Oscar Wilde--",
},
{
    text:" “So many books, so little time.” ",
    author:"--Frank Zappa--",
},
{
    text:" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    author:"--Albert Einstein--",
},
{
    text:" “You only live once, but if you do it right, once is enough.” ",
    author:"--Mae West--",
},
{
    text:" “Be the change that you wish to see in the world.” ",
    author:"--Mahatma Gandhi--",
},
{
    text:" “A friend is someone who knows all about you and still loves you.” ",
    author:"--Elbert Hubbard--",
},
{
    text:" “We accept the love we think we deserve.” ",
    author:"--Stephen Chbosky--",
},
{
    text:" “Sometimes the questions are complicated and the answers are simple.” ",
    author:"--Dr. Seuss--",
},
{
    text:" “Everything you can imagine is real.” ",
    author:"--Pablo Picasso--",
},

{
    text:" “Life is like riding a bicycle. To keep your balance, you must keep moving.” ",
    author:"--Albert Einstein--",
},]


function newQuote(){
    var num =Math.floor(Math.random()*10);
    var theQuote = document.getElementById("quote");
    var theAuthor = document.getElementById("author");

    theQuote.innerHTML = quote[num].text;
    theAuthor.innerHTML =quote[num].author;
}

