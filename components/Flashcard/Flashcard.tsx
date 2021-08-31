import React , { useState } from 'react'

import { FlashcardProps } from './types'

const Flashcard = ({ flashcard }: FlashcardProps): JSX.Element => {
  const [flip, setFlip] = useState(false)

  return (
    <div 
    // eslint-disable-next-line max-len
      className={`${flip ? 'bg-indigo-100' : 'bg-gray-100'} max-w-sm rounded overflow-hidden shadow-lg w-full px-6 py-4 font-bold text-6xl flex justify-center items-center  h-56`} 
      onClick={() => setFlip(!flip)}
    >
      {flip ? flashcard.answer : flashcard.question }
    </div>
  )
}


export default Flashcard
