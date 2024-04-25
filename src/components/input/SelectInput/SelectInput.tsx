import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import GenericInputWrapper from "../GenericInputWrapper.tsx/GenericInputWrapper"
import { ChangeEvent } from "react"
import clsx from "clsx"
import styles from "./SelectInput.module.scss"

export interface ISelectValue {
    label: string
    value: string
}

export interface ISelectInputProps {
    error?: string
    values?: ISelectValue[]
    disabled?: boolean
    maxLength?: number
    minLength?: number
    value?: string
    label?: string
    placeholder?: string
    format?: (value: string) => string
    onChange?: (event: SelectChangeEvent<string>, value: string) => void
    onClick?: () => void
    onBlur?: (e: ChangeEvent) => void
}
export const SelectInput = ({ error, label, onChange, value, values, ...props }: ISelectInputProps) => {
    const onChangeInt = (event: SelectChangeEvent<string>) => {
        event.preventDefault()
        onChange?.(event, event.target.value)
    }
    return (
        <GenericInputWrapper error={error} label={label}>
            <Select value={value || ""} {...props} onChange={onChangeInt} className={(clsx("select"), styles.root)}>
                {values?.map?.(value => {
                    return (
                        <MenuItem key={value.value} value={value.value}>
                            {value.label}
                        </MenuItem>
                    )
                })}
            </Select>
        </GenericInputWrapper>
    )
}

export default SelectInput
