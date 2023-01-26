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

function handlerToggleTheme() {
	const theme = localStorage.getItem("theme");
	if (theme === "light") {
		localStorage.setItem("theme", "dark");
		replaceStyles("#273444", "🌙");
	} else {
		localStorage.setItem("theme", "light");
		replaceStyles();
	}
}

toggleThemeButton.addEventListener("click", handlerToggleTheme);

//*? Необходимо написать функцию которая будет менять тему с light на dark и обратно

//*? Добавить слушатель события клик на toggleThemeButton и как ссылку передать функцию которая меняет тему

//* задание 2

function setDateLocalStorage(key,data) {
localStorage.setItem(key, JSON.stringify(data))
}

function getDateLocalStorage(key) {
return JSON.parse(localStorage.getItem(key)) ?? []
}


const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".my-form");
const list = document.createElement("ul");
formContainer.append(list);

function renderList(arr) {
	list.innerHTML = "";
	arr.forEach((name) => {
		const listItem = document.createElement("li");
		listItem.textContent = name;
		list.append(listItem);
	});
}

form.addEventListener('submit', (event) => {
	event.preventDefault()
	const input = event.target.event;
	input.value = ''
})
