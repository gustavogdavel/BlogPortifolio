# Blog/Portfólio Pessoal

Blog pessoal e portfólio criado com Jekyll e hospedado no GitHub Pages.

## Sobre

Este é um site estático criado com Jekyll, um gerador de sites estáticos escrito em Ruby. O site é hospedado gratuitamente usando o GitHub Pages.

## Estrutura do Projeto

```
BlogPortifolio/
├── _config.yml          # Configurações do site
├── _posts/              # Posts do blog (formato: YYYY-MM-DD-titulo.md)
├── _layouts/            # Templates HTML (default, post, page)
├── _includes/           # Componentes reutilizáveis (header, footer)
├── assets/              # Recursos estáticos
│   ├── css/            # Estilos CSS
│   ├── js/             # Scripts JavaScript
│   └── images/         # Imagens
├── index.html           # Página inicial
├── about.md            # Página Sobre
├── archive.html        # Página de arquivo de posts
├── Gemfile             # Dependências Ruby
└── README.md           # Este arquivo
```

## Pré-requisitos

- Ruby 2.7 ou superior
- RubyGems
- GCC e Make

### Instalação do Ruby (Windows)

1. Baixe e instale o [Ruby+Devkit](https://rubyinstaller.org/downloads/)
2. Durante a instalação, marque a opção para adicionar Ruby ao PATH
3. Execute `ridk install` no final da instalação

### Instalação do Ruby (Linux/macOS)

```bash
# Ubuntu/Debian
sudo apt-get install ruby-full build-essential zlib1g-dev

# macOS (usando Homebrew)
brew install ruby
```

## Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/gustavogdavel/BlogPortifolio.git
cd BlogPortifolio
```

2. Instale as dependências:
```bash
bundle install
```

3. Execute o servidor local:
```bash
bundle exec jekyll serve
```

4. Abra seu navegador em: `http://localhost:4000/BlogPortifolio`

## Personalização

### Configurações Básicas

Edite o arquivo [_config.yml](_config.yml) para personalizar:

- `title`: Título do seu site
- `tagline`: Subtítulo/slogan
- `description`: Descrição do site
- `author`: Suas informações (nome, email, redes sociais)

### Criar Novo Post

1. Crie um arquivo na pasta `_posts/` seguindo o formato:
   ```
   YYYY-MM-DD-titulo-do-post.md
   ```

2. Adicione o Front Matter no início do arquivo:
   ```yaml
   ---
   layout: post
   title: "Título do Post"
   date: 2024-01-20 10:00:00 -0300
   categories: [Categoria1, Categoria2]
   tags: [tag1, tag2, tag3]
   author: Seu Nome
   ---
   ```

3. Escreva o conteúdo em Markdown após o Front Matter

### Adicionar Imagens

1. Coloque as imagens na pasta `assets/images/`
2. Referencie no post usando:
   ```markdown
   ![Descrição da imagem]({{ '/assets/images/minha-imagem.jpg' | relative_url }})
   ```

### Personalizar Estilos

Edite o arquivo [assets/css/main.css](assets/css/main.css) para modificar:
- Cores (variáveis CSS no início do arquivo)
- Fontes
- Layout e espaçamento

## Deploy no GitHub Pages

### Método 1: GitHub Pages Automático

1. Faça commit e push do projeto:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. No GitHub, vá em Settings > Pages
3. Em "Source", selecione "Deploy from a branch"
4. Escolha a branch `main` e pasta `/ (root)`
5. Clique em Save

Seu site estará disponível em: `https://gustavogdavel.github.io/BlogPortifolio`

### Método 2: GitHub Actions (Recomendado)

1. Crie o arquivo `.github/workflows/jekyll.yml`:
```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. No GitHub, vá em Settings > Pages > Source
3. Selecione "GitHub Actions"
4. Faça push e o deploy será automático

## Comandos Úteis

```bash
# Servir o site localmente
bundle exec jekyll serve

# Servir com recarregamento automático
bundle exec jekyll serve --livereload

# Servir em modo rascunho (inclui posts com data futura)
bundle exec jekyll serve --drafts

# Build do site (gera pasta _site/)
bundle exec jekyll build

# Limpar arquivos gerados
bundle exec jekyll clean
```

## Recursos

- [Documentação Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## Contato

- GitHub: [@gustavogdavel](https://github.com/gustavogdavel)
- Email: [Seu email]

---

Desenvolvido com Jekyll & GitHub Pages
