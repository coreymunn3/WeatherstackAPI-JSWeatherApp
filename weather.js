class Weather {
  constructor(){
    this.apiKey = 'fd1e1476d1a082be8058629329db42e6'
    this.units = 'f'
  }

  getURL (city, state) {
    return `http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${city},${state}&units=${this.units}`
  }

  async getWeather (city, state) {
    const weatherResponse = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${city},${state}&units=${this.units}`);

    const weatherData = await weatherResponse.json();

    return weatherData;
  }
}