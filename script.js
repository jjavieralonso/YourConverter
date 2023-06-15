var unidades = {
    distancia: ["metros", "kilómetros", "centímetros", "millas", "pies", "pulgadas"],
    velocidad: ["kilómetros por hora", "millas por hora", "metros por segundo"],
    bytes: ["bytes", "kilobytes", "megabytes", "gigabytes", "terabytes"],
    tiempo: ["segundos", "minutos", "horas", "días"],
    peso: ["gramos", "kilogramos", "libras"],
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"]
};

function mostrarUnidades() {
    var tipo = document.getElementById("type").value;
    var unidadesOrigen = unidades[tipo];
    var unidadesDestino = unidades[tipo];
    var selectOrigen = document.getElementById("unidadOrigen");
    var selectDestino = document.getElementById("unidadDestino");

    selectOrigen.innerHTML = "";
    selectDestino.innerHTML = "";

    unidadesOrigen.forEach(function (unidad) {
        var option = document.createElement("option");
        option.text = unidad;
        selectOrigen.add(option);
    });

    unidadesDestino.forEach(function (unidad) {
        var option = document.createElement("option");
        option.text = unidad;
        selectDestino.add(option);
    });

    document.getElementById("unidades").style.display = "block";
}

function convertir() {
    var tipo = document.getElementById("type").value;
    var unidadOrigen = document.getElementById("unidadOrigen").value;
    var unidadDestino = document.getElementById("unidadDestino").value;
    var valorEntrada = parseFloat(document.getElementById("input").value);
    var resultado;

    if (tipo === "distancia") {
        resultado = convertirDistancia(valorEntrada, unidadOrigen, unidadDestino);
    } else if (tipo === "velocidad") {
        resultado = convertirVelocidad(valorEntrada, unidadOrigen, unidadDestino);
    } else if (tipo === "bytes") {
        resultado = convertirBytes(valorEntrada, unidadOrigen, unidadDestino);
    } else if (tipo === "tiempo") {
        resultado = convertirTiempo(valorEntrada, unidadOrigen, unidadDestino);
    } else if (tipo === "peso") {
        resultado = convertirPeso(valorEntrada, unidadOrigen, unidadDestino);
    } else if (tipo === "temperatura") {
        resultado = convertirTemperatura(valorEntrada, unidadOrigen, unidadDestino);
    }
    document.getElementById("output").value = resultado;
}

function convertirDistancia(valor, unidadOrigen, unidadDestino) {
    const conversiones = {
        "metros": {
            "metros": valor,
            "kilómetros": valor / 1000,
            "centímetros": valor * 100,
            "millas": valor / 1609.34,
            "pies": valor * 3.28084,
            "pulgadas": valor * 39.3701
        },
        "kilómetros": {
            "metros": valor * 1000,
            "kilómetros": valor,
            "centímetros": valor * 100000,
            "millas": valor / 1.60934,
            "pies": valor * 3280.84,
            "pulgadas": valor * 39370.1
        },
        "centímetros": {
            "metros": valor / 100,
            "kilómetros": valor / 100000,
            "centímetros": valor,
            "millas": valor / 160934,
            "pies": valor * 0.0328084,
            "pulgadas": valor * 0.393701
        },
        "millas": {
            "metros": valor * 1609.34,
            "kilómetros": valor * 1.60934,
            "centímetros": valor * 160934,
            "millas": valor,
            "pies": valor * 5280,
            "pulgadas": valor * 63360
        },
        "pies": {
            "metros": valor * 0.3048,
            "kilómetros": valor * 0.0003048,
            "centímetros": valor * 30.48,
            "millas": valor / 5280,
            "pies": valor,
            "pulgadas": valor * 12
        },
        "pulgadas": {
            "metros": valor * 0.0254,
            "kilómetros": valor * 0.0000254,
            "centímetros": valor * 2.54,
            "millas": valor / 63360,
            "pies": valor * 0.0833333,
            "pulgadas": valor
        }
    };
    return conversiones[unidadOrigen][unidadDestino];
}

function convertirVelocidad(valor, unidadOrigen, unidadDestino) {
    const conversiones = {
        "kilómetros por hora": {
            "kilómetros por hora": valor,
            "millas por hora": valor / 1.60934,
            "metros por segundo": valor / 3.6,
        },
        "millas por hora": {
            "kilómetros por hora": valor * 1.60934,
            "millas por hora": valor,
            "metros por segundo": valor / 2.23694,
        },
        "metros por segundo": {
            "kilómetros por hora": valor * 3.6,
            "millas por hora": valor * 2.23694,
            "metros por segundo": valor,
        },
    };
    return conversiones[unidadOrigen][unidadDestino];
}

function convertirBytes(valor, unidadOrigen, unidadDestino) {
    const conversiones = {
        "bytes": {
            "bytes": valor,
            "kilobytes": valor / 1024,
            "megabytes": valor / (1024 * 1024),
            "gigabytes": valor / (1024 * 1024 * 1024),
            "terabytes": valor / (1024 * 1024 * 1024 * 1024)
        },
        "kilobytes": {
            "bytes": valor * 1024,
            "kilobytes": valor,
            "megabytes": valor / 1024,
            "gigabytes": valor / (1024 * 1024),
            "terabytes": valor / (1024 * 1024 * 1024)
        },
        "megabytes": {
            "bytes": valor * (1024 * 1024),
            "kilobytes": valor * 1024,
            "megabytes": valor,
            "gigabytes": valor / 1024,
            "terabytes": valor / (1024 * 1024)
        },
        "gigabytes": {
            "bytes": valor * (1024 * 1024 * 1024),
            "kilobytes": valor * (1024 * 1024),
            "megabytes": valor * 1024,
            "gigabytes": valor,
            "terabytes": valor / 1024
        },
        "terabytes": {
            "bytes": valor * (1024 * 1024 * 1024 * 1024),
            "kilobytes": valor * (1024 * 1024 * 1024),
            "megabytes": valor * (1024 * 1024),
            "gigabytes": valor * 1024,
            "terabytes": valor
        }
    };
    return conversiones[unidadOrigen][unidadDestino];
}

function convertirTiempo(valor, unidadOrigen, unidadDestino) {
    const conversiones = {
        "segundos": {
            "segundos": valor,
            "minutos": valor / 60,
            "horas": valor / 3600,
            "días": valor / 86400,
        },
        "minutos": {
            "segundos": valor * 60,
            "minutos": valor,
            "horas": valor / 60,
            "días": valor / 1440,
        },
        "horas": {
            "segundos": valor * 3600,
            "minutos": valor * 60,
            "horas": valor,
            "días": valor / 24,
        },
        "días": {
            "segundos": valor * 86400,
            "minutos": valor * 1440,
            "horas": valor * 24,
            "días": valor,
        }
    };
    return conversiones[unidadOrigen][unidadDestino];
}

function convertirPeso(valor, unidadOrigen, unidadDestino) {
    const conversiones = {
        "gramos": {
            "gramos": valor,
            "kilogramos": valor / 1000,
            "libras": valor / 453.592,
        },
        "kilogramos": {
            "gramos": valor * 1000,
            "kilogramos": valor,
            "libras": valor * 2.20462,
        },
        "libras": {
            "gramos": valor * 453.592,
            "kilogramos": valor / 2.20462,
            "libras": valor,
        }
    };
    return conversiones[unidadOrigen][unidadDestino];
}

function convertirTemperatura(valor, unidadOrigen, unidadDestino) {
    const conversiones = {
        "Celsius": {
            "Celsius": valor,
            "Fahrenheit": (valor * 9 / 5) + 32,
            "Kelvin": valor + 273.15
        },
        "Fahrenheit": {
            "Celsius": (valor - 32) * 5 / 9,
            "Fahrenheit": valor,
            "Kelvin": (valor + 459.67) * 5 / 9
        },
        "Kelvin": {
            "Celsius": valor - 273.15,
            "Fahrenheit": (valor * 9 / 5) - 459.67,
            "Kelvin": valor
        }
    };
    return conversiones[unidadOrigen][unidadDestino];
}
window.addEventListener("load", function () { //mostrar origen/destino de la unidad default (distancia) al cargar la pagina
    mostrarUnidades();

    const distanciaInputs = document.getElementById("distanciaInputs");
    distanciaInputs.style.display = "block";
});

const swapIcon = document.getElementById('tradeIcon');

swapIcon.addEventListener('click', function() { //va a cambiar los valores de los selects de unidad
    const temp = unidadOrigen.value;
    unidadOrigen.value = unidadDestino.value;
    unidadDestino.value = temp;
  });