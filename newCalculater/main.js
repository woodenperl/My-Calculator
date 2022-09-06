//the container
const theContainer = document.getElementById('container');

//the header
const header = document.createElement('header');
theContainer.appendChild(header);
header .setAttribute('class', 'header');

const headOne = document.createElement('h1');
header.appendChild(headOne);
headOne .innerHTML = 'Calculator';

//the section
const theSection = document.createElement('section');
theContainer.appendChild(theSection);
theSection .setAttribute('class', 'section')

let theInput = document.createElement('input');
theInput .setAttribute('id', 'input');
theInput .setAttribute('class', 'input');
theInput .setAttribute('type', 'number');
theSection.appendChild(theInput);

//TEMP CODE//
    let theBreak = document.createElement('br');
    theSection.appendChild(theBreak);
//TEMP CODE//

const theDiv = document.createElement('div');
theDiv .setAttribute('class', 'theDiv');
theSection .appendChild(theDiv);

const numberBlank1 = document.createElement('button');
theDiv.append(numberBlank1);
numberBlank1 .innerHTML = '';
numberBlank1 .setAttribute('class', 'btn');

const numberBlank2 = document.createElement('button');
theDiv.append(numberBlank2);
numberBlank2 .innerHTML = '';
numberBlank2 .setAttribute('class', 'btn');

const precent = document.createElement('button');
theDiv.append(precent);
precent .innerHTML = '%';
precent .setAttribute('class', 'btn');

const divideBtn = document.createElement('button');
theDiv.append(divideBtn);
divideBtn .innerHTML = 'Divide';
divideBtn .setAttribute('class', 'btn');

const numberSeven = document.createElement('button');
theDiv.append(numberSeven);
numberSeven .innerHTML = 7;
numberSeven .setAttribute('class', 'btn');

const numberEight = document.createElement('button');
theDiv.append(numberEight);
numberEight .innerHTML = 8;
numberEight .setAttribute('class', 'btn');


const numberNine = document.createElement('button');
theDiv.append(numberNine);
numberNine .innerHTML = 9;
numberNine .setAttribute('class', 'btn');

const timesBtn = document.createElement('button');
theDiv.append(timesBtn);
timesBtn .innerHTML = 'x';
timesBtn .setAttribute('class', 'btn');

const numberFour = document.createElement('button');
theDiv.append(numberFour);
numberFour .innerHTML = 4;
numberFour .setAttribute('class', 'btn');


const numberFive = document.createElement('button');
theDiv.append(numberFive);
numberFive .innerHTML = 5;
numberFive .setAttribute('class', 'btn');


const numberSix = document.createElement('button');
theDiv.append(numberSix);
numberSix .innerHTML = 6;
numberSix .setAttribute('class', 'btn');

const minusBtn = document.createElement('button');
theDiv.append(minusBtn);
minusBtn .innerHTML = '-';
minusBtn .setAttribute('class', 'btn');

const numberOne = document.createElement('button');
theDiv.append(numberOne);
numberOne .innerHTML = 1;
numberOne .setAttribute('class', 'btn');

const numberTwo = document.createElement('button');
theDiv.append(numberTwo);
numberTwo .innerHTML = 2;
numberTwo .setAttribute('class', 'btn');


const numberThree = document.createElement('button');
theDiv.append(numberThree);
numberThree .innerHTML = 3;
numberThree .setAttribute('class', 'btn');

const plusBtn = document.createElement('button');
theDiv.append(plusBtn);
plusBtn .innerHTML = '+';
plusBtn .setAttribute('class', 'btn');


const numberZero = document.createElement('button');
theDiv.append(numberZero);
numberZero .innerHTML = 0;
numberZero .setAttribute('class', 'btn');

const decible = document.createElement('button');
theDiv.append(decible);
decible .innerHTML = '.';
decible .setAttribute('class', 'btn');

const numberBlank4 = document.createElement('button');
theDiv.append(numberBlank4);
numberBlank4 .innerHTML = '';
numberBlank4 .setAttribute('class', 'btn');

const equalBtn = document.createElement('button');
theDiv.append(equalBtn);
equalBtn .innerHTML = '=';
equalBtn .setAttribute('class', 'btn');


numberOne .onclick = function(){
    theInput .value += 1;
}
numberTwo .onclick = function(){
    theInput .value += 2;
}
numberThree .onclick = function(){
    theInput .value += 3;
}
numberFour .onclick = function(){
    theInput .value += 4;
}
numberFive .onclick = function(){
    theInput .value += 5;
}
numberSix .onclick = function(){
    theInput .value += 6;
}
numberSeven .onclick = function(){
    theInput .value += 7;
}
numberEight .onclick = function(){
    theInput .value += 8;
}
numberNine .onclick = function(){
    theInput .value += 9;
}
numberZero .onclick = function(){
    theInput .value += 0;
}
decible .onclick = function(){
    theInput .value = '.';
}
precent .onclick = function(){
    theInput .value += 'p';
}

//plus logic
plusBtn .onclick = function(){
    const theFirstValuePlus = document.getElementById('input') .valueAsNumber;
    console.log(theFirstValuePlus);
    theInput .value = '';

    equalBtn .onclick = function(){
        const theSecondValuePlus = document.getElementById('input') .valueAsNumber;
        const plusFinal = theFirstValuePlus + theSecondValuePlus;
        theInput .value = plusFinal;
    }
}

//minus logic
minusBtn .onclick = function(){
    const theFirstValueMinus = document.getElementById('input') .valueAsNumber;
    console.log(theFirstValueMinus);
    theInput .value = '';

    equalBtn .onclick = function(){
        const theSecondValueMinus = document.getElementById('input') .valueAsNumber;
        const minusFinal = theFirstValueMinus - theSecondValueMinus;
        theInput .value = minusFinal;
    }
}

//times logic
timesBtn .onclick = function(){
    const theFirstValueTimes = document.getElementById('input') .valueAsNumber;
    console.log(theFirstValueTimes);
    theInput .value = '';

    equalBtn .onclick = function(){
        const theSecondValueTimes = document.getElementById('input') .valueAsNumber;
        const TimesFinal = theFirstValueTimes * theSecondValueTimes;
        theInput .value = TimesFinal;
    }
}

//divide logic
divideBtn .onclick = function(){
    const theFirstValueDivide = document.getElementById('input') .valueAsNumber;
    console.log(theFirstValueDivide);
    theInput .value = '';

    equalBtn .onclick = function(){
        const theSecondValueDivide = document.getElementById('input') .valueAsNumber;
        const divideFinal = theFirstValueDivide / theSecondValueDivide;
        theInput .value = divideFinal;
    }
}

//percent logic
precent .onclick = function(){
    const theFirstValueDivide = document.getElementById('input') .valueAsNumber;
    console.log(theFirstValueDivide);
    theInput .value = '';

    equalBtn .onclick = function(){
        const theSecondValueDivide = document.getElementById('input') .valueAsNumber;
        const divideFinal = theFirstValueDivide / theSecondValueDivide;
        theInput .value = divideFinal;
    }
}


console.log(theContainer);
