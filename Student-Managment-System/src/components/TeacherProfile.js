import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import axios from "axios"
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        margin: theme.spacing(5, 0),
    },

}));

export default function TeacherProfile() {
    const classes = useStyles();
    const [edit, setEdit] = useState(true)
    const history = useHistory();
    const location = useLocation();
    const id = location.state.id
    const [teacherInformation, setTeacherInformation] = useState(
        {
            name: "",
            email: "",
            role: "",
            education: "",
            country: "",
            city: ""
        })
    console.log("yes here is id", id)
    const GetTeacherInformation = (e) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMxODY3NTU0LCJleHAiOjE2MzE5NTM5NTR9.9fuLVoFzAMlGfdwl9X-xpfT2yxqgOFrRp-aWjvWLhSA"
        const headers = {
            "Content-Type": "application/json",
            authorization: `${token}`
        }
        axios.get(`http://localhost:3501/api/teacher/information/${id}`, {
            headers: headers
        })
            .then((response) => {
                setTeacherInformation({ role: response.data.information.User.Role.name, email: response.data.information.User.email, name: response.data.information.User.name, education: response.data.information.education, country: response.data.information.country, city: response.data.information.city })
                console.log("yes here is response", response)
            })
            .catch((e) =>
                console.log(e)
            );
    }

    useEffect(() => {

        GetTeacherInformation();
    }, []);
    return (
        <Grid container component="main" className={classes.root}>
            <div className="container">

                <div className="main-body">
                    <h2>Teacher Information</h2>

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                        <div className="mt-3">
                                            <h4>{teacherInformation.name}</h4>
                                            <p className="text-secondary mb-1">{teacherInformation.email}</p>
                                            <p className="text-muted font-size-sm">{teacherInformation.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {edit ? <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {teacherInformation.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Education</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {teacherInformation.education}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {teacherInformation.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Country</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {teacherInformation.country}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">City</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {teacherInformation.city}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                onClick={() => setEdit(false)}
                                            >
                                                Edit
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            : <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" defaultValue="Ravi Shankar" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Education</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" defaultValue="Master" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Country</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" defaultValue="Pakistan" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">City</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" defaultValue="Karachi" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-3" />
                                            <div className="col-sm-9 text-secondary">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                    className="mr-3"
                                                    onClick={() => setEdit(true)}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                // onClick={() => setEdit(false)}
                                                >
                                                    Save Changes
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>


        </Grid >
    );
}