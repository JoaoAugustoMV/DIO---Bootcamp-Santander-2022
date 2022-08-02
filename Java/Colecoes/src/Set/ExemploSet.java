package Set;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;
import java.util.stream.Stream;

public class ExemploSet {
    public static void main(String[] args) {
        
        Set<Double> notas = new HashSet();
        notas.add(7d);
        notas.add(8.5d);
        notas.add(9.3d);
        notas.add(5d);
        notas.add(7d);
        notas.add(8d);
        notas.add(3.6d);
        
        //Print Set
        System.out.println(notas);


        // Verifica se existe o valor na HashSet
        System.out.println(notas.contains(5d));

        // Menor Valor
        System.out.println(Collections.min(notas));
        // Maior Valor
        System.out.println(Collections.max(notas));

        // Menor Valor
        double soma = 0;
        for (Double nota : notas) {
            soma += nota;
        }
        System.out.println(soma);

        // Tamanho
        System.out.println(soma / notas.size());

        // Remover elemento
        notas.remove(3.6); // Pode remover o pelo indice ou pelo proprio elemento
        System.out.println(notas);

        // Filtro
        Stream<Double> notasMenor7 = notas.stream().filter(nota -> nota < 7);
        notas = (Set<Double>) notas.stream().filter(nota -> nota < 7);
        notasMenor7.forEach(n -> System.out.println(n));
        
        // Apagar todos elementos
        notas.clear();

        Set<Double> notas2 = new TreeSet(notas);
        System.out.println("teste" + notas2);
    }
}