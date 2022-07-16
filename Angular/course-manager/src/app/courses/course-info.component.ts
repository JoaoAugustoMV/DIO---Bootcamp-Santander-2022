import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course.class";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
    course!: Course
    

    constructor(private activateRoute: ActivatedRoute, private courseService: CourseService){ } // Retorna a Rota Atual
    
    ngOnInit(): void{
        
        this.courseService.retriveById(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => {
                this.course = course
            }
        })
        // this.activateRoute => Objeto Route, com os atributos url:'url mesmo', path:'path do RouteModule.forRoot'
        // this.activateRoute.snapshot => Retorna o mesmo do de cima, não entendi a diferença
        // this.activateRoute.snapshot.paramMap => Um map(coleção chave: valor) dos parametros
        // +this.activateRoute.snapshot.paraMap.get('id) => metodo do map para retorna o valor da chave passada
    }

    save(){
        this.courseService.save(this.course).subscribe({
            next: course => console.log('O curso foi salvo', course)
        })
    }

}