# MarqUpAutomatization
//запуск всех тестов регрессии
npx playwright test --grep @reg

//запуск всех тестов CheclistNew
npx playwright test --grep @ChecklistNew

//запуск всех тестов ClickTracts
npx playwright test --grep @Clicktrackts

//запуск тестов по рисковости ChecklistNewHigh/Medium/Low
npx playwright test --grep @ChecklistNewHigh(or Medium or Low)

//запуск тестов по рисковости ClicktractsHigh/Medium/Low
npx playwright test --grep @ClicktractsHigh(or Medium or Low)

//запуск тестов по рисковости ChecklistNew or Clicktracts
//можно запускать сколько угодно рсковостей одновременно используя символ “|” между каждым
npx playwright test --g=“@ClicktractsHigh|ClicktractsLow”

//запуск отдельного функционала
//полный список функционала тут - 
npx playwright test --grep @login(or register or templates etc)

//запуск нескольких функциональностей функционала
//полный список функционала тут - 
//можно запускать сколько угодно функционалов одновременно используя символ “|” между каждым
npx playwright test --g=“@login|@register”
