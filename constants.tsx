import React from 'react';
import { ProductVariant } from './types';

// Using Unsplash images that closely resemble the colors provided in the prompt (Blue, Pink, Gold, Purple)
export const VARIANTS: ProductVariant[] = [
  {
    id: 'blue',
    name: 'Royal Blue',
    colorCode: '#9AB8C6',
    imageDescription: 'Elegant blue hijab with floral motif',
    imageUrl: 'https://down-id.img.susercontent.com/file/id-11134207-8224r-mg1puwkhi972ed.webp'
  },
  {
    id: 'pink',
    name: 'blue-gray',
    colorCode: '#afbab9',
    imageDescription: 'Soft pink hijab with delicate patterns',
    imageUrl: 'https://down-id.img.susercontent.com/file/id-11134207-8224v-mg1puwkhmgwe0c.webp'
  },
  {
    id: 'gold',
    name: 'Luxury Gold',
    colorCode: '#D4C385',
    imageDescription: 'Golden shimmer hijab for special occasions',
    imageUrl: 'https://down-id.img.susercontent.com/file/id-11134207-8224v-mg1puwkhmgwe0c.webp'
  },
  {
    id: 'purple',
    name: 'Deep Maroon',
    colorCode: '#7D4E57',
    imageDescription: 'Deep maroon hijab with bold accents',
    imageUrl: 'https://down-id.img.susercontent.com/file/id-11134207-8224p-mg1puwkhfg2613.webp'
  }
];

export const WHATSAPP_LINK = "https://chat.whatsapp.com/invite/placeholder-group-link";
