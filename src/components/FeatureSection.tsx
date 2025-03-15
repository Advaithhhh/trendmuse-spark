
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
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-brand-purple/10 text-brand-purple rounded-full px-3 py-1 text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Content Intelligence Tools</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            All the tools you need to stay ahead of trends
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300">
            ViralMuse provides AI-powered insights to help content creators predict, plan, and produce viral-worthy content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-100/80 dark:border-gray-800/50 hover:shadow-xl hover:-translate-y-1 group"
              style={{ animationDelay: feature.delay }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-gray-50/40 to-gray-100/20 dark:from-gray-800/20 dark:to-gray-900/10 rounded-full opacity-70 blur-xl transform transition-transform group-hover:scale-125" />
              
              <div className={`relative h-12 w-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-brand-blue transition-colors">
                {feature.title}
              </h3>
              
              <p className="relative text-gray-600 dark:text-gray-400 mb-5 line-clamp-3">
                {feature.description}
              </p>
              
              <div className="relative flex justify-end items-center mt-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="flex items-center justify-center text-sm font-medium text-brand-blue">
                  <span className="mr-2">Learn more</span>
                  <div className="h-7 w-7 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-blue" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/register">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium px-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Free 14-Day Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
