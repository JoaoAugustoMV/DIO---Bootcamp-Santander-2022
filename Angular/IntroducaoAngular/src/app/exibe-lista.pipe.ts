import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exibeLista',
  pure: false // Tornando Pipe Impuro
})
export class ExibeListaPipe implements PipeTransform {

  transform(value: String[], ...args: unknown[]): unknown {
    let returnStr = ''
    if(value.length){
      value.forEach(valor => {
        returnStr = returnStr + ' ' + valor
      })
    }
    
    return returnStr;
  }

}
