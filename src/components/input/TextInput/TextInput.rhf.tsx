import { Controller, useFormContext } from "react-hook-form"
import TextInput, { ITextInputProps } from "./TextInput"
import { ChangeEvent } from "react"

export interface ITextInputRHFProps extends ITextInputProps {
    name: string
    rules?: any
    defaultValue?: string
}

const TextInputRHF: React.FC<ITextInputRHFProps> = ({ name, rules, disabled, defaultValue, onChange, onBlur, ...props }) => {
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
                            onBlur?.(e)
                        }}
                        onChange={(value: string, event: ChangeEvent<HTMLInputElement>) => {
                            field.onChange(value) //React hook form
                            onChange?.(value, event)
                        }}
                    />
                )
            }}
        />
    )
}
export default TextInputRHF
