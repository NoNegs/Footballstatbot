function fetchResults() {    
    const request = new XMLHttpRequest();  

request.onload = () => { 
    const parsedData = JSON.parse(request.responseText);   
    console.log(parsedData); 

    for(let obj of parsedData) {           
        const memberContainer = document.createElement('tr')    
   
          const el = document.createElement('tr'); 
           if (obj.first_name + obj.second_name + obj.suggestions) {         
           el.innerText = (obj.first_name + ' ' + obj.second_name + ' ' + ' ' + obj.suggestions);   
           memberContainer.append(el);
               console.log(el[0]);
 
     }

     document.getElementById('result').append(memberContainer)            
    }
         }   
        
     request.open('GET',  'http://localhost:3003/suggestions/');
     
     request.send(); 
    
    }
     
     fetchResults();