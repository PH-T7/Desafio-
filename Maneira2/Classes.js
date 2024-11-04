
class Mago{
    constructor(Magia,MagiaComplementar){
        this.Magia = Magia
        this.MagiaComplementar = MagiaComplementar
    }
    
    AtaqueMago(){
        console.log(`O Mago Usou sua mágia de ${this.Magia} Misturando com mágia de ${this.MagiaComplementar}`)
    }
    
}
//tipos de magia
let Magia = new Mago("Fogo", "Água")

Magia.AtaqueMago()
//
class Guerreiro{
    constructor(Espada){
        this.Espada = Espada
    }
    
    AtaqueGuerreiro(){
        console.log(`Usou seu ataque com a ${this.Espada}`)
    }
    
}
//tipos de Espada
let Espada = new Guerreiro("Espada de diamante")

Espada.AtaqueGuerreiro()
//
class Monge{
    constructor(ArtesMarcias){
        this.ArtesMarcias = ArtesMarcias
    }
    
    AtaqueMonge(){
        console.log(`Usou seu estilo de luta ${this.ArtesMarcias}`)
    }
    
}
//tipos de luta
let ArtesMarcias = new Monge("Ryusoken")

ArtesMarcias.AtaqueMonge()
//
class Ninja{
    constructor(Shuriken){
        this.Shuriken = Shuriken
    }
    
    AtaqueNinja(){
        console.log(`Usou sua ${this.Shuriken}`)
    }
    
}
//tipos de shuriken
let Shuriken = new Ninja("Shuriken")

Shuriken.AtaqueNinja()
