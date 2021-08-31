import { Navbar } from '../Header/Navbar'
import { Footer } from '../Footer/Footer'
import { useState } from 'react'
import FlashcardList from '../Flashcard/FlashcardList'

export default function Layout({ children }: any) {
    const [cards, setCards] = useState(SAMPLE_CARDS)
  return (
    <>
      <Navbar />

      <FlashcardList flashcards={cards}/>

      <main>{children}</main>

      <Footer />
    </>
  )
}

const SAMPLE_CARDS = [
    {
        id: '1',
        question: '3 + 3',
        answer: '6'
    },
    {
        id: '2',
        question: '3 + 9',
        answer: '12'
    },
    {
        id: '3',
        question: '3 + 5',
        answer: '8'
    }
]
