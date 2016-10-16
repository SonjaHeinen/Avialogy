$(function () {

  var AirSigns = {

    Lufthansa: {
      id: '#lufthansa'
    },

    BritishAirways: {
      id: '#britishairways'
    },

    Iberia: {
      id: '#iberia'
    },

    KLM: {
      id: '#klm'
    },

    AirFrance: {
      id: '#airfrance'
    },

    Aeroflot: {
      id: '#aeroflot'
    },

    Norwegian: {
      id: '#norwegian'
    },

    EasyJet: {

      id: '#easyjet'
    },

    Ryanair: {
      id: '#ryanair'
    }
  };

  var AMS = {
    name: "Amsterdam",
    latitude: 52.310539,
    longitude: 4.768274,
    airsign: AirSigns.KLM
  };

  var ARN = {
    name: "Stockholm",
    latitude: 59.649762,
    longitude: 17.923781,
    airsign: AirSigns.Norwegian
  };

  var ATH = {
    name: "Athens",
    latitude: 37.935647,
    longitude: 23.948416,
    airsign: AirSigns.Aeroflot
  };

  var BRU = {
    name: "Brussels",
    latitude: 50.900999,
    longitude: 4.485574,
    airsign: AirSigns.KLM
  };

  var BUD = {
    name: "Budapest",
    latitude: 47.438459,
    longitude: 19.252296,
    airsign: AirSigns.Iberia
  };

  var CDG = {
    name: "Charles de Gaulles",
    latitude: 49.009691,
    longitude: 2.547924,
    airsign: AirSigns.AirFrance
  };

  var CPH = {
    name: "Copenhagen",
    latitude: 55.618024,
    longitude: 12.650763,
    airsign: AirSigns.Norwegian
  };

  var DUB = {
    name: "Dublin",
    latitude: 53.426448,
    longitude: -6.24991,
    airsign: AirSigns.Ryanair
  };

  var FCO = {
    name: "Rome",
    latitude: 41.799887,
    longitude: 12.246238,
    airsign: AirSigns.Ryanair
  };

  var FRA = {
    name: "Frankfurt",
    latitude: 50.037933,
    longitude: 8.562152,
    airsign: AirSigns.Lufthansa
  };

  var HEL = {
    name: "Helsinki",
    latitude: 60.321042,
    longitude: 24.95286,
    airsign: AirSigns.Norwegian
  };

  var LCA = {
    name: "Cyprus",
    latitude: 34.87234,
    longitude: 33.620352,
    airsign: AirSigns.Aeroflot
  };

  var LHR = {
    name: "Heathrow",
    latitude: 51.470022,
    longitude: -0.454296,
    airsign: AirSigns.BritishAirways
  };

  var LIS = {
    name: "Lisbon",
    latitude: 38.775594,
    longitude: -9.135367,
    airsign: AirSigns.Iberia
  };

  var LJU = {
    name: "Ljubljana",
    latitude: 46.225943,
    longitude: 14.455914,
    airsign: AirSigns.EasyJet
  };

  var LUX = {
    name: "Luxembourg",
    latitude: 49.6289,
    longitude: 6.214745,
    airsign: AirSigns.Lufthansa
  };

  var MAD = {
    name: "Madrid",
    latitude: 40.483936,
    longitude: -3.567952,
    airsign: AirSigns.Iberia
  };

  var MLA = {
    name: "Malta",
    latitude: 35.854114,
    longitude: 14.48328,
    airsign: AirSigns.EasyJet
  };

  var OTP = {
    name: "Romania",
    latitude: 44.570731,
    longitude: 26.084412,
    airsign: AirSigns.Aeroflot
  };

  var PRG = {
    name: "Prag",
    latitude: 50.101791,
    longitude: 14.263181,
    airsign: AirSigns.EasyJet
  };

  var RIX = {
    name: "Riga",
    latitude: 56.922655,
    longitude: 23.973313,
    airsign: AirSigns.Norwegian
  };

  var SOF = {
    name: "Sofia",
    latitude: 42.689384,
    longitude: 23.402516,
    airsign: AirSigns.Aeroflot
  };

  var TLL = {
    name: "Tallinn",
    latitude: 59.41636,
    longitude: 24.802738,
    airsign: AirSigns.Norwegian
  };

  var VIE = {
    name: "Vienna",
    latitude: 48.115833,
    longitude: 16.566575,
    airsign: AirSigns.Lufthansa
  };

  var VNO = {
    name: "Vilnius",
    latitude: 54.638037,
    longitude: 25.286558,
    airsign: AirSigns.Aeroflot
  };

  var WAW = {
    name: "Warsaw",
    latitude: 52.167237,
    longitude: 20.967891,
    airsign: AirSigns.EasyJet
  };

  var ZAG = {
    name: "Zagreb",
    latitude: 45.74075,
    longitude: 16.067436,
    airsign: AirSigns.Ryanair
  };

  var airports = [AMS, ARN, ATH, BRU, BUD, CDG, CPH, DUB, FCO, FRA, HEL, LCA, LHR, LIS, LJU, LUX, MAD, MLA, OTP, PRG, RIX, SOF, TLL, VIE, VNO, WAW, ZAG];

  function calculateDistance(airport, position) {
    var lat1,
        lat2,
        lon_d,
        degrees_to_radians;
    degrees_to_radians = Math.PI / 180;

    lat1 = airport.latitude         * degrees_to_radians;
    lat2 = position.coords.latitude * degrees_to_radians;
    lon_d = Math.abs( airport.longitude - position.coords.longitude ) * degrees_to_radians;

    return Math.atan2(
      Math.sqrt(
        Math.pow(Math.cos(lat2) * Math.sin(lon_d), 2.0) +
        Math.pow(
          Math.cos(lat1) * Math.sin(lat2) -
          Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon_d), 2.0
        )
      ),
      Math.sin(lat1) * Math.sin(lat2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon_d)
    );
  }

  $('#find-sign').click(function() {
    if ("geolocation" in navigator) {
      console.log('geolocation available');
      navigator.geolocation.getCurrentPosition(function(position) {

        console.log(position);

        var closestAirport, closestDistance, distance;

        airports.forEach(function(airport){

          distance = calculateDistance(airport, position);

          if (!closestAirport || distance < closestDistance) {
            closestAirport = airport;
            closestDistance = distance;
          }
        });

        console.log(closestAirport);

        $(".airsign").hide();
        $("#find-sign").hide();
        $(closestAirport.airsign.id).show();

      });
    } else {
      $(airsign.FRA).show();
    }

  });

});
