export class AppConfig{
  // url of image  upload on server
  public static urlImgpost="http://192.168.1.129:8095//musicguru/file/upload";
  // url of song upload on server
  public static urlSongpost="http://192.168.1.129:8095//musicguru/file/upload/audio";
  // url of image get from serve
  public static  urlImgget="http://192.168.1.129:8095/musicguru/get/";
  // url of song get from server
  public static  urlsongget= "http://192.168.1.129:8095/musicguru/playsong/";
  // url of put song data into database from admin
  public static uploadSongUrl = "http://192.168.1.129:8095/musicguru/songs";
  // url of getting all song data from database
  public static getAll = "http://192.168.1.129:8095/musicguru/all";
  // url of put user selected song into playlist
  public static mymusicdb="http://192.168.1.129:8095/mymusic/postsong";
  // url of getting all user selected song from database
  public static getAllMymusic="http://192.168.1.129:8095/mymusic/all";
  // url of delete song from playlist
  public static songdelete="http://192.168.1.129:8095/mymusic/";
  // url of download the song
  public static downlaodUrl="http://192.168.1.129:8095/musicguru/download/";
  // url of login page
  public static loginUrl="http://192.168.1.129:8095/userlog/verify";
  // url of registration
  public static registerdata="http://192.168.1.129:8095/userlog/Userdata";
  // url of contact data store in database
  public static contacturl="http://192.168.1.129:8095/contactlog/Usercontact";
  // url of feedback data store in database
  public static feedbackurl="http://192.168.1.129:8095/feedbacklog/Userfeedback";
  // url of getting song from playlist data
  public static getmysong="http://192.168.1.129:8095/mymusic/all";
  // search the songs
   public static searchByNameUrl="http://192.168.1.129:8095/musicguru/songs/search/name=";
   // to authenticate the user for login
    public static gettokenUrl="http://192.168.1.129:8095/userlog";
}
