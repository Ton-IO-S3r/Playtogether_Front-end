const API_URL = "http://localhost:8000/api/";
const photoAPI = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/user_"
const imgField = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/field"
const defaultAvatar = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/avatar_default.png"
const fieldServicesIconURL = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/assets/icons"
const AUTH_TOKEN = localStorage.getItem("token");
const AUTH_ID = localStorage.getItem("id")
export {API_URL, photoAPI,AUTH_TOKEN,AUTH_ID,imgField, fieldServicesIconURL, defaultAvatar}