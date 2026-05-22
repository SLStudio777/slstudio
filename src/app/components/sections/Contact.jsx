export default function Contact() {
    return (
        <section className="contact-section" id="contact">
        <div className="contact-left">
            <div className="section-header" style={{marginBottom: "24px"}}>
            <span className="section-num">05</span>
            <h2>LET'S WORK</h2>
            </div>
            <p>Send me your track — no matter how rough. Tell me what you're going for, and I'll tell you what I can do with it. First conversation is always free.</p>
        </div>
        <div className="contact-form">
            <div className="form-row">
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Smith" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@email.com" />
            </div>
            </div>
            <div className="form-group">
            <label>What do you need?</label>
            <select>
                <option value="">Select a service...</option>
                <option>Mixing & Mastering</option>
                <option>Arrangement & Production</option>
                <option>Sound Enhancement</option>
                <option>Not sure yet</option>
            </select>
            </div>
            <div className="form-group">
            <label>Tell me about your project</label>
            <textarea placeholder="Genre, what you have recorded, what you're going for..."></textarea>
            </div>
            <button className="btn-send">Send Message →</button>
        </div>
        </section>
    )
}