package fatorial;

import java.util.Scanner;

public class fatorial {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Quer o fatorial de qual numero?");
        int n = input.nextInt();

        int acum = 1;

        for(int i = n; i >= 1; i--){
            acum = acum * i;
        }
        
        System.out.println(n + "! = " + acum);
    }
}
