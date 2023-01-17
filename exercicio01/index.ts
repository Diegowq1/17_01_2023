class Heroisdamarvel {
  teletransporte: boolean
  seRegenerar: boolean
  força: boolean
  imortalidade: boolean

  constructor(t: boolean, s: boolean, f:boolean, i:boolean){
    this.teletransporte = t;
    this.seRegenerar = s;
    this.força = f;
    this.imortalidade = i;


  }

  caracteristicasherois(): void{
    console.log(`Deadpool imortalidade${this.imortalidade}`)
    console.log(`Homem Aranha  ${this.teletransporte}`)
    console.log(`Hulk ${this.força} ${this.teletransporte}`)

}
}


let herois= new Heroisdamarvel(true, false, false, true)
herois.caracteristicasherois()


class Vingadores extends Heroisdamarvel {



}




class Vingadoresquemorreramnocinema extends Vingadores {



}












