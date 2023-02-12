import { useState } from "react";
import Opcao from "./Opcao";

export default function AtrasoPedido() {
  const [navOn, setNavOn] = useState(true);
  const [roteiro, setRoteiro] = useState("AtrasoPedido");
  const [apresentarConfirmar, setApresentarComfirmar] = useState(false);
  const [continuarEntrega, setContinuarEntrega] = useState(true);
  const [naOn, setNaOn] = useState(true);
  const [navn, setNavn] = useState(true);
  const [navO, setNavO] = useState(true);
  return (
    <nav className="fluxogramaNav">
      <Opcao
        texto="atraso do pedido"
        escolher={setNavOn}
        valor={navOn}
        roteiroFluxo="AtrasoPedido"
        roteiro={setRoteiro}
      />

      <Opcao
        texto="confirmou dados?"
        escolher={setNavOn}
        valor={navOn}
        roteiroFluxo="AtrasoPedido"
        roteiro={setRoteiro}
      />
      {apresentarConfirmar && (
        <Opcao
          texto="confirmou dados?"
          escolher={setNavOn}
          valor={navOn}
          roteiroFluxo="AtrasoPedido"
          roteiro={setRoteiro}
        />
      )}

      <>
        <h2>Questione o cliente sobra querer ou não o pedido</h2>

        <Opcao
          texto="confirmou dados?"
          escolher={setNavOn}
          valor={navOn}
          roteiroFluxo="AtrasoPedido"
          roteiro={setRoteiro}
        />
      </>
    </nav>
  );
}
