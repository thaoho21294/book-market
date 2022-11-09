import { FieldMetaProps } from 'formik'

export const getFieldMetaError = <Values>(meta: FieldMetaProps<Values>) =>
  meta.touched ? meta.error : null
