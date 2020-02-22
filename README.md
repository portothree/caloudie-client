# Caloudie

## Notes

- The macronutrients carbs, fat and protein are saved in grams per 100g, so if the user records `100 grams` of chicken breast which has `0g carbs, 3.5g fat and 29.5g protein`, the user have consumed `149.5 kcal` because `1g of carb = 4 kcal` , `1g of fat = 9 kcal`, `1g of protein = 4 kcal` and `0 + 31.5 + 118 = 149.5`.

- A kCal is 1000 of the "scientific" calories. So when you consume something that says 100 calories, it is really 100,000 calories or 100kcal. For the purposes of tracking they are the same it is just a shortcut used instead of saying Kcal for everything.

## Technologies

- Front-end: Angular
- Back-end: Express, MongoDB

## File structure

```
caloudie-client/
│
├── e2e/                 			# End to end tests
│
├── src/
|    ├── app/                 # Main App component
|    ├── assets/              # Fonts, images and miscs
|    ├── enviroments/         #
|    ├── main.ts              #
|
└── package.json                   # node packages
```
