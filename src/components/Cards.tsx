import { PropsWithChildren } from "react";

type CardsProps = PropsWithChildren <{
    img: string
}>;

type CardsBodyProps = {
    title: string,
    text: string,
    link: string,
}

export function CardsBody (props: CardsBodyProps) {
    return (
        <div className="card-body"  style={{width: "18rem"}}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href={props.link} className="btn btn-primary">Go somewhere</a>
        </div>
    )
}

export function Cards ({...props}: CardsProps) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..." />
            {props.children}
        </div>
    )
}

// -------------------------  Работает  --------------------------------------------------------------

// type CardsProps = {
//     title: string,
//     text: string,
//     link: string,
//     img?: string
// };

// export const Cards = ({...props}: CardsProps) => {
//     return (
//         <div className="card" style={{width: "18rem"}}>
//             { (props.img) && <img src={props.img} className="card-img-top" alt="..." />}
//             <div className="card-body">
//                 <h5 className="card-title">{props.title}</h5>
//                 <p className="card-text">{props.text}</p>
//                 <a href={props.link} className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     )
// }

// ---------------------------------------------------------------------------------------
