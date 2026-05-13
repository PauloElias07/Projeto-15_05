// Adapter

// Serviço externo com formato diferente
class Sabores {
    getSabores() {
        return [
            { nome: "Calabresa" },
            { nome: "Frango com catupiry" },
            { nome: "Portuguesa" }
        ];
    }
}

// Adapter para transformar os objetos em strings
class SaborAdapter {
    constructor(service) {
        this.service = service;
    }

    getSabores() {
        return this.service.getSabores().map(s => s.nome);
    }
}


// Bridge

// Builder da pizza
class ConstrutorPizza {
    constructor() {
        this.pizza = {
            tamanho: "",
            borda: "",
            sabores: []
        };
    }

    colocarBorda(borda) {
        const validas = ["tradicional", "catupiry", "sem borda"];

        if (!validas.includes(borda)) {
            throw new Error("Borda inválida");
        }

        this.pizza.borda = borda;
    }

    addSabor(sabor) {
        if (this.pizza.sabores.length >= 3) {
            throw new Error("Máximo de 3 sabores");
        }

        this.pizza.sabores.push(sabor);
    }

    getPizza() {
        return this.pizza;
    }
}

// Abstraction
class TamanhoPizza {
    constructor(builder) {
        this.builder = builder;
    }
}

// Implementações concretas
class Brotinho extends TamanhoPizza {
    create(borda, sabores) {
        this.builder.colocarBorda(borda);

        sabores.slice(0, 1).forEach(s =>
            this.builder.addSabor(s)
        );

        const pizza = this.builder.getPizza();
        pizza.tamanho = "Brotinho";

        return pizza;
    }
}

class Tradicional extends TamanhoPizza {
    create(borda, sabores) {
        this.builder.colocarBorda(borda);

        sabores.slice(0, 2).forEach(s =>
            this.builder.addSabor(s)
        );

        const pizza = this.builder.getPizza();
        pizza.tamanho = "Tradicional";

        return pizza;
    }
}

class Grande extends TamanhoPizza {
    create(borda, sabores) {
        this.builder.colocarBorda(borda);

        sabores.slice(0, 3).forEach(s =>
            this.builder.addSabor(s)
        );

        const pizza = this.builder.getPizza();
        pizza.tamanho = "Grande";

        return pizza;
    }
}


// Execução

// Adapter
const externalService = new Sabores();
const adapter = new SaborAdapter(externalService);

const sabores = adapter.getSabores();

// Bridge
const pizza1 = new Grande(new ConstrutorPizza())
    .create("catupiry", sabores);

const pizza2 = new Tradicional(new ConstrutorPizza())
    .create("tradicional", sabores);

const pizza3 = new Brotinho(new ConstrutorPizza())
    .create("sem borda", sabores);

// Impressão
function printPizza(p) {
    console.log(
        `Pizza ${p.tamanho} | Borda: ${p.borda} | Sabores: ${p.sabores.join(", ")}`
    );
}

printPizza(pizza1);
printPizza(pizza2);
printPizza(pizza3);