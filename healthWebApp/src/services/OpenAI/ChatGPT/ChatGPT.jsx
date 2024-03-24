import axios from 'axios';

const GPT_API_URL = 'https://api.openai.com/v1/completions';

const obtenerRespuestaGPT = async (pregunta) => {
  try {
    const respuesta = await axios.post(GPT_API_URL, {
      model: 'text-davinci-003', // Modelo de GPT a utilizar
      prompt: pregunta, // Pregunta enviada por el usuario
      max_tokens: 150, // Máximo número de tokens en la respuesta
    }, {
      headers: {
        'Authorization': 'Bearer TU_API_KEY', // Reemplaza con tu propia API Key
        'Content-Type': 'application/json',
      },
    });
    return respuesta.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error al obtener respuesta de GPT:', error);
    return 'Lo siento, no pude procesar tu pregunta en este momento.';
  }
};

export default obtenerRespuestaGPT;