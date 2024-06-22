import GenericInputWrapper, { GenericInputWrapperProps } from "../GenericInputWrapper/GenericInputWrapper"
import { ChangeEvent } from "react"
import { TextField } from "@mui/material"
import clsx from "clsx"
import styles from "./TextInput.module.scss"

export interface ITextInputProps extends Omit<GenericInputWrapperProps, "onChange"> {
    maxLength?: number
    minLength?: number
    value?: string
    label?: string
    placeholder?: string
    format?: (value: string) => string
    onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void
    onBlur?: (e: ChangeEvent) => void
}
export const TextInput = ({ error, label, format, onChange, value, disabled, required }: ITextInputProps) => {
    const onChangeInt = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const value = format?.(event.target.value) ?? event.target.value
        onChange?.(value, event)
    }

    return (
        <GenericInputWrapper error={error} label={label} disabled={disabled} required={required}>
            <TextField error={Boolean(error)} className={clsx("text-input", styles.root)} variant="outlined" disabled={disabled} value={value} onChange={onChangeInt} />
        </GenericInputWrapper>
    )
}
export default TextInput
