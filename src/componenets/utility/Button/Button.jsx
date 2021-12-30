import './Button.css'


export default function Button({ name,callback,icon,className }) {

    return(
        <>
            <button className={className} onClick={callback}> {name} <span>{icon}</span></button>
        </>
    )
}