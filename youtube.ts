//defining a class
class Youtube{

    //fields or properties
    private videoTitle : string;
    private publisher : string;
    private publishDate : any;
    private views : number;
    private subscribe : number;
    private no_of_likes : number;
    private no_of_dislikes : number;
    private category : string;
    private license : string;
    private music : string;

    //a constructor which is used to initialize a class filelds.
    constructor(videoTitle:string,publisher:string,publishDate:any,views:number,subscribe:number,no_of_likes:number,no_of_dislikes:number,category:string,license?:string,music?:string){
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

    getNumberofViews =()=>{
        return this.views;
    }

    getVideoTitle=()=>{
        return this.videoTitle;
    }
    
    getPublishedDate=()=>{
        return this.publishDate;
    }

    getRating=()=>{
        if((this.no_of_likes) > (this.no_of_dislikes)) {
        return (this.videoTitle +" has rating 5");
        }
        else{
            return (this.videoTitle +" has below rating 5")
        }
    }

    getPublisher=()=>{
        return this.publisher;
    }

    getCategory=()=>{
        return this.category;
    }

    getlicense=()=>{
        return this.license;
    }

    getRelatedVideos=()=>{
        return ("Will be shown soon")
    }

    getNoOfLikes=()=>{
        return this.no_of_likes;
    }

    getNoOfDislikes=()=>{
        return this.no_of_dislikes;
    }

    getComments=()=>{
        return ("Loading")
    }

    setNoOfViews =(newview : number)=>{
        this.views = (newview) + 1;
    }

    setPublisherName=(NameP : string)=>{
        this.publisher = NameP;
    }

} //end class

let video1 = new Youtube("Rings","Paramount Pictures International","Aug 24 2016",5082933,380000,16000,19000,"Entertainment","Standard Youtube License")
let video2 = new Youtube("Sinter 2","JUJU MANUEL","Dec 14 2015",336962,2000,14800,1000,"People & Blogs")

let cat = video1.getCategory()
let title =video1.getVideoTitle()
let date = video1.getPublishedDate()
let License =video1.getlicense()
let ratings = video1.getRating()
let like = video1.getNoOfLikes()
let dislike = video1.getNoOfDislikes()
let comment = video1.getComments()
let views = video1.getNumberofViews()
video1.setNoOfViews(views)
let newviews = video1.getNumberofViews()
let Publish = video1.getPublisher()


let cat2 = video2.getCategory()
let views2 = video2.getNumberofViews()
let title2 =video2.getVideoTitle()
let date2 = video2.getPublishedDate()
let License2 =video2.getlicense()
let ratings2 = video2.getRating()
let like2 = video2.getNoOfLikes()
let dislike2 = video2.getNoOfDislikes()
let comment2 = video2.getComments()
let publishername = video2.getPublisher()
video2.setPublisherName("Anupriya Gola")
let newpublisher = video2.getPublisher()

console.log("Category: " +cat +"\nVideo Title: " +title +"\nPublished Date: " +date  +"\nLicense: " +License +"\nRatings: " +ratings +"\nNo Of Likes: " +like +"\nNo Of Dislikes: " +dislike +"\nComments: " +comment +"\nViews: " +views +"\nUpdated No of Views: " +newviews +"\nPublisher: " +Publish)
console.log("\nCategory: " +cat2 +"\nVideo Title: " +title2 +"\nPublished Date: " +date2 +"\nViews: " +views2 +"\nLicense: " +License2 +"\nRatings: " +ratings2 +"\nNo Of Likes: " +like2 +"\nNo Of Dislikes: " +dislike2 +"\nComments: " +comment2 +"\nPublisher: " +publishername +"\nUpdated Publisher: " +newpublisher)