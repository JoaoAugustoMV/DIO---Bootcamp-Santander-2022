// Criação de uma unica instancia de uma classe e poder recuperar

public class SingletonApresado{
    private static SingletonApresado  instancia = new SingletonApresado(); // Instancia na hora da criação

    private SingletonApresado(){ // Construtor privado para permitir uma unica instancia
        super();
    }

    public static SingletonApresado getInstancia(){ // Retorna um objeto da classe SingletonSimples
        return instancia;
    }
}