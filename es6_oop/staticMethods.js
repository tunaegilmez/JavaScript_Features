// Statik Methodlar

// OBJE OLUŞTURMADAN METHODLARI KULLANMAK İSTEDİĞİMİZDE STATİCK KULLANIM YAPABİLİYORUZ.
class Matematik {
  static cube(x) {
    console.log(x * x * x);
  }

  pow(x) {
    console.log(x * x);
  }
}

Matematik.cube(3);

const math = new Matematik();
math.pow(2);

// math.cube(3);  OBJE ÜZERİNDEN ERİŞİLEMEZ SADECE SINIF ÜZERİNDEN ERİŞİLEBİLİR STATİC METHODLARA.

// Matematik.sqrt(4);   SINIF ÜZERİNDEN ERİŞİLEMEZ STATİC OLMAYAN METHODLARA.
