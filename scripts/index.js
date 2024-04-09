const randomText = document.getElementById("randomText");

let randomChoices = [
    "Welcome to Hideout!",
    "Game on, escape reality!",
    "Unblocked fun awaits you!",
    "Escape the school monotony!",
    "Join the fun-filled adventure!",
    "Boredom? Not here!",
    "Hide and seek paradise!",
    "Winter wonderland vibes?",
    "Summer sunshine awaits!",
    "Earth is small, huh?",
    "Dive into excitement!",
    "Explore endless possibilities!",
    "Fun is just beginning!",
    "Play without limits!",
    "Endless gaming adventures await!",
    "Unlock joy and excitement!",
    "Chase fun, embrace happiness!",
    "School blues? Say goodbye!",
    "Discover joy in gaming!",
    "Break free from routine!",
    "Game like there's no tomorrow!",
    "Adventure awaits, start now!",
    "Fun for everyone here!",
    "Joy and excitement await!",
    "Jump into the fun!",
    "Let's go on an adventure!",
    "Get ready, it's playtime!",
    "Enjoy the ride with us!",
    "Blast off into fun!",
    "Feel the thrill of gaming!",
    "School? Nah, Hideout!",
    "Hideout's calling your name!",
    "Time to play and relax!",
    "Explore more, discover joy!",
    "Unwind and play freely!",
    "School's out, fun's in!",
    "Find your joy with us!",
    "It's game time, folks!",
    "Freedom at last, join us!",
    "Enter the Hideout now!",
    "Escape reality, play games!",
    "Let's play, shall we?",
    "The fun begins now!",
    "Playground of endless fun!",
    "Game changer for you!",
    "Unleash your inner gamer!",
    "Go wild with us!",
    "Hide and seek, anyone?",
    "Break the rules, have fun!",
    "Ditch the books, play games!",
    "Embrace the gaming fun!",
    "Unleash the fun with us!",
    "Fun's waiting for you!",
    "Level up your fun now!",
    "Find your escape here!",
    "Let loose and have fun!",
    "Unlock happiness through games!",
    "No more dull days ahead!",
    "School-free zone here!",
    "Adventure calls, answer it now!",
    "Ready for a gaming revolution?",
    "Step into our world of fun!",
    "Discover joy in every click!",
    "Join us for endless entertainment!",
    "The ultimate gaming destination!",
    "Fun galore, here and now!",
    "Games for every mood!",
    "Let the gaming extravaganza begin!",
    "Unblock the fun, unblock Hideout!",
    "Play like there's no tomorrow!",
    "Embrace the gamer within you!",
    "Unlock the treasure trove of fun!",
    "Experience joy like never before!",
    "Welcome to the land of endless play!",
    "The antidote to boring school days!",
    "Break free and play your way!",
    "Let's make boredom a thing of the past!",
    "Adventure awaits just a click away!",
    "No more waiting, let's start playing!",
    "Enter Hideout, enter a world of fun!",
    "Gaming bliss awaits, join us now!",
    "Get ready to have a blast!",
    "Fun is our middle name!",
    "Escape reality and dive into fun!",
    "Unleash your imagination with us!",
];

randomText.innerText = randomChoices[Math.floor(Math.random() * randomChoices.length - 1) + 1];