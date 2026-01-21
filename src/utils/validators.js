import { z } from 'zod';

export const applicationSchema = z.object({
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  dateApplied: z.string().min(1, 'Date applied is required'),
  status: z.string().min(1, 'Status is required'),
  jobUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  location: z.string().optional(),
  notes: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const skillSchema = z.object({
  name: z.string().min(1, 'Skill name is required'),
  category: z.string().min(1, 'Category is required'),
  level: z.number().min(1).max(5, 'Level must be between 1 and 5'),
  resources: z.array(z.object({
    title: z.string(),
    url: z.string().url().optional(),
  })).optional(),
});

export const validateApplication = (data) => {
  try {
    applicationSchema.parse(data);
    return { valid: true, errors: {} };
  } catch (error) {
    const errors = {};
    error.errors.forEach((err) => {
      errors[err.path[0]] = err.message;
    });
    return { valid: false, errors };
  }
};

export const validateSkill = (data) => {
  try {
    skillSchema.parse(data);
    return { valid: true, errors: {} };
  } catch (error) {
    const errors = {};
    error.errors.forEach((err) => {
      errors[err.path[0]] = err.message;
    });
    return { valid: false, errors };
  }
};
