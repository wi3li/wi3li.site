const fs = require('fs')
const path = require('path')

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comentários
    .replace(/\s+/g, ' ') // Remove espaços extras
    .replace(/;\s*}/g, '}') // Remove ponto e vírgula antes de }
    .replace(/{\s*/g, '{') // Remove espaços após {
    .replace(/;\s*/g, ';') // Remove espaços após ;
    .replace(/,\s*/g, ',') // Remove espaços após vírgulas
    .trim()
}

function extractCriticalCSS() {
  try {
    const criticalCSSPath = path.join(__dirname, '../styles/critical.css')
    const outputPath = path.join(__dirname, '../styles/critical.min.css')
    
    if (fs.existsSync(criticalCSSPath)) {
      const css = fs.readFileSync(criticalCSSPath, 'utf8')
      const minifiedCSS = minifyCSS(css)
      
      fs.writeFileSync(outputPath, minifiedCSS)
      console.log('✅ CSS crítico extraído e minificado')
      
      // Criar versão inline para uso no layout
      const inlineCSS = minifiedCSS.replace(/\n/g, ' ').replace(/\s+/g, ' ')
      const jsPath = path.join(__dirname, '../styles/critical-inline.js')
      fs.writeFileSync(jsPath, `export const criticalCSS = \`${inlineCSS}\`;`)
      
      console.log('✅ CSS crítico inline criado')
    } else {
      console.log('❌ Arquivo critical.css não encontrado')
    }
  } catch (error) {
    console.error('❌ Erro ao extrair CSS crítico:', error)
  }
}

extractCriticalCSS()
