
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  genre: string;
  description: string;
  className?: string;
}

const BookCard = ({ 
  title, 
  author, 
  coverImage, 
  genre, 
  description,
  className 
}: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative group h-[450px] rounded-lg overflow-hidden transition-all duration-500",
        "hover:shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={coverImage} 
          alt={`${title} by ${author}`} 
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
            "transition-opacity duration-500",
            isHovered ? "opacity-90" : "opacity-70"
          )}
        ></div>
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col text-white">
        <span className="pill bg-white/20 text-white mb-3">{genre}</span>
        <h3 className="text-xl font-serif font-semibold mb-1">{title}</h3>
        <p className="text-sm text-white/80 mb-4">by {author}</p>
        
        <div 
          className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out",
            isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <p className="text-sm text-white/90 mb-4 line-clamp-3">{description}</p>
          <Button size="sm" variant="secondary" className="w-full">
            <BookOpen className="h-4 w-4 mr-2" /> Read Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
