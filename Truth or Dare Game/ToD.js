document.addEventListener("DOMContentLoaded", function () {

    const truthQuestions = [
        "Have you ever cheated on a test?",
        "What's your biggest fear?",
        "What is the biggest or craziest lie you ever told your parents?",
        "What's the most embarrassing thing that's ever happened to you?",
        "Have you ever kissed a person of the same gender as you?",
        "Apart from the bedroom, where’s the kinkiest place you’d like to get intimate in the house?",
        "Tell me what I could do that would make you have the best orgasm?",
        "Which famous person do you wish you could be intimate with?",
        "Do you prefer hot feisty intimacy or slow and romantic?",
        "color underwear are you wearing right now?",
        "What’s the most unconventional thing you want to do with me next time become intimate?",
        "What’s the strangest thing about me that turns you on?",
        "What would we do in our own adult movie, and what would we call it?",
        "Have you ever made out with more than one person in a day?",
        "Have you ever touched yourself whilst staying in someone’s spare room?",
        "What do you fear the most?",
        "What was the last lie you told?",
        "What’s the weirdest nickname you’ve been given?",
        "Who was your worst kiss ever?",
        "Who’s the oldest person you’ve dated?",
        "Have you ever cheated on a partner?",
        "Have you ever thrown up in public?",
        "Have you ever lied about your age?",
        "Have you ever stolen anything from work?",
        "What’s the craziest thing you’ve done while you were drunk?",
        "What’s the most scandalous photo on your phone?",
        "Do you have a crush? If yes, Who?",
        "When was the last time you hooked up with someone?",
        "Have you ever been in trouble with the police?",
        "Has anyone ever walked in on you in the bathroom?",
        "What’s the most embarrassing thing your parents have caught you doing?",
        "Have you ever truly hated someone or something?",
        "Have you ever had a wardrobe malfunction?",
        "Who would you consider to be ‘the one that got away?",
        "What’s your biggest insecurity?",
        "Have you ever lied on your resume?",
        "Would you marry someone rich even if you weren’t in love with them?",
        "Have you ever been caught checking someone out(stalking)?",
        "What’s the weirdest thing you’ve ever done in front of a mirror?",
        "Do you prefer I wear lingerie or be naked in the bedroom?",
        "What’s the biggest conpiracy you belive to be likely true?",
        "Do guys focus on a girl’s skin issues (stretch marks etc) when being intimate?",
        "Do you think imperfections can make a woman look better?",
        "Suppose I’m yours for 20 minutes, what is the first thing you want to do with me?",
        "Have you ever count when I come to you while we make?",
        "With who you had your best romantic experience and describe that incident?",
        "Have you ever want to laugh after we make?",
        "Which one do you prefer the most – rough or smooth?",
        "Which one of your friends has a more good body than me?",
        "How often you dream of making?",
        "Have you ever got feelings when I take dirty with you?",
        "Is there any funniest thing happened when we make?",
        "Have you ever tried to stop me, when I make with you?",
        "How many times did you make with me even though you’re not in good mood?",
        "Do you prefer drinking when we make?",
        "Which one do you link, I mean position?",
        "Have you ever wanted to try a different angle with me but failed?",
        "Have you ever try to make with someone much older than or younger than your age?",
        "How many times did you cry?",
        "How many times can you do in a day?",
        "Do you ever cry while doing it?",
        "Have you made with someone of the same gender?",
        "Have you ever closed eyes while you make it?",
        "How much time did it take to complete your very experience?",
        "What do you prefer lights on or lights off?",
        "Have you ever feel shy for any reason?",
        "Have you ever feel of someone in your dreams?",
        "How many people saw you without anything?",
        "With how many people you hang out till date?",
        "Which type of dresses would you like to wear?",
        "Describe your girlfriend/boyfriend.",
        "Describe your partner.",
        "Have you ever maintain a physical relationship?",
        "How many times did you show your skin to others?",
        "Have you ever used a toy?",
        "How do you feel when you got it for the first time?",
        "Have you ever slept in the middle of it?",
        "What do you prefer the most –  trimming or waxing?",
        "Which style do you like more?",
        "How many times do you watch videos in a week?",
        "What do you like the most about your partner?",
        "Which types of movies you like most?",
        "Have you ever try to take video with your friends?",
        "How often do you talk to your boyfriend/girlfriend?",
        "Have you ever like an unknown person because he/she looks so attractive?",
        "When was the last time you trimmed?",
        "Do you like to have tattoos on your hand?",
        "If you got an opportunity to participate in a film, would you like to act or not?",
    ];

    const dareTasks = [
        "Dance for one minute on your fav' song.",
        "Call a random person in your contact list and brake up with him/her.",
        "Take a spoon full of salt.",
        "Take an embarrassing selfie and post it as your profile picture.",
        "Remove your socks with your teeth.",
        "Go next door with a measuring cup and ask for a cup of sugar.",
        "Write your name on the floor with your tongue.",
        "Stick a Hot Cheeto in your nose, and leave it there for five minutes.",
        "Open your front door and howl like a wolf for 30 seconds.",
        "Let the person to your right put duct tape on any part of your body they choose and rip it off.",
        "Put a bunch of honey on your nose and coat it with flour.",
        "Until the next round, talk super loud, like nobody can hear you.",
        "Call your crush.",
        "Take a shot of pickle juice.",
        "Talk to a pillow like it’s your crush.",
        "Pretend you’re a bird and eat cereal off the floor using only your mouth.",
        "Make out with your hand.",
        "Let someone else style your hair and keep it that way for the rest of the day.",
        "Use a brush like you’re talking into a microphone each time you speak.",
        "Color one of your front teeth black. (Eyeliner works!)",
        "Pick your friend’s nose.",
        "Fake cry.",
        "Make repulsive sounds while eating and drinking.",
        "Cross your eyes when talking.",
        "Talk without closing your mouth.",
        "Act like an animal of the group’s choosing.",
        "Get into a debate with a wall.",
        "Squirt your face with a squirt gun continuously while talking.",
        "See how many grapes you can stuff in your mouth.",
        "Hiccup in between each word.",
        "Burp the alphabet.",
        "Draw on your face with permanent marker.",
        "Dip your sock-covered feet in the toilet, and don't dry them off for the rest of the game.",
        "Eat a spoonful of mustard.",
        "Lift up the couch cushions, and if there is anything under them, you need to put it in your mouth for 10 seconds.",
        "Spin around 10 times and try to walk straight.",
        "Eat a raw egg.",
        "Let the group choose three random things from the refrigerator and mix them together. Then you have to eat the mixture.",
        "Stand up and do jumping jacks until your next turn.",
        "Rub your armpits and then smell your fingers.",
        "Dig through the trash and name everything you find.",
        "Make a video call to me and speak something for hours.",
        "Play with a toy.",
        "Make a video call and dance for any song you like.",
        "Sing your favorite songs in slow slang.",
        "Don’t brush your tooth for 2 days.",
        "By using your tongue, drink water.",
        "Make a compilation video while you dance for a sad song.",
        "Take a picture of your yoga position and send it to me.",
        "Open my favorite video and you’ve to do exactly what they do in that video.",
        "Take an ice cube and rub it on your face until it melts.",
        "Ask anyone of your friends like your face.",
        "Place a mirror in front of you and make weird faces.",
        "Ask someone for money.",
        "Ask your partner to rub your nose, but make sure that you could not get any feelings.",
        "touch your partner’s foot.",
        "Put your hand in my mouth for 5 minutes.",
        "Pour honey on my nose and clean with it without using hands.",
        "Make with your partner for 2 hours.",
        "Call your partner and don’t talk for 5 minutes and they should not cut the call.",
        "Dace for your favorite song.",
        "Pour some chocolate on the floor and clean it without using water.",
        "Give a speech about my body for 15 minutes.",
        "Take shower along with me.",
        "Don’t bath for 2 days.",
        "Clean your toilet with your toothbrush.",
        "Select any one video and send it to anyone in your contacts. You need to do this by closing your eyes.",
        "Show your tongue.",
        "Make dirty faces to your partner.",
        "Dance for slow songs.",
        "Open any site and submit a comment.",
        "Leave your body to your partner for 2 minutes.",
        "Kiss someone in public.",
        "Select anyone number from your contacts and do chat with them.",
        "Touch my legs.",
        "Make with your partner right now.",
        "Stop trimming your facial hair for 2 months.",
        "Call to an unknown number and talk something.",
        "Post something on your Facebook timeline and tag someone.",
        "Stop one unknown person and ask money to buy fruits.",
        "Select any item and give, play with that item for 2 minutes.",
        "Send any five video links to your partner.",
        "Upload any 3 videos in Snapchat and add three hashtags.",
        "Fill your mouth with candy.",
        "Go Facebook live for 5 minutes and say nothing.",
        "Explain your worst experience with anyone."
    ];


    function shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Shuffle truth questions array
    const shuffledTruthQuestions = shuffle(truthQuestions);

    // Shuffle dare tasks array
    const shuffledDareTasks = shuffle(dareTasks);

    const questionDisplay = document.getElementById("myLabel");
    const truthButton = document.getElementById("myTruth");
    const dareButton = document.getElementById("myDare");

    let truthIndex = 0;
    let dareIndex = 0;

    truthButton.addEventListener("click", () => {
        if (truthIndex >= shuffledTruthQuestions.length) {
            // All truth questions have been displayed
            questionDisplay.textContent = "No more truth questions!";
        } else {
            const randomItem = shuffledTruthQuestions[truthIndex];
            questionDisplay.textContent = randomItem;
            truthIndex++;
        }
    });

    dareButton.addEventListener("click", () => {
        if (dareIndex >= shuffledDareTasks.length) {
            // All dare tasks have been displayed
            questionDisplay.textContent = "No more dare tasks!";
        } else {
            const randomItem = shuffledDareTasks[dareIndex];
            questionDisplay.textContent = randomItem;
            dareIndex++;
        }
    });

});

