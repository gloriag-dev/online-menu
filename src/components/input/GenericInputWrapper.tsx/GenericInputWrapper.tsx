import clsx from "clsx"
import style from "./GenericInputWrapper.module.scss"
export interface GenericInputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    error?: string
    required?: string
    disabled?: boolean
}
//
const GenericInputWrapper = ({ children, label, error, required, disabled }: GenericInputWrapperProps) => {
    return (
        <div
            className={clsx("generic-input", {
                error: Boolean(error),
                required: Boolean(required),
                disabled: disabled
            })}
        >
            {label && <label className={style.label}>{label}</label>}
            {children}
            {error && <div className={clsx("error-message", style.errorText, style.helperMessage)}>{error}</div>}
            {required && <div className={clsx("error-message", style.errorText, style.helperMessage)}>{error}</div>}
        </div>
    )
}
export default GenericInputWrapper
