import "./Ana.css"
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import FooterProps from "../Props/FooterProps";

function SobreAna() {
  return (
  <>
  <Header/>
      <div className="conteiner">
      <NavBar/>
    
    <div className="blocoAoLado">
    <h1>Sobre Ana</h1>
      <p >Ana clara tem 16 anos, nasceu em Jundiaí em 17 de março, e tem seu irmão Guilherme Zamoner Dias. 
        Seu pai Marcelo Zamoner Dias a ama muito e sempre esteve muito presente em sua criação assim como 
        Ana Paula Massena Dias, sua mãe. Em sua casa tem sua cachorrinha chamada Cristal a qual é uma ótima 
        companhia. Ela estudou/ estuda no SESI-Vinhedo e cursa Analise de Desenvolvimento de Sistemas no SENAI, 
        porém já estudou na escola Joaquim António Ladeira no fundamental 2 e na Vila Pasti (Louveira) em sua 
        infância. Ela é Católica Apostólica Romana e sonha em se casar na igreja construindo uma bela família.
        Sua cor favorita é preta, gosta de strogonoff, sonha em viajar para Roma e treina muito na academia. 
        Sua áurea é angelical, sendo muito delicada e gentil. Assiste séries e filmes tendo como favorito 
        The Chosen.  Podemos enxergá-la como uma futura nutricionista de muito sucesso que irá ajudar muitas 
        pessoas. Ana é uma ótima pessoa e se socializa bem, é uma ótima companhia e fortemente confiável. 
        Trabalha bem em equipe o que leva a ter ótimas oportunidades profissionais e sociais. 🌞🥗🌼👑🩰👰🤗💑 </p>
    </div>
        </div>
        <FooterProps
        email="grupo5@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        autor="Grupo 5"
        />
        
  </>
  )
}
export default SobreAna