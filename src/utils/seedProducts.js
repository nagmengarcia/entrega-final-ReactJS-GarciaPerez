import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
  {
    id: "aJzkL24477",
    name: "Guantes Venum Elite Boxing",
    description:
      "Los Guantes Venum Elite Boxing están diseñados para ofrecer la máxima protección y rendimiento en el boxeo. Fabricados a mano en Tailandia con cuero Skintex de alta calidad, cuentan con un acolchado de triple densidad para una mejor absorción de impactos. Su diseño ergonómico asegura un ajuste cómodo y seguro, mientras que las perforaciones en la palma mejoran la ventilación. Ideales tanto para entrenamientos como para competiciones, los guantes Venum Elite combinan durabilidad, comodidad y estilo.",
    price: 132000,
    category: "guantes",
    image: "/productos/guantes/guantes-venum-elite-boxing.png",
    stock: 7,
  },
  {
    id: "aZskD02847",
    name: "Guantes Venum Skull Boxing",
    description:
      "Los Guantes Venum Skull Boxing destacan por su diseño audaz y su funcionalidad superior. Hechos a mano en Tailandia con cuero Skintex de primera calidad, estos guantes ofrecen una protección óptima gracias a su acolchado de triple densidad. Su forma anatómica proporciona un ajuste perfecto y seguro, mientras que las perforaciones en la palma aseguran una excelente ventilación. Perfectos para entrenamientos intensivos y combates, los guantes Venum Skull combinan resistencia, confort y un diseño llamativo.",
    price: 110000,
    category: "guantes",
    image: "/productos/guantes/guantes-venum-skull-boxing.png",
    stock: 11,
  },
  {
    id: "bKzdL90841",
    name: "Guantes Venum Giant",
    description:
      "Los Guantes Venum Giant están diseñados para los boxeadores más exigentes, ofreciendo una combinación excepcional de durabilidad y protección. Fabricados a mano en Tailandia con cuero Nappa de alta calidad, estos guantes cuentan con un acolchado de triple densidad para una excelente absorción de impactos. Su diseño ergonómico garantiza un ajuste cómodo y seguro, mientras que las perforaciones en la palma mejoran la ventilación. Ideales para entrenamientos intensos y competiciones, los guantes Venum Giant son sinónimo de calidad y rendimiento superior.",
    price: 142599,
    category: "guantes",
    image: "/productos/guantes/guantes-venum-giant-3.png",
    stock: 20,
  },
  {
    id: "sVcCf012852",
    name: "Guantes Venum Power 2.0",
    description:
      "Los Guantes Venum Power 2.0 están diseñados para ofrecer un rendimiento y una protección excepcionales en el boxeo. Confeccionados con cuero sintético de alta calidad, estos guantes presentan un acolchado de triple densidad para una óptima absorción de impactos. Su diseño anatómico proporciona un ajuste cómodo y seguro, mientras que las perforaciones en la palma aseguran una buena ventilación. Ideales tanto para entrenamientos como para combates, los guantes Venum Power 2.0 combinan durabilidad, comodidad y un estilo moderno.",
    price: 258160,
    category: "guantes",
    image: "/productos/guantes/guantes-venum-power-2.0.png",
    stock: 4,
  },
  {
    id: "bVfGl87640",
    name: "Guantes Venum Sport 05",
    description:
      "Los Guantes Venum Sport 05 están diseñados para proporcionar un rendimiento confiable y una excelente protección durante tus entrenamientos de boxeo. Fabricados con cuero sintético de alta calidad, estos guantes ofrecen un acolchado de triple densidad para una óptima absorción de impactos. Su diseño ergonómico asegura un ajuste cómodo y seguro, mientras que las perforaciones en la palma mejoran la ventilación. Con un estilo deportivo y moderno, los guantes Venum Sport 05 son perfectos para boxeadores de todos los niveles.",
    price: 129469,
    category: "guantes",
    image: "/productos/guantes/guantes-venum-sport-05.png",
    stock: 2,
  },
  {
    id: "fgGHj74699",
    name: "Guantes Dragons Gold",
    description:
      "Los Guantes Dragons Gold están diseñados para destacar tanto en estilo como en rendimiento. Confeccionados con cuero sintético de alta calidad, ofrecen una durabilidad excepcional y una protección superior gracias a su acolchado de triple densidad. Su diseño ergonómico garantiza un ajuste cómodo y seguro, mientras que las perforaciones en la palma aseguran una ventilación óptima. Ideales para entrenamientos y competiciones, los guantes Dragons Gold combinan elegancia, resistencia y comodidad, convirtiéndolos en una elección premium para cualquier boxeador.",
    price: 58980,
    category: "guantes",
    image: "/productos/guantes/guantes-dragons-dorados.png",
    stock: 19,
  },
  {
    id: "hHjKm09461",
    name: "Guantes Everlast Pro Style Importados Negro",
    description:
      "Los Guantes Everlast Pro Style Importados en negro están diseñados para ofrecer una combinación perfecta de confort y protección en el boxeo. Fabricados con materiales de alta calidad, cuentan con un acolchado de doble capa de espuma que proporciona una excelente absorción de impactos. Su diseño anatómico y su sistema de cierre con velcro aseguran un ajuste seguro y cómodo. Las perforaciones en la palma mejoran la ventilación, manteniendo las manos frescas y secas durante el entrenamiento. Ideales para boxeadores de todos los niveles, estos guantes combinan durabilidad y estilo clásico.",
    price: 67935,
    category: "guantes",
    image: "/productos/guantes/guantes-everlast-pro-style-importados-negro.png",
    stock: 12,
  },
  {
    id: "mJKdf23816",
    name: "Guantes Everlast Pro Style Nacionales Celeste",
    description:
      "Los Guantes Everlast Pro Style Nacionales en celeste están diseñados para ofrecer una excelente combinación de confort y protección en cada entrenamiento. Confeccionados con materiales duraderos de alta calidad, cuentan con un acolchado de espuma de doble capa para una óptima absorción de impactos. Su diseño anatómico y el cierre de velcro proporcionan un ajuste seguro y cómodo. Las perforaciones en la palma mejoran la ventilación, manteniendo las manos frescas y secas. Ideales para boxeadores de todos los niveles, estos guantes destacan por su durabilidad y atractivo diseño en color celeste.",
    price: 56640,
    category: "guantes",
    image:
      "/productos/guantes/guantes-everlast-pro-style-nacionales-celeste.png",
    stock: 18,
  },
  {
    id: "vBtyJ09461",
    name: "Guantes Dragons Linea Classics",
    description:
      "Los Guantes Dragons Línea Classics están diseñados para ofrecer un rendimiento confiable y un estilo atemporal en el boxeo. Fabricados con cuero sintético de alta calidad, estos guantes proporcionan durabilidad y una excelente protección gracias a su acolchado de triple densidad. Su diseño ergonómico garantiza un ajuste cómodo y seguro, mientras que las perforaciones en la palma mejoran la ventilación. Ideales tanto para entrenamientos como para competiciones, los guantes Dragons Línea Classics combinan resistencia, confort y un diseño clásico.",
    price: 44830,
    category: "guantes",
    image: "/productos/guantes/guantes-dragons-linea-classics.png",
    stock: 24,
  },
  {
    id: "xEfRq87392",
    name: "Guantes Piuke",
    description:
      "Los Guantes Piuke están diseñados para proporcionar una combinación óptima de comodidad, protección y durabilidad. Fabricados con cuero sintético de alta calidad, estos guantes cuentan con un acolchado de triple densidad que garantiza una excelente absorción de impactos. Su diseño ergonómico asegura un ajuste cómodo y seguro, mientras que las perforaciones en la palma mejoran la ventilación, manteniendo las manos frescas y secas. Ideales para boxeadores de todos los niveles, los guantes Piuke ofrecen un rendimiento confiable y un estilo moderno.",
    price: 18000,
    category: "guantes",
    image: "/productos/guantes/guante-piuke.png",
    stock: 9,
  },
  {
    id: "qWtbM00893",
    name: "Shorts Rihen Argentina",
    description:
      "Los Shorts Rihen Argentina son el complemento perfecto para tu entrenamiento o competición en el ring. Confeccionados con materiales de alta calidad, ofrecen durabilidad y comodidad para enfrentar tus desafíos con confianza. Su diseño ergonómico proporciona un ajuste cómodo y seguro, permitiéndote moverte con libertad durante tus movimientos en el boxeo. Con el orgullo de llevar la bandera argentina, estos shorts representan el espíritu y la pasión del boxeo en cada combate.",
    price: 50000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-argentina.png",
    stock: 12,
  },
  {
    id: "cBMky49670",
    name: "Shorts Rihen Fighter Azul y Blanco",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-fighter-azul-blanco.png",
    stock: 18,
  },
  {
    id: "eXFLz88123",
    name: "Shorts Rihen Nak Azul, Naranja y Blanco",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-nak-azul-naranja.png",
    stock: 15,
  },
  {
    id: "vBqqR98456",
    name: "Shorts Rihen Skull Naranja, Blanco y Negro",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-skull-naranja-blanco.png",
    stock: 12,
  },
  {
    id: "fReDi00721",
    name: "Shorts Rihen Fighter Negro, Celeste y Blanco",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-fighter-negro-celeste.png",
    stock: 20,
  },
  {
    id: "iDeAa89666",
    name: "Shorts Rihen LT2 Negro, Amarillo y Blanco",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-lt2-negro-amarillo.png",
    stock: 7,
  },
  {
    id: "dENis34887",
    name: "Shorts Rihen Nak Negro y Dorado",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-nak-negro-dorado.png",
    stock: 9,
  },
  {
    id: "tURco65487",
    name: "Shorts Rihen Kick Rojo, Negro y Blanco",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-kick-rojo-negro.png",
    stock: 13,
  },
  {
    id: "pAblO90821",
    name: "Shorts Rihen Nak Azul, Rojo y Blanco",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 45000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-nak-azul-rojo.png",
    stock: 10,
  },
  {
    id: "aGusT12667",
    name: "Shorts Rihen LT2 Violeta, Negro y Dorado",
    description:
      "Los shorts de Muay Thai Rihen son prendas diseñadas específicamente para los practicantes de Muay Thai que buscan comodidad, estilo y rendimiento óptimo durante sus entrenamientos y combates. Fabricados con materiales de alta calidad y con un ajuste ergonómico, los shorts Rihen ofrecen libertad de movimiento y transpirabilidad, lo que permite una mejor ejecución de técnicas y una sensación de ligereza en el ring.",
    price: 48000,
    category: "shorts",
    image: "/productos/shorts/shorts-rihen-lt2-violeta-negro-dorado.png",
    stock: 11,
  },
  {
    id: "bENja19932",
    name: "Vendas Everlast Spark Printed Zebra",
    description:
      "Las vendas Everlast Spark son el accesorio perfecto para añadir estilo y protección a tu entrenamiento de boxeo. Fabricadas con materiales de alta calidad, ofrecen un ajuste cómodo y seguro para tus manos y muñecas. Su diseño estampado de cebra añade un toque de moda a tu equipo de entrenamiento. Estas vendas proporcionan un soporte adicional durante tus sesiones de golpeo, ayudando a prevenir lesiones y mejorar tu rendimiento en el ring.",
    price: 20199,
    category: "vendas",
    image: "/productos/vendas/venda-everlast-spark-printed-zebra.png",
    stock: 4,
  },
  {
    id: "TaTti19963",
    name: "Vendas Everlast Spark Printed Fight",
    description:
      "Las vendas Everlast Spark son el accesorio perfecto para añadir estilo y protección a tu entrenamiento de boxeo. Fabricadas con materiales de alta calidad, ofrecen un ajuste cómodo y seguro para tus manos y muñecas. Su diseño estampado de cebra añade un toque de moda a tu equipo de entrenamiento. Estas vendas proporcionan un soporte adicional durante tus sesiones de golpeo, ayudando a prevenir lesiones y mejorar tu rendimiento en el ring.",
    price: 20199,
    category: "vendas",
    image: "/productos/vendas/venda-everlast-spark-printed-fight.png",
    stock: 16,
  },
  {
    id: "aILin11990",
    name: "Vendas Everlast Spark Printed Scribble",
    description:
      "Las vendas Everlast Spark son el accesorio perfecto para añadir estilo y protección a tu entrenamiento de boxeo. Fabricadas con materiales de alta calidad, ofrecen un ajuste cómodo y seguro para tus manos y muñecas. Su diseño estampado de cebra añade un toque de moda a tu equipo de entrenamiento. Estas vendas proporcionan un soporte adicional durante tus sesiones de golpeo, ayudando a prevenir lesiones y mejorar tu rendimiento en el ring.",
    price: 20199,
    category: "vendas",
    image: "/productos/vendas/venda-everlast-spark-printed-scribble.png",
    stock: 7,
  },
  {
    id: "siLvI48871",
    name: "Vendas Everlast Spark Printed Cammo",
    description:
      "Las vendas Everlast Spark son el accesorio perfecto para añadir estilo y protección a tu entrenamiento de boxeo. Fabricadas con materiales de alta calidad, ofrecen un ajuste cómodo y seguro para tus manos y muñecas. Su diseño estampado de cebra añade un toque de moda a tu equipo de entrenamiento. Estas vendas proporcionan un soporte adicional durante tus sesiones de golpeo, ayudando a prevenir lesiones y mejorar tu rendimiento en el ring.",
    price: 20199,
    category: "vendas",
    image: "/productos/vendas/venda-everlast-spark-printed-cammo.png",
    stock: 15,
  },
  {
    id: "arGnA07485",
    name: "Vendas Lotto Classics Team 5cm",
    description:
      "Las vendas Lotto Classics son una opción confiable y accesible para proteger tus manos durante tus sesiones de entrenamiento en boxeo. Fabricadas con materiales duraderos, proporcionan un soporte básico para tus muñecas y manos. Su diseño sencillo y clásico garantiza un ajuste cómodo y seguro mientras te ejercitas. Aunque son simples en su diseño, estas vendas cumplen su función fundamental de brindar protección y estabilidad a un precio asequible, ideal para principiantes y aquellos que buscan una opción económica.",
    price: 4499,
    category: "vendas",
    image: "/productos/vendas/venda-lotto-clasica-team-5cm.png",
    stock: 22,
  },
  {
    id: "kGoOn99761",
    name: "Vendas Lotto Classics Team 7cm",
    description:
      "Las vendas Lotto Classics son una opción confiable y accesible para proteger tus manos durante tus sesiones de entrenamiento en boxeo. Fabricadas con materiales duraderos, proporcionan un soporte básico para tus muñecas y manos. Su diseño sencillo y clásico garantiza un ajuste cómodo y seguro mientras te ejercitas. Aunque son simples en su diseño, estas vendas cumplen su función fundamental de brindar protección y estabilidad a un precio asequible, ideal para principiantes y aquellos que buscan una opción económica.",
    price: 4949,
    category: "vendas",
    image: "/productos/vendas/venda-lotto-clasica-team-7cm.png",
    stock: 23,
  },
  {
    id: "xIkqU87610",
    name: "Vendas Lotto Classics Team 10cm",
    description:
      "Las vendas Lotto Classics son una opción confiable y accesible para proteger tus manos durante tus sesiones de entrenamiento en boxeo. Fabricadas con materiales duraderos, proporcionan un soporte básico para tus muñecas y manos. Su diseño sencillo y clásico garantiza un ajuste cómodo y seguro mientras te ejercitas. Aunque son simples en su diseño, estas vendas cumplen su función fundamental de brindar protección y estabilidad a un precio asequible, ideal para principiantes y aquellos que buscan una opción económica.",
    price: 5399,
    category: "vendas",
    image: "/productos/vendas/venda-lotto-clasica-team-10cm.png",
    stock: 16,
  },
  {
    id: "uRzTe98123",
    name: "Vendas Dragons Pro 4.5mts",
    description:
      "Las vendas Dragons Pro de 4.5 metros son el complemento perfecto para tu equipo de boxeo. Fabricadas con materiales de alta calidad, estas vendas ofrecen una protección superior para tus manos y muñecas durante tus entrenamientos y combates. Con una longitud ideal de 4.5 metros, proporcionan un amplio soporte y cobertura. Su durabilidad y resistencia aseguran un uso prolongado, mientras que su diseño ergonómico garantiza un ajuste cómodo y seguro. Ya sea que estés golpeando bolsas pesadas o entrenando en el ring, las vendas Dragons Pro son una elección confiable para cualquier boxeador que busca calidad y rendimiento.",
    price: 15420,
    category: "vendas",
    image: "/productos/vendas/vendas-dragon-pro-4,5mts.png",
    stock: 6,
  },
  {
    id: "nICol45064",
    name: "Vendas Proyec 4mts",
    description:
      "Las vendas Proyec de 4 metros son una excelente opción para proteger tus manos y muñecas durante tus sesiones de entrenamiento de boxeo. Fabricadas con materiales de calidad, estas vendas proporcionan un soporte óptimo y una protección confiable para evitar lesiones durante tus golpes. Con una longitud adecuada de 4 metros, ofrecen suficiente cobertura para envolver tus manos de manera segura y cómoda. Su diseño resistente y duradero garantiza una larga vida útil, mientras que su ajuste ergonómico te brinda comodidad durante todo tu entrenamiento. Las vendas Proyec de 4 metros son una elección ideal para cualquier boxeador que busque calidad y rendimiento en su equipo de protección.",
    price: 17575,
    category: "vendas",
    image: "/productos/vendas/vendas-proyec-4mts.png",
    stock: 14,
  },
  {
    id: "cHiNa02341",
    name: "Tibiales Hayabysa T3 Striking",
    description:
      "Los tibiales Hayabusa T3 Striking son la elección definitiva para los practicantes de artes marciales que buscan una protección excepcional y un rendimiento superior. Fabricados con materiales de primera calidad, estos protectores proporcionan una defensa robusta para tus espinillas y empeines durante tus sesiones de entrenamiento de golpes y patadas. Su diseño ergonómico y ajuste anatómico garantizan una comodidad óptima y un ajuste seguro, mientras que su construcción duradera asegura una protección confiable contra impactos. Con los tibiales Hayabusa T3 Striking, puedes concentrarte en perfeccionar tus habilidades sin preocuparte por lesiones, ofreciendo una combinación perfecta de protección y rendimiento.",
    price: 240420,
    category: "tibiales",
    image: "/productos/tibiales/tibiales--hayabysa-t3-striking.png",
    stock: 3,
  },
  {
    id: "wAgpA89677",
    name: "Tibiales Combat Sports Lavable",
    description:
      "Los tibiales Combat Sports Lavable son una excelente opción para aquellos que buscan comodidad y practicidad en su equipo de protección. Estos protectores están diseñados para ofrecer una protección confiable para tus espinillas y empeines durante tus entrenamientos de artes marciales, al tiempo que son fácilmente lavables para mantener la higiene y frescura después de cada uso. Con un ajuste cómodo y seguro, los tibiales Combat Sports Lavable te permiten concentrarte en tu entrenamiento sin preocupaciones por lesiones. Su construcción durable y capacidad de lavado los convierten en una elección conveniente y confiable para cualquier artista marcial.",
    price: 29340,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-combat-sports-lavables.png",
    stock: 15,
  },
  {
    id: "pARdo91242",
    name: "Tibiales Fairtex SP6 Muay Thai",
    description:
      "Los tibiales Fairtex SP6 Muay Thai son la opción preferida de los practicantes de Muay Thai que buscan una protección excepcional y un rendimiento superior. Fabricados con materiales de alta calidad, estos protectores ofrecen una defensa robusta para tus espinillas y empeines durante tus sesiones de entrenamiento y combate. Su diseño anatómico y ajuste ergonómico garantizan una comodidad óptima y un ajuste seguro, permitiéndote realizar movimientos explosivos con confianza. Con los tibiales Fairtex SP6 Muay Thai, puedes enfrentarte a tus oponentes con total seguridad, sabiendo que estás protegido por la calidad y la fiabilidad de la marca Fairtex.",
    price: 103260,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-fairtex-sp6-muay-thai.png",
    stock: 8,
  },
  {
    id: "dDrAL22341",
    name: "Tibiales ProForce S/Empeine",
    description:
      "Los tibiales ProForce sin empeine ofrecen una protección efectiva para tus espinillas durante tus entrenamientos de artes marciales. Están diseñados con materiales duraderos que absorben impactos y proporcionan una defensa confiable contra golpes y patadas. Aunque carecen de protección para el empeine, ofrecen una cobertura sólida para tus espinillas, permitiéndote practicar tus técnicas de manera segura. Con un ajuste cómodo y seguro, los tibiales ProForce sin empeine te brindan la confianza necesaria para enfrentar tus desafíos de entrenamiento con determinación y seguridad.",
    price: 27120,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-proforce-sin-empeine.png",
    stock: 12,
  },
  {
    id: "zXBmc89134",
    name: "Tibiales Right Punch",
    description:
      "Los tibiales Right Punch son la elección definitiva para los apasionados de las artes marciales que buscan la máxima protección y comodidad en el ring. Confeccionados con materiales de primera calidad y diseñados para resistir los golpes más duros, estos tibiales ofrecen una defensa inquebrantable para tus espinillas y empeines. Su diseño anatómico y ajuste ergonómico garantizan una comodidad excepcional y un ajuste seguro, permitiéndote moverte con agilidad y confianza durante tus entrenamientos y combates. Además, su construcción de alta gama asegura una durabilidad excepcional, resistiendo el desgaste incluso en las condiciones más exigentes. Los tibiales Right Punch son la opción ideal para aquellos que buscan calidad y rendimiento en cada golpe.",
    price: 68400,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-right-punch.png",
    stock: 9,
  },
  {
    id: "lCvAx44571",
    name: "Tibiales Tiger Muay Thai",
    description:
      "Los tibiales Tiger Muay Thai son la herramienta esencial para cualquier guerrero del ring que busca dominar las artes marciales tailandesas. Confeccionados con la resistencia y la agilidad en mente, estos protectores de espinilla ofrecen una combinación perfecta de protección y movilidad. Fabricados con materiales de alta calidad y un diseño ergonómico, los tibiales Tiger Muay Thai garantizan una defensa sólida contra los golpes más duros sin comprometer la comodidad ni la flexibilidad. Ya sea que estés entrenando en el gimnasio o compitiendo en el cuadrilátero, estos tibiales te permitirán desatar tu verdadero potencial en cada sesión de Muay Thai. Con los tibiales Tiger Muay Thai, tu habilidad y tu determinación serán imparables.",
    price: 58090,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-tiger-muay-thai.png",
    stock: 23,
  },
  {
    id: "cCvMn85631",
    name: "Tibiales Venum Elite Evo",
    description:
      "Los tibiales Venum Elite Evo son la última innovación en protección para los practicantes de artes marciales que buscan calidad y rendimiento superiores. Diseñados con la combinación perfecta de tecnología y comodidad, estos protectores de espinillas ofrecen una protección excepcional sin comprometer la movilidad. Fabricados con materiales de alta calidad y un diseño aerodinámico, los tibiales Venum Elite Evo ofrecen una defensa robusta contra los golpes más intensos, mientras que su ajuste anatómico asegura una comodidad óptima durante tus sesiones de entrenamiento o combate. Con los tibiales Venum Elite Evo, puedes enfrentarte a tus oponentes con total confianza, sabiendo que estás protegido por la excelencia de Venum en artes marciales.",
    price: 170240,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-venum-elite-evo.png",
    stock: 22,
  },
  {
    id: "aCmEe89890",
    name: "Tibiales Venum Elite Standup",
    description:
      "Los tibiales Venum Elite Standup son la opción definitiva para aquellos que buscan la combinación perfecta de protección y rendimiento en el arte del combate. Diseñados con la calidad y la innovación que caracterizan a la marca Venum, estos tibiales ofrecen una protección superior para tus espinillas y empeines durante tus entrenamientos y combates. Fabricados con materiales de alta calidad y un diseño ergonómico, los tibiales Venum Elite Standup proporcionan una defensa sólida contra los golpes más duros, al tiempo que garantizan una movilidad óptima y un ajuste cómodo. Con su estilo distintivo y su durabilidad excepcional, los tibiales Venum Elite Standup son la elección perfecta para cualquier guerrero del ring que busca dominar su arte con confianza y estilo.",
    price: 151670,
    category: "tibiales",
    image: "/productos/tibiales/tibiales-venum-elite-standup.png",
    stock: 18,
  },
  {
    id: "cTuiD86731",
    name: "Protector Bucal Gilbert Academy Clear",
    description:
      "El protector bucal Gilbert Academy Clear es la elección ideal para los deportistas que buscan una protección confiable y una comodidad óptima durante sus actividades deportivas. Fabricado con materiales de alta calidad, este protector bucal transparente ofrece una protección superior para los dientes y las encías, absorbiendo los impactos y reduciendo el riesgo de lesiones en la boca y la mandíbula. Su diseño ergonómico y su ajuste personalizable aseguran un ajuste cómodo y seguro, lo que permite al usuario concentrarse en su rendimiento sin distracciones. Con el protector bucal Gilbert Academy Clear, puedes practicar tu deporte favorito con total confianza y tranquilidad.",
    price: 13799,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-academy-clear.png",
    stock: 12,
  },
  {
    id: "dFgDh84712",
    name: "Protector Bucal Gilbert Irlanda",
    description:
      "El protector bucal Gilbert Irlanda es la elección ideal para los deportistas que desean una combinación de protección confiable y estilo distintivo. Fabricado con materiales de alta calidad, este protector bucal ofrece una protección superior para los dientes y las encías durante la práctica deportiva. Con el diseño icónico de la bandera de Irlanda, muestra tu orgullo por tu país mientras te proteges en el campo de juego. Su ajuste personalizable garantiza comodidad y seguridad, permitiéndote concentrarte en tu rendimiento. Con el protector bucal Gilbert Irlanda, puedes enfrentar cualquier desafío deportivo con confianza y estilo.",
    price: 15799,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-bandera-irlanda.png",
    stock: 33,
  },
  {
    id: "gHzIk91237",
    name: "Protector Bucal Gilbert Gel Plus",
    description:
      "El protector bucal Gilbert Gel Plus es la opción perfecta para los deportistas que buscan una protección excepcional y un ajuste cómodo. Fabricado con gel de alta calidad, este protector bucal ofrece una amortiguación superior para los dientes y las encías, absorbiendo los impactos y reduciendo el riesgo de lesiones durante la práctica deportiva. Su diseño moldeable se adapta perfectamente a la forma de tus dientes, proporcionando un ajuste personalizado y seguro. Con el protector bucal Gilbert Gel Plus, puedes disfrutar de la máxima protección y comodidad en el campo de juego, permitiéndote rendir al máximo sin preocupaciones.",
    price: 19799,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-gel-plus.png",
    stock: 12,
  },
  {
    id: "kJjLm12387",
    name: "Protector Bucal Gilbert Anatomic Rosa",
    description:
      "El protector bucal Gilbert Anatomic Rosa combina estilo y protección para ofrecerte una experiencia deportiva óptima. Diseñado con un contorno anatómico para un ajuste perfecto, este protector bucal proporciona una protección superior para tus dientes y encías durante la actividad deportiva. Su color rosa vibrante añade un toque de moda a tu equipo deportivo, mientras que su diseño ergonómico garantiza comodidad y seguridad. Con el protector bucal Gilbert Anatomic Rosa, puedes destacar en el campo de juego con estilo y confianza, sabiendo que estás protegido de manera efectiva.",
    price: 3599,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-anatomic-rosa.png",
    stock: 8,
  },
  {
    id: "aSZko12483",
    name: "Protector Bucal Gilbert Anatomic Blanco",
    description:
      "El protector bucal Gilbert Anatomic Blanco es la combinación perfecta de estilo y protección para tus actividades deportivas. Con su diseño anatómico, este protector bucal proporciona un ajuste personalizado y cómodo, adaptándose a la forma única de tus dientes y encías. Su color blanco clásico complementa cualquier uniforme deportivo y te permite destacar en el campo o en el ring con elegancia. Además de su aspecto estilizado, este protector bucal ofrece una protección superior contra impactos, ayudando a prevenir lesiones en tus dientes y encías durante la práctica deportiva. Con el protector bucal Gilbert Anatomic Blanco, puedes enfrentar cada juego o combate con confianza y estilo.",
    price: 3599,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-anatomic-blanco.png",
    stock: 12,
  },
  {
    id: "mMkAj12376",
    name: "Protector Bucal Gilbert Anatomic Verde",
    description:
      "El protector bucal Gilbert Anatomic Verde es la opción perfecta para los deportistas que buscan estilo y protección. Con su diseño anatómico, este protector bucal ofrece un ajuste personalizado y cómodo, adaptándose a la forma única de tus dientes y encías. Su color verde vibrante añade un toque de frescura y vitalidad a tu equipo deportivo, permitiéndote destacar en el campo o en el ring con confianza. Además de su aspecto llamativo, este protector bucal proporciona una protección superior contra impactos, ayudando a prevenir lesiones en tus dientes y encías durante la práctica deportiva. Con el protector bucal Gilbert Anatomic Verde, puedes expresar tu estilo y proteger tu sonrisa mientras disfrutas de tu deporte favorito.",
    price: 3599,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-anatomic-verde.png",
    stock: 20,
  },
  {
    id: "aMmaA12376",
    name: "Protector Bucal Gilbert Viper",
    description:
      "El protector bucal Gilbert Viper es la elección definitiva para aquellos que buscan una combinación de estilo y protección en el campo deportivo. Diseñado con una forma aerodinámica y contorneada, este protector bucal se adapta cómodamente a la forma de tus dientes y encías, proporcionando una protección óptima contra impactos y lesiones durante la práctica deportiva. Con su aspecto elegante y moderno, el Gilbert Viper agrega un toque de sofisticación a tu equipo deportivo, permitiéndote destacar en el campo o en el ring con confianza. Además de su estilo distintivo, este protector bucal está fabricado con materiales de alta calidad para garantizar durabilidad y comodidad a largo plazo. Con el protector bucal Gilbert Viper, puedes enfrentar cada desafío deportivo con estilo y seguridad.",
    price: 19599,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-viper.png",
    stock: 6,
  },
  {
    id: "dROga81237",
    name: "Protector Bucal Gilbert Viper Pro 3",
    description:
      "El protector bucal Gilbert Viper Pro 3 es la última innovación en protección deportiva. Con su diseño avanzado y tecnología de vanguardia, este protector bucal ofrece una protección superior y un ajuste incomparable. Fabricado con materiales de alta calidad y diseñado con precisión anatómica, el Gilbert Viper Pro 3 se adapta perfectamente a la forma de tus dientes y encías, brindando una protección óptima contra impactos y lesiones durante la práctica deportiva. Su diseño aerodinámico y perfil delgado garantizan una comodidad excepcional y una respiración fácil, permitiéndote mantener tu rendimiento al máximo nivel en todo momento. Además, el Gilbert Viper Pro 3 está disponible en una variedad de colores y estilos para adaptarse a tus preferencias personales y complementar tu equipo deportivo. Con el protector bucal Gilbert Viper Pro 3, puedes enfrentar cualquier desafío deportivo con confianza y seguridad.",
    price: 27799,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-viper-pro-3.png",
    stock: 17,
  },

  {
    id: "Pulpz81239",
    name: "Protector Bucal Gilbert Virtuo Dual",
    description:
      "El protector bucal Gilbert Virtuo Dual redefine la protección y el rendimiento en el campo deportivo. Con su diseño innovador de doble capa, este protector bucal ofrece una protección excepcional contra impactos y lesiones durante la práctica deportiva. La capa exterior resistente absorbe los golpes y distribuye la fuerza del impacto, mientras que la capa interior suave se adapta cómodamente a la forma de tus dientes y encías para un ajuste personalizado y seguro. Fabricado con materiales de alta calidad y tecnología avanzada, el Gilbert Virtuo Dual garantiza durabilidad y comodidad a largo plazo. Además, su diseño aerodinámico y perfil delgado permiten una respiración fácil y un habla clara durante el uso. Con el protector bucal Gilbert Virtuo Dual, puedes confiar en una protección superior y un rendimiento óptimo en cada juego o combate.",
    price: 18999,
    category: "bucales",
    image: "/productos/bucales/bucales-gilbert-virtuo-dual.png",
    stock: 19,
  },
  {
    id: "zXepP81239",
    name: "Protector Bucal TK Unisex",
    description:
      "El protector bucal TK Unisex es la elección perfecta para cualquier deportista que busque una protección confiable y cómoda durante sus actividades deportivas. Diseñado para adaptarse a cualquier forma de boca, este protector bucal ofrece un ajuste personalizado para hombres y mujeres por igual. Fabricado con materiales de alta calidad, proporciona una protección superior para los dientes y las encías, absorbiendo los impactos y reduciendo el riesgo de lesiones durante la práctica deportiva. Con su diseño unisex versátil, el protector bucal TK es ideal para una amplia variedad de deportes, desde el rugby hasta el hockey sobre hielo, brindando seguridad y confianza a cada atleta sin importar su género.",
    price: 4199,
    category: "bucales",
    image: "/productos/bucales/bucales-tk-unisex.png",
    stock: 21,
  },
  {
    id: "bBmeR12239",
    name: "Protector Bucal Malik Sr Rosa",
    description:
      "El protector bucal Malik Sr en rosa es la combinación perfecta de estilo y protección para cualquier deportista que busque destacar en el campo o en el ring. Fabricado con materiales de alta calidad, este protector bucal ofrece una protección superior para los dientes y las encías, absorbiendo los impactos y reduciendo el riesgo de lesiones durante la práctica deportiva. Su color rosa vibrante añade un toque de moda a tu equipo deportivo, permitiéndote expresar tu estilo mientras te mantienes seguro en el juego. Con un ajuste cómodo y seguro, el protector bucal Malik Sr en rosa te brinda la confianza necesaria para enfrentar cualquier desafío deportivo con determinación y estilo.",
    price: 4199,
    category: "bucales",
    image: "/productos/bucales/bucales-malik-sr-rosa.png",
    stock: 12,
  },
  {
    id: "bRm0R42279",
    name: "Protector Bucal Malik Sr Azul",
    description:
      "El protector bucal Malik Sr en azul es la opción ideal para los deportistas que buscan una combinación de estilo y protección en el campo de juego. Fabricado con materiales de alta calidad, este protector bucal ofrece una protección superior para los dientes y las encías, absorbiendo los impactos y reduciendo el riesgo de lesiones durante la práctica deportiva. Su color azul vibrante agrega un toque de frescura y vitalidad a tu equipo deportivo, permitiéndote destacar en el campo o en el ring con confianza. Con un diseño ergonómico y un ajuste personalizado, el protector bucal Malik Sr en azul brinda comodidad y seguridad durante todo el juego. Ya sea que estés compitiendo en el campo de hockey o en el cuadrilátero de boxeo, este protector bucal te ofrece la protección que necesitas para jugar con total confianza.",
    price: 4199,
    category: "bucales",
    image: "/productos/bucales/bucales-malik-sr-azul.png",
    stock: 14,
  },
];

const seedProducts = () => {
  products.map(({ id, ...rest }) => {
    addDoc(collection(db, "products"), rest);
  });
};
seedProducts();
