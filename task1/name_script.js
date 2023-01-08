function myFunc() {
  let FCs = document.querySelector(".fcs").value;
  let nameArray = FCs.split(" ");
  console.log(nameArray);
  let lname = nameArray[0];
  let name = nameArray[1];
  let dname = nameArray[2];
  let uplName =
    lname.substr(0, 1).toUpperCase() + lname.substr(1).toLowerCase();
  let upName = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
  let updName =
    dname.substr(0, 1).toUpperCase() + dname.substr(1).toLowerCase();
  document.querySelector(".lname").innerHTML = uplName;
  document.querySelector(".name").innerHTML = upName;
  document.querySelector(".dname").innerHTML = updName;
}
