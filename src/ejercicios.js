export function multiplicarPor10(array) {
    const multipliedArray = array.map((e) => e * 10);
    return multipliedArray;
}

export function soloPares(array) {
    const evenNumbersArray = array.filter((e) => !(e & 1)); //hackerman
    return evenNumbersArray;
}

export function moverALaDerecha(array) {
    const lastElementIndex = array.length - 1;
    const rightSideArray = array.filter((e, i) => i !== lastElementIndex);
    const shiftedArray = [array[lastElementIndex], ...rightSideArray];
    return shiftedArray;
}

export function soloUnaPalabra(array) {
    const arrayWithOnlyOneWord = array.filter((e) => e.split(' ').length === 1);
    return arrayWithOnlyOneWord;
}

export function soloArraysPositivos(array) {
    const positivesArrays = array.filter((e) => {
        const currentArray = e.filter((number) => number > 0);
        return currentArray.length === e.length ? true : false;
    });
    return positivesArrays;
}

export function soloVocales(array) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsOnlyArray = array.map((word) => {
        return [...word].filter((letter) => vowels.includes(letter)).join('');
    });
    return vowelsOnlyArray;
}

export function todasVocalesIguales(array) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arrayWithSameVowel = array.filter((word) => {
        const vowelsUsed = vowels.filter((vowel) => [...word].includes(vowel));
        return vowelsUsed.length === 1;
    });
    return arrayWithSameVowel;
}

export function duplicarMatriz(array) {
    const multipliedArray = array.map((currentArray) =>
        currentArray.map((e) => e * 2)
    );
    return multipliedArray;
}

export function mayoresDeEdadValidados(array) {
    const arrayWithMayorPropriety = array.map((person) => {
        return {
            ...person,
            mayor: person.edad > 18,
        };
    });
    return arrayWithMayorPropriety;
}

export function transformarObjetoEnArray(objeto) {
    const keys = Object.keys(objeto);
    const values = Object.values(objeto);
    const arrayOfObjects = keys.map((key, i) => {
        return {
            id: key,
            ...values[i],
        };
    });
    return arrayOfObjects;
}
