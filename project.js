const schedule = {
    monday: {
        1: "Вікно",
        2: "Англійська",
        3: "Основи роботи з нейронними мережами",
    },
    tuesday: {
        1: "Англійська",
        2: "Основи програмування",
        3: "Мат. аналіз",
    },
    wednesday: {
        1: "Українська",
        2: "Основи програмування",
        3: "Основи роботи з нейронними мережами",
    },
    thursday: {
        1: "Мат. аналіз",
        2: "Англійська",
    },
    friday: {
        1: "Критичне мислення",
        2: "Українська",
        3: "ІКТ"
    },
};


console.log("Понеділок:");
for (let lesson in schedule.monday) {
    console.log(`Пара ${lesson}: ${schedule.monday[lesson]}`);
}

console.log("Вівторок:");
for (let lesson in schedule.tuesday) {
    console.log(`Пара ${lesson}: ${schedule.tuesday[lesson]}`);
}

console.log("Середа:");
for (let lesson in schedule.wednesday) {
    console.log(`Пара ${lesson}: ${schedule.wednesday[lesson]}`);
}

console.log("Четвер:");
for (let lesson in schedule.thursday) {
    console.log(`Пара ${lesson}: ${schedule.thursday[lesson]}`);
}

console.log("П'ятниця:");
for (let lesson in schedule.friday) {
    console.log(`Пара ${lesson}: ${schedule.friday[lesson]}`);
}
