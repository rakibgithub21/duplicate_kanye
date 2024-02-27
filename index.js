const loadQoutes = async () => {
    const res = await fetch('https://api.kanye.rest/');
    const data = await res.json();
    displayQuotes(data);
}


const displayQuotes = (quote) => {
    const quoteText = quote.quote;
    const quoteContainer = document.getElementById('quote-container');

    // quoteContainer.innerText = quoteText;
    quoteContainer.innerHTML = `
    <div class ="space-y-5">
    <p>"${quoteText}"</p>
    <p class = "text-end">- Kanye West</p>
    </div>

    `
}


const anchorLink = () => {

    // window.location.href = 'https://stock.adobe.com/?clickref=1011lyiKndGC&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=buysellads';

    const url = `https://stock.adobe.com/?clickref=1011lyiKndGC&mv=affiliate&mv2=pz&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=buysellads`;

    window.open(url, '_blank');
}





const quoteList = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    displayQuoteList(data)
}

const firstButton = document.getElementById('first-button');
const secondButton = document.getElementById('second-button');
const quotesContainer = document.getElementById('quote-list-container');
const qouteList = document.getElementById('quote-list');

const displayQuoteList = (quotes) => {
    quotes.forEach(qoute => {
        console.log(qoute);
        firstButton.classList.add('hidden');
        secondButton.classList.remove('hidden')
        const p = document.createElement('p');
        p.classList.add('font-bold')
        p.innerText = qoute.text
        qouteList.appendChild(p);
    });
}

const hideQuotesList = () => {
    secondButton.classList.add('hidden');
    firstButton.classList.remove('hidden');
    qouteList.innerText = ''
}






loadQoutes()











