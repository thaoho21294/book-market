import { useField } from 'formik'
import { Form, FormInputProps } from 'semantic-ui-react'
import { getFieldMetaError } from 'utils/formikHelpers'

interface Props extends FormInputProps {
  label?: string
  className?: string
  name: string
}

const FormInput = ({ name, label, className, ...otherProps }: Props) => {
  const [field, meta] = useField({ name })
  const errorMessage = getFieldMetaError(meta)
  return (
    <Form.Input
      className={className}
      label={label}
      error={
        errorMessage != null
          ? {
              content: errorMessage,
            }
          : null
      }
      {...field}
      {...otherProps}
    />
  )
}

export default FormInput
