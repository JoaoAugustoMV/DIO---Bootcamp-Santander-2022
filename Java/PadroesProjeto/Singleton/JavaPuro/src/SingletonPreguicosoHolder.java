// Criação de uma unica instancia de uma classe e poder recuperar

// Holder: Enclapsula a instancia. É trade safe
public class SingletonPreguicosoHolder{
    
    private static class Holder{
        public static SingletonPreguicosoHolder instancia;

    }
    private SingletonPreguicosoHolder(){ // Construtor privado para permitir uma unica instancia
        super();
    }

    public static SingletonPreguicosoHolder getInstancia(){ // Retorna um objeto da classe SingletonSimples
        if(Holder.instancia == null){ // Só será instanciada uma vez
            Holder.instancia = new SingletonPreguicosoHolder();
        }
        return Holder.instancia;
    }
}