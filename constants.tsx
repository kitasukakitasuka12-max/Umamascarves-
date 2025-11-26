import React from 'react';
import { ProductVariant } from './types';

// Using reliable Unsplash images that match the color themes
export const VARIANTS: ProductVariant[] = [
  {
    id: 'blue',
    name: 'Royal Blue',
    colorCode: '#9AB8C6',
    imageDescription: 'Elegant blue hijab with floral motif',
    imageUrl: 'https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'pink',
    name: 'Soft Pink',
    colorCode: '#afbab9',
    imageDescription: 'Soft pink hijab with delicate patterns',
    imageUrl: 'https://images.unsplash.com/photo-1616801831519-966966601836?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gold',
    name: 'Luxury Gold',
    colorCode: '#D4C385',
    imageDescription: 'Golden shimmer hijab for special occasions',
    imageUrl: 'https://images.unsplash.com/photo-1599692984589-9b48b1115599?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maroon',
    name: 'Deep Maroon',
    colorCode: '#7D4E57',
    imageDescription: 'Deep maroon hijab with bold accents',
    imageUrl: 'https://images.unsplash.com/photo-1611565538618-62a26514787a?auto=format&fit=crop&w=800&q=80'
  }
];

export const WHATSAPP_LINK = "https://chat.whatsapp.com/invite/placeholder-group-link";
