//  task1
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
    }
    console.log(isLeapYear(2020));
    console.log(isLeapYear(2021));
    console.log(isLeapYear(1900));
    console.log(isLeapYear(2000));
    // task2
    function isPositive(number) {
        return number > 0;
    }
    console.log(`isPositive(5): ${isPositive(5)}, 
    isPositive(-3): ${isPositive(-3)}, 
    isPositive(0): ${isPositive(0
    // task3
    
    function praveeN(number) {
        return number % 3 === 0 && number % 5 === 0;
    }
    console.log(`praveeN(15): ${praveeN(15)}, praveeN(10): ${praveeN(10)}, praveeN(30): ${praveeN(30)}, praveeN(7): ${praveeN(7)}`);
    // task4
    function heManthAnna(char) {
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
               char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U';
    }
    console.log(`heManthAnna('a'): ${heManthAnna('a')}, heManthAnna('b'): ${heManthAnna('b')}, heManthAnna('E'): ${heManthAnna('E')}, heManthAnna('X'): ${heManthAnna('X')}`);
    
    // task5
    
    function aravavindAnna(sathishAnna) {
        return sathishAnna >= 'A' && sathishAnna <= 'Z';
    }
    console.log(`aravavindAnna('A'): ${aravavindAnna('A')}, aravavindAnna('c'): ${aravavindAnna('c')}, aravavindAnna('Z'): ${aravavindAnna('Z')}, aravavindAnna('D'): ${aravavindAnna('D')}`);
    