# Tutor Monni — sito Netlify da Markdown

Questo progetto trasforma automaticamente i file Markdown in pagine HTML pubbliche.

## URL prodotti

Se il sito Netlify si chiama `tutor-monni`, otterrai URL come:

- `https://tutor-monni.netlify.app/informatica/html/`
- `https://tutor-monni.netlify.app/informatica/database/`
- `https://tutor-monni.netlify.app/informatica/rsa/`
- `https://tutor-monni.netlify.app/informatica/steganografia/`

## Pubblicazione consigliata: GitHub + Netlify

1. Crea un repository GitHub, ad esempio `tutor-monni`.
2. Carica nel repository tutti i file e le cartelle di questo progetto.
3. In Netlify scegli **Add new site / Import an existing project**.
4. Collega GitHub e seleziona il repository.
5. Netlify leggerà `netlify.toml`.
6. Se richiesto:
   - Build command: `npm run build`
   - Publish directory: `_site`
7. Avvia il deploy.
8. In Netlify puoi poi scegliere il nome del sito, se disponibile.

## Modificare i moduli

Modifica i file in:

`src/informatica/`

Ogni file contiene in testa una sezione come:

```yaml
---
title: Modulo HTML base
permalink: /informatica/html/index.html
layout: base.njk
---
```

Non rimuoverla. Scrivi il contenuto Markdown sotto quella sezione.

Ogni volta che fai push su GitHub, Netlify ricostruisce automaticamente le pagine HTML.

## Uso con Agent Builder

Aggiungi come Knowledge l'URL pubblico della pagina, ad esempio:

`https://tutor-monni.netlify.app/informatica/html/`

Il browser e Agent Builder vedranno vero HTML statico, non Markdown grezzo.

## Test locale opzionale

```bash
npm install
npm run start
```
