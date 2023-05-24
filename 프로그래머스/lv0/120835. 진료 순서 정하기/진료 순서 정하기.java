class Solution {
    public int[] solution(int[] emergency) {
        int[] answer = new int[emergency.length];       
        for (int i = 0; i < emergency.length; i++) {
            answer[i]++;    // answer[i]를 1로 초기화
            for (int j = 0; j < emergency.length; j++) {
                if (emergency[i] < emergency[j]) { // 응급도가 더 낮은 경우 응급도의 크기를 증가
                    answer[i]++;
                } 
            }
        }                    
        return answer;
    }
}