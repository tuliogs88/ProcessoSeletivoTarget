import java.util.Scanner;

public class VerificaFibonacci {
    public static void main(String args[]) {
        Scanner dado = new Scanner(System.in);
        int valor, x, y;
        
        System.out.println("Informe um valor entre 0 a 100: ");
        valor = dado.nextInt();
        if (valor > 0 && valor <= 100){
             x = 0;
             y = 1;
        
             System.out.print(x + " ");
             System.out.print(y + " ");
             
             for (int i = 3 ; i <= 12; i++) {
                int c = x + y;
                while (c <= valor) {
                    System.out.print(c + " ");
                    x = y;
                    y = c;
                    c = x + y;
                    i++;
                    if (c == valor){
                        System.out.println("Número pertence a sequencia");
                    } 
                }
    
             }
             
        } else {
            System.out.println("Por favor, informe um número entre 0 até 100");
        }
        
    }
}
