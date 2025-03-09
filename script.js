function calcular() {
    let exworks = parseFloat(document.getElementById("exworks").value) || 0;
    let peso = parseFloat(document.getElementById("peso").value) || 0;
    let transporte = parseFloat(document.getElementById("transporte").value) || 0;
    let transporte_ec = parseFloat(document.getElementById("transporte_ec").value) || 0;
    let costo_libra = parseFloat(document.getElementById("costo_libra").value) || 3;
    let tipo = parseFloat(document.getElementById("tipo").value);
    let costo_tramite = parseFloat(document.getElementById("costo_tramite").value) || 45;
    let costo_transferencia = parseFloat(document.getElementById("costo_transferencia").value) || 0;
    let isd = parseFloat(document.getElementById("valor_isd").value) || (exworks * 0.05);
    
    let material_flamable = parseFloat(document.getElementById("material_flamable").value);
    document.getElementById("valor_flamable").innerText = "Costo: $" + material_flamable;

    let valor_envio = peso * costo_libra;
    document.getElementById("valor_envio").innerText = "Valor Envío Aéreo: $" + valor_envio.toFixed(2);

    let valor_seguro = (exworks + valor_envio) * 0.01;
    document.getElementById("valor_seguro").innerText = "Valor Seguro (1%): $" + valor_seguro.toFixed(2);

    let valor_cif = exworks + transporte + transporte_ec + valor_envio + valor_seguro + material_flamable;
    document.getElementById("valor_cif").innerText = "Valor CIF: $" + valor_cif.toFixed(2);

    let valor_arancel = valor_cif * tipo;
    document.getElementById("valor_arancel").innerText = "Valor Costo Arancel: $" + valor_arancel.toFixed(2);

    let valor_fodinfa = valor_cif * 0.0005;
    document.getElementById("valor_fodinfa").innerText = "Valor Fodinfa: $" + valor_fodinfa.toFixed(2);

    let valor_iva = valor_cif * 0.15;
    document.getElementById("valor_iva").innerText = "Valor IVA: $" + valor_iva.toFixed(2);

    let costo_sin_iva = valor_cif + valor_arancel + valor_fodinfa + isd + costo_transferencia;
    document.getElementById("costo_sin_iva").innerText = "Costo Total sin IVA: $" + costo_sin_iva.toFixed(2);

    let valor_total = costo_sin_iva + valor_iva;
    document.getElementById("valor_total").innerText = "Valor Total con IVA: $" + valor_total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    calcular();
});

function imprimir() {
    window.print();
}
