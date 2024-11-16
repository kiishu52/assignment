// code to find even number in array
let a=[12,45,11,5,4225,14,52,451];
for(let i =0;i<a.length-1;i++){
    if(a[i]%2==0){
        console.log((a[i])+ " is even" ); 
    }
    else{
        console.log((a[i])+ " is odd" );    
    }
}

//pattern printing
for(let i =1;i<=5;i++){
    let res="";
    for(let j =1;j<=i;j++){
     res+="*" +" ";  
        
    }
    console.log(res);
}