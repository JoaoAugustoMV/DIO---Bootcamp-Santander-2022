package Excecoes;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;

import javax.swing.JOptionPane;

public class checked {
    public static void main(String[] args){
        String nomeArquivo = "jogos.txt";
        try {
            imprimirArquivo(nomeArquivo);
        } catch (FileNotFoundException e) {
            JOptionPane.showMessageDialog(null, "Arquivo não encontrado, verifique o nome do arquivo");
           
        } catch (IOException e) {
            JOptionPane.showMessageDialog(null, "Ocorreu um erro inesperado! Favor tente mais tarde");
           
        }
       
    } // end main
    public static void imprimirArquivo(String nomeArquivo) throws IOException{ // Lança a exceção para a chamada do metodo
        File arquivo = new File(nomeArquivo);

        BufferedReader leitorArquivo = new BufferedReader(new FileReader(arquivo.getName())); // FileNotFound
        String linha = leitorArquivo.readLine();

        BufferedWriter escritorArquivo = new BufferedWriter(new OutputStreamWriter(System.out));

        do{
            escritorArquivo.write(linha);
            escritorArquivo.newLine();
            linha = leitorArquivo.readLine();
        } while(linha != null);

        escritorArquivo.flush(); // Descarregar
        leitorArquivo.close();


    } // end imprimirArquivo
}
