package Excecoes;

import javax.swing.JOptionPane;

public class unchecked {
    public static void main(String[] args) {
        boolean inputValido = false;

        do {
            String a = JOptionPane.showInputDialog("Numerador: ");
            String b = JOptionPane.showInputDialog("Denominador");
            try{
                int resultado = dividir(Integer.parseInt(a), Integer.parseInt(b));
                JOptionPane.showMessageDialog(null, "Resultado: " + resultado);
                inputValido = true;
            } catch (NumberFormatException e){
                System.out.println("catch");
                JOptionPane.showMessageDialog(null, "Entrada invalida, informe um numero inteiro");
                JOptionPane.showMessageDialog(null, e.getMessage());
                e.printStackTrace();
            } catch (ArithmeticException e){
                JOptionPane.showMessageDialog(null, "Operação invalida, não é possivel dividir por 0");
                JOptionPane.showMessageDialog(null, e.getMessage());
                
            } finally {
                System.out.println("Finally");
            }
        } while(!inputValido);
    }

    private static int dividir(int a, int b) {
        return a / b;
    }
}
