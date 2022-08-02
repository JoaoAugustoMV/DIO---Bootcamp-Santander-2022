package Map;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

public class ExemploMap {
    public static void main(String[] args) {
        
        Map<String, Double> carrosPopulares = new HashMap<String, Double>(){{
            put("Gol", 14.4); // adicionar
            put("Uno", 15.6);
            put("Mobi", 16.1);
            put("HB20", 14.5);
            put("kwid", 16.6);
        }};
    
        // Exibir Map
        System.out.println(carrosPopulares.toString());

        // Substituir valor
        carrosPopulares.put("Gol", 15.7); // Sobreescreve
        System.out.println(carrosPopulares);

        // Contem
        System.out.println(carrosPopulares.containsKey("tucson"));

        // Exibir valor
        System.out.println( carrosPopulares.get("Uno"));

        // Exibir todos valores e chaves
        System.out.println(carrosPopulares.keySet()); // Retorna um Set com as chaves
        System.out.println(carrosPopulares.values());

        // Maior valor
        Double consumoMaisEficiente = Collections.max(carrosPopulares.values());
        Set<Map.Entry<String, Double>> entries = carrosPopulares.entrySet();
        System.out.println(entries);
        String modeloMaisEficiente = "";

        for (Entry<String,Double> entry : entries) {
            if(entry.getValue() == consumoMaisEficiente){
                modeloMaisEficiente = entry.getKey();
                System.out.println(modeloMaisEficiente);
            }
        }
        carrosPopulares.
    }
}
