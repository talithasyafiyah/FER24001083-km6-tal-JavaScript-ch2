const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  if (dataPenjualan !== undefined) {
    if (dataPenjualan instanceof Array) {
      if (dataPenjualan.length > 0) {
        // Total Keuntungan
        let totalKeuntungan = dataPenjualan.reduce((previous, current) => {
          let keuntungan =
            (current.hargaJual - current.hargaBeli) * current.totalTerjual;
          return previous + keuntungan;
        }, 0);

        // Total Modal
        let totalModal = dataPenjualan.reduce((previous, current) => {
          let modal =
            current.hargaBeli * (current.totalTerjual + current.sisaStok);
          return previous + modal;
        }, 0);

        // Persentase Keuntungan %
        let persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

        // Mengurutkan Total Buku Terjual secara descending
        let sortBuku = dataPenjualan.sort(
          (previous, current) => current.totalTerjual - previous.totalTerjual
        );

        // Nama Produk buku terlaris ada pada index pertama (0)
        let produkBukuTerlaris = sortBuku[0].namaProduk;

        let penulisTerlaris = null;
        let tempTerjual = 0;

        // Mencari List Penulis Buku yang ada di data Penjualan
        let penulisBuku = [
          ...new Set(dataPenjualan.map((data) => data.penulis)),
        ];

        penulisBuku.forEach((penulis) => {
          let karya = dataPenjualan.filter((item) => item.penulis === penulis);
          let karyaTerjual = karya.reduce((previous, current) => {
            return previous + current.totalTerjual;
          }, 0);

          if (karyaTerjual > tempTerjual) {
            tempTerjual = karyaTerjual;
            penulisTerlaris = penulis;
          }
        });

        return {
          totalKeuntungan: `Rp. ${totalKeuntungan.toLocaleString()}`,
          totalModal: `Rp. ${totalModal.toLocaleString()}`,
          persentaseKeuntungan: `${persentaseKeuntungan.toFixed(2)}%`,
          produkBukuTerlaris: `BUKU TERLARIS BERDASARKAN DATA DI ATAS ${produkBukuTerlaris.toUpperCase()}`,
          penulisTerlaris: `PENULIS TERLARIS BERDASARKAN DATA DI ATAS ${penulisTerlaris.toUpperCase()}`,
        };
      }
      return "Error : Empty array";
    }
    return "Error : Invalid data type";
  }

  return "Error : Bro where is the parameter";
};

console.log(getInfoPenjualan(dataPenjualanNovel));
// console.log(getInfoPenjualan({}));
// console.log(getInfoPenjualan([]));
// console.log(getInfoPenjualan());
// console.log(getInfoPenjualan(0));
// console.log(getInfoPenjualan("d"));
