mapboxgl.accessToken = 'pk.eyJ1Ijoic3Nyb2NrczMwIiwiYSI6ImNsZGVsNTdsOTBlbXgzd21xZmxmZTJ6a3EifQ.xIEeqAI2WPZb1JMWYplscA';
	  
		const map = new mapboxgl.Map({
		  container: 'map',
		  style: 'mapbox://styles/mapbox/light-v11',
		  center: [77.562537, 13.030070],
		  zoom: 15,
		  scrollZoom: false
	  });

	  const stores = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.561970, 13.029722
        ]
      },
      "properties": {
        "name": "MTP PG for boys",
        "address": "4th Cross, MSR college Road, Mathikere",
        "city": "BANGALORE",
        "country": "United States",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5617073,
          13.0308045
        ]
      },
      "properties": {
        "name":"Stanza Living Fargo house",
        "address": "A.K.Colony, Gokula 1st Stage, Mathikere Extension, Devasandra Layout",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.562905, 13.030064
        ]
      },
      "properties": {
        "name":"Maurya Paradise Inn",
        "address": "Gate NO. 5, No:#7/1, MSR Engineering College Rd, near Ramaiah College, Mathikere Extension",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5621196,
          13.0300726
        ]
      },
      "properties": {
        "name":"Kwality ladies pg",
        "address": "Sri Complex 4/3, MSR College Rd, Opp, NIAS Main Gate, near back gate no 11, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5621196,
          13.0300726
        ]
      },
      "properties": {
        "name":"Dhaya Residency Lodge & PG",
        "address": "8/1, 8/2, 2nd Cross, MSR College Rd, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5622256,
          13.0302558
        ]
      },
      "properties": {
        "name":"Stanza Living Vilnius House",
        "address": "Sai Shamika Plaza, MSR College Rd, A.K.Colony, Gokula 1st Stage, Mathikere Extension, Devasandra Layout",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5613268, 13.0333611
        ]
      },
      "properties": {
        "name":"Stanza Living Norton House",
        "address": "#225, 4th Cross Rd, Chikkamaranahalli, M S Ramaiah Nagar, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    }
    ,
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.562537,
          13.030070
        ]
      },
      "properties": {
        "name":"Monarch PG for Girls",
        "address": "AK colony, Gokul 1st stage, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    }
    ,
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5607485, 13.0327214
        ]
      },
      "properties": {
        "name":"Zolo Hermes Co-Living | Redefining PG",
        "address": "#8, Off, New BEL Rd, behind chroma showroom, Jaladarshini Layout",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    }

    ,
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5618601,
          13.0308006
        ]
      },
      "properties": {
        "name":"Greens PG",
        "address": "#82/9, 12th Main, M S Ramaiah College Road, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5620526,
          13.0310397
        ]
      },
      "properties": {
        "name":"Dream City Paying Guest Accommodation For Boys",
        "address": "2HJ6+CVC, MSR Road, Gokula 1st Stage, Mathikere Extension, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5622031,
          13.0312035
        ]
      },
      "properties": {
        "name":"My Home Ladies Pg",
        "address": "5, 9th Main Rd, A.K.Colony, M S Ramaiah Nagar, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5614921, 13.0327863
        ]
      },
      "properties": {
        "name":"Dhaya Guest and PG accomodation",
        "address": "553, 7th Main Rd, Mathikere Extension, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.560908,
          13.0304622
        ]
      },
      "properties": {
        "name":"M s square Ladies PG Accomodation",
        "address": "Msre college road, 14th Main 1st Cross Rd, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    }
    ,{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5634619, 13.0311034
        ]
      },
      "properties": {
        "name":"Stanza Living Dortmund House",
        "address": "2nd Cross Rd, Venkateshwara Layout, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5627721, 13.0311859
        ]
      },
      "properties": {
        "name":"Adler stays luxury pg for girls new bel road",
        "address": "#1 17/5, New BEL Rd, Jaladarshini Layout",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5643255, 13.0349804
        ]
      },
      "properties": {
        "name":"NIVI 91",
        "address": "2nd Phase, 91, RMV 2nd Stage, 3rd Block, M S R Nagar, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5596581, 13.0356215
        ]
      },
      "properties": {
        "name":"Stanza Living Rostock House",
        "address": "6th Cross Rd, M S R Nagar, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5618601,
          13.0308006
        ]
      },
      "properties": {
        "name":"Kalyani Boys P.G.",
        "address": "4th, #82/7, 13th Main, Cross, MSR College Rd, Mathikere",
        "city": "BANGALORE",
        "country": "India",
        "postalCode": "560054",
        "state": "Karnataka"
      }
    }
  ]
};
stores.features.forEach(function (store, i) {
  store.properties.id = i;
})
map.on('load', () => {
  /* Add the data to your map as a layer */
  map.addLayer({
    id: 'locations',
    type: 'circle',
    /* Add a GeoJSON source containing place coordinates and information. */
    source: {
      type: 'geojson',
      data: stores
    }
  });
  buildLocationList(stores);
});
map.on('click', (event) => {
  /* Determine if a feature in the "locations" layer exists at that point. */
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['locations']
  });

  /* If it does not exist, return */
  if (!features.length) return;

  const clickedPoint = features[0];

  /* Fly to the point */
  flyToStore(clickedPoint);

  /* Close all other popups and display popup for clicked store */
  createPopUp(clickedPoint);

  /* Highlight listing in sidebar (and remove highlight for all other listings) */
  const activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  }
  const listing = document.getElementById(
    `listing-${clickedPoint.properties.id}`
  );
  listing.classList.add('active');
});
function buildLocationList(stores) {
  for (const store of stores.features) {
    /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = `listing-${store.properties.id}`;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = `link-${store.properties.id}`;
    link.innerHTML = `${store.properties.address}`;

    /* Add details to the individual listing. */
    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `${store.properties.city}`;
    if (store.properties.phone) {
      details.innerHTML += ` · ${store.properties.phoneFormatted}`;
    }
    if (store.properties.distance) {
      const roundedDistance = Math.round(store.properties.distance * 100) / 100;
      details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
    }
	link.addEventListener('click', function () {
  for (const feature of stores.features) {
    if (this.id === `link-${feature.properties.id}`) {
      flyToStore(feature);
      createPopUp(feature);
    }
  }
  const activeItem = document.getElementsByClassName('active');
  if (activeItem[0]) {
    activeItem[0].classList.remove('active');
  }
  this.parentNode.classList.add('active');
});
  }
}
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 20
  });
}

function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();

  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(`<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`)
    .addTo(map);
}