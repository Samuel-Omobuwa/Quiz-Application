import React from 'react'

const StartScreen = ({totalQuestions, dispatch}) => {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <p>{totalQuestions} questions to test your React master</p>
      <button className='btn btn-ui'onClick={()=> dispatch({type: 'start'})}>Let's start</button>
    </div>
  )
}

export default StartScreen
