export default class Matrix {

    //#region Unit Matrix

    public static getUnitMatrix(n: number = 3): Float32Array[] {
        const unitM = new Array<Float32Array>(n);

        for (let i = 0; i < unitM.length; i++) {
            unitM[i] = new Float32Array(n);
            unitM[i][i] = 1;
        }
        return unitM;
    }

    public static getUnitMatrix2x2(): Float32Array[] {
        return new Array(new Float32Array([1, 0]), new Float32Array([0, 1]));
    }

    public static getUnitMatrix3x3(): Float32Array[] {
        return new Array(
            new Float32Array([1, 0, 0]), 
            new Float32Array([0, 1, 0]), 
            new Float32Array([0, 0, 1]));
    }

    //#endregion


    //#region Multiplication

    public static multiply(m1: [][], m2: [][]): Float32Array[] {
        const m_plied = new Array(m1.length);

        for (let i = 0; i < m1.length; i++) {
            m_plied[i] = new Array(m1[i].length);
            for (let j = 0; j < m1[i].length; j++) {
                m_plied[i][j] = m1[i][j] * m2[j][i];
            }
        }
        return m_plied;
    }

    public static multiply3x1(m1: [number, number, number][], m2: [number, number, number]): Float32Array {
        const m_plied = new Float32Array([
            m1[0][0] * m2[0] + m1[0][1] * m2[0] + m1[0][2] * m2[0],
            m1[1][0] * m2[1] + m1[1][1] * m2[1] + m1[1][2] * m2[1],
            m1[2][0] * m2[2] + m1[2][1] * m2[2] + m1[2][2] * m2[2]
        ]);

        return m_plied;
    }

    public static multiply2x2(m1: [number, number][], m2: [number, number][]): Float32Array[] {
        const m_plied = new Array(m1.length);
        
        m_plied[0] = new Float32Array([m1[0][0] * m2[0][0], m1[0][1] * m2[1][0]]);
        m_plied[1] = new Float32Array([m1[1][0] * m2[0][1], m1[1][1] * m2[1][1]]);

        return m_plied;
    }

    public static multiply3x3(m1: [number, number, number][], m2: [number, number, number][]): Float32Array[] {
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
}