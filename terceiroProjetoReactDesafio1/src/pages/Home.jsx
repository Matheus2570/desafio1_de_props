import "./Home.css";
import Header from "../components/Header";
import FooterProps from "../Props/FooterProps";
import MainProps from "../Props/MainProps";
import AssideProps from "../Props/AssideProps";
import Matheus from "../assets/Matheus.jpg";
import Maria from "../assets/Maria.jpg";
import Laura from "../assets/Laura.jpg";
import Ana from "../assets/Ana.jpg";
import Vitor from "../assets/Vitor.jpg";
import Valentina from "../assets/Valentina.jpg";
import NavBar from "../components/NavBar";



function App() {
  return (
    <>

      <Header />
      <main className="main">
      <NavBar className="NavBar"/>
        <div className="blocoPerfils">
          <MainProps
            img={Matheus}
            alt="Matheus"
            nome="Matheus de Carvalho"
            hobby=" Jogar videogame, jogar truco, jogos online no pc e passar tempo com os amigos. "
          />
          <MainProps
            img={Maria}
            alt="Maria"
            nome="Maria Clara C.G.F"
            hobby="Ler, escutar música, fazer as unhas, artesanato, cozinhar, viajar, compras, autocuidado, jardinagem, cuidar de animais, maratona de filmes e series, planejamento. "
          />
          <MainProps
            img={Laura}
            alt="Laura"
            nome="Laura Marques"
            hobby="Esporte, Viajar, passar tempo com a família"
          />
          <MainProps
            img={Ana}
            alt="Ana"
            nome="Ana Clara"
            hobby="Academia, ler, viajar, nadar, escutar música, caminhar com minha cachorra. "
          />
          <MainProps
            img={Vitor}
            alt="Vitor"
            nome="Vitor Gabriel"
            hobby="Ouvir música, viajar, jogar truco e outros jogos, ver filmes e séries, ver o Neymar jogar e momentos com a família e amigos. "
          />
          <MainProps
            img={Valentina}
            alt="Valentina"
            nome="Valentina Martelli"
            hobby="Ler, escrever, dançar, cozinhar, aprender novas línguas, jogar vôlei, escutar música, cantar, skincare, fazer exercício, dormir, assistir filmes. "
          />
        </div>
        <AssideProps
          titulo="Valores:"
          valor1="Cooperatividade"
          valor2="Empatia"
          valor3="Honestidade"
        />
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

export default App;


