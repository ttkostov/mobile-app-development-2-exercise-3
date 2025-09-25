// ChatGPT was used for generating the mock weather
export class WeatherEntry {
    /**
     * @param {number} id
     * @param {string} city
     * @param {number} temperatureC
     * @param {number} windKmh
     * @param {1|2|3|4|5|6} code
     */
    constructor(id, city, temperatureC, windKmh, code) {
        this.id = id;
        this.city = city;
        this.temperatureC = temperatureC;
        this.windKmh = windKmh;
        this.code = code;
    }
}

export const MOCK_WEATHER = [
    new WeatherEntry(1, 'Helsinki, FI', 12.3, 18, 1),
    new WeatherEntry(2, 'Espoo, FI', 12.0, 16, 1),
    new WeatherEntry(3, 'Tampere, FI', 11.0, 14, 3),
    new WeatherEntry(4, 'Vantaa, FI', 12.1, 17, 2),
    new WeatherEntry(5, 'Oulu, FI', 9.5, 20, 3),
    new WeatherEntry(6, 'Turku, FI', 12.5, 15, 2),
    new WeatherEntry(7, 'Jyväskylä, FI', 10.0, 13, 1),
];