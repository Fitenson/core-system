import { z } from "zod";


export const userSchema = z.object({
    name: z.string().max(100, {
        error: "Name cannot exceed 100 characters"
    }).min(1, {
        error: "This field is required"
    }),

    full_name: z.string().max(100, {
        error: "Full Name cannot exceed 100 characters"
    }).optional(),

    email: z.email({
        error: "Please enter a valid email address"
    }).max(100, {
        error: "Email cannot exceed 100 characters"
    }).min(1, {
        error: "This field is required"
    }),

    description: z.string().max(255, {
        error: "Description cannot exceed 255 characters"
    }).optional(),

    nric: z.string().max(50, {
        error: "NRIC cannot exceed 50 characters"
    }).optional(),

    address: z.string().max(255, {
        error: "Address cannot exceed 255 characters"
    }).optional(),
});


export type UserModel = z.infer<typeof userSchema>;
