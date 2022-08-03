package Map;

import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

public class OrdenandoMap {
    public static void main(String[] args) {
        
        //Ordem Aleatoria
        Map<String, Livro> meusLivros = new HashMap<String, Livro>(){{
            put("Hawking, Stephen", new Livro( "Uma Breve Historia do Tempo", 256));
            put("Duhigg, Charles", new Livro( "O Poder do Habito", 408));
            put("Harari, Yuval Noah", new Livro( "21 Licoes Para o Seculo 21", 432));
        }};
        System.out.println("Ordem Aleatoria");
        for (Entry<String, Livro> livro : meusLivros.entrySet()) {
            System.out.println(livro.getKey());
        }
        System.out.println();
        
        // Ordem de Inserção
        System.out.println("Ordem de Insercao");
        Map<String, Livro> meusLivrosLinked = new LinkedHashMap<String, Livro>(){{
            put("Hawking, Stephen", new Livro( "Uma Breve Historia do Tempo", 256));
            put("Duhigg, Charles", new Livro( "O Poder do Habito", 408));
            put("Harari, Yuval Noah", new Livro( "21 Licoes Para o Seculo 21", 432));
        }};
        for (Entry<String, Livro> livro : meusLivrosLinked.entrySet()) {
            System.out.println(livro.getKey());
        }
        System.out.println();
        
        
        // Ordem Alfabetica das chaves
        System.out.println("Ordem Alfabetica das chaves");
        Map<String, Livro> meusLivrosTree = new TreeMap<String, Livro>(){{
            put("Hawking, Stephen", new Livro( "Uma Breve Historia do Tempo", 256));
            put("Duhigg, Charles", new Livro( "O Poder do Habito", 408));
            put("Harari, Yuval Noah", new Livro( "21 Licoes Para o Seculo 21", 432));
        }};
        for (Entry<String, Livro> livro : meusLivrosTree.entrySet()) {
            System.out.println(livro.getKey());
        }
        System.out.println();
        
        // Ordem Alfabeticas dos valores

        Set<Map.Entry<String, Livro>> meusLivrosTreeSet = new TreeSet<>(new ComparatorNomeLivro());
        meusLivrosTreeSet.addAll(meusLivros.entrySet());
        System.out.println(meusLivrosTreeSet);
        
        
        // Ordem Numerica nos valores
        Set<Map.Entry<String, Livro>> meusLivrosTreeSet2 = new TreeSet<>(new ComparatorNumPags());
        meusLivrosTreeSet2.addAll(meusLivros.entrySet());
        System.out.println(meusLivrosTreeSet2);
    }
    
}


class Livro{
    private String nome;
    private Integer paginas;


    public Livro(String nome, Integer paginas) {
        this.nome = nome;
        this.paginas = paginas;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public Integer getPaginas() {
        return paginas;
    }
    public void setPaginas(Integer paginas) {
        this.paginas = paginas;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((paginas == null) ? 0 : paginas.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Livro other = (Livro) obj;
        if (nome == null) {
            if (other.nome != null)
                return false;
        } else if (!nome.equals(other.nome))
            return false;
        if (paginas == null) {
            if (other.paginas != null)
                return false;
        } else if (!paginas.equals(other.paginas))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "Livro [nome=" + nome + ", paginas=" + paginas + "]";
    }

    
    
    
}

class ComparatorNomeLivro implements Comparator<Map.Entry<String, Livro>>{

    @Override
    public int compare(Entry<String, Livro> l1, Entry<String, Livro> l2) {
        // TODO Auto-generated method stub
        return l1.getValue().getNome().compareToIgnoreCase(l2.getValue().getNome());
    }
    
}

class ComparatorNumPags implements Comparator<Map.Entry<String, Livro>>{

    @Override
    public int compare(Entry<String, Livro> l1, Entry<String, Livro> l2) {
        // TODO Auto-generated method stub
        return l1.getValue().getPaginas().compareTo(l2.getValue().getPaginas());
    }
    
}