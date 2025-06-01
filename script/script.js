let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

// Автоматическое переключение слайдов
// Переключение каждые 5 секунд



// const cardsData = [
//     {
//         className: "partall__Tv__ob",
//         imageClass: "partall__Tv",
//         title: "Portal TV",
//         description: "Умные видеозвонки на самом большом экране вашего дома",
//         link: "#"
//     },
//     {
//         className: "partall__ob",
//         imageClass: "partall",
//         title: "Portal",
//         description: "Умные видеовызовы на 10-дюймовом HD-дисплее",
//         link: "#"
//     },
//     {
//         className: "partall__pllus__Ob",
//         imageClass: "partall__pllus",
//         title: "Portal+",
//         description: "Умные видеовызовы на HD-дисплее с диагональю 15,6 дюйма",
//         link: "#"
//     },
//     {
//         className: "partall__mini__ob",
//         imageClass: "partall__mini",
//         title: "Portal Mini",
//         description: "Умные видеовызовы на 8-дюймовом HD-дисплее",
//         link: "#"
//     }
// ];
// function createCard(card) {
//     return `
//         <div class="${card.className}">
//             <div class="${card.imageClass}"></div>
//             <div class="title__partall__tv">
//                 <p class="title__partall__tv__decaration">${card.title}</p>
//             </div>
//             <div class="title__partall__tv__decaration__1">
//                 <p>${card.description}</p>
//             </div>
//             <div class="button__partall__tv">
//                 <a class="button__partall__tv__decaration" href="${card.link}">Узнать больше</a>
//             </div>
//         </div>
//     `;
// }
// function renderCards() {
//     const cardContainer = document.querySelector(".card__Partall");
//     console.log(cardContainer);
//     /*  cardContainer.innerHTML = ''; */ // Очищаем контейнер перед добавлением новых карточек

//     cardsData.forEach(card => {
//         console.log(card);

//         const cardElement = createCard(card);
//         console.log(cardElement);

//         console.log(cardContainer);


//         cardContainer.insertAdjacentHTML('beforeend', cardElement);
//     });
// }

// // Вызов функции для отрисовки карточек
// renderCards();

// Загрузка и отображение карточек удобств

const apiUrl = '../data.json';
const container = document.querySelector('.card__Partall');

function createCard(className, imageClass, title, description, link) {
    return `
        <div class="${className}">
            <div class="${imageClass}"></div>
            <div class="title__partall__tv">
                <p class="title__partall__tv__decaration">${title}</p>
            </div>
            <div class="title__partall__tv__decaration__1">
                <p>${description}</p>
            </div>
            <div class="button__partall__tv">
                <a class="button__partall__tv__decaration" href="${link}">Узнать больше</a>
            </div>
        </div>
  `;
}

if (container) {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Реакция сети была не в порядке');
            }
            return response.json();
        })
        .then((data) => {
            data.forEach(item => {
                container.insertAdjacentHTML('beforeend', createCard(item.className, item.imageClass, item.title, item.description, item.link));
            });
        })
        .catch((error) => {
            console.error('Возникла проблема с операцией выборки:', error);

            const defaultCards = [
                {
                    className: "partall__Tv__ob",
                    imageClass: "partall__Tv",
                    title: "Portal TV",
                    description: "Умные видеозвонки на самом большом экране вашего дома",
                    link: "#"
                },
                {
                    className: "partall__ob",
                    imageClass: "partall",
                    title: "Portal",
                    description: "Умные видеовызовы на 10-дюймовом HD-дисплее",
                    link: "#"
                },
                {
                    className: "partall__pllus__Ob",
                    imageClass: "partall__pllus",
                    title: "Portal+",
                    description: "Умные видеовызовы на HD-дисплее с диагональю 15,6 дюйма",
                    link: "#"
                },
                {
                    className: "partall__mini__ob",
                    imageClass: "partall__mini",
                    title: "Portal Mini",
                    description: "Умные видеовызовы на 8-дюймовом HD-дисплее",
                    link: "#"
                }
            ];
            defaultCards.forEach(card => {
                container.insertAdjacentHTML('beforeend', createCard(card.className, card.imageClass, card.title,  card.description,card.link));
            });
        });
}


const privolder = document.querySelector('.privolder');
const prosent = document.getElementById('prosent');
const wrapper = document.querySelector('.wrapper');


if (privolder && wrapper) {
    let percentage = 0;
    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            prosent.innerHTML = percentage;
        } else {
            clearInterval(interval);
        }
    }, 30);

    setTimeout(() => {
        privolder.style.opacity = '0';
        privolder.style.visibility = 'hidden';

        wrapper.style.display = 'block';

        privolder.remove();
    }, 3000);
}

