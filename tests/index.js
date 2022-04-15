import { Betest } from 'betest';
import Matrix from '../lib/matrix.js';
import { m2x2_1, m2x2_2, m3x3_1, m3x3_2, m3x2_1, m4x4_1, v } from './matrices.js';

const betest = new Betest();

//#region Properties

const equality = function() {
    return Matrix.equal(m3x3_1, m3x3_1);
}

betest.addGroup({
    name: "Equality",
    tests: [equality]
});

//#endregion

//#region Units

const getUnit2x2 = function() {
    const unitM = Matrix.getUnit3x3();

    for (let i = 0; i < unitM.length; i++) {
        if(unitM[i].indexOf(1) !== i) {
            return false;
        }
    }

    return true;
}

const getUnit3x3 = function() {
    const unitM = Matrix.getUnit3x3();

    for (let i = 0; i < unitM.length; i++) {
        if(unitM[i].indexOf(1) !== i) {
            return false;
        }
    }

    return true;
}
const getUnit = function() {
    const unitM = Matrix.getUnit(4);
    for (let i = 0; i < unitM.length; i++) {
        if(unitM[i].indexOf(1) !== i) {
            return false;
        }
    }
    
    return true;
}

betest.addGroup({
    name: "Unit Matrix",
    tests: [getUnit2x2, getUnit3x3, getUnit]
});

//#endregion

//#region Multiplication

const mulToN = function() {
    const m_pliedM = Matrix.mulToN(m3x3_1, 2);

    const rightAnswer = [
        [8, 14, 4],
        [0, -8, 2],
        [18, -6, 10]
    ]
    return Matrix.equal(m_pliedM, rightAnswer);
}

const mul2x2ToN = function() {
    const rightAnswer = [
        [8, 14],
        [0, -8]
    ]
    return Matrix.equal(Matrix.mul2x2ToN(m2x2_1, 2), rightAnswer);
}

const mul3x3ToN = function() {
    const rightAnswer = [
        [8, 14, 4],
        [0, -8, 2],
        [18, -6, 10]
    ]
    return Matrix.equal(Matrix.mul3x3ToN(m3x3_1, 2), rightAnswer);
}

const mul = function() {
    const m_pliedM = Matrix.mul(m3x3_1, m3x3_2);

    const rightAnswer = [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const mul2x2 = function() {
    const m_pliedM = Matrix.mul2x2(m2x2_1, m2x2_2);

    const rightAnswer = [
        [18, 8],
        [-8, -16]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const mul3x3 = function() {

    const data = [
        [-0.25, -0.611, 0.22],
        [0.13, 0.029, -0.059],
        [0.53, 1.119, -0.23]
    ]

    const rightAnswer = [
        [26, 14, 19],
        [-4, -13, 13],
        [23, -42, 66]
    ]

    const m_pliedM = Matrix.mul3x3(m3x3_1, data);
    return Matrix.equal(m_pliedM, rightAnswer);
}

const mul3x1 = function() {

    const m_pliedM = Matrix.mul3x1(m3x3_1, v);

    const rightAnswer = new Float32Array([65, 12, 22]);

    return Matrix.equal(m_pliedM, rightAnswer);
}

betest.addGroup({
    name: "Multiplication",
    tests: [mul2x2, mul3x3, mul3x1, mul, mulToN, mul2x2ToN, mul3x3ToN]
});

//#endregion

//#region Addition

const add = function() {
    const result = Matrix.add(m2x2_1, m2x2_2);
    const rightAnswer = [
        [5, 2],
        [2, 0]
    ]
    return Matrix.equal(result, rightAnswer);
}

betest.addGroup({
    name: "Addition",
    tests: [add]
});

//#endregion

//#region Subtraction

const sub = function() {
    const subtructed = Matrix.sub(m2x2_1, m2x2_2);
    const rightAnswer = [
        [3, 12],
        [-2, -8]
    ]
    return Matrix.equal(subtructed, rightAnswer);
}

betest.addGroup({
    name: "Subtraction",
    tests: [sub]
});

//#endregion

//#region Power

const power = function() {
    const rightAnswer = [
        [16, 49],
        [0, 16]
    ]
    return Matrix.equal(Matrix.power(m2x2_1, 2), rightAnswer);
}

betest.addGroup({
    name: "Power",
    tests: [power]
});

//#endregion

//#region Transposition

const trans = function() {
    const rightAnswer = [
        [1, 2],
        [-5, 4],
        [2, -1]
    ]
    return Matrix.equal(Matrix.trans(m3x2_1), rightAnswer);
}

betest.addGroup({
    name: "Transposition",
    tests: [trans]
});

//#endregion

//#region Determinants

betest.addGroup({
    name: "Determinants",
    tests: [
        function determ2x2() {
            const rightAnswer = -16;
            return Matrix.equal(Matrix.determ2x2(m2x2_1), rightAnswer);
        },
        function determ3x3() {
            return Matrix.determ3x3(m3x3_1) == 67;
        },
        function determ4x4() {
            return Matrix.determ4x4(m4x4_1) == 674;
        }
    ]
});

//#endregion

//#region Inverse

betest.addGroup({
    name: "Inverse",
    tests: [
        function inverse2x2() {
            const rightAnswer = [
                [0.25, 0.4375],
                [0,	-0.25],
            ]
            return Matrix.equal(Matrix.inverse2x2(m2x2_1), rightAnswer);
        },
        function inverse3x3() {
            const rightAnswer = [
                [1, 0, 0],
                [0,	1, 0],
                [0, 0, 1]
            ]
            // const data = [
            //     [4, -2, 1],
            //     [1, 6, -2],
            //     [1, 0, 0]
            // ]
            return Matrix.equal(Matrix.mul3x3(Matrix.inverse3x3(m3x3_1), m3x3_1), rightAnswer);
        }
    ]
});

//#endregion

//betest.runTest("Multiplication", "mul3x3");
betest.runTest("Inverse", "inverse3x3");
//betest.runAll();