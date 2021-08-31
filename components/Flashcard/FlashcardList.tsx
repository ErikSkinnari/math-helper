import React from 'react'

import Flashcard from './Flashcard'
import { FlashcardsProps } from './types'

const FlashcardList = ({ flashcards }: FlashcardsProps): JSX.Element => {
  return (
    <div>
      {flashcards.map(flashcard => {
        return (
          <Flashcard
            flashcard={flashcard}
            key={flashcard.id}
          />
        )
      })}
    </div>
  )
}

export default FlashcardList
