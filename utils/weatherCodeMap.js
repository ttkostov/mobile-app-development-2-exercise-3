 export function getWeatherEmoji(code) {
    const emojiMap = {
        1: '☁️',
        2: '☀️',
        3: '🌧️',
        4: '⛈️',
        5: '❄️',
        6: '🌫️',
    };

    return emojiMap[code] ?? '❓'; // fallback if unknown code
}