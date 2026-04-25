
"use client";

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Network, BarChart3, CheckCircle2, Zap, Shield, Search } from 'lucide-react';
import { Solutions } from '@/components/sections/Solutions';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="bg-background-muted py-20 border-b border-accent-border">
        <Container>
          <div className="max-w-3xl">
            <SectionLabel>FULL STACK SERVICES</SectionLabel>
            <h1 className="mb-6">Precision <span className="text-accent-blue">Systems</span> Engineering</h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              We provide the underlying logic and physical infrastructure required to support aggressive global expansion. 
              Explore our core domains below.
            </p>
          </div>
        </Container>
      </section>

      <div id="overview">
        <Solutions />
      </div>

      {/* Tactical Process */}
      <section className="section-padding bg-background-hero text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel className="text-accent-blue">OUR METHODOLOGY</SectionLabel>
              <h2 className="text-white mb-8">The Tactical <span className="text-accent-blue">Execution</span> Process</h2>
              <div className="space-y-12">
                {[
                  {
                    icon: <Search className="w-6 h-6" />,
                    title: "01. Logic Audit",
                    desc: "We analyze your current stack for performance leaks and protocol inefficiencies."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "02. Infrastructure Deployment",
                    desc: "Custom hardware is provisioned and deployed across our global edge network."
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "03. Strategic Guardrails",
                    desc: "We implement logic protocols that ensure stability during aggressive scaling phases."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-blue flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(43,108,176,0.4)]">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent-blue/10 blur-[120px] rounded-full" />
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <span className="label-mono text-accent-blue">REAL-TIME TELEMETRY</span>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-accent-blue" />
                  </div>
                </div>
                <div className="space-y-6">
                  {[75, 92, 45, 88].map((val, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs label-mono text-white/40">
                        <span>NODE_ARCH_{i+1}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-accent-blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-background-page" id="specifications">
        <Container>
          <div className="text-center mb-16">
            <SectionLabel className="mx-auto">TECHNICAL SPECIFICATIONS</SectionLabel>
            <h2 className="mb-4">Deep Dive into Core <span className="text-accent-blue">Protocols</span></h2>
          </div>

          <Tabs defaultValue="hardware" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 h-14 bg-white border border-accent-border">
              <TabsTrigger value="hardware" className="data-[state=active]:bg-accent-blueLight data-[state=active]:text-accent-blue h-12">Hardware</TabsTrigger>
              <TabsTrigger value="protocols" className="data-[state=active]:bg-accent-blueLight data-[state=active]:text-accent-blue h-12">Protocols</TabsTrigger>
              <TabsTrigger value="strategy" className="data-[state=active]:bg-accent-blueLight data-[state=active]:text-accent-blue h-12">Strategy</TabsTrigger>
            </TabsList>
            
            <div className="mt-8 bg-white p-8 md:p-12 rounded-2xl border border-accent-border shadow-sm">
              <TabsContent value="hardware" className="mt-0" id="hardware">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-accent-blueLight rounded-lg">
                    <Cpu className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-bold">Layer 01: Physical Compute</h3>
                </div>
                <p className="text-text-secondary mb-8">
                  Our hardware solutions are built for thermal efficiency and maximum IOPS. We customize every rack 
                  to meet the specific compute density requirements of your applications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Custom Liquid Cooling Architectures",
                    "Next-Gen FPGA Integration",
                    "Tier-4 Data Center Deployment",
                    "Global Edge Node Networks"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="protocols" className="mt-0" id="protocols">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-accent-blueLight rounded-lg">
                    <Network className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-bold">Layer 02: Communication Logic</h3>
                </div>
                <p className="text-text-secondary mb-8">
                  Data only matters if it arrives on time. We optimize packet routing and encryption 
                  at the firmware level to ensure zero-bottleneck communication.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Low-Latency Mesh Networking",
                    "End-to-End Quantum Encryption",
                    "Real-Time Load Balancing Logic",
                    "Proprietary API Gateways"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="strategy" className="mt-0" id="strategy">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-accent-blueLight rounded-lg">
                    <BarChart3 className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h3 className="text-2xl font-bold">Layer 03: Growth Orchestration</h3>
                </div>
                <p className="text-text-secondary mb-8">
                  The final layer translates technical capability into market dominance. We use 
                  predictive modeling to design your go-to-market architecture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Predictive Market Modeling",
                    "Competitive Logic Mapping",
                    "Resource Allocation Optimization",
                    "Aggressive Scaling Roadmaps"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
