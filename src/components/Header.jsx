// function Header() → nombre del componente 
// (siempre con MAYÚSCULA)
// return (...) → lo que se muestra
// export default → permite usarlo en otro archivo

function Header({ title }) {
  return (
    <header style={{ padding: "20px 40px" }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;