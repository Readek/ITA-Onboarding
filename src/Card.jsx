export function Card({ title, desc, bgCol, img}) {
    
    return(
        <div className="" style={{backgroundColor: bgCol}}>
            <div>{title}</div>
            <div>{desc}</div>
            <img src={img} alt="Card's image" />
        </div>
    )

}

export default Card