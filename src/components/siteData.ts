import { Code2, Cpu, Database, Network, type LucideIcon } from 'lucide-react';

export type Member = {
  name: string;
  role: string;
  initials: string;
  theme: 'blue' | 'orange' | 'navy' | 'light' | 'pale';
};

export const members: Member[] = [
  { name: 'Bruno De Lucca', role: 'Computer Vision Eng.', initials: 'BD', theme: 'blue' },
  { name: 'Cristhian', role: 'Backend Developer', initials: 'CR', theme: 'orange' },
  { name: 'Joao Paulo', role: 'IoT Specialist', initials: 'JP', theme: 'navy' },
  { name: 'Marcelo', role: 'Hardware Engineer', initials: 'MA', theme: 'light' },
  { name: 'Paulo Seiji', role: 'Data Scientist', initials: 'PS', theme: 'pale' },
];

export type Technology = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export const technologies: Technology[] = [
  { icon: Code2, name: 'React & Next.js', description: 'Interfaces modernas e SSR' },
  { icon: Network, name: 'Tailwind CSS', description: 'Estilização ágil e responsiva' },
  { icon: Cpu, name: 'Edge Computing', description: 'Processamento local de baixa latência' },
  { icon: Database, name: 'Visão Computacional', description: 'YOLO e OpenCV em Python' },
];

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
