import './Header.scss'

function Header({ title }) {
    return(
        <section className='header'>
            <h1 className='header__title'>{ title }</h1>
        </section>
    )
}

export default Header;