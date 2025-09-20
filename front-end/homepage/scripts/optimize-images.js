const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  
  try {
    // Converter profile.jpg para WebP
    const profilePath = path.join(publicDir, 'image/profile.jpg');
    const profileWebPPath = path.join(publicDir, 'image/profile.webp');
    
    if (fs.existsSync(profilePath)) {
      await sharp(profilePath)
        .resize(512, 512, { 
          fit: 'cover',
          position: 'center'
        })
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(profileWebPPath);
      
      console.log('✅ profile.jpg convertido para WebP');
    }

    // Otimizar outras imagens se necessário
    const imagesToOptimize = [
      { input: 'help-desk-support-system.png', output: 'help-desk-support-system.webp' },
      { input: 'nuuvik.webp', output: 'nuuvik-optimized.webp' },
      { input: 'fotografia-reggae.webp', output: 'fotografia-reggae-optimized.webp' }
    ];

    for (const image of imagesToOptimize) {
      const inputPath = path.join(publicDir, image.input);
      const outputPath = path.join(publicDir, image.output);
      
      if (fs.existsSync(inputPath)) {
        await sharp(inputPath)
          .webp({ 
            quality: 80,
            effort: 6
          })
          .toFile(outputPath);
        
        console.log(`✅ ${image.input} otimizado`);
      }
    }

    console.log('🎉 Todas as imagens foram otimizadas!');
  } catch (error) {
    console.error('❌ Erro ao otimizar imagens:', error);
  }
}

optimizeImages();


