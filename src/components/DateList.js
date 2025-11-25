export default function DateList({ items, selected }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Saved Dates</h2>

      {items.length === 0 && <p>No dates saved yet.</p>}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#f3f3f3",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <p>
            <strong>{item.name}</strong> & <strong>{item.partner}</strong>
          </p>
          <p>Date: {item.date}</p>

         
        </div>
      ))}

      
    </div>
  );
}
