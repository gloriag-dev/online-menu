import { Checkbox } from "@mui/material"
import GenericInputWrapper from "../GenericInputWrapper.tsx/GenericInputWrapper"
import { ChangeEvent } from "react"

export interface ICheckBoxProps {
    error?: string
    disabled?: boolean
    checked?: boolean
    label?: string
    onChange?: (value: boolean) => void
    onClick?: () => void
}
export const CheckBoxInput = ({ error, label, onChange, checked }: ICheckBoxProps) => {
    const onChangeInt = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked)
    }
    return (
        <GenericInputWrapper error={error} label={label}>
            <Checkbox onChange={onChangeInt} checked={checked} />
        </GenericInputWrapper>
    )
}

export default CheckBoxInput
