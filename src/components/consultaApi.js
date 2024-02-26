import axios from 'axios';

const api = axios.create({
    method: 'GET',
    baseURL: "https://info.dengue.mat.br/api/alertcity?",
    ContentType: 'application/json',
});

 
// Exemplo de função que faz a solicitação com parâmetros
const fetchData = async (geocode, disease, ew_start, ew_end, ey_start, ey_end) => {
    try {
        const response = await api.get('', {
            params: {
                geocode: geocode,
                disease: disease,
                format: "json",
                ew_start: ew_start,
                ew_end: ew_end,
                ey_start: ey_start,
                ey_end: ey_end,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};

export default fetchData; 