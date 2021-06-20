// each div area for answers
$wrongAnswerOne = $('.wrong-answer-one');
$wrongAnswerTwo = $('.wrong-answer-two');
$wrongAnswerThree = $('.wrong-answer-three');
$correctAnswer = $('.correct-answer');
$hintBox = $('.hint-box');

// div elements which include img
$smiley = $('.smiley');
$frown = $('.frown');

// hint area
$hint = $('.hint');

// button for reset
$btnReset = $('#btnReset');


// check the question sequence
var count = 0;

// question object
var questionObject = {

    questions: [
        'Which one of the following is the correct way for calling the JavaScript code?',
        'In the JavaScript, which one of the following is not considered as an error:',
        'Which of the following number object function returns the value of the number?',
        'Which one of the following operator is used to check weather a specific property exists or not?'
    ],
    hints: [
        'E.g., submit, onclick, and onload, etc.',
        'It just prints the infinity as a result.',
        'It returns the value of the parameter that was passed in it.',
        'Commonly used in looping statements to traverse array/objects'
    ],
    wrongA1: [
        'Preprocessor',
        'Syntax error',
        'toString()',
        'Exists'
    ],
    wrongA2: [
        'Triggering Event',
        'Missing of semicolons',
        'toLocaleString()',
        'exist'
    ],
    wrongA3: [
        'RMI',
        'Missing of Bracket',
        'toPrecision()',
        'within'
    ],
    correctA: [
        'Function/Method',
        'Division by zero',
        'valueOf()',
        'in'
    ]

}

// When document is ready
$(document).ready(() => {

    // Add event  - fade out - when user click wrong answer, frown image is shown
    $wrongAnswerOne.on('click', () => {
        $('.wrong-text-one').fadeOut('slow');
        $frown.show();
    });

    $wrongAnswerTwo.on('click', () => {
        $('.wrong-text-two').fadeOut('slow');
        $frown.show();
    });

    $wrongAnswerThree.on('click', () => {
        $('.wrong-text-three').fadeOut('slow');
        $frown.show();
    });

    // Add event - fade out - when user click correct answer, smiley image is shown
    $correctAnswer.on('click', () => {

        $('.wrong-text-one').fadeOut('slow');
        $('.wrong-text-two').fadeOut('slow');
        $('.wrong-text-three').fadeOut('slow');

        $frown.hide();
        $smiley.show('slow');

        // set 2 milli seconds before moving to a new question
        setTimeout(createNewQuestion, 2000);
    });

    // Add event - show/hide hint
    $hintBox.on('click', () => {

        $hint.slideToggle(500);

    });

    // Add button click event - reset
    $btnReset.on('click', reset);

});

// Reset a question
function reset() {

    // hide images
    $frown.hide();
    $smiley.hide();

    // hide hint
    $hint.hide('slow');

    // reset all answer options
    $('.wrong-text-one').fadeIn();
    $('.wrong-text-two').fadeIn();
    $('.wrong-text-three').fadeIn();

}

// Create a new question
function createNewQuestion() {

    //hide images
    $frown.hide();
    $smiley.hide();

    //hide hint
    $hint.hide('slow');

    // reset all answer options
    $('.wrong-text-one').fadeIn('fast');
    $('.wrong-text-two').fadeIn('fast');
    $('.wrong-text-three').fadeIn('fast');

    // Set the contents for a new question
    $('.question-text').text(questionObject.questions[count]);
    $('.hint .hide-hint-text').text(questionObject.hints[count]);
    $('.wrong-text-one').text(questionObject.wrongA1[count]);
    $('.wrong-text-two').text(questionObject.wrongA2[count]);
    $('.wrong-text-three').text(questionObject.wrongA3[count]);
    $('.correct-answer-text').text(questionObject.correctA[count]);

    //increase counter
    count++;

    // If count is greater than the number of questions, set to zero
    if (count == questionObject.questions.length) {
        count = 0;
    }
}