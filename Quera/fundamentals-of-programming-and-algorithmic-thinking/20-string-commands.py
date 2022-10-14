def get_commands():
    num_of_commands = int(input())
    commands = []
    for i in range(num_of_commands):
        commands.append(input())
    return commands


def count(string: dict, search: str) -> int:
    counter = 0
    for i in range(len(string) - len(search) + 1):
        if string[i] != search[0]:
            continue
        found = True
        for j in range(1, len(search)):
            if string[i + j] != search[j]:
                found = False
                break
        if found:
            counter += 1

    return counter


def main():
    strings: dict = {}
    for command in get_commands():
        request, index, length, string = command.split()
        if request == '1':
            if strings.get(index) is None:
                strings[index] = string
            else:
                strings[index] += string
        elif request == '2':
            print(count(strings[index], string))


main()
