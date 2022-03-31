/// <reference types="react" />
import "./mylabel.css";
export interface MyLableProps {
    /**
     * MyLabel content
     */
    label: string;
    /**
     * how large show the MyLabel be?
     */
    size: "normal" | "h1" | "h2" | "h3" | "h4";
    /**
     * want to capitalize the text
     */
    allCaps?: boolean;
    /**
     * label color type
     */
    color?: "primary" | "secundary" | "tertiary";
    /**
     * Custom Color chose
     */
    customColor?: string;
    /**
     * backgroundColor chose
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, label, size, customColor }: MyLableProps) => JSX.Element;
