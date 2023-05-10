function solution(str1, str2) {
    for (let i = 0; i <= str1.length - str2.length; i++) {
        for (let j = i + str2.length; j <= str1.length; j++) {
            if (str1.slice(i, j) === str2) {
                return 1;
            }
        }
    }
    return 2;
}