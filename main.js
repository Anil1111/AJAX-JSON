/*
    TASK 1

    Дан объект : 
*/
    const car = {
        company : 'Toyota',
        model : 'Land Cruser',
        doors : 5,
        color : 'white'
    }

let response = JSON.stringify(car)
console.log(response)

let result = JSON.parse(response)
console.log(result)
/*
    Необходимо преобразовать данный объект в формат JSON , и потом обратно.
    Запишите оба результата в переменную и выведите их значения в консоль.

*/

/* 
    TASK 2

    Воспользуйтесь free REST API: https://jsonplaceholder.typicode.com/ для получения 
    100 albums. И выведите все альбомы на html страницу в виде : 

    UserId : значение userId с пришедшего вам объекта,
    Id : значение Id с пришедшего вам объекта,
    Title : значение title с пришедшего вам объекта

    В итоге на вашей странице должно распарситься 100 разных альбомов. 

*/
/*
    GET() (Для получения данных)
    POST() (Для отправки данных)
PUT() (Для обновления данных)
DELETE() (Для удаления данных)

response - чтобы посмореть ответ запроса
open - принимает, первое - метод, с помощью какого метода мы будем сейчас взаимодействовать с сервером
load - "взаимодействие с сервером произошло успешно"
send - отправить запрос
 */

const xhr = new XMLHttpRequest();
const url ='https://jsonplaceholder.typicode.com/albums';
xhr.open('GET', url);

xhr.addEventListener("load", () => {
const newArr = JSON.parse(xhr.response)
const list = document.getElementById('data');
list.innerHTML = newArr.map(n => `
        <div>UserId: ${n.userId}</div>
        <div>Id: ${n.id}</div>
        <div>Title: ${n.title}</div>
      </div>
    `).join('');
document.body.append(list);
})
xhr.send();


















