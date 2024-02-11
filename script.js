var quote=["The purpose of our lives is to be happy.",
"Success is stumbling from failure to failure with no loss of enthusiasm." ,
"Do not go where the path may lead, go instead where there is no path and leave a trail.",
"The best way to predict the future is to create it.",
"You miss 100% of the shots you don't take.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Believe you can and you're halfway there." ,
"Life is what happens when you're busy making other plans." ,
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"Strive not to be a success, but rather to be of value.,",
"The only way to do great work is to love what you do.",
"It does not matter how slowly you go as long as you do not stop." ,
"The future belongs to those who believe in the beauty of their dreams." ,
"Your time is limited, don't waste it living someone else's life." ,
"The more I see, the more I realize that the one thing we can count on is never what we expect." ,
"It is never too late to be what you might have been." ,
"The only person you are destined to become is the person you decide to be." ,
"The purpose of our lives is to add value to the people of this generation and those that follow.",
"If you want to achieve greatness stop asking for permission." ,
"The best way to predict your future is to create it.",
"Friends are the family we choose.",
"My purpose: to lift your spirit and to motivate you.",
"Kindness is one thing you can’t give away. It always comes back.",
"Great things happen to those who don't stop believing, trying, learning, and being grateful.",
"Try to be a rainbow in someone else’s cloud.",
"Sometimes, when things are falling apart, they may actually be falling into place.",
"Fight for the things that you care about, but do it in a way that will lead others to join you.",
"Happiness is not by chance but by choice." ]

function randomquote(){
   let quotes=Math.floor(Math.random()*(quote.length));
   document.getElementById('quote').innerHTML=`"${quote[quotes]}"`;
}