  const input = document.querySelector('.text');
const button = document.querySelector('.send-button');
const chatBody = document.querySelector('.body');

button.addEventListener('click', runText);

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      input.blur();
        runText();
    }
});

function runText() {
    const userMessage = input.value.trim();

    if (userMessage === '') {
        return;
    }

    const greetings = ['hello', 'hi', 'hey man'];
    const questions = ['how are you?', 'how are you'];
    const farewells = ['bye', 'goodbye', 'see you soon'];
    const compliments = ['you are smart', 'you are quick'];

    chatBody.innerHTML += `
        <p class="message">${userMessage}</p>
        <p class="reply">Typing...</p>
    `;

    input.value = '';

    const allReplies = document.querySelectorAll('.reply');
    const lastReply = allReplies[allReplies.length - 1];

    setTimeout(() => {
        const lowerMessage = userMessage.toLowerCase();

        if (greetings.includes(lowerMessage)) {
            randomReply(
                lastReply,
                'Hey, how are you?',
                "Hey, how's your day?",
                'Hey man'
            );
        }

        else if (questions.includes(lowerMessage)) {
            randomReply(
                lastReply,
                'Never been better.',
                "Man I've been great.",
                'I am fine :)'
            );
        }

        else if (farewells.includes(lowerMessage)) {
            randomReply(
                lastReply,
                'See you later.',
                'See you soon.',
                'Have a good day.'
            );
        }

        else if (compliments.includes(lowerMessage)) {
            lastReply.innerHTML = 'Thank you!';
        }

        else {
            lastReply.innerHTML = "I don't understand.";
        }

    }, 2000);
}

function randomReply(replyBox, firstReply, secondReply, thirdReply) {
    const randomNum = Math.random();

    if (randomNum <= 1 / 3) {
        replyBox.innerHTML = firstReply;
    }

    else if (randomNum <= 2 / 3) {
        replyBox.innerHTML = secondReply;
    }

    else {
        replyBox.innerHTML = thirdReply;
    }
}
