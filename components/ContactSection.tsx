import Button from "./Button";
import ContactItem from "./ContactItem";
import Field from "./Field";
import SectionParagraf from "./SectionParagraf";
import SectionTitle from "./SectionTitle";

export default function ContactSection() {
  return (
    <section className="container mx-auto" id="contact">
      <div className="bg-skill flex rounded-lg">
        <div className="w-6/12 border-r border-gray-200 ">
          <div className="px-20 py-16">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraf left>
              Beberapa cara menghubungi saya.{" "}
            </SectionParagraf>
            <ContactItem
              icon="/mail.svg"
              label="Mail"
              value="taufikhdyt@gmail.com"
              className="mt-10"
            />
            <ContactItem
              icon="/phone.svg"
              label="Phone"
              value="083871940605"
              className="mt-10"
            />
            <ContactItem
              icon="/twitter.svg"
              label="Twitter"
              value="@taufikhdyt"
              className="mt-10"
            />
          </div>
        </div>
        <div className="w-6/12">
          <form className="py-16 px-20 ">
            <div className="flex -mx-4">
              <div className="w-6/12 px-4">
                <Field name="Name" label="Name" />
              </div>
              <div className="w-6/12 px-4">
                <Field name="Email" label="Email" />
              </div>
            </div>
            <Field name="Subject" label="Subject" />
            <Field name="Message" label="Message" type />
            <div className="justify-end flex">
              <Button
                className="bg-black text-white rounded-none"
                variant="yellow"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
