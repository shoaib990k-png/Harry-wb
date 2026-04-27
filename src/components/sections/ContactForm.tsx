"use client";

import React, { useState, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
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
import { CheckCircle2, Sparkles, Shield, Zap, BookOpen, Clock } from 'lucide-react';
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
  challenge: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  className?: string;
}

const features = [
  { icon: <Zap className="w-4 h-4" />, title: "Discovery session", desc: "Technical alignment" },
  { icon: <Shield className="w-4 h-4" />, title: "Readiness audit", desc: "Gap identification" },
  { icon: <BookOpen className="w-4 h-4" />, title: "Chapter preview", desc: "Immediate value" },
  { icon: <Clock className="w-4 h-4" />, title: "Direct access", desc: "24-hour response" },
];

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<string | null>(null);

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

  const allValues = useWatch({ control: form.control });
  
  const progress = useMemo(() => {
    const totalFields = 5;
    const filledFields = [
      allValues.firstName, allValues.lastName, allValues.email, 
      allValues.organization, allValues.primaryFocus
    ].filter(val => val && val.length > 0).length;
    return Math.min(Math.round((filledFields / totalFields) * 33) + 33, 100);
  }, [allValues]);

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const result = await generateStrategicAdvice({
        primaryFocus: values.primaryFocus,
        challenge: values.challenge || "No specific challenge provided.",
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
    <div className={cn("grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white p-6 md:p-10 lg:p-12 rounded-2xl border border-accent-border shadow-2xl text-text-primary", className)}>
      <div className="lg:col-span-2 space-y-6 md:space-y-8">
        <div className="space-y-2">
          <p className="label-mono text-accent-blue text-[10px] md:text-xs font-bold uppercase tracking-widest">STRATEGIC ALIGNMENT {progress}%</p>
          <div className="w-full h-1.5 bg-accent-border rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent-blue"
              initial={{ width: "33%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-accent-blueLight flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300 shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="font-bold text-sm text-text-primary">{f.title}</p>
                <p className="text-xs text-text-muted">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 lg:border-l border-accent-border lg:pl-12 pt-6 lg:pt-0">
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-text-primary text-[10px] font-bold uppercase tracking-widest">First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} className="bg-background-muted/40 h-11 text-text-primary border-accent-border focus:ring-accent-blue" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-text-primary text-[10px] font-bold uppercase tracking-widest">Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} className="bg-background-muted/40 h-11 text-text-primary border-accent-border focus:ring-accent-blue" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-text-primary text-[10px] font-bold uppercase tracking-widest">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="name@company.com" {...field} className="bg-background-muted/40 h-11 text-text-primary border-accent-border focus:ring-accent-blue" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-text-primary text-[10px] font-bold uppercase tracking-widest">Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Systems" {...field} className="bg-background-muted/40 h-11 text-text-primary border-accent-border focus:ring-accent-blue" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="primaryFocus"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-text-primary text-[10px] font-bold uppercase tracking-widest">Primary Focus Area</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background-muted/40 h-11 text-text-primary border-accent-border focus:ring-accent-blue">
                              <SelectValue placeholder="Select intent..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="Hardware Architecture">Hardware Architecture</SelectItem>
                            <SelectItem value="Networking Protocols">Networking Protocols</SelectItem>
                            <SelectItem value="Strategic Scaling">Strategic Scaling</SelectItem>
                            <SelectItem value="Full Stack Integration">Full Stack Integration</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <div className="flex justify-between items-center">
                          <FormLabel className="text-text-primary text-[10px] font-bold uppercase tracking-widest">Current Challenge</FormLabel>
                          <span className="text-[9px] text-text-muted font-bold uppercase tracking-widest opacity-60">Optional</span>
                        </div>
                        <FormControl>
                          <Textarea 
                            placeholder="Identify immediate bottlenecks..." 
                            className="bg-background-muted/40 min-h-[100px] md:min-h-[120px] resize-none text-text-primary border-accent-border focus:ring-accent-blue" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 pt-2">
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-[11px] font-bold uppercase tracking-[0.2em] btn-hover-effect bg-accent-blue text-white shadow-lg hover:bg-accent-navy transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner size="sm" className="mr-2 text-white" />
                          ESTABLISHING PORT...
                        </>
                      ) : "Request Discovery Session →"}
                    </Button>
                    <p className="text-center text-[9px] text-text-muted font-bold tracking-widest uppercase opacity-60">
                      Data Encrypted. Sovereignty Guaranteed.
                    </p>
                  </div>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 md:py-12"
            >
              <div className="w-16 h-16 bg-accent-blueLight rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-accent-blue" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Protocol Established</h3>
              <p className="text-text-secondary text-sm mb-10 max-w-xs mx-auto opacity-70">
                A strategic advisor will respond through the secure channel within 24 hours.
              </p>

              {aiAdvice && (
                <div className="bg-background-muted border-l-4 border-accent-blue p-6 text-left rounded-r-xl mb-10 shadow-inner">
                  <div className="flex items-center space-x-2 mb-3 text-accent-blue font-bold text-[9px] uppercase tracking-[0.2em]">
                    <Sparkles className="w-4 h-4" />
                    <span>SECURE STRATEGIC INSIGHT</span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed italic opacity-80">
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
                className="h-11 px-8 text-[10px] font-bold uppercase tracking-widest border-accent-border hover:border-accent-blue hover:text-accent-blue transition-all"
              >
                New Session
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
