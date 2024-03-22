let questionBox = {
 q1 : {  
    q: 'What is this word suppose to be?',
    a: 'RAM'
},
q2 : {
    q:'What is this word suppose to be?',
    a: 'FAN'
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



const questionTwo = (question, solution) => {
    let answer = prompt(question)
    if(answer === solution){
        score += 10
        theScoreBoard.innerHTML = score
        alert("Correct Answer")
        checkWinner()
       
        
}

     else {
        score -= 10
        theScoreBoard.innerHTML = score
        alert("Incorrect Answer")
        checkWinner()
        
    }

}

function toggleDivs(){
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');

    if(div1.style.display === 'none') {
        div1.style.display = 'flex' ;
        div2.style.display = 'none';
    } else {
        div1.style.display = 'none';
        div2.style.display = 'flex';
    }
}



const checkWinner = () => {
    if(score >= 20){
        alert("YOU HAVE WON THE GAME")
    }

}

