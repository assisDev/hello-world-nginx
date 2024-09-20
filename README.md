# Hello World Nginx

Este projeto contém um simples servidor web "Hello World" usando Nginx, empacotado em um container Docker. É ideal para testar a instalação e configuração do Docker em um ambiente de desenvolvimento ou produção.

## Pré-requisitos

Antes de começar, você precisará ter o Docker instalado em seu sistema. Para instalar o Docker, siga as instruções disponíveis no site oficial do Docker para [Windows](https://docs.docker.com/desktop/windows/install/), [MacOS](https://docs.docker.com/desktop/mac/install/) ou [Linux](https://docs.docker.com/engine/install/ubuntu/).

## Configuração Inicial

1. **Clonar o Repositório**

   Primeiro, clone o repositório onde está o projeto. Substitua `https://github.com/assisDev/hello-world-nginx.git` pela URL do seu repositório Git.

   ```bash
   git clone https://github.com/assisDev/hello-world-nginx.git
   cd hello-world-nginx
   ```

2. **Construir a Imagem Docker**

   Dentro do diretório do projeto, construa a imagem Docker usando o seguinte comando:

   ```bash
   docker build -t hello-world-nginx .
   ```

   Este comando lê o `Dockerfile` presente no diretório atual e constrói uma imagem chamada `hello-world-nginx`.

3. **Executar o Container Docker**

   Após construir a imagem, execute o container a partir da imagem construída:

   ```bash
   docker run -d -p 80:80 hello-world-nginx
   ```

   Este comando executa o container em modo desanexado (`-d`), mapeia a porta 80 do host para a porta 80 do container, e usa a imagem `hello-world-nginx`.

## Verificando a Aplicação

Para acessar a aplicação, abra um navegador e digite o endereço IP do host ou `localhost` se estiver executando localmente. Você deverá ver a página "Hello, World!".

## Comandos Úteis

- **Verificar containers em execução**

  ```bash
  docker ps
  ```

- **Visualizar logs de um container**

  ```bash
  docker logs [container_id]
  ```

  Substitua `[container_id]` pelo ID do seu container, que você pode encontrar usando o comando `docker ps`.

- **Parar um container em execução**

  ```bash
  docker stop [container_id]
  ```

- **Reiniciar um container**

  ```bash
  docker start [container_id]
  ```

## Suporte

Para mais informações ou suporte, consulte a documentação oficial do Docker ou entre em contato com a equipe de suporte técnico do seu provedor de hospedagem.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.