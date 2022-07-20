package nomeIdade;
import java.util.Scanner;

public class nomeIdade {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int idade;
        String nome ;  
        while (true) {

            System.out.println("Digite seu nome");
            nome = input.next();

            if(nome.equals("0")){
                System.out.println("Fim do programa");
                break;
            }
            System.out.println("Digite sua idade");
            idade = input.nextInt();

            System.out.println("Prazer, " + nome + " de " + idade + " anos");

        }
        
    }
    
}