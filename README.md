**Matrixts is under active development. You may encounter significant changes.**

# Matrixts

**Matrixts** is a small library for matrices written in TypeScript with *zero dependecies!*

It's just a class with static methods wich cover almost all operation over matrices you need to work with.

# Table of content
[Features](#features)

## Features

- Check if matrices are equal
- Getting *unit* matrices with
    - Built in; dimension 2x2, 3x3
    - Any dimension you may want
- Multiplication
    - Built in; multiplication 3x1, 2x2, 3x3
    - Multiplications of any dimension
- Addition


Suppose we have some arbitrary matrices:
```
export const m2x2_1 = [
    [4, 7],
    [0, -4]
]
export const m2x2_2 = [
    [1, -5],
    [2, 4]
]

export const m3x3_1 = [
    [4, 7, 2],
    [0, -4, 1],
    [9, -3, 5]
]
export const m3x3_2 = [
    [1, -5, 2],
    [2, 4, -1],
    [4, 3, 9]
]
```

1. Equality
```
return Matrix.equal(m3x3_1, m3x3_1);
// Result: true
```

2. Unit matrices
    1. Unit 2x2
    ```
    Matrix.getUnitMatrix2x2();
    // Result:
    <!-- [
        [1, 0],
        [0, 1]
    ] -->
    ```
    2. Unit 3x3
    ```
    Matrix.getUnitMatrix3x3();
    // Result:
    <!-- [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ] -->
    ```
    3. Arbitrary unit matrix
    ```
    Matrix.getUnitMatrix(4);
    // Result:
    <!-- [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0]
        [0, 0, 0, 1]
    ] -->
    ```
3. Multiplication
    1. To number
    ```
    Matrix.multiplyToN(m3x3_1, 2);
    // Result:
    <!-- [
        [8, 14, 4],
        [0, -8, 2],
        [18, -6, 10]
    ] -->
    ```
    2. Multiply
    ```
    Matrix.multiply(m3x3_1, m3x3_2);
    // Result:
    <!-- [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ] -->
    ```
    3. Multiply 2x2
    ```
    Matrix.multiply2x2(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [4, 14],
        [-0, -16]
    ] -->
    ```
    4. Multiply 3x3
    ```
    Matrix.multiply3x3(m3x3_1, m3x3_2);
    // Result:
    <!-- [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ] -->
    ```
    5. Multiply 3x3 to vector
    ```
    Matrix.multiply3x1(m3x3_1, v);
    // Result:
    [[65, 12, 22]]
    ```
4. Addition
```
    Matrix.add(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [5, 2],
        [2, 0]
    ] -->
```