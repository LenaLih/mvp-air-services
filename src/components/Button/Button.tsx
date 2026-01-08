import type {ButtonHTMLAttributes} from "react";
import styles from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "danger"
    fullWidth?: boolean

};

export const Button = ({variant = "primary", fullWidth = false, className = "", ...props}: Props) => {
    return (
        <button
            className={[
                styles.button,
                styles[variant],
                fullWidth ? styles.fullWidth : "",
                className,
            ].join(" ")}
            {...props}
        />
    );
};
