for (var i = 0; i < 5; i++) { //1
    console.log("Entering inner loop " + i + " Times");
    for (var j = 0; j < 10; j++) {//2
        console.log(i, j);
    }
}
//0,0
//0,1
//0,2
//0,3
//0,4
//1,0
//1,1
//1,2
var arr = [
    [["Umra"], ["Badar"], ["SMIT"]],
    [["Samen"], ["Arshad"]],
    [["Rida"], ["Abid"]]
]
for (var i = 0; i < arr.length; i++) {//2

    for (var j = 0; j < arr[i].length; j++) {//1
      
        for(var k =0; k<arr[i][j].length; k++){
            console.log(arr[i][j][k]);

        }

    }
}
// arr[0] =["Umra", "Badar"]
// arr[0][0]= "Umra"
// arr[0][1] ="Badar"

// arr[1] = ["Samen", "Arshad"]
// arr[1][0]= "Samen"
// arr[1][1]= "Arshad"