import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { PrimaryButton } from '../defaults'
import { InpuField } from './formFields'

function Form({ initialValues, fields, schema, onSubmit, btnText, title }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = id => (_, v) => {
    setValues({ ...values, [id]: v })
  }

  const handleSubmit = () => {
    const { error } = schema.validate(values, { abortEarly: false })

    if (error) {
      let newErrors = error.details.reduce((r, { message, path }) => {
        r[path[0]] = message
        return r
      }, {})

      return setErrors(newErrors)
    }

    setErrors({})
    onSubmit(values)
  }

  const renderField = (id, fieldProps) => {
    return (
      <InpuField
        key={id}
        value={values[id]}
        error={errors[id]}
        onChange={handleChange(id)}
        {...fieldProps}
      />
    )
  }

  return (
    <form
      onSubmit={evt => {
        evt.preventDefault()
        handleSubmit()
      }}
    >
      <h5 style={{ alignSelf: 'center' }}>{title}</h5>
      {
        fields.map(({ id, ...fieldProps }) => (
          renderField(id, fieldProps)
        ))
      }
      <div className='justify-center'>
        <PrimaryButton type='submit'>
          {btnText}
        </PrimaryButton>
      </div>
    </form>
  )
}

Form.propTypes = {
  schema: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  fields: PropTypes.array,
  btnText: PropTypes.string,
  title: PropTypes.string,
}

Form.defaultProps = {
  initialValues: {},
  fields: [],
  btnText: 'Submit',
  title: ''
}

export default Form;
