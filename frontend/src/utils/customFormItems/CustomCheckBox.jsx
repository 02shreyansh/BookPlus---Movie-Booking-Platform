import { Field, useField } from 'formik'
import React from 'react'

export default function CustomCheckBox({...props}) {

    const [field, meta] = useField(props)

  return (
    
    <Field {...field} {...props} />
  )
}
