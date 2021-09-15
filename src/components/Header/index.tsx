import * as S from "./styles"
import logo from "assests/img/logo mor.svg"

const Header = () => {
    return (
        <S.Header>
            <div>
                <img src={logo} alt="logo do site" />
            </div>
        </S.Header>
    )
}

export default Header 