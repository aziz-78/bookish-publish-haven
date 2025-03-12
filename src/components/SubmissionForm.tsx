
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SubmissionForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    manuscriptTitle: "",
    genre: "",
    wordCount: "",
    synopsis: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission Received",
        description: "Thank you for your manuscript submission. Our team will review it and get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        manuscriptTitle: "",
        genre: "",
        wordCount: "",
        synopsis: ""
      });
    }, 1500);
  };

  return (
    <section id="submit" className="section bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="pill mb-4">Submit Your Work</span>
          <h2 className="section-title">Manuscript Submission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're always looking for fresh voices and compelling stories. Submit your manuscript for review by our editorial team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Information */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <h3 className="text-2xl font-serif mb-6">Submission Guidelines</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">What We're Looking For</h4>
                <p className="text-muted-foreground">
                  We publish fiction and non-fiction across a variety of genres. We value unique voices, compelling storytelling, and fresh perspectives.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Manuscript Requirements</h4>
                <p className="text-muted-foreground">
                  Complete manuscripts should be professionally edited and ready for review. For fiction, we typically look for works between 70,000-100,000 words.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Review Process</h4>
                <p className="text-muted-foreground">
                  Our editorial team reviews all submissions within 4-6 weeks. If we're interested in your work, we'll contact you to request the full manuscript.
                </p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="order-1 lg:order-2">
            <form 
              onSubmit={handleSubmit} 
              className="glass-card rounded-lg p-6 md:p-8 shadow-lg animate-fade-in"
            >
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="manuscriptTitle" className="text-sm font-medium">
                    Manuscript Title
                  </label>
                  <Input
                    id="manuscriptTitle"
                    name="manuscriptTitle"
                    placeholder="Title of your work"
                    value={formData.manuscriptTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="genre" className="text-sm font-medium">
                      Genre
                    </label>
                    <Input
                      id="genre"
                      name="genre"
                      placeholder="e.g. Literary Fiction"
                      value={formData.genre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="wordCount" className="text-sm font-medium">
                      Word Count
                    </label>
                    <Input
                      id="wordCount"
                      name="wordCount"
                      placeholder="e.g. 80,000"
                      value={formData.wordCount}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="synopsis" className="text-sm font-medium">
                    Brief Synopsis
                  </label>
                  <Textarea
                    id="synopsis"
                    name="synopsis"
                    placeholder="Provide a brief overview of your work (max 500 words)"
                    rows={5}
                    value={formData.synopsis}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Manuscript"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;
