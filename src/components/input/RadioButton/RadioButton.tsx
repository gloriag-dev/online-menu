import GenericInputWrapper from "../GenericInputWrapper.tsx/GenericInputWrapper"
import {} from "react"
import Radio from "@mui/material/Radio"
import { FormLabel } from "@mui/material"

export interface IRadioValue {
    label: string
    value: string
}

export interface IRadioProps {
    error?: string
    values?: IRadioValue[]
    value?: string
    label?: string
    format?: (value: string) => string
    onChange?: (value: IRadioValue) => void
}
export const RadioInput = ({ error, label, onChange, values, value }: IRadioProps) => {
    const onChangeSingle = (value: IRadioValue) => () => {
        onChange?.(value)
    }

    return (
        <GenericInputWrapper error={error} label={label}>
            <div className="radio">
                {values?.map?.(single => {
                    const isSelected = single.value === value
                    return (
                        <FormLabel key={single.value}>
                            <Radio checked={isSelected} onClick={onChangeSingle(single)} />
                            {single.label}
                        </FormLabel>
                    )
                })}
            </div>
        </GenericInputWrapper>
    )
}

export default RadioInput
