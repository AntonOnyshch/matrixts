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

const getUnitMatrix2x2 = function() {
    const unitM = Matrix.getUnitMatrix3x3();

    for (let i = 0; i < unitM.length; i++) {
        if(unitM[i].indexOf(1) !== i) {
            return false;
        }
    }

    return true;
}

const getUnitMatrix3x3 = function() {
    const unitM = Matrix.getUnitMatrix3x3();

    for (let i = 0; i < unitM.length; i++) {
        if(unitM[i].indexOf(1) !== i) {
            return false;
        }
    }

    return true;
}
const getUnitMatrix = function() {
    const unitM = Matrix.getUnitMatrix(4);
    for (let i = 0; i < unitM.length; i++) {
        if(unitM[i].indexOf(1) !== i) {
            return false;
        }
    }
    
    return true;
}

betest.addGroup({
    name: "Unit Matrix",
    tests: [getUnitMatrix2x2, getUnitMatrix3x3, getUnitMatrix]
});

//#endregion

//#region Multiplication

const multiplyToN = function() {
    const m_pliedM = Matrix.multiplyToN(m3x3_1, 2);

    const rightAnswer = [
        [8, 14, 4],
        [0, -8, 2],
        [18, -6, 10]
    ]
    return Matrix.equal(m_pliedM, rightAnswer);
}

const multiply = function() {
    const m_pliedM = Matrix.multiply(m3x3_1, m3x3_2);

    const rightAnswer = [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const multiply2x2 = function() {
    const m_pliedM = Matrix.multiply2x2(m2x2_1, m2x2_2);

    const rightAnswer = [
        [4, 14],
        [-0, -16]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const multiply3x3 = function() {
    const m_pliedM = Matrix.multiply3x3(m3x3_1, m3x3_2);

    const rightAnswer = [
        [4, 14, 8],
        [-0, -16, 3],
        [18, 3, 45]
    ]

    return Matrix.equal(m_pliedM, rightAnswer);
}

const multiply3x1 = function() {

    const m_pliedM = Matrix.multiply3x1(m3x3_1, v);

    const rightAnswer = new Float32Array([65, 12, 22]);

    return Matrix.equal(m_pliedM, rightAnswer);
}

betest.addGroup({
    name: "Multiplication",
    tests: [multiply2x2, multiply3x3, multiply3x1, multiply, multiplyToN]
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

//betest.runGroup("Addition");
betest.runAll();