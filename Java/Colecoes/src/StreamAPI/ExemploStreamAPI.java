package StreamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.DoubleConsumer;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class ExemploStreamAPI {
    public static void main(String[] args) {
        List<String> numerosAleatorios = 
            Arrays.asList("3", "7", "9", "54", "10", "2", "4", "0");

        // Exibir todos elementos
        System.out.println(numerosAleatorios);
        numerosAleatorios.stream().forEach(System.out::println); // .forEach espera um Consumer(que é uma Function Interface)

        // Selecionar os 5 primeiros e colocar em um Set
        numerosAleatorios.stream()
        .limit(5) // Pega os 5 primeiros elementos
        .collect(Collectors.toSet()) // Coloca em um set. collect no caso espera um Collector( que é um Function Interface)
        .forEach(System.out::println);

        // Transforma em lista de Inteiros
        List<Integer> numerosIntAleatorios = numerosAleatorios.stream()
        .map( s ->  Integer.parseInt(s)) // String para Int
        .collect(Collectors.toList()); // Stream para List
        // Ou Integer::parseInt
            
        // Filtrar numeros pares e maior que 2
        System.out.println("Pares maiores que 2");
       numerosIntAleatorios.stream()
       .filter(i -> i % 2 == 0 && i > 2)
       .forEach(System.out::println);

       // Media
       numerosAleatorios.stream()
       .mapToInt(Integer::parseInt) // Return um IntStream
       .average() // Metodo de IntStream, retorno Operation
       .ifPresent(System.out::println); // Metodo de Operation

       

        
    } // End Main
}
