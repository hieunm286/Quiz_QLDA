import React from 'react'

import QuestionBox from '../QuestionBox'

function Quiz(props) {
    return (
        <div>
            <h4 className="text-center mb-5">{props.title}</h4>
            {
                props.quiz.map(({ id, question, images, answers, correct }) => (
                    <QuestionBox key={id} stt={id} question={question} images={images} option={answers} correct={correct} result={props.result} reset={props.reset} className={props.className} choose={props.choose} setChoose={props.setChoose} chap={props.chap} />
                ))
            }
            {
                !props.result ? <button className="btn btn-success mb-4" onClick={props.viewResult}>Xem kết quả</button> :
                <button className="btn btn-success mb-4" onClick={props.resetQuiz}>Làm lại</button>
            }
            
        </div>
    )
}

export default Quiz
