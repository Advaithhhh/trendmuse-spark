import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PricingTable from "@/components/PricingTable";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowDownRight, Zap, Search, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const Index = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "ViralMuse spotted the 'quiet camping' trend 4 months early – my video hit 1M views in a week.",
      author: "@OutdoorLena",
      role: "Travel Creator",
      platform: "250K followers",
      stars: 5,
      delay: "0ms",
    },
    {
      quote: "The Zombie Content Reviver turned a 2-year-old blog post into a viral Twitter thread that brought in 1500 new subscribers.",
      author: "Mark Chen",
      role: "Finance Blogger",
      platform: "Substack",
      stars: 5,
      highlight: true,
      delay: "100ms",
    },
    {
      quote: "I was struggling to grow until ViralMuse showed me that my audience was craving minimalist travel content.",
      author: "Sophia Williams",
      role: "Content Creator",
      platform: "YouTube",
      stars: 5,
      delay: "200ms",
    },
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      number: "01",
      title: "Connect your accounts",
      description: "Link your social media accounts and content platforms to ViralMuse.",
      icon: <ArrowDownRight className="h-5 w-5" />,
    },
    {
      number: "02",
      title: "AI analyzes your content",
      description: "Our algorithms analyze your existing content, audience engagement, and trending topics.",
      icon: <Search className="h-5 w-5" />,
    },
    {
      number: "03",
      title: "Get personalized insights",
      description: "Receive trend predictions, content revival suggestions, and hook ideas tailored to your niche.",
      icon: <AlertCircle className="h-5 w-5" />,
    },
    {
      number: "04",
      title: "Create trend-setting content",
      description: "Use our insights to produce content that anticipates trends instead of chasing them.",
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* How It Works */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-brand-purple/10 text-brand-purple rounded-full mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Predict trends before they happen
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our AI analyzes micro-signals across the web to identify emerging trends at the earliest stages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-gray-200 dark:text-gray-800">{step.number}</span>
                      <div className="h-10 w-10 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center ml-4">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                      <svg width="120" height="16" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M119.707 8.70711C120.098 8.31658 120.098 7.68342 119.707 7.29289L113.343 0.928932C112.953 0.538408 112.319 0.538408 111.929 0.928932C111.538 1.31946 111.538 1.95262 111.929 2.34315L117.586 8L111.929 13.6569C111.538 14.0474 111.538 14.6805 111.929 15.0711C112.319 15.4616 112.953 15.4616 113.343 15.0711L119.707 8.70711ZM0 9H119V7H0V9Z" fill="#E2E8F0"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <FeatureSection />
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Loved by content creators
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See how creators are using ViralMuse to stay ahead of trends and grow their audience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  platform={testimonial.platform}
                  stars={testimonial.stars}
                  highlight={testimonial.highlight}
                  delay={testimonial.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 blur-3xl rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to stop chasing trends and <span className="text-brand-blue">start setting them?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of content creators who are using ViralMuse to predict trends, revive old content, and generate viral hooks.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <span>Start Your Free Trial</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 text-gray-700 dark:text-gray-200 font-medium w-full sm:w-auto"
                  onClick={() => scrollToSection("pricing")}
                >
                  View Pricing
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </section>
        
        <PricingTable />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
