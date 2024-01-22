const axios = require('axios');

const ConsumirApiGitHub = async (req, res) => {
  try {
    const baseUrl = 'https://api.github.com/search/repositories';
    const user= 'google';
    const response = await axios.get(`${baseUrl}?q=org:${user}&sort=stars&order=desc`);
    const allRepos = response.data.items;
    // Obtén los primeros 10 repositorios
    const popularRepos = allRepos.slice(0, 10);
    // Selecciona el primer repositorio como el más popular
    const mostPopularRepo = popularRepos[0];
    // Muestra información específica de los 10 repositorios más populares
    popularRepos.forEach((repo, index) => {
      console.log(`Repositorio #${index + 1}:`);
      console.log('Nombre:', repo.name);
      console.log('Descripción:', repo.description);
      console.log('Estrellas:', repo.stargazers_count);
      console.log('URL:', repo.html_url);
      console.log('---');
    });
    // Devuelve el resultado en la respuesta HTTP
    res.status(200).send({ data: mostPopularRepo });
  } catch (error) {
    console.error('Error al obtener los repositorios:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = { ConsumirApiGitHub };
