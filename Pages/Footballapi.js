function fetchGoals(M) {   

    
    //console.log("->",M) 
    const request = new XMLHttpRequest();  

request.onload = () => { 
    document.getElementById('months').innerHTML="";
    const parsedData = JSON.parse(request.responseText);   
    console.log('DATA:', parsedData); 
    console.log(M);
    
for(let months of parsedData) {           
     const monthsContainer = document.createElement('tr')    
     monthsContainer.setAttribute('name', 'monthscontainer');
     monthsContainer.className = 'month';


       const el = document.createElement('td'); 
      if ( M.indexOf( months.Month )>=0) {  
            //if (months.Month == "August") { - use to select specific month           
        el.innerText = (months.Month)//+" "+(months.Goals);   
        monthsContainer.append(el);
            console.log(el[0]);  

        
        
        const gO = document.createElement('td'); 
            if (months.Goals) {         
            gO.innerText = (months.Goals);   
            monthsContainer.append(gO);
                console.log(gO[0]);
          
                
            }
         
        document.getElementById('months').append(monthsContainer)            
}
     }   
     };
     
     request.open('GET',  'http://localhost:3003/liverpool/');
     
     request.send();
     
    
     //window.location.replace("Goals.html")

     
}

