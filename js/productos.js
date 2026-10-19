const productos = [

    {
        id: 1,

        nombre: "Remera Unisex",

        categoria: "Remeras",

        precio: 690,

        descripcion: "Remera 100% algodón, cómoda y versátil. Ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Beige",
                imagen: "img/remera-unisex-beige.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/remera-unisex-negra.png"
            }

        
        ],

        talles: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],

        tabla: ""
    },


    {
        id: 2,

        nombre: "Buzo con cierre",

        categoria: "Buzos",

        precio: 1390,

        descripcion: "Buzo de 60% algodón y 40% poliéster, con interior de felpa. Abrigado y cómodo, ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Blanco",
                imagen: "img/buzo-blanco-cierre.jpg"
            },

            {
                nombre: "Azul",
                imagen: "img/buzo-azul-cierre.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/buzo-negro-cierre.jpg"
            },

            {
                nombre: "Marrón",
                imagen: "img/buzo-marron-cierre.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL", "XXXL"],

        tabla: "img/guia-buzo.jpg"
    },


    {
        id: 3,

        nombre: "Buzo",

        categoria: "Buzos",

        precio: 1290,

        descripcion: "Buzo de 60% algodón y 40% poliéster, con interior de felpa. Un básico cómodo y abrigado, ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Blanco",
                imagen: "img/buzo-blanco.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/buzo-negro.jpg"
            },

            {
                nombre: "Beige",
                imagen: "img/buzo-beige.jpg"
            },

            {
                nombre: "Azul",
                imagen: "img/buzo-azul.jpg"
            },

            {
                nombre: "Verde",
                imagen: "img/buzo-verde.jpg"
            },

            {
                nombre: "Celeste",
                imagen: "img/buzo-celeste.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL", "XXXL"],

        tabla: "img/tabla-buzo.jpg"
    },

    {
        id: 4,

        nombre: "Buzo personalizado frente y espalda",

        categoria: "Buzos",

        precio: 1590,

        descripcion: "Buzo de 60% algodón y 40% poliéster, con interior de felpa. Cómodo y abrigado, ideal para personalizar en el frente y la espalda con DTF o vinilo.",

        colores: [
            {
                nombre: "Blanco",
                imagen: "img/buzo-blanco.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/buzo-negro.jpg"
            },

            {
                nombre: "Beige",
                imagen: "img/buzo-beige.jpg"
            },

            {
                nombre: "Azul",
                imagen: "img/buzo-azul.jpg"
            },

            {
                nombre: "Verde",
                imagen: "img/buzo-verde.jpg"
            },

            {
                nombre: "Celeste",
                imagen: "img/buzo-celeste.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL", "XXXL"],

        tabla: "img/tabla-buzo.jpg"
    },


    {
        id: 5,

        nombre: "Buzo con mangas",

        categoria: "Buzos",

        precio: 990,

        descripcion: "Buzo de 60% algodón y 40% poliéster, cómodo y versátil. Ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Azul",
                imagen: "img/buzo-manga-azul.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/buzo-manga-negra.jpg"
            },

            {
                nombre: "Rojo",
                imagen: "img/buzo-manga-rojo.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL", "XXXL"],

        tabla: "img/tabla-buzo.jpg"
    },


    {
        id: 6,

        nombre: "Canguro",

        categoria: "Buzos",

        precio: 1390,

        descripcion: "Canguro de 60% algodón y 40% poliéster, sin felpa interior. Liviano y cómodo, ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Blanco",
                imagen: "img/canguro-blanco.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/canguro-negro.jpg"
            },

            {
                nombre: "Beige",
                imagen: "img/canguro-niño-beige.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL", "XXXL"],

        tabla: "img/tabla-canguro-nino.jpg"
    },
        {
        id: 7,

        nombre: "Buzo Niño",

        categoria: "Buzos",

        precio: 990,

        descripcion: "Buzo infantil de 60% algodón y 40% poliéster. Cómodo y abrigado, ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Azul",
                imagen: "img/buzo-niño-azul.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/buzo-niño-negro.jpg"
            }
        ],

        talles: ["4", "6", "8", "10", "12", "14", "16"],

        tabla: "img/guia-buzo-niño.jpg"
    },


    {
        id: 8,

        nombre: "Canguro Niño",

        categoria: "Buzos",

        precio: 1090,

        descripcion: "Canguro infantil de 60% algodón y 40% poliéster. Cómodo y versátil, ideal para estampados en DTF o vinilo.",

        colores: [
            {
                nombre: "Rosa",
                imagen: "img/canguro-niño-rosa.jpg"
            },

            {
                nombre: "Azul",
                imagen: "img/canguro-niño-azul.jpg"
            },

            {
                nombre: "Beige",
                imagen: "img/canguro-niño-beige.jpg"
            },

            {
                nombre: "Blanco",
                imagen: "img/canguro-niño-blanco.jpg"
            },

            {
                nombre: "Rojo",
                imagen: "img/canguro-niño-rojo.jpg"
            }
        ],

        talles: ["2", "4", "6", "8", "10", "12", "14"],

        tabla: "img/tabla-canguro-nino.jpg"
    },


    {
        id: 9,

        nombre: "Camiseta de Fútbol Niño/a",

        categoria: "Remeras",

        precio: 790,

        descripcion: "Camiseta deportiva infantil, liviana y cómoda. Tela apta para personalización mediante sublimación.",

        colores: [
            {
                nombre: "Azul",
                imagen: "img/camiseta-futbol-azul.jpg"
            },

            {
                nombre: "Blanco",
                imagen: "img/camiseta-futbol-blanco.jpg"
            },

            {
                nombre: "Negro",
                imagen: "img/camiseta-futbol-negro.jpg"
            },

            {
                nombre: "Rojo",
                imagen: "img/camiseta-futbol-roja.jpg"
            }
        ],

        talles: ["4", "6", "8", "10", "12", "14"],

        tabla: "img/tabla-camiseta-futbol-nino.jpg"
    },
    
    
       {
        id: 10,

        nombre: "Campera Neopreno",

        categoria: "Buzos",

        precio: 1590,

        descripcion: "Campera de neopreno forrada en micropolar, pensada para abrigo y uso diario. Ideal para personalización y bordado.",

        colores: [
            {
                nombre: "Rojo",
                imagen: "img/campera-impermeable-roja.jpg"
            },

            {
                nombre: "Azul",
                imagen: "img/campera-impermeable-azul.jpg"
            },

            {
                nombre: "Verde",
                imagen: "img/campera-impermeable-azul.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL"],

        tabla: "img/tabla-campera-impermeable.jpg"
    },

    {
        id: 11,
    
        nombre: "Campera",
    
        categoria: "Buzos",
    
        precio: 1490,
    
        descripcion: "Campera cómoda y versátil, ideal para personalizar y usar todos los días.",
    
        colores: [
            {
                nombre: "Negro",
                imagen: "img/campera-negra.jpg"
            },
    
            {
                nombre: "Azul",
                imagen: "img/campera-azul.jpg"
            }
        ],
    
        talles: ["S", "M", "L", "XL", "XXL"],
    
        tabla: "img/guia-campera.jpg"
    },
    {
        id: 12,
    
        nombre: "Camisa Workwear con Reflectivo",
    
        categoria: "Uniforme",
    
        precio: 1390,
    
        descripcion: "Camisa laboral de poliéster, liviana y resistente, con detalles reflectivos. Ideal para uso laboral.",
    
        colores: [
            {
                nombre: "Azul",
                imagen: "img/camisa-reflectivo-azul.jpg"
            },
    
        ],
    
        talles: ["S", "M", "L", "XL", "XXL"],
    
        tabla: "img/tabla-camiseta-reflectiva.jpg"
    },

    {
        id: 13,

        nombre: "Camiseta Reflectiva",

        categoria: "Uniforme",

        precio: 890,

        descripcion: "Camiseta laboral de 100% algodón, cómoda y resistente. Ideal para personalización en DTF o vinilo.",

        colores: [
            {
                nombre: "Azul",
                imagen: "img/camiseta-reflectivo-azul.jpg"
            },

            {
                nombre: "Naranja",
                imagen: "img/camiseta-reflectivo-naranja.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL"],

        tabla: "img/tabla-camiseta-reflectiva.jpg"
    },


    {
        id: 14,

        nombre: "Buzo Reflectivo",

        categoria: "Uniforme",

        precio: 1690,

        descripcion: "Buzo laboral de 100% poliéster, con detalles reflectivos y medio cierre. Cómodo y funcional para trabajos al aire libre.",

        colores: [
            {
                nombre: "Amarillo",
                imagen: "img/buzo-reflectivo-amarillo.jpg"
            }
        ],

        talles: ["S", "M", "L", "XL", "XXL"],

        tabla: "img/tabla-buzo-reflectivo.jpg"
    },

       {
        id: 15,

        nombre: "Casaca de Enfermería",

        categoria: "Uniforme",

        precio: 990,

        descripcion: "Casaca cómoda y resistente, pensada para uniformes de salud. Ideal para personalización.",

        colores: [
            {
                nombre: "Azul",
                imagen: "img/casaca-azul.jpg"
            },

            {
                nombre: "Blanca",
                imagen: "img/casaca-blanca.jpg"
            },

            {
                nombre: "Celeste",
                imagen: "img/casaca-celeste.jpg"
            },

            {
                nombre: "Gris",
                imagen: "img/casaca-gris.jpg"
            },

            {
                nombre: "Roja",
                imagen: "img/casaca-roja.jpg"
            },

            {
                nombre: "Verde",
                imagen: "img/casaca-verde.jpg"
            }
        ],

        talles: ["XS", "S", "M", "L", "XL", "XXL"],

        tabla: "img/tabla-casaca-enfermeria.jpg"
    },


    {
        id: 16,

        nombre: "Taza Clásica",

        categoria: "Taza",

        precio: 250,

        descripcion: "Taza de cerámica sublimable, disponible en varios colores. Ideal para fotos, frases y diseños personalizados.",

        colores: [
            {
                nombre: "Blanca",
                imagen: "img/taza.jpg"
            },

            {
                nombre: "Celeste",
                imagen: "img/taza-celeste.jpg"
            },

            {
                nombre: "Rosa",
                imagen: "img/taza.rosa.jpg"
            },

            {
                nombre: "Amarilla",
                imagen: "img/taza-amarilla.jpg"
            },

            {
                nombre: "Verde",
                imagen: "img/taza-verde.jpg"
            },

            {
                nombre: "Naranja",
                imagen: "img/taza-naranja.jpg"
            },

            {
                nombre: "Negra",
                imagen: "img/taza-negra.jpg"
            }
        ]
    },
 
    {
        id: 17,
    
        nombre: "Jarro con Color",
    
        categoria: "Taza",
    
        precio: 250,
    
        descripcion: "Jarro de cerámica sublimable con interior y asa de color. Ideal para diseños, frases y regalos personalizados.",
    
        colores: [
            {
                nombre: "Celeste",
                imagen: "img/taza-celeste.jpg"
            },
    
            {
                nombre: "Rosa",
                imagen: "img/taza2-rosa.jpg"
            },
    
            {
                nombre: "Amarillo",
                imagen: "img/taza-amarilla.jpg"
            },
    
            {
                nombre: "Verde",
                imagen: "img/taza-verde.jpg"
            },
    
            {
                nombre: "Negro",
                imagen: "img/taza-negra.jpg"
            },

            {
                nombre: "Naranja",
                imagen: "img/taza-naranja.jpg"
            }
        ]
    },

    {
        id: 18,

        nombre: "Taza con Diseño Inferior",

        categoria: "Taza",

        precio: 390,

        descripcion: "Taza de cerámica sublimable con detalle de color en la base. Ideal para diseños, fotos y frases.",

        colores: [
                {
                    nombre: "Lila",
                    imagen: "img/taza2-lila.jpg"
                },
                
                {
                    nombre: "Negro",
                    imagen: "img/taza2-negro.jpg"
                },

                {
                    nombre: "Rosa",
                    imagen: "img/taza2-rosa.jpg"
                },

                {
                    nombre: "Celeste",
                    imagen: "img/taza2-celeste.jpg"
                }
        ]
    },
    
       {
        id: 19,

        nombre: "Jarra Cerámica",

        categoria: "Taza",

        precio: 250,

        descripcion: "Jarra de cerámica sublimable, ideal para personalizar con fotos, frases o diseños.",

        colores: [
            {
                nombre: "Blanca",
                imagen: "img/jarra.jpg"
            }
        ]
    },


    {
        id: 20,

        nombre: "Jarra de Acero",

        categoria: "Taza",

        precio: 350,

        descripcion: "Jarra de acero inoxidable, ideal para personalizar mediante sublimación.",

        colores: [
            {
                nombre: "Acero",
                imagen: "img/jarra-acero.jpg"
            }
        ]
    },


    {
        id: 21,

        nombre: "Mate Sublimable",

        categoria: "Mate",

        precio: 490,

        descripcion: "Mate sublimable, disponible en varios colores. Personalizalo con tu diseño favorito.",

        colores: [
            {
                nombre: "Blanco",
                imagen: "img/mate-blanco.jpg"
            },

            {
                nombre: "Rosa",
                imagen: "img/mate-rosa.jpg"
            },

            {
                nombre: "Agua",
                imagen: "img/mate-agua.jpg"
            }
        ]
    },


    {
        id: 22,

        nombre: "Bolsa de Algodón",

        categoria: "Accesorio",

        precio: 350,

        descripcion: "Bolsa de algodón de 38 × 42 cm, reutilizable y práctica. Ideal para personalizar.",

        colores: [
            {
                nombre: "Blanca",
                imagen: "img/bolsa-blanca.png"
            },

            {
                nombre: "Beige",
                imagen: "img/bolsa-beige.jpg"
            },

            {
                nombre: "Negra",
                imagen: "img/bolsa-negra.png"
            }
        ]
    },


    {
        id: 23,

        nombre: "Llavero Sublimable",

        categoria: "Accesorio",

        precio: 250,

        descripcion: "Llavero sublimable, ideal para regalos, recuerdos y diseños personalizados.",

        colores: [
            {
                nombre: "Único",
                imagen: "img/llavero.jpg"
            }
        ]
    },


    {
        id: 24,

        nombre: "Rompecabezas Sublimable",

        categoria: "Regalo",

        precio: 690,

        descripcion: "Rompecabezas sublimable para personalizar con la imagen que prefieras.",

        colores: [
            {
                nombre: "Único",
                imagen: "img/rompecabezas.jpg"
            }
        ]
    }

];