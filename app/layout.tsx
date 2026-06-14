import './globals.css';
import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Brand OS - Personal Brand Operating System',
  description: 'Multi-agent content creation orchestration platform',
  keywords: 'no-code, app builder, conversation-driven development, content creation, AI agents, personal branding',
  openGraph: {
    title: 'Brand OS - Built with ChatAndBuild',
    description: 'Multi-agent content creation orchestration platform',
    images: ['https://cdn.chatandbuild.com/images/preview.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand OS - Built with ChatAndBuild',
    description: 'Multi-agent content creation orchestration platform',
    images: ['https://cdn.chatandbuild.com/images/preview.webp'],
    site: '@chatandbuild',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
