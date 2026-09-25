import { AnnouncementBar, Header } from './components/Top'
import Hero from './components/Hero'
import { Ticker, WhyCard } from './components/Trust'
import Styles from './components/Styles'
import { Artists, Faq, How, Reviews, Stats, Stories } from './components/Sections'
import { ChatFab, FinalCta } from './components/Footer'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <WhyCard />
        <Styles />
        <Ticker />
        <Stats />
        <How />
        <Stories />
        <Reviews />
        <Artists />
        <Faq />
      </main>
      <FinalCta />
      <ChatFab />
    </>
  )
}
