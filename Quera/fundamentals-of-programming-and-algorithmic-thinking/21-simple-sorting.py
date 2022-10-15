from typing import List


def selection_sort(numbers: List[int], reverse=False) -> List[int]:
    if len(numbers) < 1:
        return numbers

    for i in range(len(numbers) - 1):
        target_number = numbers[i]
        target_index = i
        for j in range(i + 1, len(numbers)):
            if (not reverse and numbers[j] < target_number) or (reverse and numbers[j] > target_number):
                target_number = numbers[j]
                target_index = j
        if target_index != i:
            numbers[i], numbers[target_index] = numbers[target_index], numbers[i]
    return numbers


def main():
    input()  # num of numbers (skip)
    numbers = list(map(int, input().split()))
    print(selection_sort(numbers, False))


main()
