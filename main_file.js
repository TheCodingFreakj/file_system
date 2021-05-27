//server side
//require node to be installed
var fs = require("fs");
console.log("Going to write into existing file");

//add your content to this variable
const data = "<div><h1>hey there</h1></div>";
fs.writeFile("read-write-file.js", data, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Data written successfully!");
  console.log("Let's read newly written data");
  // Read the newly written file and print all of its content on the console
  fs.readFile("read-write-file.js", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});

/**********method 2 */

//client side
// if (window === defined) {
//   //advanced browser required
//   // Check for the various File API support.
//   if (window.File && window.FileReader && window.FileList && window.Blob) {
//     // Great success! All the File APIs are supported.
//     var file = new File(["output"], "output.js", {
//       type: "text/plain",
//     });
//     var str = "My string of text";

//     file.open("w"); // open file with write access
//     file.writeln("First line of text");
//     file.writeln("Second line of text " + str);
//     file.write(str);
//     file.close();
//   } else {
//     alert("The File APIs are not fully supported in this browser.");
//   }
// } else {
//   alert("this windows dont support it ");
// }
