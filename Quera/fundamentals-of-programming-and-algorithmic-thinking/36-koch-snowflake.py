import math
from typing import List

sqrt3_6 = math.sqrt(3) / 6


class Point:
    x: float = 0.0
    y: float = 0.0

    def __init__(self, x: float = 0, y: float = 0):
        self.x = x
        self.y = y

    def __truediv__(self, number: float):
        return Point(self.x / number, self.y / number)

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __mul__(self, number: float):
        return Point(self.x * number, self.y * number)


class Triangle:
    A: Point
    B: Point
    C: Point

    def __init__(self, a: Point, b: Point, c: Point):
        self.A = a
        self.B = b
        self.C = c


def koch_snowflake_triangle(triangle: Triangle) -> List[Triangle]:
    return [
        koch_snowflake_line(triangle.A, triangle.B),
        koch_snowflake_line(triangle.B, triangle.C),
        koch_snowflake_line(triangle.C, triangle.A)
    ]


def koch_snowflake_line(a: Point, b: Point) -> Triangle:
    u = Point(b.x - a.x, b.y - a.y)
    u3 = u / 3

    v = Point(a.y - b.y, b.x - a.x)
    p = u3 + a
    q = a + (u / 2) + (v * sqrt3_6)
    r = a + (u3 * 2)

    return Triangle(p, q, r)


def main():
    n = int(input())
    triangles = [Triangle(Point(0, 0), Point(500, 1000 * math.sqrt(3) / 2), Point(1000, 0))]

    for i in range(n):
        new_triangles = []
        for triangle in triangles:
            new_triangles.extend(koch_snowflake_triangle(triangle))
        triangles = new_triangles

    for triangle in triangles:
        print(round(triangle.B.x, 6), round(triangle.B.y, 6))


if __name__ == '__main__':
    main()
