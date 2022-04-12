export default class Matrix {

    /**
     * Check if two matrices are eaual
     * @param {Float32Array[]} m1 First matrix
     * @param {Float32Array[]} m2 Second matrix
     * @returns True if euqal and false if not
     */
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

    /**
     * Returns new unit matrix of any dimension
     * @param n number of dimension
     * @returns Unit matrix which has 1 number by diagonally
     */
    public static getUnit(n: number = 3): Float32Array[] {
        const unitM = new Array<Float32Array>(n);

        for (let i = 0; i < unitM.length; i++) {
            unitM[i] = new Float32Array(n);
            unitM[i][i] = 1;
        }
        return unitM;
    }

    /**
     * 
     * @returns Unit matrix 2x2
     */
    public static getUnit2x2(): Float32Array[] {
        return new Array(new Float32Array([1, 0]), new Float32Array([0, 1]));
    }

    /**
     * 
     * @returns Unit matrix 3x3
     */
    public static getUnit3x3(): Float32Array[] {
        return new Array(
            new Float32Array([1, 0, 0]), 
            new Float32Array([0, 1, 0]), 
            new Float32Array([0, 0, 1]));
    }

    //#endregion

    //#region Multiplication

    /**
     * Multiply matrix by number
     * @param {Float32Array[]} m1 A matrix to be multiplied
     * @param {number} n multiply number
     * @returns New multiplied matrix
     */
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

    /**
     * Multiply two matrices as row by columns
     * @param m1 First matrix
     * @param m2 Second matrix
     * @returns New multiplied matrix
     */
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

    /**
     * Multiply matrix by vector
     * @param {Float32Array[]} m1 First matrix
     * @param {Float32Array} m2 Vector
     * @returns New multiplied matrix
     */
    public static mul3x1(m1: Float32Array[], m2: Float32Array): Float32Array {
        const m_plied = new Float32Array([
            m1[0][0] * m2[0] + m1[0][1] * m2[0] + m1[0][2] * m2[0],
            m1[1][0] * m2[1] + m1[1][1] * m2[1] + m1[1][2] * m2[1],
            m1[2][0] * m2[2] + m1[2][1] * m2[2] + m1[2][2] * m2[2]
        ]);

        return m_plied;
    }

    /**
     * Multiply 2x2 matrices
     * @param {Float32Array[]} m1 First matrix
     * @param {Float32Array[]} m2 Second matrix
     * @returns New multiplied matrix
     */
    public static mul2x2(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        const m_plied = new Array(m1.length);
        
        m_plied[0] = new Float32Array([m1[0][0] * m2[0][0], m1[0][1] * m2[1][0]]);
        m_plied[1] = new Float32Array([m1[1][0] * m2[0][1], m1[1][1] * m2[1][1]]);

        return m_plied;
    }

    /**
     * Multiply 3x3 matrices
     * @param {Float32Array[]} m1 First matrix
     * @param {Float32Array[]} m2 Second matrix
     * @returns New multiplied matrix
     */
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

    /**
     * Performs addition operation over two matrices
     * @param {Float32Array[]} m1 First matrix
     * @param {Float32Array[]} m2 Second matrix
     * @returns New matrix
     */
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

    /**
     * Performs subtraction operation over two matrices
     * @param {Float32Array[]} m1 First matrix
     * @param {Float32Array[]} m2 Second matrix
     * @returns New subtracted matrix
     */
    public static sub(m1: Float32Array[], m2: Float32Array[]): Float32Array[] {
        return Matrix.add(m1, Matrix.mulToN(m2, -1));
    }

    //#endregion

    //#region Power

    /**
     * Performs power operation over matrix
     * @param {Float32Array[]} m1 A matrix
     * @param {number} n power
     * @returns New powered matrix
     */
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

    /**
     * Performs transposition operation over matrix
     * @param {Float32Array[]} m1 A matrix
     * @returns New transposed matrix
     */
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

    //#region Determinants

    /**
     * Exclude rows or/and columns of matrix
     * @param {Float32Array[]} m1 A matrix
     * @param {number} row number of row you want to be excluded
     * @param {number} column number of column you want to be excluded
     * @returns New matrix with excluded rows or columns
     */
    static exclude(m1: Float32Array[], row: number, column: number): Float32Array[] {
        let m1Copy = new Array(m1.length);
        m1.forEach((arr, i) => { m1Copy[i] = [...arr]; });
        m1Copy.splice(row - 1, 1);

        for (let i = 0; i < m1Copy.length; i++) {
            m1Copy[i].splice(column - 1, 1);
        }
        return m1Copy;
    }

    /**
     * Finds determinant of matrix 2x2
     * @param {Float32Array[]} m1 A matrix
     * @returns Determinant
     */
    public static determ2x2(m1: Float32Array[]): number {
        return m1[0][0] * m1[1][1] - m1[0][1] * m1[1][0];
    }

    /**
     * Finds determinant of matrix 3x3
     * @param {Float32Array[]} m1 A matrix
     * @returns Determinant
     */
    public static determ3x3(m1: Float32Array[]): number {
        const minor1 = (m1[1][1] * m1[2][2] - m1[1][2] * m1[2][1]);
        const minor2 = (m1[1][0] * m1[2][2] - m1[1][2] * m1[2][0]) * -1;
        const minor3 = (m1[1][0] * m1[2][1] - m1[1][1] * m1[2][0]);
        return m1[0][0] * minor1 + m1[0][1] * minor2 + m1[0][2] * minor3;
    }

    /**
     * Finds determinant of matrix 4x4
     * @param {Float32Array[]} m1 A matrix
     * @returns Determinant
     */
    public static determ4x4(m1: Float32Array[]): number {
        const addition1 = Matrix.exclude(m1, 1, 1);
        const addition2 = Matrix.exclude(m1, 1, 2);
        const addition3 = Matrix.exclude(m1, 1, 3);
        const addition4 = Matrix.exclude(m1, 1, 4);

        const result = ((m1[0][0] * (-1)**2) * Matrix.determ3x3(addition1)) +
        ((m1[0][1] * (-1)**3) *  Matrix.determ3x3(addition2)) +
        ((m1[0][2] * (-1)**4) * Matrix.determ3x3(addition3)) +
        ((m1[0][3] * (-1)**5) * Matrix.determ3x3(addition4));

        return result;
    }

    //#endregion 
}