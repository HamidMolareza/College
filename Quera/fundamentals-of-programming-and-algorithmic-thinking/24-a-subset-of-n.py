_, k = map(int, input().split())
numbers = list(map(int, input().split()))
unique_sorted_numbers = sorted(list(dict.fromkeys(numbers)))

minimum_diff = unique_sorted_numbers[-1]
found = False
for i in range(len(unique_sorted_numbers) - k + 1):
    diff = unique_sorted_numbers[i + k - 1] - unique_sorted_numbers[i]
    if diff < minimum_diff:
        found = True
        minimum_diff = diff

if not found:
    minimum_diff = -1

print(minimum_diff)
