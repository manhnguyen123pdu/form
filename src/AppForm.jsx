import AppFormDTO from './AppFormDTO'
import React from 'react'
import { useFormik } from 'formik'

const AppForm = () => {
  const { errors, values, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: 'camnh',
      email: 'nguyenhuucam91@gmail.com',
      car: 'Merc',
      password: '',
      sport: '',
      badmintonChkbox: ''
    },
    validationSchema: AppFormDTO,
    // validate: (values) => {
    //   const errors = {}
    //   if (!values.username) {
    //     errors.username = "Username ko được để trống"
    //   }

    //   if (!values.password) {
    //     errors.password = "Password ko được để trống"
    //   }

    //   return errors;
    // },
    onSubmit: (values) => {
      console.log(values)
    },
    // validateOnChange: false,
    // validateOnBlur: false
  })

  // const [username, setUsername] = React.useState('camnh')

  return (
    <>
      <h1>Formik</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
          {errors.username && touched.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label>Password</label>
          <input type="password" name='password' onChange={handleChange} onBlur={handleBlur} />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label>Email</label>
          <input type="email" name='email' value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Car</label>
          <select name="car" onChange={handleChange} value={values.car}>
            <option>-- Select your car --</option>
            <option value="Merc">Merc</option>
            <option value="BWM">BWM</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        {/* Radio */}
        <div>
          <input type="radio" name='sport' value="badminton" onChange={handleChange} />Badminton
          <input type="radio" name='sport' value="football" onChange={handleChange} />Football
          <input type="radio" name='sport' value="voleyball" onChange={handleChange} />Voleyball
        </div>

        {/* Checkbox */}
        <div>
          <input type="checkbox" name='badmintonChkbox' value='badminton' onChange={handleChange} />Badminton
          <input type="checkbox" name='badmintonChkbox' value='football' onChange={handleChange} />Football
          <input type="checkbox" name='badmintonChkbox' value='voleyball' onChange={handleChange} />Voleyball
        </div>

        {/* File upload */}
        <div>
          <input type="file" name="fileUpload" />
        </div>

        <button>Submit</button>
      </form>
    </>
  )
}

export default AppForm