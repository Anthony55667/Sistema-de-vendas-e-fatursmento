 class Usuario {
 #nome
 #email
 #senha
 #nivel
 #status

constructor(nome , email , senha , nivel , status){
    this.#nome = nome
    this.#email = email
    this.#senha = senha
    this.#nivel = nivel
    this.#status = status
}

    getNome()   { return this.#nome   }
    getEmail()  { return this.#email  }
    getSenha()  { return this.#senha  }
    getNivel()  { return this.#nivel  }
    getStatus() { return this.#status }

    setNome(nome)     { this.#nome = nome     }
    setEmail(email)   { this.#email = email   }
    setSenha(senha)   { this.#senha = senha   }
    setNivel(nivel)   { this.#nivel = nivel   }
    setStatus(status) { this.#status = status }
}
const Usuario = [

  new Usuario("Anthony" , "anthnony@gmail.com" ,"3333",),
  new Usuario("Ana" , "ana@gmail.com", "342321")
]

const encontrado = Usuario.find( u => u.getEmail() === "anthony@gmail.com")


Usuario.forEach( u => console.log(u.getNome()));

const lista = Usuario.filter(u => u.getEmail() !== "anthony@gmail.com")
