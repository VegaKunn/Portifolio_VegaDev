import { useState } from "react";
import ContatoConteudo from "./ContatoConteudo";

export default function HomeConteudo() {
  const [contatos, setContatos] = useState(false);
  return (
    <section className="homeConteudo">
      {contatos ? (
        <div className="divCentro2">
          <div
            onClick={() => {
              setContatos(!contatos);
            }}
          >
            <h1>{"<Contatos/>"}</h1>
          </div>
          <ContatoConteudo />
        </div>
      ) : (
        <div
          className="divCentro"
          onClick={() => {
            setContatos(!contatos);
          }}
        >
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
          </div>
        </div>
      )}
    </section>
  );
}
