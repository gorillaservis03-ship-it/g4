# Gorilla Servis CRM V3 (Full)

## Швидкий старт
```bash
npm i
cp import.env .env.local   # або вручну створіть .env.local з вашими ключами
npm run dev
```

## Деплой на Vercel
1. Створіть проект з цього репозиторію.
2. Додайте змінні середовища у Settings → Environment Variables:
   - `DATAOVOZIDLECH_API_KEY`
   - `RSV_API_KEY`
3. Deploy. Перевірка: відкрийте `/api/health`.

## Примітка щодо 'margin' → '%'
У всіх нових компонентах, де потрібно показувати колонку маржі, використовуйте `LABELS.PERCENT` із `src/apiClient.js`,
що рендериться як символ відсотків `%`.
