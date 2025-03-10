var quotes = [
    "Что разум человека может постигнуть и во что он может поверить, того он способен достичь", 
    "Стремитесь не к успеху, а к ценностям, которые он дает", 
    "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
    "Сложнее всего начать действовать, все остальное зависит только от упорства.",
    "Надо любить жизнь больше, чем смысл жизни."
];

var button_quotes = document.getElementById("button-quotes");
var push_quotes = document.getElementById("push_quotes");
var delete_quotes = document.getElementById("delete_quotes");

button_quotes.addEventListener("click", random_quotes);
push_quotes.addEventListener("click", addQuote);
delete_quotes.addEventListener("click", clearQuotes);

function random_quotes() {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const random = Math.floor(Math.random() * quotes.length);
    const randomVal = quotes[random];
    const p = document.createElement("p");

    p.textContent = randomVal;
    p.classList.add("anim");

    quoteDisplay.textContent = ''; 
    quoteDisplay.appendChild(p);
}

addEventListener("DOMContentLoaded", function() {
    random_quotes();
})

function addQuote() {
    const input = document.getElementById("input").value;
    const p = document.createElement("p");

    if (input.trim() !== "") {
        quotes.push(input); 
        p.textContent = input;
        quoteDisplay.appendChild(p);

        document.getElementById("input").value = "";
    }
}

function clearQuotes() {
    quotes = [];
    quoteDisplay.innerHTML = "";
    p.textContent = "Цитаты удалены!";
    quoteDisplay.appendChild(p);
}