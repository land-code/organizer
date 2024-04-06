import { z } from "astro/zod";

export const DateSchema = z.object({
  day: z.number(),
  month: z.number(),
  year: z.number(),
});

export const MonthSchema = z.object({
  month: z.number(),
  year: z.number(),
});