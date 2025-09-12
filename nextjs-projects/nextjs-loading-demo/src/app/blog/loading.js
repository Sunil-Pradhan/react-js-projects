export default function Loading() {
  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {[1, 2, 3].map(i => (
          <li key={i}>
            <div style={{ height: '20px', width: '200px', backgroundColor: '#ddd', margin: '10px 0' }}></div>
            <div style={{ height: '15px', width: '300px', backgroundColor: '#eee', margin: '5px 0' }}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
