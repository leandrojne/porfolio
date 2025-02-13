import Adobe from "../Icons/svg/AdobeSVG";
import Bootstrap from "../Icons/svg/BootstrapsSVG";
import Css from "../Icons/svg/CssSVG";
import Figma from "../Icons/svg/FigmaSVG";
import Firebase from "../Icons/svg/FirebaseSVG";
import Git from "../Icons/svg/GitSVG";
import HTML5 from "../Icons/svg/HtmlSVG";
import JavaScript from "../Icons/svg/JavaScriptSVG";
import JsonSVG from "../Icons/svg/JsonSVG.tsx";
import JquerySVG from "../Icons/svg/jQuerySVG.tsx";
import Less from "../Icons/svg/LessSVG";
import Magento from "../Icons/svg/MagetoSVG";
import React from "../Icons/svg/ReactSVG.tsx";
import Tailwind from "../Icons/svg/TailwindSVG";
import TypeScript from "../Icons/svg/TypeScriptSVG";
import Wordpress from "../Icons/svg/WordpressSVG";
import Sass from "../Icons/svg/SassSVG.tsx";
import Nodejs from "../Icons/svg/NodeSVG.tsx";
import MySQL from "../Icons/svg/MysqlSVG.tsx";
import CpanelSVG from "../Icons/svg/CpanelSVG.tsx";
import WooCommerce from "../Icons/svg/WoocommerceSVG.tsx";
import Php from "../Icons/svg/PhpSVG.tsx";


interface propsTag {
    text: string,
    bgColor?: string,
}

export default function Tag({ text, bgColor }: propsTag) {
    switch (text) {
        case "adobe":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Adobe />
                    </span>
                    Graphic Designer
                </div>
            );
        case "bootstrap":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Bootstrap />
                    </span>
                    Bootstrap
                </div>
            );
        case "cpanel":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <CpanelSVG />
                    </span>
                    cPanel
                </div>
            );
        case "css":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Css />
                    </span>
                    CSS
                </div>
            );
        case "figma":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Figma />
                    </span>
                    Figma
                </div>
            );
        case "firebase":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Firebase />
                    </span>
                    Firebase
                </div>
            );
        case "git":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Git />
                    </span>
                    Git
                </div>
            );
        case "html":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <HTML5 />
                    </span>
                    HTML
                </div>
            );
        case "javascript":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <JavaScript />
                    </span>
                    JavaScript
                </div>
            );
        case "json":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <JsonSVG />
                    </span>
                    jSON
                </div>
            );
        case "jquery":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <JquerySVG />
                    </span>
                    jQuery
                </div>
            );
        case "less":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Less />
                    </span>
                    Less
                </div>
            );
        case "magento":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Magento />
                    </span>
                    Magento
                </div>
            );
        case "mysql":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <MySQL />
                    </span>
                    MySQL
                </div>
            );
        case "node":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Nodejs />
                    </span>
                    Node Js
                </div>
            );
        case "react":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <React />
                    </span>
                    React Js
                </div>
            );
        case "sass":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Sass />
                    </span>
                    Sass
                </div>
            ); case "tailwind":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Tailwind />
                    </span>
                    Tailwind
                </div>
            );
        case "typescript":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <TypeScript />
                    </span>
                    TypeScript
                </div>
            );
        case "wordpress":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Wordpress />
                    </span>
                    Wordpress
                </div>
            );
        case "woocommerce":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <WooCommerce />
                    </span>
                    WooCommerce
                </div>
            );
        case "php":
            return (
                <div className={`group text-white flex justify-center items-center text-xs pl-1 pr-4 my-1 mr-2 py-[6px] h-[28px] rounded-full  w-max leading-none ${bgColor ? bgColor : 'bg-main-color'}`}>
                    <span className="ml-2 mr-[5px] mt-[-2px] text-[16px] aspect-auto">
                        <Php />
                    </span>
                    PHP
                </div>
            );
        default:
            break;
    }
}
