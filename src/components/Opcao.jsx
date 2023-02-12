export default function Opcao(props) {
  return (
    <div
      className="fluxogramaBotao"
      onClick={() => {
        props.escolher(!props.valor);
        props.roteiro(props.roteiroFluxo);
      }}
    >
      <h2>{props.texto}</h2>
    </div>
  );
}
