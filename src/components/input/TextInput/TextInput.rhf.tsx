import { Controller, useFormContext } from "react-hook-form"
import TextInput, { ITextInputProps } from "./TextInput"
import { ChangeEvent } from "react"

export interface ITextInputRHFProps extends ITextInputProps {
    name: string
    rules?: any
    defaultValue?: string
    value: string
}

const TextInputRHF: React.FC<ITextInputRHFProps> = ({ name, rules, disabled, defaultValue, ...props }) => {
    const context = useFormContext()
    return (
        <Controller
            control={context.control}
            rules={rules}
            defaultValue={defaultValue || ""}
            name={name}
            render={({ field, fieldState }) => {
                return (
                    <TextInput
                        {...field}
                        {...props}
                        disabled={disabled ?? field.disabled}
                        error={fieldState.error?.message}
                        onBlur={e => {
                            field.onBlur()
                            props.onBlur?.(e)
                        }}
                        onChange={(value: string, event: ChangeEvent<HTMLInputElement>) => {
                            field.onChange(value) //React hook form
                            props.onChange?.(value, event)
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
export default TextInputRHF
