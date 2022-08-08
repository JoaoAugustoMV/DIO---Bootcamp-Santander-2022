// Criação de uma unica instancia de uma classe e poder recuperar

public class SingletonPreguicoso{
    private static SingletonPreguicoso instancia;

    private SingletonPreguicoso(){ // Construtor privado para permitir uma unica instancia
        super();
    }

    public static SingletonPreguicoso getInstancia(){ // Retorna um objeto da classe SingletonSimples
        if(instancia == null){ // Só será instanciada uma vez
            instancia = new SingletonPreguicoso();
        }
        return instancia;
    }
}