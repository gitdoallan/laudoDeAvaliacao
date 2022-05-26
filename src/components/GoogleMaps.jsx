export default function GoogleMaps() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Maps"
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Laudo%20de%20Avalia%C3%A7%C3%A3o%20-%20SHCS%20CR%20516,%20Bloco%20B%2069%20-%201%C2%BA%20pav%20-%20Asa%20Sul,%20Bras%C3%ADlia%20-%20DF,%2070381-525,%20Brazil&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  );
}
