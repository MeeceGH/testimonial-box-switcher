const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-img');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque reiciendis amet nostrum accusamus, quasi cupiditate, quia sequi dolorem fugiat labore. Pariatur animi deserunt in cumque excepturi voluptatem nisi, aperiam recusandae, magni, quibusdam sit suscipit perspiciatis consequatur ut alias blanditiis?'
    },
    {
        name: 'Miyah Myles 2',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque reiciendis amet nostrum accusamus, quasi cupiditate, quia sequi dolorem fugiat labore. Pariatur animi deserunt in cumque excepturi voluptatem nisi, aperiam recusandae, magni, quibusdam sit suscipit perspiciatis consequatur ut alias blanditiis?'
    },
    {
        name: 'Miyah Myles 3',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque reiciendis amet nostrum accusamus, quasi cupiditate, quia sequi dolorem fugiat labore. Pariatur animi deserunt in cumque excepturi voluptatem nisi, aperiam recusandae, magni, quibusdam sit suscipit perspiciatis consequatur ut alias blanditiis?'
    },
    {
        name: 'Miyah Myles 4',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque reiciendis amet nostrum accusamus, quasi cupiditate, quia sequi dolorem fugiat labore. Pariatur animi deserunt in cumque excepturi voluptatem nisi, aperiam recusandae, magni, quibusdam sit suscipit perspiciatis consequatur ut alias blanditiis?'
    },
    {
        name: 'Miyah Myles 5',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque reiciendis amet nostrum accusamus, quasi cupiditate, quia sequi dolorem fugiat labore. Pariatur animi deserunt in cumque excepturi voluptatem nisi, aperiam recusandae, magni, quibusdam sit suscipit perspiciatis consequatur ut alias blanditiis?'
    },
    {
        name: 'Miyah Myles 6',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, cumque reiciendis amet nostrum accusamus, quasi cupiditate, quia sequi dolorem fugiat labore. Pariatur animi deserunt in cumque excepturi voluptatem nisi, aperiam recusandae, magni, quibusdam sit suscipit perspiciatis consequatur ut alias blanditiis?'
    }
]

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);