import * as Yup from 'yup'

Yup.setLocale({
  mixed: {
    required: 'Truong {field} khong de trong',
  },
  string: {
    email: "Truong nay bat buoc phai la email"
  }
})

const AppFormDTO = Yup.object().shape({
  username: Yup.string().required().min(4).max(10),
  password: Yup.string().required(),
  email: Yup.string().required().email()
})

export default AppFormDTO