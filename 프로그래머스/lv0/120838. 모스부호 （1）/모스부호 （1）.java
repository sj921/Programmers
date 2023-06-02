class Solution {
    public String solution(String letter) {
        String answer = "";
        String[] morseArr = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        String[] letterArr = letter.split(" ");
        for (String s : letterArr) {
            for (int i = 0; i < morseArr.length; i++) {
                if (s.equals(morseArr[i])) {
                    answer += Character.toString(i + 'a');
                }
            }
        }      
        return answer;
    }
}