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