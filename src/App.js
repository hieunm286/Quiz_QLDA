import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import Header from './Components/Header';
import quizBank12 from './QuestionData/Chap1-2'
import quizBank3 from './QuestionData/Chap3'
import quizBank4 from './QuestionData/Chap4'
import quizBank5 from './QuestionData/Chap5'
import quizBank6 from './QuestionData/Chap6'
import quizBank7 from './QuestionData/Chap7'
import quizBank8 from './QuestionData/Chap8'
import quizBank9 from './QuestionData/Chap9'
import quizBank10 from './QuestionData/Chap10'
import quizBank11 from './QuestionData/Chap11'

function App() {
  const [chap, setChap] = useState('12')
  const [quiz, setQuiz] = useState([])
  const [result, setResult] = useState(false)
  const [reset, setReset] = useState(false)
  const [className, setClassName] = useState('answer')
  const [choose, setChoose] = useState([])
  const [title, setTitle] = useState('Các khái niệm cơ bản về quản lý dự án')
  console.log(chap)
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
};

useEffect(() => {
    if (chap === '12') {
        setTitle('Các khái niệm cơ bản về quản lý dự án')
        quizBank12().then(question => {
            setQuiz(question)
        })
    } else if (chap === '3') {
        setTitle('Tổng quan về quản lý dự án phần mềm')
        quizBank3().then(question => {
            setQuiz(question)
        })
    } else if (chap === '4') {
        setTitle('Quản lý phạm vi dự án phần mềm')
        quizBank4().then(question => {
            setQuiz(question)
        })
    } else if (chap === '5') {
        setTitle('Ước lượng dự án và xây dựng ngân sách (dự toán)')
        quizBank5().then(question => {
            setQuiz(question)
        })
    } else if (chap === '6') {
        setTitle('Lập lịch và quản lý thời gian dự án')
        quizBank6().then(question => {
            setQuiz(question)
        })
    } else if (chap === '7') {
        setTitle('Quản lý chất lượng dự án')
        quizBank7().then(question => {
            setQuiz(question)
        })
    } else if (chap === '8') {
        setTitle('Quản lý phát triển, tổ chức dựa án và nguồn nhân lực')
        quizBank8().then(question => {
            setQuiz(question)
        })
    } else if (chap === '9') {
        setTitle('Quản lý rủi ro dự án')
        quizBank9().then(question => {
            setQuiz(question)
        })
    } else if (chap === '10') {
        setTitle('Quản lý thay đổi và cấu hình dự án')
        quizBank10().then(question => {
            setQuiz(question)
        })
    } else {
        setTitle('Kiểm tra, giám sát dự án')
        quizBank11().then(question => {
            setQuiz(question)
        })
    }
    
}, [chap])

function shuffle() {
    const newQuiz = [...quiz]
    var j, x, i;
    for (i = newQuiz.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = newQuiz[i];
        newQuiz[i] = newQuiz[j];
        newQuiz[j] = x;
    }
    setQuiz(newQuiz)
}

function viewResult() {
  setResult(true); 
  setReset(true); 
  scrollTop(); 
  setClassName('')
}

function resetQuiz() {
    setResult(false); 
    setReset(false)
    scrollTop(); 
    setClassName('answer')
    setChoose([])
    shuffle(); 
}
  return (
    <div className="container">
      <Header chap={chap} setChap={setChap} resetQuiz={resetQuiz} />
      <Quiz chap={chap} quiz={quiz} reset={reset} setReset={setReset} className={className} setClassName={setClassName} choose={choose} setChoose={setChoose} title={title} setTitle={setTitle} shuffle={shuffle} resetQuiz={resetQuiz} viewResult={viewResult} result={result} />
    </div>
  );
}

export default App;
