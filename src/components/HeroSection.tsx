
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Sparkles, RefreshCw } from "lucide-react";

const HeroSection = () => {
  const trendingItemsRef = useRef<HTMLDivElement>(null);

  // Animation for trending items
  useEffect(() => {
    const trendingItems = trendingItemsRef.current?.querySelectorAll('.trending-item');
    
    if (trendingItems) {
      let delay = 0;
      trendingItems.forEach((item) => {
        setTimeout(() => {
          item.classList.add('animate-fade-in-up');
        }, delay);
        delay += 300;
      });
    }
  }, []);

  // List of trending hashtags with growth percentages
  const trendingTags = [
    { tag: "#BookTokBaking", growth: 220 },
    { tag: "#MinimalistVanLife", growth: 186 },
    { tag: "#DarkAcademiaDiet", growth: 152 },
    { tag: "#VintageWellness", growth: 137 },
    { tag: "#QuietCamping", growth: 125 },
  ];

  return (
    <div className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-48">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-brand-blue/10 to-brand-purple/10 blur-3xl rounded-full opacity-70" />
        <div className="absolute bottom-10 left-10 w-1/4 h-1/4 bg-gradient-to-b from-brand-blue/10 to-brand-purple/10 blur-3xl rounded-full opacity-60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center mb-6 space-x-2">
              <div className="bg-brand-purple/10 text-brand-purple rounded-full px-3 py-1 text-sm font-medium inline-flex items-center">
                <Sparkles className="h-3.5 w-3.5 mr-1" />
                <span>AI-Powered Content Intelligence</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="block">Stop chasing trends.</span>
              <span className="block text-brand-blue">Start dictating them.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              ViralMuse helps content creators predict micro-trends, revive old content, and generate viral hooks before anyone else.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-purple text-white w-full sm:w-auto font-medium px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:from-brand-blue/90 hover:to-brand-purple/90"
                >
                  <span>Start Your Free Trial</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/#features">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 text-gray-700 dark:text-gray-200 w-full sm:w-auto font-medium"
                >
                  See Features
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <svg className="h-5 w-5 text-brand-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>No credit card required</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
              <span>14-day free trial</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="relative">
              <div className="glass-card rounded-xl p-2 shadow-2xl transform transition-all duration-500 hover:scale-[1.01] hover:shadow-brand-blue/20">
                <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center mr-3">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Micro-Trend Radar</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Pre-viral trends in your niche</p>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium">
                        Live trends
                      </span>
                    </div>
                    
                    <div ref={trendingItemsRef} className="space-y-3">
                      {trendingTags.map((item, index) => (
                        <div 
                          key={index}
                          className="trending-item opacity-0 flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-mono text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                              {item.tag}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              small creator circles
                            </span>
                          </div>
                          <div className="flex items-center">
                            <div className={`text-sm font-medium ${item.growth > 200 ? 'text-green-500' : 'text-brand-blue'}`}>
                              +{item.growth}%
                            </div>
                            <TrendingUp className={`ml-1 h-4 w-4 ${item.growth > 200 ? 'text-green-500' : 'text-brand-blue'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Updated 2 minutes ago
                      </div>
                      <Link 
                        to="/register" 
                        className="text-sm font-medium text-brand-blue hover:text-brand-purple transition-colors"
                      >
                        Get 1 free pre-viral alert
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Notification */}
              <div className="absolute -left-6 bottom-24 md:bottom-32 glass-card rounded-lg p-4 w-64 shadow-xl opacity-90 hover:opacity-100 transition-all duration-300 animate-float">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-lg">🔥</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">New Opportunity!</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      #BookTokBaking rising 220% - create a 'romanticize baking' video now!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
