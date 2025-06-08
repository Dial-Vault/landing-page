import { useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../../firebase/firebaseConfig'; // adjust the path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FooterNewsLetter = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubscribe = async (event) => {
        event.preventDefault();

        if (!isChecked) {
            setShowError(true);
            return;
        }

        setShowError(false);
        const form = event.target;
        const email = form.email.value;

        try {
            await addDoc(collection(db, "newsletter_subscribers"), {
                email: email,
                subscribedAt: serverTimestamp()
            });
            toast.success("Subscribed Successfully!");
            form.reset();
            setIsChecked(false);
        } catch (error) {
            toast.error("Subscription failed. Try again.");
            console.error("Error subscribing:", error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubscribe}>
                <input
                    type="email"
                    placeholder="Your Email"
                    className="form-control"
                    name="email"
                    autoComplete='off'
                    required
                />
                <button type="submit"><i className="fa fa-paper-plane" /></button>
            </form>

            <fieldset>
                <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={isChecked}
                    onChange={(e) => {
                        setIsChecked(e.target.checked);
                        setShowError(false);
                    }}
                />
                <label htmlFor="privacy">I agree to the Privacy Policy</label>
            </fieldset>
            {showError && <p style={{ color: "red", fontSize: "14px" }}>You must check this to submit.</p>}
        </>
    );
};

export default FooterNewsLetter;
