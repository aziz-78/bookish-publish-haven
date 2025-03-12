
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/ui/book-card";

const books = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Emma Rivers",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000",
    genre: "Literary Fiction",
    description: "A profound exploration of silence and the echoes of our past. Emma Rivers delivers a masterpiece that resonates with emotional depth."
  },
  {
    id: 2,
    title: "Quantum Memory",
    author: "Alexander Chen",
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000",
    genre: "Science Fiction",
    description: "When memories become malleable, reality itself comes into question. A thrilling journey through time, space, and the human mind."
  },
  {
    id: 3,
    title: "Whispers in Autumn",
    author: "Sofia Garcia",
    coverImage: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000",
    genre: "Romance",
    description: "A sweeping romance that spans generations, set against the backdrop of autumnal New England. A story of love that transcends time."
  },
  {
    id: 4,
    title: "The Cryptic Hour",
    author: "James Blackwood",
    coverImage: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1000",
    genre: "Mystery",
    description: "A clock ticks as Detective Sarah Lawson races to solve a series of cryptic murders. Will she crack the code before time runs out?"
  },
  {
    id: 5,
    title: "Verdant Wisdom",
    author: "Olivia Nakamura",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000",
    genre: "Personal Growth",
    description: "An exploration of nature's lessons for human growth. Discover the wisdom that surrounds us in the natural world."
  }
];

const FeaturedBooks = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBooks = 3; // Number of books visible at once
  
  const showNextBooks = () => {
    setStartIndex((prevIndex) => 
      prevIndex + visibleBooks >= books.length ? 0 : prevIndex + 1
    );
  };
  
  const showPrevBooks = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? books.length - visibleBooks : prevIndex - 1
    );
  };
  
  // Get current visible books
  const currentBooks = () => {
    const displayBooks = [];
    for (let i = 0; i < visibleBooks; i++) {
      const index = (startIndex + i) % books.length;
      displayBooks.push(books[index]);
    }
    return displayBooks;
  };

  return (
    <section id="books" className="section bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div>
          <span className="pill mb-4">Our Books</span>
          <h2 className="section-title">Featured Titles</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our collection of thought-provoking, inspiring, and entertaining books that will transport you to new worlds.
          </p>
        </div>
        
        <div className="flex gap-2 mt-6 md:mt-0">
          <Button 
            variant="outline" 
            size="icon"
            onClick={showPrevBooks}
            className="rounded-full h-10 w-10"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={showNextBooks}
            className="rounded-full h-10 w-10"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {currentBooks().map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            genre={book.genre}
            description={book.description}
            className="animate-fade-in"
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="hover-lift">
          Browse All Books
        </Button>
      </div>
    </section>
  );
};

export default FeaturedBooks;
