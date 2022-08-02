package List.Exercicios;

import java.util.Scanner;

public class Crime {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        
        int respSim = 0;
        for(int i = 0; i < 5; i++){
            int resp = input.nextInt();

            if(resp == 1){
                respSim++;
            }
        }

        System.out.println("A pessoa é " + Crime.situacao(respSim));

    }
    
    public static String situacao(int respSim){
        System.out.println(respSim);
        switch (respSim){
            case 0:
            case 1:
            return "Inocente";
            case 3:
            case 4:
            return "Cumplice";
            case 5:
            return "Culpado";
        }
        return null;
    }
}
