import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.page.html',
  styleUrls: ['./jogos.page.scss'],
})
export class JogosPage implements OnInit {
  
questions = [
  {
    id: 1,
    question: "1º O composto butano é um hidrocarboneto e pode ser encontrado no gás de cozinha. Quantos carbonos ele possui sua estrutura?",
    answers: [
      {
        id: 1,
        answer: 'a) 01 Carbono'
      },
      {
        id: 2,
        answer: 'b) 12 carbonos'
      },
      {
        id: 3,
        answer: 'c) 09 carbonos'
      },
      {
        id: 4,
        answer: 'd) 04 carbonos'
      },
      {
        id: 5,
        answer: 'e) 02 carbonos'
      }
    ]
  },
  {
    id: 2,
    question: "2º O carbono é um elemento químico tetravalente, ou seja, consegue fazer 04 ligações. Na nomenclatura dos compostos orgânicos, o tipo de ligação é representada por o:",
    answers: [
      {
        id: 1,
        answer: 'a) afixo'
      },
      {
        id: 2,
        answer: 'b) sufixo'
      },
      {
        id: 3,
        answer: 'c)infixo'
      },
      {
        id: 4,
        answer: 'd) posfixo'
      },
      {
        id: 5,
        answer: 'e) prefixo'
      }
    ]
  }
];
//define a resposta com o numero da variavel
correctAnswer = [
  {
    qid: 1,    //questão
    aid : 4    //alternativa correta
  },
  {
    qid: 2,    //questão
    aid: 3     //alternativa correta  
  }
]

selectedAnswers = [];
score:number = 0;
final:any;
  constructor() { }

  ngOnInit() {
  }

  selectAnswer(qid, aid){
      if(this.selectedAnswers.length <= 0){  // check array length 
        this.selectedAnswers.push({qId: qid, aId: aid}); //if length 0 just add answer
      }else{ // else if already have answer check for question id if id Matches 
        this.selectedAnswers.map((val)=>{
          if(val.qId == qid){
            val.aId = aid; // update answer id
          }else{
            this.selectedAnswers.push({qId: qid, aId: aid});
          }
        })
      }
      let a = this.selectedAnswers.filter((v,i,a)=>a.findIndex(t=>(t.qId === v.qId))===i);
      console.log(a);
      this.final = a;
  }

  showAnswer(){
    this.score = 0;
    this.final.map((val, i)=>{
      this.correctAnswer.map((val2)=>{
        if(val2.qid == val.qId && val2.aid == val.aId){
          this.score +=1;
          console.log(this.score); 
        }
      })
    })

  }

}