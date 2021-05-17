import Joi from 'joi'

const SchemaProject = Joi.object({
  name: Joi.string().max(75).required(),
  description: Joi.string().max(300).allow(null, '')
})

export default SchemaProject