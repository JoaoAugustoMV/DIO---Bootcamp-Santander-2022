import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ // Decoraitor para avisar ao Angular que é um Pipe
    name: 'replace'
})

// Lembrar de colocar no modulo pai(app.module.ts)
export class ReplacePipe implements PipeTransform{

    transform(atr: string, char:string, valueToReplace: string) { // primeiro parametro sempre será o atributo do objeto passado
        // valueToReplace: o que irá substituir
        // char: o que será substituido

        return atr.replace(char, valueToReplace)

        
    }
}