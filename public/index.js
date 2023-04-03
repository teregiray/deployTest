var githubBtn = document.getElementById("githubBtn");

// Добавляем обработчик событий на кнопку Github
githubBtn.addEventListener("click", function() {
var provider = new firebase.auth.GithubAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
// Авторизация прошла успешно, здесь вы можете выполнить дополнительные действия
// после авторизации, например, сохранить информацию о пользователе в базе данных
console.log("Успешная авторизация Github", result.user);
}).catch(function(error) {
// Обработка ошибок при авторизации
var errorCode = error.code;
var errorMessage = error.message;
console.log("Ошибка при авторизации Github", errorCode, errorMessage);
});
});