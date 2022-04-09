import Matrix from '../lib/matrix.js';

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


export const tests = [getUnitMatrix2x2, getUnitMatrix3x3, getUnitMatrix];