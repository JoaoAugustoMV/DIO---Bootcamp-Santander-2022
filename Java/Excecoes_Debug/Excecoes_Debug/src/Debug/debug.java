package Debug;

public class debug {


    public static void main(String[] args) {
        System.out.println("Start main");
        a();
        System.out.println("End main");
    }
    
    private static void a() {
        Thread.dumpStack(); // Stack Trace(Rastro da fila)
        System.out.println("Start a");
        b();
        System.out.println("End a");
    }

    private static void b() {
        System.out.println("Start b");
        for(int i = 0; i < 5; i++) System.out.println(i);
        c();
        System.out.println("End b");
    }

    private static void c() {
        System.out.println("Start c");
        //Thread.dumpStack(); // Stack Trace(Rastro da fila)
        System.out.println("End c");
    }
}
