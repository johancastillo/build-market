import './Navigation.css'

const Navigation = () => {
  return (
    <header className="header">
			<div className="contenedor-logo">
				<button id="boton-menu" className="boton-menu"><i className="fas fa-bars"></i></button>
				<a href="#" className="logo"><i className="fas fa-play"></i> <span>FalconMasters</span></a>
			</div>

			<div className="barra-busqueda">
				<input type="text" placeholder="Buscar" />
				<button type="submit"><i className="fas fa-search"></i></button>
			</div>

			<div className="botones-header">
				<button><i className="fas fa-upload"></i></button>
				<button><i className="fas fa-th"></i></button>
				<button><i className="fas fa-bell"></i></button>
				<a href="#" className="avatar">
          <img src="img/avatar.jpg" alt="" />
        </a>
			</div>
		</header>
  )
}

export default Navigation
