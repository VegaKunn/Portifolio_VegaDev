export default function HomeConteudo() {
  return (
    <section className="homeConteudo">
      <div className="divCentro">
        <div className="divImagemPerfil">
          <img src="./img/perfil.jpg" alt="" />
        </div>
        <div className="divImagemInfo">
          <h1>{`Wender Vega  <Dev FullStack/>`}</h1>
          <p>
            Sou um Dev. FullStack apaixonado por programação e viciado em
            resolver problemas. <br />
            Amo aprender e ensinar novas tecnologias. <br />
            Gosto de conhecer pessoas com conhecimentos diferentes dos meus.
          </p>
          <div className="svgHome"></div>
        </div>
      </div>
    </section>
  );
}
