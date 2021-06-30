$(document).ready(function () {
    // loaded
    setTimeout(() => {
        $("#loading").css("display", "none");
    }, 1000);  
    var bar = new ldBar("#loaded", {
        "stroke": '#f00',
        "stroke-width": 10,
        "preset": "fan",
        "value": 0,
       });
             var bar = document.getElementById ('loaded').ldBar;
             bar.set (100);


    // Declare Map Object
    var map = L.map('map').setView([0,0], 3);
    var mapSW = [2000, 5200] ,mapNE = [5200, 2000];
    // Refrence the tiles
    L.tileLayer('map/{z}/{x}/{y}.png', {
        minZoom: 2,
        maxZoom: 5,
        continuousWorld: false,
        noWrap: true,
    }).addTo(map);

    map.setMaxBounds(new L.LatLngBounds(
        map.unproject(mapSW, map.getMaxZoom()),
        map.unproject(mapNE, map.getMaxZoom())
    ));

    var marker = L.marker([0, 0], {
        draggable: true,
    }).addTo(map);

    var cordinates = "";
    marker.on('contextmenu', () => {
        cordinates += `[${marker.getLatLng().lat}, ${marker.getLatLng().lng}], `;
    });
    marker.on('dblclick', () => {
        alert(cordinates);
    });


    // Buildings_5
    var PolygonBuildings_5 = L.polygon(
        [[28.459033019728068, -37.04589843750001], [30.751277776257812, -42.45], 
        [31.840232667909365, -42.49511718750001], [32.48, -40.22], 
        [32.39851580247402, -39.90234375000001], [32.99023555965106, -39.8583984375], 
        [33.1, -40.166015625], [36.35052700542766, -27.597656250000004], 
        [35.35321610123823, -24.609375000000004], [35.17380831799959, -24.829101562500004], 
        [32.0639555946604, -24.697265625000004], [30.68, -29.28], 
        [30.14512718337613, -28.916015625000004], [29.49698759653577, -31.157226562500004], 
        [29.49698759653577, -31.333007812500004], [28.998531814051795, -33.09082031250001], 
        [29.420460341013158, -33.66210937500001]], 
        { color: '#ffffff00', fillColor: "#00ff1100", fillOpacity: 1, weight: 2}
        ).addTo(map);

    var Buildings_5 = PolygonBuildings_5.bindPopup(
        `
    <div class="info-block">
        <img src="img/Buildings-5/img.jpg">
        <div class="info">
            
            <div class="title">
                <h1>5-o'quv binosi</h1>
                <span>4.5</span>
                <ul>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li class="rating">
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512" class="svg-inline--fa fa-star-half-alt fa-w-17 fa-3x"><path fill="currentColor" d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z" class=""></path></svg>
                    </li>
                </ul>
            </div>
            <div class="travel">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unity" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-unity fa-w-18 fa-7x"><path fill="currentColor" d="M498.11,206.4,445.31,14.72,248.2,66.08,219,116.14l-59.2-.43L15.54,256,159.82,396.32l59.17-.43,29.24,50,197.08,51.36,52.8-191.62-30-49.63ZM223.77,124.2,374.55,86.51,288,232.33H114.87Zm0,263.63L114.87,279.71H288l86.55,145.81Zm193,14L330.17,256l86.58-145.84L458.56,256Z" class=""></path></svg>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est distinctio dolorem.</p>
        <a><span>Batafsil >></span></a>
    </div>
    `);

    var layerBuildings_5 = PolygonBuildings_5.bindTooltip('5-o`quv binosi').addTo(map);
    var clickBuilding_5 = false;
    PolygonBuildings_5.on({
        mouseover: (e) => {
            if (clickBuilding_5) {
                layerBuildings_5.closeTooltip();
                console.log("true");
            }else {
                layerBuildings_5.openTooltip();
                console.log("false");
            }
        },
        click: (e) => {
            map.setView([33.94335994657882, -33.44238281250001], 6);
            Buildings_5.openPopup();
            clickBuilding_5 = true;
        },
        dblclick: () => {

        }
    });

    // Building-G
    var PolygonBuildings_G = L.polygon(
        [[-28.459033019728057, 14.018554687500002], [-26.15543796871355, 9.931640625000002], 
        [-25.839449402063185, 9.931640625000002], [-25.720735134412106, 10.195312500000002], 
        [-25.60190226111574, 10.195312500000002], [-24.126701958681682, 7.558593750000001], 
        [-24.5271348225978, 6.372070312500001], [-10.271681232946728, -16.567382812500004], 
        [-9.96885060854611, -16.5], [-9.44906182688142, -15.26], 
        [-7.667441482726056, -15.292968750000002], [-7.362466865535738, -15.688476562500002], 
        [-0.1, -15.556640625000002], [-0.4, -14.985351562500002], 
        [0, -14.897460937500002], [2.7, -9.316406250000002], 
        [1.2743089918452106, -6.855468750000001], [0.6591651462894632, -6.855468750000001], 
        [-10.876464994816283, 13.139648437500002], [-11.73830237143684, 13.095703125], 
        [-13.410994034321702, 15.952148437500002], [-11.781325296112277, 18.764648437500004], 
        [-14.00869637063467, 22.719726562500004], [-23.443088931121775, 21.621093750000004], 
        [-23.68477416688374, 21.972656250000004], [-23.926013033021192, 21.972656250000004]], 
        { color: '#ffffff00', fillColor: "#00ff1100", fillOpacity: 1, weight: 2}
        ).addTo(map);

    var Buildings_G = PolygonBuildings_G.bindPopup(
        `
    <div class="info-block">
        <img src="img/Building-G/img.jpg">
        <div class="info">
            
            <div class="title">
                <h1>G-o'quv binosi</h1>
                <span>3.5</span>
                <ul>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li class="rating">
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                    </li>
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512" class="svg-inline--fa fa-star-half-alt fa-w-17 fa-3x"><path fill="currentColor" d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z" class=""></path></svg>
                    </li>                    
                    <li class="rating">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                    </li>
                </ul>
            </div>
            <div class="travel">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unity" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-unity fa-w-18 fa-7x"><path fill="currentColor" d="M498.11,206.4,445.31,14.72,248.2,66.08,219,116.14l-59.2-.43L15.54,256,159.82,396.32l59.17-.43,29.24,50,197.08,51.36,52.8-191.62-30-49.63ZM223.77,124.2,374.55,86.51,288,232.33H114.87Zm0,263.63L114.87,279.71H288l86.55,145.81Zm193,14L330.17,256l86.58-145.84L458.56,256Z" class=""></path></svg>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est distinctio dolorem.</p>
        <a><span>Batafsil >></span></a>
    </div>
    `);

    var layerBuildings_G = PolygonBuildings_G.bindTooltip('G-o`quv binosi').addTo(map);
    var clickBuilding_G = false;
    PolygonBuildings_G.on({
        mouseover: (e) => {
            if (clickBuilding_G) {
                layerBuildings_G.closeTooltip();
                console.log("false");
            }else {
                layerBuildings_G.openTooltip();
                console.log("true");
            }
        },
        click: (e) => {
            map.setView([-7.18810087117902, 0.7470703125000001], 4);
            Buildings_G.openPopup();
            clickBuilding_G = true;
        },
        dblclick: () => {

        }
    });

    // Buildings_B
    var PolygonBuildings_B = L.polygon(
        [[-14.944784875088372, -33.39843750000001], [-18.437924653474408, -42.5390625], 
        [-16.55196172197251, -45.263671875], [-17.602139123350838, -47.90039062500001], 
        [-18.271086109608877, -47.28515625000001], [-20.138470312451155, -47.19726562500001], 
        [-21.861498734372567, -51.94335937500001], [-10.617418067950307, -64.11621093750001], 
        [-6.620957270326323, -64.46777343750001], [-5.047170736919708, -60.55664062500001], 
        [-0.13183582116662096, -65.87402343750001], [-0.8349313860427057, -67.85156250000001], 
        [0.7470491450051796, -69.56542968750001], [1.1864386394452024, -69.03808593750001], 
        [1.4061088354351594, -69.03808593750001], [1.9332268264771233, -69.52148437500001], 
        [2.2406396093827334, -69.69726562500001], [2.591888984149953, -68.81835937500001], 
        [6.708253968671543, -73.34472656250001], [10.31491928581316, -73.74023437500001], 
        [11.910353555774114, -69.08203125000001], [12.425847783029134, -66.57714843750001], 
        [-2.460181181020993, -48.69140625], [-6.140554782450295, -48.3837890625], 
        [-8.015715997869059, -53.12988281250001], 
        [-12.168225677390119, -48.42773437500001], [-8.015715997869059, -37.13378906250001], 
        [-10.919617760254685, -33.48632812500001]], 
        { color: '#ffffff00', fillColor: "#00ff1100", fillOpacity: 1, weight: 2}
        ).addTo(map);

        var Buildings_B = PolygonBuildings_B.bindPopup(
            `
        <div class="info-block">
            <img src="img/Building-B/img.jpg">
            <div class="info">
                
                <div class="title">
                    <h1>B-o'quv binosi</h1>
                    <span>3.5</span>
                    <ul>
                        <li class="rating">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                        </li>
                        <li class="rating">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                        </li class="rating">
                        <li class="rating">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" class=""></path></svg>
                        </li>
                        <li class="rating">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star-half-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512" class="svg-inline--fa fa-star-half-alt fa-w-17 fa-3x"><path fill="currentColor" d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z" class=""></path></svg>
                        </li>                    
                        <li class="rating">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-18 fa-3x"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" class=""></path></svg>
                        </li>
                    </ul>
                </div>
                <div class="travel">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="unity" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-unity fa-w-18 fa-7x"><path fill="currentColor" d="M498.11,206.4,445.31,14.72,248.2,66.08,219,116.14l-59.2-.43L15.54,256,159.82,396.32l59.17-.43,29.24,50,197.08,51.36,52.8-191.62-30-49.63ZM223.77,124.2,374.55,86.51,288,232.33H114.87Zm0,263.63L114.87,279.71H288l86.55,145.81Zm193,14L330.17,256l86.58-145.84L458.56,256Z" class=""></path></svg>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est distinctio dolorem.</p>
            <a><span>Batafsil >></span></a>
        </div>
        `);
    
        var layerBuildings_B = PolygonBuildings_B.bindTooltip('B-o`quv binosi').addTo(map);
        var clickBuilding_B = false;
        PolygonBuildings_B.on({
            mouseover: (e) => {
                if (clickBuilding_B) {
                    layerBuildings_B.closeTooltip();
                    console.log("false");
                }else {
                    layerBuildings_B.openTooltip();
                    console.log("true");
                }
            },
            click: (e) => {
                map.setView([0, -57.74414062500001], 4);
                Buildings_B.openPopup();
                clickBuilding_B = true;
            },
            dblclick: () => {
    
            }
        });

});