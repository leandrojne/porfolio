import type { SVGProps } from "react";
const FlagUsa = (props: SVGProps<SVGSVGElement>) =>
    <svg width="1.6em" height="1em" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <clipPath id="a">
            <path d="M25 15h25v15zv15H0zH0V0zV0h25z" />
        </clipPath>
        <path fill="#012169" d="M0 0v30h50V0z" />
        <path stroke="#fff" strokeWidth={6} d="m0 0 50 30m0-30L0 30" />
        <path
            stroke="#C8102E"
            strokeWidth={4}
            d="m0 0 50 30m0-30L0 30"
            clipPath="url(#a)"
        />
        <path
            fill="#C8102E"
            stroke="#FFF"
            strokeWidth={2}
            d="M-1 11h22V-1h8v12h22v8H29v12h-8V19H-1z"
        />
    </svg>;
export default FlagUsa;