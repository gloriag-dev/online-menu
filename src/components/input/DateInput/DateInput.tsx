import clsx from "clsx"
import styles from './DateInput.module.scss'
import GenericInputWrapper, { GenericInputWrapperProps } from "../GenericInputWrapper.tsx/GenericInputWrapper"
import { ChangeEvent, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export interface IDateInputProps extends Omit<GenericInputWrapperProps, "onChange"> {
    value?: string
    label?: string
    placeholder?: string
    format?: (value: string) => string
    onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void
    onBlur?: (e: ChangeEvent) => void
}
export const DateInput = ({ error, label, disabled, required }: IDateInputProps) => {
    const [startDate, setStartDate] = useState((new Date()))
    
    return (
        <GenericInputWrapper error={error} label={label} disabled={disabled} required={required}>
            <DatePicker selected={startDate} onChange={(date: Date) =>setStartDate(date)} dateFormat="MM/dd/yyyy" className={clsx("date-input", styles.root)}/>
        </GenericInputWrapper>
    )
}
export default DateInput
