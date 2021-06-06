import yup from "yup";

export const noteUpdate = yup.object({
  Name: yup.string().max(20),
  Category: yup.string(),
  Content: yup.string(),
});
