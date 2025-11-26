export interface ProductVariant {
  id: string;
  name: string;
  colorCode: string; // Hex code for the color selector
  imageDescription: string;
  imageUrl: string;
}

export interface FeatureProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}