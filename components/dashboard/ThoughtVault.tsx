'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Tag, Calendar, Search } from 'lucide-react';

export function ThoughtVault() {
  const thoughts = [
    {
      id: 1,
      content: "The best product decisions come from understanding user pain points, not feature requests",
      tags: ["product", "leadership"],
      date: "2024-01-15",
      source: "Team meeting"
    },
    {
      id: 2,
      content: "Building in public creates accountability and attracts like-minded people",
      tags: ["personal-brand", "strategy"],
      date: "2024-01-14",
      source: "Twitter thread"
    },
    {
      id: 3,
      content: "Technical debt is like credit card debt - small amounts compound quickly",
      tags: ["engineering", "metaphors"],
      date: "2024-01-13",
      source: "Code review"
    },
    {
      id: 4,
      content: "The most valuable skill in tech is learning how to learn efficiently",
      tags: ["learning", "career"],
      date: "2024-01-12",
      source: "Mentoring session"
    },
    {
      id: 5,
      content: "Great documentation is a force multiplier for engineering teams",
      tags: ["engineering", "productivity"],
      date: "2024-01-11",
      source: "Documentation review"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Thought Vault
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Your captured insights and ideas
          </p>
        </div>
        <div className="flex items-center gap-2 vaporwave-card px-4 py-2">
          <Search className="w-4 h-4" style={{ color: 'var(--neon-purple)' }} />
          <input 
            type="text" 
            placeholder="Search thoughts..." 
            className="bg-transparent border-none outline-none text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {thoughts.map((thought) => (
          <Card key={thought.id} className="vaporwave-card hover:shadow-[0_0_30px_rgba(255,113,206,0.4)] transition-all">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-lg font-medium mb-2">
                    {thought.content}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {thought.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="neon-border"
                        style={{ color: 'var(--neon-cyan)' }}
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--neon-pink)' }} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm opacity-70">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{thought.date}</span>
                </div>
                <span>•</span>
                <span>{thought.source}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
