import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {
    CLIENT_ROUTE,
    COURT_CASE_ROUTE,
    CREDIT_AND_CARDS_ROUTE,
    EMPLOYMENT_ROUTE,
    ENFORCEMENT_PROCEEDINGS_ROUTE,
    HISTORY_ROUTE,
    HOME_ROUTE,
    PROCESS_ROUTE,
    RELATED_CONTRACTS_ROUTE,
    TASKS_ROUTE
} from "../constants/constants";

import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Client from "../pages/Client";
import CreditAndCards from "../pages/CreditAndCards";
import Employment from "../pages/Employment";
import History from "../pages/History";
import RelatedContracts from "../pages/RelatedContracts";
import CourtCase from "../pages/CourtCase";
import EnforcementProceeding from "../pages/EnforcementProceeding";
import Process from "../pages/Process";

export const AppRouter = () => {
    const router = createBrowserRouter(createRoutesFromElements(
       <Route path={HOME_ROUTE} element={<Home />}>
            <Route path={TASKS_ROUTE} element={<Tasks />} />
            <Route path={CLIENT_ROUTE} element={<Client />} />
            <Route path={CREDIT_AND_CARDS_ROUTE} element={<CreditAndCards />} />
            <Route path={EMPLOYMENT_ROUTE} element={<Employment />} />
            <Route path={HISTORY_ROUTE} element={<History />} />
            <Route path={RELATED_CONTRACTS_ROUTE} element={<RelatedContracts />} />
            <Route path={COURT_CASE_ROUTE} element={<CourtCase />} />
            <Route path={ENFORCEMENT_PROCEEDINGS_ROUTE} element={<EnforcementProceeding />} />
            <Route path={PROCESS_ROUTE} element={<Process />} />
       </Route>
    ));

    return (
        <RouterProvider router={router} />
    );
}