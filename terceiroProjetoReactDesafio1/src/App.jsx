import './App.css'
import Header from "./components/Header"
import Footer from "./components/FooterProps"
import FooterProps from './components/FooterProps'

function App() {
  return (
    <>
     <Header/>



     <FooterProps
        email="careca@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        autor="Grupo 5"
      
      />
    </>
  )
}

export default App
