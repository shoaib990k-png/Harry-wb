"use client";

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Strategic Architecture?",
    answer: "It is the integration of custom-built hardware, low-latency communication protocols, and data-driven market strategy. We build the physical and logical foundation that allows companies to scale without technical debt."
  },
  {
    question: "How long does a typical deployment take?",
    answer: "Initial logic audits are completed within 72 hours. Full infrastructure deployment and protocol optimization typically take 4-6 weeks depending on the complexity of the global node requirements."
  },
  {
    question: "Do you only work with enterprise clients?",
    answer: "While we specialize in high-growth enterprise infrastructure, we also partner with late-stage startups that are preparing for aggressive global expansion and require zero-failure logic layers."
  },
  {
    question: "Can you optimize existing hardware stacks?",
    answer: "Yes. Our Layer 02 (Logic Protocols) can be implemented on most modern server architectures to significantly reduce latency and improve throughput without a full hardware replacement."
  }
];

export function FAQ() {
  return (
    <section className="section-padding bg-background-page">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel className="mx-auto">FREQUENTLY ASKED QUESTIONS</SectionLabel>
            <h2 className="text-3xl font-bold">Technical <span className="text-accent-blue">Clarity</span></h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-white border border-accent-border rounded-xl px-6 transition-all duration-200 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-bold text-text-primary hover:no-underline hover:text-accent-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
