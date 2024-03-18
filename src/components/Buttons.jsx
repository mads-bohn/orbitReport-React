import satData from "./satData";



const Buttons = ({ filterByType, setSat, displaySats }) => {
  	
{displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
return (
    <div>
      <button>Placeholder Button</button>
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;