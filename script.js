const datos = {
    "San Roque": {
        desc: "Gestión de saneamiento y mitigación de cianobacterias.",
        obras: [
            { n: "Dique San Roque", t: "Arco-gravedad", p: "Agua, Energía, Control Crecidas" },
            { n: "Dique La Falda", t: "Mixta", p: "Agua, Turismo" }
        ],
        mapa: "Cuenca de Embalse San Roque.pdf"
    },
    "Los Molinos": {
        desc: "Prevención y control de impacto antrópico en la cuenca.",
        obras: [
            { n: "Dique Los Molinos", t: "Arco-gravedad", p: "Agua, Riego, Energía" },
            { n: "Dique La Quintana", t: "Mixta", p: "Energía, Agua" }
        ],
        mapa: "Cuenca de Embalse Los Molinos.pdf"
    },
    "Río Tercero": {
        desc: "Monitoreo de ecosistemas y calidad de agua.",
        obras: [
            { n: "Embalse M. Pistarini", t: "Materiales sueltos", p: "Agua, Energía, Riego" },
            { n: "Dique Piedras Moras", t: "Materiales sueltos", p: "Riego, Energía" }
        ],
        mapa: "Cuenca Embalse Rio Tercero.pdf"
    }
};

function cargarCuenca(id) {
    const c = datos[id];
    let htmlObras = c.obras.map(o => `<li><strong>${o.n}</strong>: ${o.t} (${o.p})</li>`).join('');
    
    document.getElementById('info-visor').innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h3 style="color:#004a99">Cuenca: ${id}</h3>
                <p>${c.desc}</p>
                <h4>Embalses Principales:</h4>
                <ul>${htmlObras}</ul>
            </div>
            <div style="background:#eee; display:flex; align-items:center; justify-content:center; border-radius:10px;">
                <p><i class="fas fa-file-pdf"></i> Archivo: ${c.mapa}</p>
            </div>
        </div>
    `;
}

// Carga inicial
window.onload = () => cargarCuenca('San Roque');