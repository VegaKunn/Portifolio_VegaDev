import { useEffect, useState } from "react";
import AtrasoPedido2 from "../components/atrasoPedido2";
import Opcao from "../components/Opcao";

export default function Test() {
  const [navOn, setNavOn] = useState(true);
  const [roteiro, setRoteiro] = useState("");
  return (
    <main className="corpoDoFluxograma">
      ''
      <header className="headerFluxo">
        <select name="atendimento" id="atendimento">
          <option value=""> </option>
          <option value="Chat">Chat</option>
          <option value="Email">Email</option>
          <option value="Voz">Voz</option>
        </select>
        <select name="ocorrencia" id="ocorrencia">
          <option value=""> </option>
          <option value="Devolução">Devolução</option>
          <option value="Cancelar/Barrar pedido">Cancelar/Barrar pedido</option>
          <option value="Contestação de Recebimento">
            Contestação de Recebimento
          </option>
          <option value="Estravio">Estravio</option>
          <option value="Falta Estoque">Falta Estoque</option>
        </select>
      </header>
      <div className="divisorCorpo">
        <div className="fluxoBarraLateral">
          <div>prazos</div>
          <div>anotações</div>
        </div>
        {navOn ? (
          <nav className="fluxogramaNav">
            <Opcao
              texto="devolução"
              escolher={setNavOn}
              valor={navOn}
              roteiroFluxo=""
              roteiro={setRoteiro}
            />
            <Opcao
              texto="cancelamento do pedido"
              escolher={setNavOn}
              valor={navOn}
              roteiroFluxo=""
              roteiro={setRoteiro}
            />
            <Opcao
              texto="atraso do pedido"
              escolher={setNavOn}
              valor={navOn}
              roteiroFluxo="AtrasoPedido"
              roteiro={setRoteiro}
            />
            <Opcao
              texto="estravio"
              escolher={setNavOn}
              valor={navOn}
              roteiroFluxo=""
              roteiro={setRoteiro}
            />
          </nav>
        ) : (
          <></>
        )}
        {roteiro == "AtrasoPedido" ? <AtrasoPedido2 /> : <></>}
      </div>
    </main>
  );
}
