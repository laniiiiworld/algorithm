class Solution {
    public int solution(int order) {
        int cnt=0;
        String number = String.valueOf(order);
        
        for (int i =0; i<number.length();i++){
            if((int)number.charAt(i) %3 ==0 && number.charAt(i) != '0'){
                    cnt++;
            }
        }
        return cnt;
    }
}