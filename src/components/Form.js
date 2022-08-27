import Form from "@rjsf/antd";
import { useState, useEffect } from "react";


const SchemaForm = () => {
    const [schema, setSchema] = useState({});

    useEffect(() => {
        const requestOptions = {
            method: 'get',
        };
        fetch("http://127.0.0.1:8000/tasks/3/schema", requestOptions)
            .then(response => response.json())
            .then(data => setSchema(data));
    }, []);
    
    return (<Form schema={schema}/>);
};

export default SchemaForm
