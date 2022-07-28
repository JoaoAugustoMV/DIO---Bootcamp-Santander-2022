package List;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

public class ExemploLista {
    public static void main(String[] args) {
        

        // List<Double> notas = new ArrayList<>(Arrays.asList(8d, 5d , 6d));
        //    List<Double> notas = List.of(7d, 4d, 3940d); // Lista Imutavel
        
        List<Double> notas = new ArrayList<>();
        notas.add(7d);
        notas.add(8.5d);
        notas.add(9.3d);
        notas.add(5d);
        notas.add(7d);
        notas.add(8d);
        notas.add(3.6d);
        
        //Print ArrayList
        System.out.println(notas);

        // Achar o indice atraves do valor
        System.out.println(notas.indexOf(5d));

        // Substituição
        notas.set(notas.indexOf(5d), 6d); // Substitui pelo indice
        System.out.println(notas);

        // Verifica se existe o valor na ArrayList
        System.out.println(notas.contains(5d));

        // Retorna o elemento do indice indicado
        System.out.println(notas.get(2));


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
        notas = (List<Double>) notas.stream().filter(nota -> nota < 7);
        notasMenor7.forEach(n -> System.out.println(n));
        
        // Apagar todos elementos
        notas.clear();
    }
}