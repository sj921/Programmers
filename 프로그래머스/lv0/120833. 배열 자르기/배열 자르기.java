import java.util.*;

class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        int[] answer = new int[numbers.length];
        answer = Arrays.copyOfRange(numbers, num1, num2 + 1);        
        return answer;
    }
}



// class Solution {
//     public int[] solution(int[] numbers, int num1, int num2) {
//         int[] answer = new int[num2 - num1 + 1];
        
//         for (int i = num1, j = 0; i <= num2; i++, j++) {
//             answer[j] = numbers[i]; 
//             // System.out.println("j : " + j);
//             // System.out.println("numbers[i] : " + numbers[i]);
//         }   
        
//         return answer;
//     }
// }