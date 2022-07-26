package dio.poo.Metodos.Exercicios;

public class Sobrecarga {

    double calculaArea(double lado){ // Quadrado
        return lado*lado;
    }
    
    double calculaArea(double largura, double altura){ // Retangulo
        return  largura*altura;
    }
    
    double calculaArea(double baseMenor, double baseMaior, double altura){
        return ((baseMenor + baseMaior) * altura) / 2;
    }
   
  
    public static void main(String[] args) {
        Sobrecarga objeto = new Sobrecarga();
        System.out.println("Area do quadrado: " + objeto.calculaArea(5));
        System.out.println("Area do retangulo: " + objeto.calculaArea(5, 8));
        System.out.println("Area do trapezio: " + objeto.calculaArea(7, 8, 9));
         
    }

}    
