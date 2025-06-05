const quotes = [
    "Believe in yourself and all that you are.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Wish it. Do it.",
    "Stay positive. Work hard. Make it happen.",
    "Good things come to those who hustle.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The only way to do great work is to love what you do.",
    "The future depends on what you do today.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Doubt kills more dreams than failure ever will.",
    "Be stronger than your excuses.",
    "Act as if what you do makes a difference. It does.",
    "Work hard in silence, let your success make the noise.",
    "You are capable of amazing things.",
    "Don’t limit your challenges. Challenge your limits.",
    "Push yourself, no one else is going to do it for you.",
    "Success is what comes after you stop making excuses.",
    "It always seems impossible until it’s done.",
    "Start where you are. Use what you have. Do what you can.",
    "You don’t need to see the whole staircase, just take the first step.",
    "Stay hungry. Stay foolish.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Action is the foundational key to all success.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Start each day with a positive thought.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Don’t give up. The beginning is always the hardest.",
    "Your limitation—it’s only your imagination.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Wish it. Do it.",
    "Stay positive. Work hard. Make it happen.",
    "Good things come to those who hustle.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The only way to do great work is to love what you do.",
    "The future depends on what you do today.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Doubt kills more dreams than failure ever will.",
    "Be stronger than your excuses.",
    "Act as if what you do makes a difference. It does.",
    "Work hard in silence, let your success make the noise.",
    "You are capable of amazing things.",
    "Don’t limit your challenges. Challenge your limits.",
    "Push yourself, no one else is going to do it for you.",
    "Success is what comes after you stop making excuses.",
    "It always seems impossible until it’s done.",
    "Start where you are. Use what you have. Do what you can.",
    "You don’t need to see the whole staircase, just take the first step.",
    "Stay hungry. Stay foolish.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Action is the foundational key to all success.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Start each day with a positive thought.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Don’t give up. The beginning is always the hardest.",
    "You miss 100% of the shots you don’t take.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don’t happen. You create them.",
    "Try not to become a man of success. Rather become a man of value.",
    "Never give up on a dream just because of the time it will take to accomplish it.",
    "Success is not in what you have, but who you are.",
    "Don’t wait. The time will never be just right.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Don’t be afraid to give up the good to go for the great.",
    "The only place where success comes before work is in the dictionary.",
    "You just can’t beat the person who never gives up.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "I’m not telling you it is going to be easy, I’m telling you it’s going to be worth it.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Failure is not the opposite of success; it’s part of success.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "Only those who dare to fail greatly can ever achieve greatly.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Do what you can, with what you have, where you are."
  ];
  let random = Math.floor(Math.random() * 100);

const quoteField = document.querySelector(".quote");
quoteField.innerHTML=quotes[random];

let button = document.getElementById('newQuote');

newQuote.addEventListener('click',function(e){
    e.preventDefault();
    const randomQuote=Math.floor(Math.random()* quotes.length);
    const newQuote = quotes[randomQuote]
    quoteField.innerHTML=newQuote;
console.log(randomQuote)

});

const quote = quotes[random];
const encodedQuote = encodeURIComponent(quote);
const whatsappLink = `https://wa.me/?text=${encodedQuote}`;
document.querySelector("#whatsappShare").href = whatsappLink;

const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodedQuote}`
document.querySelector('#facebookShare').href=facebookLink;

const xLink = `https://twitter.com/intent/tweet?text=${encodedQuote}`;
document.querySelector("#twitterShare").href = xLink;
