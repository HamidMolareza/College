NOT_RESPONSIBLE = -1
MAXIMUM_DEGREE = 10


def dry(current_state: int, degree: int) -> int:
    result = current_state - degree
    if result < 0:
        result = 0
    return result


def main():
    num_of_towels, num_of_servants = map(int, input().split())
    towel_states = [0] * num_of_towels
    servants = [NOT_RESPONSIBLE] * num_of_servants

    while True:
        line = input()
        if line == "put an end to my misery":
            break

        inputs = line.split()
        servant_index = int(inputs[0]) - 1
        order = inputs[1]
        towel_index = servants[servant_index]

        if (order == "give" or order == "output" or order == "dry") and towel_index == NOT_RESPONSIBLE:
            print("no towel has been assigned to me.")
            continue

        if order == "give":
            if towel_states[towel_index] == 0:
                towel_states[towel_index] = MAXIMUM_DEGREE
                print("ok")
            else:
                print("impossible")
            continue

        if order == "output":
            print(towel_states[towel_index])
        elif order == "track":
            servants[servant_index] = int(inputs[2]) - 1
        elif order == "dry":
            towel_states[towel_index] = dry(towel_states[towel_index], int(inputs[2]))


if __name__ == '__main__':
    main()
