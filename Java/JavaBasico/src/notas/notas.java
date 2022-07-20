package notas;

import java.util.Scanner;

public class notas {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);   
        float nota;
        while(true){
            System.out.println("Digite uma nota de 0 a 10");
            nota = input.nextFloat();
            if(nota >= 0 && nota <= 10 ){
                
                System.out.println("Nota valida");
                System.out.println("Fim do Programa");
                break;
            }
            System.out.println("Nota invalida");
        }
    }
    
}
