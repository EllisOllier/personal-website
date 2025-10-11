export default function ContactForm() {
    return (
        <div>
            <h2 className="text-6xl">Contact</h2>
            <form>
                <label>Name</label>
                <input type="text"></input>

                <label>Email</label>
                <input type="text"></input>

                <label>Message</label>
                <input type="text"></input>
                
                <input type="submit" value={"Submit"} className="text-xl bg-green-500 w-full p-2 text-center rounded-sm"></input>
            </form>
        </div>
    );
}
