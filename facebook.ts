//defining class
class Facebook{
    //field or properties

    private name : string;
    private gender : string;
    private work : string;
    private education : string;
    private hometown : string;
    private currentCity : string;
    private contactNo : number[];
    private email : string;
    private address : string;
    private website : string[];
    private DOB : any;
    private year : number;
    private language : string[];
    private religiousViews :  string;
    private nickname : string;
    private quote :  string;


    //a constructor which is used to initialize a class fields
    constructor(name:string,gender:string,work:string,education:string,hometown:string,currentCity:string,contactNo:number[],email:string,address:string,DOB:any,year:number,language:string[],website:string[],religiousViews?:string,nickname?:string,quote?:string){
        this.name = name;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.hometown = hometown;
        this.currentCity = currentCity;
        this.contactNo = contactNo;
        this.email = email;
        this.address = address;
        this.DOB = DOB;
        this.year = year;
        this.language = language;
        this.religiousViews = religiousViews;
        this.nickname = nickname;
        this.quote = quote;
        this.website = website;
    } //end constructor
    getName=()=>{
        return this.name;
    }

    getgender=()=>{
        return this.gender;
    }

    getEmail=()=>{
        return this.email;
    }

    getcontactNo=()=>{
        return this.contactNo[0];
    }

    getAge=()=>{
       let date = new Date();
       let age =  (date.getFullYear() - this.year);
       return age;
    }

    getNickname=()=>{
        return this.nickname;
    }

    gethometown=()=>{
        return this.hometown;
    }

    getcurrentCity=()=>{
        return this.currentCity;
    }

    setcurrentCity = (currCity:string)=>{
        this.currentCity = currCity;
    }

    getWebsite = ()=>{
        return this.website;
    }

    setWebsite = (web:string)=>{
        this.website[1] = web
    }

    setName=(newname:string)=>{
        this.name = newname;
    }
}//end class

let User1 = new Facebook("Anupriya Gola","Female","Senior Associate NTT Data Noida","Delhi Public School, Mathura","Mathura, Uttar Pradesh","Pune, Maharshtra",[8299848252,9454116783],"anupriya.gola@gmail.com","Acharya Nagar, Mathura","9 May",1993,["U.S. English","Hindi"],["http://Anupriy.Sarahah.com/"],"Believe in all Religions","Nikki","An aimless lyf is a miserable lyf")
let User2 = new Facebook("Adhyan Gola","Male","Student at GLA University, Mathura","Delhi Public School, Mathura","Mathura, Uttar Pradesh","Noida, Uttar Pradesh",[8791145410],"adhyan.gola@gmail.com","Acharya Nagar, Mathura","18 July",1998,["U.S. English","Hindi"],["https://adhyan.gola.Sarahah.com"])

let Name = User1.getName()
let Gender = User1.getgender()
let mail = User1.getEmail()
let contact = User1.getcontactNo()
let Age = User1.getAge()
let nick = User1.getNickname()
let home = User1.gethometown()
let current = User1.getcurrentCity()
User1.setcurrentCity("Noida, Uttar Pradesh")
let newCity = User1.getcurrentCity()
let Website = User1.getWebsite()
User1.setWebsite("https://anupriyagola.github.io/")
let newWebsite = User1.getWebsite()

let Name2 = User2.getName()
User2.setName("Adhyan (ADI)")
let Name3 = User2.getName()
let Gender2 = User2.getgender()
let mail2 = User2.getEmail()
let contact2 = User2.getcontactNo()
let Age2 = User2.getAge()
let nick2 = User2.getNickname()
let home2 = User2.gethometown()
let current2 = User2.getcurrentCity()
User2.setcurrentCity("Noida, Uttar Pradesh")
let newCity2 = User2.getcurrentCity()
let Website2 = User2.getWebsite()


console.log("Name: " +Name  +"\nGender: " +Gender +"\nEmail: " +mail +"\nContactNo: " +contact +"\nAge: " +Age +"\nNickname: " +nick +"\nHomeTown: " +home +"\nCurrentCity: " +current +"\nUpdated CurrentCity: " +newCity +"\nWebsite: " +Website +"\nNew Updated Website: " +newWebsite)

console.log("\nName: " +Name2 +"\nUpdated Name: " +Name3 +"\nGender: " +Gender2 +"\nEmail: " +mail2 +"\nContactNo: " +contact2 +"\nAge: " +Age2 +"\nNickname: " +nick2 +"\nHomeTown: " +home2 +"\nCurrentCity: " +current2 +"\nUpdated CurrentCity: " +newCity2 +"\nWebsite: " +Website2)

