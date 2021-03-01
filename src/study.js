/**
 * const , let
 */
const myProfile = {
  name: "Yuki",
  age: 24
};

/**
 * 分割代入
 */
const { name, age } = myProfile;
const message = `名前は${name}です。年齢は${age}です。`;
console.log(message);

const Profile = ["a", 34];

const [a, b] = Profile;
const ma = `名前は${a}です。年齢は${b}です。`;
console.log(ma);

/**
 * mapやfilter
 */
const arr = ["あ", "い", "う"];

const maps = arr.map((name) => {
  return name;
});
console.log(maps);

const numArr = [1, 2, 3, 4, 5, 6];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

/**
 * 三項演算子
 */

const num = 1300;
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい。";
console.log(formattedNum);

const checkSum = (sum1, sum2) => {
  return sum1 + sum2 > 100 ? "100を超えています！" : "OKです";
};
console.log(checkSum(45, 50));

// ||は左側がfalseなら右側を返す
const nummm = null;
const fee = nummm || "金額未設定です。";
console.log(fee);

// && は左側がtrueなら右側を返す
const numm = null;
const fees = numm && "未設定です。";
console.log(fees);
