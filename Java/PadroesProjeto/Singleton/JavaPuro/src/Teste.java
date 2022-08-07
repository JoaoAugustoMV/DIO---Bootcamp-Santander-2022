public class Teste {
    public static void main(String[] args) {
        // Sempre será instanciada apenas uma vez
        SingletonPreguicoso preguicoso = SingletonPreguicoso.getInstancia();
        System.out.println(preguicoso);
        preguicoso = SingletonPreguicoso.getInstancia();
        System.out.println(preguicoso);

        SingletonPreguicosoHolder preguicosoHolder = SingletonPreguicosoHolder.getInstancia();
        System.out.println(preguicosoHolder);
        preguicosoHolder = SingletonPreguicosoHolder.getInstancia();
        System.out.println(preguicosoHolder);

        SingletonApresado apresado = SingletonApresado.getInstancia();
        System.out.println(apresado);
        apresado = SingletonApresado.getInstancia();
        System.out.println(apresado);
    }
}
