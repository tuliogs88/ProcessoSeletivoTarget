import java.util.Scanner;

public class CalculaPercentual {
    public static void main(String args[]) {
        Scanner dado = new Scanner(System.in);
        long SP = 6783643;
        long RJ = 3667866;
        long MG = 2922988;
        long ES = 2716548;
        long outros = 1984953;
        long resultado; 
        long perSP, perRJ, perMG, perES, perOutros;
        
        resultado = SP + RJ + MG + ES + outros;
        perSP = (SP * 100) / resultado;
        perRJ = (RJ * 100) / resultado;
        perMG = (MG * 100) / resultado;
        perES = (ES * 100) / resultado;
        perOutros = (outros * 100) / resultado;
        
        System.out.println("São Paulo obteve: " + perSP + "%");
        System.out.println("Rio de janeiro obteve: " + perRJ + "%");
        System.out.println("Minas Gerais obteve: " + perMG + "%");
        System.out.println("Espirito Santo obteve: " + perES + "%");
        System.out.println("Outros obteve: " + perOutros + "%");
    }
}
