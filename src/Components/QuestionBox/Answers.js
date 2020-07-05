import React, { useState, useEffect } from 'react'

const Answers = (props) => {
    const [className, setClassName] = useState('')

    useEffect(() => {
        setClassName(props.className)
    }, [props.className, props.chap])

    function getChecked() {

        if (className === 'answerchecked') {
            setClassName('answer')
            const newChoose = [...props.choose]
            newChoose.pop(props.value)
            props.setChoose(newChoose)
        } else {
            setClassName('answerchecked')   
            const newChoose = [...props.choose]
            newChoose.push(props.value)
            props.setChoose(newChoose)
        }
        console.log(className)

    }

    const display = () => {
        if (props.reset) {
            if (props.choose.indexOf(props.value) !== -1)
                return <p className={props.value === props.correct ? 'result' : 'answerchecked'}>{props.value}</p>
            else
                return <p className={props.value === props.correct ? 'result' : 'answer'}>{props.value}</p>
        }
        return <p className={className} onClick={getChecked}>{props.value}</p>
    }
    
    
    return (

        <div className="mt-1" >
            {
                display()
                
                
            }
            

        </div>
    );
}

export default Answers;