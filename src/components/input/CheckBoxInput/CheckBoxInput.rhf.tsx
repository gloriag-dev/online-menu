import { Controller, RegisterOptions, useFormContext } from "react-hook-form"
import CheckBoxInput, { ICheckBoxProps } from "./CheckBoxInput"
import {} from "react"

export interface ICheckBoxInputRHFProps extends Omit<ICheckBoxProps, "value"> {
    name: string
    rules?: RegisterOptions
    defaultValue?: boolean
    disabled?: boolean
}

const CheckBoxInputRHF: React.FC<ICheckBoxInputRHFProps> = ({ name, rules, defaultValue, disabled, ...props }) => {
    const context = useFormContext()
    return (
        <Controller
            control={context.control}
            rules={rules}
            defaultValue={defaultValue || ""}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <CheckBoxInput
                        {...field}
                        {...props}
                        disabled={disabled ?? field.disabled}
                        error={fieldState.error?.message}
                        onChange={(value: boolean) => {
                            field.onChange(value) //React hook form
                            props.onChange?.(value)
                        }}
                        onClick={() => {
                            props.onClick?.()
                        }}
                    />
                )
            }}
        />
    )
}
export default CheckBoxInputRHF
