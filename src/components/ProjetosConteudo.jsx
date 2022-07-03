import LinkProjetos from "./LinkProjetos";

export default function ProjetosConteudo() {
  return (
    <section className="projetosConteudo">
      <LinkProjetos
        linkUrl={"https://sitycangirls.vercel.app/"}
        fotosUrl={"./img/projetos/sity.jpg"}
      />
      <LinkProjetos
        linkUrl={"https://github.com/VegaKunn/testBook"}
        fotosUrl={"./img/projetos/VegaLivros.jpeg"}
      />
      <LinkProjetos
        linkUrl={"https://github.com/VegaKunn/PortifolioApp"}
        fotosUrl={"./img/projetos/vegaapp.jpeg"}
      />
      <LinkProjetos
        linkUrl={"https://github.com/VegaKunn/VegaBot"}
        fotosUrl={"./img/projetos/VegaBot.jpeg"}
      />
    </section>
  );
}
