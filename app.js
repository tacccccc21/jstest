
const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機は？',
    answers: ['スーパーファミコン','プレイステーション２','ニンテンドースイッチ','ニンテンドーDS'],
    correct: 'ニンテンドーDS'
  }, 
  
  {
    question: '無限列車変にメインに出演する柱は誰か',
    answers: ['無一郎','甘露寺','煉獄','伊之助'],
    correct: '煉獄'
  }, 
  
  {
    question: 'ヴァイオレットのブローチの宝石の色は何か',
    answers: ['青','緑','黄','赤'],
    correct: '緑'
  }, 
  
  {
    question: 'ハルヒ一期のエンディングは',
    answers: ['はれはれゆかい','止まれ','スパドラ','あああ'],
    correct: 'はれはれゆかい'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')

const buttonLength = $button.length;



//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

 
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！')
    score++;
    }else{
    window.alert('残念！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
    setupQuiz();
    }else{
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');
    }
};


//正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}


