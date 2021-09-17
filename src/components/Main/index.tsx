import { Link } from "react-router-dom";
import * as S from "./styles";
import cidade from "assets/img/cidade.svg";
import departamentos from "assets/img/Component 10.svg";
import história from "assets/img/Component 9.svg";
import consulta from "assets/img/Component 11.svg";


const Main = () => {
  return (
    <S.Main>
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${cidade})`,
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
        <br /><br /><br /><br /><br /><br />
        <h1>BEM-VINDO À </h1> 
        <h1>SEATTLE</h1>
        <h4>ESTAMOS AQUI PARA VOCÊ</h4>
        <br /><br /><br /><br /><br /><br /><br />
        <picture>
           <Link to="/departamentos"><img src={departamentos} alt="departamentos" /></Link>
        </picture>
        <picture>
          <Link to="/cirurgioes"><img src={história} alt="cirurgiões" /></Link>
        </picture>
        <picture>
          <Link to="/nossahistoria"><img src={consulta} alt="consulta" /></Link>
        </picture>


      </div>
    </S.Main>
  );
};

export default Main;