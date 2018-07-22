/* 
Activity: Contact manager
*/

// TODO: Complete the program

//Object Person Declaration
var Person = {
    firstName: "",
    lastName : "",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
var contact = [
    {
        firstName: "John",
        lastName : "smith",
    },
  
    {
        firstName: "Doe",
        lastName : "Jane",
    },
  ]

//variable for detection of choice
var response;

// List of All Contact
function ListOfAllContact()
{
    for (i = 0; i <contact.length; i++) {
       console.log(contact[i].fullName);
    }
}

function addEntry() {
    var f=prompt("Give the first Name please");
    Person.firstName=f;
    var p=prompt("Give the SecondName");
    Person.SecondName=s;
    contact.push(Person);
  }


function menu()
{
    
      console.log("Welcome to your Contact Manager\n");
      console.log("1:List Of All Contact Manager");
      console.log("2:Add a Contact");
      console.log("0:QUIT");
      do
      {
     while(response!='1' || response!='2' || response!='0')
      {
        response=prompt("Put response");
        alert(response);
      }

     if(response=='1')
       {ListOfAllContact();}
       else if(response=='2')
       {   
           addEntry();}
        else
        {console.log("Good Bye");}
    
    
    
    }
    while(response!='0');
}

menu();





