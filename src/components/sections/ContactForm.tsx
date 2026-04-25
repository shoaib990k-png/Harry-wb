"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { cn } from '@/lib/utils';

const formSchema = z.object({
  firstName: z.string().min(2, "Min 2 chars"),
  lastName: z.string().min(2, "Min 2 chars"),
  email: z.string().email("Invalid email").refine(
    (email) => !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"].some(domain => email.endsWith(domain)),
    { message: "Use work email" }
  ),
  organization: z.string().min(1, "Org is required"),
  primaryFocus: z.string().min(1, "Select focus"),
  challenge: z.string().min(10, "Describe challenge (min 10 chars)"),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
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

  const watchedValues = form.watch();
  useEffect(() => {
    const fields = Object.values(watchedValues);
    const filledFields = fields.filter(val => val && val.length > 0).length;
    setProgress((filledFields / fields.length) * 100);
  }, [watchedValues]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await generateStrategicAdvice({
        primaryFocus: values.primaryFocus,
        challenge: values.challenge,
      });
      setAiAdvice(result.advice);
      setSuccess(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={cn("bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-accent-border shadow-xl text-text-primary w-full", className)}>
      <div className="w-full h-1 bg-accent-border rounded-full mb-6 overflow-hidden">
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-text-primary text-[9px] font-bold uppercase tracking-wider">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane" {...field} className="h-9 bg-background-muted/30 border-accent-border focus:border-accent-blue text-xs sm:text-sm text-text-primary" />
                        </FormControl>
                        <FormMessage className="text-[9px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-text-primary text-[9px] font-bold uppercase tracking-wider">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} className="h-9 bg-background-muted/30 border-accent-border focus:border-accent-blue text-xs sm:text-sm text-text-primary" />
                        </FormControl>
                        <FormMessage className="text-[9px]" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-text-primary text-[9px] font-bold uppercase tracking-wider">Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@company.com" {...field} className="h-9 bg-background-muted/30 border-accent-border focus:border-accent-blue text-xs sm:text-sm text-text-primary" />
                        </FormControl>
                        <FormMessage className="text-[9px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-text-primary text-[9px] font-bold uppercase tracking-wider">Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} className="h-9 bg-background-muted/30 border-accent-border focus:border-accent-blue text-xs sm:text-sm text-text-primary" />
                        </FormControl>
                        <FormMessage className="text-[9px]" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="primaryFocus"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-text-primary text-[9px] font-bold uppercase tracking-wider">Primary Focus</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-9 bg-background-muted/30 border-accent-border focus:border-accent-blue text-xs sm:text-sm text-text-primary">
                            <SelectValue placeholder="Select Focus Area" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white border-accent-border">
                          <SelectItem value="Hardware Architecture" className="text-text-primary">Hardware Architecture</SelectItem>
                          <SelectItem value="Networking Protocols" className="text-text-primary">Networking Protocols</SelectItem>
                          <SelectItem value="Strategic Scaling" className="text-text-primary">Strategic Scaling</SelectItem>
                          <SelectItem value="Full Stack Integration" className="text-text-primary">Full Stack Integration</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-[9px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-text-primary text-[9px] font-bold uppercase tracking-wider">Current Challenge</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the bottlenecks..." 
                          className="min-h-[70px] bg-background-muted/30 border-accent-border focus:border-accent-blue resize-none text-xs sm:text-sm text-text-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-[9px]" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-10 text-[10px] font-bold uppercase tracking-widest btn-hover-effect bg-accent-blue mt-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner size="sm" className="mr-2 text-white" />
                      ANALYZING...
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
            className="text-center py-6"
          >
            <div className="w-12 h-12 bg-accent-blueLight rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-accent-blue" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Inquiry Received</h3>
            <p className="text-text-secondary text-xs mb-6">
              A strategic advisor will review your data and respond within 24 hours.
            </p>

            {aiAdvice && (
              <div className="bg-background-muted border-l-4 border-accent-blue p-4 text-left rounded-r-lg mb-6 shadow-inner">
                <div className="flex items-center space-x-2 mb-2 text-accent-blue font-bold text-[8px] uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  <span>AI STRATEGIC INSIGHT</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed italic">
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
              className="h-9 px-6 text-[9px] font-bold uppercase tracking-widest border-accent-border"
            >
              New Inquiry
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
