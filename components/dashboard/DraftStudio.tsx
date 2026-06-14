'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileEdit, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export function DraftStudio() {
  const drafts = [
    {
      id: 1,
      title: "Leadership lessons from scaling 0→100 engineers",
      status: "Review",
      platform: "LinkedIn",
      wordCount: 847,
      lastEdited: "2 hours ago",
      aiScore: 92
    },
    {
      id: 2,
      title: "Product decision framework for early-stage startups",
      status: "Draft",
      platform: "Medium",
      wordCount: 1243,
      lastEdited: "5 hours ago",
      aiScore: 88
    },
    {
      id: 3,
      title: "Technical debt: When to pay it down vs. ship faster",
      status: "Approved",
      platform: "Dev.to",
      wordCount: 956,
      lastEdited: "1 day ago",
      aiScore: 95
    },
    {
      id: 4,
      title: "Building in public: 6 months of transparency",
      status: "Draft",
      platform: "Twitter Thread",
      wordCount: 432,
      lastEdited: "3 hours ago",
      aiScore: 85
    },
    {
      id: 5,
      title: "Career growth: IC vs. Management decision framework",
      status: "Review",
      platform: "LinkedIn",
      wordCount: 1089,
      lastEdited: "6 hours ago",
      aiScore: 90
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'var(--neon-green)';
      case 'Review': return 'var(--neon-cyan)';
      case 'Draft': return 'var(--neon-purple)';
      default: return 'var(--neon-pink)';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return CheckCircle2;
      case 'Review': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Draft Studio
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Your content in progress
          </p>
        </div>
        <div className="flex gap-2">
          <Badge className="neon-border" style={{ color: 'var(--neon-cyan)' }}>
            3 In Review
          </Badge>
          <Badge className="neon-border" style={{ color: 'var(--neon-green)' }}>
            2 Approved
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {drafts.map((draft) => {
          const StatusIcon = getStatusIcon(draft.status);
          return (
            <Card key={draft.id} className="vaporwave-card hover:shadow-[0_0_30px_rgba(185,103,255,0.4)] transition-all">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FileEdit className="w-5 h-5" style={{ color: 'var(--neon-pink)' }} />
                      <CardTitle className="text-lg">{draft.title}</CardTitle>
                    </div>
                    <CardDescription>
                      {draft.wordCount} words • {draft.platform}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant="outline"
                    className="neon-border flex items-center gap-1"
                    style={{ color: getStatusColor(draft.status) }}
                  >
                    <StatusIcon className="w-3 h-3" />
                    {draft.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="opacity-70">Last edited: {draft.lastEdited}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="opacity-70">AI Quality Score:</span>
                    <Badge 
                      className="neon-border"
                      style={{ 
                        color: draft.aiScore >= 90 ? 'var(--neon-green)' : 
                               draft.aiScore >= 85 ? 'var(--neon-cyan)' : 
                               'var(--neon-purple)' 
                      }}
                    >
                      {draft.aiScore}%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
