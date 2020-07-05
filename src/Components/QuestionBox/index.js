import React, { useState, useEffect } from 'react'
import Answers from './Answers'

const QuestionBox = ({ stt, question, option, images, correct, result, reset, className, choose, setChoose, chap }) => {
    const [answers, setAnswers] = useState(option)
    
    useEffect(() => {
        setAnswers(option)
    }, [option])

    return (
        <div className="mt-2 mb-4">
            <h5>{question}</h5>
            {images ? <img src={images} alt="Question" width={500} height={300} />
                : <div></div>}
            {
                answers.map((value, index) => (
                    <Answers key={index} stt={stt} index={index} value={value} correct={correct} result={result} reset={reset} className={className} choose={choose} setChoose={setChoose} chap={chap} />
                ))
            }
        </div>
    )
}

export default QuestionBox
