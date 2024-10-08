export function Card({ title, desc, bgCol, img, clickEv }) {
    
    return(
        <div className="" style={{backgroundColor: bgCol}}>
            <div>{title}</div>
            <div>{desc}</div>
            <img src={img} alt="Card's image" />
            <button onClick={clickEv}>Next</button>
        </div>
    )

}

export default Card