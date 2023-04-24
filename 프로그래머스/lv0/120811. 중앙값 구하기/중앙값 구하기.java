import java.util.*;

class Solution {
    public int solution(int[] array) {        
        int tmp = 0;
        for (int i = 0; i < array.length; i++) {
            for (int j = i+1; j < array.length; j++) {
                if (array[j] > array[i]) {
                    tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
            }
        }
        int center = array.length / 2;
        return array[center];
    }
}