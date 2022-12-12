from typing import List


def is_sequence_exist(sequence: List[int], k: int, minimum: int):
    consecutive_elements = 0
    tmp = len(sequence) - k
    for i in range(len(sequence)):
        if sequence[i] >= minimum:
            consecutive_elements += 1
        else:
            consecutive_elements = 0
        if consecutive_elements == k:
            return True
        if consecutive_elements <= i - tmp:
            return False


def main():
    _, k = map(int, input().split())
    sequence = list(map(int, input().split()))
    sorted_unique_sequence = sorted(set(sequence))

    left = 0
    right = len(sorted_unique_sequence) - 1
    while left < right:
        middle_index = (left + right + 1) // 2
        if is_sequence_exist(sequence, k, sorted_unique_sequence[middle_index]):
            left = middle_index
        else:
            right = middle_index - 1
    print(sorted_unique_sequence[left])


if __name__ == '__main__':
    main()
