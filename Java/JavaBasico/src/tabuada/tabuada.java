package tabuada;

import java.util.Scanner;

public class tabuada {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Quer a tabuada de qual numero? ");
        int n = input.nextInt();

        for(int i = 1; i <= 10; i++){
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }
}
