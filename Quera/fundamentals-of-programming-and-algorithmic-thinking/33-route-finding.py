from typing import List


def get_matrix(num_of_rows: int) -> List[List[int]]:
    matrix = []
    for i in range(num_of_rows):
        line = []
        for cell in input():
            if cell == ".":
                line.append(-1)
            else:
                line.append(0)
        matrix.append(line)
    return matrix


def solve(matrix: List[List[int]], x: int, y: int):
    num_of_rows, num_of_columns = len(matrix), len(matrix[0])
    if x >= num_of_columns or y >= num_of_rows:
        return 0
    if matrix[y][x] >= 0:
        return matrix[y][x]
    if x + 1 == num_of_columns and y + 1 == num_of_rows:
        return 1

    count = 0
    count += solve(matrix, x + 1, y)
    count += solve(matrix, x, y + 1)
    matrix[y][x] = count
    return count


def main():
    num_of_rows, num_of_columns = map(int, input().split())
    matrix = get_matrix(num_of_rows)
    solve(matrix, 0, 0)
    mode = 10 ** 9 + 7
    print(matrix[0][0] % mode)


if __name__ == '__main__':
    main()
