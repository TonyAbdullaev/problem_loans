import {NavLink, Outlet} from "react-router-dom";
import {
    BACK_BUTTON_TEXT,
    CLIENT,
    COURT_CASE,
    CREDIT_AND_CARDS,
    EMPLOYMENT,
    ENFORCEMENT_PROCEEDINGS,
    HISTORY,
    PROCESS,
    RELATED_CONTRACTS,
    TASK,
} from "../../static/ru";

import {
    CLIENT_ROUTE,
    COURT_CASE_ROUTE,
    CREDIT_AND_CARDS_ROUTE,
    EMPLOYMENT_ROUTE,
    ENFORCEMENT_PROCEEDINGS_ROUTE,
    HISTORY_ROUTE,
    PROCESS_ROUTE,
    RELATED_CONTRACTS_ROUTE,
    TASKS_ROUTE
} from "../../static/constants"

import {GreyButton} from "./CustomButton";

const Li = ({path, text}) => {
    return (
        <li className="">
            <NavLink to={path} className="inline-block px-2 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-600 dark:hover:text-gray-300">{text}</NavLink>
        </li>
    )
}

export const NavigationBar = () => {

    return (
        <>
            <div className="flex justify-between flex-wrap items-center">
                <ul className="flex font-medium p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <Li path={TASKS_ROUTE} text={TASK} />
                    <Li path={CLIENT_ROUTE} text={CLIENT} />
                    <Li path={CREDIT_AND_CARDS_ROUTE} text={CREDIT_AND_CARDS} />
                    <Li path={EMPLOYMENT_ROUTE} text={EMPLOYMENT} />
                    <Li path={HISTORY_ROUTE} text={HISTORY} />
                    <Li path={RELATED_CONTRACTS_ROUTE} text={RELATED_CONTRACTS} />
                    <Li path={COURT_CASE_ROUTE} text={COURT_CASE} />
                    <Li path={ENFORCEMENT_PROCEEDINGS_ROUTE} text={ENFORCEMENT_PROCEEDINGS} />
                    <Li path={PROCESS_ROUTE} text={PROCESS} />
                </ul>
                <GreyButton>{BACK_BUTTON_TEXT}</GreyButton>
            </div>
            <Outlet />
        </>
    )
}