import java.util.*;

public class Main{
    public static void main(String args[]) {
        // Scanner sc = new Scanner(System.in);
        // String name = sc.nextLine();
        // System.out.println(name);
        // nextLine
        // nextInt
        // nextfloot
        
        // sum(args);
        // comapir(args);
        // check(args);
        // printTenTimeHello(args);
        table(args);
    }
    public static void sum(String args[]){
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        int sum = a + b;
        System.out.println(sum);
    }

    public static void comapir(String args[]){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();

        if(a==b){
            System.out.println("A and B are equle");
        }else if(a>b){
            System.out.println("A is greater B");
        }else{
            System.out.println("B is greater then A");
        }
    }

    public static void check(String args[]){
        Scanner sc = new Scanner(System.in);
        int button = sc.nextInt();
        switch(button){
            case 1: System.out.println("Hello");
            break;
            case 2: System.out.println("Namste");
            break;
            case 3: System.out.println("Sashree Call");
            break;
            default: System.out.println("Invalied");
            break;
        }
    }

    public static void printTenTimeHello(String args[]){

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        for(int i =0; i<a; i++){
            System.out.println("Hello world");
        }
    }

    public static void table(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i =1 ;i<=10; i++){
            System.out.println(i*n);
        }
    }
}
