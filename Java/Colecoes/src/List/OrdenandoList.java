package List;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class OrdenandoList {
    public static void main(String[] args) {
        List<Gato> gatos = new ArrayList<>(){{
            add(new Gato("Jon",18, "preto" ));
            add(new Gato("Simba", 6, "tigrado"));
            add(new Gato("Jon", 12, "amarelo"));
        }};
    
    // Embaralhar
    System.out.println(gatos.toString());
    Collections.shuffle(gatos);
    System.out.println(gatos);

    // Ordenar List por String
    Collections.sort(gatos);
    System.out.println(gatos);
    
    // Ordenar List por Int
    // Collections.sort(gatos, new IdadeComparator()); 
    gatos.sort(new IdadeComparator());
    System.out.println(gatos);

    }
}

// Comparable: interface usado em comparações
class Gato implements Comparable<Gato>{
    private String nome;
    private int idade;
    private String cor;

    
    public Gato(String nome, int idade, String cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
    public String getNome() {
        return nome;
    }
    
    public int getIdade() {
        return idade;
    }
    
    public String getCor() {
        return cor;
    }
    @Override
    public String toString() {
        return "Gato [cor=" + cor + ", idade=" + idade + ", nome=" + nome + "]";
    }
    @Override
    public int compareTo(Gato gato) {
        // TODO Auto-generated method stub
        return this.getNome().compareToIgnoreCase(gato.getNome());
    }

}

class IdadeComparator implements Comparator<Gato>{


    @Override
    public int compare(Gato g1, Gato g2) {
        // TODO Auto-generated method stub
        return Integer.compare(g1.getIdade(), g2.getIdade());
    }

}
