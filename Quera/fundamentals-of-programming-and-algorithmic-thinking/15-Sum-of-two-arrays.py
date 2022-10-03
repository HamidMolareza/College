from typing import List


def get_array(num_of_rows: int):
    result = []
    for i in range(num_of_rows):
        row = list(map(int, input().split()))
        result.append(row)
    return result


def sum_arrays(array1: List[List[int]], array2: List[List[int]]) -> List[List[int]]:
    num_of_rows = len(array1)
    num_of_columns = len(array1[0])
    result = [[0] * num_of_columns for _ in range(num_of_rows)]

    for row in range(num_of_rows):
        for column in range(num_of_columns):
            result[row][column] = array1[row][column] + array2[row][column]

    return result


def print_array(array: List[List[int]]):
    for row in range(len(array)):
        print(' '.join(map(str, array[row])))


def main():
    num_of_rows, num_of_columns = map(int, input().split())
    array1 = get_array(num_of_rows)
    array2 = get_array(num_of_rows)

    result = sum_arrays(array1, array2)
    print_array(result)


main()
