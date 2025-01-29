import { z } from "zod";

// Define the schema for environment variables
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(), // The API base URL must be a valid URL string
});

// Parse and validate the environment variables against the schema
const parsedEnv = envSchema.safeParse(process.env);

// Check if the parsing and validation were successful
if (!parsedEnv.success) {
  // If validation fails, log an error message with the details
  console.error(
    "Invalid environment variables",
    parsedEnv.error.flatten().fieldErrors,
  );

  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
