///////////////////////
//ANGLES OF TRIANGLE//
/////////////////////

// Declare sudut dari segitiga disimpan dalam variable
const angles_A : number = 80;
const angles_B : number = 65;
const angles_ABC : number = 180;

const angles_C: number = angles_ABC - (angles_A + angles_B);

//Output
console.log(angles_C);