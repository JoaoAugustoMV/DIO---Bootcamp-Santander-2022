import { Component, OnInit } from "@angular/core";
import { Course } from "./course.class";
import { CourseService } from "./course.service";

@Component({ // Decoraitor Para criar Componente
    // Antes foi usado o selector(tag) para exemplificar o uso, mas como o Componente será chamado pela conceito de rota, ignorar o selector(tag)
    //selector: 'app-course-list', // Vira tag html
    
    //template: '<h2> Course List </h2>' // template estatico: Codigo html. Recomendado usar para menos que 5 linhas

    templateUrl: './course-list.component.html' // Caminho para arquivo html
})
export class CourseListComponent implements OnInit{ // Deixa o componente visivel
    // implents: 'pseudo-classe', ao determinado evento executar tal função

    _courses: Course[] = [] // Array com objetos Course
    imgSize: number = 40 // Tamanho das imagens de cada Curso
    
    filteredCourses: Course[] = []
    
    _filterBy!: string // _ Indica que possui setter e gettler (Boa pratica)
    constructor(private courseService: CourseService){ // Habilita a Injeção de dependencia
        
    }

    ngOnInit(): void{ // Ao carregar a pagina
       // this._courses = this.courseService.trazerTodos() // Irá trazer de course.service.ts, o array de objetos Course
        this.retriveAll()
        console.log(this._courses)
        
    } // end ngOnInit

    retriveAll(): void{
     //   this._courses = this.courseService.trazerTodos() //
        this.courseService.trazerTodos().subscribe({
            next: courses => { // Se der certo
                this._courses  = courses
            }, // end next
            error: erro => {
                console.log(erro)
            }
        }) // end subscribe
        this.filteredCourses = this._courses
    }

    set filter(value:string) {
        this._filterBy = value // resultado do bind com o input

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
        // Logica do Filtro:
        // A cada iteração, o filtro será feito com base no atributo name usando o metodo .indexOf()
        // Caso o .indexOf() retorne algum maior que -1, o teste de .filter será true
        
        // array.filter(func): func deve retornar true ou false, se true o elemento é inserido no array retornado por .filter
        // string.indexOf(str): retorna o primeiro indice da primeira ocerrencia de str ou se não houver ocorrencia, -1 
    }

    get filter(){
        return this._filterBy
    }

    deleteById(courseId: number){
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Delete realizado')
                this.retriveAll()
            }
        })
    }

} // End @Component
