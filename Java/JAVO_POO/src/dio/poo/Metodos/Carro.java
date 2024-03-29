package dio.poo.Metodos;
 
class Carro {
    String cor;
    String modelo;
    int capacidadeTanque;

    Carro(){ // Assinatura básica(sem parametros)

    }

    Carro(String cor, String modelo, int capacidadeTanque){ // Assinatura com parametros
        this.cor = cor;
        this.modelo = modelo;
        this.capacidadeTanque = capacidadeTanque;
    }

    void setCor(String cor){
        this.cor = cor;
    }

    String getCor(){
        return cor;
    }

    void setModelo(String modelo){
        this.modelo = modelo;
    }

    String getModelo(){
        return modelo;
    }

    void setCapacidadeTanque(int capacidadeTanque){
        this.capacidadeTanque = capacidadeTanque;
    }

    int getCapacidadeTanque(){
        return capacidadeTanque;
    }

    double totalEncherTanque(double preco){
        return capacidadeTanque * preco;
    }
}
