$(function () {

    var dataObject = {
        users: [
            {
                name: 'Ievgen Averianov',
                photo: 'img/img_1.jpg',
                description: 'Junior Front-end Developer',
                skill_1: 'HTML & CSS',
                skill_2: 'JavaScript & jQuery',
                skill_3: 'WebStorm & Github',
                location: 'Kiev, Ukraine',
                phoneNumber: '+380502178618',
                githubProfile: 'https://github.com/ievgenaverianov',

            },

            {
                name: 'Groot',
                photo: 'img/img_2.jpg',
                description: 'I Am Groot',
                skill_1: 'Control trees and plants',
                skill_2: 'Resistance to fire',
                skill_3: 'Regrowing from a sprig',
                location: 'Planet X',
                phoneNumber: 'Do not need one',
                githubProfile: 'https://github.com/iamgroot',

            },
        ]
    }

    var userCard = document.getElementsByClassName("content")[0];
    userCard.innerHTML = tmpl("user_card", dataObject);
    
})