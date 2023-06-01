 let myLead = []
 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")
const leadFromLocalStorage= JSON.parse(localStorage.getItem("myLead"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")
if(leadFromLocalStorage){
    myLead = leadFromLocalStorage
    render(myLead)
}
const tab = [
    {url: "www.github/Abdultawa.com"}
]

tabBtn.addEventListener("click", function() {
chrome.tab.query({active:true, currentWindow:true} , function() {
 
    myLead.push(tab[0].url)
    localStorage.setItem("myLead", JSON.stringify(myLead) )
    render(myLead)
})
    
})

function render(Lead) {
    let listItems = " "
   for (let i = 0; i< Lead.length; i++ ){
       // listItems += "<li><a target='_blank'href='"+ myLead[i] +"'>"+ myLead[i] +"<a/></li>" 
   
       listItems +=`
       <li>
           <a target='_blank' href= '${Lead[i]}'>
           ${Lead[i]}
           </a>
       </li>
       `
   }
   ulEl.innerHTML = listItems
   
   }
deleteBtn.addEventListener ("dblclick", function() {
    localStorage.clear()
    myLead = []
    render(myLead)
})


inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLead))
  

    render(myLead)   
    
})
