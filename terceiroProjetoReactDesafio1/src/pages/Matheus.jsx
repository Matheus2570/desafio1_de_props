import "../components/Header.css";
import "./Matheus.css";
import Logo from "../assets/Logo-grupo5.png";
import NavBar from "../components/NavBar";  
import FooterProps from "../Props/FooterProps";

function Matheus() {
  return (
    <>
      <header className="header">
        <h1>Conhecendo Grupo 5</h1>
        <img src={Logo} className="logo" alt="Imgem React" />
      </header>

      <main className="blocoMaior">
        <NavBar />
        <div className="blocoAoLado">
          <h1>Matheus</h1>
          <p>
            Matheus tem 17 anos e nasceu em Vinhedo no dia 16 de setembro. Ele é
            filho único e é muito amado por seus pais. Seu cachorro Boris o
            acompanhou durante sua infância e segue sendo seu melhor amigo. Ele
            está no último ano do ensino médio do SESI e cursando TI no SENAI.
            Sua comida favorita é pizza, principalmente com bordas recheadas.
            Ele gosta de jogar online e assistir TV, o que o torna um pouco
            introvertido. Matheus é uma pessoa bem prática e não muito
            transparente. Ele é ganancioso e tem uma mente aberta para
            crescimento profissional e social. É gentil, mas delimita fronteiras
            para não ser interrompido ou ultrapassado. Além disso, é flexível e
            não tem favoritismo em vários aspectos. Ele pratica musculação
            semanalmente e se mantém saudável, além de praticar alguns esportes
            escolares. Matheus pretende seguir no ramo policial, o que combina
            com sua personalidade. Por mais escondido que seja, Matheus é uma
            pessoa muito carinhosa e cuidadosa, com alta sensibilidade e
            empatia. Ele sonha em construir uma família e viajar por diversos
            lugares, construindo uma história de vida significativa.
          </p>
        </div>
      </main>

      <FooterProps
        email="grupo5@gmail.com"
        telefone="(19)1942-1845"
        instagram="https://www.instagram.com"
        facebook="https://www.facebook.com"
        twitter="https://www.twitter.com"
        autor="Grupo 5"
      />
    </>
  );
}

export default Matheus;
