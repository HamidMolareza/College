num_of_operations = int(input())

balls_dict = {}
for i in range(num_of_operations):
    operator, ball_index = input().split()

    count: int = balls_dict.get(ball_index)
    if count is None:
        count = 0

    if operator == '?':
        print(count)
    elif operator == '+':
        balls_dict.update({ball_index: count + 1})
    else:
        print("Operation is not valid.")
