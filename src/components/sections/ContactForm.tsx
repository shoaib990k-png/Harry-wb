"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/Spinner';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateStrategicAdvice } from '@/ai/flows/strategic-advice-generator';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 characters required"),
  lastName: z.string().min(2, "Minimum 2 characters required"),
  email: z.string().email("Invalid email").refine(
    (email) => !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].some(domain => email.endsWith(domain)),
    { message: "Please use a work email address" }
  ),
  organization: z.string().min(1, "Organization name is required"),
  primaryFocus: z.string().min(1, "Please select your primary focus"),
  challenge: z.string().min(10, "Please describe your challenge (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      primaryFocus: "",
      challenge: "",
    },
  });

  // Simple progress bar logic based on filled fields
  const watchedValues = form.watch();
  useEffect(() => {
    const fields = Object.values(watchedValues);
    const filledFields = fields.filter(val => val && val.length > 0).length;
    setProgress((filledFields / fields.length) * 100);
  }, [watchedValues]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // Generate AI Advice based on input
      const result = await generateStrategicAdvice({
        primaryFocus: values.primaryFocus,
        challenge: values.challenge,
      });
      setAiAdvice(result.advice);
      setSuccess(true);
      // Simulate backend save
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section-padding bg-background-muted" id="contact">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mx-auto">PARTNERSHIP INQUIRY</SectionLabel>
            <h2 className="mb-4">Let's Design Your <span className="text-accent-blue">Growth Architecture</span></h2>
            <p className="text-text-secondary">
              Tell us about your infrastructure goals. We'll provide an initial strategic logic map within 24 hours.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl border border-accent-border shadow-sm">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-accent-border rounded-full mb-10 overflow-hidden">
              <motion.div 
                className="h-full bg-accent-blue"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-text-primary">First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane" {...field} className="h-12 bg-background-page" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-text-primary">Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} className="h-12 bg-background-page" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-text-primary">Work Email</FormLabel>
                            <FormControl>
                              <Input placeholder="jane@company.com" {...field} className="h-12 bg-background-page" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-text-primary">Organization</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Systems Inc." {...field} className="h-12 bg-background-page" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="primaryFocus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-text-primary">Primary Focus</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-background-page">
                                  <SelectValue placeholder="Select Focus Area" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Hardware Architecture">Hardware Architecture</SelectItem>
                                <SelectItem value="Networking Protocols">Networking Protocols</SelectItem>
                                <SelectItem value="Strategic Scaling">Strategic Scaling</SelectItem>
                                <SelectItem value="Full Stack Integration">Full Stack Integration</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="challenge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-text-primary">Current Challenge</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe the bottlenecks you're facing..." 
                                className="min-h-[120px] bg-background-page resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full h-14 text-lg btn-hover-effect bg-accent-blue" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner size="sm" className="mr-2 text-white" />
                            Processing Architecture...
                          </>
                        ) : "Submit Inquiry"}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-accent-blueLight rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Inquiry Received</h3>
                  <p className="text-text-secondary mb-10">
                    Your architecture inquiry has been submitted. A strategic advisor will review your data and respond within 24 hours.
                  </p>

                  {aiAdvice && (
                    <div className="bg-background-page border-l-4 border-accent-blue p-6 text-left rounded-r-lg mb-10 shadow-inner">
                      <div className="flex items-center space-x-2 mb-3 text-accent-blue font-bold text-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>INITIAL AI STRATEGIC INSIGHT</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed italic">
                        "{aiAdvice}"
                      </p>
                    </div>
                  )}

                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSuccess(false);
                      setAiAdvice(null);
                      form.reset();
                    }}
                    className="h-12 px-8"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}