package dio.poo.Polimorfismo;

public class run {
    public static void main(String[] args) {
        
        ClassePai[] classes = new ClassePai[]{new ClassePai(), new ClasseFilho1(), new ClasseFilho2()};

        for (ClassePai classe : classes) {
            System.out.print("Classe: " + classe.getClass().getSimpleName() + " => ");
            classe.metodo1();
        }
        for (ClassePai classe : classes) {
            System.out.print("Classe: " + classe.getClass().getSimpleName() + " => ");
            classe.metodo2();
        }
    }
}
