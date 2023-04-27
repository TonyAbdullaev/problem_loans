import {useState} from "react";
import CustomSearch from "./customSearch";
import {HEADER_SEARCH_LABEL} from "../../constants/constants";
export const Header = () => {
    const [visible, setVisible] = useState(false)

    const showMenu = () => {
        setVisible(prevState => !prevState)
    }

    return (
        <div className="header">
            <button className="burger__btn_menu" onClick={showMenu}>
                <img className="header__menu_img" src="/menu.png" alt="burger menu"/>
            </button>
            <CustomSearch label={HEADER_SEARCH_LABEL} />
            <div className="user">
                <span>NAME</span>
                <img className="user__logo" src="/user_logo.png" alt="User logo"/>
            </div>
        </div>
    )
}