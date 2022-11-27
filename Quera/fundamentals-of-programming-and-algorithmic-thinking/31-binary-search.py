from typing import List


def get_search_numbers(num_of_queries: int) -> List[int]:
    result = []
    for i in range(num_of_queries):
        _, number = input().split()
        result.append(int(number))
    return result


def is_exist(numbers: List[int], target: int) -> bool:
    begin = 0
    end = len(numbers) - 1

    while begin <= end:
        middle = (begin + end) // 2
        if target == numbers[middle]:
            return True
        elif target < numbers[middle]:
            end = middle - 1
        elif target > numbers[middle]:
            begin = middle + 1
    return False


def main():
    _, num_of_queries = map(int, input().split())
    numbers = list(map(int, input().split()))
    search_numbers = get_search_numbers(num_of_queries)

    for target in search_numbers:
        if is_exist(numbers, target):
            print("1")
        else:
            print("0")


if __name__ == '__main__':
    main()
