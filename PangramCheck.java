import java.util.Scanner;

public class PangramCheck {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scan.nextLine();
        scan.close();

        if (isPangram(input)) {
            System.out.println("Sentence is a pangram");
        } else {
            System.out.println("Sentence is not a pangram");
        }
    }

    public static boolean isPangram(String input) {
        // Assuming the input is in lowercase
        boolean[] alphabet = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            if ('a' <= c && c <= 'z') {
                // Mark the corresponding alphabet character as encountered
                alphabet[c - 'a'] = true;
            }
        }

        // Check if all alphabet characters have been encountered
        for (boolean letter : alphabet) {
            if (!letter) {
               // If any letter is missing, it's not a pangram
               return false;
            }
        }

        // All letters have been encountered, it's a pangram
        return true;
    }
}
