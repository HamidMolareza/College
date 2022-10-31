from typing import List


def selection_sort(numbers: List[int], reverse=False) -> List[int]:
    if len(numbers) < 1:
        return numbers

    values = numbers.copy()

    for i in range(len(values) - 1):
        target_number = values[i]
        target_index = i
        for j in range(i + 1, len(values)):
            if (not reverse and values[j] < target_number) or (reverse and values[j] > target_number):
                target_number = values[j]
                target_index = j
        if target_index != i:
            values[i], values[target_index] = values[target_index], values[i]
    return values


def bubble_sort(numbers: List[int], reverse=False) -> List[int]:
    values = numbers.copy()
    for i in range(len(values) - 1):
        for j in range(i + 1, len(values)):
            if (not reverse and values[i] > values[j]) or (reverse and values[i] < values[j]):
                values[i], values[j] = values[j], values[i]
    return values


def insertion_sort(numbers: List[int], reverse=False) -> List[int]:
    values = numbers.copy()
    for i in range(len(values) - 1):
        for j in range(i + 1, 0, -1):
            if (not reverse and values[j] > values[j - 1]) or (reverse and values[j] < values[j - 1]):
                break
            values[j], values[j - 1] = values[j - 1], values[j]
    return values


def print_list(numbers: List[int]):
    for number in numbers:
        print(number, end=" ")
    print()


def main():
    input()  # num of numbers (skip)
    numbers = list(map(int, input().split()))
    print_list(selection_sort(numbers, True))
    print_list(bubble_sort(numbers, True))
    print_list(insertion_sort(numbers, True))


main()
