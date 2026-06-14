'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Activity, Settings, Zap } from 'lucide-react';

export function AgentControl() {
  const agents = [
    {
      id: 1,
      name: "Thought Capturer",
      status: "Active",
      description: "Captures and organizes your thoughts from Telegram",
      tasksCompleted: 234,
      lastActive: "2 minutes ago",
      color: 'var(--neon-cyan)'
    },
    {
      id: 2,
      name: "Content Strategist",
      status: "Active",
      description: "Analyzes thoughts and generates content opportunities",
      tasksCompleted: 156,
      lastActive: "5 minutes ago",
      color: 'var(--neon-pink)'
    },
    {
      id: 3,
      name: "Draft Writer",
      status: "Active",
      description: "Creates initial drafts from approved ideas",
      tasksCompleted: 89,
      lastActive: "12 minutes ago",
      color: 'var(--neon-green)'
    },
    {
      id: 4,
      name: "Content Reviewer",
      status: "Active",
      description: "Reviews drafts for quality and brand alignment",
      tasksCompleted: 67,
      lastActive: "8 minutes ago",
      color: 'var(--neon-purple)'
    },
    {
      id: 5,
      name: "Media Curator",
      status: "Active",
      description: "Suggests and optimizes visual content",
      tasksCompleted: 123,
      lastActive: "15 minutes ago",
      color: 'var(--neon-cyan)'
    },
    {
      id: 6,
      name: "Publishing Coordinator",
      status: "Active",
      description: "Schedules and publishes approved content",
      tasksCompleted: 45,
      lastActive: "3 minutes ago",
      color: 'var(--neon-pink)'
    },
    {
      id: 7,
      name: "Analytics Tracker",
      status: "Active",
      description: "Monitors performance and provides insights",
      tasksCompleted: 178,
      lastActive: "1 minute ago",
      color: 'var(--neon-green)'
    },
    {
      id: 8,
      name: "Engagement Manager",
      status: "Active",
      description: "Manages responses and community interactions",
      tasksCompleted: 312,
      lastActive: "4 minutes ago",
      color: 'var(--neon-purple)'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Agent Control Center
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Monitor and manage your AI workforce
          </p>
        </div>
        <Badge className="neon-border" style={{ color: 'var(--neon-green)' }}>
          <Activity className="w-3 h-3 mr-1" />
          All Agents Online
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agents.map((agent) => (
          <Card key={agent.id} className="vaporwave-card hover:shadow-[0_0_30px_rgba(185,103,255,0.4)] transition-all">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center neon-border"
                    style={{ color: agent.color }}
                  >
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <CardDescription className="text-xs mt-1">
                      {agent.description}
                    </CardDescription>
                  </div>
                </div>
                <Badge 
                  className="neon-border flex-shrink-0"
                  style={{ color: 'var(--neon-green)' }}
                >
                  <div className="w-2 h-2 rounded-full status-indicator mr-2" style={{ backgroundColor: 'var(--neon-green)' }} />
                  {agent.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" style={{ color: agent.color }} />
                  <span className="opacity-70">Tasks completed:</span>
                  <span className="font-bold neon-text" style={{ color: agent.color }}>
                    {agent.tasksCompleted}
                  </span>
                </div>
                <div className="flex items-center gap-2 opacity-70">
                  <Activity className="w-4 h-4" />
                  <span>{agent.lastActive}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="vaporwave-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2" style={{ color: 'var(--neon-pink)' }}>
            <Settings className="w-5 h-5" />
            System Performance
          </CardTitle>
          <CardDescription>Overall agent efficiency metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(1, 205, 254, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-cyan)' }}>98.7%</p>
              <p className="text-sm mt-1 opacity-70">Uptime</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(255, 113, 206, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>1,204</p>
              <p className="text-sm mt-1 opacity-70">Tasks Today</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(5, 255, 161, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-green)' }}>94.2%</p>
              <p className="text-sm mt-1 opacity-70">Success Rate</p>
            </div>
            <div className="text-center p-4 rounded-lg" style={{ background: 'rgba(185, 103, 255, 0.1)' }}>
              <p className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-purple)' }}>2.3s</p>
              <p className="text-sm mt-1 opacity-70">Avg Response</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
