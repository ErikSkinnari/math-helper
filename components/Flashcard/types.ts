import Flashcard from "./Flashcard"

export type FlashcardsProps = {
    flashcards: Flashcard[]
}
export type FlashcardProps = {
    flashcard: Flashcard
}

export type Flashcard = {
    id: string
    question: string
    answer: string
}

