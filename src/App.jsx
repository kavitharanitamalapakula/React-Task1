import './App.css'
import { Banner } from './components/banner'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { MainSection } from './components/mainsection'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <MainSection />
      <Footer />
    </div>
  );
}
export default App
