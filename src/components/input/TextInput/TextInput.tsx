import {} from "console"
import GenericInputWrapper from "../GenericInputWrapper.tsx/GenericInputWrapper"
import { ChangeEvent } from "react"

export interface ITextInputProps {
    error?: string
    disabled?: boolean
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
export const TextInput = ({ error, label, format, onChange, value, disabled, ...props }: ITextInputProps) => {
    const onChangeInt = (event: ChangeEvent<HTMLInputElement>) => {
        const value = format?.(event.target.value) || event.target.value
        onChange?.(value, event)
    }
    return (
        <GenericInputWrapper error={error} label={label} disabled={disabled}>
            <input onChange={onChangeInt} value={value || ""} {...props} />
        </GenericInputWrapper>
    )
}

export default TextInput
