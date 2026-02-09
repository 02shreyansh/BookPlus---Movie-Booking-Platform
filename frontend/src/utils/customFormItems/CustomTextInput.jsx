import { Field, useField } from 'formik'
import React from 'react'

export default function CustomTextInput({...props}) {

    const [field, meta] = useField(props)

  return (

    <Field {...field} {...props} />

  )
}
