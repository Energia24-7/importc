<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cálculo de Importación Aérea en Categoría C desde Miami</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <img src="logo.jpg" alt="Logo" class="logo">
        <h2>Cálculo de Costo Importación Aérea desde Miami, Categoría C: $5000 o 100 kg máx</h2>
        
        <label for="exworks">Costo Exworks en USD:</label>
        <input type="number" id="exworks" value="0">

        <label for="peso">Peso en libras:</label>
        <input type="number" id="peso" value="0">

        <label for="tipo">Tipo de Importación:</label>
        <select id="tipo" onchange="calcular()">
            <option value="0.25">Artículo electrónico en general</option>
            <option value="0">Paneles Solares</option>
            <option value="0.25">Baterías</option>
            <option value="0.25">Repuestos auto</option>
            <option value="0">Inversor solar</option>
            <option value="0.05">Equipo eléctrico de maniobra y señalización</option>
            <option value="0.25">Equipo de computación (no monitores)</option>
        </select>

        <label for="transporte">Transporte interno hacia Miami (USD):</label>
        <input type="number" id="transporte" value="0">
        
        <label for="transporte_ec">Transporte interno EC (USD):</label>
        <input type="number" id="transporte_ec" value="0">

        <label for="material_flamable">Material catalogado como inflamable?</label>
        <select id="material_flamable" onchange="calcular()">
            <option value="0">No</option>
            <option value="50">Sí</option>
        </select>
        <div class="result" id="valor_flamable">Costo: $0</div>

        <label for="costo_libra">Costo por libra (USD):</label>
        <input type="number" id="costo_libra" value="3">
        <div class="result" id="valor_envio"></div>

        <div class="result" id="valor_seguro"></div>
        <div class="result" id="valor_cif"></div>
        <div class="result" id="valor_arancel"></div>
        <div class="result" id="valor_fodinfa"></div>
        <div class="result" id="valor_iva"></div>

        <label for="costo_tramite">Costo de trámite (USD):</label>
        <input type="number" id="costo_tramite" value="45">

        <label for="valor_isd">Valor por ISD (USD) (Editable, 5% por defecto):</label>
        <input type="number" id="valor_isd" value="0">

        <label for="costo_transferencia">Costo de transferencia si aplica (USD):</label>
        <input type="number" id="costo_transferencia" value="0">

        <div class="result" id="costo_sin_iva"></div>
        <div class="result" id="valor_total"></div>
        <button onclick="imprimir()">Imprimir PDF</button>
    </div>
    <footer>
        <p>Desarrollado por Energía 24/7 - Quito-Ecuador, Telf: 0998879869</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

