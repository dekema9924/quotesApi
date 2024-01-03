let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let new_quote = document.querySelector('.new-quote');
let title = document.querySelector('.title')




//quote of the day
async function fetchData(){
    const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '648f851e60msha4fb2d06e576b16p172595jsndf296a87739c',
		'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};
    const response =  await fetch(url, options);
    // waits until the request completes...
 
    let data = await response.json();

    quote.innerHTML = data.text;
    author.innerHTML = data.author;
  
}
fetchData();


//get random quote
async function randomQuote(){
    const url = 'https://quotes-api8.p.rapidapi.com/quotes/max-char/70';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '648f851e60msha4fb2d06e576b16p172595jsndf296a87739c',
		'X-RapidAPI-Host': 'quotes-api8.p.rapidapi.com'
	}   
};
const response = await fetch (url, options)
let result = await response.json();

let random = Math.floor(Math.random()*result.length )

quote.innerHTML = result[random].quote
author.innerHTML = result[random].source
title.innerHTML = `
    <h1>New Quote</>
`

}
new_quote.addEventListener('click', randomQuote)