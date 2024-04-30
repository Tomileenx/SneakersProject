const searchLinks = document.querySelectorAll('.links');
const shoeWrapper = document.querySelector('.shoeWrapper');
const shoeType = document.querySelector('.shoe-type');
const shoeTitle = document.querySelector('.shoe-title');
const shoePrice = document.querySelector('.shoe-price');
const shoeText = document.querySelector('.shoe-text');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');
const shoeImg = document.querySelector('shoe-img');
const buyButton = document.querySelectorAll('.buyButton');
const buyNow = document.querySelector('.buy-now');
const closeBtn = document.querySelector('.close');
const btnStyle = document.querySelector('.style');


const Items =  [
    {
        id: 1,
        title: 'Air Jordan',
        price: 150,
        colors: [
            {
                code: "lightgray",
                img: "img/jordan.png",
            },
            {
                code: "green",
                img: "img/jordan2.png",
            },
        ]
    },

    {
        id: 2,
        title: 'Blazer',
        price: 115,
        colors: [
            {
                code: "lightgray",
                img: "img/blazer.png",
            },
            {
                code: "green",
                img: "img/blazer2.png",
            },
        ]
    },

    {
        id: 3,
        title: 'Air Force',
        price: 120,
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ]
    },

    {
        id: 4,
        title: 'Hippie',
        price: 100,
        colors: [
            {
                code: "gray",
                img: "img/hippie.png",
            },
            {
                code: "black",
                img: "img/hippie2.png",
            },
        ]
    },

    {
        id: 5,
        title: 'Crater',
        price: 130,
        colors: [
            {
                code: "black",
                img: "img/hippie.png",
            },
            {
                code: "lightgray",
                img: "img/hippie2.png",
            },
        ]
    },
]

let chosenItem = Items[0];

let img = document.createElement('img');
img.className = 'second-shoe-con';
img.setAttribute('src', `${Items[0].colors[0].img}`);
shoeType.appendChild(img);

shoeTitle.textContent = `${Items[0].title}`;
shoePrice.textContent = `$${Items[0].price}`;
firstColor.style.backgroundColor = `${Items[0].colors[0].code}`;
secondColor.style.backgroundColor = `${Items[0].colors[1].code}`;

firstColor.addEventListener('click', () => {
    img.setAttribute('src', `${Items[0].colors[0].img}`);
    shoeType.appendChild(img);
})

secondColor.addEventListener('click', () => {
    img.setAttribute('src', `${Items[0].colors[1].img}`);
    shoeType.appendChild(img);
})


searchLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        shoeWrapper.style.transform = `translateX(${-100 * index}vw)`;

        if (index === 0) {
            img.setAttribute('src', `${Items[0].colors[0].img}`);
            shoeType.appendChild(img);
            console.log('jordan');

            shoeTitle.textContent = `${Items[0].title}`;
            shoePrice.textContent = `$${Items[0].price}`;
            firstColor.style.backgroundColor = `${Items[0].colors[0].code}`;
            secondColor.style.backgroundColor = `${Items[0].colors[1].code}`;

            firstColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[0].colors[0].img}`);
                shoeType.appendChild(img);
            })

            secondColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[0].colors[1].img}`);
                shoeType.appendChild(img);
            })

        } else if (index === 1) {
            img.setAttribute('src', `${Items[1].colors[0].img}`);
            shoeType.appendChild(img);
            console.log('blazer');

            shoeTitle.textContent = `${Items[1].title}`
            shoePrice.textContent = `$${Items[1].price}`;
            firstColor.style.backgroundColor = `${Items[1].colors[0].code}`;
            secondColor.style.backgroundColor = `${Items[1].colors[1].code}`;

            firstColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[1].colors[0].img}`);
                shoeType.appendChild(img);
            })

            secondColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[1].colors[1].img}`);
                shoeType.appendChild(img);
            })
        } else if (index === 2) {
            img.setAttribute('src', `${Items[2].colors[0].img}`);
            shoeType.appendChild(img);

            shoeTitle.textContent = `${Items[2].title}`
            shoePrice.textContent = `$${Items[2].price}`;
            firstColor.style.backgroundColor = `${Items[2].colors[0].code}`;
            secondColor.style.backgroundColor = `${Items[2].colors[1].code}`;

            firstColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[2].colors[0].img}`);
                shoeType.appendChild(img);
            })

            secondColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[2].colors[1].img}`);
                shoeType.appendChild(img);
            })
        } else if (index === 3) {
            img.setAttribute('src', `${Items[3].colors[0].img}`);
            shoeType.appendChild(img);

            shoeTitle.textContent = `${Items[3].title}`
            shoePrice.textContent = `$${Items[3].price}`;
            firstColor.style.backgroundColor = `${Items[3].colors[0].code}`;
            secondColor.style.backgroundColor = `${Items[3].colors[1].code}`;

            firstColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[3].colors[0].img}`);
                shoeType.appendChild(img);
            })

            secondColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[3].colors[1].img}`);
                shoeType.appendChild(img);
            })
        } else if (index === 4) {
            img.setAttribute('src', `${Items[4].colors[0].img}`);
            shoeType.appendChild(img);

            shoeTitle.textContent = `${Items[4].title}`
            shoePrice.textContent = `$${Items[4].price}`;
            firstColor.style.backgroundColor = `${Items[4].colors[0].code}`;
            secondColor.style.backgroundColor = `${Items[4].colors[1].code}`;

            firstColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[4].colors[0].img}`);
                shoeType.appendChild(img);
            })

            secondColor.addEventListener('click', () => {
                img.setAttribute('src', `${Items[4].colors[1].img}`);
                shoeType.appendChild(img);
            })
        }

    })
})

buyButton.forEach((button) => {
    button.addEventListener('click', () => {
        const shoeBuyCon = document.querySelector('.shoeBuy-container');
        shoeBuyCon.scrollIntoView({behavior: 'smooth' })
    })
});

buyNow.addEventListener('click', () => {
    const buyDetails = document.querySelector('.buy-details');
    buyDetails.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    const buyDetails = document.querySelector('.buy-details');
    buyDetails.style.display = 'none';
});

const sizeBtns = document.querySelector('.sizeButtons').children;


Array.from(sizeBtns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        Array.from(sizeBtns).forEach((btn) => {
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        });

        // Apply styles to the clicked button
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    });
});

btnStyle.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.scrollIntoView({behavior: 'smooth' });
})