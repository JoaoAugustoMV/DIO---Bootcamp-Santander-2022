package parImpar;

import java.util.Scanner;

public class parImpar {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Quer digitar quantos numeros?");
        int nums = input.nextInt();
        int quantosPar, quantosImpar;
        quantosImpar = quantosPar = 0;
        for(int i = 0; i < nums; i++){
            System.out.println("Digite o " + (i + 1) + " numero");
            int n = input.nextInt();
            if(n % 2 == 0){
                quantosPar++;
            } else {
                quantosImpar++;
            }
        }
        System.out.println("Quantos pares: " + quantosPar);
        System.out.println("Quantos impares: " + quantosImpar);

        for (String string : args) {
            
        }
    }
}
