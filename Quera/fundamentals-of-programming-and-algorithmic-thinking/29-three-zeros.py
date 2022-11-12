def solution1(sequence: str, limit: int) -> int:
    if len(sequence) >= limit:
        return 0
    if len(sequence) == limit - 1:
        if len(sequence) >= 2 and sequence[-1] == "0" and sequence[-2] == "0":
            return 1
        else:
            return 2

    if len(sequence) >= 2 and sequence[-1] == "0" and sequence[-2] == "0":
        sequence += "1"
        return solution1(sequence, limit)

    count = 0
    count += solution1(sequence + "0", limit)
    count += solution1(sequence + "1", limit)
    return count


def solution2(x):
    if x == 0:
        return 1
    if x == 1:
        return 2
    if x == 2:
        return 4
    return solution2(x - 1) + solution2(x - 2) + solution2(x - 3)


n = int(input())
print(solution1("", n))
print(solution2(n))
