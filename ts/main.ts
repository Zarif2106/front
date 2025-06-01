const message: string = "Hello TypeScript!";
console.log(message);
// Определение интерфейса для структуры карточки
interface CardData {
    className: string;
    imageClass: string;
    title: string;
    description: string;
    link: string;
}

// Загрузка и отображение карточек удобств
const apiUrl: string = 'data.json';
const container: HTMLElement | null = document.querySelector('.card__Partall');

// Функция создания HTML-разметки карточки
function createCard(card: CardData): string {
    return `
        <div class="${card.className}">
            <div class="${card.imageClass}"></div>
            <div class="title__partall__tv">
                <p class="title__partall__tv__decaration">${card.title}</p>
            </div>
            <div class="title__partall__tv__decaration__1">
                <p>${card.description}</p>
            </div>
            <div class="button__partall__tv">
                <a class="button__partall__tv__decaration" href="${card.link}">Узнать больше</a>
            </div>
        </div>
    `;
}

// Функция для отображения карточек по умолчанию
function showDefaultCards(): void {
    const defaultCards: CardData[] = [
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
        container?.insertAdjacentHTML('beforeend', createCard(card));
    });
}

// Основная функция загрузки данных
async function loadCards(): Promise<void> {
    if (!container) {
        console.error('Контейнер для карточек не найден');
        return;
    }

    try {
        const response: Response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Сетевая ошибка');
        }

        const data: CardData[] = await response.json();
        data.forEach(item => {
            container.insertAdjacentHTML('beforeend', createCard(item));
        });
    } catch (error) {
        console.error('Ошибка при загрузке карточек:', error);
        showDefaultCards();
    }
}

// Запуск загрузки карточек при загрузке страницы
document.addEventListener('DOMContentLoaded', loadCards);