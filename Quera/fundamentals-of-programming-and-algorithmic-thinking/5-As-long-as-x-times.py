from typing import List


def get_inputs() -> List[int]:
    result = []
    while True:
        value = int(input())
        if value == 0:
            return result
        result.append(value)


for number in get_inputs():
    for i in range(number):
        print(number)
