package dio.poo.Metodos.Exercicios;


import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

public class HoraAtual {
    static void Saudacao() {

        // Receber a Hora
        LocalTime data = LocalTime.now(); // Data Atual
        DateTimeFormatter formatadorDatas = DateTimeFormatter.ofPattern("HH:mm");
        String dataFormatada = data.format(formatadorDatas);

        // Formatar a Hora
        String[] horaMinuto = dataFormatada.split(":");
        int hora = Integer.parseInt(horaMinuto[0]);
        int minuto = Integer.parseInt(horaMinuto[1]);

      
        String saudacao;
        if ((hora >= 6 && hora < 12)){
            saudacao = ("Bom dia!");
        } else if(hora >= 12 && hora < 19){
            saudacao = ("Boa Tarde!");
        } else if(hora >= 19 && hora < 23){
            saudacao = "Boa noite!";
        } else{
            saudacao = "Tá fazendo o que acordado?";
        }
        System.out.println(saudacao); 
    }


}
