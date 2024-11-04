class Heroi {
    constructor(tipo, ataque) {
      this.Tipo = tipo
      this.Ataque = ataque
    }
  
    Magia() {
      console.log(`O Tipo ${this.Tipo} usou magia de ${this.Ataque}`)
    }
  
    Espadada() {
      console.log(`O Tipo ${this.Tipo} usou o ataque com a ${this.Ataque}`)
    }
  
    Ninjam() {
      console.log(`O Tipo ${this.Tipo} usou ${this.Ataque}`)
    }
  
    Surrando() {
      console.log(`O Tipo ${this.Tipo} usou o estilo de ${this.Ataque}`)
    }
  }
  

  let Mago0 = new Heroi("Mago", "Fogo")
  let Guerreiro0 = new Heroi("Guerreiro", "Espada")
  let Ninjam0 = new Heroi("Ninja", "Shuriken")
  let Monge0 = new Heroi("Monge", "Ryusoken")
  
 
  Mago0.Magia()
  Guerreiro0.Espadada()
  Ninjam0.Ninjam()
  Monge0.Surrando()