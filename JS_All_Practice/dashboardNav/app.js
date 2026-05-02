const path =  window.location.pathname
let startnum ;
let endNum ;

function pageSet(){

    for(let i = path.length ; i >= 0 ; i--){
        
        if(path[i] == "."){
            endNum = i        
        }if(path[i]=="/"){
            startnum = i+1
            break;}    
        }
        let copy = path.slice(startnum , endNum )
        
        // if(copy == 'index'){
            
        // //  let element =  document.getElementsByTagName('body')[0]
        // // element.style.backgroundColor='red'
        // }

        if(copy == 'users'){
            document.getElementsByTagName('body')[0].style.backgroundColor='green'
        }
}



