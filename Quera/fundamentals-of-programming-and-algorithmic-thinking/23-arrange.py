from typing import List


def get_inputs(num_of_lines: int) -> List[str]:
    result = []
    for i in range(num_of_lines):
        result.append(input())
    return result


def group_by_same_words(words: List[str], same_char_length: int) -> dict:
    result = {}
    for word in words:
        target = word[0: same_char_length]
        if result.get(target) is None:
            result[target] = [word]
        else:
            result[target].append(word)
    return result


def maximum_same_words(group: dict):
    maximum = 0
    for key in group:
        value_length = len(group.get(key))
        if maximum < value_length:
            maximum = value_length
    return maximum


def main():
    num_of_words, num_of_same_chars = map(int, input().split())
    words = get_inputs(num_of_words)
    group = group_by_same_words(words, num_of_same_chars)
    maximum = maximum_same_words(group)
    print(maximum)


if __name__ == '__main__':
    main()
