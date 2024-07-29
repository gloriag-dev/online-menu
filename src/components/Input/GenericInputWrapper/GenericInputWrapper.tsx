import clsx from "clsx"
import style from "./GenericInputWrapper.module.scss"
import { FormLabel } from "@mui/material"
import styles from "./GenericInputWrapper.module.scss"
import { Box } from "../../Box/Box"
export interface GenericInputWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    error?: string
    required?: string
    disabled?: boolean
}

const GenericInputWrapper = ({ children, label, error, required, disabled }: GenericInputWrapperProps) => {
    return (
        <Box
            className={clsx("generic-input", styles.root, {
                error: Boolean(error),
                required: Boolean(required),
                disabled: disabled
            })}
        >
            {label && <FormLabel className={clsx("form-label", style.label)}>{label}</FormLabel>}
            {children}
            {error && <Box className={clsx("error-message", style.errorText, style.helperMessage)}>{error}</Box>}
            {required && <Box className={clsx("error-message", style.errorText, style.helperMessage)}>{error}</Box>}
        </Box>
    )
}
export default GenericInputWrapper
