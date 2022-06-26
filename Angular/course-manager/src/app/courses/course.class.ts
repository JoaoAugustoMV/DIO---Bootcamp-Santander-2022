export class Course {
    // Minha versão do TS estava dando erro por não declarar antes os atributos
    // Garante ao TS que não será nulo
    id!: number 
    name!: string
    imageUrl!: string
    code!: string
    price!: number
    duration!: number
    rating!: number
    releaseDate!: string
    description!: string
}