
export const response = (res: any, message: String, err: any, status: Number) => {
    res.status(status).send({
        message: message,
        error: err,
        status: false
    });

}

export const errorHandle = (err: any) => {
    if (err) {
        if (err.errors && err.name == 'ValidationError') {
            let errors = Object.values(err.errors).map((el: any) => el.message);
            if (errors.length > 1) {
                const formattedErrors = errors.join(' ');
                return formattedErrors
            }
            else {
                return errors[0];
            }
        }
    }
}
