import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

const OrderForm = (props) => {

    const { register, errors, handleSubmit, watch } = useForm({
        criteriaMode: "all",
        mode: "onChange"
    });

    const numDeliver_freq = watch("deliver_freq", props.deliver_freq);

    function onFormSubmit(data) {
        //e.preventDefault();
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="firstname">Voornaam:
                    <ErrorMessage
                        errors={errors}
                        name="firstname"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                : null;}}
                    />
                </label>  <br />

                <input
                    type="text"
                    placeholder=""
                    name="firstname"
                    ref={register({
                        required: 'Verplicht veld',
                        minLength: {
                            value: 2,
                            message: 'Je dient minimaal 2 tekens te gebruiken',
                        },
                    })}

                />


                <label htmlFor="lastname">Achternaam:
                    <ErrorMessage
                        errors={errors}
                        name="lastname"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                : null;}}
                    />

                </label>  <br />

                <input
                    type="text"
                    placeholder=""
                    name="lastname"
                    ref={register({
                        required: 'Verplicht veld',
                    })}

                />


                <label htmlFor="age">Leeftijd:
                    <ErrorMessage
                        errors={errors}
                        name="age"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                : null;}}
                    />
                </label><br />

                <input
                    type="text"
                    placeholder=""
                    name="age"
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                        min: {
                            value: 18,
                            message: 'Je dient minimaal 18 jaar oud te zijn',
                        },
                        pattern: {
                            value:  /^[1-9][0-9]?$|^100$/i,
                            message: "Ongeldige leeftijd, controleer de input",
                        },

                    })}
                />


                <label htmlFor="postalcode">Postcode:

                    <ErrorMessage
                        errors={errors}
                        name="postalcode"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                : null;}}
                    />
                </label><br />

                <input
                    type="text"
                    placeholder=""
                    name="postalcode"
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                        pattern: {
                            value:  /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i,
                            message: "Ongeldige postcode, controleer de input",
                        },

                    })}
                />

                <label htmlFor="number">Huisnummer:
                    <ErrorMessage
                        errors={errors}
                        name="number"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                : null;}}
                    />
                </label><br />

                <input
                    type="text"
                    placeholder=""
                    name="number"
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                    })}
                />

                <label htmlFor="deliver_freq">Bezorg frequentie:
                    <ErrorMessage
                        errors={errors}
                        name="deliver_freq"
                        render={({ messages }) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <span className='error-message' key={type}>{message}</span>
                                ))
                                : null;}}
                    />
                </label><br />

                <input
                    type="radio"
                    name="deliver_freq"
                    value={0}
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                    })}
                     />Elke week<br />

                <input
                    type="radio"
                    name="deliver_freq"
                    value={1}
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                    })}
                    />Om de week<br />

                <input
                    type="radio"
                    name="deliver_freq"
                    value={2}
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                    })}
                     />Elke maand<br />

                <input
                    type="radio"
                    name="deliver_freq"
                    value={3}
                    ref={register({
                        required: {
                            value: true,
                            message: "Verplicht veld",
                        },
                    })}
                     />Anders:<br />


                {numDeliver_freq === "3" && (
                    <div>
                        <p>Vertel:
                            <ErrorMessage
                                errors={errors}
                                name="deliver_freq_other"
                                render={({ messages }) => {
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <span className='error-message' key={type}>{message}</span>
                                        ))
                                        : null;}}
                            />
                        </p>
                        <input
                            name="deliver_freq_other"
                            type="text"
                            placeholder=""
                            ref={register({
                                required: {
                                    value: true,
                                    message: "Verplicht veld",
                                },
                            })}
                            />
                    </div>
                )}

                <label htmlFor="review">Opmerkingen:</label><br />

                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    ref={register}
                />
                <br /><br />

                <ErrorMessage
                    errors={errors}
                    name="conditions"
                    render={({ messages }) => {
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <span className='error-message' key={type}>{message}</span>
                            ))
                            : null;}}
                /><br />

                <input
                    type="checkbox"
                    name="conditions"
                    placeholder=""
                    ref={register({
                        required: {
                            value: true,
                            message: "Je dient akkoord te gaan met de voorwaarden",
                        },
                    })}
                /> Ik ga akkoord met de voorwaarden

                <input type="submit" value="Versturen" />
            </fieldset>
        </form>
    )
}

export default OrderForm;