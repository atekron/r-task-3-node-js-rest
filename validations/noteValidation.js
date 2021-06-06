import yup from "yup";

export const noteSchema = yup.object({
  Name: yup.string().required().max(20),
  Date: yup
    .string()
    .required()
    .matches(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/),
  Category: yup.string().required(),
  Content: yup.string().required(),
});
