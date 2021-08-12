/*
// These commands are done in REPL(Read Eval Print Loop)

//UC 1- Use Random to get single digit form 0 to 9
> Math.ceil(Math.random()*8);
9

//UC 2-Use Random to get Die result
> Math.floor(Math.random()*6)+1;
6

//UC3-Finding sum of two random die values
> {
... a=Math.floor(Math.random()*6)+1;
... b=Math.floor(Math.random()*6)+1;
... console.log(a+b);
... }
5

*/
//UC 4- Finding sum and avg for 5 random two digit numbers
{
    console.log("************* UC-4 *************");
    let sum=0;
    for(let i=1;i<=5;i++)
    {
        let randomNumber = Math.floor(Math.random()*90+10);
        console.log(i+' : Random Number is :'+randomNumber);
        sum += randomNumber;
    }
    console.log("SUM For '5' Random Numbers is :"+sum);
    console.log("Average For '5' Random Numbers is :"+(sum/5).toFixed(2));
}

//UC 5- Unit Conversion Finding Rectangular area
{
    console.log("************* UC-5 *************");
    //converting inch to feet
    let feet = 42/12;//1 feet to 12 inch
    let length = 60;
    let breadth = 40;
    let acreConversion = 0.000247105;
    let meterConversion = 0.3048;
    console.log("Area of Rectangular plot in metres " +(length*breadth*meterConversion).toFixed(2));
    console.log("Area of '25' rectangular plot in acre "+(25*length*breadth*acreConversion).toFixed(2));
}