# Sistema de Montagem de Pizzas — Adapter + Bridge

**Paulo Roberto Santos Elias**  
**RA: 2171392511011**

---

## Objetivo

Projeto em JavaScript utilizando os padrões de projeto **Adapter** e **Bridge** para simular a montagem de pizzas.

---

## Padrões Utilizados

### Adapter
Responsável por adaptar os dados do serviço externo de sabores.

### Bridge
Responsável por separar a lógica de montagem dos tamanhos das pizzas.

---

## Funcionalidades

- Seleção de borda
- Definição de tamanho
- Adição de sabores
- Limite de sabores conforme o tamanho da pizza

| Tamanho | Máximo de sabores |
|---|---|
| Brotinho | 1 |
| Tradicional | 2 |
| Grande | 3 |

---

## Como Executar

1. Instale o Node.js:

https://nodejs.org/

2. Execute o arquivo:

```bash
node index.js


Pizza Grande | Borda: catupiry | Sabores: Calabresa, Frango com catupiry, Portuguesa
