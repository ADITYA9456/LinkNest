# Create PWA Icons Script
# Run this to create all required PWA icons from your logo

# You can use ImageMagick or online tools to convert your logo.png to different sizes

# Required sizes:
convert logo.png -resize 16x16 public/icons/icon-16x16.png
convert logo.png -resize 32x32 public/icons/icon-32x32.png
convert logo.png -resize 72x72 public/icons/icon-72x72.png
convert logo.png -resize 96x96 public/icons/icon-96x96.png
convert logo.png -resize 128x128 public/icons/icon-128x128.png
convert logo.png -resize 144x144 public/icons/icon-144x144.png
convert logo.png -resize 152x152 public/icons/icon-152x152.png
convert logo.png -resize 192x192 public/icons/icon-192x192.png
convert logo.png -resize 384x384 public/icons/icon-384x384.png
convert logo.png -resize 512x512 public/icons/icon-512x512.png

# Or use online tools like:
# https://realfavicongenerator.net/
# https://www.favicon-generator.org/
