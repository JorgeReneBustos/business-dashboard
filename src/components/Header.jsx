// function Header() → nombre del componente 
// (siempre con MAYÚSCULA)
// return (...) → lo que se muestra
// export default → permite usarlo en otro archivo

function Header({ title }) {
  return (
    <header style={{ 
      padding: "clamp(12px, 3vw, 20px) clamp(16px, 4vw, 40px)",
      textAlign: "center"
    }}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;