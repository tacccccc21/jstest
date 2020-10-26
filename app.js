const question = 'ゲーム史上、最も売れたゲーム機は？';

const answers = ['スーパーファミコン','プレイステーション２','ニンテンドースイッチ','ニンテンドーDS'];

const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button')


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}
}

setupQuiz();

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];



//正誤判定
$button[0].addEventListener('click', (e)=>{
  if(correct === e.target.textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});

$button[1].addEventListener('click', (e)=>{
  if(correct === e.target.textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});

$button[2].addEventListener('click', (e)=>{
  if(correct === e.target.textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});

$button[3].addEventListener('click', (e)=>{
  if(correct === e.target.textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});