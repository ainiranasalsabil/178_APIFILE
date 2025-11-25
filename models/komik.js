module.exports = (sequelize, DataTypes) => {

  // ================================
  //  Model: Komik
  //  Menyimpan data komik beserta informasi gambar (BLOB)
  // ================================
  const Komik = sequelize.define('Komik', {

    // Primary key otomatis bertambah
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    // Judul komik (wajib diisi)
    judul: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // Nama penulis komik (wajib diisi)
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // Deskripsi komik (wajib diisi, tipe TEXT karena bisa panjang)
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    // -----------------------------------------
    // Penyimpanan gambar:
    // imageType : tipe file (jpeg/png/webp)
    // imageName : nama file aslinya
    // imageData : binary data (disimpan dalam BLOB)
    // -----------------------------------------
    imageType: DataTypes.STRING,
    imageName: DataTypes.STRING,
    imageData: DataTypes.BLOB('long'),

  }, {
    // Nama tabel di database
    tableName: 'komik',
  });

  return Komik;
};
