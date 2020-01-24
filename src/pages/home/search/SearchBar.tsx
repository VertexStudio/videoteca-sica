import React, { Component } from "react";


class SearchBar extends Component<{},{}> {

    handleSubmit  = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("YIKES!");
    }
    
    render(){
        return(
            <div id="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input type="search" placeholder="Busca por etiquetas, ej: Agua, Fuego, Tierra, Mar" />
                    <button type="submit">icono</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;