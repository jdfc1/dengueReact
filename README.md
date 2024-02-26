## bibliotecas e configuração

Obter numero da semana: 
  npm install date-fns

    import { getISOWeek } from 'date-fns';
    const currentWeekNumber = getISOWeek(new Date());
    console.log('Número da semana atual:', currentWeekNumber);

npm install axios

npm install @react-native-community/slider
  import Slider from '@react-native-community/slider';




## sites de referência

https://www.ibge.gov.br/explica/codigos-dos-municipios.php

https://info.dengue.mat.br/services/tutorial/Python

https://info.dengue.mat.br/api/alertcity?geocode=3304557&disease=dengue&format=json&ew_start=1&ew_end=3&ey_start=2024&ey_end=2024

## siglas

Consultando:
data_iniSE: primeiro dia da semana epidemiológica (domingo);

SE: semana epidemiológica;

casos_est: Número estimado de casos por semana utilizando o modelo nowcasting (nota: Os valores são atualizados retrospectivamente todas as semanas);

casos_est_min e casos_est_max: intervalo de credibilidade de 95% do número estimado de casos;

casos: Número de casos notificados por semana (Os valores são atualizados retrospectivamente todas as semanas);

p_rt1: Probabilidade de (Rt>1). Para emissão do alerta laranja utilizamos o critério p_rt1 > 0,95 por 3 semanas ou mais;

p_inc100k: Taxa de incidência estimada por 100 mil;

Localidade_id: Divisão submunicipal (atualmente implementada apenas no Rio de Janeiro);

nivel: Nível de alerta (1 = verde, 2 = amarelo, 3 = laranja, 4 = vermelho);

id: Índice numérico;

versao_modelo: Versão do modelo (uso interno);

Rt: Estimativa pontual do número reprodutivo de casos, veja (Saiba mais);

pop: população estimada (IBGE);

tempmin: média das temperaturas mínimas diárias ao longo da semana;

umidmax: média da umidade relativa do ar máxima diária ao longo da semana;

receptivo: indica receptividade climática, ou seja, condições para alta capacidade vetorial. 0 = desfavorável, 1 = favorável, 2 = favorável esta semana e na semana passada, 3 = favorável durante pelo menos três semanas (suficiente para completar um ciclo de transmissão);

transmissão: evidência de transmissão sustentada: 0 = nenhuma evidência, 1 = possível, 2 = provável, 3 = altamente provável;

nivel_inc: Incidência estimada abaixo do limiar pré-epidêmico, 1 = acima do limiar pré-epidêmico, mas abaixo do limiar epidêmico, 2 = acima do limiar epidêmico;

notif_accum_year: número acumulado de casos por ano;