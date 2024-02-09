# Estudos sobre Nest Js 📚

## Nest Js

Nest.js é um framework para construção de aplicativos server-side em Node.js, com suporte para TypeScript e inspirado em Angular. Ele fornece uma estrutura para desenvolvimento escalável e eficiente de aplicações, seguindo o padrão arquitetural Model-View-Controller (MVC) e utilizando injeção de dependência.

* Baseado em Módulos: Nest.js organiza a aplicação em módulos, o que facilita a separação de responsabilidades e a manutenção do código.

* Injeção de Dependência: O framework utiliza injeção de dependência para gerenciar as dependências entre os diferentes componentes da aplicação. Isso facilita a criação de código mais modular e desacoplado.

* Suporte para TypeScript: Nest.js é escrito em TypeScript e oferece suporte total para a linguagem. Isso significa que você pode usar todas as funcionalidades do TypeScript, como tipagem estática e interfaces, para escrever código mais seguro e legível.

* Decoradores: Nest.js faz amplo uso de decoradores para configurar rotas, controladores, serviços e outros componentes da aplicação. Isso simplifica a configuração e torna o código mais expressivo.

* Middlewares e Pipes: O framework oferece suporte para middlewares e pipes, que são utilizados para processar requisições HTTP antes que elas alcancem os controladores. Isso permite implementar lógica de autorização, validação de dados, entre outras funcionalidades.

* WebSocket e Microserviços: Nest.js possui suporte integrado para WebSocket e pode ser facilmente adaptado para construir aplicações em tempo real. Além disso, ele oferece suporte para a construção de microserviços, o que é útil para arquiteturas distribuídas.

* Documentação Automática: Uma característica interessante do Nest.js é a geração automática de documentação da API com base nos decoradores utilizados nos controladores. Isso facilita a criação e manutenção da documentação da API.

## Arquitetura Cliente-Servidor

O modelo cliente-servidor, em computação, é uma estrutura de aplicação distribuída que distribui as tarefas e cargas de trabalho entre os fornecedores de um recurso ou serviço, designados como servidores, e os requerentes dos serviços, designados como clientes.

Um servidor, também chamado de host, é um computador que hospeda um serviço ou aplicação que normalmente pode ser acessado via rede de computadores, como por exemplo a rede mundial, internet.

Um cliente é um computador, tablet, celular ou dispositivo que possui um programa ou aplicação que solicita dados de um servidor.

![img](./README/client-server.png)

* Request no Nest Js

![img](./README/request.png)

* Response no Nest Js

![img](./README/response.png)

## Ciclo de Vida do Request

Quando o NestJS recebe um request, está solicitação entra por uma linha de processamento onde cada etapa recebe um nome diferente e tem um objetivo


No NestJS, um framework para construção de aplicativos Node.js escaláveis e eficientes, o ciclo de vida de uma solicitação (request) segue um padrão semelhante ao de outros frameworks web. Aqui está uma visão geral do ciclo de vida de uma solicitação em uma aplicação NestJS:

1. Recebimento da Solicitação (Request Reception):

* Quando uma solicitação HTTP é recebida pelo servidor, ela é encaminhada para o roteador do NestJS.

2. Middleware (Middleware Execution):

* A solicitação passa por qualquer middleware definido globalmente ou localmente para a rota específica.
Isso inclui transformação de dados, autenticação, validação de entrada, e outras operações de pré-processamento.

3. Resolução de Rota (Route Resolution):

* Com base na URL e no método HTTP da solicitação, o roteador do NestJS determina qual controlador e método manipulará a solicitação.

4. Execução do Controlador (Controller Execution):

* O controlador correspondente recebe a solicitação e executa a lógica de negócios associada.
* O controlador pode acessar serviços, realizar operações no banco de dados, ou executar qualquer outra tarefa necessária para responder à solicitação.

5. Interceptores (Interceptors):

* Após a execução do controlador, os interceptores podem ser acionados.
* Eles permitem a execução de lógica adicional antes ou depois da resposta do controlador, como a formatação de dados de resposta ou a manipulação de erros.

6. Pipes (Pipes):

* Os pipes podem ser usados para validar, transformar ou filtrar os dados de entrada e saída.
* Eles podem ser usados para garantir que os dados recebidos pela aplicação estejam em um formato válido antes de serem processados pelo controlador.

7. Filtros de Exceção (Exception Filters):

* Se ocorrer uma exceção durante a execução do controlador ou de algum middleware, os filtros de exceção podem ser acionados para lidar com a exceção e enviar uma resposta apropriada ao cliente.

8. Transformadores de Resposta (Response Transformers):

Finalmente, a resposta gerada pelo controlador ou por algum dos filtros é transformada e enviada de volta ao cliente.

9. Envio da Resposta (Response Dispatch):

* A resposta é enviada de volta ao cliente que fez a solicitação HTTP.

Isso tudo pode ser resumido:

Request -> Validação -> Modificação -> Response

![img](./README/cicle.png)

## Bootstrap

O Bootstrap do NestJS é o processo inicial de inicialização de uma aplicação NestJS. ele responsável por configurar e preparar a aplicação para funcionar corretamente.

Durante o processo de Bootstrap, o NestJS realiza várias etapas importantes:

* Configuração do Módulo Raiz.

* Injeção de Dependências.

* Configuração do Middleware.

* Inicialização dos Controladores.

* Configuração do Servidor HTTP.

* Conexão com Banco de Dados.

* Configuração de Logs e Tratamento de Erros.

## Decorators

Os decorators desempenham um papel crucial no NestJS, permitindo que os desenvolvedores apliquem metadados a classes, métodos, propriedades e parâmetros de forma aprimorada. Esses metadados são usados pelo framework para configurar e gerenciar automaticamente muitos aspectos da aplicação. 

* @Module: Este decorator é usado para definir um módulo dentro da aplicação NestJS. Os módulos são a unidade de organização e encapsulamento no NestJS, agrupando controladores, provedores de serviços e outros componentes relacionados.

* @Controller: Utilizado para marcar uma classe como um controlador no NestJS. Os controladores são responsáveis por lidar com solicitações HTTP e retornar respostas apropriadas. Métodos dentro da classe controladora são decorados com outros decorators, como @Get, @Post, @Put, etc., para definir os pontos de extremidade da API.

* @Injectable: Este decorator marca uma classe como um provedor de serviço no NestJS. Os provedores de serviços são usados para gerenciar a lógica de negócios, realizar operações de banco de dados, interagir com APIs externas e muito mais. Eles podem ser injetados em outros componentes usando a injeção de dependência do NestJS.

* @Inject: Usado para injetar dependências em um componente. Quando usado em um construtor de classe, o NestJS usa metadados para determinar quais dependências devem ser injetadas.

* @Middleware: Utilizado para definir middleware personalizado no NestJS. Os middlewares são funções que são executadas antes ou depois do processamento de solicitações HTTP. Eles podem ser aplicados a nível global, de módulo ou de controlador.

* @Guard: Decorator usado para aplicar guardas em controladores ou rotas. Os guardas são utilizados para implementar lógica de autorização e autenticação em pontos de extremidade da API.

* @Param, @Query, @Body, @Headers: Esses decorators são usados para extrair dados de solicitação HTTP em controladores. Por exemplo, @Param é usado para acessar parâmetros de rota, @Query para acessar parâmetros de consulta, @Body para acessar o corpo da solicitação e @Headers para acessar cabeçalhos da solicitação.

## Modules

No NestJS, os módulos são uma parte fundamental da estrutura de aplicativos. Eles ajudam na organização e modularização do código, facilitando a escalabilidade e a manutenção.

Um módulo no NestJS é basicamente um contêiner para um conjunto de controladores, provedores de serviços e outros componentes relacionados. Ele encapsula funcionalidades relacionadas em uma unidade coesa.

Ao criar um novo módulo, você pode usar o CLI do Nest para gerar automaticamente os arquivos necessários, como o arquivo do módulo em si, controladores, provedores de serviço, etc.

Um exemplo básico de um módulo no NestJS:

```markdown
    import { Module } from '@nestjs/common';
    import { CatsController } from './cats.controller';
    import { CatsService } from './cats.service';

    @Module({
    controllers: [CatsController],
    providers: [CatsService],
    })
    export class CatsModule {}
```

Neste exemplo, CatsModule é um módulo que encapsula a lógica relacionada a gatos em um aplicativo. Ele declara um controlador CatsController e um provedor de serviço CatsService. O @Module() decorator é usado para definir este módulo e especificar quais controladores e provedores de serviço pertencem a ele.

Os módulos também podem ser importados em outros módulos para reutilização de funcionalidades. Isso promove o conceito de modularidade, onde partes do aplicativo podem ser facilmente reutilizadas e compartilhadas entre diferentes partes do sistema.

Além disso, os módulos no NestJS também suportam a injeção de dependências, o que significa que os provedores de serviços dentro de um módulo podem ser facilmente injetados em controladores ou outros provedores dentro do mesmo módulo ou em módulos diferentes.

## Controllers

Os controladores no NestJS são responsáveis por lidar com as requisições HTTP, definindo rotas e manipulando a lógica de negócios associada a essas rotas. Eles desempenham um papel central na estrutura de um aplicativo NestJS, ajudando a manter a separação de preocupações e a organização do código.

Um controlador é uma classe decorada com @Controller(), e dentro dela, você define métodos que representam os diferentes endpoints da sua API. Cada método do controlador é decorado com um verbo HTTP (como @Get(), @Post(), @Put(), @Delete(), etc.) para indicar qual tipo de requisição ele manipula e qual rota está associada a ele.

Aqui está um exemplo básico de um controlador no NestJS:

```markdown
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
```

Neste exemplo, CatsController é um controlador que lida com operações relacionadas a gatos. Ele possui dois métodos decorados com @Post() e @Get(). O método create() manipula requisições POST para criar novos gatos, enquanto o método findAll() lida com requisições GET para retornar todos os gatos existentes.

Além disso, os controladores podem injetar serviços através do construtor, permitindo que eles acessem a lógica de negócios encapsulada em provedores de serviço. Isso promove a separação de preocupações e facilita a reutilização de código.

## Services

Os serviços no NestJS são classes que contêm a lógica de negócios da sua aplicação. Eles são responsáveis por realizar tarefas específicas, como acessar o banco de dados, manipular dados, executar cálculos complexos ou interagir com sistemas externos. Os serviços são injetáveis e podem ser facilmente compartilhados e reutilizados em toda a sua aplicação.

Para criar um serviço no NestJS, você simplesmente cria uma classe TypeScript comum, e pode marcá-la com o decorador @Injectable() para torná-la um serviço injetável. Em seguida, você pode injetar esse serviço em outros componentes, como controladores, outros serviços ou módulos, usando a injeção de dependência do NestJS.

Aqui está um exemplo básico de um serviço no NestJS:

```markdown
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    return this.cats.find(cat => cat.id === id);
  }
}
```

Neste exemplo, CatsService é um serviço que encapsula a lógica relacionada a gatos em um aplicativo. Ele possui métodos para criar um novo gato (create()), recuperar todos os gatos existentes (findAll()), e recuperar um único gato por ID (findOne()).

Os serviços no NestJS são extremamente flexíveis e podem interagir com qualquer parte do seu aplicativo, incluindo o banco de dados, APIs externas, ou outros serviços. Eles promovem a modularidade, a reutilização de código e a separação de preocupações, facilitando o desenvolvimento e a manutenção de aplicativos escaláveis e robustos.

Além disso, os serviços no NestJS também podem ser facilmente testados, já que são classes TypeScript comuns e podem ser injetados com dependências mocadas durante os testes unitários.

## CRUD em uma API REST

**O que é API?**

API(Application Programming Interface) significa Interface de Programação de Aplicação. Uma interface é a parte visível ou acessível para que uma aplicação possa ser usada ou acessada.

No caso uma API é criada de uma forma que outras aplicações possam ser programadas para usar a aplicação.

**Rest**

REST (Represetation State Transfer) significa Transferência Representacional de Estado e é um estilo de arquitetura de software ou convenções de regras para criação de uma API servida na Web pois dependendo dos recursos do produto HTTP como por exemplo URI e Método.

**CRUD**

CRUD (Create, Read, Update e Delete) significa criar uma aplicação que consiga criar, ler, alterar e excluir um registro que está gravado de forma persistente como em um banco de dados

## Referências

- [Nest Js URL](https://docs.nestjs.com/)
- [Udemy](https://www.udemy.com/)
- [Chat GPT](https://chat.openai.com/)
- [TabNews](https://www.tabnews.com.br/) 