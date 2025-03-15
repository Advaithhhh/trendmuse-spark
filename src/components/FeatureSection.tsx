import React from "react";
import { 
  TrendingUp, 
  RefreshCw, 
  HeartPulse, 
  Sparkles,
  Layers,
  Zap,
  BarChart3,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const FeatureSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Micro-Trend Radar",
      description:
        "Detect rising keywords and hashtags with <100 posts that are in the pre-viral stage before big creators pick them up.",
      color: "from-blue-500 to-blue-600",
      delay: "0ms",
    },
    {
      icon: RefreshCw,
      title: "Zombie Content Reviver",
      description:
        "Upload old content and our AI identifies high-performing snippets, suggesting strategic remixes for new platforms.",
      color: "from-purple-500 to-purple-600",
      delay: "100ms",
    },
    {
      icon: HeartPulse,
      title: "Audience Emotion Decoder",
      description:
        "Analyze comments and DMs to uncover unmet audience cravings and emotional patterns that drive engagement.",
      color: "from-pink-500 to-pink-600",
      delay: "200ms",
    },
    {
      icon: Sparkles,
      title: "Predictive Hook Generator",
      description:
        "Auto-generate high-converting titles and thumbnails based on future trends your audience will respond to.",
      color: "from-green-500 to-green-600",
      delay: "300ms",
    },
    {
      icon: Layers,
      title: "Content Gap Analyzer",
      description:
        "Identify untapped content opportunities within your niche that competitors haven't discovered yet.",
      color: "from-orange-500 to-orange-600",
      delay: "400ms",
    },
    {
      icon: Zap,
      title: "Viral Timing Optimizer",
      description:
        "Predict the optimal posting times for maximum engagement based on trend cycles and audience behavior.",
      color: "from-cyan-500 to-cyan-600",
      delay: "500ms",
    },
    {
      icon: BarChart3,
      title: "Opportunity Autopsy",
      description:
        "Analyze missed opportunities and track content performance against predicted trends over time.",
      color: "from-red-500 to-red-600",
      delay: "600ms",
    },
    {
      icon: BookOpen,
      title: "AI Script Generator",
      description:
        "Create compelling scripts that incorporate predicted trends and emotional triggers for your audience.",
      color: "from-emerald-500 to-emerald-600",
      delay: "700ms",
    },
  ];

  return (
    <section id="features" className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-purple/30 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-300/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 backdrop-blur-sm border border-brand-purple/10">
            <Sparkles className="h-4 w-4 mr-2 text-brand-purple" />
            <span className="text-sm font-medium bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              Content Intelligence Tools
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            All the tools you need to stay ahead of trends
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ViralMuse provides AI-powered insights to help content creators predict, plan, and produce viral-worthy content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative h-full border-0 overflow-hidden transition-all duration-300 hover:translate-y-[-8px] backdrop-blur-sm bg-white/80 dark:bg-gray-900/40 shadow-lg hover:shadow-xl dark:shadow-gray-900/30"
              style={{ animationDelay: feature.delay }}
            >
              {/* Gradient overlay that changes on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-transparent" />
              
              {/* Glowing orb in background */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full opacity-10 blur-2xl transform transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`} />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start space-x-5">
                  <div className={`flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-blue transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end mt-6 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="inline-flex items-center text-sm font-medium text-brand-blue">
                    <span className="mr-2">Learn more</span>
                    <div className="h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-brand-blue" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/register">
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
            >
              {/* Button shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
              
              <span className="relative z-10 flex items-center">
                Start Your Free 14-Day Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </Link>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
