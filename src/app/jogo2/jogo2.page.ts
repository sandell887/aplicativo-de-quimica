import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo2',
  templateUrl: './jogo2.page.html',
  styleUrls: ['./jogo2.page.scss'],
})
export class Jogo2Page implements OnInit {
  questions = [
    {
      id: 1,
      question: "1º Os Hidrocarbonetos, são compostos formados exclusivamente por átomos de:",
      answers: [
        {
          id: 1,
          answer: 'a) Carbono e Oxigênio'
        },
        {
          id: 2,
          answer: 'b) Carbono e Hidrogênio'
        },
        {
          id: 3,
          answer: 'c) Carbono e Nitrogênio'
        },
        {
          id: 4,
          answer: 'd) Carbono e Água'
        },
        {
          id: 5,
          answer: 'e) Carbono e Arsênio'
        }
      ]
    },
    {
      id: 2,
      question: "2º As cadeias instauradas se caracterizam pela presença de:",
      answers: [
        {
          id: 1,
          answer: 'a) ramificações'
        },
        {
          id: 2,
          answer: 'b) hereroátomo'
        },
        {
          id: 3,
          answer: 'c) ligações simples'
        },
        {
          id: 4,
          answer: 'd) ligações duplas e/ou triplas'
        },
        {
          id: 5,
          answer: 'e) grupo funcional'
        }
      ]
    }
  ];
  //define a resposta com o numero da variavel
  correctAnswer = [
    {
      qid: 1,    //questão
      aid : 2    //alternativa correta
    },
    {
      qid: 2,    //questão
      aid: 4     //alternativa correta  
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
