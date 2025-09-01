# ☕ Cantinho do Café - Landing Page

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)

Bem-vindo ao **Cantinho do Café**, uma landing page desenvolvida para apresentar uma oferta especial de café, mas com um propósito maior: demonstrar como os **princípios SOLID** podem ser aplicados na prática para construir uma aplicação front-end robusta, escalável e de fácil manutenção com Next.js.

---

## ✨ Qualidades do Projeto

Este projeto não é apenas sobre café, é sobre a arte de escrever código de qualidade.

-   🧠 **Arquitetura SOLID:** O código foi estruturado seguindo os cinco princípios SOLID, resultando em um software mais flexível e compreensível.
-   🚀 **Performance com Next.js:** Utilizando Server Components, os dados são pré-carregados no servidor, garantindo um carregamento ultrarrápido e melhorando o SEO.
-   🧱 **Componentização Eficiente:** Componentes de UI reutilizáveis como `Card` e `Button` garantem consistência visual e aceleram o desenvolvimento.
-   🔒 **Segurança com TypeScript:** O uso de tipos em todo o projeto previne bugs e torna as estruturas de dados claras e previsíveis.
-   📂 **Estrutura Modular:** O projeto é dividido em módulos de responsabilidade clara (`special-offer`, `suggestions`, `testimonials`), facilitando a navegação e a manutenção.
-   🧹 **Código Limpo e Legível:** A lógica de busca de dados é abstraída em hooks customizados, mantendo os componentes de UI limpos e focados na apresentação.

---

## 🧠 Princípios SOLID em Ação

Veja como cada princípio foi aplicado em exemplos concretos no projeto:

### S - Princípio da Responsabilidade Única
> "Um componente deve ter apenas uma razão para mudar."

-   **`_utils/format-price.ts`**: Sua única responsabilidade é formatar um número para o padrão de moeda brasileiro (BRL).
-   **`modules/special-offer/components/quantity-selector.tsx`**: Gerencia *exclusivamente* a seleção da quantidade de um item. Não sabe o que é o item nem o que acontece depois.
-   **`modules/special-offer/components/add-cart-button.tsx`**: Apenas renderiza um botão. A ação de clique é delegada a um componente pai.

### O - Princípio do Aberto/Fechado
> "Aberto para extensão, mas fechado para modificação."

-   **`components/ui/card.tsx`**: É um "invólucro" genérico. Sua estrutura base está fechada, mas ele é aberto para receber qualquer `children` ou novas classes de estilo, permitindo sua reutilização em `TestimonialsCard` e `SuggestionCard` sem alterá-lo.
-   **`components/ui/button.tsx`**: Aceita variantes (`primary`, `secondary`) e pode ser estendido com qualquer conteúdo. Novas variantes podem ser adicionadas sem quebrar a lógica existente.

### L - Princípio da Substituição de Liskov
> "Subclasses devem ser substituíveis por suas superclasses."

-   **Tipos `CoffeeType` e `SpecialCoffeeType`**: O tipo `SpecialCoffeeType` estende `CoffeeType`. Em qualquer componente que espera as propriedades básicas de um café (`name`, `imageUrl`, `price`), um objeto `SpecialCoffeeType` pode ser usado sem quebrar a aplicação, pois ele herda o "contrato" do tipo base.

### I - Princípio da Segregação de Interfaces
> "Um cliente não deve ser forçado a depender de props que não utiliza."

-   **`modules/special-offer/components/special-offer-image.tsx`**: Em vez de receber o objeto `specialCoffee` completo, ele recebe apenas `imageUrl` e `name` usando `Pick<SpecialCoffeeType, "imageUrl" | "name">`. Ele não precisa saber o preço ou a descrição.
-   **`modules/suggestions/components/suggestions-card.tsx`**: Define suas props com `Pick<CoffeeType, ...>` para receber apenas os campos que realmente vai usar: imagem, nome, origem e preço.

### D - Princípio da Inversão de Dependência
> "Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações."

-   **`app/page.tsx` (HomePage)**: Este componente de alto nível precisa de dados, mas não sabe *como* eles são buscados. Ele depende de abstrações (os hooks `useGetSpecialCoffee`, `useGetAllCoffees`). A implementação da busca de dados (seja de um mock ou de uma API real) está nos hooks (baixo nível), e pode ser trocada a qualquer momento sem impactar a `HomePage`.

---

## 🚀 Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd nome-do-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

Acesse `http://localhost:3000` e desfrute de um bom café e de um código bem estruturado!

---

## 📚 Aprendizado

Ainda estou bem no começo dos estudos a respeito do S.O.L.I.D, inclusive por coincidência até aplicava alguns de seus conceitos, mas puramente "a gosto". <br />
Estou animado para aprofundar meu conhecimento e entender como aplicar esses princípios de forma mais consistente e eficaz em meus projetos, deixando-os mais escaláveis e fáceis de manter.

## 👨‍💻 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/victor-lis">
        <img src="https://avatars.githubusercontent.com/u/109773129?v=4" width="50px;" alt="Foto de Victor Lis Bronzo" style="border-radius:50%;"/>
      </a>
    </td>
    <td>
      Feito com ❤️ por <b>Victor Lis Bronzo</b>
      <br/>
      <a href="https://www.linkedin.com/in/victor-lis-bronzo" target="_blank">Meu LinkedIn</a>
    </td>
  </tr>
</table>
