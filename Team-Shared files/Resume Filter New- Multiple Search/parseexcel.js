 var input=document.getElementById('input');
     input.addEventListener('change', function() {
        readXlsxFile(input.files[0],{type:'array'}).then(function(data){ //call back function
          var i=0;
        data.map((row, index)=>{
            if (i==0){
              let table= document.getElementById('tbl-data');
              generateTableHead(table,row);
            }
            if (i==1){
                newRow.append(';')
            }
            if(i>0) {
              let table = document.getElementById('tbl-data');
              generateTableRows(table,row);
            }
            i++;
            console.log(data[i])
            var result = XLSX.utils.sheet_to_json(data, { header: 0 });
            // var myArr = String(data).split(",").map((data)=>{
            //     return data
            //   })
              var arjun = data
              var len = arjun.length
              console.log(arjun.length)
              document.getElementById("live").value = len;
                
              
        //   console.log(String.split(data,3))
          console.log(data[i])
        //   var raj=JSON.stringify(data, ';', 0))
          
        //   console.log(raj)
        //   document.getElementById('raj').value=raj;
        //   document.getElementById('new').innerHTML=data;
        // document.getElementById('new').value=data;
        const cars = data;
        let manu="";
        for (let i = 0; i < cars.length; i++) {
            manu += cars[i] + ";";
          }
        document.getElementById("demo").value = manu;
        console.log(manu);
        let bike = manu;
        const y = bike.split(';')
        for (i in bike){
            console.log(y[i])
            // document.getElementById("live").value = y;
            i++;
        }
        const z= y;
        console.log(y.length);
    
        // document.getElementById("live").value = y[i];
        // console.log(y[i])
        // let x="";
        // for (let i = 0; i < bike.length; i++) {
        //     x += bike[i] + ";";
        //   }
        // document.getElementById("live").value = x;
        // console.log(x);
          
          })
        });
      });
      function generateTableHead(table,data){
        let thead = table.createTHead();
        let row = thead.insertRow();
        for(let key of data) {
          let th = document.createElement('th');
          let text= document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
          console.log(th)
          ;
        }
        
    //    function ranj(){
    //         for(let i of arjun) {
    //             ranj.split(arjun,3)
    //         }
    //         return ranj;
    //     }
    //     console.log(ranj);
    //   }
      }
      function generateTableRows(table,data){
        var newRow = table.insertRow(-1);//Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
        data.map((row,index)=> {
          let newCell = newRow.insertCell();
          let newText = document.createTextNode(row);
          newCell.appendChild(newText);
          console.log(newRow)
        });
       
        //     data.map((row,index)=> {
        //       let newCell = newRow.insertCell();
        //       let newText = document.createTextNode(row);
        //       newCell.appendChild(newText);
//         });
    
// }
        
        // var arjun=data
        // console.log(arjun)
        // document.getElementById('new').innerHTML=data[1];
        
        //     let arju1 = data
        //     let body={}
        //     console.log(arju1)
        //     for(let i = 0; i < arju1.length; i++){
        //       if (arju1[i].name !== ""){
        //        body[arju1[i].name]= arju1[i].value;
        //      }
        //     }
    }    
    
  
    

     