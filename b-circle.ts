///////////
//CIRCLE//
/////////

// Declare berapa radius dari lingkaran disimpan dalam variable
const radius: number = 5;


    ////////////////////
    //CIRCLE DIAMETER//
    //////////////////
    
    const diameter : number = 2 * radius;

    //Output
    console.log(diameter);


    /////////////////////////
    //CIRCLE CIRCUMFERENCE//
    ///////////////////////

    const circumference : number = 2 * Math.PI * radius;

    //Output
    console.log(circumference.toFixed(4));


    ////////////////
    //CIRCLE AREA//
    //////////////

    const areaCircle : number = Math.PI * Math.pow(radius, 2);

    //Output
    console.log(areaCircle.toFixed(3));