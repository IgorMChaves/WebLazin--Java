import * as S from "./styles";
import Bailey from "assets/img/BAILEY.svg";
import Amelia from "assets/img/AMELIA.svg";
import Hunt from "assets/img/HUNT.svg";
import Karev from "assets/img/KAREV.svg";
import Mer from "assets/img/MER.svg";
import Maggie from "assets/img/MAGGIE.svg";

const DepatMain = () => {
  return (
    <S.DepatMain>
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={Bailey} alt="Bailey" /><h4>Dra. Bailey</h4><h5>Chefe de Cirurgia</h5>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={Amelia} alt="Amelia" /><h4>Dra. Shepherd</h4><h5>Chefe de</h5><h5>Neurocirurgia</h5>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={Hunt} alt="cardio" /><h4>Dr. Hunt</h4><h5>Chefe de Cirurgia</h5><h5>
de Trauma</h5>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={Karev} alt="orto" /><h4>Dr. Karev</h4><h5>Chefe de Cirurgia</h5><h5>Pediátrica</h5>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={Mer} alt="trauma" /><h4>Dra. Grey</h4><h5>Chefe de Cirurgia</h5><h5>Geral</h5>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>
      <picture>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <img src={Maggie} alt="trauma" /><h4>Dra. Pierce</h4><h5>Chefe de Cirurgia
Cardiotorácica</h5>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </picture>

    </S.DepatMain>
  );
};

export default DepatMain;