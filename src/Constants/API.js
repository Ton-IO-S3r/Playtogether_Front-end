const API_URL = "http://localhost:8000/api/";
const photoAPI = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/"
const BACKGROUNDS_URL = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/images/bg/"
const imgField = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/field"
const fieldServicesIconURL = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/icons/"
const AUTH_TOKEN = localStorage.getItem("token");
const AUTH_ID = localStorage.getItem("id")
const AUTH_PHOTO = localStorage.getItem("player_photo")
const isAuthenticated = localStorage.getItem("token");
export {API_URL, photoAPI,AUTH_TOKEN,AUTH_ID,imgField, fieldServicesIconURL, AUTH_PHOTO,isAuthenticated,BACKGROUNDS_URL}
