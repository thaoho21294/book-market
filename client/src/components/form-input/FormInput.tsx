import { useField } from 'formik'
import { Input as CoreInput, Label } from 'semantic-ui-react'
import { getFieldMetaError } from 'utils/formikHelpers'

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  className?: string
  name: string
}
const Input = ({
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
  const error = getFieldMetaError(meta)
  return (
    <div>
      <CoreInput
        id={id}
        className={className}
        label={label}
        type={type}
        error={error != null}
        onChange={(e) => {
          onChange?.(e) ?? field.onChange(e)
        }}
        onBlur={(e) => {
          onBlur?.(e) ?? field.onBlur(e)
        }}
        value={value ?? field.value}
      />
      {error && (
        <Label pointing color='red'>
          {error}
        </Label>
      )}
    </div>
  )
}

export default Input
