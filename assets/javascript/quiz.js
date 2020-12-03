
//Timer 
var sec = 80;
function timer() {

    function startTimer(){
        var timer = setInterval(function(){
            sec--;
           document.getElementById('timerDisplay').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    // document.getElementById('incorrect').addEventListener('click', function() {
    //     sec -= 10;
    //     document.getElementById('timerDisplay').innerHTML='00:'+sec;
    // });
    startTimer();
};
timer()

//dispaly quiz questions

//create 10 questions
var choices = [
    {
        question: '1Commonly used data types DO NOT include:',
        options: ["strings", "boolean", "alert", "numbers" ],
        correct: "alert"
    },
    {
        question: '2Commonly used data types DO NOT include:',
        options: ["strings", "boolean", "alert", "numbers" ],
        correct: "alert"
    },
    {
        question: '3Commonly used data types DO NOT include:',
        options: ["strings", "boolean", "alert", "numbers" ],
        correct: "alert"
    },
]


var index = 0

function showQuestion(){
    console.log('choice',choices[index].question)

    document.getElementById('quiz-questions').innerHTML= choices[index].question

    //loop through 

    for (let i = 0; i < choices[index].options.length; i++) {
        console.log('option', choices[index].options[i])
    
    }

    index++



    //if index === 10; this mean quiz ended 

}

showQuestion()


