function Form(props) {
    return (
        <>
            <div className="label">
                <form>
                    <label> {props.name}  </label> <br />
                    <input type={props.text} placeholder={props.hold} />
                </form>

            </div>
        </>
    )
} export default Form