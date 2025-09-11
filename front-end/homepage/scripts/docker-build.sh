#!/bin/bash

# Script de build otimizado para Docker com CSS crítico inline

echo "🚀 Iniciando build otimizado para Docker..."

# Extrair CSS crítico
echo "📝 Extraindo CSS crítico..."
npm run extract-critical-css

# Verificar se o CSS crítico foi gerado
if [ ! -f "styles/critical-inline.js" ]; then
    echo "❌ Erro: CSS crítico não foi gerado"
    exit 1
fi

echo "✅ CSS crítico extraído com sucesso"

# Build da aplicação
echo "🔨 Fazendo build da aplicação..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d ".next" ]; then
    echo "❌ Erro: Build falhou"
    exit 1
fi

echo "✅ Build concluído com sucesso"

# Build da imagem Docker
echo "🐳 Construindo imagem Docker..."
docker build -f Dockerfile.optimized -t wi3li-site:optimized .

if [ $? -eq 0 ]; then
    echo "🎉 Imagem Docker construída com sucesso!"
    echo "📊 Tamanho da imagem:"
    docker images wi3li-site:optimized --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
else
    echo "❌ Erro ao construir imagem Docker"
    exit 1
fi
