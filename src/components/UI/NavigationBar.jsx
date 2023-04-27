import {NavLink, Outlet} from "react-router-dom";
import {
    BACK_BUTTON_TEXT,
    CLIENT,
    CLIENT_ROUTE,
    COURT_CASE,
    COURT_CASE_ROUTE,
    CREDIT_AND_CARDS,
    CREDIT_AND_CARDS_ROUTE,
    EMPLOYMENT,
    EMPLOYMENT_ROUTE, ENFORCEMENT_PROCEEDINGS,
    ENFORCEMENT_PROCEEDINGS_ROUTE,
    HISTORY,
    HISTORY_ROUTE, PROCESS,
    PROCESS_ROUTE, RELATED_CONTRACTS,
    RELATED_CONTRACTS_ROUTE,
    TASK,
    TASKS_ROUTE
} from "../../constants/constants";
import {CustomButton} from "./CustomButton";

export const NavigationBar = () => {

    return (
        <>
            <div className="navbar__wrapper">
                    <div className="navbar__link_wrapper">
                        <ul className="nav__link">
                            <NavLink to={TASKS_ROUTE} className="nav__link_text">{TASK}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={CLIENT_ROUTE} className="nav__link_text">{CLIENT}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={CREDIT_AND_CARDS_ROUTE} className="nav__link_text">{CREDIT_AND_CARDS}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={EMPLOYMENT_ROUTE} className="nav__link_text">{EMPLOYMENT}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={HISTORY_ROUTE} className="nav__link_text">{HISTORY}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={RELATED_CONTRACTS_ROUTE} className="nav__link_text">{RELATED_CONTRACTS}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={COURT_CASE_ROUTE} className="nav__link_text">{COURT_CASE}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={ENFORCEMENT_PROCEEDINGS_ROUTE} className="nav__link_text">{ENFORCEMENT_PROCEEDINGS}</NavLink>
                        </ul>
                        <ul className="nav__link">
                            <NavLink to={PROCESS_ROUTE} className="nav__link_text">{PROCESS}</NavLink>
                        </ul>
                    </div>

                <CustomButton>{BACK_BUTTON_TEXT}</CustomButton>
            </div>
            <Outlet />
        </>
    )
}