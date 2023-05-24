class Solution {
    public String solution(String my_string, String letter) {
        return my_string.replaceAll(letter, "");
    }
}

/*
class Solution {
    public String solution(String my_string, String letter) {
        String[] answer = new String[my_string.length()];
        answer = my_string.split("");

        for (int i = 0; i < answer.length; i++) {
            if (answer[i].equals(letter)) {
                answer[i] = "";
            }
        }

        return String.join("", answer);
    }
}
*/