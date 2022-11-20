import axios from 'axios';
import { Form, Header, Input } from 'semantic-ui-react';
import { useFormik, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';

import './Register.scss'

import { SERVER_URL } from '../../constants'
import { registerValidationSchema } from 'schema/validationSchema';

type District = {
    id: number,
    text: string,
    value: string,
};

// data for demo
const options: Array<District> = [
    { id: 1, text: 'Quận 1', value: 'district-1' },
    { id: 2, text: 'Quận 2', value: 'district-2' },
    { id: 3, text: 'Quận 3', value: 'district-3' },
    { id: 4, text: 'Quận 4', value: 'district-4' },
    { id: 5, text: 'Quận 5', value: 'district-5' }
];

const Register = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            location: '',
        },
        validationSchema: registerValidationSchema,
        onSubmit: values => {
            handleSubmit(values);
        }
    });

    const handleSubmit = async (values) => {
        let res = await axios.post(`${SERVER_URL}/users/add`, {
            username: values.username,
            password: values.password,
            location: values.location,
            description: ''
        });
        navigate('/login');
    }

    const handleDropdownChange = (e, data) => {
        formik.setFieldValue('location', data.value);
    }

    const checkPasswordsMatch = () => {
        const { password, confirmPassword } = formik.values;
        return password === confirmPassword ? null : "Password is not match";
    }

    return <div className="form-container">
        <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} id="form-register" action="post">
                <Header className="form-header" as="h1" textAlign="center">Đăng ký tài khoản</Header>
                <div className="form-body">
                    <Form.Input label="Username" required className="form-control" type="text" id="username" defaultValue={formik.values.username} onChange={formik.handleChange} />
                    <Form.Group grouped>
                        <Form.Input label="Email" defaultValue={formik.values.email} onChange={formik.handleChange} required className="form-control" type="email" id="email" />
                        <span>Email sử dụng trong trường hợp bạn quên mật khẩu</span>
                    </Form.Group>
                    <Form.Input label="Password" defaultValue={formik.values.password} required className="form-control" type="password" id="password" onChange={formik.handleChange} />
                    <Form.Input label="Nhập lại mật khẩu" defaultValue={formik.values.confirmPassword} onChange={formik.handleChange} error={checkPasswordsMatch()} required className="form-control" type="password" id="confirmPassword" />
                    <Form.Dropdown onChange={handleDropdownChange} label="Địa chỉ" className="form-control" id="district-list" placeholder="Chọn quận/huyện" selection options={options} />
                    <Form.Button className="form-control btn-submit" type="submit">Đăng ký</Form.Button>
                </div>
            </Form>
        </FormikProvider>
    </div>
}

export default Register;