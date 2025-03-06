
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  platform?: string;
  image?: string;
  stars?: number;
  highlight?: boolean;
  delay?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  platform,
  image,
  stars = 5,
  highlight = false,
  delay = "0ms",
}) => {
  return (
    <Card
      className={`overflow-hidden transition-all duration-500 hover:shadow-xl ${
        highlight
          ? "border-brand-blue/30 dark:border-brand-blue/30 shadow-lg shadow-brand-blue/5"
          : "border-gray-200 dark:border-gray-800 shadow-md"
      }`}
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-6 md:p-8">
        {stars > 0 && (
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        <blockquote className="text-gray-700 dark:text-gray-300 mb-6 relative">
          <div className="absolute -top-1 -left-2 text-4xl text-brand-blue/20">"</div>
          <p className="relative z-10 text-lg">{quote}</p>
          <div className="absolute -bottom-5 -right-2 text-4xl text-brand-blue/20">"</div>
        </blockquote>

        <div className="flex items-center mt-6">
          {image && (
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow">
              <img src={image} alt={author} className="h-full w-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{author}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{role}</span>
              {platform && (
                <>
                  <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 mx-2" />
                  <span>{platform}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
