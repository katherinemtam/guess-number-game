// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers} from '../utils.js';

const test = QUnit.test;

test('should take in an integer and return "too low", "too high", or "correct"', (expect) => {

    const guess1 = compareNumbers(1, 5);
    const guess2 = compareNumbers(9, 5);
    const guess3 = compareNumbers(5, 5);
    
    //three arguments: actual, expected, some description
    expect.equal(guess1, -1, 'guess is too low');
    expect.equal(guess2, 1, 'guess is too high');
    expect.equal(guess3, 0, 'guess is correct');
});
