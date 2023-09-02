function multiplicar(...nummeros:number[]):number{
        let result = [...nummeros]
        let soma = result.reduce((acumulador,itemAtual)=>{
            return acumulador *= itemAtual;
        })
        return soma
}
const resultado1 = multiplicar(10,20,30,10,10)
console.log(resultado1)

function saudacoes(nome:string):string{
    return "ola"+ nome
}