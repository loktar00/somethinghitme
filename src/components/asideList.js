import React from "react"

const AsideList = ({title, links}) => {

    return (
        <aside className='aside-list'>
            <h3>{title}</h3>
            <ol>
                {
                    links && links.map(el => <li key={el.title}><a href={el.url}>{el.title}</a></li>)
                }
            </ol>
        </aside>
    )
}

export default AsideList
