'use server';

/**
 * @fileOverview AI flow to analyze job descriptions and identify relevant credentials.
 *
 * - analyzeResumeRequirements - Analyzes a job description and a portfolio of credentials to identify the most relevant credentials.
 * - AnalyzeResumeRequirementsInput - The input type for the analyzeResumeRequirements function.
 * - AnalyzeResumeRequirementsOutput - The return type for the analyzeResumeRequirements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeRequirementsInputSchema = z.object({
  jobDescription: z.string().describe('The job description to analyze.'),
  credentials: z.string().describe('The student\'s portfolio of credentials.'),
});

export type AnalyzeResumeRequirementsInput = z.infer<typeof AnalyzeResumeRequirementsInputSchema>;

const AnalyzeResumeRequirementsOutputSchema = z.object({
  relevantCredentials: z.string().describe('The credentials from the portfolio that are most relevant to the job description.'),
});

export type AnalyzeResumeRequirementsOutput = z.infer<typeof AnalyzeResumeRequirementsOutputSchema>;

export async function analyzeResumeRequirements(
  input: AnalyzeResumeRequirementsInput
): Promise<AnalyzeResumeRequirementsOutput> {
  return analyzeResumeRequirementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeResumeRequirementsPrompt',
  input: {schema: AnalyzeResumeRequirementsInputSchema},
  output: {schema: AnalyzeResumeRequirementsOutputSchema},
  prompt: `You are an AI resume analyst. A student will provide a job description and a list of their credentials. You will respond with the credentials that you think are most relevant to the job description.

Job Description: {{{jobDescription}}}

Credentials: {{{credentials}}}

Relevant Credentials:`, 
});

const analyzeResumeRequirementsFlow = ai.defineFlow(
  {
    name: 'analyzeResumeRequirementsFlow',
    inputSchema: AnalyzeResumeRequirementsInputSchema,
    outputSchema: AnalyzeResumeRequirementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
