export default class Matrix {

    public static equal(m1: Float32Array[], m2: Float32Array[]): Boolean {

        if(m1.length !== m2.length) {
            return false;
        }

        for (let i = 0; i < m1.length; i++) {
            if(m1[i].length !== m2[i].length) {
                return false;
            }
            for (let j = 0; j < m1[i].length; j++) {
                if(m1[i][j] !== m2[i][j]) {
                    return false
                }
            }
        }

        return true;
    }

    //#region Unit Matrix

    public static getUnit(n: number = 3): Float32Array[] {
        const unitM = new Array<Float32Array>(n);

        for (let i = 0; i < unitM.length; i++) {
            unitM[i] = new Float32Array(n);
            unitM[i][i] = 1;
        }
        return unitM;
    }

    public static getUnit2x2(): Float32Array[] {
        return new Array(new Float32Array([1, 0]), new Float32Array([0, 1]));
    }

    public static getUnit3x3(): Float32Array[] {
        return new Array(
            new Float32Array([1, 0, 0]), 
            new Float32Array([0, 1, 0]), 
            new Float32Array([0, 0, 1]));
    }

    //#endregion

    //#region Multiplication

    public static mulToN(m1: Float32Array[], n: number): Float32Array[] {
        const m_plied = new Array(m1.length);

        for (let i = 0; i < m1.length; i++) {
            m_plied[i] = new Float32Array(m1[i].length);
            for (let j = 0; j < m1[i].length; j++) {
                m_plied[i][j] = m1[i][j] * n;
            }
        }
        return m_plied;
    }

    public static mul(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        const m_plied = new Array(m1.length);

        for (let i = 0; i < m1.length; i++) {
            m_plied[i] = new Array(m1[i].length);
            for (let j = 0; j < m1[i].length; j++) {
                m_plied[i][j] = m1[i][j] * m2[j][i];
            }
        }
        return m_plied;
    }

    public static mul3x1(m1: Float32Array[], m2: Float32Array): Float32Array {
        const m_plied = new Float32Array([
            m1[0][0] * m2[0] + m1[0][1] * m2[0] + m1[0][2] * m2[0],
            m1[1][0] * m2[1] + m1[1][1] * m2[1] + m1[1][2] * m2[1],
            m1[2][0] * m2[2] + m1[2][1] * m2[2] + m1[2][2] * m2[2]
        ]);

        return m_plied;
    }

    public static mul2x2(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        const m_plied = new Array(m1.length);
        
        m_plied[0] = new Float32Array([m1[0][0] * m2[0][0], m1[0][1] * m2[1][0]]);
        m_plied[1] = new Float32Array([m1[1][0] * m2[0][1], m1[1][1] * m2[1][1]]);

        return m_plied;
    }

    public static mul3x3(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        const m_plied = new Array(m1.length);

        m_plied[0] = new Float32Array([
            m1[0][0] * m2[0][0],
            m1[0][1] * m2[1][0],
            m1[0][2] * m2[2][0]
        ]);
        m_plied[1] = new Float32Array([
            m1[1][0] * m2[0][1],
            m1[1][1] * m2[1][1],
            m1[1][2] * m2[2][1]
        ]);
        m_plied[2] = new Float32Array([
            m1[2][0] * m2[0][2],
            m1[2][1] * m2[1][2],
            m1[2][2] * m2[2][2]
        ]);

        return m_plied;
    }

    //#endregion

    //#region Addition

    public static add(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        const m_plied = new Array(m1.length);

        for (let i = 0; i < m1.length; i++) {
            m_plied[i] = new Float32Array(m1[i].length);
            for (let j = 0; j < m1[i].length; j++) {
                m_plied[i][j] = m1[i][j] + m2[i][j];
            }
        }
        return m_plied;
    }

    //#endregion

    //#region Subtraction

    public static sub(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        return Matrix.add(m1, Matrix.mulToN(m2, -1));
    }

    //#endregion

    //#region Power

    public static power(m1: Float32Array[], n: number) {
        const m_powered = new Array(m1.length);

        for (let i = 0; i < m1.length; i++) {
            m_powered[i] = new Float32Array(m1[i].length);
            for (let j = 0; j < m1[i].length; j++) {
                m_powered[i][j] = m1[i][j] ** n;
            }
        }
        return m_powered;
    }

    //#endregion

    //#region Transposition

    public static trans(m1: Float32Array[]): Float32Array[] {
        const m_trans = new Array(m1[0].length);

        for (let i = 0; i < m_trans.length; i++) {
            m_trans[i] = new Float32Array(m1.length);
            for (let j = 0; j < m_trans[i].length; j++) {
                m_trans[i][j] = m1[j][i];
            }
        }

        return m_trans;
    }

    //#endregion

    
}