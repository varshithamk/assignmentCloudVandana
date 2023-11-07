import java.util.Random;

public class Shuffle {
    public static void main(String[] args) {
        //creating array
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        //calling method to shuffle array
        shuffleArray(array);
        //printing numbers
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        //creating object
        Random random = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
