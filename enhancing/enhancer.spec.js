const enhancer = require('./enhancer.js');
const {repair, succeed, fail} = require('./enhancer.js');


const {add} = require('./enhancer.js');

// test away!

const item = {
    name: 'Pete',
    durability: 50, // can only be number 0 to 100
    enhancement: 10 //can only be number 0 to 20
}


describe('repair', () => {
    it('should return object with durability retored to 100', () => {
        expect(repair(item)).toEqual({...item, durability: 100});
    })
    // it.todo('check repair returns a number'); // not needed if checking 100
})

describe('succeed', () => {
    it('should return object with enhancement + 1', () => {
        const expectedResult = {...item, enhancement:11}
        const actualResult = succeed(item);
        expect(actualResult).toEqual(expectedResult);
    })

    it('unless enhancement already 20', () => {
        const expectedResult = {...item, enhancement:20}
        const actualResult = succeed({...item, enhancement:20});
        expect(actualResult).toEqual(expectedResult);
    })

    //check durability not changed
})

describe('fail', () => {
    it('should decrease durability by 5 if enhancement is less than 15', () => {
        const expectedResult = {...item, durability:45}
        const actualResult = fail({...item});
        expect(actualResult).toEqual(expectedResult);
    })

    it('should decrease durability by 10 if enhancement is 15 or more', () => {
        const actualResult = fail({name: 'pete', durability: 50, enhancement: 15}); //pass in this
        const expectedResult = {name: 'pete', durability: 40, enhancement: 15} //expect to get this
        expect(expectedResult).toEqual(actualResult);
    })
    it('should decrease enhancement by 1 if enhancement is greater than 16', () => {
        const actualResult = fail({name: 'pete', durability: 50, enhancement: 17}); //pass in this
        const expectedResult = {name: 'pete', durability: 40, enhancement: 16} //expect to get this
        expect(expectedResult).toEqual(actualResult);
    })
    it('durability should not go below 0', () => {
        const actualResult = fail({name: 'pete', durability: 3, enhancement: 10}); //pass in this
        const expectedResult = {name: 'pete', durability: 0, enhancement: 10} //expect to get this
        expect(expectedResult).toEqual(actualResult);
    })


})








// describe('arithmetic functions', () => {
//     //can have sub blocks
//     describe('add', () => {
//         it('should return the sum of two numbers', () => {
//             expect(add(2,2)).toBe(4);
//             expect(add(2,3)).toBe(5);
//         });

//         // it('should throw an exception if the parms are not numbers', () => {
//         //     expect(add('blue', 2)).toThrow();
//         //     expect(add(2, 'red')).toThrow();
//         //     expect(add('blue', 'red')).toThrow();
//         // })

//         it('should throw an exception if the parms are not numbers', () => {
//             expect(()=>{add('blue', 2)}).toThrow();
//             expect(()=>{add(2, 'red')}).toThrow();
//             expect(()=>{add('blue', 'red')}).toThrow();        
//         });

//         it('should return 0 when called with no args', () => {
//             // AAA - arrange, act, assess

//             //arrange
//             const expectedResult = 0

//             //act
//             const actualResult = add();

//             //Assess
//             expect(actualResult).toBe(expectedResult);
//         })

//         it('should return the value of the one param if only one provided', () => {
//             const expectedResult = 10
//             const actualResult = add(10);
//             expect(actualResult).toBe(expectedResult)
//         })

//         it('should handle more than two arguments', () => {
//             expect(add(1,2,3)).toBe(6)
//         })

//         it('should expect array of numbers', () => {
//             expect(add([1,2,3])).toBe(6);
//             expect(add([1,2,3,5])).toBe(11);
//         })

//         it.todo('what if there are two arrays');

//     })
// })