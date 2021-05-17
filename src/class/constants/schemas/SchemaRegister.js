import Joi from 'joi'
import { LOGIN_MATCH } from './SchemaUtils'

const SchemaRegister = Joi.object({
  login: Joi.string().max(45).regex(LOGIN_MATCH).required(),
  firstName: Joi.string().max(75).trim().required(),
  lastName: Joi.string().max(75).trim().required(),
  password: Joi.string().max(45).required(),
  confPassword: Joi.string().max(45).required(),
})

export default SchemaRegister;
