   /* 
const input = document.querySelector('.text');
const button = document.querySelector('.send-button');
const message = document.querySelector('.message');
const reply = document.querySelector('.reply')
button.addEventListener('click', () => {
    message.classList.add('js-message');

    message.innerHTML = input.value;
    input.value = '';
    const greetings = ['Hello', 'Hi', 'hello', 'hi', 'hey man'];

    greetings.forEach((text, index)=>{
        if (message.innerHTML = text){
       setTimeout(()=>{
        reply.classList.add('js-reply');
        reply.innerHTML = 'Typing....';
        setTimeout(()=>{
            reply.innerHTML = 'Hey how are you?'
        }, 2000)
        console.log(index);
        console.log(text);
       }, 2000);

    }
    else {
        setTimeout(()=>{
        reply.classList.add('js-reply');
        reply.innerHTML = 'Typing....';
        setTimeout(()=>{
            reply.innerHTML = 'i dont understand'
        }, 2000)

       }, 2000);

    }
});
    })


    if (message.innerHTML === 'Hello' || message.innerHTML === 'Hi' ){
       setInterval(()=>{
        reply.classList.add('js-reply');
        reply.innerHTML = 'Typing....';
        setInterval(()=>{
            reply.innerHTML = 'Hey how are you?'
        }, 2000)

       }, 2000);

    }
    else {
        setInterval(()=>{
        reply.classList.add('js-reply');
        reply.innerHTML = 'Typing....';
        setInterval(()=>{
            reply.innerHTML = 'i dont understand'
        }, 2000)

       }, 2000);

    }
});

*/
const input = document.querySelector('.text');
const button = document.querySelector('.send-button');
const message = document.querySelector('.message');
const reply = document.querySelector('.reply');
input.addEventListener('keyup',(event)=>{
    if (event.key === 'Enter'){
        runText()
    }
    });
button.addEventListener('click', () => {
    const userMessage = input.value;
    const greetings = ['Hello', 'Hi', 'hello', 'hi', 'hey man'];
 const questions = ['How are you?', 'how are you'];
const farewells = ['bye', 'goodbye', 'see you soon'];
const compliments = ['You are smart', 'You are quick'];

    message.classList.add('js-message');
    message.innerHTML = userMessage;

    input.value = '';
    setTimeout(() => {
        reply.classList.add('js-reply');
        reply.innerHTML = 'Typing....';
        setTimeout(()=>{
            if (greetings.includes(userMessage)) {
    reply.innerHTML = 'Hey how are you?';
}
else if (questions.includes(userMessage)) {
    reply.innerHTML = 'I am fine.';
}
else if (farewells.includes(userMessage)) {
    reply.innerHTML = 'See you later!';
}
else if (compliments.includes(userMessage)) {
    reply.innerHTML = 'Thank you!'
}
else {
    reply.innerHTML = "I don't understand";
}
        }, 2000)
    }, 2000);
});

function runText () {
    const userMessage = input.value;
    const greetings = ['Hello', 'Hi', 'hello', 'hi', 'hey man'];
 const questions = ['How are you?', 'how are you'];
const farewells = ['bye', 'goodbye', 'see you soon'];
const compliments = ['You are smart', 'You are quick'];

    message.classList.add('js-message');
    message.innerHTML = userMessage;

    input.value = '';
    setTimeout(() => {
        reply.classList.add('js-reply');
        reply.innerHTML = 'Typing....';
        setTimeout(()=>{
            if (greetings.includes(userMessage)) {
    reply.innerHTML = 'Hey how are you?';
}
else if (questions.includes(userMessage)) {
    reply.innerHTML = 'I am fine.';
}
else if (farewells.includes(userMessage)) {
    reply.innerHTML = 'See you later!';
}
else if (compliments.includes(userMessage)) {
    reply.innerHTML = 'Thank you!'
}
else {
    reply.innerHTML = "I don't understand";
}
        }, 2000)
    }, 2000);
};