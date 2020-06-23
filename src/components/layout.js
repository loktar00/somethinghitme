import React from "react"
import { Link } from "gatsby"
import AsideList from './asideList';

const Layout = ({ location, title, description, social, projects, children }) => {
    return (
        <div className='layout'>
            <header className='header'>
                <h1>
                    <Link to={`/`}>
                        {title}
                    </Link>
                </h1>
                <h2>{description}</h2>
            </header>
            <main className='main'>
                <div className='primary'>
                    {children}
                </div>
                <div className='secondary'>
                    <AsideList title='Find Me' links={social}/>
                    <AsideList title='Projects' links={projects}/>
                </div>
            </main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    )
}

export default Layout
