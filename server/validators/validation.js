const { z } = require("zod");

const signup = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name should be More than 3 charecters" })
    .max(100, { message: "Name should be smaller than 100 charecters" }),

  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email" })
    .min(3, { message: "Email should be More than 3 charecters" })
    .max(100, { message: "Email should be smaller than 100 charecters" }),

  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(5, { message: "Password should be More than 5 charecters" })
    .max(100, { message: "Password should be smaller than 100 charecters" }),
});

module.exports = { signup };
