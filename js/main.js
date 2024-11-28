var Quotes=[

    {
        Quote:"“Be yourself; everyone else is already taken.”",
        Author:"Oscar Wilde"
    },
    {
        Quote:"“Be the change that you wish to see in the world.”",
        Author:"Marilyn Monroe"
    },
    {
        Quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        Author:"Bernard M. Baruch"
    },
    {
        Quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        Author:"Dr. Seuss"
    },
    {
        Quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        Author:"Maya Angelou"
    },
    {
        Quote:"“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
        Author:"Ralph Waldo Emerson"
    }
];









function  DisplayQuote(){
    var rand=Math.floor(Math.random()*Quotes.length);

    var cartoona=``;
    cartoona+=`
    <h3 class="designqoute">${Quotes[rand].Quote}"</h3>
    <h3 class="designqoute2">-- ${Quotes[rand].Author}</h3>
    `
    document.getElementById('Quota').innerHTML=cartoona;
    
}