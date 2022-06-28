import Link from "next/link";

export default function ProjetosConteudo() {
  return (
    <section className="projetosConteudo">
      <Link href={"https://sitycangirls.vercel.app/"}>
        <a target="_blank">
          <div className="divTeste">
            <img className="imgProjetos" src="./img/projetos/sity.jpg" alt="" />
          </div>
        </a>
      </Link>

      <Link href={"https://github.com/VegaKunn/testBook"}>
        <a target="_blank">
          <div className="divTeste">
            <img
              className="imgProjetos"
              src="./img/projetos/VegaLivros.jpeg"
              alt=""
            />
          </div>
        </a>
      </Link>

      <Link href={"https://github.com/VegaKunn/PortifolioApp"}>
        <a target="_blank">
          <div className="divTeste">
            <img
              className="imgProjetos"
              src="./img/projetos/vegaapp.jpeg"
              alt=""
            />
          </div>
        </a>
      </Link>
    </section>
  );
}
