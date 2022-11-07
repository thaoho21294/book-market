import { useField } from 'formik'
import { Input as CoreInput } from 'semantic-ui-react'
import { getFieldMetaError } from 'utils/formikHelpers'

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  className?: string
  name: string
}
const Input = ({ id, name, label, className, type }: Props) => {
  const [field, meta] = useField({ name })
  return (
    <CoreInput
      id={id}
      name={name}
      className={className}
      label={label}
      type={type}
      error={getFieldMetaError(meta) != null}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}

export default Input
