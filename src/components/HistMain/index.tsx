import * as S from "./styles";
import cidadea from "assets/img/cidadea.svg";

const HistMain = () => {
  return (
    <S.HistMain>
        <div
        className="bg_image"
        style={{
          backgroundImage: `url(${cidadea})`,
          height: "80vh",
          color: "#f5f5f5"
        }}
      >
        <br /><br /><br />
            <h2>SEATTLE GRACE</h2>
            <p>Fundado em 1947, o Seattle Grace se consagrou como o melhor de Washington, tanto por seu Centro de Trauma nível I, tanto por estar no ranking dos melhores hospitais de ensino para um programa de Residência Cirúrgica.</p>
            <br /><br />
            <h2>SEATTLE GRACE + MERCY WEST</h2>  
            <p>O Seattle Grace Hospital e o Mercy West Medical Center eram originalmente duas instalações médicas separadas, mas em 2009, devido ao clima econômico, eles se fundiram para formar uma única instalação médica </p> 
            <br /><br />
            <h2>CLÍNICA MEMORIAL 
                DENNY DUQUETTE</h2>    
            <p>Inaugurada em 2007, a Clínica Memorial Denny Duqette partiu da colaboração entre a Dra. Isobel Stevens e a Dra. Miranda Bailey. 
                Com o objetivo de oferecer atendimento rápido e gratuito, a clínica funciona dois dias por semana.</p>
            <br /><br />
                <h2>GREY-SLOAN MEMORIAL</h2>
                <p>Inaugurado em 2013, o Grey-Sloan volta às origens, caracterizando-se como um Centro de Trauma nível I. Administrado por médicos,  é o principal hospital da Fundação Catherine Fox </p>
        <br /><br /><br />
    </div>
    </S.HistMain>
  );
};

export default HistMain;