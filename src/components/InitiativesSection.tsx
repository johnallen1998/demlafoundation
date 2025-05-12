
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface InitiativeCardProps {
  title: string;
  description: string;
  icon: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="w-16 h-16 rounded-full bg-demla-muted flex items-center justify-center mb-6">
          <div className="text-3xl">{icon}</div>
        </div>
        <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const InitiativesSection: React.FC = () => {
  const initiatives = [
    {
      title: "Education Access",
      description: "Creating opportunities for quality education in underserved communities through scholarships and learning resources.",
      icon: "🎓",
    },
    {
      title: "Environmental Conservation",
      description: "Protecting and preserving natural ecosystems through sustainable practices and community-based conservation efforts.",
      icon: "🌱",
    },
    {
      title: "Community Development",
      description: "Building stronger communities through infrastructure improvement, economic opportunities, and social support systems.",
      icon: "🏘️",
    },
    {
      title: "Healthcare Initiatives",
      description: "Improving access to quality healthcare services and promoting preventive health education in vulnerable populations.",
      icon: "🏥",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-demla-accent">
      <div className="section-container">
        <h2 className="heading-lg text-center mb-4">Future Initiatives</h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Once established, the Demla Foundation will focus on these key areas to create meaningful impact in communities that need it most.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              title={initiative.title}
              description={initiative.description}
              icon={initiative.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
