import Joi from 'joi'

const SchemaTask = Joi.object({
  name: Joi.string().max(75).required(),
  description: Joi.string().max(300).allow(null, ''),
  termination_date: Joi.string().allow(null, '')
})

export default SchemaTask