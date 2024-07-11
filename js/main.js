// 1. Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}











// 2. argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing









// 3. Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
// Input:  const books = [
// {
// title: “Halqa”,
// author: “Akrom Malik”,
// read: false
// },
// {
// title: “Dunyoning ishlari”,
// author: “O’tkir Hoshimov”,
// read: true
// },
// {
// title: “Iymon”,
// author: “Shayx Muhammad Sodiq Muhammad Yusuf”,
// read: true
// },
// ]
// Output: 
// 1. Akrom Malik ning Halqa kitobi o’qilmagan
// 2. O’tkir Hoshimov ning Dunyoning ishlari kitobi o’qilgan
// 3. Shayx Muhammad Sodiq Muhammad Yusuf hazratlarining Iymon kitobi o’qilgan











// 4. String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
// Input: [”text”, “world”, “laptop”]
// Output: {”text”: 4, “world”: 4, “laptop”: 6}











// 5. Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}












// 6. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54










// 7. Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}










// 8. Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}