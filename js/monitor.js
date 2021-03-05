//geting detail for count
// Initialize Firebase
var db = firebase.firestore();

function getcount() {
  var date = document.getElementById("select_date").value;
  var arr = date.split("-");
  var date_chane = arr.concat(arr[1] + "-" + arr[2] + "-" + arr[0]);
  var date_scan = date_chane[3];
  var bus_no = document.getElementById("bus_no").value;
  console.log(date_scan);
  var count = 0;
  // var peopleCount = document.getElementById("peaple_count").innerHTML;
  // var ticketCount = document.getElementById("ticket_count").innerHTML;

  ////////////////// camera count ///////////////////////////
  var docRef = db.collection("CAMERA_COUNT").doc(date).collection(bus_no);
  docRef
    .get()
    .then((querySnapshot) => {
      var length = querySnapshot.size;
      var docData = [];

      querySnapshot.forEach((doc) => {
        docData.push(doc.data());
      });

      var last = docData[docData.length - 1];
      console.log(last);
      console.log(last.current);

      document.getElementById("peaple_count").innerHTML = last.in;
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  ////////////////////// ticket scannig ///////////////////////
  db.collection("ONLINE_TICKET_SCANNING")
    .doc(date_scan)
    .collection(bus_no)
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot.size);

      document.getElementById("ticket_count").innerHTML = querySnapshot.size;
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
