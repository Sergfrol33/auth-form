import * as yup from 'yup'


const validEmail = (value:string | undefined) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value as string)
}
const schema = yup.object({
    email: yup.string().required('Заполните поле').test('valid','Неккоректный email',validEmail),
    password: yup.string().required('Заполните поле').min(6,'Минимальная длина 6 символов')
})

export default schema

