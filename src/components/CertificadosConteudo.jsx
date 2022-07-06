export default function CertificadosConteudo() {
  return (
    <section className="certificadoConteudo">
      <div
        className="carrosselPai"
        onWheel={(e) => {
          if (e.deltaY > 0) {
            e.target.scrollBy(600, 0);
          } else {
            e.target.scrollBy(-600, 0);
          }
        }}
      >
        <div className="cfCarrossel">
          <img src="./img/certificados/nextudemy.jpg" />
        </div>
        <div className="cfCarrossel">
          <img src="./img/certificados/js3.jpeg" />
        </div>
        <div className="cfCarrossel">
          <img src="./img/certificados/react3.jpeg" />
        </div>
        <div className="cfCarrossel">
          <img src="./img/certificados/node3.jpeg" />
        </div>
      </div>
    </section>
  );
}

/*
  <div className="cfCarrossel">
        <img
          className="imgCarrossel"
          src="./img/certificados/nextudemy.jpg"
          alt=""
        />
      </div>


*/
