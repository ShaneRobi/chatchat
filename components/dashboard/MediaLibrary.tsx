'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image as ImageIcon, Video, FileText, Upload } from 'lucide-react';

export function MediaLibrary() {
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      title: 'Conference keynote photo',
      url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      tags: ['speaking', 'events'],
      uploadDate: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      title: 'Team collaboration',
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['team', 'culture'],
      uploadDate: '2024-01-14'
    },
    {
      id: 3,
      type: 'image',
      title: 'Product launch event',
      url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      tags: ['product', 'launch'],
      uploadDate: '2024-01-13'
    },
    {
      id: 4,
      type: 'image',
      title: 'Office workspace',
      url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tags: ['workspace', 'culture'],
      uploadDate: '2024-01-12'
    },
    {
      id: 5,
      type: 'image',
      title: 'Tech meetup',
      url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      tags: ['networking', 'events'],
      uploadDate: '2024-01-11'
    },
    {
      id: 6,
      type: 'image',
      title: 'Code review session',
      url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      tags: ['engineering', 'team'],
      uploadDate: '2024-01-10'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold neon-text" style={{ color: 'var(--neon-pink)' }}>
            Media Library
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--neon-cyan)' }}>
            Your visual content assets
          </p>
        </div>
        <button className="retro-button px-6 py-3 rounded-lg flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload Media
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mediaItems.map((item) => (
          <Card key={item.id} className="vaporwave-card overflow-hidden hover:shadow-[0_0_30px_rgba(5,255,161,0.4)] transition-all">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge 
                  className="neon-border"
                  style={{ backgroundColor: 'rgba(10, 10, 15, 0.8)', color: 'var(--neon-cyan)' }}
                >
                  <ImageIcon className="w-3 h-3 mr-1" />
                  Image
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
              <CardDescription className="text-xs">
                Uploaded {item.uploadDate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="neon-border text-xs"
                    style={{ color: 'var(--neon-purple)' }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
