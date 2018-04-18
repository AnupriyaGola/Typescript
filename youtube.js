//defining a class
var Youtube = /** @class */ (function () {
    //a constructor which is used to initialize a class filelds.
    function Youtube(videoTitle, publisher, publishDate, views, subscribe, no_of_likes, no_of_dislikes, category, license, music) {
        var _this = this;
        this.getNumberofViews = function () {
            return _this.views;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getPublishedDate = function () {
            return _this.publishDate;
        };
        this.getRating = function () {
            if ((_this.no_of_likes) > (_this.no_of_dislikes)) {
                return (_this.videoTitle + " has rating 5");
            }
            else {
                return (_this.videoTitle + " has below rating 5");
            }
        };
        this.getPublisher = function () {
            return _this.publisher;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getlicense = function () {
            return _this.license;
        };
        this.getRelatedVideos = function () {
            return ("Will be shown soon");
        };
        this.getNoOfLikes = function () {
            return _this.no_of_likes;
        };
        this.getNoOfDislikes = function () {
            return _this.no_of_dislikes;
        };
        this.getComments = function () {
            return ("Loading");
        };
        this.setNoOfViews = function (newview) {
            _this.views = (newview) + 1;
        };
        this.setPublisherName = function (NameP) {
            _this.publisher = NameP;
        };
        this.videoTitle = videoTitle;
        this.publisher = publisher;
        this.publishDate = publishDate;
        this.views = views;
        this.subscribe = subscribe;
        this.no_of_likes = no_of_likes;
        this.no_of_dislikes = no_of_dislikes;
        this.category = category;
        this.license = license;
        this.music = music;
    } //end constructor
    return Youtube;
}()); //end class
var video1 = new Youtube("Rings", "Paramount Pictures International", "Aug 24 2016", 5082933, 380000, 16000, 19000, "Entertainment", "Standard Youtube License");
var video2 = new Youtube("Sinter 2", "JUJU MANUEL", "Dec 14 2015", 336962, 2000, 14800, 1000, "People & Blogs");
var cat = video1.getCategory();
var title = video1.getVideoTitle();
var date = video1.getPublishedDate();
var License = video1.getlicense();
var ratings = video1.getRating();
var like = video1.getNoOfLikes();
var dislike = video1.getNoOfDislikes();
var comment = video1.getComments();
var views = video1.getNumberofViews();
video1.setNoOfViews(views);
var newviews = video1.getNumberofViews();
var Publish = video1.getPublisher();
var cat2 = video2.getCategory();
var views2 = video2.getNumberofViews();
var title2 = video2.getVideoTitle();
var date2 = video2.getPublishedDate();
var License2 = video2.getlicense();
var ratings2 = video2.getRating();
var like2 = video2.getNoOfLikes();
var dislike2 = video2.getNoOfDislikes();
var comment2 = video2.getComments();
var publishername = video2.getPublisher();
video2.setPublisherName("Anupriya Gola");
var newpublisher = video2.getPublisher();
console.log("Category: " + cat + "\nVideo Title: " + title + "\nPublished Date: " + date + "\nLicense: " + License + "\nRatings: " + ratings + "\nNo Of Likes: " + like + "\nNo Of Dislikes: " + dislike + "\nComments: " + comment + "\nViews: " + views + "\nUpdated No of Views: " + newviews + "\nPublisher: " + Publish);
console.log("\nCategory: " + cat2 + "\nVideo Title: " + title2 + "\nPublished Date: " + date2 + "\nViews: " + views2 + "\nLicense: " + License2 + "\nRatings: " + ratings2 + "\nNo Of Likes: " + like2 + "\nNo Of Dislikes: " + dislike2 + "\nComments: " + comment2 + "\nPublisher: " + publishername + "\nUpdated Publisher: " + newpublisher);
