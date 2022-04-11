import { Betest } from 'betest';
import Matrix from '../lib/matrix.js';
import { m2x2_1, m2x2_2, m3x3_1, m3x3_2, v } from './matrices.js';

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
        [4, 14],
        [-0, -16]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const mul3x3 = function() {
    const m_pliedM = Matrix.mul3x3(m3x3_1, m3x3_2);

    const rightAnswer = [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const mul3x1 = function() {

    const m_pliedM = Matrix.mul3x1(m3x3_1, v);

    const rightAnswer = new Float32Array([65, 12, 22]);

    return Matrix.equal(m_pliedM, rightAnswer);
}

betest.addGroup({
    name: "Multiplication",
    tests: [mul2x2, mul3x3, mul3x1, mul, mulToN]
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

betest.runGroup("Addition");
//betest.runAll();