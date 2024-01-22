const quote=document.getElementById("quote");
const author=document.getElementById("author");

const yrl="https://api.quotable.io/random";

async function showquote(url){
const apiurl=await fetch(url)
var data=await apiurl.json();
quote.innerHTML=data.content;
author.innerHTML=data.author;
}
showquote(yrl);
function tweet(){
    document.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"%0A-------- by"+" "+author.innerHTML,"Tweet Window","width=600, height=300");
}