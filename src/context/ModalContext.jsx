import React, { createContext, useEffect, useState} from 'react'
import axios from 'axios'

// Crear context
export const ModalContext = createContext();

const   ModalProvider = (props) => {

    // State del provider para guardar el id al que el usuario da click
    const [ idreceta, guardarIdReceta ] = useState(null);


    return ( 
        <ModalContext.Provider
            value={
                {
                    guardarIdReceta
                }
            }
        >
            {props.children}
        </ModalContext.Provider>
    )
}

