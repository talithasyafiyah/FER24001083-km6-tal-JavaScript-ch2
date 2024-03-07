const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const getTotalPenjualan = (dataPenjualan) => {
  // Validasi Inputan
  if (dataPenjualan === undefined) return "Error: Bro where is the parameter?";
  if (!Array.isArray(dataPenjualan)) return "Error: Invalid data type";
  if (dataPenjualan.length === 0) return "Error: Empty array";
  if (!dataPenjualan.find((e) => e.totalTerjual))
    return "Error: Object detected";
  // if (dataPenjualan.filter((e) => e.totalTerjual).length == 0)
  //   return "Error: Object detected";

  const totalPenjualan = dataPenjualan.reduce((previous, current) => {
    return previous + current.totalTerjual;
  }, 0);
  return totalPenjualan;
};

console.log(getTotalPenjualan(dataPenjualanPakAldi));
console.log(getTotalPenjualan([]));
console.log(getTotalPenjualan([{}]));
console.log(getTotalPenjualan());
console.log(getTotalPenjualan("a"));
console.log(getTotalPenjualan(null));
