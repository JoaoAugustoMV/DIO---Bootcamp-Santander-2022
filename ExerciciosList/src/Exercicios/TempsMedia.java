package Exercicios;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TempsMedia{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        List<Float> temperaturasMedias = new ArrayList<Float>();
        
        float soma = 0;
        for(int i = 1; i <= 6; i++){
            System.out.print("Informe a temperatura do " + i + " mes:");
            float tempMedia = input.nextFloat();
            System.out.println();
            temperaturasMedias.add(tempMedia); 
            soma += tempMedia;
        }
        float media = soma / temperaturasMedias.size();
        System.out.println("Temperaturas Medias: " + temperaturasMedias);
        System.out.println("Soma: " + soma);
        System.out.println("Media: " + media);

        System.out.print("Temperaturas acima da media: ");
        for (Float tempMedia : temperaturasMedias) {
            if(tempMedia > media){
                int mes = temperaturasMedias.indexOf(tempMedia) + 1;
                System.out.println("Mes: "+  mes + " com " + tempMedia + " graus");
            }
        }

    }
}