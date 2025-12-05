---
layout: post
title: "Introdução ao Jekyll: Criando Sites Estáticos"
date: 2024-01-20 14:30:00 -0300
categories: [Desenvolvimento Web, Tutoriais]
tags: [jekyll, github-pages, static-site]
author: Seu Nome
---

# Introdução ao Jekyll

Jekyll é um gerador de sites estáticos escrito em Ruby. Ele é especialmente popular para criar blogs e sites pessoais, e funciona perfeitamente com o GitHub Pages.

## Por que usar Jekyll?

### Vantagens

- **Simples e rápido**: Sites estáticos são mais rápidos que sites dinâmicos
- **Sem banco de dados**: Não precisa configurar MySQL, PostgreSQL, etc.
- **Markdown**: Escreva seus posts em Markdown, uma linguagem de marcação simples
- **GitHub Pages**: Hospedagem gratuita e integrada
- **Seguro**: Sem backend significa menos vulnerabilidades

## Estrutura Básica

Um projeto Jekyll típico tem a seguinte estrutura:

```
meu-site/
├── _config.yml      # Configurações do site
├── _posts/          # Seus posts do blog
├── _layouts/        # Templates HTML
├── _includes/       # Componentes reutilizáveis
├── assets/          # CSS, JS, imagens
└── index.html       # Página inicial
```

## Instalação

Para instalar o Jekyll, você precisa ter Ruby instalado. Então execute:

```bash
gem install jekyll bundler
jekyll new meu-site
cd meu-site
bundle exec jekyll serve
```

Acesse `http://localhost:4000` para ver seu site!

## Front Matter

Todo post ou página Jekyll começa com um bloco YAML chamado Front Matter:

```yaml
---
layout: post
title: "Meu Post"
date: 2024-01-20
categories: tutorial
---
```

## Liquid Templates

Jekyll usa a linguagem de template Liquid para criar conteúdo dinâmico:

```liquid
{% raw %}
{% for post in site.posts %}
  <h2>{{ post.title }}</h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}
{% endraw %}
```

## Conclusão

Jekyll é uma ferramenta poderosa para criar sites estáticos de forma rápida e eficiente. É perfeito para blogs, portfólios e documentação.

Nos próximos posts, vou explorar recursos mais avançados do Jekyll, incluindo temas personalizados e plugins.

## Recursos Úteis

- [Documentação oficial do Jekyll](https://jekyllrb.com/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [GitHub Pages](https://pages.github.com/)
