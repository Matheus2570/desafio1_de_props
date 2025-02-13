import './AsidePROPS.css'

function AsidePROPS (props) {
    return  <aside className='Container'>
    <h2>{props.titulo}</h2>
    <ul>
    <li>{props.valor1}</li>
    <li>{props.valor2}</li>
    <li>{props.valor3}</li>
    </ul>
    </aside>
    
    }

export default AsidePROPS