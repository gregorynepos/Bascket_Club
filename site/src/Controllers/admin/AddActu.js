import React from "react";
import { useState } from "react";

const AddActu = () => {
    const [title, setTitle] = useState("");
    const [descriptions, setDescriptions] = useState("");
    const [date, setDate] = useState("");
    const [images_articles, setImages] = useState("");
    const [alt_articles, setAlt] = useState("");
    const [message, setMessage] = useState("");


    // permet de reprendre les objets en événement comme argument
    const handleChange = (e) => {
        console.log("handleChange", e.target.id, e.target.value);
        e.preventDefault();
        // le switch est basée sur l’id qui cible de l’objet événement
        switch (e.target.id) {
            case "title":
                setTitle(e.target.value);
                break;
            case "descriptions":
                setDescriptions(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "images_articles":
                setImages(e.target.value);
                break;
            case "alt_articles":
                setAlt(e.target.value);
                break;
            default:
        }
    };

    const submit = () => {
        // permet recuperer les propriétés correspondant aux variables d’état
        console.log("submit", title, descriptions, date, images_articles, alt_articles);

        let datas = {
            title: title,
            descriptions: descriptions,
            date: date,
            images_articles: images_articles,
            alt_articles: alt_articles,
        };
        let req = new Request("/AddActu ", {
            method: "POST",
            body: JSON.stringify(datas),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        fetch(req)
            .then((response) => response.json())
            .then((response) => {
                console.log("response", response);
                if (response.message === "") {
                    setTitle("");
                    setDescriptions("");
                    setDate("");
                    setImages("");
                    setAlt("");
                } else {
                    setMessage(response.message);
                }
            });
    };

    return (
        <>
            <section>
                <h2>Ajouter l'actualité </h2>
                {message !== "" && <p>{message}</p>}
                <form id="add" encType="multipart/form-data">
                    <div className="field">
                        <label htmlFor="title">titre de l'article</label>
                        <div className="value">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={title}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="descriptions">Description</label>
                        <div className="value">
                            <textarea
                                id="descriptions"
                                name="descriptions"
                                value={descriptions}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="alt_articles">Alt_article</label>
                        <div className="value">
                            <textarea
                                id="alt_articles"
                                name="alt_articles"
                                value={alt_articles}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="images_articles">Image</label>
                        <div className="value">
                            <textarea id="images_articles"
                                name="images_articles"
                                value={images_articles}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="date">Date</label>
                        <div className="value">
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" id="submit" onClick={submit} className="value">
                            Ajouter
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default AddActu;
