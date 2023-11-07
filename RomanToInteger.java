import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        //Taking user input
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String roman = scan.nextLine();
        scan.close();
        //converting roman to number
        int result = romanToInteger(roman);
        System.out.println("Integer value: " + result);
    }

    public static int romanToInteger(String roman) {
        int result = 0;
          // Keep track of the previous Roman numeral value
          int previousValue = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            char c = roman.charAt(i);
            
            int value = 0;

            switch (c) {
                case 'I':
                    value = 1;
                    break;
                case 'V':
                    value = 5;
                    break;
                case 'X':
                    value = 10;
                    break;
                case 'L':
                    value = 50;
                    break;
                case 'C':
                    value = 100;
                    break;
                case 'D':
                    value = 500;
                    break;
                case 'M':
                    value = 1000;
                    break;
                default:
                    System.err.println("Invalid Roman numeral");
                    System.exit(1);
            }

            if (value < previousValue) {
                // Subtract if the current numeral is smaller than the previous
                result -= value; 
            }
            else {
                // Add if the current numeral is greater than or equal to the previous
                result += value; 
            }
            previousValue = value;
        }
        return result;
    }
}
