let arrayListItem = []; // contain the list 54 item in the array
let page = 0; // set first page index
let listItem = document.getElementsByClassName('contact-item cf');
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const contactList = document.querySelector(".contact-list");
const pageList = document.querySelector(".pagination-list");



for(let i = 0; i<listItem.length;i++){ //pust all element with class name 'contact-item cf' to array 
    
    arrayListItem.push(listItem[i]);
}

let totalPageNumer = Math.ceil(listItem.length/10); // to calculate how many pages are needed to be included
                                                    //if there are 33 students there must be totalPageNumber = 3

                                                    //console.log(totalPageNumer);

function paginate(){   //get 10 first item, setup for these 54 students 
    for (let i =page;i < page + 10;i++){
        contactList.appendChild(arrayListItem[i]);
    }
}

contactList.innerHTML = ""; // clear default page

paginate(); // call function to show 10 first item
exportPageNumber();

function exportPageNumber(){ // this method will change HTML on a web page.
    let html =``; 
    for(let i = 1; i<= totalPageNumer;i++){
        html += `<li class="pagination-list"> <a href="#">${i}</a></li>`;
    }
    pageList.innerHTML = html;
}

next.addEventListener('click',()=>{ // arrow function for next page
    page >= arrayListItem.length -10 ? (page =0):(page +=10);   // one line clause (if page greater or equal list_length wil get back to first page, 
                                                                //if not page + 10)
    contactList.innerHTML = ""; // clear last page passed
    
    paginate();
  
})

previous.addEventListener('click',()=>{
    page == 0 ? (page == arrayListItem.length -10):(page -=10);
    contactList.innerHTML = ""; // clear last page pass
    paginate();
})


/**
 * This code almost working fine by clicking on previous and next button
 * only clicking on the page number won't not work --> I am still working to figure out how to do that
 * But for sure I set the method to calculate number of page (if 33 items there will be 3 page number display)
 * 
 */









 







