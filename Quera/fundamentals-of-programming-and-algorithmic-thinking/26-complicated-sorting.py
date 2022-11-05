def sort(students):
    values = students.copy()
    for i in range(len(values) - 1):
        for j in range(i + 1, 0, -1):
            if values[j]["average"] < values[j - 1]["average"]:
                break
            if values[j]["average"] == values[j - 1]["average"] and values[j]["num_of_sports"] <= values[j - 1][
                "num_of_sports"]:
                break
            values[j], values[j - 1] = values[j - 1], values[j]
    return values


def main():
    num_of_students = int(input())
    students = []
    for i in range(num_of_students):
        name = input()

        grades = list(map(float, input().split()))
        grades.pop(0)  # The first index is num_of_grades
        average = int(sum(grades) / len(grades))

        num_of_sports = (input().split())[0]  # name of sports is not important
        num_of_sports = int(num_of_sports)

        students.append({"name": name, "average": average, "num_of_sports": num_of_sports})
    result = sort(students)

    for i in range(len(result)):
        print(result[i]["name"])


if __name__ == '__main__':
    main()
