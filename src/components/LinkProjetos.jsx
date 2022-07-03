import Link from "next/link";

export default function LinkProjetos(props) {
  let linkUrl = props.linkUrl;
  let fotoUrl = props.fotosUrl;
  console.log(fotoUrl);
  return (
    <Link href={linkUrl} target="_blank">
      <a target="_blank" className="linkProjetos">
        <div className="divTeste">
          <img className="imgProjetos" src={fotoUrl} alt="" />
        </div>
      </a>
    </Link>
  );
}
