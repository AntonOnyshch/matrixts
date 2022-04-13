**Matrixts is under active development. You may encounter significant changes.**

# Matrixts

**Matrixts** is a small library for matrices written in TypeScript with *zero dependencies!*

It's just a class with static methods which cover almost all operations over matrices you need to work with.

# Table of content
[Features](#features)

## Features

- Check if matrices are equal
- Getting *identity/unit* matrices with
    - Built in; dimension 2x2, 3x3
    - Any dimension you may want
- Multiplication
    - Built in; multiplication 3x1, 2x2, 3x3
    - Multiplications of any dimension
- Addition
- Subtraction
- Power
- Transposition
- Exclude / Minor
- Determinants
- Inverse

Suppose we have some arbitrary matrices:
```typescript
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
export const m4x4_1 = [
    [1, -5, 2, 5],
    [2, 4, -1, 2],
    [4, 3, 9, 1],
    [1, 2, 3, 4]
]
```
1. **Equality**

    ```typescript
    return Matrix.equal(m3x3_1, m3x3_1);
    // Result: true
    ```

2. **Unit matrices**

    - Unit 2x2
    ```typescript
    Matrix.getUnit2x2();
    // Result:
    <!-- [
        [1, 0],
        [0, 1]
    ] -->
    ```
    - Unit 3x3
    ```typescript
    Matrix.getUnit3x3();
    // Result:
    <!-- [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ] -->
    ```
    - Arbitrary unit matrix
    ```typescript
    Matrix.getUnit(4);
    // Result:
    <!-- [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0]
        [0, 0, 0, 1]
    ] -->
    ```

3. **Multiplication**

    - To number
    ```typescript
    Matrix.mulToN(m3x3_1, 2);
    // Result:
    <!-- [
        [8, 14, 4],
        [0, -8, 2],
        [18, -6, 10]
    ] -->
    ```
    - Multiplication
    ```typescript
    Matrix.mul(m3x3_1, m3x3_2);
    // Result:
    <!-- [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ] -->
    ```
    - Multiplication 2x2
    ```typescript
    Matrix.mul2x2(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [4, 14],
        [-0, -16]
    ] -->
    ```
    - Multiplication 3x3
    ```typescript
    Matrix.mul3x3(m3x3_1, m3x3_2);
    // Result:
    <!-- [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ] -->
    ```
    - Multiplication 3x3 to vector
    ```typescript
    Matrix.mul3x1(m3x3_1, v);
    // Result:
    [[65, 12, 22]]
    ```

4. **Addition**

    ```typescript
    Matrix.add(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [5, 2],
        [2, 0]
    ] -->
    ```

5. **Subtraction**

    ```typescript
    Matrix.sub(m2x2_1, m2x2_2);
    // Result:
    <!-- [
        [3, 12],
        [-2, -8]
    ] -->
    ```

6. **Power**

    ```typescript
    Matrix.power(m2x2_1, 2)
    // Result:
    <!-- [
        [16, 49],
        [0, 16]
    ] -->
    ```

7. **Transposition**

    ```typescript
    Matrix.trans(m3x2_1)
    // Result:
    <!-- [
        [1, 2],
        [-5, 4],
        [2, -1]
    ] -->
    ```

8. **Exclude**
    ```typescript
    Matrix.exclude(m4x4_1, 2, 2);
    // Result: 
    [
        [1, 2, 5]
        [4, 9, 1]
        [1, 3, 4]
    ]
    ```

9. **Determinants**

    - Determinant 2x2

    ```typescript
    Matrix.determ2x2(m2x2_1)
    // Result: -16
    ```

    - Determinant 3x3

    ```typescript
    Matrix.determ3x3(m3x3_1)
    // Result: 67
    ```
    
    - Determinant 4x4

    ```typescript
    Matrix.determ4x4(m4x4_1)
    // Result: 674
    ```
10. Inverse
    - Inverse 2x2
    ```typescript
    Matrix.inverse2x2(m2x2_1)
    // Result:
    <!-- [
       [0.25, 0.4375],
       [0,	-0.25],
    ] -->
    ```

