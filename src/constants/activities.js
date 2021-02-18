const activities = {
    1: {
        activities: [
            {
                id: 11,
                label: 'Trabajar en una ocupación',
                information: 'Son las actividades laborales en la producción de bienes y servicios, a cambio de '
                    + 'remuneración o beneficios. Incluye a asalariados en empresas y/o negocios, patrones o '
                    + 'empleadores, trabajadores independientes o cuentapropistas, trabajadores familiares '
                    + 'remunerados, pasantes y becarios. También incluye capacitaciones y cursos realizados '
                    + 'dentro del tiempo o espacio laboral.'
            },
            {
                id: 12,
                label: 'Realizar una pasantía no remunerada',
                information: 'Son las actividades no remuneradas para adquirir experiencia en el lugar de '
                    + 'trabajo, oficio o profesión. Refiere a pasantías no remuneradas, aprendizaje o '
                    + 'formación incluyendo programas de promoción del empleo.'
            },
            {
                id: 13,
                label: 'Buscar trabajo o iniciar un negocio',
                information: 'Consiste en la búsqueda laboral activa para encontrar un puesto de trabajo '
                    + 'asalariado, iniciar un negocio o actividad independiente o una explotación agrícola. '
                    + 'Incluye presentar o enviar CV, distribuir carteles o volantes, asistir a entrevistas, '
                    + 'organizar un negocio o emprendimiento -gestiones, permisos- etc. También incluye la '
                    + 'búsqueda de trabajos a tiempo parcial o temporales.'
            },
            {
                id: 14,
                label: 'Viajar para ir y volver del trabajo',
                information: 'Es el desplazamiento de ida o de vuelta hasta el trabajo o al lugar donde '
                    + 'se cumplen las tareas, la asistencia a reuniones o gestiones y los trámites laborales. '
                    + 'Incluye conducir un vehículo y el tiempo de espera del transporte. Cualquier traslado '
                    + 'con otro origen o destino distinto del trabajo no debe registrarse aquí.'
            },
            {
                id: 2,
                label: 'Trabajar para consumo propio del hogar',
                information: 'Son las tareas de los miembros del hogar para consumo o uso propio: '
                    + 'cultivo de vegetales y cría de animales, elaboración de conservas de alimentos y '
                    + 'bebidas, confección de ropa, calzado, muebles, objetos, etc., construcción de viviendas '
                    + 'y otros edificios para uso final propio del hogar. Incluye los traslados relacionados.'
            },
            {
                id: 999,
                label: 'Otras actividades sin clasificar',
                information: 'Cualquier otra actividad que no esté comprendida en las categorías anteriores.'
            }
        ]
    },
    2: {
        groups: [
            {
                id: 1,
                label: 'Cuidados personales y apoyo'
            },
            {
                id: 2,
                label: 'Cuidados temporales de salud'
            },
            {
                id: 3,
                label: 'Apoyo escolar'
            },
            {
                id: 4,
                label: 'Acompañamiento y traslados'
            },
            {
                id: 5,
                label: 'Otras actividades de cuidado'
            }
        ],
        activities: [
            {
                id: 411,
                label: 'Cuidados personales y apoyo a miembros del hogar de 0 a 14 años',
                information: 'Incluye dar de comer (amamantar, dar la mamadera o la comida), cargar, '
                    + 'acostar, bañar, peinar o vestir, prepararlos para ir a la escuela o a otro lugar, '
                    + 'jugar, conversar, leer, etc. Se incluye estar pendiente de niños y niñas, supervisarlos '
                    + 'estando cerca y disponible para atenderlos. Excluye los traslados y a las personas con '
                    + 'discapacidad o dependencia permanente, y el cuidado a distancia (hablar por teléfono, etc.)',
                group: 1
            },
            {
                id: 412,
                label: 'Cuidado temporal de salud a miembros del hogar de 0 a 14 años',
                information: 'Refiere a dar medicamentos, hacer curaciones, aplicar terapias, asearlos y bañarlos '
                    + 'con más frecuencia cuando están enfermos, etc. Excluye los traslados y a las personas con '
                    + 'discapacidad o dependencia permanente.',
                group: 2
            },
            {
                id: 413,
                label: 'Apoyo escolar a miembros del hogar de 0 a 14 años',
                information: 'Es el apoyo y la revisión de tareas escolares o de aprendizaje, asistencia a fiestas, '
                    + 'reuniones u otras actividades escolares, firmar calificaciones, etc. Excluye traslados y a las '
                    + 'personas con discapacidad o dependencia permanente.',
                group: 3
            },
            {
                id: 414,
                label: 'Acompañamiento y traslados de miembros del hogar de 0 a 14 años',
                information: 'Refiere a acompañamiento y traslados a guarderías o escuelas, centros de salud u otros '
                    + 'lugares (excursiones, museos, parques, actividades deportivas o artísticas). \n'
                    + 'Excluye a las personas con discapacidad o dependencia permanente.',
                group: 4
            },
            {
                id: 419,
                label: 'Otras actividades de cuidado y apoyo a miembros del hogar de 0 a 14 años',
                information: 'Cualquier otra actividad de apoyo y de cuidado para miembros de 0 a 14 años no '
                    + 'contenidas en los códigos especificados anteriormente. \n'
                    + 'Excluye traslados y a las personas con discapacidad o dependencia permanente.',
                group: 5
            },
            {
                id: 421,
                label: 'Cuidados personales y apoyo a miembros del hogar de 15 a 64 años',
                information: 'Son los cuidados personales como supervisar las tareas escolares o ayudarlos en '
                    + 'el uso de tecnología. Incluye estar pendiente y disponible para su atención. \n'
                    + 'Excluye los traslados y a las personas con discapacidad o dependencia permanente.',
                group: 1
            },
            {
                id: 422,
                label: 'Cuidado temporal de salud a miembros del hogar de 15 a 64 años',
                information: 'Se trata de los cuidados de atención a la salud, visitar al médico por '
                    + 'prevención, enfermedad o accidente, poner o quitar vendas, dar medicamentos, hacer '
                    + 'curaciones, aplicar terapias, asearlos y bañarlos por una condición temporal de salud, etc. '
                    + 'Excluye los traslados y a las personas con discapacidad o dependencia permanente.',
                group: 2
            },
            {
                id: 423,
                label: 'Acompañamiento y traslados a miembros del hogar de 15 a 64 años',
                information: 'Incluye llevarlos, acompañarlos y recogerlos al médico u hospital, a la escuela o '
                    + 'universidad, a actividades deportivas, sociales, culturales o de entretenimiento. \n'
                    + 'Excluye a las personas con discapacidad o dependencia permanente.',
                group: 4
            },
            {
                id: 429,
                label: 'Otras actividades de cuidado y apoyo a miembros del hogar de 15 a 64 años',
                information: 'Cualquier otra actividad de apoyo y de cuidado para miembros de 15 a 64 años no '
                    + 'contenidas en los códigos especificados anteriormente. Incluye apoyo escolar. \n'
                    + 'Excluye los traslados y a las personas con discapacidad o dependencia permanente.',
                group: 5
            },
            {
                id: 431,
                label: 'Cuidados personales y apoyo a miembros del hogar de 65 años y más',
                information: 'Incluye actividades de cuidado a personas de 65 años y más, como apoyo en el '
                    + 'aprendizaje, en la realización de gestiones o trámites o en el uso de la tecnología. '
                    + 'Incluye estar pendiente y disponible para su atención. \n'
                    + 'Excluye los traslados y a las personas con discapacidad o dependencia permanente.',
                group: 1
            },
            {
                id: 432,
                label: 'Cuidado temporal de salud a miembros del hogar de 65 años y más',
                information: 'Refiere a los cuidados de atención a la salud requeridos por los adultos mayores, '
                    + 'como poner o quitar vendas, dar medicamentos, hacer curaciones, aplicar terapias, asearlos '
                    + 'y bañarlos por una condición temporal de salud, etc. Comprende la asistencia por enfermedad '
                    + 'o accidente y las visitas al médico, con tiempos de espera. \n'
                    + 'Excluye los traslados y a las personas con discapacidad o dependencia permanente.',
                group: 2
            },
            {
                id: 433,
                label: 'Acompañamiento y traslados a miembros del hogar de 65 años y más',
                information: 'Refiere al acompañamiento y traslado para llevarlos y recogerlos al médico u hospital, '
                    + 'a recibir algún servicio o realizar  un trámite personal o legal; a actividades sociales, '
                    + 'culturales, deportivas o de entretenimiento o a cualquier otro lugar.\n'
                    + 'Excluye a las personas con discapacidad o dependencia permanente.',
                group: 4
            },
            {
                id: 439,
                label: 'Otras actividades de cuidado y apoyo a miembros del hogar de 65 años y más',
                information: 'Cualquier otra actividad de apoyo y de cuidado para miembros de 65 años y más no '
                    + 'contenidas en los códigos especificados anteriormente. \n'
                    + 'Excluye los traslados y a las personas con discapacidad o dependencia permanente.',
                group: 5
            },
            {
                id: 441,
                label: 'Cuidados personales y apoyo a miembros del hogar con discapacidad o dependencia permanente',
                information: 'Incluye dar de comer, cargar y acostar, bañar, asear o arreglar, peinar, vestir, '
                    + 'jugar, conversar, leer o estar pendiente de ellos, estando cerca y disponible para atenderlos.'
                    + ' Incluye apoyo escolar o de aprendizaje.',
                group: 1
            },
            {
                id: 442,
                label: 'Cuidado de salud a miembros del hogar con discapacidad',
                information: 'Son los cuidados de salud por enfermedad o discapacidad temporal o crónica, como '
                    + 'asistencia personal o visitas al médico, con tiempo de espera. Excluye los  traslados.',
                group: 2
            },
            {
                id: 443,
                label: 'Acompañamiento y traslado a algún lugar a miembros del hogar con discapacidad',
                information: 'Refiere al acompañamiento y traslado para llevarlos y recogerlos del médico, '
                    + 'hospital o lugar de rehabilitación o terapia, para recibir algún servicio o realizar un '
                    + 'trámite personal o legal; a actividades sociales, culturales, deportivas o de entretenimiento '
                    + 'o a cualquier otro lugar.',
                group: 4
            },
            {
                id: 449,
                label: 'Otras actividades de cuidado a miembros del hogar con discapacidad',
                information: 'Cualquier otra actividad de apoyo y de cuidado para personas con discapacidad no '
                    + 'contenidas en los códigos especificados anteriormente. \n'
                    + 'Excluye los traslados.',
                group: 5
            },
            {
                id: 999,
                label: 'Otras actividades sin clasificar',
                information: 'Cualquier otra actividad que no esté comprendida en las categorías anteriores.'
            }
        ]
    },
    3: {
        activities: [
            {
                id: 31,
                label: 'Preparar y servir la comida',
                information: 'Son actividades como cocinar, preparar y servir alimentos, limpiarlos, '
                    + 'cortarlos y guardarlos, para consumo dentro o fuera del hogar. Incluye ordenar el '
                    + 'comedor (colocar y sacar manteles, platos, cubiertos, etc.) y limpiar la cocina y '
                    + 'vajilla, y llevarle la comida a la escuela o trabajo a alguno de sus miembros.'
            },
            {
                id: 32,
                label: 'Limpiar la vivienda',
                information: 'Incluye el orden y la limpieza de la vivienda (baños, dormitorios, living, etc.) '
                    + 'donde habita; muebles, cortinas, pisos del exterior y del interior, hacer y cambiar las '
                    + 'camas, etc; seleccionar o tirar la basura. \n'
                    + 'Excluye la limpieza y orden de los utensilios para preparar y servir comida.'
            },
            {
                id: 33,
                label: 'Lavar, planchar o arreglar la ropa/calzado',
                information: 'Reúne las tareas de lavar, tender y/o secar, planchar, doblar y guardar la ropa, '
                    + 'a mano o a máquina;  hacer arreglos menores en ropa y textiles (cierres, parches, botones) '
                    + 'y limpiar y mantener el calzado. También incluye llevar y retirar ropa, textiles y calzado '
                    + 'a lavar, planchar o reparar, contando el tiempo de traslado.\n'
                    + 'No incluye el tiempo de funcionamiento del lavarropas.'
            },
            {
                id: 34,
                label: 'Reparar y mantener la vivienda o los bienes del hogar',
                information: 'Incluye mantenimiento, instalación y reparaciones menores en la vivienda, en '
                    + 'los bienes del hogar y personales: revoque, pintura, electricidad, carpintería, plomería, '
                    + 'mantenimiento y montaje de muebles, utensilios o elementos decorativos. Comprende los '
                    + 'trabajos en los vehículos de uso propio del hogar (reparación, lavado, etc.). '
                    + 'Si estos servicios se realizan fuera de la vivienda se debe incluir el tiempo de traslado. '
                    + 'No se incluyen actividades de construcción totales o parciales de muros, paredes, '
                    + 'pisos o techos.'
            },
            {
                id: 35,
                label: 'Hacer pagos y trámites del hogar',
                information: 'Refiere a hacer trámites y pagar servicios personales o del hogar, organizar documentos '
                    + 'y presupuestos y la venta y disposición de los bienes. Incluye los traslados y tiempos de '
                    + 'espera para la realización del trámite.'
            },
            {
                id: 36,
                label: 'Hacer compras para el hogar',
                information: 'Son las compras para elaborar comida o de comida preparada, de bienes para el hogar '
                    + '(muebles, electrodomésticos) y para sus miembros (ropa, calzado, útiles escolares), y la compra '
                    + 'de vehículos e inmuebles (terrenos, casas). Incluye traslados y tiempo de búsqueda para la '
                    + 'elección de los productos a comprar. Las compras pueden realizarse de manera directa, por '
                    + 'Internet o por teléfono.'
            },
            {
                id: 37,
                label: 'Cuidar mascotas y plantas',
                information: 'Incluye el aseo y alimentación de mascotas y la limpieza del lugar donde comen o '
                    + 'duermen, incluyendo las visitas al veterinario y el tiempo de traslado y espera, y el '
                    + 'mantenimiento de las plantas del exterior e interior, riego, abono, poda, corte de pasto, '
                    + 'juntado de hojas, etc.'
            },
            {
                id: 999,
                label: 'Otras actividades sin clasificar',
                information: 'Cualquier otra actividad que no esté comprendida en las categorías anteriores.'
            }
        ]
    },
    4: {
        activities: [
            {
                id: 911,
                label: 'Higienizarse o arreglarse',
                information: 'Son las actividades individuales relacionadas con los cuidados personales, '
                    + 'necesidades fisiológicas y de higiene, como bañarse, lavarse la cara, las manos y el '
                    + 'cabello, cambiarse de ropa, afeitarse o depilarse, maquillarse, hacer tratamientos de '
                    + 'belleza, etc.'
            },
            {
                id: 912,
                label: 'Cuidar su salud o hacer terapias y tratamientos',
                information: 'Incluye asistir a médicos o enfermeros de cualquier especialidad o recibirlos '
                    + 'a domicilio; tomar remedios, inyectarse o medirse la insulina o la presión, curarse una '
                    + 'herida o descansar debido a una lesión. También refiere a análisis clínicos o estudios '
                    + 'médicos, hacer terapias físicas o rehabilitación, quimioterapia o diálisis, terapia '
                    + 'psicológica, etc.'
            },
            {
                id: 914,
                label: 'Viajar para cuidar su salud',
                information: 'Es el desplazamiento hacia y desde el lugar de cuidado de la salud propia '
                    + '(hospital, consultorio, farmacia, kinesiólogo, etc.). Incluye conducir un vehículo y '
                    + 'el tiempo de espera del transporte.  Cualquier traslado con otro fin distinto del cuidado '
                    + 'de la salud propia no debe registrarse aquí.'
            },
            {
                id: 921,
                label: 'Comer y beber',
                information: 'Es el tiempo dedicado a realizar las comidas habituales '
                    + '(desayuno, almuerzo, merienda y cena) o colaciones, tomar mate/té/café/tereré, '
                    + 'picadas, aperitivos o beber alcohol.'
            },
            {
                id: 922,
                label: 'Dormir',
                information: 'Incluye dormir de noche, el insomnio (si está intentando dormir) en horario '
                    + 'habitual de descanso nocturno y dormitar o hacer la siesta.'
            },
            {
                id: 923,
                label: 'Descansar, rezar o meditar u otras actividades personales',
                information: 'Es el tiempo dedicado a actividades como descansar, reposar sin dormir, '
                    + 'sentarse en el jardín/balcón/patio; rezar o meditar; ir al baño; tener relaciones '
                    + 'sexuales, etc.'
            },
            {
                id: 61,
                label: 'Estudiar',
                information: 'Refiere a asistir a clases presenciales o a distancia, a cursos extracurriculares '
                    + '(idiomas u otra formación fuera de la escuela), leer libros o apuntes, hacer tareas o '
                    + 'investigar, asistir a museos como parte de un proyecto y preparar o comprar '
                    + 'materiales de estudio. '
                    + 'Se excluye el tiempo de traslado.'
            },
            {
                id: 62,
                label: 'Viajar para estudiar',
                information: 'Son los traslados hacia y desde el lugar de las actividades de aprendizaje, incluyendo '
                    + 'el tiempo de espera del transporte o conducir un vehículo. Excluye los traslados '
                    + 'no relacionados a esta actividad.'
            },
            {
                id: 999,
                label: 'Otras actividades sin clasificar',
                information: 'Cualquier otra actividad que no esté comprendida en las categorías anteriores.'
            }
        ]
    },
    5: {
        activities: [
            {
                id: 711,
                label: 'Reunirse con familiares o amigos',
                information: 'La finalidad de estas actividades es la socialización con familia, '
                    + 'amigos u otras personas dentro o fuera del hogar, incluyendo la asistencia a '
                    + 'eventos sociales (cumpleaños, casamientos, etc.). Incluye la interacción personal '
                    + 'y la comunicación telefónica, por Internet, etc.'
            },
            {
                id: 712,
                label: 'Participar de celebraciones comunitarias, políticas o religiosas',
                information: 'Refiere a asistir a celebraciones comunitarias, políticas o religiosas '
                    + '(fiestas locales, actos políticos, misas, procesiones, etc.). Comprende la '
                    + 'interacción personal y la comunicación telefónica, por Internet, etc.'
            },
            {
                id: 72,
                label: 'Asistir a eventos o espectáculos',
                information: 'Es la asistencia a eventos culturales como espectador (museos, cine, '
                    + 'teatro, música, etc.), deportivos (fútbol, automovilismo, etc.) y de entretenimiento. '
                    + 'Excluye si estas actividades son realizadas por motivos de trabajo o estudio.'
            },
            {
                id: 73,
                label: 'Realizar actividades artísticas, juegos o entretenimientos',
                information: 'Incluye practicar, como hobby, actividades artísticas (plásticas, musicales, '
                    + 'literarias o escénicas), juegos de mesa o azar individuales o grupales, juegos en red o '
                    + 'electrónicos, etc. Excluye si estas actividades son realizadas '
                    + 'por motivos de trabajo o estudio.'
            },
            {
                id: 74,
                label: 'Hacer deportes o ejercicio físico',
                information: 'Comprende la práctica de deportes en equipo  (fútbol, boxeo, etc.) y '
                    + 'hacer ejercicio físico de manera informal (gimnasio, caminar, correr, ciclismo, '
                    + 'aerobics, etc.). Se excluye si estas actividades son realizadas'
                    + ' por motivos de trabajo o estudio.'
            },
            {
                id: 81,
                label: 'Leer libros o revistas',
                information: 'Incluye actividades de lectura de medios: diarios, revistas, libros, '
                    + 'publicaciones o blogs, en papel o digital.'
            },
            {
                id: 82,
                label: 'Ver televisión, videos o transmisiones en vivo',
                information: 'Refiere a ver televisión, videos, películas o transmisiones en vivo de '
                    + 'manera exclusiva, por cualquier medio.'
            },
            {
                id: 83,
                label: 'Escuchar música o radio',
                information: 'Refiere a escuchar música, radio u otros medios de audio de manera exclusiva, '
                    + 'por cualquier medio.'
            },
            {
                id: 84,
                label: 'Usar computadora o tableta',
                information: 'Incluye usar computadora o tableta para un uso recreativo y no específico, '
                    + 'como navegar por Internet, usar redes sociales, descargar archivos, etc. Excluye hacer '
                    + 'pagos, compras, trámites, comunicaciones o actividades de trabajo o estudio.'
            },
            {
                id: 85,
                label: 'Usar el celular',
                information: 'Incluye usar el celular para un uso recreativo y no específico, como '
                    + 'navegar por Internet, usar redes sociales, descargar archivos, etc. '
                    + 'Excluye hacer pagos, compras, trámites, comunicaciones o actividades de trabajo o estudio.'
            },
            {
                id: 999,
                label: 'Otras actividades sin clasificar',
                information: 'Cualquier otra actividad que no esté comprendida en las categorías anteriores.'
            }
        ]
    },
    6: {
        groups: [
            {
                id: 1,
                label: 'Apoyo a otros hogares'
            },
            {
                id: 2,
                label: 'Trabajo voluntario'
            }
        ],
        activities: [
            {
                id: 54,
                label: 'Ayudar a otros hogares familiares sin pago',
                information: 'Son las tareas domésticas y de cuidado no remuneradas para miembros de otros hogares '
                    + 'FAMILIARES, como limpiar la vivienda, ropa o calzado; cocinar o hacer las '
                    + 'compras; cuidar mascotas, entre otras, sin importar el lugar donde se lleva '
                    + 'a cabo o el medio que se utiliza para hacerlo. '
                    + 'Se incluyen cuidados a niños y niñas, adultos mayores, personas enfermas o con discapacidad '
                    + 'miembros de otros hogares familiares (padres, abuelos, tíos, nietos), y los traslados derivados '
                    + 'de estas actividades.',
                group: 1
            },
            {
                id: 55,
                label: 'Ayudar a otros hogares no familiares sin pago',
                information: 'Son las tareas domésticas y de cuidado no remuneradas para miembros de otros hogares '
                    + 'NO FAMILIARES, como limpiar la vivienda, ropa o calzado; cocinar o hacer las compras; cuidar '
                    + 'mascotas, entre otras, sin importar el lugar donde se lleva a cabo o el '
                    + 'medio que se utiliza para hacerlo. '
                    + 'Se incluyen cuidados a niños y niñas, adultos mayores, personas enfermas o con '
                    + 'discapacidad miembros de otros hogares no familiares, y los traslados derivados de estas '
                    + 'actividades.',
                group: 1
            },
            {
                id: 52,
                label: 'Hacer trabajo voluntario para la comunidad',
                information: 'Abarca actividades de trabajo no remunerado para la mejora de la comunidad como '
                    + 'limpieza de espacios públicos, iluminación, vigilancia, entre otras. También se consideran '
                    + 'actividades para la vida social de la comunidad como la preparación de comidas y bebidas, '
                    + 'arreglos para celebraciones, cuidados de personas y realizar trámites y gestiones para mejorar '
                    + 'los servicios o el entorno.',
                group: 2
            },
            {
                id: 53,
                label: 'Hacer trabajo voluntario para instituciones sin fines de lucro',
                information: 'Es el trabajo voluntario no remunerado como prestar servicios profesionales, '
                    + 'reparaciones, recolección de fondos, enseñanza y cuidados de salud  a través de organizaciones'
                    + ' sociales, sindicales, políticas o religiosas, siempre y cuando sean instituciones sin fines de '
                    + 'lucro. Incluye el tiempo de traslado.',
                group: 2
            },
            {
                id: 999,
                label: 'Otras actividades sin clasificar',
                information: 'Cualquier otra actividad que no esté comprendida en las categorías anteriores.'
            }
        ]
    }
};

export default activities;
