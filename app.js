
const quiz = [
  {
    question: 'SOS団の集合駅と言えば？',
    answers: ['東口','西口','南口','北口'],
    correct: '北口',
    comentary:'モデルは阪急電鉄西宮北口駅、近くにはいつも利用する喫茶ドリームも存在する。',
    comentary2:'正解は北口。モデルは阪急電鉄西宮北口駅、近くにはいつも利用する喫茶ドリームも存在する。'
  }, 
  
  {
    question: 'キョンは何萌えでしょうか',
    answers: ['ツインテール','ポニーテール','金髪','姫カット'],
    correct: 'ポニーテール',
    comentary:'「いつだったかお前が見せたポニーテールは反則なまでに似合っていたぞ！」\n第６話においてキョンが閉鎖空間を脱出する際に発したセリフ。今後喧嘩した後にポニーテールだったり、ポニーテールにしようとする素振りが確認できる。',
    comentary2:'正解はポニーテール。\n「いつだったかお前が見せたポニーテールは反則なまでに似合っていたぞ！」\n第６話においてキョンが閉鎖空間を脱出する際に発したセリフ。今後喧嘩した後にポニーテールだったり、ポニーテールにしようとする素振りが確認できる。'
  }, 
  
  {
    question: 'wa,wa,wa 忘れ物〜',
    answers: ['国木田','朝倉','長門','谷口'],
    correct: '谷口',
    comentary:'谷口の名セリフ。実は谷口役の声優、白石稔さんのアドリブ、本来台本には『忘れ物、忘れ物ー』とあったらしい',
    comentary2:'正解は谷口。\n谷口の名セリフ。実は谷口役の声優、白石稔さんのアドリブ、本来台本には『忘れ物、忘れ物ー』とあったらしい'
  }, 
  
  {
    question: 'アニメ涼宮ハルヒ一期のエンディングは？',
    answers: ['ハレ晴レユカイ','止まれ','super driver','冒険でしょでしょ？'],
    correct: 'ハレ晴レユカイ',
    comentary:'社会現象と言っても過言ではないほど有名な曲、秋葉原では道端で集まって踊っていたり、海外の刑務所でもラジオ体操のような位置付けで踊られたりもした。',
    comentary2:'正解は。ハレ晴レユカイ。\n社会現象と言っても過言ではないほど有名な曲、秋葉原では道端で集まって踊っていたり、海外の刑務所でもラジオ体操のような位置付けで踊られたりもした。'
  },

  {
    question: '偽SOS団の一員は誰キャラクターは誰',
    answers: ['榎本','橘','荒川','中河'],
    correct: '橘',
    comentary:'モデルは阪急電鉄西宮北口駅、近くにはいつも利用する喫茶ドリームも存在する。',
    comentary2:'正解は北口。モデルは阪急電鉄西宮北口駅、近くにはいつも利用する喫茶ドリームも存在する。'
  },

  {
    question: '編集長★一直線の会報発行において古泉が担当したジャンルは',
    answers: ['ホラー','童謡','恋愛小説','ミステリ'],
    correct: 'ミステリ',
    comentary:'くじ引きで担当ジャンルを決めてていたが、古泉曰くハルヒの能力で団員それぞれの知りたい価値観のジャンルが当てられている。\nキョンが恋愛小説、長門がホラー、みくるが童話\nとなっておりハルヒはくじ引きではなく自由に記事を書いた。なんとその記した内容こそが時間平面理論の基礎だった。つまりこれがみくるら未来人が使うタイムマシンの基盤となった。。',
    comentary2:'正解はミステリ。\nくじ引きで担当ジャンルを決めてていたが、古泉曰くハルヒの能力で団員それぞれの知りたい価値観のジャンルが当てられている。\nキョンが恋愛小説、長門がホラー、みくるが童話、となっておりハルヒはくじ引きではなく自由に記事を書いた。なんとその記した内容こそが時間平面理論の基礎だった。つまりこれがみくるら未来人が使うタイムマシンの基盤となった。'
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
    window.alert('正解！\n' + quiz[quizIndex].comentary)
    score++;
    }else{
    window.alert('残念！\n' + quiz[quizIndex].comentary2);
    }

    quizIndex++; 

    if(quizIndex < quizLength){
    setupQuiz();
    }else{
      window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です'
      
      
      
      
      
      
      );
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


