## Запуск проекта

Чтобы запустить проект локально, выполните следующие шаги:

1. Клонируйте репозиторий.
2. Установите пакеты с помощью команды `npm install`.
3. Создайте файл `.env` и добавьте туда переменные `VITE_API_ENDPOINT` и `VITE_TMDB_READ_KEY`. 
4. Запустите проект с помощью команды `npm run dev`.

`.env`:
```
VITE_API_ENDPOINT=https://api.themoviedb.org/3/
VITE_TMDB_READ_KEY=read.key
```
