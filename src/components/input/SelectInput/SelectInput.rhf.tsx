import { Controller, useFormContext } from "react-hook-form"
import SelectInput, { ISelectInputProps } from "./SelectInput"
import { ChangeEvent } from "react"

export interface ISelectInputRHFProps extends Omit<ISelectInputProps, "value"> {
    name: string
    rules?: any
    defaultValue?: string
}

const SelectInputRHF: React.FC<ISelectInputRHFProps> = ({ name, rules, disabled, defaultValue, ...props }) => {
    const context = useFormContext()
    return (
        <Controller
            control={context.control}
            rules={rules}
            defaultValue={defaultValue || ""}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <SelectInput
                        {...field}
                        {...props}
                        disabled={disabled ?? field.disabled}
                        error={fieldState.error?.message}
                        onBlur={(e: ChangeEvent<Element>) => {
                            field.onBlur()
                            props.onBlur?.(e)
                        }}
                        onChange={(event, value: string) => {
                            field.onChange(value) //React hook form
                            props.onChange?.(event, value)
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
export default SelectInputRHF
