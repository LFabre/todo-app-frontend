import Joi from 'joi'
import { LOGIN_MATCH } from './SchemaUtils'

const SchemaLogin = Joi.object({
  login: Joi.string().max(45).regex(LOGIN_MATCH).required(),
  password: Joi.string().max(45).required(),
})

export default SchemaLogin;
