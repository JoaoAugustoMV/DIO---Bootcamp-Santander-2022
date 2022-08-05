/*
 * PE = 9.616.621
 * AL = 3.351.543
 * CE = 9.187.103
 * RN = 3.534.265
 */
 package Map;

import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.TreeMap;

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

        // Exiba a população de PE
        System.out.println("A populacao de PE é de " + estadosBr.get("PE") + " pessoas");
        
        // Exiba o dicionario na ordem alfabetica(por key)
        Map<String, Integer> estadosBrTree = new TreeMap<>(estadosBr);
        System.out.println("1 " + estadosBrTree);
        
         // Estado com menor população
        Integer menorPopulacao = Collections.min(estadosBr.values());
        String estadoMenorPopulacao = getKey(estadosBr, menorPopulacao);
        System.out.println("O Estado com a menor populacao é " + estadoMenorPopulacao);
        // Estado com maior população
        Integer maiorPopulacao = Collections.max(estadosBr.values());
        String estadoMaiorPopulacao = getKey(estadosBr, maiorPopulacao);
        System.out.println("O Estado com a maior populacao é " + estadoMaiorPopulacao);

        // Soma das populações
        Integer soma = 0;
        for (Map.Entry<String, Integer> estado : estadosBr.entrySet()) {
            soma = soma +  estado.getValue();
        }
        System.out.println("A soma das populacoes é " + soma);
        // Médias das populações
        Integer media = soma / estadosBr.size();
        System.out.println("A media das populacoes é " + media);
        
        // Remover estados com populações menores que 4.000.000
        estadosBr.entrySet().removeIf(item -> item.getValue() < 4000000);
        System.out.println(estadosBr);
        
        // Apague o dicionario
        estadosBr.clear();
    } // end Main
    static String getKey(Map<String, Integer> mapa, Integer valor){
        for (Map.Entry<String, Integer> item: mapa.entrySet()) {
            if(item.getValue() == valor){
                return item.getKey();
            }
        };
        return null;
    } 
}


