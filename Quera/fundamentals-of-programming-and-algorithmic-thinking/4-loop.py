from typing import List


def get_inputs() -> List[int]:
    result = []
    while True:
        value = int(input())
        if value == 0:
            return result
        result.append(value)


numbers = get_inputs()
summation = sum(numbers)

print(summation)
