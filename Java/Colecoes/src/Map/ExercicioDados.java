package Map;

import java.util.Map;
import java.util.Random;
import java.util.TreeMap;

public class ExercicioDados {
    public static void main(String[] args) {

        Map<Integer, Integer> nums = new TreeMap<>();
        Random rand= new Random();
        for(int i = 0; i != 10; i++){
            nums.put(i, rand.nextInt(100));
        }
        System.out.println(nums);
    }
    
}



// Lance um dado 100 e mostre quantas vezes caiu cada valor
// chave o numero e valor será a contagem