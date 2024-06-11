import java.util.*;
public class AllPattner {
    public static void main(String args[]){
        // squre(args);
        // triangle(args);
        // reverseTriangle(args);
        // dimond(args);
        // zeroOnePattern(args);
        zeroOnePatternM1(args);
    }

    public static void squre(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i =0; i<n; i++){
            String name="";
            for(int j =0; j<n; j++){
              name = name+"*";
            }
            System.out.println(name);
        }
    }

    public static void triangle(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i =1 ;i<=n; i++){
            String name="";
            for(int j =0; j<i; j++){
              name = name+"*";
            }
            System.out.println(name);
        }
    }

        public static void reverseTriangle(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i =n ;i>0; i--){
            String name="";
            for(int j =0; j<i; j++){
              name = name+"*";
            }
            System.out.println(name);
        }
    }

    public static void dimond(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i =1 ;i<=n; i++){
            String name="";
            for(int j =0; j<i/2; j++){
              name = name+"*";
            };
            for(int j =i/2; j<i; j++){
                name = name+" ";
                };
            System.out.println(name);
        }
    }

    public static void zeroOnePattern(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=0; i<n; i++){
            String num = "";
            for(int j=0;j<i; j++){
                if(i%2==0){
                    if(j%2==0){
                        num =num+"0";
                    }else{
                        num =num+"1";
                    }
                }
                else{
                    if(j%2==0){
                        num =num+"1";
                    }else{
                        num =num+"0";
                    }
                }
            }
            System.out.println(num);
        }
    }

    public static void zeroOnePatternM1(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for(int i=0; i<n; i++){
            for(int j=0;j<i; j++){
                int sum =i+j;
                if(sum%2!=0){
                    System.out.print("1 ");
                }
                else{
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
    }
}