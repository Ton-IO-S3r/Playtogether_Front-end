const API_URL = "http://localhost:8000/api/";
const photoAPI = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/user_"
const imgField = "https://django-playtogether-media.s3.us-east-2.amazonaws.com/field"
const AUTH_TOKEN = localStorage.getItem("token");
const AUTH_ID = localStorage.getItem("id")
export {API_URL, photoAPI,AUTH_TOKEN,AUTH_ID,imgField}