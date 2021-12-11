'use strict'
// Меняю изображение страницы на любое другое из папки image.
document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
// Восстанавливаю порядок книг.
books.append(book[2]); // Переношу 6 книгу в конец списка.
books.prepend(book[1]); // Переношу 1 книгу в начало списка.
books.insertBefore(book[4], book[3]); // Меняю 3 и 4 книги местами.
// Удаляю рекламу.
let adv = document.querySelector('.adv');
adv.remove();
// Восстанавливаю порядок глав второй и пятой книг.
let ul = document.querySelectorAll('ul') // Добыл родителя списков.
let li2 = ul[1].querySelectorAll('li') // Добыл список нужной книги (2)
let li5 = ul[4].querySelectorAll('li') // Добыл список нужной книги (5)
// Восстанавливаю порядок
ul[1].insertBefore(li2[2], li2[10])
ul[1].insertBefore(li2[6], li2[4])
ul[1].insertBefore(li2[8], li2[4])
// Исправляю Тайтл третьей книги.
let bookTitle = book[4].querySelector('a');
bookTitle.innerHTML = 'Книга 3. this и Прототипы Объектов';
// Добавляю главу к 6 книге.
ul[5].append(document.createElement('li')); // Добавляю элемент к узлу.
let li6 = ul[5].querySelectorAll('li'); // Добываю список нужной книги (6)
li6[10].textContent = 'Глава 8: За пределами ES6'; // Вношу текст задания.
ul[5].insertBefore(li6[10], li6[9]); // Восстанавливаю порядок глав.