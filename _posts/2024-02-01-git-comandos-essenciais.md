---
layout: post
title: "Git: Comandos Essenciais para Desenvolvedores"
date: 2024-02-01 09:00:00 -0300
categories: [Desenvolvimento, Ferramentas]
tags: [git, versionamento, tutorial]
author: Seu Nome
---

# Git: Comandos Essenciais

O Git é uma ferramenta fundamental para qualquer desenvolvedor. Neste post, vou compartilhar os comandos Git mais úteis que uso diariamente.

## Configuração Inicial

Antes de começar, configure seu Git:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

## Comandos Básicos

### Inicializar um Repositório

```bash
# Criar um novo repositório
git init

# Clonar um repositório existente
git clone https://github.com/usuario/repositorio.git
```

### Trabalhar com Mudanças

```bash
# Ver status das mudanças
git status

# Adicionar arquivos ao staging
git add arquivo.txt
git add .  # Adiciona todos os arquivos

# Fazer commit
git commit -m "Mensagem do commit"

# Ver histórico de commits
git log
git log --oneline  # Versão simplificada
```

## Trabalhando com Branches

```bash
# Criar uma nova branch
git branch feature-nova

# Mudar para outra branch
git checkout feature-nova

# Criar e mudar para nova branch (atalho)
git checkout -b feature-nova

# Listar branches
git branch

# Deletar uma branch
git branch -d feature-antiga
```

## Sincronizando com Remoto

```bash
# Adicionar repositório remoto
git remote add origin https://github.com/usuario/repo.git

# Ver repositórios remotos
git remote -v

# Enviar mudanças
git push origin main

# Baixar mudanças
git pull origin main

# Buscar mudanças sem fazer merge
git fetch origin
```

## Comandos Avançados

### Desfazer Mudanças

```bash
# Desfazer mudanças não commitadas
git checkout -- arquivo.txt

# Desfazer último commit (mantém mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta mudanças)
git reset --hard HEAD~1
```

### Stash

```bash
# Guardar mudanças temporariamente
git stash

# Listar stashes
git stash list

# Aplicar stash
git stash apply

# Aplicar e remover stash
git stash pop
```

### Merge e Rebase

```bash
# Fazer merge de uma branch
git merge feature-nova

# Fazer rebase
git rebase main
```

## Boas Práticas

1. **Commits frequentes**: Faça commits pequenos e frequentes
2. **Mensagens claras**: Escreva mensagens de commit descritivas
3. **Use branches**: Crie branches para features e bugs
4. **Pull antes de Push**: Sempre faça pull antes de push
5. **Revise antes do commit**: Use `git diff` para revisar mudanças

## Fluxo de Trabalho Típico

```bash
# 1. Atualizar repositório local
git pull origin main

# 2. Criar branch para feature
git checkout -b feature-login

# 3. Fazer mudanças e commits
git add .
git commit -m "Adiciona tela de login"

# 4. Enviar para remoto
git push origin feature-login

# 5. Criar Pull Request no GitHub
# 6. Após aprovação, fazer merge
```

## Recursos Úteis

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Oh My Git! - Jogo para aprender Git](https://ohmygit.org/)

## Conclusão

Dominar o Git é essencial para trabalhar em equipe e manter um histórico organizado do seu código. Pratique esses comandos regularmente e eles se tornarão segunda natureza!

Nos próximos posts, vou falar sobre workflows Git mais avançados, como Git Flow e estratégias de branching.
