//////////////
//RECTANGLE//
////////////

// Declare berapa panjang dan lebar dari Persegi Panjang disimpan dalam variable
const lengthRectangle : number = 5;  
const witdhRectangle : number= 3;


    ///////////////////
    //AREA RECTANGLE//
    /////////////////
    const areaRectangle: number = lengthRectangle * witdhRectangle;

    //Output
    console.log(areaRectangle);


    ////////////////////////
    //PERIMETER RECTANGLE//
    //////////////////////
    const perimeterRectangle: number = 2 * (lengthRectangle + witdhRectangle);

    //Output
    console.log(perimeterRectangle);


///////////
//CIRCLE//
/////////

// Declare berapa radius dari lingkaran disimpan dalam variable
const radius: number = 5;


    /////////////
    //DIAMETER//
    ///////////
    const diameter : number = 2 * radius;

    //Output
    console.log(diameter);


    //////////////////
    //CIRCUMFERENCE//
    ////////////////
    const circumference : number = 2 * Math.PI * radius;

    //Output
    console.log(circumference.toFixed(4));


    ////////////////
    //AREA CIRCLE//
    //////////////
    const areaCircle : number = Math.PI * Math.pow(radius, 2);

    //Output
    console.log(areaCircle.toFixed(3));


//////////////////////
//ANGLE OF TRIANGLE//
////////////////////

// Declare sudut dari segitiga disimpan dalam variable
const anglesA : number = 80;
const anglesB : number = 65;
const anglesABC : number = 180;

const anglesC: number = anglesABC - (anglesA + anglesB);

//Output
console.log(anglesC);


/////////////////
//CONVERT DAYS//
///////////////

// Declare jumlah hari yang ingin diconvert dan jumlah hari perbulan dan tahun disimpan dalam variable
let jumlahHari : number = 366;   // Jumlah hari bisa dirubah dengan nilai yang ingin diconvert.
let jumlahHariPerTahun : number = 365;
let jumlahHariPerBulan : number = 30;

// Menghitung Tahun
const tahun : number = Math.floor( jumlahHari/ jumlahHariPerTahun);

// Menghitung Sisa Hari dari Jumlah Hari Per Tahun
let sisaHari : number = jumlahHari % jumlahHariPerTahun;

// Menghitung Bulan
const bulan : number = Math.floor(sisaHari / jumlahHariPerBulan);

// Menghitung Sisa Hari dari Jumlah Hari Per Bulan 
sisaHari = sisaHari % jumlahHariPerBulan;

//Output
console.log(`${tahun} year, ${bulan} month, ${sisaHari} day`);


////////////////////////////
//DIFFERENCE DATE IN DAYS//
//////////////////////////

//Declare Tanggal ke-1 dan ke-2 disimpan dalam variable
const tanggalA: Date = new Date('2022-01-20');
const tanggalB: Date = new Date('2022-01-22');

// Mengitung Selisih Miliseconds TanggalA  dan Tanggal B
const bedaMilisecondsPerTanggal: number = tanggalB.getTime() - tanggalA.getTime();

// Declare berapa jumlah dari Miliseconds per 24 jam
const milisecondsPerHari : number = 24 * 3600 * 1000;

// Membagi Selisih Milisecond Tanggal dengan Milisecond per 24 jam sehingga didapat jumlah selisih hari
const bedaHari : number = bedaMilisecondsPerTanggal / milisecondsPerHari;

//Output
console.log(`${bedaHari} day`);   

