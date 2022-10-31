# https://quera.org/college/2572/chapter/7140/lesson/104232

from typing import List


def binary_search(numbers: List[int], target: int) -> bool:
    begin = 0
    end = len(numbers) - 1
    while begin <= end:
        middle = (begin + end) // 2
        if numbers[middle] == target:
            return True
        elif target > numbers[middle]:
            begin = middle + 1
        else:
            end = middle - 1
    return False


def main():
    _, num_of_query = map(int, input().split())
    numbers = list(map(int, input().split()))

    for i in range(num_of_query):
        _, target = input().split()
        target = int(target)
        result = binary_search(numbers, target)
        if result:
            print("1")
        else:
            print("0")


if __name__ == '__main__':
    main()
