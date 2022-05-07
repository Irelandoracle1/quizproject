//first step: store questions, answers options
//in an array of obejects
var mathQuestions=[
    {
    question:"How many bones are in the human body?",
     answer:{
         a:206,
         b:80,
         c:209,
         d:399
     },
    
     rightAnswer:"a"
    
    },
    
    {
    question:"Which famous British physicist wrote A Brief History of Time?",
     answer:{
         a:"oracle john",
         b:"Stephen Hawking",
         c:"Godwin stallion",
         d:"Lucad samuel"
     },
    
     rightAnswer:"b"
    
    },
    
    {
    question:"Which Apollo moon mission was the first to carry a lunar rover?",
     answer:{
         a:"Apollo 1",
         b:"Apollo 19",
         c:"Apollo 17",
         d:"Apollo 15"
     },
    
     rightAnswer:"d"
    
    },

    {
        question:"Which oath of ethics taken by doctors is named after an Ancient Greek physician?",
        answer:{
             a:"Frank Whittle",
             b: "Sans Adams",
             C: "Hippocratic Oath",
             d: "Gaay core"
    },

    rightAnswer:"c"

},

    {
       question: "What modern day country was Marie Curie born in",
       answer:{
           a: "Poland",
           b: "France",
           c: "Norway",
           d: "Nigeria"
    },
    
    rightAnswer:"a"
},
    
];
    
    // second step: store all dom containers in a variable
    
    var scoreContainer=document.getElementById('score');
    var quizContainer=document.getElementById('quiz');
    var submitButton=document.getElementById('submit');

    //call to the dsiplay question function
    
    displayQuestions(mathQuestions, quizContainer)
    
    //step three: create  a quiz display function
    
    //this function diplays questions and answers
    //from a loop
     function displayQuestions(questions, quizcontainer){
      var displayOutput=[];
      var mathAnswers;
    
    for(var i=0; i<=questions.length; i++){
        mathAnswers=[];
    
        for(let letter in questions[i].answer){
            mathAnswers.push(
                '<div>'
            +'<input type="radio" name="question'+i+'" value="'+letter+'">'
            +letter+" : "+questions[i].answer[letter]
            +'</div>'
            );
            
    
        } //this the end of the answers loop
        displayOutput.push(
            '<div class="question">'
        +questions[i].question
        +'</div>'
        +'<div class="answers">'+mathAnswers.join('')+'</div>'
        );
        quizcontainer.innerHTML=displayOutput.join('')
    } //end of main for loop
    
    }
// this function helps us to display answers
//once the get quiz result button is clicked
    function displayResults(questions, quizcontainer, scorecontainer){
      //grab all the answers div
     var userAnswerContainers=quizcontainer.querySelectorAll('.answers')
     
     //track users answers
     var userAnswer="";
     //initilize the right answers
     let numberOfCorrectAnswers=0;

     for(var v=0; v<=questions.length - 1; v++){
        
      userAnswer=(userAnswerContainers[v].querySelector('input[name=question'+v+']:checked')).value;
     if(userAnswer===questions[v].rightAnswer){
        numberOfCorrectAnswers++;
         //add correct answer image
         userAnswerContainers[v].innerHTML="Correct"

     }else{
        userAnswerContainers[v].innerHTML="Wrong"
     }

     }
     scorecontainer.innerHTML=numberOfCorrectAnswers + "/" +questions.length
     }



    

    submitButton.onclick=function(){

        displayResults(mathQuestions, quizContainer, scoreContainer)
    }
    

  