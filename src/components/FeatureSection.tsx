
import React, { useEffect, useRef } from "react";
import { 
  TrendingUp, 
  RefreshCw, 
  HeartPulse, 
  Sparkles,
  Layers,
  Zap,
  BarChart3,
  BookOpen,
  ArrowRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const FeatureSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      icon: TrendingUp,
      title: "Micro-Trend Radar",
      description:
        "Detect rising keywords and hashtags with <100 posts that are in the pre-viral stage before big creators pick them up.",
      detailedDescription: "Our AI continuously scans across social platforms to identify micro-patterns before they become mainstream trends. Get notified about emerging content formats, hashtags, and keywords while they're still under the radar.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: RefreshCw,
      title: "Zombie Content Reviver",
      description:
        "Upload old content and our AI identifies high-performing snippets, suggesting strategic remixes for new platforms.",
      detailedDescription: "Don't let your valuable content die. Our reviver analyzes your content library, identifies pieces with untapped potential, and suggests ways to repurpose them for current audience interests and platform algorithms.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: HeartPulse,
      title: "Audience Emotion Decoder",
      description:
        "Analyze comments and DMs to uncover unmet audience cravings and emotional patterns that drive engagement.",
      detailedDescription: "Understand the emotional triggers that resonate with your audience. We analyze sentiment patterns across your engagement data to reveal the emotional drivers behind your most successful content.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Sparkles,
      title: "Predictive Hook Generator",
      description:
        "Auto-generate high-converting titles and thumbnails based on future trends your audience will respond to.",
      detailedDescription: "Stop guessing what will grab attention. Our AI predicts what hooks, titles, and visuals will perform best based on emerging trends and your specific audience's response patterns.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Layers,
      title: "Content Gap Analyzer",
      description:
        "Identify untapped content opportunities within your niche that competitors haven't discovered yet.",
      detailedDescription: "Find the white space in your content niche. Our analyzer maps competitor content against audience interest to identify valuable topics and angles that remain unclaimed in your market.",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Viral Timing Optimizer",
      description:
        "Predict the optimal posting times for maximum engagement based on trend cycles and audience behavior.",
      detailedDescription: "Post at the perfect moment. Our timing algorithm predicts peak engagement windows based on your specific audience's online behavior patterns and platform-specific trend cycles.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: BarChart3,
      title: "Opportunity Autopsy",
      description:
        "Analyze missed opportunities and track content performance against predicted trends over time.",
      detailedDescription: "Learn from every piece of content. Our autopsy tool analyzes performance against predictions, helping you understand why some content exceeded expectations while others underperformed.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: BookOpen,
      title: "AI Script Generator",
      description:
        "Create compelling scripts that incorporate predicted trends and emotional triggers for your audience.",
      detailedDescription: "Generate content scripts tailored to your brand voice that leverage predicted trends and audience emotional triggers. Save hours of writing time while improving engagement metrics.",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const featureElements = document.querySelectorAll('.feature-row');
    featureElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      featureElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={featuresRef}
      className="relative py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
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

        <div className="max-w-5xl mx-auto space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "feature-row group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800/40 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 transform opacity-0 translate-y-8",
                "hover:translate-y-[-2px] cursor-pointer"
              )}
              style={{ 
                transitionDelay: `${index * 50}ms`, 
                animationDelay: `${index * 50}ms` 
              }}
            >
              <div className="p-6 lg:p-7 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${feature.color} shadow-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                
                {/* Content Container */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-brand-blue transition-colors line-clamp-1">
                      {feature.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="mr-1 font-medium">Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mt-1 transition-all duration-300 line-clamp-1 group-hover:line-clamp-none">
                    {feature.description}
                  </p>
                  
                  {/* Expanded Content - Only visible on hover */}
                  <div className="mt-3 max-h-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-24">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {feature.detailedDescription}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />
            </div>
          ))}

          {/* Add new tool teaser */}
          <div className="feature-row opacity-0 translate-y-8 group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-gray-900/40 dark:to-gray-800/40 backdrop-blur-sm border border-dashed border-gray-200 dark:border-gray-700/50 p-6 text-center hover:border-brand-blue/30 dark:hover:border-brand-blue/30 transition-all duration-300 transform hover:translate-y-[-2px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 transition-colors">
                <Plus className="h-6 w-6 text-gray-400 dark:text-gray-500 group-hover:text-brand-blue transition-colors" />
              </div>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 group-hover:text-brand-blue transition-colors">
                More tools coming soon
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto">
                Our team is constantly developing new AI-powered tools to help you stay ahead of content trends.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-14">
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
