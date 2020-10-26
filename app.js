const question = 'ゲーム史上、最も売れたゲーム機は？';

const answers = ['スーパーファミコン','プレイステーション２','ニンテンドースイッチ','ニンテンドーDS'];

const correct = 'ニンテンドーDS';

document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button')

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < $button.length){
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonLength++;
}

//正誤判定
$button[0].addEventListener('click', ()=>{
  if(correct === $button[0].textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});

$button[1].addEventListener('click', ()=>{
  if(correct === $button[1].textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});

$button[2].addEventListener('click', ()=>{
  if(correct === $button[2].textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});

$button[3].addEventListener('click', ()=>{
  if(correct === $button[3].textContent){
  window.alert('正解！')
  }else{
  window.alert('残念！');
  }
});