import GenericInputWrapper from "../GenericInputWrapper.tsx/GenericInputWrapper"
import { ChangeEvent } from "react"

export interface ISelectValue {
    label: string
    value: string
}

export interface ISelectInputProps {
    error?: string
    values: ISelectValue[]
    disabled?: boolean
    maxLength?: number
    minLength?: number
    value?: string
    label?: string
    placeholder?: string
    format?: (value: string) => string
    onChange?: (event: ChangeEvent<HTMLSelectElement>, value: string) => void
    onClick?: () => void
    onBlur?: (e: ChangeEvent) => void
}
export const SelectInput = ({ error, label, format, onChange, value, values, ...props }: ISelectInputProps) => {
    const onChangeInt = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event, event.target.value)
    }
    return (
        <GenericInputWrapper error={error} label={label}>
            <select value={value || ""} {...props} onChange={onChangeInt}>
                {values?.map?.(value => {
                    return (
                        <option key={value.value} value={value.value}>
                            {value.label}
                        </option>
                    )
                })}
            </select>
        </GenericInputWrapper>
    )
}

export default SelectInput
