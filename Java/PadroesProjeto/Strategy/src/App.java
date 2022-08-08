public class App {
    public static void main(String[] args) throws Exception {
        Robo robo = new Robo();
        Comportamento normal = new ComportamentoNormal();
        Comportamento Defensivo = new ComportamentoDefensivo();
        Comportamento Agressivo = new ComportamentoAgressivo();
        robo.setStrategyComportamento(Agressivo);
        robo.mover();

    }
}
