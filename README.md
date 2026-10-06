# VK Odontologia – site institucional
Site estático (HTML, CSS e JS puros), sem build. Compatível com Vercel.

## Rodar localmente
1. `npm install` (opcional, não há dependências)
2. `npm run dev` e abra o endereço mostrado (ou abra `index.html` no navegador)

## Publicar
1. `git init && git add . && git commit -m "Site VK Odontologia"`
2. Crie um repositório no GitHub e rode `git remote add origin <url> && git push -u origin main`
3. Em vercel.com: **Add New → Project → Import** o repositório
4. Framework Preset: **Other**. Sem build command, output directory vazio. Clique em **Deploy**
5. Domínio: **Project → Settings → Domains → Add** e siga as instruções de DNS
Não há variáveis de ambiente neste projeto.

## Editar conteúdo
Tudo que é provisório tem a marca "Provisório" e comentário `<!-- EDITAR -->` no `index.html`:
tratamentos, diferenciais, avaliações do Google, galeria e texto "A clínica".
Fotos: coloque em `assets/images/` e troque o bloco `.ph` pela tag `<img src="assets/images/arquivo.jpg" alt="descrição" width= height= loading="lazy">`.
Depois de ter o domínio, adicione `"url"` no JSON-LD do `index.html`.
