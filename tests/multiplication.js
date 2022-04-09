import Matrix from '../lib/matrix.js';

const multiply = function() {
    const m1 = [
        [4, 7, 2],
        [0, -4, 1],
        [9, -3, 5]
    ]
    const m2 = [
        [1, -5, 2],
        [2, 4, -1],
        [4, 3, 9]
    ]

    const m_pliedM = Matrix.multiply(m1, m2);

    const rightAnswer = [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ]

    for (let i = 0; i < m_pliedM.length; i++) {
        for (let j = 0; j < m_pliedM[i].length; j++) {
            if(m_pliedM[i][j] !== rightAnswer[i][j]) {
                return false
            }
        }
    }

    return true;
}

const multiply2x2 = function() {
    const m1 = [
        [4, 7],
        [0, -4]
    ]
    const m2 = [
        [1, -5],
        [2, 4]
    ]

    const m_pliedM = Matrix.multiply2x2(m1, m2);

    const rightAnswer = [
        [4, 14],
        [-0, -16]
    ]

    for (let i = 0; i < m_pliedM.length; i++) {
        for (let j = 0; j < m_pliedM[i].length; j++) {
            if(m_pliedM[i][j] !== rightAnswer[i][j]) {
                return false
            }
        }
    }

    return true;
}

const multiply3x3 = function() {
    const m1 = [
        [4, 7, 2],
        [0, -4, 1],
        [9, -3, 5]
    ]
    const m2 = [
        [1, -5, 2],
        [2, 4, -1],
        [4, 3, 9]
    ]

    const m_pliedM = Matrix.multiply3x3(m1, m2);

    const rightAnswer = [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ]

    for (let i = 0; i < m_pliedM.length; i++) {
        for (let j = 0; j < m_pliedM[i].length; j++) {
            if(m_pliedM[i][j] !== rightAnswer[i][j]) {
                return false
            }
        }
    }

    return true;
}

const multiply3x1 = function() {
    const m1 = [
        [4, 7, 2],
        [0, -4, 1],
        [9, -3, 5]
    ]
    const v = [5, -4, 2];

    const m_pliedM = Matrix.multiply3x1(m1, v);

    const rightAnswer = new Float32Array([65, 12, 22]);

    for (let i = 0; i < m_pliedM.length; i++) {
        for (let j = 0; j < m_pliedM[i].length; j++) {
            if(m_pliedM[i][j] !== rightAnswer[i][j]) {
                return false
            }
        }
    }

    return true;
}

export const tests = [multiply2x2, multiply3x3, multiply3x1, multiply];