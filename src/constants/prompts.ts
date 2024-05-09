const acessibility = `Tarefa: Avaliar o aspecto de acessibilidade UX da imagem de design fornecida e atribuir uma nota em uma escala de 0 a 100, fornecendo também feedback sobre elementos que podem não ser visíveis na imagem.
Descrição: A imagem ilustra um design de interface de usuário (UI) para um aplicativo web ou móvel. Seu objetivo é avaliar os recursos de acessibilidade do design, focando em sua capacidade de atender usuários com habilidades e deficiências diversas. Considere elementos como contraste de cores, legibilidade de texto, clareza de navegação, suporte à navegação por teclado e facilidade geral de uso para usuários com deficiências (por exemplo, deficiências visuais, motoras, cognitivas).
Instruções:
Examine cuidadosamente a imagem do design, observando seus componentes visuais, layout e elementos interativos.
Avalie o esquema de cores e níveis de contraste do design para garantir legibilidade e visibilidade para usuários com deficiência de visão de cores ou baixa visão.
Avalie a tipografia e a formatação do texto para determinar se o texto é suficientemente legível, com tamanhos e estilos de fonte apropriados para usuários com deficiências visuais.
Considere os elementos de navegação e controles de interface do usuário para determinar se são facilmente identificáveis, operáveis e compreensíveis para usuários que dependem de leitores de tela ou navegação por teclado.
Reflexão sobre a experiência geral do usuário e identificação de quaisquer barreiras ou desafios potenciais que os usuários com deficiências possam encontrar ao interagir com o design.
Atribua uma nota ao desempenho de acessibilidade do design em uma escala de 0 a 100, com base nos aspectos visíveis de acessibilidade. Exclua fatores como a presença de texto alternativo para imagens, pois essas informações podem não estar disponíveis apenas na imagem.
Forneça feedback ao designer, enfatizando a importância de incluir recursos como texto alternativo para imagens para melhorar a acessibilidade. Incentive-os a considerar a incorporação desses recursos em futuras iterações do design.
Saída: Gere um relatório conciso resumindo a avaliação de acessibilidade da imagem de design, incluindo observações específicas, áreas de melhoria, a nota atribuída e feedback para o designer sobre recursos de acessibilidade invisíveis. Retorne isso em JSON, contendo a chave principal "assessment" e seus filhos "grade", "positive_points", "improvement_areas" e “feedback”.
`;

const consistency = `Tarefa: Avaliar a consistência da imagem de design fornecida e atribuir uma nota em uma escala de 0 a 100, fornecendo também feedback sobre áreas para melhoria.
Descrição: A imagem representa um design de interface de usuário (UI) para um aplicativo web ou móvel. Seu objetivo é avaliar a consistência dos elementos de design em toda a interface, focando na coesão visual e aderência aos padrões de design estabelecidos. A consistência desempenha um papel crucial na criação de uma experiência do usuário perfeita, aprimorando a usabilidade e a estética.
Instruções:
Examine cuidadosamente a imagem de design, prestando atenção nos elementos visuais, layout e componentes interativos presentes em toda a interface.
Avalie a consistência dos elementos de design, como cores, tipografia, ícones, espaçamento e layout em diferentes seções ou telas da interface.
Avalie o alinhamento e posicionamento dos elementos para garantir harmonia visual e coerência dentro do design.
Considere o uso de padrões de design e convenções para determinar se a interface segue diretrizes e melhores práticas estabelecidas.
Reflexão sobre a impressão geral do design em termos de sua consistência visual e coerência.
Atribua uma nota ao desempenho de consistência do design em uma escala de 0 a 100, com base no nível de coesão visual e aderência aos padrões de design observados na imagem.
Forneça feedback construtivo ao designer, destacando áreas específicas onde a consistência poderia ser melhorada e sugerindo estratégias para alcançar uma maior coerência visual e alinhamento em toda a interface.
Saída: Gere um relatório conciso resumindo a avaliação da consistência da imagem de design, incluindo observações específicas, áreas para melhoria, a nota atribuída e feedback para o designer sobre a consistência nos elementos de design. Retorne isso em JSON, contendo a chave principal "assessment" e seus filhos "grade", "positive_points", "improvement_areas" e “feedback”.
`;

const usability = `Tarefa: Avaliar a usabilidade da imagem de design fornecida e atribuir uma nota em uma escala de 0 a 100, fornecendo também feedback acionável sobre como melhorar a experiência do usuário.
Descrição: A imagem ilustra um design de interface de usuário (UI) para um aplicativo web ou móvel. Seu objetivo é avaliar a usabilidade do design, focando em sua eficácia, eficiência e satisfação do usuário. A usabilidade é crucial para garantir que os usuários possam realizar suas tarefas intuitivamente e com o mínimo de atrito, aprimorando assim a experiência geral do usuário.
Instruções:
Examine cuidadosamente a imagem de design, prestando atenção em seu layout, funcionalidade e elementos interativos.
Avalie a clareza e a intuitividade da estrutura de navegação do design, garantindo que os usuários possam encontrar e acessar facilmente os recursos de que precisam.
Avalie a responsividade e os mecanismos de feedback dentro da interface para determinar se as ações do usuário são respondidas de forma clara e oportuna.
Considere a consistência dos elementos de design e interações em diferentes seções ou telas da interface, garantindo uma experiência de usuário coesa.
Teste a eficiência de tarefas comuns do usuário, como preencher formulários, acessar informações ou realizar ações, para identificar possíveis gargalos de usabilidade ou áreas para melhoria.
Reflexão sobre a facilidade de uso geral e satisfação ao interagir com o design, considerando fatores como facilidade de aprendizado, memorabilidade e prevenção de erros.
Atribua uma nota ao desempenho de usabilidade do design em uma escala de 0 a 100, com base na eficácia, eficiência e satisfação da experiência do usuário observada na imagem.
Forneça feedback acionável ao designer, destacando problemas específicos de usabilidade e sugerindo melhorias para aprimorar a experiência geral do usuário.
Saída: Gere um relatório conciso resumindo a avaliação da usabilidade da imagem de design, incluindo observações específicas, áreas para melhoria, a nota atribuída e feedback acionável para aprimorar a experiência do usuário. Retorne isso em JSON, contendo a chave principal "assessment" e seus filhos "grade", "positive_points", "improvement_areas" e “feedback”."
`;

const hierarchy = `Tarefa: Avaliar a hierarquia da imagem de design fornecida e atribuir uma nota em uma escala de 0 a 100, fornecendo feedback sobre como melhorar a organização visual e ênfase.
Descrição: A imagem representa um design de interface de usuário (UI) para um aplicativo web ou móvel. Seu objetivo é avaliar a hierarquia dos elementos visuais dentro do design, focando na organização, priorização e ênfase do conteúdo e funcionalidade. Uma hierarquia clara ajuda os usuários a entender a estrutura da informação e navegar pela interface de forma eficaz.
Instruções:
Examine cuidadosamente a imagem de design, prestando atenção no arranjo e apresentação dos elementos visuais, incluindo texto, imagens, ícones e componentes interativos.
Avalie a clareza e consistência da hierarquia visual, garantindo que elementos importantes sejam exibidos de forma proeminente e elementos secundários sejam adequadamente desvalorizados.
Avalie o uso de tipografia, tamanhos de fonte e pesos de fonte para diferenciar entre diferentes níveis de importância e estabelecer uma ordem de leitura clara.
Considere o alinhamento, espaçamento e agrupamento de elementos para criar relacionamentos visuais e orientar a atenção dos usuários pela interface.
Analise o uso de cor, contraste e estilo visual para destacar elementos-chave e criar uma sensação de hierarquia visual.
Reflexão sobre a eficácia geral do design na comunicação da hierarquia da informação e na orientação da interação do usuário.
Atribua uma nota ao desempenho da hierarquia do design em uma escala de 0 a 100, com base na clareza, coerência e eficácia da organização visual observada na imagem.
Forneça feedback acionável ao designer, sugerindo melhorias para aprimorar a hierarquia dos elementos visuais e otimizar o engajamento e compreensão do usuário.
Saída: Gere um relatório conciso resumindo a avaliação da hierarquia da imagem de design, incluindo observações específicas, áreas para melhoria, a nota atribuída e feedback acionável para otimizar a organização visual e a ênfase. Retorne isso em JSON, contendo a chave principal "assessment" e seus filhos "grade", "positive_points", "improvement_areas" e “feedback”.
`;

const aesthetic = `Tarefa: Avaliar a qualidade estética da imagem de design fornecida e atribuir uma nota em uma escala de 0 a 100, fornecendo feedback sobre como melhorar o apelo visual e a coerência.
Descrição: A imagem representa um design de interface de usuário (UI) para um aplicativo web ou móvel. Seu objetivo é avaliar as qualidades estéticas do design, focando em seu apelo visual, criatividade e coerência geral. Considerações estéticas desempenham um papel significativo em atrair e reter usuários, além de transmitir a identidade e os valores da marca.
Instruções:
Examine cuidadosamente a imagem de design, prestando atenção nos seus elementos visuais, paleta de cores, tipografia, imagens e composição geral.
Avalie o apelo visual geral do design, considerando fatores como equilíbrio, proporção, harmonia e contraste.
Avalie a criatividade e originalidade do design, procurando por elementos de design inovadores ou escolhas estilísticas únicas que o distingam de designs convencionais.
Considere a coerência e consistência dos elementos visuais em toda a interface, garantindo que contribuam para uma estética unificada e coesa.
Analise o uso de cor, tipografia e imagens para evocar respostas emocionais e criar experiências visuais envolventes para os usuários.
Reflexão sobre a adequação das qualidades estéticas do design para o público-alvo e o propósito pretendido do aplicativo.
Atribua uma nota ao desempenho estético do design em uma escala de 0 a 100, com base no apelo visual geral, criatividade, coerência e adequação observados na imagem.
Forneça feedback acionável ao designer, sugerindo maneiras de melhorar as qualidades estéticas do design e criar uma experiência do usuário mais visualmente envolvente.
Saída: Gere um relatório conciso resumindo a avaliação estética da imagem de design, incluindo observações específicas, áreas para melhoria, a nota atribuída e feedback acionável para aprimorar o apelo visual e a coerência. Retorne isso em JSON, contendo a chave principal "assessment" e seus filhos "grade", "positive_points", "improvement_areas" e “feedback”.
`;

const general = `Analise a UX/UI do design, seja breve e sucinto em sua resposta, produzindo apenas um parágrafo de texto. Fale dos pontos fortes, das fraquezas do design, e de como o designer em questão pode melhorar o design que ele fez. Tenha em mente os princípios básicos de UX/UI design enquanto dando seu feedback.`;

export const prompts = {
  acessibility: acessibility,
  consistency: consistency,
  usability: usability,
  hierarchy: hierarchy,
  aesthetic: aesthetic,
  general: general,
};
