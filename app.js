let questionBox = {
    q1 : {  
       q: 'What is this word suppose to be?',
       a: 'RAM'
   }
   }
   
   
   let score = 0
   let theScoreBoard= document.querySelector('.points')
   theScoreBoard.innerHTML = score
   
   
   const askQuestion = (question, solution) => {
       let answer = prompt(question)
       if(answer === solution){
           score += 10
           theScoreBoard.innerHTML = score
           alert("Correct Answer")
           checkWinner()
       } else {
           score -= 10
           theScoreBoard.innerHTML = score
           alert("Incorrect Answer")
           checkWinner()
       }
   
   
   }
   
   
   const checkWinner = () => {
       if(score >= 10){
           alert("YOU HAVE WON THE GAME")
       }
   
   
   }
   
   
   
   
   