def solution(num_list):
    if len(num_list)>=11:
        return sum(num_list)
    elif len(num_list)<11:
        result = 1
        for num in num_list:
            result*=num
        return result