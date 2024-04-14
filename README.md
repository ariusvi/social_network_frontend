# Ract Frontend: Old Ink
<img src="./src/img/banner.png" alt="OldInkBanner">  

Welcome to the Baldur's Board's frontend api documentation. This api recreates a fictional social network website inspired in the game Baldur's Gate. This project is the frontend of [social_network_backend](https://github.com/ariusvi/social_network_backends) project.

---
    

# Contenido 📂
  <ol>
    <li><a href="# About the project 📜">About the project 📜</a></li>
    <li><a href="# Stack ⚓">Stack ⚓</a></li>
    <li><a href="# Local installation 💻">Local installation 💻</a></li>
    <li><a href="# First Design Ideas 💡">First Design Ideas 💡</a></li>
    <li><a href="# Roots 🔗">Roots 🔗</a></li>
    <li><a href="# Bugs 🐜">Bugs 🐜</a></li>
    <li><a href="# Future features ✨">Future features ✨</a></li>
    <li><a href="# Author ✒️">Author ✒️</a></li>
    <li><a href="# Acknowledgements 🙏">Acknowledgements 🙏</a></li>
    </ol>

# About the project 📜
This project is the frontend part of a fictional social network website inspired in the game Baldur's Gate. React has been mainly used. This project connects to a mongo database from project [social_network_backend](https://github.com/ariusvi/social_network_backends).

The Baldur's Board is a frontend project aimed at replicating the user experience of a social media platform akin to Twitter, infused with the aesthetic and themes from the iconic Baldur's Gate video game series. 

Users are provided with functionalities to register, log in, and customize their profiles, including options to set a nickname, upload an avatar, and write a biography. Additionally, users can create and share posts, each consisting of a title, an image (linked via URL), and a description. Furthermore, users can engage with the content by liking posts created by other users.


# Stack ⚓
<div align="center">
<a href="https://www.reactjs.com/">
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
</a>
<a href="">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MONGODB" />
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS"/>
</a>
<a href="">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/bcrypt-3178C6?style=for-the-badge&" alt="TypeScript" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black" alt="Photoshop" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" alt="Illustrator" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
</a>
<a href="">
    <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="Gi" />
</a>
 </div>


# Local installation 💻
 ## Backend
 - Go to: [social_network_backend](https://github.com/ariusvi/social_network_backend)
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/social_network_backend `
2. Install dependencies
 ``` $ npm install --y ``` 
3. Start Express on the server
 ``` $ npm run dev ```
4. Run seeders
 ``` $ npm run seed ``` 

 ## Frontend
1. Clone the repository
 ` $ git clone https://github.com/ariusvi/social_network_frontend `
2. Install dependencies
 ``` $ npm install --y ``` 
3. Start Express on the server
 ``` $ npm run dev ```

 
## Users credentials
- User
```json
nickname: "user",
email: "user@user.com",
password: 123456,
role: "user"
```
- Admin
```json
nickname: "admin",
email: "admin@admin.com",
password: 123456,
role: "admin"
```
- Super_admin
```json
nickname: "superadmin",
email: "superadmin@superadmin.com",
password: 123456,
role: "super_admin"
```

- BitterPro
```json
nickname: "BitterPro",
email: "astarion@email.com",
password: 123456,
role: "user"
```

- BBQgirl
```json
nickname: "BBQgirl",
email: "karlach@email.com",
password: 123456,
role: "user"
```

- Shadowheart
```json
nickname: "Shadowheart",
email: "shadowheart@email.com",
password: 123456,
role: "user"
```

- Volo
```json
nickname: "Volo",
email:"volo@email.com",
password: 123456,
role: "user"
```

# First Design Ideas 💡
<img src="./src/img/home_baldurs_board.jpg">


  
<img src="./src/img/profile_baldurs_board.jpg">

1. Home  

<img src="./src/img/01_home.JPG">  


2. Login  

<img src="./src/img/04_sigin.JPG">  


3. Register  

<img src="./src/img/05_register.JPG">  


4. New Post  

<img src="./src/img/03_newpost.JPG">  


5. Profile  

<img src="./src/img/02_profile.JPG">  


6. SuperAdmin 

<img src="./src/img/06_superadmin.JPG">  


# Bugs 🐜
- When user update their profile, they have to log-out and log-in to see the update data.


# Future features ✨
- Change design as first idea design.
- SuperAdmin pannel functional: edit, delete users and posts
- Follow functionality
- See other user's profile
- Searching fields (for admin pannel and at general view for looking for any user by their nickname)
- Data validation

# Author ✒️
* Ana Rius 
    * [GitHub](https://github.com/ariusvi)

# Acknowledgements 🙏
Thanks to my classmates:<br>
[Pedro](https://github.com/Eryhnar) for his patience and help, especially to confirm that I understand things.<br>
[Marina](https://github.com/marinaescriva) and [Marta](https://github.com/MartaGBayona) for her moral support, joint laughter and tears, as well as her help.<br>
