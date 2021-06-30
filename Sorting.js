var arr=[1,3,4,6,5];
var temp
var keymarker
for(var i=1;i<arr.length;i++){
    //keymarker=arr[i+1]
    let j;
    for(j=i-1;j>0;j--){
        if(arr[j+1]<arr[j]){
            temp = arr[j+1]
            arr[j+1]=arr[j]
            arr[j] = temp
                
        }
       
    }
}
console.log(arr)