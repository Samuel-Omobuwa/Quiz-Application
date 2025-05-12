import React from 'react'

const StartScreen = ({totalQuestions}) => {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <p>{totalQuestions} questions to test your React master</p>
      <button className='btn btn-ui'>Let's start</button>
    </div>
  )
}

export default StartScreen
