import Link from "next/link";

export default function ContatoConteudo() {
  return (
    <div className="svgHome">
      <Link href="https://www.youtube.com/channel/UCi-SBlq9oXc8u11UlVungaQ">
        <a target="_blank" rel="noopener noreferrer">
          <div className="svgHomeYoutube">
            <h2>{"Youtube"}</h2>
          </div>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/wender-vega-167225174/">
        <a target="_blank" rel="noopener noreferrer">
          <div className="svgHomeLinkedin">
            <h2>{"Linkedin"}</h2>
          </div>
        </a>
      </Link>
      <Link href="https://github.com/VegaKunn">
        <a target="_blank" rel="noopener noreferrer">
          <div className="svgHomeGithub">
            <h2>{"Github"}</h2>
          </div>
        </a>
      </Link>
    </div>
  );
}

/*


*/
