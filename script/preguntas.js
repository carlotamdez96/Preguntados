    // Inicialmente creo un array de Objetos, estos objetos seran las categorias

    let cuestionario = [
        //Primer objeto categoria Historia
        
            { 
                "imagen":"historia.png",
                "categoria" : "Historia",
                "preguntas": [ //Las preguntas estarán en un Array de objetos
        
                /* Primer Objeto que será la primera pregunta */
                {
                    "tipo":"simple",
                    "pregunta":"¿En qué año el hombre pisó la Luna por primera vez?",
                    "respuestas": [
                  
                        {
                            "respuesta":"1969",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"1979",
                            "correcta":""
        
                        },
                        {
                            "respuesta":"1970",
                            "correcta":""
                        }
                    
                    ]
        
                },
                /*Segunda Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":"¿Quién fue el primer presidente de Estados Unidos?",
                    "respuestas":[
                        {
                            "respuesta":"George Washington",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"John Adams",
                            "correcta":""
                        },
                        {
                            "respuesta":"Thomas Jefferson",
                            "correcta":""
                        }
                    ]
                },
                /*Tercera pregunta*/
                {
                    "tipo":"multiple",
                    "pregunta":"¿Contra que paises lucharon en la Primera Guerra Mundial Gran Bretaña, Francia, Serbia y la Rusia Imperial?",
                    "respuestas":[
                        /*Será un Array de Objetos porque habrá mas de una respuesta correcta y hay que guardar un propiedad para saber si es correcta o no*/
                        {
                            "respuesta":"Alemania",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Estados Unidos",
                            "correcta":""
                        },
                        {
                            "respuesta":"Austria-Hungría",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Italia",
                            "correcta":""
                        } 
                    ]
        
                },
                /*Cuarta Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta": " ¿Cuánto duró la Guerra de los Cien Años?",
                    "respuestas":[
                        {
                            "respuesta":"100 años",
                            "correcta":""
                        },
                        {
                            "respuesta":"160 años",
                            "correcta":""
                        },
                        {
                            "respuesta":"116 años",
                            "correcta":"si"
                        }
                    ]
        
                },
                /*Quinta pregunta */
                {
                    "tipo":"multiple",
                    "pregunta":"Nombre de los barcos que componían la expedición de Colón",
                    "respuestas":[
                        {
                            "respuesta":"Santa Maria",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Triana",
                            "correcta":""
                        },
                        {
                            "respuesta":"Pinta",
                            "correcta":"si"
                        }
                    ]
                },
                /*Sexta Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":"¿Qué isla sirvió de prisión para Napoleón tras su derrota en la batalla de Waterloo?",
                    "respuestas":[
                        {
                            "respuesta":"Isla Margarita",
                            "correcta":""
                        },
                        {
                            "respuesta":"Isla Santa Elena",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"Isla Santa María",
                            "correcta":""
                        }
                    ]
                },
                //Septima pregunta
                {
                    "tipo":"simple",
                    "pregunta":"¿Cuál es el país con más habitantes del mundo?",
                    "respuestas":[
                        {
                            "respuesta":"España",
                            "correcta":""
                        },
                        {
                            "respuesta":"China",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"Italia",
                            "correcta":""
                        }
                    ]
                },
                //Optava
                {
                    "tipo":"simple",
                    "pregunta":"¿Dónde está Transilvania?",
                    "respuestas":[
                        {
                            "respuesta":"Bulgaria",
                            "correcta":""
                        },
                        {
                            "respuesta":"Rumania",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"Grecia",
                            "correcta":""
                        }
                    ]
                },
                //Novena
                {
                    "tipo":"simple",
                    "pregunta":" ¿En qué año cayó el muro de Berlín?",
                    "respuestas":[
                        {
                            "respuesta":"1979",
                            "correcta":""
                        },
                        {
                            "respuesta":"1989",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"1879",
                            "correcta":""
                        }
                    ]
                },
                //Decima
                {
                    "tipo":"simple",
                    "pregunta":"¿Qué día es la fiesta nacional de los Estados Unidos?",
                    "respuestas":[
                        {
                            "respuesta":"7 de Julio",
                            "correcta":""
                        },
                        {
                            "respuesta":"4 de Julio",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"5 de Julio",
                            "correcta":""
                        }
                    ]
                }
        
                ]
        
        
            },
        /*Segundo Objeto de categoria */
            {
                "imagen":"geografia.png",
                "categoria":"Geografía",
                "preguntas":[
                    /*Primera Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":" ¿Cuál es el río más caudaloso del mundo?",
                        "respuestas":[
                            {
                                "respuesta":"Nilo",
                                "correcta":""
                            },
                            {
                                "respuesta":"Amazonas",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Volga",
                                "correcta":""
                            }
                        ]
        
                    },
                    /*Segunda pregunta*/
                    {
                        "tipo":"multiple",
                        "pregunta":"¿Cuales son las dos lenguas más habladas del mundo?",
                        "respuestas":[
                            {
                                "respuesta":"chino mandarin",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"ingles",
                                "correcta":""
                            },
                            {
                                "respuesta":"español",
                                "correcta":"si"
                            }
                        ]
        
                    },
                    /*Tercera Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuál es la capital de Brasil?",
                        "respuestas":[
                            {
                                "respuesta":"Rio de Janeiro",
                                "correcta":""
                            },
                            {
                                "respuesta":"São Paulo",
                                "correcta":""
                            },
                            {
                                "respuesta":"Brasilia",
                                "correcta":"si"
                            }
        
                        ]
                    },
                    /*Cuarta Pregunta */
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuál es la capital de Filipinas?",
                        "respuestas":[
                            {
                                "respuesta":"Manila",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Bangkok",
                                "correcta":""
                            },
                            {
                                "respuesta":"Hanoi",
                                "correcta":""
                            }
                        ]
        
                    },
        
                    /*Quinta Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuál es el nombre de la capital de Albania?",
                        "respuestas":[
                            {
                                "respuesta":"Sofia",
                                "correcta":""
                            },
                            {
                                "respuesta":"Tirana",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Bucarest",
                                "correcta":""
                            }
        
                        ]
        
                    },
                    /*Sexta pregunta*/
                    {
                        "tipo":"multiple",
                        "pregunta":"¿Entre qué países podemos encontrar el Estrecho de Bering?",
                        "respuestas":[
                            {
                                "respuesta":"Estados Unidos",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Rusia",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Canadá",
                                "correcta":""
                            }
                        ]
                         
                    },
                    //Septima pregunta
                    {
                        "tipo":"multiple",
                        "pregunta":" ¿Dónde podemos ver las auroras boreales?",
                        "respuestas":[
                            {
                                "respuesta":"Canadá",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Noruega",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"España",
                                "correcta":""
                            }
                        ]
                         
                    },
                    //Octava pregunta
                    {
                        "tipo":"simple",
                        "pregunta":" ¿Cuál es el río más largo de la Península Ibérica?",
                        "respuestas":[
                            {
                                "respuesta":"Tajo",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Nalón",
                                "correcta":""
                            },
                            {
                                "respuesta":"Ebro",
                                "correcta":""
                            }
                        ]
                         
                    },
                    //Novena pregunta
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuántos océanos hay en la Tierra?",
                        "respuestas":[
                            {
                                "respuesta":"6",
                                "correcta":""
                            },
                            {
                                "respuesta":"5",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"7",
                                "correcta":""
                            }
                        ]
                         
                    },
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cuántos mares existen en la Tierra?",
                        "respuestas":[
                            {
                                "respuesta":"70",
                                "correcta":""
                            },
                            {
                                "respuesta":"60",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"40",
                                "correcta":""
                            }
                        ]
                         
                    }

        
                ]
            },
            //Siguiente objeto
            { 
                "imagen":"arte.png",
                "categoria" : "Arte",
                "preguntas": [ //Las preguntas estarán en un Array de objetos
        
                /* Primer Objeto que será la primera pregunta */
                {
                    "tipo":"simple",
                    "pregunta":"¿Quién escribió la Ilíada y la Odisea?",
                    "respuestas": [
                  
                        {
                            "respuesta":"Homero",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Sófocles",
                            "correcta":""
        
                        },
                        {
                            "respuesta":"Esquilo",
                            "correcta":""
                        }
                    
                    ]
        
                },
                /*Segunda Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":" ¿Quién pintó el 'Guernica'?",
                    "respuestas":[
                        {
                            "respuesta":"Picasso",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Dalí",
                            "correcta":""
                        },
                        {
                            "respuesta":"Van Gogh",
                            "correcta":""
                        }
                    ]
                },
                /*Tercera pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":"¿De qué estilo arquitectónico es la catedral de Notre Dame?",
                    "respuestas":[
                        /*Será un Array de Objetos porque habrá mas de una respuesta correcta y hay que guardar un propiedad para saber si es correcta o no*/
                        {
                            "respuesta":"Gótico",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Románico",
                            "correcta":""
                        },
                        {
                            "respuesta":"Dórico",
                            "correcta":""
                        }
                    ]
        
                },
                /*Cuarta Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta": " ¿De qué obra de Shakespeare forma parte el soliloquio “Ser o no ser, esa es la cuestión”?",
                    "respuestas":[
                        {
                            "respuesta":"Romeo y Julieta",
                            "correcta":""
                        },
                        {
                            "respuesta":"El mercader de Venecia",
                            "correcta":""
                        },
                        {
                            "respuesta":"Hamlet",
                            "correcta":"si"
                        }
                    ]
        
                },
                /*Quinta pregunta */
                {
                    "tipo":"multiple",
                    "pregunta":"Colores primarios",
                    "respuestas":[
                        {
                            "respuesta":"Magenta,amarillo,azul",
                            "correcta":"si"
                        },
                        {
                            "respuesta":"Rojo,verde,amarillo,azul",
                            "correcta":""
                        },
                        {
                            "respuesta":"Rojo,azul,amarillo",
                            "correcta":"si"
                        }
                    ]
                },
                /*Sexta Pregunta*/
                {
                    "tipo":"simple",
                    "pregunta":" ¿Quién escribió 'La colmena'?",
                    "respuestas":[
                        {
                            "respuesta":"Cervantes",
                            "correcta":""
                        },
                        {
                            "respuesta":"Camilo José Cela",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"Unamuno",
                            "correcta":""
                        }
                    ]
                },
                //Septima pregunta
                {
                    "tipo":"simple",
                    "pregunta":"¿En que siglo nació Velázquez?",
                    "respuestas":[
                        {
                            "respuesta":"XVIII",
                            "correcta":""
                        },
                        {
                            "respuesta":"XVII",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"XVI",
                            "correcta":""
                        }
                    ]
                },
                //Optava
                {
                    "tipo":"simple",
                    "pregunta":"¿En quçe museo esta la Mona Lisa",
                    "respuestas":[
                        {
                            "respuesta":"Museo del Prado",
                            "correcta":""
                        },
                        {
                            "respuesta":"Louvre",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"Galeria Uffizi",
                            "correcta":""
                        }
                    ]
                },
                //Novena
                {
                    "tipo":"simple",
                    "pregunta":" ¿En qué siglo nació Van Gogh",
                    "respuestas":[
                        {
                            "respuesta":"XX",
                            "correcta":""
                        },
                        {
                            "respuesta":"XIX",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"XVIII",
                            "correcta":""
                        }
                    ]
                },
                //Decima
                {
                    "tipo":"simple",
                    "pregunta":"¿En qué siglo se inició el Renacimiento?",
                    "respuestas":[
                        {
                            "respuesta":"XVI",
                            "correcta":""
                        },
                        {
                            "respuesta":"XV",
                            "correcta":"si"
        
                        },
                        {
                            "respuesta":"XIV",
                            "correcta":""
                        }
                    ]
                }
        
                ]
        
        
            },
            /*Tecer Objeto de categoria */
            {
                "imagen":"entreEntre.png",
                "categoria":"Entretenimiento",
                "preguntas":[
                    /*Primera Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":" ¿A quién interpretaba John Travolta en 'Grease'?",
                        "respuestas":[
                            {
                                "respuesta":"Kenickie",
                                "correcta":""
                            },
                            {
                                "respuesta":"Danny Zuko",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Eugene Felnic",
                                "correcta":""
                            }
                        ]
        
                    },
                    /*Segunda pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":" ¿Qué conocido cómico imitó a Hitler en la película 'El Gran Dictador'?",
                        "respuestas":[
                            {
                                "respuesta":"Charles Chaplin",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Jim Carrey",
                                "correcta":""
                            },
                            {
                                "respuesta":"Rodney Dangerfield",
                                "correcta":""
                            }
                        ]
        
                    },
                    /*Tercera Pregunta*/
                    {
                        "tipo":"multiple",
                        "pregunta":" ¿Quienes forman el famoso  grupo musical Queen?",
                        "respuestas":[
                            {
                                "respuesta":"Freddie Mercury",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Brian May",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"John Bogie",
                                "correcta":""
                            }
        
                        ]
                    },
                    /*Cuarta Pregunta */
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cómo se llama la ciudad donde se encuentra el Mago de Oz?",
                        "respuestas":[
                            {
                                "respuesta":"Ciudad Esmeralda",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Ciudad Amarilla",
                                "correcta":""
                            },
                            {
                                "respuesta":"Ciudad Turquesa",
                                "correcta":""
                            }
                        ]
        
                    },
        
                    /*Quinta Pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":" ¿Cuáles fueron los tres primeros componentes de 'Los payasos de la tele'?",
                        "respuestas":[
                            {
                                "respuesta":"Rody, Fofó y Miliki",
                                "correcta":""
                            },
                            {
                                "respuesta":"Gaby, Fofó y Miliki",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Gaby, Fofó y Rody",
                                "correcta":""
                            }
        
                        ]
        
                    },
                    /*Sexta pregunta*/
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cómo se llama la protagonista de la saga de videojuegos 'The Legend of Zelda'?",
                        "respuestas":[
                            {
                                "respuesta":"Link",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Pink",
                                "correcta":""
                            },
                            {
                                "respuesta":"Zelda",
                                "correcta":""
                            }
                        ]
                         
                    },
                    //Septima pregunta
                    {
                        "tipo":"multiple",
                        "pregunta":" ¿Cómo se llama el protagonista de la serie de animación japonesa 'Cowboy Bebop'?",
                        "respuestas":[
                            {
                                "respuesta":"Spike",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Spike Spiegel",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Spile",
                                "correcta":""
                            }
                        ]
                         
                    },
                    //Octava pregunta
                    {
                        "tipo":"simple",
                        "pregunta":" ¿Qué famoso youtuber hispanohablante tiene su propia serie de animación?",
                        "respuestas":[
                            {
                                "respuesta":" El Rubius",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Mikecrack",
                                "correcta":""
                            },
                            {
                                "respuesta":"AuronPlay",
                                "correcta":""
                            }
                        ]
                         
                    },
                    //Novena pregunta
                    {
                        "tipo":"simple",
                        "pregunta":"¿Qué serie producida por Netflix tiene como uno de sus antagonistas principales una entidad llamada 'Demogorgon'?",
                        "respuestas":[
                            {
                                "respuesta":"The Rain",
                                "correcta":""
                            },
                            {
                                "respuesta":"Stranger Things",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Dark",
                                "correcta":""
                            }
                        ]
                         
                    },
                    {
                        "tipo":"simple",
                        "pregunta":"¿Cómo se llama la madre de Simba en la película de Disney “El Rey León”?",
                        "respuestas":[
                            {
                                "respuesta":"Samba",
                                "correcta":""
                            },
                            {
                                "respuesta":"Sarabi",
                                "correcta":"si"
                            },
                            {
                                "respuesta":"Sina",
                                "correcta":""
                            }
                        ]
                         
                    }

        
                ]
            }
            
        
            
        
        ];
export{cuestionario};