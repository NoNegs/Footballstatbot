function fetchResults() {    
    const request = new XMLHttpRequest();  

request.onload = () => { 
    const parsedData = JSON.parse(request.responseText);   
    console.log(parsedData); 

    for(let obj of parsedData) {           
        const memberContainer = document.createElement('tr')    
   
          const fN = document.createElement('td'); 
           if (obj.first_name) {         
           fN.innerText = (obj.first_name);   
           memberContainer.append(fN);
               console.log(fN[0]);

          const sN = document.createElement('td'); 
           if (obj.second_name) {         
           sN.innerText = (obj.second_name);   
           memberContainer.append(sN);
               console.log(sN[0]);

          const sG = document.createElement('td'); 
           if (obj.suggestions) {         
           sG.innerText = (obj.suggestions);   
           memberContainer.append(sG);
               console.log(sG[0]);

        
 
     }

     document.getElementById('result').append(memberContainer)            
    }
         }}};   
        
     request.open('GET',  'http://localhost:3003/suggestions/');
     
     request.send(); 
    
    }
     
     fetchResults();