
const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機は？',
    answers: ['スーパーファミコン','プレイステーション２','ニンテンドースイッチ','ニンテンドーDS'],
    correct: 'ニンテンドーDS'
  }, 
  
  {
    question: '無限列車編にメインに出演する柱は誰か',
    answers: ['無一郎','甘露寺','煉獄','伊之助'],
    correct: '煉獄'
  }, 
  
  {
    question: 'ヴァイオレットのブローチの宝石の色は何か',
    answers: ['青','緑','黄','赤'],
    correct: '緑'
  }, 
  
  {
    question: 'アニメ涼宮ハルヒ一期のエンディングは？',
    answers: ['ハレ晴レユカイ','止まれ','super driver','あああ'],
    correct: 'ハレ晴レユカイ'
  },

  {
    question: '偽SOS団の一員は誰キャラクターは誰',
    answers: ['榎本','橘','荒川','中河'],
    correct: '橘'
  },

  {
    question: '偽SOS団の一員は誰キャラクターは誰',
    answers: ['榎本','橘','荒川','中河'],
    correct: '橘'
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


