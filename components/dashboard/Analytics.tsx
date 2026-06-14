'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, TrendingUp, Users, Eye, Heart, MessageCircle } from 'lucide-react';

export function Analytics() {
  const metrics = [
    { label: 'Total Reach', value: '47.2K', change: '+23%', icon: Eye, color: 'var(--neon-cyan)' },
    { label: 'Engagement Rate', value: '8.4%', change: '+12%', icon: Heart, color: 'var(--neon-pink)' },
    { label: 'New Followers', value: '1,234', change: '+18%', icon: Users, color: 'var(--neon-green)' },
    { label: 'Comments', value: '342', change: '+31%', icon: MessageCircle, color: 'var(--neon-purple)' },
  ];

  const platformStats = [
    { platform: 'LinkedIn', posts: 12, reach: '28.5K', engagement: '9.2%', color: 'var(--neon-cyan)' },
    { platform: 'Twitter', posts: 18, reach: '15.3K', engagement: '7.8%', color: 'var(--neon-pink)' },
    { platform: 'Medium', posts: 5, reach: '3.4K', engagement: '12.1%', color: 'var(--neon-green)' },
  ];

  const topContent = [
    {
      title: "Building in public: What I learned from 6 months",
      platform: "LinkedIn",
      views: 12453,
      engagement: 9.2,
      date: "2024-01-15"
    },
    {
      title: "The best product decisions come from user pain points",
      platform: "Twitter",
      views: 15678,
      engagement: 8.7,
      date: "2024-01-13"
    },
    {
      title: "Career growth: IC vs. Management decision framework",
      platform: "LinkedIn",
      views: 8921,
      engagement: 7.4,
      date: "2024-01-14"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Analytics Dashboard
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Track your content performance
          </p>
        </div>
        <Badge className="neon-border" style={{ color: 'var(--neon-green)' }}>
          <TrendingUp className="w-3 h-3 mr-1" />
          All metrics up this week
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="vaporwave-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-8 h-8" style={{ color: metric.color }} />
                <Badge 
                  className="neon-border"
                  style={{ color: 'var(--neon-green)' }}
                >
                  {metric.change}
                </Badge>
              </div>
              <p className="text-sm opacity-70 mb-1">{metric.label}</p>
              <p className="text-3xl font-bold neon-text" style={{ color: metric.color }}>
                {metric.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="vaporwave-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-pink)' }}>
              <BarChart3 className="w-5 h-5" />
              Platform Performance
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {platformStats.map((stat, index) => (
              <div key={index} className="p-4 rounded-lg border border-[var(--neon-purple)]/30">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{stat.platform}</h4>
                  <Badge 
                    variant="outline"
                    className="neon-border"
                    style={{ color: stat.color }}
                  >
                    {stat.posts} posts
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="opacity-70 mb-1">Reach</p>
                    <p className="font-bold neon-text" style={{ color: 'var(--neon-cyan)' }}>
                      {stat.reach}
                    </p>
                  </div>
                  <div>
                    <p className="opacity-70 mb-1">Engagement</p>
                    <p className="font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
                      {stat.engagement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="vaporwave-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-pink)' }}>
              <TrendingUp className="w-5 h-5" />
              Top Performing Content
            </CardTitle>
            <CardDescription>Your best posts this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topContent.map((content, index) => (
              <div key={index} className="p-4 rounded-lg border border-[var(--neon-purple)]/30">
                <h4 className="font-medium mb-2">{content.title}</h4>
                <div className="flex items-center gap-4 text-sm mb-2">
                  <Badge 
                    variant="outline"
                    className="neon-border"
                    style={{ color: 'var(--neon-purple)' }}
                  >
                    {content.platform}
                  </Badge>
                  <span className="opacity-70">{content.date}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center p-2 rounded" style={{ background: 'rgba(1, 205, 254, 0.1)' }}>
                    <div className="font-bold" style={{ color: 'var(--neon-cyan)' }}>
                      {content.views.toLocaleString()}
                    </div>
                    <div className="opacity-70">Views</div>
                  </div>
                  <div className="text-center p-2 rounded" style={{ background: 'rgba(255, 113, 206, 0.1)' }}>
                    <div className="font-bold" style={{ color: 'var(--neon-pink)' }}>
                      {content.engagement}%
                    </div>
                    <div className="opacity-70">Engagement</div>
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
