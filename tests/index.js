import * as unitTests from './unit.js';
import * as multiplicationTests from './multiplication.js';
import {Betest} from 'betest';

const betest = new Betest();

betest.addGroup({
    name: "Unit Matrix Tests",
    tests: unitTests.tests
});

betest.addGroup({
    name: "Multiplication Tests",
    tests: multiplicationTests.tests
});
//betest.runTest("Multiplication Tests", "multiply3x1");
betest.runAll();