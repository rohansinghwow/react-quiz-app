import React from "react";
import loadingGif from '../loading.gif' 

export default function Question(){

    const [questions, setQuestions] = React.useState(loadingGif)

    return (
        <div>
            <img className="loading" src={questions} alt="" />
            <div className='questions'>
            <div className='question-single'>
                <p>Which of the following characters from the game &quot;Overwatch&quot; was revealed to be homosexual in December of 2016?</p>
                <div className='options'>
                <button className='wrong-ans' href="#">Something</button>
                   <button href="#">Something</button>
                   <button href="#">Something</button>
                   <button href="#">Something</button>
                </div>
                
            </div>
            
        </div>
        </div>
    )
}