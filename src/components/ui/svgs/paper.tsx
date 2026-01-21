import type { SVGProps } from "react";

const Paper = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {/* Main paper rectangle */}
        <rect
            x="4"
            y="4"
            width="20"
            height="24"
            rx="2"
            fill="#fff"
            stroke="currentColor"
            strokeWidth="2"
        />
        {/* Folded corner */}
        <polygon
            points="24,4 28,8 24,8"
            fill="#e0e0e0"
            stroke="currentColor"
            strokeWidth="1"
        />
        {/* Writing lines */}
        <line
            x1="8"
            y1="12"
            x2="20"
            y2="12"
            stroke="currentColor"
            strokeWidth="1.2"
        />
        <line
            x1="8"
            y1="16"
            x2="20"
            y2="16"
            stroke="currentColor"
            strokeWidth="1.2"
        />
        <line
            x1="8"
            y1="20"
            x2="16"
            y2="20"
            stroke="currentColor"
            strokeWidth="1.2"
        />
    </svg>
);

export { Paper };