package maiorMenorMedia;

import java.util.Arrays;
import java.util.Scanner;

public class maiorMenorMedia {
    public static void main(String[] args) {
        int[] notas = new int[5];
        int menor = 0;
        int maior = 0;
        int soma = 0 ;

        Scanner input = new Scanner(System.in);
        for(int i = 0; i < 5; i++){
            System.out.println("Digite a " + (i + 1) + " nota");
            notas[i] = input.nextInt();
            if(i == 0){
                menor = notas[0];
                maior = notas[0];
              }
            if(notas[i] < menor){
                menor = notas[i];
            }
            if(notas[i] > maior){
                maior = notas[i];
                
            }

            soma += notas[i];
        }
        System.out.println(Arrays.toString(notas));
        System.out.println("O menor valor é: " + menor);
        System.out.println("O maior valor é: " + maior);
        
        System.out.println("A media é: "+ soma/notas.length);
        
    }
}
