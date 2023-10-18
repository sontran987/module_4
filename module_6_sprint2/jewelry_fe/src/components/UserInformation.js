import Header from "./Header";
import "../css/information.css"

export default function UserInformation() {

    return (
        <>
            <Header/>
            <div className="body">
                <div className="containers">
                    <div className="text text-uppercase">
                        User information
                    </div>
                    <form action="#">
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required/>
                                <div className="underline"></div>
                                <label htmlFor="">Name user</label>
                            </div>
                            <div className="input-data">
                                <input type="text" required/>
                                <div className="underline"></div>
                                <label htmlFor="">Phone number</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required/>
                                <div className="underline"></div>
                                <label htmlFor="">Id card</label>
                            </div>
                            <div className="input-data">
                                <input type="text" required/>
                                <div className="underline"></div>
                                <label htmlFor="">Address</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required/>
                                <div className="underline"></div>
                                <label htmlFor="">Birthday</label>
                            </div>
                            <div className="choose-gender">
                                <label htmlFor="">Gender</label>
                                <br/>
                                <input className="ms-5 mt-2 me-1" type="radio" name="genderOption"  required/>
                                <span>Male</span>
                                <input className="ms-4 me-1" type="radio" name="genderOption"  required/>
                                <span>Female</span>
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="textarea">
                                <div className="form-row submit-btn">
                                    <div className="input-data">
                                        <div className="inner"></div>
                                        <input type="submit" value="submit"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}