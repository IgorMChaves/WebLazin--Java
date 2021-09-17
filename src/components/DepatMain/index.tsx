import * as S from "./styles";
import geral from "assets/img/GERAL.svg";
import neuro from "assets/img/NEURO.svg";
import cardio from "assets/img/CARDIO.svg";
import orto from "assets/img/ORTO.svg";
import trauma from "assets/img/CIRURGIA DE TRAUMA.svg";

const DepatMain = () => {
  return (
    <S.DepatMain>
      <picture>
      <br /><br /><br /><br /><br /><br /><br />
        <img src={geral} alt="geral" /><h3>GERAL</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <br />
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={neuro} alt="neuro" /><h3>NEURO</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <br />
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={cardio} alt="cardio" /><h3>CARDIO</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <br />
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={orto} alt="orto" /><h3>ORTO</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <br />
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={trauma} alt="trauma" /><h3>TRAUMA</h3>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>

    </S.DepatMain>
  );
};

export default DepatMain;