//defining class
var Facebook = /** @class */ (function () {
    //a constructor which is used to initialize a class fields
    function Facebook(name, gender, work, education, hometown, currentCity, contactNo, email, address, DOB, year, language, website, religiousViews, nickname, quote) {
        var _this = this;
        this.getName = function () {
            return _this.name;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getcontactNo = function () {
            return _this.contactNo[0];
        };
        this.getAge = function () {
            var date = new Date();
            var age = (date.getFullYear() - _this.year);
            return age;
        };
        this.getNickname = function () {
            return _this.nickname;
        };
        this.gethometown = function () {
            return _this.hometown;
        };
        this.getcurrentCity = function () {
            return _this.currentCity;
        };
        this.setcurrentCity = function (currCity) {
            _this.currentCity = currCity;
        };
        this.getWebsite = function () {
            return _this.website;
        };
        this.setWebsite = function (web) {
            _this.website[1] = web;
        };
        this.setName = function (newname) {
            _this.name = newname;
        };
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
    return Facebook;
}()); //end class
var User1 = new Facebook("Anupriya Gola", "Female", "Senior Associate NTT Data Noida", "Delhi Public School, Mathura", "Mathura, Uttar Pradesh", "Pune, Maharshtra", [8299848252, 9454116783], "anupriya.gola@gmail.com", "Acharya Nagar, Mathura", "9 May", 1993, ["U.S. English", "Hindi"], ["http://Anupriy.Sarahah.com/"], "Believe in all Religions", "Nikki", "An aimless lyf is a miserable lyf");
var User2 = new Facebook("Adhyan Gola", "Male", "Student at GLA University, Mathura", "Delhi Public School, Mathura", "Mathura, Uttar Pradesh", "Noida, Uttar Pradesh", [8791145410], "adhyan.gola@gmail.com", "Acharya Nagar, Mathura", "18 July", 1998, ["U.S. English", "Hindi"], ["https://adhyan.gola.Sarahah.com"]);
var Name = User1.getName();
var Gender = User1.getgender();
var mail = User1.getEmail();
var contact = User1.getcontactNo();
var Age = User1.getAge();
var nick = User1.getNickname();
var home = User1.gethometown();
var current = User1.getcurrentCity();
User1.setcurrentCity("Noida, Uttar Pradesh");
var newCity = User1.getcurrentCity();
var Website = User1.getWebsite();
User1.setWebsite("https://anupriyagola.github.io/");
var newWebsite = User1.getWebsite();
var Name2 = User2.getName();
User2.setName("Adhyan (ADI)");
var Name3 = User2.getName();
var Gender2 = User2.getgender();
var mail2 = User2.getEmail();
var contact2 = User2.getcontactNo();
var Age2 = User2.getAge();
var nick2 = User2.getNickname();
var home2 = User2.gethometown();
var current2 = User2.getcurrentCity();
User2.setcurrentCity("Noida, Uttar Pradesh");
var newCity2 = User2.getcurrentCity();
var Website2 = User2.getWebsite();
console.log("Name: " + Name + "\nGender: " + Gender + "\nEmail: " + mail + "\nContactNo: " + contact + "\nAge: " + Age + "\nNickname: " + nick + "\nHomeTown: " + home + "\nCurrentCity: " + current + "\nUpdated CurrentCity: " + newCity + "\nWebsite: " + Website + "\nNew Updated Website: " + newWebsite);
console.log("\nName: " + Name2 + "\nUpdated Name: " + Name3 + "\nGender: " + Gender2 + "\nEmail: " + mail2 + "\nContactNo: " + contact2 + "\nAge: " + Age2 + "\nNickname: " + nick2 + "\nHomeTown: " + home2 + "\nCurrentCity: " + current2 + "\nUpdated CurrentCity: " + newCity2 + "\nWebsite: " + Website2);
