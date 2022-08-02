package Set;

import java.util.LinkedHashSet;
import java.util.Set;

/* Crie um classe LinguagemFavorita que tenha nome, anoDeCriacao e ide e ordene por
 * Ordem de Inserção
 * Ordem Natural(nome)
 * IDE
 * Ano de criação e nome
 * Nome, ano e ide
 */

public class ExercicioLingaugens {
    public static void main(String[] args) {

        Set<Linguagem> linguagensFavoritas = new LinkedHashSet<Linguagem>(){{
            add(new Linguagem("Python", 1990, "PyCharm"));
            add(new Linguagem("JavaScript", 1995, "VS Code"));
            add(new Linguagem("C++", 1983, "Arduino IDE"));
        }};

        for (Linguagem linguagem : linguagensFavoritas) {
            System.out.println(linguagem.toString());
        }
    }
}

class Linguagem{
    String nome;
    int anoCriacao;
    String IDE;
    public Linguagem(String nome, int anoCriacao, String iDE) {
        this.nome = nome;
        this.anoCriacao = anoCriacao;
        IDE = iDE;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public int getAnoCriacao() {
        return anoCriacao;
    }
    public void setAnoCriacao(int anoCriacao) {
        this.anoCriacao = anoCriacao;
    }
    public String getIDE() {
        return IDE;
    }
    public void setIDE(String iDE) {
        IDE = iDE;
    }
    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return "[{ nome: " + this.getNome() + ", anoCriacao: " + this.getAnoCriacao() + ", IDE: " + this.getIDE() + " }]" ;
    }
    
} 
