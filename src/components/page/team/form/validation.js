export default function validateInfo(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.username = ' Username required ';
    }
    // Email
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = ' Email address is invalid ';
    }
    if (!values.department.trim()) {
        errors.department = ' Please enter department name';
    }
    if (!values.contact) {
        errors.contact = 'Contact number required ';
    } else if (values.contact != 10) {
        errors.contact = ' Please enter a valid contact number';
    }
}
