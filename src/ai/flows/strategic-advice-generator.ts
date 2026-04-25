'use server';
/**
 * @fileOverview A Genkit flow for generating personalized strategic advice or content recommendations.
 *
 * - generateStrategicAdvice - A function that handles the strategic advice generation process.
 * - StrategicAdviceGeneratorInput - The input type for the generateStrategicAdvice function.
 * - StrategicAdviceGeneratorOutput - The return type for the generateStrategicAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StrategicAdviceGeneratorInputSchema = z.object({
  primaryFocus: z
    .string()
    .describe(
      'The user\'s primary business focus, as selected from the contact form.'
    ),
  challenge: z
    .string()
    .describe(
      'The specific challenge or problem the user is currently facing, as described in the contact form.'
    ),
});
export type StrategicAdviceGeneratorInput = z.infer<
  typeof StrategicAdviceGeneratorInputSchema
>;

const StrategicAdviceGeneratorOutputSchema = z.object({
  advice: z
    .string()
    .describe(
      'Personalized strategic advice or content recommendations relevant to the user\'s primary focus and challenge.'
    ),
});
export type StrategicAdviceGeneratorOutput = z.infer<
  typeof StrategicAdviceGeneratorOutputSchema
>;

export async function generateStrategicAdvice(
  input: StrategicAdviceGeneratorInput
): Promise<StrategicAdviceGeneratorOutput> {
  return strategicAdviceGeneratorFlow(input);
}

const strategicAdvicePrompt = ai.definePrompt({
  name: 'strategicAdvicePrompt',
  input: {schema: StrategicAdviceGeneratorInputSchema},
  output: {schema: StrategicAdviceGeneratorOutputSchema},
  prompt: `You are an expert strategic advisor for a company called 'Strategic Architect'.
Your goal is to provide concise, personalized strategic advice or content recommendations based on the user's primary focus and challenge.
The advice should hint at how 'Strategic Architect' (which offers Hardware, Protocols, and Strategy solutions) could help them.

User's Primary Focus: {{{primaryFocus}}}
User's Challenge: {{{challenge}}}

Based on this, provide a strategic insight or a relevant content recommendation that addresses their challenge and aligns with their focus, hinting at how 'Strategic Architect' can assist. Keep it professional, actionable, and no longer than 3-4 sentences.`,
});

const strategicAdviceGeneratorFlow = ai.defineFlow(
  {
    name: 'strategicAdviceGeneratorFlow',
    inputSchema: StrategicAdviceGeneratorInputSchema,
    outputSchema: StrategicAdviceGeneratorOutputSchema,
  },
  async input => {
    const {output} = await strategicAdvicePrompt(input);
    return output!;
  }
);
