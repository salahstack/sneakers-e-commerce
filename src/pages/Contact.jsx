/**
 * Components
 */
import TextField from "../components/TextField";

const Contact = () => {
  return (
    <section>
      <h1 className="text-center mb-8 text-3xl font-medium">Contact me</h1>
      <div className="container mx-auto px-4 md:px-6">
        <form className="w-full max-w-[450px] mx-auto grid grid-cols-1 gap-4">
          <TextField name="name" label="Full name" placeholder="Full name" />
          <TextField name="email" label="Email" placeholder="Email" />
          <div>
            <label className="mb-3 inline-block" htmlFor="message">Message</label>
            <textarea
              name="message"
              className="min-h-28 resize-none"
            ></textarea>
          </div>
          <button className="btn grid place-content-center bg-primary text-onPrimary px-3 h-10 rounded-lg" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
