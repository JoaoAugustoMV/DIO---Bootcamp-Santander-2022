package dio.poo.HeracaUpDownCast;

public class run {
    
    public static void main(String[] args) {
        // Carro fiat = new Carro("azul", "Uno", 45);
        // double precoCombustivel = 6.8;
        // System.out.println("O modelo " + fiat.modelo + " da cor " + fiat.cor + " tem capacidade para " + fiat.capacidadeTanque + "L de combustivel");
        // System.out.println("Com a gasolina a "+ precoCombustivel + " R$, custará " + fiat.totalEncherTanque(precoCombustivel) + " R$");

        Funcionario Kevin = new Funcionario();

        Funcionario Michael = new Gerente();
        Funcionario Rita = new Faxineiro();
        Funcionario Jim = new Vendedor();
        
        Funcionario MichaelFunc = new Gerente(); // Upcast

        Faxineiro RitaFax = (Faxineiro) new Funcionario(); // DownCast, vai dar erro

    }
}
