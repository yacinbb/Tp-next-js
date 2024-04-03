/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["res.cloudinary.com","www.google.com","www.iset.com"]
        },
        env:{
            API_URL : "http://localhost:3001/api",
            SECRET :"secret"
            }
};

module.exports = nextConfig;
