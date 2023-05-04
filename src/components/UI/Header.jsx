import React, {useState} from "react";
import {HEADER_SEARCH_LABEL, HEADER_SEARCH_PLACEHOLDER} from "../../static/ru";
import {Label} from "./Label";
import {Input} from "./Inputs";
export const Header = () => {
    const [visible, setVisible] = useState(false)
    const name = "Tokhirbek";
    const showMenu = () => {
        setVisible(prevState => !prevState)
    }

    return (
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-1">
            <button className="burger__btn_menu" onClick={showMenu}>
                <svg className="w-8 h-8 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
            </button>
            <div className="flex items-center">
                <Label>{HEADER_SEARCH_LABEL}</Label>
                <Input placeholder={HEADER_SEARCH_PLACEHOLDER} type="tel" />
            </div>
            <div className="flex items-center">
                <span>{name}</span>
                <svg className="w-8 h-8 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            </div>
        </div>
    )
}