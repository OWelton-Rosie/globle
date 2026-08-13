// @name         Globle Country Abbreviations
// @namespace    https://github.com/OWelton-Rosie/globle
// @version      1.0.0
// @description  Adds common country abbreviations and codes to Globle
// @author       Oscar
// @match        https://globle-game.com/*
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/OWelton-Rosie/globle/main/globle-abbreviations.user.js
// @downloadURL  https://raw.githubusercontent.com/OWelton-Rosie/globle/main/globle-abbreviations.user.js
// ==/UserScript==
(() => {
    "use strict";

    const aliases = {
        // Korea
        dprk: "North Korea",
        rok: "South Korea",

        // Australia / New Zealand
        aus: "Australia",
        nz: "New Zealand",
        nzl: "New Zealand",

        // Americas
        arg: "Argentina",
        usa: "United States of America",
        us: "United States of America",
        can: "Canada",
        mex: "Mexico",
        bra: "Brazil",
        prc: "China",
        chn: "China",
        ch: "China",

        // Europe
        uk: "United Kingdom",
        gb: "United Kingdom",
        gbr: "United Kingdom",

        // Middle East / Asia
        uae: "United Arab Emirates",
        are: "United Arab Emirates",
        qat: "Qatar",
        dprk: "North Korea",
        prk: "North Korea",
        rok: "South Korea",
        kor: "South Korea",

        // Africa
        drc: "Dem. Rep. Congo",
        "dr congo": "Dem. Rep. Congo",
	    "drcongo": "Dem. Rep. Congo",
        car: "Central African Rep.",
        rsa: "South Africa",
	    sa: "South Africa",
        zaf: "South Africa",
        za: "South Africa",

        // Common 3-letter country codes
        afg: "Afghanistan",
        alb: "Albania",
        dza: "Algeria",
        and: "Andorra",
        ago: "Angola",
        atg: "Antigua and Barbuda",
        arm: "Armenia",
        aut: "Austria",
        aze: "Azerbaijan",
        bhs: "Bahamas",
        bhr: "Bahrain",
        bgd: "Bangladesh",
        brb: "Barbados",
        blr: "Belarus",
        bel: "Belgium",
        blz: "Belize",
        ben: "Benin",
        btn: "Bhutan",
        bol: "Bolivia",
        bih: "Bosnia and Herzegovina",
        bwa: "Botswana",
        brn: "Brunei",
        bgr: "Bulgaria",
        bfa: "Burkina Faso",
        bdi: "Burundi",
        khm: "Cambodia",
        cmr: "Cameroon",
        cpv: "Cabo Verde",
        caf: "Central African Rep.",
        tcd: "Chad",
        chl: "Chile",
        col: "Colombia",
        com: "Comoros",
        cog: "Congo",
        cri: "Costa Rica",
        civ: "Ivory Coast",
        hrv: "Croatia",
        cub: "Cuba",
        cyp: "Cyprus",
        cze: "Czechia",
        dnk: "Denmark",
        dji: "Djibouti",
        dma: "Dominica",
        dom: "Dominican Republic",
        ecu: "Ecuador",
        egy: "Egypt",
        slv: "El Salvador",
        gnq: "Equatorial Guinea",
        eri: "Eritrea",
        est: "Estonia",
        swz: "Eswatini",
        eth: "Ethiopia",
        fji: "Fiji",
        fin: "Finland",
        fra: "France",
        gab: "Gabon",
        gmb: "Gambia",
        geo: "Georgia",
        deu: "Germany",
        gha: "Ghana",
        grc: "Greece",
        grd: "Grenada",
        gtm: "Guatemala",
        gin: "Guinea",
        gnb: "Guinea-Bissau",
        guy: "Guyana",
        hti: "Haiti",
        hnd: "Honduras",
        hun: "Hungary",
        isl: "Iceland",
        ice: "Iceland",
        ind: "India",
        idn: "Indonesia",
        irn: "Iran",
        irq: "Iraq",
        irl: "Ireland",
        ire: "Ireland",
        isr: "Israel",
        ita: "Italy",
        jam: "Jamaica",
        jpn: "Japan",
        jor: "Jordan",
        kaz: "Kazakhstan",
        ken: "Kenya",
        kir: "Kiribati",
        kwt: "Kuwait",
        kgz: "Kyrgyzstan",
        lao: "Laos",
        lva: "Latvia",
        lbn: "Lebanon",
        lso: "Lesotho",
        lbr: "Liberia",
        lby: "Libya",
        lie: "Liechtenstein",
        ltu: "Lithuania",
        lux: "Luxembourg",
        mdg: "Madagascar",
        mwi: "Malawi",
        mys: "Malaysia",
        mdv: "Maldives",
        mli: "Mali",
        mlt: "Malta",
        mhl: "Marshall Islands",
        mrt: "Mauritania",
        mus: "Mauritius",
        mex: "Mexico",
        fsm: "Micronesia",
        mda: "Moldova",
        mco: "Monaco",
        mng: "Mongolia",
        mne: "Montenegro",
        mar: "Morocco",
        moz: "Mozambique",
        mmr: "Myanmar",
        nam: "Namibia",
        nru: "Nauru",
        npl: "Nepal",
        nld: "Netherlands",
        ncl: "New Caledonia",
        nic: "Nicaragua",
        ner: "Niger",
        nga: "Nigeria",
        mkd: "North Macedonia",
        nor: "Norway",
        omn: "Oman",
        pak: "Pakistan",
        plw: "Palau",
        pl:  "Palestine",
        pla: "Palestine",
        pan: "Panama",
        png: "Papua New Guinea",
        pry: "Paraguay",
        per: "Peru",
        phl: "Philippines",
        pol: "Poland",
        prt: "Portugal",
        qat: "Qatar",
        rou: "Romania",
        rus: "Russia",
        rwa: "Rwanda",
        kca: "Saint Kitts and Nevis",
        lca: "Saint Lucia",
        vct: "Saint Vincent and the Grenadines",
        wsm: "Samoa",
        smr: "San Marino",
        stp: "Sao Tome and Principe",
        sau: "Saudi Arabia",
        sen: "Senegal",
        srb: "Serbia",
        syc: "Seychelles",
        sle: "Sierra Leone",
        sgp: "Singapore",
        svk: "Slovakia",
        svn: "Slovenia",
        slb: "Solomon Islands",
        som: "Somalia",
        zaf: "South Africa",
        ssd: "S. Sudan",
        esp: "Spain",
        lka: "Sri Lanka",
        sdN: "Sudan",
        sur: "Suriname",
        swe: "Sweden",
        che: "Switzerland",
        syr: "Syria",
        tjk: "Tajikistan",
        tza: "Tanzania",
        tha: "Thailand",
        tls: "Timor-Leste",
        tgo: "Togo",
        ton: "Tonga",
        tto: "Trinidad and Tobago",
        tun: "Tunisia",
        tur: "Turkey",
        tkm: "Turkmenistan",
        tuv: "Tuvalu",
        uga: "Uganda",
        ukr: "Ukraine",
        ury: "Uruguay",
        uzb: "Uzbekistan",
        vut: "Vanuatu",
        vat: "Vatican City",
        ven: "Venezuela",
        vnm: "Vietnam",
        yem: "Yemen",
        zmb: "Zambia",
        zwe: "Zimbabwe"
    };

    function normalise(value) {
        return value
            .toLowerCase()
            .trim()
            .replace(/[\s._-]+/g, "");
    }

    document.addEventListener("submit", event => {
        const form = event.target;

        if (!(form instanceof HTMLFormElement)) return;

        const input = form.querySelector('input[name="guess"]');

        if (!input) return;

        const key = normalise(input.value);
        const replacement = aliases[key];

        if (replacement) {
            input.value = replacement;
            console.log(`[Globle abbreviations] ${key} → ${replacement}`);
        }
    }, true);
})();