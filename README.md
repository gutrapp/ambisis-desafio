## 🚀 Como executar

Primeiro você deve criar um arquivo .env.

Para consiguir as chaves da autenticação com o github, recomendo assistir [este vídeo](https://www.youtube.com/watch?v=O1kEes6mQcs&ab_channel=n8n).

```text
Homepage URL: http://localhost:3000
Authorization callback URL: http://localhost:3000/api/auth/callback/github
```

Observação¹: na criação do .env, utilize o .env.example para saber quais variáveis são necessárias.

Após isso so resta rodar os seguintes comandos:

```bash
$ npm i
$ npm run dev
```
