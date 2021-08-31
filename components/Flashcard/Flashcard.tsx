import React from 'react'
import { FlashcardProps } from './types'

const Flashcard = ({ flashcard }: FlashcardProps): JSX.Element => {
    return (
        <div>
            {flashcard.question}
        </div>
    )
}

export default Flashcard