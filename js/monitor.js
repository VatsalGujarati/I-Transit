//geting detail for count
  // Initialize Firebase        
var db = firebase.firestore();

function getcount()
{
    var date = document.getElementById("select_date").value;
    var arr = date.split('-');
    var date_chane = arr.concat(arr[1] + '-' + arr[2] + '-' + arr[0]);
    var date_scan = date_chane[3];
    var bus_no = document.getElementById("bus_no").value;
    console.log(date_scan);
    var count=0;
  //window.alert(document.getElementById("select_date").innerHTML = date);
   //window.alert(document.getElementById("bus_no").innerHTML = bus_no);
      // var docRef = db.collection("CAMERA_COUNT").doc(date);
      //var docRef = db.collection(bus_no);
       
      var docRef = db.collection("CAMERA_COUNT").doc(date).collection(bus_no);
      docRef.get().then(querySnapshot => {

        var length = querySnapshot.size;
        var docData = [];
        
        querySnapshot.forEach(doc => {
            //console.log(doc.id, " => ", doc.data());
            docData.push(doc.data());
            })
            
        //console.log(docData);
        var last = docData[docData.length-1];
        console.log(last);
        console.log(last.current);

        document.getElementById("peaple_count").innerHTML = last.in; 
        
        }).catch((error) => {
           console.log("Error getting document:", error);
       });  
 

      // var docRef1 = db.collection("ONLINE_TICKET_SCANNING").doc(date_scan).collection(bus_no);
       //var docRef2 = docRef1.collection(bus_no);
       //console.log(docRef1);


    //   docRef1.array.forEach(element => {
    //       count = count + 1;    
    //   });

       
    db.collection("ONLINE_TICKET_SCANNING").doc(date_scan).collection(bus_no).get().then(querySnapshot => {
        console.log(querySnapshot.size);
        // querySnapshot.forEach(doc => {
        //   //  console.log(doc.id, " => ", doc.data());
        //     //orderid = doc.id.orderBy("time", "desc").limit(3);
        //     //console.log(orderid);
        //     })
        document.getElementById("ticket_count").innerHTML = querySnapshot.size; 

        }).catch((error) => {
           console.log("Error getting document:", error);
       });  


} 