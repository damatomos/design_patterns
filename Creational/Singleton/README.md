# Singleton

O Singleton é um padrão criacional que garante que uma classe possua apenas uma instância com acesso global.

## Por que utilizar o Singleton?

- Garantir que uma classe possua apenas uma instância.
- Garantir acesso global para campos necessários em toda a aplicação.
- É do tipo Lazy Creation, garantindo que o objeto só será criado quando realmente for necessário.

## Quais condições define um Singleton?

- Possui o construtor privado, evitando que crie instâncias externamente.
- Possui uma variável privada, estática e única, garantindo sua inicialização.
- Possui um método estático geralmente chamado de *'getInstance'*, tornando o acesso do Singleton global.

## Quando devo usar o Singleton?

- Quando uma classe da aplicação deve ter apenas uma instância disponível para os seus clientes.
- Quando for necessário ter um controle mais estrito das variáveis globais.

## Exemplos de casos de uso de Singleton:

- Classe de banco de dados
- Classe de preferências/configurações

### Pontos positivos

- Só existe uma única instância da classe.
- Acesso global para essa instância única.
- É inicializado apenas quando necessário.

### Pontos negativos

- Viola o princípio de Responsabilidade Única (Resolve mais de um problema de uma só vez)
- Pode ser um Design ruim, fazendo com que os componentes da aplicação saibam muito sobre cada um
- Precisa ser especialmente tratado em ambientes Multithreading
- Pode ser difícil aplicar testes em uma classe Singleton (Pelo fato de frameworks de testes criar instâncias para simulação)

#### Fonte:
- Coursera: Design Patterns by University of Alberta
- Refactoring.Guru: Singleton