
import React from "react";
import { 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Users,
  ExternalLink,
  Bookmark,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TrendCardProps {
  title: string;
  description: string;
  growth: number;
  platform: string;
  timeframe: string;
  audience: string;
  image?: string;
  isSaved?: boolean;
  onSave?: () => void;
  onClick?: () => void;
}

const TrendCard: React.FC<TrendCardProps> = ({
  title,
  description,
  growth,
  platform,
  timeframe,
  audience,
  image,
  isSaved = false,
  onSave,
  onClick,
}) => {
  return (
    <Card 
      className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800" 
      onClick={onClick}
    >
      <div className="relative">
        {image ? (
          <div className="h-40 w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        ) : (
          <div className="h-40 w-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 flex items-center justify-center">
            <TrendingUp className="h-16 w-16 text-brand-blue/50" />
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              onSave && onSave();
            }}
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-brand-blue text-brand-blue' : 'text-gray-600 dark:text-gray-400'}`} />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="bg-brand-blue/10 text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            +{growth}% growth
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {timeframe}
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-brand-blue">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-full flex items-center">
            <Users className="h-3 w-3 mr-1" />
            {audience}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2.5 py-1 rounded-full">
            {platform}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <BarChart3 className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            20 creators tracking
          </span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-brand-blue hover:text-brand-purple text-sm"
        >
          <span>View details</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TrendCard;
