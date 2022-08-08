public class Robo {

    public Comportamento strategyComportamento;

    public void setStrategyComportamento(Comportamento strategyComportamento) {
        this.strategyComportamento = strategyComportamento;
    }

    public void mover(){
        strategyComportamento.mover();
    }
    
}
