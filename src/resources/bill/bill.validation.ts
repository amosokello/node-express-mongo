import Joi from "joi";

const create = Joi.object({
    amount: Joi.number().required(),

    customerType: Joi.string().required(),

    groceries: Joi.boolean(),

    discount: Joi.number()
});

export default { create };