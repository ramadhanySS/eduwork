import hello from "./module2.js";
import Table from "./module1.js";

const table = Table({
  columns: ["name", "id", "email"],
  data: [
    ["Dani", "111222", "rmdhny@gmail.com"],
    ["Rama", "222111", "dhny@gmail.com"],
    ["Setiawan", "322111", "shny@gmail.com"],
    ["Amannn", "422111", "ahny@gmail.com"],
    ["Tama", "522111", "thny@gmail.com"],
    ["zama", "622111", "zhny@gmail.com"],
  ],
});

const app = document.getElementById("app");
table.render(app);
hello();
