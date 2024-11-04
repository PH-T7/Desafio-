class Heroi{
    constructor(Nome,Idade,Tipo){
        this.Nome = Nome
        this.Idade = Idade
        this.Tipo = Tipo
        }
        HeroiNome(){
            console.log(`O heroi de codinome ${this.Nome} tem ${this.Idade} Anos`)
        }
        HeroiTipo(){
            console.log(`É Tipo ${this.Tipo}`)
        }
        Ataque(){
            console.log(`É Tipo ${this.Nome}`)
        }    
}

let Nom = new Heroi("PH", "19")

let Tipo = new Heroi("Mago")

Tipo.HeroiTipo()



//Nota Aqui eu estava fazendo o O if e else como estrutura de repetição para cada classe porem não consegui kkkkkk
//tentarei futuramente fazer esse código de novo
if (this.tipo === "Mago"){
  console.log(Magia.AtaqueMago())
}
else
return