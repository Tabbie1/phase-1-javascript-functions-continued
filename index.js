function saturdayFun(param='roller-skate!'){
return `This Saturday, I want to ${param}`;
}
console.log(saturdayFun());

console.log(saturdayFun('visit the park'));


function mondayWork(work='I hate to '){

    return `${work} go to the office`;
}

console.log(mondayWork());
console.log(mondayWork('I love to'));

function wrapAdjective(flair='@'){
    return function(param='special'){

        return `You are ${flair}${param}${flair}`;
    }
   
}

const myfunction = wrapAdjective();
console.log(myfunction());

console.log(myfunction('a good boy'));


