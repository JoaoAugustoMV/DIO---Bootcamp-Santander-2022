package Map;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.TreeMap;

public class ExercicioDados {
    public static void main(String[] args) {
        Random rand= new Random();

        List<Integer> numsSorteados = new ArrayList<>();
        for(int i = 1; i <= 10; i++){ // Faz sorteio dos numeros
            numsSorteados.add(rand.nextInt(1, 7));
        }

        Map<Integer, Integer> mapCont = new TreeMap<>();
        
        for (Integer i : numsSorteados) { // Itera o elemento a ser contado 
            int contador = 0;
            for (Integer n: numsSorteados) { // Itera a lista para a contagem
                if(n == i){ // Se o elemento a ser contado for igual ao iterador
                    contador++;
                }
            } // end for(n)
            mapCont.put(i, contador);
        } // end for(i)
        
        for (Map.Entry<Integer, Integer> entry: mapCont.entrySet()) {
            System.out.println(entry.getKey() + " apareceu " + entry.getValue() + " vezes");
        }
    }// end main()
    
}



// Lance um dado 100 e mostre quantas vezes caiu cada valor
// chave o numero e valor será a contagem