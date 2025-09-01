# ⚛️ React com Princípios SOLID

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1-purple?logo=vite)

Este projeto é uma demonstração prática de como aplicar os cinco princípios de design **SOLID** em uma aplicação moderna construída com React, TypeScript e Vite. O objetivo é criar uma base de código limpa, escalável e de fácil manutenção.

## 🚀 Começando

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation) (ou npm/yarn)

### Instalação e Execução

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd react-solid
    ```

2.  **Instale as dependências:**

    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

---

## 🧠 Princípios SOLID na Prática

Cada princípio SOLID foi aplicado em diferentes partes do código para ilustrar seu impacto na arquitetura do projeto.

### S - Princípio da Responsabilidade Única (Single Responsibility Principle)

> Um componente ou módulo deve ter apenas um, e somente um, motivo para mudar.

- **Exemplo:** `hooks/features/use-get-all.tsx`

  - **Responsabilidade:** Apenas buscar e fornecer os dados das _features_. Ele não se preocupa com a forma como os dados são exibidos. Se a fonte de dados mudar (de uma constante para uma API), este é o único arquivo a ser alterado.

- **Exemplo:** `components/ui/button.tsx`
  - **Responsabilidade:** Ser um botão. Ele gerencia sua própria aparência e comportamento, mas delega a ação `onClick` para quem o utiliza, sem saber o que essa ação faz.

### O - Princípio Aberto/Fechado (Open/Closed Principle)

> Entidades de software (componentes, classes, módulos) devem ser abertas para extensão, mas fechadas para modificação.

- **Exemplo:** `components/ui/card.tsx`
  - Este componente é um "invólucro" genérico. Sua lógica interna está "fechada" para modificações, mas ele é "aberto" para extensão, permitindo que qualquer conteúdo (`children`) seja inserido dentro dele, como visto no `feature-card.tsx`.

### L - Princípio da Substituição de Liskov (Liskov Substitution Principle)

> Objetos de uma superclasse devem ser substituíveis por objetos de uma subclasse sem quebrar a aplicação.

- **Exemplo:** `components/ui/button.tsx`
  - Um `<Button variant="primary">` e um `<Button variant="secondary">` são intercambiáveis. Ambos se comportam como botões, aceitam as mesmas `props` (como `onClick`) e garantem um comportamento previsível, apesar das diferenças visuais.

### I - Princípio da Segregação de Interfaces (Interface Segregation Principle)

> Um cliente não deve ser forçado a depender de interfaces (ou `props`) que não utiliza.

- **Exemplo:** `components/pages/home/features/feature-card.tsx`
  - Em vez de receber o objeto `Feature` inteiro, este componente usa o `Pick` do TypeScript para criar um tipo de `props` que contém apenas os campos que ele realmente precisa: `icon`, `title` e `description`.
  ```typescript
  type FeatureCardProps = Pick<Feature, "icon" | "title" | "description">;
  ```

### D - Princípio da Inversão de Dependência (Dependency Inversion Principle)

> Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

- **Exemplo:** A relação entre `index.tsx` (página Home) e `features-section.tsx`.

  1.  O componente `FeaturesSection` (módulo de baixo nível, UI) não busca os dados diretamente. Ele depende de uma "abstração": a `prop` `features`.
  2.  A página `Home` (módulo de alto nível) controla a dependência: ela busca os dados usando o hook `useGetFeatures` e os "injeta" na `FeaturesSection`.

  ```tsx
  // Home (alto nível) injeta a dependência no FeaturesSection (baixo nível)
  export default function Home() {
    const { features } = useGetFeatures();
    return <FeaturesSection features={features} />;
  }
  ```

  Isso torna `FeaturesSection` reutilizável, pois ele pode exibir qualquer conjunto de dados que se ajuste à sua abstração (`props`), sem se importar de onde os dados vêm.

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
