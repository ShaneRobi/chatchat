'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, TrendingUp, Users, Sparkles } from 'lucide-react';

export function ContentOpportunities() {
  const opportunities = [
    {
      id: 1,
      title: "Leadership lessons from scaling 0→100 engineers",
      description: "Your experience building engineering teams resonates with founders",
      potential: "High",
      audience: "Tech Leaders",
      platforms: ["LinkedIn", "Medium"],
      relatedThoughts: 3
    },
    {
      id: 2,
      title: "Product decision framework for early-stage startups",
      description: "Unique perspective on prioritization under constraints",
      potential: "High",
      audience: "Product Managers",
      platforms: ["LinkedIn", "Twitter"],
      relatedThoughts: 5
    },
    {
      id: 3,
      title: "Technical debt: When to pay it down vs. ship faster",
      description: "Practical advice from real-world trade-offs",
      potential: "Medium",
      audience: "Engineering Managers",
      platforms: ["Dev.to", "LinkedIn"],
      relatedThoughts: 2
    },
    {
      id: 4,
      title: "Building in public: What I learned from 6 months of transparency",
      description: "Personal journey with metrics and insights",
      potential: "High",
      audience: "Indie Hackers",
      platforms: ["Twitter", "LinkedIn"],
      relatedThoughts: 8
    },
    {
      id: 5,
      title: "Career growth: IC vs. Management track decision framework",
      description: "Help engineers make this critical choice",
      potential: "Medium",
      audience: "Software Engineers",
      platforms: ["LinkedIn", "Newsletter"],
      relatedThoughts: 4
    }
  ];

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case 'High': return 'var(--neon-green)';
      case 'Medium': return 'var(--neon-cyan)';
      default: return 'var(--neon-purple)';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Content Opportunities
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            AI-generated content ideas from your thoughts
          </p>
        </div>
        <Badge className="neon-border" style={{ color: 'var(--neon-green)' }}>
          <Sparkles className="w-3 h-3 mr-1" />
          5 New Ideas
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.id} className="vaporwave-card hover:shadow-[0_0_30px_rgba(1,205,254,0.4)] transition-all">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5" style={{ color: 'var(--neon-pink)' }} />
                    <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {opportunity.description}
                  </CardDescription>
                </div>
                <Badge 
                  variant="outline"
                  className="neon-border flex-shrink-0"
                  style={{ color: getPotentialColor(opportunity.potential) }}
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {opportunity.potential}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" style={{ color: 'var(--neon-cyan)' }} />
                  <span>{opportunity.audience}</span>
                </div>
                <div className="flex gap-2">
                  {opportunity.platforms.map((platform, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="neon-border"
                      style={{ color: 'var(--neon-purple)' }}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
                <Badge 
                  variant="outline"
                  className="neon-border ml-auto"
                  style={{ color: 'var(--neon-pink)' }}
                >
                  {opportunity.relatedThoughts} related thoughts
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
