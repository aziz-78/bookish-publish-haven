
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const authors = [
  {
    id: 1,
    name: "Emma Rivers",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    bio: "Award-winning novelist known for her lyrical prose and emotional depth. Her works have been translated into 12 languages and adapted for film.",
    achievements: ["National Book Award Finalist", "3x New York Times Bestselling Author", "Pulitzer Prize Nominee"]
  },
  {
    id: 2,
    name: "Alexander Chen",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    bio: "Science fiction visionary whose work explores the intersection of technology and human consciousness. Formerly a quantum physicist.",
    achievements: ["Hugo Award Winner", "TED Speaker", "Scientific American Contributor"]
  },
  {
    id: 3,
    name: "Sofia Garcia",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000",
    bio: "Bestselling romance and historical fiction author. Her multi-generational sagas have captivated readers around the world.",
    achievements: ["30+ Published Novels", "International Romance Writers Award", "Film Adaptation"]
  },
];

const AuthorSpotlight = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(authors[0]);

  return (
    <section id="authors" className="section bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="pill mb-4">Meet Our Authors</span>
          <h2 className="section-title">Author Spotlight</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the brilliant minds behind our exceptional books. Each author brings a unique voice and perspective to the literary world.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Author photo */}
          <div className="relative w-full max-w-sm lg:w-2/5">
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <img 
                src={selectedAuthor.photo} 
                alt={selectedAuthor.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/80 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10 -z-10"></div>
          </div>
          
          {/* Author details */}
          <div className="w-full lg:w-3/5 animate-fade-in">
            <h3 className="text-3xl font-serif mb-4">{selectedAuthor.name}</h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              {selectedAuthor.bio}
            </p>
            
            <div className="mb-8">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Notable Achievements
              </h4>
              <ul className="space-y-2">
                {selectedAuthor.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="hover-lift">
              View Author's Books
            </Button>
          </div>
        </div>
        
        {/* Author selector */}
        <div className="mt-12 flex justify-center gap-4">
          {authors.map((author) => (
            <button
              key={author.id}
              className={cn(
                "w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300",
                selectedAuthor.id === author.id 
                  ? "border-primary scale-110" 
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
              onClick={() => setSelectedAuthor(author)}
            >
              <img 
                src={author.photo} 
                alt={author.name} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;
