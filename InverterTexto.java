import java.util.Scanner;

public class InverterTexto {
    public static void main(String args[]) {
        Scanner dado = new Scanner(System.in);
        System.out.println("Digite um texto");
        String texto = dado.next();
        String pronto = "";
        
        for(int i = texto.length() - 1; i >= 0; i--){
            pronto = pronto + texto.charAt(i);
        }
        
        System.out.println(pronto);
    }
}
