import './Content.css'

function Content({ number, title, title1 }) {
    return (
        <>
            <div className='violet'>
                <div className="container">
                    <div className="number">

                        {number}
                    </div>
                    <div className="cont">

                        <p>{title}</p>
                        <p>{title1}</p>

                    </div>
                </div>


            </div>


        </>
    )

}
export default Content