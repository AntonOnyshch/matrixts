**Matrixts is under active development. You may encounter significant changes.**

# Matrixts

**Matrixts** is a small library for matrices written in TypeScript with *zero dependencies!*

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
- Subtraction
- Power
- Transposition

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
<details>
    <summary>Equality</summary>

    ```
    return Matrix.equal(m3x3_1, m3x3_1);
    // Result: true
    ```
</details>


<details>
    <summary>Unit matrices</summary>

    - Unit 2x2
    ```
    Matrix.getUnit2x2();
    // Result:
    <!-- [
        [1, 0],
        [0, 1]
    ] -->
    ```
    - Unit 3x3
    ```
    Matrix.getUnit3x3();
    // Result:
    <!-- [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ] -->
    ```
    - Arbitrary unit matrix
    ```
    Matrix.getUnit(4);
    // Result:
    <!-- [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0]
        [0, 0, 0, 1]
    ] -->
    ```
</details>


<details>
    <summary>Multiplication</summary>

    - To number
    ```
    Matrix.mulToN(m3x3_1, 2);
    // Result:
    <!-- [
        [8, 14, 4],
        [0, -8, 2],
        [18, -6, 10]
    ] -->
    ```
    - Multiplication
    ```
    Matrix.mul(m3x3_1, m3x3_2);
    // Result:
    <!-- [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ] -->
    ```
    - Multiplication 2x2
    ```
    Matrix.mul2x2(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [4, 14],
        [-0, -16]
    ] -->
    ```
    - Multiplication 3x3
    ```
    Matrix.mul3x3(m3x3_1, m3x3_2);
    // Result:
    <!-- [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ] -->
    ```
    - Multiplication 3x3 to vector
    ```
    Matrix.mul3x1(m3x3_1, v);
    // Result:
    [[65, 12, 22]]
    ```
</details>


<details>
    <summary>Addition</summary>

    ```
    Matrix.add(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [5, 2],
        [2, 0]
    ] -->
    ```
</details>


<details>
    <summary>Subtraction</summary>

    ```
    Matrix.sub(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [3, 12],
        [-2, -8]
    ] -->
    ```
</details>


<details>
    <summary>Power</summary>

    ```
    Matrix.power(m2x2_1, 2)
    // Result:
    <!-- [
        [16, 49],
        [0, 16]
    ] -->
    ```
</details>


<details>
    <summary>Transposition</summary>

    ```
    Matrix.trans(m3x2_1)
    // Result:
    <!-- [
        [1, 2],
        [-5, 4],
        [2, -1]
    ] -->
    ```
</details>


<details>
    <summary>Determinants</summary>

    - Determinant 2x2

    ```javascript
    Matrix.determ(m2x2_1)
    // Result: -16
    ```
    
    - Determinant 3x3

    ```javascript
    Matrix.determ(m3x3_1)
    // Result: 67
    ```

</details>
