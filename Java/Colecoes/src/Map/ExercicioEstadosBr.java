/*
 * PE = 9.616.621
 * AL = 3.351.543
 * CE = 9.187.103
 * RN = 3.534.265
 */
 package Map;

import java.util.HashMap;
import java.util.Map;

class ExercicioEstadosBr{
    public static void main(String[] args) {
        // Crie um dicionario com estes valores
        Map<String, Integer> estadosBr = new HashMap<String, Integer>(){{
            put("PE", 9616621);
            put("AL", 3351543);
            put("CE", 9187103);
            put("RN", 3534265);
        }};
        System.out.println(estadosBr);
        // Substitua a população de RN para 3534165
        estadosBr.put("RN", 3534165);
        System.out.println(estadosBr);
        
        // Confira se PB está no dicionario, se não adicione. PB = 4.039.277
        System.out.println("for");
        if (!estadosBr.containsKey("PB")){
            estadosBr.put("PB", 4039277);
        };
        System.out.println(estadosBr);

        // for (Map.Entry<String, Integer> estado: estadosBr.entrySet()) {
        //     if
        // }
    }
 }




 // Exiba a população de PE

 // Exiba o dicionario na ordem de inserção

 // Exiba o dicionario na ordem alfabetica

 // Estado com menor população

 // Estado com maior população

 // Soma das populações

 // Médias das populações

 // Remover estados com populações menores que 4.000.000

 // Apague o dicionario