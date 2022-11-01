# https://quera.org/college/2572/chapter/7175/lesson/25235

from typing import List


def find_suitable_position(numbers: List[int], target: int) -> int:
    if len(numbers) < 1:
        return 0

    begin = 0
    end = len(numbers) - 1
    middle = 0
    while begin <= end:
        middle = (begin + end) // 2
        if target > numbers[middle]:
            begin = middle + 1
        elif target < numbers[middle]:
            end = middle - 1
        elif target == numbers[middle]:
            return middle
    if target >= numbers[middle]:
        return middle + 1
    return middle


def main():
    num_of_query = int(input())
    numbers = []
    for i in range(num_of_query):
        query, number = input().split()
        number = int(number)

        if query == "Add":
            position = find_suitable_position(numbers, number)
            numbers.insert(position, number)
        elif query == "Ask":
            print(numbers[number - 1])
        else:
            raise Exception(f"Query not support: {query}")


if __name__ == '__main__':
    main()
