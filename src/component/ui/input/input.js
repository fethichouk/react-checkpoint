import React from 'react'
import { InputGroup, FormControl } from "react-bootstrap"
function CustomInput() {
    const tab = ["Username", "E-mail", "Password"]
    return (
        <div>
            {tab.map(ele =>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-address-card"></i></InputGroup.Text>

                    <FormControl
                        placeholder={ele}
                        aria-label={ele}
                        aria-describedby="basic-addon1"
                    />


                </InputGroup>
            )}
        </div>
    )
}

export default CustomInput