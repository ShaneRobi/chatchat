'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  CheckCircle2, 
  Clock, 
  Send, 
  TrendingUp,
  Zap,
  Target,
  Calendar
} from 'lucide-react';

export function DashboardHome() {
  const stats = [
    { label: 'Drafts Pending', value: 12, icon: FileText, color: 'var(--neon-pink)' },
    { label: 'Approved', value: 8, icon: CheckCircle2, color: 'var(--neon-green)' },
    { label: 'Scheduled', value: 5, icon: Clock, color: 'var(--neon-cyan)' },
    { label: 'Published', value: 47, icon: Send, color: 'var(--neon-purple)' },
  ];

  const pipeline = [
    { stage: 'Thought Capture', count: 23, progress: 85 },
    { stage: 'Content Ideas', count: 15, progress: 65 },
    { stage: 'Draft Creation', count: 12, progress: 45 },
    { stage: 'Review', count: 8, progress: 30 },
    { stage: 'Ready to Publish', count: 5, progress: 20 },
  ];

  const recentActivity = [
    { action: 'Draft approved', content: 'Leadership lessons from Q4', time: '2 hours ago', status: 'success' },
    { action: 'Content generated', content: 'Product decision framework', time: '4 hours ago', status: 'info' },
    { action: 'Media uploaded', content: 'Conference photos (8 images)', time: '6 hours ago', status: 'info' },
    { action: 'Published to LinkedIn', content: 'Startup journey insights', time: '1 day ago', status: 'success' },
    { action: 'Review requested', content: 'Technical learning post', time: '1 day ago', status: 'warning' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Command Center
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Your content creation mission control
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" style={{ color: 'var(--neon-purple)' }} />
          <span className="text-sm" style={{ color: 'var(--neon-purple)' }}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="vaporwave-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-70">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2 neon-text" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                </div>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center neon-border"
                  style={{ color: stat.color }}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="vaporwave-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-pink)' }}>
              <Target className="w-5 h-5" />
              Content Pipeline
            </CardTitle>
            <CardDescription>Track your content through each stage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipeline.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{item.stage}</span>
                  <Badge 
                    variant="outline" 
                    className="neon-border"
                    style={{ color: 'var(--neon-cyan)' }}
                  >
                    {item.count}
                  </Badge>
                </div>
                <Progress 
                  value={item.progress} 
                  className="h-2"
                  style={{
                    background: 'rgba(185, 103, 255, 0.2)',
                  }}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="vaporwave-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-pink)' }}>
              <Zap className="w-5 h-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Latest updates from your agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b border-[var(--neon-purple)]/20 last:border-0">
                  <div 
                    className={`w-2 h-2 rounded-full mt-2 status-indicator`}
                    style={{ 
                      backgroundColor: activity.status === 'success' ? 'var(--neon-green)' : 
                                     activity.status === 'warning' ? 'var(--neon-pink)' : 
                                     'var(--neon-cyan)' 
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm opacity-70 truncate">{activity.content}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--neon-purple)' }}>
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="vaporwave-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-pink)' }}>
            <TrendingUp className="w-5 h-5" />
            Weekly Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255, 113, 206, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>34</p>
              <p className="text-sm mt-1">Thoughts Captured</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(1, 205, 254, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-cyan)' }}>18</p>
              <p className="text-sm mt-1">Ideas Generated</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(5, 255, 161, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-green)' }}>12</p>
              <p className="text-sm mt-1">Drafts Created</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(185, 103, 255, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-purple)' }}>7</p>
              <p className="text-sm mt-1">Posts Published</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
