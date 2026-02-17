import { useQuery } from "@tanstack/react-query";

export interface Product {
  id: number;
  name: string;
  nome_modello?: string; // Compatibility
  slug: string;
  category: string;
  categoria?: string; // Compatibility
  brand: string | null;
  price: string;
  prezzo?: number; // Compatibility
  originalPrice: string | null;
  original_price?: string | null; // Compatibility
  shortDescription: string | null;
  descrizione_breve?: string | null; // Compatibility
  fullDescription: string | null;
  descriptionDettagliata: string | null;
  descrizione_dettagliata?: string | null; // Compatibility
  autonomy: number | null;
  motor: string | null;
  batteriaWh: number | null;
  batteria_wh?: number | null; // Compatibility
  maxSpeed: number | null;
  weight: string | null;
  warrantyYears: number | null;
  stockQuantity: number | null;
  mainImage: string;
  main_image?: string; // Compatibility
  galleryImages: string[] | null;
  gallery_images?: string[] | null; // Compatibility
  isBestseller: boolean | null;
  isFeatured: boolean | null;
  colorVariants: string[] | null;
  color_variants?: string[] | null; // Compatibility
  status: string | null;
  createdAt: string | null;
}

export function useProducts(filters?: { category?: string; featured?: boolean; bestseller?: boolean }) {
  return useQuery<Product[]>({
    queryKey: ["/api/products", filters],
  });
}

export function useProduct(idOrSlug: string | number) {
  return useQuery<Product | null>({
    queryKey: ["/api/products", idOrSlug],
    enabled: !!idOrSlug,
  });
}
