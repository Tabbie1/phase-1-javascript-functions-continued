

function saturdayFun(param='roller-skate'){
return `This Saturday, I want to ${param}!`;
}

//console.log(saturdayFun());

//console.log(saturdayFun('visit the park!'));


function mondayWork(work='go to the office'){

    return `This Monday, I will ${work}.`;
}

//console.log(mondayWork());
//console.log(mondayWork('work from home'));

function wrapAdjective(flair='@'){
    return function(param='special'){

        return `You are ${flair}${param}${flair}!`;
    }
   
}

const myfunction = wrapAdjective();
console.log(myfunction());

console.log(myfunction('a good boy'));


