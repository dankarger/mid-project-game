import './Button.css'


export default function Button({ name,callback,icon,className,disabled }) {

    return(
        <>
            <button className={className} onClick={callback} disabled={!!disabled}> {name}  <span>{icon}</span></button>
        </>
    )
}