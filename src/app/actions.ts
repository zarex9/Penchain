'use server';

import { analyzeResumeRequirements } from '@/ai/flows/analyze-resume-requirements';
import type { Credential } from '@/lib/types';

export async function analyzeStudentCredentials(
  jobDescription: string,
  studentCredentials: Credential[]
): Promise<{ relevantCredentials: string; error?: string }> {
  if (!jobDescription) {
    return { relevantCredentials: '', error: 'Job description cannot be empty.' };
  }
  if (!studentCredentials || studentCredentials.length === 0) {
    return { relevantCredentials: '', error: 'No student credentials provided.' };
  }

  try {
    const credentialsList = studentCredentials
      .map(c => `- ${c.title} issued by ${c.issuer}`)
      .join('\n');

    const result = await analyzeResumeRequirements({
      jobDescription,
      credentials: credentialsList,
    });
    
    return { relevantCredentials: result.relevantCredentials };
  } catch (error) {
    console.error('Error analyzing credentials:', error);
    return {
      relevantCredentials: '',
      error: 'An unexpected error occurred while analyzing the resume.',
    };
  }
}
