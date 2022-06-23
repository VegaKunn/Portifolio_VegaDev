import { useState } from "react";
import {
  nextSvg,
  nodeSvg,
  reactSvg,
  gitSvg,
  mysqlSvg,
  mongodbSvg,
  jsSvg,
} from "./Svg";

export default function SobreConteudo() {
  const [mudar, setMudar] = useState(true);
  const [conteudoCubo, setConteudoCubo] = useState(null);
  const [backG, setBackG] = useState("bg1");
  const [shadowCubo, setShadowCubo] = useState("shdCubo");
  let allSvg = [
    nextSvg,
    jsSvg,
    nodeSvg,
    reactSvg,
    gitSvg,
    mysqlSvg,
    mongodbSvg,
  ];
  return (
    <section className="sobreConteudo">
      <div className="sSobreMim">
        <div className="sExperiencias ">
          <h1 className="sColor">{`Wender Vega  <Dev FullStack/>`} </h1>
          <div>
            <p>Idade:</p>
            <p className="sColor"> 25</p>
          </div>
          <div>
            <p>Localização:</p>
            <p className="sColor"> São Paulo - Brazil</p>
          </div>
          <div>
            <p>Email:</p>
            <p className="sColor"> wender_vega@hotmail.com</p>
          </div>
          <div>
            <p>Celular (Whats):</p>
            <p className="sColor"> 55+ (11) 97377-6013</p>
          </div>
          <div>
            <p>Cursando:</p>
            <p className="sColor"> Next.js, Node.js, AWS / Udemy</p>
          </div>
          <div>
            <p>idioma:</p>
            <p className="sColor"> Inglês - Basico</p>
          </div>
        </div>
        <div className="sExperiencias ">
          <h1 className="sColor">Sobre Mim</h1>
          <p>
            Sou desenvolvedor Javascript a alguns anos e desde então tenho
            corrido atras de desafios, sejám eles back-end, front, ou mobile.
            <br />
            Trabalho com freelance e isso me obrigou a conhecer todas as nuances
            de um projeto, regras de negocios e afins.
            <br /> Conheço as dificuldades de cada area de desenvovlimento de um
            projeto, mas sei tambem como resolver cada um desses problemas.
          </p>
        </div>
      </div>
      <div className="sSobreMim">
        <h1 className="sColor2">Tecnologias</h1>
      </div>

      {mudar ? (
        <div className="sTecnologias">
          {allSvg.map((item, index) => {
            return (
              <div
                onClick={() => {
                  let bac = "bga" + index;
                  let shd = "shdCubo" + index;
                  setMudar(!mudar);
                  setConteudoCubo(item);
                  setBackG(bac);
                  setShadowCubo(shd);
                }}
                key={index}
                className={`slogoDiv bg${index}`}
              >
                <div>{item}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="wrapper">
          <div
            className="cube-box"
            onClick={() => {
              setMudar(!mudar);
            }}
          >
            <nav className={backG}>{conteudoCubo}</nav>
            <nav className={backG}>{conteudoCubo}</nav>
            <nav className={backG}>{conteudoCubo}</nav>
            <nav className={backG}>{conteudoCubo}</nav>
            <nav className={backG}>{conteudoCubo}</nav>
            <nav className={backG}>{conteudoCubo}</nav>
          </div>
          <div className={`cuboShadow ${shadowCubo}`}></div>
        </div>
      )}
    </section>
  );
}
