$(window).load(function () {
            LHA();
            BA();
            IB();
            KLM();
            AFR();
            AFL();
            NAX();
            EZY();
            RYR();
        });

function LHA() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var LHA = "LHA.F";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + LHA + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#LHA").html(StockTickerHTML);
    });
}

function BA() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var BA = "IAG.L";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + BA + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#BA").html(StockTickerHTML);
    });
}

function IB() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var IB = "IAG.L";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + IB + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#IB").html(StockTickerHTML);
    });
}

function KLM() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var KLM = "KLMR";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + KLM + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#KLM").html(StockTickerHTML);
    });
}

function AFR() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var AFR = "AF.PA";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + AFR + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#AFR").html(StockTickerHTML);
    });
}

function AFL() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var AFL = "AETG.F";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + AFL + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#AFL").html(StockTickerHTML);
    });
}

function NAX() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var NAX = "NCLH";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + NAX + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#NAX").html(StockTickerHTML);
    });
}

function EZY() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var EZY = "EZJ.L";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + EZY + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#EZY").html(StockTickerHTML);
    });
}

function RYR() {
    var Symbol = "", CompName = "", Price = "", ChnageInPrice = "", PercentChnageInPrice = "";
    var RYR = "RYAAY";
    var flickerAPI = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + RYR + "%22)&env=store://datatables.org/alltableswithkeys";
    var StockTickerHTML = "";

    var StockTickerXML = $.get(flickerAPI, function(xml) {
        $(xml).find("quote").each(function () {
            Symbol = $(this).attr("symbol");
            $(this).find("LastTradePriceOnly").each(function () {
                Price = $(this).text();
            });
            $(this).find("Change").each(function () {
                ChnageInPrice = $(this).text();
            });
            $(this).find("PercentChange").each(function () {
                PercentChnageInPrice = $(this).text();
            });

            var PriceClass = "GreenText", PriceIcon="up_green";
            if(parseFloat(ChnageInPrice) < 0) { PriceClass = "RedText"; PriceIcon="down_red"; }
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceClass + "'>";
            StockTickerHTML = StockTickerHTML +"<p><span>Finance:</span></p>";

            StockTickerHTML = StockTickerHTML + parseFloat(Price).toFixed(2) + " ";
            StockTickerHTML = StockTickerHTML + "<span class='" + PriceIcon + "'></span>" + parseFloat(Math.abs(ChnageInPrice)).toFixed(2) + " (";
            StockTickerHTML = StockTickerHTML + parseFloat( Math.abs(PercentChnageInPrice.split('%')[0])).toFixed(2) + "%)</span>";
        });

        $("#RYR").html(StockTickerHTML);
    });
}
