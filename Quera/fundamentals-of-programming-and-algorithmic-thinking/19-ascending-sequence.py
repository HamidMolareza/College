_, num_of_ascending_sequence = map(int, input().split())
sequence = [int(x) for x in input().split()]

for i in range(len(sequence) - num_of_ascending_sequence + 1):
    is_ascending = True
    for j in range(i + 1, num_of_ascending_sequence + i):
        if sequence[j] < sequence[j - 1]:
            is_ascending = False
            break
    if is_ascending:
        print(f"{i} to {i + num_of_ascending_sequence - 1}")
