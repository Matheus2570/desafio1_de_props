import "./Maria.css";
import Header from "../components/Header";
import FooterProps from "../Props/FooterProps";
import Maria1 from "../assets/Maria.jpg";
import NavBar from "../components/NavBar";



function Maria() {
  return (
    <>

      <Header />
     
      <div className="conteiner">
      <NavBar className="NavBar" />

<div className="BlocoM">
  <img src={Maria1} alt="Maria" />
 
  <p>Maria tem 17 anos, nasceu em Ribeirão Preto , e tem sua irmã Maria Flor. Seus pais se chamam Isabel  e Maurício . Ambos os dois são pessoas e pais muito divertidos.
    <br></br><br></br>Em sua casa tem dois cachorros, dois ratos, tartaruga. Dos 7 aos 12 anos Maria praticava ginástica rítmica, mas atualmente só  faz academia. Suas comidas favoritas são strogonoff e casquinha de sorvete, as quais ela come feliz. <br></br><br></br>É muito alergica. Quando Maria era criança, ela não gostava muito do Papai Noel de loja, outros medos são, escuro e palhaços. Seus medos atuais são, alzheimer, rejeição, e o temido papai noel. Quando criança seu maior sonho era voar, porem, atualmente é ser rica.Os amigos de Maria, a maioria é que ela conheceu da escola como seus amigos do Senai. <br></br>

    O Primeiro amor dela foi como uma história de filme, onde a mocinha se apaixona pelo bad boy, mas ele não liga muito para ela. Porém quando ele percebe que fez merda corre atrás, e hoje eles vivem o felizes para sempre. <br></br>O filme favorito dela é quase que nem a história de amor dela, a diferença é que ela não vive em uma torre e o namorado dela não é ladrão (até onde sabemos). <br></br><br></br>Sua série favorita é supernatural, algo que é compreensível, porque a última coisa que a não Maria é, é normal (no bom sentido). Ela tem estatura média de 1,61 cm, adora a cor lilás. Uma comida que ela não suporta é Danone, ao qual ela diz que a faz ter enjoo e ânsia.<br></br> <br></br>Um lugar que ela sonha em conhecer é Veneza, na Itália. Uma mania dela é mexer as pernas e os braços de forma bem ansiosa, isso se recorre o dia todo, porém ela não se importa muito, mas uma coisa que ela não suporta é o som estridente e recorrente de outras pessoas, junto com isso ela tem gastura de barulhos altos, coisas ásperas e pó.<br></br><br></br> Porém mesmo com tudo isso ela é uma pessoa gentil, uma boa ouvinte, meio hipster, mas tudo certo, seu hobbye não é diferente pois tudo que ela faz tem alguma ligação á arte.  Sua matéria favorita é inglês, algo bem eclético e que funciona para tudo. Sua profissão dos sonhos é aumentar seu studio. E por fim, mas não menos importante, uma coisa que a deixa profundamente chateada são pessoas grossas, excluí-la de algo importante ou legal e também fazer piadas de algo íntimo dela. Porém a Maria é alguém muito divertida onde você pode contar de tudo e ela sempre vai pensar pelo lado positivo (as vezes suspeito) das coisas.

    😜✨👽🦋👧🎈🎀🎠  </p>
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
  );
}

export default Maria;