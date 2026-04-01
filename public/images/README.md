# 📸 Pasta de Imagens - Btech AI Landing Page

## Estrutura de Pastas

```
public/images/
├── hero/                 # Imagens para seção Hero
│   ├── avatar.png       # Avatar do assistente IA (substitui emoji 🤖)
│   └── background.png   # Background customizado
├── testimonials/        # Fotos dos clientes/depoimentos
│   ├── cliente1.png
│   ├── cliente2.png
│   └── cliente3.png
├── features/            # Ícones/imagens de features
│   ├── feature1.png
│   ├── feature2.png
│   └── etc...
└── sections/            # Outras imagens por seção
    └── ...
```

## 📋 Como Usar

### 1️⃣ **Adicionar imagens localmente**
- Salve suas imagens PNG/JPG nesta pasta
- Use nomes descritivos (ex: `secretaria-avatar.png`)

### 2️⃣ **Usar no código React**
```jsx
// No Hero.jsx
<img src="/images/hero/avatar.png" alt="Assistente IA" />

// No Testimonials.jsx
<img src="/images/testimonials/cliente1.png" alt="Dra. Marina" />
```

### 3️⃣ **Fazer o commit e push**
```bash
git add public/images/
git commit -m "Add custom images for landing page"
git push origin main
```

## 📦 Recomendações

- **Tamanho**: Comprima imagens antes de enviar (use TinyPNG.com)
- **Formato**: Use PNG com transparência ou JPG
- **Resolução**:
  - Hero avatar: 400x400px
  - Testimonials: 150x150px
  - Features icons: 200x200px

## 🚀 Próximos Passos

1. Crie suas imagens
2. Salve em `public/images/`
3. Avise quando acabar
4. Vou atualizar os componentes para usar suas imagens ✨

---

**Pasta criada em:** `C:\Users\bruno\Downloads\landing-page\public\images\`
