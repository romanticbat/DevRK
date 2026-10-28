# Sistema de Gestão de Biblioteca

Sistema web para gerenciamento de biblioteca desenvolvido como projeto acadêmico pelo grupo **DevRK**, no curso da **Faculdade São Judas**.

## Sobre o Projeto

O **Sistema de Gestão de Biblioteca** tem como objetivo desenvolver uma aplicação web capaz de auxiliar no gerenciamento de um acervo bibliográfico, permitindo o controle de livros, leitores, empréstimos e devoluções.

O sistema será desenvolvido utilizando uma arquitetura organizada em camadas, buscando aplicar conceitos de desenvolvimento de software, banco de dados, autenticação, controle de acesso, versionamento de código e boas práticas de programação.

## Instituição

**Faculdade São Judas Tadeu**

## Grupo de Desenvolvimento

**DevRK**

### Integrantes

* Felipe Gomes
* Lucas Guilherme
* Yuri Castro
* Pedro Quintino
* Richard Nunes

> Os nomes dos demais integrantes serão adicionados posteriormente.

## Objetivo

O projeto tem como objetivo desenvolver um sistema web simples, completo e funcional para auxiliar na administração de uma biblioteca, permitindo o controle do acervo e dos usuários, além do gerenciamento do processo de empréstimo e devolução de livros.

## Funcionalidades

### Leitor

O usuário com perfil de leitor poderá:

* Realizar cadastro;
* Realizar login e logout;
* Visualizar seus dados cadastrais;
* Consultar o catálogo de livros;
* Verificar a disponibilidade dos livros;
* Solicitar empréstimos;
* Visualizar seus empréstimos ativos;
* Consultar as datas previstas para devolução;
* Acompanhar devoluções e possíveis atrasos;
* Respeitar o limite máximo de livros emprestados.

### Bibliotecário

O usuário com perfil de bibliotecário poderá:

* Realizar login administrativo;
* Acessar o painel administrativo;
* Cadastrar livros;
* Consultar livros;
* Editar livros;
* Remover livros;
* Gerenciar leitores;
* Consultar usuários cadastrados;
* Editar dados de leitores;
* Registrar empréstimos;
* Registrar devoluções;
* Consultar empréstimos ativos;
* Identificar empréstimos em atraso;
* Controlar a disponibilidade do acervo.

## Regras de Negócio Principais

* Cada leitor possuirá um limite máximo de livros emprestados simultaneamente.
* Um leitor não poderá realizar novos empréstimos quando atingir seu limite.
* Um livro não poderá ser emprestado quando não houver exemplares disponíveis.
* A quantidade disponível de um livro será reduzida após a realização de um empréstimo.
* A quantidade disponível será aumentada após a devolução de um livro.
* Cada empréstimo possuirá uma data de empréstimo e uma data prevista para devolução.
* Empréstimos que ultrapassarem a data prevista de devolução serão considerados atrasados enquanto o livro não for devolvido.
* Apenas usuários autorizados como bibliotecários poderão acessar as funcionalidades administrativas.

## Tecnologias

### Back-end

* Python
* Flask

### Front-end

* HTML
* CSS
* JavaScript

### Banco de Dados

* SQL
* MySQL

### Versionamento

* Git
* GitHub


## Banco de Dados

As principais entidades previstas são:

* **Usuários**
* **Livros**
* **Empréstimos**

A relação entre essas entidades permitirá controlar quais leitores estão utilizando quais livros e o estado de cada empréstimo.

## Desenvolvimento

O projeto será desenvolvido de forma colaborativa utilizando **Git e GitHub** para controle de versão e compartilhamento do código entre os integrantes do grupo.

As alterações serão organizadas por commits e, conforme o desenvolvimento avançar, poderão ser utilizadas branches para implementação e integração de novas funcionalidades.

## Status do Projeto

🚧 **Em desenvolvimento**

Este projeto está sendo desenvolvido como atividade acadêmica e poderá receber alterações na arquitetura, funcionalidades e regras de negócio ao longo do processo de desenvolvimento.

## Instituição

**Faculdade São Judas**

**Grupo:** DevRK

**Projeto:** Sistema de Gestão de Biblioteca
v
