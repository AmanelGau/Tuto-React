import React from 'react'

const Square: React.FC<{value: string, onClick: () => void}> = ({value, onClick}) => {

    return (
        <button 
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square
