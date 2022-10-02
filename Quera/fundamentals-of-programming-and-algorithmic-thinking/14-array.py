# Array 3 * 4
num_of_rows = 3
num_of_columns = 4
my_list = [[0] * num_of_columns for i in range(num_of_rows)]
print("Array 3 * 4:", my_list)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

# Iterate
my_list = [1, '3', True]
print("Iterate 1:", my_list[0:3:2])  # [1, True]
print("Iterate 2:", my_list[::-1])  # [True, '3', 1]

# Operation
list1 = [1, 2]
list2 = [3, 4]
list1.append(list2)
print("list1.append(list2):", list1)  # [1, 2, [3, 4]]

list1.extend(list2)
print("list1.extend(list2):", list1)  # [1, 2, [3, 4], 3, 4]

list2 = list1 + list2
print("list1 + list2:", list2)  # [1, 2, [3, 4], 3, 4, 3, 4]

my_list = [1, 3, 4]
my_list.insert(0, -1)
print("Insert:", my_list)  # [-1, 1, 3, 4]

my_list.pop(0)
print("pop index 0:", my_list)  # [1, 3, 4]

# Copy values not reference
list1 = [1, 2, 3]
list2 = list1.copy()
list2.pop(1)
print(list1, list2)
