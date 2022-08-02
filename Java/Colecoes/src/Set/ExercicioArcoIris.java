
// Cria um Set com as cores do Arco Iris
/* Exiba todas
 * A quantidade de cores
 * Exiba em ordem alfabetica
 * Exiba na ordem inversa 
 * Exiba as cores que começam com "v"
 * Remova as cores que não começam com a letra "v"
 * Limpe o conjunto
 * Confira se o set está vazio
 */
package Set;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

public class ExercicioArcoIris {
    public static void main(String[] args) {
        Set<String> coresArcoIris = new LinkedHashSet<String>(){{
            add("Vermelho");
            add("Laranja");
            add("Amarela");
            add("Verde");
            add("Azul");
            add("Indigo");
            add("Violeta");
        }};

        //Exiba todas
        System.out.println("As cores do arco iris são: " + coresArcoIris);

        //A quantidade de cores
        System.out.println("Possui " + coresArcoIris.size() + " cores");

        // Exiba em ordem alfabetica
        List<String> coresEmOrdemAlfabetica = new ArrayList<String>(coresArcoIris);
        Collections.sort(coresEmOrdemAlfabetica);
        System.out.println("Ordem Alfabetica: " + coresEmOrdemAlfabetica);

        // Ordem Inversa
        Set<String> coresInversas = new LinkedHashSet<String>();
        int qtsCores = coresArcoIris.size();
        for (int i = qtsCores - 1; i >=0; i--) {
           coresInversas.add(coresArcoIris.toArray()[i].toString());
        }
        System.out.println("Ordem Inversa: " + coresArcoIris);
        
        // Remover as que não começam com V
        Iterator<String> iterator = coresArcoIris.iterator();
        while(iterator.hasNext()){
            if(iterator.next().startsWith("V")) iterator.remove();
        }
        System.out.println("Cores que não começam com V: " + coresArcoIris);

        coresArcoIris.clear();
        System.out.println(coresArcoIris.isEmpty());
    }   
}

