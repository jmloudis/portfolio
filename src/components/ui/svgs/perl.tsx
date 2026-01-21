import type { SVGProps } from "react";

const Perl = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
        <ellipse
            cx="128"
            cy="128"
            rx="80"
            ry="110"
            fill="#39457e"
            stroke="#fff"
            strokeWidth="8"
        />
        <ellipse
            cx="128"
            cy="128"
            rx="50"
            ry="70"
            fill="#fff"
            opacity="0.7"
        />
        <path
            d="M128 40 Q140 80 128 128 Q116 80 128 40"
            fill="#fff"
            opacity="0.5"
        />
        <circle
            cx="128"
            cy="128"
            r="18"
            fill="#39457e"
            stroke="#fff"
            strokeWidth="4"
        />
    </svg>
);

export { Perl };