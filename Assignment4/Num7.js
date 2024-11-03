function generateGreeting(name, timeOfDay, language) {
    const greetings = {
      English: {
        morning: `Good morning, ${name}!`,
        afternoon: `Good afternoon, ${name}!`,
        evening: `Good evening, ${name}!`
      },
      Spanish: {
        morning: `¡Buenos días, ${name}!`,
        afternoon: `¡Buenas tardes, ${name}!`,
        evening: `¡Buenas noches, ${name}!`
      }
    };

    return greetings[language]?.[timeOfDay] || `Hello, ${name}!`;
  }

  console.log(generateGreeting('John', 'morning', 'English'));
  console.log(generateGreeting('Ana', 'evening', 'Spanish'));
  