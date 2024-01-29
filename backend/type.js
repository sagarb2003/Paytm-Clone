import {z} from Zod;

export const User=z.object({
    username:z.string().min(5),
    firstName:z.string(),
    lastName:z.string(),
    passWord:z.string().min(5)
})