from math import floor

def binary_search(num, array):
    lower = 0
    middle = floor(len(array)/2)
    upper = len(array) - 1
    count = 0

    while lower <= upper:
        count += 1
        middle_val = array[middle]
        if num == middle_val:
            return middle, count
        elif num > middle_val:
            lower = middle + 1
            middle = floor((upper - lower)/2) + lower
        else:
            upper = middle - 1
            middle = floor((upper - lower)/2) + lower

    return -1, count

answer = binary_search(-1, range(6400))
print(answer)