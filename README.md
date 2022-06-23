# Chat App
Aplicação desenvolvida para a disciplina de Arquitetura de Aplicações Web do curso de Análise e Desenvolvimento de Sistemas.
Está dividida em Front-End (pasta 'chat-app') e Back-End (pasta 'chat-server').
O Front-End foi desenvolvido utiizando tecnologias como o React e o Axios.
O Back-End fez uso do NodeJS, MongoDB Atlas, NodeMailer, JWT e Socket.io.

## Preparação
Após baixar as duas pastas mencionadas anteriormente, siga as seguintes orientações:

* Abra dois terminais;
* Acesse a pasta onde foi salvo o projeto;
* Em um dos terminais acesse o Front-End com o seguinte comando:
`cd chat-app`
* Instale as dependências:
`npm install`
* No outro terminal acesse o Back-End com o seguinte comando:
`cd chat-server`
* Instale as dependências:
`npm install`

## Iniciando
Após preparar o projeto, execute os seguintes comandos:

* Dentro da pasta 'chat-app'
`npm start`

OBS.: Demora alguns minutos para iniciar o aplicativo.

O acesso pode ser feito via 'http://localhost:3000'

* Dentro da pasta 'chat-server'
`node index`

## Utilização
Ao se cadastrar no aplicativo, o segundo fator de autenticação já vem ativado por padrão, portanto, caso deslogue, será necessário se autenticar com um código enviado por email.

Para fazer o teste do chat, utilize dois navegadores distintos. A aplicação faz uso do Local Storage para armazenar o token JWT e o Usuário, caso tente fazer login em duas contas com o mesmo navegador, o usuário antigo vai ser sobrescrito.

Deixei duas contas preparadas sem a autenticação de dois fatores ativada para que possa testar a aplicação:

Usuário 01:

email: usertestone@test.com

senha: usertest

Usuário 02:

email: usertesttwo@test.com

senha: usertest

Caso queira testar a autenticação de dois fatores, cadastre-se com seu email, escolha seu avatar, clique em um chat e faça o logout. Os próximos logins irão te pedir o código do segundo fator de autenticação que será enviado por email.
