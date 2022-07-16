import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges{

    @Input() // Permite receber infomarção de algum componente externo
    // Isto tornará um atributo da tag do componente
    // <app-star [rating]=x>
    rating:number = 0

    starWidth!: number;

    ngOnChanges(): void { // Assincrono
        // Quando o componente mudar...

        // Logica de exibição das estrelas:
        // São declaradas 5 estrelas de inicio        
        // Quanto melhor avaliação, maior o tamanho do componente
        // O que ficar para fora do elemento será escondido(overflow: 'hidden')
        this.starWidth = this.rating * 74 / 5 //74/5=14,8
    }
}