import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import avatar from "../img/avatars/FEMALE-STAY.gif";
import celebrate from "../img/avatars/female selected.png";
import logo from '../img/invitation/logo.jpeg'

import axios from "axios";

function AddEventForm(props) {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [Type, setType] = useState("");
    const [Description, setDescription] = useState("");
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const [Ubication, setUbication] = useState("");
    const [Food, setFood] = useState([""]);
    const [Music, setMusic] = useState([""]);
    const [Photos, setPhotos] = useState([""]);
    const [Decoration, setDecoration] = useState([""]);
    const [Status, setStatus] = useState([]);
    const [Services, setServices] = useState([]);
    const [event_love, setEvent_love] = useState("");
    const [eventOnOff, seteventOnOff] = useState(false);

    //errors
    const [errorRegistro, setErrorRegistro] = useState({});

    //agree services
    const [Agree, setAgree] = useState(false);

    //select type

    const Events = ["Cumpleaños", "Matrimonio", "Primera Comunión", "Quinceañero", "Graduación"]


    const NewEvent = e => {
        console.log("arriba");
        e.preventDefault();


        let data = {
            title,
            Type,
            Description,
            Date,
            Time,
            Ubication,
            Food: [Services.Food, Status[0]],
            Music: [Services.Music, Status[1]],
            Photos: [Services.Photos, Status[2]],
            Decoration: [Services.Decoration, Status[3]]
        }

        console.log(data);

        axios.post('http://127.0.0.1:8000/api/event/create', data, { withCredentials: true })
            .then(res => {
                // setTitle("");
                // setType("");
                // setDescription("");
                // setDate("");
                // setTime("");
                // setUbication("");
                // setFood([""]);
                // setMusic([""]);
                // setDecoration([""]);
                // setPhotos([""]);


                console.log("guardé");


                navigate('/dashboard')

            })
            .catch(err => {
                // console.log(err.response.data.errors);
                setErrorRegistro(err.response.data.errors)
            });
    }


    const message = () => {
        if (Type) {
            seteventOnOff(true);
        }


    }


    const action = () => {
        if (Type) {
            var image = document.getElementById('avatar')
            image.src = celebrate;
            setEvent_love(Type);
            message();
        }

    }

    // const initial = () => {

    //     var image = document.getElementById('avatar')
    //     image.src = playerrev;


    // }


    // const AgreeServices = () => {

    //     console.log("holi");
    //     if (Agree) {
    //         setAgree(false);
    //     } else {
    //         setAgree(true);
    //     }

    // }

    const OptionsChange = ({ target }) => {
        if (target == null) {
            target = ""
        }
        setServices({

            ...Services,
            [target.id]: target.value
        });
        console.log(Services);
    }

    const StatusChange = ({ target }) => {
        console.log(target);

        setStatus([target.id === "status1", target.id === "status2", target.id === "status3", target.id === "status4"]);

    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="bar" to={'/dashboard'}>Calendario</Link>
                            </li>
                        </ul>
                    </div>
                    <img src={logo} alt='logo' className='logonav'></img>
                </div>
            </nav>
            <h1>Registra un nuevo Evento </h1>

            <div className="row  align-items-center ">
                <div className="my-3  col-8 p">
                    <form
                        onSubmit={NewEvent}
                    >

                        <div className="form-group">
                            <label htmlFor="Name">Nombre de tu evento</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                value={title} onChange={e => setTitle(e.target.value)}
                            />
                            {errorRegistro.title ? <span className="text-danger">{errorRegistro.title.message}</span> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="Type">Selecciona el tipo de evento</label>

                            <select type="text" name="Type" id="Type" className="form-control"
                                value={Type} onChange={e => setType(e.target.value)}
                                onClick={action}
                            >
                                <option value="" hidden>Selecciona una categoria</option>
                                {Events.map(element =>
                                    <option   >{element}</option>


                                )}

                            </select>
                            {errorRegistro.Type ? <span className="text-danger">{errorRegistro.Type.message}</span> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="Description">Descripción</label>
                            <textarea className="form-control" id="Description" name="Description" rows="3" cols="33" placeholder="Agrega una breve Descripción..."
                                value={Description} onChange={e => setDescription(e.target.value)}
                            ></textarea>
                            {errorRegistro.Description ? <span className="text-danger">{errorRegistro.Description.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="Date">Fecha</label>
                            <input
                                type="date"
                                name="Date"
                                id="Date"
                                className="form-control"
                                value={Date} onChange={e => setDate(e.target.value)}
                            />
                            {errorRegistro.Date ? <span className="text-danger">{errorRegistro.Date.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="Time">Hora</label>
                            <input
                                type="time"
                                name="Time"
                                id="Time"
                                className="form-control"
                                value={Time} onChange={e => setTime(e.target.value)}
                            />
                            {errorRegistro.Time ? <span className="text-danger">{errorRegistro.Time.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="Ubication">Ubicación</label>
                            <input
                                type="Ubication"
                                name="Ubication"
                                id="Ubication"
                                className="form-control"
                                value={Ubication} onChange={e => setUbication(e.target.value)}
                            />
                            {errorRegistro.Ubication ? <span className="text-danger">{errorRegistro.Ubication.message}</span> : null}
                        </div>

                        {/* {Agree ?
                        <> */}

                        <div className="form-group ">

                            <label htmlFor="Food">Comida</label>
                            <div className="d-flex">
                                <input type="Food" name="Food" id="Food" className="form-control"
                                    value={Services[0]} onChange={OptionsChange} />
                                <input className=" m-3" id="status1" type="checkbox" name="status"
                                    value={Status[0]} onChange={StatusChange}
                                />
                            </div>

                        </div>

                        <div className="form-group ">

                            <label htmlFor="Music">Musicos</label>
                            <div className="d-flex">
                                <input type="Music" name="Music" id="Music" className="form-control"
                                    value={Services[1]} onChange={OptionsChange} />
                                <input className=" m-3" id="status1" type="checkbox" name="status"
                                    value={Status[1]} onChange={StatusChange}
                                />
                            </div>

                        </div>

                        <div className="form-group ">

                            <label htmlFor="Photos">Fotografo</label>
                            <div className="d-flex">
                                <input type="Photos" name="Photos" id="Photos" className="form-control"
                                    value={Services[2]} onChange={OptionsChange} />
                                <input className=" m-3" id="status1" type="checkbox" name="status"
                                    value={Status[2]} onChange={StatusChange}
                                />
                            </div>
                        </div>

                        <div className="form-group ">

                            <label htmlFor="Decoration">Decoración</label>
                            <div className="d-flex">
                                <input type="Decoration" name="Decoration" id="Decoration" className="form-control"
                                    value={Services[3]} onChange={OptionsChange} />
                                <input className=" m-3" id="status1" type="checkbox" name="status"
                                    value={Status[3]} onChange={StatusChange}
                                />
                            </div>
                        </div>

                        {/* </>
                        : null} */}


                        <input type="submit" value="Guardar" className="btn btn2" />
                    </form>

                    <div className="form-group">
                        {/* <button className="btn btn-success  my-2" onClick={AgreeServices}>{Agree ? "Quitar Servicios" : "Agregar Servicios"}</button> */}
                    </div>
                </div>

                <div className="col-4">
                    {eventOnOff ? <h2> Amo la celebración de {event_love} </h2> : null}

                    <img src={avatar} width="300px" alt="asistente" id="avatar" />

                </div>
            </div>
        </div>
    );
}

export default AddEventForm;
