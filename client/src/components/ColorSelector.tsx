import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  'blu': '#0000FF',
  'rosso': '#FF0000',
  'nero': '#000000',
  'grigio': '#808080',
  'verde': '#008000',
  'bianco': '#FFFFFF',
  'arancione': '#FFA500',
};

interface ColorSelectorProps {
  productId: number;
  variants: string[];
  selectedColor: string | null;
  onColorSelect: (color: string | null) => void;
  size?: 'sm' | 'md';
}

export function ColorSelector({ 
  productId, 
  variants, 
  selectedColor, 
  onColorSelect,
  size = 'sm'
}: ColorSelectorProps) {
  if (!variants || variants.length === 0) return null;

  const allVariants = ['base', ...variants];
  const dotSize = size === 'sm' ? 'w-4 h-4' : 'w-8 h-8';

  return (
    <div className={cn("flex flex-wrap gap-2 mt-2", size === 'md' && "mb-4")}>
      {allVariants.map((color) => {
        const isBase = color === 'base';
        const colorValue = isBase ? '#E5E7EB' : COLOR_MAP[color.toLowerCase()];
        
        return (
          <button
            key={color}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onColorSelect(isBase ? null : color);
            }}
            className={cn(
              "rounded-full border-2 transition-all hover:scale-110",
              dotSize,
              (selectedColor === color || (isBase && !selectedColor)) 
                ? "border-primary ring-2 ring-primary/20" 
                : "border-transparent"
            )}
            style={{ backgroundColor: colorValue }}
            title={isBase ? "Originale" : color}
            data-testid={`button-color-${color}-${productId}`}
          />
        );
      })}
    </div>
  );
}
