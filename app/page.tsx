'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardHome } from '@/components/dashboard/DashboardHome';
import { ThoughtVault } from '@/components/dashboard/ThoughtVault';
import { ContentOpportunities } from '@/components/dashboard/ContentOpportunities';
import { DraftStudio } from '@/components/dashboard/DraftStudio';
import { MediaLibrary } from '@/components/dashboard/MediaLibrary';
import { PublishingCenter } from '@/components/dashboard/PublishingCenter';
import { Analytics } from '@/components/dashboard/Analytics';
import { AgentControl } from '@/components/dashboard/AgentControl';
import { 
  LayoutDashboard, 
  BookOpen, 
  Lightbulb, 
  FileEdit, 
  Image, 
  Send, 
  BarChart3, 
  Bot 
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen relative z-10">
      <header className="border-b-2 border-[var(--neon-purple)]/50 bg-[#0a0a0f]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--neon-pink)] to-[var(--neon-purple)] flex items-center justify-center shadow-[0_0_20px_rgba(255,113,206,0.5)]">
                <Bot className="w-6 h-6 text-[#0a0a0f]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
                  BRAND OS
                </h1>
                <p className="text-xs" style={{ color: 'var(--neon-cyan)' }}>
                  Personal Brand Operating System
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="status-indicator w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--neon-green)' }} />
              <span className="text-sm" style={{ color: 'var(--neon-green)' }}>All Systems Online</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 gap-2 bg-transparent h-auto p-0">
            <TabsTrigger 
              value="home" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </TabsTrigger>
            <TabsTrigger 
              value="vault" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-xs">Vault</span>
            </TabsTrigger>
            <TabsTrigger 
              value="opportunities" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <Lightbulb className="w-5 h-5" />
              <span className="text-xs">Ideas</span>
            </TabsTrigger>
            <TabsTrigger 
              value="drafts" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <FileEdit className="w-5 h-5" />
              <span className="text-xs">Drafts</span>
            </TabsTrigger>
            <TabsTrigger 
              value="media" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <Image className="w-5 h-5" />
              <span className="text-xs">Media</span>
            </TabsTrigger>
            <TabsTrigger 
              value="publishing" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <Send className="w-5 h-5" />
              <span className="text-xs">Publish</span>
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs">Analytics</span>
            </TabsTrigger>
            <TabsTrigger 
              value="agents" 
              className="vaporwave-card data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--neon-pink)] data-[state=active]:to-[var(--neon-purple)] data-[state=active]:text-[#0a0a0f] flex flex-col gap-2 py-3"
            >
              <Bot className="w-5 h-5" />
              <span className="text-xs">Agents</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6">
            <DashboardHome />
          </TabsContent>

          <TabsContent value="vault" className="space-y-6">
            <ThoughtVault />
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <ContentOpportunities />
          </TabsContent>

          <TabsContent value="drafts" className="space-y-6">
            <DraftStudio />
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <MediaLibrary />
          </TabsContent>

          <TabsContent value="publishing" className="space-y-6">
            <PublishingCenter />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Analytics />
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            <AgentControl />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
