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