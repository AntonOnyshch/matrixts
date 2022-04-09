declare module "matrixValueTypes" {
    export enum MatrixValueTypes {
        Int32 = 0,
        Float32 = 1
    }
}
declare module "matrix" {
    import { MatrixValueTypes } from "matrixValueTypes";
    export default class Matrix {
        readonly row: number;
        readonly columns: number;
        readonly data: Array<any>;
        constructor(row: number | undefined, columns: number | undefined, valueType: MatrixValueTypes);
    }
}
declare module "index" {
    import { MatrixValueTypes } from "matrixValueTypes";
    import Matrix from "matrix";
    export { Matrix, MatrixValueTypes };
}
