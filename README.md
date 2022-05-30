# DesafioUnimedMarvel

O desafio é criar uma pequena aplicação capaz de listar os heróis da Marvel e exibir um card com detalhamento sobre cada um deles. Na listagem deve ter a opção de escolher qual o herói favorito persistindo em uma base cada voto. Quanto mais votos como favorito ele tiver, ele deverá subir na ordem de exibição da listagem.

## Desenvolvimento

Foi realizada a requisição a Api da Marvel, os personagens foram apresentados em cards com um botão para favoritar o herói favorito, aos que não possuiam uma descrição na API foi acrescentado um Lorem ipsum. o Input no início da aplicação permite que o usuário encontre seu personagem de forma mais fácil.
Foi utilizado o XAMPP para promover o servidor web Apache, com banco de dados MySQL. No banco foi criado uma tabela que guardará um id para cada herói, seu nome e sua quantidade de votos, foi usada a linguagem PHP para criar a comunicação com o banco de dados.

O Projeto ainda está em desenvolvimento, faltando contabilizar os votos dos heróis e assim armazenar as informações no banco de dados. Até então foram utilizados as linguaguens HTML, CSS, JAVASCRIPT E PHP e a aplicação está responsiva nos seguintes breakpoints: 320px, 480px, 768px, 1024, 1440px.