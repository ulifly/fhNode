const heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Thor',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    }
];


const findHeroById = (id: number) => heroes.find(hero => hero.id === id);

const hero = findHeroById(4);
console.log(hero?.name ?? 'Hero not found'); 