# https://quera.org/college/2572/chapter/7136/lesson/33956/
from typing import List


def operate(base_list: List[int], operation: str) -> List[int]:
    temp = operation.split()
    if len(temp) == 2 and temp[0] == '-':
        base_list.pop(int(temp[1]) - 1)
    elif len(temp) == 3 and temp[0] == '+':
        base_list.insert(int(temp[1]) - 1, int(temp[2]))
    return base_list


def print_list(target: List[any]):
    if len(target) < 1:
        print("EMPTY")
    else:
        print(' '.join(map(str, target)))


def main():
    num_of_changes = int(input())

    operations = []
    for i in range(num_of_changes):
        operations.append(input())

    result = []
    for operation in operations:
        result = operate(result, operation)
        print_list(result)


main()
