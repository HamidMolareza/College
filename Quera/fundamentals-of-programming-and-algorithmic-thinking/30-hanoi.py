i = 1


def hanoi(from_bar, to_bar, help_bar, n):
    global i
    if n == 1:
        print(f"{i} {from_bar} {to_bar}")
        i += 1
    else:
        hanoi(from_bar, help_bar, to_bar, n - 1)
        print(f"{i} {from_bar} {to_bar}")
        i += 1
        hanoi(help_bar, to_bar, from_bar, n - 1)


n = int(input())
hanoi("A", "B", "C", n)
