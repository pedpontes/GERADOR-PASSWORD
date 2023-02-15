# Gerador de senhas imquebravel?

E aí, meu consagrado, beleza? Bora criar senhas maneiras com esse script irado aqui?

Primeiramente, importamos o módulo 'fs', que nos permite interagir com arquivos. Depois, definimos o nome do arquivo que vai receber as senhas e alguns conjuntos de caracteres que vão compor as nossas senhas (letras maiúsculas e minúsculas, números e símbolos).

Aí, através dos argumentos passados na linha de comando, definimos o nome de usuário e o tamanho da senha que vamos gerar.

Com essas informações, partimos para as funções de gerar senhas. Temos quatro funções: uma que retorna uma letra minúscula aleatória, outra que retorna uma letra maiúscula aleatória, uma que retorna um símbolo aleatório e outra que retorna um número aleatório.

Agora que temos as funções de gerar caracteres, partimos para a função que vai gerar a senha completa. Ela faz um loop pelo número de caracteres que queremos na nossa senha, chama uma função aleatória e adiciona o resultado na nossa senha.

Com a senha pronta, usamos o 'fs' para adicionar as informações no arquivo que definimos no começo. Se der tudo certo, recebemos uma mensagem de sucesso, senão, uma mensagem de erro.

E aí, ficou mais tranquilo de entender? Partiu criar senhas que ninguém vai conseguir quebrar!
