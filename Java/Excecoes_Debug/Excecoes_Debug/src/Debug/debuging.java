package Debug;

import java.util.Scanner;

public class debuging {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String[] alunos = {"Joao", "Ana", "Leo", "Sara"};
        
        int mediaTurma = calculaMediaTurma(alunos, input);
        System.out.println("A media da turma é: "+ mediaTurma);
    }

    private static int calculaMediaTurma(String[] alunos, Scanner input) {

        int soma = 0;
         for (String aluno : alunos) {
            System.out.println(" Digite a nota do aluno(a) " + aluno + ":");
            int nota = input.nextInt();
            soma += nota;
    
         }
        return soma/alunos.length;
    }
}
