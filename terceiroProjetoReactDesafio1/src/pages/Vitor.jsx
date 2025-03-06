import "../Vitor.css";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../Props/FooterProps";

function PagVitor() {
  return (
    <>
      <Header />

      <main className="conteiner">
        <Navbar />

        <div className="blocoAoLado">
          <h2>Sobre Vítor:</h2>

          <p>
            Vítor Gabriel de Paula é uma pessoa que nasceu em 22 de novembro
            de 2007, na cidade de Vinhedo. Com uma altura de 1,83m, ele é filho
            de Silvana Ap Val De Paula e Antonio Carlos De Paula. Tem um irmão
            chamado Jefferson. Vítor possui uma cachorra chamada Aisha. Gosta
            de futebol e sua refeição preferida é a pizza. Ele aprecia
            filmes e séries, destacando Uncharted e Lupin como os seus
            preferidos. A cor que ele mais gosta é azul. Na infância, Vítor
            queria ser o Neymar, ele tem medo de cobras. Vítor é alguém que gosta de se
            divertir e seu passatempo consiste em jogar diversos tipos de jogos.
            Ele é estudante e sua matéria favorita é inglês. Deseja conhecer
            todos os lugares que conseguir, mas não consegue tolerar legumes e
            verduras.
          </p>
        </div>
      </main> 
      <Footer />
    </>
  );
}

export default PagVitor;
