const NcmMap = [
  {
    ncm: ['2828.90.11', '2828.90.19', '3206.41.00', '3402.20.00', '3808.94.19'],
    description: 'Água sanitária, branqueador e outros alvejantes',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.5566, 0.6705, 0.7654, 0.8224]
  },
  {
    ncm: ['3401.20.90'],
    description: 'Sabões em pó, flocos, palhetas, grânulos ou outras formas semelhantes, para lavar roupas',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.2117, 0.3004, 0.3742, 0.4186]
  },
  {
    ncm: ['3401.20.90'],
    description: 'Sabões líquidos para lavar roupas',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.2117, 0.3004, 0.3742, 0.4186]
  },
  {
    ncm: ['3402.20.00'],
    description: 'Detergentes em pó, flocos, palhetas, grânulos ou outras formas semelhantes',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.2117, 0.3004, 0.3742, 0.4186]
  },
  {
    ncm: ['3402.20.00'],
    description: 'Detergentes líquidos, exceto para lavar roupa',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.2842, 0.3782, 0.4565, 0.5035]
  },
  {
    ncm: ['3402.20.00'],
    description: 'Detergente líquido para lavar roupa',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.2842, 0.3782, 0.4565, 0.5035]
  },
  {
    ncm: ['3402'],
    description: 'Outros agentes orgânicos de superfície (exceto sabões), preparações tensoativas, preparações para lavagem (incluídas as preparações auxiliares para lavagem)  e preparações para limpeza (inclusive multiuso e limpadores), mesmo contendo sabão,  exceto os produtos descritos nos CEST 11.004.00, 11.005.00 e 11.006.00, em embalagem de conteúdo inferior ou igual a 50 litros ou 50 kg',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.3026, 0.3979, 0.4773, 0.525]
  },
  {
    ncm: ['3809.91.90'],
    description: 'Amaciante/sua vizante',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.3574, 0.4567, 0.5395, 0.5892]
  },
  {
    ncm: ['3924.10.00', '3924.90.00', '6805.30.10', '6805.30.90'],
    description: 'Esponjas para limpeza',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.578, 0.6935, 0.7897, 0.8474]
  },
  {
    ncm: ['2208.90.00'],
    description: 'Álcool etílico para limpeza',
    legal: 'Protocolo ICMS 105/08 (somente para os NCMs 2207.10.00 e 2207.20.10) Não tem (NCMs 2208.90.00 e 2207, exceto 2207.10.00 e 2207.20.10)',
    mva: [0.3852, 0.6253, 0.7176, 0.7731]
  },
  {
    ncm: ['7323.10.00'],
    description: 'Esponjas  e palhas de aço, esponjas para limpeza, polimento ou uso semelhantes, todas de uso domésticoAcrescentado peloDecreto n° 52.991/2017 (DOE de 17.04.2017), efeitos a partir de 01.01.2016',
    mva: [0.578, 0.6935, 0.7897, 0.8474]
  },
  {
    ncm: ['3923.2'],
    description: 'Sacos de lixo de conteúdo igual  ou inferior a 100 litros Acrescentado peloDecreto n° 52.991/2017 (DOE de 17.04.2017), efeitos a partir de 01.07.2017',
    legal: 'Protocolo ICMS 105/08',
    mva: [0.6668, 0.7888, 0.8904, 0.9514]
  },
  {
    ncm: ['4011.10.00'],
    description: 'Pneus novos, dos tipos utilizados em automóveis de passageiros (incluídos os veículos de uso misto - camionetas e os automóveis de corrida)',
    mva: [0.42, 0.5239, 0.6105, 0.6624]
  },
  {
    ncm: ['4011'],
    description: 'Pneus novos, dos tipos utilizados em caminhões (inclusive para os fora-de-estrada), ônibus, aviões, máquinas de terraplenagem, de construção e conservação de estradas, máquinas e tratores agrícolas, pá-carregadeira',
    mva: [0.32, 0.4166, 0.4971, 0.5454]
  },
  {
    ncm: ['4011.40.00'],
    description: 'Pneus novos para motocicletas',
    mva: [0.6, 0.7171, 0.8146, 0.8732]
  },
  {
    ncm: ['4011'],
    description: 'Outros tipos de pneus novos, exceto os itens classificados no CEST 16.005.00',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['4011.50.00'],
    description: 'Pneus novos de borracha dos tipos utilizados em bicicletas',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['4012.1'],
    description: 'Pneus recauchutados',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['4012.90'],
    description: 'Protetores de borracha, exceto os itens classificados no CEST 16.007.01',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['4012.90'],
    description: 'Protetores de borracha para bicicletas',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['4013'],
    description: 'Câmaras de ar de borracha, exceto os itens classificados no CEST 16.009.00',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['2522'],
    description: 'Cal',
    legal: 'Protocolo ICMS 104/08 (cal para construção civil) Não tem (cal para fins diversos da construção civil)',
    mva: [0.43, 0.5346, 0.6218, 0.6741]
  },
  {
    ncm: ['3816.00.1', '3824.50.00'],
    description: 'Argamassas',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['3214.90.00'],
    description: 'Outras argamassas',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['3910.00'],
    description: 'Silicones em formas primárias, para uso na construção',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['3916'],
    description: 'Revestimentos de PVC e outros plásticos, forro, sancas e afins de PVC, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.57, 0.6849, 0.7806, 0.838]
  },
  {
    ncm: ['3917'],
    description: 'Tubos, e seus acessórios (por exemplo, juntas, cotovelos, flanges, uniões), de plásticos, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.36, 0.4595, 0.5424, 0.5922]
  },
  {
    ncm: ['3918'],
    description: 'Revestimento de pavimento de PVC e outros plásticos',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.56, 0.6741, 0.7693, 0.8263]
  },
  {
    ncm: ['3919'],
    description: 'Chapas, folhas, tiras, fitas, películas e outras formas planas, auto-adesivas, de plásticos, mesmo em rolos, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.58, 0.6956, 0.792, 0.8498]
  },
  {
    ncm: ['3919', '3920', '3921'],
    description: 'Veda rosca, lona plástica para uso na construção, fitas isolantes e afins',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.52, 0.6312, 0.7239, 0.7795]
  },
  {
    ncm: ['3921'],
    description: 'Telha de plástico, mesmo reforçada com fibra de vidro',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.53, 0.642, 0.7352, 0.7912]
  },
  {
    ncm: ['3921'],
    description: 'Cumeeira de plástico, mesmo reforçada com fibra de vidro',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.53, 0.642, 0.7352, 0.7912]
  },
  {
    ncm: ['3921'],
    description: 'Chapas, laminados plásticos em bobina, para uso na construção, exceto os descritos nos CEST 10.010.00 e 10.011.00',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.53, 0.642, 0.7352, 0.7912]
  },
  {
    ncm: ['3922'],
    description: 'Banheiras, boxes para chuveiros, pias, lavatórios, bidês, sanitários e seus assentos e tampas, caixas de descarga e artigos semelhantes para usos sanitários ou higiênicos, de plásticos',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.49, 0.599, 0.6899, 0.7944]
  },
  {
    ncm: ['3924'],
    description: 'Artefatos de higiene/toucador de plástico, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.8, 0.9317, 1.042, 1.107]
  },
  {
    ncm: ['3925.10.00'],
    description: 'Caixa d’água, inclusive sua tampa, de plástico, mesmo reforçadas com fibra de vidro',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['3925.90'],
    description: 'Outras telhas, cumeeira e caixa d’água, inclusive sua tampa, de plástico, mesmo reforçadas com fibra de vidro',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['3925.10.00', '3925.90'],
    description: 'Artefatos para apetrechamento de construções, de plásticos, não especificados nem compreendidos em outras posições, incluindo persianas, sancas, molduras, apliques e rosetas, caixilhos de polietileno e outros plásticos, exceto os descritos nos CEST 10.015.00 e 10.016.00',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['3925.20.00'],
    description: 'Portas, janelas e seus caixilhos, alizares e soleiras',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.43, 0.5346, 0.6218, 0.6741]
  },
  {
    ncm: ['3925.30.00'],
    description: 'Postigos, estores (incluídas as venezianas) e artefatos semelhantes e suas partes',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.75, 0.878, 0.9848, 1.049]
  },
  {
    ncm: ['3926.90'],
    description: 'Outras obras de plástico, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['4814'],
    description: 'Papel de parede e revestimentos de parede semelhantes, papel para vitrais',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.79, 0.921, 1.03, 1.096]
  },
  {
    ncm: ['6810.19.00'],
    description: 'Telhas de concreto',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['6901.00.00'],
    description: 'Tijolos, placas (lajes), ladrilhos e outras peças cerâmicas de farinhas siliciosas fósseis (kieselghur, tripolita, diatomita, por exemplo) ou de terras siliciosas semelhantes',
    legal: 'Protocolo ICMS 104/08',
    mva: [1.01, 1.157, 1.28, 1.353]
  },
  {
    ncm: ['6902'],
    description: 'Tijolos, placas (lajes), ladrilhos e peças cerâmicas semelhantes, para uso na construção, refratários, que não sejam de farinhas siliciosas fósseis nem de terras siliciosas semelhantes',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.81, 0.9424, 1.053, 1.119]
  },
  {
    ncm: ['6904'],
    description: 'Tijolos para construção, tijoleiras, tapa-vigas e produtos semelhantes, de cerâmica - COM FRETE INCLUÍDO NA BASE DE CÁLCULO DE RETENÇÃO',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.4, 0.5024, 0.5878, 0.639]
  },
  {
    ncm: ['6904'],
    description: 'Tijolos para construção, tijoleiras, tapa-vigas e produtos semelhantes, de cerâmica - SEM FRETE INCLUÍDO NA BASE DE CÁLCULO DE RETENÇÃO',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.76, 0.8888, 0.9961, 1.061]
  },
  {
    ncm: ['6905'],
    description: 'Telhas, elementos de chaminés, condutores de fumaça, ornamentos arquitetônicos, de cerâmica, e outros produtos cerâmicos para uso na construção - COM FRETE INCLUÍDO NA BASE DE CÁLCULO DE RETENÇÃO',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.44, 0.5454, 0.6332, 0.6859]
  },
  {
    ncm: ['69.05'],
    description: 'Telhas, elementos de chaminés, condutores de fumaça, ornamentos arquitetônicos, de cerâmica, e outros produtos cerâmicos para uso na construção - SEM FRETE INCLUÍDO NA BASE DE CÁLCULO DE RETENÇÃO',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.69, 0.8137, 0.9167, 0.9785]
  },
  {
    ncm: ['6906.00.00'],
    description: 'Tubos, calhas ou algerozes e acessórios para canalizações, de cerâmica',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.91, 1.05, 1.166, 1.236]
  },
  {
    ncm: ['6907'],
    description: 'Ladrilhos e placas de cerâmica, exclusivamente para pavimentação ou revestimento (Convênio ICMS 25/17). Alterado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017 Redação Anterior',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.53, 0.642, 0.7352, 0.7912]
  },
  {
    ncm: ['6907'],
    description: 'Cubos, pastilhas e artigos semelhantes de cerâmica, mesmo com suporte (Convênio ICMS 25/17). Alterado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017 Redação Anterior',
    mva: [0.53, 0.642, 0.7352, 0.7912]
  },
  {
    ncm: ['6910'],
    description: 'Pias, lavatórios, colunas para lavatórios banheiras, bidês, sanitários, caixas de descarga, mictórios e aparelhos fixos semelhantes para usos sanitários, de cerâmica',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.4, 0.5024, 0.5878, 0.639]
  },
  {
    ncm: ['6912.00.00'],
    description: 'Artefatos de higiene/toucador de cerâmica',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.83, 0.9639, 1.076, 1.142]
  },
  {
    ncm: ['7003'],
    description: 'Vidro vazado ou laminado, em chapas, folhas ou perfis, mesmo com camada absorvente, refletora ou não, mas sem qualquer outro trabalho',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.42, 0.5239, 0.6105, 0.6624]
  },
  {
    ncm: ['7004'],
    description: 'Vidro estirado ou soprado, em folhas, mesmo com camada absorvente, refletora ou não, mas sem qualquer outro trabalho',
    legal: 'Protocolo ICMS 104/08',
    mva: [1.01, 1.157, 1.28, 1.353]
  },
  {
    ncm: ['7005'],
    description: 'Vidro flotado e vidro desbastado ou polido em uma ou em ambas as faces, em chapas ou em folhas, mesmo com camada absorvente, refletora ou não, mas sem qualquer outro trabalho',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['7007.19.00'],
    description: 'Vidros temperados',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.44, 0.5454, 0.6332, 0.6859]
  },
  {
    ncm: ['7007.29.00'],
    description: 'Vidros laminados',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['7008'],
    description: 'Vidros isolantes de paredes múltiplas',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['7016'],
    description: 'Blocos, placas, tijolos, ladrilhos, telhas e outros artefatos, de vidro prensado ou moldado, mesmo armado, para uso na construção, cubos, pastilhas e outros artigos semelhantes',
    mva: [0.6, 0.7171, 0.8146, 0.8732]
  },
  {
    ncm: ['7214.20.00'],
    description: 'Barras próprias para construções, exceto vergalhões Observar: - *Redução de base de cálculo: item 21 do anexo IIdo RICMS/AL',
    mva: [0.39, 0.4917, 0.5765, 0.6273]
  },
  {
    ncm: ['7308.90.10'],
    description: 'Outras barras próprias para construções, exceto vergalhões',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.39, 0.4917, 0.5765, 0.6273]
  },
  {
    ncm: ['7214.20.00'],
    description: 'Vergalhões Observar: - *Redução de base de cálculo: item 21 do anexo II do RICMS/AL',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.41, 0.5132, 0.5991, 0.6507]
  },
  {
    ncm: ['7213', '7308.90.10'],
    description: 'Outros vergalhões Observar: - *Redução de base de cálculo: item 21 do anexo II do RICMS/AL',
    mva: [0.41, 0.5132, 0.5991, 0.6507]
  },
  {
    ncm: ['7217.10.90', '7312'],
    description: 'Fios de ferro ou aço não ligados, não revestidos, mesmo polidos cordas, cabos, tranças (entrançados), lingas e artefatos semelhantes, de ferro ou aço, não isolados para usos elétricos',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.44, 0.5454, 0.6332, 0.6859]
  },
  {
    ncm: ['7217.20.10'],
    description: 'Outros fios de ferro ou aço, não ligados, galvanizados com um teor de carbono superior ou igual a 0,6%, em peso',
    mva: [0.42, 0.5239, 0.6105, 0.6624]
  },
  {
    ncm: ['7217.20.90'],
    description: 'Outros fios de ferro e aço, não ligados, galvanizados',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.42, 0.5239, 0.6105, 0.6624]
  },
  {
    ncm: ['7307'],
    description: 'Acessórios para tubos (inclusive uniões, cotovelos, luvas ou mangas), de ferro fundido, ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.37, 0.4702, 0.5538, 0.6039]
  },
  {
    ncm: ['7308.30.00'],
    description: 'Portas e janelas, e seus caixilhos, alizares e soleiras de ferro fundido, ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.4, 0.5024, 0.5878, 0.639]
  },
  {
    ncm: ['7308.40.00', '7308.90'],
    description: 'Material para andaimes, para armações (cofragens) e para escoramentos, (inclusive armações prontas, para estruturas de concreto armado ou argamassa armada), eletrocalhas e perfilados de ferro fundido, ferro ou aço, próprios para construção, exceto treliças de aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.65, 0.7707, 0.8713, 0.9317]
  },
  {
    ncm: ['7308.40.00'],
    description: 'Treliças de aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.38, 0.481, 0.5651, 0.6156]
  },
  {
    ncm: ['7308.90.90'],
    description: 'Telhas metálicas',
    mva: [0.55, 0.6634, 0.7579, 0.8146]
  },
  {
    ncm: ['7310'],
    description: 'Caixas diversas (tais como caixa de correio, de entrada de água, de energia, de instalação) de ferro fundido, ferro ou aço, próprias para a construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.89, 1.028, 1.144, 1.213]
  },
  {
    ncm: ['7313.00.00'],
    description: 'Arame farpado, de ferro ou aço, arames ou tiras, retorcidos, mesmo farpados, de ferro ou aço, dos tipos utilizados em cercas',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['7314'],
    description: 'Telas metálicas, grades e redes, de fios de ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.39, 0.4917, 0.5765, 0.6273]
  },
  {
    ncm: ['7315.11.00'],
    description: 'Correntes de rolos, de ferro fundido, ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [1.01, 1.157, 1.28, 1.353]
  },
  {
    ncm: ['7315.12.90'],
    description: 'Outras correntes de elos articulados, de ferro fundido, ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [1.01, 1.157, 1.28, 1.353]
  },
  {
    ncm: ['7315.82.00'],
    description: 'Correntes de elos soldados, de ferro fundido, de ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.68, 0.8029, 0.9054, 0.9668]
  },
  {
    ncm: ['7317.00'],
    description: 'Tachas, pregos, percevejos, escápulas, grampos ondulados ou biselados e artefatos semelhantes, de ferro fundido, ferro ou aço, mesmo com a cabeça de outra matéria, exceto cobre',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.44, 0.5454, 0.6332, 0.6859]
  },
  {
    ncm: ['7318'],
    description: 'Parafusos, pinos ou pernos, roscados, porcas, tira-fundos, ganchos roscados, rebites, chavetas, cavilhas, contrapinos, arruelas (incluídas as de pressão) e artefatos semelhantes, de ferro fundido, ferro ou aço',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.51, 0.6205, 0.7126, 0.7678]
  },
  {
    ncm: ['7323'],
    description: 'Palha de ferro ou aço, exceto os de uso doméstico classificados na posição NCM 7323.10.00',
    legal: 'Protocolo ICMS 104/08',
    mva: [1.01, 1.157, 1.28, 1.353]
  },
  {
    ncm: ['7323'],
    description: 'Esponjas, esfregões, luvas e artefatos semelhantes para limpeza, polimento e usos semelhantes, de ferro ou aço, exceto os de uso doméstico classificados na posição NCM 7323.10.00',
    legal: 'Protocolo ICMS 104/08',
    mva: [1.01, 1.157, 1.28, 1.353]
  },
  {
    ncm: ['7324'],
    description: 'Artefatos de higiene ou de toucador, e suas partes, de ferro fundido, ferro ou aço, incluídas as pias, banheiras, lavatórios, cubas, mictórios, tanques e afins de ferro fundido, ferro ou aço, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.62, 0.7385, 0.8373, 0.8966]
  },
  {
    ncm: ['7325'],
    description: 'Outras obras moldadas, de ferro fundido, ferro ou aço, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.86, 0.9961, 1.11, 1.178]
  },
  {
    ncm: ['7326'],
    description: 'Abraçadeiras',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.8, 0.9317, 1.042, 1.107]
  },
  {
    ncm: ['7407'],
    description: 'Barras de cobre',
    mva: [0.4, 0.5024, 0.5878, 0.639]
  },
  {
    ncm: ['7411.10.10'],
    description: 'Tubos de cobre e suas ligas, para instalações de água quente e gás, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['7412'],
    description: 'Acessórios para tubos (por exemplo, uniões, cotovelos, luvas ou mangas) de cobre e suas ligas, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.33, 0.4273, 0.5084, 0.5571]
  },
  {
    ncm: ['7415'],
    description: 'Tachas, pregos, percevejos, escápulas e artefatos semelhantes, de cobre, ou de ferro ou aço com cabeça de cobre, parafusos, pinos ou pernos, roscados, porcas, ganchos roscados, rebites, chavetas, cavilhas, contrapinos, arruelas (incluídas as de pressão), e artefatos semelhantes, de cobre',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.62, 0.7385, 0.8373, 0.8966]
  },
  {
    ncm: ['7418.20.00'],
    description: 'Artefatos de higiene/toucador de cobre, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.46, 0.5668, 0.6559, 0.7093]
  },
  {
    ncm: ['7607.19.90'],
    description: 'Manta de subcobertura aluminizada',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.59, 0.7063, 0.8033, 0.8615]
  },
  {
    ncm: ['7608'],
    description: 'Tubos de alumínio e suas ligas, para refrigeração e ar condicionado, para uso na construção',
    mva: [0.75, 0.878, 0.9848, 1.049]
  },
  {
    ncm: ['7609.00.00'],
    description: 'Acessórios para tubos (por exemplo, uniões, cotovelos, luvas ou mangas), de alumínio, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.66, 0.7815, 0.8827, 0.9434]
  },
  {
    ncm: ['7610'],
    description: 'Construções e suas partes (por exemplo, pontes e elementos de pontes, torres, pórticos ou pilones, pilares, colunas, armações, estruturas para telhados, portas e janelas, e seus caixilhos, alizares e soleiras, balaustradas), de alumínio, exceto as construções pré-fabricadas da posição 94.06, chapas, barras, perfis, tubos e semelhantes, de alumínio, próprios para construções',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.38, 0.481, 0.5651, 0.6156]
  },
  {
    ncm: ['7615.20.00'],
    description: 'Artefatos de higiene/toucador de alumínio, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.73, 0.8566, 0.9621, 1.025]
  },
  {
    ncm: ['7616'],
    description: 'Outras obras de alumínio, próprias para construções, incluídas as persianas',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['8302.41.00'],
    description: 'Outras guarnições, ferragens e artigos semelhantes de metais comuns, para construções, inclusive puxadores',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.47, 0.5776, 0.6672, 0.721]
  },
  {
    ncm: ['8301'],
    description: 'Fechaduras e ferrolhos (de chave, de segredo ou elétricos), de metais comuns, incluídas as suas partes fechos e armações com fecho, com fechadura, de metais comuns chaves para estes artigos, de metais comuns, exceto os de uso automotivo',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.54, 0.6527, 0.7466, 0.8029]
  },
  {
    ncm: ['8302.10.00'],
    description: 'Dobradiças de metais comuns, de qualquer tipo',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.58, 0.6956, 0.792, 0.8498]
  },
  {
    ncm: ['8307'],
    description: 'Tubos flexíveis de metais comuns, mesmo com acessórios, para uso na construção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.62, 0.7385, 0.8373, 0.8966]
  },
  {
    ncm: ['8311'],
    description: 'Fios, varetas, tubos, chapas, eletrodos e artefatos semelhantes, de metais comuns ou de carbonetos metálicos, revestidos exterior ou interiormente de decapantes ou de fundentes, para soldagem (soldadura) ou depósito de metal ou de carbonetos metálicos fios e varetas de pós de metais comuns aglomerados, para metalização por projeção',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.6, 0.7171, 0.8146, 0.8732]
  },
  {
    ncm: ['8481'],
    description: 'Torneiras, válvulas (incluídas as redutoras de pressão e as termostáticas) e dispositivos semelhantes, para canalizações, caldeiras, reservatórios, cubas e outros recipientes',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.47, 0.5776, 0.6672, 0.721]
  },
  {
    ncm: ['7009'],
    description: 'Espelhos de vidro, mesmo emoldurados, exceto os de uso automotivo',
    legal: 'Protocolo ICMS 104/08',
    mva: [0.42, 0.5239, 0.6105, 0.6624]
  },
  {
    ncm: ['1211.90.90'],
    description: 'Henna (embalagens de conteúdo igual ou inferior a 200g)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.8005, 0.9322, 1.042, 1.108]
  },
  {
    ncm: ['1211.90.90'],
    description: 'Henna (embalagens de conteúdo superior a 200g) Acrescentado pelo Decreto n° 52.991/2017 (DOE de 17.04.2017), efeitos a partir de 01.07.2017',
    legal: ' Não tem',
    mva: [0.8005, 0.9322, 1.042, 1.108]
  },
  {
    ncm: ['2712.10.00'],
    description: 'Vaselina',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5165, 0.6275, 0.7199, 0.7754]
  },
  {
    ncm: ['2814.20.00'],
    description: 'Amoníaco em solução aquosa (amônia)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.536, 0.6484, 0.742, 0.7982]
  },
  {
    ncm: ['2847.00.00'],
    description: 'Peróxido de hidrogênio, em embalagens de conteúdo igual ou inferior a 500ml',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5124, 0.6231, 0.7153, 0.7706]
  },
  {
    ncm: ['3006.70.00'],
    description: 'Lubrificação íntima',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6344, 0.754, 0.8536, 0.9134]
  },
  {
    ncm: ['3301'],
    description: 'Óleos essenciais (desterpenados ou não), incluídos os chamados “concreto” ou “absolutos”, resinóides, oleorresinas de extração, soluções concentradas de óleos essenciais em gorduras, em óleos fixos, em ceras ou em matérias análogas, obtidas por tratamento de flores através de substâncias gordas ou por maceração, subprodutos terpênicos residuais da desterpenação dos óleos essenciais, águas destiladas aromáticas e soluções aquosas de óleos essenciais, em embalagens de conteúdo inferior ou igual a 500ml',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5715, 0.6865, 0.7823, 0.8398]
  },
  {
    ncm: ['3303.00.10'],
    description: 'Perfumes (extratos)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5237, 0.8368, 0.9412, 1.004]
  },
  {
    ncm: ['3303.00.20'],
    description: 'Águas-de-colônia',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5715, 0.8944, 1.002, 1.067]
  },
  {
    ncm: ['3304.10.00'],
    description: 'Produtos de maquilagem para os lábios',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6552, 0.9953, 1.109, 1.177]
  },
  {
    ncm: ['3304.20.10'],
    description: 'Sombra, delineador, lápis para sobrancelhas e rímel',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6552, 0.9953, 1.109, 1.177]
  },
  {
    ncm: ['3304.20.90'],
    description: 'Outros produtos de maquilagem para os olhos',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6552, 0.9953, 1.109, 1.177]
  },
  {
    ncm: ['3304.30.00'],
    description: 'Preparações para manicuros e pedicuros, incluindo removedores de esmalte à base de acetona',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6552, 0.9953, 1.109, 1.177]
  },
  {
    ncm: ['3304.91.00'],
    description: 'Pós, incluídos os compactos, para maquilagem',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6552, 0.9953, 1.109, 1.177]
  },
  {
    ncm: ['3304.99.10'],
    description: 'Cremes de beleza, cremes nutritivos e loções tônicas',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.596, 0.9239, 1.033, 1.099]
  },
  {
    ncm: ['3304.99.90'],
    description: 'Outros produtos de beleza ou de maquilagem preparados e preparações para conservação ou cuidados da pele, exceto as preparações solares e antisolares',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.3224, 0.5941, 0.6847, 0.739]
  },
  {
    ncm: ['3304.99.90'],
    description: 'Preparações solares e antissolares',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.3224, 0.5941, 0.6847, 0.739]
  },
  {
    ncm: ['3305.10.00'],
    description: 'Xampus para o cabelo',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.3793, 0.6627, 0.7572, 0.8139]
  },
  {
    ncm: ['3305.20.00'],
    description: 'Preparações para ondulação ou alisamento, permanentes, dos cabelos',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.4936, 0.8005, 0.9028, 0.9642]
  },
  {
    ncm: ['3305.30.00'],
    description: 'Laquês para o cabelo',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5277, 0.8416, 0.9462, 1.009]
  },
  {
    ncm: ['3305.90.00'],
    description: 'Outras preparações capilares, incluindo máscaras e finalizadores',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5393, 0.8556, 0.961, 1.024]
  },
  {
    ncm: ['3305.90.00'],
    description: 'Condicionadores',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5393, 0.8556, 0.961, 1.024]
  },
  {
    ncm: ['3305.90.00'],
    description: 'Tintura para o cabelo',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.3455, 0.622, 0.7141, 0.7694]
  },
  {
    ncm: ['3306.10.00'],
    description: 'Dentifrícios Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017 Redação Anterior',
    mva: [0.3305, 0.4279, 0.509, 0.5577]
  },
  {
    ncm: ['3306.20.00'],
    description: 'Fios utilizados para limpar os espaços interdentais (fios dentais) Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017Redação Anterior',
    mva: [0.3305, 0.4279, 0.509, 0.5577]
  },
  {
    ncm: ['3306.90.00'],
    description: 'Outras preparações para higiene bucal ou dentária Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017Redação Anterior',
    mva: [0.3305, 0.4279, 0.509, 0.5577]
  },
  {
    ncm: ['3307.10.00'],
    description: 'Preparações para barbear (antes, durante ou após)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6718, 1.015, 1.13, 1.199]
  },
  {
    ncm: ['3307.20.10'],
    description: 'Desodorantes (desodorizantes) corporais líquidos',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5088, 0.8188, 0.9222, 0.9842]
  },
  {
    ncm: ['3307.20.10'],
    description: 'Antiperspirantes líquidos',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5088, 0.8188, 0.9222, 0.9842]
  },
  {
    ncm: ['3307.20.90'],
    description: 'Outros desodorantes (desodorizantes) corporais',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5215, 0.8341, 0.9383, 1.001]
  },
  {
    ncm: ['3307.20.90'],
    description: 'Outros antiperspirantes',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5215, 0.8341, 0.9383, 1.001]
  },
  {
    ncm: ['3307.30.00'],
    description: 'Sais perfumados e outras preparações para banhos',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5215, 0.8341, 0.9383, 1.001]
  },
  {
    ncm: ['3307.90.00'],
    description: 'Outros produtos de perfumaria preparados',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5215, 0.8341, 0.9383, 1.001]
  },
  {
    ncm: ['3307.90.00'],
    description: 'Outros produtos de toucador preparados',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5215, 0.8341, 0.9383, 1.001]
  },
  {
    ncm: ['3307.90.00'],
    description: 'Soluções para lentes de contato ou para olhos artificiais',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.4077, 0.697, 0.7934, 0.8512]
  },
  {
    ncm: ['3401.11.90'],
    description: 'Sabões de toucador em barras, pedaços ou figuras moldados',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.248, 0.3393, 0.4154, 0.4611]
  },
  {
    ncm: ['3401.19.00'],
    description: 'Outros sabões, produtos e preparações, em barras, pedaços ou figuras moldados, inclusive lenços umedecidos',
    mva: [0.3785, 0.4794, 0.5634, 0.6139]
  },
  {
    ncm: ['3401.20.10'],
    description: 'Sabões de toucador sob outras formas',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.4561, 0.5626, 0.6514, 0.7047]
  },
  {
    ncm: ['3401.30.00'],
    description: 'Produtos e preparações orgânicos tensoativos para lavagem da pele, na forma de líquido ou de creme, acondicionados para venda a retalho, mesmo contendo sabão',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.4561, 0.5626, 0.6514, 0.7047]
  },
  {
    ncm: ['4014.90.10'],
    description: 'Bolsa para gelo ou para água quente',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6679, 0.7899, 0.8916, 0.9527]
  },
  {
    ncm: ['4014.90.90'],
    description: 'Chupetas e bicos para mamadeiras e para chupetas de borracha Alterado peloDecreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017 Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['3924.90.00'],
    description: 'Chupetas e bicos para mamadeiras e para chupetas, de silicone Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017 Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['4202.1'],
    description: 'Malas e maletas de toucador',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5804, 0.696, 0.7924, 0.8502]
  },
  {
    ncm: ['4818.10.00'],
    description: 'Papel higiênico - folha simples',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5301, 0.6421, 0.7354, 0.7913]
  },
  {
    ncm: ['4818.10.00'],
    description: 'Papel higiênico - folha dupla e tripla',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5054, 0.6156, 0.7073, 0.7624]
  },
  {
    ncm: ['4818.20.00'],
    description: 'Lenços (incluídos os de maquilagem) e toalhas de mão',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.8171, 0.9501, 1.061, 1.127]
  },
  {
    ncm: ['4818.20.00'],
    description: 'Papel toalha de uso institucional do tipo comercializado em rolos igual ou superior a 80 metros e do tipo comercializado em folhas intercaladas',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5327, 0.6448, 0.7383, 0.7944]
  },
  {
    ncm: ['4818.30.00'],
    description: 'Toalhas e guardanapos de mesa',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.7155, 0.841, 0.9456, 1.008]
  },
  {
    ncm: ['4818.90.90'],
    description: 'Toalhas de cozinha (papel toalha de uso doméstico)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.6386, 0.7585, 0.8584, 0.9184]
  },
  {
    ncm: ['9619.00.00'],
    description: 'Fraldas Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['9619.00.00'],
    description: 'Tampões higiênicos Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017 Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['9619.00.00'],
    description: 'Absorventes higiênicos externos Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['5601.21.90'],
    description: 'Hastes flexíveis (uso não medicinal) Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017 Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['5603.92.90'],
    description: 'Sutiã descartável, assemelhados e papel para depilação',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.536, 0.6484, 0.742, 0.7982]
  },
  {
    ncm: ['8203.20.90'],
    description: 'Pinças para sobrancelhas',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5968, 0.7136, 0.811, 0.8694]
  },
  {
    ncm: ['8214.10.00'],
    description: 'Espátulas (artigos de cutelaria)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5968, 0.7136, 0.811, 0.8694]
  },
  {
    ncm: ['8214.20.00'],
    description: 'Utensílios e sortidos de utensílios de manicuros ou de pedicuros (incluídas as limas para unhas)',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5968, 0.7136, 0.811, 0.8694]
  },
  {
    ncm: ['9025.11.10'],
    description: 'Termômetros, inclusive o digital',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.592, 0.7085, 0.8056, 0.8638]
  },
  {
    ncm: ['9603.2'],
    description: 'Escovas e pincéis de barba, escovas para cabelos, para cílios ou para unhas e outras escovas de toucador de pessoas, incluídas as que sejam partes de aparelhos, exceto escovas de dentes',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5804, 0.696, 0.7924, 0.8502]
  },
  {
    ncm: ['9603.21.00'],
    description: 'Escovas de dentes, incluídas as escovas para dentaduras Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017Redação Anterior',
    mva: [0.3305, 0.4279, 0.509, 0.5577]
  },
  {
    ncm: ['9603.30.00'],
    description: 'Pincéis para aplicação de produtos cosméticos',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5804, 0.696, 0.7924, 0.8502]
  },
  {
    ncm: ['9605.00.00'],
    description: 'Sortidos de viagem, para toucador de pessoas para costura ou para limpeza de calçado ou de roupas',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5804, 0.696, 0.7924, 0.8502]
  },
  {
    ncm: ['9615'],
    description: 'Pentes, travessas para cabelo e artigos semelhantes, grampos (alfinetes) para cabelo, pinças (pinceguiches), onduladores, bobes (rolos) e artefatos semelhantes para penteados, e suas partes, exceto os da posição 8516 e suas partes',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5804, 0.696, 0.7924, 0.8502]
  },
  {
    ncm: ['9616.20.00'],
    description: 'Borlas ou esponjas para pós ou para aplicação de outros cosméticos ou de produtos de toucador',
    legal: 'Protocolo ICMS 106/08',
    mva: [0.5804, 0.696, 0.7924, 0.8502]
  },
  {
    ncm: ['3923.30.00'],
    description: 'Mamadeiras Alterado peloDecreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017 Redação Anterior',
    mva: [0.4134, 0.5168, 0.603, 0.6547]
  },
  {
    ncm: ['8212.10.208212.20.10'],
    description: 'Aparelhos e lâminas de barbear Acrescentado peloDecreto n° 52.991/2017 (DOE de 17.04.2017), efeitos a partir de 01.01.2016',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1704.90.10'],
    description: 'Chocolate branco, em embalagens de conteúdo inferior ou igual a 1 kg, excluídos os ovos de páscoa de chocolate',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4147, 0.5182, 0.6045, 0.6562]
  },
  {
    ncm: ['1806.31.10'],
    description: 'Chocolates contendo cacau, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.6892, 0.8128, 0.9158, 0.9776]
  },
  {
    ncm: ['1806.32.10'],
    description: 'Chocolate em barras, tabletes ou blocos ou no estado líquido, em pasta, em pó, grânulos ou formas semelhantes, em recipientes ou embalagens imediatas de conteúdo inferior ou igual a 2 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4457, 0.5515, 0.6396, 0.6925]
  },
  {
    ncm: ['1806.90.00'],
    description: 'Chocolates e outras preparações alimentícias contendo cacau, em embalagens de conteúdo inferior ou igual a 1 kg, excluídos os achocolatados em pó e ovos de páscoa de chocolate',
    legal: 'Prot. ICMS 188/09',
    mva: [0.7095, 0.8346, 0.9388, 1.001]
  },
  {
    ncm: ['1704.90.10'],
    description: 'Ovos de páscoa de chocolate branco',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4265, 0.5309, 0.6179, 0.67]
  },
  {
    ncm: ['1806.90.00'],
    description: 'Ovos de páscoa de chocolate',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4265, 0.5309, 0.6179, 0.67]
  },
  {
    ncm: ['1806.90.00'],
    description: 'Achocolatados em pó, em embalagens de conteúdo inferior ou igual a 1Kg, exceto os classificados no CEST 17.006.02 (Convênio ICMS 27/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017 Redação Anterior',
    legal: 'Prot. ICMS 188/09 Prot. ICMS 14/16',
    mva: [0.2879, 0.3821, 0.4607, 0.5078]
  },
  {
    ncm: ['1806.10.00'],
    description: 'Cacau em pó, com adição de açúcar ou de outros edulcorantes, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2879, 0.3821, 0.4607, 0.5078]
  },
  {
    ncm: ['1806.90.00'],
    description: 'Achocolatados em pó, em cápsulas (Convênio ICMS 27/17) Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017',
    mva: [0.2879, 0.3821, 0.4607, 0.5078]
  },
  {
    ncm: ['1806.90.00'],
    description: 'Caixas de bombons contendo cacau, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2224, 0.3118, 0.3864, 0.4311]
  },
  {
    ncm: ['1704.90.90'],
    description: 'Bombons, inclusive à base de chocolate branco sem cacau',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5412, 0.654, 0.7479, 0.8043]
  },
  {
    ncm: ['1806.90.00'],
    description: 'Bombons, balas, caramelos, confeitos, pastilhas e outros produtos de confeitaria, contendo cacau',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5835, 0.6994, 0.7959, 0.8539]
  },
  {
    ncm: ['2009'],
    description: 'Sucos de frutas ou de produtos hortícolas, mistura de sucos',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4523, 0.5586, 0.6471, 0.7003]
  },
  {
    ncm: ['2009.8'],
    description: 'Água de coco',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4603, 0.5672, 0.6562, 0.7096]
  },
  {
    ncm: ['0402.1'],
    description: 'Leite em pó, blocos ou grânulos, exceto creme de leite',
    legal: 'Prot. ICMS 188/09',
    mva: [0.1065, 0.1875, 0.2549, 0.2954]
  },
  {
    ncm: ['1901.10.20'],
    description: 'Farinha láctea',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3042, 0.3996, 0.4792, 0.5269]
  },
  {
    ncm: ['1901.10.10'],
    description: 'Leite modificado para alimentação de crianças',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2528, 0.3445, 0.4209, 0.4667]
  },
  {
    ncm: ['1901.10.90', '1901.10.30'],
    description: 'Preparações para alimentação infantil à base de farinhas, grumos, sêmolas ou amidos e outros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.471, 0.5786, 0.6683, 0.7221]
  },
  {
    ncm: ['0401.10.10'],
    description: 'Leite “longa vida” (UHT - “Ultra High Temperature”), em recipiente de conteúdo inferior ou igual a 2 litros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0401.10.10'],
    description: 'Leite “longa vida” (UHT - “Ultra High Temperature”), em recipiente de conteúdo superior a 2 litros e inferior ou',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0401.40.10'],
    description: 'Leite em recipiente de conteúdo inferior ou igual a 1 litro',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0401.40.10'],
    description: 'Leite em recipiente de conteúdo superior a 1 litro e inferior ou igual a 5 litros',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0401.10.90'],
    description: 'Leite do tipo pasteurizado em recipiente de conteúdo inferior ou igual a 1 litro',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0401.10.90'],
    description: 'Leite do tipo pasteurizado em recipiente de conteúdo superior a 1 litro e inferior ou igual a 5 litros',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0401.40.2'],
    description: 'Creme de leite, em recipiente de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2854, 0.3795, 0.4578, 0.5049]
  },
  {
    ncm: ['0401.40.2'],
    description: 'Creme de leite, em recipiente de conteúdo superior a 1 kg',
    mva: [0.2854, 0.3795, 0.4578, 0.5049]
  },
  {
    ncm: ['0401.10'],
    description: 'Outros cremes de leite, em recipiente de conteúdo inferior ou igual a 1kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2854, 0.3795, 0.4578, 0.5049]
  },
  {
    ncm: ['0402.9'],
    description: 'Leite condensado, em recipiente de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2411, 0.3319, 0.4076, 0.453]
  },
  {
    ncm: ['0402.9'],
    description: 'Leite condensado, em recipiente de conteúdo superior a 1 kg',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['403'],
    description: 'Iogurte e leite fermentado em recipiente de conteúdo inferior ou igual a 2 litros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['403'],
    description: 'Iogurte e leite fermentado em recipiente de conteúdo superior a 2 litros',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0403.90.00'],
    description: 'Coalhada',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['406'],
    description: 'Requeijão e similares, em recipiente de conteúdo inferior ou igual a 1 kg, exceto as embalagens individuais de',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['406'],
    description: 'Requeijão e similares, em recipiente de conteúdo superior a 1 kg',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['406'],
    description: 'Queijos, exceto os dos CEST',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0406.10.10'],
    description: 'Queijo muçarela',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0406.10.90'],
    description: 'Queijo minas frescal',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0406.10.90'],
    description: 'Queijo ricota',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0406.10.90'],
    description: 'Queijo petit suisse',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0405.10.00'],
    description: 'Manteiga, em embalagem de conteúdo inferior ou igual a 1 kg, exceto as embalagens individuais de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0405.10.00'],
    description: 'Manteiga, em embalagem de conteúdo superior a 1 kg',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['0405.90.90'],
    description: 'Manteiga de garrafa',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['1517.10.00'],
    description: 'Margarina e creme vegetal, em recipiente de conteúdo superior a 500 g e inferior ou igual a 1 kg, exceto as embalagens individuais de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2561, 0.348, 0.4246, 0.4706]
  },
  {
    ncm: ['1517.10.00'],
    description: 'Margarina e creme vegetal, em recipiente de conteúdo superior a de 1 kg',
    mva: [0.2561, 0.348, 0.4246, 0.4706]
  },
  {
    ncm: ['1517.90'],
    description: 'Outras margarinas e cremes vegetais em recipiente de conteúdo inferior a 1 kg, exceto as embalagens individuais de',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2561, 0.348, 0.4246, 0.4706]
  },
  {
    ncm: ['1516.20.00'],
    description: 'Gorduras e óleos vegetais e respectivas frações, parcial ou totalmente hidrogenados, interesterificados, reesterificados ou elaidinizados, mesmo refinados, mas não preparados de outro modo, em recipiente de conteúdo inferior ou igual a 1 kg, exceto as embalagens individuais de conteúdo inferior ou igual a 10 g',
    mva: [0.27, 0.3629, 0.4404, 0.4868]
  },
  {
    ncm: ['1516.20.00'],
    description: 'Gorduras e óleos vegetais e respectivas frações, parcial ou totalmente hidrogenados, interesterificados, reesterificados ou elaidinizados, mesmo refinados, mas não preparados de outro modo, em recipiente de',
    mva: [0.27, 0.3629, 0.4404, 0.4868]
  },
  {
    ncm: ['1901.90.20'],
    description: 'Doces de leite',
    mva: [0.2941, 0.3888, 0.4677, 0.515]
  },
  {
    ncm: ['1904.10.00'],
    description: 'Produtos à base de cereais, obtidos por expansão ou torrefação',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.5432, 0.6561, 0.7502, 0.8067]
  },
  {
    ncm: ['1905.90.90'],
    description: 'Salgadinhos diversos',
    legal: 'Prot. ICMS 188/09',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['2005.20.00'],
    description: 'Batata frita, inhame e mandioca fritos',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4776, 0.5857, 0.6758, 0.7299]
  },
  {
    ncm: ['2008.1'],
    description: 'Amendoim e castanhas tipo aperitivo, em embalagem de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.627, 0.746, 0.8453, 0.9048]
  },
  {
    ncm: ['2008.1'],
    description: 'Amendoim e castanhas tipo aperitivo, em embalagem de conteúdo superior a 1 kg',
    mva: [0.627, 0.746, 0.8453, 0.9048]
  },
  {
    ncm: ['2103.20.10'],
    description: 'Catchup em embalagens imediatas de conteúdo inferior ou igual a 650 g, exceto as embalagens contendo envelopes',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5833, 0.6992, 0.7957, 0.8536]
  },
  {
    ncm: ['2103.90.21'],
    description: 'Condimentos e temperos compostos, incluindo molho de pimenta e outros molhos, em embalagens imediatas de conteúdo inferior ou igual a 1 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 3 g.',
    legal: 'Prot. ICMS 188/09',
    mva: [0.6284, 0.7476, 0.8468, 0.9064]
  },
  {
    ncm: ['2103.10.10'],
    description: 'Molhos de soja preparados em embalagens imediatas de conteúdo inferior ou igual a 650 g, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.7213, 0.8472, 0.9522, 1.015]
  },
  {
    ncm: ['2103.30.10'],
    description: 'Farinha de mostarda em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5147, 0.6255, 0.7179, 0.7733]
  },
  {
    ncm: ['2103.30.21'],
    description: 'Mostarda preparada em embalagens imediatas de conteúdo inferior ou igual a 650 g, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.7708, 0.9004, 1.008, 1.073]
  },
  {
    ncm: ['2103.90.11'],
    description: 'Maionese em embalagens imediatas de conteúdo inferior ou igual a 650 g, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2828, 0.3767, 0.4549, 0.5018]
  },
  {
    ncm: ['2002'],
    description: 'Tomates preparados ou conservados, exceto em vinagre ou em ácido acético, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5793, 0.6949, 0.7912, 0.8489]
  },
  {
    ncm: ['2103.20.10'],
    description: 'Molhos de tomate em embalagens imediatas de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2042, 0.2923, 0.3657, 0.4098]
  },
  {
    ncm: ['1704.90.90'],
    description: 'Barra de cereais',
    legal: 'Prot. ICMS 188/09',
    mva: [0.65, 0.7707, 0.8713, 0.9317]
  },
  {
    ncm: ['1806.31.20'],
    description: 'Barra de cereais contendo cacau',
    legal: 'Prot. ICMS 188/09',
    mva: [0.65, 0.7707, 0.8713, 0.9317]
  },
  {
    ncm: ['1902.30.00'],
    description: 'Massas alimentícias tipo instantânea',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1902'],
    description: 'Massas alimentícias, cozidas ou recheadas (de carne ou de outras substâncias) ou preparadas de outro modo, exceto as descritas nos CEST 17.047.00, 17.048.01, e 17.048.02 (Convênio ICMS 117/2016) Alterado pelo Decreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017Redação Anterior',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['1902.40.00'],
    description: 'Cuscuz',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['1902.20.00'],
    description: 'Massas alimentícias recheadas (mesmo cozidas ou preparadas de outro modo) (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['1902.1'],
    description: 'Massas alimentícias do tipo comum, não cozidas, nem recheadas, nem preparadas de outro modo',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1902.1'],
    description: 'Massas alimentícias do tipo sêmola, não cozidas, nem recheadas, nem preparadas de outro modo, exceto a descrita no CEST 17.049.04 (Convênio ICMS 117/2016)',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1902.1'],
    description: 'Massas alimentícias do tipo granoduro, não cozidas, nem recheadas, nem preparadas de outro modo, exceto a descrita no CEST 17.049.05 (Convênio ICMS 117/2016) Alterado pelo Decreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017Redação Anterior',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1902.19.00'],
    description: 'Massas alimentícias do tipo comum, não cozidas, nem recheadas, nem preparadas de outro modo, que não contenham ovos (Convênio ICMS 117/2016)',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1902.19.00'],
    description: 'Massas alimentícias do tipo sêmola, não cozidas, nem recheadas, nem preparadas de outro modo, que não contenham ovos (Convênio ICMS 117/2016)',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1902.19.00'],
    description: 'Massas alimentícias do tipo granoduro, não cozidas, nem recheadas, nem preparadas de outro modo, que não contenham ovos (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1905.20'],
    description: 'Pães industrializados, inclusive de especiarias, exceto panetones e bolo de forma',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1905.20.90'],
    description: 'Bolo de forma, inclusive de especiarias',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.20.10'],
    description: 'Panetones',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1905.31.00'],
    description: 'Biscoitos e bolachas derivados de farinha de trigo, (exceto dos tipos cream cracker, água e sal, maisena, maria e outros de consumo popular que não sejam adicionados de cacau, nem recheados, cobertos ou amanteigados, independentemente de sua denominação comercial)',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.31.00'],
    description: 'Biscoitos e bolachas não derivados de farinha de trigo, (exceto dos tipos cream cracker, água e sal, maisena e maria e outros de consumo popular que não sejam adicionados de cacau, nem recheados, cobertos ou amanteigados, independentemente de sua denominação comercial)',
    legal: 'Prot. ICMS 188/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['1905.90.20'],
    description: 'Outras bolachas, exceto casquinhas para sorvete e os biscoitos e bolachas relacionados nos CEST 17.056.00 e 17.056.01',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.32.00'],
    description: 'Waffles e wafers - sem cobertura',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.32.00'],
    description: 'Waffles e wafers- com cobertura',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.40.00'],
    description: 'Torradas, pão torrado e produtos semelhantes torrados',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.90.10'],
    description: 'Outros pães de forma',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1905.90.90'],
    description: 'Outros pães e bolos industrializados e produtos de panificação não especifícados anteriormente, exceto casquinhas para sorvete Alterado pelo Decreto n° 54.720/2017 (DOE de 15.08.2017), efeitos a partir de 15.08.2017Redação Anterior',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3, 0.3951, 0.4744, 0.522]
  },
  {
    ncm: ['1905.10.00'],
    description: 'Pão denominado knackebrot',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1905.90'],
    description: 'Demais pães industrializados',
    legal: '**Prot. ICMS 50/05',
    mva: [0.2, 0.2878, 0.361, 0.4049]
  },
  {
    ncm: ['1508'],
    description: 'Óleo de amendoim refinado, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4233, 0.5274, 0.6142, 0.6663]
  },
  {
    ncm: ['1509'],
    description: 'Azeites de oliva, em recipientes com capacidade inferior a 2 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 20 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.2659, 0.3585, 0.4357, 0.482]
  },
  {
    ncm: ['1509'],
    description: 'Azeites de oliva, em recipientes com capacidade igual ou superior a 2 litros e inferior ou igual a 5 litros',
    mva: [0.2659, 0.3585, 0.4357, 0.482]
  },
  {
    ncm: ['1509'],
    description: 'Azeites de oliva, em recipientes com capacidade superior a 5 litros',
    mva: [0.2659, 0.3585, 0.4357, 0.482]
  },
  {
    ncm: ['1510.00.00'],
    description: 'Outros óleos e respectivas frações, obtidos exclusivamente a partir de azeitonas, mesmo refinados, mas não quimicamente modificados, e misturas desses óleos ou frações com óleos ou frações da posição 15.09, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4376, 0.5428, 0.6304, 0.683]
  },
  {
    ncm: ['1512.19.11'],
    description: 'Óleo de girassol ou de algodão refinado, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.1504, 0.2346, 0.3047, 0.3468]
  },
  {
    ncm: ['1514.1'],
    description: 'Óleo de canola, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.1651, 0.2504, 0.3214, 0.364]
  },
  {
    ncm: ['1515.19.00'],
    description: 'Óleo de linhaça refinado, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [2.067, 2.292, 2.479, 2.591]
  },
  {
    ncm: ['1515.29.10'],
    description: 'Óleo de milho refinado, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.1586, 0.2434, 0.314, 0.3564]
  },
  {
    ncm: ['1512.29.90'],
    description: 'Outros óleos refinados, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5927, 0.7092, 0.8064, 0.8646]
  },
  {
    ncm: ['1517.90.10'],
    description: 'Misturas de óleos refinados, para consumo humano, em recipientes com capacidade inferior ou igual a 5 litros, exceto as embalagens individuais de conteúdo inferior ou igual a 15 mililitros.Alterado pelo Decreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017Redação Anterior',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.2653, 0.3579, 0.435, 0.4813]
  },
  {
    ncm: ['1511'],
    description: 'Outros óleos vegetais comestíveis não especificados anteriormente',
    mva: [0.21, 0.2985, 0.3723, 0.4166]
  },
  {
    ncm: ['1601.00.00'],
    description: 'Enchidos (embutidos) e produtos semelhantes, de carne, miudezas ou sangue, exceto salsicha, linguiça e mortadela',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3762, 0.4769, 0.5608, 0.6112]
  },
  {
    ncm: ['1601.00.00'],
    description: 'Salsicha e linguiça',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3762, 0.4769, 0.5608, 0.6112]
  },
  {
    ncm: ['1601.00.00'],
    description: 'Mortadela',
    legal: 'Prot. ICMS 188/09',
    mva: [0.3762, 0.4769, 0.5608, 0.6112]
  },
  {
    ncm: ['1602'],
    description: 'Outras preparações e conservas de carne, miudezas ou de sangue, exceto as descritas nos CEST 17.079.01, 17.079.02, 17.079.03, 17.079.04, 17.079.05, 17.079.06',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1602.31.00'],
    description: 'Outras preparações e conservas de carne, de miudezas ou de sangue, de aves da posição 01.05: de peruas e de perus (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1602.32.10'],
    description: 'Outras preparações e conservas de carne, de miudezas ou de sangue, de aves da posição 01.05: de galos e de galinhas, com conteúdo de carne ou de miudezas superior ou igual a 57%, em peso, não cozidas (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1602.32.20'],
    description: 'Outras preparações e conservas de carne, de miudezas ou de sangue, todas de aves da posição 01.05: de galos e de galinhas, com conteúdo de carne ou de miudezas superior ou igual a 57%, em peso, cozidas (Convênio ICMS 117/2016 )Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1602.41.00'],
    description: 'Outras preparações e conservas de carne, de miudezas ou de sangue, da espécie suína: pernas e respectivos pedaços (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1602.49.00'],
    description: 'Outras preparações e conservas de carne, de miudezas ou de sangue, da espécie suína: outras, incluindo as misturas (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1602.50.00'],
    description: 'Outras preparações e conservas de carne, de miudezas ou de sangue, da espécie bovina (Convênio ICMS 117/2016)Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.3613, 0.4609, 0.5439, 0.5937]
  },
  {
    ncm: ['1604'],
    description: 'Preparações e conservas de peixes, caviar e seus sucedâneos preparados a partir de ovas de peixe, exceto os descritos nos CEST 17.080.01 e 17.081.00 (Convênio ICMS 117/2016) Alterado pelo Decreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017Redação Anterior',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.4809, 0.5893, 0.6796, 0.7337]
  },
  {
    ncm: ['1604.20.10'],
    description: 'Outras preparações e conservas de atuns (Convênio ICMS 117/2016) Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    legal: 'Prot. ICMS 188/2009',
    mva: [0.4809, 0.5893, 0.6796, 0.7337]
  },
  {
    ncm: ['1604'],
    description: 'Sardinha em conserva',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4809, 0.5893, 0.6796, 0.7337]
  },
  {
    ncm: ['1605'],
    description: 'Crustáceos, moluscos e outros invertebrados aquáticos, preparados ou em conservas',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4768, 0.5849, 0.6749, 0.7289]
  },
  {
    ncm: ['710'],
    description: 'Produtos hortícolas, cozidos em água ou vapor, congelados, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [1.059, 1.21, 1.335, 1.411]
  },
  {
    ncm: ['710'],
    description: 'Produtos hortícolas, cozidos em água ou vapor, congelados, em embalagens de conteúdo superior a 1 kg',
    mva: [1.059, 1.21, 1.335, 1.411]
  },
  {
    ncm: ['811'],
    description: 'Frutas, não cozidas ou cozidas em água ou vapor, congeladas, mesmo adicionadas de açúcar ou de outros edulcorantes, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.8624, 0.9987, 1.112, 1.18]
  },
  {
    ncm: ['811'],
    description: 'Frutas, não cozidas ou cozidas em água ou vapor, congeladas, mesmo adicionadas de açúcar ou de outros edulcorantes, em embalagens de conteúdo superior a 1 kg',
    mva: [0.8624, 0.9987, 1.112, 1.18]
  },
  {
    ncm: ['2001'],
    description: 'Produtos hortícolas, frutas e outras partes comestíveis de plantas, preparados ou conservados em vinagre ou em ácido acético, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.8856, 1.024, 1.139, 1.208]
  },
  {
    ncm: ['2001'],
    description: 'Produtos hortícolas, frutas e outras partes comestíveis de plantas, preparados ou conservados em vinagre ou em ácido acético, em embalagens de conteúdo superior a 1 kg',
    mva: [0.8856, 1.024, 1.139, 1.208]
  },
  {
    ncm: ['2004'],
    description: 'Outros produtos hortícolas preparados ou conservados, exceto em vinagre ou em ácido acético, congelados, com exceção dos produtos da posição 20.06, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4961, 0.6056, 0.6968, 0.7515]
  },
  {
    ncm: ['2004'],
    description: 'Outros produtos hortícolas preparados ou conservados, exceto em vinagre ou em ácido acético, congelados, com exceção dos produtos da posição 20.06, em embalagens de conteúdo superior a 1 kg',
    mva: [0.4961, 0.6056, 0.6968, 0.7515]
  },
  {
    ncm: ['2005'],
    description: 'Outros produtos hortícolas preparados ou conservados, exceto em vinagre ou em ácido acético, não congelados, com exceção dos produtos da posição 20.06, excluídos batata, inhame e mandioca fritos, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.6655, 0.7874, 0.8889, 0.9499]
  },
  {
    ncm: ['2005'],
    description: 'Outros produtos hortícolas preparados ou conservados, exceto em vinagre ou em ácido acético, não congelados, com exceção dos produtos da posição 20.06, excluídos batata, inhame e mandioca fritos, em embalagens de conteúdo superior a 1 kg',
    mva: [0.6655, 0.7874, 0.8889, 0.9499]
  },
  {
    ncm: ['2006.00.00'],
    description: 'Produtos hortícolas, frutas, cascas de frutas e outras partes de plantas, conservados com açúcar (passados por calda, glaceados ou cristalizados), em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.7934, 0.9246, 1.034, 1.1]
  },
  {
    ncm: ['2006.00.00'],
    description: 'Produtos hortícolas, frutas, cascas de frutas e outras partes de plantas, conservados com açúcar (passados por calda, glaceados ou cristalizados), em embalagens de conteúdo superior a 1 kg',
    mva: [0.7934, 0.9246, 1.034, 1.1]
  },
  {
    ncm: ['2007'],
    description: 'Doces, geléias, marmelades, purês e pastas de frutas, obtidos por cozimento, com ou sem adição de açúcar ou de outros edulcorantes, em embalagens de conteúdo inferior ou igual a 1 kg, exceto as embalagens individuais de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.6665, 0.7884, 0.8901, 0.951]
  },
  {
    ncm: ['2007'],
    description: 'Doces, geléias, marmelades, purês e pastas de frutas, obtidos por cozimento, com ou sem adição de açúcar ou de outros edulcorantes, em embalagens de conteúdo superiora 1 kg',
    mva: [0.6665, 0.7884, 0.8901, 0.951]
  },
  {
    ncm: ['2008'],
    description: 'Frutas e outras partes comestíveis de plantas, preparadas ou conservadas de outro modo, com ou sem adição de açúcar ou de outros edulcorantes ou de álcool, não especificadas nem compreendidas em outras posições, excluídos os amendoins e castanhas tipo aperitivo, da posição 2008.1, em embalagens de conteúdo inferior ou igual a 1 kg',
    legal: 'Prot. ICMS 188/09',
    mva: [0.5388, 0.6514, 0.7452, 0.8015]
  },
  {
    ncm: ['2008'],
    description: 'Frutas e outras partes comestíveis de plantas, preparadas ou conservadas de outro modo, com ou sem adição de açúcar ou de outros edulcorantes ou de álcool, não especificadas nem compreendidas em outras posições, excluídos os amendoins e castanhas tipo aperitivo, da posição 2008.1, em embalagens superior a 1 kg',
    mva: [0.5388, 0.6514, 0.7452, 0.8015]
  },
  {
    ncm: ['902'],
    description: 'Chá, mesmo aromatizado',
    legal: 'Prot. ICMS 188/09',
    mva: [0.7511, 0.8792, 0.986, 1.05]
  },
  {
    ncm: ['0903.00'],
    description: 'Mate',
    legal: 'Prot. ICMS 188/09',
    mva: [0.6095, 0.7273, 0.8254, 0.8843]
  },
  {
    ncm: ['1701.1'],
    description: 'Açúcar refinado, em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Açúcar refinado, em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Açúcar refinado, em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Açúcar refinado adicionado de aromatizante ou de corante em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Açúcar refinado adicionado de aromatizante ou de corante em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Açúcar refinado adicionado de aromatizante ou de corante em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Açúcar cristal, em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Açúcar cristal, em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Açúcar cristal adicionado de aromatizante ou de corante, em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Açúcar cristal adicionado de aromatizante ou de corante, em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91'],
    description: 'Açúcar cristal adicionado de aromatizante ou de corante, em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Outros tipos de açúcar, em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Outros tipos de açúcar, em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.1'],
    description: 'Outros tipos de açúcar, em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Outros tipos de açúcar adicionado de aromatizante ou de corante, em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Outros tipos de açúcar adicionado de aromatizante ou de corante, em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1701.91.00'],
    description: 'Outros tipos de açúcar adicionado de aromatizante ou de corante, em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1702'],
    description: 'Outros açúcares em embalagens de conteúdo inferior ou igual a 2 kg, exceto as embalagens contendo envelopes individualizados (sachês) de conteúdo inferior ou igual a 10 g',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1702'],
    description: 'Outros açúcares, em embalagens de conteúdo superior a 2 kg e inferior ou igual a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['1702'],
    description: 'Outros açúcares, em embalagens de conteúdo superior a 5 kg',
    mva: [0.1896, 0.2766, 0.3492, 0.3927]
  },
  {
    ncm: ['2008.19.00'],
    description: 'Milho para pipoca (micro',
    legal: 'Prot. ICMS 188/09',
    mva: [0.4135, 0.5169, 0.6031, 0.6548]
  },
  {
    ncm: ['2101.1'],
    description: 'Extratos, essências e concentrados de café e preparações à base destes extratos, essências ou concentrados ou à base de café, em embalagens de conteúdo inferior ou igual a 500 g, exceto os classificados no CEST 17.107.01 e 17.109.00 (Convênio ICMS 27/17)',
    legal: 'Prot. ICMS 188/09 Prot. ICMS 14/16',
    mva: [0.4342, 0.5391, 0.6266, 0.6791]
  },
  {
    ncm: ['2101.1'],
    description: 'Extratos, essências e concentrados de café e preparações à base destes extratos, essências ou concentrados ou à base de café, em cápsulas (Convênio ICMS 27/17)',
    mva: [0.4342, 0.5391, 0.6266, 0.6791]
  },
  {
    ncm: ['2101.20'],
    description: 'Extratos, essências e concentrados de chá ou de mate, essências ou concentrados ou à base de chá ou de mate, em embalagens de conteúdo inferior ou igual a 500g, exceto as bebidas prontas à base de mate ou chá e os itens classificados no CEST 17.108.01 (Convênio ICMS 27/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017 Redação Anterior',
    legal: 'Prot. ICMS 188/09 Prot. ICMS 14/16',
    mva: [0.4926, 0.6018, 0.6928, 0.7474]
  },
  {
    ncm: ['2101.20'],
    description: 'Extratos, essências e concentrados de chá ou de mate e preparações à base destes extratos, essências ou concentrados ou à base de chá ou de mate, em cápsulas (Convênio ICMS 22/17) Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017',
    mva: [0.4926, 0.6018, 0.6928, 0.7474]
  },
  {
    ncm: ['1901.90.90'],
    description: 'Preparações em pó para cappuccino e similares, em embalagens de conteúdo inferior ou igual a 500 g',
    legal: 'Prot. ICMS 188/09',
    mva: [0.559, 0.6731, 0.7681, 0.8252]
  },
  {
    ncm: ['2202.10.00'],
    description: 'Refrescos e outras bebidas prontas para beber à base de chá e mate',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['2202.10.00'],
    description: 'Refrescos e outras bebidas não alcoólicas, exceto os refrigerantes e as demais bebidas nos CEST 03.007.00 e 17.110.00',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['2101.20'],
    description: 'Bebidas prontas à base de mate ou chá (Convênio ICMS 25/17). Alterado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017Redação Anterior',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['2202.99.00'],
    description: 'Bebidas prontas a base de café (Convênio ICMS 25/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017 Redação Anterior',
    mva: [0.45, 0.5561, 0.6445, 0.6976]
  },
  {
    ncm: ['2202.99.00'],
    description: 'Bebidas alimentares prontas à base de soja, leite ou cacau, inclusive os produtos denominados bebidas lácteas (Convênio ICMS 25/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.07.2017 Redação Anterior',
    mva: [0.3, 0.3951, 0.4744, 0.5219]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo especial,em embalagem inferior ou igual a 1Kg (Convênio ICMS 22/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017 Redação Anterior',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo especial,em embalagem inferior ou igual a 1Kg (Convênio ICMS 22/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017 Redação Anterior',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo especial, em embalagem igual a5 kg Acrescentado pelo Decreto n° 50.786/2016 (DOE de 31.10.2016), efeitos a partir de 01.11.2016',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo especial, em embalagem superior a 5 kg e inferior ou igual a 25 kg Acrescentado pelo Decreto n° 50.786/2016 (DOE de 31.10.2016), efeitos a partir de 01.11.2016',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo especial, em embalagem superior a 25 kg e inferior ou igual a 50 kg Acrescentado pelo Decreto n° 50.786/2016 (DOE de 31.10.2016), efeitos a partir de 01.11.2016',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo comum, em embalagem igual a5 kg Acrescentado pelo Decreto n° 50.786/2016 (DOE de 31.10.2016), efeitos a partir de 01.11.2016',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo comum, em embalagem superior a 5 kg e inferior ou igual a 25 kg Acrescentado pelo Decreto n° 50.786/2016 (DOE de 31.10.2016), efeitos a partir de 01.11.2016',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo comum, em embalagem superior a 25 kg e inferior ou igual a 50 kg Acrescentado pelo Decreto n° 50.786/2016 (DOE de 31.10.2016), efeitos a partir de 01.11.2016',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica especial, em embalagem superior a 5Kg e inferior e igual a 10Kg (Convênio ICMS 22/17). Alterado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017 Redação Anterior',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica com fermento, em embalagem superior a 5Kg e inferior e igual a 10Kg (Convênio ICMS 22/17). Alterado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017Redação Anterior',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo especial, em embalagem superior a 50Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo comum, em embalagem inferior ou igual a 1Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo comum, em embalagem superior a 1 Kg e inferior a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo comum, em embalagem superior a 50Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica especial, em embalagem inferior ou igual a 1Kg (Convênio ICMS 22/17). Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica especial, em embalagem superior a 1Kg e inferior a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica especial, em embalagem igual a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica especial, em embalagem superior a 10Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica com fermento, em embalagem inferior ou igual a 1Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica com fermento, em embalagem superior a 1Kg e inferior a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica com fermento, em embalagem igual a 5Kg (Convênio ICMS 22/17). Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Farinha de trigo doméstica com fermento, em embalagem superior a 10Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Outras farinhas de trigo, em embalagem inferior ou igual a 1Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Outras farinhas de trigo, em embalagem superior a 1aKg e inferior a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Outras farinhas de trigo, em embalagem igual a 5Kg (Convênio ICMS 22/17). Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Outras farinhas de trigo, em embalagem superior a 5Kg e inferior ou igual a 25Kg (Convênio ICMS 22/17). Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Outras farinhas de trigo, em embalagem superior a 25Kg e inferior ou igual a 50Kg (Convênio ICMS 22/17).Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1101.00.10'],
    description: 'Outras farinhas de trigo, em embalagem superior a 50Kg (Convênio ICMS 22/17. Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para bolos, em embalagem inferior a 5Kg (Convênio ICMS 22/17). Alterado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017Redação Anterior',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para bolos, em embalagem igual a 5Kg (Convênio ICMS 22/17). Alterado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017Redação Anterior',
    mva: [0.5, 0.6098, 0.7012, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para bolos, em embalagem superior a 5Kg e inferior ou igual a 25Kg (Convênio ICMS 22/17). Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para bolos, em embalagem superior a 25Kg e inferior ou igual a 50Kg (Convênio ICMS 22/17). Acrescentado peloDecreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para bolos, em embalagem superior a 50Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para pães com menos de 80% de farinha de trigo na sua composição final, em embalagem inferior a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['1901.20.00'],
    description: 'Misturas e preparações para pães com menos de 80% de farinha de trigo na sua composição final, em embalagem igual a 5Kg (Convênio ICMS 22/17). Acrescentado pelo Decreto n° 54.463/2017 (DOE de 21.07.2017), efeitos a partir de 01.06.2017',
    mva: [0.5, 0.6098, 0.7092, 0.7561]
  },
  {
    ncm: ['4016.99.90'],
    description: 'Ferramentas de borracha vulcanizada não endurecida',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['4417.00.10'],
    description: 'Ferramentas, armações e cabos de ferramentas, de madeira',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['6804'],
    description: 'Mós e artefatos semelhantes, sem armação, para moer, desfibrar, triturar, amolar, polir, retificar ou cortar, pedras para amolar ou para polir, manualmente, e suas partes, de pedras naturais, de abrasivos naturais ou artificiais aglomerados ou de cerâmica, mesmo com partes de outras matérias',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8201'],
    description: 'Pás, alviões, picaretas, enxadas, sachos, forcados e forquilhas, ancinhos e raspadeiras, machados, podões e ferramentas semelhantes com gume, tesouras de podar de todos os tipos, foices e foicinhas, facas para feno ou para palha, tesouras para sebes, cunhas e outras ferramentas manuais para agricultura, horticultura ou silvicultura',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8202.20.00'],
    description: 'Folhas de serras de fita',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8202.91.00'],
    description: 'Lâminas de serras máquinas',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8202'],
    description: 'Serras manuais e outras folhas de serras (incluídas as fresas-serras e as folhas não dentadas para serrar), exceto as classificadas nos CEST 08.005.00 e 08.006.00',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8203'],
    description: 'Limas, grosas, alicates (mesmo cortantes), tenazes, pinças, cisalhas para metais, corta-tubos, corta-pinos, saca-bocados e ferramentas semelhantes, manuais, exceto as pinças para sobrancelhas classificadas na posição 8203.20.90',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8204'],
    description: 'Chaves de porcas, manuais (incluídas as chaves dinamométricas), chaves de caixa intercambiáveis, mesmo com cabos',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8205'],
    description: 'Ferramentas manuais (incluídos os diamantes de vidraceiro) não especificadas nem compreendidas em outras posições, lamparinas ou lâmpadas de soldar (maçaricos) e semelhantes, tornos de apertar, sargentos e semelhantes, exceto os acessórios ou partes de máquinas-ferramentas, bigornas, forjas-portáteis, mós com armação, manuais ou de pedal',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8206.00.00'],
    description: 'Ferramentas de pelo menos duas das posições 8202 a 8205, acondicionadas em sortidos para venda a retalho',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8207.40'],
    description: 'Ferramentas de roscar interior ou exteriormente, de mandrilar ou de brochar, e de fresar',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8207'],
    description: 'Outras ferramentas intercambiáveis para ferramentas manuais, mesmo mecânicas, ou para máquinas- ferramentas (por exemplo, de embutir, estampar, puncionar, furar, tornear, aparafusar), incluídas as fieiras de estiragem ou de extrusão, para metais, e as ferramentas de perfuração ou de sondagem, exceto forma ou gabarito de produtos em epoxy e as classificadas no CEST 08.012.00 (Convênio ICMS 132/2016) Alterado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017 Redação Anterior',
    legal: 'Prot. ICMS 193/2009',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8208'],
    description: 'Facas e lâminas cortantes, para máquinas ou para aparelhos mecânicos',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8209.00.11'],
    description: 'Plaquetas ou pastilhas intercambiáveis',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8209.00'],
    description: 'Outras plaquetas, varetas, pontas e objetos semelhantes para ferramentas, não montados, de ceramais (cermets), exceto as classificadas no CEST 08.015.00',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8211'],
    description: 'Facas de lâmina cortante ou serrilhada, incluídas as podadeiras de lâmina móvel, e suas lâmicas, exceto as de uso doméstico',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8213'],
    description: 'Tesouras e suas lâminas',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8467'],
    description: 'Ferramentas pneumáticas, hidráulicas ou com motor (elétrico ou não elétrico) incorporado, de uso manual, exceto o descrito no CEST 08.019.01 (Convênio ICMS 132/2016) Alterado pelo Decreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017 Redação Anterior',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['8467.81.00'],
    description: 'Moto-serras portáteis de corrente, com motor incorporado, não elétrico, de uso agrícola (Convênio ICMS 132/2016) Acrescentado peloDecreto n° 53.011/2017 (DOE de 18.04.2017), efeitos a partir de 18.04.2017',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['9015'],
    description: 'Instrumentos e aparelhos de geodésia, topografia, agrimensura, nivelamento, fotogrametria, hidrografia, oceanografia, hidrologia, meteorologia ou de geofísica, exceto bussolas, telêmetros',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['9017.20.00'],
    description: 'Instrumentos de desenho, de traçado ou de cálculo, metros, micrômetros, paquímetros, calibres e semelhantes, partes e acessórios',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['9025.11.90'],
    description: 'Termômetros, suas partes e acessórios',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['9025.19'],
    description: 'Pirômetros, suas partes e acessórios',
    legal: 'Prot. ICMS 193/09',
    mva: [0.35, 0.4488, 0.5311, 0.5805]
  },
  {
    ncm: ['3815.12.10'],
    description: 'Catalisadores em colmeia cerâmica ou metálica para conversão catalítica de gases de escape de veículos e outros catalisadores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['3917'],
    description: 'Tubos e seus acessórios (por exemplo, juntas, cotovelos, flanges, uniões), de plásticos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['3918.10.00'],
    description: 'Protetores de caçamba',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['3923.30.00'],
    description: 'Reservatórios de óleo',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['3926.30.00'],
    description: 'Frisos, decalques, molduras e acabamentos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4010.3'],
    description: 'Correias de transmissão de borracha vulcanizada, de matérias têxteis, mesmo impregnadas, revestidas ou recobertas, de plástico, ou estratificadas com plástico ou reforçadas com metal ou com outras matérias',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4016.93.00'],
    description: 'Juntas, gaxetas e outros elementos com função semelhante de vedação',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4016.10.10'],
    description: 'Partes de veículos automóveis, tratores e máquinas autopropulsadas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4016.99.90'],
    description: 'Tapetes, revestimentos, mesmo confeccionados, batentes, buchas e coxins',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['5903.90.00'],
    description: 'Tecidos impregnados, revestidos, recobertos ou estratificados, com plástico',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['5909.00.00'],
    description: 'Mangueiras e tubos semelhantes, de matérias têxteis, mesmo com reforço ou acessórios de outras matérias',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['6306.1'],
    description: 'Encerados e toldos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['6506.10.00'],
    description: 'Capacetes e artefatos de uso semelhante, de proteção, para uso em motocicletas, incluídos ciclomotores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['6813'],
    description: 'Guarnições de fricção (por exemplo, placas, rolos, tiras, segmentos, discos, anéis, pastilhas), não montadas, para freios, embreagens ou qualquer outro mecanismo de fricção, à base de amianto, de outras substâncias minerais ou de celulose, mesmo combinadas com têxteis ou outras matérias',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7007.11.00'],
    description: 'Vidros de dimensões e formatos que permitam aplicação automotiva',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7009.10.00'],
    description: 'Espelhos retrovisores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7014.00.00'],
    description: 'Lentes de faróis, lanternas e outros utensílios',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7311.00.00'],
    description: 'Cilindro de aço para GNV (gás natural veicular)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7311.00.00'],
    description: 'Recipientes para gases comprimidos ou liquefeitos, de ferro fundido, ferro ou aço, exceto o descrito no item 18',
    legal: 'Protocolo ICMS 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7320'],
    description: 'Molas e folhas de molas, de ferro ou aço',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7325'],
    description: 'Obras moldadas, de ferro fundido, ferro ou aço, exceto 7325.91.00',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7806.00'],
    description: 'Peso de chumbo para balanceamento de roda',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8007.00.90'],
    description: 'Peso para balanceamento de roda e outros utensílios de estanho',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8301.20'],
    description: 'Fechaduras e partes de fechaduras',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8301.70'],
    description: 'Chaves apresentadas isoladamente',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8302.10.00'],
    description: 'Dobradiças, guarnições, ferragens e artigos semelhantes de metais comuns',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8310.00'],
    description: 'Triângulo de segurança',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8407.3'],
    description: 'Motores de pistão alternativo dos tipos utilizados para propulsão de veículos do Capítulo 87',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8408.20'],
    description: 'Motores dos tipos utilizados para propulsão de veículos automotores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['84.09.9'],
    description: 'Partes reconhecíveis como exclusiva ou principalmente destinadas aos motores das posições 8407 ou 8408.',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8412.2'],
    description: 'Motores hidráulicos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8413.30'],
    description: 'Bombas para combustíveis, lubrificantes ou líquidos de arrefecimento, próprias para motores de ignição por centelha ou por compressão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8414.10.00'],
    description: 'Bombas de vácuo',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8414.80.1'],
    description: 'Compressores e turbocompressores de ar',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8413.91.90'],
    description: 'Partes das bombas, compressores e turbocompressores dos CEST 01.032.00, 01.033.00 e 01.034.00',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8415.20'],
    description: 'Máquinas e aparelhos de ar condicionado',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8421.23.00'],
    description: 'Aparelhos para filtrar óleos minerais nos motores de ignição por centelha ou por compressão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8421.29.90'],
    description: 'Filtros a vácuo',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8421.9'],
    description: 'Partes dos aparelhos para filtrar ou depurar líquidos ou gases',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8424.10.00'],
    description: 'Extintores, mesmo carregados',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8421.31.00'],
    description: 'Filtros de entrada de ar para motores de ignição por centelha ou por compressão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8421.39.20'],
    description: 'Depuradores por conversão catalítica de gases de escape',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8425.42.00'],
    description: 'Macacos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8431.10.10'],
    description: 'Partes para macacos do CEST 01.043.00',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8431.49.2'],
    description: 'Partes reconhecíveis como exclusiva ou principalmente destinadas às máquinas agrícolas ou rodoviárias',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8433.90.90'],
    description: 'Partes reconhecíveis como exclusiva ou principalmente destinadas às máquinas agrícolas ou rodoviárias',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8481.10.00'],
    description: 'Válvulas redutoras de pressão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8481.2'],
    description: 'Válvulas para transmissão óleo- hidráulicas ou pneumáticas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8481.80.92'],
    description: 'Válvulas solenóides',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8482'],
    description: 'Rolamentos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8483'],
    description: 'Árvores de transmissão (incluídas as árvores de “cames” e virabrequins) e manivelas, mancais e “bronzes”, engrenagens e rodas de fricção, eixos de esferas ou de roletes, redutores, multiplicadores, caixas de transmissão e variadores de velocidade, incluídos os conversores de torque, volantes e polias, incluídas as polias para cadernais, embreagens e dispositivos de acoplamento, incluídas as juntas de articulação',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8484'],
    description: 'Juntas metaloplásticas, jogos ou sortidos de juntas de composições diferentes, apresentados em bolsas, envelopes ou embalagens semelhantes, juntas de vedação mecânicas (selos mecânicos)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8505.20'],
    description: 'Acoplamentos, embreagens, variadores de velocidade e freios, eletromagnéticos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8507.10.00'],
    description: 'Acumuladores elétricos de chumbo, do tipo utilizado para o arranque dos motores de pistão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8511'],
    description: 'Aparelhos e dispositivos elétricos de ignição ou de arranque para motores de ignição por centelha ou por compressão (por exemplo, magnetos, dínamos-magnetos, bobinas de ignição, velas de ignição ou de aquecimento, motores de arranque), geradores (dínamos e alternadores, por exemplo) e conjuntores-disjuntores utilizados com estes motores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8512.20'],
    description: 'Aparelhos elétricos de iluminação ou de sinalização (exceto os da posição 8539), limpadores de pára-brisas, degeladores e desembaçadores (desembaciadores) elétricos e suas partes',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8517.12.13'],
    description: 'Telefones móveis do tipo dos utilizados em veículos automóveis',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8518'],
    description: 'Alto-falantes, amplificadores elétricos de audiofrequência e partes',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8518.50.00'],
    description: 'Aparelhos elétricos de amplificação de som para veículos automotores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8519.81'],
    description: 'Aparelhos de reprodução de som',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8525.50.1'],
    description: 'Aparelhos transmissores (emissores) de radiotelefonia ou radiotelegrafia (rádio receptor/transmissor)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8527.21.00'],
    description: 'Aparelhos receptores de radiodifusão que só funcionem com fonte externa de energia combinados com um aparelho de gravação ou de reprodução de som, do tipo utilizado em veículos automóveis',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8527.29.00'],
    description: 'Outros aparelhos receptores de radiodifusão que funcionem com fonte externa de energia, do tipo utilizado em veículos automóveis',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8521.90.90'],
    description: 'Outros aparelhos videofônicos de gravação ou de reprodução, mesmo incorporando um receptor de sinais videofônicos, dos tipos utilizados exclusivamente em veículos automotores',
    legal: 'Protocolo ICMS  97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8529.10.90'],
    description: 'Antenas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8534.00'],
    description: 'Circuitos impressos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8535.30'],
    description: 'Interruptores e seccionadores e comutadores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8536.10.00'],
    description: 'Fusíveis e corta-circuitos de fusíveis',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8536.20.00'],
    description: 'Disjuntores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8536.4'],
    description: 'Relés',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8538'],
    description: 'Partes reconhecíveis como exclusivas ou principalmente destinados aos aparelhos dos CEST 01.065.00, 01.066.00, 01.067.00 e 01.068.00',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8539.10'],
    description: 'Faróis e projetores, em unidades seladas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8539.2'],
    description: 'Lâmpadas e tubos de incandescência, exceto de raios ultravioleta ou infravermelhos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8544.20.00'],
    description: 'Cabos coaxiais e outros condutores elétricos coaxiais',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8544.30.00'],
    description: 'Jogos de fios para velas de ignição e outros jogos de fios',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8707'],
    description: 'Carroçarias para os veículos automóveis das posições 8701 a 8705, incluídas as cabinas.',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8708'],
    description: 'Partes e acessórios dos veículos automóveis das posições 8701 a 8705.',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8714.1'],
    description: 'Parte e acessórios de motocicletas (incluídos os ciclomotores)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8716.90.90'],
    description: 'Engates para reboques e semi-reboques',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9026.10'],
    description: 'Medidores de nível, Medidores de vazão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9026.20'],
    description: 'Aparelhos para medida ou controle da pressão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9029'],
    description: 'Contadores, indicadores de velocidade e tacômetros, suas partes e acessórios',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9030.33.21'],
    description: 'Amperímetros',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9031.80.40'],
    description: 'Aparelhos digitais, de uso em veículos automóveis, para medida e indicação de múltiplas grandezas tais como: velocidade média, consumos instantâneo e médio e autonomia (computador de bordo)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9032.89.2'],
    description: 'Controladores eletrônicos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9104.00.00'],
    description: 'Relógios para painéis de instrumentos e relógios semelhantes',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9401.20.00'],
    description: 'Assentos e partes de assentos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9613.80.00'],
    description: 'Acendedores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4009'],
    description: 'Tubos de borracha vulcanizada não endurecida, mesmo providos de seus acessórios',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4504.90.00'],
    description: 'Juntas de vedação de cortiça natural e de amianto',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4823.40.00'],
    description: 'Papel-diagrama para tacógrafo, em disco',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['3919.10.00'],
    description: 'Fitas, tiras, adesivos, auto-colantes, de plástico,  refletores, mesmo em rolos, placas metálicas com película de plástico refletora, próprias para colocação em carrocerias, pára-choques de veículos de carga, motocicletas, ciclomotores, capacetes, bonés de agentes de trânsito e de condutores de veículos, atuando como dispositivos refletivos de segurança rodoviários',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8412.31.10'],
    description: 'Cilindros pneumáticos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8413.19.00'],
    description: 'Bomba elétrica de lavador de para-brisa',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8413.60.19'],
    description: 'Bomba de assistência de direção hidráulica',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8414.59.10'],
    description: 'Motoventiladores',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8421.39.90'],
    description: 'Filtros de pólen do ar-condicionado',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8501.10.19'],
    description: '“Máquina” de vidro elétrico de porta',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8501.31.10'],
    description: 'Motor de limpador de para-brisa',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8504.50.00'],
    description: 'Bobinas de reatância e de auto-indução',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8507.20'],
    description: 'Baterias de chumbo e de níquel-cádmio',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8512.30.00'],
    description: 'Aparelhos de sinalização acústica (buzina)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9032.89.8'],
    description: 'Instrumentos para regulação de grandezas não elétricas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9027.10.00'],
    description: 'Analisadores de gases ou de fumaça (sonda lambda)',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['4008.11.00'],
    description: 'Perfilados de borracha vulcanizada não endurecida',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['5601.22.19'],
    description: 'Artefatos de pasta de fibra de uso automotivo',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['5703.20.00'],
    description: 'Tapetes/carpetes - náilon',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['5703.30.00'],
    description: 'Tapetes materiais têxteis sintéticas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['5911.90.00'],
    description: 'Forração interior capacete',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['6903.90.99'],
    description: 'Outros para-brisas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7007.29.00'],
    description: 'Moldura com espelho',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7314.50.00'],
    description: 'Corrente de transmissão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7315.11.00'],
    description: 'Corrente transmissão',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7315.12.10'],
    description: 'Outras correntes de transmissão',
    legal: 'Protocolo ICMS 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8418.99.00'],
    description: 'Condensador tubular metálico',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8419.50'],
    description: 'Trocadores de calor',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8424.90.90'],
    description: 'Partes de aparelhos mecânicos de pulverizar ou dispersar',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8425.49.10'],
    description: 'Macacos manuais para veículos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8431.41.00'],
    description: 'Caçambas, pás, ganchos e tenazes para máquinas rodoviárias',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8501.61.00'],
    description: 'Geradores de corrente alternada potência não superior a 75 kva',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8531.10.90'],
    description: 'Aparelhos elétricos para alarme de uso automotivo',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9014.10.00'],
    description: 'Bússolas',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9025.19.90'],
    description: 'Indicadores de temperatura',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9025.90.10'],
    description: 'Partes de indicadores de temperatura',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9026.90'],
    description: 'Partes de aparelhos de medida ou controle',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9032.10.10'],
    description: 'Termostatos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9032.10.90'],
    description: 'Instrumentos e aparelhos para regulação',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['9032.20.00'],
    description: 'Pressostatos',
    legal: 'Protocolos ICMS 41/08 e 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['8716.90'],
    description: 'Peças para reboques e semi-reboques, exceto os itens classificados no CEST 01.077.00',
    legal: 'Protocolo ICMS 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
  {
    ncm: ['7322.90.10'],
    description: 'Geradores de ar quente a combustível líquido, com capacidade superior ou igual a 1.500 kcal/h, mas inferior ou igual a 10.400 kcal/h, do tipo dos utilizados em veículos automóveis',
    legal: 'Protocolo ICMS 97/10',
    mva: [0.7178, 1.011, 0.9482, 0.8435]
  },
];

export default NcmMap;