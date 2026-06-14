'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, Calendar, CheckCircle2, Clock } from 'lucide-react';

export function PublishingCenter() {
  const scheduledPosts = [
    {
      id: 1,
      title: "Leadership lessons from scaling 0→100 engineers",
      platforms: ["LinkedIn", "Medium"],
      scheduledDate: "2024-01-16 09:00",
      status: "Scheduled"
    },
    {
      id: 2,
      title: "Product decision framework for early-stage startups",
      platforms: ["LinkedIn", "Twitter"],
      scheduledDate: "2024-01-17 14:00",
      status: "Scheduled"
    },
    {
      id: 3,
      title: "Technical debt: When to pay it down vs. ship faster",
      platforms: ["Dev.to", "LinkedIn"],
      scheduledDate: "2024-01-18 10:00",
      status: "Scheduled"
    }
  ];

  const publishedPosts = [
    {
      id: 1,
      title: "Building in public: What I learned from 6 months",
      platforms: ["LinkedIn", "Twitter"],
      publishedDate: "2024-01-15 09:00",
      engagement: { views: 12453, likes: 342, comments: 67 }
    },
    {
      id: 2,
      title: "Career growth: IC vs. Management decision framework",
      platforms: ["LinkedIn"],
      publishedDate: "2024-01-14 14:00",
      engagement: { views: 8921, likes: 234, comments: 45 }
    },
    {
      id: 3,
      title: "The best product decisions come from user pain points",
      platforms: ["Twitter", "LinkedIn"],
      publishedDate: "2024-01-13 11:00",
      engagement: { views: 15678, likes: 456, comments: 89 }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Publishing Center
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Schedule and track your content
          </p>
        </div>
        <Badge className="neon-border" style={{ color: 'var(--neon-green)' }}>
          <Clock className="w-3 h-3 mr-1" />
          3 Scheduled
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="vaporwave-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-cyan)' }}>
              <Calendar className="w-5 h-5" />
              Scheduled Posts
            </CardTitle>
            <CardDescription>Content ready to publish</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="p-4 rounded-lg border border-[var(--neon-purple)]/30 hover:border-[var(--neon-cyan)]/50 transition-all">
                <h4 className="font-medium mb-2">{post.title}</h4>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.platforms.map((platform, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="neon-border text-xs"
                      style={{ color: 'var(--neon-purple)' }}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm opacity-70">
                  <Clock className="w-4 h-4" />
                  <span>{post.scheduledDate}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="vaporwave-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-green)' }}>
              <CheckCircle2 className="w-5 h-5" />
              Recently Published
            </CardTitle>
            <CardDescription>Your latest content performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {publishedPosts.map((post) => (
              <div key={post.id} className="p-4 rounded-lg border border-[var(--neon-purple)]/30 hover:border-[var(--neon-green)]/50 transition-all">
                <h4 className="font-medium mb-2">{post.title}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.platforms.map((platform, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="neon-border text-xs"
                      style={{ color: 'var(--neon-purple)' }}
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 rounded" style={{ background: 'rgba(1, 205, 254, 0.1)' }}>
                    <div className="font-bold" style={{ color: 'var(--neon-cyan)' }}>
                      {post.engagement.views.toLocaleString()}
                    </div>
                    <div className="opacity-70">Views</div>
                  </div>
                  <div className="text-center p-2 rounded" style={{ background: 'rgba(255, 113, 206, 0.1)' }}>
                    <div className="font-bold" style={{ color: 'var(--neon-pink)' }}>
                      {post.engagement.likes}
                    </div>
                    <div className="opacity-70">Likes</div>
                  </div>
                  <div className="text-center p-2 rounded" style={{ background: 'rgba(5, 255, 161, 0.1)' }}>
                    <div className="font-bold" style={{ color: 'var(--neon-green)' }}>
                      {post.engagement.comments}
                    </div>
                    <div className="opacity-70">Comments</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
