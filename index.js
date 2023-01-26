//*? Получаем DOM Nodes

const body = document.body;
const toggleThemeButton = document.querySelector(".toggle-theme");

//*? Получаем значение из LocalStorage по ключу "theme"

const theme = localStorage.getItem("theme");

//*? Проверяем и в зависимости оо результата меняем стили

if (theme === "dark") {
	replaceStyles("#273444", "🌙");
} else {
	replaceStyles();
}

//*? Функция для изменения стилей

function replaceStyles(background = "initial", icon = "☀️") {
	body.style.background = background;
	toggleThemeButton.innerHTML = icon;
	toggleThemeButton.style.background = background;
}

//*? Необходимо написать функцию которая будет менять тему с light на dark и обратно

//*? Добавить слушатель события клик на toggleThemeButton и как ссылку передать функцию которая меняет тему

//* задание 2

function setDateLocalStorage(data) {
	//*? реализовать свою логику
}

function getDateLocalStorage() {
	//*? реализовать свою логику
}

const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".my-form");
const list = document.createElement("ul");
formContainer.append(list);

const a = ['qweqwe','qwdewdew']

function renderList(arr) {
	list.innerHTML = "";
	arr.forEach((name) => {
		const listItem = document.createElement("li");
		listItem.textContent = name;
		list.append(listItem);
	});
}

renderList(a)
