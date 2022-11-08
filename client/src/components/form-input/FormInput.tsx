import { useField } from 'formik'
import { Form, Label } from 'semantic-ui-react'
import { getFieldMetaError } from 'utils/formikHelpers'

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  className?: string
  name: string
}
const FormInput = ({
  id,
  name,
  label,
  className,
  type,
  onChange,
  onBlur,
  value,
}: Props) => {
  const [field, meta] = useField({ name })
  const errorMessage = getFieldMetaError(meta)
  return (
    <Form.Input
      id={id}
      className={className}
      label={label}
      type={type}
      error={
        errorMessage != null
          ? {
              content: errorMessage,
            }
          : null
      }
      onChange={(e) => {
        onChange?.(e) ?? field.onChange(e)
      }}
      onBlur={(e) => {
        onBlur?.(e) ?? field.onBlur(e)
      }}
      value={value ?? field.value}
    />
  )
}

export default FormInput
