export default function TarjetaPelicula({ titulo, año, vista }) {
  return (
    <div className="tarjeta-pelicula">
      <h3>
        {titulo} {vista && '✓'}
      </h3>
      <p>Año: {año}</p>
    </div>
  );
}