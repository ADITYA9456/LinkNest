// PWA Icon Generation Utility
// This creates placeholder icons if you don't have proper icons yet

export function generatePlaceholderIcon(size, text = 'LN') {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  // Purple gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#8b5cf6');
  gradient.addColorStop(1, '#ec4899');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // White text
  ctx.fillStyle = 'white';
  ctx.font = `bold ${size * 0.4}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, size / 2, size / 2);
  
  return canvas.toDataURL('image/png');
}

// Create and download all PWA icons
export function downloadPWAIcons() {
  const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];
  
  sizes.forEach(size => {
    const dataUrl = generatePlaceholderIcon(size);
    const link = document.createElement('a');
    link.download = `icon-${size}x${size}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
